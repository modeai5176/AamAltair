"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, MessageCircle, Plus, Minus, X } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image?: string;
  description: string;
  inSeason: boolean;
}

const products: Product[] = [
  // Root Vegetables
  {
    id: "potatoes",
    name: "Potatoes",
    category: "Root Vegetables",
    price: 200,
    unit: "per kg",
    description: "Fresh, organic potatoes perfect for cooking",
    inSeason: true,
  },
  {
    id: "sweet-potatoes",
    name: "Sweet Potatoes",
    category: "Root Vegetables",
    price: 250,
    unit: "per kg",
    description: "Nutritious sweet potatoes, rich in vitamins",
    inSeason: true,
  },
  {
    id: "beetroot",
    name: "Beetroot",
    category: "Root Vegetables",
    price: 300,
    unit: "per kg",
    description: "Fresh, earthy beetroot with vibrant color",
    inSeason: true,
  },
  {
    id: "carrot",
    name: "Carrot",
    category: "Root Vegetables",
    price: 300,
    unit: "per kg",
    description: "Sweet, crunchy carrots rich in beta-carotene",
    inSeason: true,
  },
  
  // Leafy Greens
  {
    id: "kale-sukumawiki",
    name: "Kale (Sukumawiki)",
    category: "Leafy Greens",
    price: 200,
    unit: "per bunch",
    description: "Traditional Kenyan kale, nutrient-dense and flavorful",
    inSeason: true,
  },
  {
    id: "spinach",
    name: "Spinach",
    category: "Leafy Greens",
    price: 200,
    unit: "per bunch",
    description: "Fresh, tender spinach leaves packed with iron",
    inSeason: true,
  },
  {
    id: "cabbage",
    name: "Cabbage",
    category: "Leafy Greens",
    price: 150,
    unit: "per head",
    description: "Crisp, fresh cabbage heads",
    inSeason: true,
  },
  {
    id: "cassava-leaves",
    name: "Cassava Leaves",
    category: "Leafy Greens",
    price: 150,
    unit: "per bunch",
    description: "Traditional cassava leaves for cooking",
    inSeason: true,
  },
  {
    id: "amaranth-terere",
    name: "Amaranth (Terere)",
    category: "Leafy Greens",
    price: 200,
    unit: "per bunch",
    description: "Nutritious amaranth leaves, a local favorite",
    inSeason: true,
  },
  {
    id: "african-nightshade-managu",
    name: "African Nightshade (Managu)",
    category: "Leafy Greens",
    price: 200,
    unit: "per bunch",
    description: "Traditional leafy green, rich in nutrients",
    inSeason: true,
  },
  {
    id: "arrow-root",
    name: "Arrow Root",
    category: "Leafy Greens",
    price: 250,
    unit: "per kg",
    description: "Fresh arrow root, versatile and nutritious",
    inSeason: true,
  },
  {
    id: "cowpeas-leaves-kunde",
    name: "Cowpeas Leaves (Kunde)",
    category: "Leafy Greens",
    price: 200,
    unit: "per bunch",
    description: "Tender cowpea leaves, a Kenyan staple",
    inSeason: true,
  },
  {
    id: "mustard-leaves",
    name: "Mustard Leaves",
    category: "Leafy Greens",
    price: 200,
    unit: "per bunch",
    description: "Peppery mustard greens, full of flavor",
    inSeason: true,
  },
  
  // Other Vegetables
  {
    id: "tomatoes",
    name: "Tomatoes",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Ripe, flavorful tomatoes grown without pesticides",
    inSeason: true,
  },
  {
    id: "cherry-tomatoes",
    name: "Cherry Tomatoes",
    category: "Other Vegetables",
    price: 400,
    unit: "per kg",
    description: "Sweet, bite-sized cherry tomatoes",
    inSeason: true,
  },
  {
    id: "onions",
    name: "Onions",
    category: "Other Vegetables",
    price: 250,
    unit: "per kg",
    description: "Fresh, pungent onions perfect for cooking",
    inSeason: true,
  },
  {
    id: "garlic",
    name: "Garlic",
    category: "Other Vegetables",
    price: 600,
    unit: "per kg",
    description: "Aromatic, fresh garlic bulbs",
    inSeason: true,
  },
  {
    id: "ginger",
    name: "Ginger",
    category: "Other Vegetables",
    price: 500,
    unit: "per kg",
    description: "Fresh, spicy ginger root",
    inSeason: true,
  },
  {
    id: "lemons",
    name: "Lemons",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Fresh, tangy lemons from our orchard",
    inSeason: true,
  },
  {
    id: "peppers-green",
    name: "Peppers - Green",
    category: "Other Vegetables",
    price: 400,
    unit: "per kg",
    description: "Fresh green capsicum peppers",
    inSeason: true,
  },
  {
    id: "peppers-yellow",
    name: "Peppers - Yellow",
    category: "Other Vegetables",
    price: 450,
    unit: "per kg",
    description: "Sweet yellow capsicum peppers",
    inSeason: true,
  },
  {
    id: "peppers-red",
    name: "Peppers - Red",
    category: "Other Vegetables",
    price: 450,
    unit: "per kg",
    description: "Sweet red capsicum peppers",
    inSeason: true,
  },
  {
    id: "demon-chillies",
    name: "Demon Chillies",
    category: "Other Vegetables",
    price: 500,
    unit: "per kg",
    description: "Extremely hot demon chillies",
    inSeason: true,
  },
  {
    id: "red-bullet-chillies",
    name: "Red Bullet Chillies",
    category: "Other Vegetables",
    price: 500,
    unit: "per kg",
    description: "Fiery red bullet chillies",
    inSeason: true,
  },
  {
    id: "scotch-bonnet-chillies",
    name: "Scotch Bonnet Chillies",
    category: "Other Vegetables",
    price: 500,
    unit: "per kg",
    description: "Hot scotch bonnet chillies",
    inSeason: true,
  },
  {
    id: "okra-bhinda",
    name: "Okra (Bhinda)",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Fresh, tender okra pods",
    inSeason: true,
  },
  {
    id: "greengrams-mung-daal",
    name: "Greengrams (Mung daal)",
    category: "Other Vegetables",
    price: 400,
    unit: "per kg",
    description: "Organic green grams, protein-rich",
    inSeason: true,
  },
  {
    id: "chayote-kaddu",
    name: "Chayote (Kaddu)",
    category: "Other Vegetables",
    price: 200,
    unit: "per kg",
    description: "Mild, versatile chayote squash",
    inSeason: true,
  },
  {
    id: "calabash-bottle-gourd-dudhi",
    name: "Calabash/Bottle Gourd (Dudhi)",
    category: "Other Vegetables",
    price: 200,
    unit: "per kg",
    description: "Fresh bottle gourd, light and nutritious",
    inSeason: true,
  },
  {
    id: "spiny-gourd-kankoda",
    name: "Spiny Gourd (Kankoda)",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Unique spiny gourd with distinct flavor",
    inSeason: true,
  },
  {
    id: "ivy-gourd-tindora",
    name: "Ivy Gourd (Tindora)",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Small, crunchy ivy gourd",
    inSeason: true,
  },
  {
    id: "bitter-gourd-karela",
    name: "Bitter Gourd (Karela)",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Bitter gourd, known for health benefits",
    inSeason: true,
  },
  {
    id: "pointed-gourd-parvar",
    name: "Pointed Gourd (Parvar)",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Tender pointed gourd",
    inSeason: true,
  },
  {
    id: "snake-gourd",
    name: "Snake Gourd",
    category: "Other Vegetables",
    price: 250,
    unit: "per kg",
    description: "Long, slender snake gourd",
    inSeason: true,
  },
  {
    id: "sponge-gourd",
    name: "Sponge Gourd",
    category: "Other Vegetables",
    price: 250,
    unit: "per kg",
    description: "Fresh sponge gourd",
    inSeason: true,
  },
  {
    id: "eggplant-round",
    name: "Eggplant - Round",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Fresh round eggplants (aubergine)",
    inSeason: true,
  },
  {
    id: "eggplant-long",
    name: "Eggplant - Long",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Fresh long eggplants (aubergine)",
    inSeason: true,
  },
  {
    id: "cluster-beans-guvar",
    name: "Cluster Beans (Guvar)",
    category: "Other Vegetables",
    price: 350,
    unit: "per kg",
    description: "Tender cluster beans",
    inSeason: true,
  },
  {
    id: "pigeonpeas-brown",
    name: "Pigeonpeas - Brown",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Organic brown pigeonpeas (tuver)",
    inSeason: true,
  },
  {
    id: "pigeonpeas-white",
    name: "Pigeonpeas - White",
    category: "Other Vegetables",
    price: 300,
    unit: "per kg",
    description: "Organic white pigeonpeas (tuver)",
    inSeason: true,
  },
  {
    id: "sutri-papdi",
    name: "Sutri Papdi",
    category: "Other Vegetables",
    price: 350,
    unit: "per kg",
    description: "Fresh sutri papdi beans",
    inSeason: true,
  },
  {
    id: "tamarind-amli",
    name: "Tamarind (Amli)",
    category: "Other Vegetables",
    price: 400,
    unit: "per kg",
    description: "Tangy tamarind pods",
    inSeason: true,
  },
  {
    id: "butternut",
    name: "Butternut",
    category: "Other Vegetables",
    price: 250,
    unit: "per kg",
    description: "Sweet, creamy butternut squash",
    inSeason: true,
  },
  {
    id: "maize",
    name: "Maize",
    category: "Other Vegetables",
    price: 150,
    unit: "per kg",
    description: "Fresh, sweet corn on the cob",
    inSeason: true,
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    category: "Other Vegetables",
    price: 100,
    unit: "per stalk",
    description: "Fresh sugarcane stalks",
    inSeason: true,
  },
  {
    id: "amla",
    name: "Amla",
    category: "Other Vegetables",
    price: 400,
    unit: "per kg",
    description: "Indian gooseberry, rich in vitamin C",
    inSeason: true,
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    category: "Other Vegetables",
    price: 200,
    unit: "per kg",
    description: "Fresh, sweet pumpkin",
    inSeason: true,
  },
  {
    id: "white-radish-muli",
    name: "White Radish (Muli)",
    category: "Other Vegetables",
    price: 250,
    unit: "per kg",
    description: "Crisp white radish",
    inSeason: true,
  },
  
  // Fruits
  {
    id: "apple-mango",
    name: "Apple Mango",
    category: "Fruits",
    price: 500,
    unit: "per kg",
    description: "Sweet, aromatic apple mangoes",
    inSeason: true,
  },
  {
    id: "makueni-local-mango",
    name: "Makueni Local Mango (Desi)",
    category: "Fruits",
    price: 400,
    unit: "per kg",
    description: "Traditional Kenyan local mango variety",
    inSeason: true,
  },
  {
    id: "kesar-mango",
    name: "Kesar Mango",
    category: "Fruits",
    price: 600,
    unit: "per kg",
    description: "Premium kesar mangoes, sweet and flavorful",
    inSeason: true,
  },
  {
    id: "ngowe-mango",
    name: "Ngowe Mango",
    category: "Fruits",
    price: 450,
    unit: "per kg",
    description: "Popular ngowe mango variety",
    inSeason: true,
  },
  {
    id: "tommy-mango",
    name: "Tommy Mango",
    category: "Fruits",
    price: 500,
    unit: "per kg",
    description: "Sweet tommy mangoes from our orchard",
    inSeason: true,
  },
  {
    id: "banana-red",
    name: "Banana - Imported Red",
    category: "Fruits",
    price: 300,
    unit: "per kg",
    description: "Sweet imported red bananas",
    inSeason: true,
  },
  {
    id: "banana-matoke",
    name: "Banana - Matoke",
    category: "Fruits",
    price: 200,
    unit: "per kg",
    description: "Traditional matoke cooking bananas",
    inSeason: true,
  },
  {
    id: "black-passion-fruit",
    name: "Black Passion Fruit",
    category: "Fruits",
    price: 400,
    unit: "per kg",
    description: "Tart, aromatic black passion fruit",
    inSeason: true,
  },
  {
    id: "barbados-cherry",
    name: "Barbados Cherry",
    category: "Fruits",
    price: 500,
    unit: "per kg",
    description: "Tart, vitamin C-rich Barbados cherries",
    inSeason: true,
  },
  {
    id: "custard-apple-sitafal",
    name: "Custard Apple (Sitafal)",
    category: "Fruits",
    price: 400,
    unit: "per kg",
    description: "Sweet, creamy custard apple",
    inSeason: true,
  },
  {
    id: "pomegranate-dadam",
    name: "Pomegranate (Dadam)",
    category: "Fruits",
    price: 600,
    unit: "per kg",
    description: "Juicy, antioxidant-rich pomegranates",
    inSeason: true,
  },
  {
    id: "pixie-orange",
    name: "Pixie Orange",
    category: "Fruits",
    price: 400,
    unit: "per kg",
    description: "Sweet, seedless pixie oranges",
    inSeason: true,
  },
  {
    id: "local-orange",
    name: "Local Orange",
    category: "Fruits",
    price: 300,
    unit: "per kg",
    description: "Fresh local oranges",
    inSeason: true,
  },
  {
    id: "blood-orange",
    name: "Blood Orange",
    category: "Fruits",
    price: 500,
    unit: "per kg",
    description: "Sweet, vibrant blood oranges",
    inSeason: true,
  },
  {
    id: "grapefruit",
    name: "Grapefruit",
    category: "Fruits",
    price: 350,
    unit: "per kg",
    description: "Fresh, tangy grapefruit",
    inSeason: true,
  },
  {
    id: "gooseberry",
    name: "Gooseberry",
    category: "Fruits",
    price: 400,
    unit: "per kg",
    description: "Tart, nutritious gooseberries",
    inSeason: true,
  },
  {
    id: "guava-cherry",
    name: "Guava - Imported Cherry",
    category: "Fruits",
    price: 500,
    unit: "per kg",
    description: "Sweet imported cherry guavas",
    inSeason: true,
  },
  {
    id: "guava-white",
    name: "Guava - Imported White",
    category: "Fruits",
    price: 500,
    unit: "per kg",
    description: "Sweet imported white guavas",
    inSeason: true,
  },
  {
    id: "chiku",
    name: "Chiku",
    category: "Fruits",
    price: 400,
    unit: "per kg",
    description: "Sweet, caramel-like chiku (sapodilla)",
    inSeason: true,
  },
  {
    id: "pomelo",
    name: "Pomelo",
    category: "Fruits",
    price: 450,
    unit: "per kg",
    description: "Large, sweet pomelo citrus fruit",
    inSeason: true,
  },
  {
    id: "coconut-madafu",
    name: "Coconut (Madafu)",
    category: "Fruits",
    price: 150,
    unit: "per piece",
    description: "Fresh young coconuts with sweet water",
    inSeason: true,
  },
  {
    id: "watermelon",
    name: "Watermelon",
    category: "Fruits",
    price: 200,
    unit: "per kg",
    description: "Juicy, refreshing watermelons",
    inSeason: true,
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit",
    category: "Fruits",
    price: 800,
    unit: "per kg",
    description: "Exotic, sweet dragon fruit",
    inSeason: true,
  },
  {
    id: "canteloupe",
    name: "Canteloupe",
    category: "Fruits",
    price: 300,
    unit: "per kg",
    description: "Sweet, aromatic canteloupe melons",
    inSeason: true,
  },
  {
    id: "sweet-melon",
    name: "Sweet Melon",
    category: "Fruits",
    price: 300,
    unit: "per kg",
    description: "Sweet, juicy melons",
    inSeason: true,
  },
  
  // Herbs
  {
    id: "dhania",
    name: "Dhania (Coriander)",
    category: "Herbs",
    price: 200,
    unit: "per bunch",
    description: "Fresh coriander leaves",
    inSeason: true,
  },
  {
    id: "mint",
    name: "Mint",
    category: "Herbs",
    price: 200,
    unit: "per bunch",
    description: "Fresh, aromatic mint leaves",
    inSeason: true,
  },
  {
    id: "rosemary",
    name: "Rosemary Sprigs",
    category: "Herbs",
    price: 300,
    unit: "per bunch",
    description: "Aromatic rosemary sprigs",
    inSeason: true,
  },
  {
    id: "basil",
    name: "Basil",
    category: "Herbs",
    price: 250,
    unit: "per bunch",
    description: "Fresh sweet basil leaves",
    inSeason: true,
  },
  {
    id: "holy-basil",
    name: "Holy Basil",
    category: "Herbs",
    price: 250,
    unit: "per bunch",
    description: "Sacred basil with medicinal properties",
    inSeason: true,
  },
  {
    id: "curry-leaves",
    name: "Curry Leaves",
    category: "Herbs",
    price: 200,
    unit: "per bunch",
    description: "Aromatic curry leaves",
    inSeason: true,
  },
  {
    id: "parsley",
    name: "Parsley",
    category: "Herbs",
    price: 200,
    unit: "per bunch",
    description: "Fresh parsley leaves",
    inSeason: true,
  },
  {
    id: "thyme",
    name: "Thyme",
    category: "Herbs",
    price: 300,
    unit: "per bunch",
    description: "Aromatic thyme sprigs",
    inSeason: true,
  },
  {
    id: "oregano",
    name: "Oregano",
    category: "Herbs",
    price: 300,
    unit: "per bunch",
    description: "Fresh oregano leaves",
    inSeason: true,
  },
  {
    id: "sage",
    name: "Sage",
    category: "Herbs",
    price: 300,
    unit: "per bunch",
    description: "Aromatic sage leaves",
    inSeason: true,
  },
  {
    id: "dill",
    name: "Dill",
    category: "Herbs",
    price: 250,
    unit: "per bunch",
    description: "Fresh dill weed",
    inSeason: true,
  },
  {
    id: "lemon-grass",
    name: "Lemon Grass",
    category: "Herbs",
    price: 250,
    unit: "per bunch",
    description: "Fresh, citrusy lemon grass",
    inSeason: true,
  },
];

