// import React from 'react';

interface ImageButtonProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function ImageButton({ imageUrl, title, description }: ImageButtonProps) {
  return (
    <div className="group perspective">
      <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
        <div className="relative h-[300px] w-[250px] overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-500/30 mix-blend-overlay" />
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-2 text-xl font-bold tracking-wider">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 blur transition duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}