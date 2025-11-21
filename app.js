// Gikan - Cultural Preservation Platform
// State Management (In-Memory)

const state = {
  user: {
    points: 0,
    badges: [],
    completedModules: [],
    watchedVideos: [],
    readStories: [],
    streak: 0
  },
  cart: [],
  currentView: 'home'
};

// Data
const artisanProfiles = [
  {
    id: 1,
    name: "Lola Maria Santos",
    age: 68,
    location: "Catbalogan, Samar",
    craft: "Banig Mat Weaver",
    experienceYears: 50,
    bio: "Learned weaving from grandmother at age 12. Preserves pre-colonial patterns with spiritual meanings. Each mat tells a story passed down through five generations of weavers. The diamond pattern represents strength and protection, while the spiral symbolizes life's journey. Lola Maria uses only sustainably harvested pandan leaves from the forests near her village.",
    initials: "LM",
    image: "images/artisans/lola-maria.jpg"
  },
  {
    id: 2,
    name: "Tatay Rodrigo Villanueva",
    age: 55,
    location: "Calbayog, Samar",
    craft: "Traditional Potter",
    experienceYears: 35,
    bio: "Third-generation potter specializing in traditional water jars (banga) using ancient firing techniques. His family has been working with clay from the same riverbank for over 100 years. Tatay Rodrigo still uses the traditional wood-fired kiln his grandfather built, which creates unique patterns in the clay.",
    initials: "TR",
    image: "images/artisans/tatay-rodrigo.jpg"
  },
  {
    id: 3,
    name: "Ate Grace Reyes",
    age: 42,
    location: "Catarman, Samar",
    craft: "Basket Maker",
    experienceYears: 25,
    bio: "Harvests natural materials sustainably. Creates functional baskets and teaches youth workshops. Grace is passionate about passing her knowledge to the next generation and runs free weekend workshops for young people in her community. She believes in sustainable harvesting and replants materials as she goes.",
    initials: "AG",
    image: "images/artisans/ate-grace.jpg"
  },
  {
    id: 4,
    name: "Kuya Manuel Torres",
    age: 38,
    location: "Basey, Samar",
    craft: "Contemporary Weaver",
    experienceYears: 15,
    bio: "Represents youth-artisan bridge. Uses social media to market traditional products. Manuel learned weaving from his aunt and has modernized traditional patterns for contemporary products. He successfully bridges the gap between ancient techniques and modern aesthetics, creating products that appeal to younger generations.",
    initials: "KM",
    image: "images/artisans/kuya-manuel.jpg"
  },
  {
    id: 5,
    name: "Lola Carmen Agustin",
    age: 72,
    location: "Paranas, Samar",
    craft: "Natural Dye Expert",
    experienceYears: 55,
    bio: "Preserves plant-based dyeing knowledge. Creates vibrant colors from local plants. Lola Carmen knows over 50 different plants that produce dyes and can create colors that have been used for centuries. She's one of the last keepers of traditional dyeing knowledge and works tirelessly to document her recipes.",
    initials: "LC",
    image: "images/artisans/lola-carmen.jpg"
  }
];

const learningModules = [
  {
    id: 1,
    title: "Samar History &amp; Geography",
    duration: "15 min",
    icon: "🏝️",
    topics: ["Island formation", "Indigenous peoples", "Colonial history", "Modern development"],
    description: "Discover the rich history and diverse geography of Samar island, from its volcanic origins to its vibrant contemporary culture.",
    image: "images/modules/samar-history.jpg"
  },
  {
    id: 2,
    title: "Traditional Weaving: Banig &amp; Patadyong",
    duration: "20 min",
    icon: "🧵",
    topics: ["Materials (pandan)", "Weaving patterns", "Cultural meanings", "Contemporary uses"],
    description: "Learn the ancient art of banig mat and patadyong textile weaving, understanding the cultural significance of each pattern.",
    image: "images/modules/weaving.jpg"
  },
  {
    id: 3,
    title: "Pottery &amp; Ceramics of Samar",
    duration: "18 min",
    icon: "🏺",
    topics: ["Clay sources", "Traditional firing", "Banga creation", "Decorative techniques"],
    description: "Explore traditional pottery methods that have been used for centuries to create beautiful and functional ceramics.",
    image: "images/modules/pottery.jpg"
  },
  {
    id: 4,
    title: "Basket-Making &amp; Natural Materials",
    duration: "15 min",
    icon: "🧺",
    topics: ["Sustainable harvesting", "Weaving patterns", "Functional designs", "Storage uses"],
    description: "Master the techniques of sustainable basket-making using materials from Samar's forests.",
    image: "images/modules/basket-making.jpg"
  },
  {
    id: 5,
    title: "Waray Language Basics",
    duration: "12 min",
    icon: "💬",
    topics: ["Common phrases", "Pronunciation", "Cultural context", "Daily conversation"],
    description: "Learn essential Waray phrases and understand the linguistic heritage of Samar's people.",
    image: "images/modules/waray-language.jpg"
  },
  {
    id: 6,
    title: "Festivals &amp; Celebrations",
    duration: "25 min",
    icon: "🎉",
    topics: ["Pintados-Kasadyaan", "Religious festivals", "Harvest celebrations", "Cultural significance"],
    description: "Experience the vibrant festivals that celebrate Samar's cultural identity throughout the year.",
    image: "images/modules/festivals.jpg"
  },
  {
    id: 7,
    title: "Traditional Food &amp; Cuisine",
    duration: "20 min",
    icon: "🍲",
    topics: ["Seafood traditions", "Rice dishes", "Coconut-based foods", "Festival foods"],
    description: "Discover the delicious flavors of Samar's traditional cuisine and the stories behind each dish.",
    image: "images/modules/samar-food.jpg"
  },
  {
    id: 8,
    title: "Contemporary Artisan Stories",
    duration: "22 min",
    icon: "📖",
    topics: ["Youth engagement", "Modern adaptations", "Economic viability", "Future preservation"],
    description: "Meet the modern artisans keeping traditions alive while innovating for the future.",
    image: "images/modules/tatay-rodrigo.jpg"
  }
];

const products = [
  {
    id: 1,
    title: "Handwoven Banig Sleeping Mat",
    price: 1200,
    artisan: "Lola Maria Santos",
    artisanId: 1,
    category: "Weaving",
    story: "This banig follows a 200-year-old diamond pattern from Catbalogan representing strength and protection. The pandan leaves are harvested from sustainable forest sources, sun-dried for 3-5 days, then hand-softened. Each mat takes 5-7 days to complete. The diamond pattern has spiritual significance—it's traditionally woven into mats used during important life events like weddings and births. The intricate weaving technique requires years of practice to master, and Lola Maria learned it from her grandmother when she was just 12 years old. The natural pandan material keeps the mat cool and comfortable, perfect for Samar's tropical climate. This traditional craft has been practiced in the region for over 300 years, with patterns and techniques passed down through generations.",
    image: "images/products/banig-mat.jpg"
  },
  {
    id: 2,
    title: "Traditional Banga Water Jar",
    price: 850,
    artisan: "Tatay Rodrigo Villanueva",
    artisanId: 2,
    category: "Pottery",
    story: "This banga (water jar) is created using clay from Calbayog's riverbanks, the same clay source used by potters for over 300 years. The jar is hand-shaped using coiling technique, then fired in a traditional wood-burning kiln. Before refrigeration, every Samar household had 2-3 banga jars to keep water naturally cool. The clay's porous nature creates evaporative cooling. Tatay Rodrigo learned this craft from his father and grandfather, making him the third generation of potters in his family. The traditional firing technique creates unique patterns and colors in the clay that cannot be replicated by modern methods. Each banga is individually crafted, making every piece unique. The creation process takes about two weeks from clay preparation to final firing.",
    image: "images/products/banga-jar.jpg"
  },
  {
    id: 3,
    title: "Handwoven Market Basket",
    price: 650,
    artisan: "Ate Grace Reyes",
    artisanId: 3,
    category: "Basket-Making",
    story: "This sturdy market basket is woven from sustainably harvested rattan and bamboo strips. Grace harvests all materials herself, ensuring replanting and forest sustainability. The basket's design has remained unchanged for generations, proven perfect for carrying produce from market. The tight weave prevents small items from falling through while maintaining breathability for fresh vegetables and fruits. The handles are reinforced with traditional knotting techniques that distribute weight evenly. This basket represents both functional design and environmental responsibility. Grace teaches young people in her community these techniques, ensuring the tradition continues. Each basket takes approximately 3-4 days to complete and can last for many years with proper care.",
    image: "images/products/market-basket.jpg"
  },
  {
    id: 4,
    title: "Natural Dye Textile Collection",
    price: 980,
    artisan: "Lola Carmen Agustin",
    artisanId: 5,
    category: "Textiles",
    story: "These beautiful textiles are dyed using 100% natural plant-based dyes that Lola Carmen prepares herself. The deep blue comes from indigo plants, the warm yellow from turmeric root, and the rich red from native tree bark. Each color requires different preparation methods and dyeing times, knowledge that has been passed down through Carmen's family for five generations. The dyeing process is completely natural and environmentally friendly, using no synthetic chemicals. The colors are surprisingly vibrant and long-lasting when properly cared for. Carmen grows many of the dye plants in her own garden and harvests others sustainably from the forest. This textile collection represents centuries of accumulated knowledge about Samar's native plants and their properties.",
    image: "images/products/textile-collection.jpg"
  },
  {
    id: 5,
    title: "Contemporary Banig Wall Hanging",
    price: 1400,
    artisan: "Kuya Manuel Torres",
    artisanId: 4,
    category: "Weaving",
    story: "This modern interpretation of traditional banig weaving combines ancient patterns with contemporary design. Manuel uses traditional pandan weaving techniques but creates geometric patterns that appeal to modern aesthetics. The piece can be used as a decorative wall hanging, adding natural texture and cultural significance to any space. This represents the future of traditional crafts—respecting ancestral techniques while innovating for contemporary markets. Manuel's work helps make traditional crafts relevant to younger generations. The geometric pattern is inspired by traditional diamond motifs but arranged in a fresh, modern composition. Each piece takes about 8-10 days to complete and serves as both art and cultural preservation. Manuel's approach shows how traditional crafts can evolve while maintaining their cultural integrity.",
    image: "images/products/banig-wall.jpg"
  },
  {
    id: 6,
    title: "Decorative Clay Bowl Set",
    price: 720,
    artisan: "Tatay Rodrigo Villanueva",
    artisanId: 2,
    category: "Pottery",
    story: "This set of three nesting bowls showcases Tatay Rodrigo's mastery of traditional pottery techniques. Each bowl is hand-formed and features subtle decorative patterns pressed into the clay before firing. The natural clay color varies from piece to piece depending on its position in the kiln during firing. These bowls are both functional and beautiful, suitable for serving food or as decorative objects. The traditional shaping technique requires no pottery wheel—Rodrigo builds each bowl by hand using coiling and pinching methods his grandfather taught him. The clay comes from the same riverbank his family has used for three generations. Each bowl in the set complements the others while being unique. This set represents the continuation of pottery traditions that date back centuries in Samar.",
    image: "images/products/bowl-set.jpg"
  },
  {
    id: 7,
    title: "Traditional Rice Storage Basket",
    price: 890,
    artisan: "Ate Grace Reyes",
    artisanId: 3,
    category: "Basket-Making",
    story: "This large storage basket is designed specifically for keeping rice fresh and dry, a design perfected over centuries. The tight weave prevents moisture and pests from entering while allowing air circulation. Grace uses a special weaving pattern that her grandmother taught her, which creates extra strength in the base to support the weight of stored rice. The lid fits snugly but can be easily removed. Before modern storage containers, every household relied on baskets like these for food preservation. The materials are harvested sustainably and treated to be naturally pest-resistant. This basket can hold up to 20 kilos of rice and will last for decades with proper care. It represents traditional food storage wisdom adapted for modern use.",
    image: "images/products/rice-basket.jpg"
  },
  {
    id: 8,
    title: "Handwoven Table Runner",
    price: 580,
    artisan: "Lola Maria Santos",
    artisanId: 1,
    category: "Weaving",
    story: "This elegant table runner brings traditional banig patterns into the dining room. Lola Maria uses finer pandan strips than those used for sleeping mats, creating a more delicate weave suitable for table decoration. The pattern features the traditional 'ladder of life' motif, symbolizing progress and growth. This piece beautifully bridges traditional craft and contemporary home decor. The natural pandan material is durable and easy to clean, making it practical for daily use. The runner adds texture and cultural significance to any table setting. Creating this smaller piece still requires the same skill and attention to detail as larger mats. Each runner is unique, with slight variations in the natural pandan color adding character.",
    image: "images/products/tablerunner.jpg"
  }
];

