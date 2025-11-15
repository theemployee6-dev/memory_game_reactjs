import React from "react";

const GameHeader = React.memo(({ score, moves, onReset }) => {
  return (
    <header className="game-header" role="banner">
      <h1>🎮 Memory Card Game</h1>
      <div className="stats" aria-live="polite" aria-atomic="true">
        <div className="stat-item">
          <span className="stat-label">Score:</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Moves:</span>
          <span className="stat-value">{moves}</span>
        </div>
      </div>
      <button
        className="reset-btn"
        onClick={onReset}
        aria-label="Start a new game"
        type="button"
      >
        New Game
      </button>
    </header>
  );
});

export default GameHeader;
