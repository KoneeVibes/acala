import { useContext } from "react";
import { BoxProps, Stack, styled } from "@mui/material";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const OrganizersWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "calc(var(--basic-padding) * 2.5) var(--basic-padding)",
        backgroundColor: "rgba(255, 76, 59, 0.11)",
        gap: "var(--flex-gap)",
        alignItems: "center",
        "& .organizers-text-box": {
            flex: 0.7,
            overflow: "hidden",
            [theme.breakpoints.down("tablet")]: {
                width: "100%"
            },
        },
        // "& .organizers-img-box": {
        //     flex: 0.4,
        //     overflow: "hidden",
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "top center",
        //     borderRadius: "10px",
        //     [theme.breakpoints.down("tablet")]: {
        //         minHeight: "25.25rem"
        //     }
        // },
        "& .organizers-img-box": {
            flex: 0.3,
            overflow: "hidden",
            borderRadius: "10px",
            "& svg": {
                borderRadius: "inherit",
            },
            [theme.breakpoints.down("miniTablet")]: {
                "& svg": {
                    width: "100%",
                    height: "auto"
                }
            },
            [theme.breakpoints.between("tablet", "laptop")]: {
                "& svg": {
                    width: "100%",
                    height: "auto",
                }
            },
            [theme.breakpoints.up("laptop")]: {
                "& svg": {
                    float: "right"
                }
            },
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            gap: "calc(var(--flex-gap) * 2)",
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding) * 1.5)",
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "calc(var(--basic-padding) * 5) calc(var(--basic-padding) * 2)",
        }
    }
})