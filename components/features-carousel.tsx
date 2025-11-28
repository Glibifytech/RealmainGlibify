"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, BookOpen, Users, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    logo: "Coding Courses",
    icon: BookOpen,
    title: "Learn Python, HTML, CSS, JavaScript, and more through structured, interactive courses.",
    image: "/images/glibify-courses.png",
  },
  {
    logo: "Communities",
    icon: Users,
    title: "Connect with learners, share knowledge, discover new coding techniques, create content, and host learning sessions.",
    image: "/images/glibify-feed.png",
  },
  {
    logo: "Events",
    icon: Calendar,
    title: "Participate in live coding sessions, workshops, and learning events.",
    image: "/live-coding-event.jpg",
  },
  {
    logo: "Learning Stories",
    icon: Zap,
    title: "Share your coding journey, tutorials, and insights with the learning community.",
    image: "/code-learning-tutorial.jpg",
  },
]

export function FeaturesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 340
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Learning Spaces</h2>
          <p className="mt-2 text-gray-600">Discover different ways to learn and grow as a developer</p>
        </div>
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {features.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#0000FF]" : "bg-gray-300"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  logo,
  icon: Icon,
  title,
  image,
}: {
  logo: string
  icon: React.ElementType
  title: string
  image: string
}) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 snap-start">
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0000FF] rounded-lg flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl">{logo}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{title}</p>
      </div>
      <div className="px-4 pb-4">
        <img src={image || "/placeholder.svg"} alt={logo} className="w-full h-48 object-cover rounded-xl" />
      </div>
    </div>
  )
}
