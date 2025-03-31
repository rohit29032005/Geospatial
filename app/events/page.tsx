"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample event data
const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to QGIS Workshop",
    date: "April 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Hub, Main Campus",
    description:
      "Learn the basics of QGIS, an open-source Geographic Information System. This hands-on workshop will cover installation, interface navigation, and basic mapping techniques.",
    capacity: 30,
    image: "/placeholder.svg?height=200&width=400&text=QGIS+Workshop",
  },
  {
    id: 2,
    title: "Remote Sensing Seminar",
    date: "April 22, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    description:
      "Join us for a seminar on satellite imagery and remote sensing applications. Our guest speaker from NASA will discuss the latest advancements in Earth observation technologies.",
    capacity: 100,
    image: "/placeholder.svg?height=200&width=400&text=Remote+Sensing",
  },
  {
    id: 3,
    title: "GIS Hackathon",
    date: "May 5-6, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Innovation Center",
    description:
      "A two-day hackathon focused on developing innovative solutions to urban challenges using GIS. Form teams and compete for exciting prizes!",
    capacity: 50,
    image: "/placeholder.svg?height=200&width=400&text=GIS+Hackathon",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Spatial Analysis Workshop",
    date: "March 10, 2025",
    location: "Tech Hub, Main Campus",
    image: "/placeholder.svg?height=200&width=400&text=Spatial+Analysis",
  },
  {
    id: 5,
    title: "Career in GIS Panel Discussion",
    date: "February 25, 2025",
    location: "Virtual (Zoom)",
    image: "/placeholder.svg?height=200&width=400&text=GIS+Careers",
  },
  {
    id: 6,
    title: "Mapping for Disaster Response",
    date: "January 15, 2025",
    location: "Innovation Center",
    image: "/placeholder.svg?height=200&width=400&text=Disaster+Mapping",
  },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Events</h1>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
            Join us for workshops, seminars, hackathons, and more to enhance your GIS skills.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="py-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="flex flex-col">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={event.title}
                    className="aspect-video w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-4 w-4 mt-0.5" />
                        <span>Capacity: {event.capacity}</span>
                      </div>
                      <p className="pt-2">{event.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="py-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <Card key={event.id}>
                  <Image
                    src={event.image || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={event.title}
                    className="aspect-video w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Photos
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {activeTab === "upcoming" && (
          <div className="space-y-6 py-8">
            <h2 className="text-2xl font-bold text-center">Event Calendar</h2>
            <div className="border rounded-lg p-4">
              <p className="text-center text-muted-foreground py-12">
                Interactive calendar will be displayed here, showing all upcoming events.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

