import Navbar from '@/components/common/Navbar'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <section className='landing'>
        <div className='bg-content'>
          <div className='bg-content-color'></div>
        </div>
        <div className='container py-16 md:py-32'>
          <div className='flex'>
            <div className='relative inline-flex items-center m-auto align-middle'>
              <div className='max-w-3xl space-y-8 lg:text-center'>
                <img
                  src='/assets/images/kotha.png'
                  height={106}
                  width={106}
                  className='mx-auto'
                />
                <h1
                  data-animate='title'
                  className='font-bold text-[32px] md:text-6xl leading-[130%] text-center capitalize text-[#000A11]'
                  style={{opacity: 1, transform: 'translateY(0px)'}}
                >
                  Boost your creativity and productivity
                </h1>
                <div className=''>
                  <p
                    data-animate='subtitle'
                    className='font-normal text-[15px] md:text-[20px] leading-[170%] text-center text-[#2D2D2D]'
                    style={{opacity: 1, transform: 'translateY(0px)'}}
                  >
                    Unleash your full potential with enhanced creativity and
                    productivity. Discover effective strategies and tips to
                    maximize your output and spark innovative ideas.
                  </p>
                </div>
                <div className='flex justify-center mx-auto '>
                  <div className='px-[22px] py-[7px] w-[199px] h-[60px] bg-[#000A11] rounded-[12px] flex justify-center items-center cursor-pointer'>
                    <Link
                      href={'/chat'}
                      className='font-normal text-[16px] leading-[140%] text-[#FFFFFF]'
                    >
                      Try for Free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
