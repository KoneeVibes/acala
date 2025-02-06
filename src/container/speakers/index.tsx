import { Box, Grid2, Stack, Typography } from "@mui/material";
import { SpeakersWrapper } from "./styled";
import { speakers } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Speakers = () => {
    return (
        <SpeakersWrapper
            id="speakers"
        >
            <Stack
                className="speakers-top-half"
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    component={motion.div}
                    variants={item}
                >
                    <Typography
                        variant="h2"
                        fontFamily={"IBM Plex Sans"}
                        fontWeight={500}
                        fontSize={{ mobile: "22px", tablet: "32px", laptop: "40px" }}
                        lineHeight={"normal"}
                        color={"#000000"}
                        textAlign={"center"}
                        whiteSpace={"normal"}
                        marginBlockEnd={{ mobile: "calc(var(--basic-margin)/2)", tablet: "var(--basic-margin)" }}
                    >
                        Speakers at AC2025
                    </Typography>
                </Box>
                <Box
                    component={motion.div}
                    variants={item}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"IBM Plex Sans"}
                        fontWeight={400}
                        fontSize={{ mobile: "16px", desktop: "24px" }}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                        textAlign={"center"}
                    >
                        Our speakers features visionary leaders and experts in blockchain and Web3. Gain valuable insights, inspiration, and strategies redefining decentralized finance.
                    </Typography>
                </Box>
            </Stack>
            <Grid2
                container
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                spacing={"var(--flex-gap)"}
                justifyContent={"space-between"}
                marginBlockStart={{ mobile: "calc(var(--basic-margin)/2)" }}
            >
                {speakers.map((speaker, index) => {
                    return (
                        <Grid2
                            key={index}
                            size={{ mobile: 12, miniTablet: 6, tablet: 4, laptop: 2 }}
                            component={motion.div}
                            variants={item}
                        >
                            <Box
                                component={"div"}
                                className="speaker"
                            >
                                {speaker.thumbnail}
                            </Box>
                        </Grid2>
                    )
                })}
            </Grid2>
        </SpeakersWrapper>
    )
}