import { Box, Stack, Typography } from "@mui/material";
import { FooterWrapper } from "./styled";
import { LogoII } from "../../asset";
import { footerInfo } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Footer = () => {
    return (
        <FooterWrapper
            id="contact"
        >
            <Stack
                gap={{ mobile: "calc(var(--flex-gap) * 2)", laptop: "var(--flex-gap)" }}
                direction={{ laptop: "row" }}
                justifyContent={"space-between"}
                borderBottom={"1px solid #FFFFFF"}
                className="footer-top-half"
            >
                <Box
                    component={motion.div}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    className="footer-logo-box"
                >
                    <motion.svg variants={item}>
                        <LogoII />
                    </motion.svg>
                </Box>
                <Stack
                    gap={{ mobile: "var(--flex-gap)" }}
                    component={motion.div}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                >
                    {footerInfo.about.map((link, index) => {
                        return (
                            <motion.a
                                variants={item}
                                key={index}
                                href={link.url}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={20}
                                    lineHeight={"normal"}
                                    color={"#FFFFFF"}
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {link.name}
                                </Typography>
                            </motion.a>
                        )
                    })}
                </Stack>
                <Stack
                    gap={{ mobile: "var(--flex-gap)" }}
                    component={motion.div}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                >
                    {footerInfo.others.map((link, index) => {
                        return (
                            <motion.a
                                variants={item}
                                key={index}
                                href={link.url}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={20}
                                    lineHeight={"normal"}
                                    color={"#FFFFFF"}
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {link.name}
                                </Typography>
                            </motion.a>
                        )
                    })}
                </Stack>
                <Stack
                    gap={{ mobile: "calc(var(--flex-gap)/2)" }}
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
                            variant="h3"
                            fontFamily={"IBM Plex Sans"}
                            fontWeight={600}
                            fontSize={{ mobile: "24px" }}
                            lineHeight={"normal"}
                            color={"#FFFFFF"}
                            whiteSpace={"normal"}
                        >
                            Contact Us
                        </Typography>
                    </Box>
                    <Stack
                        direction={"row"}
                        gap={{ mobile: "calc(var(--flex-gap)/4)" }}
                        overflow={"hidden"}
                        component={motion.div}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                    >
                        {footerInfo.contact.map((link, index) => {
                            return (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    variants={item}
                                >
                                    {link.icon}
                                </motion.a>
                            )
                        })}
                    </Stack>
                </Stack>
            </Stack>
            <Box
                className="footer-bottom-half"
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    variant="subtitle1"
                    component={motion.p}
                    variants={item}
                    fontFamily={"IBM Plex Sans"}
                    fontWeight={400}
                    fontSize={{ mobile: "16px" }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                    display={"flex"}
                    gap={"calc(var(--flex-gap)/4)"}
                    alignItems={"center"}
                >
                    <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Copyright
                    </Typography>
                    <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        &copy;
                    </Typography>
                    <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Acala Connect
                    </Typography>
                    <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        .
                    </Typography>
                    <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        All rights reserved.
                    </Typography>
                </Typography>
            </Box>
        </FooterWrapper >
    )
}