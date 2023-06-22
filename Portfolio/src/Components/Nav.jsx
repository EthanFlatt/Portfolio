import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div className="nav-links">
            <Link to='/'>About</Link>
            <Link to='/projects'></Link>
            <Link to='/resume'></Link>
            <Link to='/contact'></Link>
        </div>
    )
}