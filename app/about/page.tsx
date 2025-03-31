import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Geospatial Club</h1>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
            Learn about our mission, vision, and the team behind VIT's Geospatial Club.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 py-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              The Geospatial Club at VIT aims to foster a community of students passionate about Geographic Information
              Systems (GIS) and spatial technologies. We provide a platform for learning, collaboration, and innovation
              in the field of geospatial science.
            </p>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision creating a hub of geospatial excellence where students can develop skills, share knowledge,
              and work on real-world projects that address spatial challenges in various domains including urban
              planning, environmental conservation, and disaster management.
            </p>
            <h2 className="text-2xl font-bold">What We Do</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Organize workshops and training sessions on GIS tools and technologies</li>
              <li>Host guest lectures from industry experts and academics</li>
              <li>Conduct hackathons and competitions to solve real-world spatial problems</li>
              <li>Collaborate on research projects with faculty and industry partners</li>
              <li>Provide resources and support for students interested in GIS careers</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Club+Activities"
              width={600}
              height={400}
              alt="Club activities collage"
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <Tabs defaultValue="faculty" className="w-full py-8">
          <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-2">
            <TabsTrigger value="faculty">Faculty Advisors</TabsTrigger>
            <TabsTrigger value="team">Core Team</TabsTrigger>
          </TabsList>
          <TabsContent value="faculty" className="py-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={`/placeholder.svg?height=150&width=150&text=Faculty+${i}`}
                        width={150}
                        height={150}
                        alt={`Faculty advisor ${i}`}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle>Dr. Jane Smith</CardTitle>
                    <CardDescription>Professor, Department of Civil Engineering</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Specializes in GIS applications for urban planning and infrastructure development.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="team" className="py-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={`/placeholder.svg?height=120&width=120&text=Team+${i}`}
                        width={120}
                        height={120}
                        alt={`Team member ${i}`}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle>Alex Johnson</CardTitle>
                    <CardDescription>
                      {["President", "Vice President", "Secretary", "Treasurer"][i - 1]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      4th year B.Tech student passionate about remote sensing and spatial analysis.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4 py-8">
          <h2 className="text-2xl font-bold text-center">Our History</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-4">
              The Geospatial Club at VIT was founded in 2020 by a group of enthusiastic students who recognized the
              growing importance of GIS skills across various disciplines. What started as informal meetups to discuss
              mapping technologies has evolved into one of the most active technical clubs on campus.
            </p>
            <p className="text-muted-foreground mb-4">
              Over the years, we have organized numerous workshops, hackathons, and guest lectures, helping hundreds of
              students develop valuable skills in geospatial technologies. Our members have gone on to work with leading
              organizations in the field and contribute to impactful projects worldwide.
            </p>
            <p className="text-muted-foreground">
              Today, the club continues to grow, embracing new technologies and methodologies in the rapidly evolving
              field of geospatial science, while maintaining its core mission of education, collaboration, and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

