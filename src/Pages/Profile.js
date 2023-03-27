import React, { useState } from "react"
import { Link } from "react-router-dom"

import { ChevronRightIcon, ShareAndroidIcon, SyncIcon } from "@primer/octicons-react"
import Header from "../Components/Header"
// import { GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons"

const Profile = () => {

    return (
        <div>
            <Header />
        <div className="notification-page pos-r">
            <div className="notification profile">
                <img className="userlogo" src="user.png" />
                <div className="profile-head">
                    <h1>EBY TOM</h1>
                    <b>eby@yahoo.com</b>
                </div>
                <div className="docDetails">
                    <div><b>Dr. Lokesh</b></div>
                    <div><b>HK Hospital, Kengeri</b></div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Profile
