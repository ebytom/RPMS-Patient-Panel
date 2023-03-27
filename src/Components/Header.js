import { ChevronLeftIcon, FeedPersonIcon, PersonFillIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isprofile, setisprofile] = useState(false)
    return (
        <div className='header'>
            {
                location?.pathname==="/profile"?
                    <div onClick={() => navigate("/profile")}>
                        <ChevronLeftIcon className="profilelogo" size={32} />
                    </div>
                    :
                    <div onClick={() => navigate("/profile")}>
                        <PersonFillIcon className="profilelogo" size={30} />
                    </div>
            }
            <div className='heading'><b>RPMS</b></div>
        </div>
    )
}

export default Header