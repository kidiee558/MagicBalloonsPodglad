import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Phone, Mail, Menu, X, Heart, Star, Camera, MessageCircle, Palette, Wand2, Quote, HelpCircle } from 'lucide-react';

const IMAGES = [
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(3).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(4).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(5).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(6).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(7).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(8).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(9).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(10).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(11).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(12).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(13).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(14).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(15).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(16).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(17).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(18).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(19).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(20).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(21).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(22).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(23).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(24).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(25).jpg",
  "https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/1%20(26).jpg",
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Okazje', href: '#okazje' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Opinie', href: '#opinie' },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-brand-cream">
      {/* Floating Pill Navigation */}
      <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-5xl">
        <div className={`transition-all duration-300 rounded-full px-6 py-3 flex justify-between items-center ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(244,114,182,0.15)] border border-pink-100' 
            : 'bg-white/50 backdrop-blur-sm border border-transparent'
        }`}>
          <a href="#" className="flex items-center">
            <img 
              src="https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/LOGO.png" 
              alt="MagicBalloons Logo" 
              className="h-10 md:h-12 object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-black hover:text-brand-pink-accent font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-brand-pink-accent text-white px-6 py-2.5 rounded-full font-bold hover:bg-pink-500 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Zamów Dekorację
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-black p-2 bg-white/50 rounded-full"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-3xl py-6 px-6 flex flex-col space-y-4 border border-pink-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-black hover:text-brand-pink-accent font-medium text-lg text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-pink-accent text-white px-6 py-3 rounded-full font-bold text-center mt-4"
            >
              Zamów Dekorację
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#fff0f5] to-brand-cream min-h-[85vh] md:min-h-screen flex items-center">
        {/* Decorative background blobs (Balloons) */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-pink-200 blob-shape opacity-60" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300 blob-shape opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-20 w-32 h-32 bg-brand-cream-light blob-shape opacity-60" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-blue blob-shape opacity-40" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-blue blob-shape opacity-30" style={{ animationDelay: '3s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/LOGO.png"
              alt="MagicBalloons Logo"
              className="w-28 md:w-48 mb-2 object-contain drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="font-script text-4xl md:text-6xl text-brand-pink-accent mb-4 -rotate-2 drop-shadow-sm">Magic Balloons</h2>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-6 leading-tight"
            >
              Niezapomniane <span className="text-brand-pink-accent italic">dekoracje</span> balonowe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-gray-700 mb-8"
            >
              Tworzymy magiczny klimat na Twoim przyjęciu! Ścianki fotograficzne, girlandy i kompozycje, które zachwycą każdego gościa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#kontakt"
                className="bg-brand-pink-accent text-white px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-pink-500 transition-all transform hover:scale-105 shadow-md w-full sm:w-auto"
              >
                Skontaktuj się z nami 💌
              </a>
              <a
                href="#galeria"
                className="bg-white text-brand-pink-accent border-2 border-brand-pink-accent px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-brand-pink transition-all w-full sm:w-auto"
              >
                Zobacz realizacje
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Polaroids */}
      <section id="o-nas" className="py-20 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Polaroids */}
            <div className="relative h-[400px] md:h-[450px] flex justify-center items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-10 left-4 md:left-10"
              >
                <div className="polaroid w-40 md:w-64">
                  <img src={IMAGES[0]} alt="Dekoracja 1" className="w-full h-40 md:h-64 object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute z-20 right-4 md:right-10 mt-24 md:mt-32"
              >
                <div className="polaroid w-40 md:w-64">
                  <img src={IMAGES[1]} alt="Dekoracja 2" className="w-full h-40 md:h-64 object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-2 md:-inset-4 bg-brand-blue opacity-30 rounded-[3rem] transform rotate-3"></div>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border-2 border-dashed border-pink-200 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-black">
                  Magia w każdym <span className="text-brand-pink-accent italic">detalu</span>
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  <span className="font-script text-3xl md:text-4xl text-brand-pink-accent mr-2">W MagicBalloons</span> 
                  wierzymy, że każda okazja zasługuje na wyjątkową oprawę. Nasze dekoracje balonowe to nie tylko zwykłe balony – to starannie zaprojektowane kompozycje, które nadają charakteru i tworzą niezapomniane tło dla Twoich wspomnień.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Działamy z dbałością o każdy, nawet najmniejszy detal. Niezależnie od tego, czy planujesz kameralne urodziny, huczne wesele, czy event firmowy – dopasujemy kolorystykę i styl do Twoich marzeń.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="oferta" className="py-20 bg-brand-cream-light relative bg-polka-dots">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-black">Nasza <span className="text-brand-pink-accent italic">Oferta</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tworzymy dekoracje, które wywołują uśmiech. Zobacz, co możemy dla Ciebie przygotować!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ścianki Fotograficzne',
                desc: 'Idealne tło do pamiątkowych zdjęć. Personalizowane napisy i bogate kompozycje balonowe.',
                icon: <Camera size={32} />,
                accent: 'text-brand-pink-accent',
                bg: 'bg-brand-pink'
              },
              {
                title: 'Girlandy Organiczne',
                desc: 'Nowoczesne, asymetryczne girlandy, które pięknie ozdobią wejście, stół słodki czy schody.',
                icon: <Star size={32} />,
                accent: 'text-blue-400',
                bg: 'bg-brand-blue/30'
              },
              {
                title: 'Dekoracje Okolicznościowe',
                desc: 'Urodziny, chrzciny, baby shower, wesela. Dopasowujemy motyw i kolory do Twojego przyjęcia.',
                icon: <Heart size={32} />,
                accent: 'text-brand-pink-accent',
                bg: 'bg-brand-pink'
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-[2rem] text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-pink-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 ${service.bg}`}></div>
                <div className={`inline-block p-4 ${service.bg} ${service.accent} rounded-full mb-6 shadow-sm`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-serif text-brand-black">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section (Okazje) */}
      <section id="okazje" className="py-24 bg-brand-pink relative overflow-hidden bg-stripes">
        {/* Wavy top divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] fill-brand-cream-light">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        
        <div className="text-center mb-16 relative z-10 mt-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-4">Balony na <span className="text-brand-pink-accent italic">każdą</span> okazję</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto px-4">Urodziny, wesela, chrzciny, eventy firmowe... Tworzymy dekoracje, które zapierają dech w piersiach!</p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="marquee-container">
            <div className="marquee-content">
              {IMAGES.slice(2, 10).map((src, i) => (
                <img key={i} src={src} alt="Dekoracja" className="w-64 h-80 object-cover rounded-[2rem] shadow-sm border-4 border-white" referrerPolicy="no-referrer" loading="lazy" />
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {IMAGES.slice(2, 10).map((src, i) => (
                <img key={`dup-${i}`} src={src} alt="Dekoracja" className="w-64 h-80 object-cover rounded-[2rem] shadow-sm border-4 border-white" referrerPolicy="no-referrer" loading="lazy" />
              ))}
            </div>
          </div>
          
          {/* Row 2 (Reverse) */}
          <div className="marquee-container">
            <div className="marquee-content reverse">
              {IMAGES.slice(10, 18).map((src, i) => (
                <img key={i} src={src} alt="Dekoracja" className="w-64 h-80 object-cover rounded-[2rem] shadow-sm border-4 border-white" referrerPolicy="no-referrer" loading="lazy" />
              ))}
            </div>
            <div className="marquee-content reverse" aria-hidden="true">
              {IMAGES.slice(10, 18).map((src, i) => (
                <img key={`dup-${i}`} src={src} alt="Dekoracja" className="w-64 h-80 object-cover rounded-[2rem] shadow-sm border-4 border-white" referrerPolicy="no-referrer" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-4">Jak <span className="text-brand-pink-accent italic">działamy?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trzy proste kroki do wymarzonej dekoracji na Twoje przyjęcie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 border-t-2 border-dashed border-pink-200 -translate-y-1/2 z-0"></div>
            
            {[
              {
                step: '01',
                title: 'Kontakt i pomysł',
                desc: 'Napisz do nas lub zadzwoń. Opowiedz o swojej wizji, motywie przewodnim i dacie wydarzenia.',
                icon: <MessageCircle size={32} />
              },
              {
                step: '02',
                title: 'Projekt i wycena',
                desc: 'Przygotujemy dla Ciebie spersonalizowaną propozycję dekoracji wraz z dokładną wyceną.',
                icon: <Palette size={32} />
              },
              {
                step: '03',
                title: 'Realizacja',
                desc: 'W dniu imprezy przyjeżdżamy na miejsce i tworzymy balonową magię, która zachwyci gości!',
                icon: <Wand2 size={32} />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-brand-cream p-8 rounded-[2rem] text-center relative z-10 border-2 border-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-brand-pink-accent text-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
                  {item.icon}
                </div>
                <div className="text-brand-pink-accent font-bold text-xl mb-2 font-script">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 font-serif text-brand-black">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Gallery Section */}
      <section id="galeria" className="py-20 bg-brand-cream relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue rounded-full opacity-20 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-4">Nasze <span className="text-brand-pink-accent italic">magiczne</span> realizacje</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Wybrane prace, z których jesteśmy najbardziej dumni.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {IMAGES.slice(18, 24).map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img 
                  src={src} 
                  alt={`Realizacja ${i}`} 
                  className="w-full h-48 md:h-80 object-cover rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-brand-cream" 
                  referrerPolicy="no-referrer" 
                  loading="lazy" 
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://www.instagram.com/magic.balloons1.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-pink-dark text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-pink-accent hover:text-white transition-all transform hover:scale-105 shadow-md"
            >
              <Instagram size={24} />
              Więcej na Instagramie
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="opinie" className="py-20 bg-brand-cream-light relative bg-polka-dots">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-4">Co mówią <span className="text-brand-pink-accent italic">klienci?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Największą nagrodą jest dla nas Wasz uśmiech i zadowolenie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Anna M.',
                text: 'Przepiękna ścianka na roczek córki! Goście byli zachwyceni, a zdjęcia wyszły magicznie. Bardzo polecam współpracę z dziewczynami.',
                event: 'Roczek'
              },
              {
                name: 'Karolina i Piotr',
                text: 'Pełen profesjonalizm i dbałość o detale. Balony trzymały się jeszcze długo po weselu! Komunikacja na najwyższym poziomie.',
                event: 'Wesele'
              },
              {
                name: 'Magdalena K.',
                text: 'Super kontakt i realizacja dokładnie taka, jak sobie wymarzyłam. Kolory idealnie dobrane do motywu imprezy. Polecam z całego serca!',
                event: 'Baby Shower'
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-pink-100 relative"
              >
                <Quote className="absolute top-6 right-6 text-pink-100" size={48} />
                <div className="flex items-center gap-1 mb-4 text-brand-pink-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10">"{review.text}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-brand-black">{review.name}</p>
                  <p className="text-sm text-brand-pink-accent">{review.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-4">Często zadawane <span className="text-brand-pink-accent italic">pytania</span></h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Z jakim wyprzedzeniem powinnam/powinienem zarezerwować termin?',
                a: 'Najlepiej skontaktować się z nami z 1-2 miesięcznym wyprzedzeniem. W sezonie letnim (wesela, komunie) terminy znikają bardzo szybko, dlatego warto napisać do nas jak najwcześniej!'
              },
              {
                q: 'Czy dojeżdżacie na miejsce imprezy?',
                a: 'Tak! Przyjeżdżamy na miejsce wydarzenia, montujemy całą dekorację, a po zakończeniu imprezy (lub następnego dnia) przyjeżdżamy ją zdemontować.'
              },
              {
                q: 'Jak długo wytrzymują dekoracje balonowe?',
                a: 'Używamy wyłącznie profesjonalnych balonów najwyższej jakości. W zamkniętych pomieszczeniach dekoracje mogą cieszyć oko nawet przez kilka tygodni! Na zewnątrz trwałość zależy od warunków atmosferycznych (słońce, wiatr).'
              },
              {
                q: 'Czy mogę zamówić dekorację w dowolnych kolorach?',
                a: 'Oczywiście! Posiadamy ogromną paletę barw i możemy stworzyć niestandardowe odcienie (tzw. double-stuffed balloons), aby idealnie wpasować się w motyw Twojego przyjęcia.'
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-brand-cream p-6 rounded-2xl border border-pink-100"
              >
                <h3 className="text-xl font-bold text-brand-black mb-2 flex items-start gap-3">
                  <HelpCircle className="text-brand-pink-accent shrink-0 mt-1" size={20} />
                  {faq.q}
                </h3>
                <p className="text-gray-700 pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-brand-cream relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgb(244,114,182,0.1)] text-center relative overflow-hidden border border-pink-50">
            {/* Corner decorations */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-blue rounded-full opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full opacity-50" />
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-black relative z-10">
              Stwórzmy razem <span className="text-brand-pink-accent italic">coś pięknego</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 relative z-10">
              Zadzwoń lub napisz do nas. Chętnie doradzimy i przygotujemy dla Ciebie indywidualną wycenę.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              <a 
                href="tel:+48601388648" 
                className="flex flex-col items-center p-8 bg-brand-pink rounded-[2rem] hover:bg-pink-100 transition-colors group"
              >
                <div className="bg-white p-4 rounded-full text-brand-pink-accent mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">Zadzwoń</h3>
                <p className="text-gray-700 text-lg">601 388 648</p>
              </a>
              <a 
                href="mailto:malwina27@poczta.fm" 
                className="flex flex-col items-center p-8 bg-brand-blue/20 rounded-[2rem] hover:bg-brand-blue/30 transition-colors group"
              >
                <div className="bg-white p-4 rounded-full text-blue-400 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">Napisz</h3>
                <p className="text-gray-700 text-lg">malwina27@poczta.fm</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-cream border-t-2 border-dashed border-pink-200 text-brand-black py-12 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-blue rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="https://github.com/kidiee558/MagicBalloonsPodglad/raw/main/LOGO.png" 
              alt="MagicBalloons Logo" 
              className="h-12 mb-2 object-contain bg-white/80 p-2 rounded-xl shadow-sm"
              referrerPolicy="no-referrer"
            />
            <h3 className="font-script text-2xl text-brand-pink-accent mb-1">Magic Balloons</h3>
            <p className="text-gray-500 text-sm">Niezapomniane dekoracje okolicznościowe.</p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/magic.balloons1.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-brand-pink-accent p-3 rounded-full hover:bg-brand-pink hover:scale-110 transition-all shadow-sm border border-pink-100"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100089185072374" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-400 p-3 rounded-full hover:bg-brand-blue/30 hover:scale-110 transition-all shadow-sm border border-blue-100"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-pink-100 text-center text-gray-400 text-sm relative z-10">
          &copy; {new Date().getFullYear()} MagicBalloons. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
