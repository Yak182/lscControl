import { useState, useEffect } from "react";
import Image1 from "../assets/images/Slide-1.jpg";
import Image2 from "../assets/images/Slide-2.jpg";
import Image3 from "../assets/images/Slide-3.jpg";

const slides = [
    { image: Image1, alt: "UNITY Power to Control - Theatre lighting equipment" },
    { image: Image2, alt: "LSC New Home of Robe ANZ" },
    { image: Image3, alt: "LSC Control Systems stage lighting" },
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="relative">
            <div className="h-[500px] md:h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt={slide.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
