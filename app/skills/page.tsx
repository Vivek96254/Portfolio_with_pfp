import type { Metadata } from "next"
import SkillCategory from "@/components/skill-category"

export const metadata: Metadata = {
  title: "Skills | Vivek Kumar",
  description: "Explore my technical skills in programming languages, frameworks, tools, and ML/NLP models.",
}

export default function SkillsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        My technical expertise spans across various programming languages, frameworks, tools, and machine learning
        models. Here's a comprehensive overview of my skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <SkillCategory
          title="Languages"
          skills={[
            { name: "Python", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "SQL", level: 80 },
            { name: "C++", level: 70 },
            { name: "Java", level: 65 },
            { name: "R", level: 60 },
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
            { name: "Flask", level: 80 },
            { name: "Express", level: 75 },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory
          title="Tools"
          skills={[
            { name: "Git", level: 90 },
            { name: "Docker", level: 85 },
            { name: "Jenkins", level: 80 },
            { name: "AWS", level: 75 },
            { name: "GCP", level: 70 },
            { name: "Kubernetes", level: 65 },
            { name: "Tableau", level: 60 },
          ]}
        />
        <SkillCategory
          title="ML/NLP Models"
          skills={[
            { name: "BERT/RoBERTa", level: 90 },
            { name: "Transformers", level: 85 },
            { name: "CNN/RNN", level: 85 },
            { name: "GPT Models", level: 80 },
            { name: "Regression", level: 90 },
            { name: "Classification", level: 85 },
            { name: "Clustering", level: 75 },
          ]}
        />
      </div>
    </main>
  )
}
