import { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Maximize2, 
  Settings, 
  MoreVertical, 
  Search, 
  Bell, 
  Filter,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Flag,
  Eye,
  Clock,
  User,
  Shield,
  LayoutGrid,
  List,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';

interface Video {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  duration: string;
  status: 'pending' | 'approved' | 'rejected' | 'flagged';
  views: string;
  time: string;
  reason?: string;
}

const VIDEOS: Video[] = [
  { id: '1', title: 'Vibrant City Life in 4K', author: 'Alex Rivera', thumbnail: 'https://picsum.photos/seed/city/800/450', duration: '12:45', status: 'pending', views: '1.2k', time: '2 mins ago' },
  { id: '2', title: 'Mountain Hiking Adventure', author: 'Sarah Chen', thumbnail: 'https://picsum.photos/seed/mountain/800/450', duration: '08:20', status: 'flagged', views: '450', time: '15 mins ago', reason: 'Potential Copyright' },
  { id: '3', title: 'Cooking the Perfect Steak', author: 'Mike Ross', thumbnail: 'https://picsum.photos/seed/food/800/450', duration: '15:10', status: 'pending', views: '2.8k', time: '1 hour ago' },
  { id: '4', title: 'Tech Review: New Laptop', author: 'Emma Watson', thumbnail: 'https://picsum.photos/seed/tech/800/450', duration: '10:30', status: 'approved', views: '5.4k', time: '3 hours ago' },
];

export function AdminVideoModeration() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-screen w-screen flex bg-[#0a0a0a] text-zinc-400 overflow-hidden font-sans">
      {/* Sidebar: Queue */}
      <aside className="w-80 border-r border-zinc-800 flex flex-col shrink-0 bg-[#0f0f0f]">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-[#0a0a0a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Mod Queue</h2>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Filter className="h-4 w-4" /></Button>
        </div>

        <div className="p-4 border-b border-zinc-800 bg-[#0a0a0a]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              placeholder="Search queue..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:ring-1 focus:ring-rose-500 outline-none"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {VIDEOS.map(video => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className={`w-full text-left p-3 rounded-xl transition-all group border border-transparent ${selectedVideo?.id === video.id ? 'bg-rose-600/10 border-rose-500/20' : 'hover:bg-zinc-800'}`}
              >
                <div className="flex gap-3">
                  <div className="relative w-24 h-14 rounded-lg overflow-hidden bg-zinc-900 shrink-0">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-1 right-1 px-1 bg-black/80 rounded text-[8px] font-bold text-white">{video.duration}</div>
                    {video.status === 'flagged' && <div className="absolute top-1 left-1 p-0.5 bg-rose-600 rounded-full shadow-lg shadow-rose-500/50"><Flag className="h-2 w-2 text-white" /></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xs font-bold truncate ${selectedVideo?.id === video.id ? 'text-white' : 'text-zinc-300'}`}>{video.title}</h3>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{video.author}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-widest ${
                        video.status === 'flagged' ? 'bg-rose-500/10 text-rose-500' : 
                        video.status === 'approved' ? 'bg-emerald-500/10 text-emerald-500' : 
                        'bg-zinc-800 text-zinc-500'
                      }`}>
                        {video.status}
                      </div>
                      <span className="text-[8px] text-zinc-600">{video.time}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content: Player & Moderation */}
      <main className="flex-1 flex flex-col bg-[#0a0a0a]">
        <AnimatePresence mode="wait">
          {selectedVideo ? (
            <motion.div 
              key={selectedVideo.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col"
            >
              {/* Video Player Section */}
              <div className="flex-1 bg-black flex flex-col relative group">
                <div className="flex-1 flex items-center justify-center relative">
                  <img src={selectedVideo.thumbnail} alt={selectedVideo.title} className="max-w-full max-h-full object-contain opacity-80" referrerPolicy="no-referrer" />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute w-20 h-20 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 hover:scale-110 transition-all"
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                  </Button>
                </div>

                {/* Player Controls */}
                <div className="h-16 bg-gradient-to-t from-black to-transparent flex flex-col px-6 pb-4 opacity-0 group-hover:opacity-100 transition-all">
                  <Progress value={35} className="h-1 bg-white/20 mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10"><SkipBack className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10"><SkipForward className="h-4 w-4" /></Button>
                      <div className="flex items-center gap-2 ml-2">
                        <Volume2 className="h-4 w-4 text-white" />
                        <Progress value={80} className="w-20 h-1 bg-white/20" />
                      </div>
                      <span className="text-[10px] font-bold text-white ml-4 tracking-widest">04:20 / {selectedVideo.duration}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10"><Settings className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10"><Maximize2 className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moderation Controls */}
              <div className="h-80 border-t border-zinc-800 bg-[#0f0f0f] flex">
                <div className="flex-1 p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight">{selectedVideo.title}</h2>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">{selectedVideo.author[0]}</div>
                          <span className="text-xs font-bold text-zinc-300">{selectedVideo.author}</span>
                        </div>
                        <div className="h-4 w-[1px] bg-zinc-800" />
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <Eye className="h-3.5 w-3.5" />
                          {selectedVideo.views} views
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <Clock className="h-3.5 w-3.5" />
                          {selectedVideo.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><ThumbsUp className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><MessageSquare className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><Share2 className="h-4 w-4" /></Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-4">
                      <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Moderation Action</h3>
                      <div className="flex gap-3">
                        <Button className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 shadow-lg shadow-emerald-500/20">
                          <CheckCircle2 className="h-5 w-5" />
                          Approve Video
                        </Button>
                        <Button variant="outline" className="flex-1 h-12 rounded-xl border-rose-500/30 text-rose-500 hover:bg-rose-500/10 font-bold gap-2">
                          <XCircle className="h-5 w-5" />
                          Reject / Remove
                        </Button>
                        <Button variant="outline" className="h-12 w-12 rounded-xl border-zinc-800 hover:bg-zinc-800">
                          <Flag className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Reasoning</h3>
                      <select className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:ring-1 focus:ring-rose-500 outline-none appearance-none">
                        <option>No violation found</option>
                        <option>Copyright infringement</option>
                        <option>Inappropriate content</option>
                        <option>Spam / Misleading</option>
                        <option>Low quality / Technical issue</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-80 border-l border-zinc-800 p-8 space-y-6 bg-[#0a0a0a]">
                  <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">AI Analysis</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold">
                        <span className="text-zinc-400">Visual Safety</span>
                        <span className="text-emerald-500">98% Safe</span>
                      </div>
                      <Progress value={98} className="h-1 bg-emerald-500/20" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold">
                        <span className="text-zinc-400">Audio Content</span>
                        <span className="text-emerald-500">100% Safe</span>
                      </div>
                      <Progress value={100} className="h-1 bg-emerald-500/20" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold">
                        <span className="text-zinc-400">Copyright Risk</span>
                        <span className="text-amber-500">Medium Risk</span>
                      </div>
                      <Progress value={45} className="h-1 bg-amber-500/20" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                      <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">AI Flag</span>
                    </div>
                    <p className="text-[11px] text-amber-400/80 leading-relaxed">
                      Detected background music that may be copyrighted. Manual review of audio track recommended.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                <Play className="h-8 w-8 text-zinc-700" />
              </div>
              <h3 className="text-lg font-bold text-white">Select a Video</h3>
              <p className="text-sm text-zinc-500 max-w-xs mt-2">
                Choose a video from the moderation queue to review and take action.
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
