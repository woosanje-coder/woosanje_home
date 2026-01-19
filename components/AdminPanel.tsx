
import React, { useState } from 'react';
import { SiteConfig, Room, NewsItem, Amenity } from '../types';

interface AdminPanelProps {
  config: SiteConfig;
  onUpdateConfig: (newConfig: SiteConfig) => void;
  rooms: Room[];
  onUpdateRooms: (newRooms: Room[]) => void;
  news: NewsItem[];
  onUpdateNews: (newNews: NewsItem[]) => void;
  amenities: Amenity[];
  onUpdateAmenities: (newAmenities: Amenity[]) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  config, onUpdateConfig, 
  rooms, onUpdateRooms,
  news, onUpdateNews,
  amenities, onUpdateAmenities
}) => {
  const [localConfig, setLocalConfig] = useState(config);
  const [activeTab, setActiveTab] = useState<'basic' | 'rooms' | 'amenities' | 'news' | 'booking'>('basic');

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocalConfig(prev => ({ ...prev, [name]: value }));
  };

  const saveAll = () => {
    onUpdateConfig(localConfig);
    alert('모든 변경사항이 사이트에 실시간 반영되었습니다.');
  };

  const updateRoom = (id: string, field: keyof Room, value: any) => {
    const nextRooms = rooms.map(r => r.id === id ? { ...r, [field]: value } : r);
    onUpdateRooms(nextRooms);
  };

  const updateAmenity = (id: string, field: keyof Amenity, value: any) => {
    const nextAmens = amenities.map(a => a.id === id ? { ...a, [field]: value } : a);
    onUpdateAmenities(nextAmens);
  };

  const updateNewsItem = (id: string, field: keyof NewsItem, value: any) => {
    const nextNews = news.map(n => n.id === id ? { ...n, [field]: value } : n);
    onUpdateNews(nextNews);
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-white/10 pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold serif mb-2 text-royal-purple">우산정사 통합 관리자 센터</h1>
          <p className="text-gray-500 text-sm italic">실시간으로 웹사이트의 모든 텍스트와 이미지를 제어합니다.</p>
        </div>
        <button 
          onClick={saveAll}
          className="bg-royal-purple text-white px-8 py-3 rounded-full hover:brightness-125 transition-all font-bold tracking-widest shadow-lg shadow-royal-purple/20"
        >
          사이트 데이터 동기화
        </button>
      </div>

      <div className="flex space-x-4 mb-8 border-b border-white/5 pb-px overflow-x-auto">
        {(['basic', 'rooms', 'amenities', 'news', 'booking'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-2 text-sm tracking-widest transition-all whitespace-nowrap ${activeTab === tab ? 'text-royal-purple border-b-2 border-royal-purple font-bold' : 'text-gray-500 hover:text-white'}`}
          >
            {tab === 'basic' && '기본/홈 설정'}
            {tab === 'rooms' && '객실 상세 관리'}
            {tab === 'amenities' && '부대시설 관리'}
            {tab === 'news' && '커뮤니티 관리'}
            {tab === 'booking' && '예약 문의 설정'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-12">
        {activeTab === 'basic' && (
          <section className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 glass">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 serif text-white">
              <i className="fas fa-home text-royal-purple"></i> 홈 화면 메인 텍스트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">메인 타이틀</label>
                  <input name="heroTitle" value={localConfig.heroTitle} onChange={handleConfigChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-royal-purple outline-none text-white serif" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">서브 타이틀</label>
                  <textarea name="heroSubtitle" value={localConfig.heroSubtitle} onChange={handleConfigChange} rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-royal-purple outline-none text-white font-light" />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'booking' && (
          <section className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 glass">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 serif text-white">
              <i className="fas fa-calendar-check text-royal-purple"></i> 예약 문의 섹션 상세 설정
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">섹션 타이틀</label>
                  <input name="bookingTitle" value={localConfig.bookingTitle} onChange={handleConfigChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-royal-purple outline-none text-white serif" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">버튼 텍스트</label>
                  <input name="bookingButtonText" value={localConfig.bookingButtonText} onChange={handleConfigChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-royal-purple outline-none text-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">설명 문구</label>
                <textarea name="bookingDescription" value={localConfig.bookingDescription} onChange={handleConfigChange} rows={3} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-royal-purple outline-none text-white font-light" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">예약 시스템 외부 링크 (URL)</label>
                <div className="flex gap-2">
                  <div className="flex-grow relative">
                    <i className="fas fa-link absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"></i>
                    <input name="bookingUrl" value={localConfig.bookingUrl} onChange={handleConfigChange} placeholder="https://external-booking-site.com" className="w-full bg-black/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:border-royal-purple outline-none text-white" />
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-gray-600">※ 외부 예약 대행 사이트나 자체 예약 시스템 주소를 입력하면 사용자 버튼 클릭 시 해당 주소로 이동합니다.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'rooms' && (
          <section className="space-y-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 glass grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                   <img src={room.image} className="w-full aspect-video object-cover rounded-lg border border-white/10" />
                   <input type="text" value={room.image} onChange={(e) => updateRoom(room.id, 'image', e.target.value)} className="w-full bg-black/50 border border-white/5 text-[10px] p-2 rounded text-white" placeholder="이미지 URL" />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input value={room.name} onChange={(e) => updateRoom(room.id, 'name', e.target.value)} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white serif" placeholder="객실명" />
                    <input type="number" value={room.price} onChange={(e) => updateRoom(room.id, 'price', parseInt(e.target.value))} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white" placeholder="가격" />
                  </div>
                  <textarea value={room.description} onChange={(e) => updateRoom(room.id, 'description', e.target.value)} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white h-24 text-sm font-light" placeholder="설명" />
                </div>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'amenities' && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((amen) => (
              <div key={amen.id} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 glass space-y-4">
                <input value={amen.title} onChange={(e) => updateAmenity(amen.id, 'title', e.target.value)} className="bg-transparent border-b border-white/5 text-xl font-bold serif text-white w-full outline-none" />
                <textarea value={amen.description} onChange={(e) => updateAmenity(amen.id, 'description', e.target.value)} className="w-full bg-black/30 border border-white/10 rounded p-3 text-sm text-gray-400 outline-none h-24" />
              </div>
            ))}
          </section>
        )}

        {activeTab === 'news' && (
          <section className="space-y-6">
            {news.map((item) => (
              <div key={item.id} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 glass flex gap-6">
                <div className="flex-grow space-y-3">
                  <input value={item.title} onChange={(e) => updateNewsItem(item.id, 'title', e.target.value)} className="bg-transparent border-none text-lg font-bold text-white outline-none w-full" />
                  <textarea value={item.summary} onChange={(e) => updateNewsItem(item.id, 'summary', e.target.value)} className="w-full bg-black/30 border border-white/5 rounded p-2 text-xs text-gray-500 outline-none h-16" />
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
