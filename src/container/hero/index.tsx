import { Box, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import { Register } from "../../asset";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Hero = () => {
    return (
        <HeroWrapper>
            <Box
                className="hero-text"
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    variant="h1"
                    component={motion.h1}
                    variants={item}
                    fontFamily={"Outfit"}
                    fontWeight={700}
                    fontSize={"10vw"}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                >
                    ACALA CONNECT
                </Typography>
                <Typography
                    variant="body1"
                    component={motion.p}
                    variants={item}
                    fontFamily={"IBM Plex Sans"}
                    fontWeight={400}
                    fontSize={{ mobile: 14, tablet: 25, desktop: 33 }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                >
                    Discover. Build. Connect. Join Africa's Premier Acala Network Event
                </Typography>
            </Box>
            <Box
                component={"div"}
                className="hero-register-box"
            >
                <Register />
            </Box>
        </HeroWrapper>
    )
}