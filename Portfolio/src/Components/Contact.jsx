import React from 'react';
import Footer from './Footer'
import { useForm, ValidationError } from '@formspree/react';

function refreshPage() {
    window.location.reload(false);
  }
const Contact = () => { 
    const [state, handleSubmit] = useForm("mdoreerg");
        if (state.succeeded) {
            return <div className="contactModal">
                <div className="contactModalContent">
                Thanks for the message!
                <button onClick={refreshPage}>Ok</button>
                </div>
            </div>
        }
  return (
    <>
    <div className="contactPage">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name
        </label>
        <input
        type="text"
        id='name'
        name='name'
        />
        <ValidationError 
        prefix='Name'
        field='name'
        errors={state.errors}
        /> 
        <label htmlFor="email">
        Email Address
        </label>
        <input
        id="email"
        type="email" 
        name="email"
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
        <label htmlFor="message">
            Message
        </label>
        <textarea
        id="message"
        name="message"
        rows='6'
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
        Submit
        </button>
        </form>
    </div>
    <div className="aboutFooter">
        <Footer backgroundColor = '#D3C4D1'></Footer>
    </div>
    </>
  )
}
  
export default Contact;
