import Footer from './Footer'
import Hangman from '../assets/hangman.png'
import CalSki from '../assets/calski.png'
import FeedMe from '../assets/feedme.png'

const Projects = () => {
    return (
        <>
        <div className="projectPage">
            <h1>Projects (Work in progress)</h1>
            <h2>CalSki <a href="https://github.com/chrischen96/CalSki" target='blank'>GitHub</a> <a href="http://calski.s3-website-us-west-1.amazonaws.com" target='blank'>App</a></h2>
            <img src={CalSki} alt="" />
                <ul>
                    <li>Worked in team of three of to make full-stack MERN application with full CRUD on the front and back-end where users can plan ski trip to any one of the twenty-six ski resorts in California</li>
                    <li>Used Bootstrap and React to build front-end</li>
                    <li>Made working Oauth for users to register a secure account, log in, and log out</li>
                </ul>
            <h2>FeedMe</h2>
            <img src={FeedMe} alt="" />
                <ul>
                    <li>Created a full-stack MERN application with full CRUD on the front and back-end that lets users enter ingredients and search for dishes in a database based on ingredients entered</li>
                    <li>Made search bar that allows users to search by any of the three models (i.e., continent, country, or dish)</li>
                </ul>
            <h2>Hangman <a href="https://github.com/EthanFlatt/Hangman" target='blank'>GitHub</a> <a href="https://hangman-game0.surge.sh/" target='blank'>App</a></h2>
            <img src={Hangman} alt="" />
                <ul>
                    <li>Crafted a responsive Hangman game application by using HTML, CSS, and JavaScript</li>
                    <li>The game makes an API call using axios to select a random word for the game</li>
                </ul>
        </div>
        <div className="aboutFooter">
            <Footer backgroundColor = '#EAF8BF'></Footer>
        </div>
        </>
        
    )
}

export default Projects