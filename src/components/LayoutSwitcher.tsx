import { useUI } from '@/UIContext';
import { ChevronLeft, ChevronRight, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LayoutSwitcher() {
  const { currentLayout, setLayout, nextLayout, prevLayout } = useUI();

  const layoutNames: Record<string, string> = {
    'nebula-os': 'Nebula OS (Desktop)',
    'resizable-ide': 'IDE (Resizable Panels)',
    'miller-columns': 'Miller Columns (Finder)',
    'admin-dashboard': 'Admin Dashboard',
    'kanban-board': 'Kanban Board (Trello)',
    'social-feed': 'Social Feed (Twitter)',
    'bento-grid': 'Bento Grid (Portfolio)',
    'documentation': 'Documentation (Starlight)',
    'chat-app': 'Chat App (Discord)',
    'ecommerce': 'E-commerce (Storefront)',
    'video-streaming': 'Video Streaming (YouTube)',
    'music-player': 'Music Player (Spotify)',
    'email-client': 'Email Client (Gmail)',
    'project-management': 'Project Management (Gantt)',
    'analytics-dashboard': 'Analytics (Chart-heavy)',
    'calendar-app': 'Calendar (Scheduling)',
    'file-storage': 'File Storage (Cloud Drive)',
    'learning-management': 'LMS (Courseware)',
    'search-results': 'Search Engine (Results)',
    'booking-platform': 'Booking (Travel)'
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-16 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-2 bg-background/80 backdrop-blur-xl border p-2 rounded-full shadow-2xl"
    >
      <Button variant="ghost" size="icon" onClick={prevLayout} className="rounded-full">
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer hover:bg-muted transition-colors min-w-[200px]">
            <Layout className="h-4 w-4" />
            <span className="text-sm font-medium">{layoutNames[currentLayout]}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-56">
          {Object.entries(layoutNames).map(([id, name]) => (
            <DropdownMenuItem 
              key={id} 
              onClick={() => setLayout(id as any)}
              className={currentLayout === id ? "bg-primary/10 text-primary" : ""}
            >
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" size="icon" onClick={nextLayout} className="rounded-full">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}
