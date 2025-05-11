const ContentCard = ({ heading, text }) => {
    return (
        <div className="contentCard">
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    );
};

export default ContentCard;
