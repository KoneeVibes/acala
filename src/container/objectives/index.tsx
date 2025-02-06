import { Box, Card, CardContent, Typography } from "@mui/material";
import { ObjectivesWrapper } from "./styled";
import { objectives } from "../../config/static";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Objectives = () => {
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
                className="objectives-marquee-box"
            >
                <Marquee
                    autoFill={true}
                    pauseOnHover={true}
                    pauseOnClick={true}
                >
                    {objectives.map((objective, index) => {
                        return (
                            <Card
                                key={index}
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
                        )
                    })}
                </Marquee>
            </Box>
        </ObjectivesWrapper>
    )
}