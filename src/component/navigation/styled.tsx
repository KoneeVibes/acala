import { useContext, useEffect } from "react";
import { Stack, StackProps, styled } from "@mui/material";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const NavigationWrapper = styled(Stack)<StackProps & MotionProps>(({ theme }) => {
    const { openMenu, setOpenMenu } = useContext(Context);
    useEffect(() => {
        const handleResize = () => {
            setOpenMenu(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setOpenMenu]);

    return {
        gap: "var(--flex-gap)",
        padding: "var(--basic-padding)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#FFFFFF",
        "& a": {
            textDecoration: "none",
        },
        "& .nav-links": {
            display: openMenu ? "flex" : "none",
            gap: "var(--flex-gap)",
            position: "absolute",
            top: "8.8rem",
            left: 0,
            right: 0,
            padding: "0 var(--basic-padding)",
            backgroundColor: "inherit",
        },
        "& .register-button": {
            display: openMenu ? "flex" : "none",
            position: "absolute",
            top: "calc(var(--mobile-nav-logo-box-height) + var(--mobile-nav-links-box-height))",
            left: 0,
            right: 0,
            padding: "var(--basic-padding)",
            overflow: "hidden",
            backgroundColor: "inherit",
        },
        "& .favicon-box": {
            "& svg": {
                width: "100%",
                height: "auto",
                cursor: "pointer",
            },
            [theme.breakpoints.down(280)]: {
                display: "none"
            }
        },
        "& .hamburger": {
            overflow: "hidden",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 1.5)"
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            "& .nav-links": {
                display: "flex",
                flexDirection: "row",
                position: "static",
                padding: 0,
            },
            "& .hamburger": {
                display: "none",
            },
            "& .register-button": {
                display: "block",
                position: "static",
                padding: 0,
            }
        }
    }
})