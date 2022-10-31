import { useState } from 'react';

import Link from 'next/link'


const Navbar = ({ generate }) => {
    // Dropdown selector state
    const [whatAreYouDoing, setWhatAreYouDoing] = useState('WHAT ARE YOU DOING?');




    const favorite = () => {
        console.log('hey');
    }

    const selector = () => {
        setWhatAreYouDoing("farts")
    }

    return (


        <nav class="relative container mx-auto">

            <div class="navbar bg-black">
                <Link href="https://about.everything.dev/" passHref>
                    <button class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </button>
                </Link>
                <div class="flex-1">
                    <div class="dropdown dropdown-hover">
                        <label
                            tabindex="0"
                            class="btn m-1"
                            onClick={selector}
                        >
                            {whatAreYouDoing}
                        </label>
                        <ul
                            tabindex="0"
                            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>going to work</a>
                            </li>
                            <li>
                                <a>going out for drinks</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal">
                        <li>
                            <button
                                class="btn btn-outline btn-primary rounded-xl"
                                onClick={generate}>Generate
                            </button>
                        </li>
                        <li>
                            <button
                                class="btn px-1 gap-2 rounded-xl"
                                onClick={favorite}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;