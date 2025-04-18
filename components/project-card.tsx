"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubLink: string
  demoLink?: string
}

export default function ProjectCard({ title, description, image, tags, githubLink, demoLink }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden h-full flex flex-col rounded-2xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          {demoLink && (
            <Button asChild size="sm">
              <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
