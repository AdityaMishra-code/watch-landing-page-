import { Shield, Droplet, Clock, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield size={32} className="text-brand-gold mb-6" />,
      title: "Unyielding Materials",
      description: "Forged from proprietary alloys that resist corrosion and maintain their luster over generations."
    },
    {
      icon: <Droplet size={32} className="text-brand-gold mb-6" />,
      title: "Abyssal Resistance",
      description: "Engineered with hermetic architecture for extreme depths, tested beyond limits."
    },
    {
      icon: <Clock size={32} className="text-brand-gold mb-6" />,
      title: "Perpetual Calibre",
      description: "A heart of precision, featuring our self-winding mechanical movement certified chronometer."
    },
    {
      icon: <Settings size={32} className="text-brand-gold mb-6" />,
      title: "Micro-mechanics",
      description: "Hundreds of hand-finished components working in perfect synchronization."
    }
  ];

  return (
    <section id="craftsmanship" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Mastery & Innovation
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            The Anatomy of Excellence
          </h2>
          <p className="text-brand-lightGray/70 max-w-2xl text-lg font-light leading-relaxed">
            Every Aura timepiece is a masterpiece of precision engineering, 
            blending traditional craftsmanship with cutting-edge materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-8 group hover:-translate-y-2 transition-transform duration-500 border border-brand-gray/30 hover:border-brand-gold/30 rounded-sm bg-brand-black/50"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-brand-lightGray/70 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Features;
