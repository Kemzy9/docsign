"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Logo from '../UI/logo/page';
import Image from 'next/image';

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const router = useRouter();
    const logo = {
        name: 'LogoName',
        icon: 'LogoIcon',
        business: { name: 'BusinessName' },
        alt: 'Logo Alt Text',
        size: 100,
        quality: 75
    };

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/apii/users/login", user);
            const userData = response.data.user;

            if (response.data.error) {
                toast.error(response.data.error); // Display error message
            } else {
                router.push(`/profile/${userData.username}`);
                toast.success("Success!");
            }
        } catch (error: any) {
            console.error("Error while login", error);
            if (error.response && error.response.data) {
                toast.error(error.response.data.error || "Incorrect email or password"); // Notify incorrect password
            } else {
                toast.error("An error occurred during login");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <Image
                            className="w-32 mx-auto"
                            src="/path/to/logo.png" // Add the correct path to your logo
                            alt="Logo Alt Text" // Provide the appropriate alt text
                        />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign up
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                            <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path fillRule="evenodd"
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path fillRule="evenodd"
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path fillRule="evenodd"
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path fillRule="evenodd"
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign Up with Google
                                    </span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up with email
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" id='email'
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                <div className="relative">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        id='password'
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    <button
                                        type="button"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 text-gray-500 hover:text-gray-800 focus:outline-none"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="relative text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={onLogin}
                                    disabled={loading}
                                >
                                    {loading && (
                                        <>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                            </div>
                                            <div className="ml-8">Logging in...</div>
                                        </>
                                    )}
                                    {!loading && "Login"}
                                </button> <Link href="/forgotpassword">
                                    Forgot Password
                                </Link>
                                <button className="tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <Link href="/signup" className="flex items-center">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">Create account</span>
                                    </Link>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by thechatpdf
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://source.unsplash.com/IXUM4cJynP0/400x500')" }}
                    >
                        <div>
                            <Image
                                className="m-auto"
                                src="/path/to/logo.png"
                                alt="Login Page Background"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
