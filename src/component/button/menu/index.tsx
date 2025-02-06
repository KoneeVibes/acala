import { useContext } from "react";
import { ButtonProps, Typography } from "@mui/material";
import { Hamburger } from "./styled";
import { Context } from "../../../context";
import { MotionProps } from "motion/dist/react";

export const MenuButton: React.FC<MotionProps & ButtonProps> = () => {
    const { openMenu, setOpenMenu } = useContext(Context);
    return (
        <Hamburger
            onClick={() => setOpenMenu(!openMenu)}
        >
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
        </Hamburger>
    )
}