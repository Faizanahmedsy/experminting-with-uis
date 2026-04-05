import { 
  Home, 
  Search, 
  Library, 
  Plus, 
  Heart, 
  Play, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Shuffle, 
  Volume2, 
  Mic2, 
  ListMusic, 
  MonitorSpeaker,
  Maximize2,
  MoreHorizontal,
  Clock,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Slider } from '@/components/ui/slider';

export function MusicPlayer() {
  return (
    <div className="h-screen w-screen flex flex-col bg-black text-zinc-400 overflow-hidden font-sans">
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex flex-col p-2 gap-2 bg-black">
          <div className="bg-[#121212] rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-4 text-white font-bold cursor-pointer hover:text-white transition-colors">
              <Home className="h-6 w-6" />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-4 font-bold cursor-pointer hover:text-white transition-colors">
              <Search className="h-6 w-6" />
              <span>Search</span>
            </div>
          </div>

          <div className="flex-1 bg-[#121212] rounded-lg flex flex-col overflow-hidden">
            <div className="p-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2 font-bold hover:text-white transition-colors cursor-pointer">
                <Library className="h-6 w-6" />
                <span>Your Library</span>
              </div>
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 hover:text-white cursor-pointer" />
                <SkipForward className="h-5 w-5 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <ScrollArea className="flex-1 px-2">
              <div className="space-y-2 py-2">
                {[
                  { title: 'Liked Songs', type: 'Playlist · 124 songs', icon: Heart, color: 'bg-gradient-to-br from-indigo-700 to-blue-400' },
                  { title: 'Nebula Mix', type: 'Playlist · Nebula', color: 'bg-zinc-800' },
                  { title: 'Deep Focus', type: 'Playlist · Spotify', color: 'bg-zinc-800' },
                  { title: 'Coding Beats', type: 'Playlist · Faizan', color: 'bg-zinc-800' },
                  { title: 'Late Night Jazz', type: 'Playlist · Jazz Master', color: 'bg-zinc-800' },
                  { title: 'Rock Classics', type: 'Playlist · Rocker', color: 'bg-zinc-800' },
                  { title: 'Lo-fi Hip Hop', type: 'Playlist · Lofi Girl', color: 'bg-zinc-800' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer group">
                    <div className={`w-12 h-12 rounded flex items-center justify-center shrink-0 ${item.color}`}>
                      {item.icon ? <item.icon className="h-6 w-6 text-white fill-white" /> : <div className="w-full h-full bg-zinc-700" />}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-white font-medium truncate">{item.title}</span>
                      <span className="text-xs truncate">{item.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-b from-indigo-900/40 to-[#121212] overflow-y-auto p-6 relative">
          <header className="h-16 flex items-center justify-between sticky top-0 z-10 -mx-6 px-6 bg-transparent">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full bg-black/40"><SkipBack className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-black/40"><SkipForward className="h-4 w-4" /></Button>
            </div>
            <div className="flex items-center gap-2">
              <Button className="rounded-full bg-white text-black font-bold hover:scale-105 transition-transform px-4 h-8 text-sm">Explore Premium</Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-black/40"><Bell className="h-4 w-4" /></Button>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs">FA</div>
            </div>
          </header>

          <div className="flex items-end gap-6 mt-6 mb-8">
            <div className="w-52 h-52 shadow-2xl shadow-black/50 bg-gradient-to-br from-indigo-700 to-blue-400 flex items-center justify-center rounded-md">
              <Heart className="h-24 w-24 text-white fill-white" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-white uppercase">Playlist</span>
              <h1 className="text-8xl font-black text-white tracking-tighter">Liked Songs</h1>
              <div className="flex items-center gap-1 text-sm font-bold text-white mt-4">
                <span>Faizan Ahmed</span>
                <span className="text-zinc-400">· 124 songs, 7 hr 45 min</span>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md -mx-6 px-6 py-4 flex items-center gap-8">
            <Button className="w-14 h-14 rounded-full bg-[#1ed760] hover:bg-[#1fdf64] hover:scale-105 transition-all flex items-center justify-center p-0 shadow-lg">
              <Play className="h-7 w-7 text-black fill-black ml-1" />
            </Button>
            <Heart className="h-8 w-8 text-[#1ed760] fill-[#1ed760] cursor-pointer" />
            <SkipForward className="h-8 w-8 hover:text-white transition-colors cursor-pointer" />
            <MoreHorizontal className="h-8 w-8 hover:text-white transition-colors cursor-pointer" />
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-[48px_1fr_1fr_48px] px-4 py-2 text-sm font-medium border-b border-white/10 mb-4">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <Clock className="h-4 w-4" />
            </div>
            {[
              { title: 'Nebula Dreams', artist: 'Faizan Ahmed', album: 'Nebula OS', duration: '3:45' },
              { title: 'Code in the Dark', artist: 'The Developers', album: 'Stack Overflow', duration: '4:12' },
              { title: 'React Hooks', artist: 'Dan Abramov', album: 'Functional Components', duration: '2:58' },
              { title: 'Tailwind Breeze', artist: 'Adam Wathan', album: 'Utility First', duration: '5:20' },
              { title: 'Vite Speed', artist: 'Evan You', album: 'Build Tools', duration: '1:45' },
              { title: 'Async Await', artist: 'JS Master', album: 'Promises', duration: '3:12' },
              { title: 'Flexbox Hero', artist: 'CSS Wizard', album: 'Layouts', duration: '4:05' },
            ].map((song, i) => (
              <div key={i} className="grid grid-cols-[48px_1fr_1fr_48px] px-4 py-2 items-center hover:bg-white/10 rounded-md group transition-colors cursor-pointer">
                <span className="text-zinc-500 group-hover:hidden">{i + 1}</span>
                <Play className="h-3 w-3 text-white fill-white hidden group-hover:block" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">{song.title}</span>
                  <span className="text-xs">{song.artist}</span>
                </div>
                <span className="text-sm">{song.album}</span>
                <span className="text-sm">{song.duration}</span>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Player Bar */}
      <footer className="h-24 bg-black border-t border-white/5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4 w-[30%]">
          <div className="w-14 h-14 bg-zinc-800 rounded overflow-hidden">
            <img 
              src="https://picsum.photos/seed/music/100/100" 
              alt="Album Art" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-white text-sm font-medium hover:underline cursor-pointer truncate">Nebula Dreams</span>
            <span className="text-[11px] hover:underline cursor-pointer truncate">Faizan Ahmed</span>
          </div>
          <Heart className="h-4 w-4 text-[#1ed760] fill-[#1ed760] ml-2 cursor-pointer" />
        </div>

        <div className="flex flex-col items-center gap-2 w-[40%]">
          <div className="flex items-center gap-6">
            <Shuffle className="h-4 w-4 hover:text-white cursor-pointer" />
            <SkipBack className="h-5 w-5 text-white fill-white hover:text-white cursor-pointer" />
            <Button className="w-8 h-8 rounded-full bg-white hover:scale-105 transition-transform flex items-center justify-center p-0">
              <Play className="h-4 w-4 text-black fill-black ml-0.5" />
            </Button>
            <SkipForward className="h-5 w-5 text-white fill-white hover:text-white cursor-pointer" />
            <Repeat className="h-4 w-4 hover:text-white cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-[10px]">1:24</span>
            <div className="flex-1 h-1 bg-zinc-800 rounded-full relative group cursor-pointer">
              <div className="absolute inset-y-0 left-0 w-[35%] bg-white group-hover:bg-[#1ed760] rounded-full" />
              <div className="absolute top-1/2 left-[35%] -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-lg" />
            </div>
            <span className="text-[10px]">3:45</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 w-[30%]">
          <Mic2 className="h-4 w-4 hover:text-white cursor-pointer" />
          <ListMusic className="h-4 w-4 hover:text-white cursor-pointer" />
          <MonitorSpeaker className="h-4 w-4 hover:text-white cursor-pointer" />
          <div className="flex items-center gap-2 w-24">
            <Volume2 className="h-4 w-4 hover:text-white cursor-pointer" />
            <div className="flex-1 h-1 bg-zinc-800 rounded-full relative group cursor-pointer">
              <div className="absolute inset-y-0 left-0 w-[70%] bg-white group-hover:bg-[#1ed760] rounded-full" />
            </div>
          </div>
          <Maximize2 className="h-4 w-4 hover:text-white cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
