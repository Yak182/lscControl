import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative">
            <div className="h-[400px] md:h-[500px]">
                <img
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].alt}
                    className="w-full h-full object-cover"
                />
            </div>

            <button
                className="carousel-btn left-4"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <ChevronLeft className="absolute text-slate-100  top-1/2 left-4  w-8 h-8 text-foreground hover:text-opacity-20" />
            </button>

            <button
                className="carousel-btn right-4"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <ChevronRight className="absolute text-slate-100 top-1/2 right-4 w-8 h-8 text-foreground hover:text-opacity-20" />
            </button>
        </section>
    );
};

export default HeroCarousel;
