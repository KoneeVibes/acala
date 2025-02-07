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
            display: "none",
            position: "relative",
            right: "calc(var(--basic-padding) * -1)",
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            padding: "0 calc(var(--basic-padding) * 1.5)",
            "& .secure-your-spot-text-area": {
                padding: "calc(var(--basic-padding) * 2) 0",
            },
            "& .secure-your-spot-img-box": {
                display: "block",
                right: "calc(var(--basic-padding) * -1.5)",
            }
        },
        [theme.breakpoints.up("laptop")]: {
            gap: "var(--flex-gap)",
            padding: "0 calc(var(--basic-padding) * 2)",
            "& .secure-your-spot-text-area": {
                padding: "calc(var(--basic-padding) * 3) 0",
            },
            "& .secure-your-spot-img-box": {
                right: "calc(var(--basic-padding) * -2)",
            }
        }
    }
})