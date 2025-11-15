import React from "react";

const WinMessage = ({ moves }) => {
  return (
    <div
      className="win-message"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <h2>Parabéns!</h2>
      <p>
        Você completou o jogo com {moves}{" "}
        {moves === 1 ? "movimento" : "movimentos"}
      </p>
    </div>
  );
};

export default React.memo(WinMessage);
