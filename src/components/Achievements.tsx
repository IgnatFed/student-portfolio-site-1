import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Achievements = () => {
  const achievements = [
    {
      title: "Отличник по анатомии",
      description: "Средний балл 4.8 по дисциплине",
      icon: "Award",
      category: "Учеба",
      date: "2024",
    },
    {
      title: "Лучший студент курса",
      description: "1 место в рейтинге группы",
      icon: "Trophy",
      category: "Успеваемость",
      date: "2023-2024",
    },
    {
      title: "Научная работа",
      description: "Участие в конференции молодых ученых",
      icon: "BookOpen",
      category: "Наука",
      date: "2024",
    },
    {
      title: "Практические навыки",
      description: "Сертификат по первой медицинской помощи",
      icon: "Heart",
      category: "Практика",
      date: "2024",
    },
    {
      title: "Стипендия",
      description: "Повышенная академическая стипендия",
      icon: "Star",
      category: "Награда",
      date: "2023-2024",
    },
    {
      title: "Волонтерство",
      description: "Помощь в медицинских мероприятиях",
      icon: "Users",
      category: "Общество",
      date: "2024",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-medical-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Мои достижения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Успехи в учебе и научной деятельности в медицинском университете
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-purple rounded-full flex items-center justify-center">
                    <Icon
                      name={achievement.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-medical-blue transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{achievement.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Calendar" size={16} className="mr-1" />
                  {achievement.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-xl shadow-sm border">
            <div className="text-center">
              <div className="text-2xl font-bold text-medical-blue">4.7</div>
              <div className="text-sm text-gray-600">Средний балл</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-medical-purple">15</div>
              <div className="text-sm text-gray-600">Пройдено курсов</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-medical-blue">3</div>
              <div className="text-sm text-gray-600">Курс обучения</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
