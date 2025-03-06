import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { AudienceWrapper } from "./styled";
import { audience } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Audience = () => {
    return (
        <AudienceWrapper>
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
                    marginBlockEnd={{ mobile: "calc(var(--basic-margin))", tablet: "var(--basic-margin)" }}
                >
                    Our Audience
                </Typography>
            </Box>
            <Grid2
                container
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                rowSpacing={"calc(var(--flex-gap)/2)"}
                columnSpacing={"calc(var(--flex-gap)/4)"}
                justifyContent={"space-between"}
            >
                {audience.map((category, index) => {
                    return (
                        <Grid2
                            key={index}
                            size={{ mobile: 12, tablet: 6, desktop: 4 }}
                            minHeight={"8.2rem"}
                            component={motion.div}
                            variants={item}
                        >
                            <Card>
                                <CardContent>
                                    <Box
                                        component={"div"}
                                        className={"audience-thumbnail-box"}
                                    >
                                        {category.thumbnail}
                                    </Box>
                                    <Box
                                        component={"div"}
                                        className={"audience-text-box"}
                                        sx={{ display: "flex", alignItems: "center" }}
                                    >
                                        <Typography
                                            variant="body1"
                                            fontFamily={"IBM Plex Sans"}
                                            fontWeight={600}
                                            fontSize={{ mobile: "20px", laptop: "22px" }}
                                            lineHeight={"normal"}
                                            color={"#000000"}
                                            whiteSpace={"normal"}
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
        </AudienceWrapper>
    )
}