
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '홈', id: 'home' },
    { label: '객실 안내', id: 'rooms' },
    { label: '부대 시설', id: 'amenities' },
    { label: '커뮤니티', id: 'community' },
    { label: '예약 문의', id: 'booking' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-bold tracking-widest serif text-white hover:text-royal-purple transition-colors"
        >
          우산정사
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm tracking-widest transition-all hover:text-royal-purple ${currentPage === item.id ? 'text-royal-purple font-bold' : 'text-gray-300'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('admin')}
            className="text-xs text-gray-500 hover:text-white transition-colors border border-gray-800 px-2 py-1 rounded"
          >
            ADMIN
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMenuOpen(false);
              }}
              className="text-2xl serif text-white hover:text-royal-purple"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
                onNavigate('admin');
                setIsMenuOpen(false);
            }}
            className="text-sm text-gray-500"
          >
            ADMIN PANEL
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
