import { useEffect, useState } from "react";
import { Box, Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { SpeakersWrapper } from "./styled";
import { speakers } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Speakers = () => {
    const matchesTablet = useMediaQuery('(max-width:768px)');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => console.log(hoveredIndex), [hoveredIndex]);
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
            {matchesTablet ? (
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
            ) : (
                <Stack
                    component={motion.div}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    direction={"row"}
                    gap={"var(--flex-gap)"}
                    sx={{
                        width: "100%",
                        minHeight: "fit-content"
                    }}
                >
                    {speakers.map((speaker, index) => {
                        return (
                            <Box
                                key={index}
                                className="speaker"
                                component={motion.div}
                                variants={item}
                                sx={{
                                    flexBasis: hoveredIndex === index ? "25%" : "15%",
                                    flexShrink: 1,
                                    flexGrow: 0,
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    overflow: "hidden",
                                    "&:hover": {
                                        flexBasis: "25%"
                                    }
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {speaker.thumbnail}
                            </Box>
                        )
                    })}
                </Stack>
            )}
        </SpeakersWrapper>
    )
}