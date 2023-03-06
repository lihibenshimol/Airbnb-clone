
import { useState } from "react"
import { useEffect } from "react"
import { labels, stayServiceL } from "../services/stay.service.local"
import { AiOutlineRight, AiOutlineLeft, AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'


export function StayIconFilter() {
    const [idx, setIdx] = useState(0)
    const pageSize = 14
    const pageDiff = 4
    const startLabel = idx * pageDiff
    let labelsPage = labels.slice(startLabel, startLabel + pageSize)

    useEffect(() => {
        labelsPage = labels.slice(startLabel, startLabel + pageSize)
    }, [idx]
    )

    function pagination(diff) {
        console.log('diff = ', diff)
        let index = idx
        index = index + diff
        if (index < 0) {
            index = 0
        }
        else if (
            labels.length - (startLabel + pageSize) < 0
        ) {
            index = index - 1
            setIdx(idx)
        }
        setIdx(index)

    }


    return (
        <>
            <div className="stay-icon-filter">
                <div className="filter-icon-pagination">
                    <span onClick={() => pagination(-1)} className={`icons-left ${(idx === 0) ? 'start' : ''}`}><AiOutlineLeftCircle /></span>
                    <span onClick={() => pagination(+1)} className={`icons-right ${(idx === 12) ? 'end' : ''}`}><AiOutlineRightCircle /></span>
                </div>

                {labelsPage.map(label => <article key={label} className="filter-btn">
                    <img className="filter-icon" src={require(`../assets/img/icon-nav-filter/${label}.png`)} />
                    {label}
                </article>)}


            </div>
        </>
    )
}