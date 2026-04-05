import { useState } from 'react';
import { 
  Calendar, 
  Search, 
  Plus, 
  MoreVertical, 
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  DollarSign,
  MapPin,
  Star,
  Bell,
  Settings,
  LayoutGrid,
  List,
  Download,
  Share2,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  User,
  Shield,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Info,
  Tag,
  Edit2,
  Trash2,
  Copy,
  Link as LinkIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';

interface Booking {
  id: string;
  guest: string;
  property: string;
  checkIn: string;
  checkOut: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  amount: number;
  guests: number;
}

const BOOKINGS: Booking[] = [
  { id: '1', guest: 'John Doe', property: 'Luxury Beachfront Villa', checkIn: 'Apr 10, 2026', checkOut: 'Apr 15, 2026', status: 'confirmed', amount: 1250.00, guests: 2 },
  { id: '2', guest: 'Jane Smith', property: 'Modern City Loft', checkIn: 'Apr 12, 2026', checkOut: 'Apr 14, 2026', status: 'pending', amount: 450.00, guests: 1 },
  { id: '3', guest: 'Mike Johnson', property: 'Mountain Cabin Retreat', checkIn: 'Apr 15, 2026', checkOut: 'Apr 20, 2026', status: 'confirmed', amount: 850.00, guests: 4 },
  { id: '4', guest: 'Sarah Wilson', property: 'Cozy Studio Apartment', checkIn: 'Apr 18, 2026', checkOut: 'Apr 20, 2026', status: 'cancelled', amount: 300.00, guests: 2 },
  { id: '5', guest: 'Chris Evans', property: 'Luxury Beachfront Villa', checkIn: 'May 01, 2026', checkOut: 'May 05, 2026', status: 'confirmed', amount: 1250.00, guests: 2 },
];

export function AdminBookingManager() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(BOOKINGS[0]);

  return (
    <div className="h-screen w-screen flex bg-[#0f1115] text-zinc-400 overflow-hidden font-sans">
      {/* Sidebar: Navigation */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col shrink-0 bg-[#16191e]">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">NebulaBook</span>
        </div>
        
        <div className="p-4 flex-1">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Reservations</p>
          <nav className="space-y-1">
            {[
              { label: 'All Bookings', icon: LayoutGrid, count: 124 },
              { label: 'Pending', icon: Clock, count: 12 },
              { label: 'Confirmed', icon: CheckCircle2, count: 85 },
              { label: 'Cancelled', icon: XCircle, count: 27 },
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
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">Properties</p>
            <div className="space-y-1">
              {['Beachfront Villa', 'City Loft', 'Mountain Cabin'].map((prop, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 text-zinc-400 transition-all cursor-pointer group">
                  <MapPin className="h-4 w-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                  <span className="text-sm font-medium">{prop}</span>
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

      {/* Column 2: Booking List */}
      <div className="w-96 border-r border-zinc-800 flex flex-col shrink-0 bg-[#0f1115]">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">Bookings</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Plus className="h-4 w-4" /></Button>
        </div>

        <div className="p-4 border-b border-zinc-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              placeholder="Search bookings..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:ring-1 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-3">
            {BOOKINGS.map(booking => (
              <button
                key={booking.id}
                onClick={() => setSelectedBooking(booking)}
                className={`w-full text-left p-4 rounded-xl transition-all group border border-transparent ${selectedBooking?.id === booking.id ? 'bg-indigo-600/10 border-indigo-500/20' : 'hover:bg-zinc-800'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-sm font-bold ${selectedBooking?.id === booking.id ? 'text-white' : 'text-zinc-300'}`}>{booking.guest}</h3>
                  <div className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ${
                    booking.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-500' : 
                    booking.status === 'pending' ? 'bg-amber-500/10 text-amber-500' : 
                    'bg-rose-500/10 text-rose-500'
                  }`}>
                    {booking.status}
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mb-4">{booking.property}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[10px] text-zinc-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {booking.checkIn}
                    </div>
                    <ChevronRight className="h-2 w-2" />
                    <div className="flex items-center gap-1">
                      {booking.checkOut}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white">${booking.amount}</span>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Column 3: Booking Details & Calendar View */}
      <main className="flex-1 flex flex-col bg-[#0f1115]">
        <AnimatePresence mode="wait">
          {selectedBooking ? (
            <motion.div 
              key={selectedBooking.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col"
            >
              <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#16191e]/50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold text-white tracking-tight">Booking Details</h2>
                  <div className="h-4 w-[1px] bg-zinc-800" />
                  <p className="text-xs text-zinc-500">ID: #RES-{selectedBooking.id}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><MessageSquare className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-zinc-800"><Download className="h-4 w-4" /></Button>
                  <div className="h-6 w-[1px] bg-zinc-800 mx-1" />
                  <Button variant="outline" className="h-9 rounded-lg border-zinc-800 hover:bg-zinc-800 text-xs font-bold px-4">Modify</Button>
                  <Button className="h-9 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white px-4 shadow-lg shadow-indigo-500/20">Confirm Booking</Button>
                </div>
              </header>

              <ScrollArea className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Booking Overview Cards */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-6 space-y-4">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Total Amount</p>
                      <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-white">${selectedBooking.amount}</h3>
                        <span className="text-[10px] text-emerald-500 font-bold">Paid</span>
                      </div>
                    </div>
                    <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-6 space-y-4">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Guests</p>
                      <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-white">{selectedBooking.guests}</h3>
                        <span className="text-[10px] text-zinc-500 font-bold">Adults</span>
                      </div>
                    </div>
                    <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-6 space-y-4">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Nights</p>
                      <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-white">5</h3>
                        <span className="text-[10px] text-zinc-500 font-bold">Total</span>
                      </div>
                    </div>
                  </div>

                  {/* Guest Information */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-white tracking-widest uppercase">Guest Information</h3>
                      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold text-white">
                            {selectedBooking.guest[0]}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{selectedBooking.guest}</h4>
                            <p className="text-xs text-zinc-500">Guest since Jan 2026</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Email</span>
                            <span className="text-zinc-300">john@example.com</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Phone</span>
                            <span className="text-zinc-300">+1 (555) 123-4567</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Verification</span>
                            <span className="text-emerald-500 font-bold">Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-white tracking-widest uppercase">Property Details</h3>
                      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-indigo-500" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{selectedBooking.property}</h4>
                            <p className="text-xs text-zinc-500">Malibu, California</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Rating</span>
                            <div className="flex items-center gap-1 text-amber-500">
                              <Star className="h-3 w-3 fill-current" />
                              <span className="font-bold">4.9</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500">Host</span>
                            <span className="text-zinc-300">Nebula Luxury</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar View Placeholder */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-bold text-white tracking-widest uppercase">Availability Calendar</h3>
                    <div className="bg-[#16191e] border border-zinc-800 rounded-2xl p-8">
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="text-sm font-bold text-white">April 2026</h4>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><ChevronLeft className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><ChevronRight className="h-4 w-4" /></Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-4">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                          <div key={day} className="text-center text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{day}</div>
                        ))}
                        {Array.from({ length: 30 }).map((_, i) => {
                          const day = i + 1;
                          const isBooked = day >= 10 && day <= 15;
                          return (
                            <div 
                              key={i} 
                              className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                                isBooked ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-zinc-900/50 text-zinc-500 hover:bg-zinc-800'
                              }`}
                            >
                              {day}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-zinc-700" />
              </div>
              <h3 className="text-lg font-bold text-white">Select a Booking</h3>
              <p className="text-sm text-zinc-500 max-w-xs mt-2">
                Choose a reservation from the list to view its details and manage the guest's stay.
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
