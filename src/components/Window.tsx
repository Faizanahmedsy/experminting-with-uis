import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import { useOS } from '@/OSContext';
import { WindowState } from '@/types';
import { cn } from '@/lib/utils';

interface WindowProps {
  window: WindowState;
  children: React.ReactNode;
}

export function Window({ window, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition, activeWindowId } = useOS();

  if (window.isMinimized) return null;

  const isActive = activeWindowId === window.id;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        x: window.isMaximized ? 0 : window.position.x,
        y: window.isMaximized ? 0 : window.position.y,
        width: window.isMaximized ? '100%' : window.size.width,
        height: window.isMaximized ? 'calc(100% - 48px)' : window.size.height,
      }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      drag={!window.isMaximized}
      dragMomentum={false}
      onDragEnd={(_, info) => {
        updateWindowPosition(window.id, window.position.x + info.offset.x, window.position.y + info.offset.y);
      }}
      onPointerDown={() => focusWindow(window.id)}
      style={{ zIndex: window.zIndex }}
      className={cn(
        "absolute flex flex-col overflow-hidden rounded-lg border bg-background/80 backdrop-blur-xl shadow-2xl transition-shadow",
        isActive ? "shadow-primary/20 ring-1 ring-primary/20" : "shadow-black/20",
        window.isMaximized ? "rounded-none" : ""
      )}
    >
      {/* Title Bar */}
      <div 
        className="flex h-10 items-center justify-between border-b bg-muted/50 px-4 select-none cursor-default"
        onDoubleClick={() => maximizeWindow(window.id)}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{window.title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={(e) => { e.stopPropagation(); minimizeWindow(window.id); }}
            className="p-1.5 hover:bg-muted rounded-md transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); maximizeWindow(window.id); }}
            className="p-1.5 hover:bg-muted rounded-md transition-colors"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); closeWindow(window.id); }}
            className="p-1.5 hover:bg-destructive hover:text-destructive-foreground rounded-md transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </motion.div>
  );
}
