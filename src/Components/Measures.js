import React, { useState } from 'react'
import Calendar from 'react-calendar'

const Measures = () => {
    
    const [valueExists, setvalueExists] = useState(true)
    const [date, setDate] = useState(new Date())
    const [showDate, setshowDate] = useState(new Date())

    const changeDate = (e) => {
        setDate(e)
    }

    return (
        <div>
            <div className='recentmeasures'>
                {

                    showDate.toDateString() == date.toDateString() ?
                        <h3 className='head3'>Today's Reading</h3>
                        :
                        <h3 className='head3'>{date.toDateString()}</h3>
                }
                {
                    valueExists ?
                        <div className='width100'>
                            <div className='valuediv'>
                                <div><b>Heart Rate</b></div>
                                <div className='val'><b>100 bpm</b></div>
                            </div>
                            <div className='valuediv'>
                                <div><b>SpO2</b></div>
                                <div className='val'><b>100 %</b></div>
                            </div>
                            <div className='valuediv'>
                                <div><b>Body Temperature</b></div>
                                <div className='val'><b>100 °F</b></div>
                            </div>
                            <div className='valuediv'>
                                <div><b>Atmospheric Temperature</b></div>
                                <div className='val'><b>100 °C</b></div>
                            </div>
                            <div className='valuediv'>
                                <div><b>Atmospheric Humidity</b></div>
                                <div className='val'><b>100 °C</b></div>
                            </div>
                        </div>
                        :
                        <div className='valuediv'>
                            <div className='val'><b>No Records Found</b></div>
                        </div>
                }
            </div>
            <div className='calander'>
                <Calendar onChange={changeDate} value={date} />
            </div>
        </div>
    )
}

export default Measures