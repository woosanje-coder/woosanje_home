
export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  primaryColor: string;
  brandName: string;
}
