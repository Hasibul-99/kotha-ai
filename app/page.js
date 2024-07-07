import Navbar from '@/components/common/Navbar'
import {Fragment} from 'react'

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <section className='relative ' style={{height: '88vh', marginTop: 70}}>
        <div>
          <img
            src='/assets/images/bg.png'
            className='max-w-[550px] max-h-[550px]'
          />
        </div>
      </section>
    </Fragment>
  )
}
