"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import {
  Code,
  GitFork,
  Heart,
  MessageSquare,
  MoreVertical,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Fable = {
  id: string;
  title: string;
  author: string;
  description: string;
};

const fables: Fable[] = [
  {
    id: "1",
    title: "The Enchanted Forest",
    author: "Alice",
    description: "A magical tale of friendship and adventure.",
  },
  {
    id: "2",
    title: "The Lost City",
    author: "Bob",
    description: "An exciting journey to find a hidden civilization.",
  },
  {
    id: "3",
    title: "The Time Traveler",
    author: "Charlie",
    description: "A mind-bending story of past, present, and future.",
  },
];

export default function FableCardList() {
  const [showOtherUserFables, setShowOtherUserFables] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Fables</h2>
        <div className="flex items-center">
          <span className="mr-2">Show other users&apos; fables</span>
          <Switch
            checked={showOtherUserFables}
            onCheckedChange={setShowOtherUserFables}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fables.map((fable) => (
          <Card key={fable.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{fable.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Comment</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Like</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <GitFork className="mr-2 h-4 w-4" />
                      <span>Fork</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Code className="mr-2 h-4 w-4" />
                      <span>View Source</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription>By {fable.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{fable.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/fable/${fable.id}/edit`} passHref>
                <Button variant="outline">Edit Fable</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
