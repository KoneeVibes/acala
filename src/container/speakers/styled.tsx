import { useContext } from "react";
import { Context } from "../../context";
import { BoxProps, Stack, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const SpeakersWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        gap: "var(--flex-gap)",
        position: "relative",
        backgroundColor: "#645AFF1F",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        "& .speaker": {
            width: "100%",
            "& svg": {
                width: "100%",
                height: "auto",
            }
        },
        "& .MuiGrid2-root": {
            [theme.breakpoints.down(320)]: {
                overflow: "hidden",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 1.5)",
            "& .speakers-top-half": {
                padding: "0 var(--basic-padding)",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding) * 2)",
            "& .speakers-top-half": {
                padding: "0 calc(var(--basic-padding) * 4)",
            },
        }
    }
})