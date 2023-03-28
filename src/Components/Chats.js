import { ArrowRightIcon } from '@primer/octicons-react'
import React from 'react'

const Chats = () => {
    return (
        <div>
            <div className='chats'>
                <div className='chatanddoc'>
                <div className='chatDoctor'>
                    <b>Dr. Lokesh</b>
                </div>
                <div className='messgArea'>
                <div className='recMessg'>
                        Hello! eby
                    </div>
                    <div className='sendMessg'>
                        hi!
                    </div>
                </div>
                </div>
                <div className='chatbox'>
                    <input type="text" placeholder='Enter mesage here...' />
                    <div className='sendbtn'>
                        <ArrowRightIcon size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats