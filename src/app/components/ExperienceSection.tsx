'use client'

import React from 'react'
import { useState } from 'react';

const experiences = [
    {
        company: 'TMA Solutions',
        role: 'Frontend Developer',
        duration: 'Jan 2024 – Present',
        description: (<><h2 className="text-xl font-bold text-blue-600">TMA Solutions – Binh Dinh | 09/2021 – Present</h2>
            <div className='flex flex-col gap-4 pt-4'>
                <p>
                    At TMA Solutions, I worked as a Full-stack Developer, contributing to various software projects for international clients (Australia, US...). I was responsible for designing and developing web systems using modern technologies such as .NET Core/5/6, Angular, Blazor, SQL Server, and Power Platform. My tasks included building RESTful APIs, optimizing performance, handling bugs, and participating in regular client meetings and product demos.
                </p>
                <p>I contributed to several major systems, including an AI-driven risk management platform, a real estate management application, a real-time construction scheduling tool, and an approval workflow integrated with Power Automate. I also improved UI/UX, enhanced system performance, and integrated enterprise services such as Azure AD and Microsoft Graph.</p>
                <p>I take initiative in learning new technologies and sharing knowledge within the team to improve code quality and team efficiency. I was also trusted to represent the team in client meetings, presenting progress updates and proposing technical solutions.</p>
            </div>

        </>),
    },
    {
        company: 'FIMETECH',
        role: 'Fullstack Developer',
        duration: 'Aug 2022 – Dec 2023',
        description: (<><h2 className="text-xl font-bold text-blue-600">FIMETECH Co., Ltd | 09/2023 – 05/2025  (Part-time) </h2>
            <div className='flex flex-col gap-4 pt-4'>
                <p>
                   Worked on two travel technology platforms: Heyotrip and a Transportation Application, both supporting global booking of flights, buses, hotels, and other travel services with digital and traditional payment options. These platforms aimed to deliver a seamless, secure booking experience for users.
                </p>
                <p>At Heyotrip (Laravel + MySQL), I developed and maintained the admin CMS, implemented core features to support customer services and marketing, collaborated with PMs for system enhancements, and provided weekly reports and demos. On the Transportation Application (.NET 8 + ReactJS + Supabase), I contributed to building and optimizing admin dashboards, enhanced performance, researched solutions, and participated in daily meetings for progress tracking and team alignment.</p>
            </div>

        </>),
    }
];

export const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section id="experience" className="min-h-screen container mx-auto px-8 md:px-24">
            <h2 className="text-4xl text-gray-300 font-bold mb-8">II. Experience</h2>
            <div className='flex flex-col md:flex-row gap-6 about-layout'>
                <div className="flex flex-row md:flex-col border-b-2 h-full md:border-b-0 md:border-r-2 border-slate-700">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 text-left w-full text-white transition-all duration-200 relative
                ${index === activeTab ? 'bg-slate-900' : 'hover:bg-slate-800'}
                `}
                            onClick={() => setActiveTab(index)}
                        >
                            <span className="relative z-10">{exp.company}</span>
                            {index === activeTab && (
                                <div
                                    className={`
                                    absolute bg-cyan-400 rounded-l-sm
                                    md:right-0 md:top-0 md:h-full md:w-1
                                    right-0 bottom-0 h-1 w-full
                                    `}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 text-white px-4 text-justify">
                    {experiences[activeTab].description}
                </div>
            </div>

        </section>
    )
}
