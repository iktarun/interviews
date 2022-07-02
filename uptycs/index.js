import React from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Functional component
const Message = React.memo((props) => {
  console.log("Called Message Component!");
  const { increaseCount } = props;
  return (
    <div className="message-container" onClick={increaseCount}>
      <p>"{props.text}"</p>
      <div className="details-container">
        <small>
          Sent by <b>{props.sentBy}</b>
        </small>
      </div>
    </div>
  );
});

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  const [count, setCount] = React.useState(0);

  const increaseCount = React.useCallback((e) => {
    setCount((prevCount) => prevCount + 1);
  });

  const sortByName = (a, b) => (a.sentBy > b.sentBy ? 1 : -1);
  // console.log(props.messages.sort(sortByName));

  const sortedArr = props.messages.sort(sortByName);

  return (
    <div>
      <h2>Message List: {count}</h2>
      {sortedArr.map((message, i) => (
        <Message
          key={`message-${i}`}
          text={message.text}
          sentBy={message.sentBy}
          increaseCount={increaseCount}
        />
      ))}
    </div>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));
