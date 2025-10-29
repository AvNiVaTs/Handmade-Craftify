import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface CartScreenProps {
  onBack: () => void;
  onNavigateToCheckout: () => void;
}

const initialCartItems = [
  {
    id: "1",
    name: "Artisan Ceramic Bowl",
    price: 45,
    artisan: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2MTIyOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quantity: 1
  },
  {
    id: "3",
    name: "Woven Wall Basket",
    price: 38,
    artisan: "Maria Santos",
    image: "https://images.unsplash.com/photo-1731504799625-f18e50d9a82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMHRleHRpbGVzJTIwYmFza2V0fGVufDF8fHx8MTc2MTIyOTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quantity: 2
  },
];

export function CartScreen({ onBack, onNavigateToCheckout }: CartScreenProps) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 8.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-32">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <Button 
            size="icon" 
            variant="ghost" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 rounded-2xl h-12 w-12"
            onClick={onBack}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Button>
          <h2 className="text-white">Shopping Cart</h2>
        </div>
        <p className="text-white/90 ml-16">{cartItems.length} items</p>
      </div>

      <div className="px-6 mt-6">
        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <Card className="p-12 rounded-2xl border-0 shadow-md text-center">
            <p className="text-amber-600/70 mb-4">Your cart is empty</p>
            <Button 
              className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl"
              onClick={onBack}
            >
              Continue Shopping
            </Button>
          </Card>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden rounded-2xl border-0 shadow-md">
                  <div className="flex gap-4 p-4">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-amber-100">
                      <ImageWithFallback 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-amber-900 mb-1">{item.name}</h4>
                        <p className="text-amber-600/70 text-sm">by {item.artisan}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-amber-900">${item.price}</p>
                        
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2 bg-amber-50 rounded-xl p-1">
                            <Button 
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-lg"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-amber-900 w-6 text-center">{item.quantity}</span>
                            <Button 
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-lg"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <Button 
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-lg text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <Card className="p-6 rounded-2xl border-0 shadow-md mb-6">
              <h3 className="text-amber-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-amber-600/70">Subtotal</span>
                  <span className="text-amber-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-600/70">Shipping</span>
                  <span className="text-amber-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-amber-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-amber-900">Total</span>
                    <h3 className="text-amber-900">${total.toFixed(2)}</h3>
                  </div>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>

      {/* Bottom Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-100 p-6 shadow-2xl">
          <Button 
            className="w-full bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl h-14"
            onClick={onNavigateToCheckout}
          >
            Proceed to Checkout • ${total.toFixed(2)}
          </Button>
        </div>
      )}
    </div>
  );
}
