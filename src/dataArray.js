import React from "react"
import { SiOpenaigym } from 'react-icons/si'
import { RiAddLine } from 'react-icons/ri'
import { FiMinus } from 'react-icons/fi'
import user1 from './component/images/team2.jpg'
import user2 from './component/images/team3.jpg'
import user3 from './component/images/team4.jpg'
import user4 from './component/images/team5.jpg'
import user5 from './component/images/team6.jpg'
import user6 from './component/images/team7.jpg'
import user7 from './component/images/team8.jpg'
import user8 from './component/images/team9.jpg'
import aboutBg from './component/images/aboutBG.jpg'
import planBG from './component/images/welcomeBG6.jpg'
import galleryBg from './component/images/gallery.jpg'
import trainerBG from './component/images/trainerBG.jpg'
import contactBG from './component/images/contact.jpg'


export const links = [{
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Gallery',
        path: '/gallery'
    },
    {
        name: 'Plans',
        path: '/plans'
    },
    {
        name: 'Trainer',
        path: '/trainer'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    //    {
    //         name: 'NotFound',
    //         path: '/notFound'
    //     },
]

export const cards = [{
        id: 1,
        icon: < SiOpenaigym / > ,
        title: 'Program One',
        info: 'Hey welcome to IRG-WORKOUT. We intend to take you and your body to another lever of self building...',
        path: "/programs/111"
    },
    {
        id: 2,
        icon: < SiOpenaigym / > ,
        title: 'Program Two',
        info: 'Hey welcome to IRG-WORKOUT. We intend to take you and your body to another lever of self building...',
        path: "/programs/111"
    },
    {
        id: 3,
        icon: < SiOpenaigym / > ,
        title: 'Program Three',
        info: 'Hey welcome to IRG-WORKOUT. We intend to take you and your body to another lever of self building...',
        path: "/programs/111"
    },
    {
        id: 4,
        icon: < SiOpenaigym / > ,
        title: 'Program Four',
        info: 'Hey welcome to IRG-WORKOUT. We intend to take you and your body to another lever of self building...',
        path: "/programs/111"
    },
]

export const valueCard = [{
        icon: < SiOpenaigym / > ,
        title: 'Value One',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum et omnis reprehenderit nisi maxime."
    },
    {
        icon: < SiOpenaigym / > ,
        title: 'Value two',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum et omnis reprehenderit nisi maxime."
    },
    {
        icon: < SiOpenaigym / > ,
        title: 'Value three',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum et omnis reprehenderit nisi maxime."
    },
    {
        icon: < SiOpenaigym / > ,
        title: 'Value four',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum et omnis reprehenderit nisi maxime."
    },

]

export const faqCards = [{
        title: 'How often should I exercise?',
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quaerat perferendis itaque magnam amet temporibus, atque harum deserunt facere, officiis iusto fugit neque. Inventore, facilis.",
        showInfo: < RiAddLine / > ,
        hideInfo: < FiMinus / >
    },
    {
        title: 'How Long should my workout be?',
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quaerat perferendis itaque magnam amet temporibus, atque harum deserunt facere, officiis iusto fugit neque. Inventore, facilis.",
        showInfo: < RiAddLine / > ,
        hideInfo: < FiMinus / >
    },
    {
        title: 'Should I do strength training, cardio or both?',
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quaerat perferendis itaque magnam amet temporibus, atque harum deserunt facere, officiis iusto fugit neque. Inventore, facilis.",
        showInfo: < RiAddLine / > ,
        hideInfo: < FiMinus / >
    },
    {
        title: 'What time of the day is best for workout?',
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quaerat perferendis itaque magnam amet temporibus, atque harum deserunt facere, officiis iusto fugit neque. Inventore, facilis.",
        showInfo: < RiAddLine / > ,
        hideInfo: < FiMinus / >
    },
    {
        title: 'Do I need to warmup before my workout?',
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quaerat perferendis itaque magnam amet temporibus, atque harum deserunt facere, officiis iusto fugit neque. Inventore, facilis.",
        showInfo: < RiAddLine / > ,
        hideInfo: < FiMinus / >
    },
    {
        title: 'For strength trainig should I start with weight lighting or endurance?',
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quaerat perferendis itaque magnam amet temporibus, atque harum deserunt facere, officiis iusto fugit neque. Inventore, facilis.",
        showInfo: < RiAddLine / > ,
        hideInfo: < FiMinus / >
    },
]

export const testimonial = [{
        img: user1,
        name: 'Nana Yea Dankwa',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Pharmacist',

    },
    {
        img: user2,
        name: 'Kim Yea Joe',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Doctor',

    },
    {
        img: user3,
        name: 'Anna V. Wells',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Teacher',

    },
    {
        img: user4,
        name: 'Dankwa H. Abraham',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Mechanic',

    },
    {
        img: user5,
        name: 'Emma M. Williams',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Pilot',

    },
    {
        img: user6,
        name: 'keleb F. Rowling',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Journalist',

    },
    {
        img: user7,
        name: 'Andrew M. Phillips',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Pharmacist',

    },
    {
        img: user8,
        name: 'Jonathan K. Dawning',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet dolorem harum fugit obcaecati molestiae debitis aperiam autem, soluta voluptatem ipsum nisi inventore explicabo alias?',
        job: 'Pharmacist',

    },
]

export const AboutHeader = [{
    img: aboutBg,
    title: 'About Us',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, commodi labore adipisci tempora unde eum similique nihil autem accusamus eaque neque ratione suscipit mollitia et?'
}, ]


export const GalleryHeader = [{
    img: galleryBg,
    title: 'Our Gallery',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, commodi labore adipisci tempora unde eum similique nihil autem accusamus eaque neque ratione suscipit mollitia et?'
}, ]

export const ContactHeader = [{
    img: contactBG,
    title: 'Get In Touch',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, commodi labore adipisci tempora unde eum similique nihil autem accusamus eaque neque ratione suscipit mollitia et?'
}, ]

export const planHeader = [{
    img: planBG,
    title: "Membership Plan",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptate nemo adipisci dolore accusamus exercitationem sint impedit. Laborum fuga quam consectetur, blanditiis dignissimos totam veritatis!"
}]

export const trainerHeader = [{
    img: trainerBG,
    title: "Our Trainers",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem possimus earum eveniet quas debitis, recusandae deleniti laudantium sunt quam?"
}]


export const ourStory = [{
    img: user1,
    title: 'Our Story',
    info1: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem fugiat perferendis, ratione ea obcaecati quo reprehenderit soluta maxime earum animi iusto, nihil commodi temporibus eius! Aperiam sunt accusamus numquam atque officiis ipsam explicabo sint! ',
    info2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptate iusto labore, nostrum error laborum. Corrupti voluptatum quia optio ad necessitatibus incidunt tenetur eius commodi?',
    info3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam illo! Ullam, fugit cupiditate excepturi ut veniam sunt odit atque expedita aliquid rerum?'
}]

export const ourVison = [{
    img: user4,
    title: 'Our Vision',
    info1: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem fugiat perferendis, ratione ea obcaecati quo reprehenderit soluta maxime earum animi iusto, nihil commodi temporibus eius! Aperiam sunt accusamus numquam atque officiis ipsam explicabo sint! ',
    info2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptate iusto labore, nostrum error laborum. Corrupti voluptatum quia optio ad necessitatibus incidunt tenetur eius commodi?',
    info3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam illo! Ullam, fugit cupiditate excepturi ut veniam sunt odit atque expedita aliquid rerum?'
}]

export const ourMission = [{
    img: user2,
    title: 'Our Mission',
    info1: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem fugiat perferendis, ratione ea obcaecati quo reprehenderit soluta maxime earum animi iusto, nihil commodi temporibus eius! Aperiam sunt accusamus numquam atque officiis ipsam explicabo sint! ',
    info2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptate iusto labore, nostrum error laborum. Corrupti voluptatum quia optio ad necessitatibus incidunt tenetur eius commodi?',
    info3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam illo! Ullam, fugit cupiditate excepturi ut veniam sunt odit atque expedita aliquid rerum?'
}]

export const gallery = [
    { img: user1 }, { img: user2 }, { img: user3 }, { img: user4 }, { img: user5 }, { img: user6 }, { img: user7 }, { img: user8 }, { img: aboutBg }
]

export const silverPlan = [{
        title: "Silver Package",
        info: "This package is perfect for beginners who need constant help",
        price: "$28.99",
        featureName: "Features",
        feature1: "First Feature",
        feature2: "Second Feature",
        feature3: "Third Feature",
        feature4: "Fourth Feature",
        feature5: "Fiveth Feature",
        feature6: "Sixth Feature",
        feature7: "Seventh Feature",
        feature8: "Eighth Feature",
        feature9: "Nineth Feature",
        feature10: "Tenth Feature",
        feature11: "Eleventh Feature",
    }

]
export const goldPlan = [

    {
        title: "Gold Package",
        info: "This package is perfect for beginners who need constant help",
        price: "$49.99",
        featureName: "Features",
        feature1: "First Feature",
        feature2: "Second Feature",
        feature3: "Third Feature",
        feature4: "Fourth Feature",
        feature5: "Fiveth Feature",
        feature6: "Sixth Feature",
        feature7: "Seventh Feature",
        feature8: "Eighth Feature",
        feature9: "Nineth Feature",
        feature10: "Tenth Feature",
        feature11: "Eleventh Feature"
    }
]

export const platinumPlan = [{
    title: "Platinum Package",
    info: "This package is perfect for beginners who need constant help",
    price: "$88.99",
    featureName: "Features",
    feature1: "First Feature",
    feature2: "Second Feature",
    feature3: "Third Feature",
    feature4: "Fourth Feature",
    feature5: "Fiveth Feature",
    feature6: "Sixth Feature",
    feature7: "Seventh Feature",
    feature8: "Eighth Feature",
    feature9: "Nineth Feature",
    feature10: "Tenth Feature",
    feature11: "Eleventh Feature"
}]


export const ourTrainer = [{
        img: user1,
        name: 'Nana Yea Dankwa',

        job: 'Aerobic Trainer',

    },
    {
        img: user2,
        name: 'Kim Yea Joe',

        job: 'Speed Trainer',

    },
    {
        img: user3,
        name: 'Anna V. Wells',

        job: 'Flexibility Trainer',

    },
    {
        img: user4,
        name: 'Dankwa H. Abraham',

        job: 'Speed Trainer',

    },
    {
        img: user5,
        name: 'Emma M. Williams',

        job: 'Yoga Tutor',

    },
    {
        img: user6,
        name: 'keleb F. Rowling',

        job: 'Aerobic Trainer',

    },
    {
        img: user7,
        name: 'Andrew M. Phillips',

        job: 'Speed Trainer',

    },
    {
        img: user8,
        name: 'Jonathan K. Dawning',

        job: 'Flexibility Trainer',

    },
]