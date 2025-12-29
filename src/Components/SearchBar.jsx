import "../styles/Filters.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="filter-wrapper">
      <input
        type="text"
        placeholder="Search recipes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="filter-input"
      />
    </div>
  );
}
