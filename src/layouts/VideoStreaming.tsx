import { 
  Menu, 
  Search, 
  Video, 
  Bell, 
  User, 
  Home, 
  Compass, 
  PlaySquare, 
  Clock, 
  ThumbsUp, 
  MoreVertical,
  Share2,
  Download,
  Scissors
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

export function VideoStreaming() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#0f0f0f] text-white overflow-hidden font-sans">
      {/* Header */}
      <header className="h-14 flex items-center justify-between px-4 sticky top-0 bg-[#0f0f0f] z-50">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center">
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
            </div>
            <span className="font-bold text-xl tracking-tighter">NebulaTube</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl flex items-center gap-4 px-4">
          <div className="flex flex-1 items-center">
            <Input 
              placeholder="Search" 
              className="rounded-l-full bg-[#121212] border-zinc-800 focus-visible:ring-blue-500 h-10" 
            />
            <Button className="rounded-r-full bg-zinc-800 border-l-0 hover:bg-zinc-700 h-10 px-5">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800 hover:bg-zinc-700">
            <Video className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs ml-2">FA</div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-60 flex flex-col py-2 px-2 gap-1 overflow-y-auto">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Compass, label: 'Shorts' },
            { icon: PlaySquare, label: 'Subscriptions' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className={`justify-start gap-6 px-3 py-5 rounded-xl ${item.active ? 'bg-white/10 font-bold' : 'font-normal'}`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
          <hr className="my-2 border-white/10" />
          <div className="px-3 py-2 text-sm font-bold">You</div>
          {[
            { icon: User, label: 'Your channel' },
            { icon: Clock, label: 'History' },
            { icon: PlaySquare, label: 'Your videos' },
            { icon: Clock, label: 'Watch later' },
            { icon: ThumbsUp, label: 'Liked videos' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className="justify-start gap-6 px-3 py-5 rounded-xl font-normal"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Video Player Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/nebula/1280/720" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              <h1 className="text-xl font-bold">Building a Multi-Layout OS with React and Tailwind CSS</h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">FA</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Faizan Ahmed</span>
                    <span className="text-xs text-zinc-400">1.2M subscribers</span>
                  </div>
                  <Button className="rounded-full bg-white text-black hover:bg-zinc-200 ml-4 font-bold px-4 h-9">Subscribe</Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-zinc-800 rounded-full overflow-hidden">
                    <Button variant="ghost" className="rounded-none border-r border-white/10 h-9 gap-2 px-4 hover:bg-zinc-700">
                      <ThumbsUp className="h-4 w-4" /> 42K
                    </Button>
                    <Button variant="ghost" className="rounded-none h-9 px-4 hover:bg-zinc-700">
                      <ThumbsUp className="h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                  <Button variant="ghost" className="bg-zinc-800 rounded-full h-9 gap-2 px-4 hover:bg-zinc-700">
                    <Share2 className="h-4 w-4" /> Share
                  </Button>
                  <Button variant="ghost" className="bg-zinc-800 rounded-full h-9 gap-2 px-4 hover:bg-zinc-700">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-zinc-800 rounded-full h-9 w-9 hover:bg-zinc-700">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-xl p-3 text-sm space-y-1">
                <div className="font-bold">124K views  2 days ago</div>
                <p>This video covers the complete process of building a highly interactive, multi-layout operating system interface using modern web technologies...</p>
                <button className="font-bold mt-2">Show more</button>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex gap-2 group cursor-pointer">
                  <div className="w-40 aspect-video bg-zinc-800 rounded-lg overflow-hidden shrink-0">
                    <img 
                      src={`https://picsum.photos/seed/vid${i}/320/180`} 
                      alt="Thumbnail" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold line-clamp-2 leading-tight">Advanced React Patterns for 2026 - Part {i}</h3>
                    <div className="text-xs text-zinc-400">Nebula Devs</div>
                    <div className="text-xs text-zinc-400">45K views · {i} months ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
