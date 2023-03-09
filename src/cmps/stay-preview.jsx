import { useState } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle, AiFillStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export function StayPreview({ stay }) {
    let [idx, setIdx] = useState(0)


    function fixIdxForImages(diff) {
        // const arrowRight = document.getElementById('arrow-right')
        // const arrowLeft = document.getElementById('arrow-left')
        idx += diff
        // if (idx !== stay.imgUrls.length - 1 && idx !== -1) {
        //     arrowLeft.classList.remove('hide')
        //     arrowRight.classList.remove('hide')
        // }
        if (idx > stay.imgUrls.length - 1) {
            // arrowRight.classList.add('hide')
            // arrowLeft.classList.remove('hide')
            idx=0
            
        } else if (idx === -1) {
            // arrowRight.classList.remove('hide')
            // arrowLeft.classList.add('hide')
            idx = stay.imgUrls.length - 1
        } 

        setIdx(idx)
    }

    function getRating() {
        if (!stay.reviews || stay.reviews.length === 0) {
            return null
        }
        let totalRating = 0;
        stay.reviews.forEach(review => {
            totalRating += review.rate
        })
        return (totalRating / stay.reviews.length).toFixed(2)
    }

    const stayPrice = (parseFloat(JSON.stringify(stay.price)?.replace(/,/g, ''))).toLocaleString()

    return (
        <div className="stay-preview">
            <div className="img-container">
                <Link to={`/stay/${stay._id}`}>
                    <img src={stay.imgUrls[idx]} alt="" />
                </Link>
                <div className="slider-btn flex">
                    <button id='arrow-left' className='arrow-left ' onClick={() => fixIdxForImages(-1)}><AiOutlineLeft /></button>
                    <button id='arrow-right' className='arrow-right' onClick={() => fixIdxForImages(1)}><AiOutlineRight /></button>
                </div>
                <div className="dots">
                    {stay.imgUrls.map((url, index) => <div onClick={() => setIdx(index)} key={url} className={`dot ${idx === index ? 'dot-active' : ''}`}></div>)}
                </div>
            </div>
            <Link to={`/stay/${stay._id}`}>
                <div className="details grid">
                    <div className="details-header flex">
                        <div className="loc">
                            {stay.loc.city}, {stay.loc.country}
                        </div>
                        <div className="details-rate">
                            <AiFillStar className='icon' style={{ width: '13px' }} />
                            {getRating()}
                        </div>
                    </div>
                    <p className='address'>{stay.loc.address}</p>
                    {/* <p>{randomDates}</p> */}
                    <p className='price'>$ <span className='p'>{stayPrice}</span><span> night</span></p>
                </div>
            </Link>

        </div>
    )
}