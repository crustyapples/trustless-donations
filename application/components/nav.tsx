import Link from 'next/link'
import { useRouter } from 'next/router';
import {
    useAddress,
    useUser,
    useLogin,
    useLogout,
    useMetamask,
  } from "@thirdweb-dev/react";
  import { useState } from "react";


export default function Nav() {
    const router = useRouter();
    const address = useAddress();
    const connect = useMetamask();
    const { login } = useLogin();
    const { logout } = useLogout();
    const { user, isLoggedIn } = useUser();
    const [secret, setSecret] = useState();
  
    const getSecret = async () => {
      const res = await fetch("/api/secret");
      const data = await res.json();
      setSecret(data.message);
    };

    const buttonStyle = "px-4 py-2 mx-2 text-black rounded-lg bg-gray-100 hover:bg-gray-400 hover:text-black transition-all"

    return (
    <>
      <nav className="flex justify-center bg-[#131545] py-6">

        <div className='flex items-center mx-auto'>
            <Link href="/" legacyBehavior>
            <a className={`px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100 transition-all ${router.pathname === '/' ? 'font-bold text-white hover:bg-[#1c1f6b]' : 'text-gray-400 hover:bg-[#1c1f6b]'}`}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
            <a className={`px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100 transition-all ${router.pathname === '/about' ? 'font-bold text-white hover:bg-[#1c1f6b]' : 'text-gray-400 hover:bg-[#1c1f6b]'}`}>About</a>
            </Link>



        </div>
        {isLoggedIn ? (
                <button className={buttonStyle} onClick={() => logout()}>Logout</button>
            ) : address ? (
                <button className={buttonStyle} onClick={() => login()}>Login</button>
            ) : (
                <button className={buttonStyle} onClick={() => connect()}>Connect</button>
            )}
            {/* <button className={buttonStyle} onClick={getSecret}>Get Secret</button> */}
      </nav>
    </>
    );
}

import React from 'react';