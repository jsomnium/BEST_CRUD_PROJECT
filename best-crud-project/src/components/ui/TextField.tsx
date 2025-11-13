type props = {
  label?: string;
  placeholder?: string;
};

export default function TextField({ label, placeholder }: props) {
  return (
    <>
      <label className="mb-2">{label}</label>
      <input
        type="text"
        aria-label={placeholder}
        placeholder={placeholder}
        className="border-grey-350 focus:border-primary w-full rounded-xl border px-4 py-2 focus:outline-none"
      />
    </>
  );
}
