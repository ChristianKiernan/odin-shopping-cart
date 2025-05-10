import { useEffect, useState } from "react";

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
                setProducts(data.slice(0, 6));
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

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="contentCard">
            {products.map((product) => (
                <div key={product.id}>
                    <img
                        src={product.image}
                        alt={product.title}
                        width="200px"
                        height="200px"
                    />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
