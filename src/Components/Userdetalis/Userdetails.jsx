import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Heading from '../Heading/Heading'
import { IoArrowBack } from "react-icons/io5";
import "./Userdetails.scss"
import DetailsLoader from '../Loader/DetailsLoader';

const Userdetails = () => {
  const [user, setUser] = useState([])
  const [loader, setLoader] = useState(true)
  const { id } = useParams()

  const getSpecificUser = () => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.filter((e) => e.id === id))
        setLoader(false)
      })
  }

  useEffect(() => {
    getSpecificUser()
  }, [])

  const userData = user[0]
  return (
    <>
      {
        loader ? <DetailsLoader /> : <section className='user-details'>
          <Heading title="User Details">
          </Heading>
          <Link to={"/"}><IoArrowBack /></Link>
          <div className="main-user">
            <div className="avatar">
              <img src={userData.avatar} alt="" />
            </div>
            <p className='center'>{userData.profile.email}</p>
            <div className="bio center">
              {userData.Bio}
            </div>
            <div className="info">
              <div>
                <span>Full Name</span>
                <h4>{userData.profile.firstName} {userData.profile.lastName}</h4>
              </div>
              <div>
                <span>Job Title</span>
                <h4>{userData.jobTitle}</h4>
              </div>
              <div>
                <span>Email</span>
                <h4>{userData.profile.email}</h4>
              </div>
            </div>
          </div>

        </section>
      }

    </>

  )
}

export default Userdetails
