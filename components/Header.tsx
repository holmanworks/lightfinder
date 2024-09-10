'use client'

import { Fragment } from 'react'
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@components/ui/button'
import { Container } from '@components/ui/container'
import Image, { type ImageProps } from 'next/image'
import { GetHelp, Location } from '@components/ui/icon'
import { LogoBlack } from '@components/ui/logo'



const locations = [
  {
    store: '1457 E Florence',    
  },
]



function MobileNavLabel({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className='px-2 h-6 text-sm text-grey flex items-center'>
      {children}
    </div>
  )
}



function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button 
      as={Link} 
      href={href} 
      className="block hover:bg-secondary w-full h-8 px-2 items-center flex justify-between rounded-[6px] text-base text-black font-normal"
    >
      <div className="flex items-center gap-x-2">
        {children}
      </div>
      <ChevronRightIcon className="w-4 h-4" /> 
    </Popover.Button>
  )
}



function GetHelpIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 overflow-visible stroke-black"
      fill="none"
      strokeWidth={1.5}
    >
      <path d="M8.25002 7.37502C8.25002 6.40854 9.03354 5.62502 10 5.62502C10.9665 5.62502 11.75 6.40854 11.75 7.37502C11.75 8.04776 11.3704 8.63182 10.8138 8.92473C10.284 9.20346 10.0001 9.79899 10 10.3976V11.75M9.99999 13.5V15.25M18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C14.8325 1.25 18.75 5.16751 18.75 10Z"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <XMarkIcon
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}



function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="hover:bg-secondary relative z-10 flex h-8 w-full pl-[6px] pr-[10px] items-center justify-center focus-visible:outline-none rounded-full"
        aria-label="Toggle Navigation"
      >
        {({ open }) => (
          <div className="flex items-center">
            <GetHelpIcon open={open} />
            <span className="ml-1 text-base font-semibold text-black">Help</span>
          </div>
        )}      
      </Popover.Button>
      
      <Transition.Root>
        {/* <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-black/20" />
        </Transition.Child> */}
        
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute max-w-[672px] mx-2 sm:mx-auto inset-x-0 top-full flex origin-top flex-col rounded-[12px] bg-white px-2 py-2 shadow-xl ring-1 ring-black/15"
          >
            <MobileNavLabel>
              Need help?
            </MobileNavLabel>

            <MobileNavLink href="#">
              Troubleshooting
            </MobileNavLink>
            
            <MobileNavLink href="#">
              Videos
            </MobileNavLink>

            <MobileNavLink href="#">
              Install Guide
            </MobileNavLink>

            <MobileNavLink href="#">
              Fitment Issues
            </MobileNavLink>

            <hr className="mx-2 my-2 border-divider" />

            <MobileNavLabel>
              Contact Us
            </MobileNavLabel>

            <MobileNavLink href="#">
              By Email
            </MobileNavLink>

            <MobileNavLink href="#">
              By Phone
            </MobileNavLink>

            <MobileNavLink href="#">
              By Chat
            </MobileNavLink>
            
          </Popover.Panel>

        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}



export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background w-full">
      <Container>
        <nav className="flex items-center justify-between h-[56px]">

          {/* LOGO */}
          <div className='flex justify-start'>
            <Link href="/" aria-label="Home">
              <LogoBlack />
            </Link>
          </div>
            
          {/* Location */}
          <div className="flex flex-1 justify-end items-center gap-x-1">
              
            {/* <div className="flex gap-x-1 px-[6px] h-8 items-center">
              <Location />
              <div className='text-base text-black'>at</div>
              <div className="font-semibold text-base text-black truncate text-clip">
                {locations[0].store}
              </div>
            </div> */}

            <div className="">
              <MobileNavigation />
            </div>

          </div>
        </nav>
      </Container>
    </header>
  )
}
