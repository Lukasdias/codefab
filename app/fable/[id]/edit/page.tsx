"use client";

import FableEditor from "@/components/fable-editor";
import { useAuth } from "@/contexts/auth-context";
import React from "react";

export default function FablePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { isLoggedIn } = useAuth();

  const [fableId, setFableId] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then(({ id }) => setFableId(id));
  }, [params]);

  if (!isLoggedIn) {
    return <div>Please log in to view this fable.</div>;
  }

  if (!fableId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <FableEditor fableId={fableId} />
    </div>
  );
}
