import { Box, Grid2, Stack, Typography } from "@mui/material";
import { CountdownWrapper } from "./styled";
import Countdown, { zeroPad } from 'react-countdown';

export const CountdownToEventDay = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        if (completed) {
            // Render a completed state
            return;
        } else {
            return (
                <Grid2
                    container
                    component={"div"}
                    spacing={"var(--flex-gap)"}
                    justifyContent={"space-between"}
                >
                    <Grid2
                        size={{ mobile: 6, tablet: 3 }}
                    >
                        <Stack
                            className="period days-to-event"
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 40, tablet: 45, desktop: 64 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    {zeroPad(days)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 16, tablet: 19, desktop: 25 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    Days
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2
                        size={{ mobile: 6, tablet: 3 }}
                    >
                        <Stack
                            className="period hours-to-event"
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 40, tablet: 45, desktop: 64 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    {zeroPad(hours)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 16, tablet: 19, desktop: 25 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    Hours
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2
                        size={{ mobile: 6, tablet: 3 }}
                    >
                        <Stack
                            className="period minutes-to-event"
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 40, tablet: 45, desktop: 64 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    {zeroPad(minutes)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 16, tablet: 19, desktop: 25 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    Minutes
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2
                        size={{ mobile: 6, tablet: 3 }}
                    >
                        <Stack
                            component={"div"}
                            className="period seconds-to-event"
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 40, tablet: 45, desktop: 64 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    {zeroPad(seconds)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"IBM Plex Sans"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 16, tablet: 19, desktop: 25 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    textAlign={"center"}
                                >
                                    Seconds
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid2>
                </Grid2>
            );
        }
    }
    return (
        <CountdownWrapper>
            <Countdown
                date={new Date('2025-03-08T00:00:00')}
                renderer={renderer}
            />
        </CountdownWrapper>
    )
}