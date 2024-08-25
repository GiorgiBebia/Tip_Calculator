export function LikeYou({ likeYouBill, setLikeYouBill, children }) {
  return (
    <div className="bill">
      {children}
      <select
        value={likeYouBill}
        onChange={(e) => setLikeYouBill(e.target.value)}
      >
        <option value={0}>Dissatisfield (0%)</option>
        <option value={5}>It Was Okay (5%)</option>
        <option value={10}>It Was Good (10%)</option>
        <option value={20}>Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}
