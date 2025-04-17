
import React from "react";
import { Excuse } from "../data/excuses";
import { Check, Clock } from "lucide-react";

interface ScreenshotPreviewProps {
  excuse: Excuse | null;
}

const ScreenshotPreview: React.FC<ScreenshotPreviewProps> = ({ excuse }) => {
  if (!excuse) return null;

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6 max-w-sm mx-auto">
      <div className="bg-green-100 p-2 rounded-t-lg flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div>
          <p className="font-semibold text-gray-800">Friend</p>
          <p className="text-xs text-gray-600">online</p>
        </div>
      </div>
      
      <div className="bg-white p-4 min-h-[120px]">
        <div className="flex flex-col">
          <div className="bg-gray-200 p-3 rounded-lg rounded-tl-none self-start max-w-[80%] mb-3">
            <p className="text-sm">Hey, where are you? 🤔</p>
            <div className="flex items-center justify-end mt-1">
              <span className="text-xs text-gray-500 mr-1">{timeString}</span>
            </div>
          </div>
          
          <div className="bg-green-200 p-3 rounded-lg rounded-tr-none self-end max-w-[80%]">
            <p className="text-sm">{excuse.text}</p>
            <div className="flex items-center justify-end mt-1">
              <span className="text-xs text-gray-500 mr-1">{timeString}</span>
              <Check className="h-3 w-3 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotPreview;
