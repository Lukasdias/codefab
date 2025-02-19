"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Preview from "@/components/preview";
import Sidebar from "@/components/sidebar";
import { xml } from "@codemirror/lang-xml";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubLight } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  {
    title: "Save",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    onClick: () => {
      console.log("Saving fable...");
    },
    href: "#",
  },
  {
    title: "Load",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    onClick: () => {
      console.log("Loading fable...");
    },
    href: "#",
  },
  {
    title: "New Section",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    onClick: () => {
      console.log("Adding new section...");
    },
    href: "#",
  },
  {
    title: "Preview",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    onClick: () => {
      console.log("Previewing fable...");
    },
    href: "#",
  },
  {
    title: "Publish",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    onClick: () => {
      console.log("Publishing fable...");
    },
    href: "#",
  },
];

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
