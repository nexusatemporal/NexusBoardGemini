
import React, { useState } from 'react';
import { Settings as SettingsIcon, Mail, Database, ShieldCheck, Cpu, Bell, Globe, Save, ChevronRight } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('smtp');

  const sections = [
    { id: 'smtp', label: 'Email', icon: <Mail size={18} /> },
    { id: 'ai', label: 'IA/APIs', icon: <Cpu size={18} /> },
    { id: 'database', label: 'DB', icon: <Database size={18} /> },
    { id: 'security', label: 'RBAC', icon: <ShieldCheck size={18} /> },
    { id: 'notifications', label: 'Alertas', icon: <Bell size={18} /> },
  ];

  return (
    <div className="h-full flex flex-col page-transition space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-nexus-grayDark dark:bg-white/10 rounded-3xl text-white shadow-xl">
            <SettingsIcon size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Nexus Core Config</h1>
            <p className="text-nexus-grayLight dark:text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Gestão de Infraestrutura e Governança</p>
          </div>
        </div>
        <button className="w-full md:w-auto nexus-gradient text-white px-10 py-4 rounded-3xl text-xs font-black shadow-2xl shadow-orange-300 dark:shadow-orange-900/30 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
          <Save size={20} /> Salvar Cluster
        </button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0 overflow-hidden">
        {/* Nav - Horizontal on mobile */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto no-scrollbar lg:w-72 flex-shrink-0">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                activeSection === s.id 
                ? 'bg-white dark:bg-nexus-darkCard text-nexus-orange shadow-2xl border-orange-100 dark:border-orange-900/30' 
                : 'text-nexus-grayLight dark:text-gray-500 hover:bg-white dark:hover:bg-white/5 border-transparent'
              }`}
            >
              {s.icon} <span className="flex-1 text-left">{s.label}</span>
              {activeSection === s.id && <ChevronRight size={14} className="hidden lg:block" />}
            </button>
          ))}
        </div>

        {/* Form Area */}
        <div className="flex-1 bg-white dark:bg-nexus-darkCard rounded-[48px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl p-6 md:p-12 overflow-y-auto custom-scrollbar">
          {activeSection === 'smtp' && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <div className="pb-6 border-b border-gray-100 dark:border-nexus-darkBorder">
                <h3 className="text-2xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Nexus Mail SMTP</h3>
                <p className="text-[10px] text-nexus-grayLight dark:text-gray-500 font-black uppercase tracking-widest mt-2">Relay de e-mails para alertas críticos de sistema.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: 'Servidor Relay', value: 'SMTP.zoho.com' },
                  { label: 'Porta SSL', value: '587' },
                  { label: 'Usuário Nexus', value: 'suporte@nexusatemporal.com' },
                  { label: 'App Token', value: 'YgpHJ3QTPgiQ', isPassword: true },
                ].map((field, i) => (
                  <div key={i} className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-nexus-grayLight dark:text-gray-500 ml-1">{field.label}</label>
                    <input 
                      type={field.isPassword ? 'password' : 'text'} 
                      defaultValue={field.value} 
                      className="w-full bg-gray-50 dark:bg-nexus-darkBg border border-gray-100 dark:border-nexus-darkBorder p-5 rounded-3xl text-xs font-bold outline-none focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/10 focus:border-orange-300 transition-all dark:text-white" 
                    />
                  </div>
                ))}
              </div>
              <div className="p-8 bg-orange-50 dark:bg-orange-950/20 rounded-[40px] border border-orange-100 dark:border-orange-900/30 flex flex-col md:flex-row items-center gap-6 shadow-inner">
                <div className="p-4 bg-nexus-orange rounded-3xl text-white shadow-2xl shadow-orange-300 rotate-6 group-hover:rotate-0 transition-transform"><Mail size={24} /></div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-sm font-black text-nexus-orangeDark dark:text-orange-400 uppercase tracking-widest">Validar Handshake</h4>
                  <p className="text-[10px] text-nexus-orange/70 dark:text-orange-300/60 mt-2 font-bold uppercase tracking-widest leading-relaxed">Clique para disparar um e-mail de teste e verificar a integridade da conexão SMTP.</p>
                  <button className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-nexus-orange underline hover:text-nexus-orangeDark transition-colors">Disparar Teste de Echo</button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'ai' && (
            <div className="space-y-10 animate-in fade-in duration-500">
               <div className="pb-6 border-b border-gray-100 dark:border-nexus-darkBorder">
                <h3 className="text-2xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Nexus AI Engine Config</h3>
                <p className="text-[10px] text-nexus-grayLight dark:text-gray-500 font-black uppercase tracking-widest mt-2">Chaves de API e Orquestração de Modelos.</p>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Google Gemini 3 Core', key: '••••••••••••••••••••••••' },
                  { name: 'OpenRouter Hybrid Access', key: '••••••••••••••••••••••••' },
                  { name: 'Local AnythingLLM Instance', key: 'http://nexus-vps-cluster:3001' }
                ].map(api => (
                  <div key={api.name} className="flex items-center justify-between p-6 border border-gray-100 dark:border-nexus-darkBorder rounded-4xl bg-gray-50/50 dark:bg-black/20 hover:border-nexus-orange/40 transition-all group">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-nexus-darkBg flex items-center justify-center border border-gray-200 dark:border-nexus-darkBorder shadow-lg group-hover:rotate-12 transition-transform"><Cpu size={20} className="text-nexus-orange" /></div>
                      <div>
                        <p className="text-[10px] font-black text-nexus-grayDark dark:text-white uppercase tracking-widest">{api.name}</p>
                        <p className="text-[9px] text-nexus-grayLight dark:text-gray-500 font-bold tracking-widest mt-1 uppercase">{api.key}</p>
                      </div>
                    </div>
                    <button className="text-[9px] font-black uppercase tracking-widest text-nexus-orange hover:underline">Configurar</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'security' && (
             <div className="space-y-10 animate-in fade-in duration-500">
                <div className="pb-6 border-b border-gray-100 dark:border-nexus-darkBorder">
                  <h3 className="text-2xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Políticas RBAC Nexus</h3>
                  <p className="text-[10px] text-nexus-grayLight dark:text-gray-500 font-black uppercase tracking-widest mt-2">Definição granular de permissões e acessos.</p>
                </div>
                <div className="space-y-4">
                  {['CEO', 'Diretor Core', 'Senior Dev', 'QA Analyst', 'Growth/Mkt'].map(role => (
                    <div key={role} className="flex flex-col sm:flex-row items-center justify-between p-6 border border-gray-50 dark:border-nexus-darkBorder rounded-4xl bg-white dark:bg-black/10 gap-6">
                      <span className="text-[11px] font-black text-nexus-grayDark dark:text-white uppercase tracking-widest">{role}</span>
                      <div className="flex flex-wrap justify-center gap-6">
                        {['Read', 'Write', 'Delete', 'Super'].map(p => (
                          <label key={p} className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-6 h-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-nexus-orange flex items-center justify-center transition-all bg-white dark:bg-nexus-darkBg shadow-sm">
                                {p === 'Read' && <div className="w-3 h-3 bg-nexus-orange rounded-md shadow-lg shadow-orange-500/50"></div>}
                             </div>
                             <span className="text-[9px] text-nexus-grayLight dark:text-gray-500 font-black uppercase tracking-[0.2em]">{p}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
