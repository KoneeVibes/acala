import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import { Register } from "../../asset";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Hero = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        const offsetX = (clientX / window.innerWidth - 0.5) * 20;
        const offsetY = (clientY / window.innerHeight - 0.5) * 20;
        setPosition({ x: offsetX, y: offsetY });
    };

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
                    fontSize={"8vw"}
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
                    fontSize={{ mobile: 14, tablet: 25, desktop: 30 }}
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
                onMouseMove={handleMouseMove}
                sx={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            >
                <Register />
            </Box>
        </HeroWrapper>
    )
}