const badges = [
  { id: 1, name: "Culture Curious", requirement: "Complete 1 module", icon: "🌱", unlocked: false },
  { id: 2, name: "Cultural Scholar", requirement: "Complete 3 modules", icon: "📚", unlocked: false },
  { id: 3, name: "Heritage Master", requirement: "Complete all 8 modules", icon: "👑", unlocked: false },
  { id: 4, name: "Story Collector", requirement: "Read 10 product stories", icon: "📖", unlocked: false },
  { id: 5, name: "Video Learner", requirement: "Watch 5 videos", icon: "🎬", unlocked: false },
  { id: 6, name: "Culture Guardian", requirement: "Earn 500+ points", icon: "🛡️", unlocked: false },
  { id: 7, name: "Artisan Supporter", requirement: "Make a purchase", icon: "💚", unlocked: false },
  { id: 8, name: "Community Builder", requirement: "Follow 3 artisans", icon: "🤝", unlocked: false }
];

const leaderboard = [
  { rank: 1, name: "Maria Cruz", points: 820, location: "Basey", initials: "MC", image: "images/profiles/maria-cruz.jpg" },
  { rank: 2, name: "John Reyes", points: 750, location: "Almagro", initials: "JR", image: "images/profiles/john-reyes.jpg" },
  { rank: 3, name: "Sarah Lopez", points: 680, location: "Tarangnan", initials: "SL", image: "images/profiles/sarah-lopez.jpg" },
  { rank: 4, name: "Pedro Santos", points: 590, location: "Zumarraga", initials: "PS", image: "images/profiles/pedro-santos.jpg" },
  { rank: 5, name: "Ana Garcia", points: 560, location: "Villareal", initials: "AG", image: "images/profiles/ana-garcia.jpg" },
  { rank: 6, name: "Rolando Torres", points: 520, location: "San Sebastian", initials: "MT", image: "images/profiles/miguel-torres.jpg" },
  { rank: 7, name: "Isabella Ramos", points: 480, location: "Catbalogan", initials: "IR", image: "images/profiles/isabella-ramos.jpg" },
  { rank: 8, name: "Carlos Villanueva", points: 450, location: "Santa Rita", initials: "CV", image: "images/profiles/carlos-villanueva.jpg" },
  { rank: 9, name: "Elena Martinez", points: 420, location: "Paranas", initials: "EM", image: "images/profiles/elena-martinez.jpg" },
  { rank: 10, name: "Dexter Agustin", points: 390, location: "Motiong", initials: "RA", image: "images/profiles/rafael-agustin.jpg" }
];

const culturalFeed = [
  { type: "video", title: "Traditional Banig Weaving Process", description: "Watch Lola Maria demonstrate the intricate art of pandan weaving", category: "Weaving", icon: "🧵", image: "images/feed/banig-weaving.jpg" },
  { type: "story", title: "Meet Tatay Rodrigo: Master Potter", description: "55 years of keeping ancient pottery traditions alive", category: "Artisan Story", icon: "👨‍🎨", image: "images/feed/tatay-rodrigo.jpg" },
  { type: "fact", title: "Did You Know?", description: "The diamond pattern in banig mats has been used for over 200 years and represents strength and protection", category: "Cultural Fact", icon: "💎", image: "images/feed/diamond-pattern.jpg" },
  { type: "festival", title: "Pintados-Kasadyaan Festival", description: "Celebrating Samar's rich heritage through dance and art every June", category: "Festival", icon: "🎉", image: "images/feed/pintados-festival.jpg" },
  { type: "video", title: "Natural Dyeing Techniques", description: "Lola Carmen shows how to create vibrant colors from local plants", category: "Dyeing", icon: "🎨", image: "images/feed/natural-dyeing.jpg" },
  { type: "story", title: "Ate Grace: Sustainable Harvesting", description: "Learn how traditional basket makers protect the forest", category: "Artisan Story", icon: "🌳", image: "images/feed/ate-grace.jpg" },
  { type: "fact", title: "Ancient Pottery", description: "Samar's pottery traditions date back over 300 years, using clay from the same riverbeds", category: "Cultural Fact", icon: "🏺", image: "images/feed/ancient-pottery.jpg" },
  { type: "video", title: "Basket Weaving Fundamentals", description: "Master the basic techniques of traditional basket making", category: "Basket-Making", icon: "🧺", image: "images/feed/basket-weaving.jpg" },
  { type: "festival", title: "Harvest Celebrations", description: "Traditional thanksgiving rituals after rice harvest season", category: "Festival", icon: "🌾", image: "images/feed/harvest-festival.jpg" },
  { type: "story", title: "Kuya Manuel: Youth Innovation", description: "How young artisans are modernizing traditional crafts", category: "Artisan Story", icon: "💡", image: "images/feed/kuya-manuel.jpg" },
  { type: "fact", title: "Waray Language", description: "Waray-Waray is spoken by over 3 million people across Eastern Visayas", category: "Cultural Fact", icon: "💬", image: "images/feed/waray-language.jpg" },
  { type: "video", title: "Traditional Pottery Firing", description: "See the ancient wood-fired kiln technique in action", category: "Pottery", icon: "🔥", image: "images/feed/pottery-firing.jpg" }
];

const videos = [
  { id: 1, title: "Introduction to Banig Weaving", category: "Weaving", duration: "8:45", artisan: "Lola Maria Santos", thumbnail: "images/thumb/sad.jpg" },
  { id: 2, title: "Preparing Pandan Leaves", category: "Weaving", duration: "6:30", artisan: "Lola Maria Santos", thumbnail: "images/thumb/pandan.jpg" },
  { id: 3, title: "Traditional Weaving Patterns", category: "Weaving", duration: "12:15", artisan: "Kuya Manuel Torres", thumbnail: "images/thumb/pattern-weav.jpg"  },
  { id: 4, title: "Advanced Banig Techniques", category: "Weaving", duration: "15:20", artisan: "Lola Maria Santos", thumbnail: "images/thumb/lola2.png" },
  { id: 5, title: "Clay Preparation and Processing", category: "Pottery", duration: "10:40", artisan: "Tatay Rodrigo Villanueva", thumbnail: "images/thumb/clayy.jpg" },
  { id: 6, title: "Hand-Building Pottery Techniques", category: "Pottery", duration: "14:25", artisan: "Tatay Rodrigo Villanueva", thumbnail: "images/thumb/caly-hand.jpg" },
  { id: 7, title: "Traditional Kiln Firing", category: "Pottery", duration: "9:15", artisan: "Tatay Rodrigo Villanueva", thumbnail: "images/thumb/fire.jpg" },
  { id: 8, title: "Sustainable Rattan Harvesting", category: "Basket-Making", duration: "7:50", artisan: "Ate Grace Reyes", thumbnail: "images/thumb/rattan.jpg" },
  { id: 9, title: "Basic Basket Weaving", category: "Basket-Making", duration: "11:30", artisan: "Ate Grace Reyes", thumbnail: "images/feed/basket-weaving.jpg" },
  { id: 10, title: "Functional Basket Designs", category: "Basket-Making", duration: "13:05", artisan: "Ate Grace Reyes", thumbnail: "images/thumb/basket-sign.jpg" },
  { id: 11, title: "Plant-Based Dye Preparation", category: "Natural Dyeing", duration: "10:20", artisan: "Lola Carmen Agustin", thumbnail: "images/feed/natural-dyeing.jpg" },
  { id: 12, title: "Natural Dyeing Process", category: "Natural Dyeing", duration: "16:45", artisan: "Lola Carmen Agustin", thumbnail: "images/feed/natural-dyeing.jpg" }
];

// Initialize App
function initApp() {
  updateHeader();
  setupEventListeners();
  navigateToView('home');
}

