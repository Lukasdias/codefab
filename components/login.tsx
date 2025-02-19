"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { Github } from "lucide-react";

export default function Login() {
  const { login } = useAuth();

  const handleGitHubLogin = () => {
    login();
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-[#a6e22e] to-[#ff5678]">
      <div className="w-96 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-[#ff5678] mb-6">
          Welcome to Codefab
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Create and share fables using XML
        </p>
        <Button
          onClick={handleGitHubLogin}
          size="lg"
          className="w-full bg-[#333] hover:bg-[#24292e] text-white"
        >
          <Github className="mr-2 h-5 w-5" /> Login with GitHub
        </Button>
      </div>
    </div>
  );
}
