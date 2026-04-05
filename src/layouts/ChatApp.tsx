import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Hash, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  MessageSquare, 
  Mic, 
  Headphones, 
  User,
  Gift,
  Sticker,
  Smile,
  PlusCircle,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export function ChatApp() {
  return (
    <div className="h-screen w-screen flex bg-[#313338] text-[#dbdee1] overflow-hidden font-sans">
      {/* Server List */}
      <aside className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 gap-2 shrink-0">
        <div className="w-12 h-12 bg-[#5865f2] rounded-2xl flex items-center justify-center text-white cursor-pointer hover:rounded-xl transition-all">
          <MessageSquare className="h-7 w-7" />
        </div>
        <Separator className="w-8 bg-zinc-700 h-[2px] my-1" />
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="w-12 h-12 bg-[#313338] rounded-[24px] flex items-center justify-center cursor-pointer hover:rounded-xl hover:bg-[#5865f2] hover:text-white transition-all group">
            <span className="font-bold opacity-60 group-hover:opacity-100">S{i}</span>
          </div>
        ))}
        <div className="w-12 h-12 bg-[#313338] rounded-[24px] flex items-center justify-center text-[#23a559] cursor-pointer hover:rounded-xl hover:bg-[#23a559] hover:text-white transition-all">
          <Plus className="h-6 w-6" />
        </div>
      </aside>

      {/* Channel List */}
      <aside className="w-60 bg-[#2b2d31] flex flex-col shrink-0">
        <header className="h-12 border-b border-black/20 flex items-center px-4 shadow-sm hover:bg-white/5 cursor-pointer transition-colors">
          <h2 className="font-bold text-white truncate">Nebula Community</h2>
        </header>
        <ScrollArea className="flex-1 px-2 py-3">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between px-2 mb-1 group">
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 cursor-pointer">Text Channels</span>
                <Plus className="h-3 w-3 opacity-60 cursor-pointer" />
              </div>
              <div className="space-y-0.5">
                {['general', 'announcements', 'showcase', 'help'].map(ch => (
                  <div key={ch} className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer group ${ch === 'general' ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}>
                    <Hash className="h-5 w-5 opacity-40" />
                    <span className="font-medium opacity-60 group-hover:opacity-100">{ch}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between px-2 mb-1 group">
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 cursor-pointer">Voice Channels</span>
                <Plus className="h-3 w-3 opacity-60 cursor-pointer" />
              </div>
              <div className="space-y-0.5">
                {['Lounge', 'Gaming', 'Music'].map(ch => (
                  <div key={ch} className="flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer group hover:bg-white/5">
                    <Headphones className="h-5 w-5 opacity-40" />
                    <span className="font-medium opacity-60 group-hover:opacity-100">{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="h-14 bg-[#232428] flex items-center px-2 gap-2">
          <div className="relative group">
            <div className="w-8 h-8 rounded-full bg-zinc-600" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#23a559] rounded-full border-2 border-[#232428]" />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-xs font-bold text-white truncate">Faizan Ahmed</span>
            <span className="text-[10px] opacity-60 truncate">#1337</span>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10"><Mic className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10"><Headphones className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10"><Settings className="h-4 w-4" /></Button>
          </div>
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col bg-[#313338]">
        <header className="h-12 border-b border-black/20 flex items-center px-4 shadow-sm gap-4">
          <Hash className="h-6 w-6 opacity-40" />
          <h2 className="font-bold text-white">general</h2>
          <Separator orientation="vertical" className="h-6 bg-zinc-700" />
          <span className="text-xs opacity-60">The main channel for everything.</span>
          <div className="ml-auto flex items-center gap-4">
            <Bell className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer" />
            <Users className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer" />
            <div className="relative">
              <Input className="h-6 w-36 bg-[#1e1f22] border-none text-xs" placeholder="Search" />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 opacity-40" />
            </div>
          </div>
        </header>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            {[
              { user: 'Vercel', time: 'Today at 10:24 AM', msg: 'NebulaOS is looking great! 🚀' },
              { user: 'Tailwind', time: 'Today at 10:25 AM', msg: 'Love the utility-first approach here.' },
              { user: 'Faizan Ahmed', time: 'Today at 10:26 AM', msg: 'Thanks! Just working on the chat layout now.' },
            ].map((m, i) => (
              <div key={i} className="flex gap-4 hover:bg-black/5 -mx-4 px-4 py-1 group">
                <div className="w-10 h-10 rounded-full bg-zinc-600 shrink-0 mt-1" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white hover:underline cursor-pointer">{m.user}</span>
                    <span className="text-[10px] opacity-60">{m.time}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{m.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="px-4 pb-6">
          <div className="bg-[#383a40] rounded-lg flex items-center px-4 py-2 gap-4">
            <PlusCircle className="h-6 w-6 opacity-60 hover:opacity-100 cursor-pointer" />
            <input 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-[#949ba4]"
              placeholder="Message #general"
            />
            <div className="flex items-center gap-3 opacity-60">
              <Gift className="h-6 w-6 hover:opacity-100 cursor-pointer" />
              <Sticker className="h-6 w-6 hover:opacity-100 cursor-pointer" />
              <Smile className="h-6 w-6 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
