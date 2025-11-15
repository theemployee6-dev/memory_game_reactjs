const WinMessage = ({ moves }) => {
  return (
    <div className="win-message">
      <h2>Parabéns!</h2>
      <p>Você completou o jogo com {moves} movimentos</p>
    </div>
  );
};

export default WinMessage;
