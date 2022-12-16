import travelData from '../travel-data';
import Note from './Note';
import './Notes.css';

function Notes () {
    var notes = travelData.map((item, i, arr) => {
        return (
            <Note 
                key={i}
                item={item}
                lastItem={arr.length - 1 === i}
            />
        );
    });

    return (
        <section className='notes-wrapper'>
            {notes}
        </section>
    )
}

export default Notes;