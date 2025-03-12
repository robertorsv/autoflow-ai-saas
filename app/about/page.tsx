import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SocialAuth } from "@/components/social-auth"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md"></div>
              <span className="font-bold text-lg">Powerful AI Automation</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <SocialAuth />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">About AutoFlow</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're on a mission to help businesses automate their workflows and focus on what matters most.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Our Story</h2>
                  <p className="text-muted-foreground">
                    AutoFlow was founded in 2018 by a team of engineers who were frustrated with the inefficiencies they
                    saw in their daily work. They believed that automation could free people from repetitive tasks and
                    allow them to focus on creative and strategic work.
                  </p>
                  <p className="text-muted-foreground">
                    What started as a simple tool to automate their own workflows quickly grew into a comprehensive
                    platform used by thousands of companies worldwide. Today, AutoFlow helps businesses of all sizes
                    streamline their processes, reduce errors, and save time.
                  </p>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Our office"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">Our Mission & Vision</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Mission</h3>
                  <p className="text-muted-foreground">
                    Our mission is to empower businesses to work smarter, not harder, by providing intuitive automation
                    tools that anyone can use, regardless of technical expertise.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Vision</h3>
                  <p className="text-muted-foreground">
                    We envision a future where automation is accessible to everyone, freeing people from repetitive
                    tasks and enabling them to focus on creative and strategic work that drives innovation and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate people behind AutoFlow
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=160&width=160&text=Team Member ${i}`}
                      alt={`Team Member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Team Member {i}</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder & {i % 2 === 0 ? "CTO" : "CEO"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">Our Values</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly pushing the boundaries of what's possible with automation technology.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Simplicity</h3>
                <p className="text-muted-foreground">
                  We believe powerful technology should be simple to use and accessible to everyone.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Customer Success</h3>
                <p className="text-muted-foreground">
                  Our customers' success is our success. We're committed to helping them achieve their goals.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in open communication and being honest with our customers and each other.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work together as a team and with our customers to create the best possible solutions.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  We're always learning and improving, both as individuals and as a company.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">Ready to Transform Your Workflow?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of companies that use AutoFlow to automate their processes and boost productivity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AutoFlow. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}