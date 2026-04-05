import { useState, useEffect } from 'react';
import { useOS } from '@/OSContext';
import { 
  Monitor, 
  Terminal as TerminalIcon, 
  FileText, 
  MessageSquare, 
  Settings as SettingsIcon,
  Search,
  Power,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Taskbar() {
  const { windows, openApp, focusWindow, activeWindowId, minimizeWindow } = useOS();
  const [time, setTime] = useState(new Date());
  const [isStartOpen, setIsStartOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { id: 'terminal', title: 'Terminal', icon: TerminalIcon, color: 'bg-zinc-800' },
    { id: 'notepad', title: 'Notepad', icon: FileText, color: 'bg-blue-500' },
    { id: 'gemini', title: 'Gemini AI', icon: MessageSquare, color: 'bg-purple-500' },
    { id: 'settings', title: 'Settings', icon: SettingsIcon, color: 'bg-zinc-500' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-background/60 backdrop-blur-2xl border-t flex items-center px-2 gap-2 z-[9999]">
      {/* Start Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className={cn("hover:bg-primary/10", isStartOpen && "bg-primary/10")}
        onClick={() => setIsStartOpen(!isStartOpen)}
      >
        <Monitor className="h-5 w-5 text-primary" />
      </Button>

      <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Pinned Apps */}
      <div className="flex items-center gap-1">
        {apps.map((app) => {
          const isOpen = windows.some(w => w.appId === app.id);
          const isActive = windows.find(w => w.appId === app.id)?.id === activeWindowId;
          
          return (
            <div key={app.id} className="relative group">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-10 w-10 transition-all",
                  isActive && "bg-primary/10 border-b-2 border-primary rounded-none"
                )}
                onClick={() => {
                  const win = windows.find(w => w.appId === app.id);
                  if (win) {
                    if (isActive) minimizeWindow(win.id);
                    else focusWindow(win.id);
                  } else {
                    openApp(app.id as any, app.title);
                  }
                }}
              >
                <app.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground")} />
              </Button>
              {isOpen && !isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-muted-foreground rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex-1" />

      {/* System Tray */}
      <div className="flex items-center gap-4 px-3 text-xs font-medium text-muted-foreground">
        <div className="flex flex-col items-end">
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span>{time.toLocaleDateString([], { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Start Menu */}
      <AnimatePresence>
        {isStartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[-1]"
              onClick={() => setIsStartOpen(false)}
            />
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              className="absolute bottom-14 left-2 w-80 bg-background/90 backdrop-blur-2xl border rounded-xl shadow-2xl overflow-hidden p-4 flex flex-col gap-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  className="w-full bg-muted/50 border rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Search apps, files, settings..."
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {apps.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => {
                      openApp(app.id as any, app.title);
                      setIsStartOpen(false);
                    }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className={cn("p-2 rounded-xl transition-transform group-hover:scale-110", app.color)}>
                      <app.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[10px] text-center font-medium">{app.title}</span>
                  </button>
                ))}
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Guest User</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Power className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
