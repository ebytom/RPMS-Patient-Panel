import { ArrowRightIcon } from '@primer/octicons-react';
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Chats from '../Components/Chats';
import Header from '../Components/Header';
import Measures from '../Components/Measures';

const Home = () => {

    const [isSelected, setisSelected] = useState(true)

    return (
        <div>
            <Header />
            <div className='home'>
                <div className='options'>
                    <div
                        className={isSelected ? 'option1 selected' : 'option1'}
                        onClick={() => setisSelected(true)}>
                        <b>Readings</b>
                    </div>
                    <div
                        className={isSelected ? 'option2' : 'option2 selected'}
                        onClick={() => setisSelected(false)}>
                        <b>Chats</b>
                    </div>
                </div>
                {
                    isSelected ?
                        <Measures />
                        :
                        <Chats />
                }

            </div>
        </div>
    )
}

export default Home