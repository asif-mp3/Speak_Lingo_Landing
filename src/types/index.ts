import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  color: string;
}

export interface Mode {
  id: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
  insight: string;
  color: string;
  lightColor: string;
  element: string;
}

export interface PainPoint {
  problem: string;
  resolution: string;
  description: string;
}

export interface MegaMenuProps {
  title: string;
  items: MenuItem[];
  active: number | null;
  setActive: (index: number | null) => void;
  index: number;
}
