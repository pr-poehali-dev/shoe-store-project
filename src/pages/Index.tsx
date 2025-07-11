import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const shoes = [
    {
      id: 1,
      name: "Современные кроссовки Nike",
      price: "12 990",
      originalPrice: "15 990",
      image: "/img/0de9967e-4bdb-42b9-8986-861502e660f7.jpg",
      colors: ["Белый", "Черный", "Синий"],
      sizes: ["36", "37", "38", "39", "40", "41", "42"],
      category: "Спорт",
    },
    {
      id: 2,
      name: "Элегантные туфли на каблуке",
      price: "8 990",
      originalPrice: "11 990",
      image: "/img/5fa738ab-2f53-4bf7-a3bc-6328472e6725.jpg",
      colors: ["Черный", "Красный", "Бежевый"],
      sizes: ["35", "36", "37", "38", "39", "40"],
      category: "Женская",
    },
    {
      id: 3,
      name: "Классические мужские ботинки",
      price: "16 990",
      originalPrice: "19 990",
      image: "/img/75ddf368-19d0-4118-b452-8e94527479ee.jpg",
      colors: ["Коричневый", "Черный"],
      sizes: ["40", "41", "42", "43", "44", "45"],
      category: "Мужская",
    },
  ];

  const filteredShoes = shoes.filter((shoe) => {
    const matchesSearch = shoe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSize = !selectedSize || shoe.sizes.includes(selectedSize);
    const matchesColor = !selectedColor || shoe.colors.includes(selectedColor);
    return matchesSearch && matchesSize && matchesColor;
  });

  const allSizes = [...new Set(shoes.flatMap((shoe) => shoe.sizes))].sort(
    (a, b) => Number(a) - Number(b),
  );
  const allColors = [...new Set(shoes.flatMap((shoe) => shoe.colors))];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Store" className="text-primary h-8 w-8" />
              <h1 className="text-2xl font-bold text-modern-navy">ShoesShop</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-modern-navy hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-modern-navy hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-modern-navy hover:text-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-modern-navy hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="md:hidden">
                <Icon name="Menu" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-energizing-orange to-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Обувь для
            <br />
            <span className="text-white/90">каждого шага</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Современная коллекция обуви с удобными фильтрами по размерам и
            цветам
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-modern-navy hover:bg-white/90"
          >
            <Icon name="ArrowDown" className="mr-2 h-5 w-5" />
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Filters Section */}
      <section id="catalog" className="py-12 bg-shoe-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-modern-navy">
            Каталог обуви
          </h2>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-modern-navy">
                  Поиск
                </label>
                <Input
                  placeholder="Найти обувь..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-modern-navy">
                  Размер
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите размер" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Все размеры</SelectItem>
                    {allSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-modern-navy">
                  Цвет
                </label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите цвет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Все цвета</SelectItem>
                    {allColors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedSize("");
                    setSelectedColor("");
                    setSearchQuery("");
                  }}
                >
                  <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
                  Сбросить
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShoes.map((shoe) => (
              <Card
                key={shoe.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {shoe.category}
                    </Badge>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90"
                      >
                        <Icon name="Heart" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2 text-modern-navy">
                    {shoe.name}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-primary">
                        {shoe.price} ₽
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {shoe.originalPrice} ₽
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {shoe.colors.map((color) => (
                        <Badge
                          key={color}
                          variant="outline"
                          className="text-xs"
                        >
                          {color}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {shoe.sizes.slice(0, 4).map((size) => (
                        <Badge
                          key={size}
                          variant="secondary"
                          className="text-xs"
                        >
                          {size}
                        </Badge>
                      ))}
                      {shoe.sizes.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{shoe.sizes.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />В
                    корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredShoes.length === 0 && (
            <div className="text-center py-12">
              <Icon
                name="Search"
                className="h-12 w-12 text-gray-400 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-modern-navy mb-2">
                Ничего не найдено
              </h3>
              <p className="text-gray-600">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-modern-navy">О нас</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Мы — современный магазин обуви, предлагающий широкий ассортимент
              качественной обуви для всей семьи. Наша коллекция включает
              спортивную, классическую и повседневную обувь от ведущих брендов.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon
                  name="Truck"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2 text-modern-navy">
                  Быстрая доставка
                </h3>
                <p className="text-gray-600">
                  Доставка по всей России за 1-3 дня
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Shield"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2 text-modern-navy">
                  Гарантия качества
                </h3>
                <p className="text-gray-600">
                  Только оригинальная обувь с гарантией
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="RotateCcw"
                  className="h-12 w-12 text-primary mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2 text-modern-navy">
                  Легкий возврат
                </h3>
                <p className="text-gray-600">
                  Возврат и обмен в течение 30 дней
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-shoe-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-modern-navy">
            Контакты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-modern-navy">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <a
                    href="tel:+79969822654"
                    className="text-lg font-semibold text-modern-navy hover:text-primary transition-colors"
                  >
                    +7 996 982-26-54
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">info@shoesshop.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">Пн-Вс: 9:00 - 21:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">
                    г. Москва, ул. Примерная, д. 123
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-modern-navy">
                Задать вопрос
              </h3>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон или email" />
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={4}
                  placeholder="Ваш вопрос..."
                ></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-modern-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Store" className="h-6 w-6" />
                <h3 className="text-xl font-bold">ShoesShop</h3>
              </div>
              <p className="text-gray-300">
                Современный магазин обуви с удобными фильтрами и быстрой
                доставкой.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мужская обувь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Женская обувь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Спортивная обувь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Детская обувь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Размерная сетка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">+7 996 982-26-54</p>
                <p>info@shoesshop.ru</p>
                <p>г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShoesShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
