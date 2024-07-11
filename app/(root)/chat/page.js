import {BsInfoCircle} from 'react-icons/bs'
import {FaEllipsisVertical, FaPlus} from 'react-icons/fa6'
import {IoSettingsOutline} from 'react-icons/io5'

export default function Chat() {
  return (
    <div className='main-chart-wrapper p-2 gap-0 lg:flex'>
      <div className='chat-info border dark:border-defaultborder/10'>
        <div className='flex items-center justify-between w-full p-4 border-b dark:border-defaultborder/10'>
          <div className='flex flex-row items-center p-0 gap-[16px]'>
            <img src='/assets/images/logo.png' />
            <span className='font-semibold mb-0 text-[1.25rem] !text-defaulttextcolor dark:text-defaulttextcolor/70'>
              Kotha.ai
            </span>
          </div>
        </div>
        <div className='p-4 border-b dark:border-defaultborder/10'>
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

        <div className='tab-content hidden' id='myTabContent'>
          <ul
            className='list-none mb-0 mt-2 chat-users-tab'
            id='chat-msg-scroll'
            data-simplebar='init'
          >
            <div className='simplebar-wrapper' style={{margin: 0}}>
              <div className='simplebar-height-auto-observer-wrapper'>
                <div className='simplebar-height-auto-observer' />
              </div>
              <div className='simplebar-mask'>
                <div className='simplebar-offset' style={{right: 0, bottom: 0}}>
                  <div
                    className='simplebar-content-wrapper'
                    tabIndex={0}
                    role='region'
                    aria-label='scrollable content'
                    style={{height: 'auto', overflow: 'hidden scroll'}}
                  >
                    <div className='simplebar-content' style={{padding: 0}}>
                      <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] bg-[#E4E4E4] rounded-[8px]'>
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
                      <li className='flex flex-row justify-between items-center px-[12px] gap-[10px] h-[40px] rounded-none'>
                        New Chat
                        <FaEllipsisVertical />
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>

          <div className='flex flex-col items-start  border-t border-[#E4E4E4]'>
            <ui className='list-none mb-0 mt-2 chat-users-tab'>
              <li className='flex flex-row items-center p-[12px] gap-[10px] rounded-[8px]'>
                <BsInfoCircle /> Help
              </li>
              <li className='flex flex-row items-center px-[12px] gap-[10px] rounded-[8px]'>
                <IoSettingsOutline /> Settings
              </li>
            </ui>
          </div>
        </div>
      </div>

      <div className='main-chat-area border dark:border-defaultborder/10'>
        <div className='sm:flex items-center p-2 border-b dark:border-defaultborder/10'>
          <div className='flex items-center leading-none'>
            <span className='avatar avatar-lg online me-4 avatar-rounded chatstatusperson'>
              <img
                className='chatimageperson'
                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/2.jpg'
                alt='img'
              />
            </span>
            <div className='flex-grow'>
              <p className='mb-1 font-semibold text-[.875rem]'>
                <a
                  href='javascript:void(0);'
                  className='chatnameperson responsive-userinfo-open !text-defaulttextcolor dark:text-defaulttextcolor/70'
                >
                  Emiley Jackson
                </a>
              </p>
              <p className='text-textmuted mb-0 chatpersonstatus !text-defaultsize'>
                online
              </p>
            </div>
          </div>
          <div className='flex ms-auto'>
            <button
              aria-label='button'
              type='button'
              className='ti-btn ti-btn-icon ti-btn-outline-light dark:!bg-bodybg  hover:!text-defaulttextcolor dark:!border-defaultborder/10 !text-[0.95rem] !ms-2 font-semibold'
            >
              <i className='ti ti-phone dark:text-defaulttextcolor/70 dark:bg-bodybg !text-defaulttextcolor' />
            </button>
            <button
              aria-label='button'
              type='button'
              className='ti-btn ti-btn-icon ti-btn-outline-light dark:!bg-bodybg  hover:!text-defaulttextcolor dark:!border-defaultborder/10 !text-[0.95rem] !ms-2 font-semibold'
            >
              <i className='ti ti-video dark:text-defaulttextcolor/70 dark:bg-bodybg !text-defaulttextcolor' />
            </button>
            <button
              aria-label='button'
              type='button'
              className='ti-btn ti-btn-icon ti-btn-outline-light dark:!bg-bodybg  hover:!text-defaulttextcolor dark:!border-defaultborder/10 !text-[0.95rem] !ms-2 font-semibold'
              data-hs-overlay='#user-details'
            >
              <i className='ti ti-user-circle dark:text-defaulttextcolor/70 dark:bg-bodybg !text-defaulttextcolor' />
            </button>
            <div className='hs-dropdown ti-dropdown'>
              <a
                aria-label='anchor'
                href='javascript:void(0);'
                className='ti-btn ti-btn-icon ti-btn-outline-light dark:!bg-bodybg  hover:!text-defaulttextcolor dark:!border-defaultborder/10 !text-[0.95rem] !ms-2 font-semibold'
                aria-expanded='false'
              >
                <i className='fe fe-more-vertical text-[0.8rem] dark:text-defaulttextcolor/70 !text-defaulttextcolor' />
              </a>
              <ul className='hs-dropdown-menu ti-dropdown-menu hidden'>
                <li>
                  <a
                    className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                    href='javascript:void(0);'
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                    href='javascript:void(0);'
                  >
                    Clear Chat
                  </a>
                </li>
                <li>
                  <a
                    className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                    href='javascript:void(0);'
                  >
                    Delete User
                  </a>
                </li>
                <li>
                  <a
                    className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                    href='javascript:void(0);'
                  >
                    Block User
                  </a>
                </li>
                <li>
                  <a
                    className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                    href='javascript:void(0);'
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
            <button
              aria-label='button'
              type='button'
              className='ti-btn ti-btn-icon ti-btn-outline-light dark:bg-bodybg  !text-[0.95rem] !ms-2 font-semibold responsive-chat-close'
            >
              <i className='ri-close-fill dark:text-defaulttextcolor/70 text-!black' />
            </button>
          </div>
        </div>
        <div
          className='chat-content'
          id='main-chat-content'
          data-simplebar='init'
        >
          <div className='simplebar-wrapper' style={{margin: '-40px'}}>
            <div className='simplebar-height-auto-observer-wrapper'>
              <div className='simplebar-height-auto-observer' />
            </div>
            <div className='simplebar-mask'>
              <div className='simplebar-offset' style={{right: 0, bottom: 0}}>
                <div
                  className='simplebar-content-wrapper'
                  tabIndex={0}
                  role='region'
                  aria-label='scrollable content'
                  style={{height: 'auto', overflow: 'hidden scroll'}}
                >
                  <div className='simplebar-content' style={{padding: 40}}>
                    <ul className='list-none'>
                      <li className='chat-day-label'>
                        <span>Today</span>
                      </li>
                      <li className='chat-item-start'>
                        <div className='chat-list-inner'>
                          <div className='chat-user-profile'>
                            <span className='avatar avatar-md online avatar-rounded chatstatusperson'>
                              <img
                                className='chatimageperson'
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/2.jpg'
                                alt='img'
                              />
                            </span>
                          </div>
                          <div className='ms-4'>
                            <span className='chatting-user-info'>
                              <span className='chatnameperson'>
                                Emiley Jackson
                              </span>{' '}
                              <span className='msg-sent-time'>11:48PM</span>
                            </span>
                            <div className='main-chat-msg'>
                              <div>
                                <p className='mb-0'>Nice to meet you 😀</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='chat-item-end'>
                        <div className='chat-list-inner'>
                          <div className='me-3'>
                            <span className='chatting-user-info'>
                              <span className='msg-sent-time'>
                                <span className='chat-read-mark align-middle inline-flex'>
                                  <i className='ri-check-double-line' />
                                </span>
                                11:50PM
                              </span>{' '}
                              You
                            </span>
                            <div className='main-chat-msg'>
                              <div>
                                <p className='mb-0'>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='chat-user-profile'>
                            <span className='avatar avatar-md online avatar-rounded'>
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/15.jpg'
                                alt='img'
                              />
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='chat-item-start'>
                        <div className='chat-list-inner'>
                          <div className='chat-user-profile'>
                            <span className='avatar avatar-md online avatar-rounded chatstatusperson'>
                              <img
                                className='chatimageperson'
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/2.jpg'
                                alt='img'
                              />
                            </span>
                          </div>
                          <div className='ms-3'>
                            <span className='chatting-user-info'>
                              <span className='chatnameperson'>
                                Emiley Jackson
                              </span>{' '}
                              <span className='msg-sent-time'>11:51PM</span>
                            </span>
                            <div className='main-chat-msg'>
                              <div>
                                <p className='mb-0'>Who are you ?</p>
                              </div>
                              <div>
                                <p className='mb-0'>
                                  I don't know anyone named jeremiah.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='chat-item-end'>
                        <div className='chat-list-inner'>
                          <div className='me-3'>
                            <span className='chatting-user-info'>
                              <span className='msg-sent-time'>
                                <span className='chat-read-mark align-middle inline-flex'>
                                  <i className='ri-check-double-line' />
                                </span>
                                11:52PM
                              </span>{' '}
                              You
                            </span>
                            <div className='main-chat-msg'>
                              <div>
                                <p className='mb-0'>
                                  Some of the recent images taken are nice 👌
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='chat-user-profile'>
                            <span className='avatar avatar-md online avatar-rounded'>
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/15.jpg'
                                alt='img'
                              />
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='chat-item-start'>
                        <div className='chat-list-inner'>
                          <div className='chat-user-profile'>
                            <span className='avatar avatar-md online avatar-rounded chatstatusperson'>
                              <img
                                className='chatimageperson'
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/2.jpg'
                                alt='img'
                              />
                            </span>
                          </div>
                          <div className='ms-3'>
                            <span className='chatting-user-info'>
                              <span className='chatnameperson'>
                                Emiley Jackson
                              </span>{' '}
                              <span className='msg-sent-time'>11:55PM</span>
                            </span>
                            <div className='main-chat-msg'>
                              <div>
                                <p className='mb-0'>
                                  Here are some of them have a look
                                </p>
                              </div>
                              <div>
                                <p className='mb-0 sm:flex block'>
                                  <a
                                    aria-label='anchor'
                                    href='https://laravelui.spruko.com/tailwind/valex/gallery'
                                    className='avatar avatar-xl m-1 '
                                  >
                                    <img
                                      src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-64.jpg'
                                      alt
                                      className='rounded-md'
                                    />
                                  </a>
                                  <a
                                    aria-label='anchor'
                                    href='https://laravelui.spruko.com/tailwind/valex/gallery'
                                    className='avatar avatar-xl m-1 '
                                  >
                                    <img
                                      src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-63.jpg'
                                      alt
                                      className='rounded-md'
                                    />
                                  </a>
                                  <a
                                    aria-label='anchor'
                                    href='https://laravelui.spruko.com/tailwind/valex/gallery'
                                    className='avatar avatar-xl m-1 '
                                  >
                                    <img
                                      src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-62.jpg'
                                      alt
                                      className='rounded-md'
                                    />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='chat-item-end'>
                        <div className='chat-list-inner'>
                          <div className='me-4'>
                            <span className='chatting-user-info'>
                              <span className='msg-sent-time'>
                                <span className='chat-read-mark align-middle inline-flex'>
                                  <i className='ri-check-double-line' />
                                </span>
                                11:52PM
                              </span>{' '}
                              You
                            </span>
                            <div className='main-chat-msg'>
                              <div className='flex'>
                                <a
                                  aria-label='anchor'
                                  href='javascript:void(0)'
                                  className='text-white'
                                >
                                  <i className='ri-play-circle-line align-middle' />
                                </a>
                                <span className='mx-1 flex flex-wrap'>
                                  <svg width={20} height={20}>
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                  <svg
                                    className='chat_audio'
                                    width={20}
                                    height={20}
                                  >
                                    <defs />
                                    <g transform='matrix(1,0,0,1,0,0)'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 3'
                                        viewBox='0 0 24 24'
                                        width={20}
                                        height={20}
                                      >
                                        <path
                                          d='M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z'
                                          fill='rgba(255, 255, 255, 0.5)'
                                        />
                                      </svg>
                                    </g>
                                  </svg>
                                </span>
                                <a
                                  aria-label='anchor'
                                  href='javascript:void(0)'
                                  className='text-white'
                                >
                                  <i className='ri-download-2-line align-middle' />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='chat-user-profile'>
                            <span className='avatar avatar-md online avatar-rounded'>
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/15.jpg'
                                alt='img'
                              />
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='chat-item-start'>
                        <div className='chat-list-inner'>
                          <div className='chat-user-profile'>
                            <span className='avatar avatar-md online avatar-rounded'>
                              <img
                                className='chatimageperson'
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/2.jpg'
                                alt='img'
                              />
                            </span>
                          </div>
                          <div className='ms-3 mb-3 sm:mb-0'>
                            <span className='chatting-user-info chatnameperson'>
                              Emiley Jackson{' '}
                              <span className='msg-sent-time'>11:45PM</span>
                            </span>
                            <div className='main-chat-msg'>
                              <div>
                                <p className='mb-0'>
                                  Happy to talk with you,chat you later 👋
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='simplebar-placeholder'
              style={{width: 'auto', height: 900}}
            />
          </div>
          <div
            className='simplebar-track simplebar-horizontal'
            style={{visibility: 'hidden'}}
          >
            <div
              className='simplebar-scrollbar'
              style={{width: 0, display: 'none'}}
            />
          </div>
          <div
            className='simplebar-track simplebar-vertical'
            style={{visibility: 'visible'}}
          >
            <div
              className='simplebar-scrollbar'
              style={{
                height: 198,
                transform: 'translate3d(0px, 225px, 0px)',
                display: 'block',
              }}
            />
          </div>
        </div>
        <div className='chat-footer'>
          <input
            className='form-control w-full !rounded-md'
            placeholder='Type your message here...'
            type='text'
          />
          <a
            aria-label='anchor'
            className='ti-btn ti-btn-icon !mx-2 ti-btn-success'
            href='javascript:void(0)'
          >
            <i className='ri-emotion-line' />
          </a>
          <a
            aria-label='anchor'
            className='ti-btn bg-primary text-white  ti-btn-icon ti-btn-send'
            href='javascript:void(0)'
          >
            <i className='ri-send-plane-2-line' />
          </a>
        </div>
      </div>

      <div
        id='user-details'
        className='hs-overlay hidden ti-offcanvas ti-offcanvas-right !z-[105] !max-w-[22.975rem]'
        tabIndex={-1}
      >
        <div className='ti-offcanvas-header'>
          <h6 className='ti-offcanvas-title'>User Details</h6>
          <button
            type='button'
            className='ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-textmuted dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10'
            data-hs-overlay='#user-details'
          >
            <span className='sr-only'>Close modal</span>
            <svg
              className='w-3.5 h-3.5'
              width={8}
              height={8}
              viewBox='0 0 8 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z'
                fill='currentColor'
              />
            </svg>
          </button>
        </div>
        <div className='ti-offcanvas-body !h-[90%] !p-0'>
          <div
            className='chat-user-details !border-0 dark:border-defaultborder/10'
            id='chat-user-details'
            data-simplebar='init'
          >
            <div className='simplebar-wrapper' style={{margin: '-24px'}}>
              <div className='simplebar-height-auto-observer-wrapper'>
                <div className='simplebar-height-auto-observer' />
              </div>
              <div className='simplebar-mask'>
                <div className='simplebar-offset' style={{right: 0, bottom: 0}}>
                  <div
                    className='simplebar-content-wrapper'
                    tabIndex={0}
                    role='region'
                    aria-label='scrollable content'
                    style={{height: 'auto', overflow: 'hidden'}}
                  >
                    <div className='simplebar-content' style={{padding: 24}}>
                      <div className='text-center mb-[3rem]'>
                        <span className='avatar avatar-rounded online avatar-xxl me-2 mb-4 chatstatusperson'>
                          <img
                            className='chatimageperson'
                            src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/2.jpg'
                            alt='img'
                          />
                        </span>
                        <p className='mb-1 text-[0.9375rem] font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70 leading-none chatnameperson '>
                          Emiley Jackson
                        </p>
                        <p className='text-[0.75rem] text-textmuted !mb-4'>
                          <span className='chatnameperson'>
                            emaileyjackson2134
                          </span>
                          @gmail.com
                        </p>
                        <p className='text-center mb-0'>
                          <button
                            type='button'
                            aria-label='button'
                            className='ti-btn ti-btn-icon !rounded-full ti-btn-primary'
                          >
                            <i className='ri-phone-line' />
                          </button>
                          <button
                            type='button'
                            aria-label='button'
                            className='ti-btn ti-btn-icon !rounded-full ti-btn-primary !ms-2'
                          >
                            <i className='ri-video-add-line' />
                          </button>
                          <button
                            type='button'
                            aria-label='button'
                            className='ti-btn ti-btn-icon !rounded-full ti-btn-primary !ms-2'
                          >
                            <i className='ri-chat-1-line' />
                          </button>
                        </p>
                      </div>
                      <div className='mb-[3rem]'>
                        <div className='font-semibold mb-6 dark:text-defaulttextcolor/70  text-defaultsize'>
                          Shared Files
                          <span className='badge bg-primary/10 !rounded-full text-primary ms-1'>
                            4
                          </span>
                          <span className='ltr:float-right rtl:float-left text-[0.6875rem]'>
                            <a
                              href='javascript:void(0);'
                              className='text-primary underline'
                            >
                              <u>View All</u>
                            </a>
                          </span>
                        </div>
                        <ul className='shared-files list-none'>
                          <li className='!mb-4'>
                            <div className='flex items-center'>
                              <div className='me-2'>
                                <span className='shared-file-icon'>
                                  <i className='ti ti-file-text' />
                                </span>
                              </div>
                              <div className='flex-grow'>
                                <p className='text-[0.75rem] font-semibold mb-0 dark:text-defaulttextcolor/70 '>
                                  Project Details.pdf
                                </p>
                                <p className='mb-0 text-textmuted text-[0.6875rem]'>
                                  24,Oct 2022 - 14:24PM
                                </p>
                              </div>
                              <div className='!text-[1.125rem]'>
                                <a
                                  aria-label='anchor'
                                  href='javascript:void(0)'
                                >
                                  <i className='ri-download-2-line text-textmuted' />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className='!mb-4'>
                            <div className='flex items-center'>
                              <div className='me-2'>
                                <span className='shared-file-icon'>
                                  <i className='ri-image-line' />
                                </span>
                              </div>
                              <div className='flex-grow'>
                                <p className='text-[0.75rem] font-semibold mb-0 dark:text-defaulttextcolor/70'>
                                  Img_02.Jpg
                                </p>
                                <p className='mb-0 text-textmuted text-[0.6875rem]'>
                                  22,Oct 2022 - 10:19AM
                                </p>
                              </div>
                              <div className='!text-[1.125rem]'>
                                <a
                                  aria-label='anchor'
                                  href='javascript:void(0)'
                                >
                                  <i className='ri-download-2-line text-textmuted' />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className='!mb-4'>
                            <div className='flex items-center'>
                              <div className='me-2'>
                                <span className='shared-file-icon'>
                                  <i className='ri-image-line' />
                                </span>
                              </div>
                              <div className='flex-grow'>
                                <p className='text-[0.75rem] font-semibold mb-0 dark:text-defaulttextcolor/70'>
                                  Img_15.Jpg
                                </p>
                                <p className='mb-0 text-textmuted text-[0.6875rem]'>
                                  22,Oct 2022 - 10:18AM
                                </p>
                              </div>
                              <div className='!text-[1.125rem]'>
                                <a
                                  aria-label='anchor'
                                  href='javascript:void(0)'
                                >
                                  <i className='ri-download-2-line text-textmuted' />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='flex items-center'>
                              <div className='me-2'>
                                <span className='shared-file-icon'>
                                  <i className='ri-video-line' />
                                </span>
                              </div>
                              <div className='flex-grow'>
                                <p className='text-[0.75rem] font-semibold mb-0 dark:text-defaulttextcolor/70'>
                                  Video_15_02_2022.MP4
                                </p>
                                <p className='mb-0 text-textmuted text-[0.6875rem]'>
                                  22,Oct 2022 - 10:18AM
                                </p>
                              </div>
                              <div className>
                                <a
                                  aria-label='anchor'
                                  href='javascript:void(0)'
                                >
                                  <i className='ri-download-2-line text-textmuted !text-[1.125rem]' />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='mb-0'>
                        <div className='font-semibold mb-4 text-defaultsize dark:text-defaulttextcolor/70'>
                          Photos &amp; Media
                          <span className='badge bg-primary/10 !rounded-full text-primary ms-1'>
                            22
                          </span>
                          <span className='ltr:float-right rtl:float-left text-[0.6875rem]'>
                            <a
                              href='javascript:void(0);'
                              className='text-primary underline'
                            >
                              <u>View All</u>
                            </a>
                          </span>
                        </div>
                        <div className='grid grid-cols-12 gap-x-[1rem]'>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-56.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-52.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-53.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-62.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-63.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-64.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-13.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-19.jpg'
                                alt
                              />
                            </a>
                          </div>
                          <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4'>
                            <a
                              aria-label='anchor'
                              href='https://laravelui.spruko.com/tailwind/valex/gallery'
                              className='chat-media'
                            >
                              <img
                                src='https://laravelui.spruko.com/tailwind/valex/build/assets/images/media/media-20.jpg'
                                alt
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='simplebar-placeholder'
                style={{width: 0, height: 0}}
              />
            </div>
            <div
              className='simplebar-track simplebar-horizontal'
              style={{visibility: 'hidden'}}
            >
              <div
                className='simplebar-scrollbar'
                style={{width: 0, display: 'none'}}
              />
            </div>
            <div
              className='simplebar-track simplebar-vertical'
              style={{visibility: 'hidden'}}
            >
              <div
                className='simplebar-scrollbar'
                style={{height: 0, display: 'none'}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
