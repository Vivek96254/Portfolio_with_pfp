"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
