import { useState, useEffect } from 'react';
import { 
  Activity, 
  Search, 
  Plus, 
  MoreVertical, 
  Filter,
  Zap,
  Cpu,
  Database,
  Globe,
  Shield,
  Bell,
  Settings,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  RefreshCcw,
  Terminal,
  Server,
  HardDrive,
  Network,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';

export function AdminPerformanceMonitor() {
  const [activeServer, setActiveServer] = useState('us-east-1');
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `[${new Date().toLocaleTimeString()}] GET /api/v1/users - 200 OK (42ms)`;
      setLogs(prev => [newLog, ...prev].slice(0, 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen flex bg-[#050505] text-zinc-400 overflow-hidden font-mono">
      {/* Sidebar: Server List */}
      <aside className="w-64 border-r border-zinc-900 flex flex-col shrink-0 bg-[#0a0a0a]">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-900">
          <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-sm text-white tracking-widest uppercase">NebulaOps</span>
        </div>
        
        <div className="p-4 flex-1">
          <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4 px-2">Infrastructure</p>
          <nav className="space-y-1">
            {[
              { id: 'us-east-1', label: 'US East (N. Virginia)', status: 'healthy', load: 42 },
              { id: 'us-west-2', label: 'US West (Oregon)', status: 'healthy', load: 18 },
              { id: 'eu-west-1', label: 'EU (Ireland)', status: 'warning', load: 85 },
              { id: 'ap-south-1', label: 'Asia (Mumbai)', status: 'healthy', load: 34 },
            ].map((server, i) => (
              <button
                key={server.id}
                onClick={() => setActiveServer(server.id)}
                className={`w-full flex flex-col px-3 py-3 rounded-md transition-all group ${activeServer === server.id ? 'bg-emerald-600/10 border border-emerald-500/20' : 'hover:bg-zinc-900 border border-transparent'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold ${activeServer === server.id ? 'text-white' : 'text-zinc-500'}`}>{server.label}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${server.status === 'healthy' ? 'bg-emerald-500' : 'bg-amber-500'} shadow-[0_0_8px_rgba(16,185,129,0.5)]`} />
                </div>
                <div className="flex items-center justify-between text-[9px] text-zinc-600">
                  <span>Load: {server.load}%</span>
                  <Progress value={server.load} className={`h-0.5 w-16 ${server.load > 80 ? 'bg-amber-500/20' : 'bg-emerald-500/20'}`} />
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-zinc-900">
          <div className="flex items-center justify-between text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">
            <span>System Status</span>
            <span className="text-emerald-500">All Systems Go</span>
          </div>
          <Progress value={100} className="h-1 bg-emerald-500/20" />
        </div>
      </aside>

      {/* Main Content: Real-time Stats & Logs */}
      <main className="flex-1 flex flex-col bg-[#050505]">
        <header className="h-16 border-b border-zinc-900 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-bold text-white tracking-widest uppercase">{activeServer} Overview</h2>
            <div className="h-4 w-[1px] bg-zinc-900" />
            <div className="flex items-center gap-2 text-[10px] text-zinc-500">
              <Clock className="h-3.5 w-3.5" />
              Uptime: 14d 2h 45m
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-900"><RefreshCcw className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-900"><Settings className="h-4 w-4" /></Button>
            <div className="h-6 w-[1px] bg-zinc-900 mx-1" />
            <Button className="h-9 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-[10px] font-bold text-white px-4 shadow-lg shadow-emerald-500/20 uppercase tracking-widest">
              Deploy Update
            </Button>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="p-8 space-y-8">
            {/* Real-time Metrics Grid */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: 'CPU Usage', value: '42.5%', icon: Cpu, color: 'text-blue-500', trend: 'up' },
                { label: 'Memory', value: '8.4 GB', icon: Database, color: 'text-purple-500', trend: 'down' },
                { label: 'Network In', value: '1.2 GB/s', icon: Network, color: 'text-emerald-500', trend: 'up' },
                { label: 'Disk I/O', value: '450 MB/s', icon: HardDrive, color: 'text-amber-500', trend: 'up' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-6 space-y-4 group hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3 text-rose-500" /> : <ArrowDownRight className="h-3 w-3 text-emerald-500" />}
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</p>
                    <h3 className="text-xl font-bold text-white">{stat.value}</h3>
                  </div>
                  <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      className={`h-full ${stat.color.replace('text-', 'bg-')}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Graph Area */}
            <div className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest">Latency (ms)</h3>
                  <p className="text-[10px] text-zinc-600 mt-1">Real-time request processing time.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">API Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Database</span>
                  </div>
                </div>
              </div>
              
              <div className="h-48 flex items-end gap-1">
                {Array.from({ length: 60 }).map((_, i) => {
                  const h = 20 + Math.random() * 60;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-0.5">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        className="w-full bg-emerald-500/40 rounded-t-sm"
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 0.6}%` }}
                        className="w-full bg-blue-500/40 rounded-t-sm"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terminal / Logs Section */}
            <div className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl overflow-hidden flex flex-col h-[400px]">
              <div className="h-10 bg-[#121212] border-b border-zinc-900 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live System Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Streaming</span>
                </div>
              </div>
              <ScrollArea className="flex-1 p-4 bg-black/50">
                <div className="space-y-1">
                  {logs.map((log, i) => (
                    <div key={i} className="text-[11px] leading-relaxed">
                      <span className="text-zinc-700 mr-2">[{i}]</span>
                      <span className={log.includes('200 OK') ? 'text-emerald-500/80' : 'text-amber-500/80'}>{log}</span>
                    </div>
                  ))}
                  <div className="text-[11px] text-emerald-500/80 animate-pulse">_</div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </ScrollArea>
      </main>

      {/* Right Sidebar: Quick Actions & Health */}
      <aside className="w-80 border-l border-zinc-900 bg-[#0a0a0a] flex flex-col shrink-0">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Active Incidents</h3>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-amber-500">High Latency in EU-West-1</p>
                <p className="text-[10px] text-amber-400/70 mt-1 leading-relaxed">Database connection pool reaching limits. Auto-scaling triggered.</p>
                <Button variant="ghost" className="h-6 mt-2 px-0 text-[9px] font-bold text-amber-500 hover:bg-transparent hover:underline">View Details</Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Resource Allocation</h3>
            <div className="space-y-6">
              {[
                { label: 'Compute Instances', value: '12 / 20', progress: 60 },
                { label: 'Storage Buckets', value: '45 / 100', progress: 45 },
                { label: 'Load Balancers', value: '4 / 5', progress: 80 },
              ].map((res, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-zinc-400 uppercase">{res.label}</span>
                    <span className="text-white">{res.value}</span>
                  </div>
                  <Progress value={res.progress} className="h-1 bg-zinc-900" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-16 rounded-xl border-zinc-900 hover:bg-zinc-900 flex flex-col gap-2">
                <RefreshCcw className="h-4 w-4 text-emerald-500" />
                <span className="text-[9px] font-bold uppercase">Restart</span>
              </Button>
              <Button variant="outline" className="h-16 rounded-xl border-zinc-900 hover:bg-zinc-900 flex flex-col gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span className="text-[9px] font-bold uppercase">Security</span>
              </Button>
              <Button variant="outline" className="h-16 rounded-xl border-zinc-900 hover:bg-zinc-900 flex flex-col gap-2">
                <Terminal className="h-4 w-4 text-zinc-500" />
                <span className="text-[9px] font-bold uppercase">SSH</span>
              </Button>
              <Button variant="outline" className="h-16 rounded-xl border-zinc-900 hover:bg-zinc-900 flex flex-col gap-2">
                <Zap className="h-4 w-4 text-amber-500" />
                <span className="text-[9px] font-bold uppercase">Scale</span>
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
