import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, ChevronRight, Menu, BookOpen, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function Documentation() {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden font-sans">
      {/* Top Nav */}
      <header className="h-16 border-b flex items-center justify-between px-8 sticky top-0 z-20 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Nebula Docs</span>
          </div>
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search docs..." className="pl-10 h-9 bg-muted/50 border-none" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">v1.2.0</Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="icon"><Github className="h-5 w-5" /></Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-72 border-r hidden lg:flex flex-col bg-muted/5">
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-8">
              {[
                { title: 'Getting Started', items: ['Introduction', 'Installation', 'Core Concepts', 'First App'] },
                { title: 'Components', items: ['Button', 'Card', 'Dialog', 'Input', 'Layout', 'Navigation'] },
                { title: 'Advanced', items: ['Theming', 'State Management', 'Performance', 'Deployment'] },
              ].map(section => (
                <div key={section.title} className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider opacity-40">{section.title}</h4>
                  <div className="space-y-1">
                    {section.items.map(item => (
                      <a 
                        key={item} 
                        href="#" 
                        className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${item === 'Introduction' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted text-muted-foreground hover:text-foreground'}`}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden flex">
          <ScrollArea className="flex-1">
            <div className="max-w-3xl mx-auto py-12 px-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Docs <ChevronRight className="h-4 w-4" /> Getting Started
                </div>
                <h1 className="text-5xl font-bold tracking-tight">Introduction</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  NebulaOS is a modern, component-driven framework for building immersive desktop-like experiences in the browser.
                </p>
              </div>

              <Separator />

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Why NebulaOS?</h2>
                <p className="leading-relaxed opacity-80">
                  NebulaOS provides a set of high-quality components and utilities designed to handle complex window management, 
                  resizable layouts, and real-time interactions out of the box.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl border bg-muted/30 space-y-2">
                    <h3 className="font-bold">Type Safe</h3>
                    <p className="text-sm opacity-70">Built with TypeScript from the ground up for maximum reliability.</p>
                  </div>
                  <div className="p-6 rounded-xl border bg-muted/30 space-y-2">
                    <h3 className="font-bold">Performant</h3>
                    <p className="text-sm opacity-70">Optimized for 60fps animations and smooth window dragging.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Quick Start</h2>
                <div className="bg-zinc-900 rounded-xl p-6 font-mono text-sm text-zinc-300 overflow-x-auto">
                  <div className="flex justify-between items-center mb-4 opacity-40">
                    <span>bash</span>
                    <Button variant="ghost" size="sm" className="h-6">Copy</Button>
                  </div>
                  <code>npx create-nebula-app my-os</code>
                </div>
              </div>

              <footer className="pt-12 pb-20 border-t flex justify-between items-center text-sm opacity-50">
                <span>Last updated: April 5, 2026</span>
                <a href="#" className="flex items-center gap-1 hover:underline">Edit this page <ExternalLink className="h-3 w-3" /></a>
              </footer>
            </div>
          </ScrollArea>

          {/* Right TOC */}
          <aside className="w-64 hidden xl:block p-8">
            <div className="sticky top-8 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider opacity-40">On this page</h4>
              <nav className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary">Why NebulaOS?</a>
                <a href="#" className="block hover:text-primary">Key Features</a>
                <a href="#" className="block hover:text-primary">Quick Start</a>
                <a href="#" className="block hover:text-primary">Next Steps</a>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
