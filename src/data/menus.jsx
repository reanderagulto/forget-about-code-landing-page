import { 
    SVGDribbleIcon, 
    SVGBehanceIcon,
    SVGTwitterIcon, 
    SVGFacebookIcon,
    SVGGooglePlusIcon
} from "@components/SVG";

export const headerMenu = [
    {
        name: "Home",
        uri: "/",
        isIcon: false
    }, 
    {
        name: "Features",
        uri: "/features",
        isIcon: false
    }, 
    {
        name: "Pricing", 
        uri: "/pricing", 
        isIcon: false
    }, 
    {
        name: "Blog", 
        uri: "/blog",
        isIcon: false
    }, 
    {
        name: "dribble", 
        uri: "https://dribble.com",
        external: true,
        isIcon: true, 
        icon: <SVGDribbleIcon fill="#FFF" />
    }, 
    {
        name: "behance", 
        uri: "https:://behance.com", 
        external: true,
        isIcon: true,
        icon: <SVGBehanceIcon fill="#FFF" />
    }
];

export const footerMenu = [
    {
        name: "Tour", 
        uri: "/tour", 
    }, 
    {
        name: "Features",
        uri: "/features"
    }, 
    {
        name: "Pricing Plans", 
        uri: "/pricing"
    }, 
    {
        name: "Our Works", 
        uri: "/our-works"
    }, 
    {
        name: "Brands", 
        uri: "/brands"
    }, 
    {
        name: "Contacts", 
        uri: "/contacts"
    }
];

export const socialLinks = [
    {
        name: "twitter", 
        uri: "https://www.twitter.com",
        icon: <SVGTwitterIcon fill="#FFF" />
    }, 
    {
        name: "facebook", 
        uri: "https://www.facebook.com",
        icon: <SVGFacebookIcon fill="#FFF" />,
    }, 
    {
        name: "google-plus", 
        uri: "https://plus.google.com",
        icon: <SVGGooglePlusIcon fill="#FFF" />
    }
];