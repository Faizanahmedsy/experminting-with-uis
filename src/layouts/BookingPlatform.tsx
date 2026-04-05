import { 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Heart, 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Filter, 
  Menu, 
  Bell, 
  User, 
  Globe, 
  ShieldCheck, 
  Clock, 
  CreditCard,
  LayoutGrid,
  List,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function BookingPlatform() {
  const properties = [
    { 
      id: 1, 
      title: 'Modern Villa with Private Pool', 
      location: 'Bali, Indonesia', 
      price: '$245', 
      rating: 4.9, 
      reviews: 124, 
      image: 'https://picsum.photos/seed/bali/600/400',
      tags: ['Pool', 'WiFi', 'Kitchen']
    },
    { 
      id: 2, 
      title: 'Cozy Cabin in the Woods', 
      location: 'Aspen, Colorado', 
      price: '$180', 
      rating: 4.8, 
      reviews: 85, 
      image: 'https://picsum.photos/seed/aspen/600/400',
      tags: ['Fireplace', 'Mountain View']
    },
    { 
      id: 3, 
      title: 'Luxury Penthouse in Tokyo', 
      location: 'Shibuya, Tokyo', 
      price: '$320', 
      rating: 5.0, 
      reviews: 42, 
      image: 'https://picsum.photos/seed/tokyo/600/400',
      tags: ['City View', 'Gym', 'Parking']
    },
    { 
      id: 4, 
      title: 'Beachfront Bungalow', 
      location: 'Maldives', 
      price: '$450', 
      rating: 4.9, 
      reviews: 210, 
      image: 'https://picsum.photos/seed/maldives/600/400',
      tags: ['Beach', 'All Inclusive']
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-white text-zinc-900 overflow-hidden font-sans">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-8 border-b shrink-0 bg-white z-50">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-rose-500">NebulaStay</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Stays', 'Experiences', 'Online Experiences'].map((item, i) => (
            <button key={item} className={`text-sm font-bold transition-colors ${i === 0 ? 'text-zinc-900 border-b-2 border-rose-500 pb-1' : 'text-zinc-500 hover:text-zinc-900'}`}>
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="rounded-full font-bold text-sm hidden lg:block">NebulaStay your home</Button>
          <Button variant="ghost" size="icon" className="rounded-full border"><Globe className="h-4 w-4" /></Button>
          <div className="flex items-center gap-2 border p-1.5 rounded-full hover:shadow-md transition-shadow cursor-pointer">
            <Menu className="h-4 w-4 ml-2" />
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-bold">FA</div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b py-4 px-8 shrink-0 flex justify-center">
        <div className="w-full max-w-4xl flex items-center bg-white border rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden p-1">
          <div className="flex-1 px-6 py-2 hover:bg-zinc-100 rounded-full cursor-pointer transition-colors">
            <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Where</p>
            <p className="text-sm font-bold text-zinc-900 truncate">Search destinations</p>
          </div>
          <div className="h-8 w-[1px] bg-zinc-200" />
          <div className="flex-1 px-6 py-2 hover:bg-zinc-100 rounded-full cursor-pointer transition-colors">
            <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Check in</p>
            <p className="text-sm font-bold text-zinc-900">Add dates</p>
          </div>
          <div className="h-8 w-[1px] bg-zinc-200" />
          <div className="flex-1 px-6 py-2 hover:bg-zinc-100 rounded-full cursor-pointer transition-colors">
            <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Who</p>
            <p className="text-sm font-bold text-zinc-900">Add guests</p>
          </div>
          <Button className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-600 p-0 shrink-0">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
          {/* Categories */}
          <div className="flex items-center gap-10 overflow-x-auto no-scrollbar pb-2">
            {[
              { icon: MapPin, label: 'Amazing pools', active: true },
              { icon: Globe, label: 'Islands' },
              { icon: ShieldCheck, label: 'Luxe' },
              { icon: Clock, label: 'Trending' },
              { icon: CreditCard, label: 'Beachfront' },
              { icon: Users, label: 'Cabins' },
              { icon: Star, label: 'Iconic cities' },
              { icon: Heart, label: 'Countryside' },
              { icon: LayoutGrid, label: 'Design' },
              { icon: List, label: 'Arctic' },
            ].map(cat => (
              <div key={cat.label} className={`flex flex-col items-center gap-2 cursor-pointer group whitespace-nowrap border-b-2 pb-2 transition-all ${cat.active ? 'border-zinc-900 opacity-100' : 'border-transparent opacity-60 hover:opacity-100 hover:border-zinc-200'}`}>
                <cat.icon className="h-6 w-6" />
                <span className="text-xs font-bold">{cat.label}</span>
              </div>
            ))}
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8 shrink-0"><ChevronRight className="h-4 w-4" /></Button>
            <Button variant="outline" className="rounded-xl h-10 gap-2 font-bold text-xs shrink-0"><Filter className="h-4 w-4" /> Filters</Button>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map(prop => (
              <div key={prop.id} className="group cursor-pointer space-y-3">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <Button variant="ghost" size="icon" className="absolute top-3 right-3 rounded-full text-white hover:bg-black/20 hover:text-rose-500 transition-colors">
                    <Heart className="h-6 w-6" />
                  </Button>
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {prop.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-white/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm truncate">{prop.title}</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Star className="h-3 w-3 fill-zinc-900" />
                      {prop.rating}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500">{prop.location}</p>
                  <p className="text-sm text-zinc-500">Apr 12 - 17</p>
                  <p className="text-sm font-bold mt-1">
                    {prop.price} <span className="font-normal text-zinc-500">night</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Inspiration Section */}
          <div className="bg-zinc-50 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tighter leading-none">Not sure where to go? Perfect.</h2>
              <p className="text-lg text-zinc-600">Discover unique stays and experiences around the world, curated just for you.</p>
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-8 py-6 font-bold text-lg shadow-xl shadow-zinc-200">I'm flexible</Button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <div className="aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden shadow-lg transform -rotate-3">
                <img src="https://picsum.photos/seed/travel1/400/500" alt="Travel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden shadow-lg transform rotate-3 translate-y-8">
                <img src="https://picsum.photos/seed/travel2/400/500" alt="Travel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Mobile Nav */}
      <footer className="h-16 border-t bg-white flex md:hidden items-center justify-around shrink-0 px-4">
        {[
          { icon: Search, label: 'Explore', active: true },
          { icon: Heart, label: 'Wishlists' },
          { icon: Globe, label: 'Trips' },
          { icon: MessageSquare, label: 'Inbox' },
          { icon: User, label: 'Profile' },
        ].map(item => (
          <div key={item.label} className={`flex flex-col items-center gap-1 cursor-pointer ${item.active ? 'text-rose-500' : 'text-zinc-400'}`}>
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-bold">{item.label}</span>
          </div>
        ))}
      </footer>
    </div>
  );
}

function MessageSquare(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
