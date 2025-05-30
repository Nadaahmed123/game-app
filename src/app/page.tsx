"use client"

import { useState } from "react"
import GameCard from "./_components/shared/GameCard"

export default function Home() {
  const [wishlist, setWishlist] = useState<string[]>([])

  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    )
  }

  const games = [
    {
      title: "GTA V",
      description: "Explore the criminal underworld of Los Santos.",
      rating: "4.7",
      price: "$19.99",
      imageUrl: "/image.png",
    },
    {
      title: "Call of Duty",
      description: "Engage in modern warfare with intense combat.",
      rating: "4.5",
      price: "$59.99",
      imageUrl: "/image.png",
    },
    {
      title: "Cyberpunk 2077",
      description: "Dive into a dystopian open-world future.",
      rating: "4.3",
      price: "$29.99",
      imageUrl: "/image.png",
    },
  ]

  return (
    <div className="min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 sm:p-20 font-sans">
      <main className="row-start-2 flex flex-col items-center sm:items-start gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.title}
              title={game.title}
              description={game.description}
              rating={game.rating}
              price={game.price}
              imageUrl={game.imageUrl}
              onWishlistToggle={toggleWishlist}
              isWishlisted={wishlist.includes(game.title)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
