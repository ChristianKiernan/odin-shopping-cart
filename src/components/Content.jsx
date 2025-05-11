import ProductCard from "./ProductCard";
import ContentCard from "./ContentCard";
import { Fragment } from "react";

const Content = ({ pageType = "homepage", addToCart }) => {
    return (
        <>
            {pageType === "homepage" ? (
                <Fragment>
                    <ContentCard
                        heading="About Our Fakeness"
                        text=" Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem"
                    />
                    <ContentCard
                        heading="Some Fake Info"
                        text=" Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem"
                    />
                    <ContentCard
                        heading="A Fake Section"
                        text=" Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem"
                    />
                </Fragment>
            ) : (
                <ProductCard addToCart={addToCart}/>
            )}
        </>
    );
};

export default Content;
