export default function Checkbox({ title, checked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} /> {title}
    </label>
  );
}
