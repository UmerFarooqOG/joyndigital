import proj1 from '../../../public/assets/chatkrow.png'
import chatkrowlogo from '../../../public/assets/chatkrowlogo.svg'
import proj2 from '../../../public/assets/luckycemet.png'
import luckycementlogo from '../../../public/assets/luckycementlogo.svg'
import latitudelogo from '../../../public/assets/projectDetailImages/LatitudeLogo.svg'
import proj3 from '../../../public/assets/projectDetailImages/Latitude.png'

export const navLinks = [
    {
        id:"/",
        title:"Home"
    },
    {
        id:"/services",
        title:"Services"
    },
    {
        id:"/about",
        title:"About"
    },
    {
        id:"/contact",
        title:"Contact"
    },
]


export const protData = [
    {
        logo:chatkrowlogo,
        spanTitle:"AI Based Chatbot",
        title:"for Whatsapp and your",
        desc:"ChatKrow is an AI companion designed to provide friendship, conversation, and entertainment to anyone who needs it. With Friday, you'll have a new virtual friend to chat with, learn from, and explore new ideas with.",
        image:proj1,
    },
    {
        logo:luckycementlogo,
        spanTitle:"Sales & Distribution",
        title:" network management end to end",
        desc:"End-to-End solution design and implementation to digitize Lucky Cements' Secondary Sales processes, Field Force Management, Sales Universe Management, CRM, AI Based Market Intelligence, Field Force Management, and finally AI / ML Based analytics.",
        image:proj2,
    },
    {
        logo:latitudelogo,
        spanTitle:"Remote monitoring system",
        title:"for efficient operations and visibility",
        desc:"Latitude drives digital transformation, deploying real-time data solutions and efficient complaint management. Project tracking, remote monitoring, GIS surveys, and complaints handling, optimizing operations effortlessly.",
        image:proj3,
    },
]