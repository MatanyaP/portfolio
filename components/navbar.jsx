import { useState } from 'react'
import {prefix} from '../utils/prefix'
import Link from 'next/link'
import Image from 'next/image'

const LinkTemplate = ({ href, children }) => (
    <Link href={href} as={prefix + href}>
        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 font-bold items-center justify-center hover:bg-lime-400 hover:text-white ">
            {children}
        </a>
    </Link>
)

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-white-200 p-3">
        <LinkTemplate href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
                {/* <Image src={`${prefix}/images/logo.png`} width={'50%'} height={'50%'} className={'object-contain'} alt={'logo'} /> */}
            </a>
        </LinkTemplate>
      <button
        className={`inline-flex p-3 hover:bg-lime-500 rounded lg:hidden text-lime ml-auto hover:text-white outline-none`}
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <LinkTemplate href="/">.home()</LinkTemplate>
            <LinkTemplate href="/about">.i()</LinkTemplate>
            <LinkTemplate href="/projects">.works()</LinkTemplate>
            <LinkTemplate href="/cv">.cv()</LinkTemplate>
            <LinkTemplate href="/contact">.ping()</LinkTemplate>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;