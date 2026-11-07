export const FilterMenu = ({ label, options, value, onSelect }: any) => (
  <select aria-label={label} value={value} onChange={(e) => onSelect(e.target.value)}>
    {options.map((opt: string) => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
);