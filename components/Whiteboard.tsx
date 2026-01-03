
import React, { useState } from 'react';
import { MousePointer2, Square, Circle, Type, Minus, Image as ImageIcon, Download, Share2, Layers, Plus } from 'lucide-react';

const Whiteboard: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('select');

  const tools = [
    { id: 'select', icon: <MousePointer2 size={18} />, label: 'Selecionar' },
    { id: 'rect', icon: <Square size={18} />, label: 'Retângulo' },
    { id: 'circle', icon: <Circle size={18} />, label: 'Círculo' },
    { id: 'text', icon: <Type size={18} />, label: 'Texto' },
    { id: 'line', icon: <Minus size={18} />, label: 'Linha' },
    { id: 'image', icon: <ImageIcon size={18} />, label: 'Imagem' },
  ];

  return (
    <div className="h-full flex flex-col space-y-8 page-transition">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Nexus Flow</h1>
          <p className="text-nexus-grayLight dark:text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Colaboração Infinita em Tempo Real</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-white dark:bg-nexus-darkCard border border-gray-100 dark:border-nexus-darkBorder px-6 py-3 rounded-2xl text-xs font-black text-nexus-grayDark dark:text-white hover:bg-gray-50 flex items-center justify-center gap-2 uppercase tracking-widest shadow-sm">
            <Share2 size={16} /> Compartilhar
          </button>
          <button className="flex-1 md:flex-none nexus-gradient text-white px-8 py-3 rounded-2xl text-xs font-black shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
            <Download size={16} /> Exportar
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-nexus-darkBg rounded-[48px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl overflow-hidden relative group">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#4B4B4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Floating Toolbar - Responsive */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-nexus-darkCard/90 backdrop-blur-xl border border-gray-100 dark:border-nexus-darkBorder p-2 rounded-3xl shadow-2xl flex flex-col gap-2 z-20">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`p-4 rounded-2xl transition-all ${selectedTool === tool.id ? 'bg-nexus-orange text-white shadow-xl rotate-3' : 'text-nexus-grayLight dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-white/5 hover:text-nexus-orange'}`}
              title={tool.label}
            >
              {tool.icon}
            </button>
          ))}
          <div className="h-px bg-gray-100 dark:bg-nexus-darkBorder my-2 mx-2"></div>
          <button className="p-4 text-nexus-grayLight dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 rounded-2xl"><Layers size={18} /></button>
        </div>

        {/* Canvas Content */}
        <div className="w-full h-full flex items-center justify-center relative cursor-crosshair">
          <div className="text-center space-y-6 max-w-sm p-10 bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-[40px] border border-white/40 dark:border-white/5 shadow-inner">
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-4xl flex items-center justify-center text-nexus-orange mx-auto shadow-inner">
              <Layers size={36} />
            </div>
            <h3 className="font-black text-nexus-grayDark dark:text-white uppercase tracking-widest text-sm">Nexus Flow Canvas</h3>
            <p className="text-xs text-nexus-grayLight dark:text-gray-400 font-medium leading-relaxed uppercase tracking-wider">Arraste ferramentas ou use comandos IA para desenhar wireframes e fluxos.</p>
            <div className="flex flex-col gap-2 pt-4">
               <span className="px-4 py-2 bg-gray-50 dark:bg-black/40 text-[9px] font-black rounded-full text-gray-400 dark:text-gray-600 uppercase tracking-widest">CTRL + V para colar assets</span>
               <span className="px-4 py-2 bg-gray-50 dark:bg-black/40 text-[9px] font-black rounded-full text-gray-400 dark:text-gray-600 uppercase tracking-widest">Pressione '/' para IA</span>
            </div>
          </div>
          
          {/* Mock elements */}
          <div className="absolute top-24 right-12 md:right-40 bg-orange-50 dark:bg-orange-950/20 border-2 border-nexus-orange p-8 rounded-[32px] shadow-2xl rotate-3 w-64 group/card hover:rotate-0 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-nexus-orange"></span>
              <p className="text-[10px] font-black text-nexus-orangeDark dark:text-orange-400 uppercase tracking-widest">Sprint Goal</p>
            </div>
            <p className="text-xs text-nexus-grayDark dark:text-gray-200 font-black leading-relaxed">Migrar toda a arquitetura Legada para Docker Swarm + Traefik.</p>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-nexus-darkCard/90 backdrop-blur-xl border border-gray-100 dark:border-nexus-darkBorder px-6 py-3 rounded-full shadow-2xl flex items-center gap-6 z-20">
          <button className="text-nexus-grayLight dark:text-gray-400 hover:text-nexus-orange font-black text-xl">-</button>
          <span className="text-[10px] font-black text-nexus-grayDark dark:text-white uppercase tracking-widest">100% Zoom</span>
          <button className="text-nexus-grayLight dark:text-gray-400 hover:text-nexus-orange font-black text-xl">+</button>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
