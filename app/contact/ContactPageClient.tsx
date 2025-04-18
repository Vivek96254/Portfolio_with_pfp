"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   setIsSubmitting(true)

  //   // Simulate form submission
  //   setTimeout(() => {
  //     console.log(values)
  //     setIsSubmitting(false)
  //     form.reset()
  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for your message. I'll get back to you soon.",
  //     })
  //   }, 1500)
  // }

  
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   setIsSubmitting(true)

  //   emailjs
  //     .send(
  //       "service_djqp5zm",     // 🔁 Replace with your EmailJS Service ID
  //       "template_f4jkdfe",    // 🔁 Replace with your EmailJS Template ID
  //       {
  //         name: values.name,
  //         email: values.email,
  //         subject: values.subject,
  //         message: values.message,
  //       },
  //       "YtsyvKWEwaJtp0kIj"      // 🔁 Replace with your EmailJS Public Key
  //     )
  //     .then(
  //       () => {
  //         setIsSubmitting(false)
  //         form.reset()
  //         toast({
  //           title: "Message sent!",
  //           description: "Thank you for your message. I'll get back to you soon.",
  //         })
  //       },
  //       (error) => {
  //         console.error("Email sending error:", error)
  //         setIsSubmitting(false)
  //         toast({
  //           title: "Error",
  //           description: "Something went wrong. Please try again.",
  //         })
  //       }
  //     )
  // }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    emailjs
      .send(
        "service_djqp5zm", // replace with your EmailJS service ID
        "template_f4jkdfe", // replace with your EmailJS template ID
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "YtsyvKWEwaJtp0kIj" // replace with your EmailJS public key
      )
      .then(() => {
        setIsSubmitting(false)
        form.reset()
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        alert("Message sent successfully!")
      })
      .catch((error) => {
        setIsSubmitting(false)
        console.error("EmailJS error:", error)
        toast({
          title: "Something went wrong.",
          description: "Please try again later.",
          variant: "destructive",
        })
      })
  }
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Have a question or want to work together? Feel free to reach out using the form below or through my social media
        channels.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject of your message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" className="min-h-32" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of these channels. I typically respond within 24-48 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:vivekvinay96254@gmail.com" className="hover:text-primary transition-colors">
                  vivekvinay96254@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://www.linkedin.com/in/vivekvinay96254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/vivekvinay96254
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com/Vivek96254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/Vivek96254
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground">
              I'm currently available for freelance work, consulting, and full-time positions. If you have a project
              that needs expertise in machine learning, NLP, or full-stack development, I'd love to hear about it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 5:00 PM (PST)
              <br />
              Weekend: By appointment
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
