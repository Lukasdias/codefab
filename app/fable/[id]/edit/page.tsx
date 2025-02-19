"use client"

import { useAuth } from "@/contexts/auth-context"
import FableEditor from "@/components/fable-editor"

export default function FablePage({ params }: { params: { id: string } }) {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <div>Please log in to view this fable.</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <FableEditor fableId={params.id} />
    </div>
  )
}

