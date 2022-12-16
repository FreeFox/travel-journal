import './Note.css';
import markerImg from './images/marker.png'

function Note ({item: {title, location, googleMapsLink, startDate, endDate, description, imageUrl}, lastItem}) {
    return (
        <>
            <div className="note">
                <img src={imageUrl} alt="note" />
                <div className="info">
                    <div className="note-header">
                        <img src={markerImg} alt='marker' />
                        <span className='location'>{location}</span>
                        <a className='gmaps-link' href={googleMapsLink}>View on Google Maps</a>
                    </div>
                    <h2>{title}</h2>
                    <div className="dates">
                        {startDate} - {endDate}
                    </div>
                    <div className='description'>
                        {description}
                    </div>
                </div>
            </div>
            {!lastItem && <hr />}
        </>
    )
}

export default Note;