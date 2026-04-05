import { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Heart, 
  Menu, 
  ChevronDown, 
  Filter,
  Star,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const PRODUCTS = [
  { id: 1, name: 'Nebula Pro Headphones', price: '$299', category: 'Audio', rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Minimalist Desk Lamp', price: '$89', category: 'Home', rating: 4.5, image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Mechanical Keyboard', price: '$159', category: 'Tech', rating: 4.9, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Leather Travel Bag', price: '$199', category: 'Fashion', rating: 4.7, image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Smart Watch Series X', price: '$399', category: 'Tech', rating: 4.6, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Ceramic Coffee Mug', price: '$24', category: 'Home', rating: 4.9, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400' },
];

export function Ecommerce() {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden font-sans">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.2em] py-2 text-center">
        Free shipping on all orders over $100
      </div>

      {/* Nav */}
      <header className="h-20 border-b flex items-center justify-between px-12 sticky top-0 z-20 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-black tracking-tighter italic">NEBULA.</h1>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Shop</a>
            <a href="#" className="hover:text-primary transition-colors">Collections</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Blog</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-40" />
            <Input placeholder="Search products..." className="rounded-full bg-muted border-none pl-10 w-64" />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full"><User className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="rounded-full"><Heart className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">3</span>
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Filter Sidebar */}
        <aside className="w-80 border-r hidden xl:flex flex-col p-10 space-y-10">
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest">Category</h3>
            <div className="space-y-3">
              {['All Products', 'Audio', 'Home', 'Tech', 'Fashion', 'Accessories'].map(cat => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 border-2 rounded-sm transition-colors ${cat === 'All Products' ? 'bg-primary border-primary' : 'group-hover:border-primary'}`} />
                  <span className={`text-sm ${cat === 'All Products' ? 'font-bold' : 'opacity-60'}`}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest">Price Range</h3>
            <div className="space-y-4">
              <div className="h-1 bg-muted rounded-full relative">
                <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer" />
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer" />
              </div>
              <div className="flex items-center justify-between text-xs font-bold opacity-60">
                <span>$0</span>
                <span>$500+</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest">Color</h3>
            <div className="flex flex-wrap gap-3">
              {['bg-black', 'bg-white border', 'bg-zinc-400', 'bg-blue-500', 'bg-red-500'].map(c => (
                <div key={c} className={`w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-transform ${c}`} />
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 overflow-hidden flex flex-col">
          <div className="h-16 border-b flex items-center justify-between px-10 shrink-0">
            <div className="flex items-center gap-2 text-sm opacity-60">
              Showing <span className="font-bold text-foreground">1-12</span> of 48 products
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2 font-bold uppercase tracking-widest text-[10px]">
                Sort by: Featured <ChevronDown className="h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" className="xl:hidden gap-2">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {PRODUCTS.map(product => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                      />
                      <Button 
                        className="absolute bottom-4 left-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-[10px]"
                      >
                        Add to Cart
                      </Button>
                      <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-4 w-4 text-black" />
                      </button>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{product.category}</span>
                        <div className="flex items-center gap-1 text-[10px] font-bold">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {product.rating}
                        </div>
                      </div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="font-bold text-lg">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-20 flex items-center justify-center gap-2 pb-20">
                <Button variant="outline" className="rounded-full w-10 h-10 p-0">1</Button>
                <Button variant="ghost" className="rounded-full w-10 h-10 p-0">2</Button>
                <Button variant="ghost" className="rounded-full w-10 h-10 p-0">3</Button>
                <Separator orientation="vertical" className="h-6 mx-2" />
                <Button variant="ghost" className="rounded-full gap-2 font-bold uppercase tracking-widest text-[10px]">
                  Next <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
