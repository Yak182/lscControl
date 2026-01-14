import { ChevronRight} from "lucide-react";

const NewsCard = ({ tag, title, description, image, link = "#" }) => {
    return (
        <a href={link} className="block border border-border rounded-lg overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{tag}</span>
                <h3 className="text-2xl text-red-500 font-bold text-foreground mt-1 mb-2">{title}</h3>
                {description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
                )}
                <span className="inline-flex items-center text-white bg-red-500 px-2 py-1 text-xs text-primary mt-3 border border-solid border-transparent rounded-r-full">
          Read More <ChevronRight className="w-4 h-4 " />
        </span>
            </div>
        </a>
    );
};

export default NewsCard;
