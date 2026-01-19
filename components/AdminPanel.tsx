
import React, { useState } from 'react';
import { SiteConfig, Room, NewsItem } from '../types';

interface AdminPanelProps {
  config: SiteConfig;
  onUpdateConfig: (newConfig: SiteConfig) => void;
  rooms: Room[];
  onUpdateRooms: (newRooms: Room[]) => void;
  news: NewsItem[];
  onUpdateNews: (newNews: NewsItem[]) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  config, onUpdateConfig, 
  rooms, onUpdateRooms,
  news, onUpdateNews 
}) => {
  const [localConfig, setLocalConfig] = useState(config);

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocalConfig(prev => ({ ...prev, [name]: value }));
  };

  const saveConfig = () => {
    onUpdateConfig(localConfig);
    alert('설정이 저장되었습니다.');
  };

  const deleteNews = (id: string) => {
    if (confirm('이 소식을 삭제하시겠습니까?')) {
      onUpdateNews(news.filter(n => n.id !== id));
    }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold serif">관리자 대시보드</h1>
        <button 
          onClick={saveConfig}
          className="bg-royal-purple text-white px-6 py-2 rounded-full hover:brightness-110 transition-all"
        >
          사이트 전체 저장
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Basic Settings */}
        <section className="bg-zinc-900 p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-cog text-royal-purple"></i> 기본 정보 설정
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">메인 제목</label>
              <input 
                name="heroTitle"
                value={localConfig.heroTitle}
                onChange={handleConfigChange}
                className="w-full bg-black border border-gray-800 rounded px-4 py-2 focus:border-royal-purple outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">서브 타이틀</label>
              <textarea 
                name="heroSubtitle"
                value={localConfig.heroSubtitle}
                onChange={handleConfigChange}
                rows={3}
                className="w-full bg-black border border-gray-800 rounded px-4 py-2 focus:border-royal-purple outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">테마 포인트 컬러</label>
              <input 
                name="primaryColor"
                type="color"
                value={localConfig.primaryColor}
                onChange={handleConfigChange}
                className="w-full h-10 bg-black border border-gray-800 rounded cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* Content Management */}
        <section className="bg-zinc-900 p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-newspaper text-royal-purple"></i> 콘텐츠 관리 (News)
          </h2>
          <div className="space-y-4 overflow-y-auto max-h-[400px]">
            {news.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-black p-4 rounded border border-gray-800">
                <div className="flex items-center gap-4">
                  <img src={item.image} className="w-12 h-12 rounded object-cover" />
                  <div>
                    <div className="text-sm font-bold">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.date}</div>
                  </div>
                </div>
                <button 
                  onClick={() => deleteNews(item.id)}
                  className="text-red-500 hover:text-red-400 p-2"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
            <button className="w-full border-2 border-dashed border-gray-800 text-gray-500 py-4 rounded hover:border-royal-purple hover:text-royal-purple transition-all">
              <i className="fas fa-plus mr-2"></i> 새로운 소식 추가
            </button>
          </div>
        </section>
      </div>

      <div className="mt-12 bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl">
        <p className="text-sm text-blue-200">
          <i className="fas fa-info-circle mr-2"></i> 
          이 대시보드에서는 실시간으로 사이트의 주요 텍스트와 레이아웃 구성을 제어할 수 있습니다. 
          변경 사항은 하이드레이션 즉시 프론트엔드에 반영됩니다.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