// Event Listeners
function setupEventListeners() {
  // Menu toggle
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sideMenu').classList.add('active');
  });
  
  document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('sideMenu').classList.remove('active');
  });
  
  // Side menu navigation
  document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = e.currentTarget.getAttribute('data-view');
      navigateToView(view);
      document.getElementById('sideMenu').classList.remove('active');
    });
  });
  
  // Bottom navigation
  document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = e.currentTarget.getAttribute('data-view');
      navigateToView(view);
      
      // Update active state
      document.querySelectorAll('.bottom-nav .nav-item').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });
  
  // Cart button
  document.getElementById('cartBtn').addEventListener('click', () => {
    navigateToView('cart');
  });
  
  // Gamification header clicks
  document.querySelector('.points-display').addEventListener('click', () => {
    navigateToView('profile');
  });
  
  document.querySelector('.badges-display').addEventListener('click', () => {
    navigateToView('profile');
  });
}

// Navigation
function navigateToView(viewName) {
  state.currentView = viewName;
  const mainContent = document.getElementById('mainContent');
  
  switch(viewName) {
    case 'home':
      renderDiscoveryFeed();
      break;
    case 'learn':
      renderLearningModules();
      break;
    case 'shop':
      renderMarketplace();
      break;
    case 'profile':
      renderProfile();
      break;
    case 'stories':
      renderArtisanStories();
      break;
    case 'videos':
      renderVideoLibrary();
      break;
    case 'earnings':
      renderEarningsDashboard();
      break;
    case 'cart':
      renderCart();
      break;
    case 'artisanLogin':
      renderArtisanUpload();
      break;
    default:
      renderDiscoveryFeed();
  }
}

// Update Header
function updateHeader() {
  document.getElementById('headerPoints').textContent = state.user.points;
  document.getElementById('headerBadges').textContent = state.user.badges.length;
  document.getElementById('cartCount').textContent = state.cart.length;
}

// Show Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Add Points
function addPoints(amount, reason) {
  state.user.points += amount;
  updateHeader();
  showToast(`+${amount} points! ${reason}`);
  checkBadges();
}

// Check and Unlock Badges
function checkBadges() {
  const completedModules = state.user.completedModules.length;
  const watchedVideos = state.user.watchedVideos.length;
  const readStories = state.user.readStories.length;
  const points = state.user.points;
  
  // Culture Curious
  if (completedModules >= 1 && !state.user.badges.includes(1)) {
    unlockBadge(1);
  }
  
  // Cultural Scholar
  if (completedModules >= 3 && !state.user.badges.includes(2)) {
    unlockBadge(2);
  }
  
  // Heritage Master
  if (completedModules >= 8 && !state.user.badges.includes(3)) {
    unlockBadge(3);
  }
  
  // Story Collector
  if (readStories >= 10 && !state.user.badges.includes(4)) {
    unlockBadge(4);
  }
  
  // Video Learner
  if (watchedVideos >= 5 && !state.user.badges.includes(5)) {
    unlockBadge(5);
  }
  
  // Culture Guardian
  if (points >= 500 && !state.user.badges.includes(6)) {
    unlockBadge(6);
  }
}

// Unlock Badge
function unlockBadge(badgeId) {
  state.user.badges.push(badgeId);
  const badge = badges.find(b => b.id === badgeId);
  updateHeader();
  showToast(`🎉 Badge Unlocked: ${badge.name}!`);
}

// VIEWS

// Discovery Feed (Feature 1)
function renderDiscoveryFeed() {
  const categories = ['All', 'Weaving', 'Pottery', 'Basket-Making', 'Festival', 'Artisan Story'];
  let selectedCategory = 'All';
  
  const html = `
    <div class="discovery-feed">
      <div class="feed-greeting" style="position: relative; overflow: hidden;">
  <!-- Background Image -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;">
    <img src="images/thumb/Thumb.jpg" 
         alt="" 
         style="width: 100%; height: 100%; object-fit: cover; opacity: 0.3;">
  </div>
  
  <!-- Content (on top of image) -->
  <div style="position: relative; z-index: 1;">
    <h2>Maupay nga Adlaw!</h2>
    <p>Welcome to the Gikan Cultural Gallery</p>
    <p style="font-size: var(--font-size-base); margin-top: var(--space-md); opacity: 0.9;">Explore 200 Years of Living Traditions</p>
  </div>
</div>

      
      <div class="feed-categories" id="feedCategories">
        ${categories.map(cat => `
          <button class="category-chip ${cat === 'All' ? 'active' : ''}" data-category="${cat}">
            ${cat}
          </button>
        `).join('')}
      </div>
      
      <div class="feed-cards" id="feedCards">
        ${culturalFeed.map((item, index) => `
          <div class="feed-card card" data-index="${index}" style="animation: fadeIn 0.6s ease ${index * 0.1}s both;">
            <div class="feed-card-image">
  <div class="feed-card-badge">${item.category}</div>
  ${item.image ? 
    `<img src="${item.image}" 
          alt="${item.title}" 
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;"
          onerror="this.style.display='none'; this.parentElement.innerHTML += '${item.icon}';">` 
    : item.icon}
</div>
            <div class="feed-card-content">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <button class="btn btn-primary" onclick="handleFeedCardClick(${index})">
                Explore Exhibition →
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
  
  // Category filtering
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      
      const category = e.target.getAttribute('data-category');
      filterFeedCards(category);
    });
  });
}

