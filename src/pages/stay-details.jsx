import { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { AppHeader } from "../cmps/app-header";
import { stayServiceL } from "../services/stay.service.local";


export function StayDetails() {
    const [stay, setStay] = useState(null)
    const { stayId } = useParams()
    const hostName = stay?.host.fullname.split(" ")[0]


    useEffect(() => {
        loadStay()
        // ToggleDetails(true)
        const elHeader = document.getElementById('header')
        elHeader?.classList.add('narrow')

    }, [])

    async function loadStay() {
        try {
            const stay = await stayServiceL.getById(stayId)
            setStay(stay)
        } catch (err) {
            console.log('Had issues in stay details', err)
            // navigate('/')
        }
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

    if (!stay) return <h1>loading</h1>
    return (
        <>
            <AppHeader className="main-container narrow" />
            <div className="stay-details main-container narrow">
                <div className="details-info">
                    <div className="stay-name">{stay.name}</div>

                    <section className="small-info">
                        <span className="rate"><AiFillStar className='icon' style={{ width: '13px' }} />
                            {getRating()}</span>
                        <span className="seperator">.</span>
                        <span className="reviews">{stay.reviews.length} {stay.reviews.length > 1 ? 'reviews' : 'review'}</span>
                        <span className="seperator">.</span>
                        <span className="loc">{stay.loc.city}, {stay.loc.country}</span>
                    </section>
                </div>


                <div className="imgs-container">
                    {stay.imgUrls.slice(0, 5).map((url, idx) => (
                        <div key={idx} className={`grid-img-${idx + 1}`}>
                            <img src={url} />
                        </div>
                    ))}
                </div>

                <div className="stay-details-grid">
                    <div className="title">
                        <h3>{stay.type} hosted by {stay.host.fullname}</h3>
                        <section className="small-info">
                            <span className="capacity">{stay.capacity} guests</span>
                            <span className="seperator">.</span>
                            <span className="bedrooms">2 beds</span>
                            <span className="seperator">.</span>
                            <span className="baths">1 bath</span>
                        </section>
                    </div>

                    <div className="dry-details">
                        <div className="host">
                        <img className="img-activity" style={{ width: '24px', height: '24px' }} src={require("../assets/img/stay-details/pet_friendly.png")} alt="" />
                        <span className="txt">Furry friends welcome
                            <span className="head-span">Bring your pets along for the stay.</span></span>
                        </div>
                        <div className="host">
                            <img className="img-activity" style={{ width: '24px', height: '24px' }} src={require("../assets/img/stay-details/great_communication.png")} alt="" />
                            <span className="txt">Great Communication
                                <span className="head-span">95% of recent guests rated Emin 5-star in communication.</span></span></div>
                        <div className="host">
                            <img className="img-activity" style={{ width: '24px', height: '24px' }} src={require("../assets/img/stay-details/superhost.png")} alt="" />
                            <span className="txt">{hostName} is a Superhost
                                <span className="head-span">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span></span></div>

                        <div className="air-cover">
                            <img style={{ width: '26px' }} className="air" src={require("../assets/img/img/aircover.png")} />
                            <span className="txt">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</span>
                            <span className="more">Learn more</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )


}