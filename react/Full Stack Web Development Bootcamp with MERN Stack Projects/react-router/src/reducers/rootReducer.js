const initialState = {
  cards: [
    {
      id: 1,
      title: "John",
      body: "Lorem ipsum dolor sit amed John.Lorem ipsum dolor sit amed John.",
    },
    {
      id: 2,
      title: "Alex",
      body: "Lorem ipsum dolor sit amed Alex.Lorem ipsum dolor sit amed Alex.",
    },
    {
      id: 3,
      title: "Franklin",
      body: "Lorem ipsum dolor sit amed Franklin.Lorem ipsum dolor sit amed Franklin.",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      let newCards = state.cards.filter((card) => card.id !== action.id);
      return {
        ...state,
        cards: newCards,
      };

    default:
      return state;
  }
};

export default rootReducer;
