import React, { useEffect, useState } from 'react'
import "./UserList.scss"
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'
import ListLoader from '../Loader/ListLoader'

const UserList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchUsers = async () => {
        const res = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
        const data = await res.json()
        setData(data)
        setLoading(false)
    }

    console.log(data)

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <>
            {
                loading ? <ListLoader /> : <section className='user-list'>
                    <Heading title="User List" />
                    <div className="userlist-container">

                        {
                            data.map((user, i) => <Link key={i} className='user' to={`/user/${user.id}`}>
                                <img src={user.avatar} />
                                <h3>{user.profile.firstName} {user.profile.lastName}</h3>
                            </Link>)
                        }
                    </div>
                </section>
            }


        </>
    )
}

export default UserList
