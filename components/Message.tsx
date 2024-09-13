"use client"

import React from "react"
import avatar from "@/images/logos/512.png"
import Image from "next/image"
import { Loading } from "@/components/ui/spinner";
import { Container } from "@/components/ui/container"


interface MessageProps {
  message: React.ReactNode;
  avatarSize: number; // Add avatar size prop
  loading: boolean;   // Add loading state prop
}


export function MessageResponse({ message, avatarSize, loading }: MessageProps) {
  return (
    <Container>
      <div className="py-4">

        <Image 
          src={avatar}
          alt="Avatar" 
          width={avatarSize}  // Use dynamic avatar size
          height={avatarSize} // Use dynamic avatar size
        />

        <div className="sm:text-7xl text-5xl font-normal text-black pt-4">
          {message}
        </div>

        {loading && (
          <div className="fixed bottom-[220px] left-0 right-0 flex justify-center w-full z-50">
            <Loading />
          </div>
        )}

      </div>
    </Container>
  )
}


export function MessageResult() {
  return (
    <Container>
      <div>

        <div className="text-4xl font-normal text-black">
          <>Upgrade to these <strong>H11</strong> UltraBright LEDs for increased brightness and clarity.</>
        </div>

      </div>
    </Container>
  )
}