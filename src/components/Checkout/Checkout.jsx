import { Accordion } from "@mantine/core";
import SelectAddress from "./SelectAddress";
import { useState } from "react";
import { logoDark } from "../../assets/images";
import LockIcon from "@mui/icons-material/Lock";
import PaymentMethod from "./PaymentMethod";

const Checkout = () => {
  //const addressDetails = useSelector((state) => state.addressDetails);
  //const defaultAddressData = addressDetails.defaultAddress;

  const [openedItem, setOpenedItem] = useState("delivery-address");

  const [orderDetails, setOrderDetails] = useState({
    deliveryAddress: "",
    paymentMethod: "",
  });

  console.log(orderDetails);

  const handleOpenItem = (value) => {
    setOpenedItem(value);
  };

  return (
    <div className="p-4 font-500">
      <div className="flex justify-around  bg-zinc-100 bg-gradient-to-b from-white via-white to-zinc-100 border-b border-selectBorder">
        <div>
          <img src={logoDark} alt="website-logo" className="w-32" />
        </div>
        <h1 className="text-3xl font-medium text-defaultHeading">Checkout</h1>
        <div className="pt-1">
          <LockIcon style={{ color: "#888" }} />
        </div>
      </div>
      <section className="w-[800px] mx-auto">
        <div>
          <Accordion
            defaultValue="delivery-address"
            value={openedItem}
            onChange={setOpenedItem}
          >
            <Accordion.Item value="delivery-address">
              <Accordion.Control>
                {!orderDetails.deliveryAddress ||
                openedItem === "delivery-address" ? (
                  <h2 className=" font-medium text-xl text-orange-600">
                    <span className="pr-3">1</span> Select delivery address
                  </h2>
                ) : (
                  <div className="flex justify-between">
                    <h2 className=" font-medium text-xl text-defaultHeading">
                      <span className="pr-3">1</span> Delivery address
                    </h2>
                    <div>
                      <p>{orderDetails.deliveryAddress.address.name}</p>
                      <p>{orderDetails.deliveryAddress.address.houseNumber}</p>
                      <p>{orderDetails.deliveryAddress.address.area}</p>
                      <p>
                        {`${orderDetails.deliveryAddress.address.city}, ${orderDetails.deliveryAddress.address.state}, ${orderDetails.deliveryAddress.address.pincode}`}
                      </p>
                    </div>
                  </div>
                )}
              </Accordion.Control>

              <Accordion.Panel>
                <SelectAddress
                  setOrderDetails={setOrderDetails}
                  handleOpenItem={handleOpenItem}
                />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              value="payment-methods"
              opened={openedItem === "payment-methods"}
            >
              <Accordion.Control>
                <h2 className=" font-medium text-xl text-orange-600">
                  <span className="pr-3">2</span> Select a payment method
                </h2>
              </Accordion.Control>
              <Accordion.Panel>
                <PaymentMethod
                  setOrderDetails={setOrderDetails}
                  handleOpenItem={handleOpenItem}
                />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              value="place-order"
              opened={openedItem === "place-order"}
            >
              <Accordion.Control>
                <h2 className=" font-medium text-xl text-orange-600">
                  <span className="pr-3">3</span> Place your order
                </h2>
              </Accordion.Control>
              <Accordion.Panel>
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
};
export default Checkout;
