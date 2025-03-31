"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Introduction to Geographic Information Systems",
    excerpt: "Learn about the fundamentals of GIS and how it's used across different industries.",
    date: "March 28, 2025",
    author: "Alex Johnson",
    category: "Basics",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400&text=GIS+Intro",
  },
  {
    id: 2,
    title: "Advanced Spatial Analysis Techniques",
    excerpt: "Explore advanced methods for analyzing spatial data and extracting meaningful insights.",
    date: "March 20, 2025",
    author: "Sam Wilson",
    category: "Advanced",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400&text=Spatial+Analysis",
  },
  {
    id: 3,
    title: "Remote Sensing Applications in Agriculture",
    excerpt: "Discover how satellite imagery is revolutionizing farming practices and crop management.",
    date: "March 15, 2025",
    author: "Taylor Rodriguez",
    category: "Applications",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400&text=Remote+Sensing",
  },
  {
    id: 4,
    title: "Creating Interactive Web Maps with Leaflet",
    excerpt: "A step-by-step tutorial on building interactive web maps using the Leaflet JavaScript library.",
    date: "March 10, 2025",
    author: "Jordan Lee",
    category: "Tutorials",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400&text=Web+Maps",
  },
  {
    id: 5,
    title: "GIS for Urban Planning and Smart Cities",
    excerpt: "How geospatial technologies are helping create more efficient and sustainable urban environments.",
    date: "March 5, 2025",
    author: "Casey Martinez",
    category: "Applications",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400&text=Urban+GIS",
  },
  {
    id: 6,
    title: "Open Source GIS Tools You Should Know",
    excerpt: "A comprehensive guide to free and open-source GIS software for students and professionals.",
    date: "February 28, 2025",
    author: "Riley Thompson",
    category: "Tools",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400&text=Open+Source+GIS",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const categories = ["all", ...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
            Explore articles, tutorials, and insights from our club members.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <Image
                src={post.image || "/placeholder.svg"}
                width={400}
                height={200}
                alt={post.title}
                className="aspect-video w-full object-cover"
              />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>By {post.author}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

