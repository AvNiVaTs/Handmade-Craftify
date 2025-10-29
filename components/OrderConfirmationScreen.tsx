import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface OrderConfirmationScreenProps {
  onBackToHome: () => void;
}

export function OrderConfirmationScreen({ onBackToHome }: OrderConfirmationScreenProps) {
  const orderNumber = "CR" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = "Oct 28-30, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Success Icon */}
        <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-emerald-400 to-teal-500 p-6 rounded-full shadow-2xl">
              <CheckCircle2 className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-amber-900 mb-2">Order Confirmed!</h2>
            <p className="text-amber-600/70">Thank you for supporting artisans</p>
          </div>
        </div>

        {/* Order Details */}
        <Card className="p-6 rounded-2xl border-0 shadow-lg">
          <div className="space-y-4">
            <div className="text-center pb-4 border-b border-amber-100">
              <p className="text-amber-600/70 text-sm mb-1">Order Number</p>
              <h3 className="text-amber-900">{orderNumber}</h3>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-xl">
                <Package className="w-6 h-6 text-amber-700" />
              </div>
              <div className="flex-1">
                <h4 className="text-amber-900 mb-1">Estimated Delivery</h4>
                <p className="text-amber-600/70">{estimatedDelivery}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4">
              <p className="text-emerald-800 text-sm text-center">
                We've sent a confirmation email with tracking details to your inbox
              </p>
            </div>
          </div>
        </Card>

        {/* Order Items */}
        <Card className="p-6 rounded-2xl border-0 shadow-lg">
          <h3 className="text-amber-900 mb-4">Order Summary</h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-amber-700">Artisan Ceramic Bowl × 1</span>
              <span className="text-amber-900">$45.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-amber-700">Woven Wall Basket × 2</span>
              <span className="text-amber-900">$76.00</span>
            </div>
            <div className="flex justify-between text-amber-600/70">
              <span>Shipping</span>
              <span>$8.99</span>
            </div>
            <div className="border-t border-amber-100 pt-3">
              <div className="flex justify-between">
                <span className="text-amber-900">Total Paid</span>
                <h3 className="text-amber-900">$91.99</h3>
              </div>
            </div>
          </div>
        </Card>

        {/* Impact Message */}
        <Card className="p-6 rounded-2xl border-0 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white text-center">
          <p className="mb-2">Your purchase supports 2 independent artisans</p>
          <p className="text-white/80 text-sm">Emma Wilson & Maria Santos thank you! 🎨</p>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button 
            className="w-full bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl h-14"
            onClick={onBackToHome}
          >
            Continue Shopping
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline"
            className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 rounded-2xl h-14"
          >
            Track Order
          </Button>
        </div>
      </div>
    </div>
  );
}
