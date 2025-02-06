import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonPropTypes } from "../../type/component.type";
import { MotionProps } from "motion/dist/react";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropTypes & MotionProps>(({ variant, fontsize, radius, padding, border, background }) => {
    return {
        fontFamily: "IBM Plex Sans",
        fontWeight: 400,
        fontSize: fontsize || 22,
        lineHeight: "normal",
        borderRadius: radius || "10px",
        border: border || "none",
        color: "#FFFFFF",
        background: (variant === "contained") ? background : "transparent",
        padding: padding || "calc(var(--basic-padding)/2) calc(var(--basic-padding))",
        textTransform: "capitalize",
        minWidth: 0,
        "&:hover": {
            border: border || "none",
            background: (variant === "contained") ? background : "transparent",
        }
    }
})