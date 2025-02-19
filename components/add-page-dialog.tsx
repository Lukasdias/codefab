"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type AddPageDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fableId: string;
  folder: string | null;
};

export default function AddPageDialog({
  open,
  onOpenChange,
  fableId,
  folder,
}: AddPageDialogProps) {
  const [pageName, setPageName] = useState("");

  const handleAddPage = () => {
    console.log(
      `Adding page ${pageName} to fable ${fableId} in folder ${folder}`
    );
    setPageName("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Page</DialogTitle>
        </DialogHeader>
        <Input
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
          placeholder="Enter page name"
        />
        <DialogFooter>
          <Button onClick={handleAddPage}>Add Page</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
