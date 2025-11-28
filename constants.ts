import { NavItem, PageRoute, BusinessItem, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: PageRoute.HOME },
  { label: '公司概况', path: PageRoute.ABOUT },
  { label: '三大业务', path: PageRoute.BUSINESS },
  { label: '新闻中心', path: PageRoute.NEWS },
  { label: '联系我们', path: PageRoute.CONTACT },
];

export const BUSINESS_DATA: BusinessItem[] = [
  {
    id: 'packaging',
    title: '医用软包装',
    description: '无菌。可靠。为医疗安全匠心打造。提供全球领先的医用级灭菌包装解决方案。',
    image: 'https://picsum.photos/800/600?random=1',
    features: ['ISO 11607认证', '特种特卫强®材料', '智能剥离技术']
  },
  {
    id: 'injection',
    title: '精密注塑成型',
    description: '面向关键医用部件的先进注塑成型技术，微米级精度控制。',
    image: 'https://picsum.photos/800/600?random=2',
    features: ['万级洁净车间', '多腔模具技术', '生物相容性材料']
  },
  {
    id: 'protein',
    title: '大豆蛋白创新',
    description: '助力未来生物材料发展的可持续大豆蛋白，绿色环保的新型基材。',
    image: 'https://picsum.photos/800/600?random=3',
    features: ['非转基因大豆', '可降解涂层', '高阻隔性能']
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    date: '2025-05-12',
    title: '荣获国家级高新技术企业认证',
    category: '企业荣誉',
    summary: '经过严格审核，我司成功获得2025年度国家高新技术企业认定，标志着技术研发实力迈上新台阶。',
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 2,
    date: '2025-04-28',
    title: '全新一代医用透析纸投产',
    category: '产品动态',
    summary: '历时三年研发的第四代高透气性、高阻菌性透析纸生产线今日正式投产。',
    image: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 3,
    date: '2025-04-15',
    title: '参加德国MEDICA医疗展',
    category: '市场活动',
    summary: '携三大核心业务亮相杜塞尔多夫，与全球顶尖医疗器械厂商达成多项战略合作意向。',
    image: 'https://picsum.photos/600/400?random=12'
  }
];
