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
    // {name: 'Articles', link: '/articles'},
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
    {name: "Communications Society", link: '/society/comsoc'},
    {name: "Power and Energy Society", link: '/society/pes'},
    {name: "Signal Processing Society", link: '/society/sps'},
    {name: "Antenna Propagation Society", link: '/society/aps'},
    {name: "Robotics and Automation Society", link: '/society/ras'},
]

/**
 * List of affinities and links
 * @type {menuitem[]}
 */
export const affinities = [
    // {name: "Special Interest Group for Humanitarian Technology", link:'/affinity/sight'},
    {name: "Women in Engineering", link:'/affinity/wie'}
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
        step111: imagePath + '/membership/Membership_1.11.png',
        step122: imagePath + '/membership/Membership_1.22.png',
        step511: imagePath + '/membership/Membership_5.11.jpg',
        step522: imagePath + '/membership/Membership_5.22.jpg',
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
        aps: imagePath + '/landing/aps.png',
        compsoc: imagePath + '/landing/compsoc.png',
        comsoc: imagePath + '/landing/comsoc.png',
        pes: imagePath + '/landing/pes.png',
        ras: imagePath + '/landing/ras.png',
        sight: imagePath + '/landing/sight.png',
        sps: imagePath + '/landing/sps.png',
        wie: imagePath + '/landing/wie.png',
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
        {name: 'Risha Dassi', position: 'Chair', image: imagePath + '/execom/main/risha.jpg'},
        {name: 'Kashish Malhotra', position: 'Vice Chair', image: imagePath + '/execom/main/kashish.jpg'},
        {name: 'Deeraj DS', position: 'Secretary', image: imagePath + '/execom/main/deeraj.jpg'},
        {name: 'Chirag Bapat', position: 'Treasurer', image: imagePath + '/execom/main/chirag.jpg'},
        {name: 'Atreya Bain', position: 'Webmaster', image: imagePath + '/execom/main/atreya.png'},
        {name: 'Saraansh Agarwal', position: 'Editor in Chief', image: imagePath + '/execom/main/saraansh.jpg'},
    ],
    aps: [
        {name: 'Dr. Mahesh A', position: 'Faculty Advisor', image: imagePath + '/execom/aps/mahesh_sir.jpg'},
        {name: 'Rahul Chikkodi', position: 'Chair', image: imagePath + '/execom/aps/rahul.jpg'},
        {name: 'Aravind Anant Bhat', position: 'Vice Chair', image: imagePath + '/execom/aps/aravind.jpg'},
        {name: 'Pratap Vangol', position: 'Secretary', image: imagePath + '/execom/aps/pratap.jpg'},
        {name: 'Rohini G Bhatkoorse', position: 'Treasurer', image: imagePath + '/execom/aps/rohini.jpg'},
    ],
    compsoc: [
        {name: 'Dr. Ashok Kumar AR', position: 'Faculty Advisor', image: imagePath + '/execom/compsoc/ashok_sir.jpg'},
        {name: 'Akshara Udupa', position: 'Chair', image: imagePath + '/execom/compsoc/akshara.jpg'},
        {name: 'Vishal M', position: 'Vice Chair', image: imagePath + '/execom/compsoc/vishal.jpg'},
        {name: 'Shashank Dhavalla', position: 'Secretary', image: imagePath + '/execom/compsoc/shashank.jpg'},
        {name: 'Namya LG', position: 'Treasurer', image: imagePath + '/execom/compsoc/namya.jpg'},
    ],
    comsoc: [
        {name: 'Dr. Shushrutha KS', position: 'Faculty Advisor', image: imagePath + '/execom/comsoc/shushrutha_sir.jpg'},
        {name: 'Anushka Subramaniam', position: 'Chair', image: imagePath + '/execom/comsoc/anushka.jpg'},
        {name: 'Saraansh Agarwal', position: 'Secretary', image: imagePath + '/execom/comsoc/saraansh.jpg'},
    ],
    pes: [
        {name: 'Prof. SG Srivani', position: 'Faculty Advisor', image: imagePath + '/execom/pes/srivani_maam.jpg'},
        {name: 'Shreyas Sharma', position: 'Chair', image: imagePath + '/execom/pes/shreyas.jpg'},
        {name: 'Hariharasudhan J', position: 'Secretary', image: imagePath + '/execom/pes/hari.jpg'},
        {name: 'Shirish Kumar', position: 'Treasurer', image: imagePath + '/execom/pes/shirish.jpg'},
    ],
    sps: [
        {name: 'Prof. K Nagamani', position: 'Faculty Advisor', image: imagePath + '/execom/sps/nagamani_maam.jpg'},
        {name: 'Niranjan DR', position: 'Chair', image: imagePath + '/execom/sps/niranjan.jpg'},
        {name: 'R Vibha Narayan', position: 'Vice Chair', image: imagePath + '/execom/sps/vibha.jpg'},
        {name: 'Saksham Sharma', position: 'Treasurer', image: imagePath + '/execom/sps/saksham.jpg'},
    ],
    wie: [
        {name: 'Dr. Usha Rani K R', position: 'Faculty Advisor', image: imagePath + '/execom/wie/usha_maam.jpg'},
        {name: 'Sreelakshmi', position: 'Chair', image: imagePath + '/execom/wie/sreelakshmi.jpg'},
        {name: 'Sunidhi Salwadgi', position: 'Secretary', image: imagePath + '/execom/wie/sunidhi.jpg'},
    ],
    ras: [
        {name: 'Dr. Geetha K S', position: 'Faculty Advisor', image: imagePath + '/execom/ras/geetha_maam.jpg'},
        {name: 'Naman A Menezes', position: 'Chair', image: imagePath + '/execom/ras/naman.jpg'},
        {name: 'Ambu Karthik', position: 'Vice Chair', image: imagePath + '/execom/ras/ambu.jpg'},
        {name: 'Rahul Pinny', position: 'Secretary', image: imagePath + '/execom/ras/pinny.jpg'},
        {name: 'Rithwik Jayanth', position: 'Treasurer', image: imagePath + '/execom/ras/rithwik.jpg'},
    ],
    sight: [

    ],
}


