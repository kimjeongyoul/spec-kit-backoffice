export interface Specification {
  id: string;
  title: string;
  version: string;
  status: 'DRAFT' | 'REVIEW' | 'PUBLISHED';
  updatedAt: string;
  author: string;
}

export interface SpecListResponse {
  content: Specification[];
  totalElements: number;
  totalPages: number;
}
