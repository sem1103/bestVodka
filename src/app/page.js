'use client'
import s from './page.module.css'

import Header from '@/components/Header/Header';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Contacts from '@/components/Contacts/Contacts';
import ImgLightBox from '@/components/ImgLightBox/ImgLightBox';
import Footer from '@/components/Footer/Footer';
import Loading from './loading';



export default function Home() {


  

  const introRef = useRef(null);
  const [currentInd, setCurrentInd] = useState(null)
  const [isShow, SetIsShow] = useState(false);
  const [isLoad, SetIsLoad] = useState(false)

  const [headerFixed, setHeaderFixed] = useState(false)

  const certImages = [
    '/assets/img/certificates/1.jpg',
    '/assets/img/certificates/2.jpg',
    '/assets/img/certificates/3.jpg',
    '/assets/img/certificates/4.jpg',
  ]





  const scrollHandler = () => {
    if (window.scrollY > 0) setHeaderFixed(true)
    else setHeaderFixed(false)
  }
  const handleMouseMove = (e) => {
    if (introRef.current) {
      introRef.current.style.setProperty('--moveX', `${(e.clientX - window.innerWidth / 2) * -0.003}deg`);
      introRef.current.style.setProperty('--moveY', `${(e.clientY - window.innerHeight / 2) * -0.01}deg`);
    }
  };

  const loadHandler = () => {
    console.log(1);
 


  }


  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [introRef]);

  useEffect(() => {
   

   
  }, []);

  useEffect(() => {
    // Имитируем загрузку данных
    const timer = setTimeout(() => {
        SetIsLoad(true);
    }, 2000); 

    return () => clearTimeout(timer);
}, []);



  return (
  
      <>
      <Loading hide={isLoad} />
      
        <Header headerFixed={headerFixed} scrollHandler={scrollHandler} />
        <div className={s.intro} ref={introRef}>
          <div className={s.intro__container}>

            <h1 className={s.prod__name}>Застолье - <span>premium vodka</span></h1>
            <div className={s.prod__img}>
              <img src="/assets/img/bootle.webp" alt="" />
            </div>
            <p className={s.prod__desc}>Это уникальная водка, созданная из отборного зерна и чистейшей ледниковой воды, обладающая мягким вкусом с легкими нотками трав и пряностей. Элегантная упаковка и богатый вкус делают её идеальным выбором для коктейлей и стильных мероприятий.</p>


          </div>
        </div>

        <section className={`${s.our__prods}`}>
          <h2 className='container'>
            Наша продукция
          </h2>

          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='our_prod__slider'
            loop={true}
            breakpoints={{
              1100: {
                slidesPerView: 1.65,
                spaceBetween: 50

              }
            }}
          >
            <SwiperSlide>
              <div className={s.slider__item}>
                <div className={s.item__info}>
                  <h4 className={s.prod__type}>
                    Водка
                  </h4>
                  <h3 className={s.prod__name}>
                    TUNDRA FOREST WOODY NOTES
                  </h3>
                  <p className={s.prod__desc}>
                    Состав водки TUNDRA FOREST WOODY NOTES включает чистейшую артезианскую воду, отборный спирт «Люкс» из зерновых культур, а также природные экстракты дубовой коры и лесных трав. Эти компоненты придают водке мягкость и уникальные древесные нотки.
                  </p>
                  <button>Подробнее</button>
                </div>

                <div className={s.item__img}>
                  <img src="/assets/img/vodkaBootles/slider1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={s.slider__item}>
                <div className={s.item__info}>
                  <h4 className={s.prod__type}>
                    Водка
                  </h4>
                  <h3 className={s.prod__name}>
                    ХАНСКАЯ PREMIUM
                  </h3>
                  <p className={s.prod__desc}>
                    Водка ХАНСКАЯ PREMIUM — это элитный напиток, созданный на основе высококачественного спирта «Люкс» и чистейшей природной воды. В её состав входят натуральные компоненты, которые придают водке мягкость и насыщенный вкус. Характерными чертами этой водки являются утончённые ароматы и лёгкие хлебные оттенки, что делает её отличным выбором для особых случаев.            </p>
                  <button>Подробнее</button>
                </div>

                <div className={s.item__img}>
                  <img src="/assets/img/vodkaBootles/slider2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={s.slider__item}>
                <div className={s.item__info}>
                  <h4 className={s.prod__type}>
                    Водка
                  </h4>
                  <h3 className={s.prod__name}>
                    GRAF LEDOFF            </h3>

                  <p className={s.prod__desc}>
                    Водка GRAF LEDOFF — это напиток, созданный с использованием лучших сортов зерна и чистейшей природной воды, что обеспечивает её исключительную мягкость и чистоту. Она проходит многократную фильтрацию через угольные и серебряные фильтры, что придаёт ей кристальную прозрачность и мягкий вкус. GRAF LEDOFF идеально подходит как для классического употребления, так и для коктейлей.
                  </p>
                  <button>Подробнее</button>
                </div>

                <div className={s.item__img}>
                  <img src="/assets/img/vodkaBootles/slider3.png" alt="" />
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </section>

        <section className={s.our__slogan}>
          <div className={s.musk}></div>
          <h2>
            Мы используем <br /> ингредиенты, подаренные  <br /> самой <span>природой</span>.
          </h2>
        </section>

        <section className={`${s.about__us} container`}>
          <div>
            <h2 className='container'>
              О нас
            </h2>
            <p>Компания "Best - fərdi shəxsi firması" занимается производством высококачественной водки, сочетая традиционные рецептуры с современными технологиями. Наш уникальный подход к отбору ингредиентов и тщательный процесс дистилляции обеспечивают чистый и насыщенный вкус каждой бутылки. Мы гордимся своим мастерством и стремимся предлагать продукцию, которая удовлетворит даже самых требовательных ценителей. Внимание к деталям и стремление к совершенству – главные принципы нашей работы.</p>
          </div>
          <h3>
            <span>20</span> Лет <br /> безупречной <br /> работы
          </h3>

        </section>

        <section className={`${s.certificates} container`}>
          <h2>Сертификаты</h2>
          <div className={s.certificate__slider}>
            <ImgLightBox images={certImages} currentInd={currentInd} isShow={isShow} SetIsShow={SetIsShow} />


            <Swiper
              spaceBetween={10}
              slidesPerView={1.1}
              className='certificate__slider'
              onClick={(swiper) => {
                setCurrentInd(swiper.clickedIndex);
                SetIsShow(true);
              }}

              breakpoints={{
                800: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
                }
              }}
            >
              <SwiperSlide >
                <div className={s.item}>
                  <div className={s.cert__img} >
                    <img src="/assets/img/certificates/1.jpg" alt="" />
                  </div>
                  <h4 className={s.cert__info}>
                    Декларация о соответствии от 24.05.2023
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.item} >
                  <div className={s.cert__img}>
                    <img src="/assets/img/certificates/2.jpg" alt="" />
                  </div>              <h4 className={s.cert__info}>
                    Декларация о соответствии от 24.05.2023
                  </h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={s.item} >
                  <div className={s.cert__img}>
                    <img src="/assets/img/certificates/3.jpg" alt="" />
                  </div>              <h4 className={s.cert__info}>
                    Декларация о соответствии от 24.05.2023
                  </h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={s.item} >
                  <div className={s.cert__img}>
                    <img src="/assets/img/certificates/4.jpg" alt="" />
                  </div>              <h4 className={s.cert__info}>
                    Декларация о соответствии от 24.05.2023
                  </h4>
                </div>
              </SwiperSlide>


            </Swiper>

          </div>
        </section>
        <Contacts />

        <Footer />

      </>

  );
}