function filterFeedCards(category) {
  const cards = document.querySelectorAll('.feed-card');
  cards.forEach((card, index) => {
    const item = culturalFeed[index];
    if (category === 'All' || item.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function handleFeedCardClick(index) {
  const item = culturalFeed[index];
  
  if (item.type === 'video') {
    navigateToView('videos');
  } else if (item.type === 'story') {
    navigateToView('stories');
  } else if (item.category === 'Weaving') {
    openModuleDetail(2);
  } else {
    showToast('Content unlocked! +10 points');
    addPoints(10, 'Exploring cultural content');
  }
}

// Learning Modules (Feature 2)
function renderLearningModules() {
  const html = `
    <div>
      <h2 class="section-title">Museum Wing Galleries</h2>
      <p style="margin-bottom: var(--space-xl); color: var(--color-charcoal); text-align: center; font-style: italic; font-size: var(--font-size-lg);">
        Explore eight curated galleries dedicated to Samar's cultural heritage
      </p>
      
      <div class="modules-grid">
        ${learningModules.map(module => {
          const completed = state.user.completedModules.includes(module.id);
          const progress = completed ? 100 : 0;
          
          return `
            <div class="module-card ${completed ? 'completed' : ''}" onclick="openModuleDetail(${module.id})" style="animation: fadeIn 0.6s ease ${learningModules.indexOf(module) * 0.1}s both;">
              <div class="module-header">
                <div class="module-icon">${module.icon}</div>
                <div class="module-info">
                  <h3>${module.title}</h3>
                  <div class="module-duration" style="display: flex; align-items: center; gap: var(--space-xs); color: var(--color-charcoal); font-size: var(--font-size-sm);">⏱️ ${module.duration} Exhibition</div>
                </div>
              </div>
              
              <div class="module-progress">
                <div class="module-progress-label" style="font-weight: 600; color: ${completed ? 'var(--color-success)' : 'var(--color-charcoal)'}; margin-bottom: var(--space-sm);">${completed ? '✓ Gallery Visited' : 'Gallery Not Visited'}</div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
              </div>
              
              <div style="margin-top: var(--space-lg); padding-top: var(--space-lg); border-top: 1px solid rgba(212, 165, 116, 0.3);">
                <strong style="font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-base);">Exhibition Highlights:</strong>
                <ul style="margin-top: var(--space-sm); padding-left: var(--space-lg); color: var(--color-charcoal); line-height: 1.8;">
                  ${module.topics.slice(0, 2).map(topic => `<li style="margin-bottom: var(--space-xs);">${topic}</li>`).join('')}
                </ul>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
}

function openModuleDetail(moduleId) {
  const module = learningModules.find(m => m.id === moduleId);
  const completed = state.user.completedModules.includes(moduleId);
  
  const quizQuestions = [
    { question: `What is the main material used in ${module.title.split(':')[0]}?`, options: ['Pandan leaves', 'Cotton', 'Silk', 'Wool'], correct: 0 },
    { question: 'How long has this tradition been practiced in Samar?', options: ['50 years', '100 years', '200+ years', '500+ years'], correct: 2 },
    { question: 'Why is cultural preservation important?', options: ['Economic value', 'Identity &amp; heritage', 'Tourism', 'All of the above'], correct: 3 },
    { question: 'What does sustainability mean for artisans?', options: ['Fast production', 'Resource conservation', 'Modern tools', 'Urban migration'], correct: 1 },
    { question: 'How can youth help preserve culture?', options: ['Ignore traditions', 'Learn &amp; innovate', 'Move to cities', 'Buy imported goods'], correct: 1 }
  ];
  
  const modalHtml = `
    <div class="modal">
      <div class="modal-header">
        <h2>${module.icon} ${module.title}</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <!-- Video Section -->
        <div style="position: relative; padding: var(--space-xxl); border-radius: var(--radius-lg); text-align: center; color: var(--color-gallery-white); border: 3px solid var(--color-gold-accent); overflow: hidden; min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
  <!-- Blurred Background Image -->
  ${module.image ? 
    `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: url('${module.image}'); background-size: cover; background-position: center; filter: blur(15px); z-index: 0;"></div>` 
    : `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(27, 94, 120, 0.95), rgba(15, 60, 77, 0.95)); z-index: 0;"></div>`}
  
  <!-- Dark Overlay (makes text readable) -->
  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
  
  <!-- Content (stays on top) -->
  <div style="position: relative; z-index: 2;">
    <div style="font-size: 72px; margin-bottom: var(--space-lg); filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">▶️</div>
    <p style="font-family: var(--font-display); font-size: var(--font-size-xl); margin-bottom: var(--space-sm);">Cinematic Exhibition</p>
    <p style="font-size: var(--font-size-lg); opacity: 0.9;">${module.title}</p>
    <button class="btn btn-primary" onclick="watchModuleVideo(${moduleId})" style="margin-top: var(--space-lg); background: var(--color-gallery-white); color: var(--color-ocean-primary); box-shadow: var(--shadow-md);">
      ▶ Screen Now (${module.duration})
    </button>
  </div>
</div>

        </div>
        
        <!-- Content Section -->
        <div style="margin-bottom: var(--space-xl);">
          <h3 style="margin-bottom: var(--space-lg); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-sm);">📖 Exhibition Wall Text</h3>
          <div style="background: var(--color-gallery-white); padding: var(--space-xl); border-radius: var(--radius-lg); border: 3px solid var(--color-gold-accent); box-shadow: var(--shadow-sm);">
            <p style="margin-bottom: var(--space-lg); line-height: var(--line-height-relaxed); font-size: var(--font-size-base);">${module.description}</p>
            <p style="font-family: var(--font-display); font-weight: 600; color: var(--color-rust-primary); margin-bottom: var(--space-md);">Gallery Highlights:</p>
            <ul style="margin-top: var(--space-sm); padding-left: var(--space-xl); line-height: var(--line-height-relaxed);">
              ${module.topics.map(topic => `<li style="margin-bottom: var(--space-sm);">${topic}</li>`).join('')}
            </ul>
          </div>
        </div>
        
        <!-- Quiz Section -->
        <div>
          <h3 style="margin-bottom: var(--space-lg); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-sm);">✏️ Interactive Exhibition Station</h3>
          <div id="quizSection">
            ${quizQuestions.map((q, qIndex) => `
              <div style="background: var(--color-gallery-white); padding: var(--space-xl); border-radius: var(--radius-lg); margin-bottom: var(--space-lg); box-shadow: var(--shadow-md); border: 2px solid var(--color-gold-accent);">
                <p style="font-family: var(--font-display); font-weight: 400; font-size: var(--font-size-lg); color: var(--color-rust-primary); margin-bottom: var(--space-lg);">Question ${qIndex + 1}: ${q.question}</p>
                ${q.options.map((option, oIndex) => `
                  <label style="display: block; padding: var(--space-md) var(--space-lg); margin-bottom: var(--space-sm); cursor: pointer; border-radius: var(--radius-sm); background: var(--color-soft-cream); border: 2px solid transparent; transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--color-gold-accent)'; this.style.background='var(--color-gallery-white)';" onmouseout="if(!this.querySelector('input').checked) { this.style.borderColor='transparent'; this.style.background='var(--color-soft-cream)'; }">
                    <input type="radio" name="q${qIndex}" value="${oIndex}" style="margin-right: var(--space-md);">
                    <span style="line-height: var(--line-height-relaxed);">${option}</span>
                  </label>
                `).join('')}
              </div>
            `).join('')}
            
            <button class="btn btn-primary btn-lg" onclick="submitModuleQuiz(${moduleId}, ${JSON.stringify(quizQuestions.map(q => q.correct))})" style="width: 100%; margin-top: var(--space-lg);">
              ${completed ? '↻ Revisit Exhibition' : '✓ Complete Gallery Visit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = modalHtml;
  modalContainer.classList.add('active');
}

function watchModuleVideo(moduleId) {
  addPoints(20, 'Watched educational video');
  if (!state.user.watchedVideos.includes(moduleId)) {
    state.user.watchedVideos.push(moduleId);
  }
}

function submitModuleQuiz(moduleId, correctAnswers) {
  let score = 0;
  correctAnswers.forEach((correct, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === correct) {
      score++;
    }
  });
  
  const percentage = (score / correctAnswers.length) * 100;
  
  if (percentage >= 80) {
    if (!state.user.completedModules.includes(moduleId)) {
      state.user.completedModules.push(moduleId);
      addPoints(50, 'Module completed!');
      showToast(`🎉 Quiz passed! Score: ${score}/${correctAnswers.length}`);
      setTimeout(() => {
        closeModal();
        renderLearningModules();
      }, 2000);
    } else {
      showToast(`Great job! Score: ${score}/${correctAnswers.length}`);
    }
  } else {
    showToast(`Score: ${score}/${correctAnswers.length}. Need 80% to pass. Try again!`);
  }
}

// Artisan Stories (Feature 3)
function renderArtisanStories() {
  const html = `
    <div>
      <h2 class="section-title">Portrait Gallery</h2>
      <p style="margin-bottom: var(--space-xxl); color: var(--color-charcoal); text-align: center; font-style: italic; font-size: var(--font-size-lg);">
        Meet the master artisans preserving centuries of cultural heritage
      </p>
      
      <div class="stories-carousel">
        ${artisanProfiles.map(artisan => `
          <div class="story-item" onclick="openArtisanProfile(${artisan.id})">
            <div class="story-avatar" style="overflow: hidden;">
  ${artisan.image ? 
    `<img src="${artisan.image}" alt="${artisan.name}" style="width: 100%; height: 100%; object-fit: cover;">` 
    : artisan.initials}
</div>

            <div class="story-name">${artisan.name.split(' ')[1]}</div>
            <div class="story-craft">${artisan.craft}</div>
          </div>
        `).join('')}
      </div>
      
      <h3 style="margin: var(--space-xxl) 0 var(--space-xl); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; text-align: center; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-md);">Permanent Collection: Master Artisans</h3>
      
      <div style="display: grid; gap: var(--space-lg);">
        ${artisanProfiles.map(artisan => `
          <div class="card" style="cursor: pointer; animation: fadeIn 0.6s ease ${artisanProfiles.indexOf(artisan) * 0.1}s both;" onclick="openArtisanProfile(${artisan.id})">
            <div style="padding: var(--space-xl);">
              <div style="display: flex; gap: var(--space-xl); align-items: start;">
                <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--color-ocean-primary), rgba(27, 94, 120, 0.9)); color: var(--color-gallery-white); display: flex; align-items: center; justify-content: center; font-size: var(--font-size-xxl); font-weight: 400; flex-shrink: 0; border: 4px solid var(--color-gold-accent); overflow: hidden;">
  ${artisan.image ? 
    `<img src="${artisan.image}" alt="${artisan.name}" style="width: 100%; height: 100%; object-fit: cover;">` 
    : artisan.initials}
</div>

                <div style="flex: 1;">
                  <h3 style="font-family: var(--font-display); font-size: var(--font-size-xl); margin-bottom: var(--space-sm); color: var(--color-rust-primary); font-weight: 400;">${artisan.name}</h3>
                  <p style="color: var(--color-charcoal); font-size: var(--font-size-base); margin-bottom: var(--space-sm); font-style: italic;">
                    ${artisan.craft}
                  </p>
                  <p style="color: var(--color-charcoal); font-size: var(--font-size-sm); margin-bottom: var(--space-xs);">
                    📍 ${artisan.location}
                  </p>
                  <p style="color: var(--color-charcoal); font-size: var(--font-size-sm);">
                    🎖️ ${artisan.experienceYears} Years Experience
                  </p>
                  <button class="btn btn-outline" style="margin-top: var(--space-lg);" onclick="event.stopPropagation(); openArtisanProfile(${artisan.id})">
                    View Portrait Exhibition →
                  </button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
}

function openArtisanProfile(artisanId) {
  const artisan = artisanProfiles.find(a => a.id === artisanId);
  const artisanProducts = products.filter(p => p.artisanId === artisanId);
  
  const modalHtml = `
    <div class="modal">
      <div class="modal-header">
        <h2>${artisan.name}</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <!-- Profile Header -->
        <div style="background: linear-gradient(135deg, var(--color-rust-primary), var(--color-rust-dark)); padding: var(--space-xxl); border-radius: var(--radius-lg); color: var(--color-gallery-white); text-align: center; margin-bottom: var(--space-xl); box-shadow: var(--shadow-lg); border: 3px solid var(--color-gold-accent);">
          <div style="width: 140px; height: 140px; border-radius: 50%; background: var(--color-gallery-white); color: var(--color-rust-primary); margin: 0 auto var(--space-lg); display: flex; align-items: center; justify-content: center; font-size: var(--font-size-display); font-weight: 400; border: 6px solid var(--color-gold-accent); box-shadow: var(--shadow-frame);">
            ${artisan.initials}
          </div>
          <h2 style="font-family: var(--font-display); margin-bottom: var(--space-sm); font-weight: 400; font-size: var(--font-size-xxl);">${artisan.name}</h2>
          <p style="font-family: var(--font-display); font-size: var(--font-size-xl); opacity: 0.95; font-style: italic; margin-bottom: var(--space-sm);">${artisan.craft}</p>
          <p style="opacity: 0.9; font-size: var(--font-size-base);">📍 ${artisan.location}</p>
        </div>
        
        <!-- Video Section -->
        <div style="margin-bottom: var(--space-xl);">
          <h3 style="margin-bottom: var(--space-lg); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-sm);">🎬 Documentary Portrait</h3>
          <div style="background: linear-gradient(135deg, rgba(27, 94, 120, 0.95), rgba(15, 60, 77, 0.95)); padding: var(--space-xxl); border-radius: var(--radius-lg); text-align: center; color: var(--color-gallery-white); border: 3px solid var(--color-gold-accent); box-shadow: inset 0 0 20px rgba(0,0,0,0.2);">
            <div style="font-size: 72px; margin-bottom: var(--space-lg); filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">▶️</div>
            <p style="font-family: var(--font-display); font-size: var(--font-size-xl); margin-bottom: var(--space-sm);">The Life and Craft of</p>
            <p style="font-size: var(--font-size-lg); opacity: 0.9;">${artisan.name}</p>
            <button class="btn btn-primary" onclick="addPoints(10, 'Watched artisan story')" style="margin-top: var(--space-lg); background: var(--color-gallery-white); color: var(--color-ocean-primary); box-shadow: var(--shadow-md);">
              ▶ Screen Documentary
            </button>
          </div>
        </div>
        
        <!-- Biography -->
        <div style="margin-bottom: var(--space-xl);">
          <h3 style="margin-bottom: var(--space-lg); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-sm);">📖 Museum Placard</h3>
          <div style="background: var(--color-gallery-white); padding: var(--space-xl); border-radius: var(--radius-lg); line-height: var(--line-height-relaxed); border: 3px solid var(--color-gold-accent); box-shadow: var(--shadow-sm);">
            <p style="font-size: var(--font-size-base); margin-bottom: var(--space-lg);">${artisan.bio}</p>
            <div style="margin-top: var(--space-xl); padding-top: var(--space-xl); border-top: 2px solid var(--color-gold-accent); display: grid; gap: var(--space-md);">
              <p style="display: flex; align-items: center; gap: var(--space-md);"><strong style="font-family: var(--font-display); color: var(--color-rust-primary); min-width: 120px;">Experience:</strong> <span>${artisan.experienceYears} years</span></p>
              <p style="display: flex; align-items: center; gap: var(--space-md);"><strong style="font-family: var(--font-display); color: var(--color-rust-primary); min-width: 120px;">Specialty:</strong> <span>${artisan.craft}</span></p>
              <p style="display: flex; align-items: center; gap: var(--space-md);"><strong style="font-family: var(--font-display); color: var(--color-rust-primary); min-width: 120px;">Location:</strong> <span>${artisan.location}</span></p>
            </div>
          </div>
        </div>
        
        <!-- Products -->
        <div>
          <h3 style="margin-bottom: var(--space-lg); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-sm);">🏛️ Artisan's Collection</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-md);">
            ${artisanProducts.map(product => `
              <div style="background: var(--color-gallery-white); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); cursor: pointer; border: 2px solid var(--color-gold-accent); transition: all 0.3s ease;" onclick="closeModal(); setTimeout(() => openProductDetail(${product.id}), 300);" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='var(--shadow-lift)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-md)';">
                <div style="height: 140px; background: linear-gradient(135deg, rgba(212, 165, 116, 0.9), rgba(193, 77, 42, 0.8)); display: flex; align-items: center; justify-content: center; color: var(--color-gallery-white); font-weight: 400; padding: var(--space-lg); text-align: center; font-size: var(--font-size-sm); font-family: var(--font-display);">
                  ${product.title}
                </div>
                <div style="padding: var(--space-lg);">
                  <p style="font-family: var(--font-display); font-size: var(--font-size-xl); font-weight: 400; color: var(--color-forest-primary);">₱${product.price}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="btn btn-secondary" onclick="closeModal(); navigateToView('shop');" style="width: 100%; margin-top: var(--space-xl);">
            Explore Complete Collection →
          </button>
        </div>
        
        <div style="margin-top: var(--space-xxl); text-align: center; padding-top: var(--space-xl); border-top: 2px solid var(--color-gold-accent);">
          <button class="btn btn-primary" onclick="showToast('Following ${artisan.name}!')">
            ⭐ Add to Favorite Artisans
          </button>
        </div>
      </div>
    </div>
  `;
  
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = modalHtml;
  modalContainer.classList.add('active');
  
  addPoints(10, 'Read artisan story');
}

// Marketplace (Feature 9)
function renderMarketplace() {
  const html = `
    <div>
      <div class="marketplace-header">
        <h2 class="section-title">Curated Artifact Collection</h2>
        <div class="marketplace-filters">
          <select class="filter-select" id="categoryFilter">
            <option value="All">All Categories</option>
            <option value="Weaving">Weaving</option>
            <option value="Pottery">Pottery</option>
            <option value="Basket-Making">Basket-Making</option>
            <option value="Textiles">Textiles</option>
          </select>
          <select class="filter-select" id="sortFilter">
            <option value="popular">Most Popular</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      
      <div class="products-grid" id="productsGrid">
        ${products.map(product => `
          <div class="product-card" onclick="openProductDetail(${product.id})">
            <div class="product-image">
              ${product.image ? 
                `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.textContent='${product.title}';">` : product.title}
            </div>
            <div class="product-info">
              <h3 class="product-title">${product.title}</h3>
              <p class="product-artisan">By ${product.artisan}</p>
              <p class="product-price">₱${product.price}</p>
              <span class="product-story-badge">
                📖 Cultural Story
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
  
  // Filter and sort listeners
  document.getElementById('categoryFilter').addEventListener('change', filterProducts);
  document.getElementById('sortFilter').addEventListener('change', filterProducts);
}

function filterProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortFilter').value;
  
  let filtered = [...products];
  
  // Filter by category
  if (category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  // Sort
  if (sort === 'priceLow') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'priceHigh') {
    filtered.sort((a, b) => b.price - a.price);
  }
  
  // Re-render grid
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = filtered.map(product => `
    <div class="product-card" onclick="openProductDetail(${product.id})">
      <div class="product-image">${product.title}</div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-artisan">By ${product.artisan}</p>
        <p class="product-price">₱${product.price}</p>
        <span class="product-story-badge">
          📖 Cultural Story
        </span>
      </div>
    </div>
  `).join('');
}

// Product Detail (Features 7, 8, 9)
function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  const artisan = artisanProfiles.find(a => a.id === product.artisanId);
  
  // Track story reading
  if (!state.user.readStories.includes(productId)) {
    state.user.readStories.push(productId);
    setTimeout(() => addPoints(10, 'Read product story'), 500);
  }
  
  const artisanShare = Math.round(product.price * 0.85);
  const platformFee = Math.round(product.price * 0.08);
  const processingFee = Math.round(product.price * 0.07);
  const traditionalShare = Math.round(product.price * 0.40);
  
  const modalHtml = `
    <div class="modal">
      <div class="modal-header">
        <h2>${product.title}</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <!-- Product Image -->
        ${product.image ? 
  `<div style="border-radius: var(--radius-lg); overflow: hidden; margin-bottom: var(--space-lg); height: 300px; position: relative;">
<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%); pointer-events: none;"></div>

</div>` 
  : `<div style="background: linear-gradient(135deg, var(--color-accent-warm), var(--color-rust-light)); padding: var(--space-xxl); border-radius: var(--radius-lg); text-align: center; color: white; font-size: var(--font-size-xl); font-weight: 700; margin-bottom: var(--space-lg);">
    ${product.title}
  </div>`}

        
        <!-- Price & Artisan -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-lg); padding: var(--space-lg); background: var(--color-bg-light); border-radius: var(--radius-lg);">
          <div>
            <p style="font-size: var(--font-size-xxl); font-weight: 700; color: var(--color-forest-primary);">₱${product.price}</p>
            <p style="color: var(--color-text-secondary); margin-top: var(--space-xs);">By ${product.artisan}</p>
          </div>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">
            🛒 Add to Cart
          </button>
        </div>
        
        <!-- Cultural Story (MANDATORY) -->
        <div style="margin-bottom: var(--space-xl);">
          <h3 style="margin-bottom: var(--space-md); color: var(--color-rust-primary); display: flex; align-items: center; gap: var(--space-sm);">
            📖 Cultural Story
            <span style="background: var(--color-rust-primary); color: white; font-size: var(--font-size-xs); padding: 4px 8px; border-radius: var(--radius-sm);">Required Reading</span>
          </h3>
          <div style="background: white; padding: var(--space-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-rust-primary); line-height: 1.8; box-shadow: var(--shadow-sm);">
            <p>${product.story}</p>
          </div>
        </div>
        
        <!-- Transparent Pricing Calculator (Feature 7) -->
        <div style="margin-bottom: var(--space-xl);">
          <h3 style="margin-bottom: var(--space-md); color: var(--color-rust-primary);">💰 Fair Trade Pricing Breakdown</h3>
          <div style="background: var(--color-bg-light); padding: var(--space-lg); border-radius: var(--radius-lg);">
            <div style="display: grid; gap: var(--space-md); margin-bottom: var(--space-lg);">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-md); background: white; border-radius: var(--radius-md);">
                <span>Product Price</span>
                <strong style="font-size: var(--font-size-lg);">₱${product.price}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-md); background: var(--color-success); color: white; border-radius: var(--radius-md);">
                <span>✅ Artisan Receives (85%)</span>
                <strong style="font-size: var(--font-size-lg);">₱${artisanShare}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-md); background: white; border-radius: var(--radius-md);">
                <span>Platform Fee (8%)</span>
                <strong>₱${platformFee}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-md); background: white; border-radius: var(--radius-md);">
                <span>Processing Fee (7%)</span>
                <strong>₱${processingFee}</strong>
              </div>
            </div>
            
            <div style="background: rgba(193, 77, 42, 0.1); padding: var(--space-md); border-radius: var(--radius-md); border: 2px solid var(--color-rust-primary);">
              <p style="font-weight: 600; margin-bottom: var(--space-xs);">📊 Traditional Model Comparison</p>
              <p style="font-size: var(--font-size-sm);">With traditional middlemen, the artisan would only receive ₱${traditionalShare} (40%) of the sale price. <strong>Gikan ensures ${product.artisan} gets ₱${artisanShare - traditionalShare} more!</strong></p>
            </div>
          </div>
        </div>
        
        <!-- Artisan Shop Link (Feature 8) -->
        <div style="background: linear-gradient(135deg, var(--color-ocean-primary), var(--color-ocean-light)); padding: var(--space-lg); border-radius: var(--radius-lg); color: white;">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: white; color: var(--color-ocean-primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">
              ${artisan.initials}
            </div>
            <div style="flex: 1;">
              <h4 style="margin-bottom: var(--space-xs);">Meet the Artisan</h4>
              <p style="opacity: 0.95;">${artisan.name} - ${artisan.craft}</p>
            </div>
            <button class="btn" onclick="closeModal(); setTimeout(() => openArtisanProfile(${artisan.id}), 300);" style="background: white; color: var(--color-ocean-primary);">
              View Profile
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="closeModal()">Continue Shopping</button>
        <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">
          Add to Cart - ₱${product.price}
        </button>
      </div>
    </div>
  `;
  
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = modalHtml;
  modalContainer.classList.add('active');
}

