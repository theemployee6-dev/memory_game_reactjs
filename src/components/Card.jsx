import React from "react";

const Card = ({ card, onClick }) => {
  // Evitar recriação da função onClick no callback, pode ser memoizada por componente pai para otimizações
  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={card.isFlipped}
      className={`card ${card.isFlipped ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={() => onClick(card)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(card);
        }
      }}
    >
      <div className="card-front" aria-hidden={card.isFlipped}>
        ?
      </div>
      <div className="card-back" aria-hidden={!card.isFlipped}>
        {card.value}
      </div>
    </div>
  );
};

export default React.memo(Card);
