
import chatkrow from '../../../public/assets/chatkrow.png'
// import chatkrow from '../../../public/assets/luckycemet.png'
import chatkrowpdlogo from '../../../public/assets/projectDetailImages/chatkrowpdlogo.png'
import latitude from '../../../public/assets/projectDetailImages/Latitude.png'
import { FaPython, FaAws, FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGodaddy, SiGoogleanalytics, SiLaravel, SiPhp, SiReact } from "react-icons/si";

export const projectData = [
   
    {
        id:1,
        name:"Chat Krow",
        heading:"Streamlining Organizational Communication.",
        heroP:"An AI-powered chat assistant for WhatsApp, simplifies corporate communication, enhancing engagement and efficiency. It streamlines messaging, optimizes interaction, and fosters collaboration within organizations.",
        sec2img:'/assets/projectDetailImages/luckycementd.png',
        sec3p1:"Corporate clients often face hurdles in accessing essential corporate data. Maneuvering through intricate conversations efficiently remains a significant challenge. Simplifying access and streamlining communication processes are paramount for improved client engagement and operational efficiency.",
        sec3p2:"ChatKrow, an AI-powered chat assistant for WhatsApp, streamlines communication and management within organizations. It simplifies messaging complexity, enhancing interaction dynamics for seamless collaboration. Experience the transformative solution designed to optimize organizational communication.",
        sec4img:"/assets/luckycemet.png",
        sec4headingB:"AI Based Chatbot",
        sec4headingM:" for Whatsapp and your",
        sec4headingM1:"mobile",
        logo:"/assets/projectDetailImages/LuckySementLogoWhite.png",
        theR:false,
        useLogos:[{id:0,logo:<FaPython />},{id:1,logo:<FaAws />},{id:2,logo:<BiLogoPostgresql />},{id:3,logo:<SiGoogleanalytics />},{id:0,logo:<SiReact />}],
        npid:2,
        bglg:"redlg"
    },
    {
        id:2,
        name:"Lucky Cement",
        heading:"Sales, Distribution and Field Force Digitization End to End.",
        heroP:"A one-window solution with real time manage sales distribution and field force operations.",
        sec2img1:'/assets/projectDetailImages/luckycementd.png',
        sec2img2:'/assets/projectDetailImages/LuckyCement2.png',
        sec3p1:"Lucky Cement partnered with us to automate and streamline its sales processes. Facing challenges in manual processes, the company aims to boost revenue by freeing up sales bandwidth through digitization. The current processes hinder real-time performance evaluation and data-led decision-making.",
        sec3p2:"Our digital transformation employs mobile and web apps. Tailored for key users and stakeholders, these apps ensure real-time visibility at all levels, empowering efficient commercial sales. Institutional Sales benefits from a CRM, covering prospects, leads, and projects. Our solution is user-driven, operating independently without third-party integrations at this stage, but with integration capabilities.",
        sec3p3:"The system is now in field testing phase.",
        sec4img:chatkrow,
        sec4headingB:"AI Based Chatbot",
        sec4headingM:" for Whatsapp and your",
        sec4headingM1:"mobile",
        logo:chatkrowpdlogo,
        theR:true,
        useLogos:[{id:0,logo:<FaPython />},{id:1,logo:<FaAws />},{id:2,logo:<BiLogoPostgresql />},{id:3,logo:<SiGoogleanalytics />},{id:0,logo:<SiReact />}],
        npid:1,
        bglg:"bluelg"
    },
    {
        id:3,
        name:"Latitude",
        heading:"Resource management system.",
        heroP:"A one-window solution with real time synchronization, to manage sales, distribution and field force operations.",
        sec2img1:'/assets/projectDetailImages/latitudeslide1.png',
        sec2img2:'/assets/projectDetailImages/latitudeslide2.png',
        sec3p1:"Effective project monitoring and stakeholder visibility are crucial during implementation. Asset deployment lacks transparency, while manual customer complaints handling adds complexity. Conventional software fails to accurately map audited infrastructure, complicating snags tracking. On-field auditor performance lacks real-time oversight. Spot audit location maintenance is challenging, and separate test result storage hampers analysis.",
        sec3p2:"J-Survey facilitates mobile mapping, real-time uploads, and task management with geo-tagged checklists for accuracy. Dashboards offer insights into project progress, risks, and performance. Latitude drives digital transformation, deploying real-time data solutions and efficient complaint management. Modules include project tracking, remote monitoring, GIS surveys, and complaints handling, optimizing operations effortlessly.",
        sec3p3:"",
        sec4img:"/assets/luckycemet.png",
        sec4headingB:"Sales & Distribution ",
        sec4headingM:" network management  ", 
        sec4headingM1:"digitisation end to end", 
        theR:false,
        logo:"/assets/projectDetailImages/LuckySementLogoWhite.png",
        useLogos:[{id:0,logo:<SiGodaddy />},{id:1,logo:<SiLaravel />},{id:2,logo:<SiPhp />}],
        npid:2,
        bglg:"redlg"
    },
]