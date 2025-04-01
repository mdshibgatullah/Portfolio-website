import ProjectCart from './ProjectCart';
import './Projects.css';
import ResumeImg1 from '../../assets/image/resumeImg-1.png'
import ResumeImg2 from '../../assets/image/resumeImg-2.png'
import ResumeImg3 from '../../assets/image/resumeImg-3.png'
import ResumeImg4 from '../../assets/image/resumeImg-4.png'


const projects = [
    {
      id: 0,
      count: '01',
      title: "Online Education",
      description: "This is online education project. skills, and experience with a modern, responsive design.",
      technologies: ["HTML-5,", "CSS-3,", "JavaScript."],
      image: ResumeImg1
    },
    {
      id: 1,
      count: '02',
      title: "E-learning Platform",
      description: "This is a fully functional e-learning platform website where containing courses, students and rating system.",
      technologies: ["HTML-5", "CSS-3,", "React js."],
      image: ResumeImg2
    },
    {
      id: 2,
      count: '03',
      title: "New Modern Appartment",
      description: "A task and project management application allowing users to create, organize, and track tasks with drag-and-drop functionality.",
      technologies: ["HTML-5,", "CSS-3,", "Bootstrap."],
      image: ResumeImg3
    },
    {
      id: 3,
      count: '04',
      title: "Blogging Platform",
      description: "A minimalistic blogging platform where users can write, edit, and share posts with markdown support and a commenting system.",
      technologies: ["Next.js,", "TailwindCSS,", "React Quill."],
      image: ResumeImg4
    }
  ];
  


const Projects = () => {
    return (
        <section id='project'>
          <h1>My <span>Projects</span></h1>
            <div className="project-container">
                <ProjectCart projects={projects}/>
            </div>
        </section>
    );
};

export default Projects;