import { useState } from 'react';
import { 
  Users, 
  Search, 
  Plus, 
  MoreVertical, 
  Filter,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

type ColumnId = 'lead' | 'contacted' | 'proposal' | 'negotiation' | 'closed';

interface Deal {
  id: string;
  company: string;
  value: number;
  contact: string;
  lastActivity: string;
  priority: 'high' | 'medium' | 'low';
}

const INITIAL_DEALS: Record<ColumnId, Deal[]> = {
  lead: [
    { id: '1', company: 'Acme Corp', value: 12000, contact: 'John Smith', lastActivity: '2h ago', priority: 'high' },
    { id: '2', company: 'Global Tech', value: 8500, contact: 'Sarah Lee', lastActivity: '5h ago', priority: 'medium' },
  ],
  contacted: [
    { id: '3', company: 'Nexus Systems', value: 25000, contact: 'Mike Ross', lastActivity: '1d ago', priority: 'high' },
  ],
  proposal: [
    { id: '4', company: 'Starlight Inc', value: 45000, contact: 'Emma Watson', lastActivity: '3h ago', priority: 'high' },
    { id: '5', company: 'Blue Wave', value: 15000, contact: 'Chris Pratt', lastActivity: '1d ago', priority: 'low' },
  ],
  negotiation: [
    { id: '6', company: 'Cloud Nine', value: 60000, contact: 'Robert Downey', lastActivity: '4h ago', priority: 'high' },
  ],
  closed: [
    { id: '7', company: 'Summit Ltd', value: 32000, contact: 'Scarlett J', lastActivity: '2d ago', priority: 'medium' },
  ],
};

export function AdminKanbanCRM() {
  const [deals, setDeals] = useState(INITIAL_DEALS);

  const columns: { id: ColumnId; label: string; color: string }[] = [
    { id: 'lead', label: 'New Leads', color: 'bg-blue-500' },
    { id: 'contacted', label: 'Contacted', color: 'bg-amber-500' },
    { id: 'proposal', label: 'Proposal', color: 'bg-indigo-500' },
    { id: 'negotiation', label: 'Negotiation', color: 'bg-purple-500' },
    { id: 'closed', label: 'Closed Won', color: 'bg-emerald-500' },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0f1115] text-zinc-400 overflow-hidden font-sans">
      {/* Header */}
      <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#16191e]/50 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Sales Pipeline</h1>
            <p className="text-xs text-zinc-500">Total Pipeline Value: $197,500</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative mr-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input 
              placeholder="Search deals..." 
              className="bg-zinc-900 border border-zinc-800 rounded-full pl-10 pr-4 py-2 text-xs text-white w-64 focus:ring-1 focus:ring-indigo-500 outline-none"
            />
          </div>
          <Button variant="outline" className="h-10 rounded-full border-zinc-800 hover:bg-zinc-800 text-xs font-bold px-6">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button className="h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white px-6 shadow-lg shadow-indigo-500/20">
            <Plus className="h-4 w-4 mr-2" />
            New Deal
          </Button>
        </div>
      </header>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto p-6 flex gap-6 bg-[#0f1115]">
        {columns.map(col => (
          <div key={col.id} className="w-80 shrink-0 flex flex-col">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${col.color}`} />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">{col.label}</h3>
                <span className="text-[10px] font-bold bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full">
                  {deals[col.id].length}
                </span>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-zinc-800">
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <ScrollArea className="flex-1">
              <div className="space-y-3 pr-2 pb-4">
                {deals[col.id].map(deal => (
                  <motion.div
                    key={deal.id}
                    layoutId={deal.id}
                    className="bg-[#16191e] border border-zinc-800 rounded-xl p-4 hover:border-indigo-500/50 transition-all cursor-grab active:cursor-grabbing group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{deal.company}</h4>
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded opacity-0 group-hover:opacity-100 hover:bg-zinc-800 transition-all">
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                        {deal.contact[0]}
                      </div>
                      <span className="text-xs text-zinc-500">{deal.contact}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-emerald-500 font-bold text-sm">
                        <DollarSign className="h-3 w-3" />
                        {deal.value.toLocaleString()}
                      </div>
                      <div className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${
                        deal.priority === 'high' ? 'bg-rose-500/10 text-rose-500' : 
                        deal.priority === 'medium' ? 'bg-amber-500/10 text-amber-500' : 
                        'bg-zinc-800 text-zinc-500'
                      }`}>
                        {deal.priority}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[10px] text-zinc-600">
                        <Clock className="h-3 w-3" />
                        {deal.lastActivity}
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-5 h-5 rounded-full border-2 border-[#16191e] bg-indigo-600 flex items-center justify-center text-[8px] text-white font-bold">JD</div>
                        <div className="w-5 h-5 rounded-full border-2 border-[#16191e] bg-emerald-600 flex items-center justify-center text-[8px] text-white font-bold">MS</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </div>
        ))}
      </div>
    </div>
  );
}
