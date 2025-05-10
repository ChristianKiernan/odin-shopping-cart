const Content = ({ pageType }) => {
    let content;
    if (pageType === "homepage") {
        content = (
            <div className="contentCard">
                <h2>Our Fake Store</h2>
                <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem
                </p>
            </div>
        );
    } else if (pageType === "shop") {
        content = (
            <div className="contentCard">
                <h2>Fake Store</h2>
                <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem
                </p>
            </div>
        );
    }
    return content;
};

export default Content;
