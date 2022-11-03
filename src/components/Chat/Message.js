import { Fragment } from "react";
import Moment from "react-moment";

import "./Message.css";

const Message = (props) => {
  const { chatUser, message } = props;

  return (
    <Fragment>
      <div className="message__date">
        {message.date && !message.sameDate && (
          <Moment format="DD MMM YYYY">{message.date}</Moment>
        )}
      </div>
      <div
        className={
          chatUser === message.username
            ? "message message--left"
            : "message message--right"
        }
      >
        {(!message.sameSender || !message.sameDate) && message.username}
        {message.content}
      </div>
    </Fragment>
  );
};

export default Message;
