const Projects = () => {
    return (
        
        <div className="projectPage">
            <h1>Projects (Work in progress)</h1>
            <h2>Hangman <a href="https://github.com/EthanFlatt/Hangman">GitHub</a> <a href="https://hangman-game0.surge.sh/">App</a></h2>
                <ul>
                    <li>Crafted a responsive Hangman game application by using HTML, CSS, and JavaScript</li>
                    <li>The game makes an API call using axios to select a random word for the game</li>
                </ul>
            <h2>ForTheRecord <a href="https://github.com/EthanFlatt/FORTHERECORD/tree/main">GitHub</a></h2>
                <ul>
                    <li>Created an ecommerce vinyl record website using an api designed in MongoDB with Mongoose, Express, and node.js</li>
                    <li>Designed Full CRUD on the backend along with routes, models, models, seeded data, etc.</li>
                    <li>Additional CRUD to add records to cart and remove them on the frontend along with search bar to find record by any schema (i.e., band, album, or genre)</li>
                </ul>
            <h2>CalSki <a href="https://github.com/chrischen96/CalSki">GitHub</a> <a href="http://calski.s3-website-us-west-1.amazonaws.com ">App</a></h2>
                <ul>
                    <li>Worked in team of three of to make full-stack MERN application with full CRUD on the front and back-end where users can plan ski trip to any one of the twenty-six ski resorts in California</li>
                    <li>Used Bootstrap and React to build front-end</li>
                    <li>Made working Oauth for users to register a secure account, log in, and log out</li>
                </ul>
            <h2>FeedMe</h2>
        </div>
        
    )
}

export default Projects