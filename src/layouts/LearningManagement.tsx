import { 
  BookOpen, 
  Play, 
  CheckCircle2, 
  Clock, 
  Award, 
  MessageSquare, 
  FileText, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  Bell, 
  Settings, 
  MoreVertical,
  Star,
  Users,
  LayoutGrid,
  List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';

export function LearningManagement() {
  const modules = [
    { title: 'Introduction to React 19', duration: '15:20', completed: true },
    { title: 'Understanding Server Components', duration: '24:45', completed: true },
    { title: 'Advanced Hooks & Patterns', duration: '42:10', active: true },
    { title: 'State Management with Context', duration: '35:15' },
    { title: 'Performance Optimization', duration: '28:30' },
    { title: 'Testing React Applications', duration: '45:00' },
  ];

  return (
    <div className="h-screen w-screen flex bg-[#f8fafc] text-slate-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">NebulaLearn</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: LayoutGrid, label: 'Dashboard', active: true },
            { icon: BookOpen, label: 'My Courses' },
            { icon: Award, label: 'Certificates' },
            { icon: MessageSquare, label: 'Community' },
            { icon: Users, label: 'Instructors' },
            { icon: Settings, label: 'Settings' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start gap-4 px-4 py-3 rounded-xl ${item.active ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="p-6 border-t">
          <div className="bg-slate-900 rounded-2xl p-4 text-white space-y-3">
            <p className="text-xs font-medium opacity-70">Learning Streak</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-bold">12 Days</span>
            </div>
            <p className="text-[10px] opacity-60">Keep it up! You're in the top 5% of learners this week.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100"><ChevronLeft className="h-5 w-5" /></Button>
            <h1 className="text-xl font-bold">Full-Stack Web Development</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                placeholder="Search lessons..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">FA</div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden">
            <ScrollArea className="flex-1 p-8">
              <div className="max-w-5xl mx-auto space-y-8">
                {/* Video Player */}
                <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden relative group shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/learn/1280/720" 
                    alt="Course Video" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button className="w-20 h-20 rounded-full bg-indigo-600 hover:bg-indigo-700 hover:scale-110 transition-all shadow-xl shadow-indigo-900/40 p-0">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between text-white mb-2">
                      <span className="text-sm font-bold">Advanced Hooks & Patterns</span>
                      <span className="text-xs opacity-70">12:45 / 42:10</span>
                    </div>
                    <Progress value={30} className="h-1.5 bg-white/20" />
                  </div>
                </div>

                {/* Lesson Info */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-3xl font-bold tracking-tight">Advanced Hooks & Patterns</h2>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 42 mins</span>
                        <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 12.4K students</span>
                        <span className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-500 fill-amber-500" /> 4.9 (1.2K reviews)</span>
                      </div>
                    </div>
                    <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 px-8 font-bold h-11">Mark as Complete</Button>
                  </div>

                  <div className="flex border-b">
                    {['Overview', 'Resources', 'Q&A', 'Notes'].map((tab, i) => (
                      <button key={tab} className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors ${i === 0 ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900'}`}>
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed">
                      In this lesson, we will dive deep into advanced React hooks and patterns. We'll explore how to build custom hooks for complex state management, understand the nuances of `useMemo` and `useCallback`, and implement the compound component pattern for flexible UI components.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-white border rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center"><FileText className="h-5 w-5" /></div>
                        <div>
                          <p className="text-sm font-bold">Lesson Slides.pdf</p>
                          <p className="text-xs text-slate-400">2.4 MB</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white border rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><FileText className="h-5 w-5" /></div>
                        <div>
                          <p className="text-sm font-bold">Starter Code.zip</p>
                          <p className="text-xs text-slate-400">1.8 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* Course Content Sidebar */}
          <aside className="w-96 border-l bg-white flex flex-col overflow-hidden">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="font-bold">Course Content</h3>
              <span className="text-xs font-bold text-indigo-600">45% Complete</span>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-2">
                {modules.map((module, i) => (
                  <div 
                    key={i} 
                    className={`p-4 rounded-2xl flex items-center gap-4 transition-all cursor-pointer ${module.active ? 'bg-indigo-50 border-indigo-100 border shadow-sm' : 'hover:bg-slate-50'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${module.completed ? 'bg-emerald-100 text-emerald-600' : module.active ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      {module.completed ? <CheckCircle2 className="h-5 w-5" /> : module.active ? <Play className="h-4 w-4 fill-white" /> : <span className="text-xs font-bold">{i + 1}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold truncate ${module.active ? 'text-indigo-600' : 'text-slate-700'}`}>{module.title}</p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium mt-0.5">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {module.duration}</span>
                        {module.completed && <span className="text-emerald-600">Completed</span>}
                      </div>
                    </div>
                    <MoreVertical className="h-4 w-4 text-slate-300" />
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-6 border-t bg-slate-50/50">
              <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-xl py-6 font-bold gap-2">
                Next Lesson <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
