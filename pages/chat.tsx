import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://chat-api.spartez-software.com/chat-widget.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <chat-widget
      jira-id="ed0c2bb5-7965-3640-ba7b-ab0bfcec3fc3"
      service-desk-id="2"
    ></chat-widget>
  );
};

export default ChatWidget;
