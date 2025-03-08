import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { NavigationWrapper } from "./styled";
import { Logo } from "../../asset";
import { BaseButton } from "../button/styled";
import { navLinks } from "../../config/static";
import { MenuButton } from "../button/menu";

export const Navigation = () => {
    const navigate = useNavigate();
    const { openMenu } = useContext(Context);

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleNavigateToLuma = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return window.open("https://lu.ma/u7bcq812", "_blank")
    };

    const scrollWithOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -140.8; //to account for minimum nav height
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    useEffect(() => {
        const navbar = document.getElementById("nav");

        const handleScroll = () => {
            if (window.scrollY > 140.8) {
                navbar?.classList.add("sticky-nav");
            } else {
                navbar?.classList.remove("sticky-nav");
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Call handleScroll immediately when openMenu changes
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [openMenu]);

    return (
        <NavigationWrapper
            id="nav"
            style={{ boxShadow: openMenu ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
            <Box
                component={"div"}
                className="favicon-box"
            >
                <Logo
                    onClick={handleLogoClick}
                />
            </Box>
            <Stack
                className="nav-links"
                gap={{ mobile: "var(--flex-gap)" }}
                direction={{ laptop: "row" }}
            >
                {navLinks.map((navLink, index) => {
                    return (
                        <HashLink
                            key={index}
                            to={navLink.url}
                            smooth={true}
                            scroll={(el) => scrollWithOffset(el)}
                        >
                            <Typography
                                variant="subtitle1"
                                fontFamily={"IBM Plex Sans"}
                                fontWeight={400}
                                fontSize={20}
                                lineHeight={"normal"}
                                color={"#000000"}
                                sx={{
                                    cursor: "pointer",
                                }}
                            >
                                {navLink.name}
                            </Typography>
                        </HashLink>
                    )
                })}
            </Stack>
            <Box
                component={"div"}
                className="register-button"
                sx={{ boxShadow: !openMenu ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <BaseButton
                    variant="contained"
                    background="#E40C5B"
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
                    >
                        Register
                    </Typography>
                </BaseButton>
            </Box>
            <Box
                component={"div"}
                className="hamburger"
            >
                <MenuButton />
            </Box>
        </NavigationWrapper>
    )
}