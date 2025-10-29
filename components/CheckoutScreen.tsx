import { ArrowLeft, CreditCard, MapPin, User } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

interface CheckoutScreenProps {
  onBack: () => void;
  onConfirmOrder: () => void;
}

export function CheckoutScreen({ onBack, onConfirmOrder }: CheckoutScreenProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmOrder();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-32">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4">
          <Button 
            size="icon" 
            variant="ghost" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 rounded-2xl h-12 w-12"
            onClick={onBack}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Button>
          <h2 className="text-white">Checkout</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 mt-6 space-y-6">
        {/* Contact Information */}
        <Card className="p-6 rounded-2xl border-0 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-xl">
              <User className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-amber-900">Contact Information</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-amber-700">Full Name</Label>
              <Input 
                id="fullName"
                placeholder="John Doe"
                className="mt-2 h-12 rounded-xl border-amber-200"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-amber-700">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="john@example.com"
                className="mt-2 h-12 rounded-xl border-amber-200"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>
        </Card>

        {/* Shipping Address */}
        <Card className="p-6 rounded-2xl border-0 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-amber-900">Shipping Address</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="address" className="text-amber-700">Street Address</Label>
              <Input 
                id="address"
                placeholder="123 Main Street"
                className="mt-2 h-12 rounded-xl border-amber-200"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-amber-700">City</Label>
                <Input 
                  id="city"
                  placeholder="New York"
                  className="mt-2 h-12 rounded-xl border-amber-200"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="zipCode" className="text-amber-700">ZIP Code</Label>
                <Input 
                  id="zipCode"
                  placeholder="10001"
                  className="mt-2 h-12 rounded-xl border-amber-200"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Information */}
        <Card className="p-6 rounded-2xl border-0 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-rose-400 to-pink-500 p-2 rounded-xl">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-amber-900">Payment Information</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber" className="text-amber-700">Card Number</Label>
              <Input 
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="mt-2 h-12 rounded-xl border-amber-200"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate" className="text-amber-700">Expiry Date</Label>
                <Input 
                  id="expiryDate"
                  placeholder="MM/YY"
                  className="mt-2 h-12 rounded-xl border-amber-200"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-amber-700">CVV</Label>
                <Input 
                  id="cvv"
                  placeholder="123"
                  className="mt-2 h-12 rounded-xl border-amber-200"
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Order Summary */}
        <Card className="p-6 rounded-2xl border-0 bg-gradient-to-br from-amber-50 to-orange-50">
          <h3 className="text-amber-900 mb-4">Order Total</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-amber-700">
              <span>Subtotal</span>
              <span>$83.00</span>
            </div>
            <div className="flex justify-between text-amber-700">
              <span>Shipping</span>
              <span>$8.99</span>
            </div>
            <div className="border-t border-amber-200 pt-2">
              <div className="flex justify-between">
                <span className="text-amber-900">Total</span>
                <h3 className="text-amber-900">$91.99</h3>
              </div>
            </div>
          </div>
        </Card>
      </form>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-100 p-6 shadow-2xl">
        <Button 
          type="submit"
          className="w-full bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl h-14"
          onClick={handleSubmit}
        >
          Complete Purchase
        </Button>
      </div>
    </div>
  );
}
