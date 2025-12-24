export default function Entry (props) {
    return <>
        <article className="entry-container">
            <img src={props.data.img.src} alt={props.data.img.alt} className="location-img" />
            <div>
                <div className="location-container">
                    <img 
                    src="../../assets/location-marker.jpg" 
                    alt="location marker" 
                    className="location-marker-img" />
                    <p className="country-text">{props.data.country}</p>
                    <a href={props.data.googleMapsLink}
                    target="_blank">View on google maps</a>
                </div>
                <h1>{props.data.title}</h1>
                <h2>{props.data.dates}</h2>
                <p>{props.data.text}</p>
            </div>
        </article>
    </>
}