'use client'

import {Checkbox} from '@/components/ui/checkbox'
import Link from 'next/link'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const [showVerifyNumber, setShowVerifyNumber] = useState(false)

  const onSubmit = (data) => {
    setShowVerifyNumber(true)
    console.log(data)
  }

  return (
    <div className='bg-white dark:bg-gray-900 gap-6 md:mx-5 w-full md:w-[460px] border border-[#E4E4E4] dark:border-gray-600 rounded-[16px] p-[24px] flex flex-col items-center'>
      <img
        src='/assets/images/Frame 4.png'
        className='mx-auto md:w-[72px] md:h-[72px]'
      />
      {showVerifyNumber ? (
        <>
          <div className='font-bold text-[24px] leading-[150%] text-[#000A11] dark:text-white'>
            Verify number
          </div>

          <div className='font-normal text-[16px] leading-[170%] text-[#2D2D2D] dark:text-gray-400'>
            We sent a verification code to 01628374708
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
                  placeholder='OTP code'
                  type='text'
                  id='otp'
                  autoComplete='off'
                  {...register('otp', {required: 'OTP code is required'})}
                />
                {errors.otp && (
                  <p className='text-red-600 dark:text-red-400'>
                    {errors.otp.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                className='p-[16px] w-full h-[48px] bg-[#000A11] dark:bg-gray-700 rounded-[12px] font-medium text-[14px] leading-[140%] text-[#FFFFFF]'
              >
                Verify
              </button>

              <div>
                <Link
                  href='/signin'
                  className='font-medium text-[14px] leading-[140%] text-[#000A11] dark:text-gray-400'
                >
                  Have an account? Sign in
                </Link>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className='font-bold text-[24px] leading-[150%] text-[#000A11] dark:text-white'>
            Sign up to Kotha.ai
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
                  placeholder='Full Name'
                  type='name'
                  id='name'
                  autoComplete='off'
                  {...register('name', {required: 'Name is required'})}
                />
                {errors.name && (
                  <p className='text-red-600 dark:text-red-400'>
                    {errors.name.message}
                  </p>
                )}
              </div>
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
              <div className='form-group w-full'>
                <input
                  className='bg-[#F9F9F9] dark:bg-gray-800 border border-[#E4E4E4] dark:border-gray-600 rounded-[12px] p-[16px] w-full text-[#000A11] dark:text-white'
                  placeholder='Confirm Password'
                  type='c_password'
                  id='c_password'
                  autoComplete='off'
                  {...register('c_password', {
                    required: 'Confirm password is required',
                  })}
                />
                {errors.c_password && (
                  <p className='text-red-600 dark:text-red-400'>
                    {errors.c_password.message}
                  </p>
                )}
              </div>

              <div className='flex flex-row justify-between items-start p-0 gap-[16px] w-full'>
                <div className='flex items-center space-x-2'>
                  <Checkbox
                    id='agreeTerms'
                    {...register('agreeTerms', {
                      required: 'You must agree to the terms',
                    })}
                  />
                  <label
                    htmlFor='agreeTerms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-400'
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>

              <button
                type='submit'
                className='p-[16px] w-full h-[48px] bg-[#000A11] dark:bg-gray-700 rounded-[12px] font-medium text-[14px] leading-[140%] text-[#FFFFFF]'
              >
                Sign up
              </button>

              <div>
                <Link
                  href='/signin'
                  className='font-medium text-[14px] leading-[140%] text-[#000A11] dark:text-gray-400'
                >
                  Have an account? Sign in
                </Link>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
