/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { OSProvider, useOS } from '@/OSContext';
import { UIProvider, useUI } from '@/UIContext';
import { Desktop } from '@/Desktop';
import { ResizableIDE } from '@/layouts/ResizableIDE';
import { MillerColumns } from '@/layouts/MillerColumns';
import { AdminDashboard } from '@/layouts/AdminDashboard';
import { KanbanBoard } from '@/layouts/KanbanBoard';
import { SocialFeed } from '@/layouts/SocialFeed';
import { BentoGrid } from '@/layouts/BentoGrid';
import { Documentation } from '@/layouts/Documentation';
import { ChatApp } from '@/layouts/ChatApp';
import { Ecommerce } from '@/layouts/Ecommerce';
import { VideoStreaming } from '@/layouts/VideoStreaming';
import { MusicPlayer } from '@/layouts/MusicPlayer';
import { EmailClient } from '@/layouts/EmailClient';
import { ProjectManagement } from '@/layouts/ProjectManagement';
import { AnalyticsDashboard } from '@/layouts/AnalyticsDashboard';
import { CalendarApp } from '@/layouts/CalendarApp';
import { FileStorage } from '@/layouts/FileStorage';
import { LearningManagement } from '@/layouts/LearningManagement';
import { SearchResults } from '@/layouts/SearchResults';
import { BookingPlatform } from '@/layouts/BookingPlatform';
import { AdminFinderUI } from '@/layouts/AdminFinderUI';
import { AdminTeacherDashboard } from '@/layouts/AdminTeacherDashboard';
import { LayoutSwitcher } from '@/components/LayoutSwitcher';
import { TooltipProvider } from '@/components/ui/tooltip';

function OSWrapper() {
  const { theme } = useOS();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return <Desktop />;
}

function LayoutManager() {
  const { currentLayout } = useUI();

  const renderLayout = () => {
    switch (currentLayout) {
      case 'nebula-os':
        return <OSWrapper />;
      case 'resizable-ide':
        return <ResizableIDE />;
      case 'miller-columns':
        return <MillerColumns />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'kanban-board':
        return <KanbanBoard />;
      case 'social-feed':
        return <SocialFeed />;
      case 'bento-grid':
        return <BentoGrid />;
      case 'documentation':
        return <Documentation />;
      case 'chat-app':
        return <ChatApp />;
      case 'ecommerce':
        return <Ecommerce />;
      case 'video-streaming':
        return <VideoStreaming />;
      case 'music-player':
        return <MusicPlayer />;
      case 'email-client':
        return <EmailClient />;
      case 'project-management':
        return <ProjectManagement />;
      case 'analytics-dashboard':
        return <AnalyticsDashboard />;
      case 'calendar-app':
        return <CalendarApp />;
      case 'file-storage':
        return <FileStorage />;
      case 'learning-management':
        return <LearningManagement />;
      case 'search-results':
        return <SearchResults />;
      case 'booking-platform':
        return <BookingPlatform />;
      case 'admin-finder-ui':
        return <AdminFinderUI />;
      case 'admin-teacher-dashboard':
        return <AdminTeacherDashboard />;
      default:
        return <OSWrapper />;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {renderLayout()}
      <LayoutSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <UIProvider>
      <OSProvider>
        <TooltipProvider>
          <LayoutManager />
        </TooltipProvider>
      </OSProvider>
    </UIProvider>
  );
}

