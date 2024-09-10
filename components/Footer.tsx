"use client"

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Microphone, Send, Stop } from "@components/ui/icon";
import { Textarea } from "@components/ui/input";
import { useRouter } from "next/navigation";
import { CraftBy } from "./ui/logo";


interface FooterProps {
  onSendMessage: (message: React.ReactNode) => void;
  className?: string;
}



export function BigInput({ onSendMessage, className }: FooterProps) {
  const [message, setMessage] = useState("");

  const [isMicrophoneActive, setMicrophoneActive] = useState(false); // State to track microphone button

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim()) {
      onSendMessage(
        <>Let&apos;s find the perfect bulbs for your <strong>2012 Honda Accord</strong>.</>
      );
      setMessage(""); // Clear the input field
    }
  };

  const handleMicrophoneClick = () => {
    setMicrophoneActive(!isMicrophoneActive); // Toggle the microphone state
  };

  const glowAnimation = {
    animation: "glow 1s infinite ease-in-out", // Define the glow animation style inline
    boxShadow: "0 0 0 4px rgba(0, 148, 214, 0.2)",
  };


  
  return (
    <div className={`w-full max-w-[672px] mx-auto ${className}`}>
      <div className="bg-white rounded-t-[24px] shadow-[0_4px_16px_0_rgba(0,0,0,0.12)] ring-1 ring-black/10">

        {/* Textarea */}
        <Textarea
          ref={textareaRef}
          className="h-[124px] px-4 py-5 flex-grow border-0 focus-visible:border-0 rounded-none bg-transparent text-3xl"
          variant="black"
          placeholder="Type or say the year, make, and model of your car"
          id="message"
          value={message}
          onChange={handleChange}
        />

        {/* Buttons */}
        <div className="w-full flex items-center p-3">
          <div className="w-14 h-14"></div>

          {/* Microphone */}
          <div className="flex-grow flex justify-center">
            <Button
              onClick={handleMicrophoneClick} // Handle click to toggle state
              variant="icon"
              size="icon"
              icon={isMicrophoneActive ? <Stop className="w-6 h-6" /> : <Microphone className="w-6 h-6" />}
              className={`w-14 h-14 ${isMicrophoneActive ? "bg-primary hover:bg-primary/80 active:bg-primary/80" : "bg-secondary hover:bg-secondary/80 active:bg-secondary/80"}`}
              style={isMicrophoneActive ? glowAnimation : {}} // Apply glow animation when active
            />
          </div>

          {/* Send */}
          <Button
            onClick={handleSendClick}
            variant="icon"
            size="icon"
            color="primary"
            icon={<Send className="w-6 h-6" />}
            className="w-14 h-14 ml-auto"
            disabled={!message.trim()}
          />
        </div>
      </div>



      {/* Glowing Animation */}
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 0 4px rgba(0, 148, 214, 0.2);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(0, 148, 214, 0.4);
          }
          100% {
            box-shadow: 0 0 0 4px rgba(0, 148, 214, 0.2);
          }
        }
      `}</style>
    </div>
  );
}




export function SmallInput() {
  const router = useRouter(); // Initialize the router

  const handleInputClick = () => {
    router.push("/"); // Navigate back to the homepage
  };

  return (
    <div className="w-full max-w-[672px] mx-auto px-3">

      <div 
        className="w-full" 
        onClick={handleInputClick} // Make the entire component clickable
      >
        <div className="flex w-full items-center rounded-full mx-auto h-14 bg-white border border-black/10 cursor-pointer">
          {/* Text */}
          <div className="w-full px-5 text-hint text-lg font-normal">
            Type or say here
          </div>

          {/* Microphone Button */}
          <div className="flex-grow flex justify-center p-1">
            <Button
              variant="icon"
              size="icon"
              icon={<Microphone className="w-6 h-6" />}
              className="w-12 h-12 bg-secondary hover:bg-secondary/80 active:bg-secondary/80"
            />
          </div>
        </div>
      </div>

      <div className="flex h-8 items-center justify-center opacity-90">
        <a href="https://makeyour.ai" target="_blank" rel="noopener noreferrer">
          <CraftBy />
        </a>
      </div>

    </div>
  );
}