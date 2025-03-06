import { useState } from "react";
import { Box, Card, CardContent, Grid2, Stack, Typography } from "@mui/material";
import { SneakpeakWrapper } from "./styled";
import { SneakpeakBanner } from "../../asset";
import { BaseButton } from "../../component/button/styled";
import PinDropIcon from '@mui/icons-material/PinDrop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { categories } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";
import { leftParent, rightChild, rightParent } from "../../config/horizontalSlideIn";

export const Sneakpeak = () => {
    const [renderMap, setRenderMap] = useState(false);

    const handleLocationButtonHoverIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return setRenderMap(true);
    };

    const handleLocationButtonHoverOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return setRenderMap(false);
    };

    return (
        <SneakpeakWrapper>
            <Stack
                className="sneak-peak-top-half"
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
                        marginBlockEnd={{ mobile: "calc(var(--basic-margin))", tablet: "calc(var(--basic-margin)*1.5)" }}
                    >
                        Sneak Peak of ACALA CONNECT 2025
                    </Typography>
                </Box>
                <Stack
                    gap={"var(--flex-gap)"}
                    direction={{ desktop: "row" }}
                    justifyContent={{ tablet: "space-between" }}
                    component={motion.div}
                    variants={item}
                >
                    <Box
                        className={"sneak-peak-banner"}
                        component={motion.div}
                        variants={leftParent}
                        initial={"hidden"}
                        whileInView={"show"}
                    >
                        <SneakpeakBanner />
                    </Box>
                    <Stack
                        gap={{ mobile: "var(--flex-gap)", laptop: "calc(var(--flex-gap) * 2)" }}
                        className={"sneak-peak-controllers"}
                        alignItems={{ mobile: "center", laptop: "stretch" }}
                        justifyContent={{ tablet: "center" }}
                        component={motion.div}
                        variants={rightParent}
                        initial={"hidden"}
                        whileInView={"show"}
                    >
                        <Box
                            component={motion.div}
                            variants={rightChild}
                        >
                            <BaseButton
                                variant="contained"
                                background="#E40C5B"
                                startIcon={!renderMap && <PinDropIcon />}
                                sx={{ width: "100%", padding: "calc(var(--basic-padding) * 1) var(--basic-padding)" }}
                                fontweight={600}
                                fontsize={16}
                                onMouseOver={handleLocationButtonHoverIn}
                                onMouseOut={handleLocationButtonHoverOut}
                            >
                                {renderMap ? (
                                    <iframe title="location-map" className="gmap_iframe" width="100%" scrolling="no" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Emjmm hotels, 47 Dominic Utuk avenue&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                ) : (
                                    <Typography
                                        variant={"button"}
                                        fontFamily={"inherit"}
                                        fontWeight={"inherit"}
                                        fontSize={"inherit"}
                                        lineHeight={"inherit"}
                                        color={"inherit"}
                                        textTransform={"inherit"}
                                        textAlign={"left"}
                                        whiteSpace={"normal"}
                                    >
                                        Emjmm hotels, 47 Dominic Utuk Avenue, Uyo, Akwa Ibom.
                                    </Typography>
                                )}
                            </BaseButton>
                        </Box>
                        <Box
                            component={motion.div}
                            variants={rightChild}
                        >
                            <BaseButton
                                variant="contained"
                                background="#E40C5B"
                                startIcon={<CalendarMonthIcon />}
                                sx={{ width: { laptop: "100%" }, padding: "calc(var(--basic-padding) * 1) var(--basic-padding)" }}
                                fontweight={600}
                                fontsize={16}
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
                                    whiteSpace={"normal"}
                                >
                                    Sat. 08 March, 2025
                                </Typography>
                            </BaseButton>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
            <Grid2
                container
                spacing={"var(--flex-gap)"}
                justifyContent={"space-between"}
                className="sneak-peak-bottom-half"
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                {categories.map((category, index) => {
                    return (
                        <Grid2
                            key={index}
                            size={{ mobile: 6, tablet: 3 }}
                            component={motion.div}
                            variants={item}
                        >
                            <Card>
                                <CardContent>
                                    <Box
                                        component={"div"}
                                        className="question-mark-box"
                                    >
                                        <QuestionMarkIcon />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="body1"
                                            fontFamily={"IBM Plex Sans"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 14, tablet: 18, desktop: 24 }}
                                            lineHeight={"normal"}
                                            color={"#FFFFFF"}
                                            whiteSpace={"normal"}
                                            textAlign={"center"}
                                        >
                                            {category.title}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid2>
                    )
                })}
            </Grid2>
        </SneakpeakWrapper >
    )
}