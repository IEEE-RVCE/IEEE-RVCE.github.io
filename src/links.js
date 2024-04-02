//@ts-check
import { imagePath, hostname, imgify } from './data/misc';
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
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Events', link: '/events' },
  { name: 'Societies', isMenu: true },
  { name: 'Affinities', isMenu: true },
  { name: 'Membership', link: '/membership' },
  { name: 'Articles', link: '/articles' },
  { name: 'Login', link: '/login' },
];

/**
 * Buttons for Society Page
 * @type {menuitem[]}
 */
export const societyNav = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Events', link: '/event' },
  { name: 'Exec Com', link: '/society' },
  { name: 'Login', link: '/login' },
];

/**
 * List of societies and links
 * @type {menuitem[]}
 */
export const societies = [
  { name: 'Computer Society', link: '/society/cs' },
  { name: 'Communications Society', link: '/society/comsoc' },
  { name: 'Power and Energy Society', link: '/society/pes' },
  { name: 'Signal Processing Society', link: '/society/sps' },
  { name: 'Antennas and Propagation Society', link: '/society/aps' },
  { name: 'Robotics and Automation Society', link: '/society/ras' },
  { name: 'Circuits and Systems Society', link: '/society/cas' },
  { name: 'Sensor Council', link: '/society/sc' },
  { name: 'Microwave Theory and Technology Society(MTTS)', link: '/' },
  { name: 'Antennas and Propagation Society', link: '/' },
];

/**
 * List of affinities and links
 * @type {menuitem[]}
 */
export const affinities = [
  {
    name: 'Special Interest Group on Humanitarian Technology',
    link: '/affinity/sight',
  },
  { name: 'Women in Engineering', link: '/affinity/wie' },
];

/**
 * Miscellaneous images
 */
export const images = {
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
    sannidhi: imagePath + '/devs/sannidhi.jpg',
    mayur: imagePath + '/devs/mayur_s_chittaragi.jpg',
    naveen: imagePath + '/devs/naveen.jpeg',
    prajwal: imagePath + '/devs/pp.jpg',
    jahnavi: imagePath + '/devs/jahnavi.jpg',
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
    cas: imagePath + '/landing/cas.png',
    sc: imagePath + '/landing/sc.png',
  },
};

/** Map of socs and affs with ecat */
export const ecats = {
  main: 0,
  compsoc: 1,
  comsoc: 2,
  pes: 3,
  aps: 4,
  sps: 5,
  ras: 6,
  wie: 7,
  sight: 8,
  cas: 9,
  sc: 10,
};

