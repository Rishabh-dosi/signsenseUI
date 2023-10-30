import React, { useState } from "react";
import CallWindow from "./CallWindow";
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicOffIcon from '@mui/icons-material/MicOff';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import LogoutIcon from '@mui/icons-material/Logout';


const CallBox = (prompt) => {
    const [callerAvailable, setcaller] = useState(true);
    const [micOn, setMic] = useState(true);
    const [cameraOn, setCamera] = useState(false);
    const startListening = ()=> {SpeechRecognition.startListening({ continuous: true })}
    
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const handleMic = () => {
        setMic(!micOn);
        if (micOn) {
            startListening();
            console.log("listening on....")
        }
        else {
            console.log("listening offff....")
            SpeechRecognition.stopListening();
        }
        
    }
    if (!browserSupportsSpeechRecognition) {
        alert("not working")
    }
    return (
        
        
        <div className="flex-col bg-gradient-to-r from-[#A594F9] to-[#6247AA] h-max w-[100vw] items-center">
            <h2 className=" w-full flex justify-center">Call ID : {prompt.id} </h2>
            <div className="flex justify-center gap-[80px] h- relative items-center mt-[3rem]">
                
                {
                    callerAvailable ? <CallWindow/> : ""
                    }
                    
                
                
                    <CallWindow subtitle={transcript} />
                    
                

                <div className=" flex justify-between text-white p-3 rounded-[10px] bg-black h-fit w-[200px] absolute bottom-0 ">
                    <div onClick={()=>{setCamera(!cameraOn)}}>
                        {cameraOn ?  <VideocamIcon/> : <VideocamOffIcon/>}
                    </div>
                    <div onClick={handleMic}>
                        {micOn ? <MicOffIcon /> : <MicIcon/>}
                    </div>
                    <div>
                        <LogoutIcon/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default CallBox;