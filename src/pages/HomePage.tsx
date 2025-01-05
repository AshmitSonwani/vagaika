// import React from 'react';
import { motion } from 'framer-motion';
import { ProductCarousel } from '../components/product/ProductCarousel';
import { AnimatedSection } from '../components/AnimatedSection';
import { ImageCard } from '../components/ImageCard';
import { ImageModal } from '../components/ImageModal';
import { images } from '../data/images';
import { useImageNavigation } from '../hooks/useImageNavigation';

export function HomePage() {

  const { 
    currentImage, 
    showImage, 
    showNext, 
    showPrevious, 
    hasNext, 
    hasPrevious 
  } = useImageNavigation(images);
  
  const products = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      name: "Limited Edition Sneakers",
      price: "$299",
      description: "Premium handcrafted sneakers with unique design elements"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      name: "Urban Runner",
      price: "$189",
      description: "Lightweight performance shoes for the modern athlete"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      name: "Classic Series",
      price: "$159",
      description: "Timeless design meets contemporary comfort"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6",
      name: "Sport Elite",
      price: "$249",
      description: "Professional grade athletic footwear"
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      name: "Lifestyle Plus",
      price: "$219",
      description: "Versatile shoes for both casual and active wear"
    }
  ];

  return (
    <>
     <main className="px-8 py-16">
      <AnimatedSection>
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-5xl font-bold tracking-tight text-white"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Collection
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-300"
          >
            Discover our latest designer pieces, crafted for the modern lifestyle
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ProductCarousel products={products} />
      </AnimatedSection>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={showImage}
          />
        ))}
      </div>
      <ImageModal
        image={currentImage}
        onClose={() => showImage(null)}
        onNext={showNext}
        onPrevious={showPrevious}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </main>

    </main>
    </>
   
  );
}