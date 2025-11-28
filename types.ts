export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  BUSINESS = '/business',
  NEWS = '/news',
  CONTACT = '/contact'
}

export interface NavItem {
  label: string;
  path: PageRoute;
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
  summary: string;
  image: string;
}

export interface BusinessItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}
