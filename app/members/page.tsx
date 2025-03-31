"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample member data
const members = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "President",
    year: "4th Year",
    department: "Civil Engineering",
    interests: ["Remote Sensing", "Urban Planning"],
    image: "/placeholder.svg?height=150&width=150&text=Alex",
  },
  {
    id: 2,
    name: "Sam Wilson",
    role: "Vice President",
    year: "3rd Year",
    department: "Computer Science",
    interests: ["Web GIS", "Data Visualization"],
    image: "/placeholder.svg?height=150&width=150&text=Sam",
  },
  {
    id: 3,
    name: "Taylor Rodriguez",
    role: "Secretary",
    year: "4th Year",
    department: "Environmental Science",
    interests: ["Conservation GIS", "Spatial Analysis"],
    image: "/placeholder.svg?height=150&width=150&text=Taylor",
  },
  {
    id: 4,
    name: "Jordan Lee",
    role: "Treasurer",
    year: "2nd Year",
    department: "Civil Engineering",
    interests: ["3D Mapping", "Infrastructure Planning"],
    image: "/placeholder.svg?height=150&width=150&text=Jordan",
  },
  {
    id: 5,
    name: "Casey Martinez",
    role: "Technical Lead",
    year: "3rd Year",
    department: "Computer Science",
    interests: ["Spatial Databases", "Mobile GIS"],
    image: "/placeholder.svg?height=150&width=150&text=Casey",
  },
  {
    id: 6,
    name: "Riley Thompson",
    role: "Event Coordinator",
    year: "2nd Year",
    department: "Architecture",
    interests: ["Urban GIS", "Spatial Design"],
    image: "/placeholder.svg?height=150&width=150&text=Riley",
  },
  {
    id: 7,
    name: "Avery Garcia",
    role: "Content Creator",
    year: "3rd Year",
    department: "Environmental Science",
    interests: ["Climate Modeling", "Remote Sensing"],
    image: "/placeholder.svg?height=150&width=150&text=Avery",
  },
  {
    id: 8,
    name: "Morgan Patel",
    role: "Member",
    year: "1st Year",
    department: "Computer Science",
    interests: ["Web Development", "GIS Applications"],
    image: "/placeholder.svg?height=150&width=150&text=Morgan",
  },
]

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.interests.some((interest) => interest.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesRole = roleFilter === "all" || member.role === roleFilter

    return matchesSearch && matchesRole
  })

  const roles = ["all", ...new Set(members.map((member) => member.role))]

  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Members</h1>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
            Meet the passionate individuals who make up VIT's Geospatial Club.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-4">
          <Input
            placeholder="Search by name, department, or interests..."
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role === "all" ? "All Roles" : role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map((member) => (
            <Card key={member.id}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={150}
                    height={150}
                    alt={`Photo of ${member.name}`}
                    className="rounded-full object-cover"
                  />
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Year:</span>
                    <span className="text-muted-foreground">{member.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Department:</span>
                    <span className="text-muted-foreground">{member.department}</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-medium">Interests:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {member.interests.map((interest) => (
                        <span
                          key={interest}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No members found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

