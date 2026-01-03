
import React, { useState } from 'react';
import { MousePointer2, Square, Circle, Type, Minus, Image as ImageIcon, Download, Share2, Layers } from 'lucide-react';

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
    <div className="h-full flex flex-col animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-nexus-grayDark">Nexus Flow</h1>
          <p className="text-nexus-grayLight text-sm">Quadro branco colaborativo em tempo real.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-nexus-grayDark hover:bg-gray-50 flex items-center gap-2">
            <Share2 size={16} /> Compartilhar
          </button>
          <button className="nexus-gradient text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 flex items-center gap-2">
            <Download size={16} /> Exportar
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden relative group">
        {/* Grid Background */}
        {/* Fix: Removed the invalid 'size' property from the style object below */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4B4B4D 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Floating Toolbar */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-gray-100 p-2 rounded-2xl shadow-2xl flex flex-col gap-2 z-10">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`p-3 rounded-xl transition-all ${selectedTool === tool.id ? 'bg-nexus-orange text-white shadow-lg' : 'text-nexus-grayLight hover:bg-orange-50 hover:text-nexus-orange'}`}
              title={tool.label}
            >
              {tool.icon}
            </button>
          ))}
          <div className="h-px bg-gray-100 my-1 mx-2"></div>
          <button className="p-3 text-nexus-grayLight hover:bg-gray-50 rounded-xl"><Layers size={18} /></button>
        </div>

        {/* Canvas Area (Placeholder for actual fabric.js or tldraw implementation) */}
        <div className="w-full h-full flex items-center justify-center relative cursor-crosshair">
          <div className="text-center space-y-4 max-w-md p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100/50 shadow-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-nexus-orange mx-auto">
              <Layers size={32} />
            </div>
            <h3 className="font-bold text-nexus-grayDark">Pronto para criar?</h3>
            <p className="text-xs text-nexus-grayLight">Arraste ferramentas da barra lateral para começar a desenhar fluxogramas, wireframes ou mapas mentais.</p>
            <div className="flex justify-center gap-2">
               <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold rounded-full text-gray-400">CTRL + V para colar imagens</span>
               <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold rounded-full text-gray-400">ENTER para texto</span>
            </div>
          </div>
          
          {/* Mock elements */}
          <div className="absolute top-20 right-40 bg-orange-50 border-2 border-nexus-orange p-6 rounded-lg shadow-lg rotate-3 w-48">
            <p className="text-xs font-bold text-nexus-orangeDark mb-2">IDEIA PRINCIPAL</p>
            <p className="text-xs text-nexus-grayDark font-medium">Migrar infra para Docker Swarm + Traefik até sexta.</p>
          </div>
          <div className="absolute bottom-40 left-60 bg-white border border-gray-200 p-4 rounded-full shadow-md -rotate-6">
            <p className="text-xs font-bold">🎯 Definir Metas QA</p>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-full shadow-lg flex items-center gap-4">
          <button className="text-nexus-grayLight hover:text-nexus-orange font-bold">-</button>
          <span className="text-xs font-bold text-nexus-grayDark">100%</span>
          <button className="text-nexus-grayLight hover:text-nexus-orange font-bold">+</button>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
