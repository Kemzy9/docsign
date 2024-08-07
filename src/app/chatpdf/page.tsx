
'use client'
import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Import icons from react-icons library
import UploadForm from "../uplaodform/page";

import Head from "next/head";
import Nav from "../UI/Nav/page";
import { GoogleAnalyticsWrapper } from '../UI/googleanaylytics/page'

const Chatpdf: React.FC = () => {
    const [messages, setMessages] = useState<(string | JSX.Element)[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false); // State to track loading state
    const QUESTION_LIMIT = 3;
    const messageContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null); // Reference to the input field

    useEffect(() => {
        // Automatically scroll to the bottom when messages change
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleMessageSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newMessage.trim() !== "") {
            if (questionCount >= QUESTION_LIMIT) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    (
                        <div className="text-center" key="premiumMessage">
                            <p>You have reached the question limit. wait 24 hours .</p>
                            <a href="/" className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-block">Upgrade to Premium</a>
                        </div>
                    )
                ]);
                return;
            }
            setIsLoading(true); // Set loading state to true
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setNewMessage("");
            setQuestionCount((prevCount) => prevCount + 1);
            try {
                const response = await fetch(" http://localhost:9000/2015-03-31/functions/function/invocations/api/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query: newMessage }),
                });
                if (!response.ok) {
                    throw new Error("Failed to send message to the server");
                }
                const responseData = await response.json();
                handleIncomingMessage(responseData.response);
            } catch (error) {
                console.error("Error sending message to server:", error);
            } finally {
                setIsLoading(false); // Set loading state to false after receiving response
            }
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleIncomingMessage = (message: string | JSX.Element) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div className="w-full">
            
            <div className={`flex h-screen antialiased ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                <div className="flex flex-row h-full w-full overflow-x-hidden">
                    
                    <div className="relative flex flex-col py-60 pl-6 pr-2 w-24 bg-black flex-shrink-0">
                        <a href="/chatpdf" className="absolute top-0 right-0 flex items-center text-white">
                            <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm7-6a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1zm4.293 1.293a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 1 0-1.414-1.414L13 7.586V3a1 1 0 0 0-2 0v4.586L9.707 6.293a1 1 0 1 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 0 0-.001-1.414z" clipRule="evenodd" />
                            </svg>
                            Newchat
                        </a>
                    </div>
                    <UploadForm />
                   
                    <div className="flex flex-col flex-auto h-full p-6">
                        <div ref={messageContainerRef} className={`flex flex-col flex-auto flex-shrink-0 rounded-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} h-full p-4 overflow-y-auto`}>
                            <div className="flex flex-col h-full mb-4">
                                <div className="flex flex-col h-full">
                                    {messages.map((message, index) => (
                                        <div key={index} className="grid grid-cols-12 gap-y-2">
                                            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                                <div className="flex flex-row items-center">
                                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                                        A
                                                    </div>
                                                    <div className={`relative ml-3 text-sm ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} py-2 px-4 shadow rounded-xl`}>
                                                        <div>{message}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && ( // Display loading indicator when isLoading is true
                                        <div className="flex gap-2">
                                            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                                            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                                            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleMessageSubmit} className="flex flex-row items-center justify-between">
                            <div className="relative w-full">
                                <input
                                    ref={inputRef}
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className={`flex w-full pl-16 border rounded-xl focus:outline-none focus:border-indigo-300 h-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                                    placeholder="Type a message..."
                                />
                            </div>
                            <button
                                className={`flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0 ml-2 ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-500'}`}
                                type="submit"
                            >
                                <span>Send</span>
                                <span className="ml-2">
                                    <svg
                                        className="w-4 h-4 transform rotate-45 -mt-px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                <button
                    className={`fixed bottom-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-500'}`}
                    onClick={toggleDarkMode}
                >
                    {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
            </div>
        </div>
    );
};

export default Chatpdf;



