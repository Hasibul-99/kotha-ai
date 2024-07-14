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
    <div className='bg-white dark:bg-gray-900 gap-6 md:mx-5 w-full md:w-[460px] border border-[#E4E4E4] dark:border-gray-600 rounded-[16px] p-[24px] flex flex-col items-center'>
      <img
        src='/assets/images/Frame 4.png'
        className='mx-auto md:w-[72px] md:h-[72px]'
      />
      <div className='font-bold text-[24px] leading-[150%] text-[#000A11] dark:text-white'>
        Sign in to Kotha.ai
      </div>

      <div className='w-[330px] md:w-[410px]'>
        <form
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center p-0 gap-[16px]'
        >
          <div className='form-group w-full'>
            <input
              className='bg-[#F9F9F9] dark:bg-gray-800 border border-[#E4E4E4] dark:border-gray-600 rounded-[12px] p-[16px] w-full text-[#000A11] dark:text-white'
              placeholder='Phone Number'
              type='phone'
              id='phone'
              autoComplete='off'
              {...register('phone', {required: 'Phone number is required'})}
            />
            {errors.phone && (
              <p className='text-red-600 dark:text-red-400'>
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className='form-group w-full'>
            <input
              className='bg-[#F9F9F9] dark:bg-gray-800 border border-[#E4E4E4] dark:border-gray-600 rounded-[12px] p-[16px] w-full text-[#000A11] dark:text-white'
              placeholder='Password'
              type='password'
              id='password'
              autoComplete='off'
              {...register('password', {required: 'Password is required'})}
            />
            {errors.password && (
              <p className='text-red-600 dark:text-red-400'>
                {errors.password.message}
              </p>
            )}
          </div>

          <div className='flex flex-row justify-between items-start p-0 gap-[16px] w-full'>
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='remember'
                {...register('remember', {
                  required: 'You must agree to the terms',
                })}
              />
              <label
                htmlFor='remember'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-400'
              >
                Remember me
              </label>
            </div>

            <div>
              <Link
                href='/forget-password'
                className='font-medium text-[14px] leading-[140%] text-[#000A11] dark:text-gray-400'
              >
                Forgot password
              </Link>
            </div>
          </div>

          <button
            type='submit'
            className='p-[16px] w-full h-[48px] bg-[#000A11] dark:bg-gray-700 rounded-[12px] font-medium text-[14px] leading-[140%] text-[#FFFFFF]'
          >
            Login
          </button>

          <div>
            <Link
              href='/signup'
              className='font-medium text-[14px] leading-[140%] text-[#000A11] dark:text-gray-400'
            >
              Don’t have an account? Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
