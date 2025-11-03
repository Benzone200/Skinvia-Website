import React, { useState } from 'react';

import video from "../assets/images/video.png";
import hero from "../assets/images/hero.png";
import ubtan from "../assets/images/ubtan.png";
import bright from "../assets/images/bright.png";
import night from "../assets/images/night.png";
import acne from "../assets/images/acne.png";
import cleanser from "../assets/images/cleansers.png";
import toner from "../assets/images/toner.png";
import serum from "../assets/images/serums.png";
import moisturizer from "../assets/images/moisturizer.png";
import acne2 from "../assets/images/acne2.png";
import sun from "../assets/images/sun.png";
import about from "../assets/images/about.png";
import woman from "../assets/images/woman.png";
import woman2 from "../assets/images/woman2.png";
import woman3 from "../assets/images/woman3.png";
import woman4 from "../assets/images/woman4.png";
import woman5 from "../assets/images/woman5.png";
const Home = () => {

 const [count, setCount] = useState(0);

  const skin = [
    { src: ubtan, title: "Ubantu Facial", label: "Buy now" },
    { src: bright, title: "Brightening Pack", label: "Buy now" },
    { src: night, title: "Night Cream", label: "Buy now" },
    { src: acne, title: "Acne Solution", label: "Buy now" },
  ];

  const category = [
    { src: cleanser, title: "Cleansers" },
    { src: toner, title: "Toners" },
    { src: serum, title: "Serums" },
    { src: moisturizer, title: "Moisturizers" },
    { src: acne2, title: "Acne treatment" },
    { src: sun, title: "Sun Screen" },
  ];

  const cart = [
    {
      src: acne,
      title: "Lorem Ipsum Dolor",
      label: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      button: "Add to Cart",
    },
    {
      src: bright,
      title: "Lorem Ipsum Dolor",
      label: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      button: "Add to Cart",
    },
    {
      src: acne,
      title: "Lorem Ipsum Dolor",
      label: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      button: "Add to Cart",
    },
    {
      src: acne,
      title: "Lorem Ipsum Dolor",
      label: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      button: "Add to Cart",
    },
    {
      src: bright,
      title: "Lorem Ipsum Dolor",
      label: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. ",
      button: "Add to Cart",
    },
    {
      src: acne,
      title: "Lorem Ipsum Dolor",
      label: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      button: "Add to Cart",
    },
  ];

  const womanPic =[
    {src:woman, title:"Lorem Ipsum Dolor Sit Amet", label:"Read More >" },
        {src:woman2, title:"Lorem Ipsum Dolor Sit Amet", label:"Read More >" },
            {src:woman3, title:"Lorem Ipsum Dolor Sit Amet", label:"Read More >" },
              {src:woman, title:"Lorem Ipsum Dolor Sit Amet", label:"Read More >" },
        {src:woman2, title:"Lorem Ipsum Dolor Sit Amet", label:"Read More >" },
            {src:woman3, title:"Lorem Ipsum Dolor Sit Amet", label:"Read More >" },
  ]

  const card=[
    {src:bright, title:"Lorem Ipsum Dolor Sit Amet" , label: "3/12/24", desc: "Read More >"},
        {src:bright, title:"Lorem Ipsum Dolor Sit Amet" , label: "3/12/24", desc: "Read More >"},
            {src:bright, title:"Lorem Ipsum Dolor Sit Amet" , label: "3/12/24", desc: "Read More >"},
                {src:bright, title:"Lorem Ipsum Dolor Sit Amet" , label: "3/12/24", desc: "Read More >"},
                  {src:bright, title:"Lorem Ipsum Dolor Sit Amet" , label: "3/12/24", desc: "Read More >"},
  ]


  return (
    <>
    <div className="overflow-x-hidden">
     
      
 
       {/* Hero section */}
       <section className="ml-[30px] lg:ml-50 px-4 md:px-8">
         <div className="flex flex-col lg:flex-row items-center lg:items-start">
           {/* Left Div */}
           <div className="mt-[40px] md:mt-[90px] text-center md:text-left">
             <h2 className="text-[28px] sm:text-[36px] leading-[38px] w-[90%] mx-auto md:text-[50px] md:leading-[55px] md:w-[500px] text-[#BF6159] font-400">
               Care For Your Skin, Care For Your Beauty
             </h2>
             <p className="text-[15px] sm:text-[17px] mt-4 w-[90%] mx-auto md:text-[20px] md:w-[400px] text-[#5f5a56] font-400 lg:mr-[95px]">
               Our skin care clinic best dermatologists in Lahore and Islamabad
               offer premium aesthetics.
             </p>
             <div className="flex flex-row ml-[90px] lg:ml-[5px] items-center gap-4 mt-4 md:flex-row  md:gap-8  ">
               <button className="text-white bg-[#BF6159] rounded-lg px-[30px] py-[8px] md:px-[40px] md:py-[5px] ">
                 Read More
               </button>
               <img src={video} className="w-[30px] md:w-[36px] " />
             </div>
           </div>
 
           {/* Right Div */}
           <div className="mt-6 md:mt-0 flex justify-center">
             <img
               src={hero}
               className="h-[300px] mr-[50px] sm:h-[400px] md:h-[300px]  lg:h-[600px] pb-[40px] md:pb-[80px] lg:pb-[100px]"
             />
           </div>
         </div>
       </section>
 
       {/* Shop section */}
       <section className="px-4 md:px-8">
         <h2 className="text-center font-400 text-[30px] sm:text-[35px] md:text-[40px] text-[#BF6159] mb-6">
           Shop by Skin Concerns
         </h2>
 
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
           {skin.map((skin, index) => (
             <div key={index} className="flex flex-col items-center">
               <img
                 src={skin.src}
                 className="w-[140px] sm:w-[160px] md:w-[200px] mb-[12px] hover:scale-105 transition"
               />
               <p className="font-400 text-[18px] text-center">{skin.title}</p>
               <p className="text-center text-[13px] sm:text-[14px]">
                 {skin.label}
               </p>
             </div>
           ))}
         </div>
 
         {/*shop by category*/}
         <div className="mt-10 mb-20">
           <h2 className="flex justify-center font-400 text-[30px] sm:text-[35px] md:text-[40px] text-[#BF6159] mb-12">
             Shop by Categories
           </h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
             {category.map((category, index) => (
               <div key={index} className="flex flex-col items-center">
                 <img
                   src={category.src}
                   className="w-[130px] mr-[60px] ml-[60px] sm:w-[150px] md:w-[180px] mb-[10px] hover:scale-105 transition"
                 />
                 <p className="font-400 text-[18px] text-center">
                   {category.title}
                 </p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Add to cart product */}
       <section className="px-4 md:px-8 py-8">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:ml-[150px] lg:mr-[200px]">
           {cart.map((item, index) => (
             <div
               key={index}
               className="border-2 border-[#BF6159] p-6  flex flex-col items-center text-center lg:h-[320px]"
             >
               <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#BF6159] mb-2">
                 {item.title}
               </h3>
               <p className="text-[13px] sm:text-[14px] text-[#BF6159] mb-4 w-[90%] sm:w-[300px]">
                 {item.label}
               </p>
               <img
                 src={item.src}
                 alt={item.title}
                 className="w-[200px] sm:w-[250px] mb-6"
               />
               <button className="bg-[#BF6159] text-white text-[12px] font-bold px-4 rounded-full hover:bg-[#a74f4a] transition">
                 {item.button}
               </button>
             </div>
           ))}
         </div>
       </section>
 
       {/* About us section */}
       <section className="px-4 md:px-8 md:mt-[10px] ">
         <div className="flex flex-col md:flex-row md:items-center lg:flex-row gap-10 md:gap-20 lg:ml-[100px] mb-15 lg:mb-20">
           <div className="mt-10 md:mt-0 text-center md:text-left md:w-1/2">
             <h3 className="font-bold text-[22px] md:text-[25px] text-[#bf6159] mb-4">
               ABOUT US
             </h3>
 
             <h2 className="text-[28px] sm:text-[36px] md:text-[50px] leading-[35px] sm:leading-[45px] text-[#BF6159] font-400 mb-4 lg:w-[450px]">
               DISCOVER A SKINVIA FLAGSHIP
             </h2>
             <p className="font-400 text-[15px] sm:text-[16px] text-[#5f5a56] mb-6 lg:w-[350px] ">
               FIND YOUR IDEAL COMBINATION OF IN-OFFICE TREATMENTS & SKINCARE
               REGIMENS.
             </p>
 
             <a href="#" className="text-[#bf6159] font-bold">
               Read more &gt;&gt;
             </a>
           </div>
 
           <div className="flex justify-center md:justify-end md:w-1/2">
             <img
               src={about}
               className="w-[100%] sm:w-[80%] md:w-[100%] lg:w-[1000px]"
             />
           </div>
         </div>
 
 
 {/* */}
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:ml-[10%] lg:ml-[300px] lg:mr-[250px] gap-y-6 ml-[40px]">
                     {womanPic.map((womanPic,index) => (
                       <div keys={index}>
                         <img src={womanPic.src} className=" w-[100px] lg:w-[220px] ml-[30px]"></img>
                         <p className="font-500 text-[15px] lg:text-[20px] lg:w-[150px] ml-[30px] lg:leading-[24px] w-[100px] ">{womanPic.title}</p>
                         <p className="text-[#bf6159] lg:ml-[30px] ml-[40px] text-[15px]">{womanPic.label}</p>
                       </div>
                     ))}
               </div>
  
 
       </section>
 
 
     <section className="mt-20 mb-20">
   {/* Container */}
   <div className="grid grid-cols-1">
     {/* Block 1 */}
     <div className="flex flex-col  md:flex-row lg:ml-[200px]  gap-6 md:gap-10 mb-12">
       <div className="border border-[#bf6159] px-5 py-4 w-[300px] ml-[40px] ">
         <img src={bright} className="w-full max-w-[250px] mx-auto" />
       </div>
       <div className="px-4 md:px-0">
         <h2 className="text-[22px] text-[#cc857f] md:w-[150px] mb-2 ml-[40px]">Lorem Ipsum Dolor Sit Amet</h2>
         <p className="md:w-[430px] font-400 text-[16px] text-[#5f5a56] mb-3 ml-[40px]">
           Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
         </p>
         <a href="#" className="font-bold text-[18px] text-[#bf6159] ml-[120px] lg:ml-[40px]">Add to Cart &gt;</a>
       </div>
     </div>
 
     {/* Block 2 */}
      <div className="flex flex-col md:flex-row-reverse  lg:mr-[200px] gap-2 mb-12">
       <div className="border border-[#bf6159] px-5 py-4 w-[300px] ml-[40px] lg:ml-[2px]">
         <img src={bright} className="w-full max-w-[250px] mx-auto" />
       </div>
       <div className="px-4 md:px-0">
         <h2 className="text-[22px] text-[#cc857f] md:w-[150px] mb-3 md:ml-[250px] ml-[40px] lg:ml-[420px]">Lorem Ipsum Dolor Sit Amet</h2>
         <p className="md:w-[430px] font-400 text-[16px] text-[#5f5a56] mb-3 ml-[40px] lg:ml-[200px]">
           Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
           <span className="block  md:ml-[150px] ">Sed Do Eiusmod Tempor Incididunt</span>
         </p>
         <a href="#" className="font-bold text-[18px] text-[#bf6159] md:ml-[280px] ml-[120px] lg:ml-[480px]">Add to Cart &gt;</a>
       </div>
     </div>
 
     {/* Block 3 */}
    <div className="flex flex-col  md:flex-row lg:ml-[200px]  gap-6 md:gap-10 mb-12">
       <div className="border border-[#bf6159] px-5 py-4 w-[300px] ml-[40px] ">
         <img src={bright} className="w-full max-w-[250px] mx-auto" />
       </div>
       <div className="px-4 md:px-0">
         <h2 className="text-[22px] text-[#cc857f] md:w-[150px] mb-2 ml-[40px]">Lorem Ipsum Dolor Sit Amet</h2>
         <p className="md:w-[430px] font-400 text-[16px] text-[#5f5a56] mb-3 lg:text-[20px] ">
           Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
         </p>
         <a href="#" className="font-bold text-[18px] text-[#bf6159] ml-[120px] lg:ml-[40px]">Add to Cart &gt;</a>
       </div>
     </div>
 
     {/* Block 4 */}
      <div className="flex flex-col md:flex-row-reverse  lg:mr-[200px] gap-2 mb-12">
       <div className="border border-[#bf6159] px-5 py-4 w-[300px] ml-[40px] lg:ml-[2px]">
         <img src={bright} className="w-full max-w-[250px] mx-auto" />
       </div>
       <div className="px-4 md:px-0">
         <h2 className="text-[22px] text-[#cc857f] md:w-[150px] mb-3 md:ml-[250px] ml-[40px] lg:ml-[420px]">Lorem Ipsum Dolor Sit Amet</h2>
         <p className="md:w-[430px] font-400 text-[16px] text-[#5f5a56] mb-3 ml-[40px] lg:ml-[200px]">
           Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
           <span className="block  md:ml-[150px] ">Sed Do Eiusmod Tempor Incididunt</span>
         </p>
         <a href="#" className="font-bold text-[18px] text-[#bf6159] md:ml-[280px] ml-[120px] lg:ml-[480px]">Add to Cart &gt;</a>
       </div>
     </div>
 
 
   </div>
 
   {/* Final Section */}
   <div className="flex flex-col md:flex-row items-center  lg:ml-[20%] mt-[80px] gap-6 px-4 lg:px-30 md:gap-1 md:px-1  ">
     <img src={woman4} className="w-full max-w-[400px] mx-auto ml-[60px] md:w-[600px] " />
     <div className="mt-6 md:mt-5 md:mr-[600px]">
       <h2 className="text-[23px] text-[#cc857f] md:w-[280px] mb-3 leading-[35px]">Lorem Ipsum Dolor Sit Amet</h2>
       <p className="text-[#5f5a56] font-400 text-[15px] w-full max-w-[300px] mb-8 lg:mb-5">
         Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
       </p>
       <a href="#" className="font-bold text-[18px] text-[#bf6159]">Read More &gt;</a>
     </div>
   </div>
 </section>
 
 
 {/* Cream Section */}
 <section className="px-4 lg:px-70">
   <h2 className="text-center font-[400] text-[24px] md:text-[30px] lg:text-[40px] text-[#BF6159] mb-8">
     Lorem Ipsum Dolor Sit Amet
   </h2>
 
   {/* Responsive Grid Section */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 lg:gap-x-12 lg:gap-y-8 md:ml-[20px]">
     {[1, 2, 3, 4].map((i) => (
       <div key={i} className="flex items-start space-x-4">
         <div className="border border-[#bf6159] bg-[#bf6159] w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] rounded-full"></div>
         <p className="text-[16px] md:text-[18px] lg:text-[20px] w-full md:w-[300px] lg:w-[340px]">
           Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
         </p>
       </div>
     ))}
   </div>
 
   {/* First Image + Text Row */}
   <div className="flex flex-col md:flex-row lg:flex-row md:ml-[8%] lg:mr-[50px] mt-16  lg:mt-20 gap-6 lg:gap-x-10 items-center ">
     <img src={woman5} className="w-[250px] md:w-[300px] lg:w-[340px]" />
     <div className="flex flex-col text-center md:text-left md:mb-30">
       <h2 className="leading-[40px] md:leading-[35px] lg:leading-[50px] mb-3 font-[400] text-[24px] md:text-[30px] lg:text-[40px] text-[#BF6159] md:w-[350px]  ">
         Lorem Ipsum Dolor Sit Amet
       </h2>
       <p className="text-[#5f5a56] font-400 text-[16px] md:text-[18px] lg:text-[20px] w-full md:w-[400px] lg:w-[500px]">
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
     </div>
   </div>
 
   {/* Second Image + Text Row */}
   <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse lg:ml-[300px] mt-16 lg:mt-20 gap-6 lg:gap-x-10 items-center">
     <img src={woman5} className="w-[250px] md:w-[280px] lg:w-[340px]" />
     <div className="flex flex-col text-center md:text-left  lg:mb-30">
       <h2 className="leading-[40px] md:leading-[45px] lg:leading-[50px] mb-3 font-[400] text-[24px] md:text-[30px] lg:text-[40px] text-[#BF6159]  md:w-[350px] md:mt-2">
         Lorem Ipsum Dolor Sit Amet
       </h2>
       <p className="text-[#5f5a56] font-400 text-[16px] md:text-[18px] lg:text-[20px] w-full md:w-[400px] lg:w-[500px]">
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
     </div>
   </div>
 </section>
 
 {/* Card Section */}
 <section className="px-6 py-10 md:mt-5">
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
     {card.map((item, index) => (
       <div key={index} className="flex flex-col items-center text-center">
         <div className="border-3 border-[#BF6159] p-4 md:p-5 mb-4">
           <img
             src={item.src}
             alt={item.title}
             className="h-[100px] w-[130px] md:h-[130px] md:w-[170px] lg:h-[150px] lg:w-[200px]"
           />
         </div>
         <h3 className="text-[14px] md:text-[16px] font-semibold text-[#333] mb-2 w-[120px] md:w-[160px]">
           {item.title}
         </h3>
         <p className="text-[#666] text-[14px] md:text-[16px] mb-1 font-bold">{item.label}</p>
         <p className="text-[#BF6159] text-[12px] md:text-[14px]  cursor-pointer font-semibold">
           {item.desc}
         </p>
       </div>
     ))}
   </div>
 </section>

</div>

</>
  )
};
export default Home;