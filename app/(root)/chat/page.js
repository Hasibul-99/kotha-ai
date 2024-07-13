'use client'

import ChatContent from '@/components/Share/ChatContent'
import ChatList from '@/components/Share/ChatList'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {useTheme} from 'next-themes'
import Link from 'next/link'
import {useState} from 'react'

export default function Chat() {
  const {setTheme, resolvedTheme} = useTheme()
  const [showChat, setShowChat] = useState(true)

  return (
    <div className='main-chart-wrapper gap-0 md:flex'>
      <div className='chat-info border dark:border-defaultborder/10 bg-[#fff] hidden md:block'>
        <div className='flex items-center justify-between w-full p-4 border-b dark:border-defaultborder/10'>
          <Link href='/'>
            <div className='flex flex-row items-center p-0 gap-[16px]'>
              <img src='/assets/images/logo.png' alt='kotha' />
              <span className='font-bold text-[24px] leading-[29px] text-[#000A11]'>
                Kotha.ai
              </span>
            </div>
          </Link>
        </div>

        <ChatList />
      </div>

      <div className='card w-full'>
        <div className='flex flex-row justify-between items-center p-[16px] gap-[10px] bg-[#FFFFFF] border-b border-[#E4E4E4]'>
          <div className='font-bold text-[24px] leading-[150%] text-[#000A11] hidden md:block'>
            New Chat
          </div>
          <div className='font-bold text-[24px] leading-[150%] text-[#000A11] md:hidden block'>
            <Drawer direction='left'>
              <DrawerTrigger>
                <img src='/assets/icons/nav.svg' alt='nav' />
              </DrawerTrigger>
              <DrawerContent className='h-full w-[350px] rounded-none'>
                <ChatList />
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className='flex flex-row items-center p-0 gap-[16px]'>
            <div className='hidden md:flex flex-row items-center p-[8px] gap-[8px] bg-[#E4E4E4] rounded-[12px]'>
              <span
                onClick={() => setTheme('light')}
                className='w-[24px] h-[24px] bg-[#FFFFFF] rounded-[4px] relative cursor-pointer'
              >
                <img
                  src='/assets/images/sun.png'
                  className='absolute top-[5px] left-[4px]'
                />
              </span>
              <span
                onClick={() => setTheme('dark')}
                className='w-[24px] h-[24px] rounded-[4px] relative cursor-pointer'
              >
                <img
                  src='/assets/images/moon.png'
                  className='absolute top-[5px] left-[4px]'
                />
              </span>
            </div>

            <div>
              <img src='/assets/images/user.png' alt='kotha' />
            </div>
          </div>
        </div>

        <ChatContent />
      </div>
    </div>
  )
}
