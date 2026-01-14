import NewsCard from "./NewsCard";

const newsItems = [
    {
        title: "Book Your Equipment for Service/Repair",
        description: "To book your LSC, Robe or Avolites equipment in for service or repair, please complete our online Service/Repair Request Form.",
        image: "/uploads/cms/17643138456a75ktpyc1n6yqfcgbtakvjvqba2kd.jpg",
    },
    {
        tag: "",
        title: "LSC Control Systems Commences Distribution of Robe Lighting in ANZ",
        description: "LSC is proud to announce it is now the exclusive distributor of Robe Lighting products in Australia and New Zealand.",
        image: "",
    },
    {
        tag: "COMPANY NEWS",
        title: "LSC Appoints Kris Noerens as Business Development Manager for Europe",
        description: "Noerens, who joins the company from LSC's Benelux distributor, Controllux in Belgium, is a highly experienced theatre lighting professional.",
        image: "",
    },
];

const NewsSection = () => (
    <section className="bg-background py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {newsItems.map((item, index) => (
                    <NewsCard key={index} {...item} />
                ))}
            </div>
        </div>
    </section>
);

export default NewsSection;
