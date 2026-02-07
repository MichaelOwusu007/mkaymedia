"use client"


import "./graphicdesign.css";
import {  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function page() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <div>
      <header
        className='shop-banner'
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/portfolio/designbanner.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative", // Ensure the positioning context for absolute positioning of child elements
        }}
      >
        <h1 className='shop-title font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl top-1/2 left-1/2 absolute text-center w-full text-white'>
          GRAPHIC DESIGN
        </h1>
      </header>
      <main className=' w-full mx-auto px-5 '>
        
        <div  className=' my-8 lg:px-20  text-lg leading-8 font-sans'>
        <p>Embark on a visual journey with McKuleGraphix, your go-to destination for professional graphic design that seamlessly blends quality and cost-effectiveness. Since 2020, we've upheld reasonable and steadfast pricing, ensuring you receive the best value for your creative needs.Do not forget to mention all instructions and your requirements.Yes feel free to make it all known to us. You are welcome to choose the most suitable tasks from the Graphic design packages listed below.You wil pay for the services in your countries currency.</p>
          <p className='mt-5'>At McKuleGraphix, we understand the importance of visual communication in today's digital landscape. Our team of skilled designers is dedicated to bringing your ideas to life through captivating and innovative graphic design solutions. Whether you need eye-catching logos, stunning social media graphics, or compelling marketing materials, we've got you covered.</p>
      </div>
      <section className='lg:py-20'>
      <div className='flex items-center justify-center lg:flex-row flex-col'>   
          <div className=' designproject 1'>
              <div data-aos="fade-up" className=' lg:p-20 p-6 py-20'>
            <h3 className='text-4xl young-serif-font xl:text-6xl font-medium '>Digital Advertisement</h3>
                <p className='mt-5 text-xl leading-8 font-medium '>
                Elevate your brand presence with our digital advertisement services at McKuleGraphix. Our team of experienced designers ensures attention-grabbing visuals that leave a lasting impression on your target audience. Take your marketing efforts to the next level with McKuleGraphix."
             </p>
             <div className=' lg:text-2xl my-10 mb-0 w-max '>
              <div className=' border-b hover:border-b-blue-500 hover:text-blue-500 flex items-center p-2 '>
                <a href="/contact">Lets's talk</a>
                <div className='m-1'></div>
                <div>&rarr;</div>
              </div>
             </div>
            </div>
            </div>
            <img className=' xl:pr-20 xl:w-187.5 xl:h-162.5 sm:w-125 sm:h-125 ' src="/assets/portfolio/portfolio1.jpg" alt="design"/>
        </div>
        </section>
        <section className='flex lg:pb-20 justify-center items-center flex-col-reverse lg:flex-row'>
        <div className='flex items-center justify-center lg:flex-row flex-col-reverse'> 
        <img className=' xl:pl-20 xl:w-187.5 xl:h-162.5 sm:w-125 sm:h-125 ' src="/assets/portfolio/design1.jpg" alt="design"/>  
          <div className=' designproject 1'>
              <div data-aos="fade-up" className=' lg:p-20 p-6 py-20'>
            <h3 className='text-4xl young-serif-font xl:text-6xl font-medium '>Flyers & Posters</h3>
                <p className='mt-5 text-xl leading-8 font-medium '>
                Transform your messaging into captivating visuals with our flyer and poster design services at McKuleGraphix. We specialize in creating eye-catching promotional materials that effectively communicate your message. Our expert designers focus on delivering designs that stand out and leave a lasting impression.
             </p>
             <div className=' lg:text-2xl my-10 mb-0 w-max '>
              <div className=' border-b hover:border-b-blue-500 hover:text-blue-500 flex items-center p-2 '>
                <a href="/contact">Lets's talk</a>
                <div className='m-1'></div>
                <div>&rarr;</div>
              </div>
             </div>
            </div>
            </div>
        </div>
        </section>
        <section className='lg:pb-20'>
      <div className='flex items-center justify-center lg:flex-row flex-col'>   
          <div className=' designproject 1'>
              <div data-aos="fade-up" className=' lg:p-20 p-6 py-20'>
            <h3 className='text-4xl young-serif-font xl:text-6xl font-medium '>Logo Designs</h3>
                <p className='mt-5 text-xl leading-8 font-medium '>
              We design a stunning Logo that actually designs,brand and build your business.We've got you covered for all your logo design works and indeed we are only a few clicks away.Trust McKuleGraphix to give your brand a distinctive and impactful visual representation.
             </p>
             <div className=' lg:text-2xl my-10 mb-0 w-max '>
              <div className=' border-b hover:border-b-blue-500 hover:text-blue-500 flex items-center p-2 '>
                <a href="/contact">Lets's talk</a>
                <div className='m-1'></div>
                <div>&rarr;</div>
              </div>
             </div>
            </div>
            </div>
            <img className=' xl:pr-20 xl:w-187.5 xl:h-162.5 sm:w-125 sm:h-125 ' src="/assets/portfolio/logo2.jpg" alt="design"/>
        </div>
        </section>

        <section className='flex justify-center items-center flex-col-reverse lg:flex-row pb-20'>
        <div className='flex items-center justify-center lg:flex-row flex-col-reverse'> 
        <img className=' xl:pl-20 xl:w-187.5 xl:h-162.5 sm:w-125 sm:h-125 ' src="/assets/portfolio/portfolio2.jpg" alt="design"/>  
          <div className=' designproject 1'>
              <div data-aos="fade-up" className=' lg:p-20 p-6 py-20'>
            <h3 className='text-4xl young-serif-font xl:text-6xl font-medium '>Brand Identity</h3>
             <p className='mt-5 text-xl leading-8 font-medium '>
             Craft a cohesive and compelling brand identity with McKuleGraphix. Our brand identity services focus on creating a consistent and memorable visual language for your business. From logos to color palettes and typography, we ensure every element reflects your unique brand personality.
             </p>
             <div className=' lg:text-2xl my-10 mb-0 w-max '>
              <div className=' border-b hover:border-b-blue-500 hover:text-blue-500 flex items-center p-2 '>
                <a href="/contact">Lets's talk</a>
                <div className='m-1'></div>
                <div>&rarr;</div>
              </div>
             </div>
            </div>
            </div>
        </div>
        </section>
      </main>
    </div>
  )
}

export default page