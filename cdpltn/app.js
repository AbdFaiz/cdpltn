var dataProduct = {
    products: [
    {
        "id": 530,
        "name": "Blueberry Mineral Water",
        "description": "Refresh your body after a heavy workout with our blueberry-infused mineral water, packed with natural electrolytes.",
        "price": "12",
        "img_title": "blueberry-mineral-water",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 480,
        "name": "V-Neck T-Shirt",
        "description": "Our 100% cotton V-neck tee is a wardrobe staple. It’s pre-shrunk and features a tagless neck label.",
        "price": "25",
        "img_title": "v-neck-t-shirt-blue",
        "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 440,
        "name": "Multi-Vitamin 90 tabs",
        "description": "Ensure your body gets all the nutrients it needs. Contains 20 essential vitamins and minerals.",
        "price": "30",
        "img_title": "multi-vitamin-90-tabs",
        "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 528,
        "name": "Skater Shorts",
        "description": "Heavy-duty denim skater shorts with reinforced stitching. Perfect for the park or casual weekend wear.",
        "price": "45",
        "img_title": "skater-shorts",
        "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 477,
        "name": "Aura Blue Jogger",
        "description": "Lightweight and breathable, these joggers are perfect for a morning run or lounging.",
        "price": "55",
        "img_title": "aura-blue-jogger",
        "image": "https://images.unsplash.com/photo-1580487212485-867cbd653069?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 490,
        "name": "Stretchy Cotton Hoodie",
        "description": "A mix of style and flexibility. This hoodie uses a unique cotton-spandex blend.",
        "price": "65",
        "img_title": "stretchy-cotton-hoodie",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 462,
        "name": "Reflective Running Vest",
        "description": "Stay safe during night runs with this ultra-reflective vest. It’s water-resistant.",
        "price": "38",
        "img_title": "reflective-running-vest",
        "image": "https://images.unsplash.com/photo-1620067035548-c89650a3162b?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 510,
        "name": "Organic Protein Powder",
        "description": "Chocolate-flavored plant-based protein. 25g of protein per serving, soy-free.",
        "price": "40",
        "img_title": "organic-protein-powder",
        "image": "https://images.unsplash.com/photo-1593095191071-8876324ec882?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 505,
        "name": "Thermal Winter Cap",
        "description": "Micro-fleece lined cap designed to retain heat in sub-zero temperatures.",
        "price": "22",
        "img_title": "thermal-winter-cap",
        "image": "https://images.unsplash.com/photo-1576871337622-98d48d405370?auto=format&fit=crop&q=80&w=600"
    },
    {
        "id": 435,
        "name": "Bamboo Yoga Pants",
        "description": "Softest yoga pants on the market. Naturally anti-bacterial and incredibly stretchy.",
        "price": "48",
        "img_title": "bamboo-yoga-pants",
        "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=600"
    }
]
}

var app = new Vue({
    el: "#app",
    data: {
        product: dataProduct
    }
});