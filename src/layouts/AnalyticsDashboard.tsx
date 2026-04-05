import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Calendar,
  Download,
  Filter,
  MoreVertical,
  Search,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000, revenue: 2400, users: 2400 },
  { name: 'Feb', value: 3000, revenue: 1398, users: 2210 },
  { name: 'Mar', value: 2000, revenue: 9800, users: 2290 },
  { name: 'Apr', value: 2780, revenue: 3908, users: 2000 },
  { name: 'May', value: 1890, revenue: 4800, users: 2181 },
  { name: 'Jun', value: 2390, revenue: 3800, users: 2500 },
  { name: 'Jul', value: 3490, revenue: 4300, users: 2100 },
];

const pieData = [
  { name: 'Direct', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Referral', value: 300 },
  { name: 'Email', value: 200 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export function AnalyticsDashboard() {
  return (
    <div className="h-screen w-screen flex bg-[#f1f5f9] text-slate-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">NebulaStats</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: TrendingUp, label: 'Overview', active: true },
            { icon: Users, label: 'Audience' },
            { icon: DollarSign, label: 'Revenue' },
            { icon: ShoppingCart, label: 'Sales' },
            { icon: Activity, label: 'Real-time' },
            { icon: Calendar, label: 'Reports' },
          ].map(item => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start gap-3 px-3 py-2 rounded-lg ${item.active ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="p-6 border-t">
          <div className="bg-indigo-600 rounded-2xl p-4 text-white space-y-3 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            <p className="text-xs font-medium opacity-80">Pro Plan</p>
            <p className="text-sm font-bold">Unlock advanced analytics and custom reports.</p>
            <Button className="w-full bg-white text-indigo-600 hover:bg-slate-100 h-8 text-xs font-bold">Upgrade Now</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Analytics Overview</h1>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              Last 30 Days
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                placeholder="Search metrics..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">FA</div>
          </div>
        </header>

        <ScrollArea className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Revenue', value: '$124,592', trend: '+12.5%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', up: true },
                { label: 'Active Users', value: '42,108', trend: '+8.2%', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50', up: true },
                { label: 'Total Sales', value: '1,245', trend: '-2.4%', icon: ShoppingCart, color: 'text-amber-600', bg: 'bg-amber-50', up: false },
                { label: 'Conversion Rate', value: '3.24%', trend: '+4.1%', icon: Activity, color: 'text-rose-600', bg: 'bg-rose-50', up: true },
              ].map(stat => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl border shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {stat.trend}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Revenue Growth</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 text-slate-500 gap-1"><Download className="h-4 w-4" /> Export</Button>
                    <Button variant="ghost" size="sm" className="h-8 text-slate-500 gap-1"><Filter className="h-4 w-4" /> Filter</Button>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                      <Tooltip 
                        contentStyle={{backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                        itemStyle={{fontSize: '12px', fontWeight: 'bold'}}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <h3 className="font-bold">Traffic Sources</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {pieData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[index]}} />
                        <span className="text-sm font-medium text-slate-600">{entry.name}</span>
                      </div>
                      <span className="text-sm font-bold">{entry.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <h3 className="font-bold">User Activity</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                      <Tooltip cursor={{fill: '#f8fafc'}} />
                      <Bar dataKey="users" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Recent Transactions</h3>
                  <Button variant="ghost" size="sm" className="h-8 text-indigo-600">View All</Button>
                </div>
                <div className="space-y-4">
                  {[
                    { user: 'John Doe', amount: '+$1,245.00', status: 'Completed', time: '2 mins ago' },
                    { user: 'Sarah Smith', amount: '+$892.50', status: 'Pending', time: '15 mins ago' },
                    { user: 'Mike Johnson', amount: '-$120.00', status: 'Completed', time: '1 hour ago' },
                    { user: 'Emma Wilson', amount: '+$2,450.00', status: 'Completed', time: '3 hours ago' },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs">
                          {tx.user.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold">{tx.user}</p>
                          <p className="text-xs text-slate-500">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{tx.amount}</p>
                        <p className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                          tx.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                        }`}>
                          {tx.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
