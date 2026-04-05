import { useState } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Search, 
  Plus, 
  MoreVertical, 
  Filter,
  Download,
  Share2,
  Trash2,
  Settings,
  Bell,
  LayoutGrid,
  List,
  ChevronRight,
  Folder,
  FolderPlus,
  Maximize2,
  Info,
  Tag,
  Clock,
  User,
  Shield,
  CheckCircle2,
  AlertCircle,
  Eye,
  Edit2,
  Copy,
  Link as LinkIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';

interface Asset {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  size: string;
  url: string;
  lastModified: string;
  author: string;
  tags: string[];
}

const ASSETS: Asset[] = [
  { id: '1', name: 'Hero Banner - Spring.jpg', type: 'image', size: '2.4 MB', url: 'https://picsum.photos/seed/hero/800/450', lastModified: '2h ago', author: 'Alex Rivera', tags: ['Marketing', 'Spring', 'Banner'] },
  { id: '2', name: 'Product Demo.mp4', type: 'video', size: '45.2 MB', url: 'https://picsum.photos/seed/video/800/450', lastModified: '5h ago', author: 'Sarah Chen', tags: ['Product', 'Demo', 'Video'] },
  { id: '3', name: 'Brand Guidelines.pdf', type: 'document', size: '12.8 MB', url: 'https://picsum.photos/seed/doc/800/450', lastModified: '1d ago', author: 'Mike Ross', tags: ['Brand', 'Guidelines', 'PDF'] },
  { id: '4', name: 'App Screenshot - Dashboard.png', type: 'image', size: '1.1 MB', url: 'https://picsum.photos/seed/app/800/450', lastModified: '3h ago', author: 'Emma Watson', tags: ['App', 'UI', 'Screenshot'] },
  { id: '5', name: 'Customer Interview.mp4', type: 'video', size: '124.5 MB', url: 'https://picsum.photos/seed/interview/800/450', lastModified: '1d ago', author: 'Chris Pratt', tags: ['Customer', 'Interview', 'Video'] },
  { id: '6', name: 'Q1 Report.pdf', type: 'document', size: '4.2 MB', url: 'https://picsum.photos/seed/report/800/450', lastModified: '2h ago', author: 'Scarlett J', tags: ['Finance', 'Report', 'PDF'] },
];

