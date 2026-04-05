import { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Filter,
  Download,
  Share2,
  ChevronRight,
  ChevronLeft,
  ArrowUpDown,
  Package,
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  Layers,
  Tag,
  BarChart3,
  RefreshCcw,
  Settings,
  Eye,
  Edit2,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { motion, AnimatePresence } from 'motion/react';

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Nebula Pro Laptop', sku: 'NB-PRO-15', category: 'Electronics', price: 1299.00, stock: 45, status: 'In Stock', lastUpdated: '2h ago' },
  { id: '2', name: 'Wireless Noise-Cancelling Headphones', sku: 'NB-AUD-W1', category: 'Audio', price: 299.00, stock: 8, status: 'Low Stock', lastUpdated: '5h ago' },
  { id: '3', name: 'Mechanical Gaming Keyboard', sku: 'NB-KBD-M1', category: 'Peripherals', price: 149.00, stock: 0, status: 'Out of Stock', lastUpdated: '1d ago' },
  { id: '4', name: 'Ultra-Wide 4K Monitor', sku: 'NB-DSP-4K', category: 'Electronics', price: 599.00, stock: 12, status: 'In Stock', lastUpdated: '3h ago' },
  { id: '5', name: 'Ergonomic Office Chair', sku: 'NB-FUR-E1', category: 'Furniture', price: 349.00, stock: 3, status: 'Low Stock', lastUpdated: '1d ago' },
  { id: '6', name: 'USB-C Docking Station', sku: 'NB-ACC-D1', category: 'Accessories', price: 199.00, stock: 85, status: 'In Stock', lastUpdated: '2h ago' },
];

export function AdminInventoryTable() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (id: string) => {
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0a0a0a] text-zinc-400 overflow-hidden font-sans">
      {/* Header */}
      <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#0a0a0a] shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Package className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Inventory Manager</h1>
            <p className="text-xs text-zinc-500">Managing 1,240 items across 12 categories</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative mr-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              placeholder="Search by SKU, name, or category..." 
              className="bg-zinc-900 border border-zinc-800 rounded-full pl-10 pr-4 py-2 text-xs text-white w-80 focus:ring-1 focus:ring-indigo-500 outline-none"
            />
          </div>
          <Button variant="outline" className="h-10 rounded-full border-zinc-800 hover:bg-zinc-800 text-xs font-bold px-6">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button className="h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white px-6 shadow-lg shadow-indigo-500/20">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-8 bg-[#0f0f0f]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            <Layers className="h-4 w-4" />
            Bulk Actions:
          </div>
          <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[10px] font-bold hover:bg-zinc-800 disabled:opacity-50" disabled={selectedProducts.length === 0}>
            <Edit2 className="h-3 w-3 mr-2" /> Edit
          </Button>
          <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[10px] font-bold hover:bg-zinc-800 disabled:opacity-50" disabled={selectedProducts.length === 0}>
            <Trash2 className="h-3 w-3 mr-2" /> Delete
          </Button>
          <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[10px] font-bold hover:bg-zinc-800 disabled:opacity-50" disabled={selectedProducts.length === 0}>
            <RefreshCcw className="h-3 w-3 mr-2" /> Restock
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Download className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Settings className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* Table Content */}
      <ScrollArea className="flex-1 bg-[#0a0a0a]">
        <div className="p-8">
          <div className="bg-[#121212] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#161616] border-b border-zinc-800">
                  <th className="p-4 w-12 text-center">
                    <Checkbox className="border-zinc-700 data-[state=checked]:bg-indigo-600" />
                  </th>
                  <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                      Product Name <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">SKU</th>
                  <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Category</th>
                  <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Price</th>
                  <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">Stock</th>
                  <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Status</th>
                  <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((product, i) => (
                  <motion.tr 
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors group ${selectedProducts.includes(product.id) ? 'bg-indigo-600/5' : ''}`}
                  >
                    <td className="p-4 text-center">
                      <Checkbox 
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() => toggleProduct(product.id)}
                        className="border-zinc-700 data-[state=checked]:bg-indigo-600" 
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                          <img src={`https://picsum.photos/seed/${product.id}/100/100`} alt={product.name} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{product.name}</p>
                          <p className="text-[10px] text-zinc-500">Updated {product.lastUpdated}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-xs font-mono text-zinc-400">{product.sku}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Tag className="h-3 w-3 text-zinc-600" />
                        <span className="text-xs text-zinc-400">{product.category}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-bold text-white text-right">${product.price.toFixed(2)}</td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xs font-bold text-white">{product.stock}</span>
                        <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div className={`h-full ${product.stock > 20 ? 'bg-emerald-500' : product.stock > 0 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${Math.min(product.stock, 100)}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        product.status === 'In Stock' ? 'bg-emerald-500/10 text-emerald-500' : 
                        product.status === 'Low Stock' ? 'bg-amber-500/10 text-amber-500' : 
                        'bg-rose-500/10 text-rose-500'
                      }`}>
                        {product.status === 'In Stock' ? <CheckCircle2 className="h-3 w-3" /> : 
                         product.status === 'Low Stock' ? <AlertCircle className="h-3 w-3" /> : 
                         <XCircle className="h-3 w-3" />}
                        {product.status}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Eye className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800"><Edit2 className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-zinc-800 text-rose-500"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between px-2">
            <p className="text-xs text-zinc-500">Showing <span className="font-bold text-white">1-6</span> of <span className="font-bold text-white">1,240</span> products</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-zinc-800 hover:bg-zinc-800 disabled:opacity-30" disabled><ChevronLeft className="h-4 w-4" /></Button>
              {[1, 2, 3, '...', 12].map((p, i) => (
                <Button key={i} variant={p === 1 ? 'default' : 'outline'} className={`h-9 w-9 rounded-xl text-xs font-bold ${p === 1 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'border-zinc-800 hover:bg-zinc-800'}`}>
                  {p}
                </Button>
              ))}
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-zinc-800 hover:bg-zinc-800"><ChevronRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

function XCircle(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}
