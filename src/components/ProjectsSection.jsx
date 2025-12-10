import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tourism Website",
    description: "A responsive tourism website built using HTML, CSS, and Bootstrap to showcase destinations with a simple and user-friendly layout.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://travelescape.ccbp.tech",
    githubUrl: "https://github.com/aliyalmas",
  },
  {
    id: 2,
    title: "Snake Game",
    description: "A classic Snake Game built using Python, showcasing basic game logic, movement control, and interactive gameplay.",
    image: "/projects/project2.png",
    tags: ["Python", "Turtle"],
    demoUrl: "https://github.com/aliyalmas/Snake_Game",
    githubUrl: "https://github.com/aliyalmas/Snake_Game",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with ReactJS and TailwindCSS, featuring responsive design and smooth UI animations.",
    image: "/projects/project3.png",
    tags: ["ReactJS", "Framer Motion", "Tailwind CSS", "GitHub"],
    demoUrl: "https://react-portfolio-flax-eight.vercel.app/",
    githubUrl: "https://github.com/aliyalmas/React_Portfolio",
  },
  {
    id: 4,
    title: "Hungry-heaven",
    description: "Created a food delivery platform that delivers both responsive design and a competent user interface.",
    image: "/projects/project4.png",
    tags: ["ReactJS", "Redux", "CSS", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://github.com/aliyalmas",
    githubUrl: "https://github.com/aliyalmas",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Built a task management system with user and admin roles, enabling task creation, assignment, and real-time updates.",
    image: "/projects/project5.png",
    tags: ["ReactJS", "Node.js", "Express.js", "MongoDB", "CSS"],
    demoUrl: "https://github.com/aliyalmas/Zidio_Task_Management",
    githubUrl: "https://github.com/aliyalmas/Zidio_Task_Management",
  },
  {
    id: 6,
    title: "BeautyVerse",
    description:
      "As a part of my college project I’m developing an analysis system for skin types which provides customized skincare recommendations alongside dermatologist consultations along with event-specific makeup solutions for users.",
    image: "/projects/project6.png",
    tags: ["TensorFlow", "OpenCV", "Flask", "MongoDB", "AR", "ReactJS", "Tidio Chatbot", "CSS"],
    demoUrl: "https://github.com/aliyalmas",
    githubUrl: "https://github.com/aliyalmas",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aliyalmas"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
