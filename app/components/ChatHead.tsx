'use client';
import { FacebookProvider, CustomChat } from 'react-facebook';

const ChatHead = () => {
  return (
    <FacebookProvider appId="709466034466382" chatSupport>
      <CustomChat pageId="149178271620427" minimized={false}/>
    </FacebookProvider> 
  )
}

export default ChatHead