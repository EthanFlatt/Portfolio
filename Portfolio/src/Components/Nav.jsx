import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div>
            <div className="nav-links">
            <div><Link className='nav-link' to='/'>About</Link></div>
            <div><Link to='/projects'>Projects</Link></div>
            <div><Link to='/resume'>Resume</Link></div>
            <div><Link to='/contact'>Contact</Link></div>
            </div>
        </div>
    )
}