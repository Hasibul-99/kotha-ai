'use client'

import {Checkbox} from '@/components/ui/checkbox'
import Link from 'next/link'
import {useForm} from 'react-hook-form'

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='bg-white gap-6 md:mx-5 w-full md:w-[460px] border border-[#E4E4E4] rounded-[16px] p-[24px] flex flex-col items-center'>
      <img
        src='/assets/images/Frame 4.png'
        className='mx-auto md:w-[72px] md:h-[72px]'
      />
      <div className='font-bold text-[24px] leading-[150%] text-[#000A11]'>
        Sign in to Kotha.ai
      </div>

      <div className='w-[330px] md:w-[410px]'>
        <form
          autocomplete='off'
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center p-0 gap-[16px]'
        >
          <div className='form-group w-full'>
            <input
              className='bg-[#F9F9F9] border border-[#E4E4E4] rounded-[12px] p-[16px] w-full'
              placeholder='Phone Number'
              type='phone'
              id='phone'
              autocomplete='off'
              {...register('phone', {required: 'Phone number is required'})}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <div className='form-group w-full'>
            <input
              className='bg-[#F9F9F9] border border-[#E4E4E4] rounded-[12px] p-[16px] w-full'
              placeholder='Password'
              type='password'
              id='password'
              autocomplete='off'
              {...register('password', {required: 'Password is required'})}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div className='flex flex-row justify-between items-start p-0 gap-[16px] w-full'>
            {/* <div className='form-group'>
              <label
                htmlFor='remember'
                className='font-medium text-[14px] leading-[140%] text-[#000A11]'
              >
                <input type='checkbox' id='remember' /> &nbsp; Remember me
              </label>
              {errors.remember && <p>{errors.remember.message}</p>}
            </div> */}
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='remember'
                {...register('remember', {
                  required: 'You must agree to the terms',
                })}
              />
              <label
                htmlFor='remember'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Remember me
              </label>
            </div>

            <div>
              <Link
                href='/forget-password'
                className='font-medium text-[14px] leading-[140%] text-[#000A11]'
              >
                Forgot password
              </Link>
            </div>
          </div>

          <button
            type='submit'
            className='p-[16px] w-full h-[48px] bg-[#000A11] rounded-[12px] font-medium text-[14px] leading-[140%] text-[#FFFFFF]'
          >
            Login
          </button>

          <div>
            <Link
              href='/signup'
              className='font-medium text-[14px] leading-[140%] text-[#000A11]'
            >
              Don’t have account? Create account
            </Link>{' '}
          </div>
        </form>
      </div>
    </div>
  )
}
