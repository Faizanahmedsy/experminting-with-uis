import { useState } from 'react';
import { ChevronRight, Folder, File, HardDrive, User, Star, Clock, Cloud } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Node {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: Node[];
  size?: string;
  modified?: string;
}

const DATA: Node[] = [
  {
    id: '1', name: 'Documents', type: 'folder', children: [
      { id: '1-1', name: 'Projects', type: 'folder', children: [
        { id: '1-1-1', name: 'NebulaOS', type: 'folder', children: [
          { id: '1-1-1-1', name: 'src', type: 'folder' },
          { id: '1-1-1-2', name: 'package.json', type: 'file', size: '1.2 KB', modified: '2 hours ago' }
        ]},
        { id: '1-1-2', name: 'Portfolio', type: 'file', size: '450 KB', modified: 'Yesterday' }
      ]},
      { id: '1-2', name: 'Invoices', type: 'folder' }
    ]
  },
  { id: '2', name: 'Downloads', type: 'folder' },
  { id: '3', name: 'Pictures', type: 'folder' },
  { id: '4', name: 'Music', type: 'folder' }
];

export function MillerColumns() {
  const [columns, setColumns] = useState<Node[][]>([DATA]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelect = (node: Node, columnIndex: number) => {
    const newSelectedIds = selectedIds.slice(0, columnIndex);
    newSelectedIds[columnIndex] = node.id;
    setSelectedIds(newSelectedIds);

    const newColumns = columns.slice(0, columnIndex + 1);
    if (node.children) {
      newColumns.push(node.children);
    }
    setColumns(newColumns);
  };

  const selectedNode = columns[columns.length - 1]?.find(n => n.id === selectedIds[selectedIds.length - 1]);

  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
      <header className="h-14 border-b flex items-center px-6 gap-8 bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium opacity-60">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground opacity-100">NebulaOS</span>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-muted/10 p-4 space-y-6">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider opacity-40 px-2">Favorites</div>
            {[
              { icon: Clock, label: 'Recents' },
              { icon: Cloud, label: 'iCloud Drive' },
              { icon: HardDrive, label: 'Macintosh HD' },
              { icon: User, label: 'Home' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-muted cursor-pointer text-sm">
                <item.icon className="h-4 w-4 text-blue-500" />
                {item.label}
              </div>
            ))}
          </div>
        </aside>

        {/* Columns Container */}
        <ScrollArea className="flex-1">
          <div className="flex h-full min-w-max">
            {columns.map((column, idx) => (
              <div key={idx} className="w-64 border-r flex flex-col">
                <ScrollArea className="flex-1">
                  <div className="p-2 space-y-0.5">
                    {column.map(node => (
                      <div
                        key={node.id}
                        onClick={() => handleSelect(node, idx)}
                        className={cn(
                          "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm group",
                          selectedIds[idx] === node.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {node.type === 'folder' ? (
                            <Folder className={cn("h-4 w-4", selectedIds[idx] === node.id ? "text-primary-foreground" : "text-blue-500")} />
                          ) : (
                            <File className="h-4 w-4 opacity-60" />
                          )}
                          <span className="truncate w-40">{node.name}</span>
                        </div>
                        {node.type === 'folder' && (
                          <ChevronRight className="h-4 w-4 opacity-40" />
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            ))}

            {/* Preview Column */}
            {selectedNode && selectedNode.type === 'file' && (
              <div className="w-80 p-8 flex flex-col items-center gap-6 bg-muted/5">
                <div className="w-32 h-32 bg-muted rounded-xl flex items-center justify-center shadow-sm">
                  <File className="h-16 w-16 opacity-20" />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-bold text-lg">{selectedNode.name}</h3>
                  <p className="text-sm opacity-50">{selectedNode.size} • {selectedNode.modified}</p>
                </div>
                <div className="w-full space-y-4 pt-4">
                  <div className="grid grid-cols-2 text-xs gap-y-2">
                    <span className="opacity-40">Kind</span>
                    <span>Document</span>
                    <span className="opacity-40">Size</span>
                    <span>{selectedNode.size}</span>
                    <span className="opacity-40">Created</span>
                    <span>Today, 10:00 AM</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
