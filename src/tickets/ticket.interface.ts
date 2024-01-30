// Ticket interface
export interface Ticket {
  id: number;
  concert_id: number;
  user_id: number;
  quantity: number;
  price: number;
  payment_status: 'pending' | 'completed' | 'refunded';
  purchase_date: Date;
}
