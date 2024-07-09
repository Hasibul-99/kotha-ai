'use client'

const RootLayout = (props) => {
  const {children} = props
  // const router = useRouter()
  // const token = Cookies.get('bdtax_token')

  // useEffect(() => {
  //   if (token) {
  //     router.push('/')
  //   }
  // }, [token])

  return (
    <>
      <div className='bg-[#F3F3F3] h-screen flex'>
        <div className='inline-flex items-center m-auto align-middle'>
          {children}
        </div>
      </div>
    </>
  )
}

export default RootLayout
