import React from 'react'
import { ChatList, Inbox, Sidebar } from '../section/Chat'
import GifModal from '../components/GifModal'
// import VoiceRecorder from '../components/VoiceRecorder'

export default function Messages() {
  return (
    <div className='h-screen overflow-hidden'>
      <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex'>
        {/* SIDE BAR */}
        <Sidebar />
        {/* CHAT LIST */}
        <ChatList />
        {/* INBOX */}
        <Inbox />
      </div>

      <GifModal />
      {/* <VoiceRecorder /> */}
    </div>
  )
}
