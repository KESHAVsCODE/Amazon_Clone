import { Accordion } from "@mantine/core";
import SelectAddress from "./SelectAddress";
import { useState } from "react";
import { logoDark } from "../../assets/images";

const Checkout = () => {
  //   const addressDetails = useSelector((state) => state.addressDetails);
  //const defaultAddressData = addressDetails.defaultAddress;

  return (
    <div className="p-4 font-500">
      <div className=" flex justify-around  bg-zinc-100 bg-gradient-to-b from-white via-white to-zinc-100 border-b border-selectBorder">
        <div>
          <img src={logoDark} alt="website-logo" className="w-32" />
        </div>
        <h1 className="text-3xl font-medium text-defaultHeading">Checkout</h1>
      </div>
      <div className="w-[800px] mx-auto">
        <Accordion defaultValue="item-1">
          <Accordion.Item value="item-1">
            <Accordion.Control>
              <h2 className=" font-medium text-xl text-orange-600">
                <span className="pr-3">1</span> Select delivery address
              </h2>
            </Accordion.Control>
            <Accordion.Panel>
              <SelectAddress />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="flexibility">
            <Accordion.Control>Flexibility</Accordion.Control>
            <Accordion.Panel>
              Configure components appearance and behavior with vast amount of
              settings or overwrite any part of component styles
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="focus-ring">
            <Accordion.Control>No annoying focus ring</Accordion.Control>
            <Accordion.Panel>
              With new :focus-visible pseudo-class focus ring appears only when
              user navigates with keyboard
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
export default Checkout;
