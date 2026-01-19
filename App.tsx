
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';
import { 
  INITIAL_SITE_CONFIG, 
  INITIAL_ROOMS, 
  INITIAL_AMENITIES, 
  INITIAL_NEWS 
} from './constants';
import { Room, NewsItem, Amenity, SiteConfig } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [config, setConfig] = useState<SiteConfig>(INITIAL_SITE_CONFIG);
  const [rooms, setRooms] = useState<Room[]>(INITIAL_ROOMS);
  const [amenities, setAmenities] = useState<Amenity[]>(INITIAL_AMENITIES);
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const portfolioItems = [
    { id: 1, img: "https://images.unsplash.com/photo-1590216777134-877716183931?q=80&w=800", title: "천지 스위트" },
    { id: 2, img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800", title: "일월 스테이" },
    { id: 3, img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800", title: "정원의 아침" },
    { id: 4, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800", title: "다도 명상" },
    { id: 5, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800", title: "야간 경관" },
    { id: 6, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800", title: "서까래 디테일" },
    { id: 7, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800", title: "프라이빗 스파" },
    { id: 8, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800", title: "전통 다이닝" },
    { id: 9, img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800", title: "라운지 공간" },
    { id: 10, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800", title: "숲속의 휴식" },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-fadeIn">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1590216777134-877716183931?auto=format&fit=crop&q=90&w=2400" 
                  className="w-full h-full object-cover opacity-70"
                  alt="Hanok Hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40"></div>
              </div>
              
              <div className="relative z-10 text-center px-6 max-w-5xl">
                <span className="text-royal-purple tracking-[0.5em] text-sm font-bold uppercase mb-8 block reveal">Premium Hanok Stay</span>
                <h1 className="text-6xl md:text-8xl serif mb-10 tracking-tight leading-[1.1] reveal">
                  {config.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-12 tracking-widest font-light max-w-2xl mx-auto reveal">
                  {config.heroSubtitle}
                </p>
                <div className="reveal">
                  <button 
                    onClick={() => setCurrentPage('booking')}
                    className="group relative px-12 py-5 overflow-hidden rounded-full border border-royal-purple/30 transition-all hover:border-royal-purple"
                  >
                    <div className="absolute inset-0 bg-royal-purple translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="relative z-10 text-sm tracking-[0.3em] font-bold group-hover:text-white">RESERVE NOW</span>
                  </button>
                </div>
              </div>
            </section>

            <div className="marquee-container bg-black border-y border-white/5">
              <div className="marquee-content">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-4xl md:text-6xl serif font-light text-white/20 mx-12 uppercase tracking-tighter">
                    LOGO <span className="text-royal-purple">●</span> HOMEPAGE <span className="text-royal-purple">●</span> DESIGN <span className="text-royal-purple">●</span> 
                  </span>
                ))}
              </div>
            </div>

            <section className="py-32 bg-[#080808] overflow-hidden">
              <div className="container mx-auto px-6 mb-16 flex justify-between items-end reveal">
                <div>
                  <h2 className="text-4xl serif mb-4 text-white">우산정사의 사계</h2>
                  <p className="text-gray-500 tracking-widest uppercase text-xs">A Visual Journey Through Our Space</p>
                </div>
                <button onClick={() => setCurrentPage('rooms')} className="text-xs tracking-widest border-b border-royal-purple pb-1 text-white hover:text-royal-purple transition-all uppercase">VIEW ALL ROOMS</button>
              </div>
              
              <div className="portfolio-slider">
                {[...portfolioItems, ...portfolioItems].map((item, index) => (
                  <div key={`${item.id}-${index}`} className="w-[300px] md:w-[450px] px-4 flex-shrink-0 group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <img src={item.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                         <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <p className="serif text-2xl mb-2 text-white">{item.title}</p>
                           <div className="w-8 h-[1px] bg-royal-purple mx-auto"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'rooms':
        return (
          <section className="pt-48 pb-32 container mx-auto px-6 animate-fadeIn">
            <header className="max-w-3xl mb-20">
               <span className="text-royal-purple tracking-widest text-xs font-bold uppercase mb-4 block">Our Spaces</span>
               <h2 className="text-6xl serif mb-6 text-white">품격 있는 휴식</h2>
               <p className="text-gray-500 font-light text-xl">각기 다른 테마로 디자인된 {rooms.length}가지 프리미엄 한옥 객실을 소개합니다.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white">
              {rooms.map(room => (
                <div key={room.id} className="group cursor-pointer reveal">
                  <div className="overflow-hidden aspect-[16/10] mb-8 relative rounded-sm">
                    <img 
                      src={room.image} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                      alt={room.name}
                    />
                    <div className="absolute top-4 left-4 glass px-3 py-1 text-[10px] tracking-widest uppercase">PREMIUM STAY</div>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-6">
                    <h3 className="text-2xl serif">{room.name}</h3>
                    <span className="text-royal-purple font-light italic text-sm">₩{room.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-400 mb-6 font-light leading-relaxed text-sm h-12 line-clamp-2">{room.description}</p>
                  <button onClick={() => setCurrentPage('booking')} className="text-[10px] tracking-[0.2em] font-bold text-white hover:text-royal-purple transition-colors border-b border-white/20 pb-1">INQUIRE NOW</button>
                </div>
              ))}
            </div>
          </section>
        );

      case 'amenities':
        return (
          <section className="pt-48 pb-32 container mx-auto px-6 animate-fadeIn">
            <h2 className="text-5xl serif mb-20 text-center text-white">공간의 완성</h2>
            <div className="space-y-40 text-white">
              {amenities.map((amen, idx) => (
                <div key={amen.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-24 reveal`}>
                  <div className="w-full md:w-[60%] overflow-hidden">
                    <img src={amen.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_20px_50px_rgba(120,81,169,0.1)]" />
                  </div>
                  <div className="w-full md:w-[40%] space-y-8">
                    <span className="text-royal-purple text-5xl font-light italic opacity-50">0{idx + 1}</span>
                    <h3 className="text-4xl serif">{amen.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">{amen.description}</p>
                    <div className="w-12 h-[1px] bg-royal-purple"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'community':
        return (
          <section className="pt-48 pb-32 container mx-auto px-6 animate-fadeIn text-white">
            <h2 className="text-6xl serif mb-20">Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {news.map(item => (
                <div key={item.id} className="group cursor-pointer reveal">
                  <div className="aspect-[16/9] overflow-hidden mb-8">
                     <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs text-royal-purple tracking-widest font-bold uppercase">{item.date}</span>
                    <h3 className="text-3xl serif group-hover:text-royal-purple transition-colors">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'booking':
        return (
          <section className="pt-48 pb-32 container mx-auto px-6 max-w-5xl animate-fadeIn text-center text-white">
            <span className="text-royal-purple tracking-widest text-xs font-bold uppercase mb-4 block reveal">Reservation</span>
            <h2 className="text-6xl md:text-7xl serif mb-10 reveal">{config.bookingTitle}</h2>
            <p className="text-gray-400 mb-16 text-xl font-light max-w-2xl mx-auto leading-relaxed reveal">
              {config.bookingDescription}
            </p>
            
            <div className="reveal">
              <a 
                href={config.bookingUrl} 
                target={config.bookingUrl.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-block group relative px-16 py-6 overflow-hidden rounded-full bg-royal-purple transition-all hover:scale-105 shadow-2xl shadow-royal-purple/20"
              >
                <span className="relative z-10 text-sm tracking-[0.4em] font-bold text-white uppercase">
                  {config.bookingButtonText}
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                <div className="glass p-8 rounded-2xl">
                  <p className="text-xs text-gray-500 tracking-widest mb-4 font-bold uppercase">Customer Support</p>
                  <p className="text-3xl serif mb-2">054-123-4567</p>
                  <p className="text-sm text-gray-600">오전 10시 - 오후 6시 (월-금)</p>
                </div>
                <div className="glass p-8 rounded-2xl">
                  <p className="text-xs text-gray-500 tracking-widest mb-4 font-bold uppercase">Bank Info</p>
                  <p className="text-2xl serif mb-2">국민 123456-01-123456</p>
                  <p className="text-sm text-gray-600">예금주: 우산정사</p>
                </div>
              </div>
            </div>
          </section>
        );

      case 'admin':
        return (
          <AdminPanel 
            config={config} 
            onUpdateConfig={setConfig}
            rooms={rooms}
            onUpdateRooms={setRooms}
            news={news}
            onUpdateNews={setNews}
            amenities={amenities}
            onUpdateAmenities={setAmenities}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>{renderContent()}</main>
      <footer className="bg-black border-t border-white/5 pt-20 pb-10 text-center">
        <p className="text-[10px] text-gray-700 tracking-[0.5em] font-bold uppercase">© 2025 USANJEONGSA PREMIUM STAY</p>
      </footer>
    </div>
  );
};

export default App;
