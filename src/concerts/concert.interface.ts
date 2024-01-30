// Concert interface
export interface Concert {
  id: number;
  title: string;
  date: Date;
  time: string;
  venue: string;
  city: string;
  state: string;
  country: string;
  genre: string;
  description: string;
  image?: string; // Assuming image is stored as a URL
  artist_id: number;
  price: number;
  status: 'available' | 'sold out';
}