/** Execom details */
export const execom = {
  main: [
    {
      name: 'Dr. Shylashree N',
      position: 'Branch Counselor',
      image: 'http://www.rvce.edu.in/sites/default/files/ec-ssn.png',
    },
    {
      name: 'Sreekar Mulukutla',
      position: 'Chair',
      image: imagePath + '/execom/main/Chair.jpeg',
    },
    {
      name: 'Vedram S',
      position: 'Vice Chair',
      image: imagePath + '/execom/main/vedram.jpg',
    },
    {
      name: 'Mayur G Parvatikar',
      position: 'Secretary',
      image: imagePath + '/execom/main/Mayur G Parvatikar-Secretary.jpg',
    },
    {
      name: 'Jahnavi M Math',
      position: 'Treasurer',
      image: imagePath + '/execom/main/Jahnavi M Math_Treasurer .JPG',
    },
    {
      name: 'Harini G Iyar',
      position: 'Joint Treasurer',
      image: imagePath + '/execom/main/Harini G Iyar- Joint Treasurer.jpeg',
    },

    {
      name: 'Sundarakrishnan N',
      position: 'Webmaster',
      image: imagePath + '/execom/main/sundarakrishnan.jpeg',
    },
    {
      name: 'Amrit Raj',
      position: 'Design Lead',
      image: imagePath + '/execom/main/AmritRaj.jpg', //to be changed
    },
  ],
  aps: [
    {
      name: 'Dr. Shanthi',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/aps/shanthi_maam.jpg',
    },
    {
      name: 'Amogh G',
      position: 'Chair',
      image: imagePath + '/execom/aps/amogh_g.jpg',
    },
    {
      name: 'Anusha Khot',
      position: 'Secretary',
      image: imagePath + '/execom/aps/anusha_k.jpeg',
    },
    {
      name: 'Dheeraj G',
      position: 'Treasurer',
      image: imagePath + '/execom/aps/dheeraj.jpg',
    },
  ],
  compsoc: [
    {
      name: 'Dr. Ashok Kumar AR',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/compsoc/ashok_sir.jpg',
    },
    {
      name: 'Likhith',
      position: 'Chair',
      image: imagePath + '/execom/compsoc/Likhith- Chair.jpg',
    },
    {
      name: 'Sravya D',
      position: 'Vice Chair',
      image: imagePath + '/execom/compsoc/Sravya D-Vice Chair.jpg',
    },
    {
      name: 'Vibhav Simha',
      position: 'Secretary',
      image: imagePath + '/execom/compsoc/Vibhav Simha - Secretary .jpg',
    },
    {
      name: 'Ganesh Naik',
      position: 'Treasurer',
      image: imagePath + '/execom/compsoc/Ganesh Naik - Treasurer.jpg',
    },
  ],
  comsoc: [
    {
      name: 'Dr. Jayanthi',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/comsoc/p_n_jayanti.jpg',
    },
    {
      name: 'Pavan Kumar C Banasode',
      position: 'Vice Chair',
      image: imagePath + '/execom/comsoc/Pavan Kumar C Banasode - Vice Chair.jpg',
    },
    //{
    //name: 'Pradyumna S Athreya ',
    //position: 'Secretary',
    //image: imagePath + '/execom/comsoc/pradyumna_s_athreya.jpg',
    //},
    {
      name: 'Preeti',
      position: 'Treasurer',
      image: imagePath + '/execom/comsoc/Preeti-Treasurer.jpg',
    },
  ],
  pes: [
    {
      name: 'Prof. SG Srivani',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/pes/srivani_maam.jpg',
    },
    {
      name: 'Vijay Kiran U R',
      position: 'Chair',
      image: imagePath + '/execom/pes/VIJAY KIRAN U R _chair.jpg',
    },
    {
      name: 'Ishan Varun',
      position: 'Secretary',
      image: imagePath + '/execom/pes/ishan varun(Secretary).jpg',
    },
    {
      name: 'Laxmi',
      position: 'Treasurer',
      image: imagePath + '/execom/pes/Laxmi_Treasurer.jpg',
    },
  ],
  sps: [
    {
      name: 'Prof. K Nagamani',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/sps/nagamani_maam.jpg',
    },
    {
      name: 'Yuvraj Singh',
      position: 'Chair',
      image: imagePath + '/execom/sps/Yuvraj Singh - SPS CHAIR.JPG',
    },
    {
      name: 'Atharva',
      position: 'Secretary',
      image: imagePath + '/execom/sps/Atharva _SPS_Sec.jpg',
    },
    {
      name: 'Ayush Raj',
      position: 'Treasurer',
      image: imagePath + '/execom/sps/Ayush_Raj_SPS_Treasurer.jpg',
    },
  ],
  wie: [
    {
      name: 'Prof Deepika',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/wie/deepika_maam.jpg',
    },
    {
      name: 'Anisha Bhattacharya',
      position: 'Chair',
      image: imagePath + '/execom/wie/Anisha Bhattacharya -  Chair.JPG',
    },
    {
      name: 'Swara Gingade',
      position: 'Secretary',
      image: imagePath + '/execom/wie/Swara Gingade- Secretary .HEIC',
    },
    {
      name: 'Tanmaya WM',
      position: 'Treasurer',
      image: imagePath + '/execom/wie/Tanmaya WM - Treasurer .jpeg',
    },
  ],
  ras: [
    {
      name: 'Dr. Abhay Deshpande',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/ras/abhay_a_deshpande.jpg',
    },
    {
      name: 'Sanjay S',
      position: 'Chair',
      image: imagePath + '/execom/ras/Sanjay S Chair.jpg',
    },
    {
      name: 'Bhaskar Jha',
      position: 'Secretary',
      image: imagePath + '/execom/ras/Bhaskar Jha Secretary .jpg',
    },
    {
      name: 'Balasai Anish Ponnaluri',
      position: 'Treasurer',
      image: imagePath + '/execom/ras/Balasai Anish Ponnaluri-Treasurer .jpg',
    },
  ],
  sight: [
    {
      name: 'Dr Usha J',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/sight/usha_maam.jpg',
    },
    {
      name: 'Lalith K',
      position: 'Chair',
      image: imagePath + '/execom/sight/lalith_kishore.jpg',
    },
    {
      name: 'Nandan Chebbi',
      position: 'Secretary',
      image: imagePath + '/execom/sight/nandan_chebbi.jpg',
    },
    {
      name: 'Neha P',
      position: 'Treasurer',
      image: imagePath + '/execom/sight/neha_p.jpg',
    },
  ],
  cas: [
    {
      name: 'Dr. Shylashree.N ', //needs to be updated
      position: 'Faculty Advisor',
      image: imagePath + '/execom/cas/dr_shylashree.jpeg',
    },
    {
      name: 'Pratham G',
      position: 'Chair',
      image: imagePath + '/execom/cas/PrathamG-Chair.jpg',
    },
    {
      name: 'Kamath Abhay Sunil',
      position: 'Vice Chair',
      image: imagePath + '/execom/cas/Kamath Abhay Sunil Vice Chair.jpg',
    },
    {
      name: 'Dhtuthi MD',
      position: 'Secretary',
      image: imagePath + '/execom/cas/Dhtuthi_MD-secretary_CAS.jpg',
    },
    {
      name: 'Paridhi Sudarshan',
      position: 'Treasurer',
      image: imagePath + '/execom/cas/Paridhi Sudarshan-Treasurer.jpg',
    },
  ],
  sc: [
    {
      name: 'Dr. Veena Divya K',
      position: 'Faculty Advisor',
      image: imagePath + '/execom/sensorscouncil/veena_maam.jpg',
    },
    {
      name: 'Rakshan R Kulkarni ',
      position: 'Chair',
      image: imagePath + '/execom/sensorscouncil/rakshan_kulkarni.jpg',
    },
    {
      name: 'Soundarya Desai',
      position: 'Secretary',
      image: imagePath + '/execom/sensorscouncil/soundarya_desai.jpg',
    },
    {
      name: 'Akansha Singh',
      position: 'Treasurer',
      image: imagePath + '/execom/sensorscouncil/akansha_singh.jpg',
    },
  ],
};

