import { 
  HardDrive, 
  Clock, 
  Star, 
  Trash2, 
  Plus, 
  Search, 
  Settings, 
  Bell, 
  Grid, 
  List, 
  File, 
  Folder, 
  Image as ImageIcon, 
  Video, 
  MoreVertical,
  ChevronRight,
  Download,
  Share2,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';

export function FileStorage() {
  const files = [
    { name: 'Project Presentation.pdf', type: 'PDF', size: '2.4 MB', modified: '2 hours ago', icon: File, color: 'text-red-500' },
    { name: 'Design Assets', type: 'Folder', size: '45.8 MB', modified: 'Yesterday', icon: Folder, color: 'text-blue-500' },
    { name: 'Vacation Photo.jpg', type: 'Image', size: '1.2 MB', modified: '3 days ago', icon: ImageIcon, color: 'text-emerald-500' },
    { name: 'Product Demo.mp4', type: 'Video', size: '124.5 MB', modified: '1 week ago', icon: Video, color: 'text-purple-500' },
    { name: 'Financial Report.xlsx', type: 'Excel', size: '845 KB', modified: '2 weeks ago', icon: File, color: 'text-green-500' },
  ];

  return (
    <div className="h-screen w-screen flex bg-[#f9fafb] text-zinc-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <HardDrive className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">NebulaDrive</span>
        </div>

        <div className="px-4 mb-6">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-6 shadow-lg shadow-blue-100 gap-3 font-bold">
            <Plus className="h-5 w-5" />
            New Upload
          </Button>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: HardDrive, label: 'My Files', active: true },
            { icon: Clock, label: 'Recent' },
            { icon: Star, label: 'Starred' },
            { icon: Trash2, label: 'Trash' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start gap-4 px-4 py-3 rounded-xl ${item.active ? 'bg-blue-50 text-blue-600 font-bold' : 'text-zinc-500 hover:bg-zinc-100'}`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="p-6 border-t space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-zinc-500">Storage</span>
              <span className="text-zinc-900">75% used</span>
            </div>
            <Progress value={75} className="h-1.5" />
            <p className="text-[10px] text-zinc-400 font-medium">15.4 GB of 20 GB used</p>
          </div>
          <Button variant="outline" className="w-full rounded-xl text-xs font-bold h-9">Buy Storage</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input 
              placeholder="Search in NebulaDrive..." 
              className="w-full pl-12 pr-4 py-2.5 bg-zinc-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Bell className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Settings className="h-5 w-5" /></Button>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">FA</div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="h-14 border-b flex items-center justify-between px-8 bg-white/50 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <span>My Files</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-zinc-900 font-bold">Design Projects</span>
              </div>
              <div className="flex bg-zinc-100 p-1 rounded-lg">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-white shadow-sm"><Grid className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md text-zinc-500"><List className="h-4 w-4" /></Button>
              </div>
            </div>

            <ScrollArea className="flex-1 p-8">
              <div className="max-w-6xl mx-auto space-y-8">
                {/* Folders Grid */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Folders</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {['Work', 'Personal', 'Archives', 'Templates'].map(folder => (
                      <div key={folder} className="bg-white p-4 rounded-2xl border shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
                        <div className="flex items-center justify-between mb-4">
                          <Folder className="h-10 w-10 text-blue-500 fill-blue-500/10" />
                          <MoreVertical className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="font-bold text-sm">{folder}</p>
                        <p className="text-xs text-zinc-400 mt-1">12 files · 45 MB</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Files List */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Recent Files</h3>
                  <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                    <div className="grid grid-cols-[1fr_120px_120px_48px] px-6 py-3 border-b text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      <span>Name</span>
                      <span>Size</span>
                      <span>Modified</span>
                      <span></span>
                    </div>
                    <div className="divide-y">
                      {files.map((file, i) => (
                        <div key={i} className="grid grid-cols-[1fr_120px_120px_48px] px-6 py-4 items-center hover:bg-zinc-50 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center ${file.color}`}>
                              <file.icon className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-bold truncate">{file.name}</span>
                          </div>
                          <span className="text-sm text-zinc-500">{file.size}</span>
                          <span className="text-sm text-zinc-500">{file.modified}</span>
                          <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical className="h-4 w-4" /></Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* Details Sidebar */}
          <aside className="w-80 border-l bg-white hidden xl:flex flex-col p-6 gap-8">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Details</h3>
              <Button variant="ghost" size="icon" className="rounded-full"><Info className="h-5 w-5" /></Button>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-32 h-32 bg-red-50 rounded-2xl flex items-center justify-center">
                <File className="h-16 w-16 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Project Presentation.pdf</h4>
                <p className="text-sm text-zinc-400">PDF Document · 2.4 MB</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="rounded-xl gap-2 h-10 font-bold text-xs"><Download className="h-4 w-4" /> Download</Button>
              <Button variant="outline" className="rounded-xl gap-2 h-10 font-bold text-xs"><Share2 className="h-4 w-4" /> Share</Button>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Information</h5>
              <div className="space-y-3">
                {[
                  { label: 'Type', value: 'PDF Document' },
                  { label: 'Size', value: '2.4 MB' },
                  { label: 'Location', value: 'My Files > Design' },
                  { label: 'Modified', value: 'Apr 12, 2026' },
                  { label: 'Created', value: 'Apr 10, 2026' },
                  { label: 'Owner', value: 'Faizan Ahmed' },
                ].map(info => (
                  <div key={info.label} className="flex justify-between text-sm">
                    <span className="text-zinc-400">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
