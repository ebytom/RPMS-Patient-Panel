import { ArrowRightIcon } from '@primer/octicons-react'
import React, { useEffect, useState } from 'react'
import { getDatabase, onChildAdded, push, ref } from 'firebase/database'

const Chats = () => {
    const [reply, setReply] = useState("")
    const [messages, setMessages] = useState([])
    // const [uid, setUid] = useState(localStorage.getItem(uid))

console.log(messages);
    useEffect(() => {
        onChildAdded(ref(getDatabase(), `messages/${"t8QV7laQMdgaol3smIbaD8dxHdy2" + "1677127917955"}`), (snap) => [
            setMessages(pre => ([
                ...pre, {
                    msg: snap.val().msg,
                    isdoctor: snap.val().isdoctor
                }
            ]))
        ])
    }, [])

    const sendmessage = () => {
        if (reply != "")
            push(ref(getDatabase(), `messages/${"t8QV7laQMdgaol3smIbaD8dxHdy2" + "1677127917955"}`)).then(() => {
                setReply("")
            })
    }

    return (
        <div>
            <div className='chats'>
                <div className='chatanddoc'>
                    <div className='chatDoctor'>
                        <b>Dr. Lokesh</b>
                    </div>
                    <div className='messgArea'>
                        {
                            messages.map(msg=>(
<div className={msg.isdoctor?'recMessg':'sendMessg'}>
                            {msg.msg}
                        </div>
                            ))
                        }
                    </div>
                </div>
                <div className='chatbox'>
                    <input
                        onChange={(e) => setReply(e.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                sendmessage();
                            }
                        }}
                        type="text" placeholder='Enter mesage here...' />
                    <div onClick={()=>sendmessage()} className='sendbtn'>
                        <ArrowRightIcon size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats