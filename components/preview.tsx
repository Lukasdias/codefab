"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Preview({ code }: { code: string }) {
  const [showErrors, setShowErrors] = useState(false);

  const errors: string[] = [];

  const toggleView = () => setShowErrors(!showErrors);

  return (
    <div className="w-[500px] h-[500px] border-l flex flex-col">
      <div className="p-2 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Preview</h2>
        <Button variant="outline" size="sm" onClick={toggleView}>
          {showErrors ? "Show Preview" : "Show Errors"}
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-4">
        {showErrors ? (
          errors.length > 0 ? (
            <ul className="list-disc pl-5">
              {errors.map((error, index) => (
                <li key={index} className="text-red-500">
                  {error}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-green-500">No errors found.</p>
          )
        ) : (
          <div dangerouslySetInnerHTML={{ __html: code }} />
        )}
      </div>
    </div>
  );
}
