import { useState } from 'react';
import { 
  Mail, 
  Search, 
  Plus, 
  MoreVertical, 
  Filter,
  Send,
  BarChart3,
  Users,
  MousePointer2,
  Eye,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Settings,
  ChevronRight,
  ArrowUpRight,
  Target,
  Zap,
  LayoutGrid,
  List,
  Copy,
  Trash2,
  Play,
  Pause
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';

interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'draft' | 'scheduled' | 'completed';
  sent: number;
  openRate: number;
  clickRate: number;
  lastEdited: string;
}

const CAMPAIGNS: Campaign[] = [
  { id: '1', name: 'Spring Sale 2026', status: 'active', sent: 12450, openRate: 24.5, clickRate: 8.2, lastEdited: '2h ago' },
  { id: '2', name: 'New Feature Announcement', status: 'scheduled', sent: 0, openRate: 0, clickRate: 0, lastEdited: '5h ago' },
  { id: '3', name: 'Welcome Series - Onboarding', status: 'active', sent: 4500, openRate: 42.1, clickRate: 15.4, lastEdited: '1d ago' },
  { id: '4', name: 'Holiday Special Offer', status: 'completed', sent: 25000, openRate: 18.2, clickRate: 4.5, lastEdited: '3d ago' },
  { id: '5', name: 'Re-engagement Campaign', status: 'draft', sent: 0, openRate: 0, clickRate: 0, lastEdited: '1h ago' },
];

