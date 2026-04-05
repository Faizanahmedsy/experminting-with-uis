import { createContext, useContext, useState, ReactNode } from 'react';
import { LayoutType, Category } from './types';

interface UIContextType {
  currentLayout: LayoutType;
  currentCategory: Category;
  setLayout: (layout: LayoutType) => void;
  setCategory: (category: Category) => void;
  nextLayout: () => void;
  prevLayout: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

const INSPIRATION_LAYOUTS: LayoutType[] = [
  'nebula-os',
  'resizable-ide',
  'miller-columns',
  'admin-dashboard',
  'kanban-board',
  'social-feed',
  'bento-grid',
  'documentation',
  'chat-app',
  'ecommerce',
  'video-streaming',
  'music-player',
  'email-client',
  'project-management',
  'analytics-dashboard',
  'calendar-app',
  'file-storage',
  'learning-management',
  'search-results',
  'booking-platform'
];

const ADMIN_LAYOUTS: LayoutType[] = [
  'admin-finder-ui',
  'admin-teacher-dashboard'
];

export function UIProvider({ children }: { children: ReactNode }) {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>('nebula-os');
  const [currentCategory, setCurrentCategory] = useState<Category>('inspiration');

  const setLayout = (layout: LayoutType) => setCurrentLayout(layout);
  
  const setCategory = (category: Category) => {
    setCurrentCategory(category);
    // When switching category, set to the first layout of that category
    if (category === 'inspiration') {
      setCurrentLayout(INSPIRATION_LAYOUTS[0]);
    } else {
      setCurrentLayout(ADMIN_LAYOUTS[0]);
    }
  };

  const nextLayout = () => {
    const layouts = currentCategory === 'inspiration' ? INSPIRATION_LAYOUTS : ADMIN_LAYOUTS;
    const currentIndex = layouts.indexOf(currentLayout);
    const nextIndex = (currentIndex + 1) % layouts.length;
    setCurrentLayout(layouts[nextIndex]);
  };

  const prevLayout = () => {
    const layouts = currentCategory === 'inspiration' ? INSPIRATION_LAYOUTS : ADMIN_LAYOUTS;
    const currentIndex = layouts.indexOf(currentLayout);
    const prevIndex = (currentIndex - 1 + layouts.length) % layouts.length;
    setCurrentLayout(layouts[prevIndex]);
  };

  return (
    <UIContext.Provider value={{ currentLayout, currentCategory, setLayout, setCategory, nextLayout, prevLayout }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within UIProvider');
  return context;
};
