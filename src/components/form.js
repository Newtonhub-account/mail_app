import { useState } from "react"
function Form()
{
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleInputName(event)
    {
        setName(event.target.value)
    }

    function handleInputMobile(event)
    {
        setMobile(event.target.value)
    }

    function handleInputEmail(event)
    {
        setEmail(event.target.value)
    }

    function handleInputMessage(event)
    {
        setMessage(event.target.value)
    }
    return(
        <form onSubmit={sendEmail} 
        style={{
            backgroundColor:'red', 
            margin: '60px', 
            height: '250px', 
            width: '500px', 
            wordSpacing: '7px',
            textAlign: 'center',
            textDecoration: 'times new roman',
            
            }}>
       <div>
            <label>Name</label>
            <input type="text" value={name} onChange={handleInputName}></input>
            
        </div>


        <div>
                <label>Mobile</label>
                <input type="text" value={mobile} onChange={handleInputMobile}></input>
                
        </div> 
        
        <div>
                <label>Email</label>
                <input type="text" value={email} onChange={handleInputEmail}></input>
            
        </div> 
        <div>
                <label>Message</label>
                <textarea type="text" value={message} onChange={handleInputMessage}></textarea>
            
        </div> 

<button type="submit">Send Message</button>

        </form>
    )

}

function sendEmail() {
    const recipient = "newtonmwitumwa2@gmail.com";
    const name = handleInputName(name);
    const mobile = handleInputMobile(mobile);
    const email = handleInputEmail(email);
    const message = handleInputMessage(message);

    const mailtoLink = `mailto:${recipient}?name=${encodeURIComponent(name)}?mobile=${encodeURIComponent(mobile)}?email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  }


export default Form

