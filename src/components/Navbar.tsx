
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import LoginModal from "./LoginModal";

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const isMobile = useIsMobile();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Get the first letter of the username or email to use as fallback
  const getUserInitial = () => {
    if (!user) return "";
    
    // Try to get username from user metadata
    const username = user.user_metadata?.username || "";
    if (username) return username.substring(0, 2).toUpperCase();
    
    // Fallback to email
    return user.email ? user.email.substring(0, 2).toUpperCase() : "U";
  };

  // Get the display name (username or email)
  const getDisplayName = () => {
    if (!user) return "";
    return user.user_metadata?.username || user.email?.split('@')[0] || "User";
  };

  // Get avatar URL
  const getAvatarUrl = () => {
    return user?.user_metadata?.avatar_url || 
           `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email || 'user'}`;
  };

  return (
    <nav className="py-3 px-4 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-800">FakeExcuse</span>
          {!isMobile && <span className="text-gray-600">Generate the perfect excuse</span>}
        </div>
        
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={getAvatarUrl()} alt={getDisplayName()} />
                  <AvatarFallback>{getUserInitial()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">{getDisplayName()}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>
              <DropdownMenuItem onClick={() => logout()} className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="outline" onClick={() => setIsLoginModalOpen(true)}>
            <User className="mr-2 h-4 w-4" />
            <span>Sign In</span>
          </Button>
        )}
      </div>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
