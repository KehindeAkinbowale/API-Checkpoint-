import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ActiveExample from './UserCard'
const UserList = () => {
    const [listOfUSer, setlistOfUSer] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setlistOfUSer(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
  return (    
    <div className='d-flex' style={{flexWrap: "wrap"}}>
        {
            listOfUSer.map((item) => {
                return (
                    <>
                     <ActiveExample  userId={item.id} id={item.id} name={item.name}
                     username={item.username} email={item.email} addressCity={item.address.city} 
                     addressStreet={item.address.street} companyName={item.company.name} 
                     companyCatchPhrase={item.company.catchPhrase} website={item.website}
                     addressZipcode={item.address.zipcode} addressSuite={item.address.suite}
                     companyBs={item.company.bs} geolat={item.address.geo.lat} geolng={item.address.geo.lng}
                      phone={item.phone}
                     />
                    </>
                )
            })
        }

    </div>
  )
}

export default UserList