let cart = [];
let discount = 0;

const products = [
{
id: 1,
brand: 'Christian Dior',
name: 'Sauvage Elixir',
type: 'designer',
originalPrice: 210,
price: 180,
image: 'assets/sauvage_elixir.webp',
notes: 'Grapefruit, Cinnamon, Cardamom | 10ml'
},
{
id: 2,
brand: 'Christian Dior',
name: 'Sauvage EDP',
type: 'designer',
originalPrice: 150,
price: 120,
image: 'assets/sauvage_edp.webp',
notes: 'Bergamot, Sichuan Pepper, Vanilla | 10ml'
},
{
id: 3,
brand: 'Yves Saint Laurent',
name: 'Myslf EDP',
type: 'designer',
originalPrice: 160,
price: 130,
image: 'assets/myslf.webp',
notes: 'Bergamot, Orange Blossom, Patchouli | 10ml'
},
{
id: 4,
brand: 'Yves Saint Laurent',
name: 'Y EDP',
type: 'designer',
originalPrice: 150,
price: 120,
image: 'assets/y_edp.webp',
notes: 'Apple, Ginger, Sage, Juniper | 10ml'
},
{
id: 5,
brand: 'Yves Saint Laurent',
name: 'Y Elixir',
type: 'designer',
originalPrice: 200,
price: 160,
image: 'assets/y_elixir.webp',
notes: 'Lavender, Geranium, Oud | 10ml'
},
{
id: 6,
brand: 'Yves Saint Laurent',
name: 'Libre EDP',
type: 'designer',
originalPrice: 170,
price: 140,
image: 'assets/libre_edp.webp',
notes: 'Lavender, Orange Blossom, Musk | 10ml'
},
{
id: 7,
brand: 'Yves Saint Laurent',
name: 'Libre Intense',
type: 'designer',
originalPrice: 185,
price: 150,
image: 'assets/libre_intense.webp',
notes: 'French Lavender, Moroccan Orange Blossom, Orchid | 10ml'
},
{
id: 8,
brand: 'Giorgio Armani',
  name: 'Stronger With You Intensely',
  type: 'designer',
  originalPrice: 140,
  price: 110,
  image: 'assets/swy_intensely.webp',
  notes: 'Pink Pepper, Juniper, Vanilla | 10ml'
  },
  {
  id: 9,
  brand: 'Giorgio Armani',
  name: 'Stronger With You Absolutely',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/swy_absolutely.webp',
  notes: 'Rum, Lavender, Vanilla | 10ml'
  },
  {
  id: 10,
  brand: 'Giorgio Armani',
  name: 'Acqua Di Gio Profondo',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/adg_profondo.webp',
  notes: 'Sea Notes, Rosemary, Cypress | 10ml'
  },
  {
  id: 11,
  brand: 'Giorgio Armani',
  name: 'Acqua Di Gio Parfum',
  type: 'designer',
  originalPrice: 170,
  price: 140,
  image: 'assets/adg_parfum.webp',
  notes: 'Bergamot, Rosemary, Geranium | 10ml'
  },
  {
  id: 12,
  brand: 'Giorgio Armani',
  name: 'Si EDP',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/si_edp.webp',
  notes: 'Cassis, May Rose, Freesia | 10ml'
  },
  {
  id: 13,
  brand: 'Jean Paul Gaultier',
  name: 'Le Male Elixir',
  type: 'designer',
  originalPrice: 180,
  price: 150,
  image: 'assets/le_male_elixir.webp',
  notes: 'Lavender, Mint, Vanilla, Benzoin | 10ml'
  },
  {
  id: 14,
  brand: 'Jean Paul Gaultier',
  name: 'Le Male Le Parfum',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/le_male_parfum.webp',
  notes: 'Cardamom, Lavender, Iris, Vanilla | 10ml'
  },
  {
  id: 15,
  brand: 'Jean Paul Gaultier',
  name: 'Ultra Male',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/ultra_male.webp',
  notes: 'Pear, Lavender, Mint, Cinnamon | 10ml'
  },
  {
  id: 16,
  brand: 'Jean Paul Gaultier',
  name: 'Scandal Le Parfum Homme',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/scandal_parfum.webp',
  notes: 'Geranium, Tonka Bean, Sandalwood | 10ml'
  },
  {
  id: 17,
  brand: 'Jean Paul Gaultier',
  name: 'Scandal Le Parfum Femme',
  type: 'designer',
  originalPrice: 170,
  price: 140,
  image: 'assets/scandal_femme.webp',
  notes: 'Jasmine, Salted Caramel, Vanilla | 10ml'
  },
  {
  id: 18,
  brand: 'Jean Paul Gaultier',
  name: 'La Belle EDP',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/la_belle.webp',
  notes: 'Pear, Bergamot, Vanilla | 10ml'
  },
  {
  id: 19,
  brand: 'Parfums de Marly',
  name: 'Layton',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/pdm_layton.webp',
  notes: 'Apple, Lavender, Vanilla | 10ml'
  },
  {
  id: 20,
  brand: 'Parfums de Marly',
  name: 'Layton Exclusif',
  type: 'niche',
  originalPrice: 380,
  price: 320,
  image: 'assets/pdm_layton_exclusif.webp',
  notes: 'Almond, Civet, Guaiac Wood | 10ml'
  },
  {
  id: 21,
  brand: 'Parfums de Marly',
  name: 'Haltane',
  type: 'niche',
  originalPrice: 360,
  price: 300,
  image: 'assets/pdm_haltane.webp',
  notes: 'Clary Sage, Lavender, Oud | 10ml'
  },
  {
  id: 22,
  brand: 'Parfums de Marly',
  name: 'Althair',
  type: 'niche',
  originalPrice: 360,
  price: 300,
  image: 'assets/pdm_althair.webp',
  notes: 'Orange Blossom, Cinnamon, Bourbon Vanilla | 10ml'
  },
  {
  id: 23,
  brand: 'Parfums de Marly',
  name: 'Delina EDP',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/pdm_delina.webp',
  notes: 'Rhubarb, Lychee, Turkish Rose | 10ml'
  },
  {
  id: 24,
  brand: 'Parfums de Marly',
  name: 'Delina Exclusif',
  type: 'niche',
  originalPrice: 380,
  price: 320,
  image: 'assets/pdm_delina_exclusif.webp',
  notes: 'Bergamot, Pear, Incense, Rose | 10ml'
  },
  {
  id: 25,
  brand: 'Initio Parfums',
  name: 'Side Effect',
  type: 'niche',
  originalPrice: 350,
  price: 290,
  image: 'assets/initio_side_effect.webp',
  notes: 'Rum, Tobacco, Cinnamon, Vanilla | 10ml'
  },
  {
  id: 26,
  brand: 'Initio Parfums',
  name: 'Oud For Greatness',
  type: 'niche',
  originalPrice: 400,
  price: 350,
  image: 'assets/initio_oud_greatness.webp',
  notes: 'Saffron, Nutmeg, Lavender, Oud | 10ml'
  },
  {
  id: 27,
  brand: 'Xerjoff',
  name: 'Naxos',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/xerjoff_naxos.webp',
  notes: 'Honey, Tobacco, Lavender | 10ml'
  },
  {
  id: 28,
  brand: 'Xerjoff',
  name: 'Erba Pura',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/xerjoff_erba_pura.webp',
  notes: 'Sicilian Fruits, Musk, Vanilla | 10ml'
  },
  {
  id: 29,
  brand: 'Xerjoff',
  name: 'Alexandria II',
  type: 'niche',
  originalPrice: 450,
  price: 380,
  image: 'assets/xerjoff_alexandria.webp',
  notes: 'Apple, Lavender, Rosewood, Oud | 10ml'
  },
  {
  id: 30,
  brand: 'Amouage',
  name: 'Interlude Man',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/amouage_interlude.webp',
  notes: 'Oregano, Frankincense, Leather | 10ml'
  },
  {
  id: 31,
  brand: 'Amouage',
  name: 'Reflection Man',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/amouage_reflection.webp',
  notes: 'Rosemary, Iris, Neroli | 10ml'
  },
  {
  id: 32,
  brand: 'Amouage',
  name: 'Guidance',
  type: 'niche',
  originalPrice: 400,
  price: 340,
  image: 'assets/amouage_guidance.webp',
  notes: 'Pear, Frankincense, Hazelnut, Rose | 10ml'
  },
  {
  id: 33,
  brand: 'Byredo',
  name: 'Bal d\'Afrique',
  type: 'niche',
  originalPrice: 320,
  price: 260,
  image: 'assets/byredo_bal_afrique.webp',
  notes: 'Lemon, Neroli, Marigold | 10ml'
  },
  {
  id: 34,
  brand: 'Byredo',
  name: 'Gypsy Water',
  type: 'niche',
  originalPrice: 320,
  price: 260,
  image: 'assets/byredo_gypsy_water.webp',
  notes: 'Juniper, Lemon, Pine Needle | 10ml'
  },
  {
  id: 35,
  brand: 'Maison Francis Kurkdjian',
  name: 'Baccarat Rouge 540 EDP',
  type: 'niche',
  originalPrice: 450,
  price: 380,
  image: 'assets/mfk_br540_edp.webp',
  notes: 'Saffron, Jasmine, Amberwood | 10ml'
  },
  {
  id: 36,
  brand: 'Maison Francis Kurkdjian',
  name: 'Baccarat Rouge 540 Extrait',
  type: 'niche',
  originalPrice: 550,
  price: 480,
  image: 'assets/mfk_br540_extrait.webp',
  notes: 'Bitter Almond, Saffron, Cedar | 10ml'
  },
  {
  id: 37,
  brand: 'Maison Francis Kurkdjian',
  name: 'Grand Soir',
  type: 'niche',
  originalPrice: 350,
  price: 290,
  image: 'assets/mfk_grand_soir.webp',
  notes: 'Amber, Benzoin, Vanilla | 10ml'
  },
  {
  id: 38,
  brand: 'Creed',
  name: 'Aventus',
  type: 'niche',
  originalPrice: 380,
  price: 320,
  image: 'assets/creed_aventus.webp',
  notes: 'Pineapple, Birch, Musk | 10ml'
  },
  {
  id: 39,
  brand: 'Creed',
  name: 'Aventus For Her',
  type: 'niche',
  originalPrice: 380,
  price: 320,
  image: 'assets/creed_aventus_her.webp',
  notes: 'Green Apple, Pink Berries, Patchouli | 10ml'
  },
  {
  id: 40,
  brand: 'Creed',
  name: 'Green Irish Tweed',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/creed_git.webp',
  notes: 'Lemon, Verbena, Iris, Violet Leaf | 10ml'
  },
  {
  id: 41,
  brand: 'Kilian Paris',
  name: 'Angels\' Share',
  type: 'niche',
  originalPrice: 400,
  price: 350,
  image: 'assets/kilian_angels_share.webp',
  notes: 'Cognac, Cinnamon, Tonka Bean | 10ml'
  },
  {
  id: 42,
  brand: 'Kilian Paris',
  name: 'Black Phantom',
  type: 'niche',
  originalPrice: 380,
  price: 320,
  image: 'assets/kilian_black_phantom.webp',
  notes: 'Coffee, Rum, Sugar Cane, Dark Chocolate | 10ml'
  },
  {
  id: 43,
  brand: 'Kilian Paris',
  name: 'Good Girl Gone Bad',
  type: 'niche',
  originalPrice: 380,
  price: 320,
  image: 'assets/kilian_good_girl.webp',
  notes: 'Osmanthus, Jasmine, May Rose | 10ml'
  },
  {
  id: 44,
  brand: 'Nishane',
  name: 'Hacivat',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/nishane_hacivat.webp',
  notes: 'Pineapple, Grapefruit, Oakmoss | 10ml'
  },
  {
  id: 45,
  brand: 'Nishane',
  name: 'Ani',
  type: 'niche',
  originalPrice: 350,
  price: 280,
  image: 'assets/nishane_ani.webp',
  notes: 'Ginger, Bergamot, Vanilla | 10ml'
  },
  {
  id: 46,
  brand: 'Nasomatto',
  name: 'Black Afgano',
  type: 'niche',
  originalPrice: 400,
  price: 320,
  image: 'assets/nasomatto_black_afgano.webp',
  notes: 'Cannabis, Resin, Tobacco, Coffee | 10ml'
  },
  {
  id: 47,
  brand: 'Nasomatto',
  name: 'Baraonda',
  type: 'niche',
  originalPrice: 400,
  price: 320,
  image: 'assets/nasomatto_baraonda.webp',
  notes: 'Whiskey, Wood, Ambrette | 10ml'
  },
  {
  id: 71,
  brand: 'Paco Rabanne',
  name: 'Invictus Victory Elixir',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/invictus_victory_elixir.webp',
  notes: 'Amber, Vanilla, Tonka Bean | 10ml'
  },
  {
  id: 72,
  brand: 'Paco Rabanne',
  name: 'Million Lucky',
  type: 'designer',
  originalPrice: 140,
  price: 110,
  image: 'assets/million_lucky.webp',
  notes: 'Hazelnut, Honey, Cedar | 10ml'
  },
  {
  id: 74,
  brand: 'Valentino',
  name: 'Born In Roma Intense',
  type: 'designer',
  originalPrice: 170,
  price: 140,
  image: 'assets/valentino_roma_intense.webp',
  notes: 'Vanilla, Ginger, Vetiver | 10ml'
  },
  {
  id: 75,
  brand: 'Valentino',
  name: 'Born In Roma Coral Fantasy',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/valentino_roma_coral.webp',
  notes: 'Red Apple, Tobacco, Sage | 10ml'
  },
  {
  id: 76,
  brand: 'Jean Paul Gaultier',
  name: 'Paradise Garden',
  type: 'designer',
  originalPrice: 180,
  price: 150,
  image: 'assets/paradise_garden.webp',
  notes: 'Coconut, Ginger, Mint | 10ml'
  },
  {
  id: 77,
  brand: 'Giorgio Armani',
  name: 'Stronger With You Amber',
  type: 'designer',
  originalPrice: 165,
  price: 135,
  image: 'assets/swy_amber.webp',
  notes: 'Amber, Lavender, Vanilla | 10ml'
  },
  {
  id: 78,
  brand: 'Tiziana Terenzi',
  name: 'Kirke',
  type: 'niche',
  originalPrice: 320,
  price: 250,
  image: 'assets/tiziana_kirke.webp',
  notes: 'Passion Fruit, Peach, Raspberry | 10ml'
  },
  {
  id: 79,
  brand: 'Tiziana Terenzi',
  name: 'Cassiopea',
  type: 'niche',
  originalPrice: 320,
  price: 250,
  image: 'assets/tiziana_cassiopea.webp',
  notes: 'Passion Fruit, Lemon, Cassis | 10ml'
  },
  {
  id: 80,
  brand: 'Orto Parisi',
  name: 'Megamare',
  type: 'niche',
  originalPrice: 420,
  price: 360,
  image: 'assets/orto_parisi_megamare.webp',
  notes: 'Sea Notes, Amber, Musk | 10ml'
  },
  {
  id: 81,
  brand: 'Orto Parisi',
  name: 'Terroni',
  type: 'niche',
  originalPrice: 420,
  price: 360,
  image: 'assets/orto_parisi_terroni.webp',
  notes: 'Smoke, Earth, Amber | 10ml'
  },
  {
  id: 82,
  brand: 'Dior',
  name: 'Gris Dior',
  type: 'niche',
  originalPrice: 450,
  price: 380,
  image: 'assets/gris_dior.webp',
  notes: 'Oakmoss, Rose, Bergamot | 10ml'
  },
  {
  id: 83,
  brand: 'Dior',
  name: 'Oud Ispahan',
  type: 'niche',
  originalPrice: 450,
  price: 380,
  image: 'assets/oud_ispahan.webp',
  notes: 'Oud, Rose, Sandalwood | 10ml'
  },
  {
  id: 84,
  brand: 'Guerlain',
  name: 'Spiritueuse Double Vanille',
  type: 'niche',
  originalPrice: 500,
  price: 420,
  image: 'assets/guerlain_double_vanille.webp',
  notes: 'Vanilla, Rum, Benzoin | 10ml'
  },
  {
  id: 85,
  brand: 'Guerlain',
  name: 'Tobacco Honey',
  type: 'niche',
  originalPrice: 550,
  price: 460,
  image: 'assets/guerlain_tobacco_honey.webp',
  notes: 'Honey, Tobacco, Vanilla | 10ml'
  },
  {
  id: 86,
  brand: 'Viktor & Rolf',
  name: 'Spicebomb Extreme',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/spicebomb_extreme.webp',
  notes: 'Black Pepper, Cumin, Tobacco, Vanilla | 10ml'
  },
  {
  id: 87,
  brand: 'Viktor & Rolf',
  name: 'Spicebomb Night Vision',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/spicebomb_nightvision.webp',
  notes: 'Green Apple, Black Spice, Geranium | 10ml'
  },
  {
  id: 88,
  brand: 'Prada',
  name: 'Luna Rossa Ocean',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/prada_ocean.webp',
  notes: 'Bergamot, Iris, Vetiver | 10ml'
  },
  {
  id: 89,
  brand: 'Prada',
  name: 'Luna Rossa Black',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/prada_black.webp',
  notes: 'Bergamot, Angelica, Coumarin | 10ml'
  },
  {
  id: 90,
  brand: 'Bottega Veneta',
  name: 'Bottega Veneta EDP',
  type: 'designer',
  originalPrice: 180,
  price: 150,
  image: 'assets/bottega_veneta.webp',
  notes: 'Pink Pepper, Jasmine, Leather | 10ml'
  },
  {
  id: 91,
  brand: 'Burberry',
  name: 'Goddess EDP',
  type: 'designer',
  originalPrice: 170,
  price: 140,
  image: 'assets/burberry_goddess.webp',
  notes: 'Vanilla, Lavender, Cacao | 10ml'
  },
  {
  id: 92,
  brand: 'Azzaro',
  name: 'The Most Wanted Parfum',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/azzaro_most_wanted.webp',
  notes: 'Ginger, Wood, Bourbon Vanilla | 10ml'
  },
  {
  id: 93,
  brand: 'Azzaro',
  name: 'Wanted By Night',
  type: 'designer',
  originalPrice: 140,
  price: 110,
  image: 'assets/azzaro_wanted_night.webp',
  notes: 'Cinnamon, Mandarin, Tobacco | 10ml'
  },
  {
  id: 50,
  brand: 'Carolina Herrera',
  name: 'Good Girl EDP',
  type: 'designer',
  originalPrice: 160,
  price: 130,
  image: 'assets/good_girl.webp',
  notes: 'Almond, Coffee, Tuberose | 10ml'
  },
  {
  id: 63,
  brand: 'Carolina Herrera',
  name: 'Good Girl Blush',
  type: 'designer',
  originalPrice: 165,
  price: 135,
  image: 'assets/good_girl_blush.webp',
  notes: 'Bergamot, Peony, Vanilla | 10ml'
  },
  {
  id: 64,
  brand: 'Carolina Herrera',
  name: 'Good Girl New York Bowtastic',
  type: 'designer',
  originalPrice: 170,
  price: 130,
  image: 'assets/good_girl_bowtastic.webp',
  notes: 'Tuberose, Jasmine, Tonka | 10ml'
  },
  {
  id: 48,
  brand: 'Carolina Herrera',
  name: 'Bad Boy',
  type: 'designer',
  originalPrice: 130,
  price: 100,
  image: 'assets/bad_boy.webp',
  notes: 'Pepper, Cedar, Cacao | 10ml'
  },
  {
  id: 49,
  brand: 'Paco Rabanne',
  name: 'One Million Gold',
  type: 'designer',
  originalPrice: 130,
  price: 100,
  image: 'assets/one_million_gold.webp',
  notes: 'Mandarin, Cinnamon, Leather | 10ml'
  },
  {
  id: 66,
  brand: 'Paco Rabanne',
  name: 'Phantom Elixir de RABANNE',
  type: 'designer',
  originalPrice: 110,
  price: 90,
  image: 'assets/phantom_elixir.webp',
  notes: 'Lavender, Vanilla, Patchouli | 10ml'
  },
  {
  id: 51,
  brand: 'Paco Rabanne',
  name: 'Fame',
  type: 'designer',
  originalPrice: 135,
  price: 100,
  image: 'assets/fame.webp',
  notes: 'Mango, Jasmine, Incense | 10ml'
  },
  {
  id: 65,
  brand: 'Paco Rabanne',
  name: 'One Million Rabanne Woman',
  type: 'designer',
  originalPrice: 120,
  price: 100,
  image: 'assets/one_million_woman.webp',
  notes: 'Neroli, Raspberry, Jasmine | 10ml'
  },
  {
  id: 52,
  brand: 'Tom Ford',
  name: 'Ombre Leather',
  type: 'niche',
  originalPrice: 250,
  price: 199,
  image: 'assets/ombre_leather_v1.webp',
  secondaryImage: 'assets/ombre_leather_v2.webp',
  notes: 'Black Leather, Cardamom, Patchouli | 10ml'
  },
  {
  id: 54,
  brand: 'Kayali',
  name: 'Invite Only Amber 23',
  type: 'niche',
  originalPrice: 170,
  price: 120,
  image: 'assets/kayali_invite_only.webp',
  notes: 'Amber, Chocolate, Vanilla | 10ml'
  },
  {
  id: 67,
  brand: 'Kayali',
  name: 'Lovefest Burning Cherry 48',
  type: 'niche',
  originalPrice: 200,
  price: 140,
  image: 'assets/kayali_lovefest.webp',
  notes: 'Burning Cherry, Raspberry, Praline | 10ml'
  },
  {
  id: 70,
  brand: 'Lancome',
  name: 'La Vie Est Belle EDP',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/la_vie_belle_elixir.webp',
  notes: 'Raspberry, Violet, Cocoa | 10ml'
  },
  {
  id: 73,
  brand: 'Lancome',
  name: 'La Vie Est Belle Elixir',
  type: 'designer',
  originalPrice: 180,
  price: 150,
  image: 'assets/la_vie_belle_elixir_new.webp',
  notes: 'Raspberry, Violet, Cocoa | 10ml'
  },
  {
  id: 56,
  brand: 'Gucci',
  name: 'Flora Gorgeous Jasmine',
  type: 'designer',
  originalPrice: 150,
  price: 125,
  image: 'assets/gucci_flora_jasmine.webp',
  notes: 'Jasmine, Pear, Brown Sugar | 10ml'
  },
  {
  id: 57,
  brand: 'Gucci',
  name: 'Flora Gorgeous Gardenia',
  type: 'designer',
  originalPrice: 170,
  price: 140,
  image: 'assets/gucci_flora_gardenia.webp',
  notes: 'Gardenia, Red Berries, Frangipani | 10ml'
  },
  {
  id: 58,
  brand: 'Prada',
  name: 'PRADA PARADOX EDP',
  type: 'designer',
  originalPrice: 200,
  price: 150,
  image: 'assets/prada_paradox.webp',
  notes: 'Neroli, Amber, Musk | 10ml'
  },
  {
  id: 59,
  brand: 'Jimmy Choo',
  name: 'I WANT CHOO EDP',
  type: 'designer',
  originalPrice: 180,
  price: 140,
  image: 'assets/i_want_choo.webp',
  notes: 'Peach, Jasmine, Vanilla | 10ml'
  },
  {
  id: 69,
  brand: 'Givenchy',
  name: 'Gentleman Society',
  type: 'designer',
  originalPrice: 150,
  price: 120,
  image: 'assets/gentleman_society.webp',
  notes: 'Sage, Wild Narcissus, Vetiver | 10ml'
  },
  {
  id: 60,
  brand: 'Dolce & Gabbana',
  name: 'Light Blue',
  type: 'designer',
  originalPrice: 150,
  price: 100,
  image: 'assets/light_blue.webp',
  notes: 'Lemon, Marigold, Musk | 10ml'
  },
  ];

  let activeFilter = 'all';

  function handleSortChange(value) {
  currentSort = value;
  renderProductGrid(activeFilter);
  }

  function renderProductGrid(filter) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = '';

  let items = filter === 'all' ? products : products.filter(p => p.type === filter);

  if (currentSort === 'name') {
  items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'price-asc') {
  items.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
  items.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'brand') {
  items.sort((a, b) => a.brand.localeCompare(b.brand));
  } else if (currentSort === 'sells') {
  items.sort((a, b) => (b.sells || 0) - (a.sells || 0));
  }

  items.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-product-id', product.id);

  const clickAttr = product.secondaryImage ? `onclick="swapProductImage(${product.id}, this)" style="cursor: pointer;"` : '';

  card.innerHTML = `
  <div class="product-image" ${clickAttr}>
  <img src="${product.image}" alt="${product.name}">
  ${product.secondaryImage ? '<div class="image-hint">Click to flip</div>' : ''}
  </div>
  <div class="product-info">
  <div class="product-brand">${product.brand}</div>
  <h3 class="product-name">${product.name}</h3>
  <div class="product-pricing">
  <span class="original-price">${product.originalPrice} DH</span>
  <span class="product-price">${product.price} <span class="currency">DH</span></span>
  </div>
  <p style="font-size: 0.7rem; opacity: 0.5; margin-top: 10px;">${product.notes}</p>
  <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Collection</button>
  </div>
  `;
  grid.appendChild(card);
  });

  ScrollTrigger.refresh();
  }

  let currentSort = 'default';
  function initProductGrid(filter = 'all') {
  renderProductGrid(filter);
  }

  function setFilter(filter) {
  activeFilter = filter;

  const collectionsView = document.getElementById('collections-view');
  const productsView = document.getElementById('products-section');

  if (filter === 'back') {
  collectionsView.style.display = 'block';
  productsView.style.display = 'none';
  gsap.from('#collections-view', { opacity: 0, y: 50, duration: 0.8 });
  } else {
  collectionsView.style.display = 'none';
  productsView.style.display = 'block';
  initProductGrid(filter);

  let title = 'Collection';
  if (filter === 'niche') title = 'Exclusive Niche';
  else if (filter === 'designer') title = 'Designer Collection';
  else if (filter === 'pack') title = 'Luxury Sets & Packs';
  else if (filter === 'all') title = 'Full Collection';

  document.getElementById('collection-title').innerText = title;

  gsap.from('#products-section', { opacity: 0, y: 50, duration: 0.8 });
  }
  }

  function initMarquee() {
  const marqueeInner = document.getElementById('marquee-content');
  if (!marqueeInner) return;

  // Featured products for marquee
  const featured = products.filter(p => [1, 2, 3, 9, 11, 22, 23, 27, 42, 47, 52].includes(p.id));

  // Double items for seamless loop
  const items = [...featured, ...featured];

  marqueeInner.innerHTML = items.map(p => `
  <div class="marquee-item" onclick="showProduct(${p.id})">
  <img src="${p.image}" alt="${p.name}">
  <div class="m-info">
  <div class="m-name">${p.name}</div>
  <div class="m-price">${p.price} DH</div>
  <button class="marquee-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Collection</button>
  </div>
  </div>
  `).join('');

  // Pause on Touch (Mobile)
  marqueeInner.addEventListener('touchstart', () => marqueeInner.classList.add('paused'));
  marqueeInner.addEventListener('touchend', () => marqueeInner.classList.remove('paused'));
  }

  function showProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  // 1. Switch to the correct collection view
  setFilter(product.type || 'all');

  // 2. Wait for DOM to render and scroll
  setTimeout(() => {
  const card = document.querySelector(`.product-card[data-product-id="${id}"]`);
  if (card) {
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // 3. Add highlight effect
  card.classList.add('highlight-product');
  setTimeout(() => card.classList.remove('highlight-product'), 3000);
  }
  }, 100);
  }

  // 7. Search Logic
  function toggleSearch() {
  const overlay = document.getElementById('search-overlay');
  const isVisible = overlay.style.display === 'flex';
  overlay.style.display = isVisible ? 'none' : 'flex';
  if (!isVisible) {
  document.getElementById('search-input').focus();
  gsap.from('#search-input', { y: 20, opacity: 0, duration: 0.5 });
  }
  }

  function handleSearch(query) {
  const resultsContainer = document.getElementById('search-results');
  if (!query) {
  resultsContainer.innerHTML = '';
  return;
  }

  const matches = products.filter(p => 
  p.name.toLowerCase().includes(query.toLowerCase()) || 
  p.brand.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);

  resultsContainer.innerHTML = matches.map(p => {
  const clickAttr = p.secondaryImage ? `onclick="event.stopPropagation(); swapProductImage(${p.id}, this.querySelector('.s-img-container'))"` : '';
  return `
  <div class="search-result-item" onclick="selectSearchResult(${p.id})">
  <div class="s-img-container" ${p.secondaryImage ? 'style="cursor: pointer;"' : ''}>
  <img src="${p.image}" alt="${p.name}">
  </div>
  <div>
  <div style="font-weight: 700;">${p.name}</div>
  <div style="font-size: 0.8rem; opacity: 0.6;">${p.brand} | ${p.price} DH</div>
  ${p.secondaryImage ? '<div style="font-size: 0.6rem; color: var(--primary-color);">Click image to flip</div>' : ''}
  </div>
  </div>
  `;
  }).join('');
  }

  function selectSearchResult(id) {
  toggleSearch();
  showProduct(id);
  }

  // 5. Scroll Animations
  function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.section-header', {
  scrollTrigger: {
  trigger: '.products',
  start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
  });

  gsap.from('.product-card', {
  scrollTrigger: {
  trigger: '.product-grid',
  start: 'top 80%',
  },
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1.2,
  ease: 'power4.out'
  });
  }

  // 6. Cart Logic
  function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
  existing.quantity += 1;
  } else {
  cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCart();

  // Feedback animation
  gsap.from('.cart-btn', { scale: 1.5, duration: 0.3, ease: 'back.out(2)' });
  }

  function updateCartUI() {
  const list = document.getElementById('cart-items-list');
  const totalEl = document.getElementById('cart-total-amount');
  const countEl = document.getElementById('cart-count');

  if (!list) return;

  if (cart.length === 0) {
  list.innerHTML = '<p class="empty-cart-msg">Your collection is empty.</p>';
  totalEl.innerText = '0 DH';
  countEl.innerText = '0';
  return;
  }

  let subtotal = 0;
  list.innerHTML = cart.map(item => {
  subtotal += item.price * item.quantity;
  return `
  <div class="cart-item">
  <img src="${item.image}" alt="${item.name}">
  <div class="cart-item-info">
  <div class="cart-item-name">${item.name}</div>
  <div class="cart-item-price">${item.price} DH</div>
  <div class="cart-item-controls">
  <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
  <span>${item.quantity}</span>
  <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
  <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
  </div>
  </div>
  </div>
  `;
  }).join('');

  const finalTotal = subtotal - (subtotal * discount);
  totalEl.innerText = `${Math.round(finalTotal)} DH ${discount > 0 ? '(Discount Applied)' : ''}`;
  countEl.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  function applyCoupon() {
  const code = document.getElementById('coupon-input').value.trim().toUpperCase();
  if (code === 'WELCOME10') {
  discount = 0.10;
  alert('Coupon Applied! 10% Discount added.');
  updateCartUI();
  } else {
  alert('Invalid Coupon Code');
  }
  }

  function showCheckout() {
  if (cart.length === 0) return;
  document.getElementById('checkout-form').style.display = 'block';
  document.getElementById('checkout-btn').style.display = 'none';
  document.getElementById('cart-items-list').style.display = 'none';
  document.getElementById('coupon-section').style.display = 'none';
  }

  function submitOrder() {
  const fname = document.getElementById('order-fname').value;
  const lname = document.getElementById('order-lname').value;
  const city = document.getElementById('order-city').value;
  const address = document.getElementById('order-address').value;
  const phone = document.getElementById('order-phone').valconst address = document.getElementById('order-address').value;
  const phone = document.getElementById('order-phone').value;

  if (!fname || !lname || !city || !address || !phone) {
  alert('Please fill in all details.');
  return;
  }

  const orderData = {
  customer: `${fname} ${lname}`,
  city: city,
  address: address,
  phone: phone,
  items: cart,
  total: document.getElementById('cart-total-amount').innerText,
  status: 'pending',
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  source: window.location.hostname
  };

  // 1. Save to Firebase
  if (window.db) {
  window.db.collection('orders').add(orderData)
  .then(() => {
  console.log("Order saved to database");
  // Increment sells for products
  cart.forEach(item => {
  const product = products.find(p => p.id === item.id);
  if (product) product.sells = (product.sells || 0) + item.quantity;
  });
  })
  .catch(error => console.error("Error saving order:", error));
  }

  // 2. WhatsApp Notification
  let itemsText = cart.map(item => `- ${item.name} x${item.quantity} (${item.price} DH)`).join('%0A');
  let totalText = document.getElementById('cart-total-amount').innerText;

  const message = `*NEW ORDER - URPERFUME*%0A%0A*Customer:* ${fname} ${lname}%0A*Phone:* ${phone}%0A*City:* ${city}%0A*Address:* ${address}%0A%0A*Items:*%0A${itemsText}%0A%0A*Total:* ${totalText}%0A%0A_Verification call pending (FR/AR)_`;

  const waUrl = `https://wa.me/212752214437?text=${message}`;
  window.open(waUrl, '_blank');

  // Clear cart after order
  cart = [];
  discount = 0;
  updateCartUI();
  closeCart();

  // Reset form
  document.getElementById('checkout-form').style.display = 'none';
  document.getElementById('checkout-btn').style.display = 'block';
  document.getElementById('cart-items-list').style.display = 'block';
  document.getElementById('coupon-section').style.display = 'flex';
  }

  function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
  removeFromCart(id);
  } else {
  updateCartUI();
  }
  }

  function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
  }

  function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer || !overlay) return;

  overlay.classList.add('active');
  // Use gsap.to for absolute control and clear any previous conflicting transforms
  gsap.to(drawer, { right: 0, x: 0, duration: 0.6, ease: 'expo.out' });
  }

  function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer || !overlay) return;

  overlay.classList.remove('active');
  // Slide back out to the right
  const width = window.innerWidth <= 768 ? '100%' : '450px';
  gsap.to(drawer, { right: `-${width}`, duration: 0.5, ease: 'power2.in' });
  }

  // 8. Theme Toggle
  function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('urperfume-theme', isLight ? 'light' : 'dark');

  // Animate icon rotation
  gsap.to('.theme-toggle svg', { rotate: isLight ? 180 : 0, duration: 0.5, ease: 'back.out' });
  }

  // Check saved theme
  if (localStorage.getItem('urperfume-theme') === 'light') {
  document.body.classList.add('light-mode');
  }

  function resetView() {
  const homeSections = ['home', 'collections-view', 'about'];
  homeSections.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.style.display = (id === 'home' ? 'flex' : 'block');
  });

  document.querySelector('.marquee-section').style.display = 'block';
  document.getElementById('products-section').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function swapProductImage(productId, element) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.secondaryImage) return;

  const img = element.querySelector('img');
  const isOriginal = img.src.includes(product.image);
  const newSrc = isOriginal ? product.secondaryImage : product.image;

  // Premium Flip Animation
  gsap.to(img, {
  rotateY: 90,
  opacity: 0,
  scale: 0.8,
  duration: 0.3,
  ease: 'power2.in',
  onComplete: () => {
  img.src = newSrc;
  gsap.fromTo(img, 
  { rotateY: -90, opacity: 0, scale: 0.8 },
  { rotateY: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }
  );
  }
  });
  }

  // --- ADMIN PANEL LOGIC ---
  let logoClicks = 0;
  let lastClickTime = 0;
  let currentAdmin = null;

  function initAdminAccess() {
  const logo = document.querySelector('.logo');
  if (!logo) return;

  logo.style.cursor = 'pointer';
  logo.addEventListener('click', () => {
  const now = Date.now();
  if (now - lastClickTime > 2000) logoClicks = 0;

  logoClicks++;
  lastClickTime = now;

  if (logoClicks === 7) {
  logoClicks = 0;
  openAdminLogin();
  }
  });
  }

  function openAdminLogin() {
  document.getElementById('admin-login-modal').style.display = 'flex';
  document.getElementById('admin-password').value = '';
  document.getElementById('login-error').style.display = 'none';
  }

  function closeAdminLogin() {
  document.getElementById('admin-login-modal').style.display = 'none';
  }

  function attemptAdminLogin() {
  const pass = document.getElementById('admin-password').value;
  const error = document.getElementById('login-error');

  if (pass === '7C6E42c178@#') {
  currentAdmin = { name: 'Med Boali', role: 'Boss' };
  loginSuccess();
  } else if (pass === '0673989454') {
  currentAdmin = { name: 'Co-Admin', role: 'Assistant' };
  loginSuccess();
  } else {
  error.style.display = 'block';
  }
  }

  function loginSuccess() {
  closeAdminLogin();
  document.getElementById('admin-panel').style.display = 'flex';
  document.getElementById('admin-role-name').innerText = currentAdmin.name;
  document.getElementById('admin-role-label').innerText = currentAdmin.role === 'Boss' ? 'Master Admin' : 'Order Manager';
  document.getElementById('nav-settings').style.display = currentAdmin.role === 'Boss' ? 'block' : 'none';
  showAdminTab('orders');
  }

  function logoutAdmin() {
  document.getElementById('admin-panel').style.display = 'none';
  currentAdmin = null;
  }

  function showAdminTab(tab) {
  const content = document.getElementById('admin-content');
  const title = document.getElementById('admin-tab-title');
  document.querySelectorAll('.admin-nav-item').forEach(btn => btn.classList.remove('active'));

  if (event && event.target && event.target.classList.contains('admin-nav-item')) {
  event.target.classList.add('active');
  }

  if (tab === 'orders') {
  title.innerText = 'Orders Dashboard';
  loadOrders();
  } else if (tab === 'stats') {
  title.innerText = 'Boutique Statistics';
  loadStats();
  } else if (tab === 'settings') {
  title.innerText = 'Site Settings';
  loadSettings();
  }
  }

  function loadOrders() {
  const content = document.getElementById('admin-content');
  content.innerHTML = '<div style="color:rgba(255,255,255,0.5); text-align:center; padding: 50px;">Connecting to Firestore...</div>';

  if (!window.db) {
  content.innerHTML = '<div style="color:#ff4d4d; text-align:center; padding: 50px;">Firebase not connected. Check firebase-config.js</div>';
  return;
  }

  window.db.collection('orders').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  content.innerHTML = '';
  if (snapshot.empty) {
  content.innerHTML = '<div style="color:rgba(255,255,255,0.3); text-align:center; padding: 50px;">No orders in database.</div>';
  return;
  }

  snapshot.forEach(doc => {
  const order = doc.data();
  const id = doc.id;
  const itemsHtml = order.items.map(item => `
  <div class="order-item-row">
  <span>${item.name} x${item.quantity}</span>
  <span>${item.price} DH</span>
  </div>
  `).join('');

  const card = document.createElement('div');
  card.className = 'order-card';
  card.innerHTML = `
  <div class="order-header">
  <span class="order-id">ID: ${id.substring(0, 8)}</span>
  <span class="order-status status-${order.status}">${order.status}</span>
  </div>
  <div class="order-details">
  <div class="order-customer">
  <h4>${order.customer}</h4>
  <p><p>Phone: ${order.phone}</p>
  <p>City: ${order.city}</p>
  <p>Address: ${order.address}</p>
  <p style="font-size: 0.7rem; opacity: 0.4; margin-top: 5px;">Source: ${order.source}</p>
  </div>
  <div class="order-items">
  <h4>Order Content</h4>
  ${itemsHtml}
  <div class="order-item-row" style="margin-top: 15px; border-top: 2px solid rgba(212,175,55,0.2); font-weight: 700; padding-top: 10px;">
  <span>GRAND TOTAL</span>
  <span style="color: var(--primary-color);">${order.total}</span>
  </div>
  </div>
  </div>
  <div class="order-actions">
  ${order.status === 'pending' ? `
  <button class="accept-btn" onclick="updateOrderStatus('${id}', 'accepted')">ACCEPT ORDER</button>
  <button class="refuse-btn" onclick="updateOrderStatus('${id}', 'refused')">REFUSE</button>
  ` : ''}
  </div>
  `;
  content.appendChild(card);
  });
  }, error => {
  content.innerHTML = `<div style="color:#ff4d4d; text-align:center; padding: 50px;">Error: ${error.message}</div>`;
  });
  }

  function updateOrderStatus(id, status) {
  if (!window.db) return;
  window.db.collection('orders').doc(id).update({ status: status });
  }

  function loadStats() {
  const content = document.getElementById('admin-content');
  const sortedBySells = [...products].sort((a, b) => (b.sells || 0) - (a.sells || 0)).slice(0, 5);
  let topHtml = sortedBySells.map(p => `<div class="order-item-row"><span>${p.name}</span><span>${p.sells || 0} Sells</span></div>`).join('');

  content.innerHTML = `
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px;">
  <div class="order-card"><h3>Top Sellers</h3><div style="margin-top:20px;">${topHtml}</div></div>
  <div class="order-card"><h3>Site Analytics</h3><p style="opacity:0.5; margin-top:20px;">Connected to Firebase Live Stats.</p></div>
  </div>
  `;
  }

  function loadSettings() {
  const content = document.getElementById('admin-content');
  content.innerHTML = `
  <div class="order-card">
  <h3>Admin Management</h3>
  <p style="opacity:0.6; margin-bottom: 20px;">Master Control Panel - Med Boali</p>
  <div style="display:flex; gap: 20px;">
  <button class="btn primary-btn" style="padding: 10px 20px;">Change Security Key</button>
  <button class="btn secondary-btn" style="padding: 10px 20px;">Reset Statistics</button>
  </div>
  </div>
  `;
  }

  function refreshOrders() { loadOrders(); }

  document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
  initProductGrid('all');
  initScrollAnimations();
  initAdminAccess();

  // Close cart on overlay click
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  });
  
