import { useState } from 'react';
import { Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, Reorder } from 'motion/react';

interface Task {
  id: string;
  title: string;
  tags: string[];
  comments: number;
  attachments: number;
  priority: 'low' | 'medium' | 'high';
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const INITIAL_DATA: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: '1', title: 'Design System Update', tags: ['Design'], comments: 4, attachments: 2, priority: 'high' },
      { id: '2', title: 'User Research', tags: ['Research'], comments: 1, attachments: 0, priority: 'medium' },
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      { id: '3', title: 'API Integration', tags: ['Dev'], comments: 12, attachments: 5, priority: 'high' },
    ]
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      { id: '4', title: 'Landing Page Copy', tags: ['Marketing'], comments: 2, attachments: 1, priority: 'low' },
    ]
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: '5', title: 'Mobile App Prototype', tags: ['Design'], comments: 8, attachments: 3, priority: 'medium' },
    ]
  }
];

export function KanbanBoard() {
  const [columns, setColumns] = useState(INITIAL_DATA);

  return (
    <div className="h-screen w-screen flex flex-col bg-[#f4f5f7] text-[#172b4d] overflow-hidden font-sans">
      <header className="h-14 border-b bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-bold">Nebula Project</h1>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">Public</Badge>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-xs font-bold">U{i}</div>
              ))}
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost">Board</Button>
          <Button variant="ghost">Timeline</Button>
          <Button variant="ghost">Calendar</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Share</Button>
        </div>
      </header>

      <main className="flex-1 overflow-x-auto p-6">
        <div className="flex gap-6 h-full items-start">
          {columns.map((column) => (
            <div key={column.id} className="w-72 flex flex-col bg-[#ebecf0] rounded-lg p-3 max-h-full">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-sm font-bold opacity-70 uppercase tracking-wider">{column.title}</h3>
                <Button variant="ghost" size="icon" className="h-6 w-6"><MoreHorizontal className="h-4 w-4" /></Button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 min-h-[50px]">
                {column.tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layoutId={task.id}
                    className="bg-white rounded-md p-3 shadow-sm border border-transparent hover:border-blue-400 cursor-grab active:cursor-grabbing transition-colors"
                  >
                    <div className="flex gap-1 mb-2">
                      {task.tags.map(tag => (
                        <div key={tag} className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase">{tag}</div>
                      ))}
                    </div>
                    <p className="text-sm font-medium mb-4">{task.title}</p>
                    <div className="flex items-center justify-between text-zinc-400">
                      <div className="flex items-center gap-3">
                        {task.comments > 0 && (
                          <div className="flex items-center gap-1 text-[10px]">
                            <MessageSquare className="h-3 w-3" />
                            {task.comments}
                          </div>
                        )}
                        {task.attachments > 0 && (
                          <div className="flex items-center gap-1 text-[10px]">
                            <Paperclip className="h-3 w-3" />
                            {task.attachments}
                          </div>
                        )}
                      </div>
                      <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center">
                        <User className="h-3 w-3" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button variant="ghost" className="mt-3 w-full justify-start gap-2 text-zinc-500 hover:bg-zinc-200">
                <Plus className="h-4 w-4" />
                Add a card
              </Button>
            </div>
          ))}

          <Button variant="ghost" className="w-72 h-12 bg-white/50 border-2 border-dashed border-zinc-300 shrink-0 justify-start gap-2 text-zinc-500">
            <Plus className="h-4 w-4" />
            Add another list
          </Button>
        </div>
      </main>
    </div>
  );
}
