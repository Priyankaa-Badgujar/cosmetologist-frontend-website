import './Contact.css';
import App from '../../App';



function Contact(){


    return(
        <>
        <div className='page'>
            <h1 className ="contact">Contact me</h1><br/><br/>
            <form>
                <label>Name</label><br/>
                <input type = "text" placeholder = "Your Name"  name='name' className ="fname"></input><br/><br/>
                
                <label>Lastname</label><br/>
                <input type = "text" placeholder = "Your lastname" name='lname' className = "lname"></input><br/><br/>

                
                <label>Your email</label><br/>
                <input type = "text" placeholder = "Your email address" name='email' className = "eadd"></input><br/><br/>

                
                <label>Message</label><br/>
                <input type = "text" placeholder = "enter your message" name='msg' className = "msg"></input><br/><br/>

                <button className='submit'>Submit</button>

            </form>

        </div>

        </>
    )
}

export default Contact;