//Alumni execom
export const alumni = {
    main: {
        '2020': [
            {name: 'Dr. M Uttara Kumari', position: 'Branch Counselor', image: imagePath + '/alumni/2020/main/muk_maam.jpg'},
            {name: 'SJ Ruthvik', position: 'Chair', image: imagePath + '/alumni/2020/main/ruthvik.jpg'},
            {name: 'Srinivas Prabhu', position: 'Vice Chair', image: imagePath + '/alumni/2020/main/srini.jpg'},
            {name: 'Deekshith Nayak', position: 'Secretary', image: imagePath + '/alumni/2020/main/deekshith.jpg'},
            {name: 'Prajwal S Telkar', position: 'Treasurer', image: imagePath + '/alumni/2020/main/prajwal.jpg'},
            {name: 'Siddarth Sai Amruth Yetikuri', position: 'Editor in Chief', image: imagePath + '/alumni/2020/main/sidsai.jpg'},
        ],
        '2018': [
            {name: 'Dr. M Uttara Kumari', position: 'Branch Counselor', image: imagePath + '/alumni/2018/main/muk_maam.jpg'},
            {name: 'PVS Rohith', position: 'Chair', image: imagePath + '/alumni/2018/main/rohith.jpg'},
            {name: 'Aditya Madhavan', position: 'Vice Chair', image: imagePath + '/alumni/2018/main/aditya.jpg'},
            {name: 'Adithya Thonse', position: 'Secretary', image: imagePath + '/alumni/2018/main/adithya.jpg'},
            {name: 'Tejasrikumar Kori', position: 'Treasurer', image: imagePath + '/alumni/2018/main/teja.jpg'},
        ]
    },
    aps: {
        '2020': [
            {name: 'Dr. Mahesh A', position: 'Faculty Advisor', image: imagePath + '/alumni/2020/aps/mahesh_sir.jpg'},
            {name: 'Rahul Chikkodi', position: 'Chair', image: imagePath + '/alumni/2020/aps/rahul.jpg'},
            {name: 'Pratap Vangol', position: 'Secretary', image: imagePath + '/alumni/2020/aps/pratap.jpg'},
        ],
    },
    compsoc: {
        '2020': [
            {name: 'Risha Dassi', position: 'Chair', image: imagePath + '/alumni/2020/compsoc/risha.jpg'},
            {name: 'Nischal J', position: 'Vice Chair', image: imagePath + '/alumni/2020/compsoc/nischal.jpg'},
            {name: 'Nikitha Srikanth', position: 'Secretary', image: imagePath + '/alumni/2020/compsoc/niks.jpg'},
            {name: 'Chirag Bapat', position: 'Treasurer', image: imagePath + '/alumni/2020/compsoc/chirag.jpg'},
        ],
    },
    comsoc: {
        '2020': [
            {name: 'Kashish Malhotra', position: 'Chair', image: imagePath + '/alumni/2020/comsoc/kashish.jpg'},
            {name: 'Nandesh Goudar', position: 'Vice Chair', image: imagePath + '/alumni/2020/comsoc/nandesh.jpg'},
            {name: 'Saraansh Agarwal', position: 'Secretary', image: imagePath + '/alumni/2020/comsoc/saraansh.jpg'},
        ],
    },
    pes: {
        '2020': [
            {name: 'Amith S Kumar', position: 'Chair', image: imagePath + '/alumni/2020/pes/amith.jpg'},
            {name: 'Deeraj DS', position: 'Vice Chair', image: imagePath + '/alumni/2020/pes/deeraj.jpg'},
            {name: 'Hariharasudhan J', position: 'Secretary', image: imagePath + '/alumni/2020/pes/hari.jpg'},
            {name: 'Shirish Kumar', position: 'Treasurer', image: imagePath + '/alumni/2020/pes/shirish.jpg'},
        ],
    },
    sps: {
        '2020': [
            {name: 'Prof. K Nagamani', position: 'Faculty Advisor', image: imagePath + '/alumni/2020/sps/nagamani_maam.jpg'},
            {name: 'Niranjan DR', position: 'Chair', image: imagePath + '/alumni/2020/sps/niranjan.jpg'},
            {name: 'R Vibha Narayan', position: 'Vice Chair', image: imagePath + '/alumni/2020/sps/vibha.jpg'},
            // {name: 'Rahul Ratnu Chavan', position: 'Secretary', image: imagePath + '/alumni/2020/sps/rahulrc.jpg'},
            // {name: 'Dhanush U', position: 'Treasurer', image: imagePath + '/alumni/2020/sps/dhanush.jpg'},
        ],
    },
    wie: {
        '2020': [
            {name: 'Dr. Usha Rani K R', position: 'Faculty Advisor', image: imagePath + '/alumni/2020/wie/usha_maam.jpg'},
            {name: 'Aisiri HR', position: 'Chair', image: imagePath + '/alumni/2020/wie/aisiri.jpg'},
            {name: 'Raghavi R', position: 'Vice Chair', image: imagePath + '/alumni/2020/wie/raghavi.jpg'},
            {name: 'Sreelakshmi', position: 'Secretary', image: imagePath + '/alumni/2020/wie/sreelakshmi.jpg'},
            {name: 'Sunidhi Salwadgi', position: 'Treasurer', image: imagePath + '/alumni/2020/wie/sunidhi.jpg'},
        ],
    },
    ras: {

    },
    sight: {

    },
}


export const about ={
    img1: imagePath + '/history/1.png',
    img2: imagePath + '/history/2.png'
}
export {achievements as FPAchievementImages, whatWeDo as FPWhatWeDoImages} from './data/FrontPage/Carousels'
export {whatWeDoText,achievementsText } from './data/FrontPage/Text';
export {imagePath,hostname};
