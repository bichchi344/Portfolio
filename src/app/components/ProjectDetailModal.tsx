// components/ProjectDetailModal.tsx

import { useState } from "react"
import { Project, projects } from "../data/project-data"

interface Props {
    slug: string
    onClose: () => void
}

export default function ProjectDetailModal({ slug, onClose }: Props) {
    console.log('ProjectDetailModal', slug);
   const project = projects.find(p => p.slug === slug);

    if (!project) {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-700">Project not found</p>
                <button onClick={onClose} className="mt-4 text-blue-500 hover:underline">Close</button>
            </div>
        </div> )
    }
    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
            <div className="bg-white  shadow-xl max-w-4xl w-[90%] p-6 relative opacity-100">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">
                    ✕
                </button>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full md:w-1/3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
                        <p className="text-sm text-gray-500 mt-1">{project.shortDescription}</p>
                    </div>
                </div>

                <div className="mt-6 text-gray-700 space-y-4">
                    <p>{project.description}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Main Responsibilities</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {/* {project.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))} */}
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {/* {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full shadow"
              >
                {tech}
              </span>
            ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
