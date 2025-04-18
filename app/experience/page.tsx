import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Experience & Education | Vivek Kumar",
  description: "My professional experience and educational background in machine learning and software development.",
}

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Intern Army",
      period: "Apr 2024 - May 2024",
      description: "",
      bulletPoints: [
        "Created interactive dashboards and data visualizations in Tableau, increasing insights clarity by 40%.",
        "Created and presented data-driven stories for stakeholders, enhancing decision-making processes by 30%.",
        "Applied data cleaning techniques and manipulated data sets improving accuracy and reliability by 50%",
      ],
      technologies: ["Python", "Tableau"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      specialization: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "Aug 2022 - Present",
      description: "GPA: 8.60",
    },
    {
      degree: "Science with PCM",
      specialization: "",
      institution: "Bhagat Public School",
      location: "Kota, Rajasthan",
      period: "April 2020 - March 2021",
      description: "Percentage: 73.8",
    },
  ]

  const certifications = [
    {
      name: "Introduction to Programming in C",
      issuer: "NPTEL",
      year: "",
      link: "https://drive.google.com/file/d/1Usg8HIrFrI1MW4kOmiHh0OZgUnI5M0k4/view",
    },
    {
      name: "Complete Machine Learning and Data Science",
      issuer: "GeeksforGeeks (GFG)",
      year: "",
      link: "https://www.geeksforgeeks.org/certificate/1ebbb61ce310d494169c23e97a584393?utm_source=socials&utm_medium=cc_link",
    },
    {
      name: "Introduction to DevOps",
      issuer: "IBM | Coursera",
      year: "",
      link: "https://coursera.org/share/358b44197eb093e4c2a613c0498d0802",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Experience & Education</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        My professional journey in machine learning and software development, along with my educational background.
      </p>

      {/* Professional Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="rounded-2xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle className="text-xl">
                    {exp.title} at {exp.company}
                  </CardTitle>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {exp.bulletPoints && exp.bulletPoints.length > 0 ? (
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {exp.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-4">{exp.description}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="rounded-2xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle className="text-xl">
                    {edu.degree} {edu.specialization && `in ${edu.specialization}`}
                  </CardTitle>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
                <p className="text-lg font-medium">
                  {edu.institution}, {edu.location}
                </p>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  {cert.issuer} {cert.year && `• ${cert.year}`}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    View Certificate
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
