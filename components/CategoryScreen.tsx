import { ArrowLeft, SlidersHorizontal, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CategoryScreenProps {
  category: string;
  onBack: () => void;
  onNavigateToProduct: (productId: string) => void;
}

const categoryData: Record<string, any> = {
  pottery: {
    title: "Pottery",
    icon: "🏺",
    color: "from-amber-400 to-orange-500",
    products: [
      {
        id: "1",
        name: "Artisan Ceramic Bowl",
        price: 45,
        artisan: "Emma Wilson",
        image: "https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2MTIyOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.9
      },
      {
        id: "4",
        name: "Modern Ceramic Vase",
        price: 68,
        artisan: "Sophie Martin",
        image: "https://images.unsplash.com/photo-1648993880088-37d4a048e6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZSUyMG1vZGVybnxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8
      },
      {
        id: "5",
        name: "Handmade Clay Pot Set",
        price: 92,
        artisan: "Emma Wilson",
        image: "https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2MTIyOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 5.0
      },
    ]
  },
  jewelry: {
    title: "Jewelry",
    icon: "💍",
    color: "from-rose-400 to-pink-500",
    products: [
      {
        id: "2",
        name: "Handcrafted Silver Ring",
        price: 89,
        artisan: "James Chen",
        image: "https://images.unsplash.com/photo-1758974504445-65b1ee86e47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhcnRpc2FufGVufDF8fHx8MTc2MTE1MTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.9
      },
    ]
  },
  textiles: {
    title: "Textiles",
    icon: "🧵",
    color: "from-emerald-400 to-green-500",
    products: [
      {
        id: "3",
        name: "Woven Wall Basket",
        price: 38,
        artisan: "Maria Santos",
        image: "https://images.unsplash.com/photo-1731504799625-f18e50d9a82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMHRleHRpbGVzJTIwYmFza2V0fGVufDF8fHx8MTc2MTIyOTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.7
      },
    ]
  },
  candles: {
    title: "Candles",
    icon: "🕯️",
    color: "from-amber-300 to-yellow-500",
    products: [
      {
        id: "6",
        name: "Soy Wax Candle Set",
        price: 34,
        artisan: "Lisa Brown",
        image: "https://images.unsplash.com/photo-1716819685618-2f7abb7fbed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNhbmRsZXMlMjBjcmFmdHxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8
      },
    ]
  },
};

export function CategoryScreen({ category, onBack, onNavigateToProduct }: CategoryScreenProps) {
  const data = categoryData[category] || categoryData.pottery;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-20">
      {/* Header */}
      <div className={`bg-gradient-to-br ${data.color} pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg`}>
        <div className="flex items-center justify-between mb-6">
          <Button 
            size="icon" 
            variant="ghost" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 rounded-2xl h-12 w-12"
            onClick={onBack}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Button>
          
          <div className="flex items-center gap-3">
            <span className="text-3xl">{data.icon}</span>
            <h2 className="text-white">{data.title}</h2>
          </div>
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 rounded-2xl h-12 w-12"
          >
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </Button>
        </div>
        
        <p className="text-white/90 text-center">
          {data.products.length} handcrafted items
        </p>
      </div>

      {/* Products Grid */}
      <div className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          {data.products.map((product: any) => (
            <Card 
              key={product.id}
              className="overflow-hidden rounded-2xl border-0 shadow-md cursor-pointer transition-all active:scale-95"
              onClick={() => onNavigateToProduct(product.id)}
            >
              <div className="relative aspect-square bg-amber-100">
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
                <Badge className="absolute bottom-2 left-2 bg-white/95 text-amber-700 hover:bg-white rounded-lg">
                  ⭐ {product.rating}
                </Badge>
              </div>
              
              <div className="p-4">
                <h4 className="text-amber-900 mb-1 line-clamp-1">{product.name}</h4>
                <p className="text-amber-600/70 text-sm mb-2 line-clamp-1">by {product.artisan}</p>
                <p className="text-amber-900">${product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
