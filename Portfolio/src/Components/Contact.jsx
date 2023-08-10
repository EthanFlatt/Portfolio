import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => { 
    const [state, handleSubmit] = useForm("mdoreerg");
        if (state.succeeded) {
            return <div className="contactModal">
                Temporary
            </div>
        }
  return (
    <div className="contactPage">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
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
  )
}
  
export default Contact;
