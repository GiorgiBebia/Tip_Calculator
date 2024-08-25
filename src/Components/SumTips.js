export function SumTips({ giveBill, likeYouBill, likeFriendBill, reset }) {
  return (
    <>
      {giveBill > 0 && (
        <div className="m-auto mt-4">
          <h2>
            You Pay ${" "}
            {(
              giveBill +
              (giveBill * (likeYouBill / 100) +
                giveBill * (likeFriendBill / 100))
            ).toFixed(2)}{" "}
            (${giveBill.toFixed(2)} + $
            {(
              giveBill * (likeYouBill / 100) +
              giveBill * (likeFriendBill / 100)
            ).toFixed(2)}{" "}
            Tip)
          </h2>
          <div class="d-flex justify-content-center mt-4">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
}
