
import React, { useRef } from 'react';
import { useEffect } from 'react';
export default function Timer(){
    const[setDay,setAllDay]=React.useState(`00`)
    const[setHour,setAllHour]=React.useState(`00`)
    const[setMinute,setAllMinute]=React.useState(`00`)
    const[setSecond,setAllSecond]=React.useState(`00`)
    
    let interval=useRef();
    const startTimer=()=> {
        const countdownDate = new Date("19 Oct 2024 12:00 AM").getTime();  //method is Date.getTime(),countdownDate 
        //is initial value
        interval=setInterval(() =>{
           const end=new Date(countdownDate);
           const now=new Date().getTime();
           const diff=(end-now)/1000;
           const days=Math.floor(diff / 3600 / 24);
           const hours=Math.floor(diff / 3600) %  24;
           const minutes=Math.floor(diff / 60) % 60;
           const seconds=Math.floor(diff) % 60;

           if(diff<0){
              clearInterval(interval.current);
           }else{
            setAllDay(days);
            setAllHour(hours);
            setAllMinute(minutes);
            setAllSecond(seconds);
           }
    },1000);
    };

    useEffect(() =>{
        startTimer();
        return()=>{
            clearInterval(interval.current);
        };
    });
    return(
        <div className='title'>
            <h1>My Digital Clock⏰</h1>
            <h3 className='header'>Just Waiting for that special day🎂 19 Oct 2024 12:00 AM</h3>
            <div className='main'>
               <div>
                   <input type="text" readOnly value={setDay} />
                   <label for="">Days</label>
                </div>
                <div>
                   <input type="text" readOnly value={setHour} />
                   <label for="">Hours</label>
                </div>
                <div>
                   <input type="text" readOnly value={setMinute} />
                   <label for="">Minutes</label>
                </div>
                <div>
                   <input type="text" readOnly value={setSecond} />
                   <label for="">Second ✌</label>
                </div>
                <br />
            </div>
        </div>
    )
}





