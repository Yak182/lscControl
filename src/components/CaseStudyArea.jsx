import NewsCard from "./NewsCard";

const caseStudies = [
    {
        tag: "CASE STUDY",
        title: "LSC adds UNITY power assurance to Hoorn's Park Theatre",
        description: "The Park Theatre in Hoorn upgraded its lighting from halogen to LED and needed reliable power management.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    },
    {
        tag: "INSTALLATION NEWS",
        title: "LSC counter corrosion at Sir Howard Morrison Centre",
        description: "Future proofing electronics for one of the harshest environments on earth.",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
    },
];

const CaseStudySection = () => {
    return (
        <section className="bg-secondary section-padding">
            <div className="section-container">
                <h2 className="section-title">Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudies.map((item, index) => (
                        <NewsCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
