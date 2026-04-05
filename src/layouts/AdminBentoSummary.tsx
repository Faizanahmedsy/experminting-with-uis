import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity, 
  Globe, 
  Zap, 
  ArrowUpRight, 
  MoreHorizontal,
  Search,
  Bell,
  Calendar,
  Filter,
  Download,
  Share2,
  LayoutGrid,
  List,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion } from 'motion/react';

export function AdminBentoSummary() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Revenue', value: '$124,592', change: '+12.5%', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Active Users', value: '12,842', change: '+8.2%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'New Orders', value: '1,240', change: '-2.4%', icon: ShoppingCart, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Conversion Rate', value: '3.42%', change: '+1.2%', icon: Zap, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0a0a0a] text-zinc-400 overflow-hidden font-sans">
      {/* Header */}
      <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#0a0a0a] shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Zap className="h-5 w-5 text-black" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">NebulaBento</span>
          </div>
          <nav className="flex items-center gap-6">
            {['Overview', 'Analytics', 'Customers', 'Reports'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === tab.toLowerCase() ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              placeholder="Quick search..." 
              className="bg-zinc-900 border border-zinc-800 rounded-full pl-9 pr-4 py-1.5 text-xs text-white w-48 focus:ring-1 focus:ring-white outline-none transition-all"
            />
          </div>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800"><Bell className="h-4 w-4" /></Button>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-xs border border-zinc-700">FA</div>
        </div>
      </header>

      {/* Bento Grid Content */}
      <ScrollArea className="flex-1 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto p-8 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Executive Summary</h2>
              <p className="text-sm text-zinc-500 mt-1">Real-time performance metrics and business health overview.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="h-9 rounded-lg border-zinc-800 hover:bg-zinc-800 text-xs font-bold px-4">
                <Calendar className="h-3.5 w-3.5 mr-2" />
                Last 30 Days
              </Button>
              <Button className="h-9 rounded-lg bg-white hover:bg-zinc-200 text-xs font-bold text-black px-4 shadow-lg shadow-white/10">
                <Download className="h-3.5 w-3.5 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Main Bento Grid */}
          <div className="grid grid-cols-4 grid-rows-3 gap-6 h-[800px]">
            {/* Stat Cards */}
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 ${stat.bg} rounded-2xl flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {stat.change.startsWith('+') ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
                </div>
              </motion.div>
            ))}

            {/* Large Performance Chart Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="col-span-2 row-span-2 bg-[#121212] border border-zinc-800 rounded-3xl p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Revenue Performance</h3>
                  <p className="text-xs text-zinc-500">Monthly revenue growth vs previous year.</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-800"><ArrowUpRight className="h-4 w-4" /></Button>
              </div>
              
              <div className="flex-1 flex items-end gap-3 pb-4 relative z-10">
                {[45, 62, 58, 75, 90, 82, 95, 110, 105, 120, 115, 130].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.6 + (i * 0.05), type: 'spring' }}
                      className={`w-full rounded-t-lg transition-all ${i === 11 ? 'bg-white' : 'bg-zinc-800 group-hover:bg-zinc-700'}`}
                    />
                    <span className="text-[8px] font-bold text-zinc-600 uppercase">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Background */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </motion.div>

            {/* Regional Traffic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="col-span-2 bg-[#121212] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Global Reach</h3>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-800"><MoreHorizontal className="h-4 w-4" /></Button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-4">
                {[
                  { region: 'North America', value: '42%', color: 'bg-blue-500' },
                  { region: 'Europe', value: '28%', color: 'bg-emerald-500' },
                  { region: 'Asia Pacific', value: '22%', color: 'bg-purple-500' },
                ].map((r, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{r.region}</p>
                    <h4 className="text-xl font-bold text-white">{r.value}</h4>
                    <Progress value={parseInt(r.value)} className={`h-1 ${r.color}/20`} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Orders / Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="col-span-2 bg-[#121212] border border-zinc-800 rounded-3xl p-8 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white tracking-tight">Recent Activity</h3>
                <Button variant="ghost" className="text-xs font-bold text-zinc-500 hover:text-white">View All</Button>
              </div>
              <div className="space-y-4">
                {[
                  { user: 'Alex Rivera', action: 'Purchased Pro Plan', time: '2 mins ago', amount: '+$299' },
                  { user: 'Sarah Chen', action: 'Renewed Subscription', time: '15 mins ago', amount: '+$149' },
                  { user: 'Mike Ross', action: 'New User Signup', time: '1 hour ago', amount: 'Free' },
                ].map((act, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                        {act.user[0]}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{act.user}</p>
                        <p className="text-[10px] text-zinc-500">{act.action} · {act.time}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${act.amount.startsWith('+') ? 'text-emerald-500' : 'text-zinc-500'}`}>
                      {act.amount}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
