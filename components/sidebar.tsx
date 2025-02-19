"use client";

import AddAssetDialog from "@/components/add-asset-dialog";
import AddPageDialog from "@/components/add-page-dialog";
import { Tree, TreeItem } from "@/components/tree";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useState } from "react";

type FileTreeItem = {
  id: string;
  name: string;
  type: "file" | "folder";
  content?: string;
  children?: FileTreeItem[];
};

const initialTree: FileTreeItem[] = [
  {
    id: "1",
    name: "fable.xml",
    type: "file",
    content:
      "<fable>\n  <title>My Fable</title>\n  <content>\n    <paragraph>Once upon a time...</paragraph>\n  </content>\n</fable>",
  },
  {
    id: "2",
    name: "assets",
    type: "folder",
    children: [
      { id: "3", name: "image1.png", type: "file" },
      { id: "4", name: "image2.png", type: "file" },
    ],
  },
  {
    id: "5",
    name: "pages",
    type: "folder",
    children: [
      {
        id: "6",
        name: "page1.xml",
        type: "file",
        content:
          "<page>\n  <title>Page 1</title>\n  <content>\n    <paragraph>This is page 1</paragraph>\n  </content>\n</page>",
      },
      {
        id: "7",
        name: "page2.xml",
        type: "file",
        content:
          "<page>\n  <title>Page 2</title>\n  <content>\n    <paragraph>This is page 2</paragraph>\n  </content>\n</page>",
      },
    ],
  },
];

export default function Sidebar({
  fableId,
  onFileSelect,
}: {
  fableId: string;
  onFileSelect: (content: string) => void;
}) {
  const [tree, _] = useState(initialTree);
  const [isAddPageOpen, setIsAddPageOpen] = useState(false);
  const [isAddAssetOpen, setIsAddAssetOpen] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  const handleAddItem = (folderName: string) => {
    setCurrentFolder(folderName);
    if (folderName === "pages") {
      setIsAddPageOpen(true);
    } else if (folderName === "assets") {
      setIsAddAssetOpen(true);
    }
  };

  const renderTree = (items: FileTreeItem[]) => {
    return items.map((item) => (
      <ContextMenu key={item.id}>
        <ContextMenuTrigger>
          <TreeItem
            id={item.id}
            name={item.name}
            onClick={() => item.content && onFileSelect(item.content)}
          >
            {item.children && renderTree(item.children)}
          </TreeItem>
        </ContextMenuTrigger>
        {item.type === "folder" && (
          <ContextMenuContent>
            <ContextMenuItem onSelect={() => handleAddItem(item.name)}>
              Add {item.name === "pages" ? "Page" : "Asset"}
            </ContextMenuItem>
          </ContextMenuContent>
        )}
      </ContextMenu>
    ));
  };

  return (
    <div className="w-64 border-r p-4 flex flex-col">
      <Tree>{renderTree(tree)}</Tree>
      <AddPageDialog
        open={isAddPageOpen}
        onOpenChange={setIsAddPageOpen}
        fableId={fableId}
        folder={currentFolder}
      />
      <AddAssetDialog
        open={isAddAssetOpen}
        onOpenChange={setIsAddAssetOpen}
        fableId={fableId}
        folder={currentFolder}
      />
    </div>
  );
}
