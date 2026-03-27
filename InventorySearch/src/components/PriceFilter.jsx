const PriceFilter = ({ min, max, setMin, setMax }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <input
        type="number"
        placeholder="Min"
        className="border p-2 rounded w-full"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max"
        className="border p-2 rounded w-full"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
    </div>
  );
};

export default PriceFilter;