// Cart (Feature 10)
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = state.cart.find(item => item.id === productId);
  
  if (existing) {
    existing.quantity++;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }
  
  updateHeader();
  showToast(`${product.title} added to cart!`);
}

function renderCart() {
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const html = `
    <div>
      <h2 class="section-title">Shopping Cart</h2>
      
      ${state.cart.length === 0 ? `
        <div style="text-align: center; padding: var(--space-xxl); background: white; border-radius: var(--radius-lg);">
          <div style="font-size: 64px; margin-bottom: var(--space-md);">🛒</div>
          <h3 style="margin-bottom: var(--space-md);">Your cart is empty</h3>
          <button class="btn btn-primary" onclick="navigateToView('shop')">
            Start Shopping
          </button>
        </div>
      ` : `
        <div style="display: grid; gap: var(--space-lg);">
          ${state.cart.map((item, index) => `
  <div class="card" style="padding: var(--space-lg);">
    <div style="display: flex; gap: var(--space-lg); align-items: center;">
      <div style="width: 100px; height: 100px; border-radius: var(--radius-md); overflow: hidden; flex-shrink: 0;">
        ${item.image ? 
          `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">` 
          : `<div style="width: 100%; height: 100%; background: linear-gradient(135deg, var(--color-accent-warm), var(--color-rust-light)); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--font-size-sm); text-align: center; padding: var(--space-sm);">${item.title}</div>`}
      </div>
      <div style="flex: 1;">
        <h3 style="margin-bottom: var(--space-xs); color: var(--color-forest-primary);">${item.title}</h3>
        <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--space-sm);">By ${item.artisan}</p>
        <p style="font-size: var(--font-size-lg); font-weight: 700; color: var(--color-forest-primary);">₱${item.price} × ${item.quantity} = ₱${item.price * item.quantity}</p>
      </div>
      <button class="btn btn-outline" onclick="removeFromCart(${index})" style="color: var(--color-error); border-color: var(--color-error);">
        Remove
      </button>
    </div>
  </div>
`).join('')}

          
          <div style="background: var(--color-bg-light); padding: var(--space-lg); border-radius: var(--radius-lg);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-lg);">
              <h3>Total</h3>
              <p style="font-size: var(--font-size-xxl); font-weight: 700; color: var(--color-forest-primary);">₱${total}</p>
            </div>
            <button class="btn btn-primary" onclick="openCheckout()" style="width: 100%;">
              Proceed to Checkout
            </button>
          </div>
        </div>
      `}
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  updateHeader();
  renderCart();
}

