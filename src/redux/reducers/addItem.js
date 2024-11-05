const addItem = [];

const addItems = (state = addItem, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.filter((x) => x.id !== exist1.id);
      }

    case "UPDATE_QUANTITY":
      const { id, qty } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, qty: qty } : item
      );

    default:
      return state;
  }
};

export default addItems;
