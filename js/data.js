// Каталог: категории и товары с подходящими изображениями (Unsplash)
const CATEGORIES = [
  { id: 'protein', name: 'Протеин' },
  { id: 'gainer', name: 'Гейнеры' },
  { id: 'amino', name: 'Аминокислоты' },
  { id: 'vitamins', name: 'Витамины' },
  { id: 'fatburner', name: 'Жиросжигатели' },
  { id: 'creatine', name: 'Креатин' },
  { id: 'other', name: 'Прочее' }
];

// Изображения добавок: стабильные URL — Wikimedia Commons (реальные фото) + picsum.photos (надёжный CDN)
const IMG = {
  protein: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Bodybuilding_supplement_high_protein_drink_mix_700g.jpg',
  protein2: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Protein_Powder_in_a_Blender_Bottle_%2844547157820%29.jpg',
  protein3: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Protein_shake.jpg',
  protein4: 'https://picsum.photos/seed/protein4/500/400',
  protein5: 'https://picsum.photos/seed/protein5/500/400',
  gainer: 'https://picsum.photos/seed/gainer1/500/400',
  shake: 'https://picsum.photos/seed/shake1/500/400',
  amino: 'https://picsum.photos/seed/amino1/500/400',
  amino2: 'https://picsum.photos/seed/amino2/500/400',
  amino3: 'https://picsum.photos/seed/amino3/500/400',
  vitamins: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Radiance_multivitamins_nutritional_information_crop.jpg',
  pills: 'https://picsum.photos/seed/pills1/500/400',
  pills2: 'https://picsum.photos/seed/pills2/500/400',
  omega: 'https://picsum.photos/seed/omega1/500/400',
  bottle: 'https://picsum.photos/seed/bottle1/500/400',
  bottle2: 'https://picsum.photos/seed/bottle2/500/400',
  powder: 'https://picsum.photos/seed/powder1/500/400',
  jar: 'https://picsum.photos/seed/jar1/500/400',
  jar2: 'https://picsum.photos/seed/jar2/500/400',
  preworkout: 'https://picsum.photos/seed/pre1/500/400',
  preworkout2: 'https://picsum.photos/seed/pre2/500/400',
  nutrition: 'https://picsum.photos/seed/nutr1/500/400',
  nutrition2: 'https://picsum.photos/seed/nutr2/500/400',
  capsules: 'https://picsum.photos/seed/caps1/500/400',
  smoothie: 'https://picsum.photos/seed/smoothie1/500/400',
  gym: 'https://picsum.photos/seed/gym1/500/400'
};

