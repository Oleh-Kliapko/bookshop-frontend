export enum Genre {
	Classics = "Класика",
	Fantasy = "Фентезі",
	ScienceFiction = "Наукова фантастика",
	Mystery = "Детектив",
	Romance = "Романтика",
	NonFiction = "Нехудожня література",
	Coloring = "Розмальовки",
	fairyTales = "Казки",
	Biography = "Біографія",
	History = "Історія",
	Poetry = "Поезія",
	SelfHelp = "Саморозвиток",
	Business = "Бізнес",
	Travel = "Подорожі",
	Cooking = "Кулінарія",
	Other = "Інший жанр",
}

export enum BookTypes {
	Paperback = "Паперова книга",
	Ebook = "Електронна книга",
	Audiobook = "Аудіокнига",
}

export enum Language {
	Ukrainian = "Українська",
	English = "Англійська",
	Russian = "Російська",
	German = "Німецька",
	French = "Французька",
	Spanish = "Іспанська",
	Italian = "Італійська",
	Polish = "Польська",
	Chinese = "Китайська",
	Japanese = "Японська",
	Arabic = "Арабська",
	Turkish = "Турецька",
	Portuguese = "Португальська",
	Dutch = "Голландська",
	Swedish = "Шведська",
	Latin = "Латинська",
	Greek = "Грецька",
	Hebrew = "Іврит",
	Other = "Інша мова",
}

export enum CoverType {
	Hardcover = "Тверда",
	Softcover = "М’яка",
	Spiral = "Спиральна",
}

export enum PaperType {
	Offset = "офсетний папір",
	Newsprint = "газетний папір",
	Writing = "письмовий папір",
	Coated = "крейдований папір",
	Vellum = "веленевий папір",
	Cardboard = "картон",
}

export enum Categories {
	ChildrensLiterature = "Дитяча література",
	AdultLiterature = "Для дорослих",
	YoungAdult = "Для підлітків",
	Parents = "Для батьків",
	Other = "Інша категорія",
}

export enum UserRole {
	Admin = "Адмін", // Адміністратор із повними правами
	User = "Користувач", // Звичайний користувач із обмеженими правами
}

export enum OrderStatus {
	Pending = "Очікує оплати", // Замовлення створене, але не оплачене
	Paid = "Оплачено", // Замовлення оплачене, але не доставлене
	Shipped = "Відправлено", // Замовлення відправлено, але не доставлене
	Delivered = "Доставлено", // Замовлення доставлено
	Cancelled = "Скасовано", // Замовлення скасовано
}

export enum ShippingMethod {
	Courier = "Кур’єр", // Доставка кур’єром
	Post = "Пошта", // Доставка через поштові служби
	Pickup = "Самовивіз", // Самовивіз із магазину
	Express = "Експрес-доставка", // Швидка доставка
}

export enum PaymentMethod {
	CreditCard = "Кредитна карта", // Оплата кредитною картою
	CashOnDelivery = "Накладений платіж", // Оплата при доставці
	OnlineBanking = "Онлайн-банкінг", // Оплата через банківський переказ
	GooglePay = "Google Pay", // Оплата через Google Pay
	ApplePay = "Apple Pay", // Оплата через Apple Pay
}

export enum Carrier {
	novaPost = "Нова пошта",
	ukrPost = "Укрпошта",
}

// модель книги
export interface Book {
	bookId: number // Унікальний ідентифікатор книги в базі даних або системі. Автоматичне створення
	title: string // Назва книги
	author: string // Ім’я автора книги
	originalTitle: string // Оригінальна назва книги
	genre: Genre // Жанр книги
	categories: Categories[] // Масив цільових аудиторій книги
	series?: string // Назва серії, до якої належить книга (необов’язкове)
	publisher: string // Видавництво, що випустило книгу
	publicationYear: number // Рік видання книги
	bookType: BookTypes[] // Типи книги в наявності
	pageCount: number // Кількість сторінок у книзі
	paperType?: PaperType // тип паперу
	language: Language // Мова перекладу або тексту книги
	bindingLanguage: Language // Мова оригіналу книги
	translator?: string // Особа, яка перекладала
	coverType: CoverType // Тип обкладинки книги
	weight: number // Вага книги в грамах
	dimensions: string // Розміри книги у форматі "ширина x висота" в міліметрах
	isbn: string // Міжнародний стандартний номер книги
	articleNumber: string // Артикул або внутрішній ідентифікатор книги
	price: number // Ціна книги в гривні
	discount: number // Знижка на книгу (коефіцієнт)
	stockQuantity: number // Кількість книг на складі, доступних для продажу
	description?: string // Опис книги, короткий або детальний текст (необов’язкове).
	images: string[] // Масив URL-адрес до фотографій книги
	criticReviews: CriticReview[] // Масив відгуків від критиків про книгу
	customerReviews: CustomerReview[] // Масив відгуків від покупців про книгу
	isBestseller: boolean // чи є книга бестселером?
	isPublish: boolean // чи книга вже продається?
	isGifted: boolean // чи подарункове видання?
	totalSales?: number // Кількість проданих книг за весь час продажів (необов’язкове)
	orders: Order[] // Масив замовлень, де присутня ця книга
	createdAt: string // Дата створення запису про книгу у форматі ISO ("2024-01-01T12:00:00Z").
	updatedAt: string // Дата останнього оновлення запису про книгу у форматі ISO ("2024-09-01T15:30:00Z")
}

