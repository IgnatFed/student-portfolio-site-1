import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue via-medical-purple to-medical-blue min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Александр Петров
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Студент 3 курса медицинского университета
            </p>
            <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto">
              Изучаю медицину с увлечением, стремлюсь к совершенству в учебе и
              готовлюсь стать квалифицированным врачом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-medical-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                О студенте
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-medical-blue transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <Achievements />
    </div>
  );
};

export default Index;
