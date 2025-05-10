import ProductCard from "./ProductCard";
import ContentCard from "./ContentCard";

const Content = ({ pageType }) => {
    return (
        <>
            {pageType === "homepage" ? (
                <ContentCard
                    heading="Our Fake Store"
                    text=" Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem"
                />
            ) : (
                <ProductCard />
            )}
        </>
    );
};

export default Content;
