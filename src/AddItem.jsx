import { useState } from "react"
const AddItem = ({itemPrice}) => {
    const [itemCount, setItemCount] = useState(0);

    const handleClick = () => {
        setItemCount(itemCount + 1)
    };

    return (
        <>
            <button onClick={handleClick}>Add to Cart</button>
            <p>Current count: {itemCount}</p>
        </>
    );
}

export default AddItem;