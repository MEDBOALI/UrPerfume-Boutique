// FORCED PRELOADER REMOVAL (Safety)
const forceHide = () => {
        const pre = document.getElementById('preloader');
        if (pre) {
                    pre.style.opacity = '0';
                    setTimeout(() => pre.style.display = 'none', 500);
        }
};
setTimeout(forceHide, 2000);
window.addEventListener('load', forceHide);

/* 
    UrPerfume - Logic & Animations
*/

document.addEventListener('DOMContentLoaded', () => {
      initPreloader();
      initCustomCursor();
      initHeroAnimations();
      initMarquee();
      initScrollAnimations();
      updateLanguageUI();
      initAdminAccess(); // Initialize hidden door

                              // Safety timeout to hide preloader no matter what (e.g. if images fail)
                              setTimeout(() => {
                                        const preloader = document.getElementById('preloader');
                                        if (preloader && preloader.style.transform !== 'translateY(-100%)') {
                                                      if (typeof gsap !== 'undefined') {
                                                                        gsap.to('#preloader', {
                                                                                              y: '-100%',
                                                                                              duration: 1,
                                                                                              ease: 'expo.inOut'
                                                                        });
                                                      } else {
                                                                        preloader.style.display = 'none';
                                                      }
                                        }
                              }, 4000);

                              // Navigation Scroll Effect
                              window.addEventListener('scroll', () => {
                                        const nav = document.querySelector('nav');
                                        if (window.scrollY > 50) {
                                                      nav.classList.add('scrolled');
                                        } else {
                                                      nav.classList.remove('scrolled');
                                        }
                              });
});

// 1. Preloader
function initPreloader() {
      const tl = gsap.timeline();

    tl.to('.progress-inner', {
              width: '100%',
              duration: 2,
              ease: 'power2.inOut'
    })
      .to('#preloader', {
                y: '-100%',
                duration: 1,
                ease: 'expo.inOut'
      })
      .from('.nav-container', {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: 'expo.out'
      }, '-=0.5')
      .from('.hero-content > *', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'expo.out'
      }, '-=0.8')
      .from('.hero-visual .floating-pack', {
                scale: 0.8,
                opacity: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: 'expo.out'
      }, '-=1');
}

