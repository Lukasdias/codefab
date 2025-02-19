"use client"

import { useAuth } from "@/contexts/auth-context"
import Login from "@/components/login"
import Dashboard from "@/components/dashboard"

export default function Home() {
  const { isLoggedIn } = useAuth()

  return <div className="flex flex-col min-h-screen">{isLoggedIn ? <Dashboard /> : <Login />}</div>
}

