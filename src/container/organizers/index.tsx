import { Box, Stack, Typography } from "@mui/material";
import { OrganizersWrapper } from "./styled";
import unwana from "../../asset/image/unwanaimg.svg";
import { motion } from "motion/react";
import { container } from "../../config/verticalSlideIn";
import { leftChild, leftParent, rightParent } from "../../config/horizontalSlideIn";

export const Organizers = () => {
    return (
        <OrganizersWrapper
            component={motion.div}
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            <Stack
                component={motion.div}
                variants={leftParent}
                initial={"hidden"}
                whileInView={"show"}
                gap={{ mobile: "calc(var(--flex-gap)/2)", tablet: "calc(var(--flex-gap) * 1.5)" }}
                className="organizers-text-box"
            >
                <Box
                    component={motion.div}
                    variants={leftChild}
                >
                    <Box>
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
                            Who Are The Organisers?
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            fontFamily={"IBM Plex Sans"}
                            fontWeight={400}
                            fontSize={{ mobile: "16px", desktop: "24px" }}
                            lineHeight={"normal"}
                            color={"#000000"}
                            textAlign={"center"}
                            whiteSpace={"normal"}
                            sx={{ textWrapStyle: "balance" }}
                        >
                            Unwana Archibong is a seasoned DeFi expert and blockchain advocate dedicated to advancing decentralized finance across Africa. As Acala Network’s Regional Lead, he drives initiatives to raise awareness, build strong communities, and create strategic partnerships to expand Acala’s presence in the region.
                            With a proven track record in the crypto space, Unwana has successfully helped blockchain projects penetrate the African market through meetups, events, AMAs, and collaborations. His passion for financial inclusion and innovation fuels his commitment to connecting Web3 projects with local communities, accelerating blockchain adoption across Africa and beyond.
                            Alongside his team of skilled experts and technocrats, they aim to bring the innovations of Acala network to the African region.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    component={motion.div}
                    variants={leftChild}
                >
                    <Box>
                        <Typography
                            variant="h2"
                            fontFamily={"IBM Plex Sans"}
                            fontWeight={600}
                            fontSize={{ mobile: "22px", tablet: "32px" }}
                            lineHeight={"normal"}
                            color={"#000000"}
                            whiteSpace={"normal"}
                            textAlign={"center"}
                            marginBlockEnd={{ mobile: "calc(var(--basic-margin)/2)" }}
                        >
                            Vision Statement
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            fontFamily={"IBM Plex Sans"}
                            fontWeight={400}
                            fontSize={{ mobile: "16px", desktop: "24px" }}
                            lineHeight={"normal"}
                            color={"#000000"}
                            textAlign={"center"}
                            whiteSpace={"normal"}
                        >
                            The core vision is aimed at setting the tone for a good convergent that will foster formidable collaborations.
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Box
                component={motion.div}
                variants={rightParent}
                initial={"hidden"}
                whileInView={"show"}
                className="organizers-img-box"
                style={{
                    backgroundImage: `url(${unwana})`
                }}
            />
        </OrganizersWrapper>
    )
}