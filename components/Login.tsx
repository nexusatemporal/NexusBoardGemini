
import React, { useState } from 'react';
import { Mail, Lock, ChevronRight, AlertCircle } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-nexus-bg p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden">
        {/* Left Side - Visual */}
        <div className="hidden lg:flex nexus-gradient p-16 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-20 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
             <div className="absolute bottom-40 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-3xl mb-8">
              N
            </div>
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
              Nexus <br /> Atemporal
            </h1>
            <p className="text-orange-100 text-lg max-w-md">
              A nova fronteira da colaboração empresarial. Gestão, IA e produtividade em um único lugar.
            </p>
          </div>

          <div className="relative z-10 flex gap-12 text-white">
            <div>
              <p className="text-3xl font-bold">200+</p>
              <p className="text-orange-200 text-sm">Usuários Ativos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-orange-200 text-sm">Monitoramento</p>
            </div>
            <div>
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-orange-200 text-sm">Uptime</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 sm:p-16 lg:p-24 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-nexus-grayDark mb-2">Bem-vindo</h2>
            <p className="text-nexus-grayLight">Entre com suas credenciais Nexus para continuar.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-nexus-grayDark uppercase tracking-wider ml-1">E-mail Corporativo</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-nexus-orange transition-colors" size={20} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contato@nexusatemporal.com.br"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-orange-100 focus:border-orange-300 outline-none transition-all text-sm text-nexus-grayDark font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-nexus-grayDark uppercase tracking-wider">Senha</label>
                <a href="#" className="text-xs font-semibold text-nexus-orange hover:text-nexus-orangeDark transition-colors">Esqueceu a senha?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-nexus-orange transition-colors" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-orange-100 focus:border-orange-300 outline-none transition-all text-sm text-nexus-grayDark font-medium"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full nexus-gradient text-white py-4 rounded-2xl font-bold shadow-xl shadow-orange-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
            >
              Acessar Plataforma <ChevronRight size={20} />
            </button>
          </form>

          <p className="mt-12 text-center text-sm text-nexus-grayLight font-medium">
            Problemas no acesso? <a href="mailto:suporte@nexusatemporal.com" className="text-nexus-orange font-bold">Contate o TI</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
