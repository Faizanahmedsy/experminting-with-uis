import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

export function Notepad() {
  const [content, setContent] = useState('');

  return (
    <div className="flex flex-col h-full bg-white text-black p-0">
      <div className="flex items-center gap-4 px-4 py-1 bg-zinc-100 border-b text-xs font-medium">
        <button className="hover:text-blue-600">File</button>
        <button className="hover:text-blue-600">Edit</button>
        <button className="hover:text-blue-600">Format</button>
        <button className="hover:text-blue-600">View</button>
        <button className="hover:text-blue-600">Help</button>
      </div>
      <Textarea
        className="flex-1 resize-none border-none focus-visible:ring-0 rounded-none p-4 font-mono text-sm"
        placeholder="Start typing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
