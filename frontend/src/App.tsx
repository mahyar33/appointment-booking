import { useState } from "react";
import DatePicker from "./components/DatePicker";
import SlotsList from "./components/SlotsList";
import BookingModal from "./components/BookingModal";
import "./App.css";
import { bookSlot, getAvailableSlots } from "./services/api";
import { Slot } from "./model/slot";

function App() {
  const [slots, setSlots] = useState<Slot[] | null>(null);
  const [modalData, setModalData] = useState<Slot | null>(null);

  const getAvailableSlotsByDate = async (date: Date): Promise<Slot[]> => {
    const offset = date.getTimezoneOffset();
    const newDate = new Date(date.getTime() - offset * 60 * 1000);
    const formattedDate = newDate.toISOString().split("T")[0];
    const availableSlots = await getAvailableSlots(formattedDate);
    return availableSlots;
  };

  const handleDateChange = async (date: Date) => {
    const availableSlots = await getAvailableSlotsByDate(date);
    setSlots(availableSlots);
  };

  const handleModalConfirm = async (name: string) => {
    await bookSlot(modalData!.id, name);
    const formattedDate = modalData!.start_date.split("T")[0];
    const availableSlots = await getAvailableSlots(formattedDate);
    setSlots(availableSlots);
  };
  const handleModalClose = () => {
    setModalData(null);
  };

  return (
    <div className="App">
      <h1>Appointment Booking</h1>
      <DatePicker onChange={handleDateChange} />
      <SlotsList slots={slots} onSelect={setModalData} />
      {modalData && (
        <BookingModal
          modalData={modalData}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        />
      )}
    </div>
  );
}

export default App;
