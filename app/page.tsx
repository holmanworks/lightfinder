"use client"

import React, { useState } from "react";
import { BigInput } from "@components/Footer"
import { Header } from "@components/Header"
import { MessageResponse } from "@components/Message"



export default function Home() {
  // State to hold the current message
  const [message, setMessage] = useState<React.ReactNode>("Hi, I'm your TYPE S expert light finder!");

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
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-grow overflow-y-auto">
        <MessageResponse message={message} avatarSize={avatarSize} loading={loading} />
      </main>

      {/* Footer */}
      <BigInput onSendMessage={updateMessage} className="z-20" />
    </div>
  )
}
