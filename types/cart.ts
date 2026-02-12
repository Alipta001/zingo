// src/types/cart.ts

export interface CartItem {
  id: string;                
  name: string;              
  price: number;              
  quantity: number;        
  restaurantId: string;     
  restaurantName: string;
  image?: string;             
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}
