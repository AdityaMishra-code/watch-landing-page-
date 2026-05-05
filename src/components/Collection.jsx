import { ArrowRight } from 'lucide-react';

const Collection = () => {
  const models = [
    {
      id: 1,
      name: "The Celestial",
      material: "Platinum & 18 ct Gold",
      image: "/images/collection_watch_1.png",
      description: "Our crowning achievement in precision and aesthetic refinement.",
      price: "Enquire"
    },
    {
      id: 2,
      name: "The Abyssal Diver",
      material: "Oystersteel & Ceramic",
      image: "/images/collection_watch_2.png",
      description: "Conquer the deep with unmatched legibility and robust architecture.",
      price: "Enquire"
    }
  ];

  return (
    <section id="collections" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Iconic Timepieces
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              The Collection
            </h2>
          </div>
          <button className="text-brand-lightGray hover:text-brand-gold flex items-center space-x-2 transition-colors uppercase tracking-widest text-sm font-semibold group">
            <span>View All Models</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {models.map((model) => (
            <div key={model.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] bg-brand-dark rounded-sm mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out opacity-90 group-hover:opacity-100"
                />
                
                {/* Hover overlay content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-brand-lightGray/90 font-light mb-4">
                    {model.description}
                  </p>
                  <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-brand-black transition-colors duration-300">
                    Discover More
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-brand-lightGray/60 font-light text-sm uppercase tracking-wide">
                    {model.material}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-brand-gold font-semibold uppercase tracking-wider text-sm">
                    {model.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
