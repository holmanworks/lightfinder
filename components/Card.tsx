'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';



export interface CardProps {
  badge: React.ReactNode;
  highlight: string[];
  icon: any;
  title: string;
  socket: string;
  description: string[];
  photos: any[];
}



export function Card({ badge, highlight, icon }: CardProps) {
  return (
    <div className="bg-white flex flex-row gap-x-2 items-center p-3 ring-1 ring-black/10 rounded-[12px] hover:ring-black/30 hover:shadow-md">

        {/* Image */}
        <Image 
            src={icon} 
            alt="" 
            width={80} 
            height={80}
        />

        {/* Contents Group */}  
        <div className="flex flex-col justify-center w-full">
            
            {/* Badge */}
            <div className="inline-flex">{badge}</div>

            {/* Text */}
            <ul className="list-disc pl-4 text-black pt-1 space-y-1">
                {highlight.map((item, idx) => (
                  <li key={idx} className="font-other font-medium text-base">
                    {item}
                  </li>
                ))}
            </ul>
        </div>

        {/* Icon */}
        <ChevronRightIcon className="w-5 h-5 flex-shrink-0 stroke-[1.5px]" />

    </div>
  );
}
