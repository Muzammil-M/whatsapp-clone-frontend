import React, { useEffect, useState } from 'react';
import ChatList from './components/chatList';
import ChatWindow from './components/chatWindow';
import { getConversations } from './services/api';

export default function App() {
  const [conversations, setConversations] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const data = await getConversations();
        if (mounted) {
          setConversations(data);
          if (selected) {
            const updated = data.find(c => c._id === selected._id);
            if (updated) setSelected(updated);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    load();
    const id = setInterval(load, 2000); // poll to reflect updates
    return () => { mounted = false; clearInterval(id); };
  }, [selected]);

  return (
    <div className="app">
      <div className="sidebar">
        <div className="header">WhatsApp</div>
        <div className="chat-list">
          <ChatList conversations={conversations} onSelect={(c) => setSelected(c)} />
        </div>
      </div>
      <ChatWindow conversation={selected} />
    </div>
  );
}
