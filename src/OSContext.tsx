import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { WindowState, AppId, OSState } from '@/types';

interface OSContextType extends OSState {
  openApp: (appId: AppId, title: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void;
  setWallpaper: (url: string) => void;
  toggleTheme: () => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

const INITIAL_WALLPAPER = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070';

export function OSProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OSState>({
    windows: [],
    activeWindowId: null,
    wallpaper: INITIAL_WALLPAPER,
    theme: 'dark',
  });

  const focusWindow = useCallback((id: string) => {
    setState((prev) => {
      const maxZ = prev.windows.reduce((max, w) => Math.max(max, w.zIndex), 0);
      return {
        ...prev,
        activeWindowId: id,
        windows: prev.windows.map((w) =>
          w.id === id ? { ...w, zIndex: maxZ + 1, isMinimized: false } : w
        ),
      };
    });
  }, []);

  const openApp = useCallback((appId: AppId, title: string) => {
    setState((prev) => {
      const existing = prev.windows.find((w) => w.appId === appId);
      if (existing) {
        focusWindow(existing.id);
        return prev;
      }

      const id = Math.random().toString(36).substr(2, 9);
      const maxZ = prev.windows.reduce((max, w) => Math.max(max, w.zIndex), 0);
      
      const newWindow: WindowState = {
        id,
        appId,
        title,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: maxZ + 1,
        position: { x: 100 + prev.windows.length * 40, y: 100 + prev.windows.length * 40 },
        size: { width: 600, height: 400 },
      };

      return {
        ...prev,
        windows: [...prev.windows, newWindow],
        activeWindowId: id,
      };
    });
  }, [focusWindow]);

  const closeWindow = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.filter((w) => w.id !== id),
      activeWindowId: prev.activeWindowId === id ? null : prev.activeWindowId,
    }));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
      activeWindowId: prev.activeWindowId === id ? null : prev.activeWindowId,
    }));
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    }));
  }, []);

  const updateWindowPosition = useCallback((id: string, x: number, y: number) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id ? { ...w, position: { x, y } } : w
      ),
    }));
  }, []);

  const updateWindowSize = useCallback((id: string, width: number, height: number) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id ? { ...w, size: { width, height } } : w
      ),
    }));
  }, []);

  const setWallpaper = (url: string) => setState(prev => ({ ...prev, wallpaper: url }));
  const toggleTheme = () => setState(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));

  return (
    <OSContext.Provider value={{
      ...state,
      openApp,
      closeWindow,
      minimizeWindow,
      maximizeWindow,
      focusWindow,
      updateWindowPosition,
      updateWindowSize,
      setWallpaper,
      toggleTheme,
    }}>
      {children}
    </OSContext.Provider>
  );
}

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error('useOS must be used within OSProvider');
  return context;
};
