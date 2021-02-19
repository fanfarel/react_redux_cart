const initialState = {
  productData: [
    {
      id: 0,
      imgUrl: "https://via.placeholder.com/800?text=Product 1",
      nameOfProduct: "Product 1",
      discribeOfProduct: "discribe of the product 1",
      price: 100
    },
    {
      id: 1,
      imgUrl: "https://via.placeholder.com/800?text=Product 2",
      nameOfProduct: "Product 2",
      discribeOfProduct: "discribe of the product 2",
      price: 20
    },
    {
      id: 2,
      imgUrl: "https://via.placeholder.com/800?text=Product 3",
      nameOfProduct: "Product 3",
      discribeOfProduct: "discribe of the product 3",
      price: 3
    },
    {
      id: 3,
      imgUrl: "https://via.placeholder.com/800?text=Product 4",
      nameOfProduct: "Product 4",
      discribeOfProduct: "discribe of the product 4",
      price: 300
    },
    {
      id: 4,
      imgUrl: "https://via.placeholder.com/800?text=Product 5",
      nameOfProduct: "Product 5",
      discribeOfProduct: "discribe of the product 5",
      price: 10
    },
    {
      id: 5,
      imgUrl: "https://via.placeholder.com/800?text=Product 6",
      nameOfProduct: "Product 6",
      discribeOfProduct: "discribe of the product 6",
      price: 2
    }
  ],
  isFetching: false
};

const productReducer = (state = initialState) => {
  return state;
};

export default productReducer;
