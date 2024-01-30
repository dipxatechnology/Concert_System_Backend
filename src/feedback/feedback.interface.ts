export interface Feedback {
  id: number;
  user_id?: number;
  message: string;
  email: string;
  created_at: Date;
}
