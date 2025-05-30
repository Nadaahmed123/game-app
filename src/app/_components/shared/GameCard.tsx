import React from 'react'


import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import SharedButton from './SharedButton';

type GameCardProps = {
  title?: string;
  description?: string;
  rating?: string;
  price?: string;
  imageUrl?: string;
  showButton?: boolean;
  onWishlistToggle?: (title: string) => void;
  isWishlisted?: boolean;
};

export default function GameCard({
  title = "Untitled",
  description,
  rating,
  price,
  imageUrl = "/placeholder-image.png",
  showButton = true,
  onWishlistToggle,
  isWishlisted = false,
}: GameCardProps) {
  return (
    <div className="group relative w-full max-w-sm sm:max-w-xs mx-auto">
<Card className="cursor-pointer relative mt-24 rounded-2xl border-2 border-[var(--color-primary)] bg-gradient-to-b from-[var(--color-card)] to-[var(--color-muted)] shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* الصورة مع overlays */}
        <div className="absolute top-0 left-1/2 w-[90%] h-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500">
          <Image
            src={imageUrl}
            alt={title}
            width={320}
            height={160}
            priority
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {rating && (
            <div className="absolute top-3 left-3 z-10 rounded-md bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-foreground)] shadow-md flex items-center gap-1">
              {rating} <Star className="inline h-4 w-4" />
            </div>
          )}

         <Button
  aria-label={`${
    isWishlisted ? "Remove from" : "Add to"
  } wishlist`}
  aria-pressed={isWishlisted}  size="icon"
            variant="ghost"
            onClick={() => onWishlistToggle?.(title)}
            className={`absolute top-3 right-3 z-10 h-9 w-9 rounded-full backdrop-blur-sm transition-colors ${
              isWishlisted
                ? "bg-[var(--color-destructive)]/20 text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/30"
                : "bg-[var(--color-background)]/80 hover:bg-[var(--color-destructive)]/10 hover:text-[var(--color-destructive)]"
            }`}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>
        </div>

        {/* محتوى النص */}
        <CardContent className="pt-20 px-6 pb-4 text-center">
          {price && (
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] mb-1">
              {price}
            </p>
          )}
          <h3 className="text-lg sm:text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-300 mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-[var(--color-muted-foreground)] line-clamp-3">
              {description}
            </p>
          )}
        </CardContent>

        {/* أزرار الفوتر */}
        {showButton && (
          <CardFooter className="px-6 pb-6 mt-auto">
            <SharedButton showIcon={false} />
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

