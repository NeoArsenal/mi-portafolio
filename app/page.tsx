export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px]">
        
        {/* TARJETA PRINCIPAL - HERO */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 rounded-[2.5rem] p-10 flex flex-col justify-end shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <div className="w-32 h-32 border-4 border-white rounded-full"></div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Alonso</h1>
          <p className="text-xl font-medium opacity-90">Ingeniería de Sistemas @ UPN</p>
          <p className="text-sm mt-2 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">8vo Ciclo • Lima, Perú</p>
        </div>

        {/* TARJETA STACK */}
        <div className="md:col-span-2 bg-[#161616] rounded-[2.5rem] p-8 border border-white/5 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">Stack Tecnológico</p>
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'OpenCV'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-[#202020] rounded-2xl text-sm font-semibold border border-white/5 hover:border-purple-500 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* TARJETA LINKEDIN */}
        <a href="#" className="bg-[#0077b5] rounded-[2.5rem] p-6 flex flex-col items-center justify-center gap-2 hover:scale-[0.98] transition-transform cursor-pointer shadow-lg shadow-blue-900/20">
          <span className="text-3xl">in</span>
          <span className="font-bold">Conectar ↗</span>
        </a>

        {/* TARJETA GITHUB */}
        <a href="#" className="bg-white text-black rounded-[2.5rem] p-6 flex flex-col items-center justify-center gap-2 hover:scale-[0.98] transition-transform cursor-pointer">
          <span className="text-3xl">github</span>
          <span className="font-bold">Código ↗</span>
        </a>

        {/* PROYECTO 1: E-COMMERCE (Grande) */}
        <div className="md:col-span-2 md:row-span-2 bg-[#161616] rounded-[2.5rem] p-8 border border-white/5 group relative overflow-hidden shadow-xl">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">E-commerce de Ropa</span>
              <h3 className="text-3xl font-bold mt-2">Fullstack Shop</h3>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Plataforma construida con MedusaJS, Next.js y Strapi. Gestión de inventario y pagos integrados.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-1 rounded-lg italic">En desarrollo</span>
            </div>
          </div>
          {/* Efecto de luz al fondo */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/10 blur-[50px]"></div>
        </div>

        {/* PROYECTO 2: ROBÓTICA */}
        <div className="md:col-span-2 bg-[#161616] rounded-[2.5rem] p-8 border border-white/5 flex items-center justify-between group hover:bg-[#1a1a1a] transition-all">
          <div>
            <h3 className="text-xl font-bold">Robótica & CV</h3>
            <p className="text-gray-500 text-sm">Visión artificial con Raspberry Pi</p>
          </div>
          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 group-hover:rotate-12 transition-transform">
             🤖
          </div>
        </div>

        {/* TARJETA LOGRO (EXPOINGENIERÍA) */}
        <div className="md:col-span-2 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-[2.5rem] p-8 border border-yellow-500/20 flex items-center gap-6">
          <span className="text-4xl">🏆</span>
          <div>
            <h4 className="font-bold text-yellow-500">1er Puesto Innovación</h4>
            <p className="text-sm text-gray-400">EXPOINGENIERÍA 2025-2 • UPN</p>
          </div>
        </div>

      </div>
    </main>
  );
}