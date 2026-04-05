import { 
  LayoutGrid, 
  List, 
  Calendar, 
  Clock, 
  Users, 
  Settings, 
  Plus, 
  MoreHorizontal, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Search,
  Bell,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';

export function ProjectManagement() {
  const tasks = [
    { id: 1, title: 'Design System Update', status: 'In Progress', priority: 'High', assignee: 'FA', progress: 65, deadline: 'Apr 12' },
    { id: 2, title: 'API Integration', status: 'To Do', priority: 'Medium', assignee: 'JD', progress: 0, deadline: 'Apr 15' },
    { id: 3, title: 'User Testing', status: 'Completed', priority: 'Low', assignee: 'AS', progress: 100, deadline: 'Apr 8' },
    { id: 4, title: 'Bug Fixes - Sprint 4', status: 'In Progress', priority: 'High', assignee: 'FA', progress: 30, deadline: 'Apr 10' },
    { id: 5, title: 'Documentation', status: 'To Do', priority: 'Medium', assignee: 'MK', progress: 0, deadline: 'Apr 20' },
  ];

  return (
    <div className="h-screen w-screen flex bg-[#f8f9fa] text-zinc-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <LayoutGrid className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">NebulaTask</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: LayoutGrid, label: 'Dashboard', active: true },
            { icon: List, label: 'My Tasks' },
            { icon: Calendar, label: 'Calendar' },
            { icon: Clock, label: 'Timeline' },
            { icon: Users, label: 'Team' },
            { icon: Settings, label: 'Settings' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start gap-3 px-3 py-2 rounded-lg ${item.active ? 'bg-blue-50 text-blue-600 font-bold' : 'text-zinc-500 hover:bg-zinc-100'}`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="bg-zinc-900 rounded-xl p-4 text-white space-y-3">
            <p className="text-xs font-medium opacity-70">Upgrade to Pro</p>
            <p className="text-sm font-bold">Get unlimited projects and team members.</p>
            <Button className="w-full bg-white text-black hover:bg-zinc-200 h-8 text-xs font-bold">Upgrade Now</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Project Overview</h1>
            <div className="h-4 w-[1px] bg-zinc-200" />
            <div className="flex -space-x-2">
              {['FA', 'JD', 'AS', 'MK'].map(user => (
                <div key={user} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] font-bold">{user}</div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">+2</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input 
                placeholder="Search tasks..." 
                className="pl-10 pr-4 py-2 bg-zinc-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">FA</div>
          </div>
        </header>

        <ScrollArea className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Tasks', value: '24', icon: List, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'In Progress', value: '12', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
                { label: 'Completed', value: '8', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'Overdue', value: '4', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
              ].map(stat => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl border shadow-sm space-y-2">
                  <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-500">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline/Gantt Section */}
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-bold">Project Timeline</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs">Week</Button>
                  <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs bg-zinc-50">Month</Button>
                  <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs">Quarter</Button>
                </div>
              </div>
              <div className="p-6 overflow-x-auto">
                <div className="min-w-[800px] space-y-4">
                  <div className="flex border-b pb-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    <div className="w-48">Task</div>
                    <div className="flex-1 grid grid-cols-7 gap-4">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <div key={day} className="text-center">{day}</div>
                      ))}
                    </div>
                  </div>
                  {tasks.slice(0, 4).map((task, i) => (
                    <div key={task.id} className="flex items-center py-2 group">
                      <div className="w-48 text-sm font-medium group-hover:text-blue-600 transition-colors">{task.title}</div>
                      <div className="flex-1 relative h-8 bg-zinc-50 rounded-lg">
                        <div 
                          className={`absolute h-full rounded-lg ${i % 2 === 0 ? 'bg-blue-500' : 'bg-orange-500'} opacity-80`}
                          style={{ left: `${i * 15}%`, width: `${30 + i * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Task List */}
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-bold">Recent Tasks</h3>
                <Button variant="ghost" size="sm" className="h-8 text-blue-600 gap-1">
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="divide-y">
                {tasks.map(task => (
                  <div key={task.id} className="p-6 flex items-center gap-6 hover:bg-zinc-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center font-bold text-xs shrink-0">{task.assignee}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">{task.title}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                          task.priority === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                        }`}>
                          {task.priority}
                        </span>
                        <span className="text-xs text-zinc-400">Deadline: {task.deadline}</span>
                      </div>
                    </div>
                    <div className="w-48 hidden md:block">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-zinc-400">{task.progress}%</span>
                        <span className="text-[10px] font-bold text-zinc-400">{task.status}</span>
                      </div>
                      <Progress value={task.progress} className="h-1.5" />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full"><MoreHorizontal className="h-4 w-4" /></Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
