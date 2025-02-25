import objectivesimg1 from "../asset/image/objectivesimg1.svg";
import objectivesimg2 from "../asset/image/objectivesimg2.svg";
import objectivesimg3 from "../asset/image/objectiveimg3.svg";
import objectivesimg4 from "../asset/image/objectiveimg4.svg";
import objectivesimg5 from "../asset/image/objectiveimg5.svg";
import { Developersthumbnail, GmailIcon, Investorsthumbnail, Kolthumbnail, Nftthumbnail, SpeakerImgI, SpeakerImgII, SpeakerImgIII, SpeakerImgIV, SpeakerImgV, SpeakerImgVI, Studentsthumbnail, TelegramIcon, Web3enthusiaststhumbnail, XIcon } from "../asset";

export const navLinks = [
    {
        name: "Home",
        url: "/#nav"
    },
    {
        name: "About",
        url: "/#about"
    },
    {
        name: "AC Partners",
        url: "/#partners"
    },
    {
        name: "Speakers",
        url: "/#speakers"
    },
    {
        name: "Contact Us",
        url: "/#contact"
    },
];

export const objectives = [
    {
        title: "Promote Adoption of Acala Products",
        bg: objectivesimg1,
        body: "Drive awareness and usage of Acala’s ecosystem by onboarding new users and showcasing key products like Acala EVM and decentralized applications.",
        // color: "#E40C5B",
        color: "#FFFFFF",
        hue: "linear-gradient(180deg, #E40C5B 0%, #1F000B 87%)"
    },
    {
        title: "Integrate more Developers in the Ecosystem",
        bg: objectivesimg2,
        body: "Encourage partnerships with development teams and blockchain brands to expand Acala’s ecosystem through innovative integrations and new DApps on the Acala EVM.",
        // color: "#645AFF",
        color: "#FFFFFF",
        hue: "linear-gradient(180deg, #645AFF 0%, #07052E 80%)"
    },
    {
        title: "Drive Adoption of Cross-Chain DeFi Solutions",
        bg: objectivesimg3,
        body: "Educate attendees on Acala’s cross-chain capabilities, focusing on how the platform integrates with other ecosystems to deliver seamless decentralized solutions.",
        // color: "#FF4C3B",
        color: "#FFFFFF",
        hue: "linear-gradient(180deg, #FF4C3B 0%, #1B0401 88%)"
    },
    {
        title: "Build Community and Partnerships",
        bg: objectivesimg4,
        body: "Promote networking and collaboration for a striving community.",
        // color: "#E40C5B",
        color: "#FFFFFF",
        hue: "linear-gradient(180deg, #E40C5B 0%, #1F000B 83%)"
    },
    {
        title: "Amplify Acala’s Visibility in Africa",
        bg: objectivesimg5,
        body: "Establish Acala Network as a leading DeFi hub in Africa, enhancing brand recognition and strengthening its community and ecosystem growth.",
        // color: "#645AFF",
        color: "#FFFFFF",
        hue: "linear-gradient(180deg, #645AFF 0%, #07052E 77%)"
    },
];

export const categories = [
    {
        title: "Team"
    },
    {
        title: "Partners"
    },
    {
        title: "Collaborators"
    },
    {
        title: "Participants"
    }
];

export const audience = [
    {
        title: "Web3 Enthusiasts",
        thumbnail: <Web3enthusiaststhumbnail />
    },
    {
        title: "NFT Creators and Digital Artists",
        thumbnail: <Nftthumbnail />
    },
    {
        title: "Key Opinion Leaders",
        thumbnail: <Kolthumbnail />
    },
    {
        title: "Developers",
        thumbnail: <Developersthumbnail />
    },
    {
        title: "Investors",
        thumbnail: <Investorsthumbnail />
    },
    {
        title: "Students",
        thumbnail: <Studentsthumbnail />
    },
];


export const collaborators = ["", "", "", "", "", ""];

export const speakers = [
    {
        name: "",
        thumbnail: <SpeakerImgI />
    },
    {
        name: "",
        thumbnail: <SpeakerImgII />
    },
    {
        name: "",
        thumbnail: <SpeakerImgIII />
    },
    {
        name: "",
        thumbnail: <SpeakerImgIV />
    },
    {
        name: "",
        thumbnail: <SpeakerImgV />
    },
    {
        name: "",
        thumbnail: <SpeakerImgVI />
    },
];

export const footerInfo = {
    about: [
        {
            name: "About Acala Network",
            url: "https://acala.network/"
        },
        {
            name: "About Acala Connect",
            url: "/#about"
        },
        {
            name: "Acala’s Product",
            url: "https://apps.acala.network/"
        }
    ],
    others: [
        {
            name: "AC2025 Partners",
            url: "/#partners"
        },
        {
            name: "AC2025 Speakers",
            url: "/#speakers"
        },
        {
            name: "Collaborate With Us",
            url: "/#partners"
        }
    ],
    contact: [
        {
            name: "Telegram",
            icon: <TelegramIcon />,
            url: "https://t.me/acalaafricancommunity"
        },
        {
            name: "Gmail",
            icon: <GmailIcon />,
            url: "mailto:acalaafrica@gmail.com"
        },
        {
            name: "X",
            icon: <XIcon />,
            url: "https://x.com/acalaafr?s=21"
        },
    ]
}