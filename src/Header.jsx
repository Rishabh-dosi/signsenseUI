import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
    const name = ["SignSense.io"];
    

    return (
        <div className="flex justify-center w-[100%] m-0 p-0 ">
            <div className="flex justify-center text-[#3ffd00] text-[30px] font-mono" ><Typewriter
                options={{
                    strings: name,
                    autoStart: true,
                    loop: true,
                }}
            /></div>
            <button className=" h-fit m-auto p-2 absolute right-3 top-3 border-2 border-black focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> LogOut </button>
        </div>
    )
}
export default Header;