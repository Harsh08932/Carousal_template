import React, { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const [items, SetItems] = useState(list);
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((old) => {
      const result = (old - 1 + items.length) % items.length;
      return result;
    });
  };


  const nextSlide = () => {setCurrent((old) => {
    const result = (old + 1) % items.length;
    return result;
  });};

  useEffect(()=>{
   let sliderId = setInterval(()=>{
      nextSlide();
    },2000)

    return ()=>{clearInterval(sliderId)}
  },[current])

  return (
    <section className="slider-container">
      {items.map((item,index) => {
        const { id, image, name, title, quote } = item;
        return (
          <article className="slide" key={id}  style={{transform: `translateX(${(index-current)*100}%)`}}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
};

export default Carousel;
