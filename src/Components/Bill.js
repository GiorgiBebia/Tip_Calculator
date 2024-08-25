export function Bill({ giveBill, setGiveBill }) {
  return (
    <div className="bill">
      <h3>How Much Was The Bill?</h3>
      <input
        type="number"
        step="0.01"
        value={giveBill}
        onChange={(e) => setGiveBill(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}
