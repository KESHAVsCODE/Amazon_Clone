const cartInitialState = {
  products: [],
  productsCount: 0,
};

//data structure for add to cart product
// const cartInitialState = {
//   item: [
//     {
//         product:{
//             id: 1,
//             title: "",
//             price: 109.95,
//             description: "",
//             image: "",
//             rating: {
//                 rate: 3.9,
//                 count: 120,
//             },
//         },
//         quantity:1
//     },
//   ],
//   productsCount: 0,
// };

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case "add_product":
      return {
        products: [
          ...state.products,
          { product: action.payload.product, quantity: 1 },
        ],
        productsCount: state.productsCount + 1,
      };
    case "delete_product": {
      let quantityToBeSubtract;
      const filteredProducts = state.products.filter((item) => {
        if (item.product.id !== action.payload.id) return true;
        else {
          quantityToBeSubtract = item.quantity;
          return false;
        }
      });

      console.log("deleted", filteredProducts, action.payload.id);
      return {
        products: filteredProducts,
        productsCount: state.productsCount - quantityToBeSubtract,
      };
    }
    // case "increase_quantity": {
    //   const productToUpdate = action.payload.id;

    //   const updatedProducts = state.products.map((item) => {
    //     if (productToUpdate === item.product.id) {
    //       return {
    //         product: { ...item.product },
    //         quantity: Math.abs(item.quantity + action.payload.quantity),
    //       };
    //     }
    //     return item;
    //   });

    //   console.log("quantity increased");

    //   return {
    //     products: updatedProducts,
    //     productsCount: Math.abs(
    //       (state.productsCount += action.payload.quantity)
    //     ),
    //   };
    // }
    case "update_quantity": {
      const productIdToUpdate = action.payload.id;

      const updatedProducts = state.products.map((item) => {
        if (productIdToUpdate === item.product.id) {
          console.log("itemquantity", item.quantity, action.payload.quantity);
          return {
            product: { ...item.product },
            quantity: Math.abs(item.quantity + action.payload.quantity),
          };
        }
        return item;
      });

      console.log("quantity updated");

      return {
        products: updatedProducts,
        productsCount: Math.abs(
          (state.productsCount += action.payload.quantity)
        ),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
