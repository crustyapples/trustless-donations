import Link from "next/link";
import { useRouter } from "next/router";
import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
  ConnectWallet,
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

  const buttonStyle =
    "px-4 py-2 mx-2 text-black rounded-lg bg-gray-100 hover:bg-gray-400 hover:text-black transition-all";

  // help me centre my navigation items 
  const navStyle = "flex items-center ml-4 mr-auto";

  return (
    <>
      <nav className="md:flex sm:flex-wrap justify-center bg-white py-6 border-b-2 border-black">
        <div className="flex items-center ml-4 mr-auto">
          <Link href="/" legacyBehavior>
            <a
              className={`px-4 py-2 text-black rounded-lg hover:bg-gray-100 transition-all ${
                router.pathname === "/"
                  ? "font-bold text-black hover:bg-[#1c1f6b]"
                  : "text-black hover:bg-[#1c1f6b]"
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/donate" legacyBehavior>
            <a
              className={`px-4 py-2 text-black rounded-lg hover:bg-gray-100 transition-all ${
                router.pathname === "/donate"
                  ? "font-bold text-black hover:bg-[#1c1f6b]"
                  : "text-black hover:bg-[#1c1f6b]"
              }`}
            >
              Donate
            </a>
          </Link>
          <Link href="/profile" legacyBehavior>
            <a
              className={`px-4 py-2 text-black rounded-lg hover:bg-gray-100 transition-all ${
                router.pathname === "/profile"
                  ? "font-bold text-black hover:bg-[#1c1f6b]"
                  : "text-black hover:bg-[#1c1f6b]"
              }`}
            >
              Profile
            </a>
          </Link>
        </div>

        <div className="mx-4">
          <ConnectWallet theme='light' style={{
            width: '100%',
          }}/>
        </div>
      </nav>
    </>
  );
}

import React from "react";
