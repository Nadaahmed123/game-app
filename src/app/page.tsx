'use client';

import { useState } from 'react';
import GameCard from './_components/shared/GameCard';
import SharedButton from './_components/shared/SharedButton';

export default function Home() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const games = [
    {
      title: 'GTA V',
      description: 'Explore the criminal underworld of Los Santos.',
      rating: 4.7,
      imageUrl: '/image.png',
    },
    {
      title: 'Call of Duty',
      description: 'Engage in modern warfare with intense combat.',
      rating: 4.5,
      imageUrl: '/image.png',
    },
    {
      title: 'Cyberpunk 2077',
      description: 'Dive into a dystopian open-world future.',
      rating: 4.3,
      imageUrl: '/image.png',
    },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans bg-background text-foreground">
      <main className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
         {/* <SharedButton
         className='bg-primary text-white'  
  label="Add to Wishlist"
  iconType="heart"
  variant="secondary"
  iconPosition="left"
  onClick={() => console.log("Clicked!")}
/> */}

          {games.map((game) => (
            <GameCard
            
              key={game.title}
              {...game}
              onWishlistToggle={() => toggleWishlist(game.title)}
              isWishlisted={wishlist.includes(game.title)}
              customButton={
                <SharedButton
                  label="Buy Now"
                  onClick={() => alert(`Added ${game.title} to cart!`)}
                />
              }
            />
          ))}

          <GameCard imageUrl="/image.png" title="Mystery Game" insideImageOnly />

          <GameCard
            imageUrl="/image.png"
            title="GameX Alpha"
            description="A very long and detailed game description that goes on and on to test layout wrapping and content overflow styling."
            customButton={
              <SharedButton label="Play Now" iconType="game" />
            }
          />
          
        </div>
      </main>
    </div>
  );
}
