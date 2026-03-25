const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search product..."
      className="border p-2 rounded w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;