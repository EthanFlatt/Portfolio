import { useState } from 'react'


const Contact = () => {

const initialState = {
    name: '',
    email: '',
    message: ''
}

const [formState, setFormState] = useState(initialState)

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(formState)
  setFormState(initialState)
}

const handleChange = (event) => {
setFormState({...formState, [event.target.id] : event.target.value})
}



    return (
            <div className="contactPage">
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                <label htmlFor="issueType">Name</label>
                <input type="text"
                       id="name" 
                       onChange={handleChange} 
                       value={formState.name}
                />
                <label htmlFor="subject">Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={handleChange}
                    value={formState.email}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    value={formState.message}
                ></textarea>
                <button type="submit">Send</button>
                </form>
            </div>
    )
}

export default Contact