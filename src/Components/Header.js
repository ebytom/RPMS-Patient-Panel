import { ChevronLeftIcon, FeedPersonIcon, PersonFillIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isprofile, setisprofile] = useState(false)


    return (
        <div className='header'>
            <div onClick={() => {
                if(location.pathname  == "/"){
                    navigate("profile")
                }else{
                    navigate("/")
                }
            }}>
                {
                    location.pathname  !== "/"?(
                        <ChevronLeftIcon className="profilelogo" size={32} />
                    ):(
                        <PersonFillIcon className="profilelogo" size={30} />
                    )
                }
            </div>
            <div className='heading'><b>RPMS</b></div>
        </div>
    )
}

export default Header