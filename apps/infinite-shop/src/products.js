const products = [
  {
    description:
      "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)",
    image: "https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg",
    price: 5700.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 50.45,
    previousPrice: 6000.85,
    isBestSeller: false,
    isOnSale: true,
    ratings: 4,
    category: "electronics",
  },
  {
    description:
      "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD",
    image: "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg",
    price: 5700.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 50.45,
    previousPrice: 6000.85,
    isBestSeller: true,
    isOnSale: true,
    ratings: 5,
    category: "electronics",
  },
  {
    description: "HP 63 | Ink Cartridge | Black | F6U62AN",
    image: "https://images-na.ssl-images-amazon.com/images/I/41nV177MSfL.jpg",
    price: 700.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 10.45,
    previousPrice: 0,
    isBestSeller: false,
    isOnSale: true,
    ratings: 2,
    category: "electronics",
  },
  {
    description:
      "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black",
    image: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UL320_.jpg",
    price: 5700.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 50.45,
    previousPrice: 6000.85,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "electronics",
  },
  {
    description:
      "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD",
    image: "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg",
    price: 5700.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 50.45,
    previousPrice: 6000.85,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "electronics",
  },
  {
    description:
      "TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home",
    image: "https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL.jpg",
    price: 5700.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 50.45,
    previousPrice: 6000.85,
    isBestSeller: false,
    isOnSale: false,
    ratings: 4,
    category: "electronics",
  },
  {
    description:
      "SAMSUNG ELECTRONICS EVO Select 256GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME256HA)",
    image: "https://images-na.ssl-images-amazon.com/images/I/41UaR+6eAHL.jpg",
    price: 5700.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 50.45,
    previousPrice: 6000.85,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "electronics",
  },

  // -----------------------------
  {
    description: "The Children's Place Girls Denim Jacket",
    image: "https://m.media-amazon.com/images/I/7101sLKiLkL._AC_UL320_.jpg",
    price: 200.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "clothes",
  },
  {
    description: "Gold Toe girls Big Girls' 6-pack Liner Socks",
    image: "https://m.media-amazon.com/images/I/81lge3K5POL._AC_UL320_.jpg",
    price: 100.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "clothes",
  },
  {
    description:
      "A line Wedding Pageant Lace Flower Girl Dress with Belt 2-12 Year Old",
    image:
      "https://m.media-amazon.com/images/I/71FZTAxd2vL._MCnd_AC_UL320_.jpg",
    price: 100.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "clothes",
  },
  {
    description: "The Children's Place Girls' Uniform Cardigan",
    image: "https://m.media-amazon.com/images/I/81QpU8635pL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "clothes",
  },
  {
    description: "Disney Frozen Girls Panty Multipacks",
    image: "https://m.media-amazon.com/images/I/9132bIh-uxL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "clothes",
  },
  {
    description:
      "Kanu Surf Boys' Reflection Quick Dry UPF 50+ Beach Swim Trunk",
    image:
      "https://m.media-amazon.com/images/I/81JMd9csubL._MCnd_AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "clothes",
  },
  // --------------------------------
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/416ztNCSb8L._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blessed Monsters: A Novel (Something Dark and Holy, 3)Blessed Monsters: A Novel (Something Dark and Holy, 3)Blessed Monsters: A Novel (Something Dark and Ho",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51JYBIooo3L._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ucj27xFCL._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/416ztNCSb8L._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41IyN3hm-lL._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51JQZQjWWrL._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41IyN3hm-lL._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51QyGtYV2FL._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41IyN3hm-lL._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "On the House: A Washington MemoirOn the House: A Washington MemoirOn the House: A Washington Memoir",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._AC_SX184_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "books",
    author: "John Boehner",
    hardcover: true,
  },
  // ---------------------------------
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/817Hq08ZiKL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/81zsdIlLSgL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/61-UI9xzQ+L._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/81lPoQVl9eL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/81veY0o-HML._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/81ngwMbqC3L._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/81iIQO3FF2L._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/812bvqYZ0lL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/71TkVceLqUL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
  {
    description:
      "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
    image: "https://m.media-amazon.com/images/I/8120Lb01SxL._AC_UL320_.jpg",
    price: 150.99,
    seller: {
      displayName: "Hp",
      email: "hp@gmail.com",
    },
    delivery: 20.45,
    previousPrice: 300.0,
    isBestSeller: true,
    isOnSale: true,
    ratings: 4,
    category: "food",
    author: "John Boehner",
    hardcover: true,
  },
];

Array.prototype.shuffle = function () {
  let i = this.length,
    j,
    temp;
  if (i === 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};
export default products.shuffle();
