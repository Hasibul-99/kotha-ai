import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/assets/images/logo.png"
            className="h-8 block dark:hidden"
            alt="Kotha Logo"
          />
          <img
            src="/assets/images/kotha.png"
            className="h-8 hidden dark:block"
            alt="Kotha Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#000A11] dark:text-white">
            Kotha.ai
          </span>
        </a>
        <div className="flex gap-x-2.5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/signin">
            <button
              type="button"
              className="text-[#000A11] dark:text-white border border-[#000A11] dark:border-white font-medium rounded-[12px] text-sm px-4 py-2 text-center"
            >
              Sign in
            </button>
          </Link>

          <Link href="/signup">
            <button
              type="button"
              className="text-white bg-[#000A11] dark:bg-white dark:text-[#000A11] hover:bg-[#000A11] dark:hover:bg-[#ffffffb3] font-medium rounded-[12px] text-sm px-4 py-2 text-center"
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
