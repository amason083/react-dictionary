import React from 'react';
import './WordCard.css'

export default function WordCard({front, back, deleteWord}) {
    const [isFront, setFront] = React.useState(true);

    const cardContent = 
        isFront ?
        <div className="card-front">English: {front}</div> :
        <div className="card-back">German: {back}</div>;

    //automatice binding prvents context binding issues so used this as default.

    const handleFlip = (/* e */) => {
        // e.preventDefault(); // in case of form fields, use this
        setFront(!isFront);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteWord(front);
    }

    

    return (
        <div className="word-card" onClick={handleFlip}>
            <span className="delete-card" onClick={handleDelete}>X</span>
            {cardContent}
        </div>

  )
}