import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateQuantity } from "../../redux/cart/cartAction";
import { useEffect, useRef } from "react";

const Cart = () => {
  const cartDetails = useSelector((state) => state.cartDetails);
  const cartProductsDetails = cartDetails.products;

  console.log(cartProductsDetails);
  const dispatch = useDispatch();
  console.log("cart");

  //create a list of refs to store all input references that are currently present in the cart section
  const quantityInputRef = useRef([]);

  /*============================= handle Update Quantity of the product with useState Approach =======================  */

  // const [quantityInputFields, setQuantityInputFields] = useState(() => {
  //   const quantityInputFields = {};

  //   for (const item of cartProductsDetails) {
  //     quantityInputFields[item.product.id] = {
  //       quantity: item.quantity,
  //       isUpdateButtonVisible: false,
  //     };
  //   }

  //   return quantityInputFields;
  // });

  // const handleProductQuantityChange = (e) => {
  //   const { id, value } = e.target;

  //   if (/^[0-9]*$/.test(value)) {
  //     console.log(value);
  //     setQuantityInputFields({
  //       ...quantityInputFields,
  //       [id]: { quantity: Number(value), isUpdateButtonVisible: true },
  //     });
  //   }
  //   return;
  // };

  /*============================= handle Update Quantity of the product with useState Approach =======================  */

  /*============================= handle Update Quantity of the product with useRef Approach =======================  */

  //every time when component mounted set all input fields with the quantity of each product
  useEffect(() => {
    console.log("useEffect of Cart");
    cartProductsDetails.forEach((item, index) => {
      quantityInputRef.current[index].value = item.quantity;
    });
  }, []);

  const getProductQuantity = (id) => {
    console.log(typeof id, id);
    for (const item of cartProductsDetails) {
      // console.log(product.id);
      if (item.product.id === Number(id)) {
        console.log("product quantity is ->", item.quantity);
        return item.quantity;
      }
    }
  };

  const isValidPositiveInteger = (input) => {
    const numericValue = parseInt(input, 10);
    return (
      Number.isInteger(numericValue) &&
      numericValue >= 0 &&
      !input.includes(".")
    );
  };

  const handleUpdateQuantityClick = (e) => {
    e.stopPropagation();
    const id = Number(e.target.id);

    //get the newQuantity from the corresponding product update_quantity_input_field
    let newQuantity;
    for (const inputRef of quantityInputRef.current) {
      if (Number(inputRef.id) === id) {
        newQuantity = inputRef.value;
        if (!isValidPositiveInteger(newQuantity)) {
          inputRef.focus();
          return;
        }
        break;
      }
    }
    newQuantity = Number(newQuantity);
    // console.log("newQuantity", newQuantity);

    const productToUpdateQuantity = cartProductsDetails.find(
      (item) => item.product.id === id
    );

    const oldQuantity = productToUpdateQuantity.quantity;

    // console.log("oldQuantity", oldQuantity);

    if (newQuantity === oldQuantity) return;

    if (newQuantity === 0) {
      dispatch(deleteProduct({ id }));
      return;
    }

    dispatch(updateQuantity({ id, quantity: newQuantity - oldQuantity }));
  };

  const handleDeleteProductClick = (e) => {
    e.stopPropagation();
    const id = Number(e.target.id);
    dispatch(deleteProduct({ id }));
  };

  return (
    <section name="shopping-cart" className=" bg-[#eaeded] py-8 px-6">
      <div className="w-[75%] bg-white py-6 px-4">
        <h1 className="text-3xl font-medium text-amazon_blue border-b pb-4">
          Shopping Cart
        </h1>
        <div className="w-[90%]">
          <ul>
            {cartProductsDetails.map((item) => {
              return (
                <li key={item.product.id} className="flex border-b my-4">
                  <div className="w-[180px] px-6 py-6">
                    <img src={item.product.image} alt="item.product-image" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">
                      {item.product.title}
                    </h3>
                    <h2 className="text-lg font-bold">${item.product.price}</h2>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-medium text-[#007600]">
                        In stock
                      </p>
                      <p className="text-xs font-medium text-lightGray">
                        Sold by{" "}
                        <span className="text-xs text-link">
                          {"InfiniaRetail"}
                        </span>
                      </p>
                      <p className="text-xs font-medium text-lightGray">
                        Gift options not available.{" "}
                        <span className="cartButtonLinks font-medium border-0 p-0">
                          Learn more
                        </span>
                      </p>
                      <p className="text-xs font-bold">
                        Style Name:{" "}
                        <span className=" font-normal text-gray">
                          {item.product.category}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center py-2">
                      <div className="mr-3">
                        <input
                          type="number"
                          placeholder="Qty:"
                          min={0}
                          id={item.product.id}
                          onBlur={(event) => {
                            if (event.target.value === "") {
                              event.target.value = getProductQuantity(
                                event.target.id
                              );
                            }
                          }}
                          ref={(element) =>
                            quantityInputRef.current.push(element)
                          }
                          className="inputBox text-amazon_blue w-[70px]  border-lightGray rounded"
                        />
                        <button
                          id={item.product.id}
                          onClick={handleUpdateQuantityClick}
                          className="amazonButton text-[11px] p-[2px] ml-1 text-amazon_blue w-14"
                        >
                          Update
                        </button>
                      </div>
                      <p
                        id={item.product.id}
                        onClick={handleDeleteProductClick}
                        className="cartButtonLinks"
                      >
                        Delete
                      </p>
                      <p className="cartButtonLinks">Save for later</p>
                      <p className="cartButtonLinks">Add to wishlist</p>
                      <p className="cartButtonLinks">See more like this</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <h2 className="text-lg text-end font-medium">
          Subtotal {"(10 items)"}:
          <span className="font-bold"> ${"15,521.0"}</span>
        </h2>
      </div>
    </section>
  );
};

export default Cart;