export function AdminAssetManager() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(ASSETS[0]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="h-screen w-screen flex bg-[#0f1115] text-zinc-400 overflow-hidden font-sans">
      {/* Sidebar: Navigation & Folders */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col shrink-0 bg-[#16191e]">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <Folder className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">NebulaAssets</span>
        </div>
        
        <div className="p-4 flex-1">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Library</p>
          <nav className="space-y-1">
            {[
              { label: 'All Assets', icon: LayoutGrid, count: 124 },
              { label: 'Images', icon: ImageIcon, count: 85 },
              { label: 'Videos', icon: Video, count: 12 },
              { label: 'Documents', icon: FileText, count: 27 },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all group ${i === 0 ? 'bg-indigo-600/10 text-indigo-400' : 'hover:bg-zinc-800 text-zinc-400'}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`h-4 w-4 ${i === 0 ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-[10px] font-bold bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full">{item.count}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4 px-2">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Folders</p>
              <Button variant="ghost" size="icon" className="h-4 w-4 rounded hover:bg-zinc-800"><FolderPlus className="h-3 w-3" /></Button>
            </div>
            <div className="space-y-1">
              {['Marketing', 'Product', 'Design', 'Finance'].map((folder, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-400 transition-all cursor-pointer group">
                  <Folder className="h-4 w-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                  <span className="text-sm font-medium">{folder}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-zinc-800">
          <div className="bg-zinc-900 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between text-[10px] font-bold">
              <span className="text-zinc-500 uppercase tracking-widest">Storage</span>
              <span className="text-white">85% Used</span>
            </div>
            <Progress value={85} className="h-1 bg-indigo-600/20" />
            <p className="text-[10px] text-zinc-600">42.5 GB of 50 GB used</p>
          </div>
        </div>
      </aside>

      {/* Main Content: Asset Grid */}
      <main className="flex-1 flex flex-col bg-[#0f1115]">
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#16191e]/50 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
              <input 
                placeholder="Search assets..." 
                className="bg-zinc-900 border border-zinc-800 rounded-full pl-9 pr-4 py-1.5 text-xs text-white w-64 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
            <div className="h-6 w-[1px] bg-zinc-800" />
            <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setViewMode('grid')}
                className={`h-7 px-3 rounded-md text-[10px] font-bold ${viewMode === 'grid' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <LayoutGrid className="h-3 w-3 mr-2" /> Grid
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setViewMode('list')}
                className={`h-7 px-3 rounded-md text-[10px] font-bold ${viewMode === 'list' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <List className="h-3 w-3 mr-2" /> List
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="h-9 rounded-lg border-zinc-800 hover:bg-zinc-800 text-xs font-bold px-4">
              <Filter className="h-3.5 w-3.5 mr-2" />
              Filter
            </Button>
            <Button className="h-9 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white px-4 shadow-lg shadow-indigo-500/20">
              <Plus className="h-3.5 w-3.5 mr-2" />
              Upload
            </Button>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="p-8">
            <div className="grid grid-cols-4 gap-6">
              {ASSETS.map(asset => (
                <motion.div
                  key={asset.id}
                  layoutId={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  className={`group relative bg-[#16191e] border rounded-2xl overflow-hidden cursor-pointer transition-all ${selectedAsset?.id === asset.id ? 'border-indigo-500 ring-1 ring-indigo-500/50' : 'border-zinc-800 hover:border-zinc-700'}`}
                >
                  <div className="aspect-square bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                    <img src={asset.url} alt={asset.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                      {asset.type === 'image' ? <ImageIcon className="h-3.5 w-3.5 text-white" /> : asset.type === 'video' ? <Video className="h-3.5 w-3.5 text-white" /> : <FileText className="h-3.5 w-3.5 text-white" />}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xs font-bold text-white truncate mb-1">{asset.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500">{asset.size}</span>
                      <span className="text-[10px] text-zinc-500">{asset.lastModified}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </main>

      {/* Column 3: Asset Details */}
      <aside className="w-80 border-l border-zinc-800 bg-[#16191e] flex flex-col shrink-0">
        <AnimatePresence mode="wait">
          {selectedAsset ? (
            <motion.div 
              key={selectedAsset.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex-1 flex flex-col"
            >
              <div className="p-8 border-b border-zinc-800 bg-[#0f1115]/50 backdrop-blur-md">
                <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                  <img src={selectedAsset.url} alt={selectedAsset.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h2 className="text-lg font-bold text-white mb-2">{selectedAsset.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedAsset.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>

              <ScrollArea className="flex-1">
                <div className="p-8 space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-10 rounded-xl border-zinc-800 hover:bg-zinc-800 text-xs font-bold gap-2">
                      <Download className="h-4 w-4" /> Download
                    </Button>
                    <Button variant="outline" className="h-10 rounded-xl border-zinc-800 hover:bg-zinc-800 text-xs font-bold gap-2">
                      <Share2 className="h-4 w-4" /> Share
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-500">File Type</span>
                        <span className="text-white font-medium uppercase">{selectedAsset.type}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-500">File Size</span>
                        <span className="text-white font-medium">{selectedAsset.size}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-500">Last Modified</span>
                        <span className="text-white font-medium">{selectedAsset.lastModified}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-500">Author</span>
                        <span className="text-white font-medium">{selectedAsset.author}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Share Link</h3>
                    <div className="flex items-center gap-2 p-2 bg-zinc-900 border border-zinc-800 rounded-xl">
                      <LinkIcon className="h-4 w-4 text-zinc-600 shrink-0" />
                      <input 
                        readOnly 
                        value={`https://nebula.assets/${selectedAsset.id}`}
                        className="flex-1 bg-transparent border-none outline-none text-[10px] text-zinc-400 truncate"
                      />
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg hover:bg-zinc-800"><Copy className="h-3 w-3" /></Button>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Button variant="ghost" className="flex-1 h-10 rounded-xl hover:bg-zinc-800 text-xs font-bold text-zinc-400">Edit Metadata</Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-rose-500/10 text-rose-500"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                <Info className="h-8 w-8 text-zinc-700" />
              </div>
              <h3 className="text-lg font-bold text-white">No Asset Selected</h3>
              <p className="text-sm text-zinc-500 max-w-xs mt-2">
                Select an asset from the library to view its details and manage its properties.
              </p>
            </div>
          )}
        </AnimatePresence>
      </aside>
    </div>
  );
}