export function FarmProducts() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  const getCartItems = () => {
    return Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = products.find((p) => p.id === productId);
        return product ? { ...product, quantity } : null;
      })
      .filter(Boolean) as (Product & { quantity: number })[];
  };

  const sendWhatsAppOrder = () => {
    const cartItems = getCartItems();
    const total = getTotalPrice();

    const message = `🌱 *Farm Fresh Order - Aam Altair*

*Order Details:*

${cartItems
  .map(
    (item) =>
      `• ${item.name} - ${item.quantity} ${item.unit} = KSh ${item.price * item.quantity}`
  )
  .join("\n")}

*Total: KSh ${total}*

Please confirm availability and delivery details.`;

    const whatsappUrl = `https://wa.me/254716862882?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-primary mb-3 sm:mb-4">
            Our Fresh Produce
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-4 sm:px-0">
            Browse our selection of farm-fresh vegetables and fruits. All
            produce is organic, seasonal, and harvested at peak freshness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-foreground hover:bg-accent/10 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 pb-20 sm:pb-24">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300"
            >
              <CardContent className="space-y-3 sm:space-y-4">
                {/* Product Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <h3 className="text-lg sm:text-xl font-serif font-medium text-primary break-words">
                        {product.name}
                      </h3>
                      {product.inSeason && (
                        <Badge className="bg-accent/20 text-accent border-accent text-xs whitespace-nowrap">
                          In Season
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/70 mb-1.5 sm:mb-2">
                      {product.category}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-xl sm:text-2xl font-semibold text-primary">
                      KSh {product.price}
                    </span>
                    <span className="text-xs sm:text-sm text-foreground/60">
                      / {product.unit}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between pt-2">
                  {cart[product.id] ? (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border hover:bg-accent/10 flex items-center justify-center transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                      <span className="text-base sm:text-lg font-medium text-primary w-6 sm:w-8 text-center">
                        {cart[product.id]}
                      </span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border hover:bg-accent/10 flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => addToCart(product.id)}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto text-xs sm:text-sm"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {Object.keys(cart).length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
            <div className="max-w-7xl mx-auto p-4 sm:p-6">
              {/* Cart Items List */}
              <div className="mb-3 sm:mb-4 max-h-[140px] overflow-y-auto pr-2">
                <div className="space-y-2">
                  {getCartItems().map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 sm:p-3 bg-background rounded-lg border border-border"
                    >
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="text-xs sm:text-sm font-medium text-primary truncate">
                            {item.name}
                          </span>
                          <span className="text-xs text-foreground/60 flex-shrink-0 whitespace-nowrap">
                            ×{item.quantity} {item.unit}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/70 mt-1">
                          KSh {item.price} × {item.quantity} = KSh{" "}
                          {item.price * item.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 sm:p-1 rounded-full hover:bg-accent/10 transition-colors flex-shrink-0"
                        title="Remove from cart"
                        aria-label="Remove from cart"
                      >
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground/70" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary Footer */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-foreground/70 mb-1">
                    {Object.values(cart).reduce((a, b) => a + b, 0)} items in cart
                  </p>
                  <p className="text-xl sm:text-2xl font-semibold text-primary">
                    Total: KSh {getTotalPrice()}
                  </p>
                </div>
                <Button
                  onClick={sendWhatsAppOrder}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full w-full sm:w-auto text-sm sm:text-base"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    lineHeight: 1.45,
                  }}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Order via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

