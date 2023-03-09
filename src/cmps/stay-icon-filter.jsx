
import { useState } from "react"
import { useEffect } from "react"
import { labels, stayServiceL } from "../services/stay.service.local"
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'


export function StayIconFilter() {
    


    function slideLeft() {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    function slideRight() {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }


    return (
        <>


            <div className="stay-icon-filter">

                <section className="arrow-container left-container">
                    <span onClick={slideLeft} className={`arrow`}><MdChevronLeft /></span>
                </section>

                <div className="filter-slider" id="slider">
                    {labels.map(label => <article key={label} className="filter-btn">
                        <img className="filter-icon" src={require(`../assets/img/icon-nav-filter/${label}.png`)} />
                        {label}
                    </article>)}
                </div>

                <section className="arrow-container right-container">
                    <span onClick={slideRight} className={`arrow`}><MdChevronRight /></span>
                </section>

            </div>
        </>
    )
}