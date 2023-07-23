import EI from '../assets/email.png'
import LI from '../assets/linkedin.png'
import GI from '../assets/github.png'

const Footer = () => {

    return (
        <div className = 'footer'>
            <a href = 'mailto:ethanflatt@gmail.com'> <img src={EI} alt="" /> </a>
            <a href = 'https://www.linkedin.com/in/ethanflatt1/' target='blank'> <img src={LI} alt="" /> </a>
            <a href = 'https://github.com/EthanFlatt' target='blank'> <img src={GI} alt="" /> </a>
        </div>
    )
}

export default Footer