import { useContext } from "react";
import { Context } from "../../context";
import { Box, BoxProps, styled } from "@mui/material";
import herobg from "../../asset/image/herobg.svg";
import { MotionProps } from "motion/dist/react";

export const HeroWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        padding: "var(--basic-padding)",
        borderTop: "2px solid #000000",
        display: "flex",
        alignItems: "center",
        height: "24.625rem",
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        "& .hero-text": {
            width: "100%",
            [theme.breakpoints.up("miniTablet")]: {
                width: "60%",
            }
        },
        "& .hero-register-box": {
            display: "none",
            position: "absolute",
            bottom: "var(--basic-padding)",
            right: 0
        },
        [theme.breakpoints.up("tablet")]: {
            height: "34.625rem",
            padding: "var(--basic-padding) calc(var(--basic-padding) * 1.5)",
            "& .hero-register-box": {
                display: "block",
                "& svg": {
                    // animation: "rotate360 5s linear infinite",
                }
            },
        },
        [theme.breakpoints.up("laptop")]: {
            height: "33.625rem",
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
        }
    }
})