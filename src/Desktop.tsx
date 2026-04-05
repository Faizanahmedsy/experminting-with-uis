import { useOS } from '@/OSContext';
import { Window } from '@/components/Window';
import { Taskbar } from '@/components/Taskbar';
import { Terminal } from '@/apps/Terminal';
import { Notepad } from '@/apps/Notepad';
import { Gemini } from '@/apps/Gemini';
import { Settings } from '@/apps/Settings';
import { Monitor, Terminal as TerminalIcon, FileText, MessageSquare, Settings as SettingsIcon } from 'lucide-react';
import { motion } from 'motion/react';

export function Desktop() {
  const { windows, wallpaper, openApp } = useOS();

  const desktopIcons = [
    { id: 'terminal', title: 'Terminal', icon: TerminalIcon, color: 'text-zinc-400' },
    { id: 'notepad', title: 'Notepad', icon: FileText, color: 'text-blue-400' },
    { id: 'gemini', title: 'Gemini AI', icon: MessageSquare, color: 'text-purple-400' },
    { id: 'settings', title: 'Settings', icon: SettingsIcon, color: 'text-zinc-400' },
  ];

  return (
    <div 
      className="relative h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat select-none"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* Desktop Icons */}
      <div className="grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-4 p-4 w-fit">
        {desktopIcons.map((icon) => (
          <motion.div
            key={icon.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onDoubleClick={() => openApp(icon.id as any, icon.title)}
            className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/10 cursor-pointer w-20"
          >
            <icon.icon className={`h-10 w-10 ${icon.color} drop-shadow-lg`} />
            <span className="text-xs font-medium text-white text-center drop-shadow-md">{icon.title}</span>
          </motion.div>
        ))}
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <Window key={window.id} window={window}>
          {window.appId === 'terminal' && <Terminal />}
          {window.appId === 'notepad' && <Notepad />}
          {window.appId === 'gemini' && <Gemini />}
          {window.appId === 'settings' && <Settings />}
        </Window>
      ))}

      <Taskbar />
    </div>
  );
}
