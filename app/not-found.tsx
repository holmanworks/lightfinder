"use client";

import Image from "next/image"
import avatar from "@/images/logos/512.png"
import { useRouter } from "next/navigation"
import { Button } from "@components/ui/button"
import { Container } from "@/components/ui/container"

export default function NotFound() {
  const router = useRouter();

  return (
    <Container className="items-center flex h-screen flex-col m-auto justify-center">

      <div className="flex justify-center">
        <Image 
          src={avatar}
          alt="Avatar" 
          width={100}  
          height={100} 
        />
      </div>

      <h1 className="mt-8 md:text-7xl text-5xl font-medium text-black text-center">
        Page not found
      </h1>

      <p className="mx-4 mt-3 text-xl text-black text-center">
        We&apos;re sorry, the page you requested does not exist.
      </p>

      <Button 
        onClick={() => router.back()}
        variant="solid" 
        color="black" 
        size="small" 
        className="mt-8 rounded-[20px]">
        Go back
      </Button>

    </Container>
  )
}
