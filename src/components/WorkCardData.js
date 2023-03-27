//create data to pass through portfolio

import pro1 from "../assets/social_media_api.png"
import pro2 from "../assets/Tech_Blog.png"
import pro3 from "../assets/text_editor.png"
import pro4 from "../assets/progrest.png"
import pro5 from "../assets/Note_Taker.png"
import pro6 from "../assets/weatherdashboard.png"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Social Network API",
        text: "Social network api is a backend networking database using MongoDB and Mongoose. I is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
        view: "https://github.com/rypab4/social-network-api",
        url: "https://drive.google.com/file/d/1Psmw3d4KTwKea-ypFa2TAisOulF96qsR/view"
    },
    {
        imgsrc: pro2,
        title: "Tech Blog",
        text: "Tech blog site that allows users to publish articles, blog posts, and edit them and make comments on the posts. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
        view: "https://github.com/rypab4/tech-blog",
        url: "https://thetechnologyblog031023.herokuapp.com/"
    },
    {
        imgsrc: pro3,
        title: "text editor",
        text: "The application is a web text editor where you can write notes or code with or without internet connection. The integrated sevice worker and Cache ensure that the application will remain functional even without internet. You can also download/ install the application for use.",
        view:  "https://github.com/rypab4/Text-Editor",
        url: "https://text-editor-2023-again.herokuapp.com/"
    },
    {
        imgsrc: pro4,
        title: "Progrest",
        text: "Progrest a comprehensive project management tool for non-profit organizations. ",
        view: "https://github.com/rypab4/progrest",
        url: "https://progrest.herokuapp.com/landing"
    },
    {
        imgsrc: pro5,
        title: "Note Taker",
        text: "User can write notes save and delete them. Enter a note title and note body is required for it to be saved. The list of notes will be shown below on the left side. When delete button is clicked the page is refreshed and the delete note will be removed.",
        view: "git@github.com:rypab4/Note-Taker.git",
        url: "https://lit-lake-70648.herokuapp.com/ "
    },
    {
        imgsrc: pro6,
        title: "Weather Dashboard",
        text: "Weather dashboard uses the openweathermap api to get weather data.",
        view: "https://github.com/rypab4/Weather-Dashboard",
        url: "https://lit-lake-70648.herokuapp.com/ "
    },
]

export default ProjectCardData