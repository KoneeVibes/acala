import { BoxProps, Stack, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const FooterWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        backgroundColor: "#E40C5B",
        "& .footer-top-half": {
            padding: "var(--basic-padding)",
            "& .footer-logo-box": {
                "& svg": {
                    maxHeight: "50px",
                },
                [theme.breakpoints.down(280)]: {
                    "& svg": {
                        width: "100%",
                        height: "auto",
                    }
                }
            }
        },
        "& .footer-bottom-half": {
            padding: "var(--basic-padding)",
        },
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.up("tablet")]: {
            marginTop: "-8px",
            "& .footer-top-half": {
                padding: "calc(var(--basic-padding) * 1) calc(var(--basic-padding) * 1.5)",
            },
            "& .footer-bottom-half": {
                padding: "calc(var(--basic-padding) * 1) calc(var(--basic-padding) * 1.5)",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .footer-top-half": {
                padding: "calc(var(--basic-padding) * 2) var(--basic-padding)",
            },
            "& .footer-bottom-half": {
                padding: "calc(var(--basic-padding) * 2) var(--basic-padding)",
            },
        }
    }
})