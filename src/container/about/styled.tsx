import { useContext } from "react";
import { Context } from "../../context";
import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const AboutWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 1.5)",
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 5)",
        }
    }
})