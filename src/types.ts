export type LayoutType = 
  | 'nebula-os' 
  | 'resizable-ide' 
  | 'miller-columns' 
  | 'admin-dashboard' 
  | 'kanban-board' 
  | 'social-feed' 
  | 'bento-grid' 
  | 'documentation' 
  | 'chat-app' 
  | 'ecommerce'
  | 'video-streaming'
  | 'music-player'
  | 'email-client'
  | 'project-management'
  | 'analytics-dashboard'
  | 'calendar-app'
  | 'file-storage'
  | 'learning-management'
  | 'search-results'
  | 'booking-platform'
  | 'admin-finder-ui'
  | 'admin-teacher-dashboard';

export type Category = 'inspiration' | 'admin-implementation';

export type AppId = 'terminal' | 'notepad' | 'gemini' | 'settings' | 'explorer';

export interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface OSState {
  windows: WindowState[];
  activeWindowId: string | null;
  wallpaper: string;
  theme: 'light' | 'dark';
}
