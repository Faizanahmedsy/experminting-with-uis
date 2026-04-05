import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Terminal, Play, Settings, FileCode, Search, GitBranch, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ResizableIDE() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#1e1e1e] text-zinc-300 overflow-hidden font-sans">
      {/* Top Header */}
      <header className="h-10 border-b border-zinc-800 flex items-center justify-between px-4 bg-[#252526]">
        <div className="flex items-center gap-4 text-xs">
          <span className="font-bold text-blue-400">NEBULA CODE</span>
          <div className="flex gap-3 opacity-60">
            <span>File</span>
            <span>Edit</span>
            <span>Selection</span>
            <span>View</span>
            <span>Go</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-7 text-xs gap-1 hover:bg-zinc-700">
            <Play className="h-3 w-3 text-green-500 fill-green-500" />
            Run
          </Button>
          <Button variant="ghost" size="sm" className="h-7 hover:bg-zinc-700">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <aside className="w-12 border-r border-zinc-800 flex flex-col items-center py-4 gap-4 bg-[#333333]">
          <FileCode className="h-6 w-6 text-zinc-400 cursor-pointer hover:text-white" />
          <Search className="h-6 w-6 text-zinc-400 cursor-pointer hover:text-white" />
          <GitBranch className="h-6 w-6 text-zinc-400 cursor-pointer hover:text-white" />
          <Layers className="h-6 w-6 text-zinc-400 cursor-pointer hover:text-white" />
        </aside>

        {/* Main Panels */}
        <PanelGroup direction="horizontal">
          <Panel defaultSize={20} minSize={15}>
            <div className="h-full border-r border-zinc-800 bg-[#252526]">
              <div className="p-2 text-[11px] uppercase font-bold tracking-wider opacity-50">Explorer</div>
              <ScrollArea className="h-full">
                <div className="p-2 space-y-1">
                  {['src', 'public', 'node_modules', 'package.json', 'tsconfig.json', 'vite.config.ts'].map(file => (
                    <div key={file} className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-zinc-700 rounded cursor-pointer">
                      <FileCode className="h-4 w-4 text-blue-400" />
                      {file}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </Panel>

          <PanelResizeHandle className="w-1 bg-black/20 hover:bg-blue-500 transition-colors" />

          <Panel defaultSize={60}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={70}>
                <div className="h-full bg-[#1e1e1e] flex flex-col">
                  <div className="h-9 bg-[#2d2d2d] flex items-center px-4 border-b border-zinc-800 gap-2">
                    <span className="text-xs bg-[#1e1e1e] px-3 py-2 border-t border-blue-500">App.tsx</span>
                    <span className="text-xs opacity-50 px-3 py-2">index.css</span>
                  </div>
                  <div className="flex-1 p-6 font-mono text-sm overflow-auto">
                    <pre className="text-blue-300">
                      {`import React from 'react';\n\nexport default function App() {\n  return (\n    <div className="p-4">\n      <h1 className="text-2xl font-bold">Hello World</h1>\n      <p>This is a resizable IDE layout.</p>\n    </div>\n  );\n}`}
                    </pre>
                  </div>
                </div>
              </Panel>
              <PanelResizeHandle className="h-1 bg-black/20 hover:bg-blue-500 transition-colors" />
              <Panel defaultSize={30}>
                <div className="h-full bg-[#1e1e1e] border-t border-zinc-800">
                  <div className="h-8 bg-[#252526] flex items-center px-4 gap-4 text-[11px] uppercase font-bold opacity-50">
                    <span>Terminal</span>
                    <span>Output</span>
                    <span>Debug Console</span>
                  </div>
                  <div className="p-4 font-mono text-xs text-green-400">
                    <div>guest@nebula:~/project$ npm run dev</div>
                    <div className="text-zinc-400 mt-1">VITE v5.0.0  ready in 124ms</div>
                    <div className="text-zinc-400">➜  Local:   http://localhost:3000/</div>
                  </div>
                </div>
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle className="w-1 bg-black/20 hover:bg-blue-500 transition-colors" />

          <Panel defaultSize={20} minSize={15}>
            <div className="h-full bg-[#252526] border-l border-zinc-800">
              <div className="p-2 text-[11px] uppercase font-bold tracking-wider opacity-50">Outline</div>
              <div className="p-4 text-xs opacity-40 italic">No symbols found in this file</div>
            </div>
          </Panel>
        </PanelGroup>
      </div>

      {/* Status Bar */}
      <footer className="h-6 bg-blue-600 text-white flex items-center justify-between px-3 text-[11px]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <GitBranch className="h-3 w-3" />
            main*
          </div>
          <div>0 Errors, 0 Warnings</div>
        </div>
        <div className="flex items-center gap-4">
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
          <span>Ln 1, Col 1</span>
        </div>
      </footer>
    </div>
  );
}