function openCheckout() {
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const modalHtml = `
    <div class="modal">
      <div class="modal-header">
        <h2>Checkout</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <h3 style="margin-bottom: var(--space-md); color: var(--color-rust-primary);">Shipping Information</h3>
        <div style="display: grid; gap: var(--space-md); margin-bottom: var(--space-lg);">
          <input type="text" placeholder="Full Name" class="filter-select" style="width: 100%;">
          <input type="text" placeholder="Address" class="filter-select" style="width: 100%;">
          <select class="filter-select" id="regionSelect" onchange="calculateShipping()">
            <option value="">Select Region</option>
            <option value="manila">Metro Manila - ₱120</option>
            <option value="cebu">Cebu - ₱150</option>
            <option value="davao">Davao - ₱180</option>
            <option value="samar">Samar - ₱100</option>
          </select>
        </div>
        
        <div id="shippingCalculation" style="display: none; background: var(--color-bg-light); padding: var(--space-lg); border-radius: var(--radius-lg); margin-bottom: var(--space-lg);">
          <h4 style="margin-bottom: var(--space-md);">Shipping Options</h4>
          <label style="display: block; padding: var(--space-md); background: white; border-radius: var(--radius-md); margin-bottom: var(--space-sm); cursor: pointer;">
            <input type="radio" name="shipping" value="standard" checked style="margin-right: var(--space-sm);">
            Standard Delivery (5-7 days) - <strong id="standardPrice">₱0</strong>
          </label>
          <label style="display: block; padding: var(--space-md); background: white; border-radius: var(--radius-md); cursor: pointer;">
            <input type="radio" name="shipping" value="express" style="margin-right: var(--space-sm);">
            Express Delivery (2-3 days) - <strong id="expressPrice">₱0</strong>
          </label>
        </div>
        
        <div style="background: var(--color-bg-light); padding: var(--space-lg); border-radius: var(--radius-lg);">
          <h4 style="margin-bottom: var(--space-md);">Order Summary</h4>
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-sm);">
            <span>Subtotal</span>
            <strong>₱${total}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-sm);">
            <span>Shipping</span>
            <strong id="shippingCost">₱0</strong>
          </div>
          <div style="border-top: 2px solid var(--color-border); padding-top: var(--space-md); margin-top: var(--space-md); display: flex; justify-content: space-between; align-items: center;">
            <h3>Total</h3>
            <h2 style="color: var(--color-forest-primary);" id="finalTotal">₱${total}</h2>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="completeOrder()">
          Place Order
        </button>
      </div>
    </div>
  `;
  
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = modalHtml;
  modalContainer.classList.add('active');
}

function calculateShipping() {
  const region = document.getElementById('regionSelect').value;
  const shippingPrices = {
    manila: 120,
    cebu: 150,
    davao: 180,
    samar: 100
  };
  
  if (region && shippingPrices[region]) {
    const standard = shippingPrices[region];
    const express = Math.round(standard * 1.5);
    
    document.getElementById('shippingCalculation').style.display = 'block';
    document.getElementById('standardPrice').textContent = `₱${standard}`;
    document.getElementById('expressPrice').textContent = `₱${express}`;
    document.getElementById('shippingCost').textContent = `₱${standard}`;
    
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('finalTotal').textContent = `₱${subtotal + standard}`;
  }
}

function completeOrder() {
  showToast('🎉 Order placed successfully! Thank you for supporting Samar artisans!');
  state.cart = [];
  updateHeader();
  closeModal();
  navigateToView('home');
}

// Profile/Gamification (Feature 4)
function renderProfile() {
  const userBadges = badges.filter(b => state.user.badges.includes(b.id));
  const lockedBadges = badges.filter(b => !state.user.badges.includes(b.id));
  
  const html = `
    <div>
      <div class="profile-header">
        <div class="profile-avatar">🏛️</div>
        <h2 style="font-family: var(--font-display); font-size: var(--font-size-xxl); font-weight: 400; position: relative; z-index: 1;">Cultural Explorer</h2>
        <p style="font-size: var(--font-size-lg); font-style: italic; position: relative; z-index: 1;">Continue your journey through Samar's heritage</p>
        
        <div class="profile-stats">
          <div class="stat-item">
            <div class="stat-value">${state.user.points}</div>
            <div class="stat-label">Points</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${state.user.badges.length}</div>
            <div class="stat-label">Badges</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${state.user.completedModules.length}/8</div>
            <div class="stat-label">Modules</div>
          </div>
        </div>
      </div>
      
      <h3 style="margin: var(--space-xxl) 0 var(--space-xl); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; text-align: center; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-md);">🏆 Achievement Gallery</h3>
      <div class="badges-grid">
        ${userBadges.map(badge => `
          <div class="badge-item">
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-requirement">${badge.requirement}</div>
          </div>
        `).join('')}
        ${lockedBadges.map(badge => `
          <div class="badge-item locked">
            <div class="badge-icon">🔒</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-requirement">${badge.requirement}</div>
          </div>
        `).join('')}
      </div>
      
      <h3 style="margin: var(--space-xxl) 0 var(--space-xl); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; text-align: center; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-md);">🏛️ Hall of Cultural Champions</h3>
      <div class="leaderboard">
        ${leaderboard.map(user => `
          <div class="leaderboard-item">
            <div class="leaderboard-rank">#${user.rank}</div>
            <div class="leaderboard-avatar" style="display: flex; align-items: center; justify-content: center; border-radius: 50%; overflow: hidden; width: 40px; height: 40px; min-width: 40px; background: var(--color-bg-light);">
  ${user.image ? 
    `<img src="${user.image}" alt="${user.name}" style="width: 100%; height: 100%; object-fit: cover;">` 
    : user.initials}
</div>
            <div class="leaderboard-info">
              <div class="leaderboard-name">${user.name}</div>
              <div class="leaderboard-location">${user.location}</div>
            </div>
            <div class="leaderboard-points">${user.points}</div>
          </div>
        `).join('')}
        
        <div class="leaderboard-item" style="background: var(--color-bg-light);">
          <div class="leaderboard-rank">-</div>
          <div class="leaderboard-avatar">👤</div>
          <div class="leaderboard-info">
            <div class="leaderboard-name">You</div>
            <div class="leaderboard-location">Keep earning points!</div>
          </div>
          <div class="leaderboard-points">${state.user.points}</div>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
}

// Video Library (Feature 5)
function renderVideoLibrary() {
  const html = `
    <div>
      <h2 class="section-title">Documentary Screening Room</h2>
      <p style="margin-bottom: var(--space-xxl); color: var(--color-charcoal); text-align: center; font-style: italic; font-size: var(--font-size-lg);">
        Cinematic presentations of traditional craft mastery
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--space-lg);">
        ${videos.map(video => `
          <div class="card" style="cursor: pointer; animation: fadeIn 0.6s ease ${videos.indexOf(video) * 0.05}s both; border: 3px solid var(--color-gold-accent);" onclick="openVideoPlayer(${video.id})">
            <div style="height: 220px; display: flex; align-items: center; justify-content: center; color: var(--color-gallery-white); font-size: 64px; position: relative; overflow: hidden; border-bottom: 3px solid var(--color-gold-accent);">
  <!-- Blurred Background Image -->
  ${video.thumbnail ? 
    `<div style="position: absolute; inset: 0; background-image: url('${video.thumbnail}'); background-size: cover; background-position: center; filter: blur(12px); z-index: 0;"></div>` 
    : `<div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(27, 94, 120, 0.95), rgba(15, 60, 77, 0.95)); z-index: 0;"></div>`}
  
  <!-- Dark Overlay -->
  <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.4); z-index: 1;"></div>
  
  <!-- Decorative Gradient -->
  <div style="position: absolute; inset: 0; background: radial-gradient(circle, rgba(212, 165, 116, 0.1), transparent 70%); z-index: 2;"></div>
  
  <!-- Play Button -->
  <span style="position: relative; z-index: 3; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">▶️</span>
</div>
            <div style="padding: var(--space-xl); background: var(--color-gallery-white);">
              <div style="display: inline-block; padding: var(--space-xs) var(--space-md); background: rgba(212, 165, 116, 0.15); color: var(--color-rust-primary); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: 600; margin-bottom: var(--space-md); border: 1px solid var(--color-gold-accent); letter-spacing: 0.05em; text-transform: uppercase;">${video.category}</div>
              <h3 style="font-family: var(--font-display); font-size: var(--font-size-lg); margin-bottom: var(--space-sm); font-weight: 400; color: var(--color-rust-primary);">${video.title}</h3>
              <p style="color: var(--color-charcoal); font-size: var(--font-size-sm); margin-bottom: var(--space-sm); font-style: italic;">Featuring ${video.artisan}</p>
              <p style="color: var(--color-charcoal); font-size: var(--font-size-sm); font-weight: 600;">🎬 ${video.duration} Documentary</p>
            </div>
          </div>
        `).join('')}
      </div>
      
    </div>
    <!-- Done Viewing Button -->
<div style="text-align: center; margin-top: var(--space-xxl);">
  <button class="btn btn-primary" onclick="showWatchTimeStats()" style="font-size: var(--font-size-lg); padding: var(--space-lg) var(--space-xxl);">
    ⏱️ Done Viewing - Show Watch Time
  </button>
</div>

  `;
  
  

  document.getElementById('mainContent').innerHTML = html;
  
}

