"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillCategory from "@/components/skill-category"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Vivek Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            ML Engineer & Full-Stack Developer
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            I specialize in machine learning, natural language processing, and full-stack web development. Building
            intelligent systems that solve real-world problems is my passion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://drive.google.com/file/d/1RO0G5WyFSEvRAiIp0A0hfGKKoIy0cg7h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Link href="https://github.com/Vivek96254" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/vivekvinay96254" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:vivekvinay96254@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/vivek_formal.jpg?height=320&width=32" alt="Alex Chen" fill className="object-cover" priority />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button asChild variant="outline">
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="YouTube Sentiment Analysis"
            description="A tool using RoBERTa to identify and display top positive/negative comments on YouTube videos."
            image="/YTSA.png?height=400&width=600"
            tags={["Python", "PyTorch", "RoBERTa", "React"]}
            githubLink="https://github.com/Vivek96254/Youtube_Comments_Sentimental_Analysis"
            demoLink="https://github.com/Vivek96254/Youtube_Comments_Sentimental_Analysis"
          />
          <ProjectCard
            title="SkillScanATS"
            description="AI-powered resume checker with a Jenkins-based CI/CD pipeline for automated deployment."
            image="/skillscan.png?height=400&width=600"
            tags={["Python", "Jenkins", "Docker", "NLP"]}
            githubLink="https://github.com/Vivek96254/SkillScanATS"
            demoLink="https://skill-scan-ats-mocha.vercel.app/"
          />
          <ProjectCard
            title="Web Wake"
            description="A Python script to keep your website awake for free hosted websites that have a cold start. Keeps websites awake, serves as a lightweight uptime monitor, and can increase website traffic."
            image="/webwake.png?height=400&width=600"
            tags={["Python", "Web", "Automation"]}
            githubLink="https://github.com/Vivek96254/WebWake"
            demoLink="https://github.com/Vivek96254/WebWake"
          />
        </div>
      </section>

      {/* Skills Section Preview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Languages"
            skills={[
              { name: "Python", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "TypeScript", level: 85 },
              { name: "SQL", level: 80 },
              { name: "C++", level: 70 },
            ]}
          />
          <SkillCategory
            title="Frameworks"
            skills={[
              { name: "PyTorch", level: 90 },
              { name: "TensorFlow", level: 85 },
              { name: "React", level: 90 },
              { name: "Next.js", level: 85 },
              { name: "Django", level: 75 },
            ]}
          />
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/skills">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
