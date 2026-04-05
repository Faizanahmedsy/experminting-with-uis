import { useState } from 'react';
import { 
  LayoutGrid, 
  Search, 
  Plus, 
  MoreVertical, 
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  Settings,
  ChevronRight,
  ArrowUpRight,
  Target,
  Zap,
  List,
  Copy,
  Trash2,
  Play,
  Pause,
  Users,
  MessageSquare,
  Paperclip,
  Flag,
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';

interface Project {
  id: string;
  name: string;
  status: 'active' | 'on-hold' | 'completed' | 'delayed';
  progress: number;
  team: string[];
  deadline: string;
  tasks: number;
  priority: 'high' | 'medium' | 'low';
}

const PROJECTS: Project[] = [
  { id: '1', name: 'Nebula OS Redesign', status: 'active', progress: 65, team: ['FA', 'JD', 'MS'], deadline: 'Apr 20, 2026', tasks: 24, priority: 'high' },
  { id: '2', name: 'Mobile App Development', status: 'active', progress: 42, team: ['SC', 'RW', 'CE'], deadline: 'May 15, 2026', tasks: 45, priority: 'medium' },
  { id: '3', name: 'Cloud Infrastructure Migration', status: 'on-hold', progress: 15, team: ['MR', 'EW', 'BP'], deadline: 'Jun 10, 2026', tasks: 12, priority: 'high' },
  { id: '4', name: 'E-commerce Platform Launch', status: 'completed', progress: 100, team: ['FA', 'JD', 'MS'], deadline: 'Mar 30, 2026', tasks: 85, priority: 'high' },
  { id: '5', name: 'Marketing Campaign Q2', status: 'delayed', progress: 28, team: ['SC', 'RW', 'CE'], deadline: 'Apr 15, 2026', tasks: 18, priority: 'low' },
];

export function AdminProjectTracker() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS[0]);

  return (
    <div className="h-screen w-screen flex bg-[#0f1115] text-zinc-400 overflow-hidden font-sans">
      {/* Sidebar: Navigation */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col shrink-0 bg-[#16191e]">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <LayoutGrid className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">NebulaProjects</span>
        </div>
        
        <div className="p-4 flex-1">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Workspace</p>
          <nav className="space-y-1">
            {[
              { label: 'All Projects', icon: LayoutGrid, count: 12 },
              { label: 'My Tasks', icon: CheckCircle2, count: 8 },
              { label: 'Team Activity', icon: Users, count: 3 },
              { label: 'Calendar', icon: Calendar, count: 1 },
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
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Teams</p>
            <div className="space-y-2 px-2">
              {['Design Team', 'Engineering', 'Marketing'].map((team, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">{team}</span>
                  </div>
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-zinc-800">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-400 transition-all">
            <Settings className="h-4 w-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </aside>

      {/* Column 2: Project List */}
      <div className="w-96 border-r border-zinc-800 flex flex-col shrink-0 bg-[#0f1115]">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">Projects</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Plus className="h-4 w-4" /></Button>
        </div>

        <div className="p-4 border-b border-zinc-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              placeholder="Search projects..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:ring-1 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-3">
            {PROJECTS.map(project => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-4 rounded-xl transition-all group border border-transparent ${selectedProject?.id === project.id ? 'bg-indigo-600/10 border-indigo-500/20' : 'hover:bg-zinc-800'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-sm font-bold ${selectedProject?.id === project.id ? 'text-white' : 'text-zinc-300'}`}>{project.name}</h3>
                  <div className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ${
                    project.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' : 
                    project.status === 'on-hold' ? 'bg-amber-500/10 text-amber-500' : 
                    project.status === 'delayed' ? 'bg-rose-500/10 text-rose-500' : 
                    'bg-zinc-800 text-zinc-400'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-[10px] font-bold text-zinc-500">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className={`h-1 ${project.status === 'active' ? 'bg-emerald-500/20' : 'bg-zinc-800'}`} />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex -space-x-2">
                    {project.team.map((m, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0f1115] bg-zinc-800 flex items-center justify-center text-[8px] font-bold text-zinc-400">{m}</div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                    <Clock className="h-3 w-3" />
                    {project.deadline}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Column 3: Project Details & Tasks */}
      <main className="flex-1 flex flex-col bg-[#0f1115]">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div 
              key={selectedProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col"
            >
              <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#16191e]/50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold text-white tracking-tight">{selectedProject.name}</h2>
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ${
                    selectedProject.priority === 'high' ? 'bg-rose-500/10 text-rose-500' : 
                    selectedProject.priority === 'medium' ? 'bg-amber-500/10 text-amber-500' : 
                    'bg-zinc-800 text-zinc-500'
                  }`}>
                    {selectedProject.priority} Priority
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><Users className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><Settings className="h-4 w-4" /></Button>
                  <div className="h-6 w-[1px] bg-zinc-800 mx-1" />
                  <Button className="h-9 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white px-4 shadow-lg shadow-indigo-500/20">
                    <Plus className="h-4 w-4 mr-2" />
                    New Task
                  </Button>
                </div>
              </header>

              <ScrollArea className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Project Overview Cards */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-6 space-y-4">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Total Tasks</p>
                      <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-white">{selectedProject.tasks}</h3>
                        <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-bold">
                          <ArrowUpRight className="h-3 w-3" />
                          +4 this week
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-6 space-y-4">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Team Velocity</p>
                      <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-white">12.4</h3>
                        <span className="text-[10px] text-zinc-500 font-bold">tasks / week</span>
                      </div>
                    </div>
                    <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-6 space-y-4">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Time Spent</p>
                      <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-white">142h</h3>
                        <span className="text-[10px] text-zinc-500 font-bold">total hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Task List Section */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white tracking-widest uppercase">Active Tasks</h3>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-widest">Group by Status <ChevronDown className="h-3 w-3 ml-1" /></Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { title: 'Update design system components', status: 'In Progress', priority: 'High', owner: 'FA' },
                        { title: 'Implement authentication flow', status: 'Todo', priority: 'High', owner: 'JD' },
                        { title: 'Fix navigation menu bug', status: 'Review', priority: 'Medium', owner: 'MS' },
                        { title: 'Write documentation for API', status: 'Todo', priority: 'Low', owner: 'SC' },
                      ].map((task, i) => (
                        <div key={i} className="bg-[#16191e] border border-zinc-800 rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                          <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded border ${task.status === 'In Progress' ? 'border-indigo-500 bg-indigo-500/10' : 'border-zinc-700'} flex items-center justify-center`}>
                              {task.status === 'In Progress' && <div className="w-2 h-2 bg-indigo-500 rounded-full" />}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{task.title}</p>
                              <div className="flex items-center gap-3 mt-1">
                                <span className={`text-[9px] font-bold uppercase tracking-widest ${
                                  task.priority === 'High' ? 'text-rose-500' : 
                                  task.priority === 'Medium' ? 'text-amber-500' : 
                                  'text-zinc-500'
                                }`}>{task.priority}</span>
                                <div className="w-1 h-1 rounded-full bg-zinc-800" />
                                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{task.status}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="h-3.5 w-3.5 text-zinc-600" />
                              <span className="text-[10px] text-zinc-600 font-bold">3</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Paperclip className="h-3.5 w-3.5 text-zinc-600" />
                              <span className="text-[10px] text-zinc-600 font-bold">1</span>
                            </div>
                            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[9px] font-bold text-zinc-400">
                              {task.owner}
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-zinc-800 transition-all">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
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
                <LayoutGrid className="h-8 w-8 text-zinc-700" />
              </div>
              <h3 className="text-lg font-bold text-white">Select a Project</h3>
              <p className="text-sm text-zinc-500 max-w-xs mt-2">
                Choose a project from the list to view its progress, team, and active tasks.
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
