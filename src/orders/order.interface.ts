// Order interface
export interface Order {
  id: number;
  user_id: number;
  total_price: number;
  order_date: Date;
  payment_method: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}
