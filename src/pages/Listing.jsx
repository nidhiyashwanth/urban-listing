import { getDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {db} from "../firebase"
import Spinner from '../components/Spinner'
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {EffectFade, Autoplay, Navigation, Pagination} from "swiper"
import "swiper/css/bundle"

export default function Listing() {
    const params = useParams()
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    SwiperCore.use(Autoplay, Navigation, Pagination)
    useEffect(()=>{
        async function fetchListing(){
            const docRef = doc(db, "listings", params.listingId)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setListing(docSnap.data())
                setLoading(false);
            }
        } fetchListing()
        
    }, [params.listingId])
    if(loading){
        return <Spinner/>
    }
  return (
    <main>
        <Swiper>
            {listing.imgUrls.map((url, index)=>(
                <SwiperSlide key={index}>
                    <div className='' style={{background:`url(${listing.imgUrls[index]})`}}>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </main>
  )
}
