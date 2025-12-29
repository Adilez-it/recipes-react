import { useEffect, useState } from "react";
import { fetchAllTags } from "../service/recipes";
import "../styles/Filters.css";

export default function FilterTags({ value, onChange }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchAllTags().then(setTags);
  }, []);

  return (
    <div className="filter-wrapper">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="filter-select"
      >
        <option value="">All tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </div>
  );
}
