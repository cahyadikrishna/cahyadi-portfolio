import { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '~/api/sanity-api';
import { type Project } from '~/entities';

export default function ProjectListSection() {
  const builder = imageUrlBuilder(sanityClient);
  const [projects, setProjects] = useState<Project[]>([]);

  async function getProjects() {
    const projects = await sanityClient.fetch<Project[]>(
      '*[_type == "project"]'
    );
    setProjects(projects);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-[20px] mt-[20px] lg:mt-[40px]">
      <div className="grid grid-cols-1 gap-[20px] mt-[20px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg:mt-[30px]">
        {projects.map((project) => (
          <div key={project._id} className="relative group">
            <a href="#" className="absolute h-full w-full z-10" />
            <div className="bg-gray-main relative rounded-[30px] h-[300px] w-full lg:h-[400px] overflow-hidden">
              <img
                alt=""
                src={builder.image(project.picture!).url()}
                className="
                  trainsition delay-125 duration-300 ease-in-out absolute w-full h-full object-cover rounded-[30px] group-hover:scale-110"
              />

              <div className="relative p-[20px] lg:p-[28px]">
                <h2 className="font-semibold text-white text-[20px] lg:text-[24px]">
                  {project.name}
                </h2>
                <p className="text-[10px] text-white lg:text-[12px] leading-normal">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
