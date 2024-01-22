import React from 'react'
import Image from 'next/image'
//import css from 'styled-jsx/css';

export default function CssFlexbox(){
    return(
        <div>
  <header className="flex flex-wrap justify-between items-center">
  <a href="text-bold-3xl" className="flex-1">
    <img className="inline h-7" src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png" 
    alt="" />
  </a>
  <ul className="order-12 flex-[100%] mt-4 md:order-none 
  md:flex-auto md:mt-0">
    <li>
      <a href="text-bold-2xl text-black-500 bg-gray-500">Home</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <a href="#">Pricing</a>
    </li>
  </ul>
  <span className="flex-1 text-right">
    <a href="#" className="btn">Join us</a>
  </span>
</header>
<br/>
<div className="wrapper">
  <div className="container flex flex-col md:flex-row">
    <div className="flex-[40%]">
      <img className="article-img" src="https://res.cloudinary.com/thirus/image/upload/v1632854291/logos/drawers_gr2wn5.jpg" alt="Furniture" />
    </div>
    <div className="details flex-[60%]">
      <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
      <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
      <div className="article-footer flex items-center">
        <img src="https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/avatar-michelle_qcobnu.jpg" alt="" />
        <div>
          <p>Michelle Appleton</p>
          <span>28 Jun 2020</span>
        </div>
        <div className="share-icon ml-auto">
          <img src="https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/icon-share_frvrfu.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<br/>
<div className="container flex flex-col">
  <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
  <span>$220</span>
  <h3>Comfort Grey Sneakers</h3>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam</p>
  <button className="self-end">Add to Cart</button>
</div>
<br/>
<div className="container flex items-center">
  <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100" alt=""></img>
  <div>
    <p>Richard Carl</p>
    <span>Graphic Designer</span>
  </div>
  <div className="rating ml-auto self-start">
    <i className="fa fa-star"></i>
    <span>5.0</span>
  </div>
</div>
<br/>
  <div className="container flex items-center">
  <i className="fa fa-bell mr-2"></i>
  <span className="rounded bg-blue-400 text-lg">Notifications</span>
  <span className="rounded bg-blue-400 text-lg count ml-auto">1</span>
</div>
  <div className="container flex">
  <img className="flex-1 w-full object-cover" src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200" />
  <div className="details flex-[2]">
    <h2 className="text-3xl">Poolside Villas</h2>
    <p>Enjoy your stay at our property with mesmerizing views. Relax at the pool while you're pampered by our staff serving drinks and food of your choice.</p>
  </div>
</div><p className="flex text-bold text-white bg-slate-400 mx-4">
trying to explore new css flex option in Shuruti balsa book
Tailwind Css </p>
    <a href="bg-gray-500 px-4">Read more</a>
  </div>
    );
};
 {/*
<div className="profile flex justify-items-centre">
  <img className="flex-shrink-0"
  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
   alt="profile-img" />
  <div>
    <h3 className="text-grdient text-justify text-2xl">The Lion</h3>
    <p className="font-semibold">A front end web developer from New York, USA. Currently working as a freelancer. Drop a mail or say hello 👋</p>
    <br/>
    <br/>*/}