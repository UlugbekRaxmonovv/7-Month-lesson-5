import React,{useState} from 'react';
import './Contact.css'
import { MdPeopleAlt } from "react-icons/md";
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"


//  https://api.telegram.org/bot6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]


const Contact = () => {
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [email,setEmail] = useState('')
    const [textarea,setTextarea] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()
        let text = "Buyurtma %0A%0A"
        text +=`Ismi:${name}%0A`
        text +=`Familiyasi:${surname}%0A`
        text +=`Email:${email}%0A`
        text +=`Text:${textarea}%0A`
        
        let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`
 
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

        setName('')
        setSurname('')
        setEmail('')
        setTextarea('')
    }
    return (
        <div className='container'>
            <div className="Contact">
                <div className="Contact_row">
                  <MdPeopleAlt />
                    <form action="" onSubmit={handelSubmit}>
                    <label htmlFor="" className='Name'>Name</label>
                    <input type="text" 
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                     placeholder='Name.....'/>
                    <label htmlFor="">Surname</label>
                    <input type="text"
                    value={surname}
                    onChange={(e) =>setSurname(e.target.value)}
                    placeholder='Surname.....' />
                    <label htmlFor="">Password</label>
                    <input type="password" 
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                     placeholder='Password.....' />
                     <textarea
                     value={textarea}
                     onChange={(e) =>setTextarea(e.target.value)}
                     name="" id="" cols="30" rows="10" defaultValue={"Ma'lumot kiriting"}>
                        </textarea>
                           <div className="btn_row">
                        <button type='submit'>Submit</button>
                           </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
