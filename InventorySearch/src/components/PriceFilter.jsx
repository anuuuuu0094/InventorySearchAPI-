const PriceFilter = ({ min, max, setMin, setMax }) => {
  return (
    <div className="flex gap-2">
      <input
        type="number"
        placeholder="Min"
        className="border p-2 rounded"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max"
        className="border p-2 rounded"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
    </div>
  );
};

export default PriceFilter;