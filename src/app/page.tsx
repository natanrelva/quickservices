export default function DevelopmentHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 QuickServices - Dev
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ambiente de Desenvolvimento
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-lg font-semibold mb-2">Status do Ambiente</h2>
              <div className="text-left space-y-2">
                <p>✅ Next.js Configurado</p>
                <p>✅ TypeScript Ativo</p>
                <p>✅ Tailwind CSS Pronto</p>
                <p>🔄 Banco de Dados (Próximo passo)</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-lg font-semibold mb-2">Próximos Passos</h2>
              <div className="text-left space-y-2">
                <p>1. Configurar Banco de Dados</p>
                <p>2. Setup Autenticação</p>
                <p>3. Deploy em Dev</p>
                <p>4. Configurar CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}