import { CheckCircle } from "lucide-react";
import '../../App.css'

export default function SuccessModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <CheckCircle size={48} className="modal-icon" />
        <h3>Message Sent</h3>
        <p>Thank you! We’ll get back to you shortly.</p>
        <button className="modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
