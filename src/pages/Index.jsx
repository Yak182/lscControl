import { Helmet } from "react-helmet-async";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import NewsSection from "../components/NewsSection.jsx";
import CaseStudyArea from "../components/CaseStudyArea.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
    return (
        <>
            <Helmet>
                <title>LSC Control Systems - Professional Lighting Control Equipment</title>
                <meta
                    name="description"
                    content="LSC Control Systems is a leading manufacturer of professional lighting control equipment, serving the entertainment industry worldwide."
                />
            </Helmet>

            <div className="min-h-screen bg-background hidden md:block">
                <Header />
                <main>
                    <Hero />
                    <NewsSection />
                    <CaseStudyArea />
                </main>
                <Footer />
            </div>

            {/* Mobile message */}
            <div className="min-h-screen bg-background flex items-center justify-center p-8 md:hidden">
                <p className="text-center text-muted-foreground">
                    This site is optimized for desktop viewing. Please visit on a larger screen.
                </p>
            </div>
        </>
    );
};

export default Index;
