import "../css/BirthdayModal.css";

function BirthdayModal({ onClose }) {
  return (
    <div className="birthday-overlay">
      <div className="birthday-modal">

        <div className="modal-confetti c1"></div>
        <div className="modal-confetti c2"></div>
        <div className="modal-confetti c3"></div>
        <div className="modal-confetti c4"></div>
        <div className="modal-confetti c5"></div>
        <div className="modal-confetti c6"></div>

        <div className="birthday-circle">
          <div className="birthday-cake">
            <span></span>
            <i></i>
          </div>
        </div>

        <h1>Happy Birthday!!</h1>

        <div className="birthday-line"></div>

        <p>
          Enjoy your special day!
          <br />
          Make a wish and enjoy every moment.
        </p>

        <button onClick={onClose}>
          LET'S CELEBRATE
        </button>

      </div>
    </div>
  );
}

export default BirthdayModal;
