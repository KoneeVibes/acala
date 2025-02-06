import { useContext } from "react";
import { BoxProps, Stack, styled } from "@mui/material";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const OrganizersWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        backgroundColor: "rgba(255, 76, 59, 0.11)",
        gap: "var(--flex-gap)",
        "& .organizers-text-box": {
            flex: 0.6,
            overflow: "hidden",
        },
        "& .organizers-img-box": {
            flex: 0.4,
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            borderRadius: "10px",
            [theme.breakpoints.down("tablet")]: {
                minHeight: "25.25rem"
            }
        },
        [theme.breakpoints.up("tablet")]: {
            gap: "calc(var(--flex-gap) * 2)",
            flexDirection: "row",
            padding: "calc(var(--basic-padding) * 1.5)",
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding) * 2)",
        }
    }
})