import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { HomeScreen } from "./components/HomeScreen";
import { CategoryScreen } from "./components/CategoryScreen";
import { ProductDetailsScreen } from "./components/ProductDetailsScreen";
import { ArtisanProfileScreen } from "./components/ArtisanProfileScreen";
import { CartScreen } from "./components/CartScreen";
import { CheckoutScreen } from "./components/CheckoutScreen";
import { OrderConfirmationScreen } from "./components/OrderConfirmationScreen";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

type Screen = 
  | { type: "splash" }
  | { type: "home" }
  | { type: "category"; categoryId: string }
  | { type: "product"; productId: string }
  | { type: "artisan"; artisanId: string }
  | { type: "cart" }
  | { type: "checkout" }
  | { type: "confirmation" };

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>({ type: "splash" });

  useEffect(() => {
    if (currentScreen.type === "splash") {
      const timer = setTimeout(() => {
        setCurrentScreen({ type: "home" });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: "Item has been added to your shopping cart",
    });
    setCurrentScreen({ type: "cart" });
  };

  const renderScreen = () => {
    switch (currentScreen.type) {
      case "splash":
        return <SplashScreen onFinish={() => setCurrentScreen({ type: "home" })} />;
      
      case "home":
        return (
          <HomeScreen
            onNavigateToCategory={(categoryId) => setCurrentScreen({ type: "category", categoryId })}
            onNavigateToProduct={(productId) => setCurrentScreen({ type: "product", productId })}
            onNavigateToCart={() => setCurrentScreen({ type: "cart" })}
          />
        );
      
      case "category":
        return (
          <CategoryScreen
            category={currentScreen.categoryId}
            onBack={() => setCurrentScreen({ type: "home" })}
            onNavigateToProduct={(productId) => setCurrentScreen({ type: "product", productId })}
          />
        );
      
      case "product":
        return (
          <ProductDetailsScreen
            productId={currentScreen.productId}
            onBack={() => setCurrentScreen({ type: "home" })}
            onNavigateToArtisan={(artisanId) => setCurrentScreen({ type: "artisan", artisanId })}
            onAddToCart={handleAddToCart}
          />
        );
      
      case "artisan":
        return (
          <ArtisanProfileScreen
            artisanId={currentScreen.artisanId}
            onBack={() => setCurrentScreen({ type: "home" })}
            onNavigateToProduct={(productId) => setCurrentScreen({ type: "product", productId })}
          />
        );
      
      case "cart":
        return (
          <CartScreen
            onBack={() => setCurrentScreen({ type: "home" })}
            onNavigateToCheckout={() => setCurrentScreen({ type: "checkout" })}
          />
        );
      
      case "checkout":
        return (
          <CheckoutScreen
            onBack={() => setCurrentScreen({ type: "cart" })}
            onConfirmOrder={() => setCurrentScreen({ type: "confirmation" })}
          />
        );
      
      case "confirmation":
        return (
          <OrderConfirmationScreen
            onBackToHome={() => setCurrentScreen({ type: "home" })}
          />
        );
      
      default:
        return <HomeScreen
          onNavigateToCategory={(categoryId) => setCurrentScreen({ type: "category", categoryId })}
          onNavigateToProduct={(productId) => setCurrentScreen({ type: "product", productId })}
          onNavigateToCart={() => setCurrentScreen({ type: "cart" })}
        />;
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen">
        {renderScreen()}
      </div>
      <Toaster position="top-center" />
    </>
  );
}
