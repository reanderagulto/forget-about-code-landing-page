import {
    SVGFacebookSquareIcon, 
    SVGTwitterIcon,
    SVGDribbleIcon, 
    SVGInstagramIcon, 
    SVGSkypeIcon, 
    SVGMediumIcon, 
    SVGGitIcon,
} from '@components/SVG'


export const siteInfo = {
    siteName: "Startup 3", 
    phoneNumber: "+1 555 505 5050", 
    email: "info@designmodo.com", 
    address: "San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909", 
    copyright: "© 2017 Designmodo. All rights reserved."
};

export const listOfReviews = [
    {
        name: "Rayhan Curran", 
        image: "/images/mask-1.png", 
        review: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support.",
    }, 
    {
        name: "Kayley Frame", 
        image: "/images/mask-2.png", 
        review: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website.",
    }, 
    {
        name: "Gene Whitfield", 
        image: "/images/mask-3.png", 
        review: "The most important part of the Startup Framework is the samples.",
    }, 
    {
        name: "Allan Kim", 
        image: "/images/mask-4.png", 
        review: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
    }, 
];

export const listOfWorks = [
    {
        name: "Mozart Project", 
        category: "UI kit", 
        image: "/images/mozart-project.png"
    }, 
    {
        name: "Startup Framework 2.0", 
        category: "Framework", 
        image: "/images/setup-framework.png"
    }, 
    {
        name: "From the Sky", 
        category: "Photos", 
        image: "/images/from-the-sky.png"
    },
    {
        name: "Air Forces", 
        category: "Pictures", 
        image: "/images/air-forces.png"
    },
];

export const crew = [
    {
        name: "Leah Salomon", 
        position: "UI Designer", 
        image: "/images/mask-1.png",
        socials: [
            {
                name: "twitter", 
                link: "https://twitter.com", 
                icon: <SVGTwitterIcon />,
            },
            {
                name: "facebook", 
                link: "https://facebook.com", 
                icon: <SVGFacebookSquareIcon />,
            }, 
            {
                name: "dribble", 
                link: "https://dribble.com", 
                icon: <SVGDribbleIcon />,
            },
            {
                name: "instagram", 
                link: "https://instagram.com", 
                icon: <SVGInstagramIcon />,
            }, 
        ]
    }, 
    {
        name: "Colin Timmons", 
        position: "UX Designer", 
        image: "/images/colin-timmons.png",
        socials: [
            {
                name: "twitter", 
                link: "https://twitter.com", 
                icon: <SVGTwitterIcon />,
            },
            {
                name: "dribble", 
                link: "https://dribble.com", 
                icon: <SVGDribbleIcon />,
            },
        ]
    }, 
    {
        name: "Miguel Osborne", 
        position: "Front-end Developer", 
        image: "/images/miguel-osbourne.png",
        socials: [
            {
                name: "skype", 
                link: "https://twitter.com", 
                icon: <SVGSkypeIcon />,
            },
            {
                name: "medium", 
                link: "https://medium.com", 
                icon: <SVGMediumIcon />,
            },
            {
                name: "git", 
                link: "https://github.com", 
                icon: <SVGGitIcon />
            },
        ]
    },
    {
        name: "Taylor Simon", 
        position: "Product Manager", 
        image: "/images/taylor-simon.png",
        socials: [
            {
                name: "twitter", 
                link: "https://twitter.com", 
                icon: <SVGTwitterIcon />,
            },
            {
                name: "instagram", 
                link: "https://instagram.com", 
                icon: <SVGInstagramIcon />,
            }, 
        ]
    }, 
    {
        name: "Steven MacAlister", 
        position: "Copyrighter", 
        image: "/images/steven-macalister.png",
        socials: [
            {
                name: "twitter", 
                link: "https://twitter.com", 
                icon: <SVGTwitterIcon />,
            },

        ]
    },
];

export const features = [
    '2 GB of space', 
    '14 days of backups', 
    'Social integrations', 
    'Client billing',
    'Remote access', 
    'Custom domain', 
    '24 hours support',
    'Admin tools', 
    'Collaboration tools',
    'User management'
];

export const pricingPlans = [
    {
        name: "Starter", 
        price: 9.99, 
        currency: '$', 
        features: [
            '2 GB of space', 
            '14 days of backups', 
            'Social integrations', 
            'Client billing'
        ], 
        link: "https://google.com"
    }, 
    {
        name: "Professional", 
        price: 19.99, 
        currency: '$', 
        features: [
            '2 GB of space', 
            '14 days of backups', 
            'Social integrations', 
            'Client billing',
            'Remote access', 
            'Custom domain', 
            '24 hours support'
        ], 
        link: "https://google.com", 
        active: true
    }, 
    {
        name: "Team", 
        price: 49.99, 
        currency: '$', 
        features: [
            '2 GB of space', 
            '14 days of backups', 
            'Social integrations', 
            'Client billing',
            'Remote access', 
            'Custom domain', 
            '24 hours support',
            'Admin tools', 
            'Collaboration tools',
            'User management'
        ], 
        link: "https://google.com"
    }, 
];