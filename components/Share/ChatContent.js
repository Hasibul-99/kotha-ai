import {ScrollArea} from '@/components/ui/scroll-area'
import {useState} from 'react'

export default function ChatContent() {
  const [showChat, setShowChat] = useState(true)

  return (
    <>
      <div
        className='chat-content h-[80vh] md:h-[515px]'
        id='main-chat-content'
        data-simplebar='init'
      >
        {showChat ? (
          <>
            <ScrollArea className='h-[100%] md:h-[500px]'>
              <div className='flex flex-col items-start gap-[24px] p-6'>
                <div className='flex flex-row items-start p-0 gap-4'>
                  <div className='contents'>
                    <img
                      src='/assets/images/user.png'
                      alt='kotha'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    What is web design What is web design What is web design
                    What is web design What is web design
                  </div>

                  <div className='contents'>
                    <img src='/assets/icons/edit.svg' alt='kotha' />
                  </div>
                </div>

                <div className='flex flex-row items-start p-0 gap-4'>
                  <div className='w-10 h-10 contents'>
                    <img
                      src='/assets/images/logo.png'
                      alt='kotha'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='flex flex-col md:flex-row items-start gap-4'>
                    <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                      Web design is essentially the art and science of crafting
                      websites. It encompasses a blend of creativity and
                      functionality to deliver an engaging and informative
                      experience for users. Heres a breakdown of its key
                      aspects: Visual Appeal: Web designers focus on the
                      aesthetics of a website, including layout, colors, fonts,
                      and imagery. They strive to create a visually pleasing and
                      consistent user interface (UI) that reflects the brand
                      identity. User Experience (UX): This is paramount in web
                      design. Its about ensuring users can easily navigate and
                      find the information they need on the website. A
                      well-designed website is intuitive and user-friendly,
                      fostering a positive user experience. Functionality:
                      Behind the attractive facade lies a websites
                      functionality. Web designers plan and implement features
                      that allow users to interact with the website as intended.
                      This may involve forms, calls to action, or e-commerce
                      functionalities. Responsiveness: In todays mobile-first
                      world, websites need to adapt to different screen sizes
                      and devices. Web designers ensure websites display
                      seamlessly across desktops, tablets, and smartphones. Web
                      design vs. Web development: Its important to distinguish
                      between these two often confused terms. Web design focuses
                      on the visual and user experience aspects, while web
                      development translates those designs into a functioning
                      website using coding languages like HTML, CSS, and
                      JavaScript.
                    </div>

                    <div className='flex flex-row md:flex-col items-start p-0 gap-[16px]'>
                      <img src='/assets/icons/voice.svg' alt='voice' />
                      <img src='/assets/icons/reset.svg' alt='reset' />
                      <img src='/assets/icons/copy.svg' alt='copy' />
                      <img src='/assets/icons/love.svg' alt='love' />
                    </div>
                  </div>
                </div>

                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img
                      src='/assets/images/user.png'
                      alt='user'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    What is web design
                  </div>

                  <div>
                    <img src='/assets/icons/edit.svg' alt='edit' />
                  </div>
                </div>

                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img
                      src='/assets/images/logo.png'
                      alt='kotha'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    Web design is essentially the art and science of crafting
                    websites. It encompasses a blend of creativity and
                    functionality to deliver an engaging and informative
                    experience for users. Heres a breakdown of its key aspects:
                    Visual Appeal: Web designers focus on the aesthetics of a
                    website, including layout, colors, fonts, and imagery. They
                    strive to create a visually pleasing and consistent user
                    interface (UI) that reflects the brand identity. User
                    Experience (UX): This is paramount in web design. Its about
                    ensuring users can easily navigate and find the information
                    they need on the website. A well-designed website is
                    intuitive and user-friendly, fostering a positive user
                    experience. Functionality: Behind the attractive facade lies
                    a websites functionality. Web designers plan and implement
                    features that allow users to interact with the website as
                    intended. This may involve forms, calls to action, or
                    e-commerce functionalities. Responsiveness: In todays
                    mobile-first world, websites need to adapt to different
                    screen sizes and devices. Web designers ensure websites
                    display seamlessly across desktops, tablets, and
                    smartphones. Web design vs. Web development: Its important
                    to distinguish between these two often confused terms. Web
                    design focuses on the visual and user experience aspects,
                    while web development translates those designs into a
                    functioning website using coding languages like HTML, CSS,
                    and JavaScript.
                  </div>

                  <div>
                    <img src='/assets/icons/voice.svg' alt='voice' />
                    <img src='/assets/icons/reset.svg' alt='reset' />
                    <img src='/assets/icons/copy.svg' alt='copy' />
                    <img src='/assets/icons/love.svg' alt='love' />
                  </div>
                </div>
                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img
                      src='/assets/images/user.png'
                      alt='user'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    What is web design
                  </div>

                  <div>
                    <img src='/assets/icons/edit.svg' alt='edit' />
                  </div>
                </div>

                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img
                      src='/assets/images/logo.png'
                      alt='logo'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    Web design is essentially the art and science of crafting
                    websites. It encompasses a blend of creativity and
                    functionality to deliver an engaging and informative
                    experience for users. Heres a breakdown of its key aspects:
                    Visual Appeal: Web designers focus on the aesthetics of a
                    website, including layout, colors, fonts, and imagery. They
                    strive to create a visually pleasing and consistent user
                    interface (UI) that reflects the brand identity. User
                    Experience (UX): This is paramount in web design. Its about
                    ensuring users can easily navigate and find the information
                    they need on the website. A well-designed website is
                    intuitive and user-friendly, fostering a positive user
                    experience. Functionality: Behind the attractive facade lies
                    a websites functionality. Web designers plan and implement
                    features that allow users to interact with the website as
                    intended. This may involve forms, calls to action, or
                    e-commerce functionalities. Responsiveness: In todays
                    mobile-first world, websites need to adapt to different
                    screen sizes and devices. Web designers ensure websites
                    display seamlessly across desktops, tablets, and
                    smartphones. Web design vs. Web development: Its important
                    to distinguish between these two often confused terms. Web
                    design focuses on the visual and user experience aspects,
                    while web development translates those designs into a
                    functioning website using coding languages like HTML, CSS,
                    and JavaScript.
                  </div>

                  <div>
                    <img src='/assets/icons/voice.svg' alt='voice' />
                    <img src='/assets/icons/reset.svg' alt='reset' />
                    <img src='/assets/icons/copy.svg' alt='copy' />
                    <img src='/assets/icons/love.svg' alt='love' />
                  </div>
                </div>
                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img src='/assets/images/user.png' className='w-10 h-10' />
                  </div>
                  <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    What is web design
                  </div>

                  <div>
                    <img src='/assets/icons/edit.svg' alt='edit' />
                  </div>
                </div>

                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img src='/assets/images/logo.png' className='w-10 h-10' />
                  </div>
                  <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    Web design is essentially the art and science of crafting
                    websites. It encompasses a blend of creativity and
                    functionality to deliver an engaging and informative
                    experience for users. Heres a breakdown of its key aspects:
                    Visual Appeal: Web designers focus on the aesthetics of a
                    website, including layout, colors, fonts, and imagery. They
                    strive to create a visually pleasing and consistent user
                    interface (UI) that reflects the brand identity. User
                    Experience (UX): This is paramount in web design. Its about
                    ensuring users can easily navigate and find the information
                    they need on the website. A well-designed website is
                    intuitive and user-friendly, fostering a positive user
                    experience. Functionality: Behind the attractive facade lies
                    a websites functionality. Web designers plan and implement
                    features that allow users to interact with the website as
                    intended. This may involve forms, calls to action, or
                    e-commerce functionalities. Responsiveness: In todays
                    mobile-first world, websites need to adapt to different
                    screen sizes and devices. Web designers ensure websites
                    display seamlessly across desktops, tablets, and
                    smartphones. Web design vs. Web development: Its important
                    to distinguish between these two often confused terms. Web
                    design focuses on the visual and user experience aspects,
                    while web development translates those designs into a
                    functioning website using coding languages like HTML, CSS,
                    and JavaScript.
                  </div>

                  <div>
                    <img src='/assets/icons/voice.svg' alt='voice' />
                    <img src='/assets/icons/reset.svg' alt='reset' />
                    <img src='/assets/icons/copy.svg' alt='copy' />
                    <img src='/assets/icons/love.svg' alt='love' />
                  </div>
                </div>
                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img
                      src='/assets/images/user.png'
                      alt='user'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    What is web design
                  </div>

                  <div>
                    <img src='/assets/icons/edit.svg' alt='edit' />
                  </div>
                </div>

                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img src='/assets/images/logo.png' className='w-10 h-10' />
                  </div>
                  <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    Web design is essentially the art and science of crafting
                    websites. It encompasses a blend of creativity and
                    functionality to deliver an engaging and informative
                    experience for users. Heres a breakdown of its key aspects:
                    Visual Appeal: Web designers focus on the aesthetics of a
                    website, including layout, colors, fonts, and imagery. They
                    strive to create a visually pleasing and consistent user
                    interface (UI) that reflects the brand identity. User
                    Experience (UX): This is paramount in web design. Its about
                    ensuring users can easily navigate and find the information
                    they need on the website. A well-designed website is
                    intuitive and user-friendly, fostering a positive user
                    experience. Functionality: Behind the attractive facade lies
                    a websites functionality. Web designers plan and implement
                    features that allow users to interact with the website as
                    intended. This may involve forms, calls to action, or
                    e-commerce functionalities. Responsiveness: In todays
                    mobile-first world, websites need to adapt to different
                    screen sizes and devices. Web designers ensure websites
                    display seamlessly across desktops, tablets, and
                    smartphones. Web design vs. Web development: Its important
                    to distinguish between these two often confused terms. Web
                    design focuses on the visual and user experience aspects,
                    while web development translates those designs into a
                    functioning website using coding languages like HTML, CSS,
                    and JavaScript.
                  </div>

                  <div>
                    <img src='/assets/icons/voice.svg' alt='voice' />
                    <img src='/assets/icons/reset.svg' alt='reset' />
                    <img src='/assets/icons/copy.svg' alt='copy' />
                    <img src='/assets/icons/love.svg' alt='love' />
                  </div>
                </div>
                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img src='/assets/images/user.png' className='w-10 h-10' />
                  </div>
                  <div className='p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    What is web design
                  </div>

                  <div>
                    <img src='/assets/icons/edit.svg' alt='edit' />
                  </div>
                </div>

                <div className='flex flex-row items-start p-0 gap-4'>
                  <div>
                    <img
                      src='/assets/images/logo.png'
                      alt='logo'
                      className='w-10 h-10'
                    />
                  </div>
                  <div className='md:max-w-[70%] p-[16px] bg-[#FFFFFF] border border-[#E4E4E4] rounded-[4px_12px_12px_12px] font-medium text-[14px] leading-[140%] text-[#000A11]'>
                    Web design is essentially the art and science of crafting
                    websites. It encompasses a blend of creativity and
                    functionality to deliver an engaging and informative
                    experience for users. Heres a breakdown of its key aspects:
                    Visual Appeal: Web designers focus on the aesthetics of a
                    website, including layout, colors, fonts, and imagery. They
                    strive to create a visually pleasing and consistent user
                    interface (UI) that reflects the brand identity. User
                    Experience (UX): This is paramount in web design. Its about
                    ensuring users can easily navigate and find the information
                    they need on the website. A well-designed website is
                    intuitive and user-friendly, fostering a positive user
                    experience. Functionality: Behind the attractive facade lies
                    a websites functionality. Web designers plan and implement
                    features that allow users to interact with the website as
                    intended. This may involve forms, calls to action, or
                    e-commerce functionalities. Responsiveness: In todays
                    mobile-first world, websites need to adapt to different
                    screen sizes and devices. Web designers ensure websites
                    display seamlessly across desktops, tablets, and
                    smartphones. Web design vs. Web development: Its important
                    to distinguish between these two often confused terms. Web
                    design focuses on the visual and user experience aspects,
                    while web development translates those designs into a
                    functioning website using coding languages like HTML, CSS,
                    and JavaScript.
                  </div>

                  <div>
                    <img src='/assets/icons/voice.svg' alt='voice' />
                    <img src='/assets/icons/reset.svg' alt='reset' />
                    <img src='/assets/icons/copy.svg' alt='copy' />
                    <img src='/assets/icons/love.svg' alt='love' />
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
          <img src='/assets/images/send.png' alt='send' />
        </div>
      </div>
    </>
  )
}
