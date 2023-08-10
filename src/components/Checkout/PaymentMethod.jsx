import { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import ListOfCards from "./ListOfCards";
import CardDetails from "./CardDetails";
const PaymentMethod = ({ setOrderDetails, setOpenedItem }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [isPaymentMethodDetailsAdded, setPaymentMethodDetailsAdded] =
    useState(false);

  const [upiId, setUpiId] = useState("");
  const [upiError, setUpiError] = useState("");

  function isValidUPI() {
    // Regular expression pattern for valid UPI ID
    const upiPattern = /^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}$/;

    // Test if the provided upiId matches the pattern
    console.log(upiId);
    if (upiPattern.test(upiId)) {
      setPaymentMethodDetailsAdded(true);
      setUpiError("");
      return true;
    } else {
      setUpiError("error");
      return false;
    }
  }
  console.log(isPaymentMethodDetailsAdded);
  const handleUseThisPaymentMethodClick = () => {};
  return (
    <div className="border border-selectBorder rounded-lg">
      <h3 className="text-xl font-medium text-defaultHeading m-3 mb-0 pb-1 border-b border-zinc-400">
        Payment methods
      </h3>
      <div className="px-6 py-4">
        <ul className="flex flex-col gap-2">
          {/* =================== debit credit card option ===================  */}
          <li className=" px-3 py-2 text-sm border text-defaultParagraph rounded-lg">
            <div className="flex gap-4 items-start">
              <input
                type="radio"
                className="mt-1 cursor-pointer"
                id="creditDebitCard"
                name="paymentOption"
                onChange={(e) => {
                  setPaymentMethodDetailsAdded(false);
                  setSelectedPaymentMethod(e.target.id);
                }}
              />
              <div>
                <h3 className="pb-2 text-base font-medium text-defaultHeading">
                  Credit or debit card
                </h3>
                <div>
                  <ListOfCards />
                </div>
              </div>
            </div>
            {/* =================== Card Details ===================  */}
            {selectedPaymentMethod === "creditDebitCard" &&
              !isPaymentMethodDetailsAdded && (
                <CardDetails
                  setPaymentMethodDetailsAdded={setPaymentMethodDetailsAdded}
                />
              )}
          </li>
          {/* =================== UPI option ===================  */}
          <li className="flex gap-4 items-start px-3 py-2 text-sm border text-defaultParagraph rounded-lg">
            <input
              type="radio"
              className="mt-1 cursor-pointer"
              id="UPI"
              name="paymentOption"
              onChange={(e) => {
                setPaymentMethodDetailsAdded(false);
                setSelectedPaymentMethod(e.target.id);
              }}
            />
            <div>
              <h3 className="pb-2 text-base font-medium text-defaultHeading">
                UPI ID
              </h3>
              {selectedPaymentMethod === "UPI" &&
                !isPaymentMethodDetailsAdded && (
                  <div>
                    <label htmlFor="upiId">Please Enter your UPI ID</label>
                    <input
                      type="email"
                      className="block inputBox w-40"
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                    {upiError === "error" && (
                      <div className="flex gap-1 pt-1 items-center text-xs text-error opacity-90 ">
                        <div>
                          <ErrorIcon style={{ fontSize: "22px" }} />
                        </div>
                        <p>Please enter a valid UPI ID</p>
                      </div>
                    )}
                    <button
                      onClick={isValidUPI}
                      className="amazonButton w-max px-2 my-2 py-1"
                    >
                      Verify
                    </button>
                  </div>
                )}
            </div>
          </li>
          {/* =================== Cash on Delivery option ===================  */}
          <li className="flex gap-4 items-start px-3 py-2 text-sm border text-defaultParagraph rounded-lg">
            <input
              type="radio"
              className="mt-1 cursor-pointer"
              id="cashOnDelivery"
              name="paymentOption"
              onChange={(e) => {
                setPaymentMethodDetailsAdded(false);
                setSelectedPaymentMethod(e.target.id);
              }}
            />
            <div>
              <h3 className="text-base font-medium text-defaultHeading">
                Cash/Pay on Delivery
              </h3>
              <p>Cash, UPI and Cards accepted.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-3 bg-gray-100 border-t border-selectBorder">
        <button
          onClick={handleUseThisPaymentMethodClick}
          className="amazonButton w-max px-3"
        >
          Use this address
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
