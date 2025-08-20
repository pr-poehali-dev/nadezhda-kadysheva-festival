import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-50 via-warm-50 to-golden-100">
      {/* Header */}
      <header className="bg-warm-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <Icon name="Music" className="text-golden-200 mr-3" size={32} />
            <h1 className="text-3xl font-cormorant font-bold text-golden-50">
              Культурные события Санкт-Петербурга
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 px-4 py-2 text-lg font-open-sans">
            ВАЖНОЕ ОБЪЯВЛЕНИЕ
          </Badge>
          <h2 className="text-5xl font-cormorant font-bold text-warm-800 mb-6">
            Отмена выступления
          </h2>
          <h3 className="text-3xl font-cormorant font-medium text-warm-600 mb-8">
            Надежды Кадышевой
          </h3>
        </div>

        {/* Artist Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-golden-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <img 
                    src="/img/2ea0028a-8139-4ecb-9364-9e8ac8c2e993.jpg" 
                    alt="Надежда Кадышева" 
                    className="w-64 h-64 object-cover rounded-lg shadow-lg mx-auto md:mx-0 mb-6"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-cormorant font-bold text-warm-800 mb-4">
                    Народная артистка России
                  </h4>
                  <p className="text-lg font-open-sans text-warm-700 leading-relaxed mb-6">
                    Надежда Кадышева — выдающаяся исполнительница русской народной песни, 
                    солистка ансамбля "Золотое кольцо", обладательница множества наград 
                    и почетных званий.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-golden-100 text-warm-700">
                      Народная артистка
                    </Badge>
                    <Badge variant="secondary" className="bg-golden-100 text-warm-700">
                      Ансамбль "Золотое кольцо"
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcement Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-white shadow-xl border-2 border-red-200">
            <CardHeader className="bg-red-50 border-b border-red-100">
              <CardTitle className="text-2xl font-cormorant text-red-800 flex items-center">
                <Icon name="AlertCircle" className="mr-3 text-red-600" size={28} />
                Официальное объявление
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6 font-open-sans">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Уважаемые поклонники творчества Надежды Кадышевой!</strong>
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  С глубоким сожалением сообщаем, что запланированное выступление 
                  <strong className="text-warm-700"> Надежды Кадышевой на музыкальном фестивале 
                  в Санкт-Петербурге</strong> вынуждено <strong className="text-red-600">отменяется</strong> 
                  по независящим от организаторов обстоятельствам.
                </p>

                <div className="bg-golden-50 border-l-4 border-golden-400 p-4 rounded-r-lg">
                  <p className="text-warm-800 font-medium">
                    <Icon name="Calendar" className="inline mr-2" size={18} />
                    Планируемая дата: 25 августа 2025 г.
                  </p>
                  <p className="text-warm-800 font-medium mt-2">
                    <Icon name="MapPin" className="inline mr-2" size={18} />
                    Место проведения: Концертный зал "Октябрьский", Санкт-Петербург
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="bg-white shadow-lg border-golden-200">
            <CardHeader>
              <CardTitle className="font-cormorant text-xl text-warm-800 flex items-center">
                <Icon name="CreditCard" className="mr-3 text-golden-500" size={24} />
                Возврат билетов
              </CardTitle>
            </CardHeader>
            <CardContent className="font-open-sans text-gray-700">
              <p className="mb-4">
                Приобретенные билеты будут автоматически возвращены в течение 
                <strong className="text-warm-700"> 7-10 рабочих дней</strong> на банковские карты покупателей.
              </p>
              <p className="text-sm text-gray-600">
                Дополнительных действий от вас не требуется.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-golden-200">
            <CardHeader>
              <CardTitle className="font-cormorant text-xl text-warm-800 flex items-center">
                <Icon name="Calendar" className="mr-3 text-golden-500" size={24} />
                Перенос концерта
              </CardTitle>
            </CardHeader>
            <CardContent className="font-open-sans text-gray-700">
              <p className="mb-4">
                Мы прилагаем все усилия для организации нового выступления артистки. 
                О новых датах будет объявлено дополнительно.
              </p>
              <p className="text-sm text-gray-600">
                Следите за обновлениями на официальных ресурсах.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-warm-50 shadow-lg border-warm-200">
            <CardHeader>
              <CardTitle className="font-cormorant text-2xl text-warm-800 text-center">
                Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3 font-open-sans text-gray-700">
                <p className="flex items-center justify-center">
                  <Icon name="Phone" className="mr-3 text-warm-600" size={20} />
                  Горячая линия: +7 (812) 123-45-67
                </p>
                <p className="flex items-center justify-center">
                  <Icon name="Mail" className="mr-3 text-warm-600" size={20} />
                  info@spb-culture.ru
                </p>
                <p className="flex items-center justify-center">
                  <Icon name="Clock" className="mr-3 text-warm-600" size={20} />
                  Ежедневно с 10:00 до 19:00
                </p>
              </div>
              
              <div className="pt-4">
                <Button className="bg-warm-600 hover:bg-warm-700 text-white font-open-sans px-8 py-3">
                  <Icon name="MessageCircle" className="mr-2" size={18} />
                  Написать в поддержку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-warm-800 text-golden-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-open-sans">
            © 2025 Культурные события Санкт-Петербурга. Приносим извинения за доставленные неудобства.
          </p>
          <div className="flex justify-center items-center mt-4 space-x-6">
            <Icon name="Music" size={20} className="text-golden-300" />
            <span className="font-cormorant text-lg">Искусство объединяет нас</span>
            <Icon name="Heart" size={20} className="text-golden-300" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;