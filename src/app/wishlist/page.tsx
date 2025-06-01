"use client";

import { useState } from "react";
import GameCard from "../_components/shared/GameCard";
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Trash2,
} from "lucide-react";
import SharedButton from "../_components/shared/SharedButton";

interface Game {
  title: string;
  description: string;
  rating: string;
  price: string;
  imageUrl: string;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Game[]>([
    {
      title: "GTA V",
      description: "Explore the criminal underworld of Los Santos.",
      rating: "4.7",
      price: "$19.99",
      imageUrl: "/image.png",
    },
    {
      title: "Cyberpunk 2077",
      description:
        "Enter a dystopian world of cyber-enhanced street warriors.",
      rating: "4.5",
      price: "$29.99",
      imageUrl: "/image.png",
    },
  ]);

  const removeFromWishlist = (titleToRemove: string): void => {
    setWishlist((prev) =>
      prev.filter((game) => game.title !== titleToRemove)
    );
  };

  const clearWishlist = (): void => {
    setWishlist([]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">My Wishlist</h1>
          {wishlist.length > 0 && (
            <Button
              variant="outline"
              onClick={clearWishlist}
              className="hover:bg-destructive/10 hover:text-destructive gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </Button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground mb-4">
              Your wishlist is empty
            </p>
            <SharedButton
              label="Browse Games"
              showIcon={false}
              className="w-full sm:w-auto"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((game) => (
              <GameCard
                key={game.title}
                {...game}
                wishIcon={false}
                deleteIcon={true}
                isWishlisted={true}
                onWishlistToggle={removeFromWishlist}
                buttonProps={{
                  label: "Play Now",
                  icon: <Gamepad2 className="w-4 h-4" />,
                  onClick: () => removeFromWishlist(game.title),
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
