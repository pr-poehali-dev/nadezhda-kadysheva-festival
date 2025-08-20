import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zenit-50 via-blue-50 to-zenit-100">
      {/* Header */}
      <header className="bg-zenit-700 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <Icon name="Plane" className="text-zenit-200 mr-2" size={32} />
              <h1 className="text-3xl font-cormorant font-bold text-white">
                Фестиваль ФК Зенит
              </h1>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-zenit-700 font-bold text-sm">⚽</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 px-4 py-2 text-lg font-open-sans">
            ОТМЕНА ВЫСТУПЛЕНИЯ
          </Badge>
          <h2 className="text-5xl font-cormorant font-bold text-zenit-800 mb-4">
            Надежда Кадышева
          </h2>
          <h3 className="text-2xl font-cormorant font-medium text-zenit-600 mb-4">
            не сможет выступить на фестивале ФК Зенит
          </h3>
          <p className="text-lg font-open-sans text-gray-600">
            в связи с отменой рейса Москва → Санкт-Петербург
          </p>
        </div>

        {/* Flight Info Alert */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-red-50 border-2 border-red-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Icon name="AlertTriangle" className="text-red-600" size={48} />
                <div>
                  <h4 className="text-xl font-cormorant font-bold text-red-800 mb-2">
                    Рейс SU 1234 Москва → Санкт-Петербург отменён
                  </h4>
                  <p className="font-open-sans text-red-700">
                    По техническим причинам авиакомпании. Артистка не сможет прибыть на фестиваль вовремя.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Artist & Event Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-zenit-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img 
                    src="/img/2ea0028a-8139-4ecb-9364-9e8ac8c2e993.jpg" 
                    alt="Надежда Кадышева" 
                    className="w-48 h-48 object-cover rounded-full shadow-lg mx-auto mb-4 border-4 border-zenit-300"
                  />
                  <h4 className="text-xl font-cormorant font-bold text-zenit-800">
                    Надежда Кадышева
                  </h4>
                  <p className="font-open-sans text-zenit-600">Народная артистка России</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-zenit-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-4xl">⚽</span>
                  </div>
                  <h4 className="text-xl font-cormorant font-bold text-zenit-800">
                    Фестиваль ФК Зенит
                  </h4>
                  <p className="font-open-sans text-zenit-600">Музыкально-спортивное событие</p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name="PlaneOff" className="text-white" size={48} />
                  </div>
                  <h4 className="text-xl font-cormorant font-bold text-red-800">
                    Рейс отменён
                  </h4>
                  <p className="font-open-sans text-red-600">Технические проблемы</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Details */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white shadow-xl border-zenit-300">
            <CardHeader className="bg-zenit-50 border-b border-zenit-100">
              <CardTitle className="text-2xl font-cormorant text-zenit-800 flex items-center">
                <Icon name="Calendar" className="mr-3 text-zenit-600" size={28} />
                Детали мероприятия
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-zenit-600" size={20} />
                    <span className="font-open-sans text-gray-700">
                      <strong>Дворцовая площадь</strong>, Санкт-Петербург
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-zenit-600" size={20} />
                    <span className="font-open-sans text-gray-700">
                      <strong>21 августа 2025</strong> в 19:00
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="text-zenit-600" size={20} />
                    <span className="font-open-sans text-gray-700">
                      <strong>30,000 зрителей</strong> ожидали выступление
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Plane" className="text-red-600" size={20} />
                    <span className="font-open-sans text-red-700">
                      <strong>Рейс SU 1234</strong> - отменён
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-red-600" size={20} />
                    <span className="font-open-sans text-red-700">
                      <strong>Вылет:</strong> сегодня 16:00 (отменён)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" className="text-red-600" size={20} />
                    <span className="font-open-sans text-red-700">
                      <strong>Причина:</strong> технические неполадки
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="bg-white shadow-lg border-zenit-200">
            <CardHeader>
              <CardTitle className="font-cormorant text-lg text-zenit-800 flex items-center">
                <Icon name="CreditCard" className="mr-2 text-zenit-500" size={20} />
                Возврат билетов
              </CardTitle>
            </CardHeader>
            <CardContent className="font-open-sans text-gray-700 text-sm">
              <p className="mb-3">
                Автоматический возврат в течение <strong>5-7 дней</strong> на карты покупателей.
              </p>
              <p className="text-xs text-gray-600">
                Дополнительных действий не требуется.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-zenit-200">
            <CardHeader>
              <CardTitle className="font-cormorant text-lg text-zenit-800 flex items-center">
                <Icon name="Repeat" className="mr-2 text-zenit-500" size={20} />
                Альтернативы
              </CardTitle>
            </CardHeader>
            <CardContent className="font-open-sans text-gray-700 text-sm">
              <p className="mb-3">
                Рассматриваем возможность <strong>онлайн-выступления</strong> или переноса на другую дату.
              </p>
              <p className="text-xs text-gray-600">
                Следите за объявлениями ФК Зенит.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-zenit-200">
            <CardHeader>
              <CardTitle className="font-cormorant text-lg text-zenit-800 flex items-center">
                <Icon name="Plane" className="mr-2 text-zenit-500" size={20} />
                Рейсы
              </CardTitle>
            </CardHeader>
            <CardContent className="font-open-sans text-gray-700 text-sm">
              <p className="mb-3">
                Ближайший доступный рейс: <strong>завтра в 08:30</strong> (слишком поздно).
              </p>
              <p className="text-xs text-gray-600">
                Все попытки добраться не увенчались успехом.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Zenit Statement */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-zenit-50 shadow-lg border-2 border-zenit-300">
            <CardHeader>
              <CardTitle className="font-cormorant text-2xl text-zenit-800 text-center flex items-center justify-center">
                <span className="mr-3">⚽</span>
                Заявление ФК Зенит
                <span className="ml-3">⚽</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-8">
              <p className="font-open-sans text-lg text-zenit-700 leading-relaxed mb-6">
                "Мы глубоко сожалеем о сложившейся ситуации. Отмена рейса стала неожиданностью 
                для всех участников фестиваля. Надежда Кадышева была очень расстроена тем, 
                что не сможет порадовать наших болельщиков своим выступлением на Дворцовой площади."
              </p>
              <div className="text-sm font-open-sans text-zenit-600">
                — Пресс-служба ФК Зенит
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Message */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-golden-50 to-zenit-50 shadow-lg border-2 border-golden-300">
            <CardContent className="text-center p-8">
              <Icon name="Heart" className="mx-auto mb-4 text-golden-500" size={48} />
              <p className="font-cormorant text-2xl text-warm-700 leading-relaxed font-medium">
                Просьба не расстраиваться поклонникам Надежды Кадышевой
              </p>
              <div className="mt-4 flex justify-center items-center space-x-3">
                <Icon name="Music" size={20} className="text-golden-500" />
                <span className="font-open-sans text-gray-600">Мы обязательно найдём возможность встретиться</span>
                <Icon name="Music" size={20} className="text-golden-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg border-zenit-200">
            <CardHeader>
              <CardTitle className="font-cormorant text-2xl text-zenit-800 text-center">
                Контакты
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3 font-open-sans text-gray-700">
                <p className="flex items-center justify-center">
                  <Icon name="Phone" className="mr-3 text-zenit-600" size={20} />
                  Горячая линия ФК Зенит: +7 (812) 240-01-40
                </p>
                <p className="flex items-center justify-center">
                  <Icon name="Mail" className="mr-3 text-zenit-600" size={20} />
                  festival@fc-zenit.ru
                </p>
                <p className="flex items-center justify-center">
                  <Icon name="Globe" className="mr-3 text-zenit-600" size={20} />
                  fc-zenit.ru/festival
                </p>
              </div>
              
              <div className="pt-4 space-x-4">
                <Button className="bg-zenit-600 hover:bg-zenit-700 text-white font-open-sans">
                  <Icon name="MessageCircle" className="mr-2" size={18} />
                  Поддержка
                </Button>
                <Button variant="outline" className="border-zenit-600 text-zenit-600 hover:bg-zenit-50">
                  <Icon name="Repeat" className="mr-2" size={18} />
                  Альтернативы
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zenit-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4 space-x-4">
            <span className="text-2xl">⚽</span>
            <span className="font-cormorant text-xl">ФК Зенит</span>
            <Icon name="Plane" size={24} className="text-zenit-300" />
            <span className="font-cormorant text-xl">Фестиваль отменён</span>
            <Icon name="Music" size={24} className="text-zenit-300" />
          </div>
          <p className="font-open-sans text-zenit-200">
            © 2025 ФК Зенит. Приносим извинения болельщикам и поклонникам Надежды Кадышевой.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;