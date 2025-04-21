
import React, { useState } from "react";
import SituationSelector from "@/components/SituationSelector";
import ExcuseCard from "@/components/ExcuseCard";
import ScreenshotPreview from "@/components/ScreenshotPreview";
import { categories, excuses, Excuse } from "@/data/excuses";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentExcuse, setCurrentExcuse] = useState<Excuse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showScreenshot, setShowScreenshot] = useState(false);
  const isMobile = useIsMobile();

  const getRandomExcuse = (categoryId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const categoryExcuses = excuses.filter(excuse => excuse.category === categoryId);
      const randomIndex = Math.floor(Math.random() * categoryExcuses.length);
      setCurrentExcuse(categoryExcuses[randomIndex]);
      setIsLoading(false);
    }, 300);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    getRandomExcuse(categoryId);
  };

  const handleNewExcuse = () => {
    if (selectedCategory) {
      getRandomExcuse(selectedCategory);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 pb-10">
      <div className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        <header className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-gray-800">FakeExcuse</h1>
          <p className="text-base md:text-lg text-gray-600">Generate the perfect excuse for any situation!</p>
        </header>

        <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-xl mb-6 md:mb-8">
          <SituationSelector 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect}
          />

          {selectedCategory && (
            <div className="flex justify-center mb-4 md:mb-6">
              <Button 
                onClick={handleNewExcuse}
                variant="default"
                className="bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Get Another Excuse
              </Button>
            </div>
          )}

          <ExcuseCard excuse={currentExcuse} isLoading={isLoading} />

          {currentExcuse && (
            <div className="flex items-center space-x-2 justify-end mt-4">
              <Switch 
                id="screenshot-mode" 
                checked={showScreenshot}
                onCheckedChange={setShowScreenshot}
              />
              <Label htmlFor="screenshot-mode">
                {isMobile ? "Show as WhatsApp" : "Show as WhatsApp Screenshot"}
              </Label>
            </div>
          )}
        </div>
        
        {showScreenshot && currentExcuse && (
          <ScreenshotPreview excuse={currentExcuse} />
        )}
        
        <footer className="text-center mt-8 md:mt-12 text-gray-600 text-sm">
          <p>Made with 😅 for getting out of awkward situations</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
