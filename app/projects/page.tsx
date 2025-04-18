import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects | Vivek Kumar",
  description: "Explore my portfolio of machine learning, NLP, and full-stack development projects.",
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "YouTube Sentiment Analysis",
      description:
        "A tool using RoBERTa to identify and display top positive/negative comments on YouTube videos. The application processes comments in real-time and provides sentiment scores with visualization.",
      image: "/YTSA.png?height=400&width=600",
      tags: ["Python", "PyTorch", "RoBERTa", "VADER", "NLP"],
      githubLink: "https://github.com/Vivek96254/Youtube_Comments_Sentimental_Analysis",
      demoLink: "https://github.com/Vivek96254/Youtube_Comments_Sentimental_Analysis",
    },
    {
      title: "SkillScanATS",
      description:
        "AI-powered resume checker with a Jenkins-based CI/CD pipeline for automated deployment. The tool analyzes resumes against job descriptions and provides actionable feedback to improve match rates.",
      image: "/skillscan.png?height=400&width=600",
      tags: ["Python", "Jenkins", "Docker", "NLP", "CI/CD"],
      githubLink: "https://github.com/Vivek96254/SkillScanATS",
      demoLink: "https://skill-scan-ats-mocha.vercel.app/",
    },
    {
      title: "Web Wake",
      description:
        "A Python script to keep your website awake for free hosted websites that have a cold start. Keeps websites awake, serves as a lightweight uptime monitor, and can increase website traffic.",
      image: "/webwake.png?height=400&width=600",
      tags: ["Python", "Toast", "Automation"],
      githubLink: "https://github.com/Vivek96254/WebWake",
      demoLink: "https://github.com/Vivek96254/WebWake",
    },
    {
      title: "Student Management System",
      description:
        "A Student Management System built with Spring Boot and PostgreSQL. Provides comprehensive tools for managing student data, courses, and academic records.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Web Development"],
      githubLink: "https://github.com/Vivek96254",
      demoLink: "https://demo.com",
    },
    {
      title: "Flappy Bird Game",
      description:
        "A recreation of the classic Flappy Bird game implemented in Java with Swing. Features smooth animations and responsive controls.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "Swing", "Game Development"],
      githubLink: "https://github.com/Vivek96254",
      demoLink: "https://demo.com",
    },
    {
      title: "Yellow Trip Data Analysis",
      description:
        "Analysis done on Taxi data from NYC. Explores patterns, trends, and insights from the Yellow Taxi trip data to inform business decisions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Data Analysis", "Pandas", "Visualization"],
      githubLink: "https://github.com/Vivek96254",
      demoLink: "https://demo.com",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Explore my portfolio of machine learning, natural language processing, and full-stack development projects. Each
        project demonstrates different skills and technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </main>
  )
}
