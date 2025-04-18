const initialState = {
  items: [],
  total: 0,
  cartCounter: 0,
};

const cartReducer = (state = initialState, action) => {
  let updatedItems;

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If item already exists, increase its quantity by 1
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        // Add new item with quantity 1
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const cartCounter = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return { ...state, items: updatedItems, total, cartCounter };
    }

    case 'REMOVE_FROM_CART': {
      updatedItems = state.items.filter((item) => item.id !== action.payload.id);

      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const cartCounter = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return { ...state, items: updatedItems, total, cartCounter };
    }

    case 'UPDATE_QUANTITY': {
      updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const cartCounter = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return { ...state, items: updatedItems, total, cartCounter };
    }

    default:
      return state;
  }
};

export default cartReducer;
