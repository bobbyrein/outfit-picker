import { useState } from "react";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const ClosetNavbar = ({ generate }) => {
  const { user, isLoading } = useUser();
  return (
    <div class="navbar bg-black">
      <Link href="https://about.everything.dev/" passHref>
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
      </Link>
      <div class="flex-none">
        <ul class="menu menu-horizontal">
          <Link href="/" passHref>
            <button
              class="btn btn-outline btn-primary rounded-xl"
              onClick={generate}
            >
              Generate
            </button>
          </Link>
          {/* <li>
              <button
                class="btn px-1 gap-2 rounded-xl"
                onClick={favorite}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
            </li> */}
        </ul>
      </div>
      <div className="flex justify-center">
        {isLoading ? null : (
          <>
            {user ? (
              <Link href="/api/auth/logout" passHref>
                <div>
                  <p>{user.nickname}</p>
                  <button className="btn normal-case">logout</button>
                </div>
              </Link>
            ) : (
              <Link href="/api/auth/login" passHref>
                <button className="btn normal-case">login</button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ClosetNavbar;
