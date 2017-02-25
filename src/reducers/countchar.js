const countChar = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'count_char':
      return {
        text: action.text,
        char_count: action.text.length
      }
    default:
      return state;
  }
}

export default countChar;
