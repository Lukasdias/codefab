"use client"

import { useAuth } from "@/contexts/auth-context"
import Header from "@/components/header"
import FableCardList from "@/components/fable-card-list"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const { logout } = useAuth()

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#ff5678]">My Fables</h1>
          <Button
            onClick={logout}
            variant="outline"
            className="text-[#ff5678] border-[#ff5678] hover:bg-[#ff5678] hover:text-white"
          >
            Log Out
          </Button>
        </div>
        <FableCardList />
      </main>
      <Footer />
    </>
  )
}

