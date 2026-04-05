import { 
  Search, 
  Settings, 
  Grid, 
  MoreVertical, 
  Image as ImageIcon, 
  Video, 
  Newspaper, 
  MapPin, 
  ShoppingBag, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  Star,
  ExternalLink,
  Menu,
  Bell,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

export function SearchResults() {
  const results = [
    { 
      title: 'NebulaOS - The Future of Web Operating Systems', 
      url: 'https://nebulaos.dev', 
      displayUrl: 'nebulaos.dev › docs › intro',
      description: 'Experience the power of a full desktop environment in your browser. Built with React 19, Tailwind CSS, and Gemini AI. Fast, secure, and highly customizable.',
      tags: ['React', 'Tailwind', 'AI']
    },
    { 
      title: 'How to Build a Multi-Layout System in React', 
      url: 'https://blog.faizan.dev/multi-layout-react', 
      displayUrl: 'blog.faizan.dev › multi-layout-react',
      description: 'A comprehensive guide on creating flexible, switchable layouts for your web applications. Learn about context providers, dynamic imports, and responsive design patterns.',
      time: '2 days ago'
    },
    { 
      title: 'Gemini 3 Flash: Next-Gen AI for Developers', 
      url: 'https://ai.google.dev/gemini', 
      displayUrl: 'ai.google.dev › gemini › flash',
      description: 'Explore the capabilities of Gemini 3 Flash. High-speed reasoning, multimodal inputs, and seamless integration with your existing development workflow.',
      rating: 4.9,
      reviews: '1.2K'
    },
    { 
      title: 'Vite 6 Release Notes - What\'s New?', 
      url: 'https://vitejs.dev/blog/announcing-v6', 
      displayUrl: 'vitejs.dev › blog › announcing-v6',
      description: 'Vite 6 is here with improved HMR, faster build times, and better support for modern frameworks. Check out the full list of features and breaking changes.',
      time: '1 week ago'
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-white text-zinc-900 overflow-hidden font-sans">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 border-b shrink-0 bg-white z-50">
        <div className="flex items-center gap-8 flex-1">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter">NebulaSearch</span>
          </div>

          <div className="flex-1 max-w-2xl relative group">
            <Input 
              placeholder="Search anything..." 
              className="w-full pl-6 pr-12 py-6 bg-zinc-100 border-none rounded-full text-base focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm group-hover:shadow-md transition-all"
              defaultValue="NebulaOS multi-layout system"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Settings className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Grid className="h-5 w-5" /></Button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs ml-2">FA</div>
        </div>
      </header>

      {/* Tabs */}
      <div className="h-12 border-b flex items-center px-6 gap-8 bg-white shrink-0 overflow-x-auto no-scrollbar">
        {[
          { icon: Search, label: 'All', active: true },
          { icon: ImageIcon, label: 'Images' },
          { icon: Video, label: 'Videos' },
          { icon: Newspaper, label: 'News' },
          { icon: MapPin, label: 'Maps' },
          { icon: ShoppingBag, label: 'Shopping' },
          { icon: MoreVertical, label: 'More' },
        ].map(tab => (
          <div 
            key={tab.label} 
            className={`flex items-center gap-2 h-full px-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${tab.active ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent text-zinc-500 hover:text-zinc-900'}`}
          >
            <tab.icon className="h-4 w-4" />
            <span className="text-sm">{tab.label}</span>
          </div>
        ))}
        <div className="ml-auto flex items-center gap-4 text-xs font-bold text-zinc-400">
          <span className="cursor-pointer hover:text-zinc-900">SafeSearch: On</span>
          <span className="cursor-pointer hover:text-zinc-900 flex items-center gap-1">Tools <ChevronDown className="h-3 w-3" /></span>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <ScrollArea className="flex-1">
          <div className="max-w-7xl mx-auto px-6 py-8 flex gap-12">
            {/* Results List */}
            <div className="flex-1 max-w-3xl space-y-10">
              <p className="text-sm text-zinc-500">About 1,240,000 results (0.42 seconds)</p>

              {results.map((result, i) => (
                <div key={i} className="group space-y-1">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1">
                    <div className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center">
                      <ExternalLink className="h-3 w-3" />
                    </div>
                    <span className="truncate">{result.displayUrl}</span>
                    <ChevronDown className="h-3 w-3" />
                  </div>
                  <a href={result.url} className="text-xl font-bold text-blue-600 hover:underline block leading-tight">
                    {result.title}
                  </a>
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                    {result.description}
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    {result.time && <span className="text-xs text-zinc-400 flex items-center gap-1"><Clock className="h-3 w-3" /> {result.time}</span>}
                    {result.rating && (
                      <div className="flex items-center gap-1 text-xs text-amber-600 font-bold">
                        <Star className="h-3 w-3 fill-amber-600" />
                        {result.rating} ({result.reviews} reviews)
                      </div>
                    )}
                    {result.tags && result.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}

              {/* People Also Ask */}
              <div className="bg-zinc-50 rounded-2xl p-6 border space-y-4">
                <h3 className="font-bold text-lg">People also ask</h3>
                <div className="divide-y">
                  {[
                    'What is NebulaOS?',
                    'How do I implement multi-layout in React?',
                    'Is Gemini 3 Flash free for developers?',
                    'When was Vite 6 released?'
                  ].map(q => (
                    <div key={q} className="py-4 flex items-center justify-between cursor-pointer group">
                      <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">{q}</span>
                      <ChevronDown className="h-4 w-4 text-zinc-400 group-hover:text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 pt-8 pb-12">
                <Button variant="ghost" className="rounded-full h-10 px-4 text-blue-600 font-bold">Previous</Button>
                {[1, 2, 3, 4, 5].map(n => (
                  <Button key={n} variant={n === 1 ? 'default' : 'ghost'} className={`w-10 h-10 rounded-full font-bold ${n === 1 ? 'bg-blue-600' : 'text-blue-600'}`}>
                    {n}
                  </Button>
                ))}
                <Button variant="ghost" className="rounded-full h-10 px-4 text-blue-600 font-bold">Next</Button>
              </div>
            </div>

            {/* Knowledge Panel */}
            <aside className="w-96 hidden lg:flex flex-col gap-6">
              <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-zinc-100 relative">
                  <img 
                    src="https://picsum.photos/seed/search/400/225" 
                    alt="NebulaOS" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                    View all images
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">NebulaOS</h2>
                    <Button variant="ghost" size="icon" className="rounded-full border"><Share2 className="h-4 w-4" /></Button>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    NebulaOS is a cutting-edge web operating system built with modern technologies. It provides a full desktop experience within the browser, featuring window management, a robust file system, and integrated AI capabilities.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      { label: 'Developer', value: 'Faizan Ahmed' },
                      { label: 'Initial release', value: 'April 2026' },
                      { label: 'Written in', value: 'TypeScript, React' },
                      { label: 'License', value: 'Apache-2.0' },
                    ].map(info => (
                      <div key={info.label} className="text-sm">
                        <span className="font-bold">{info.label}: </span>
                        <span className="text-zinc-600">{info.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold h-10">Visit Website</Button>
                    <Button variant="outline" className="flex-1 rounded-xl font-bold h-10">Documentation</Button>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-6 border space-y-4">
                <h3 className="font-bold">Related searches</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['React 19 features', 'Tailwind v4 docs', 'Gemini AI API', 'Vite vs Webpack'].map(s => (
                    <div key={s} className="bg-white p-3 rounded-xl border text-xs font-medium hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

function Share2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}
