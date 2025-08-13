import React from 'react';

export default function MessageBubble({ msg }) {
  const isOut = msg.sender === 'user';
  const cls = isOut ? 'bubble bubble-out' : 'bubble bubble-in';
  const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // tick element for sent messages (we show ticks for user-sent messages only)
  const tick = () => {
    if (!isOut) return null;
    if (msg.status === 'sent') return <span className="tick single" />;
    if (msg.status === 'delivered') return <span className="tick double-grey" />;
    if (msg.status === 'seen') return <span className="tick double-blue" />;
    return <span className="tick single" />;
  };

  return (
    <div className={isOut ? 'msg-row msg-out' : 'msg-row msg-in'}>
      {!isOut && <div style={{ width: 8 }} />}
      <div className={cls}>
        <div>{msg.text}</div>
      </div>
      <div className="msg-meta">
        <div style={{ color: '#777', fontSize: 12 }}>{time}</div>
        {tick()}
      </div>
    </div>
  );
}
