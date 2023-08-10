import Picture from '../assets/IMG_0574.PNG'
import Footer from './Footer'


const About = () => {
    return (
        <>
        <div className="aboutPage">
            <div className="info">
                <h1>About Me</h1>
                <p>I am a software engineer who employs creative, out-of-the-box thinking that allows me to achieve unique solutions. As a former English teacher. I gained the ability to teach, speak publicly, think on my toes, find solutions, work with others, and lead with confidence. I aim to bring my creative thinking and eye for detail to team-based software building.</p>
                <div className='picture'>
                    <img src={Picture} />
                </div>
                <h2>Languages</h2>
                <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="100" height="100"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="100" height="100"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="100" height="100"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="100" height="100"/> </a></p>
                <h2>Libraries and Frameworks</h2>
                <p><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="100" height="100"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="100" height="100"/> </a> <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="100" height="100"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="100" height="100"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="100" height="100"/> </a></p>
                <h2>Databases</h2>
                <p><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="100" height="100"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="100" height="100"/> </a></p>
            </div>
        </div>
        <div className="aboutFooter">
            <Footer backgroundColor = '#96C3CE'></Footer>
        </div>
        </>
    )
}

export default About