const PRODUCTS = [
  { id: 1, name: 'Whey Protein 100% Gold Standard', category: 'protein', price: 4290, weight: '908 г', rating: 4.8, image: IMG.protein, description: 'Сывороточный протеин премиум-класса. 24 г белка на порцию. Отличная растворимость и вкус.', badge: 'sale' },
  { id: 2, name: 'Mass Gainer XXL', category: 'gainer', price: 3190, weight: '3 кг', rating: 4.6, image: IMG.gainer, description: 'Высококалорийный гейнер для набора массы. Углеводы и белок в оптимальном соотношении.' },
  { id: 3, name: 'BCAA 2:1:1', category: 'amino', price: 1890, weight: '300 г', rating: 4.7, image: IMG.amino, description: 'Аминокислоты с разветвлённой цепью. Поддержка мышц во время тренировок.' },
  { id: 4, name: 'Omega-3 Premium', category: 'vitamins', price: 990, weight: '90 капс', rating: 4.9, image: IMG.omega, description: 'Омега-3 для сердца, суставов и общего тонуса. Высокая концентрация EPA и DHA.' },
  { id: 5, name: 'L-Carnitine 3000', category: 'fatburner', price: 1290, weight: '500 мл', rating: 4.5, image: IMG.bottle, description: 'Жиросжигатель на основе L-карнитина. Поддержка энергии при тренировках.' },
  { id: 6, name: 'Creatine Monohydrate', category: 'creatine', price: 790, weight: '500 г', rating: 4.8, image: IMG.powder, description: 'Креатин моногидрат. Проверенная форма для силы и выносливости.', badge: 'new' },
  { id: 7, name: 'Isolate Protein', category: 'protein', price: 4990, weight: '900 г', rating: 4.9, image: IMG.protein2, description: 'Изолят сывороточного протеина. Минимум жиров и углеводов, максимум белка.' },
  { id: 8, name: 'Pre-Workout Booster', category: 'other', price: 2490, weight: '300 г', rating: 4.6, image: IMG.preworkout, description: 'Предтренировочный комплекс. Энергия, фокус и выносливость.' },
  { id: 9, name: 'Vitamin D3 2000', category: 'vitamins', price: 590, weight: '60 капс', rating: 4.7, image: IMG.pills, description: 'Витамин D3 для иммунитета и костей. Удобная дозировка.' },
  { id: 10, name: 'Glutamine 500 г', category: 'amino', price: 1490, weight: '500 г', rating: 4.4, image: IMG.amino2, description: 'Глютамин для восстановления и поддержки иммунитета.' },
  { id: 11, name: 'Casein Protein Night', category: 'protein', price: 3890, weight: '920 г', rating: 4.7, image: IMG.protein3, description: 'Казеиновый протеин для приёма на ночь. Медленное усвоение.' },
  { id: 12, name: 'Multi Vitamin Sport', category: 'vitamins', price: 1190, weight: '90 таб', rating: 4.6, image: IMG.vitamins, description: 'Комплекс витаминов и минералов для активного образа жизни.' },
  { id: 13, name: 'Fat Burner Extreme', category: 'fatburner', price: 1990, weight: '90 капс', rating: 4.5, image: IMG.bottle2, description: 'Термогеник для ускорения метаболизма. Кофеин и экстракты.' },
  { id: 14, name: 'Creatine HCl', category: 'creatine', price: 1590, weight: '300 г', rating: 4.8, image: IMG.jar, description: 'Креатин гидрохлорид. Высокая усвояемость, малая дозировка.' },
  { id: 15, name: 'Whey + Oats', category: 'protein', price: 2690, weight: '1.5 кг', rating: 4.6, image: IMG.protein5, description: 'Протеин с овсянкой. Идеально для завтрака или перекуса.' },
  { id: 16, name: 'EAA Essential Amino', category: 'amino', price: 2190, weight: '400 г', rating: 4.8, image: IMG.amino3, description: 'Полный комплекс незаменимых аминокислот. Быстрое восстановление.' },
  { id: 17, name: 'Magnesium B6', category: 'vitamins', price: 490, weight: '60 таб', rating: 4.9, image: IMG.pills2, description: 'Магний и витамин B6 для мышц, нервной системы и сна.' },
  { id: 18, name: 'Green Tea Extract', category: 'fatburner', price: 890, weight: '100 капс', rating: 4.4, image: IMG.capsules, description: 'Экстракт зелёного чая. Антиоксиданты и поддержка метаболизма.' },
  { id: 19, name: 'Creatine + Beta-Alanine', category: 'creatine', price: 2290, weight: '450 г', rating: 4.7, image: IMG.jar2, description: 'Связка креатина и бета-аланина для силы и выносливости.' },
  { id: 20, name: 'Protein Bar Box', category: 'other', price: 1290, weight: '12 шт', rating: 4.6, image: IMG.nutrition2, description: 'Набор протеиновых батончиков. Удобно в дорогу и после тренировки.' },
  { id: 21, name: 'Collagen Peptides', category: 'vitamins', price: 1890, weight: '300 г', rating: 4.5, image: IMG.protein4, description: 'Коллаген для суставов, кожи и связок. Без вкуса, легко добавить в напиток.' },
  { id: 22, name: 'Nitric Oxide Booster', category: 'other', price: 2790, weight: '180 г', rating: 4.6, image: IMG.preworkout2, description: 'Пампинг и питание мышц. Аргинин и цитруллин.' },
  { id: 23, name: 'Zinc + Vitamin C', category: 'vitamins', price: 690, weight: '60 капс', rating: 4.8, image: IMG.pills, description: 'Цинк и витамин C для иммунитета и восстановления.' },
  { id: 24, name: 'Plant Protein', category: 'protein', price: 3490, weight: '750 г', rating: 4.7, image: IMG.smoothie, description: 'Растительный протеин (горох, рис). Для веганов и вегетарианцев.', badge: 'new' }
];

const PROMOTIONS = [
  { id: 1, title: 'Скидка 15% на первый заказ', code: 'WELCOME15', endDate: '2026-03-01' },
  { id: 2, title: 'Бесплатная доставка от 3000 ₽', code: null, endDate: null },
  { id: 3, title: 'Протеин + шейкер в подарок', code: 'SHAKER', endDate: '2026-02-28' },
  { id: 4, title: 'Скидка 10% на заказ', code: 'FIT10', endDate: '2026-03-15' }
];

