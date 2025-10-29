import { Sparkles } from "lucide-react";

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6"
      onClick={onFinish}
    >
      <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-3xl shadow-2xl">
            <Sparkles className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="bg-gradient-to-r from-amber-700 via-orange-600 to-rose-600 bg-clip-text text-transparent">
            Craftique
          </h1>
          <p className="text-amber-800/70">Handmade with Love</p>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-center">
        <p className="text-amber-600/60 text-sm">Tap to continue</p>
      </div>
    </div>
  );
}
