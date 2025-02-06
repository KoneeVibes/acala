import { useContext } from "react";
import { Context } from "../../context";
import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const ObjectivesWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        "& .objectives-header": {
            padding: "0 var(--basic-padding)",
        },
        "& .MuiCard-root": {
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%"
        },
        "& .MuiCardContent-root": {
            padding: "var(--basic-padding)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            "&:last-child": {
                paddingBottom: "var(--basic-padding)",
            }
        },
        "& .objectives-marquee-box": {
            "& .rfm-marquee-container": {
                gap: "var(--flex-gap)",
            },
            "& .rfm-child": {
                maxWidth: "24.5rem"
            },
            "& .rfm-marquee, & .rfm-initial-child-container": {
                gap: "var(--flex-gap)",
                alignItems: "stretch"
            }
        },
        "& .objective-body-box": {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            height: "19.5rem",
            borderRadius: "20px",
            padding: "calc(var(--basic-padding)/2)",
            display: "flex",
            alignItems: "flex-end"
        },
        [theme.breakpoints.up("tablet")]: {
            "& .objectives-header": {
                padding: "0 var(--basic-padding)",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .objectives-header": {
                padding: "0 var(--basic-padding)",
            },
        }
    }
})