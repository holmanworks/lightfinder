'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Card, CardProps } from '@/components/Card'; // Ensure the correct path
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query"; // Import your media query hook

interface CardWithDrawerDialogProps extends CardProps {}


export function CardWithDrawerDialog({ title, badge, highlight, icon, socket, description, photos }: CardWithDrawerDialogProps) {
  const [open, setOpen] = React.useState(false); // State to handle drawer/dialog open/close
  const isDesktop = useMediaQuery('(min-width: 768px)'); // Media query to check if it's a large screen


  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>

        {/* Dialog Trigger */}
        <DialogTrigger asChild>
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
        </DialogTrigger>


        {/* Dialog Content */}
        <DialogContent>
            <div>{badge}</div>

            <div className="flex space-x-2 overflow-x-auto">
              {photos.map((photo, idx) => (
                <Image 
                  key={idx} 
                  src={photo} 
                  alt={`${title} image ${idx + 1}`} 
                  width={150} 
                  height={150}
                  className="rounded-md"
                />
              ))}
            </div>

            <div className='font-semibold text-lg text-black'>
              {socket} {title} Key Features
            </div>

            <ul className="list-disc pl-4 text-black pt-1 space-y-1">
                {description.map((item, idx) => (
                  <li key={idx} className="font-normal text-lg">
                    {item}
                  </li>
                ))}
            </ul>

            <hr className="my-2 border-divider" />

            <div className='flex flex-col items-center'>
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


        </DialogContent>

      </Dialog>
    );
  }


  
  // For smaller screens, we use a Drawer
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
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>
            This drawer shows details about <strong>{title}</strong>.
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