// модель відгуку критика
export interface CriticReview {
	bookId: number
	criticId: number // Унікальний ідентифікатор відгуку критика (автоматичне створення)
	criticName: string // Ім’я критика, який залишив відгук
	rating: number // Оцінка відгуку від 0 до 5 (ціле значення)
	reviewText: string // Текст відгуку критика
	publicationDate: string // Дата публікації відгуку у форматі ISO ("2024-01-01T12:00:00Z")
	source: string // Джерело відгуку
	criticAvatar?: string // URL-адреса аватара критика (аватар можна генерувати автоматично)
}

// модель відгуку покупця
export interface CustomerReview {
	bookId: number
	customerId: number // Унікальний ідентифікатор відгуку покупця (автоматичне створення)
	customerName: string // Ім’я покупця, який залишив відгук
	rating: number // Оцінка відгуку від 0 до 5 (ціле значення)
	reviewText: string // Текст відгуку покупця
	reviewDate: string // Дата відгуку у форматі ISO ("2024-01-01T12:00:00Z")
	verifiedPurchase: boolean // Прапорець, що вказує, чи був відгук залишений після підтвердженої покупки
	customerAvatar?: string // URL-адреса аватара покупця (аватар можна генерувати автоматично)
}

// модель користувача
export interface User {
	userId: number // Унікальний ідентифікатор користувача, автоматично генерується
	email: string // Електронна пошта (унікальна)
	password?: string | null
	firstName: string // Ім’я
	lastName: string // Прізвище
	phoneNumber?: string // Номер телефону (унікальна)
	dateOfBirth?: string // Дата народження у форматі ISO (необов’язкове, "2024-01-01T12:00:00Z")
	address?: string // Адреса доставки (необов’язкове)
	city?: string // Місто (необов’язкове)
	postalCode?: string // Поштовий індекс (необов’язкове)
	country?: string // Країна (необов’язкове)
	role: UserRole // Роль користувача
	googleId?: string // Унікальний ID від Google
	googleAccessToken?: string // Токен доступу від Google
	avatar?: string // Аватар клієнта
	isActive: boolean // для активації/деактивації покупця адмінами
	favoriteBooks: number[] // Масив ID улюблених книг
	createdAt: string // Дата створення профілю у форматі ISO ("2024-01-01T12:00:00Z")
	updatedAt: string // Дата оновлення профілю у форматі ISO ("2024-09-01T15:30:00Z")
}

// модель замовлення
export interface Order {
	orderId: number // Унікальний ідентифікатор замовлення, автоматично генерується
	userId: number // Ідентифікатор користувача, який зробив замовлення (зв’язок із User)
	booksId: { bookId: number; quantity: number }[] // Масив книг з їх кількістю у замовленні (зв’язок із моделлю Book)
	totalAmount: number // Загальна сума замовлення в гривнях
	orderDate: string // Дата створення замовлення у форматі ISO ("2024-09-01T12:00:00Z")
	shippingAddress: string // Адреса доставки для цього замовлення
	shippingMethod: ShippingMethod // Спосіб доставки
	shippingDetails?: Shipping // Додаткові деталі доставки (необов’язкове)
	paymentMethod: PaymentMethod // Спосіб оплати
	status: OrderStatus // Статус замовлення (Очікує оплати, Оплачено, Відправлено, Доставлено, Скасовано)
}

// модель деталей доставки
export interface Shipping {
	shippingId: number // Унікальний ідентифікатор доставки, автоматично генерується
	orderId: number // Ідентифікатор замовлення, до якого належить доставка (зв’язок із Order)
	trackingNumber?: string // Номер відстеження доставки (необов’язкове)
	estimatedDeliveryDate: string // Очікувана дата доставки у форматі ISO ("2024-09-10T12:00:00Z")
	actualDeliveryDate?: string // Фактична дата доставки у форматі ISO (необов’язкове)
	carrier: Carrier // Назва перевізника
	shippingCost: number // Вартість доставки в гривнях
}
