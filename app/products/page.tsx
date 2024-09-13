"use client";

import React from "react";
import { Header } from "@components/Header";
import { MessageResult } from "@components/Message";
import { Container } from "@components/ui/container";
import { CardProps } from "@/components/Card";
import { UltraBright, SmartUltraBright, Switch, Pro } from "@/components/ui/badge";
import packagebox from "@/images/screenshots/package.png";
import photo1 from "@/images/screenshots/photo1.png";
import photo2 from "@/images/screenshots/photo2.png";
import photo3 from "@/images/screenshots/photo3.png";
import photo4 from "@/images/screenshots/photo4.png";
import photo5 from "@/images/screenshots/photo5.png";
import { SmallInput } from "@components/Footer";
import { CardWithDrawer } from "@components/CardWithDrawer";

const cards: CardProps[] = [
  {
    title: "UltraBright",
    badge: <UltraBright />,
    highlight: [
      "2x Brighter than halogen bulbs",
      "Enhanced white for improved brightness",
    ],
    icon: packagebox,
    socket: "H11",
    description: [
      "1800LM Brightness for each bulb",
      "6500K Daylight White color temperature",
      "High-speed rapid cooling fan",
      "Up to 15,000 LED lifespan",
    ],
    photos: [photo1, photo2, photo3, photo4, photo5],
  },
  {
    title: "Smart UltraBright",
    badge: <SmartUltraBright />,
    highlight: [
      "2x Brighter than halogen bulbs",
      "Customizable color, app-controlled",
    ],
    icon: packagebox,
    socket: "H11",
    description: [
      "1800LM Brightness for each bulb",
      "6500K Daylight White color temperature",
      "High-speed rapid cooling fan",
      "Up to 15,000 LED lifespan",
    ],
    photos: [photo1, photo2, photo3, photo4, photo5],
  },
  {
    title: "Switch",
    badge: <Switch />,
    highlight: [
      "Dual Color (White + Amber)",
      "Enhance visibility in rain, snow, or fog",
      "6500K Daylight White / 3000K Amber",
    ],
    icon: packagebox,
    socket: "H11",
    description: [
      "1800LM Brightness for each bulb",
      "6500K Daylight White color temperature",
      "High-speed rapid cooling fan",
      "Up to 15,000 LED lifespan",
    ],
    photos: [photo1, photo2, photo3, photo4, photo5],
  },
  {
    title: "Pro",
    badge: <Pro />,
    highlight: [
      "5x Brighter than halogen",
      "Adjustable brightness control",
      "6500K Daylight White",
    ],
    icon: packagebox,
    socket: "H11",
    description: [
      "1800LM Brightness for each bulb",
      "6500K Daylight White color temperature",
      "High-speed rapid cooling fan",
      "Up to 15,000 LED lifespan",
    ],
    photos: [photo1, photo2, photo3, photo4, photo5],
  },
];



export default function Products() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="fixed top-0 z-30 w-full bg-background">
        <Header />
      </div>

      {/* Contents */}
      <main className="flex-grow overflow-y-auto pt-[56px] pb-[88px]">
        <div className="py-4">
          <MessageResult />
        </div>

        <Container>
          <div className="mx-auto flex flex-col w-full gap-y-2 pb-8">
            {/* Render each card with its own drawer/dialog */}
            {cards.map((card, index) => (
              <CardWithDrawer key={index} {...card} />
            ))}
          </div>
        </Container>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 w-full bg-background z-20">
        <SmallInput />
      </div>    
    </div>
  );
}
