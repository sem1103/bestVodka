'use client'
import { useEffect, useState } from "react";


export default function Loading({hide}){
    const [count, setCount] = useState(1995);
    const target = 2024;
    const duration = 500; // Продолжительность анимации в миллисекундах (2 секунды)

    useEffect(() => {
        const stepTime = Math.abs(Math.floor(duration / (target - 1995)));
        let currentCount = 1995;

        const interval = setInterval(() => {
            currentCount++;
            setCount(currentCount);
            if (currentCount >= target) {
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, []);


    return(
        <div className={`loader ${hide ? 'hide' : ''}`}>
           <div>
           <img src="./assets/img/logo.svg" alt="" />

           <p className='numb__count'>{count}</p>
           </div>
        </div>
    )
}