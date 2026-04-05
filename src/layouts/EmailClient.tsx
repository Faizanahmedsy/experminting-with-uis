import { 
  Menu, 
  Search, 
  Settings, 
  HelpCircle, 
  Grid, 
  Plus, 
  Inbox, 
  Star, 
  Clock, 
  Send, 
  File, 
  Trash2, 
  Archive, 
  AlertCircle, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  User,
  Paperclip,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export function EmailClient() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#f6f8fc] text-zinc-700 overflow-hidden font-sans">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-4 bg-[#f6f8fc]">
        <div className="flex items-center gap-4 min-w-[240px]">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-200"><Menu className="h-5 w-5" /></Button>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
              <Send className="h-5 w-5 text-white -rotate-45" />
            </div>
            <span className="text-xl font-medium text-zinc-600">NebulaMail</span>
          </div>
        </div>

        <div className="flex-1 max-w-3xl flex items-center bg-[#eaf1fb] rounded-full px-4 h-12 group focus-within:bg-white focus-within:shadow-md transition-all">
          <Search className="h-5 w-5 text-zinc-500" />
          <Input 
            placeholder="Search mail" 
            className="border-none bg-transparent focus-visible:ring-0 text-base h-full" 
          />
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-200"><Settings className="h-5 w-5" /></Button>
        </div>

        <div className="flex items-center gap-2 min-w-[240px] justify-end">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-200"><HelpCircle className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-200"><Settings className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-200"><Grid className="h-5 w-5" /></Button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white ml-2">FA</div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex flex-col py-2 px-3 gap-1">
          <Button className="w-fit bg-[#c2e7ff] text-[#001d35] hover:bg-[#b3d9f2] rounded-2xl px-6 py-7 mb-4 shadow-sm gap-4">
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Compose</span>
          </Button>

          {[
            { icon: Inbox, label: 'Inbox', count: '1,245', active: true },
            { icon: Star, label: 'Starred' },
            { icon: Clock, label: 'Snoozed' },
            { icon: Send, label: 'Sent' },
            { icon: File, label: 'Drafts', count: '12' },
            { icon: Trash2, label: 'Trash' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className={`justify-start gap-4 px-4 py-3 rounded-full ${item.active ? 'bg-[#d3e3fd] text-[#001d35] font-bold' : 'font-normal hover:bg-zinc-200'}`}
            >
              <item.icon className={`h-5 w-5 ${item.active ? 'fill-current' : ''}`} />
              <span className="text-sm flex-1 text-left">{item.label}</span>
              {item.count && <span className={`text-xs ${item.active ? 'font-bold' : ''}`}>{item.count}</span>}
            </Button>
          ))}
          
          <div className="mt-4 px-4 py-2 text-sm font-bold flex items-center justify-between">
            <span>Labels</span>
            <Plus className="h-4 w-4 cursor-pointer" />
          </div>
          {['Work', 'Personal', 'Projects', 'NebulaOS'].map(label => (
            <Button key={label} variant="ghost" className="justify-start gap-4 px-4 py-3 rounded-full font-normal hover:bg-zinc-200">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-sm">{label}</span>
            </Button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl mr-4 mb-4 flex flex-col overflow-hidden shadow-sm border border-zinc-200">
          {/* Toolbar */}
          <div className="h-12 flex items-center justify-between px-4 border-b">
            <div className="flex items-center gap-4">
              <Checkbox className="rounded-sm border-zinc-400" />
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100"><RefreshCw className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100"><MoreVertical className="h-4 w-4" /></Button>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span>1-50 of 1,245</span>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100"><ChevronRight className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            {[
              { icon: Inbox, label: 'Primary', active: true, color: 'text-blue-600 border-blue-600' },
              { icon: User, label: 'Promotions', count: '12 new' },
              { icon: Star, label: 'Social', count: '45 new' },
            ].map(tab => (
              <div 
                key={tab.label} 
                className={`flex-1 max-w-[250px] flex items-center gap-4 px-4 py-4 cursor-pointer hover:bg-zinc-50 transition-colors border-b-4 ${tab.active ? tab.color : 'border-transparent text-zinc-500'}`}
              >
                <tab.icon className="h-5 w-5" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{tab.label}</span>
                  {tab.count && <span className="text-[11px] text-blue-600">{tab.count}</span>}
                </div>
              </div>
            ))}
          </div>

          <ScrollArea className="flex-1">
            {[
              { from: 'Google AI Studio', subject: 'Your new Gemini 3 Flash app is ready', preview: 'Hi Faizan Ahmed, we have successfully deployed your application...', time: '10:15 AM', starred: true, unread: true },
              { from: 'GitHub', subject: '[GitHub] A security advisory was published', preview: 'A security advisory was published for one of your repositories...', time: '9:42 AM', unread: true },
              { from: 'Vercel', subject: 'Deployment successful: nebula-os-v2', preview: 'Your deployment is now live at nebula-os-v2.vercel.app...', time: '8:12 AM' },
              { from: 'LinkedIn', subject: 'You have 5 new notifications', preview: 'See what people are saying about your latest post on LinkedIn...', time: 'Yesterday' },
              { from: 'Stripe', subject: 'Your monthly payout is on its way', preview: 'We have initiated a payout of $1,245.00 to your bank account...', time: 'Apr 4' },
              { from: 'Medium', subject: 'The best of Medium in your inbox', preview: 'Top stories for you: How to build a multi-layout system in React...', time: 'Apr 3' },
              { from: 'Figma', subject: 'Faizan Ahmed shared a file with you', preview: 'Nebula OS Design System v2.1 - Check out the new components...', time: 'Apr 2' },
              { from: 'Twitter', subject: 'New login to your account', preview: 'A new login was detected on your account from a new device...', time: 'Apr 1' },
              { from: 'Netflix', subject: 'New on Netflix this week', preview: 'Check out the latest movies and TV shows added to Netflix...', time: 'Mar 31' },
              { from: 'Spotify', subject: 'Your weekly discovery is here', preview: 'We have curated a new playlist for you based on your listening habits...', time: 'Mar 30' },
            ].map((email, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-4 px-4 py-2 border-b hover:shadow-md hover:z-10 relative transition-shadow cursor-pointer ${email.unread ? 'bg-zinc-50' : 'bg-white'}`}
              >
                <div className="flex items-center gap-4 shrink-0">
                  <Checkbox className="rounded-sm border-zinc-300" />
                  <Star className={`h-5 w-5 ${email.starred ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-300 hover:text-zinc-500'}`} />
                </div>
                <div className={`w-48 shrink-0 text-sm truncate ${email.unread ? 'font-bold' : ''}`}>{email.from}</div>
                <div className="flex-1 flex items-center gap-2 overflow-hidden">
                  <span className={`text-sm truncate ${email.unread ? 'font-bold' : ''}`}>{email.subject}</span>
                  <span className="text-sm text-zinc-500 truncate">- {email.preview}</span>
                </div>
                <div className={`shrink-0 text-xs ${email.unread ? 'font-bold' : 'text-zinc-500'}`}>{email.time}</div>
                
                {/* Hover Actions */}
                <div className="absolute right-4 inset-y-0 flex items-center gap-1 bg-inherit px-2 opacity-0 hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-200"><Archive className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-200"><Trash2 className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-200"><Inbox className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-200"><Clock className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </ScrollArea>
        </main>
      </div>

      {/* Compose Window (Floating) */}
      <div className="fixed bottom-0 right-20 w-[500px] bg-white rounded-t-xl shadow-2xl border border-zinc-200 flex flex-col z-50 overflow-hidden">
        <div className="h-10 bg-[#f2f6fc] flex items-center justify-between px-4 cursor-pointer">
          <span className="text-sm font-medium">New Message</span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-200"><Minimize2 className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-200"><Maximize2 className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-200"><X className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <div className="flex items-center border-b py-1">
            <span className="text-sm text-zinc-500 w-12">To</span>
            <Input className="border-none focus-visible:ring-0 h-8 text-sm" />
          </div>
          <div className="flex items-center border-b py-1">
            <span className="text-sm text-zinc-500 w-12">Subject</span>
            <Input className="border-none focus-visible:ring-0 h-8 text-sm" />
          </div>
          <textarea 
            className="flex-1 min-h-[200px] border-none focus:ring-0 text-sm resize-none py-4"
            placeholder="Write your message..."
          />
        </div>
        <div className="h-14 flex items-center justify-between px-4 border-t">
          <div className="flex items-center gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 font-bold h-9">Send</Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Paperclip className="h-4 w-4" /></Button>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100"><Trash2 className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
