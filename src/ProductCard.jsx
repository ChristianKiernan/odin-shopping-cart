import { useEffect, useState } from "react";
import AddItem from "./AddItem";

const FetchData = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data.slice(2, 8));
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { products, error, loading };
};

const ProductCard = () => {
    const { products, error, loading } = FetchData();

    const toCapitalCase = (category) => {
        const newString = category.charAt(0).toUpperCase() + category.slice(1);
        return newString;
    };

    const toPrice = (price) => {
        let priceString = price.toString();
        if (priceString.includes(".")) {
            return `$${priceString}`;
        }
        return `$${priceString}.00`;
    };

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="productItems">
            {products.map((product) => (
                <div className="productCard" key={product.id}>
                    <img
                        src={product.image}
                        alt={product.title}
                        width="250px"
                        height="250px"
                    />
                    <h2>{product.title}</h2>
                    <AddItem itemPrice={product.price}/>
                    <p>{toCapitalCase(product.category)}</p>
                    <h4>{toPrice(product.price)}</h4>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
