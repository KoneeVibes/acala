import { Box, Stack, Typography } from "@mui/material";
import { SecureYourSpotWrapper } from "./styled";
import { BaseButton } from "../../component/button/styled";
import { SecureYourSpotBgImg } from "../../asset";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const SecureYourSpot = () => {
    const handleNavigateToLuma = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return window.open("https://t.me/acalaafricancommunity", "_blank")
    };
    return (
        <SecureYourSpotWrapper>
            <Box
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
                    whiteSpace={"normal"}
                    width={"70%"}
                >
                    Secure Your Spot Now
                </Typography>
            </Box>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    variant="body1"
                    component={motion.h2}
                    variants={item}
                    fontFamily={"IBM Plex Sans"}
                    fontWeight={400}
                    fontSize={{ mobile: "16px", desktop: "24px" }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    whiteSpace={"normal"}
                    width={"70%"}
                >
                    Be part of Acala Connect 2025 and help shape the future of decentralized finance and blockchain innovation. Reserve your spot today!
                </Typography>
            </Box>
            <Stack
                direction={{ laptop: "row" }}
                justifyContent={"space-between"}
            >
                <Box
                    overflow={"hidden"}
                    component={motion.div}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                >
                    <BaseButton
                        variant="contained"
                        background="transparent"
                        component={motion.button}
                        variants={item}
                        border="1px solid #E40C5B"
                        sx={{ width: { mobile: "100%", miniTablet: "auto" } }}
                        onClick={handleNavigateToLuma}
                    >
                        <Typography
                            variant={"button"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"#000000"}
                            textTransform={"inherit"}
                            textAlign={"left"}
                        >
                            Register For Acala Connect 2025
                        </Typography>
                    </BaseButton>
                </Box>
                <Box
                    component={"div"}
                    className="secure-your-spot-img-box"
                >
                    <SecureYourSpotBgImg />
                </Box>
            </Stack>
        </SecureYourSpotWrapper>
    )
}