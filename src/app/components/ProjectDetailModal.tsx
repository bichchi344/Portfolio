// components/ProjectDetailModal.tsx
'use client';
import { projects } from "@/app/data/project-data";
import Image from 'next/image';
import { useState } from 'react';

interface ProjectDetailModalProps {
  slug: string;
  onClose: () => void;
}

export default function ProjectDetailModal({ slug, onClose }: ProjectDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xs max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 shadow-xl">
        <button
          className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            ></div>
            <Image
              src={selectedImage}
              width={800}
              height={600}
              className="relative z-10 max-w-[90%] max-h-[90%] rounded shadow-lg"
              alt="Enlarged project"
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            width={500}
            height={500}
            src={project.image}
            alt={project.name}
            className="w-full md:w-1/3 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(project.image)}
          />
          <div className="flex-1">
            <h2 className="text-4xl font-bold">{project.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{project.shortDescription}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p>{project.description}</p>
        </div>

        <div className="rounded-2xl py-6 space-y-6">
          <h2 className="text-2xl font-bold">Main Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 px-4">
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
    </div>
  );
}
