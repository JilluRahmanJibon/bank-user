import React from "react";
import logo from "../Assets/genzam.svg";
import { useState, useEffect } from 'react';


const Footer = () => {

    const [contactInfo, setContactInfo] = useState({

    });
    useEffect(() => {
        // Fetch the contact info data from the backend API
        fetch('http://server.bank.genzam.it/api/v1/contact-info')
            .then(response => response.json())
            .then(data => setContactInfo(data))
            .catch(error => console.error('Error fetching contact info:', error));
    }, []);
    console.log(contactInfo);

    return (

        <footer className="bg-primary z-50 mt-10">
            <div className="grid grid-cols-3 gap-12 justify-center border-y-2 border-info/50">
                {/* logo and text */}
                <div className="pl-8">
                    <div>
                        <img className="md:w-24 w-12 pb-8" src={logo} alt="" />
                    </div>
                    <div>
                        {contactInfo.text}
                    </div>
                </div>
                {/* Quick links */}
                <div className="pl-20">
                    <div>
                        <h3 className="text-lg font-semibold text-info text-start mt-5 py-1 pb-8">Quick Links</h3>
                    </div>
                    <div>
                        <ul className="list-none">
                            {contactInfo?.links?.map((link, index) => (
                                <li key={index} className="mb-1 pb-4">

                                    <span className="hover:text-info duration-300 hover:pl-2">
                                        <span>
                                            &#10095;
                                        </span>
                                        <span>
                                            {link}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                {/* Contact info */}
                <div className="pr-20">
                    <div>
                        <h3 className="text-lg font-semibold text-info text-start mt-5 py-1 pb-8">Contact Info</h3>
                    </div>

                    <div>
                        <ul className="list-none">
                            {contactInfo?.contact?.map((info, index) => (
                                <li key={index} className="mb-1 pb-4">
                                    <li className="flex gap-1 mb-1">
                                        {info.key === "Address" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 11.5A2.5 2.5 0 0 0 16.5 9A2.5 2.5 0 0 0 14 6.5A2.5 2.5 0 0 0 11.5 9a2.5 2.5 0 0 0 2.5 2.5M14 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S7 14.25 7 9a7 7 0 0 1 7-7M5 9c0 4.5 5.08 10.66 6 11.81L10 22S3 14.25 3 9c0-3.17 2.11-5.85 5-6.71C6.16 3.94 5 6.33 5 9Z" /></svg> : undefined}
                                        {info.key === "Email" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="m2.068 5.482l8.875 8.876a1.5 1.5 0 0 0 2.008.103l.114-.103l8.869-8.87c.029.11.048.222.058.337L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6c0-.12.01-.236.03-.35l.038-.168ZM20 4c.121 0 .24.01.355.031l.17.039l-8.52 8.52l-8.523-8.522c.11-.03.224-.05.34-.06L4 4h16Z" /></g></svg> : undefined}
                                        {info.key === "Phone" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12q-.4 0-.713-.288T18.926 11q-.325-2.325-1.963-3.963T13 5.075q-.425-.05-.713-.35T12 4q0-.425.3-.713t.7-.237q3.15.35 5.375 2.575T20.95 11q.05.4-.238.7T20 12Zm-4.175 0q-.325 0-.575-.225t-.375-.6q-.2-.725-.763-1.288t-1.287-.762q-.375-.125-.6-.375T12 8.15q0-.5.35-.813t.775-.212q1.4.325 2.413 1.338t1.337 2.412q.1.425-.225.775t-.825.35Zm4.125 9q-3.225 0-6.288-1.438t-5.425-3.8q-2.362-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3Z" /></svg> : undefined}
                                        {info.key}
                                    </li>
                                    <li className="ml-8">
                                        {info.value}
                                    </li>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            <div className="p-5 flex justify-center">
                Copyright © 2022, All Right Reserved - by Thinky Storm
            </div>

        </footer>

    );
};

export default Footer;