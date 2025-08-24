import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    content:
      "StreamLine transformed our team's productivity. We've reduced manual work by 60% and our project delivery time has improved dramatically.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Director",
    company: "GrowthLab",
    content:
      "The automation features are incredible. What used to take hours now happens automatically. Our team can focus on what really matters.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Team Lead",
    company: "InnovateCorp",
    content:
      "Best investment we've made for our workflow. The collaboration tools keep everyone aligned and the analytics help us continuously improve.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/50 py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-work-sans)] sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-[family-name:var(--font-open-sans)]">
            See what our customers have to say about StreamLine
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed font-[family-name:var(--font-open-sans)] mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold font-[family-name:var(--font-work-sans)]">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
