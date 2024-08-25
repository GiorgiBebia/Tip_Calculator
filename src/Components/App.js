import { useState } from "react";
import "../index.css";
import { SumTips } from "./SumTips";
import { LikeYou } from "./LikeYou";
import { Bill } from "./Bill";

export default function App() {
  const [giveBill, setGiveBill] = useState("");
  const [likeYouBill, setLikeYouBill] = useState(0);
  const [likeFriendBill, setLikeFriendBill] = useState(0);

  function reset() {
    setGiveBill("");
    setLikeYouBill(0);
    setLikeFriendBill(0);
  }

  return (
    <div className="d-flex flex-column gap-3 m-auto mt-4">
      <Bill giveBill={giveBill} setGiveBill={setGiveBill} />
      <LikeYou likeYouBill={likeYouBill} setLikeYouBill={setLikeYouBill}>
        <h3>How Did You Like The Service?</h3>
      </LikeYou>
      <LikeYou likeYouBill={likeFriendBill} setLikeYouBill={setLikeFriendBill}>
        <h3>How Did You Friend Like The Service?</h3>
      </LikeYou>
      <SumTips
        giveBill={giveBill}
        likeYouBill={likeYouBill}
        likeFriendBill={likeFriendBill}
        reset={reset}
      />
    </div>
  );
}
