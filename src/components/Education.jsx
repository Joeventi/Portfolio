import { motion } from "framer-motion"
import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {Education.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <img
                alt={project.title}
                src={project.image}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">
                {project.title} - <span className="text-base text-stone-500">{project.company}</span>
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, childIndex) => (
                  <span key={childIndex} className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;