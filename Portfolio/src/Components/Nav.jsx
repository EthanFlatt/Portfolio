import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div className="nav-links">
            <Link className='nav-link' to='/'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}