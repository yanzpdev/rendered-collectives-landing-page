'use client';
import { FacebookProvider, CustomChat } from 'react-facebook';

const ChatHead = () => {
  return (
    <FacebookProvider appId="1007286433691486" chatSupport>
      <CustomChat pageId="149178271620427" minimized={false}/>
    </FacebookProvider> 
  )
}

export default ChatHead