import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Tech Fleece",
    category: "Men's Pullover Hoodie",
    price: "$110",
    image: require("../assets/product1.png"),
  },
  {
    id: "2",
    name: "Indy Luxe",
    category: "Women's Light-Support",
    price: "$50",
    image: require("../assets/product2.png"),
  },
  {
    id: "nike-woman", // 👈 IMPORTANT
    name: "Nike Swoosh",
    category: "Women's Medium-Support",
    price: "$18",
    image: require("../assets/nike-woman.png"),
  },
];
