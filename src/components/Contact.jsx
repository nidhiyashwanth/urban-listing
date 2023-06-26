import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Contact({userRef, listing}) {
    const [Landlord, setLandlord] = useState(null)
    useEffect(()=>{
        async function getLandlord(){
            const docRef = doc(db, "users", userRef);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setLandlord(docSnap.data())
            }
            else{
                toast.error("Landlord details are unavailable right now")
            }
        }
        getLandlord()
    }, [])
  return (
    <div>{Landlord}</div>
  )
}
