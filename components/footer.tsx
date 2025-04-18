import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py:12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-2">
            Vivek<span className="text-primary">Kumar</span>
          </h3>
          <p className="text-muted-foreground">ML Engineer & Full-Stack Developer</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <Link href="https://github.com/Vivek96254" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vivekvinay96254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:vivekvinay96254@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vivek Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
