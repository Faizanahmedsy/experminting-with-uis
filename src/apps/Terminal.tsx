import { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Terminal() {
  const [history, setHistory] = useState<string[]>(['Welcome to NebulaOS Terminal v1.0.0', 'Type "help" for a list of commands.']);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `guest@nebulaos:~$ ${input}`];

    switch (cmd) {
      case 'help':
        newHistory.push('Available commands: help, clear, date, echo, whoami, version, ls');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'date':
        newHistory.push(new Date().toString());
        break;
      case 'whoami':
        newHistory.push('guest');
        break;
      case 'version':
        newHistory.push('NebulaOS v1.0.0-alpha');
        break;
      case 'ls':
        newHistory.push('Documents  Downloads  Pictures  Music  Videos');
        break;
      default:
        if (cmd.startsWith('echo ')) {
          newHistory.push(input.slice(5));
        } else {
          newHistory.push(`Command not found: ${cmd}`);
        }
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-black text-green-500 font-mono p-4 text-sm">
      <ScrollArea className="flex-1">
        <div className="space-y-1">
          {history.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">{line}</div>
          ))}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>
      <form onSubmit={handleCommand} className="flex gap-2 mt-2">
        <span className="text-blue-400">guest@nebulaos:~$</span>
        <input
          autoFocus
          className="flex-1 bg-transparent border-none outline-none text-green-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
