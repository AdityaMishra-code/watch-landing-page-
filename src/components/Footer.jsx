import { Camera, MessageCircle, Share2, Video, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-gray pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-white tracking-widest font-semibold">
              A<span className="text-brand-gold">U</span>RA
            </h2>
            <p className="text-brand-lightGray/70 font-light leading-relaxed text-sm">
              Crafting legacies since 1924. Every Aura timepiece is a testament to uncompromising excellence and perpetual innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-lightGray/70 hover:text-brand-gold transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="text-brand-lightGray/70 hover:text-brand-gold transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-brand-lightGray/70 hover:text-brand-gold transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-brand-lightGray/70 hover:text-brand-gold transition-colors">
                <Video size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Collections</h4>
            <ul className="space-y-4">
              {['The Celestial', 'The Abyssal Diver', 'Chronograph Pro', 'Heritage Classic'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-brand-lightGray/70 hover:text-brand-gold transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">The Brand</h4>
            <ul className="space-y-4">
              {['Our History', 'Craftsmanship', 'Boutiques', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-brand-lightGray/70 hover:text-brand-gold transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3 text-brand-lightGray/70 text-sm font-light">
                <MapPin size={16} className="text-brand-gold" />
                <span>Rue du Rhône 12, 1204 Geneva</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-lightGray/70 text-sm font-light">
                <Phone size={16} className="text-brand-gold" />
                <span>+41 22 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-lightGray/70 text-sm font-light">
                <Mail size={16} className="text-brand-gold" />
                <span>concierge@aurawatches.com</span>
              </li>
            </ul>

            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Subscribe to newsletter" 
                className="w-full bg-transparent border-b border-brand-gray py-2 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-lightGray/40"
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-white/5 border border-brand-gray text-brand-lightGray text-sm font-semibold uppercase tracking-wider hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-gray flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-brand-lightGray/50 font-light">
          <p>&copy; {new Date().getFullYear()} Aura Watches. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
