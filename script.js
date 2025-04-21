document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const products = [
        { name: "Monstera", price: 150, img: "assets/images/monstera.jpg", desc: "Büyük yapraklarıyla iç mekanın yıldızı." },
        { name: "Sukulent", price: 120, img: "assets/images/sukulent.jpg", desc: "Az bakım isteyen şık bir bitki." },
        { name: "Bonsai", price: 300, img: "assets/images/bonsai.jpg", desc: "Minyatür ağaç sanatı." },
        { name: "Altın Kamış Palmiyesi", price: 300, img: "assets/images/altinkamispalmiyesi.jpg", desc: "Zarif yapraklarıyla iç mekanlara tropikal bir hava katar." },
        { name: "Kaktüs", price: 120, img: "assets/images/kaktüs.jpg", desc: "Güneşli alanları sever ve suya az ihtiyaç duyar." },
        { name: "Aloe Vera", price: 120, img: "assets/images/aloeVera.jpg", desc: "Şifalı etkisiyle bilinir, bakımı ise oldukça basittir." },
        { name: "Dörtlü Mini Bitkiler", price: 400, img: "assets/images/4lup.jpg", desc: "Küçük ve şık yapılarıyla dekoratif bir etki yaratır." },
        { name: "Salon Sarmaşığı", price: 300, img: "assets/images/salonsarmasigi.jpg", desc: "Havadar ortamları sever ve bakımı kolaydır." },
        { name: "Philodendron", price: 300, img: "assets/images/Philodendron.jpg", desc: "Tropikal havasıyla mekânlara ferahlık katar." },
        { name: "Lavanta", price: 250, img: "assets/images/lavanta.jpg", desc: "Hoş kokusu ve rahatlatıcı etkisiyle popülerdir." },
        { name: "Zebrina", price: 600, img: "assets/images/zebrina.jpg", desc: "Canlı renkleriyle dikkat çeker ve bakımı oldukça kolaydır." },
        { name: "Areka Palmiyesi", price: 380, img: "assets/images/areka.jpg", desc: "Tropikal havasıyla iç mekanlara ferahlık katar." }
    ];

    function renderProducts() {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card bg-white shadow-md rounded-lg p-2 text-xs";

            productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-full h-40 object-cover rounded-md">
            <h3 class="text-sm font-semibold mt-2">${product.name}</h3>
            <p class="text-gray-600 text-xs">${product.desc}</p>
            <span class="block text-green-600 font-bold mt-1">₺${product.price}</span>
            <button class="bg-green-500 text-white py-1 px-2 rounded mt-2 hover:bg-green-600 transition text-xs">Sepete Ekle</button>
        `;
        


            productList.appendChild(productCard);
        });
    }

    renderProducts();
});
