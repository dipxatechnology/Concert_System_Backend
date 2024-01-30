export interface Artist {
  id: number;
  name: string;
  genre: string;
  bio: string;
  image?: string; // Assuming image is stored as a URL
  website?: string;
  social_media_links?: string[];
}
