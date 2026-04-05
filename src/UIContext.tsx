import { createContext, useContext, useState, ReactNode } from 'react';
import { LayoutType } from './types';

interface UIContextType {
  currentLayout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  nextLayout: () => void;
  prevLayout: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

const LAYOUTS: LayoutType[] = [
  'nebula-os',
  'resizable-ide',
  'miller-columns',
  'admin-dashboard',
  'kanban-board',
  'social-feed',
  'bento-grid',
  'documentation',
  'chat-app',
  'ecommerce'
];

export function UIProvider({ children }: { children: ReactNode }) {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>('nebula-os');

  const setLayout = (layout: LayoutType) => setCurrentLayout(layout);

  const nextLayout = () => {
    const currentIndex = LAYOUTS.indexOf(currentLayout);
    const nextIndex = (currentIndex + 1) % LAYOUTS.length;
    setCurrentLayout(LAYOUTS[nextIndex]);
  };

  const prevLayout = () => {
    const currentIndex = LAYOUTS.indexOf(currentLayout);
    const prevIndex = (currentIndex - 1 + LAYOUTS.length) % LAYOUTS.length;
    setCurrentLayout(LAYOUTS[prevIndex]);
  };

  return (
    <UIContext.Provider value={{ currentLayout, setLayout, nextLayout, prevLayout }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within UIProvider');
  return context;
};