const BLOG_ARTICLES = [
  { id: 1, title: 'Как выбрать протеин: гид для новичков', date: '2026-02-10', excerpt: 'Разбираем виды протеина, дозировки и лучшее время приёма.', image: IMG.protein,
    body: 'Сывороточный протеин (whey) усваивается быстро — идеален после тренировки. Казеин — медленный, его часто пьют на ночь. Изолят подойдёт тем, кто следит за калориями. Оптимальная порция — 20–30 г белка за приём. После тренировки — в течение 1–2 часов. Утром — для восполнения ночного катаболизма. Не заменяйте протеином обычную еду: это добавка к сбалансированному рациону.' },
  { id: 2, title: 'Питание до и после тренировки', date: '2026-02-05', excerpt: 'Что есть перед тренировкой и в течение 2 часов после неё.', image: IMG.gym,
    body: 'За 1–2 часа до тренировки — сложные углеводы и немного белка (каша, яйца, курица). За 30 минут можно перекусить бананом или гейнером. Сразу после тренировки — «углеводное окно»: протеин или гейнер, можно с бананом. В течение 2 часов — полноценный приём пищи с белком и углеводами для восстановления мышц. Не забывайте про воду до, во время и после занятия.' },
  { id: 3, title: 'BCAA: зачем нужны и как принимать', date: '2026-01-28', excerpt: 'Роль аминокислот в восстановлении и сохранении мышечной массы.', image: IMG.capsules,
    body: 'BCAA — это лейцин, изолейцин и валин. Они не синтезируются организмом и должны поступать с пищей или добавками. Принимают до и во время тренировки для снижения усталости и защиты мышц, или после — для восстановления. Классическая дозировка — 5–10 г. При достаточном количестве белка в рационе (1,6–2 г на кг веса) BCAA не обязательны, но удобны как быстрый источник аминокислот.' },
  { id: 4, title: 'Креатин: как правильно пить и чего ждать', date: '2026-01-20', excerpt: 'Дозировки, фаза загрузки и реальная польза креатина.', image: IMG.powder,
    body: 'Креатин моногидрат — одна из самых изученных добавок. Увеличивает силу и выносливость, помогает набрать массу. Классическая схема: 3–5 г в день в любое время (можно после тренировки). Загрузка 20 г в день по 5 дней не обязательна — эффект проявится и при постоянных 3–5 г, просто позже. Пейте достаточно воды. Результат заметен через 2–4 недели: прирост силы и объёма.' },
  { id: 5, title: 'Витамины и минералы для спортсменов', date: '2026-01-15', excerpt: 'Какие витамины особенно важны при активных тренировках.', image: IMG.vitamins,
    body: 'При интенсивных нагрузках возрастает потребность в витамине D, группе B, магнии, цинке и железе. Витамин D влияет на иммунитет и силу. Магний — на сон и работу мышц. Цинк и витамин C поддерживают восстановление. Лучше сдать анализы и подбирать дозировки с врачом. Базовый вариант — качественный мультивитаминный комплекс для спортсменов плюс отдельно витамин D при дефиците.' },
  { id: 6, title: 'Гейнер vs протеин: что выбрать для набора массы', date: '2026-01-10', excerpt: 'Когда нужен гейнер, а когда достаточно протеина.', image: IMG.gainer,
    body: 'Гейнер — это белок плюс много углеводов и часто калории. Подходит эктоморфам и тем, кто с трудом набирает вес и не добирает калории из еды. Протеин — тем, кто на массе с нормальным аппетитом или на сушке. Если вы уже переедаете и набираете жир, гейнер только усугубит. Лучше набирать калории из обычной пищи, а гейнер использовать как удобный перекус или после тренировки.' },
  { id: 7, title: 'Жиросжигатели: работают ли они', date: '2026-01-05', excerpt: 'Честный разбор термогеников и L-карнитина.', image: IMG.bottle,
    body: 'Жиросжигатели не заменяют дефицит калорий и тренировки. Термогеники (кофеин, экстракты) могут слегка поднять расход калорий и снизить аппетит. L-карнитин переносит жирные кислоты в митохондрии, но при достаточной выработке своего карнитина добавка даёт малый эффект. Главное для похудения — питание с дефицитом калорий, белок, силовые и кардио. Добавки — лишь вспомогательный инструмент.' },
  { id: 8, title: 'Предтренировочные комплексы: что внутри', date: '2025-12-28', excerpt: 'Кофеин, бета-аланин, цитруллин — зачем они в pre-workout.', image: IMG.preworkout,
    body: 'Pre-workout обычно содержат кофеин (энергия и фокус), бета-аланин (снижение усталости, «пампинг»), цитруллин (улучшение кровотока и пампа). Могут быть витамины группы B, таурин, креатин. Не превышайте дозировки и не пейте поздно вечером из-за кофеина. Если чувствительны к стимуляторам — выбирайте варианты без кофеина или с малым содержанием.' },
  { id: 9, title: 'Растительный протеин: для кого и какой выбрать', date: '2025-12-20', excerpt: 'Горох, рис, конопля — плюсы и минусы веганского протеина.', image: IMG.smoothie,
    body: 'Растительный протеин подходит веганам и тем, у кого непереносимость молочного. Гороховый — хороший аминокислотный профиль, неплохая усвояемость. Рисовый часто комбинируют с горохом для полноты профиля. Конопляный — дополнительно омега-3 и клетчатка. Минусы — вкус и текстура часто хуже сывороточного, иногда выше цена. Ищите смеси из нескольких источников для полного набора аминокислот.' },
  { id: 10, title: 'Как пить протеин: рецепты и советы', date: '2025-12-15', excerpt: 'С чем мешать, как избежать комков и разнообразить вкус.', image: IMG.shake,
    body: 'Используйте шейкер или блендер. Холодная вода или молоко — меньше комков. Добавляйте банан, овсянку, арахисовую пасту для калорий и вкуса. Лёд сделает коктейль приятнее. Не храните готовый коктейль долго — лучше выпить в течение часа. Экспериментируйте с какао, корицей, замороженными ягодами. Протеин можно добавлять в кашу, творог и выпечку для увеличения белка в рационе.' }
];

function getProductsByCategory(categoryId) {
  if (!categoryId) return PRODUCTS;
  return PRODUCTS.filter(p => p.category === categoryId);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id, 10));
}

function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}
