import { ArrowLeft, MapPin, Award, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArtisanProfileScreenProps {
  artisanId: string;
  onBack: () => void;
  onNavigateToProduct: (productId: string) => void;
}

const artisanData: Record<string, any> = {
  emma: {
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1655111379423-b85edc4da9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFrZXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Ceramic Artist",
    location: "Portland, Oregon",
    joinedDate: "Member since 2019",
    rating: 4.9,
    sales: 1248,
    bio: "Creating functional art pieces that bring warmth and beauty to everyday life. I specialize in hand-thrown pottery using traditional techniques combined with contemporary design.",
    achievements: ["Top Seller 2024", "Eco-Certified", "Featured Artist"],
    products: [
      {
        id: "1",
        name: "Artisan Ceramic Bowl",
        price: 45,
        image: "https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2MTIyOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      {
        id: "5",
        name: "Handmade Clay Pot Set",
        price: 92,
        image: "https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2MTIyOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
    ]
  },
  james: {
    name: "James Chen",
    avatar: "https://images.unsplash.com/photo-1655111379423-b85edc4da9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFrZXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Jewelry Designer",
    location: "Brooklyn, New York",
    joinedDate: "Member since 2020",
    rating: 4.9,
    sales: 892,
    bio: "Crafting unique jewelry pieces that tell stories. Each piece is meticulously handmade with ethically sourced materials and attention to detail.",
    achievements: ["Rising Star 2024", "Customer Favorite", "Quality Assured"],
    products: [
      {
        id: "2",
        name: "Handcrafted Silver Ring",
        price: 89,
        image: "https://images.unsplash.com/photo-1758974504445-65b1ee86e47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhcnRpc2FufGVufDF8fHx8MTc2MTE1MTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
    ]
  },
  maria: {
    name: "Maria Santos",
    avatar: "https://images.unsplash.com/photo-1655111379423-b85edc4da9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFrZXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjEyMjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Textile Artist",
    location: "Santa Fe, New Mexico",
    joinedDate: "Member since 2018",
    rating: 4.7,
    sales: 1567,
    bio: "Preserving traditional weaving techniques while creating contemporary designs. Each piece is woven with natural, sustainable materials.",
    achievements: ["Heritage Artisan", "Sustainable Craft", "Community Leader"],
    products: [
      {
        id: "3",
        name: "Woven Wall Basket",
        price: 38,
        image: "https://images.unsplash.com/photo-1731504799625-f18e50d9a82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMHRleHRpbGVzJTIwYmFza2V0fGVufDF8fHx8MTc2MTIyOTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
    ]
  },
};

export function ArtisanProfileScreen({ artisanId, onBack, onNavigateToProduct }: ArtisanProfileScreenProps) {
  const artisan = artisanData[artisanId] || artisanData.emma;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-20">
      {/* Header with Cover */}
      <div className="relative h-48 bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400">
        <Button 
          size="icon" 
          className="absolute top-6 left-6 bg-white/90 hover:bg-white backdrop-blur-sm h-12 w-12 rounded-2xl shadow-lg z-10"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5 text-amber-900" />
        </Button>
      </div>

      {/* Profile Info */}
      <div className="px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <ImageWithFallback 
                src={artisan.avatar}
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
            </Avatar>
            <div className="flex-1">
              <h2 className="text-amber-900 mb-1">{artisan.name}</h2>
              <p className="text-amber-600/70 mb-2">{artisan.specialty}</p>
              <div className="flex items-center gap-1 text-amber-600/70 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>{artisan.location}</span>
              </div>
              <p className="text-amber-600/60 text-sm">{artisan.joinedDate}</p>
            </div>
            <Button 
              size="icon"
              className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl h-12 w-12"
            >
              <Heart className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-amber-100">
            <div className="text-center">
              <h3 className="text-amber-900">{artisan.rating}</h3>
              <p className="text-amber-600/70 text-sm">Rating</p>
            </div>
            <div className="text-center">
              <h3 className="text-amber-900">{artisan.sales}</h3>
              <p className="text-amber-600/70 text-sm">Sales</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <Card className="p-6 rounded-2xl border-0 shadow-md mb-6">
          <h3 className="text-amber-900 mb-3">About</h3>
          <p className="text-amber-700/80">{artisan.bio}</p>
        </Card>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="text-amber-900 mb-4">Achievements</h3>
          <div className="grid grid-cols-3 gap-3">
            {artisan.achievements.map((achievement: string) => (
              <Card key={achievement} className="p-4 rounded-2xl border-0 bg-gradient-to-br from-amber-50 to-orange-50 text-center">
                <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-amber-900 text-sm">{achievement}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-amber-900">Products</h3>
            <Button variant="ghost" className="text-amber-600 rounded-xl">View All</Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {artisan.products.map((product: any) => (
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
                </div>
                
                <div className="p-4">
                  <h4 className="text-amber-900 mb-1 line-clamp-1">{product.name}</h4>
                  <p className="text-amber-900">${product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
