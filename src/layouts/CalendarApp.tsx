import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Search, 
  Settings, 
  Bell, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  MapPin, 
  MoreVertical,
  Filter,
  Grid,
  List,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CalendarApp() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => i - 2); // Simple calendar generation

  const events = [
    { id: 1, title: 'Design Review', time: '10:00 AM', type: 'Work', color: 'bg-blue-500' },
    { id: 2, title: 'Team Sync', time: '2:00 PM', type: 'Meeting', color: 'bg-purple-500' },
    { id: 3, title: 'Product Launch', time: 'All Day', type: 'Event', color: 'bg-emerald-500' },
    { id: 4, title: 'Client Call', time: '4:30 PM', type: 'Call', color: 'bg-orange-500' },
  ];

  return (
    <div className="h-screen w-screen flex bg-white text-zinc-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 border-r flex flex-col p-6 gap-8 bg-zinc-50/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <CalendarIcon className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">NebulaCal</span>
        </div>

        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl py-6 shadow-lg shadow-indigo-200 gap-3 font-bold">
          <Plus className="h-5 w-5" />
          Create Event
        </Button>

        <div className="space-y-6">
          {/* Mini Calendar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm">April 2026</h3>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full hover:bg-zinc-200"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full hover:bg-zinc-200"><ChevronRight className="h-4 w-4" /></Button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-zinc-400">
              {days.map(d => <div key={d}>{d[0]}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {dates.slice(0, 31).map((d, i) => (
                <div key={i} className={`p-1.5 rounded-full cursor-pointer hover:bg-zinc-200 ${d === 5 ? 'bg-indigo-600 text-white font-bold' : d <= 0 ? 'text-zinc-300' : ''}`}>
                  {d > 0 ? d : ''}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-sm">My Calendars</h3>
            <div className="space-y-2">
              {[
                { label: 'Work', color: 'bg-blue-500', checked: true },
                { label: 'Personal', color: 'bg-emerald-500', checked: true },
                { label: 'Meetings', color: 'bg-purple-500', checked: false },
                { label: 'Holidays', color: 'bg-orange-500', checked: true },
              ].map(cal => (
                <div key={cal.label} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${cal.checked ? `${cal.color} border-transparent` : 'border-zinc-300 group-hover:border-zinc-400'}`}>
                    {cal.checked && <CheckCircle2 className="h-3 w-3 text-white" />}
                  </div>
                  <span className="text-sm font-medium text-zinc-600">{cal.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto bg-indigo-50 rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-indigo-600">
            <Clock className="h-4 w-4" />
            <span className="text-xs font-bold">Upcoming Sync</span>
          </div>
          <p className="text-sm font-bold">Weekly Team Sync starts in 15 mins.</p>
          <Button variant="link" className="p-0 h-auto text-xs font-bold text-indigo-600">Join Meeting</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">April 2026</h2>
              <div className="flex gap-1 ml-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100"><ChevronLeft className="h-5 w-5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100"><ChevronRight className="h-5 w-5" /></Button>
              </div>
            </div>
            <Button variant="outline" className="rounded-lg h-9 px-4 font-bold text-sm">Today</Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-zinc-100 p-1 rounded-xl">
              <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-bold bg-white shadow-sm">Month</Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-bold text-zinc-500">Week</Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-bold text-zinc-500">Day</Button>
            </div>
            <div className="h-6 w-[1px] bg-zinc-200" />
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Search className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Bell className="h-5 w-5" /></Button>
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">FA</div>
          </div>
        </header>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="grid grid-cols-7 border-b bg-zinc-50/50">
            {days.map(day => (
              <div key={day} className="py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-widest border-r last:border-r-0">
                {day}
              </div>
            ))}
          </div>
          <ScrollArea className="flex-1">
            <div className="grid grid-cols-7 grid-rows-5 h-full min-h-[800px]">
              {dates.map((date, i) => (
                <div key={i} className={`border-r border-b p-2 space-y-2 last:border-r-0 transition-colors hover:bg-zinc-50/50 group ${date <= 0 ? 'bg-zinc-50/30' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${date === 5 ? 'w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center' : date <= 0 ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {date > 0 ? date : ''}
                    </span>
                    <Plus className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-indigo-600 transition-all" />
                  </div>
                  
                  {/* Events */}
                  <div className="space-y-1">
                    {date === 5 && events.map(event => (
                      <div key={event.id} className={`${event.color} text-white p-1.5 rounded-lg text-[10px] font-bold truncate shadow-sm cursor-pointer hover:brightness-110 transition-all`}>
                        {event.time} - {event.title}
                      </div>
                    ))}
                    {date === 12 && (
                      <div className="bg-emerald-500 text-white p-1.5 rounded-lg text-[10px] font-bold truncate shadow-sm cursor-pointer hover:brightness-110 transition-all">
                        Vacation Starts
                      </div>
                    )}
                    {date === 20 && (
                      <div className="bg-purple-500 text-white p-1.5 rounded-lg text-[10px] font-bold truncate shadow-sm cursor-pointer hover:brightness-110 transition-all">
                        Project Deadline
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
