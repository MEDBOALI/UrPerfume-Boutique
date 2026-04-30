/* UrPerfume - Boutique Logic */

// 1. Force Hide Preloader (Safety)
const forceHidePreloader = () => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                            preloader.style.opacity = '0';
                            setTimeout(() => {
                                                preloader.style.display = 'none';
                            }, 500);
            }
};
setTimeout(forceHidePreloader, 2000);
window.addEventListener('load', forceHidePreloader);

// 2. Translations
const translations = {
            en: {
                            'nav.home': 'Home',
                            'nav.collections': 'Collections',
                            'nav.about': 'Our Story',
                            'hero.title': 'Experience Luxury One Drop at a Time',
                            'hero.desc': 'Original fragrances decanted into premium 10ml travel packs. Authenticity guaranteed, starting from 100 DH.',
                            'hero.shop': 'Shop Collections',
                            'hero.packs': 'Exclusive Packs',
                            'coll.niche.title': 'Exclusive Niche',
                            'coll.designer.title': 'Designer Collection',
                            'coll.pack.title': 'Luxury Sets',
                            'coll.all.title': 'Full Collection',
                            'about.title': 'Our Story',
                            'about.story': 'UrPerfume was founded with a single mission: to make the worlds most luxurious scents accessible to everyone.',
                            'about.wa': 'Message us on WhatsApp'
            },
            fr: {
                            'nav.home': 'Accueil',
                            'nav.collections': 'Collections',
                            'nav.about': 'Notre Histoire',
                            'hero.title': 'Decouvrez le luxe goutte par goutte',
                            'hero.desc': 'Parfums originaux decantes en flacons premium de 10ml. Authenticite garantie, a partir de 100 DH.',
                            'hero.shop': 'Voir les Collections',
                            'hero.packs': 'Packs Exclusifs',
                            'coll.niche.title': 'Niche Exclusive',
                            'coll.designer.title': 'Collection Designer',
                            'coll.pack.title': 'Coffrets de Luxe',
                            'coll.all.title': 'Toute la Collection',
                            'about.title': 'Notre Histoire',
                            'about.story': 'UrPerfume a ete fonde avec une mission simple : rendre les parfums les plus luxueux accessibles a tous.',
                            'about.wa': 'Contactez-nous sur WhatsApp'
            }
};

let currentLanguage = 'en';

function setLanguage(lang) {
            currentLanguage = lang;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                            const key = el.getAttribute('data-i18n');
                            if (translations[lang] && translations[lang][key]) {
                                                el.textContent = translations[lang][key];
                            }
            });
}

const products = [
        {
                        id: 1,
                        name: "Xerjoff - Erba Pura",
                        brand: "Xerjoff",
                        category: "niche",
                        price: 250,
                        image: "assets/erba-pura.jpg",
                        description: "A delicious and modern fruity blend with citrus and amber.",
                        notes: "Orange, Lemon, Bergamot, Mediterranean Fruits, White Musk, Amber, Madagascar Vanilla",
                        stock: true
        },
        {
                        id: 2,
                        name: "Xerjoff - Alexandria II",
                        brand: "Xerjoff",
                        category: "niche",
                        price: 350,
                        image: "assets/alexandria-ii.jpg",
                        description: "A majestic and complex oud fragrance with lavender and apple.",
                        notes: "Apple, Cinnamon, Rosewood, Lavender, Cedar, Lily-of-the-Valley, Rose, Amber, Sandalwood, Musk, Vanilla, Oud",
                        stock: true
        },
        {
                        id: 3,
                        name: "Creed - Aventus",
                        brand: "Creed",
                        category: "niche",
                        price: 280,
                        image: "assets/aventus.jpg",
                        description: "The ultimate masculine fragrance, fruity and woody.",
                        notes: "Pineapple, Bergamot, Black Currant, Apple, Birch, Patchouli, Moroccan Jasmine, Rose, Musk, Oakmoss, Ambergris, Vanilla",
                        stock: true
        },
        {
                        id: 4,
                        name: "Louis Vuitton - Imagination",
                        brand: "Louis Vuitton",
                        category: "niche",
                        price: 280,
                        image: "assets/imagination.jpg",
                        description: "A luminous and energetic citrus fragrance with black tea.",
                        notes: "Citron, Calabrian Bergamot, Sicilian Orange, Nigerian Ginger, Tunisian Neroli, Ceylon Cinnamon, Chinese Black Tea, Ambroxan, Guaiac Wood, Olibanum",
                        stock: true
        },
        {
                        id: 5,
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
                        id: 6,
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
                        id: 7,
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
                        id: 8,
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
                        id: 9,
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
                        id: 10,
                        name: "Maison Francis Kurkdjian - Baccarat Rouge 540",
                        brand: "MFK",
                        category: "niche",
                        price: 320,
                        image: "assets/br540.jpg",
                        description: "A unique and airy amber floral scent, sweet and sophisticated.",
                        notes: "Saffron, Jasmine, Amberwood, Ambergris, Fir Resin, Cedar",
                        stock: true
        }
        ];

const packs = [
        {
                        id: "p1",
                        name: "Discovery Pack - Niche",
                        price: 650,
                        items: ["Erba Pura", "Aventus", "Imagination"],
                        image: "assets/pack-niche.jpg",
                        category: "pack"
        }
        ];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function filterCollections(category) {
            const grid = document.getElementById('products-grid');
            if (!grid) return;
            grid.innerHTML = '';
            const filtered = category === 'all' ? products : products.filter(p => p.category === category);
            filtered.forEach(p => grid.appendChild(createProductCard(p)));
}

function createProductCard(p) {
            const div = document.createElement('div');
            div.className = 'product-card reveal';
            div.innerHTML = `
                    <div class="product-image"><img src="${p.image}" alt="${p.name}"></div>
                            <div class="product-info">
                                        <span class="brand-tag">${p.brand}</span>
                                                    <h3>${p.name}</h3>
                                                                <p class="price">${p.price} DH</p>
                                                                            <button onclick="addToCart(${p.id})">Add to Collection</button>
                                                                                    </div>
                                                                                        `;
            return div;
}

function addToCart(id) {
            const p = products.find(prod => prod.id === id);
            const existing = cart.find(item => item.id === id);
            if (existing) existing.quantity++;
            else cart.push({...p, quantity: 1});
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
}

document.addEventListener('DOMContentLoaded', () => {
            filterCollections('all');
            updateCartCount();
            setLanguage('en');
});
