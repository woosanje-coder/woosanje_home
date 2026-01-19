
import { Room, NewsItem, Amenity, SiteConfig } from './types';

export const INITIAL_SITE_CONFIG: SiteConfig = {
  heroTitle: "전통의 고결함, 현대의 안락함",
  heroSubtitle: "우산정사에서 경험하는 가장 완벽한 휴식",
  primaryColor: "#7851A9",
  brandName: "우산정사",
  bookingTitle: "예약 문의",
  bookingDescription: "우산정사에서의 특별한 하루를 계획해보세요. 아래 버튼을 클릭하면 실시간 예약 시스템으로 연결됩니다.",
  bookingButtonText: "실시간 예약하기",
  bookingUrl: "#" // 나중에 실제 예약 링크 주소를 입력할 곳
};

export const INITIAL_ROOMS: Room[] = [
  {
    id: 'room-1',
    name: '천지 (Cheonji)',
    description: '전통 서까래의 미학이 돋보이는 최고급 스위트룸입니다. 넓은 대청마루와 현대적인 침실이 조화를 이룹니다.',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1590216777134-877716183931?q=80&w=1200',
    features: ['킹 사이즈 침대', '프라이빗 노천탕', '고급 다도 세트', '공기청정기']
  },
  {
    id: 'room-2',
    name: '일월 (Ilwol)',
    description: '해와 달의 기운을 담은 아늑한 공간입니다. 한지 창문을 통해 들어오는 은은한 빛이 평온함을 제공합니다.',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200',
    features: ['퀸 사이즈 침대', '개별 정원 조망', '전통 차 세트', '스마트 프로젝터']
  },
  {
    id: 'room-3',
    name: '청산 (Cheongsan)',
    description: '푸른 산을 마주하며 명상에 잠길 수 있는 객실입니다. 미니멀한 인테리어로 비움의 미학을 실천합니다.',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200',
    features: ['더블 사이즈 침대', '마운틴 뷰 테라스', '친환경 어메니티', '블루투스 스피커']
  }
];

export const INITIAL_AMENITIES: Amenity[] = [
  {
    id: 'amen-1',
    title: '비밀의 정원',
    description: '계절의 변화를 온몸으로 느낄 수 있는 우산정사만의 고즈넉한 조경 공간입니다.',
    icon: 'fa-leaf',
    image: 'https://picsum.photos/id/1020/800/600'
  },
  {
    id: 'amen-2',
    title: '다도실',
    description: '최고급 차와 함께 명상을 즐길 수 있는 정적인 공간입니다.',
    icon: 'fa-mug-hot',
    image: 'https://picsum.photos/id/1021/800/600'
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: '우산정사의 겨울 풍경',
    date: '2024.12.20',
    summary: '함박눈이 내린 우산정사의 아름다운 설경을 공유합니다.',
    content: '눈 덮인 기와와 따뜻한 온돌방에서 즐기는 차 한 잔의 여유...',
    image: 'https://picsum.photos/id/1022/800/600'
  },
  {
    id: 'news-2',
    title: '오픈 기념 얼리버드 이벤트',
    date: '2024.12.01',
    summary: '새로운 시작을 기념하여 주중 20% 할인 혜택을 드립니다.',
    content: '우산정사를 먼저 경험해보실 고객님들을 위한 특별한 혜택...',
    image: 'https://picsum.photos/id/1023/800/600'
  }
];
