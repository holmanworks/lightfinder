'use client';
import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import { Card, CardProps } from '@/components/Card';
import {
  Drawer,
  DrawerContent as BaseDrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Container } from './ui/container';


interface CardWithDrawerProps extends CardProps {}


export function CardWithDrawer({ title, badge, highlight, icon, socket, description, photos }: CardWithDrawerProps) {

  const [open, setOpen] = useState(false);
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="cursor-pointer">
          <Card
            badge={badge}
            highlight={highlight}
            icon={icon}
            title={title}
            socket={socket}
            description={description}
            photos={photos}
          />
        </div>
      </DrawerTrigger>


      {/* Drawer Content */}
      <BaseDrawerContent onClose={() => setOpen(false)}>
        <Container className='w-full overflow-y-auto py-[18px] space-y-5'>

          <div className="flex">{badge}</div>

          <div className="flex space-x-2 overflow-x-auto ">
            {photos.map((photo, idx) => (
              <Image 
                key={idx} 
                src={photo} 
                alt={`${title} image ${idx + 1}`} 
                width={160} 
                height={160}
                className="rounded-md"
              />
            ))}
          </div>

          <div className='font-semibold text-lg text-black'>
            {socket} {title} Key Features
          </div>

          <ul className="list-disc pl-4 text-black space-y-1">
              {description.map((item, idx) => (
                <li key={idx} className="font-normal text-lg">
                  {item}
                </li>
              ))}
          </ul>

          <div className='flex flex-col'>
            <div className='font-semibold text-lg text-black'>
              Can't find any in store?
            </div>
            
            <div className='flex font-semibold text-base text-primary hover:text-primary/80 underline underline-offset-2'>
              <a href="https://www.autozone.com/electrical-and-lighting/fog-light/p/type-s-fog-light-lm57849-60-6/1151307_0_0" className="flex items-center gap-x-1">
                Purchase online 
                <ArrowTopRightOnSquareIcon className='w-4 h-4' />
              </a>
            </div>
          </div>

        </Container>

        </BaseDrawerContent>

    </Drawer>
    
  );
}
