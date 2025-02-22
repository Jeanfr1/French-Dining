import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { ChevronLeft } from "lucide-react";

export function BackButton() {
  return (
    <div className="absolute top-4 left-4">
      <Button variant="ghost" asChild>
        <Link to="/" className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
