import { BoxProps, Stack, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const SecureYourSpotWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        gap: "calc(var(--flex-gap)/2)",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        "& .secure-your-spot-img-box": {
            position: "relative",
            right: "calc(var(--basic-padding) * -1)",
            bottom: "calc(var(--basic-padding) * -1)",
            "& svg": {
                float: "right"
            },
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 1.5)",
            "& .secure-your-spot-img-box": {
                right: "calc(var(--basic-padding) * -1.5)",
                bottom: "calc(var(--basic-padding) * -2)",
            }
        },
        [theme.breakpoints.up("laptop")]: {
            gap: "var(--flex-gap)",
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding) * 2)",
            "& .secure-your-spot-img-box": {
                right: "calc(var(--basic-padding) * -2)",
                bottom: "calc(var(--basic-padding) * -3)",
            }
        }
    }
})