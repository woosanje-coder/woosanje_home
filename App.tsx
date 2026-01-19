
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
  const [amenities] = useState<Amenity[]>(INITIAL_AMENITIES);
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);

  // Intersection Observer for reveal animations
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
            {/* Elegant Hero Section */}
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

            {/* Marquee Text Section */}
            <div className="marquee-container bg-black border-y border-white/5">
              <div className="marquee-content">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-4xl md:text-6xl serif font-light text-white/20 mx-12 uppercase tracking-tighter">
                    LOGO <span className="text-royal-purple">●</span> HOMEPAGE <span className="text-royal-purple">●</span> DESIGN <span className="text-royal-purple">●</span> 
                  </span>
                ))}
              </div>
            </div>

            {/* Continuous Portfolio Slider */}
            <section className="py-32 bg-[#080808] overflow-hidden">
              <div className="container mx-auto px-6 mb-16 flex justify-between items-end reveal">
                <div>
                  <h2 className="text-4xl serif mb-4">우산정사의 사계</h2>
                  <p className="text-gray-500 tracking-widest uppercase text-xs">A Visual Journey Through Our Space</p>
                </div>
                <button onClick={() => setCurrentPage('rooms')} className="text-xs tracking-widest border-b border-royal-purple pb-1 hover:text-royal-purple transition-all">VIEW ALL ROOMS</button>
              </div>
              
              <div className="portfolio-slider">
                {[...portfolioItems, ...portfolioItems].map((item, index) => (
                  <div key={`${item.id}-${index}`} className="w-[300px] md:w-[450px] px-4 flex-shrink-0 group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <img src={item.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={item.title} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                         <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <p className="serif text-2xl mb-2">{item.title}</p>
                           <div className="w-8 h-[1px] bg-royal-purple mx-auto"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Subtle Detail Section */}
            <section className="py-40 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="reveal">
                <span className="text-royal-purple tracking-widest text-xs font-bold uppercase mb-4 block">Philosophy</span>
                <h2 className="text-5xl serif mb-8 leading-tight">가장 비우는 것으로<br/>가장 채우는 시간</h2>
                <p className="text-gray-400 leading-relaxed font-light text-lg mb-8">
                  우산정사의 건축은 덜어냄의 미학에서 시작되었습니다. 여백의 공간을 통해 자연의 소리가 들리고, 
                  빛의 그림자가 예술이 되는 순간을 선사합니다. 
                </p>
                <div className="flex gap-12">
                   <div>
                     <p className="text-2xl serif mb-1">01</p>
                     <p className="text-xs text-gray-500 tracking-tighter uppercase">Authentic Heritage</p>
                   </div>
                   <div>
                     <p className="text-2xl serif mb-1">02</p>
                     <p className="text-xs text-gray-500 tracking-tighter uppercase">Modern Luxury</p>
                   </div>
                   <div>
                     <p className="text-2xl serif mb-1">03</p>
                     <p className="text-xs text-gray-500 tracking-tighter uppercase">Soulful Silence</p>
                   </div>
                </div>
              </div>
              <div className="relative reveal">
                <div className="aspect-square rounded-full border border-white/5 absolute -top-10 -right-10 w-full animate-pulse"></div>
                <img src="https://images.unsplash.com/photo-1582719471327-5a3241bb93e5?q=80&w=1200" className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" alt="Detail" />
              </div>
            </section>
          </div>
        );

      case 'rooms':
        return (
          <section className="pt-48 pb-32 container mx-auto px-6 animate-fadeIn">
            <header className="max-w-3xl mb-20">
               <span className="text-royal-purple tracking-widest text-xs font-bold uppercase mb-4 block">Our Spaces</span>
               <h2 className="text-6xl serif mb-6">품격 있는 휴식</h2>
               <p className="text-gray-500 font-light text-xl">각기 다른 테마로 디자인된 두 가지 프리미엄 한옥 객실을 소개합니다.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {rooms.map(room => (
                <div key={room.id} className="group cursor-pointer reveal">
                  <div className="overflow-hidden aspect-[16/10] mb-8 relative">
                    <img 
                      src={room.image} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                      alt={room.name}
                    />
                    <div className="absolute top-6 left-6 glass px-4 py-2 text-xs tracking-widest">PREMIUM SUITE</div>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-6">
                    <h3 className="text-3xl serif">{room.name}</h3>
                    <span className="text-royal-purple font-light italic text-sm">from ₩{room.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-400 mb-8 font-light leading-relaxed">{room.description}</p>
                  <button onClick={() => setCurrentPage('booking')} className="group flex items-center gap-4 text-xs tracking-[0.3em] font-bold">
                    BOOK THIS ROOM 
                    <i className="fas fa-arrow-right text-royal-purple group-hover:translate-x-2 transition-transform"></i>
                  </button>
                </div>
              ))}
            </div>
          </section>
        );

      case 'amenities':
        return (
          <section className="pt-48 pb-32 container mx-auto px-6 animate-fadeIn">
            <h2 className="text-5xl serif mb-20 text-center">공간의 완성</h2>
            <div className="space-y-40">
              {amenities.map((amen, idx) => (
                <div key={amen.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-24 reveal`}>
                  <div className="w-full md:w-[60%] overflow-hidden">
                    <img src={amen.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_20px_50px_rgba(120,81,169,0.1)]" alt={amen.title} />
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
          <section className="pt-48 pb-32 container mx-auto px-6 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <h2 className="text-6xl serif">Journal</h2>
               <div className="flex gap-4">
                  <span className="px-4 py-2 border border-white/10 rounded-full text-xs hover:border-royal-purple transition-all cursor-pointer">ALL POSTS</span>
                  <span className="px-4 py-2 border border-white/10 rounded-full text-xs hover:border-royal-purple transition-all cursor-pointer">EVENTS</span>
                  <span className="px-4 py-2 border border-white/10 rounded-full text-xs hover:border-royal-purple transition-all cursor-pointer">STORY</span>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {news.map(item => (
                <div key={item.id} className="group cursor-pointer reveal">
                  <div className="aspect-[16/9] overflow-hidden mb-8">
                     <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
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
          <section className="pt-48 pb-32 container mx-auto px-6 max-w-5xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
               <div className="lg:col-span-1 reveal">
                  <h2 className="text-5xl serif mb-8">예약 문의</h2>
                  <p className="text-gray-500 font-light mb-12">
                    우산정사의 고요함 속에서 진정한 휴식을 경험해보세요. <br/>
                    문의 사항을 남겨주시면 소중히 답변해 드리겠습니다.
                  </p>
                  <div className="space-y-6">
                     <div>
                       <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Inquiry</p>
                       <p className="text-lg serif">054-123-4567</p>
                     </div>
                     <div>
                       <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                       <p className="text-lg serif">reserve@usanjeongsa.com</p>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-2 reveal">
                  <form className="glass p-12 rounded-2xl space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-purple outline-none transition-colors" placeholder="NAME" />
                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-royal-purple group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                      <div className="relative group">
                        <input type="tel" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-purple outline-none transition-colors" placeholder="PHONE" />
                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-royal-purple group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <input type="date" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-purple outline-none transition-colors" placeholder="CHECK-IN" />
                      </div>
                      <div className="relative group">
                        <select className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-purple outline-none transition-colors appearance-none">
                          <option className="bg-black">SELECT ROOM</option>
                          {rooms.map(r => <option key={r.id} className="bg-black">{r.name}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="relative group">
                      <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-purple outline-none transition-colors resize-none" placeholder="MESSAGE"></textarea>
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-royal-purple group-focus-within:w-full transition-all duration-500"></div>
                    </div>
                    <button className="w-full py-6 bg-royal-purple text-white font-bold tracking-[0.4em] text-xs hover:brightness-125 transition-all">
                      SEND REQUEST
                    </button>
                  </form>
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
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {renderContent()}
      </main>

      <footer className="bg-black border-t border-white/5 pt-32 pb-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-6">
            <h4 className="text-4xl serif mb-8">우산정사 (雨山亭舍)</h4>
            <p className="text-gray-500 max-w-sm font-light leading-loose">
              비 내리는 산속의 작은 집, <br />
              시간의 흐름조차 고요히 머무는 곳입니다.
              우리의 유산을 현대의 감각으로 재해석한 프리미엄 공간.
            </p>
          </div>
          <div className="md:col-span-3">
            <h5 className="text-xs uppercase tracking-widest text-royal-purple font-bold mb-8">Contact</h5>
            <ul className="text-gray-500 space-y-4 font-light">
              <li className="flex items-center gap-4"><i className="fas fa-map-marker-alt text-xs"></i> 안동시 한옥마을길 123</li>
              <li className="flex items-center gap-4"><i className="fas fa-phone text-xs"></i> 054-123-4567</li>
              <li className="flex items-center gap-4"><i className="fas fa-envelope text-xs"></i> contact@usanjeongsa.com</li>
            </ul>
          </div>
          <div className="md:col-span-3">
             <h5 className="text-xs uppercase tracking-widest text-royal-purple font-bold mb-8">Newsletter</h5>
             <div className="flex border-b border-white/10 pb-2">
                <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent text-xs w-full outline-none" />
                <button className="text-royal-purple"><i className="fas fa-arrow-right"></i></button>
             </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-gray-700 tracking-[0.5em] font-bold">© 2025 USANJEONGSA PREMIUM STAY</p>
          <div className="flex gap-10 text-xs text-gray-700 tracking-widest">
             <a href="#" className="hover:text-royal-purple">INSTAGRAM</a>
             <a href="#" className="hover:text-royal-purple">FACEBOOK</a>
             <a href="#" className="hover:text-royal-purple">YOUTUBE</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
