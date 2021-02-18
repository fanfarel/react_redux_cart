const initialState = {
  productData: [
    {
      id: 0,
      imgUrl: "https://s00.yaplakal.com/pics/pics_original/6/6/1/13170166.jpg",
      nameOfProduct: "Product1",
      discribeOfProduct: "huj pyzda",
      price: 100
    },
    {
      id: 1,
      imgUrl:
        "https://cs12.pikabu.ru/post_img/big/2019/06/22/8/1561206511192174407.png",
      nameOfProduct: "Product2",
      discribeOfProduct: "discribeOfProduct2",
      price: 20
    },
    {
      id: 2,
      imgUrl:
        "https://cs9.pikabu.ru/images/big_size_comm/2020-09_3/160016588917819179.png",
      nameOfProduct: "Product3",
      discribeOfProduct: "discribeOfProduct3",
      price: 3
    }
  ],
  isFetching: false
};

const productReducer = (state = initialState) => {
  return state;
};

export default productReducer;
