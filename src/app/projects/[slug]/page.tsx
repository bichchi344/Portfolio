'use client'
import { projects } from "@/app/data/project-data";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import Image from 'next/image';

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = use(params);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <div className="mx-auto my-10 px-8 rounded-2xl md:px-24">
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 opacity-100"
                    onClick={() => setSelectedImage(null)}
                ></div>

                <Image
                    width={800}
                    height={600}
                    src={selectedImage}
                    className="relative max-w-[90%] max-h-[90%] rounded shadow-lg z-10 transform transition duration-300 scale-100 opacity-100"
                    alt="Enlarged project"
                    onClick={(e) => {
                    e.preventDefault();
                    setSelectedImage(project.image);
                    }}
                />
                </div>
            )}
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <Image
                    width={500}
                    height={500}
                    src={project.image}
                    alt={project.name}
                    className="w-full md:w-1/3 rounded-xl transition-transform duration-300 hover:scale-105"
                />
                <div className="flex-1">
                    <h2 className="text-5xl font-bold">{project.name}</h2>
                    <p className="text-sm text-gray-200 mt-1">{project.shortDescription}</p>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <p>{project.description}</p>
            </div>

            <div className="rounded-2xl py-6 space-y-6">
                <h2 className="text-2xl font-bold">Main Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 px-8">
                    {project.responsibility?.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))}
                </ul>

                <div>
                    <h3 className="text-xl font-semibold mt-6">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-3 mt-3">
                        {project.techStack?.map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-200 hover:text-black transition"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const runtime = 'nodejs';
