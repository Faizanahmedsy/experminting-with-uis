import { useState } from 'react';
import { 
  PanelGroup, 
  Panel, 
  PanelResizeHandle 
} from 'react-resizable-panels';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Bell, 
  Settings, 
  MoreVertical, 
  ChevronRight,
  Filter,
  Download,
  Share2,
  Maximize2,
  Minimize2,
  Play,
  Clock,
  User,
  LayoutGrid,
  List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { motion } from 'motion/react';

export function AdminTeacherDashboard() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const students = [
    { id: '1', name: 'John Doe', grade: 'A', score: 92, status: 'Graded' },
    { id: '2', name: 'Jane Smith', grade: 'B+', score: 88, status: 'Graded' },
    { id: '3', name: 'Mike Johnson', grade: 'C', score: 75, status: 'Pending' },
    { id: '4', name: 'Sarah Wilson', grade: 'A-', score: 90, status: 'Graded' },
    { id: '5', name: 'Chris Evans', grade: 'B', score: 82, status: 'Pending' },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0a0a0a] text-zinc-400 overflow-hidden font-sans">
      {/* Header */}
      <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-[#0a0a0a] shrink-0 z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">NebulaTeacher</span>
          </div>
          <div className="h-6 w-[1px] bg-zinc-800" />
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-zinc-500">Course:</span>
            <span className="text-white">Advanced Computer Science</span>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-zinc-500">Assignment:</span>
            <span className="text-white">Final Exam 2026</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-zinc-900 p-1 rounded-md border border-zinc-800">
            <Button variant="ghost" size="sm" className="h-7 rounded text-[10px] font-bold bg-zinc-800 text-white shadow-sm">Review</Button>
            <Button variant="ghost" size="sm" className="h-7 rounded text-[10px] font-bold text-zinc-500 hover:text-zinc-300">Grades</Button>
            <Button variant="ghost" size="sm" className="h-7 rounded text-[10px] font-bold text-zinc-500 hover:text-zinc-300">Settings</Button>
          </div>
          <div className="h-6 w-[1px] bg-zinc-800 mx-1" />
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md hover:bg-zinc-800"><Bell className="h-4 w-4" /></Button>
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">FA</div>
        </div>
      </header>

      {/* Main Resizable Layout */}
      <div className="flex-1 flex overflow-hidden">
        <PanelGroup direction="horizontal">
          {/* Panel 1: Student List & Grades */}
          <Panel defaultSize={20} minSize={15} className="flex flex-col border-r border-zinc-800 bg-[#0f0f0f]">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Students</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-zinc-800"><Filter className="h-3 w-3" /></Button>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-2 space-y-1">
                {students.map(student => (
                  <button
                    key={student.id}
                    className={`w-full text-left p-3 rounded-lg transition-all group ${student.id === '1' ? 'bg-emerald-600/10 border border-emerald-500/20' : 'hover:bg-zinc-800 border border-transparent'}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold ${student.id === '1' ? 'text-white' : 'text-zinc-300'}`}>{student.name}</span>
                      <span className={`text-[10px] font-bold ${student.grade === 'A' ? 'text-emerald-500' : 'text-zinc-500'}`}>{student.grade}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-zinc-500">
                      <span>Score: {student.score}%</span>
                      <span className={student.status === 'Graded' ? 'text-emerald-500/70' : 'text-amber-500/70'}>{student.status}</span>
                    </div>
                    {student.id === '1' && <Progress value={student.score} className="h-1 mt-2 bg-emerald-500/20" />}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Panel>

          <PanelResizeHandle className="w-1 bg-zinc-900 hover:bg-emerald-500/50 transition-colors cursor-col-resize" />

          {/* Panel 2: Question Paper */}
          <Panel defaultSize={40} minSize={20} className="flex flex-col border-r border-zinc-800 bg-[#0a0a0a]">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-[#0f0f0f]">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-emerald-500" />
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Question Paper</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-zinc-800"><Maximize2 className="h-3 w-3" /></Button>
              </div>
            </div>
            <ScrollArea className="flex-1 p-8">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="text-center space-y-2 mb-12">
                  <h1 className="text-2xl font-bold text-white">Final Examination 2026</h1>
                  <p className="text-sm text-zinc-500">Subject: Advanced Computer Science (CS402)</p>
                  <p className="text-xs text-zinc-600">Time Allowed: 3 Hours · Total Marks: 100</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Question 1 (20 Marks)</h4>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Algorithms</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Explain the time complexity of the QuickSort algorithm in its best, average, and worst cases. Provide a detailed analysis of the partitioning step and how pivot selection affects performance.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Question 2 (15 Marks)</h4>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Data Structures</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Compare and contrast Red-Black Trees and AVL Trees. In what scenarios would you prefer one over the other? Illustrate with a diagram showing the rotation process during an insertion that violates the AVL property.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Question 3 (25 Marks)</h4>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">System Design</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Design a highly scalable notification system that supports multiple channels (Email, SMS, Push). The system should handle 100k requests per second and ensure at-least-once delivery.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </Panel>

          <PanelResizeHandle className="w-1 bg-zinc-900 hover:bg-emerald-500/50 transition-colors cursor-col-resize" />

          {/* Panel 3: Answer Sheet & Grading */}
          <Panel defaultSize={40} minSize={20} className="flex flex-col bg-[#0f0f0f]">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-[#121212]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Answer Sheet: John Doe</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-zinc-800"><Share2 className="h-3 w-3" /></Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-zinc-800"><MoreVertical className="h-3 w-3" /></Button>
              </div>
            </div>
            <ScrollArea className="flex-1 p-8">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Answer 1</h4>
                      <div className="flex items-center gap-2">
                        <input 
                          type="number" 
                          defaultValue={18} 
                          className="w-12 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs text-white text-center focus:ring-1 focus:ring-emerald-500 outline-none"
                        />
                        <span className="text-xs text-zinc-500">/ 20</span>
                      </div>
                    </div>
                    <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800/50 text-sm text-zinc-300 leading-relaxed font-mono">
                      QuickSort is a divide-and-conquer algorithm. 
                      Best case: O(n log n) - occurs when the pivot always splits the array into two equal halves.
                      Average case: O(n log n).
                      Worst case: O(n²) - occurs when the pivot is always the smallest or largest element (e.g., already sorted array).
                      Partitioning step: Rearranges elements based on the pivot. Elements less than pivot go left, greater go right.
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-7 text-[10px] font-bold text-emerald-500 hover:bg-emerald-500/10">Add Comment</Button>
                      <Button variant="ghost" size="sm" className="h-7 text-[10px] font-bold text-zinc-500 hover:bg-zinc-800">Highlight</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Answer 2</h4>
                      <div className="flex items-center gap-2">
                        <input 
                          type="number" 
                          defaultValue={14} 
                          className="w-12 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs text-white text-center focus:ring-1 focus:ring-emerald-500 outline-none"
                        />
                        <span className="text-xs text-zinc-500">/ 15</span>
                      </div>
                    </div>
                    <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800/50 text-sm text-zinc-300 leading-relaxed font-mono">
                      AVL trees are more strictly balanced than Red-Black trees. AVL trees have a balance factor of -1, 0, or 1.
                      Red-Black trees are better for frequent insertions/deletions as they require fewer rotations.
                      AVL trees are better for lookup-heavy workloads.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="p-6 border-t border-zinc-800 bg-[#121212] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Total Score</p>
                  <p className="text-xl font-bold text-white">92 / 100</p>
                </div>
                <div className="h-8 w-[1px] bg-zinc-800" />
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Grade</p>
                  <p className="text-xl font-bold text-emerald-500">A</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="rounded-lg border-zinc-800 hover:bg-zinc-800 text-xs font-bold">Save Draft</Button>
                <Button className="rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white px-6">Submit Grade</Button>
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
