'use client'

import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { projects } from '../data/project-data';
import ProjectDetailModal from './ProjectDetailModal';

export const ProjectSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState('')
  return (
    <section id="projects" className="min-h-screen container mx-auto px-8 md:px-24">
      {selectedProject && (
        <ProjectDetailModal
          slug={selectedProject}
          onClose={() => setSelectedProject('')}
        />
      )}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Nền mờ có fade-in */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 opacity-100"
            onClick={() => setSelectedImage(null)}
          ></div>

          {/* Ảnh phóng to có hiệu ứng scale và opacity */}
          <img
            src={selectedImage}
            className="relative max-w-[90%] max-h-[90%] rounded shadow-lg z-10 transform transition duration-300 scale-100 opacity-100"
            alt="Enlarged project"
          />
        </div>
      )}


      <h2 className="text-4xl text-gray-300 font-bold mb-8">III. Projects</h2>
      <p className="mb-8">
        Here are some of the key projects I have contributed to or developed.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <div key={index} className="group relative">
            <Card className="w-full h-full flex flex-col justify-between transition-transform duration-300  transform group" style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
            }}>
              <CardMedia
                component="img"
                image={project.image}
                className="h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedImage(project.image);
                }}
              />
              <div className="flex flex-col flex-grow justify-between">
                <CardContent className="bg-gray-800 text-white flex-grow">
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography className="line-clamp-3">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions className="bg-gray-800 text-white relative h-10 overflow-hidden group font-bold">
                  {/* Web Development: chỉ hiện trên md trở lên */}
                  <div className="absolute inset-0 hidden md:flex items-center gap-2 px-4 transition-all duration-500 ease-in-out translate-y-0 group-hover:-translate-y-full">
                    <Button size="small">Web Development</Button>
                  </div>

                  {/* View Project: hiện mặc định ở mobile và hover ở md */}
                  <div className="absolute inset-0 flex items-start gap-2 px-2 transition-all duration-500 ease-in-out translate-y-0 md:translate-y-full md:group-hover:translate-y-0">
                    <a
                      href={`/projects/${project.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline"
                    >
                      <Button  size="small" className="text-black hover:text-blue-600">
                        View Project
                      </Button>
                    </a>
                  </div>
                </CardActions>





              </div>
            </Card>
          </div>
        ))}

      </div>


    </section>
  )
}
