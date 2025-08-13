import React from 'react';

export default function ChatList({ conversations, onSelect }) {
  return (
    <>
      {conversations.map((c) => {
        const lastMsg = c.messages?.length
          ? c.messages[c.messages.length - 1].text
          : "No messages yet";

        return (
          <div
            key={c._id}
            className="chat-item"
            onClick={() => onSelect(c)}
          >
            <div className="name">{c.name}</div>
            <div className="last">{lastMsg}</div>
          </div>
        );
      })}
    </>
  );
}
