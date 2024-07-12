'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {ScrollArea} from '@/components/ui/scroll-area'
import {useTheme} from 'next-themes'
import Link from 'next/link'
import {useState} from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import {FaEllipsisVertical, FaPlus} from 'react-icons/fa6'
import {IoSettingsOutline} from 'react-icons/io5'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Chat() {
  const {setTheme, resolvedTheme} = useTheme()
  const [showChat, setShowChat] = useState(true)

  return (
    <div className='main-chart-wrapper gap-0 md:flex'>
      <div className='chat-info border dark:border-defaultborder/10 bg-[#fff]'>
        <div className='flex items-center justify-between w-full p-4 border-b dark:border-defaultborder/10'>
          <Link href='/'>
            <div className='flex flex-row items-center p-0 gap-[16px]'>
              <img src='/assets/images/logo.png' />
              <span className='font-bold text-[24px] leading-[29px] text-[#000A11]'>
                Kotha.ai
              </span>
            </div>
          </Link>
        </div>
        <div className='p-4 dark:border-defaultborder/10'>
          <button
            aria-label='button'
            className='flex flex-row justify-center items-center p-0 gap-[12px] w-[268px] h-[40px] bg-[#000A11] rounded-[8px] font-normal font-medium text-[14px] leading-[140%] text-[#FFFFFF]'
            type='button'
            id='button-addon2'
          >
            <FaPlus />
            New Chat
          </button>
        </div>

        <ScrollArea className='md:h-[442px] p-4'>
          <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] bg-[#E4E4E4] rounded-[8px] cursor-pointer'>
            New Chat
            <FaEllipsisVertical />
          </li>
          <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] rounded-none  cursor-pointer'>
            New Chat
            <FaEllipsisVertical />
          </li>
          <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] rounded-none'>
            New Chat
            <FaEllipsisVertical />
          </li>
          <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] rounded-none'>
            New Chat
            <FaEllipsisVertical />
          </li>
          <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] rounded-none'>
            New Chat
            <FaEllipsisVertical />
          </li>
          <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] rounded-none'>
            New Chat
            <FaEllipsisVertical />
          </li>
        </ScrollArea>

        <div className='flex flex-col items-start  border-t border-[#E4E4E4]'>
          <ui className='list-none mb-0 mt-2 chat-users-tab'>
            <li className='flex flex-row items-center p-[12px] gap-[10px] rounded-[8px]'>
              <BsInfoCircle /> Help
            </li>

            <Dialog className=''>
              <DialogTrigger>
                <li className='flex flex-row items-center px-[12px] gap-[10px] rounded-[8px]'>
                  <IoSettingsOutline /> Settings
                </li>
              </DialogTrigger>
              <DialogContent className='max-w-fit'>
                <DialogHeader>
                  <DialogTitle className='py-3'>Settings</DialogTitle>
                  <DialogDescription className='border-t'>
                    <div className='flex flex-row items-start p-0'>
                      <div className='flex flex-col items-center gap-4 py-4 pr-3 border-r border-[#E4E4E4]'>
                        <div className='w-40 h-10 px-4 pt-2 bg-[#E4E4E4] rounded-[8px] cursor-pointer'>
                          General
                        </div>
                        <div className='w-40 h-10 px-4 pt-2 border-b cursor-pointer'>
                          Profile
                        </div>
                        <div className='w-40 h-10 px-4 pt-2 border-b cursor-pointer'>
                          Security
                        </div>
                        <div className='w-40 h-10 px-4 pt-2 border-b cursor-pointer'>
                          Notification
                        </div>
                      </div>
                      <div className=''>
                        {/* General  */}
                        <div className='flex flex-col items-start p-[16px] gap-[16px]'>
                          <div className='flex flex-row justify-between items-center p-0 gap-[200px]'>
                            <div>Theme</div>
                            <div>
                              <Select>
                                <SelectTrigger className='w-[100px]'>
                                  <SelectValue placeholder='Theme' />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value='light'>Light</SelectItem>
                                  <SelectItem value='dark'>Dark</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </ui>
        </div>
      </div>

      <div className='card w-full'>
        <div className='flex flex-row justify-between items-center p-[16px] gap-[10px] bg-[#FFFFFF] border-b border-[#E4E4E4]'>
          <div className='font-bold text-[24px] leading-[150%] text-[#000A11]'>
            New Chat
          </div>
          <div className='flex flex-row items-center p-0 gap-[16px]'>
            <div className='flex flex-row items-center p-[8px] gap-[8px] bg-[#E4E4E4] rounded-[12px]'>
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
              <img src='/assets/images/user.png' />
            </div>
          </div>
        </div>

        <div
          className='chat-content h-[515px]'
          id='main-chat-content'
          data-simplebar='init'
        >
          {showChat ? (
            <>
              <ScrollArea className='md:h-[500px]'>
                <div className='flex flex-col items-start gap-[24px] p-6'>
                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/user.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      What is web design
                    </div>

                    <div>
                      <img src='/assets/icons/edit.svg' />
                      {/* <img src='/assets/icons/reset.svg' />
                    <img src='/assets/icons/voice.svg' />
                    <img src='/assets/icons/copy.svg' />
                    <img src='/assets/icons/love.svg' /> */}
                    </div>
                  </div>

                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/logo.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      Web design is essentially the art and science of crafting
                      websites. It encompasses a blend of creativity and
                      functionality to deliver an engaging and informative
                      experience for users. Here's a breakdown of its key
                      aspects: Visual Appeal: Web designers focus on the
                      aesthetics of a website, including layout, colors, fonts,
                      and imagery. They strive to create a visually pleasing and
                      consistent user interface (UI) that reflects the brand
                      identity. User Experience (UX): This is paramount in web
                      design. It's about ensuring users can easily navigate and
                      find the information they need on the website. A
                      well-designed website is intuitive and user-friendly,
                      fostering a positive user experience. Functionality:
                      Behind the attractive facade lies a website's
                      functionality. Web designers plan and implement features
                      that allow users to interact with the website as intended.
                      This may involve forms, calls to action, or e-commerce
                      functionalities. Responsiveness: In today's mobile-first
                      world, websites need to adapt to different screen sizes
                      and devices. Web designers ensure websites display
                      seamlessly across desktops, tablets, and smartphones. Web
                      design vs. Web development: It's important to distinguish
                      between these two often confused terms. Web design focuses
                      on the visual and user experience aspects, while web
                      development translates those designs into a functioning
                      website using coding languages like HTML, CSS, and
                      JavaScript.
                    </div>

                    <div>
                      <img src='/assets/icons/reset.svg' />
                      <img src='/assets/icons/voice.svg' />
                      <img src='/assets/icons/copy.svg' />
                      <img src='/assets/icons/love.svg' />
                    </div>
                  </div>

                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/user.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      What is web design
                    </div>

                    <div>
                      <img src='/assets/icons/edit.svg' />
                    </div>
                  </div>

                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/logo.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      Web design is essentially the art and science of crafting
                      websites. It encompasses a blend of creativity and
                      functionality to deliver an engaging and informative
                      experience for users. Here's a breakdown of its key
                      aspects: Visual Appeal: Web designers focus on the
                      aesthetics of a website, including layout, colors, fonts,
                      and imagery. They strive to create a visually pleasing and
                      consistent user interface (UI) that reflects the brand
                      identity. User Experience (UX): This is paramount in web
                      design. It's about ensuring users can easily navigate and
                      find the information they need on the website. A
                      well-designed website is intuitive and user-friendly,
                      fostering a positive user experience. Functionality:
                      Behind the attractive facade lies a website's
                      functionality. Web designers plan and implement features
                      that allow users to interact with the website as intended.
                      This may involve forms, calls to action, or e-commerce
                      functionalities. Responsiveness: In today's mobile-first
                      world, websites need to adapt to different screen sizes
                      and devices. Web designers ensure websites display
                      seamlessly across desktops, tablets, and smartphones. Web
                      design vs. Web development: It's important to distinguish
                      between these two often confused terms. Web design focuses
                      on the visual and user experience aspects, while web
                      development translates those designs into a functioning
                      website using coding languages like HTML, CSS, and
                      JavaScript.
                    </div>

                    <div>
                      <img src='/assets/icons/reset.svg' />
                      <img src='/assets/icons/voice.svg' />
                      <img src='/assets/icons/copy.svg' />
                      <img src='/assets/icons/love.svg' />
                    </div>
                  </div>
                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/user.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      What is web design
                    </div>

                    <div>
                      <img src='/assets/icons/edit.svg' />
                      {/* <img src='/assets/icons/reset.svg' />
                    <img src='/assets/icons/voice.svg' />
                    <img src='/assets/icons/copy.svg' />
                    <img src='/assets/icons/love.svg' /> */}
                    </div>
                  </div>

                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/logo.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      Web design is essentially the art and science of crafting
                      websites. It encompasses a blend of creativity and
                      functionality to deliver an engaging and informative
                      experience for users. Here's a breakdown of its key
                      aspects: Visual Appeal: Web designers focus on the
                      aesthetics of a website, including layout, colors, fonts,
                      and imagery. They strive to create a visually pleasing and
                      consistent user interface (UI) that reflects the brand
                      identity. User Experience (UX): This is paramount in web
                      design. It's about ensuring users can easily navigate and
                      find the information they need on the website. A
                      well-designed website is intuitive and user-friendly,
                      fostering a positive user experience. Functionality:
                      Behind the attractive facade lies a website's
                      functionality. Web designers plan and implement features
                      that allow users to interact with the website as intended.
                      This may involve forms, calls to action, or e-commerce
                      functionalities. Responsiveness: In today's mobile-first
                      world, websites need to adapt to different screen sizes
                      and devices. Web designers ensure websites display
                      seamlessly across desktops, tablets, and smartphones. Web
                      design vs. Web development: It's important to distinguish
                      between these two often confused terms. Web design focuses
                      on the visual and user experience aspects, while web
                      development translates those designs into a functioning
                      website using coding languages like HTML, CSS, and
                      JavaScript.
                    </div>

                    <div>
                      <img src='/assets/icons/reset.svg' />
                      <img src='/assets/icons/voice.svg' />
                      <img src='/assets/icons/copy.svg' />
                      <img src='/assets/icons/love.svg' />
                    </div>
                  </div>
                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/user.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      What is web design
                    </div>

                    <div>
                      <img src='/assets/icons/edit.svg' />
                      {/* <img src='/assets/icons/reset.svg' />
                    <img src='/assets/icons/voice.svg' />
                    <img src='/assets/icons/copy.svg' />
                    <img src='/assets/icons/love.svg' /> */}
                    </div>
                  </div>

                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/logo.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      Web design is essentially the art and science of crafting
                      websites. It encompasses a blend of creativity and
                      functionality to deliver an engaging and informative
                      experience for users. Here's a breakdown of its key
                      aspects: Visual Appeal: Web designers focus on the
                      aesthetics of a website, including layout, colors, fonts,
                      and imagery. They strive to create a visually pleasing and
                      consistent user interface (UI) that reflects the brand
                      identity. User Experience (UX): This is paramount in web
                      design. It's about ensuring users can easily navigate and
                      find the information they need on the website. A
                      well-designed website is intuitive and user-friendly,
                      fostering a positive user experience. Functionality:
                      Behind the attractive facade lies a website's
                      functionality. Web designers plan and implement features
                      that allow users to interact with the website as intended.
                      This may involve forms, calls to action, or e-commerce
                      functionalities. Responsiveness: In today's mobile-first
                      world, websites need to adapt to different screen sizes
                      and devices. Web designers ensure websites display
                      seamlessly across desktops, tablets, and smartphones. Web
                      design vs. Web development: It's important to distinguish
                      between these two often confused terms. Web design focuses
                      on the visual and user experience aspects, while web
                      development translates those designs into a functioning
                      website using coding languages like HTML, CSS, and
                      JavaScript.
                    </div>

                    <div>
                      <img src='/assets/icons/reset.svg' />
                      <img src='/assets/icons/voice.svg' />
                      <img src='/assets/icons/copy.svg' />
                      <img src='/assets/icons/love.svg' />
                    </div>
                  </div>
                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/user.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      What is web design
                    </div>

                    <div>
                      <img src='/assets/icons/edit.svg' />
                      {/* <img src='/assets/icons/reset.svg' />
                    <img src='/assets/icons/voice.svg' />
                    <img src='/assets/icons/copy.svg' />
                    <img src='/assets/icons/love.svg' /> */}
                    </div>
                  </div>

                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/logo.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      Web design is essentially the art and science of crafting
                      websites. It encompasses a blend of creativity and
                      functionality to deliver an engaging and informative
                      experience for users. Here's a breakdown of its key
                      aspects: Visual Appeal: Web designers focus on the
                      aesthetics of a website, including layout, colors, fonts,
                      and imagery. They strive to create a visually pleasing and
                      consistent user interface (UI) that reflects the brand
                      identity. User Experience (UX): This is paramount in web
                      design. It's about ensuring users can easily navigate and
                      find the information they need on the website. A
                      well-designed website is intuitive and user-friendly,
                      fostering a positive user experience. Functionality:
                      Behind the attractive facade lies a website's
                      functionality. Web designers plan and implement features
                      that allow users to interact with the website as intended.
                      This may involve forms, calls to action, or e-commerce
                      functionalities. Responsiveness: In today's mobile-first
                      world, websites need to adapt to different screen sizes
                      and devices. Web designers ensure websites display
                      seamlessly across desktops, tablets, and smartphones. Web
                      design vs. Web development: It's important to distinguish
                      between these two often confused terms. Web design focuses
                      on the visual and user experience aspects, while web
                      development translates those designs into a functioning
                      website using coding languages like HTML, CSS, and
                      JavaScript.
                    </div>

                    <div>
                      <img src='/assets/icons/reset.svg' />
                      <img src='/assets/icons/voice.svg' />
                      <img src='/assets/icons/copy.svg' />
                      <img src='/assets/icons/love.svg' />
                    </div>
                  </div>
                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/user.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      What is web design
                    </div>

                    <div>
                      <img src='/assets/icons/edit.svg' />
                      {/* <img src='/assets/icons/reset.svg' />
                    <img src='/assets/icons/voice.svg' />
                    <img src='/assets/icons/copy.svg' />
                    <img src='/assets/icons/love.svg' /> */}
                    </div>
                  </div>

                  <div className='flex flex-row items-start p-0 gap-4'>
                    <div>
                      <img
                        src='/assets/images/logo.png'
                        className='w-10 h-10'
                      />
                    </div>
                    <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      Web design is essentially the art and science of crafting
                      websites. It encompasses a blend of creativity and
                      functionality to deliver an engaging and informative
                      experience for users. Here's a breakdown of its key
                      aspects: Visual Appeal: Web designers focus on the
                      aesthetics of a website, including layout, colors, fonts,
                      and imagery. They strive to create a visually pleasing and
                      consistent user interface (UI) that reflects the brand
                      identity. User Experience (UX): This is paramount in web
                      design. It's about ensuring users can easily navigate and
                      find the information they need on the website. A
                      well-designed website is intuitive and user-friendly,
                      fostering a positive user experience. Functionality:
                      Behind the attractive facade lies a website's
                      functionality. Web designers plan and implement features
                      that allow users to interact with the website as intended.
                      This may involve forms, calls to action, or e-commerce
                      functionalities. Responsiveness: In today's mobile-first
                      world, websites need to adapt to different screen sizes
                      and devices. Web designers ensure websites display
                      seamlessly across desktops, tablets, and smartphones. Web
                      design vs. Web development: It's important to distinguish
                      between these two often confused terms. Web design focuses
                      on the visual and user experience aspects, while web
                      development translates those designs into a functioning
                      website using coding languages like HTML, CSS, and
                      JavaScript.
                    </div>

                    <div>
                      <img src='/assets/icons/reset.svg' />
                      <img src='/assets/icons/voice.svg' />
                      <img src='/assets/icons/copy.svg' />
                      <img src='/assets/icons/love.svg' />
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </>
          ) : (
            <>
              <div className='flex flex-col items-center p-[100px_24px_24px] gap-[24px] '>
                <div>
                  <img
                    src='/assets/images/kotha.png'
                    className='w-20 h-20'
                    alt='kotha'
                  />
                </div>
                <div className='font-bold text-[24px] leading-[150%] text-center text-[#000A11]'>
                  <h1>Hello, Omar </h1>
                  <h1>How can I help you today?</h1>
                </div>

                <div className='flex flex-row flex-wrap justify-center items-start p-0 gap-[16px]'>
                  <div className='w-60 font-medium text-[14px] leading-[140%] text-center text-[#000A11] flex flex-row justify-center items-center py-8 px-4 gap-[10px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[16px]'>
                    Teach me the concept of game theory in simple terms
                  </div>
                  <div className='w-60 font-medium text-[14px] leading-[140%] text-center text-[#000A11] flex flex-row justify-center items-center py-8 px-4 gap-[10px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[16px]'>
                    Help me draft a response to a friend
                  </div>
                  <div className='w-60 font-medium text-[14px] leading-[140%] text-center text-[#000A11] flex flex-row justify-center items-center py-8 px-4 gap-[10px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[16px]'>
                    Explain the key rules of rugby, starting with the basics
                  </div>
                  <div className='w-60 font-medium text-[14px] leading-[140%] text-center text-[#000A11] flex flex-row justify-center items-center py-8 px-4 gap-[10px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[16px]'>
                    Explain nostalgia to a kindergartener
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className='flex flex-row items-start p-[24px] gap-[24px] bg-[#FFFFFF] border-t border-[#E4E4E4]'>
          <div className='w-full'>
            <input
              className='h-[56px] w-full flex flex-row justify-between items-center px-[16px] gap-[10px] bg-[#F9F9F9] border border-[#E4E4E4] rounded-[12px]'
              placeholder='Write here.'
              type='text'
            />
          </div>
          <div>
            <img src='/assets/images/send.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
