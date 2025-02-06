import { useContext } from "react";
import { BoxProps, Stack, styled } from "@mui/material";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const SneakpeakWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        gap: "var(--flex-gap)",
        position: "relative",
        background: "linear-gradient(180deg,  #FFFFFF 0%, #645AFF 100%)",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        "& .sneak-peak-banner": {
            flex: 0.7,
            overflow: "hidden",
            "& svg": {
                width: "100%",
                height: "auto"
            }
        },
        "& .sneak-peak-controllers": {
            flex: 0.3,
            overflow: "hidden",
            "& iframe": {
                borderRadius: "inherit",
                border: "none",
            },
            "& .thumbnail": {
                borderRadius: "inherit",
                width: "100%",
                height: "auto",
            }
        },
        "& .MuiCard-root": {
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#645AFF",
        },
        "& .MuiCardContent-root": {
            padding: "var(--basic-padding)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "var(--flex-gap)",
            justifyContent: "space-between",
            "&:last-child": {
                paddingBottom: "var(--basic-padding)",
            }
        },
        "& .question-mark-box": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 1.5)",
            "& .sneak-peak-top-half": {
                padding: "0 calc(var(--basic-padding) * 1.5)",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            gap: "calc(var(--flex-gap) * 2)",
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding) * 2)",
            "& .sneak-peak-top-half": {
                padding: "0 calc(var(--basic-padding) * 4)",
            },
        }
    }
})