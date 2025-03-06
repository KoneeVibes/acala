import { Typography } from "@mui/material";
import { AboutWrapper } from "./styled";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const About = () => {
    return (
        <AboutWrapper
            id="about"
            component={motion.div}
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            <Typography
                variant="h2"
                component={motion.h2}
                variants={item}
                fontFamily={"IBM Plex Sans"}
                fontWeight={500}
                fontSize={{ mobile: "22px", tablet: "32px", laptop: "40px" }}
                lineHeight={"normal"}
                color={"#000000"}
                textAlign={"center"}
                whiteSpace={"normal"}
                marginBlockEnd={{ mobile: "calc(var(--basic-margin)/2)", tablet: "var(--basic-margin)" }}
            >
                About Acala Connect
            </Typography>
            <Typography
                variant="body1"
                component={motion.p}
                variants={item}
                fontFamily={"IBM Plex Sans"}
                fontWeight={400}
                fontSize={{ mobile: 12, tablet: 17, desktop: 21 }}
                lineHeight={"normal"}
                color={"#000000"}
                whiteSpace={"normal"}
                sx={{ textWrapStyle: "balance", textAlign: "center" }}
            >
                Acala Connect 2025 is an event in Nigeria aimed to showcase the productive innovations of the Acala Network in the African crypto market. This event will educate, inspire, and connect developers, NFT creators, students, investors, and blockchain enthusiasts. It’s the first-ever Acala in-real life (IRL) event in Africa, aiming to create awareness and introduce Acala’s products and innovations to the continent.
            </Typography>
        </AboutWrapper>
    )
}