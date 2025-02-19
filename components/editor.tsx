"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Editor() {
  const [xml, setXml] = useState(
    "<fable>\n  <title>My First Fable</title>\n  <content>\n    <paragraph>Once upon a time...</paragraph>\n  </content>\n</fable>",
  )

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">XML Editor</h2>
      <Textarea value={xml} onChange={(e) => setXml(e.target.value)} className="font-mono h-64 mb-2" />
      <Button>Save</Button>
    </div>
  )
}

