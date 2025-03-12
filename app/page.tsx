import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WorkflowCarousel } from "@/components/workflow-carousel"
import { SocialAuth } from "@/components/social-auth"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function Home() {
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
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#pricing"
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                    Automate Your Workflow, Amplify Your Productivity
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our intelligent automation platform streamlines your processes, eliminates repetitive tasks, and
                    helps your team focus on what matters most.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#demo">
                    <Button size="lg" className="gap-1">
                      Get a Demo <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#pricing">
                    <Button size="lg" variant="outline">
                      View Pricing
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>14-day money-back guarantee</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border shadow-lg">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Dashboard Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
                  Streamline Your Workflow with Powerful AI Automation
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform offers a suite of tools designed to automate repetitive tasks, optimize processes, and
                  boost productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <WorkflowCarousel />
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Live Demo
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">See AutoFlow in Action</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Watch how our automation software can transform your workflow and save you hours every week.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" /> Watch Demo
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule a Personalized Demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" variant="outline" className="h-16 w-16 rounded-full">
                    <Play className="h-6 w-6" />
                    <span className="sr-only">Play demo video</span>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Demo Video Thumbnail"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your business
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-3xl font-bold">$29</div>
                  <CardDescription>per month, billed annually</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>5 automation workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>1,000 tasks per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Basic integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="text-center text-sm font-medium text-primary">Most Popular</div>
                  <CardTitle>Professional</CardTitle>
                  <div className="text-3xl font-bold">$79</div>
                  <CardDescription>per month, billed annually</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited automation workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>10,000 tasks per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Advanced integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Team collaboration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-3xl font-bold">Custom</div>
                  <CardDescription>Contact us for pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited everything</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>24/7 premium support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom training</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">All plans come with a 14-day money-back guarantee</p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Trusted by thousands of companies worldwide
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
                  Ready to Transform Your Workflow?
                </h2>
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