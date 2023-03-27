import { ArrowRightIcon } from '@primer/octicons-react'
import React from 'react'

const Chats = () => {
    return (
        <div>
            <div className='chats'>
                <div className='messgArea'>
                    <div className='sendMessg'>
                        hi!
                    </div>
                    <div className='recMessg'>
                        Hello! eby
                    </div>
                </div>
                <div className='chatbox'>
                    <input type="text" />
                    <div className='sendbtn'>
                        <ArrowRightIcon size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats