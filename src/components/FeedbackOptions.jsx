export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(el => (
    <button type="button" key={el} onClick={onLeaveFeedback}>
      {el}
    </button>
  ));
};
