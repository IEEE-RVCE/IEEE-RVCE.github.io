//@ts-check
import {imagePath,hostname} from './data/misc'
// Edit this list and the navs shall change accordingly


/**
 * @typedef {{name:string,link:string}} menuitem
 * @typedef {{name:string,isMenu:true}} isMenuItem
 */
/**
 * Main navifation link
 * @type {(menuitem|isMenuItem)[]}
 */
export const navs = [
    {name: "Home", link: '/'},
    {name: "About Us", link: '/about'},
    {name: 'Events', link: '/events'},
    {name: "Societies", isMenu: true},
    {name: "Affinities", isMenu:true},
    {name: "Membership", link: '/membership'},
    {name: 'Articles', link: '/articles'},
    {name: "Login", link: '/login'},
]

/**
 * Buttons for Society Page
 * @type {menuitem[]}
 */
export const societyNav = [
    {name: "Home", link: '/'},
    {name: "About Us", link: '/about'},
    {name: "Events", link: '/event'},
    {name: "Exec Com", link: '/society'},
    {name: "Login", link: '/login'},
]

/**
 * List of societies and links
 * @type {menuitem[]}
 */
export const societies = [
    {name: "Computer Society", link: '/society/cs'},
    {name: "Com Soc", link: '/society/comsoc'},
    {name: "PES", link: '/society/pes'},
    {name: "SPS", link: '/society/sps'},
    {name: "APS", link: '/society/aps'},
    {name: "RAS", link: '/society/ras'},
]

/**
 * List of affinities and links
 * @type {menuitem[]}
 */
export const affinities = [
    {name: "SIGHT", link:'/affinity/sight'},
    {name: "WIE", link:'/affinity/wie'}
]



export const images= {
    membership: {
        benefits: imagePath + '/membership/Benefits.jpeg',
        whyjoin: imagePath + '/membership/whyjoin.jpeg',
        step11: imagePath + '/membership/Membership_1.1.png',
        step12: imagePath + '/membership/Membership_1.2.png',
        step21: imagePath + '/membership/Membership_2.1.png',
        step31: imagePath + '/membership/Membership_3.1.png',
        step32: imagePath + '/membership/Membership_3.2.png',
        step33: imagePath + '/membership/Membership_3.3.png',
        step34: imagePath + '/membership/Membership_3.4.png',
        step35: imagePath + '/membership/Membership_3.5.png',
        step36: imagePath + '/membership/Membership_3.6.png',
        step37: imagePath + '/membership/Membership_3.7.png',
        step41: imagePath + '/membership/Membership_4.1.png',
        step42: imagePath + '/membership/Membership_4.2.png',
        step43: imagePath + '/membership/Membership_4.3.png',
        step51: imagePath + '/membership/Membership_5.1.jpeg',
        step52: imagePath + '/membership/Membership_5.2.jpeg',
        step61: imagePath + '/membership/Membership_6.1.png',
        benefit1: imagePath + '/membership/Benefit1.png',
        benefit2: imagePath + '/membership/Benefit2.png',
        benefit3: imagePath + '/membership/Benefit3.png',
        benefit4: imagePath + '/membership/Benefit4.png',
        benefit5: imagePath + '/membership/Benefit5.png',
        benefit6: imagePath + '/membership/Benefit6.png',
        whatSBOffers: imagePath + '/membership/WhatSBOffers.png',
    },
    devs: {
        ambu: imagePath + '/devs/Ambu_Karthik.jpg',
        bain: imagePath + '/devs/Atreya_Bain.png',
        chirag: imagePath + '/devs/Chirag_Bapat.jpg',
        risha: imagePath + '/devs/Risha_Dassi.jpg',
        vishal: imagePath + '/devs/Vishal_M.jpeg',
        akshara: imagePath + '/devs/Akshara_Udupa.jpg',
    },
    logos: {
        ieee_aps: imagePath + '/logos/ieee_APS.png',
        ieee_black: imagePath + '/logos/ieee_black.png',
        ieee_blue_jpg: imagePath + '/logos/ieee_blue.jpg',
        ieee_bng: imagePath + '/logos/ieee_bng.png',
        ieee_blue_png: imagePath + '/logos/ieee_blue.png',
        ieee_compsoc_black: imagePath + '/logos/ieee_computer_black.png',
        ieee_compsoc_color: imagePath + '/logos/ieee_computer_color.png',
        ieee_compsoc_white: imagePath + '/logos/ieee_computer_white.png',
        ieee_pes: imagePath + '/logos/ieee_pes.jpg',
        ieee_rvce_new_black: imagePath + '/logos/ieee_rvce_new_black.png',
        ieee_rvce_new_black_big: imagePath + '/logos/ieee_rvce_new_black_big.png',
        ieee_rvce_new_blue: imagePath + '/logos/ieee_rvce_new_blue.png',
        ieee_rvce_new_blue_big: imagePath + '/logos/ieee_rvce_new_blue_big.png',
        ieee_rvce_new_white: imagePath + '/logos/ieee_rvce_new_white.png',
        ieee_rvce_new_white_big: imagePath + '/logos/ieee_rvce_new_white_big.png',
        ieee_rvce_black: imagePath + '/logos/ieee_rvce_black.png',
        ieee_rvce_white: imagePath + '/logos/ieee_rvce_white.png',
        ieee_rvce_jpg: imagePath + '/logos/ieee_rvce.jpg',
        ieee_sight: imagePath + '/logos/ieee_sight.png',
        ieee_sps: imagePath + '/logos/ieee_sps.jpg',
        ieee_tag_black: imagePath + '/logos/ieee_tag_black.png',
        ieee_tag_blue: imagePath + '/logos/ieee_tag_blue.png',
        ieee_tag_white: imagePath + '/logos/ieee_tag_white.png',
        ieee_white: imagePath + '/logos/ieee_white.png',
        ieee_wie: imagePath + '/logos/ieee_wie.png',
        rv_caption: imagePath + '/logos/rv_caption.png',
        rv_letter_footer: imagePath + '/logos/rv_letter_footer.png',
        rvce: imagePath + '/logos/rvce_logo.png',
    },
    landing: {
        aps: imagePath + '/landing/AntennaPropagation.png',
        compsoc: imagePath + '/landing/ComputerSociety.png',
        comsoc: imagePath + '/landing/comsoc.png',
        pes: imagePath + '/landing/pes.png',
        ras: imagePath + '/landing/RoboticsAndAutomation.png',
        sight: imagePath + '/landing/Sight.png',
        sps: imagePath + '/landing/SignalProcessing.png',
        wie: imagePath + '/landing/WIE.png',
        mainBlack: imagePath + '/landing/MainBlack.png',
        mainWhite: imagePath + '/landing/MainWhite.png',
    }
}