export function AdminCampaignManager() {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(CAMPAIGNS[0]);

  return (
    <div className="h-screen w-screen flex bg-[#0f1115] text-zinc-400 overflow-hidden font-sans">
      {/* Sidebar: Navigation */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col shrink-0 bg-[#16191e]">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">NebulaMail</span>
        </div>
        
        <div className="p-4">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Campaigns</p>
          <nav className="space-y-1">
            {[
              { label: 'All Campaigns', icon: LayoutGrid, count: 12 },
              { label: 'Drafts', icon: List, count: 3 },
              { label: 'Scheduled', icon: Clock, count: 2 },
              { label: 'Completed', icon: CheckCircle2, count: 45 },
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
        </div>

        <div className="mt-auto p-4 border-t border-zinc-800">
          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
            <p className="text-xs font-bold text-white mb-1">Upgrade to Pro</p>
            <p className="text-[10px] text-indigo-400/80 mb-3 leading-relaxed">Get advanced automation and unlimited subscribers.</p>
            <Button className="w-full h-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-[10px] font-bold text-white">Upgrade Now</Button>
          </div>
        </div>
      </aside>

      {/* Column 2: Campaign List */}
      <div className="w-96 border-r border-zinc-800 flex flex-col shrink-0 bg-[#0f1115]">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">Campaigns</h2>
          <Button className="h-9 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white px-4 shadow-lg shadow-indigo-500/20">
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-3">
            {CAMPAIGNS.map(campaign => (
              <button
                key={campaign.id}
                onClick={() => setSelectedCampaign(campaign)}
                className={`w-full text-left p-4 rounded-xl transition-all group border border-transparent ${selectedCampaign?.id === campaign.id ? 'bg-indigo-600/10 border-indigo-500/20' : 'hover:bg-zinc-800'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-sm font-bold ${selectedCampaign?.id === campaign.id ? 'text-white' : 'text-zinc-300'}`}>{campaign.name}</h3>
                  <div className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ${
                    campaign.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' : 
                    campaign.status === 'scheduled' ? 'bg-indigo-500/10 text-indigo-500' : 
                    campaign.status === 'draft' ? 'bg-zinc-800 text-zinc-500' : 
                    'bg-zinc-800 text-zinc-400'
                  }`}>
                    {campaign.status}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Sent</p>
                    <p className="text-xs font-bold text-white">{campaign.sent.toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Open</p>
                    <p className="text-xs font-bold text-white">{campaign.openRate}%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Click</p>
                    <p className="text-xs font-bold text-white">{campaign.clickRate}%</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Column 3: Campaign Details & Analytics */}
      <main className="flex-1 flex flex-col bg-[#0f1115]">
        <AnimatePresence mode="wait">
          {selectedCampaign ? (
            <motion.div 
              key={selectedCampaign.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 flex flex-col"
            >
              <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#16191e]/50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold text-white">{selectedCampaign.name}</h2>
                  <div className="h-4 w-[1px] bg-zinc-800" />
                  <p className="text-xs text-zinc-500">Last edited {selectedCampaign.lastEdited}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><Copy className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800 text-rose-500"><Trash2 className="h-4 w-4" /></Button>
                  <div className="h-6 w-[1px] bg-zinc-800 mx-1" />
                  <Button variant="outline" className="h-9 rounded-lg border-zinc-800 hover:bg-zinc-800 text-xs font-bold px-4">Edit Campaign</Button>
                  {selectedCampaign.status === 'active' ? (
                    <Button className="h-9 rounded-lg bg-rose-600 hover:bg-rose-700 text-xs font-bold text-white px-4 shadow-lg shadow-rose-500/20">
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </Button>
                  ) : (
                    <Button className="h-9 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white px-4 shadow-lg shadow-emerald-500/20">
                      <Play className="h-4 w-4 mr-2" />
                      Resume
                    </Button>
                  )}
                </div>
              </header>

              <ScrollArea className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Performance Overview */}
                  <div className="grid grid-cols-4 gap-6">
                    {[
                      { label: 'Recipients', value: selectedCampaign.sent.toLocaleString(), icon: Users, color: 'text-blue-500' },
                      { label: 'Open Rate', value: `${selectedCampaign.openRate}%`, icon: Eye, color: 'text-indigo-500' },
                      { label: 'Click Rate', value: `${selectedCampaign.clickRate}%`, icon: MousePointer2, color: 'text-emerald-500' },
                      { label: 'Unsubscribes', value: '0.4%', icon: AlertCircle, color: 'text-rose-500' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#16191e] border border-zinc-800 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={`w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center`}>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                          </div>
                          <ArrowUpRight className="h-3 w-3 text-zinc-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                          <h3 className="text-xl font-bold text-white">{stat.value}</h3>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Analytics Chart Area */}
                  <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-8 space-y-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white">Engagement Over Time</h3>
                        <p className="text-xs text-zinc-500">Hourly tracking of opens and clicks.</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-indigo-500" />
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Opens</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Clicks</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-48 flex items-end gap-3">
                      {[40, 65, 50, 85, 100, 75, 60, 90, 110, 95, 80, 120].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-1">
                          <div className="flex-1 flex flex-col justify-end gap-1">
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              className="w-full bg-indigo-600/40 rounded-t-sm"
                            />
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${h * 0.4}%` }}
                              className="w-full bg-emerald-500/40 rounded-t-sm"
                            />
                          </div>
                          <span className="text-[8px] font-bold text-zinc-600 text-center">{i * 2}h</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Campaign Details */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-white">Campaign Settings</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Subject Line</label>
                          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white">
                            Don't miss out on our exclusive spring offers! 🌸
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Sender</label>
                          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white">
                            Nebula Support {'<support@nebula.com>'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-white">Audience Target</h3>
                      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-indigo-500" />
                            <span className="text-sm font-bold text-white">Active Customers</span>
                          </div>
                          <span className="text-xs text-zinc-500">12,450 members</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Last Purchase</span>
                            <span className="text-zinc-300">Within 30 days</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Location</span>
                            <span className="text-zinc-300">Global</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Engagement</span>
                            <span className="text-zinc-300">High ({'>'}20% Open Rate)</span>
                          </div>
                        </div>
                        <Button variant="ghost" className="w-full text-xs font-bold text-indigo-400 hover:bg-indigo-400/10">Edit Segment</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-zinc-700" />
              </div>
              <h3 className="text-lg font-bold text-white">Select a Campaign</h3>
              <p className="text-sm text-zinc-500 max-w-xs mt-2">
                Choose a campaign from the list to view its performance and manage its settings.
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
