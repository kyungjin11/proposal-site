export interface Category {
  label: string;
  slug: string;
  sub: string[];
}

export const CATEGORIES: Category[] = [
  { label: '법률', slug: 'law', sub: ['노무', '민사', '형사', '부동산'] },
  { label: '기업', slug: 'corporate', sub: ['스타트업', 'IR', '사업계획', '컨설팅'] },
  { label: '쇼핑몰', slug: 'shopping', sub: ['의류', '소품', '식품', '뷰티'] },
  { label: '병원', slug: 'hospital', sub: ['피부과', '이비인후과', '치과', '성형외과'] },
  { label: 'SEO', slug: 'seo', sub: ['키워드 분석', '콘텐츠 전략', '기술 SEO'] },
  { label: '기타', slug: 'etc', sub: ['교육', '공공기관', '비영리'] },
];
