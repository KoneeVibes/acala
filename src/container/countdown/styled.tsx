import { useContext } from "react";
import { Context } from "../../context";
import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const CountdownWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        margin: "var(--basic-margin)",
        backgroundColor: "#E40C5B",
        borderRadius: "10px",
        "& .period": {
            backgroundColor: "#FCE2EB",
            padding: "var(--basic-padding)",
            borderRadius: "50%",
            overflow: "hidden",
            justifyContent: "space-between",
            flexShrink: 0,
            width: "2.3125rem",
            height: "3.3125rem",
            [theme.breakpoints.up("miniTablet")]: {
                width: "4.25rem",
                height: "4.25rem",
            },
            [theme.breakpoints.up("tablet")]: {
                width: "5.25rem",
                height: "5.25rem",
            },
            [theme.breakpoints.up("desktop")]: {
                width: "8.25rem",
                height: "8.25rem",
            }
        },
        "& .hours-to-event": {
            float: "right"
        },
        "& .seconds-to-event": {
            float: "right"
        },
        "& .MuiGrid2-root": {
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down(320)]: {
                overflow: "hidden",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            margin: "calc(var(--basic-margin) * 2) calc(var(--basic-margin) * 1.5)",
            "& .hours-to-event": {
                float: "none"
            },
            "& .seconds-to-event": {
                float: "none"
            },
        },
        [theme.breakpoints.up("laptop")]: {
            margin: "calc(var(--basic-margin) * 3) calc(var(--basic-margin) * 2)",
        }
    }
})