// 2. Custom Cursor with LERP (Smooth Follow)
function initCustomCursor() {
      const cursor = document.getElementById('cursor');
      const follower = document.getElementById('cursor-follower');

    let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;
      let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
              mouseX = e.clientX;
              mouseY = e.clientY;
    });

    function animate() {
              // LERP for smooth movement (Increased factors for "Fast & Smooth")
          cursorX += (mouseX - cursorX) * 0.25;
              cursorY += (mouseY - cursorY) * 0.25;
              followerX += (mouseX - followerX) * 0.15;
              followerY += (mouseY - followerY) * 0.15;

          // Centering offsets (4px for cursor, 20px for follower)
          cursor.style.transform = `translate3d(${cursorX - 4}px, ${cursorY - 4}px, 0)`;
              follower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0)`;

          requestAnimationFrame(animate);
    }
      animate();

    // Hover effect for interactive elements
    const updateHoverListeners = () => {
              const links = document.querySelectorAll('a, button, .product-card, .collection-card, .search-btn, .marquee-item, .lang-switcher span, .qty-btn, .remove-item, .floating-wa');
              links.forEach(link => {
                            link.addEventListener('mouseenter', () => {
                                              cursor.classList.add('active');
                                              follower.classList.add('active');
                            });
                            link.addEventListener('mouseleave', () => {
                                              cursor.classList.remove('active');
                                              follower.classList.remove('active');
                            });
              });
    };
      updateHoverListeners();

    // Re-bind when grid/cart changes
    const observer = new MutationObserver(updateHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });
}

// 3. Hero Animations (Floating movement)
function initHeroAnimations() {
      gsap.to('#pack-1', {
                y: 20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
      });
      gsap.to('#pack-2', {
                y: -30,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
      });
      gsap.to('#pack-3', {
                y: 15,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
      });

    // Parallax effect on mouse move
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
              const { clientX, clientY } = e;
              const xPos = (clientX / window.innerWidth - 0.5) * 50;
              const yPos = (clientY / window.innerHeight - 0.5) * 50;

                                                             gsap.to('.hero-visual', {
                                                                           x: xPos,
                                                                           y: yPos,
                                                                           duration: 1,
                                                                           ease: 'power2.out'
                                                             });
    });
}

// 0. Language & Translation System
let currentLang = localStorage.getItem('urperfume-lang') || 'en';
const translations = {
      en: {
                'nav.home': 'Home',
                'nav.collections': 'Collections',
                'nav.about': 'Our Story',
                'hero.subtitle': 'Premium Decant Collection',
                'hero.title': 'Experience Luxury One Drop at a Time',
                'hero.desc': 'Original fragrances decanted into premium 10ml travel packs. Authenticity guaranteed, starting from 100 DH.',
                'hero.shop': 'Shop Collections',
                'hero.packs': 'Exclusive Packs',
                'hero.scroll': 'Scroll to explore',
                'marquee.title': 'Trending Now',
                'coll.niche.title': 'Exclusive Niche',
                'coll.niche.desc': 'Luxury masterpieces from Xerjoff, Creed, LV, and more.',
                'coll.niche.btn': 'Explore Niche',
                'coll.designer.title': 'Designer Collection',
                'coll.designer.desc': 'Popular classics and modern favorites.',
                'coll.designer.btn': 'Explore Designer',
                'coll.pack.title': 'Luxury Sets',
                'coll.pack.desc': 'Complete fragrance rituals and gift sets.',
                'coll.pack.btn': 'Explore Packs',
                'coll.all.title': 'Full Collection',
                'coll.all.desc': 'Browse our entire catalog of 60+ premium scents.',
                'coll.all.btn': 'See All',
                'about.title': 'Our Story',
                'about.story': 'UrPerfume was founded with a single mission: to make the         'about.story': 'UrPerfume was founded with a single mission: to make the world\'s most luxurious scents accessible to everyone. We offer professional decants - precision-poured samples that allow you to experience luxury without the full-bottle price tag.',
          'about.originality': 'Every drop we provide is 100% original, decanted directly from the authentic brand bottles. No compromises, no imitations.',
          'about.contact': 'Need more information? We\'re here to help.',
          'about.wa': 'Message us on WhatsApp',
          'products.back': 'Back to Collections',
          'cart.title': 'Your Collection',
          'cart.apply': 'Apply',
          'cart.total': 'Total:',
          'cart.checkout': 'Checkout',
          'cart.confirm': 'Confirm Order (WhatsApp)',
          'cart.continue': 'Continue Shopping'
},
    fr: {
              'nav.home': 'Accueil',
                        'nav.collections': 'Collections',
                        'nav.about': 'Notre Histoire',
                        'hero.subtitle': 'Collection Premium de Decants',
                        'hero.title': 'Decouvrez le Luxe Goutte par Goutte',
                        'hero.desc': 'Parfums originaux decantes dans des flacons premium de 10ml. Authenticite garantie, a partir de 100 DH.',
                        'hero.shop': 'Voir les Collections',
                        'hero.packs': 'Packs Exclusifs',
                        'hero.scroll': 'Defiler pour explorer',
                        'marquee.title': 'Tendances du Moment',
                        'coll.niche.title': 'Niche Exclusive',
                        'coll.niche.desc': 'Chefs-d\'oeuvre de Xerjoff, Creed, LV et plus.',
                        'coll.niche.btn': 'Explorer Niche',
                        'coll.designer.title': 'Collection Designer',
                        'coll.designer.desc': 'Classiques populaires et favoris modernes.',
                        'coll.designer.btn': 'Explorer Designer',
                        'coll.pack.title': 'Coffrets de Luxe',
                        'coll.pack.desc': 'Rituels complets et coffrets cadeaux.',
                        'coll.pack.btn': 'Explorer Packs',
                        'coll.all.title': 'Collection Complete',
                        'coll.all.desc': 'Parcourez notre catalogue de plus de 60 parfums.',
                        'coll.all.btn': 'Voir Tout',
                        'about.title': 'Notre Histoire',
                        'about.story': 'UrPerfume a ete fonde avec une mission simple : rendre les parfums les plus luxueux accessibles a tous. Nous proposons des decants professionnels qui vous permettent de vivre le luxe sans payer le prix fort d\'un flacon complet.',
                        'about.originality': 'Chaque goutte est 100% originale, decantee directement des flacons authentiques. Aucun compromis, aucune imitation.',
                        'about.contact': 'Besoin de plus d\'informations ? Nous sommes la.',
                        'about.wa': 'Contactez-nous sur WhatsApp',
                        'products.back': 'Retour aux Collections',
                        'cart.title': 'Votre Panier',
                        'cart.apply': 'Appliquer',
                        'cart.total': 'Total:',
                        'cart.checkout': 'Commander',
                        'cart.confirm': 'Confirmer (WhatsApp)',
                        'cart.continue': 'Continuer mes achats'
    },
    ar: {
        'nav.home':         'nav.home': 'Home',
                  'nav.collections': 'Collections',
                  'nav.about': 'Our Story',
                  'hero.subtitle': 'Premium Decants Collection',
                  'hero.title': 'Experience Luxury Drop by Drop',
                  'hero.desc': 'Original perfumes decanted into 10ml premium bottles. Guaranteed authenticity, starting from 100 DH.',
                  'hero.shop': 'Shop Collections',
                  'hero.packs': 'Exclusive Packs',
                  'hero.scroll': 'Scroll to explore',
                  'marquee.title': 'Trending Now',
                  'coll.niche.title': 'Exclusive Niche',
                  'coll.niche.desc': 'Masterpieces from Xerjoff, Creed, LV and more.',
                  'coll.niche.btn': 'Explore Niche',
                  'coll.designer.title': 'Designer Collection',
                  'coll.designer.desc': 'Popular classics and modern favorites.',
                  'coll.designer.btn': 'Explore Designer',
                  'coll.pack.title': 'Luxury Sets',
                  'coll.pack.desc': 'Complete scent rituals and gift sets.',
                  'coll.pack.btn': 'Explore Packs',
                  'coll.all.title': 'Complete Collection',
                  'coll.all.desc': 'Browse our entire catalog of 60+ fragrances.',
                  'coll.all.btn': 'See All',
                  'about.title': 'Our Story',
                  'about.story': 'UrPerfume was founded with a single mission: to make the world\'s most luxurious scents accessible to everyone.',
                  'about.originality': 'Every drop we provide is 100% original.',
                  'about.contact': 'Need more information?',
                  'about.wa': 'Message us on WhatsApp',
                  'products.back': 'Back to Collections',
                  'cart.title': 'Your Collection',
                  'cart.apply': 'Apply',
                  'cart.total': 'Total:',
                  'cart.checkout': 'Checkout',
                  'cart.confirm': 'Confirm Order (WhatsApp)',
                  'cart.continue': 'Continue Shopping'
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
      currentLanguage = lang;
      localStorage.setItem('language', lang);

    document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
              const key = el.getAttribute('data-i18n');
              if (translations[lang][key]) {
                            if (el.tagName === 'INPUT' && el.type === 'button') {
                                              el.value = translations[lang][key];
                            } else if (el.placeholder) {
                                              el.placeholder = translations[lang][key];
                            } else {
                                              el.textContent = translations[lang][key];
                            }
              }
    });

    // Update active state in language switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
              btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
    });
}
// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
      setLanguage(currentLanguage);
});

// Products Data
const products = [
  {
            id: 1,
            name: "Xerjoff - Erba Pura",
            brand: "Xerjoff",
            category: "niche",
            price: 250,
            image: "assets/erba-pura.jpg",
            description: "A delicious and modern blend of Mediterranean citrus and sweet fruits.",
            notes: "Orange, Lemon, Bergamot, Mediterranean Fruits, White Musk, Amber, Vanilla",
            stock: true
  },
  {
            id: 2,
            name: "Xerjoff - Naxos",
            brand: "Xerjoff",
            category: "niche",
            price: 250,
            image: "assets/naxos.jpg",
            description: "A celebration of Sicily, deep and sensual with honey, tobacco and vanilla.",
            notes: "Lavender, Bergamot, Lemon, Honey, Cinnamon, Cashmeran, Jasmine, Tobacco, Vanilla, Tonka Bean",
            stock: true
  },
  {
            id: 3,
            name: "Xerjoff - Alexandria II",
            brand: "Xerjoff",
            category: "niche",
            price: 450,
            image: "assets/alexandria-ii.jpg",
            description: "A majestic and complex oud fragrance with lavender and rose.",
            notes: "Lavender, Palisander Rosewood, Cinnamon, Apple, Lily-of-the-Valley, Rose, Cedar, Sandalwood, Musk, Amber, Oud",
            stock: true
  },
  {
            id: 4,
            name: "Creed - Aventus",
            brand: "Creed",
            category: "niche",
            price: 280,
            image: "assets/aventus.jpg",
            description: "The ultimate masculine scent, fruity and woody with pineapple and birch.",
            notes: "Pineapple, Bergamot, Black Currant, Apple, Birch, Patchouli, Moroccan Jasmine, Musk, Oak Moss, Ambergris, Vanilla",
            stock: true
  },
  {
            id: 5,
            name: "Louis Vuitton - Imagination",
            brand: "Louis Vuitton",
            category: "niche",
            price: 280,
            image: "assets/imagination.jpg",
            description: "An exceptional citrus fragrance with black tea and ginger.",
            notes: "Citron, Calabrian Bergamot, Sicilian Orange, Nigerian Ginger, Ceylon Cinnamon, Neroli, Chinese Black Tea, Ambroxan, Guaiac Wood, Olibanum",
            stock: true
  },
  {
            id: 6,
            name: "Louis Vuitton - Ombre Nomade",
            brand: "Louis Vuitton",
            category: "niche",
            price: 320,
            image: "assets/ombre-nomade.jpg",
            description: "A dark and powerful oud fragrance with incense and raspberry.",
            notes: "Oud Wood, Benzoin Tears, Incense, Raspberry",
            stock: true
  },
  {
            id: 7,
            name: "Parfums de Marly - Layton",
            brand: "Parfums de Marly",
            category: "niche",
            price: 250,
            image: "assets/layton.jpg",
            description: "A seductive oriental floral with apple, lavender and vanilla.",
            notes: "Apple, Lavender, Bergamot, Mandarin Orange, Geranium, Violet, Jasmine, Vanilla, Cardamom, Sandalwood, Pepper, Guaiac Wood, Patchouli",
            stock: true
  },
  {
            id: 8,
            name: "Parfums de Marly - Haltane",
            brand: "Parfums de Marly",
            category: "niche",
            price: 250,
            image: "assets/haltane.jpg",
            description: "A contrast between tradition and innovation with oud and praline.",
            notes: "Clary Sage, Lavender, Bergamot, Praline, Saffron, Agarwood (Oud), Cedar",
            stock: true
  },
  {
            id: 9,
            name: "Initio - Side Effect",
            brand: "Initio",
            category: "niche",
            price: 280,
            image: "assets/side-effect.jpg",
            description: "A bold and intoxicating blend of tobacco, vanilla and rum.",
            notes: "Tobacco, Vanilla, Rum, Cinnamon",
            stock: true
  },
  {
            id: 10,
            name: "Initio - Oud for Greatness",
            brand: "Initio",
            category: "niche",
            price: 350,
            image: "assets/oud-for-greatness.jpg",
            description: "A mystical and enchanting oud with saffron and nutmeg.",
            notes: "Saffron, Nutmeg, Lavender, Agarwood (Oud), Patchouli, Musk",
            stock: true
  },
  {
            id: 11,
            name: "Amouage - Reflection Man",
            brand: "Amouage",
            category: "niche",
            price: 250,
            image: "assets/reflection-man.jpg",
            description: "A clean and sophisticated floral woody fragrance.",
            notes: "Rosemary, Pimento, May Rose, Orris Root, Jasmine, Neroli, Sandalwood, Patchouli, Vetiver, Cedar",
            stock: true
  },
  {
            id: 12,
            name: "Amouage - Interlude Man",
            brand: "Amouage",
            category: "niche",
            price: 250,
            image: "assets/interlude-man.jpg",
            description: "The 'Blue Beast' - a powerful incense and amber masterpiece.",
            notes: "Oregano, Pepper, Bergamot, Incense, Amber, Labdanum, Opoponax, Leather, Oud, Patchouli, Sandalwood",
            stock: true
  },
  {
            id: 13,
            name: "Maison Francis Kurkdjian - Baccarat Rouge 540",
            brand: "MFK",
            category: "niche",
            price: 320,
            image: "assets/br540.jpg",
            description: "A unique and airy amber floral scent, sweet and sophisticated.",
            notes: "Saffron, Jasmine, Amberwood, Ambergris, Fir Resin, Cedar",
            stock: true
  },
  {
            id: 14,
            name: "Maison Francis Kurkdjian - Gentle Fluidity Gold",
            brand: "MFK",
            category: "niche",
            price: 280,
            image: "assets/gentle-fluidity-gold.jpg",
            description: "A beautiful and comforting vanilla-centric fragrance.",
            notes: "Juniper Berries, Nutmeg, Coriander, Musk, Amber, Vanilla, Woody Notes",
            stock: true
  },
  {
            id: 15,
            name: "Byredo - Bal d'Afrique",
            brand: "Byredo",
            category: "niche",
            price: 220,
            image: "assets/bal-dafrique.jpg",
            description: "A vibrant and joyful blend of citrus and African marigold.",
            notes: "Amalfi Lemon, Tagetes, Black Currant, Bergamot, African Orange Flower, Violet, Cyclamen, Jasmine, Vetiver, Musk, Amber, Virginia Cedar",
            stock: true
  },
  {
            id: 16,
            name: "Byredo - Gypsy Water",
            brand: "Byredo",
            category: "niche",
            price: 220,
            image: "assets/gypsy-water.jpg",
            description: "A nomadic scent, woody and aromatic with juniper and lemon.",
            notes: "Juniper, Lemon, Bergamot, Pepper, Pine Needles, Orris, Incense, Vanilla, Sandalwood, Amber",
            stock: true
  },
  {
            id: 17,
            name: "Kilian - Angel's Share",
            brand: "Kilian",
            category: "niche",
            price: 280,
            image: "assets/angels-share.jpg",
            description: "A warm and boozy fragrance reminiscent of cognac and oak.",
            notes: "Cognac, Cinnamon, Tonka Bean, Oak, Praline, Vanilla, Sandalwood",
            stock: true
  },
  {
            id: 18,
            name: "Kilian - Black Phantom",
            brand: "Kilian",
            category: "niche",
            price: 280,
            image: "assets/black-phantom.jpg",
            description: "A dark and mysterious gourmand with coffee and rum.",
            notes: "Rum, Sugar Cane, Dark Chocolate, Coffee, Caramel, Almond, Heliotrope, Sandalwood",
            stock: true
  },
  {
            id: 19,
            name: "Dior - Sauvage Elixir",
            brand: "Dior",
            category: "designer",
            price: 250,
            image: "assets/sauvage-elixir.jpg",
            description: "An extraordinary concentration, spicy and woody.",
            notes: "Cinnamon, Nutmeg, Cardamom, Grapefruit, Lavender, Licorice, Sandalwood, Amber, Patchouli, Haitian Vetiver",
            stock: true
  },
  {
            id: 20,
            name: "Dior - Tobacolor",
            brand: "Dior",
            category: "niche",
            price: 280,
            image: "assets/tobacolor.jpg",
            description: "A powerful tobacco fragrance with honey and plum.",
            notes: "Tobacco, Honey, Smoke, Plum, Peach, Amber, Oriental Notes",
            stock: true
  },
  {
            id: 21,
            name: "Chanel - Bleu de Chanel Parfum",
            brand: "Chanel",
            category: "designer",
            price: 180,
            image: "assets/bleu-de-chanel.jpg",
            description: "A timeless and elegant woody aromatic fragrance.",
            notes: "Lemon Zest, Bergamot, Mint, Artemisia, Lavender, Pineapple, Geranium, Green Notes, Sandalwood, Cedar, Amberwood, Iso E Super, Tonka Bean",
            stock: true
  },
  {
            id: 22,
            name: "Chanel - Coromandel",
            brand: "Chanel",
            category: "niche",
            price: 280,
            image: "assets/coromandel.jpg",
            description: "A rich and exotic oriental fragrance with patchouli and benzoin.",
            notes: "Bitter Orange, Neroli, Citruses, Patchouli, Orris Root, Rose, Jasmine, White Chocolate, Benzoin, Amber, Frankincense, Vanilla, Musk, Woods",
            stock: true
  },
  {
            id: 23,
            name: "Tom Ford - Tobacco Vanille",
            brand: "Tom Ford",
            category: "niche",
            price: 280,
            image: "assets/tobacco-vanille.jpg",
            description: "An opulent and warm fragrance with tobacco leaf and vanilla.",
            notes: "Tobacco Leaf, Spicy Notes, Vanilla, Cacao, Tonka Bean, Tobacco Blossom, Dried Fruits, Woody Notes",
            stock: true
  },
  {
            id: 24,
            name: "Tom Ford - Lost Cherry",
            brand: "Tom Ford",
            category: "niche",
            price: 320,
            image: "assets/lost-cherry.jpg",
            description: "A luscious and full-bodied fragrance with black cherry and almond.",
            notes: "Sour Cherry, Bitter Almond, Liquor, Plum, Turkish Rose, Jasmine Sambac, Tonka Bean, Vanilla, Peru Balsam, Benzoin, Cinnamon, Sandalwood, Cedar, Cloves, Vetiver, Patchouli",
            stock: true
  },
  {
            id: 25,
            name: "Tom Ford - Ombre Leather",
            brand: "Tom Ford",
            category: "designer",
            price: 180,
            image: "assets/ombre-leather.jpg",
            description: "A vast and untethered leather fragrance with jasmine and patchouli.",
            notes: "Cardamom, Jasmine Sambac, Leather, Patchouli, Amber, Moss",
            stock: true
  },
  {
            id: 26,
            name: "Jean Paul Gaultier - Le Male Elixir",
            brand: "Jean Paul Gaultier",
            category: "designer",
            price: 180,
            image: "assets/le-male-elixir.jpg",
            description: "A burning and seductive fragrance with lavender and tonka bean.",
            notes: "Lavender, Mint, Vanilla, Benzoin, Honey, Tonka Bean, Tobacco",
            stock: true
  },
  {
            id: 27,
            name: "YSL - Myslf",
            brand: "YSL",
            category: "designer",
            price: 180,
            image: "assets/myslf.jpg",
            description: "A modern and expressive floral woody fragrance.",
            notes: "Calabrian Bergamot, Bergamot, Tunisian Orange Blossom, Ambrofix, Patchouli",
            stock: true
  },
  {
            id: 28,
            name: "YSL - Tuxedo",
            brand: "YSL",
            category: "niche",
            price: 280,
            image: "assets/tuxedo.jpg",
            description: "An elegant and sophisticated patchouli and black pepper blend.",
            notes: "Violet Leaf, Bergamot, Coriander, Rose, Black Pepper, Lily-of-the-Valley, Ambergris, Patchouli, Bourbon Vanilla",
            stock: true
  },
  {
            id: 29,
            name: "Giorgio Armani - Stronger With You Intensely",
            brand: "Armani",
            category: "designer",
            price: 150,
            image: "assets/stronger-with-you-intensely.jpg",
            description: "A warm and spicy oriental woody fragrance.",
            notes: "Pink Pepper, Juniper, Violet, Toffee, Cinnamon, Lavender, Sage, Vanilla, Tonka Bean, Amber, Suede",
            stock: true
  },
  {
            id: 30,
            name: "Giorgio Armani - Acqua di Gio Profondo",
            brand: "Armani",
            category: "designer",
            price: 150,
            image: "assets/acqua-di-gio-profondo.jpg",
            description: "A deep and aquatic fragrance with sea notes and minerals.",
            notes: "Sea Notes, Aquozone, Bergamot, Green Mandarin, Rosemary, Lavender, Cypress, Mastic or Lentisque, Mineral Notes, Musk, Patchouli, Amber",
            stock: true
  },
  {
            id: 31,
            name: "Prada - Luna Rossa Ocean",
            brand: "Prada",
            category: "designer",
            price: 150,
            image: "assets/luna-rossa-ocean.jpg",
            description: "A modern and sophisticated fougere fragrance with iris.",
            notes: "Bergamot, Pink Pepper, Artemisia, Lavender, Iris, Sage, Suede, Saffron, Musk, Haitian Vetiver, Patchouli, Caramel",
            stock: true
  },
  {
            id: 32,
            name: "Valentino - Uomo Born In Roma",
            brand: "Valentino",
            category: "designer",
            price: 150,
            image: "assets/born-in-roma.jpg",
            description: "A modern aromatic woody fragrance with a cool edge.",
            notes: "Mineral Notes, Salt, Violet Leaf, Sage, Ginger, Vetiver, Woody Notes",
            stock: true
  },
  {
            id: 33,
            name: "Viktor&Rolf - Spicebomb Extreme",
            brand: "Viktor&Rolf",
            category: "designer",
            price: 180,
            image: "assets/spicebomb-extreme.jpg",
            description: "An explosive and intense spicy fragrance with tobacco and vanilla.",
            notes: "Black Pepper, Cumin, Tobacco, Vanilla, Lavender",
            stock: true
  },
  {
            id: 34,
            name: "Azzaro - The Most Wanted Parfum",
            brand: "Azzaro",
            category: "designer",
            price: 150,
            image: "assets/the-most-wanted.jpg",
            description: "A powerful and charismatic fragrance with ginger and vanilla.",
            notes: "Ginger, Woodsy Notes, Bourbon Vanilla",
            stock: true
  },
  {
            id: 35,
            name: "Carolina Herrera - Bad Boy Cobalt",
            brand: "Carolina Herrera",
            category: "designer",
            price: 150,
            image: "assets/bad-boy-cobalt.jpg",
            description: "A bold and energizing fragrance with pink pepper and lavender.",
            notes: "Pink Pepper, Lavender, Plum, Geranium, Truffle, Vetiver, Cedar, Oak",
            stock: true
  },
  {
            id: 36,
            name: "Dolce & Gabbana - The One Luminous Night",
            brand: "D&G",
            category: "niche",
            price: 250,
            image: "assets/the-one-luminous-night.jpg",
            description: "A mysterious and enchanting fragrance with dates and incense.",
            notes: "Black Pepper, Bergamot, Basil, Dates, Geranium, Sage, Amber, Incense, Sandalwood",
            stock: true
  },
  {
            id: 37,
            name: "Xerjoff - Casamorati Mefisto",
            brand: "Xerjoff",
            category: "niche",
            price: 250,
            image: "assets/mefisto.jpg",
            description: "A fresh and classic Italian citrus fragrance.",
            notes: "Grapefruit, Bergamot, Amalfi Lemon, Lavender, Iris, Rose, Musk, Sandalwood, Virginia Cedar, Amber",
            stock: true
  },
  {
            id: 38,
            name: "Xerjoff - Casamorati Lira",
            brand: "Xerjoff",
            category: "niche",
            price: 250,
            image: "assets/lira.jpg",
            description: "A delicious and sophisticated gourmand with caramel and vanilla.",
            notes: "Blood Orange, Bergamot, Lavender, Cinnamon, Licorice, Jasmine, Caramel, Vanilla, Musk",
            stock: true
  },
  {
            id: 39,
            name: "Xerjoff - Casamorati Bouquet Ideale",
            brand: "Xerjoff",
            category: "niche",
            price: 250,
            image: "assets/bouquet-ideale.jpg",
            description: "A warm and spicy oriental fragrance with vanilla and papyrus.",
            notes: "Cinnamon, Nutmeg, Guaiac Wood, Sandalwood, Cedar, Papyrus, Vanilla, Coumarin, Tobacco Blossom, French Labdanum, Musk",
            stock: true
  },
  {
            id: 40,
            name: "Creed - Silver Mountain Water",
            brand: "Creed",
            category: "niche",
            price: 280,
            image: "assets/silver-mountain-water.jpg",
            description: "A fresh and icy fragrance inspired by the Swiss Alps.",
            notes: "Bergamot, Mandarin Orange, Green Tea, Black Currant, Musk, Petitgrain, Sandalwood, Galbanum",
            stock: true
  },
  {
            id: 41,
            name: "Creed - Green Irish Tweed",
            brand: "Creed",
            category: "niche",
            price: 250,
            image: "assets/green-irish-tweed.jpg",
            description: "A classic and elegant green fragrance, fresh and sophisticated.",
            notes: "Lemon Verbena, Iris, Violet Leaf, Ambergris, Mysore Sandalwood",
            stock: true
  },
  {
            id: 42,
            name: "Louis Vuitton - Afternoon Swim",
            brand: "Louis Vuitton",
            category: "niche",
            price: 280,
            image: "assets/afternoon-swim.jpg",
            description: "A vibrant and energetic citrus fragrance, like a dip in the ocean.",
            notes: "Sicilian Orange, Bergamot, Mandarin Orange",
            stock: true
  },
  {
            id: 43,
            name: "Louis Vuitton - On the Beach",
            brand: "Louis Vuitton",
            category: "niche",
            price: 280,
            image: "assets/on-the-beach.jpg",
            description: "A sunny and refreshing fragrance with yuzu and neroli.",
            notes: "Yuzu, Neroli, Pink Pepper, Rosemary, Sand, Thyme, Cloves, Cypress",
            stock: true
  },
  {
            id: 44,
            name: "Parfums de Marly - Delina",
            brand: "Parfums de Marly",
            category: "niche",
            price: 280,
            image: "assets/delina.jpg",
            description: "A beautiful and feminine floral fragrance with rhubarb and rose.",
            notes: "Rhubarb, Lychee, Bergamot, Nutmeg, Turkish Rose, Peony, Petalia, Vanilla, Musk, Cashmeran, Haitian Vetiver, Cedar, Incense",
            stock: true
  },
  {
            id: 45,
            name: "Parfums de Marly - Herod",
            brand: "Parfums de Marly",
            category: "niche",
            price: 250,
            image: "assets/herod.jpg",
            description: "A warm and woody tobacco fragrance with vanilla and cinnamon.",
            notes: "Cinnamon, Pepper, Tobacco Leaf, Incense, Osmanthus, Labdanum, Vanilla, Iso E Super, Cedar, Musk, Cypriol Oil or Nagarmotha, Vetiver",
            stock: true
  },
  {
            id: 46,
            name: "Parfums de Marly - Pegasus",
            brand: "Parfums de Marly",
            category: "niche",
            price: 250,
            image: "assets/pegasus.jpg",
            description: "A classic and refined oriental fougere with almond and vanilla.",
            notes: "Heliotrope, Cumin, Bergamot, Bitter Almond, Lavender, Jasmine, Vanilla, Sandalwood, Amber",
            stock: true
  },
  {
            id: 47,
            name: "Parfums de Marly - Oajan",
            brand: "Parfums de Marly",
            category: "niche",
            price: 280,
            image: "assets/oajan.jpg",
            description: "A rich and delicious gourmand with honey and cinnamon.",
            notes: "Cinnamon, Honey, Osmanthus, Benzoin, Labdanum, Amber, Artemisia, Patchouli, Musk, Vanilla, Tonka Bean",
            stock: true
  },
  {
            id: 48,
            name: "Initio - Rehab",
            brand: "Initio",
            category: "niche",
            price: 250,
            image: "assets/rehab.jpg",
            description: "A smooth and comforting woody aromatic fragrance.",
            notes: "Lavender, Bergamot, Vetiver, Cedar, Patchouli, Sandalwood, Musk, Guaiac Wood",
            stock: true
  },
  {
            id: 49,
            name: "Initio - Atomic Rose",
            brand: "Initio",
            category: "niche",
            price: 280,
            image: "assets/atomic-rose.jpg",
            description: "A powerful and explosive rose fragrance with bergamot and jasmine.",
            notes: "Italian Bergamot, Pink Pepper, Hedione, Bulgarian Rose, Turkish Rose, Egyptian Jasmine, Madagascar Vanilla, Amber",
            stock: true
  },
  {
            id: 50,
            name: "Amouage - Guidance",
            brand: "Amouage",
            category: "niche",
            price: 320,
            image: "assets/guidance.jpg",
            description: "A unique and addictive floral gourmand with hazelnut and incense.",
            notes: "Pear, Hazelnut, Olibanum, Osmanthus, Rose, Saffron, Jasmine Sambac, Sandalwood, Vanilla, Akigalawood, Ambergris, Labdanum",
            stock: true
  },
  {
            id: 51,
            name: "Amouage - Jubilation XXV",
            brand: "Amouage",
            category: "niche",
            price: 280,
            image: "assets/jubilation-xxv.jpg",
            description: "A regal and opulent fragrance with blackberry, incense and oud.",
            notes: "Blackberry, Olibanum, Orange, Labdanum, Coriander, Tarragon, Honey, Guaiac Wood, Cinnamon, Bay Leaf, Clove, Rose, Oud, Myrrh, Patchouli, Ambergris, Musk, Immortelle, Cedar, Oakmoss",
            stock: true
  },
  {
            id: 52,
            name: "Byredo - Mojave Ghost",
            brand: "Byredo",
            category: "niche",
            price: 220,
            image: "assets/mojave-ghost.jpg",
            description: "A woody and ethereal fragrance inspired by the Mojave desert.",
            notes: "Sapodilla, Ambrette (Musk Mallow), Magnolia, Violet, Sandalwood, Ambergris, Cedar",
            stock: true
  },
  {
            id: 53,
            name: "Byredo - Rose of No Man's Land",
            brand: "Byredo",
            category: "niche",
            price: 220,
            image: "assets/rose-of-no-mans-land.jpg",
            description: "A sophisticated and clean rose fragrance with pink pepper.",
            notes: "Pink Pepper, Turkey Red Rose, Raspberry Blossom, Papyrus, Amber",
            stock: true
  },
  {
            id: 54,
            name: "Kilian - Good Girl Gone Bad",
            brand: "Kilian",
            category: "niche",
            price: 280,
            image: "assets/good-girl-gone-bad.jpg",
            description: "A luscious and floral fragrance with osmanthus and jasmine.",
            notes: "Osmanthus, Jasmine, May Rose, Indian Tuberose, Narcissus, Amber, Cedar",
            stock: true
  },
  {
            id: 55,
            name: "Kilian - Love Don't Be Shy",
            brand: "Kilian",
            category: "niche",
            price: 320,
            image: "assets/love-dont-be-shy.jpg",
            description: "A sweet and addictive marshmallow and orange blossom scent.",
            notes: "Neroli, Bergamot, Pink Pepper, Coriander, Orange Blossom, Honeysuckle, Jasmine, Iris, Rose, Sugar, Vanilla, Caramel, Musk, Civet, Labdanum",
            stock: true
  },
  {
            id: 56,
            name: "Dior - Gris Dior",
            brand: "Dior",
            category: "niche",
            price: 280,
            image: "assets/gris-dior.jpg",
            description: "An elegant and sophisticated chypre floral fragrance.",
            notes: "Bergamot, Rose, Patchouli, Amber, Cedar, Sandalwood, Oakmoss",
            stock: true
  },
  {
            id: 57,
            name: "Dior - Bois d'Argent",
            brand: "Dior",
            category: "niche",
            price: 280,
            image: "assets/bois-dargent.jpg",
            description: "A mysterious and comforting iris-centric fragrance.",
            notes: "Juniper Berries, Cypress, Iris, Myrrh, Patchouli, Vanilla, Musk, Resins, Amber, Woody Notes, Honey, Leather",
            stock: true
  },
  {
            id: 58,
            name: "Chanel - Sycomore",
            brand: "Chanel",
            category: "niche",
            price: 350,
            image: "assets/sycomore.jpg",
            description: "A powerful and noble vetiver fragrance with a touch of smoke.",
            notes: "Vetiver, Sandalwood, Aldehydes, Tobacco, Violet, Juniper, Pink Pepper, Cypress, Spices",
            stock: true
  },
  {
            id: 59,
            name: "Chanel - Le Lion",
            brand: "Chanel",
            category: "niche",
            price: 280,
            image: "assets/le-lion.jpg",
            description: "A powerful and majestic oriental fragrance with labdanum and patchouli.",
            notes: "Lemon, Bergamot, Labdanum, Amber, Patchouli, Madagascar Vanilla, Sandalwood, Musk",
            stock: true
  },
  {
            id: 60,
            name: "Louis Vuitton - Meteore",
            brand: "Louis Vuitton",
            category: "niche",
            price: 280,
            image: "assets/meteore.jpg",
            description: "A fresh and crystalline citrus fragrance with a spicy heart.",
            notes: "Calabrian Bergamot, Sicilian Orange, Mandarin Orange, Tunisian Neroli, Guatemalan Cardamom, Indonesian Nutmeg, Pink Pepper, Java Vetiver Oil",
            stock: true
  },
  {
            id: 61,
            name: "Louis Vuitton - Rose des Vents",
            brand: "Louis Vuitton",
            category: "niche",
            price: 280,
            image: "assets/rose-des-vents.jpg",
            description: "A beautiful and airy rose fragrance with iris and cedar.",
            notes: "Peach, Green Notes, Black Currant, May Rose, Rose, Turkish Rose, Iris, White Musk, Cedar, Pepper, Orris Root, Violet Leaf",
            stock: true
  }
  ];

// Pack Data
const packs = [
  {
            id: "p1",
            name: "Discovery Pack - Niche",
            price: 650,
            items: ["Erba Pura", "Aventus", "Imagination"],
            image: "assets/pack-niche.jpg",
            category: "pack"
  },
  {
            id: "p2",
            name: "Discovery Pack - Designer",
            price: 450,
            items: ["Bleu de Chanel", "Sauvage Elixir", "Myslf"],
            image: "assets/pack-designer.jpg",
            category: "pack"
  }
  ];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let activeCollection = 'all';

// Initialize Cart Count
function updateCartCount() {
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      const cartCountElements = document.querySelectorAll('.cart-count');
      cartCountElements.forEach(el => {
                el.textContent = totalCount;
                el.classList.toggle('hidden', totalCount === 0);
      });
}

// Collection Filter Logic
function filterCollections(category) {
      activeCollection = category;

    // Update UI active state
    document.querySelectorAll('.filter-btn').forEach(btn => {
              btn.classList.toggle('active', btn.getAttribute('onclick').includes(category));
    });

    const productsGrid = document.getElementById('products-grid');
      if (!productsGrid) return;

    productsGrid.innerHTML = '';

    const filteredProducts = category === 'all' 
        ? products 
              : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
              const card = createProductCard(product);
              productsGrid.appendChild(card);
    });

    // Update Section Title
    const titleElement = document.getElementById('collection-title');
      if (titleElement) {
                const titleKey = `coll.${category}.title`;
                titleElement.setAttribute('data-i18n', titleKey);
                titleElement.textContent = translations[currentLanguage][titleKey] || 'Our Collection';
      }

    // Scroll to products
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
}

// Create Product Card
function createProductCard(product) {
      const div = document.createElement('div');
      div.className = 'product-card reveal';
      div.innerHTML = `
              <div class="product-image">
                          <img src="${product.image}" alt="${product.name}" loading="lazy">
                                      ${!product.stock ? '<span class="out-of-stock">Out of Stock</span>' : ''}
                                                  <button class="quick-view-btn" onclick="openQuickView(${product.id})">
                                                                  <i class="fas fa-eye"></i>
                                                                              </button>
                                                                                      </div>
                                                                                              <div class="product-info">
                                                                                                          <span class="brand-tag">${product.brand}</span>
                                                                                                                      <h3>${product.name}</h3>
                                                                                                                                  <p class="price">${product.price} DH <span class="size">/ 10ml</span></p>
                                                                                                                                              <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${!product.stock ? 'disabled' : ''}>
                                                                                                                                                              <i class="fas fa-shopping-bag"></i>
                                                                                                                                                                              <span data-i18n="coll.all.btn">Add to Collection</span>
                                                                                                                                                                                          </button>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      `;
      return div;
}

// Add to Cart
function addToCart(productId, isPack = false) {
      const item = isPack 
        ? packs.find(p => p.id === productId)
                : products.find(p => p.id === productId);

    if (!item) return;

    const existingItem = cart.find(i => i.id === productId && i.isPack === isPack);

    if (existingItem) {
              existingItem.quantity += 1;
    } else {
              cart.push({
                            ...item,
                            quantity: 1,
                            isPack: isPack
              });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      showToast(`${item.name} added to collection!`);
}

// UI Management
function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      document.body.appendChild(toast);

    setTimeout(() => {
              toast.classList.add('show');
              setTimeout(() => {
                            toast.classList.remove('show');
                            setTimeout(() => toast.remove(), 300);
              }, 3000);
    }, 100);
}

// Quick View Modal
function openQuickView(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;

    const modal = document.getElementById('quick-view-modal');
      const content = document.getElementById('modal-content');
      if (!modal || !content) return;

    content.innerHTML = `
            <div class="modal-grid">
                        <div class="modal-image">
                                        <img src="${product.image}" alt="${product.name}">
                                                    </div>
                                                                <div class="modal-details">
                                                                                <span class="brand-tag">${product.brand}</span>
                                                                                                <h2>${product.name}</h2>
                                                                                                                <p class="modal-price">${product.price} DH <span class="size">/ 10ml</span></p>
                                                                                                                                <div class="modal-desc">
                                                                                                                                                    <p>${product.description}</p>
                                                                                                                                                                    </div>
                                                                                                                                                                                    <div class="modal-notes">
                                                                                                                                                                                                        <h4>Notes:</h4>
                                                                                                                                                                                                                            <p>${product.notes}</p>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                            <div class="modal-actions">
                                                                                                                                                                                                                                                                                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${!product.stock ? 'disabled' : ''}>
                                                                                                                                                                                                                                                                                                        <i class="fas fa-shopping-bag"></i>
                                                                                                                                                                                                                                                                                                                                Add to Collection
                                                                                                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                                                                                                                        <button class="wa-inquiry-btn" onclick="sendInquiry('${product.name}')">
                                                                                                                                                                                                                                                                                                                                                                                                <i class="fab fa-whatsapp"></i>
                                                                                                                                                                                                                                                                                                                                                                                                                        Inquire
                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    `;

    modal.classList.add('active');
      document.body.style.overflow = 'hidden';
}

function closeQuickView() {
      const modal = document.getElementById('quick-view-modal');
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';
}

// Cart UI Logic
function toggleCart() {
      const cartDrawer = document.getElementById('cart-drawer');
      const overlay = document.getElementById('cart-overlay');
      if (!cartDrawer || !overlay) return;

    const isActive = cartDrawer.classList.contains('active');
      if (!isActive) renderCart();

    cartDrawer.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = isActive ? '' : 'hidden';
}

function renderCart() {
      const cartItems = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');
      if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = '';
      let total = 0;

    cart.forEach(item => {
              const itemTotal = item.price * item.quantity;
              total += itemTotal;

                         const itemEl = document.createElement('div');
              itemEl.className = 'cart-item';
              itemEl.innerHTML = `
                          <div class="cart-item-image">
                                          <img src="${item.image}" alt="${item.name}">
                                                      </div>
                                                                  <div class="cart-item-details">
                                                                                  <h4>${item.name}</h4>
                                                                                                  <p class="cart-item-price">${item.price} DH</p>
                                                                                                                  <div class="quantity-controls">
                                                                                                                                      <button onclick="updateQuantity(${item.id}, ${item.isPack || false}, -1)">-</button>
                                                                                                                                                          <span>${item.quantity}</span>
                                                                                                                                                                              <button onclick="updateQuantity(${item.id}, ${item.isPack || false}, 1)">+</button>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                      <button class="remove-item" onclick="removeFromCart(${item.id}, ${item.isPack || false})">
                                                                                                                                                                                                                                      <i class="fas fa-trash"></i>
                                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                                          `;
              cartItems.appendChild(itemEl);
    });

    cartTotal.textContent = `${total} DH`;
}

function updateQuantity(id, isPack, delta) {
      const item = cart.find(i => i.id === id && i.isPack === isPack);
      if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                              removeFromCart(id, isPack);
                } else {
                              localStorage.setItem('cart', JSON.stringify(cart));
                              renderCart();
                              updateCartCount();
                }
      }
}

function removeFromCart(id, isPack) {
      cart = cart.filter(i => !(i.id === id && i.isPack === isPack));
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartCount();
}

function checkout() {
      if (cart.length === 0) {
                showToast('Your collection is empty!');
                return;
      }

    const modal = document.getElementById('checkout-modal');
      if (modal) modal.classList.add('active');
}

function closeCheckout() {
      const modal = document.getElementById('checkout-modal');
      if (modal) modal.classList.remove('active');
}

function confirmOrder(event) {
      event.preventDefault();

    const name = document.getElementById('order-name').value;
      const phone = document.getElementById('order-phone').value;
      const city = document.getElementById('order-city').value;

    if (!name || !phone || !city) {
              showToast('Please fill in all fields');
              return;
    }

    let message = `*UrPerfume - New Order*\n\n`;
      message += `*Customer:* ${name}\n`;
      message += `*Phone:* ${phone}\n`;
      message += `*City:* ${city}\n\n`;
      message += `*Items:*\n`;

    let total = 0;
      cart.forEach(item => {
                message += `- ${item.name} (${item.quantity}x) - ${item.price * item.quantity} DH\n`;
                total += item.price * item.quantity;
      });

    message += `\n*Total:* ${total} DH`;

    const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/212620138981?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    // Clear cart after order
    cart = [];
      localStorage.removeItem('cart');
      updateCartCount();
      closeCheckout();
      toggleCart();
      showToast('Order sent to WhatsApp!');
}

function sendInquiry(productName) {
      const message = `Hello UrPerfume, I'm interested in more information about: ${productName}`;
      const whatsappUrl = `https://wa.me/212620138981?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
}

// Mobile Menu
function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      const menuBtn = document.querySelector('.mobile-menu-btn i');
      if (!navLinks || !menuBtn) return;

    navLinks.classList.toggle('active');
      menuBtn.classList.toggle('fa-bars');
      menuBtn.classList.toggle('fa-times');
}

// Scroll Reveal
function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const revealTop = el.getBoundingClientRect().top;
                const revealPoint = 150;
                if (revealTop < windowHeight - revealPoint) {
                              el.classList.add('active');
                }
      });
}

// Search Logic
function handleSearch(query) {
      if (!query) {
                filterCollections(activeCollection);
                return;
      }

    const filtered = products.filter(p => 
                                             p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.brand.toLowerCase().includes(query.toLowerCase())
                                         );

    const productsGrid = document.getElementById('products-grid');
      if (productsGrid) {
                productsGrid.innerHTML = '';
                filtered.forEach(product => productsGrid.appendChild(createProductCard(product)));
      }
}

// Coupon System
function applyCoupon() {
      const input = document.getElementById('coupon-input');
      if (!input) return;

    const code = input.value.trim().toUpperCase();
      if (code === 'URPERFUME10') {
                showToast('Coupon applied: 10% discount!');
                // logic for discount could be added here
      } else {
                showToast('Invalid coupon code');
      }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
      // Render initial products
                              filterCollections('all');
      updateCartCount();

                              // Scroll reveal event
                              window.addEventListener('scroll', reveal);
      reveal(); // Initial check

                              // Navbar scroll effect
                              window.addEventListener('scroll', () => {
                                        const nav = document.querySelector('nav');
                                        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
                              });

                              // Close modal on click outside
                              window.onclick = (event) => {
                                        const qvModal = document.getElementById('quick-view-modal');
                                        const coModal = document.getElementById('checkout-modal');
                                        if (event.target === qvModal) closeQuickView();
                                        if (event.target === coModal) closeCheckout();
                              };

                              // Safety timeout for loading screen
                              setTimeout(() => {
                                        const loadingScreen = document.getElementById('loading-screen');
                                        if (loadingScreen) {
                                                      loadingScreen.style.opacity = '0';
                                                      setTimeout(() => loadingScreen.remove(), 500);
                                        }
                              }, 2000);
});
