import { Box, Card, CardContent, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { ObjectivesWrapper } from "./styled";
import { objectives } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { chunkArray } from "../../config/chunkArray";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Objectives = () => {
    const matchesMobile = useMediaQuery('(max-width:650px)');
    const matchesLaptop = useMediaQuery('(max-width:1024px)');
    const matchesDesktop = useMediaQuery('(max-width:1280px)');

    const groupItemCount = matchesMobile ? 1 : matchesLaptop ? 2 : matchesDesktop ? 3 : 3;

    return (
        <ObjectivesWrapper
            component={motion.div}
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            <Box
                component={motion.div}
                variants={item}
                className="objectives-header"
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
                    Objectives of the Acala Connect
                </Typography>
            </Box>
            <Box
                component={motion.div}
                variants={item}
                className="objectives-carousel-box"
            >
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    renderArrowPrev={(clickHandler, hasPrev, label) => {
                        return (
                            hasPrev && (
                                <IconButton
                                    onClick={clickHandler}
                                    sx={{
                                        position: 'absolute',
                                        left: 15,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        zIndex: 2,
                                        cursor: 'pointer',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        borderRadius: '50%',
                                        padding: 'calc(var(--basic-padding)/2)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 1)',
                                        }
                                    }}
                                >
                                    <ArrowBackIcon sx={{ color: "#000000" }} />
                                </IconButton>
                            )
                        )
                    }}
                    renderArrowNext={(clickHandler, hasNext, label) => {
                        return (
                            hasNext && (
                                <IconButton
                                    onClick={clickHandler}
                                    sx={{
                                        position: 'absolute',
                                        right: 15,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        zIndex: 2,
                                        cursor: 'pointer',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        borderRadius: '50%',
                                        padding: 'calc(var(--basic-padding)/2)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 1)',
                                        }
                                    }}
                                >
                                    <ArrowForwardIcon sx={{ color: "#000000" }} />
                                </IconButton>
                            )
                        )
                    }}
                >
                    {chunkArray(objectives, groupItemCount).map((group: any[], groupIndex: string) => (
                        <Stack
                            key={groupIndex}
                            direction={"row"}
                            gap={"var(--flex-gap)"}
                            className="grouped-objectives-stack"
                        >
                            {group.map((objective, objectiveIndex) => (
                                <Card
                                    key={objectiveIndex}
                                >
                                    <CardContent
                                        sx={{
                                            background: objective.hue
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                fontFamily={"IBM Plex Sans"}
                                                fontWeight={500}
                                                fontSize={{ mobile: "20px" }}
                                                lineHeight={"normal"}
                                                color={objective.color}
                                                whiteSpace={"normal"}
                                                textAlign={"left"}
                                                marginBlockEnd={"calc(var(--basic-margin)/2)"}
                                            >
                                                {objective.title}
                                            </Typography>
                                        </Box>
                                        <Box
                                            component={"div"}
                                            className="objective-body-box"
                                            sx={{
                                                backgroundImage: `url(${objective.bg})`
                                            }}
                                        >
                                            <Typography
                                                variant="h2"
                                                fontFamily={"IBM Plex Sans"}
                                                fontWeight={400}
                                                fontSize={{ mobile: "12px" }}
                                                lineHeight={"normal"}
                                                color={"#FFFFFF"}
                                                whiteSpace={"normal"}
                                            >
                                                {objective.body}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    ))}
                </Carousel>
            </Box >
        </ObjectivesWrapper >
    )
}