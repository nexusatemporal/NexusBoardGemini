
import React, { useState } from 'react';
import { Bot, Sparkles, Send, Zap, FileJson, BrainCircuit, Search, ChevronDown, Layers } from 'lucide-react';

const AIWorkspace: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('gemini-3-flash-preview');

  const models = [
    { id: 'gemini-3-flash-preview', name: 'Google Gemini 3 Flash', icon: <Zap className="text-yellow-500" size={18} /> },
    { id: 'gpt-4o', name: 'OpenAI GPT-4o', icon: <BrainCircuit className="text-green-500" size={18} /> },
    { id: 'claude-3-opus', name: 'Claude 3.5 Sonnet', icon: <Sparkles className="text-purple-500" size={18} /> },
  ];

  return (
    <div className="h-full flex flex-col page-transition space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-nexus-orange rounded-3xl text-white shadow-2xl shadow-orange-300 dark:shadow-orange-900/40 rotate-6 hover:rotate-0 transition-transform">
            <Bot size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Nexus AI Orchestrator</h1>
            <p className="text-nexus-grayLight dark:text-gray-400 text-sm font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Multi-LLM Connected Workspace
            </p>
          </div>
        </div>
        <button className="w-full md:w-auto bg-white dark:bg-nexus-darkCard border border-gray-100 dark:border-nexus-darkBorder px-8 py-4 rounded-3xl text-xs font-black text-nexus-grayDark dark:text-white hover:bg-gray-50 dark:hover:bg-nexus-darkBg shadow-xl flex items-center justify-center gap-3 transition-all uppercase tracking-widest">
           <Layers size={18} className="text-nexus-orange" /> Fluxos Ativos
        </button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0 overflow-hidden">
        <div className="flex-1 flex flex-col bg-white dark:bg-nexus-darkCard rounded-[48px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl overflow-hidden min-h-[400px]">
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar bg-gray-50/20 dark:bg-black/10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-nexus-orange shadow-inner border border-orange-200 dark:border-orange-900/50 flex-shrink-0">
                <Bot size={24} />
              </div>
              <div className="flex-1 bg-white dark:bg-nexus-darkBg rounded-4xl p-6 md:p-8 text-sm md:text-base text-nexus-grayDark dark:text-gray-200 leading-relaxed border border-gray-100 dark:border-nexus-darkBorder shadow-sm font-medium">
                Olá, John! Sou o assistente core do Nexus. Analisei os repositórios na VPS e os dados do NocoDB. 
                <br /><br />
                Atualmente, a sprint <span className="text-nexus-orange font-black">Nexus Alpha</span> está com 65% de progresso, mas notei um gargalo no deploy do Traefik. Deseja que eu gere os scripts de automação?
              </div>
            </div>
            
            <div className="flex gap-6 flex-row-reverse">
              <div className="w-12 h-12 rounded-2xl nexus-gradient flex items-center justify-center text-white font-black text-xs shadow-xl flex-shrink-0">
                EU
              </div>
              <div className="flex-1 bg-orange-50 dark:bg-orange-950/20 rounded-4xl p-6 md:p-8 text-sm md:text-base text-nexus-grayDark dark:text-gray-200 leading-relaxed border border-orange-100 dark:border-orange-900/30 shadow-sm font-medium">
                Sim, por favor. Analise a arquitetura Docker Swarm atual e sugira uma configuração otimizada para o balanceamento de carga.
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 bg-gray-50/50 dark:bg-black/20 border-t border-gray-100 dark:border-nexus-darkBorder">
            <div className="relative group">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Pergunte qualquer coisa para a inteligência atemporal..." 
                className="w-full bg-white dark:bg-nexus-darkBg border border-gray-100 dark:border-nexus-darkBorder rounded-[32px] p-6 md:p-8 pr-32 text-sm md:text-base min-h-[140px] focus:ring-8 focus:ring-orange-100 dark:focus:ring-orange-900/10 focus:border-orange-300 transition-all outline-none resize-none shadow-2xl dark:text-white font-medium"
              />
              <div className="absolute right-6 bottom-6 flex items-center gap-3">
                <button className="p-3 text-gray-400 hover:text-nexus-orange transition-colors">
                  <Sparkles size={24} />
                </button>
                <button className="nexus-gradient text-white px-10 py-4 rounded-2xl text-xs font-black shadow-2xl shadow-orange-300 dark:shadow-orange-900/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 uppercase tracking-widest">
                  <Send size={20} /> Enviar
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-[10px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] mr-2 py-2">Prompts Rápidos:</span>
              {["Otimizar Infra", "Resumo de Sprint", "Code Review QA", "Marketing Copy"].map(s => (
                <button key={s} className="text-[10px] bg-white dark:bg-nexus-darkBg border border-gray-100 dark:border-nexus-darkBorder px-5 py-2.5 rounded-full text-nexus-grayLight dark:text-gray-400 font-black uppercase tracking-widest hover:border-nexus-orange hover:text-nexus-orange transition-all shadow-sm">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-96 space-y-8 overflow-y-auto custom-scrollbar pr-1 flex-shrink-0">
          <div className="bg-white dark:bg-nexus-darkCard p-8 rounded-[40px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl">
            <h3 className="font-black text-nexus-grayDark dark:text-white text-xs uppercase tracking-[0.3em] mb-8 flex items-center justify-between">
              Seleção de Modelo <ChevronDown size={14} />
            </h3>
            <div className="space-y-3">
              {models.map(model => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-3xl transition-all border ${
                    selectedModel === model.id ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-900/50 text-nexus-orange shadow-xl' : 'border-transparent text-nexus-grayLight dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-nexus-darkBg'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {model.icon}
                    <span className="text-xs font-black uppercase tracking-widest">{model.name}</span>
                  </div>
                  {selectedModel === model.id && <div className="w-2 h-2 rounded-full bg-nexus-orange animate-ping"></div>}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-nexus-grayDark dark:bg-black p-8 rounded-[40px] text-white shadow-2xl overflow-hidden relative group border border-white/5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-nexus-orange opacity-10 rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000"></div>
            <h3 className="font-black text-xs uppercase tracking-[0.3em] mb-6 relative z-10 flex items-center gap-3">
              <Zap size={20} className="text-nexus-orange" /> Consumo de Tokens
            </h3>
            <div className="relative z-10">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3 text-nexus-grayLight">
                <span>Plano Enterprise</span>
                <span className="text-white">82%</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full mb-8 shadow-inner overflow-hidden">
                <div className="h-full nexus-gradient w-[82%] rounded-full shadow-[0_0_20px_rgba(255,115,0,0.6)]"></div>
              </div>
              <button className="w-full py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-xl">
                Upgrade Nexus Power
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkspace;
