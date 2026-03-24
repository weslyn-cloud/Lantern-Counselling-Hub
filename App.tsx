import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-sans selection:bg-lantern-amber selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="https://assets.cdn.filesafe.space/AznyZ901C1eWpNIsXx1D/media/68147f4788cf5c1dfdf2cf34.png" 
              alt="Lantern Counselling Hub Logo" 
              className="h-12 w-auto object-contain" 
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-500">
            <a href="#services" className="hover:text-lantern-dark transition-colors">SERVICES</a>
            <a href="#about" className="hover:text-lantern-dark transition-colors">ABOUT</a>
            <a href="#approach" className="hover:text-lantern-dark transition-colors">APPROACH</a>
            <a href="mailto:office@lanterncounselling.com.au" className="hover:text-lantern-dark transition-colors">CONTACT</a>
          </div>
          <a 
            href="https://lanterncounselling.com.au/booking-couple" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex bg-lantern-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-lantern-dark/90 transition-all"
          >
            Book a Session
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516589174184-c685266d430c?auto=format&fit=crop&q=80&w=2000" 
            alt="Warm living space" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-lantern-cream via-transparent to-lantern-cream"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 bg-lantern-sage/10 text-lantern-sage text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-lantern-sage/20">
                Couples & Individual Therapy in Springwood, QLD
              </span>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-lantern-dark leading-[0.9] mb-8">
                Lighting the path to <span className="font-serif-italic text-lantern-amber">deeper connection.</span>
              </h1>
              <p className="text-xl text-stone-600 mb-12 max-w-2xl leading-relaxed">
                Compassionate, evidence-based therapy helping couples and individuals navigate challenges and rediscover harmony.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://lanterncounselling.com.au/booking-couple" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-lantern-dark text-white px-8 py-4 rounded-full text-center hover:bg-stone-800 transition-all"
                >
                  Schedule your consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://assets.cdn.filesafe.space/AznyZ901C1eWpNIsXx1D/media/69968e56adc9e9bd1625bce5.png" 
                  alt="Weslyn - Lead Counsellor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <p className="font-serif text-xl text-lantern-dark font-bold mb-2">Weslyn</p>
                <p className="text-stone-500 text-sm">Lead Counsellor & Founder</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-5xl text-lantern-dark mb-8">Meet <span className="text-lantern-amber italic">Weslyn</span></h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                As a dedicated counsellor with a Master of Counselling from Christian Heritage College (CHC), I founded Lantern Counselling Hub to bridge the gap between clinical excellence and human warmth.
              </p>
              <p className="text-stone-600 leading-relaxed mb-10">
                "I believe that every person and couple has the capacity for deep connection and growth, even when it feels like the light has gone out. My job is to hold the lantern while we find the way back together."
              </p>
              <a href="#approach" className="inline-flex items-center gap-2 text-lantern-dark font-bold hover:text-lantern-amber transition-colors border-b border-lantern-dark pb-1">
                Read Weslyn's Full Story <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <img 
                  src="https://assets.cdn.filesafe.space/AznyZ901C1eWpNIsXx1D/media/68147f4788cf5c1dfdf2cf34.png" 
                  alt="Lantern Counselling Hub Logo" 
                  className="h-10 w-auto object-contain" 
                />
              </div>
              <p className="text-stone-500 leading-relaxed mb-8">
                Compassionate, evidence-based therapy for modern couples and individuals. Lighting the way to deeper connection and inner peace.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lantern-dark mb-8 uppercase tracking-widest text-sm">Contact</h4>
              <ul className="space-y-4 text-stone-500">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-lantern-amber" /> 
                  <a href="mailto:office@lanterncounselling.com.au" className="hover:text-lantern-dark">office@lanterncounselling.com.au</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-lantern-amber mt-1 flex-shrink-0" /> 
                  <span>14/3460 Pacific Highway,<br/>Springwood, QLD 4127</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-400">
            <p>© 2026 Lantern Counselling Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
