
import React, { useState, useEffect } from "react";
import SituationSelector from "@/components/SituationSelector";
import ExcuseCard from "@/components/ExcuseCard";
import ScreenshotPreview from "@/components/ScreenshotPreview";
import { categories, excuses, Excuse } from "@/data/excuses";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentExcuse, setCurrentExcuse] = useState<Excuse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showScreenshot, setShowScreenshot] = useState(false);

  const getRandomExcuse = (categoryId: string) => {
    setIsLoading(true);
    
    // Simulate loading
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">FakeExcuse</h1>
          <p className="text-lg text-gray-600">Generate the perfect excuse for any situation!</p>
        </header>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl mb-8">
          <SituationSelector 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect}
          />
          
          {selectedCategory && (
            <div className="flex justify-center mb-6">
              <button 
                onClick={handleNewExcuse}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Another Excuse
              </button>
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
              <Label htmlFor="screenshot-mode">Show as WhatsApp Screenshot</Label>
            </div>
          )}
        </div>
        
        {showScreenshot && currentExcuse && (
          <ScreenshotPreview excuse={currentExcuse} />
        )}
        
        <footer className="text-center mt-12 text-gray-600 text-sm">
          <p>Made with 😅 for getting out of awkward situations</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
