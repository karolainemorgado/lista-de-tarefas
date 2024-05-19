export default function FormInput({ label, value, type, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        className="border border-black"
        onChange={onChange}
      />
    </>
  );
}