function openVideoPlayer(videoId) {
  const video = videos.find(v => v.id === videoId);
  
  const modalHtml = `
    <div class="modal">
      <div class="modal-header">
        <h2>${video.title}</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div style="position: relative; padding: var(--space-xxl); border-radius: var(--radius-lg); text-align: center; color: var(--color-gallery-white); margin-bottom: var(--space-xl); border: 3px solid var(--color-gold-accent); overflow: hidden; min-height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
  <!-- Blurred Background -->
  ${video.thumbnail ? 
    `<div style="position: absolute; inset: 0; background-image: url('${video.thumbnail}'); background-size: cover; background-position: center; filter: blur(15px); z-index: 0;"></div>` 
    : `<div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(27, 94, 120, 0.95), rgba(15, 60, 77, 0.95)); z-index: 0;"></div>`}
  
  <!-- Dark Overlay -->
  <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
  
  <!-- Content -->
  <div style="position: relative; z-index: 2;">
    <div style="font-size: 96px; margin-bottom: var(--space-lg); filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">▶️</div>
    <h3 style="font-family: var(--font-display); margin-bottom: var(--space-sm); font-size: var(--font-size-xxl); font-weight: 400;">${video.title}</h3>
    <p style="font-size: var(--font-size-lg); opacity: 0.9;">Runtime: ${video.duration}</p>
  </div>
</div>

        
        <div style="background: var(--color-gallery-white); padding: var(--space-xl); border-radius: var(--radius-lg); margin-bottom: var(--space-xl); border: 3px solid var(--color-gold-accent); box-shadow: var(--shadow-sm);">
          <h4 style="font-family: var(--font-display); margin-bottom: var(--space-lg); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-sm);">Documentary Notes</h4>
          <p style="margin-bottom: var(--space-lg); line-height: var(--line-height-relaxed);">Learn ${video.title.toLowerCase()} with master artisan ${video.artisan}. This cinematic documentary captures traditional techniques passed down through generations.</p>
          
          <h4 style="font-family: var(--font-display); margin-bottom: var(--space-md); margin-top: var(--space-xl); color: var(--color-rust-primary); font-size: var(--font-size-lg); font-weight: 400;">Featured Items:</h4>
          <ul style="padding-left: var(--space-xl); color: var(--color-charcoal); line-height: var(--line-height-relaxed);">
            <li style="margin-bottom: var(--space-sm);">Natural materials from Samar forests</li>
            <li style="margin-bottom: var(--space-sm);">Traditional handcrafted tools</li>
            <li style="margin-bottom: var(--space-sm);">Centuries-old techniques</li>
          </ul>
        </div>
        
        <button class="btn btn-primary" onclick="markVideoComplete(${videoId})" style="width: 100%;">
          ✓ Add to Viewed Collection (+20 points)
        </button>
      </div>
    </div>
  `;
  
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = modalHtml;
  modalContainer.classList.add('active');
}

function markVideoComplete(videoId) {
  if (!state.user.watchedVideos.includes(videoId)) {
    state.user.watchedVideos.push(videoId);
    addPoints(20, 'Completed video tutorial');
  } else {
    showToast('Video already completed!');
  }
  closeModal();
}

function calculateTotalWatchTime() {
  const watchedVideos = state.user.watchedVideos.map(id => 
    videos.find(v => v.id === id)
  ).filter(v => v !== undefined);
  
  let totalMinutes = 0;
  let totalSeconds = 0;
  
  watchedVideos.forEach(video => {
    const [mins, secs] = video.duration.split(':').map(Number);
    totalMinutes += mins;
    totalSeconds += secs;
  });
  
  totalMinutes += Math.floor(totalSeconds / 60);
  totalSeconds = totalSeconds % 60;
  
  return {
    minutes: totalMinutes,
    seconds: totalSeconds,
    formatted: `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`,
    count: watchedVideos.length
  };
}

function showWatchTimeStats() {
  const existingModal = document.querySelector('.stats-modal-overlay');
  if (existingModal) existingModal.remove();
  
  const stats = calculateTotalWatchTime();
  
  const modalHTML = `
    <div class="stats-modal-overlay" style="position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;background:rgba(0,0,0,0.7)!important;display:flex!important;align-items:center!important;justify-content:center!important;z-index:99999!important;padding:20px">
      <div style="background:#fff!important;max-width:380px;width:95%;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,0.5);overflow:hidden;max-height:85vh;overflow-y:auto">
        <div style="padding:16px;border-bottom:2px solid #D4A574;display:flex;justify-content:space-between;align-items:center;background:#fff">
          <h2 style="margin:0;color:#A84F2F;font-size:18px">Viewing Statistics</h2>
          <button onclick="document.querySelector('.stats-modal-overlay').remove()" style="background:none;border:none;font-size:28px;cursor:pointer;color:#666;padding:0;width:32px;height:32px">&times;</button>
        </div>
        <div style="padding:20px;background:#fff">
          <div style="background:linear-gradient(135deg,#1B5E78,#0F3C4D);padding:24px;border-radius:10px;text-align:center;color:#fff;margin-bottom:16px;border:2px solid #D4A574">
            <h3 style="font-size:36px;margin:0 0 6px 0;color:#fff">${stats.formatted}</h3>
            <p style="font-size:14px;margin:0;color:#fff">Total Watch Time</p>
            <p style="font-size:12px;margin:6px 0 0 0;color:rgba(255,255,255,0.8)">${stats.minutes} mins ${stats.seconds} secs</p>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
            <div style="background:#F8F6F3;padding:16px;border-radius:10px;text-align:center;border:2px solid #D4A574">
              <div style="font-size:24px;font-weight:700;color:#1B5E78;margin-bottom:6px">${stats.count}</div>
              <div style="font-size:11px;color:#626C7C">Videos Watched</div>
            </div>
            <div style="background:#F8F6F3;padding:16px;border-radius:10px;text-align:center;border:2px solid #D4A574">
              <div style="font-size:24px;font-weight:700;color:#1B5E78;margin-bottom:6px">${videos.length}</div>
              <div style="font-size:11px;color:#626C7C">Total Videos</div>
            </div>
          </div>
          <div style="background:#fff;padding:16px;border-radius:10px;border:2px solid #D4A574">
            <div style="display:flex;justify-content:space-between;margin-bottom:10px">
              <span style="font-weight:600;font-size:12px">Completion Progress</span>
              <span style="color:#1B5E78;font-weight:700;font-size:14px">${Math.round((stats.count/videos.length)*100)}%</span>
            </div>
            <div style="background:#F8F6F3;height:10px;border-radius:999px;overflow:hidden">
              <div style="background:linear-gradient(90deg,#1B5E78,#32B8C6);height:100%;width:${(stats.count/videos.length)*100}%"></div>
            </div>
            <p style="margin:12px 0 0 0;text-align:center;color:#626C7C;font-size:11px">${stats.count===videos.length?'Congratulations! You\'ve watched all videos!':`${videos.length-stats.count} more video${videos.length-stats.count>1?'s':''} to go!`}</p>
          </div>
          <button onclick="document.querySelector('.stats-modal-overlay').remove()" style="width:100%;margin-top:16px;padding:12px;background:linear-gradient(135deg,#1B5E78,#32B8C6);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer">Continue Learning</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}



function closeStatsModal() {
  const modal = document.querySelector('.stats-modal-overlay');
  if (modal) modal.remove();
}


// Separate close function
function closeStatsModal() {
  const modal = document.querySelector('.stats-modal');
  if (modal) {
    modal.remove();
  }
}




