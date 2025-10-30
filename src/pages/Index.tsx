import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Техническое обслуживание',
    description: 'Полный комплекс работ по плановому ТО автомобиля',
    icon: 'Wrench',
    image: 'https://cdn.poehali.dev/projects/3c58a67d-6af2-40d6-8931-9d7f52bd789b/files/394a1c9c-a431-4fa7-ac7d-3dc2c7659b7a.jpg',
    features: ['Замена масла и фильтров', 'Диагностика систем', 'Проверка тормозов']
  },
  {
    title: 'Ремонт двигателя',
    description: 'Профессиональная диагностика и ремонт двигателя',
    icon: 'Settings',
    image: 'https://cdn.poehali.dev/projects/3c58a67d-6af2-40d6-8931-9d7f52bd789b/files/68e8ed11-5737-4126-b41e-fe999067c2dd.jpg',
    features: ['Капитальный ремонт', 'Замена ГРМ', 'Ремонт ходовой']
  },
  {
    title: 'Кузовные работы',
    description: 'Восстановление кузова и покраска автомобиля',
    icon: 'Car',
    image: 'https://cdn.poehali.dev/projects/3c58a67d-6af2-40d6-8931-9d7f52bd789b/files/dc44b32c-0d4b-4817-adfd-3d2fa5b08742.jpg',
    features: ['Рихтовка и покраска', 'Полировка кузова', 'Антикоррозийная обработка']
  }
];

const testimonials = [
  {
    name: 'Алексей Иванов',
    rating: 5,
    text: 'Отличный сервис! Быстро отремонтировали двигатель, цены адекватные.',
    date: '2 недели назад'
  },
  {
    name: 'Мария Петрова',
    rating: 5,
    text: 'Профессиональный подход, качественное ТО. Всегда обслуживаюсь здесь.',
    date: '1 месяц назад'
  },
  {
    name: 'Дмитрий Смирнов',
    rating: 5,
    text: 'Кузовные работы выполнены на высшем уровне. Машина как новая!',
    date: '3 недели назад'
  }
];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    comments: ''
  });

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '', date: '', time: '', comments: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold">Автосервис "Мастер"</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#booking" className="hover:text-primary transition-colors">Онлайн-запись</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            </div>
            <Button>
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Профессиональный<br />
                <span className="text-primary">ремонт и обслуживание</span><br />
                автомобилей
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Более 15 лет на рынке. Гарантия качества. Современное оборудование.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <a href="#booking">Записаться на сервис</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <a href="#services">Наши услуги</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="Award" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-2xl">15+</CardTitle>
                  <CardDescription>лет опыта</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="Users" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-2xl">5000+</CardTitle>
                  <CardDescription>довольных клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="Clock" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-2xl">24/7</CardTitle>
                  <CardDescription>поддержка</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="Shield" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-2xl">100%</CardTitle>
                  <CardDescription>гарантия качества</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг по ремонту и обслуживанию</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-primary" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Онлайн-запись</h2>
            <p className="text-xl text-muted-foreground">Выберите удобное время для посещения</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Выберите услугу</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintenance">Техническое обслуживание</SelectItem>
                      <SelectItem value="engine">Ремонт двигателя</SelectItem>
                      <SelectItem value="body">Кузовные работы</SelectItem>
                      <SelectItem value="diagnostics">Диагностика</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input 
                      id="date" 
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comments">Комментарии</Label>
                  <Textarea 
                    id="comments" 
                    placeholder="Опишите проблему или пожелания"
                    value={formData.comments}
                    onChange={(e) => setFormData({...formData, comments: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на сервис
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-between mb-6">
                  <Button variant="ghost" size="icon" onClick={prevTestimonial}>
                    <Icon name="ChevronLeft" size={24} />
                  </Button>
                  <div className="flex-1 text-center px-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={24} />
                      ))}
                    </div>
                    <p className="text-lg mb-4 italic">"{testimonials[currentTestimonial].text}"</p>
                    <p className="font-bold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].date}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={nextTestimonial}>
                    <Icon name="ChevronRight" size={24} />
                  </Button>
                </div>
                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" className="text-primary" size={28} />
                <h3 className="text-xl font-bold">Автосервис "Мастер"</h3>
              </div>
              <p className="text-sm opacity-80">Профессиональный ремонт и обслуживание автомобилей</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@master-auto.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Автомобильная, 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm">
                <li>Пн-Пт: 08:00 - 20:00</li>
                <li>Сб: 09:00 - 18:00</li>
                <li>Вс: 10:00 - 16:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Техобслуживание</li>
                <li>Ремонт двигателя</li>
                <li>Кузовные работы</li>
                <li>Диагностика</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Автосервис "Мастер". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
