
import React from "react";
import { Excuse } from "../data/excuses";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ExcuseCardProps {
  excuse: Excuse | null;
  isLoading: boolean;
}

const ExcuseCard: React.FC<ExcuseCardProps> = ({ excuse, isLoading }) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (excuse) {
      navigator.clipboard.writeText(excuse.text);
      toast({
        title: "Copied!",
        description: "Excuse copied to clipboard",
        duration: 2000,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-5 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (!excuse) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-500">Select a situation to get an excuse</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Your excuse:</h3>
      <p className="text-lg mb-4 text-gray-700">{excuse.text}</p>
      <Button onClick={copyToClipboard} className="w-full">
        <Copy className="mr-2 h-4 w-4" />
        Copy to Clipboard
      </Button>
    </div>
  );
};

export default ExcuseCard;
