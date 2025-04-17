
import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { LogIn, UserPlus } from "lucide-react";

interface LoginPromptProps {
  onLoginClick: () => void;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ onLoginClick }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Please Sign In</h2>
      <p className="text-gray-600 mb-6">
        You need to sign in to use the FakeExcuse generator and create the perfect excuse.
      </p>
      <Button onClick={onLoginClick} size="lg" className="bg-indigo-500 hover:bg-indigo-600 transition-colors">
        <LogIn className="mr-2 h-5 w-5" />
        <span>Sign In or Register</span>
      </Button>
    </div>
  );
};

export default LoginPrompt;
