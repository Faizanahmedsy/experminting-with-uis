import { useState } from 'react';
import { 
  MessageSquare, 
  Search, 
  Plus, 
  MoreVertical, 
  ChevronRight,
  Filter,
  Bell,
  CheckCircle2,
  Clock,
  User,
  Shield,
  Mail,
  Phone,
  Video,
  Send,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Link as LinkIcon,
  Archive,
  Star,
  Hash,
  Settings,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

interface Ticket {
  id: string;
  user: string;
  subject: string;
  lastMessage: string;
  time: string;
  status: 'open' | 'pending' | 'resolved';
  priority: 'high' | 'medium' | 'low';
  unread?: boolean;
}

const TICKETS: Ticket[] = [
  { id: '1', user: 'John Doe', subject: 'Payment Issue', lastMessage: 'I cannot complete my checkout...', time: '2 mins ago', status: 'open', priority: 'high', unread: true },
  { id: '2', user: 'Jane Smith', subject: 'Account Access', lastMessage: 'I forgot my password and...', time: '15 mins ago', status: 'pending', priority: 'medium' },
  { id: '3', user: 'Mike Johnson', subject: 'Feature Request', lastMessage: 'Can you add dark mode to...', time: '1 hour ago', status: 'open', priority: 'low' },
  { id: '4', user: 'Sarah Wilson', subject: 'Bug Report', lastMessage: 'The app crashes when I...', time: '3 hours ago', status: 'resolved', priority: 'high' },
];

export function AdminSupportChat() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(TICKETS[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="h-screen w-screen flex bg-[#0f1115] text-zinc-400 overflow-hidden font-sans">
      {/* Sidebar: Navigation */}
      <aside className="w-16 border-r border-zinc-800 flex flex-col items-center py-6 gap-6 bg-[#16191e] shrink-0">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Shield className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20"><MessageSquare className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><User className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><Archive className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><Star className="h-5 w-5" /></Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><Settings className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-zinc-800"><HelpCircle className="h-5 w-5" /></Button>
        </div>
      </aside>

      {/* Column 2: Ticket List */}
      <div className="w-80 border-r border-zinc-800 flex flex-col shrink-0 bg-[#0f1115]">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">Support Tickets</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Plus className="h-4 w-4" /></Button>
        </div>
        
        <div className="p-4 border-b border-zinc-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              placeholder="Search tickets..." 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:ring-1 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {TICKETS.map(ticket => (
              <button
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
                className={`w-full text-left p-4 rounded-xl transition-all group relative ${selectedTicket?.id === ticket.id ? 'bg-indigo-600/10 border border-indigo-500/20' : 'hover:bg-zinc-800 border border-transparent'}`}
              >
                {ticket.unread && <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50" />}
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-bold ${selectedTicket?.id === ticket.id ? 'text-white' : 'text-zinc-300'}`}>{ticket.user}</span>
                  <span className="text-[10px] text-zinc-500">{ticket.time}</span>
                </div>
                <p className="text-xs font-medium text-zinc-400 mb-1 truncate">{ticket.subject}</p>
                <p className="text-[11px] text-zinc-500 line-clamp-1">{ticket.lastMessage}</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ${
                    ticket.priority === 'high' ? 'bg-rose-500/10 text-rose-500' : 
                    ticket.priority === 'medium' ? 'bg-amber-500/10 text-amber-500' : 
                    'bg-zinc-800 text-zinc-500'
                  }`}>
                    {ticket.priority}
                  </div>
                  <div className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ${
                    ticket.status === 'open' ? 'bg-indigo-500/10 text-indigo-500' : 
                    ticket.status === 'pending' ? 'bg-amber-500/10 text-amber-500' : 
                    'bg-emerald-500/10 text-emerald-500'
                  }`}>
                    {ticket.status}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Column 3: Chat View */}
      <main className="flex-1 flex flex-col bg-[#0f1115]">
        <AnimatePresence mode="wait">
          {selectedTicket ? (
            <motion.div 
              key={selectedTicket.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col"
            >
              {/* Chat Header */}
              <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#16191e]/50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {selectedTicket.user[0]}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">{selectedTicket.user}</h2>
                    <p className="text-[10px] text-zinc-500">{selectedTicket.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><Phone className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><Video className="h-4 w-4" /></Button>
                  <div className="h-6 w-[1px] bg-zinc-800 mx-2" />
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><MoreVertical className="h-4 w-4" /></Button>
                </div>
              </header>

              {/* Messages Area */}
              <ScrollArea className="flex-1 p-8">
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="px-4 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      Today, April 5
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400 shrink-0">
                      {selectedTicket.user[0]}
                    </div>
                    <div className="space-y-2">
                      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-none p-4 text-sm text-zinc-300 leading-relaxed">
                        {selectedTicket.lastMessage}
                      </div>
                      <span className="text-[10px] text-zinc-600 ml-1">10:30 AM</span>
                    </div>
                  </div>

                  {/* Admin Message */}
                  <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                      FA
                    </div>
                    <div className="space-y-2 text-right">
                      <div className="bg-indigo-600 rounded-2xl rounded-tr-none p-4 text-sm text-white leading-relaxed shadow-lg shadow-indigo-500/20">
                        Hello {selectedTicket.user}, I'm Faizan from the support team. I've looked into your issue and I'm happy to help. Could you please provide your transaction ID?
                      </div>
                      <span className="text-[10px] text-zinc-600 mr-1">10:32 AM · Seen</span>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* Chat Input */}
              <div className="p-6 border-t border-zinc-800 bg-[#16191e]/50 backdrop-blur-md">
                <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-2 flex items-end gap-2">
                  <div className="flex flex-col gap-1">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-zinc-800"><Paperclip className="h-4 w-4" /></Button>
                  </div>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your response..."
                    className="flex-1 bg-transparent border-none outline-none py-2 px-2 text-sm text-white resize-none max-h-32"
                    rows={1}
                  />
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-zinc-800"><Smile className="h-4 w-4" /></Button>
                    <Button className="h-9 w-9 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto mt-3 flex items-center gap-4 px-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    <Clock className="h-3 w-3" />
                    Response Time: 2m
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    <Hash className="h-3 w-3" />
                    Ticket ID: #{selectedTicket.id}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-zinc-700" />
              </div>
              <h3 className="text-lg font-bold text-white">Select a Ticket</h3>
              <p className="text-sm text-zinc-500 max-w-xs mt-2">
                Choose a conversation from the list to start helping your customers.
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Column 4: User Details */}
      <aside className="w-80 border-l border-zinc-800 bg-[#16191e] flex flex-col shrink-0">
        {selectedTicket && (
          <ScrollArea className="flex-1">
            <div className="p-8 space-y-8">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 rounded-3xl bg-indigo-600 mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-2xl shadow-indigo-500/30">
                  {selectedTicket.user[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedTicket.user}</h3>
                  <p className="text-xs text-zinc-500">Customer since Jan 2026</p>
                </div>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 rounded-lg border-zinc-800 hover:bg-zinc-800 text-[10px] font-bold">Profile</Button>
                  <Button variant="outline" size="sm" className="h-8 rounded-lg border-zinc-800 hover:bg-zinc-800 text-[10px] font-bold">History</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-zinc-600" />
                    <span className="text-zinc-300">john@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-zinc-600" />
                    <span className="text-zinc-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <LinkIcon className="h-4 w-4 text-zinc-600" />
                    <span className="text-indigo-400 hover:underline cursor-pointer">linkedin.com/in/johndoe</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Recent Orders</h4>
                <div className="space-y-2">
                  {[
                    { id: '#ORD-123', status: 'Delivered', price: '$299.00' },
                    { id: '#ORD-456', status: 'Processing', price: '$149.00' },
                  ].map((ord, i) => (
                    <div key={i} className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">{ord.id}</p>
                        <p className="text-[10px] text-zinc-500">{ord.status}</p>
                      </div>
                      <span className="text-xs font-bold text-zinc-300">{ord.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Internal Notes</h4>
                <textarea 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-zinc-400 outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                  rows={4}
                  placeholder="Add a private note about this customer..."
                />
              </div>
            </div>
          </ScrollArea>
        )}
      </aside>
    </div>
  );
}
