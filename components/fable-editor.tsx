"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Preview from "@/components/preview";
import Sidebar from "@/components/sidebar";
import { xml } from "@codemirror/lang-xml";

import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubLight } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FableEditor({ fableId }: { fableId: string }) {
  const [code, setCode] = useState(`<fable>
  <title>My Fable</title>
  <content>
    <paragraph>Once upon a time...</paragraph>
  </content>
</fable>`);
  const { theme } = useTheme();

  const handleCodeChange = (value: string) => {
    setCode(value);
    console.log("Auto-saving...", value);
  };

  const handleFileSelect = (content: string) => {
    setCode(content);
  };

  useEffect(() => {
    console.log("Loading fable:", fableId);
  }, [fableId]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar fableId={fableId} onFileSelect={handleFileSelect} />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex">
            <div className="flex-1 overflow-none p-4 flex flex-col">
              <CodeMirror
                value={code}
                height="100%"
                extensions={[xml()]}
                onChange={handleCodeChange}
                theme={theme === "dark" ? dracula : githubLight}
                className="h-full rounded-lg border-2 border-gray-200 dark:border-gray-800"
              />
            </div>
            <Preview code={code} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
