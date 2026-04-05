import { 
  Home, 
  Hash, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  MoreHorizontal,
  Image as ImageIcon,
  Smile,
  Calendar,
  MapPin,
  MessageCircle,
  Repeat2,
  Heart,
  Share,
  Search,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

const POSTS = [
  {
    id: '1',
    user: 'Faizan Ahmed',
    handle: '@saiyedfaizan',
    avatar: 'FA',
    content: 'Just finished building 10 different UI layouts for NebulaOS. Which one is your favorite? 🚀 #webdev #uiux #nebulaos',
    time: '2h',
    replies: 12,
    reposts: 5,
    likes: 42,
    views: '1.2K'
  },
  {
    id: '2',
    user: 'Google AI Studio',
    handle: '@GoogleAI',
    avatar: 'AI',
    content: 'The new Gemini 3 Flash model is now available! Experience lightning-fast reasoning and multimodal capabilities. ⚡️',
    time: '5h',
    replies: 89,
    reposts: 234,
    likes: '1.5K',
    views: '45K'
  },
  {
    id: '3',
    user: 'Vite',
    handle: '@vite_js',
    avatar: 'V',
    content: 'Vite 6 is here with even faster HMR and improved build performance. Check out the release notes!',
    time: '1d',
    replies: 45,
    reposts: 120,
    likes: 890,
    views: '22K'
  }
];

export function SocialFeed() {
  return (
    <div className="h-screen w-screen flex bg-background text-foreground overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex w-full">
        {/* Left Sidebar */}
        <aside className="w-72 flex flex-col py-4 px-4 gap-2 border-r">
          <div className="p-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full" />
          </div>
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Hash, label: 'Explore' },
            { icon: Bell, label: 'Notifications' },
            { icon: Mail, label: 'Messages' },
            { icon: Bookmark, label: 'Bookmarks' },
            { icon: User, label: 'Profile' },
            { icon: MoreHorizontal, label: 'More' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className={`justify-start gap-4 text-xl rounded-full px-4 py-6 ${item.active ? 'font-bold' : 'font-normal'}`}
            >
              <item.icon className="h-7 w-7" />
              {item.label}
            </Button>
          ))}
          <Button className="mt-4 rounded-full py-6 text-lg font-bold">Post</Button>
          
          <div className="mt-auto flex items-center gap-3 p-3 hover:bg-muted rounded-full cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold">FA</div>
            <div className="flex flex-col flex-1">
              <span className="font-bold text-sm">Faizan Ahmed</span>
              <span className="text-muted-foreground text-sm">@saiyedfaizan</span>
            </div>
            <MoreHorizontal className="h-4 w-4" />
          </div>
        </aside>

        {/* Main Feed */}
        <main className="flex-1 flex flex-col border-r max-w-2xl">
          <header className="h-14 border-b flex items-center px-4 bg-background/80 backdrop-blur-md sticky top-0 z-10">
            <h2 className="text-xl font-bold">Home</h2>
          </header>

          <ScrollArea className="flex-1">
            {/* Post Input */}
            <div className="p-4 flex gap-4 border-b">
              <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold shrink-0">FA</div>
              <div className="flex-1 space-y-4">
                <textarea 
                  className="w-full bg-transparent border-none focus:ring-0 text-xl resize-none placeholder:text-muted-foreground"
                  placeholder="What is happening?!"
                  rows={2}
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-primary">
                    <Button variant="ghost" size="icon" className="rounded-full"><ImageIcon className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full"><Smile className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full"><Calendar className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full"><MapPin className="h-5 w-5" /></Button>
                  </div>
                  <Button className="rounded-full px-6 font-bold opacity-50">Post</Button>
                </div>
              </div>
            </div>

            {/* Posts */}
            {POSTS.map(post => (
              <div key={post.id} className="p-4 flex gap-4 border-b hover:bg-muted/30 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold shrink-0">{post.avatar}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-1">
                    <span className="font-bold hover:underline">{post.user}</span>
                    <span className="text-muted-foreground text-sm">{post.handle}</span>
                    <span className="text-muted-foreground text-sm">· {post.time}</span>
                    <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 rounded-full"><MoreHorizontal className="h-4 w-4" /></Button>
                  </div>
                  <p className="text-[15px] leading-normal">{post.content}</p>
                  <div className="flex items-center justify-between text-muted-foreground max-w-md pt-2">
                    <div className="flex items-center gap-2 group hover:text-blue-500">
                      <div className="p-2 rounded-full group-hover:bg-blue-500/10"><MessageCircle className="h-4 w-4" /></div>
                      <span className="text-xs">{post.replies}</span>
                    </div>
                    <div className="flex items-center gap-2 group hover:text-green-500">
                      <div className="p-2 rounded-full group-hover:bg-green-500/10"><Repeat2 className="h-4 w-4" /></div>
                      <span className="text-xs">{post.reposts}</span>
                    </div>
                    <div className="flex items-center gap-2 group hover:text-pink-500">
                      <div className="p-2 rounded-full group-hover:bg-pink-500/10"><Heart className="h-4 w-4" /></div>
                      <span className="text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 group hover:text-blue-500">
                      <div className="p-2 rounded-full group-hover:bg-blue-500/10"><BarChart3 className="h-4 w-4" /></div>
                      <span className="text-xs">{post.views}</span>
                    </div>
                    <div className="flex items-center gap-2 group hover:text-blue-500">
                      <div className="p-2 rounded-full group-hover:bg-blue-500/10"><Share className="h-4 w-4" /></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </main>

        {/* Right Sidebar */}
        <aside className="w-96 flex flex-col py-4 px-8 gap-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="rounded-full bg-muted border-none pl-12 h-11" />
          </div>

          <div className="bg-muted/50 rounded-2xl p-4 space-y-4">
            <h3 className="text-xl font-bold px-2">What's happening</h3>
            {[
              { category: 'Technology · Trending', topic: '#NebulaOS', posts: '12.4K posts' },
              { category: 'Development · Trending', topic: 'React 19', posts: '45.2K posts' },
              { category: 'AI · Trending', topic: 'Gemini 3', posts: '102K posts' },
            ].map(trend => (
              <div key={trend.topic} className="p-2 hover:bg-muted rounded-xl cursor-pointer">
                <div className="text-xs text-muted-foreground">{trend.category}</div>
                <div className="font-bold">{trend.topic}</div>
                <div className="text-xs text-muted-foreground">{trend.posts}</div>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-4 space-y-4">
            <h3 className="text-xl font-bold px-2">Who to follow</h3>
            {[
              { name: 'Vercel', handle: '@vercel', avatar: 'V' },
              { name: 'Tailwind CSS', handle: '@tailwindcss', avatar: 'T' },
            ].map(user => (
              <div key={user.handle} className="flex items-center gap-3 p-2 hover:bg-muted rounded-xl cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold">{user.avatar}</div>
                <div className="flex flex-col flex-1">
                  <span className="font-bold text-sm">{user.name}</span>
                  <span className="text-muted-foreground text-sm">{user.handle}</span>
                </div>
                <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-8 px-4 font-bold">Follow</Button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
