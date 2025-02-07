import { useContext } from "react";
import { Context } from "../../context";
import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const ObjectivesWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "0 var(--basic-padding)",
        "& .grouped-objectives-stack": {
            height: "100%"
        },
        "& .MuiCard-root": {
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
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
            padding: "0 calc(var(--basic-padding) * 1.5)"
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "0 calc(var(--basic-padding) * 2)"
        }
    }
})