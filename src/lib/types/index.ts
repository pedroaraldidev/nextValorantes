    // Tipos para posts do blog
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    content?: string;
  }
  
  // Tipos para jogadores
  export interface Player {
    id: number;
    name: string;
    rank: string;
    rating: number;
    team: string;
    region?: string;
  }
  
  // Tipos para LFG (Looking For Group)
  export interface LFGPost {
    id: number;
    username: string;
    description: string;
    rank: string;
    region: string;
    type: 'team' | 'friends';
  }

  export interface FooterLink {
    title: string;
    href: string;
    external?: boolean;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }