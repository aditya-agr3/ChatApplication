import { ChatEngine } from 'react-chat-engine';
// import { ChatEngine } from 'chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

 const projectID = '69bee515-56c2-4014-a280-dab81434a205';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="69bee515-56c2-4014-a280-dab81434a205"
      userName={localStorage.getItem('aditya')}
      userSecret={localStorage.getItem('1234')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;











