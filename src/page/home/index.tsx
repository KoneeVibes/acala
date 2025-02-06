import { Footer } from "../../component/footer";
import { Navigation } from "../../component/navigation";
import { About } from "../../container/about";
import { Audience } from "../../container/audience";
import { Collaborators } from "../../container/collaborators";
import { CountdownToEventDay } from "../../container/countdown";
import { Hero } from "../../container/hero";
import { Objectives } from "../../container/objectives";
import { Organizers } from "../../container/organizers";
import { SecureYourSpot } from "../../container/securespot";
import { Sneakpeak } from "../../container/sneakpeak";
import { Speakers } from "../../container/speakers";
import { HomeWrapper } from "./styled";

export const Home = () => {
    return (
        <HomeWrapper>
            <Navigation />
            <Hero />
            <About />
            <Objectives />
            <CountdownToEventDay />
            <Organizers />
            <Sneakpeak />
            <Audience />
            <Collaborators />
            <Speakers />
            <SecureYourSpot />
            <Footer />
        </HomeWrapper>
    )
}