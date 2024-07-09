'use client'

import Link from 'next/link'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const [showVerifyNumber, setShowVerifyNumber] = useState(true)

  const onSubmit = (data) => console.log(data)

  return (
    <div className='bg-white gap-6 mx-5 w-full md:w-[460px] border border-[#E4E4E4] rounded-[16px] p-[24px] flex flex-col items-center'>
      <img
        src='/assets/images/Frame 4.png'
        className='mx-auto md:w-[72px] md:h-[72px]'
      />
      {showVerifyNumber ? (
        <>
          <div className='font-bold text-[24px] leading-[150%] text-[#000A11]'>
            Verify number
          </div>

          <div className='font-normal text-[16px] leading-[170%] text-[#2D2D2D]'>
            We sent a verification code to 01628374708
          </div>

          <div className='w-[410px]'>
            <form
              autocomplete='off'
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center p-0 gap-[16px]'
            >
              <div className='form-group w-full'>
                <input
                  className='bg-[#F9F9F9] border border-[#E4E4E4] rounded-[12px] p-[16px] w-full'
                  placeholder='OTP code'
                  type='text'
                  id='otp'
                  autocomplete='off'
                  {...register('otp', {required: 'OTP code is required'})}
                />
                {errors.otp && <p>{errors.otp.message}</p>}
              </div>

              <button
                type='submit'
                className='p-[16px] w-full h-[48px] bg-[#000A11] rounded-[12px] font-medium text-[14px] leading-[140%] text-[#FFFFFF]'
              >
                Verify
              </button>

              <div>
                <Link
                  href='/signin'
                  className='font-medium text-[14px] leading-[140%] text-[#000A11]'
                >
                  Have account? Sign in
                </Link>{' '}
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className='font-bold text-[24px] leading-[150%] text-[#000A11]'>
            Sign up to Kotha.ai
          </div>

          <div className='w-[410px]'>
            <form
              autocomplete='off'
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center p-0 gap-[16px]'
            >
              <div className='form-group w-full'>
                <input
                  className='bg-[#F9F9F9] border border-[#E4E4E4] rounded-[12px] p-[16px] w-full'
                  placeholder='Full Name'
                  type='name'
                  id='name'
                  autocomplete='off'
                  {...register('name', {required: 'Name is required'})}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
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
              <div className='form-group w-full'>
                <input
                  className='bg-[#F9F9F9] border border-[#E4E4E4] rounded-[12px] p-[16px] w-full'
                  placeholder='Confirm Password'
                  type='c_password'
                  id='c_password'
                  autocomplete='off'
                  {...register('c_password', {
                    required: 'Confirm password is required',
                  })}
                />
                {errors.c_password && <p>{errors.c_password.message}</p>}
              </div>

              <div className='flex flex-row justify-between items-start p-0 gap-[16px] w-full'>
                <div className='form-group'>
                  <label htmlFor='agreeTerms'>
                    <input
                      type='checkbox'
                      id='agreeTerms'
                      {...register('agreeTerms', {
                        required: 'You must agree to the terms',
                      })}
                    />
                    I agree to the terms and conditions
                  </label>
                  {errors.agreeTerms && <p>{errors.agreeTerms.message}</p>}
                </div>
              </div>

              <button
                type='submit'
                className='p-[16px] w-full h-[48px] bg-[#000A11] rounded-[12px] font-medium text-[14px] leading-[140%] text-[#FFFFFF]'
              >
                Sign up
              </button>

              <div>
                <Link
                  href='/signin'
                  className='font-medium text-[14px] leading-[140%] text-[#000A11]'
                >
                  Have account? Sign in
                </Link>{' '}
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
