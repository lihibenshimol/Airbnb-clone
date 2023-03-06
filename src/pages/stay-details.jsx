import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { stayServiceL } from "../services/stay.service.local";


export function StayDetails() {
    const [stay, setStay] = useState(null)
    const { stayId } = useParams()


    useEffect(() => {
        loadStay()
        // ToggleDetails(true)
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

    if (!stay) return  <h1>loading</h1>
    return (
       <h1>{stay.loc.city}</h1>
    )


}