import { useContext } from "react";
import { Context } from "../../context";
import { BoxProps, Stack, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const CollaboratorsWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        gap: "calc(var(--flex-gap)/2)",
        backgroundColor: "#FFFFFF",
        padding: "var(--basic-padding) 0",
        "& .collaborators-title-section, & .collaborators-subtitle-section, & .collaborators-button-box": {
            padding: "0 var(--basic-padding)",
        },
        "& .MuiGrid2-root": {
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down(320)]: {
                overflow: "hidden",
            }
        },
        "& .rfm-marquee-container, & .rfm-marquee": {
            gap: "var(--flex-gap)",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-margin) * 2) 0",
            "& .collaborators-title-section, & .collaborators-subtitle-section": {
                padding: "0 calc(var(--basic-padding) * 1.5)"
            },
        },
        [theme.breakpoints.up("laptop")]: {
            gap: "var(--flex-gap)",
            padding: "calc(var(--basic-padding) * 3) 0",
            "& .collaborators-title-section, & .collaborators-subtitle-section": {
                padding: "0 calc(var(--basic-padding) * 2)",
            },
        }
    }
})

