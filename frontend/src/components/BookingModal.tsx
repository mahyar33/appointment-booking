import { useMemo, useState } from "react";
import Modal from "react-modal";
import { Slot } from "../model/slot";

Modal.setAppElement("#root");

interface BookingModalProps {
  modalData: Slot;
  onClose: () => void;
  onConfirm: (value: string) => void;
}

function BookingModal({ modalData, onConfirm, onClose }: BookingModalProps) {
  const [name, setName] = useState("");

  const handleConfirm = async () => {
    onConfirm(name);
    onClose();
    alert("Booking Confirmed!");
  };
  const formattedStartDate = useMemo(
    () => new Date(modalData.start_date),
    [modalData.start_date]
  );

  const formattedEndDate = useMemo(
    () => new Date(modalData.end_date),
    [modalData.end_date]
  );

  const date = useMemo(
    () => formattedStartDate.toLocaleDateString("de-DE"),
    [formattedStartDate]
  );

  const time = useMemo(
    () =>
      formattedStartDate.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    [formattedStartDate]
  );

  const duration = useMemo(
    () =>
      Math.floor(
        (formattedEndDate.getTime() - formattedStartDate.getTime()) / 60000
      ),
    [formattedStartDate, formattedEndDate]
  );

  return (
    <Modal isOpen={!!modalData} onRequestClose={() => onClose()}>
      <h2>Book this slot?</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Duration: {duration}</p>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => onClose()}>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </Modal>
  );
}

export default BookingModal;
