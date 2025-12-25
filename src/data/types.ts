export interface LocalizedString {
  pt: string;
  en: string;
}

export interface Article {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  category: CategorySlug;
  subcategory?: string;
  content: LocalizedString;
  readingTime: number;
  order: number;
  isNew?: boolean;
}

export interface Category {
  id: CategorySlug;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  order: number;
}

export type CategorySlug =
  | 'manifesto'
  | 'ui-foundations'
  | 'ux-foundations'
  | 'methodologies'
  | 'trends-2025'
  | 'ethics-accessibility'
  | 'case-studies';

export type Language = 'pt' | 'en';

export interface ProgressState {
  completedArticles: string[];
  lastVisited?: string;
}
