import { motion } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BentoGrid() {
  return (
    <div className="h-screen w-screen bg-black text-white overflow-auto font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full" />
            <span className="font-bold text-xl">FA.</span>
          </div>
          <nav className="flex items-center gap-8 text-sm font-medium opacity-60">
            <a href="#" className="hover:opacity-100">Work</a>
            <a href="#" className="hover:opacity-100">About</a>
            <a href="#" className="hover:opacity-100">Contact</a>
            <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black">Resume</Button>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-6 md:grid-rows-4 gap-4 h-[1200px] md:h-[800px]">
          {/* Main Intro */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-8 w-8" />
            </div>
            <div className="space-y-4 relative z-10">
              <h1 className="text-5xl font-bold tracking-tight leading-tight">
                Building digital <br />
                <span className="text-zinc-500">experiences</span> that <br />
                matter.
              </h1>
              <p className="text-zinc-400 max-w-xs">
                Product Designer & Frontend Developer based in India. Specialized in high-end web applications.
              </p>
            </div>
            <div className="flex gap-4 relative z-10">
              <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white hover:text-black"><Github className="h-5 w-5" /></Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white hover:text-black"><Twitter className="h-5 w-5" /></Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white hover:text-black"><Mail className="h-5 w-5" /></Button>
            </div>
          </motion.div>

          {/* Project 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-blue-600 rounded-3xl p-8 flex items-center justify-between group cursor-pointer"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">NebulaOS</h3>
              <p className="text-blue-100 opacity-80">A full desktop experience in the browser.</p>
            </div>
            <ExternalLink className="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-2 bg-zinc-900 rounded-3xl p-8 border border-white/5 flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold">Stack</h3>
            <div className="space-y-4">
              {[
                { name: 'React', icon: Code, color: 'text-blue-400' },
                { name: 'Tailwind', icon: Palette, color: 'text-teal-400' },
                { name: 'Framer', icon: Zap, color: 'text-purple-400' },
              ].map(tech => (
                <div key={tech.name} className="flex items-center gap-3">
                  <tech.icon className={`h-5 w-5 ${tech.color}`} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-zinc-900 rounded-3xl p-8 border border-white/5 flex flex-col justify-center items-center text-center gap-2"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold">Available for work</span>
            <span className="text-xs text-zinc-500">Starting May 2026</span>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-zinc-900 rounded-3xl p-8 border border-white/5 flex items-center justify-between group cursor-pointer"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Lumina AI</h3>
              <p className="text-zinc-500">Next-gen AI content generation platform.</p>
            </div>
            <ExternalLink className="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Location */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-zinc-900 rounded-3xl p-8 border border-white/5 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="space-y-1 relative z-10">
              <h3 className="text-xl font-bold">India</h3>
              <p className="text-xs text-zinc-500">Based in Mumbai</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
