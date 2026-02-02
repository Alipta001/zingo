// src/types/cart.ts

export interface CartItem {
  id: string;                 // food id
  name: string;               // food name
  price: number;              // price of single item
  quantity: number;           // how many added
  restaurantId: string;       // which restaurant
  restaurantName: string;
  image?: string;             // optional
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}