/** Alumni execom.
 * _image_ is optional, placeholder will be added in automatically
 */
export const alumni = {
  main: {
    2023: [
      {
        name: 'Dr. Mahesh A',
        position: 'Branch Counselor',
        image: imagePath + '/execom/main/mahesh_sir.jpg',
      },
      {
        name: 'Dhanush Prabhakar ',
        position: 'Chair',
        image: imagePath + '/execom/main/dhanush_prabhakar.jpg',
      },
      {
        name: 'Ritesh Gandhi',
        position: 'Vice Chair',
        image: imagePath + '/execom/main/ritesh.jpeg',
      },
      {
        name: 'Nisarga V',
        position: 'Secretary',
        image: imagePath + '/execom/main/nisarga.jpg',
      },
      {
        name: 'Lathangi N',
        position: 'Treasurer',
        image: imagePath + '/execom/main/lathangi_n.jpg',
      },
      {
        name: 'Mayur S Chittaragi',
        position: 'Webmaster',
        image: imagePath + '/execom/main/mayur_s_chittaragi.jpg',
      },
      {
        name: 'Adarsh V',
        position: 'Social Media Head',
        image: imagePath + '/execom/socialMedia/adarsh.jpeg', //to be changed
      },
    ],
    2022: [
      {
        name: 'Dr. Mahesh A',
        position: 'Branch Counselor',
        image: imagePath + '/alumni/2022/main/mahesh_sir.jpg',
      },
      {
        name: 'Shashank Dhavala',
        position: 'Chair',
        image: imagePath + '/alumni/2022/main/shashank.jpeg',
      },
      {
        name: 'Anushka Subramanian',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2022/main/anushka.jpg',
      },
      {
        name: 'Jahnavi Urs',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/main/jahnavi.jpg',
      },
      {
        name: 'Vivek Kumar',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/main/vivek.jpg',
      },
      {
        name: 'Prajwal P',
        position: 'Webmaster',
        image: imagePath + '/alumni/2022/main/prajwal.PNG',
      },
    ],
    2021: [
      {
        name: 'Dr. M Uttara Kumari',
        position: 'Branch Counselor',
        image: imagePath + '/alumni/2021/main/muk_maam.jpg',
      },
      {
        name: 'Risha Dassi',
        position: 'Chair',
        image: imagePath + '/alumni/2021/main/risha.jpg',
      },
      {
        name: 'Kashish Malhotra',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2021/main/kashish.jpg',
      },
      {
        name: 'Deeraj DS',
        position: 'Secretary',
        image: imagePath + '/alumni/2021/main/deeraj.jpg',
      },
      {
        name: 'Chirag Bapat',
        position: 'Treasurer',
        image: imagePath + '/alumni/2021/main/chirag.jpg',
      },
      {
        name: 'Atreya Bain',
        position: 'Webmaster',
        image: imagePath + '/alumni/2021/main/atreya.png',
      },
      {
        name: 'Saraansh Agarwal',
        position: 'Editor in Chief',
        image: imagePath + '/alumni/2021/main/saraansh.jpg',
      },
    ],
    2020: [
      {
        name: 'Dr. M Uttara Kumari',
        position: 'Branch Counselor',
        image: imagePath + '/alumni/2020/main/muk_maam.jpg',
      },
      {
        name: 'SJ Ruthvik',
        position: 'Chair',
        image: imagePath + '/alumni/2020/main/ruthvik.jpg',
      },
      {
        name: 'Srinivas Prabhu',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2020/main/srini.jpg',
      },
      {
        name: 'Deekshith Nayak',
        position: 'Secretary',
        image: imagePath + '/alumni/2020/main/deekshith.jpg',
      },
      {
        name: 'Prajwal S Telkar',
        position: 'Treasurer',
        image: imagePath + '/alumni/2020/main/prajwal.jpg',
      },
      {
        name: 'Siddarth Sai Amruth Yetikuri',
        position: 'Editor in Chief',
        image: imagePath + '/alumni/2020/main/sidsai.jpg',
      },
      { name: 'Nagesh B', position: 'MDC Chair' },
    ],
    2019: [
      {
        name: 'Dr. M Uttara Kumari',
        position: 'Branch Counselor',
        image: imagePath + '/alumni/2020/main/muk_maam.jpg',
      },
      {
        name: 'Akshathaa Vydula',
        position: 'Chair',
        image: imagePath + '/alumni/2019/main/akonakon.png',
      },
      { name: 'Disha Hegde', position: 'Vice Chair' },
      {
        name: 'Mujavar Mohammad Ashtaq',
        position: 'Secretary',
        image: imagePath + '/alumni/2019/main/ashtaq.jpeg',
      },
      { name: 'Varun Elango', position: 'Treasurer' },
      { name: 'Shravan Sridhar', position: 'Webmaster' },
      {
        name: 'Varun T Naik',
        position: 'Publicity Head',
        image: imagePath + '/alumni/2019/main/varunt.jpeg',
      },
    ],
    2018: [
      {
        name: 'Dr. M Uttara Kumari',
        position: 'Branch Counselor',
        image: imagePath + '/alumni/2018/main/muk_maam.jpg',
      },
      {
        name: 'PVS Rohith',
        position: 'Chair',
        image: imagePath + '/alumni/2018/main/rohith.jpg',
      },
      {
        name: 'Aditya Madhavan',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2018/main/aditya.jpg',
      },
      {
        name: 'Adithya Thonse',
        position: 'Secretary',
        image: imagePath + '/alumni/2018/main/adithya.jpg',
      },
      {
        name: 'Tejasrikumar Kori',
        position: 'Treasurer',
        image: imagePath + '/alumni/2018/main/teja.jpg',
      },
    ],
  },
  aps: {
    2022: [
      {
        name: 'Dr. Mahesh A',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/aps/mahesh_sir.jpg',
      },
      {
        name: 'Narsepalli Pradyumna',
        position: 'Chair',
        image: imagePath + '/alumni/2022/aps/pradumyna.jpeg',
      },
      {
        name: 'Amogh G',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/aps/Amough.jpeg',
      },
      {
        name: 'Dheeraj G',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/aps/Dheeraj.jpeg',
      },
    ],
    2021: [
      {
        name: 'Dr. Mahesh A',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/aps/mahesh_sir.jpg',
      },
      {
        name: 'Rahul Chikkodi',
        position: 'Chair',
        image: imagePath + '/alumni/2021/aps/rahul.jpg',
      },
      {
        name: 'Aravind Anant Bhat',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2021/aps/aravind.jpg',
      },
      {
        name: 'Pratap Vangol',
        position: 'Secretary',
        image: imagePath + '/alumni/2021/aps/pratap.jpg',
      },
      {
        name: 'Rohini G Bhatkoorse',
        position: 'Treasurer',
        image: imagePath + '/alumni/2021/aps/rohini.jpg',
      },
    ],
    2020: [
      {
        name: 'Dr. Mahesh A',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2020/aps/mahesh_sir.jpg',
      },
      {
        name: 'Rahul Chikkodi',
        position: 'Chair',
        image: imagePath + '/alumni/2020/aps/rahul.jpg',
      },
      {
        name: 'Pratap Vangol',
        position: 'Secretary',
        image: imagePath + '/alumni/2020/aps/pratap.jpg',
      },
    ],
  },
  compsoc: {
    2023: [
      {
        name: 'Dr. Ashok Kumar AR',
        position: 'Faculty Advisor',
        image: imagePath + '/execom/compsoc/ashok_sir.jpg',
      },
      {
        name: 'Prajwal M Pawar',
        position: 'Chair',
        image: imagePath + '/execom/compsoc/prajwal_pawar.jpg',
      },
      {
        name: 'Likhith ',
        position: 'Vice Chair',
        image: imagePath + '/execom/compsoc/likhith.jpg',
      },
      {
        name: 'Jayanth C',
        position: 'Joint Secretary',
        image: imagePath + '/execom/compsoc/jayanth_c.jpg',
      },
      {
        name: 'Sneha P.M',
        position: 'Joint Secretary',
        image: imagePath + '/execom/compsoc/sneha_p_m.jpg',
      },
      {
        name: 'Joshua Elias Alva',
        position: 'Treasurer',
        image: imagePath + '/execom/compsoc/joshua.jpg',
      },
    ],
    2022: [
      {
        name: 'Dr. Ashok Kumar AR',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/compsoc/ashok_sir.jpg',
      },
      {
        name: 'Shubhaprada K P',
        position: 'Chair',
        image: imagePath + '/alumni/2022/compsoc/ShubhaPrada.jpeg',
      },
      {
        name: 'Prajwal P',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2022/compsoc/prajwal.PNG',
      },
      {
        name: 'Malavika Hariprasad ',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/compsoc/Malavika_HariPrasad.jpg',
      },
      {
        name: 'Sonia Singh B',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/compsoc/Sonia_Singh.jpeg',
      },
    ],
    2021: [
      {
        name: 'Dr. Ashok Kumar AR',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/compsoc/ashok_sir.jpg',
      },
      {
        name: 'Akshara Udupa',
        position: 'Chair',
        image: imagePath + '/alumni/2021/compsoc/akshara.jpg',
      },
      {
        name: 'Vishal M',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2021/compsoc/vishal.jpg',
      },
      {
        name: 'Shashank Dhavalla',
        position: 'Secretary',
        image: imagePath + '/alumni/2021/compsoc/shashank.jpg',
      },
      {
        name: 'Namya LG',
        position: 'Treasurer',
        image: imagePath + '/alumni/2021/compsoc/namya.jpg',
      },
    ],
    2020: [
      {
        name: 'Risha Dassi',
        position: 'Chair',
        image: imagePath + '/alumni/2020/compsoc/risha.jpg',
      },
      {
        name: 'Nischal J',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2020/compsoc/nischal.jpg',
      },
      {
        name: 'Nikitha Srikanth',
        position: 'Secretary',
        image: imagePath + '/alumni/2020/compsoc/niks.jpg',
      },
      {
        name: 'Chirag Bapat',
        position: 'Treasurer',
        image: imagePath + '/alumni/2020/compsoc/chirag.jpg',
      },
    ],
  },
  comsoc: {
    2022: [
      {
        name: 'Dr. Shushrutha KS',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/comsoc/shushrutha_sir.jpg',
      },
      {
        name: 'Shamanth S Bhat',
        position: 'Chair',
        image: imagePath + '/alumni/2022/comsoc/Shamanth_S_Bhat.jpg',
      },
      {
        name: 'Dhanush Prabhakar',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/comsoc/Dhanush.jpeg',
      },
      {
        name: 'Shreehitha MU',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/comsoc/shreehitha.jpg',
      },
    ],
    2021: [
      {
        name: 'Dr. Shushrutha KS',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/comsoc/shushrutha_sir.jpg',
      },
      {
        name: 'Anushka Subramanian',
        position: 'Chair',
        image: imagePath + '/alumni/2021/comsoc/anushka.jpg',
      },
      {
        name: 'Saraansh Agarwal',
        position: 'Secretary',
        image: imagePath + '/alumni/2021/comsoc/saraansh.jpg',
      },
      {
        name: 'Shreehitha MU',
        position: 'Treasurer',
        image: imagePath + '/alumni/2021/comsoc/shreehitha.jpg',
      },
    ],
    2020: [
      {
        name: 'Kashish Malhotra',
        position: 'Chair',
        image: imagePath + '/alumni/2020/comsoc/kashish.jpg',
      },
      {
        name: 'Nandesh Goudar',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2020/comsoc/nandesh.jpg',
      },
      {
        name: 'Saraansh Agarwal',
        position: 'Secretary',
        image: imagePath + '/alumni/2020/comsoc/saraansh.jpg',
      },
    ],
    2019: [{ name: 'Trilok Girish', position: 'Chair' }],
  },
  pes: {
    2023: [
      {
        name: 'Prof. SG Srivani',
        position: 'Faculty Advisor',
        image: imagePath + '/execom/pes/srivani_maam.jpg',
      },
      {
        name: 'Punith R C',
        position: 'Chair',
        image: imagePath + '/execom/pes/punith_r_c.JPG',
      },
      {
        name: 'Pragya Singh',
        position: 'Secretary',
        image: imagePath + '/execom/pes/pragya_singh.png',
      },
      {
        name: 'Nitin S',
        position: 'Treasurer',
        image: imagePath + '/execom/pes/nitin_s.jpg',
      },
    ],
    2022: [
      {
        name: 'Prof. SG Srivani',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/pes/srivani_maam.jpg',
      },
      {
        name: 'Vansh Nandwana',
        position: 'Chair',
        image: imagePath + '/alumni/2022/pes/Vansh_Nandwan.jpeg',
      },
      {
        name: 'Aviral Srivastava',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/pes/Aviral_Shrivastav.jpeg',
      },
    ],
    2021: [
      {
        name: 'Prof. SG Srivani',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/pes/srivani_maam.jpg',
      },
      {
        name: 'Shreyas Sharma',
        position: 'Chair',
        image: imagePath + '/alumni/2021/pes/shreyas.jpg',
      },
      {
        name: 'Hariharasudhan J',
        position: 'Secretary',
        image: imagePath + '/alumni/2021/pes/hari.jpg',
      },
      {
        name: 'Shirish Kumar',
        position: 'Treasurer',
        image: imagePath + '/alumni/2021/pes/shirish.jpg',
      },
    ],
    2020: [
      {
        name: 'Amith S Kumar',
        position: 'Chair',
        image: imagePath + '/alumni/2020/pes/amith.jpg',
      },
      {
        name: 'Deeraj DS',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2020/pes/deeraj.jpg',
      },
      {
        name: 'Hariharasudhan J',
        position: 'Secretary',
        image: imagePath + '/alumni/2020/pes/hari.jpg',
      },
      {
        name: 'Shirish Kumar',
        position: 'Treasurer',
        image: imagePath + '/alumni/2020/pes/shirish.jpg',
      },
    ],
    2019: [
      { name: 'Shravan Sridhar', position: 'Chair' },
      { name: 'Aayush Mohanty', position: 'Vice Chair' },
      { name: 'Anand Raj', position: 'Secretary' },

      { name: 'Shresth Rahul', position: 'Treasurer' },
      { name: 'Anvit Garg', position: 'Webmaster' },
    ],
  },
  sps: {
    2022: [
      {
        name: 'Prof. K Nagamani',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/sps/nagamani_maam.jpg',
      },
      {
        name: 'Avaneeth Anil',
        position: 'Chair',
        image: imagePath + '/alumni/2022/sps/Avaneeth_Anil.jpeg',
      },
      {
        name: 'Atul Sai',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2022/sps/Atul_Sai.jpeg',
      },
      {
        name: 'Ananya Dhulipala',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/sps/Ananya_D.jpeg',
      },
    ],
    2021: [
      {
        name: 'Prof. K Nagamani',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/sps/nagamani_maam.jpg',
      },
      {
        name: 'Niranjan DR',
        position: 'Chair',
        image: imagePath + '/alumni/2021/sps/niranjan.jpg',
      },
      {
        name: 'R Vibha Narayan',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2021/sps/vibha.jpg',
      },
      {
        name: 'Saksham Sharma',
        position: 'Treasurer',
        image: imagePath + '/alumni/2021/sps/saksham.jpg',
      },
    ],
    2020: [
      {
        name: 'Prof. K Nagamani',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2020/sps/nagamani_maam.jpg',
      },
      {
        name: 'Niranjan DR',
        position: 'Chair',
        image: imagePath + '/alumni/2020/sps/niranjan.jpg',
      },
      {
        name: 'R Vibha Narayan',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2020/sps/vibha.jpg',
      },
      // {name: 'Rahul Ratnu Chavan', position: 'Secretary', image: imagePath + '/alumni/2020/sps/rahulrc.jpg'},
      // {name: 'Dhanush U', position: 'Treasurer', image: imagePath + '/alumni/2020/sps/dhanush.jpg'},
    ],
  },
  wie: {
    2023: [
      {
        name: 'Prof Deepika',
        position: 'Faculty Advisor',
        image: imagePath + '/execom/wie/deepika_maam.jpg',
      },
      {
        name: 'Jahnavi M Math',
        position: 'Chair',
        image: imagePath + '/alumni/2023/wie/jahnavi_m_math.jpg',
      },
      {
        name: 'Omisha Singh',
        position: 'Secretary',
        image: imagePath + '/alumni/2023/wie/omisha_singh.jpg',
      },
      {
        name: 'Gohitha Maheshwari J',
        position: 'Treasurer',
        image: imagePath + '/alumni/2023/wie/gohitha_maheshwari.jpg',
      },
    ],
    2022: [
      {
        name: 'Dr. Usha Rani K R',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/wie/usha_maam.jpg',
      },
      {
        name: 'Anagha Anand',
        position: 'Chair',
        image: imagePath + '/alumni/2022/wie/Anagha_Anand.jpeg',
      },
      {
        name: 'Neha N',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/wie/neha.jpeg',
      },
      {
        name: 'Nisarga V',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/wie/Nisarga.jpg',
      },
    ],
    2021: [
      {
        name: 'Dr. Usha Rani K R',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/wie/usha_maam.jpg',
      },
      {
        name: 'Sreelakshmi',
        position: 'Chair',
        image: imagePath + '/alumni/2021/wie/sreelakshmi.jpg',
      },
      {
        name: 'Sunidhi Salwadgi',
        position: 'Secretary',
        image: imagePath + '/alumni/2021/wie/sunidhi.jpg',
      },
    ],
    2020: [
      {
        name: 'Dr. Usha Rani K R',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2020/wie/usha_maam.jpg',
      },
      {
        name: 'Aisiri HR',
        position: 'Chair',
        image: imagePath + '/alumni/2020/wie/aisiri.jpg',
      },
      {
        name: 'Raghavi R',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2020/wie/raghavi.jpg',
      },
      {
        name: 'Sreelakshmi',
        position: 'Secretary',
        image: imagePath + '/alumni/2020/wie/sreelakshmi.jpg',
      },
      {
        name: 'Sunidhi Salwadgi',
        position: 'Treasurer',
        image: imagePath + '/alumni/2020/wie/sunidhi.jpg',
      },
    ],
    2019: [
      { name: 'Disha Gulur', position: 'Chair' },
      { name: 'Shravanti K Ramesh', position: 'Vice Chair' },
    ],
  },
  ras: {
    2023: [
      {
        name: 'Dr. Abhay Deshpande',
        position: 'Faculty Advisor',
        image: imagePath + '/execom/ras/abhay_a_deshpande.jpg',
      },
      {
        name: 'Shreya Sakri',
        position: 'Chair',
        image: imagePath + '/execom/ras/shreya_sakri.jpeg',
      },
      {
        name: 'S Lingeshwara',
        position: 'Secretary',
        image: imagePath + '/execom/ras/s_lingeshwara.jpg',
      },
      {
        name: 'S Vedram',
        position: 'Treasurer',
        image: imagePath + '/execom/ras/s_vedram.png',
      },
    ],
    2022: [
      {
        name: 'Dr. Geetha K S',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/ras/geetha_maam.jpg',
      },
      {
        name: 'Saksham Sharma',
        position: 'Chair',
        image: imagePath + '/alumni/2022/ras/saksham.jpg',
      },
      {
        name: 'Shreya Sakri',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/ras/shreya_sakri.jpeg',
      },
      {
        name: 'Suraj Ponnanna K C',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/ras/suraj.jpeg',
      },
    ],
    2021: [
      {
        name: 'Dr. Geetha K S',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/ras/geetha_maam.jpg',
      },
      {
        name: 'Naman A Menezes',
        position: 'Chair',
        image: imagePath + '/alumni/2021/ras/naman.jpg',
      },
      {
        name: 'Ambu Karthik',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2021/ras/ambu.jpg',
      },
      {
        name: 'Rahul Pinny',
        position: 'Secretary',
        image: imagePath + '/alumni/2021/ras/pinny.jpg',
      },
      {
        name: 'Rithwik Jayanth',
        position: 'Treasurer',
        image: imagePath + '/alumni/2021/ras/rithwik.jpg',
      },
    ],
  },
  sight: {
    2022: [
      {
        name: 'Dr Usha J',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/sight/usha_maam.jpg',
      },
      {
        name: 'Samhitha S',
        position: 'Chair',
        image: imagePath + '/alumni/2022/sight/samhitha.jpg',
      },
      {
        name: 'Neha N',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/sight/neha.jpeg',
      },
      {
        name: 'Nisarga V',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/sight/Nisarga.jpg',
      },
    ],
    2021: [
      {
        name: 'Dr Usha J',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2021/sight/usha_maam.jpg',
      },
    ],
  },
  cas: {
    2023: [
      {
        name: 'Dr. Shylashree.N ', //needs to be updated
        position: 'Faculty Advisor',
        image: imagePath + '/execom/cas/dr_shylashree.jpeg',
      },
      {
        name: 'Akash Kotagi',
        position: 'Chair',
        image: imagePath + '/alumni/2023/cas/akash_kotagi.jpg',
      },
      {
        name: 'Sanjana Carol',
        position: 'Secretary',
        image: imagePath + '/alumni/2023/cas/sanjana_carol.jpg',
      },
      {
        name: 'Sai Surya Sreekar Mulukutla',
        position: 'Treasurer',
        image: imagePath + '/alumni/2023/cas/sreekar_mulukutla.jpg',
      },
    ],
    2022: [
      {
        name: 'Dr. Shylashree N',
        position: 'Faculty Advisor',
        image: imagePath + '/alumni/2022/cas/dr_shylashree.jpeg', //to be updated
      },
      {
        name: 'Keerthana Ramesh ',
        position: 'Chair',
        image: imagePath + '/alumni/2022/cas/keerthana.jpeg',
      },
      {
        name: 'Sriniketh S S',
        position: 'Vice Chair',
        image: imagePath + '/alumni/2022/cas/sriniketh.jpg',
      },
      {
        name: 'Akash Kotagi',
        position: 'Secretary',
        image: imagePath + '/alumni/2022/cas/akash.jpeg',
      },
      {
        name: 'Ritesh Gandhi',
        position: 'Treasurer',
        image: imagePath + '/alumni/2022/cas/ritesh.jpeg',
      },
    ],
  },
  cs: {
    2022: [], //to be added
  },
};

export const about = {
  img1: imgify`history/1.png`,
  img2: imgify`history/2.png`,
};
export { achievements as FPAchievementImages, whatWeDo as FPWhatWeDoImages } from './data/FrontPage/Carousels';
export { whatWeDoText, SbachievementsText } from './data/FrontPage/Text';
export { imagePath, hostname };
