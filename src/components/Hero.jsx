import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-dark/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
        <img 
          src="/images/hero_watch.png" 
          alt="Luxury Watch Macro" 
          className="w-full h-full object-cover object-right opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center animate-fade-in">
        <div className="max-w-2xl">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            The Art of Precision
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            Timekeeping <br /> 
            <span className="text-brand-lightGray">Elevated.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-lightGray/80 max-w-lg mb-10 font-light leading-relaxed animate-slide-up" style={{animationDelay: '0.6s'}}>
            Experience the pinnacle of horological engineering. Handcrafted for those who define their own legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <button className="px-8 py-4 bg-brand-gold text-brand-black font-semibold uppercase tracking-wider hover:bg-brand-goldLight transition-all duration-300 flex items-center justify-center space-x-2 group">
              <span>Discover Collection</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-brand-lightGray/30 text-brand-lightGray hover:bg-white hover:text-brand-black font-semibold uppercase tracking-wider transition-all duration-300">
              Find a Boutique
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
