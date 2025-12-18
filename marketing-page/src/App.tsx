import { Shield, Scale, FileText, Lock, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header / Nav similar to a partnership announcement */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-blue-600 tracking-tight">Clickmind</span>
            <span className="text-slate-300">|</span>
            <span className="hidden md:block text-sm font-medium text-slate-500 uppercase tracking-wider">Recomendação Oficial</span>
          </div>
          <a
            href="https://souzaeborgesadvogados.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Visitar site do parceiro
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Parceiro Jurídico Recomendado</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Conheça a <span className="text-blue-600">SOUZA & BORGES</span> <br className="hidden md:block" />
            <span className="text-slate-700">ADVOGADOS ASSOCIADOS</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            O escritório que indicamos para demandas jurídicas do mundo digital.
            Na Clickmind, selecionamos com cuidado quem cuida da segurança jurídica dos nossos alunos e parceiros.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://souzaeborgesadvogados.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              Conhecer a Souza & Borges
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-300 font-bold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Falar pelo WhatsApp
              <MessageCircle className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-30 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-slate-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Why We Recommend */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que recomendamos a SOUZA & BORGES?</h2>
            <p className="text-lg text-slate-600">
              Lidamos diariamente com negócios digitais e sabemos dos desafios. É essencial ter um parceiro que entenda a lei e a realidade da internet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Foco no Digital</h3>
              <p className="text-slate-600 leading-relaxed">
                Especialistas em casos de contas hackeadas, problemas com plataformas, golpes virtuais e fraudes online.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Direito do Consumidor</h3>
              <p className="text-slate-600 leading-relaxed">
                Atuação sólida em dívidas bancárias e relações de consumo, questões comuns no dia a dia de quem empreende.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Organização e Ética</h3>
              <p className="text-slate-600 leading-relaxed">
                Atendimento organizado, explicações didáticas e compromisso absoluto com o sigilo e as normas da OAB.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <span className="inline-block bg-white border border-slate-200 rounded-lg px-6 py-3 text-sm text-slate-500">
              Nota: A recomendação baseia-se na postura profissional e seriedade técnica, sem promessa de resultado garantido.
            </span>
          </div>
        </div>
      </section>

      {/* How It Helps You */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Como a Souza & Borges pode ajudar você que está na Clickmind
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Muitos de nossos alunos e clientes enfrentam barreiras que travam o crescimento do negócio. Veja onde o escritório pode atuar:
              </p>

              <div className="space-y-6">
                {[
                  { title: "Conta de Instagram invadida ou suspensa", desc: "Apoio jurídico para análise, provas e medidas para recuperação." },
                  { title: "Problemas com plataformas de anúncio", desc: "Resolução de bloqueios injustos e retenção de valores." },
                  { title: "Golpes e Fraudes Online", desc: "Defesa rápida contra crimes digitais que afetam seu faturamento." },
                  { title: "Dívidas e Contratos Bancários", desc: "Renegociação e defesa contra cobranças abusivas." },
                  { title: "Direitos do Autista (BPC)", desc: "Orientação especializada para famílias de empreendedores." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100">
              <div className="flex flex-col h-full justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">"A atuação séria que buscávamos"</h3>
                  <p className="text-xl text-slate-600 italic leading-relaxed">
                    "Na Clickmind, trabalhamos todos os dias com negócios digitais que precisam de respostas rápidas e seguras. A Souza & Borges Advogados Associados se destacou para nós pela forma organizada de atender, pela clareza ao explicar os cenários possíveis e pelo respeito às normas éticas da advocacia."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    C
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-slate-900">Equipe Clickmind</p>
                    <p className="text-sm text-slate-500">Parceiro Oficial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Logic */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Uma parceria de confiança e responsabilidade</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            A Clickmind indica a Souza & Borges como parceiro jurídico de confiança. O escritório, por sua vez, reconhece na Clickmind uma referência em estratégias digitais responsáveis. Não se trata de promessa de resultados, mas de uma relação construída com base na seriedade, técnica e transparência.
          </p>
          <div className="flex justify-center space-x-8 opacity-50">
            {/* Placeholder for logos if needed, leveraging text for now */}
            <span className="text-2xl font-bold tracking-tighter">CLICKMIND</span>
            <span className="text-2xl font-light">|</span>
            <span className="text-2xl font-bold tracking-tighter">SOUZA & BORGES</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Quer conhecer o escritório que recomendamos?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Se você é aluno ou cliente da Clickmind e precisa de orientação jurídica, vale a pena conhecer a SOUZA & BORGES ADVOGADOS ASSOCIADOS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://souzaeborgesadvogados.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-1"
            >
              Acessar site do Escritório
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white border border-blue-500 font-bold rounded-lg hover:bg-blue-800 transition-all"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-200 opacity-80 max-w-lg mx-auto">
            A contratação é uma decisão exclusiva do cliente. Cada caso é único e depende de análise técnica, sem garantia prévia de sucesso.
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Página de Recomendação Clickmind.
          </p>
          <p className="text-sm">
            Souza & Borges Advogados Associados - CNPJ 53.266.530/0001-42<br />
            Rua 7 de Setembro, 655, Centro, Morrinhos/GO
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
