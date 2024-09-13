"use client"

import React, { useState } from "react";
import { BigInput } from "@components/Footer"
import { Header } from "@components/Header"
import { MessageResponse } from "@components/Message"



export default function Home() {
  // State to hold the current message
  const [message, setMessage] = useState<React.ReactNode>("Hi, I'm your TYPE S expert light finder! Hi, I'm your TYPE S expert light finder! Hi, I'm your TYPE S expert light finder!");

  // State to handle avatar size
  const [avatarSize, setAvatarSize] = useState(120);

  // State to manage loading spinner
  const [loading, setLoading] = useState(false);

  // Function to update the message and trigger the loading state
  const updateMessage = (newMessage: React.ReactNode) => {
    setMessage(newMessage);
    setAvatarSize(40); // Change avatar size to 40px when sending a message
    setLoading(true);  // Show loading spinner
  };

  
  return (
    <div className="flex flex-col">

      <div className="fixed top-0 z-30 w-full bg-background">
        <Header />
      </div>

      {/* Content */}
      <main className="flex-grow overflow-y-auto pt-[56px] pb-[220px]">
        <MessageResponse message={message} avatarSize={avatarSize} loading={loading} />
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 w-full bg-background z-20">
        <BigInput onSendMessage={updateMessage} />
      </div>
    </div>
  )
}
