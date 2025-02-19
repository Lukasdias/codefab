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

type AddAssetDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fableId: string;
  folder: string | null;
};

export default function AddAssetDialog({
  open,
  onOpenChange,
  fableId,
  folder,
}: AddAssetDialogProps) {
  const [assetName, setAssetName] = useState("");

  const handleAddAsset = () => {
    console.log(
      `Adding asset ${assetName} to fable ${fableId} in folder ${folder}`
    );
    setAssetName("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Asset</DialogTitle>
        </DialogHeader>
        <Input
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          placeholder="Enter asset name"
        />
        <DialogFooter>
          <Button onClick={handleAddAsset}>Add Asset</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
