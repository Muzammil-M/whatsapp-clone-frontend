import React from 'react';

export default function ChatWindow({ conversation }) {
  if (!conversation) {
    return (
      <div className="chat-area" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        Select a chat to start messaging
      </div>
    );
  }

  return (
    <div className="chat-area">
      <div className="chat-top">{conversation.name}</div>
      <div className="messages">
        {conversation.messages.map((m, idx) => {
          const isOutgoing = m.sender === 'You';
          const bubbleClass = isOutgoing ? 'bubble bubble-out' : 'bubble bubble-in';
          let tickClass = '';

          // status: 'sent', 'delivered', 'seen'
          if (isOutgoing) {
            if (m.status === 'seen') tickClass = 'tick double-blue';
            else if (m.status === 'delivered') tickClass = 'tick double-grey';
            else tickClass = 'tick single';
          }

          return (
            <div key={idx} className={`msg-row ${isOutgoing ? 'msg-out' : 'msg-in'}`}>
              <div className={bubbleClass}>
                {m.text}
                {isOutgoing && (
                  <span className="msg-meta">
                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    <span className={tickClass}></span>
                  </span>
                )}
                {!isOutgoing && (
                  <span className="msg-meta">
                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