/** Map of socs and affs with ecat */
export const ecats = {
    compsoc: 1,
    comsoc: 2,
    pes: 3,
    aps: 4,
    sps: 5,
    ras: 6,
    wie: 7,
    sight: 8
}

//Execom details
export const execom = {
    main: [
        {name: 'Dr. M Uttara Kumari', position: 'Branch Counselor', image: imagePath + '/execom/main/muk_maam.jpg'},
        {name: 'SJ Ruthvik', position: 'Chair', image: imagePath + '/execom/main/ruthvik.jpg'},
        {name: 'Srinivas Prabhu', position: 'Vice Chair', image: imagePath + '/execom/main/srini.jpg'},
        {name: 'Deekshith Nayak', position: 'Secretary', image: imagePath + '/execom/main/deekshith.jpg'},
        {name: 'Prajwal S Telkar', position: 'Treasurer', image: imagePath + '/execom/main/prajwal.jpg'},
        {name: 'Siddarth Sai Amruth Yetikuri', position: 'Editor in Chief', image: imagePath + '/execom/main/sidsai.jpg'},
    ],
    aps: [
        {name: 'Dr. Mahesh A', position: 'Faculty Advisor', image: imagePath + '/execom/aps/mahesh_sir.jpg'},
        {name: 'Rahul Chikkodi', position: 'Chair', image: imagePath + '/execom/aps/rahul.jpg'},
        {name: 'Pratap Vangol', position: 'Secretary', image: imagePath + '/execom/aps/pratap.jpg'},
    ],
    compsoc: [
        {name: 'Risha Dassi', position: 'Chair', image: imagePath + '/execom/compsoc/risha.jpg'},
        {name: 'Nischal J', position: 'Vice Chair', image: imagePath + '/execom/compsoc/nischal.jpg'},
        {name: 'Nikitha Srikanth', position: 'Secretary', image: imagePath + '/execom/compsoc/niks.jpg'},
        {name: 'Chirag Bapat', position: 'Treasurer', image: imagePath + '/execom/compsoc/chirag.jpg'},
    ],
    comsoc: [
        {name: 'Kashish Malhotra', position: 'Chair', image: imagePath + '/execom/comsoc/kashish.jpg'},
        {name: 'Nandesh Goudar', position: 'Vice Chair', image: imagePath + '/execom/comsoc/nandesh.jpg'},
        {name: 'Saraansh Agarwal', position: 'Secretary', image: imagePath + '/execom/comsoc/saraansh.jpg'},
    ],
    pes: [
        {name: 'Amith S Kumar', position: 'Chair', image: imagePath + '/execom/pes/amith.jpg'},
        {name: 'Deeraj DS', position: 'Vice Chair', image: imagePath + '/execom/pes/deeraj.jpg'},
        {name: 'Hariharasudhan J', position: 'Secretary', image: imagePath + '/execom/pes/hari.jpg'},
        {name: 'Shirish Kumar', position: 'Treasurer', image: imagePath + '/execom/pes/shirish.jpg'},
    ],
    sps: [
        {name: 'Prof. K Nagamani', position: 'Faculty Advisor', image: imagePath + '/execom/sps/nagamani_maam.jpg'},
        {name: 'Niranjan DR', position: 'Chair', image: imagePath + '/execom/sps/niranjan.jpg'},
        {name: 'R Vibha Narayan', position: 'Vice Chair', image: imagePath + '/execom/sps/vibha.jpg'},
    ],
    wie: [
        {name: 'Dr. Usha Rani K R', position: 'Faculty Advisor', image: imagePath + '/execom/wie/usha_maam.jpg'},
        {name: 'Aisiri HR', position: 'Chair', image: imagePath + '/execom/wie/aisiri.png'},
        {name: 'Raghavi R', position: 'Vice Chair', image: imagePath + '/execom/wie/raghavi.jpg'},
        {name: 'Sreelakshmi', position: 'Secretary', image: imagePath + '/execom/wie/sreelakshmi.png'},
        {name: 'Sunidhi Salwadgi', position: 'Treasurer', image: imagePath + '/execom/wie/sunidhi.jpg'},
    ],
    ras: [

    ],
    sight: [

    ],
}

export {achievements as FPAchievementImages, whatWeDo as FPWhatWeDoImages} from './data/FrontPage/Carousels'
export {whatWeDoText,achievementsText } from './data/FrontPage/Text';
export {imagePath,hostname};