// Earnings Dashboard (Feature 6)
function renderEarningsDashboard() {
  const html = `
    <div>
      <h2 class="section-title">Transparency Exhibition</h2>
      <p style="margin-bottom: var(--space-xxl); color: var(--color-charcoal); text-align: center; font-style: italic; font-size: var(--font-size-lg);">
        Discover how Gikan ensures fair compensation for master artisans
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-xl); margin-bottom: var(--space-xxl);">
        <div class="card" style="padding: var(--space-xxl); text-align: center; background: var(--color-gallery-white); border: 3px solid var(--color-gold-accent); animation: fadeIn 0.6s ease both;">
          <div style="font-family: var(--font-display); font-size: var(--font-size-display); font-weight: 400; color: var(--color-forest-primary); margin-bottom: var(--space-md);">₱22,000</div>
          <p style="color: var(--color-charcoal); font-size: var(--font-size-base); font-weight: 600; letter-spacing: 0.02em;">Average Monthly Income</p>
        </div>
        <div class="card" style="padding: var(--space-xxl); text-align: center; background: var(--color-gallery-white); border: 3px solid var(--color-gold-accent); animation: fadeIn 0.6s ease 0.1s both;">
          <div style="font-family: var(--font-display); font-size: var(--font-size-display); font-weight: 400; color: var(--color-forest-primary); margin-bottom: var(--space-md);">85%</div>
          <p style="color: var(--color-charcoal); font-size: var(--font-size-base); font-weight: 600; letter-spacing: 0.02em;">Revenue to Artisans</p>
        </div>
        <div class="card" style="padding: var(--space-xxl); text-align: center; background: var(--color-gallery-white); border: 3px solid var(--color-gold-accent); animation: fadeIn 0.6s ease 0.2s both;">
          <div style="font-family: var(--font-display); font-size: var(--font-size-display); font-weight: 400; color: var(--color-forest-primary); margin-bottom: var(--space-md);">127</div>
          <p style="color: var(--color-charcoal); font-size: var(--font-size-base); font-weight: 600; letter-spacing: 0.02em;">Artifacts Acquired</p>
        </div>
        <div class="card" style="padding: var(--space-xxl); text-align: center; background: var(--color-gallery-white); border: 3px solid var(--color-gold-accent); animation: fadeIn 0.6s ease 0.3s both;">
          <div style="font-family: var(--font-display); font-size: var(--font-size-display); font-weight: 400; color: var(--color-forest-primary); margin-bottom: var(--space-md);">12</div>
          <p style="color: var(--color-charcoal); font-size: var(--font-size-base); font-weight: 600; letter-spacing: 0.02em;">Master Artisans</p>
        </div>
      </div>
      
      <div class="card" style="padding: var(--space-xxl); margin-bottom: var(--space-xl); border: 3px solid var(--color-gold-accent);">
        <h3 style="margin-bottom: var(--space-xl); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-md);">Exhibit A: Revenue Distribution</h3>
        <div style="display: grid; gap: var(--space-md);">
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-xs);">
              <span>Artisan Share</span>
              <strong style="color: var(--color-success);">85%</strong>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 85%; background: var(--color-success);"></div>
            </div>
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-xs);">
              <span>Platform Fee</span>
              <strong>8%</strong>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 8%; background: var(--color-ocean-primary);"></div>
            </div>
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-xs);">
              <span>Processing Fee</span>
              <strong>7%</strong>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 7%; background: var(--color-accent-warm);"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card" style="padding: var(--space-xxl); border: 3px solid var(--color-gold-accent);">
        <h3 style="margin-bottom: var(--space-xl); font-family: var(--font-display); color: var(--color-rust-primary); font-size: var(--font-size-xl); font-weight: 400; border-bottom: 2px solid var(--color-gold-accent); padding-bottom: var(--space-md);">Exhibit B: Model Comparison</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
          <div style="text-align: center; padding: var(--space-lg); background: rgba(74, 124, 89, 0.1); border-radius: var(--radius-lg);">
            <div style="font-size: 48px; margin-bottom: var(--space-md);">✅</div>
            <h4 style="margin-bottom: var(--space-sm); color: var(--color-success);">Gikan Model</h4>
            <div style="font-size: var(--font-size-xl); font-weight: 700; color: var(--color-success); margin-bottom: var(--space-sm);">₱18,000</div>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Average monthly income</p>
          </div>
          <div style="text-align: center; padding: var(--space-lg); background: rgba(184, 62, 47, 0.1); border-radius: var(--radius-lg);">
            <div style="font-size: 48px; margin-bottom: var(--space-md);">❌</div>
            <h4 style="margin-bottom: var(--space-sm); color: var(--color-error);">Traditional Middlemen</h4>
            <div style="font-size: var(--font-size-xl); font-weight: 700; color: var(--color-error); margin-bottom: var(--space-sm);">₱8,000</div>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Average monthly income</p>
          </div>
        </div>
        <div style="margin-top: var(--space-lg); padding: var(--space-lg); background: var(--color-bg-light); border-radius: var(--radius-lg); text-align: center;">
          <p style="font-weight: 600; color: var(--color-forest-primary);">Gikan artisans earn 125% more than traditional models!</p>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
}

// Artisan Upload (Feature 11)
function renderArtisanUpload() {
  const html = `
    <div>
      <h2 class="section-title">Artisan Content Upload</h2>
      <p style="margin-bottom: var(--space-lg); color: var(--color-text-secondary);">
        Share your craft and story with the world
      </p>
      
      <div class="card" style="padding: var(--space-xl);">
        <form id="artisanUploadForm" onsubmit="return handleArtisanUpload(event);">
          <div style="margin-bottom: var(--space-lg);">
            <label style="display: block; font-weight: 600; margin-bottom: var(--space-sm);">Product Name *</label>
            <input type="text" id="productName" class="filter-select" placeholder="e.g., Handwoven Banig Mat" required style="width: 100%;">
          </div>
          
          <div style="margin-bottom: var(--space-lg);">
            <label style="display: block; font-weight: 600; margin-bottom: var(--space-sm);">Category *</label>
            <select id="productCategory" class="filter-select" required style="width: 100%;">
              <option value="">Select category</option>
              <option value="Weaving">Weaving</option>
              <option value="Pottery">Pottery</option>
              <option value="Basket-Making">Basket-Making</option>
              <option value="Textiles">Textiles</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div style="margin-bottom: var(--space-lg);">
            <label style="display: block; font-weight: 600; margin-bottom: var(--space-sm);">Price (₱) *</label>
            <input type="number" id="productPrice" class="filter-select" placeholder="e.g., 1200" required style="width: 100%;" min="1">
          </div>
          
          <div style="margin-bottom: var(--space-lg);">
            <label style="display: block; font-weight: 600; margin-bottom: var(--space-sm);">Product Images *</label>
            <div style="border: 2px dashed var(--color-border); padding: var(--space-xl); border-radius: var(--radius-lg); text-align: center; background: var(--color-bg-light); cursor: pointer;">
              <div style="font-size: 48px; margin-bottom: var(--space-md);">📷</div>
              <p style="color: var(--color-text-secondary);">Drag and drop images here or click to upload</p>
              <input type="file" multiple accept="image/*" style="display: none;">
            </div>
          </div>
          
          <div style="margin-bottom: var(--space-lg);">
            <label style="display: block; font-weight: 600; margin-bottom: var(--space-sm);">
              Cultural Story * 
              <span style="color: var(--color-error); font-size: var(--font-size-sm);">(Minimum 500 words)</span>
            </label>
            <div style="background: rgba(193, 77, 42, 0.1); padding: var(--space-md); border-radius: var(--radius-md); margin-bottom: var(--space-sm); border-left: 4px solid var(--color-rust-primary);">
              <p style="font-size: var(--font-size-sm); margin-bottom: var(--space-xs);"><strong>Your story should include:</strong></p>
              <ul style="font-size: var(--font-size-sm); padding-left: var(--space-lg); color: var(--color-text-secondary);">
                <li>Origin &amp; Tradition</li>
                <li>Cultural Meaning &amp; Significance</li>
                <li>Materials &amp; Traditional Techniques</li>
                <li>Your Personal Artisan Journey</li>
                <li>Contemporary Relevance</li>
              </ul>
            </div>
            <textarea id="culturalStory" class="filter-select" rows="12" placeholder="Share the cultural story behind your craft..." required style="width: 100%; resize: vertical; font-family: inherit; line-height: 1.6;"></textarea>
            <div style="text-align: right; margin-top: var(--space-xs);">
              <span id="wordCount" style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">0 / 500 words</span>
            </div>
          </div>
          
          <div style="margin-bottom: var(--space-lg);">
            <label style="display: block; font-weight: 600; margin-bottom: var(--space-sm);">Cultural Tags</label>
            <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm);">
              <label style="display: inline-flex; align-items: center; padding: var(--space-sm) var(--space-md); background: white; border: 2px solid var(--color-border); border-radius: var(--radius-lg); cursor: pointer;">
                <input type="checkbox" value="traditional" style="margin-right: var(--space-sm);">
                Traditional
              </label>
              <label style="display: inline-flex; align-items: center; padding: var(--space-sm) var(--space-md); background: white; border: 2px solid var(--color-border); border-radius: var(--radius-lg); cursor: pointer;">
                <input type="checkbox" value="sustainable" style="margin-right: var(--space-sm);">
                Sustainable
              </label>
              <label style="display: inline-flex; align-items: center; padding: var(--space-sm) var(--space-md); background: white; border: 2px solid var(--color-border); border-radius: var(--radius-lg); cursor: pointer;">
                <input type="checkbox" value="handmade" style="margin-right: var(--space-sm);">
                Handmade
              </label>
              <label style="display: inline-flex; align-items: center; padding: var(--space-sm) var(--space-md); background: white; border: 2px solid var(--color-border); border-radius: var(--radius-lg); cursor: pointer;">
                <input type="checkbox" value="heirloom" style="margin-right: var(--space-sm);">
                Heirloom Technique
              </label>
            </div>
          </div>
          
          <div style="display: flex; gap: var(--space-md);">
            <button type="button" class="btn btn-outline" style="flex: 1;" onclick="previewProduct()">
              👁️ Preview
            </button>
            <button type="submit" class="btn btn-primary" style="flex: 1;">
              ✅ Publish Product
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
  
  document.getElementById('mainContent').innerHTML = html;
  
  // Word count tracker
  document.getElementById('culturalStory').addEventListener('input', (e) => {
    const words = e.target.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    const counter = document.getElementById('wordCount');
    counter.textContent = `${words} / 500 words`;
    
    if (words >= 500) {
      counter.style.color = 'var(--color-success)';
    } else {
      counter.style.color = 'var(--color-text-secondary)';
    }
  });
}

function handleArtisanUpload(event) {
  event.preventDefault();
  
  const story = document.getElementById('culturalStory').value;
  const words = story.trim().split(/\s+/).filter(w => w.length > 0).length;
  
  if (words < 500) {
    showToast(`❌ Cultural story must be at least 500 words. Currently: ${words} words`);
    return false;
  }
  
  showToast('✅ Product published successfully! It will appear in the marketplace after review.');
  setTimeout(() => {
    navigateToView('shop');
  }, 2000);
  
  return false;
}

function previewProduct() {
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const story = document.getElementById('culturalStory').value;
  
  if (!name || !price) {
    showToast('Please fill in product name and price to preview');
    return;
  }
  
  const modalHtml = `
    <div class="modal">
      <div class="modal-header">
        <h2>Product Preview</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div style="background: linear-gradient(135deg, var(--color-accent-warm), var(--color-rust-light)); padding: var(--space-xxl); border-radius: var(--radius-lg); text-align: center; color: white; font-size: var(--font-size-xl); font-weight: 700; margin-bottom: var(--space-lg);">
          ${name}
        </div>
        
        <div style="padding: var(--space-lg); background: var(--color-bg-light); border-radius: var(--radius-lg); margin-bottom: var(--space-lg);">
          <p style="font-size: var(--font-size-xxl); font-weight: 700; color: var(--color-forest-primary); margin-bottom: var(--space-sm);">₱${price}</p>
          <p style="color: var(--color-text-secondary);">By Your Shop</p>
        </div>
        
        ${story ? `
          <div>
            <h3 style="margin-bottom: var(--space-md); color: var(--color-rust-primary);">📖 Cultural Story</h3>
            <div style="background: white; padding: var(--space-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-rust-primary); line-height: 1.8;">
              <p>${story}</p>
            </div>
          </div>
        ` : '<p style="color: var(--color-text-secondary); text-align: center; padding: var(--space-lg);">Add your cultural story to see it here</p>'}
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" onclick="closeModal()">Close Preview</button>
      </div>
    </div>
  `;
  
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = modalHtml;
  modalContainer.classList.add('active');
}

// Close Modal
function closeModal() {
  document.getElementById('modalContainer').classList.remove('active');
  document.getElementById('modalContainer').innerHTML = '';
}

// Initialize on load
window.addEventListener('DOMContentLoaded', initApp);
