import svgPaths from "../imports/svg-xoa3aa5535";

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[129.219px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.219 32">
        <g id="logo">
          <path d={svgPaths.p18e45e80} fill="var(--fill-0, #0E7575)" id="Vector" />
          <path d={svgPaths.p1912700} fill="var(--fill-0, #95CB25)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-1">
            <button onClick={() => scrollToSection('home')} className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">Home</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">About Us</span>
            </button>
            <button onClick={() => scrollToSection('features')} className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">Features</span>
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-900">How it works</span>
            </button>
          </nav>

          <button 
            onClick={() => scrollToSection('footer')}
            className="bg-[#0e7575] hover:bg-[#0d6868] transition-colors text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
}