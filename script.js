// Tabs Switching Script
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active state
    tabs.forEach((t) => t.classList.remove("bg-green-600", "text-white"));
    tabs.forEach((t) => t.classList.add("bg-gray-100", "text-gray-600"));
    contents.forEach((c) => c.classList.add("hidden"));

    // Add active state to selected
    tab.classList.add("bg-green-600", "text-white");
    tab.classList.remove("bg-gray-100", "text-gray-600");
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

// Products Data
const products = [
  {
    title: "ARGAN SERUM OIL 60 ML",
    desc: "ARGAN OIL PROVIDES PROTECTION TO THE STRANDS DURING AND AFTER CHEMICAL...",
    rating: 4.8,
    image: "./assets/product.png",
  },
  {
    title: "COCONUT HAIR MASK 200 ML",
    desc: "Deeply nourishes hair with natural coconut oil and vitamins.",
    rating: 4.7,
    image: "./assets/product.png",
  },
  {
    title: "ARGAN SERUM OIL 60 ML",
    desc: "ARGAN OIL PROVIDES PROTECTION TO THE STRANDS DURING AND AFTER CHEMICAL...",
    rating: 4.8,
    image: "./assets/product.png",
  },
  {
    title: "COCONUT HAIR MASK 200 ML",
    desc: "Deeply nourishes hair with natural coconut oil and vitamins.",
    rating: 4.7,
    image: "./assets/product.png",
  },
  {
    title: "ARGAN SERUM OIL 60 ML",
    desc: "ARGAN OIL PROVIDES PROTECTION TO THE STRANDS DURING AND AFTER CHEMICAL...",
    rating: 4.8,
    image: "./assets/product.png",
  },
  {
    title: "COCONUT HAIR MASK 200 ML",
    desc: "Deeply nourishes hair with natural coconut oil and vitamins.",
    rating: 4.7,
    image: "./assets/product.png",
  },
  {
    title: "ARGAN SERUM OIL 60 ML",
    desc: "ARGAN OIL PROVIDES PROTECTION TO THE STRANDS DURING AND AFTER CHEMICAL...",
    rating: 4.8,
    image: "./assets/product.png",
  },
  {
    title: "COCONUT HAIR MASK 200 ML",
    desc: "Deeply nourishes hair with natural coconut oil and vitamins.",
    rating: 4.7,
    image: "./assets/product.png",
  },
  {
    title: "ARGAN SERUM OIL 60 ML",
    desc: "ARGAN OIL PROVIDES PROTECTION TO THE STRANDS DURING AND AFTER CHEMICAL...",
    rating: 4.8,
    image: "./assets/product.png",
  },
  {
    title: "COCONUT HAIR MASK 200 ML",
    desc: "Deeply nourishes hair with natural coconut oil and vitamins.",
    rating: 4.7,
    image: "./assets/product.png",
  },
];

// Container for products
const container = document.getElementById("premium");

// Render products
products.forEach((p) => {
  const card = `
     <div
        class="border border-gray-300 rounded-xl px-4 py-8 flex flex-col justify-between"
      >
        <div class="relative">
          <span
            class="absolute -top-6 right-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-full"
            >REQUESTED</span
          >
          <div
            class="bg-[#00235B] rounded-xl h-20 w-full rounded-xl mt-12"
          ></div>
          <img
            src="${p.image}"
            alt="${p.title}"
            class="absolute left-1/2 -top-4 transform -translate-x-1/2 h-32 object-contain"
          />
        </div>
        <div class="space-y-2 mt-6">
          <div class="flex items-center justify-between text-sm">
            <div class="text-yellow-400">★★★★★</div>
            <span class="font-bold text-gray-700">${p.rating}</span>
          </div>
          <h3 class="font-bold text-sm uppercase">${p.title}</h3>
          <p class="text-gray-500 text-xs">${p.desc}</p>
        </div>
        <button
          class="mt-4 bg-blue-900 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Send request
          </button>
      </div>
    `;
  container.innerHTML += card;
});
