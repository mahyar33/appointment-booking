import { Slot } from "../model/slot";

interface SlotsListProps {
  slots: Slot[] | null;
  onSelect: (slot: Slot | null) => void;
}

function SlotsList({ slots, onSelect }: SlotsListProps) {
  return (
    <div className="slots-list">
      {!slots && <p>Select Date</p>}
      {slots && <h2>Available Slots</h2>}
      {slots && slots.length === 0 && <p>No slots available.</p>}
      {slots &&
        slots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => !slot.booked && onSelect(slot)}
            disabled={slot.booked}
          >
            {new Date(slot.start_date).toLocaleTimeString("de-DE", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </button>
        ))}
    </div>
  );
}

export default SlotsList;
