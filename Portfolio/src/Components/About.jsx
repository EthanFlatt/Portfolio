import Picture from '../assets/IMG_0574.PNG'
console.log(Picture)

const About = () => {
    return (
        <>
        <h1>About me</h1>
        <div className="aboutPage">
            <div className="info">
                <p>I am a software engineer who employs creative, out-of-the-box thinking that allows me to see solutions others might not think of. As an English teacher in Taiwan. I gained the ability to teach, speak publicly, think on my toes, find solutions, work with others, and lead with confidence. I want to bring my creative thinking and eye for detail back-end development and making APIs.</p>
                <p>Languages</p>
                <p>JavaScript ES6, HTML5, CSS3, Python</p>
                <p>Libraries and Frameworks</p>
                <p>NOde..js, Express.js, Django, React</p>
                <p>Databases</p>
                <p>MongoDB, Mongoose</p>
            </div>
            <div>
                <img className="picture" src={Picture}/>
            </div>
        </div>
        </>
    )
}

export default About