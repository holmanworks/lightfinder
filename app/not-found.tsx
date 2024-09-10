'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@components/ui/button'
import { Container } from '@/components/ui/container'

export default function NotFound() {
  const router = useRouter();

  return (
    <Container className='items-center flex h-screen flex-col m-auto justify-center'>

      <div className="flex justify-center">
        <Link href="/" aria-label="Home">
          
        </Link>
      </div>

      <h1 className="mt-10 md:text-7xl text-6xl font-semibold text-black text-center">
        Oh sheet... page not found
      </h1>

      <p className="mt-4 text-xl text-grey">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <Button 
        onClick={() => router.back()}
        variant="solid" 
        color="black" 
        size="small" 
        className="mt-10">
        Go back
      </Button>

    </Container>
  )
}
