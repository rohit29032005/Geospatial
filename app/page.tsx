import Link from "next/link"
import Image from "next/image"
import { Globe, Users, BookOpen, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6" />
            <span className="text-lg font-bold">GeoSpatial Club VIT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/members" className="text-sm font-medium transition-colors hover:text-primary">
              Members
            </Link>
            <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Join Us</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Explore the World of Geographic Information Systems
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join VIT's Geospatial Club to learn about GIS technologies, participate in workshops, and
                    collaborate on innovative projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/events">Upcoming Events</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="World map visualization"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What is GIS?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Geographic Information Systems (GIS) are powerful tools that capture, store, analyze, and visualize
                  spatial or geographic data. At the Geospatial Club, we explore how GIS technologies are transforming
                  fields from urban planning to environmental conservation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle>Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn to create interactive maps and visualize geographic data using modern GIS tools.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Join a community of students and professionals passionate about geospatial technologies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access workshops, tutorials, and resources to enhance your GIS skills and knowledge.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join us for workshops, seminars, and hands-on sessions to enhance your GIS skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>GIS Workshop {i}</CardTitle>
                    <CardDescription>April {10 + i}, 2025 • 2:00 PM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Learn about advanced mapping techniques and spatial analysis in this hands-on workshop.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/events">
                        Register
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest Blog Posts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore articles, tutorials, and insights from our club members.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Blog+Image+${i}`}
                    width={400}
                    height={200}
                    alt={`Blog post ${i} thumbnail`}
                    className="aspect-video w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Understanding Spatial Analysis</CardTitle>
                    <CardDescription>March {20 + i}, 2025 • 5 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      An introduction to spatial analysis techniques and their applications in real-world scenarios.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href="/blog">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Community</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Become a member of VIT's Geospatial Club and connect with fellow GIS enthusiasts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">Join Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/members">Meet Our Members</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg border bg-background p-8">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Stay Updated</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Subscribe to our newsletter for updates on events and resources.
                  </p>
                  <form className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    <Button type="submit">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6" />
            <span className="text-lg font-bold">GeoSpatial Club VIT</span>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
                Events
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">© 2025 Geospatial Club VIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

