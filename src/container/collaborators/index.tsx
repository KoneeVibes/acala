import { Box, Grid2, Typography } from "@mui/material";
import { CollaboratorsWrapper } from "./styled";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { collaborators } from "../../config/static";
import { BaseButton } from "../../component/button/styled";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Collaborators = () => {
    const handleNavigateToLuma = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return window.open("https://t.me/acalaafricancommunity", "_blank")
    }
    return (
        <CollaboratorsWrapper
            id="partners"
        >
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
                    textAlign={"center"}
                    whiteSpace={"normal"}
                >
                    Our Esteemed Collaborators of AC2025 and Partner
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
                    component={motion.p}
                    variants={item}
                    fontFamily={"IBM Plex Sans"}
                    fontWeight={400}
                    fontSize={{ mobile: "16px", desktop: "24px" }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                >
                    Acala Connect 2025 is supported by forward-thinking collaborators and partners committed to driving innovation and expanding the reach of decentralized finance. Their contributions make this event possible and impactful.
                </Typography>
            </Box>
            <Grid2
                container
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                spacing={"var(--flex-gap)"}
                justifyContent={"space-between"}
                marginBlock={{ mobile: "calc(var(--basic-margin)/2)" }}
            >
                {collaborators.map((collaborator, index) => {
                    return (
                        <Grid2
                            key={index}
                            size={{ mobile: 6, tablet: 4, laptop: 2 }}
                            component={motion.div}
                            variants={item}
                        >
                            <Box
                                component={"div"}
                                className="collaborator"
                            >
                                <QuestionMarkIcon />
                            </Box>
                        </Grid2>
                    )
                })}
            </Grid2>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <BaseButton
                    variant="contained"
                    background="#645AFF"
                    sx={{ float: "right", width: { mobile: "100%", miniTablet: "auto" } }}
                    component={motion.button}
                    variants={item}
                    onClick={handleNavigateToLuma}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                        textAlign={"left"}
                    >
                        Collaborate With Us
                    </Typography>
                </BaseButton>
            </Box>
        </CollaboratorsWrapper>
    )
}