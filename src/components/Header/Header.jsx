'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { useEffect } from 'react';


export default function Header({ scrollHandler, headerFixed }) {

    const burgerMenuHandler = () =>{
        document.body.classList.toggle(s.active__burger)
        if(!document.body.classList.contains(s.active__burger)){
            document.body.classList.add(s.deactive__burger)
        } else  document.body.classList.remove(s.deactive__burger)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

    }, []);


    return (
        <header className={`${s.header} ${headerFixed ? s.fixed : ''}`} >

            <nav>
                <Link href='/' className={s.logo}>
                    <img src="./assets/img/logo.svg" alt="" width={'120px'} />
                </Link>
                <ul>
                    <li><Link href='#f'>Главная</Link></li>
                    <li><Link href='#f'>Продукты</Link></li>
                    <li><Link href='#f'>Галерея</Link></li>
                    <li><Link href='#f'>Сертификаты</Link></li>
                    <li><Link href='#f'>Контакты</Link></li>
                    <li><Link href='#f'>О нас</Link></li>
                    <li><button className='button'>Связаться с нами!</button></li>
                    <li className={s.lang__switch}>
                        <button className={s.ru}>
                            RU
                        </button>
                        <ul className={s.langs}>
                            <li>
                                <button className={s.az}>
                                    AZ
                                </button>
                            </li>
                            <li>
                                <button className={s.en}>
                                    EN
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>


                <div className={s.burger}>
                    <div className={s.burger__btn} onClick={() => burgerMenuHandler()}>
                        <hr className={s.stick} />
                        <hr className={s.stick} />
                        <hr className={s.stick} />
                    </div>
                </div>
            </nav>
        </header>
    )
}



