import { useContext } from "react";
import { Box, BoxProps, styled } from "@mui/material";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const AudienceWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        backgroundColor: "#F8E0DD",
        "& .MuiCard-root": {
            borderRadius: "10px",
            border: "1px solid #F8E0DD",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            height: "100%",
        },
        "& .MuiCardContent-root": {
            padding: "calc(var(--basic-padding)/8)",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            "&:last-child": {
                paddingBottom: "calc(var(--basic-padding)/8)",
            }
        },
        "& .audience-thumbnail-box": {
            borderRadius: "10px",
            backgroundColor: "#F8E0DD",
            flex: 0.2,
            overflow: "hidden",
            padding: "calc(var(--basic-padding)/4)",
            display: "flex",
            alignItems: "center",
            "& svg": {
                width: "100%",
                height: "auto"
            }
        },
        "& .audience-text-box": {
            padding: "var(--basic-padding)",
            flex: 0.8,
            overflow: "hidden",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 1.5)"
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding) * 2)",
        }
    }
})