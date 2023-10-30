import { Textsms } from "@mui/icons-material";
import React, { useState } from "react";
import TextsmsIcon from '@mui/icons-material/Textsms';
import ClearIcon from '@mui/icons-material/Clear';



const CallWindow = (props) => {
    const [subtitle, setSubtitle] = useState('true');
    const handlesubmit = () => setSubtitle(!subtitle)
    
    return (

        
        <div className="relative flex-col h-[82vh] items-center justify-center">
            <div className=" relative  h-[300px] w-[400px] border-2 border-black rounded-[20px] bg-[#bf9ada] "> </div>

            <button className="m-1 w-[90px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handlesubmit}>{subtitle ? <TextsmsIcon /> : <ClearIcon />}</button>
            
            
            <div className={subtitle ? "h-[5rem] w-[16rem] relative bg-transparent border-2 border-black rounded-[30px] p-4 m-auto mt-3 overflow-hidden overflow-y-auto overscroll-none" : "hidden"} > {props.subtitle  || ""}
            </div>
        </div>
    )
}

export default CallWindow;