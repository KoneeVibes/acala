import { useContext } from "react";
import { Context } from "../../context";
import { BoxProps, Stack, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const CollaboratorsWrapper = styled(Stack)<BoxProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "calc(var(--mobile-nav-links-box-height) + var(--mobile-nav-CTA-button-box-height) + var(--flex-gap))" : "0",
        padding: "var(--basic-padding)",
        gap: "calc(var(--flex-gap)/2)",
        backgroundColor: "#FFFFFF",
        "& .collaborator": {
            background: "#EDEDED",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--basic-padding)",
            borderRadius: "50%",
            width: "3.8125rem",
            height: "3.8125rem",
            overflow: "hidden",
            flexShrink: 0,
            [theme.breakpoints.up("miniTablet")]: {
                width: "5.8125rem",
                height: "5.8125rem",
            },
            [theme.breakpoints.up("tablet")]: {
                width: "9.8125rem",
                height: "9.8125rem",
            },
            [theme.breakpoints.up("laptop")]: {
                width: "3.8125rem",
                height: "3.8125rem",
            },
            [theme.breakpoints.up("desktop")]: {
                width: "6.8125rem",
                height: "6.8125rem",
            },
            [theme.breakpoints.up("xl")]: {
                width: "7.8125rem",
                height: "7.8125rem",
            },
            [theme.breakpoints.up(1640)]: {
                width: "9.8125rem",
                height: "9.8125rem",
            }
        },
        "& .MuiGrid2-root": {
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down(320)]: {
                overflow: "hidden",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-margin) * 2) calc(var(--basic-padding) * 1.5)"
        },
        [theme.breakpoints.up("laptop")]: {
            gap: "var(--flex-gap)",
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding) * 2)",
        }
    }
})