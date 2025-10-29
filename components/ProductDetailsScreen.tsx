import { ArrowLeft, Heart, Share2, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface ProductDetailsScreenProps {
  productId: string;
  onBack: () => void;
  onNavigateToArtisan: (artisanId: string) => void;
  onAddToCart: () => void;
}

const productData: Record<string, any> = {
  "1": {
    name: "Artisan Ceramic Bowl",
    price: 45,
    artisan: { id: "emma", name: "Emma Wilson", avatar: "https://images.unsplash.com/photo-1655111379423-b85edc4da9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFrZXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    image: "https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2MTIyOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 127,
    description: "A beautiful handcrafted ceramic bowl, perfect for serving or as a decorative piece. Each bowl is uniquely crafted with attention to detail and finished with a food-safe glaze.",
    materials: "Stoneware clay, food-safe glaze",
    dimensions: "8\" diameter × 3\" height",
    tags: ["Bestseller", "Eco-friendly", "Handmade"],
    stock: 5
  },
  "2": {
    name: "Handcrafted Silver Ring",
    price: 89,
    artisan: { id: "james", name: "James Chen", avatar: "https://images.unsplash.com/photo-1655111379423-b85edc4da9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFrZXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    image: "https://images.unsplash.com/photo-1758974504445-65b1ee86e47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhcnRpc2FufGVufDF8fHx8MTc2MTE1MTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 89,
    description: "Elegant sterling silver ring featuring a minimalist design. Hand-forged and polished to perfection, this timeless piece adds sophistication to any outfit.",
    materials: "925 sterling silver",
    dimensions: "Available in sizes 5-10",
    tags: ["New Arrival", "Sterling Silver", "Minimal"],
    stock: 12
  },
  "3": {
    name: "Woven Wall Basket",
    price: 38,
    artisan: { id: "maria", name: "Maria Santos", avatar: "https://images.unsplash.com/photo-1655111379423-b85edc4da9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFrZXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    image: "https://images.unsplash.com/photo-1731504799625-f18e50d9a82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMHRleHRpbGVzJTIwYmFza2V0fGVufDF8fHx8MTc2MTIyOTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 64,
    description: "Handwoven decorative basket perfect for wall hanging or storage. Made using traditional weaving techniques passed down through generations.",
    materials: "Natural seagrass, cotton",
    dimensions: "12\" diameter",
    tags: ["Featured", "Natural Materials", "Sustainable"],
    stock: 8
  },
};

export function ProductDetailsScreen({ productId, onBack, onNavigateToArtisan, onAddToCart }: ProductDetailsScreenProps) {
  const product = productData[productId] || productData["1"];
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Image Section */}
      <div className="relative">
        <div className="aspect-square bg-amber-100">
          <ImageWithFallback 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Action Buttons */}
        <Button 
          size="icon" 
          className="absolute top-6 left-6 bg-white/90 hover:bg-white backdrop-blur-sm h-12 w-12 rounded-2xl shadow-lg"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5 text-amber-900" />
        </Button>
        
        <div className="absolute top-6 right-6 flex gap-2">
          <Button 
            size="icon" 
            className="bg-white/90 hover:bg-white backdrop-blur-sm h-12 w-12 rounded-2xl shadow-lg"
          >
            <Heart className="w-5 h-5 text-rose-500" />
          </Button>
          <Button 
            size="icon" 
            className="bg-white/90 hover:bg-white backdrop-blur-sm h-12 w-12 rounded-2xl shadow-lg"
          >
            <Share2 className="w-5 h-5 text-amber-900" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {product.tags.map((tag: string) => (
            <Badge key={tag} className="bg-amber-100 text-amber-700 hover:bg-amber-100 rounded-xl px-3 py-1">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title & Rating */}
        <div>
          <h2 className="text-amber-900 mb-2">{product.name}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="text-amber-900">{product.rating}</span>
            </div>
            <span className="text-amber-600/60">({product.reviews} reviews)</span>
          </div>
        </div>

        {/* Artisan */}
        <Card 
          className="p-4 rounded-2xl border-0 bg-gradient-to-br from-amber-50 to-orange-50 cursor-pointer active:scale-98 transition-all"
          onClick={() => onNavigateToArtisan(product.artisan.id)}
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-white shadow-md">
              <ImageWithFallback 
                src={product.artisan.avatar}
                alt={product.artisan.name}
                className="w-full h-full object-cover"
              />
            </Avatar>
            <div className="flex-1">
              <p className="text-amber-600/70 text-sm">Crafted by</p>
              <h4 className="text-amber-900">{product.artisan.name}</h4>
            </div>
            <ArrowLeft className="w-5 h-5 text-amber-600 rotate-180" />
          </div>
        </Card>

        {/* Description */}
        <div>
          <h3 className="text-amber-900 mb-2">Description</h3>
          <p className="text-amber-700/80">{product.description}</p>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <h3 className="text-amber-900">Product Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-amber-100">
              <span className="text-amber-600/70">Materials</span>
              <span className="text-amber-900">{product.materials}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-amber-100">
              <span className="text-amber-600/70">Dimensions</span>
              <span className="text-amber-900">{product.dimensions}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-amber-600/70">In Stock</span>
              <span className="text-amber-900">{product.stock} available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-100 p-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-amber-600/70 text-sm mb-1">Total Price</p>
            <h3 className="text-amber-900">${product.price * quantity}</h3>
          </div>
          
          <div className="flex items-center gap-3 bg-amber-50 rounded-2xl p-2">
            <Button 
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-xl"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span className="text-amber-900 w-8 text-center">{quantity}</span>
            <Button 
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-xl"
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            >
              +
            </Button>
          </div>
          
          <Button 
            className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl h-14 px-8"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
