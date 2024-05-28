import React from 'react';
import WordCard from '../WordCard/WordCard';
import './CardContainer.css';

export default function CardContainer({ words, deleteWord }) {

    const cardList = words.map( word =>
        <WordCard
            front={word.front}
            back={word.back}
            key={word.front}
            deleteWord={deleteWord} />
    );

    return (
        <section className="cards-container">
            {cardList}
        </section>
  )
}
