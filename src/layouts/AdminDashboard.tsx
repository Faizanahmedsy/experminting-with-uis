import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const DATA = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

export function AdminDashboard() {
  return (
    <div className="h-screen w-screen flex bg-muted/20 text-foreground overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">N</div>
          <span className="font-bold text-xl tracking-tight">Nebula Admin</span>
        </div>

        <ScrollArea className="flex-1 px-4">
          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: Users, label: 'Customers' },
              { icon: ShoppingBag, label: 'Orders' },
              { icon: BarChart3, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
            ].map(item => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-200" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Faizan Ahmed</span>
              <span className="text-xs opacity-50">Administrator</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-background flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search anything..." className="pl-10 bg-muted/50 border-none" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <ScrollArea className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Download Report</Button>
                <Button variant="outline">Manage Views</Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', positive: true },
                { title: 'Subscriptions', value: '+2,350', trend: '+180.1%', positive: true },
                { title: 'Sales', value: '+12,234', trend: '+19%', positive: true },
                { title: 'Active Now', value: '+573', trend: '-4%', positive: false },
              ].map(stat => (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    {stat.positive ? <ArrowUpRight className="h-4 w-4 text-green-500" /> : <ArrowDownRight className="h-4 w-4 text-red-500" />}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className={`text-xs ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Revenue Over Time</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={DATA}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: 'hsl(var(--muted-foreground))'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: 'hsl(var(--muted-foreground))'}} />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { name: 'Olivia Martin', email: 'olivia@email.com', amount: '+$1,999.00' },
                      { name: 'Jackson Lee', email: 'jackson@email.com', amount: '+$39.00' },
                      { name: 'Isabella Nguyen', email: 'isabella@email.com', amount: '+$299.00' },
                      { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
                    ].map(sale => (
                      <div key={sale.email} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-muted" />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{sale.name}</span>
                            <span className="text-xs text-muted-foreground">{sale.email}</span>
                          </div>
                        </div>
                        <span className="text-sm font-bold">{sale.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Data Table */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left font-medium text-muted-foreground">
                        <th className="h-12 px-4">Transaction ID</th>
                        <th className="h-12 px-4">Customer</th>
                        <th className="h-12 px-4">Status</th>
                        <th className="h-12 px-4">Amount</th>
                        <th className="h-12 px-4">Date</th>
                        <th className="h-12 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: '#TRX-9012', customer: 'Liam Johnson', status: 'Completed', amount: '$250.00', date: 'Oct 24, 2023' },
                        { id: '#TRX-9013', customer: 'Sophia Chen', status: 'Pending', amount: '$1,200.00', date: 'Oct 24, 2023' },
                        { id: '#TRX-9014', customer: 'Noah Williams', status: 'Failed', amount: '$45.00', date: 'Oct 23, 2023' },
                        { id: '#TRX-9015', customer: 'Emma Davis', status: 'Completed', amount: '$890.00', date: 'Oct 22, 2023' },
                      ].map(row => (
                        <tr key={row.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-4 font-mono text-xs">{row.id}</td>
                          <td className="p-4">{row.customer}</td>
                          <td className="p-4">
                            <Badge variant={row.status === 'Completed' ? 'default' : row.status === 'Pending' ? 'secondary' : 'destructive'}>
                              {row.status}
                            </Badge>
                          </td>
                          <td className="p-4 font-medium">{row.amount}</td>
                          <td className="p-4 text-muted-foreground">{row.date}</td>
                          <td className="p-4">
                            <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
