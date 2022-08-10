// side bar data

import ExtendedCardVegetable from "./components/Categories/ExtendedCardVegetable";

export const SidebarData = [
  {
    tittle: "Dashboard",
    path: "/",
    image: "images/home.png",
    id: 1,
  },
  {
    tittle: "QR History",
    path: "/history",
    image: "images/history.png",
    id: 2,
  },
  {
    tittle: "User's Location",
    path: "/user-location",
    image: "images/pin.png",
    id: 3,
  },
  {
    tittle: "Product List",
    path: "/product-list",
    image: "images/box.png",
    id: 4,
  },
  {
    tittle: "Store List",
    path: "/store-list",
    image: "images/store.png",
    id: 5,
  },
  {
    tittle: "Categories",
    path: "/categories",
    image: "images/categories.png",
    id: 6,
  },
];

// card data

export const cardData = [
  {
    title: "Daily Scan",
    amount: "86049",
    id: 1,
  },
  {
    title: "New Customers",
    amount: "90283",
    id: 2,
  },
  {
    title: "Total Products",
    amount: 1456,
    id: 3,
  },
];

// Trending Data
export const trendingData = [
  {
    type: "cabbage",
    rank: 1,
    id: 1,
  },
  {
    type: "carrot",
    rank: 2,
    id: 2,
  },
  {
    type: "potato",
    rank: 3,
    id: 3,
  },
  {
    type: "broccoli",
    rank: 4,
    id: 4,
  },
  {
    type: "apple",
    rank: 5,
    id: 5,
  },
];

// Recent Data

export const RecentData = [
  {
    store: "K Mall",
    agent: "Pixel 2XL",
    time: "3:29pm",
    product: "Carrot",
    farmer: "Sreoun DoungChan",
    id: 1,
  },
  {
    store: "Sokha Shop",
    agent: "Pixel 3XL",
    time: "12:09pm",
    product: "Banana",
    farmer: "Meng Lavy",
    id: 2,
  },
  {
    store: "Lengnavattra",
    agent: "iPhone 13 Pro Max",
    time: "6:13pm",
    product: "Tomato",
    farmer: "Sor Panharith",
    id: 3,
  },
];

// Product Data
export const productData = [
  {
    name: "cabbage",
    store: "K mall",
    location: "Phnom Penh",
    time: "11:30",
    id: 1,
  },
  {
    name: "banana",
    store: "K mall",
    location: "Phnom Penh",
    time: "11:30",
    id: 2,
  },
  {
    name: "apple",
    store: "K mall",
    location: "Phnom Penh",
    time: "11:30",
    id: 3,
  },
  {
    name: "cabbage",
    store: "K mall",
    location: "Phnom Penh",
    time: "11:30",
    id: 4,
  },
  {
    name: "banana",
    store: "K mall",
    location: "Phnom Penh",
    time: "11:30",
    id: 5,
  },
  {
    name: "apple",
    store: "K mall",
    location: "Phnom Penh",
    time: "11:30",
    id: 6,
  },
];

// product list data

export const listData = [
  {
    name: "Pork",
    img: "images/meat.png",
    id: 1,
    price: "5$/kg",
    source: "kompong Speu",
    expire: "11/02/2022",
    categ: 'meat',
  },
  {
    name: "Banana",
    img: "images/bananas.png",
    id: 2,
    price: "1$/kg",
    source: "kompong Som",
    expire: "10/03/2023",
    categ: 'fruit',
  },
  {
    name: "Broccoli",
    img: "images/broccoli.png",
    id: 3,
    price: "1.5$/kg",
    source: "Battambang",
    expire: "09/11/2022",
    categ: 'vegetable',
  },
  // {
  //   name: "Beef",
  //   img: "images/beef.png",
  //   id: 4,
  //   price: "5$/kg",
  //   source: "Battambang",
  //   expire: "09/11/2022",
  // },
  // {
  //   name: "Apple",
  //   img: "images/apple.png",
  //   id: 5,
  //   price: "3$/kg",
  //   source: "Battambang",
  //   expire: "09/11/2022",
  // },
  // {
  //   name: "Carrot",
  //   img: "images/carrot.png",
  //   id: 6,
  //   price: "1$/kg",
  //   source: "Battambang",
  //   expire: "09/11/2022",
  // },
];

export const storeData = [
  {
    storeName : 'LengNavattra1',
    image : 'images/store.png', 
    id : 1, 
    location : 'Borey Piphop Tmey3,SangKat Prey Sa,Khan Dangkor, Phnom Penh1', 
    contact : '086981118'
  },
  {
    storeName : 'LengNavattra2',
    image : 'images/store.png', 
    id : 2, 
    location : 'Borey Piphop Tmey3,SangKat Prey Sa,Khan Dangkor, Phnom Penh2', 
    contact : '086981118'
  },
  {
    storeName : 'LengNavattra3',
    image : 'images/store.png', 
    id : 3, 
    location : 'Borey Piphop Tmey3,SangKat Prey Sa,Khan Dangkor, Phnom Penh3', 
    contact : '086981118'
  },
]

// categories data

export const categoriesData = [
  {
    id: 1,
    type: "Vegetable",
  },
  {
    id: 2,
    type: "Fruit",
  },
  {
    id: 3,
    type: "Meat",
  },
];

export const ExtendedCardVegetableData = [
{
  image : 'images/potato.png', 
  title : 'Potato', 
  id : 1
},
{
  image : 'images/cabbage.png', 
  title : 'Cabbage', 
  id : 2
},
{
  image : 'images/ginger.png', 
  title : 'Ginger', 
  id : 3
},
{
  image : 'images/broccoli.png', 
  title : 'Broccoli', 
  id : 4
}
]