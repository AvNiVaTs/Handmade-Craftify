import { Search, ShoppingBag, Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomeScreenProps {
  onNavigateToCategory: (category: string) => void;
  onNavigateToProduct: (productId: string) => void;
  onNavigateToCart: () => void;
}

const categories = [
  { id: "pottery", name: "Pottery", icon: "🏺", color: "from-amber-400 to-orange-500" },
  { id: "jewelry", name: "Jewelry", icon: "💍", color: "from-rose-400 to-pink-500" },
  { id: "textiles", name: "Textiles", icon: "🧵", color: "from-emerald-400 to-green-500" },
  { id: "candles", name: "Candles", icon: "🕯️", color: "from-amber-300 to-yellow-500" },
];

const featuredProducts = [
  {
    id: "1",
    name: "Artisan Ceramic Bowl",
    price: 45,
    artisan: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2MTIyOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Bestseller"
  },
  {
    id: "2",
    name: "Handcrafted Silver Ring",
    price: 89,
    artisan: "James Chen",
    image: "https://images.unsplash.com/photo-1758974504445-65b1ee86e47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhcnRpc2FufGVufDF8fHx8MTc2MTE1MTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "New"
  },
  {
    id: "3",
    name: "Woven Wall Basket",
    price: 38,
    artisan: "Maria Santos",
    image: "https://images.unsplash.com/photo-1731504799625-f18e50d9a82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMHRleHRpbGVzJTIwYmFza2V0fGVufDF8fHx8MTc2MTIyOTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Featured"
  },
];

export function HomeScreen({ onNavigateToCategory, onNavigateToProduct, onNavigateToCart }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/90 text-sm">Welcome to</p>
            <h2 className="text-white">Craftique</h2>
          </div>
          <Button 
            size="icon" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 rounded-2xl h-12 w-12"
            onClick={onNavigateToCart}
          >
            <ShoppingBag className="w-5 h-5 text-white" />
          </Button>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600/60" />
          <Input 
            placeholder="Search handmade crafts..."
            className="pl-12 h-14 bg-white/95 backdrop-blur border-0 shadow-lg rounded-2xl"
          />
        </div>
      </div>

      <div className="px-6 mt-8">
        {/* Categories */}
        <div className="mb-8">
          <h3 className="mb-4 text-amber-900">Shop by Category</h3>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="p-6 rounded-2xl cursor-pointer transition-all active:scale-95 border-0 shadow-md hover:shadow-lg"
                onClick={() => onNavigateToCategory(category.id)}
              >
                <div className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-md`}>
                  {category.icon}
                </div>
                <h4 className="text-amber-900">{category.name}</h4>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Banner */}
        <Card className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-md mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-3 rounded-2xl shadow-md">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-emerald-900 mb-1">Support Local Artisans</h4>
              <p className="text-emerald-700/70 text-sm">Every purchase helps independent makers thrive</p>
            </div>
          </div>
        </Card>

        {/* Featured Products */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-amber-900">Featured Crafts</h3>
            <Button variant="ghost" className="text-amber-600 rounded-xl">View All</Button>
          </div>
          
          <div className="space-y-4">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id}
                className="overflow-hidden rounded-2xl border-0 shadow-md cursor-pointer transition-all active:scale-98"
                onClick={() => onNavigateToProduct(product.id)}
              >
                <div className="flex gap-4 p-3">
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-amber-100">
                    <ImageWithFallback 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <Button 
                      size="icon" 
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white h-8 w-8 rounded-full shadow-md"
                    >
                      <Heart className="w-4 h-4 text-rose-500" />
                    </Button>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <Badge className="mb-2 bg-amber-100 text-amber-700 hover:bg-amber-100 rounded-lg">
                        {product.tag}
                      </Badge>
                      <h4 className="text-amber-900 mb-1">{product.name}</h4>
                      <p className="text-amber-600/70 text-sm">by {product.artisan}</p>
                    </div>
                    <p className="text-amber-900">${product.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
