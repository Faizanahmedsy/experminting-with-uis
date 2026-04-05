import { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  School, 
  Settings, 
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
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

type Module = 'users' | 'teachers' | 'classes' | 'subjects';

interface Item {
  id: string;
  name: string;
  status?: string;
  role?: string;
  lastActive?: string;
  email?: string;
  avatar?: string;
}

const MODULE_DATA: Record<Module, Item[]> = {
  users: [
    { id: '1', name: 'John Doe', status: 'Active', role: 'Student', lastActive: '2 mins ago', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', status: 'Inactive', role: 'Student', lastActive: '1 day ago', email: 'jane@example.com' },
    { id: '3', name: 'Mike Johnson', status: 'Active', role: 'Student', lastActive: '5 mins ago', email: 'mike@example.com' },
  ],
  teachers: [
    { id: '1', name: 'Prof. Xavier', status: 'Active', role: 'Head of Dept', lastActive: 'Now', email: 'xavier@school.edu' },
    { id: '2', name: 'Dr. Strange', status: 'Active', role: 'Senior Lecturer', lastActive: '10 mins ago', email: 'strange@school.edu' },
  ],
  classes: [
    { id: '1', name: 'Computer Science 101', status: 'Ongoing' },
    { id: '2', name: 'Advanced Mathematics', status: 'Upcoming' },
    { id: '3', name: 'Physics Lab', status: 'Ongoing' },
  ],
  subjects: [
    { id: '1', name: 'Algorithms', status: 'Core' },
    { id: '2', name: 'Quantum Mechanics', status: 'Elective' },
    { id: '3', name: 'Linear Algebra', status: 'Core' },
  ],
};

export function AdminFinderUI() {
  const [selectedModule, setSelectedModule] = useState<Module>('users');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const modules = [
    { id: 'users', label: 'Users', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: GraduationCap },
    { id: 'classes', label: 'Classes', icon: School },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
  ];

  return (
    <div className="h-screen w-screen flex bg-[#0f1115] text-zinc-400 overflow-hidden font-sans">
      {/* Column 1: Modules */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">NebulaAdmin</span>
        </div>
        
        <div className="p-4">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Content</p>
          <nav className="space-y-1">
            {modules.map(m => (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedModule(m.id as Module);
                  setSelectedItem(null);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all group ${selectedModule === m.id ? 'bg-indigo-600/10 text-indigo-400' : 'hover:bg-zinc-800 text-zinc-400'}`}
              >
                <div className="flex items-center gap-3">
                  <m.icon className={`h-4 w-4 ${selectedModule === m.id ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                  <span className="text-sm font-medium">{m.label}</span>
                </div>
                <ChevronRight className={`h-3 w-3 transition-transform ${selectedModule === m.id ? 'rotate-90 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-zinc-800">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-400 transition-all">
            <Settings className="h-4 w-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </aside>

      {/* Column 2: Items List */}
      <div className="w-80 border-r border-zinc-800 flex flex-col shrink-0 bg-[#16191e]">
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="relative flex-1 mr-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              placeholder={`Search ${selectedModule}...`} 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md pl-9 pr-3 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-zinc-800">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {MODULE_DATA[selectedModule].map(item => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`w-full text-left px-3 py-3 rounded-md transition-all group ${selectedItem?.id === item.id ? 'bg-indigo-600/20 border border-indigo-500/30' : 'hover:bg-zinc-800 border border-transparent'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-bold ${selectedItem?.id === item.id ? 'text-white' : 'text-zinc-300'}`}>{item.name}</span>
                  <div className={`w-2 h-2 rounded-full ${item.status === 'Active' || item.status === 'Ongoing' ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                  <span>{item.role || item.status}</span>
                  <span>{item.lastActive}</span>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Column 3: Details */}
      <main className="flex-1 flex flex-col bg-[#0f1115]">
        <AnimatePresence mode="wait">
          {selectedItem ? (
            <motion.div 
              key={selectedItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              {/* Detail Header */}
              <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#16191e]/50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {selectedItem.name[0]}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{selectedItem.name}</h2>
                    <p className="text-xs text-zinc-500">{selectedItem.role || selectedModule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="h-9 rounded-md border-zinc-800 hover:bg-zinc-800 text-xs font-bold">Edit</Button>
                  <Button className="h-9 rounded-md bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white">Publish</Button>
                  <div className="h-6 w-[1px] bg-zinc-800 mx-1" />
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md hover:bg-zinc-800">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </header>

              <ScrollArea className="flex-1 p-8">
                <div className="max-w-3xl space-y-8">
                  {/* Status Banner */}
                  <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Document is live</p>
                        <p className="text-xs text-indigo-400/80">Last edited by Admin 5 mins ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-xs font-bold text-indigo-400 hover:bg-indigo-400/10">View History</Button>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                      <input 
                        defaultValue={selectedItem.name}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                        <input 
                          defaultValue={selectedItem.email}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Role</label>
                      <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-indigo-500 outline-none appearance-none">
                        <option>{selectedItem.role || 'N/A'}</option>
                        <option>Admin</option>
                        <option>Editor</option>
                        <option>Viewer</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Status</label>
                      <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5">
                        <div className={`w-2 h-2 rounded-full ${selectedItem.status === 'Active' ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
                        <span className="text-sm text-white">{selectedItem.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Biography / Description</label>
                    <textarea 
                      rows={6}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
                      placeholder="Enter details here..."
                    />
                  </div>

                  {/* Activity Log */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-bold text-white">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        { action: 'Updated profile picture', time: '2 hours ago', icon: User },
                        { action: 'Changed role to Senior Lecturer', time: 'Yesterday', icon: Shield },
                        { action: 'Logged in from new device', time: '3 days ago', icon: Clock },
                      ].map((log, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                          <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                            <log.icon className="h-4 w-4 text-zinc-500" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-zinc-300">{log.action}</p>
                            <p className="text-[10px] text-zinc-500">{log.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-zinc-700" />
              </div>
              <h3 className="text-lg font-bold text-white">No Item Selected</h3>
              <p className="text-sm text-zinc-500 max-w-xs mt-2">
                Select an item from the list to view and edit its details in this panel.
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
