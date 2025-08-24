import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "Basic workflow automation", "Email support", "5GB storage", "Basic analytics"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    description: "For growing teams that need more power",
    features: [
      "Up to 25 team members",
      "Advanced automation",
      "Priority support",
      "100GB storage",
      "Advanced analytics",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Custom workflows",
      "24/7 dedicated support",
      "Unlimited storage",
      "White-label options",
      "Advanced security",
      "Custom integrations",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-work-sans)] sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-[family-name:var(--font-open-sans)]">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-[family-name:var(--font-work-sans)]">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold font-[family-name:var(--font-work-sans)]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <CardDescription className="mt-2 font-[family-name:var(--font-open-sans)]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm font-[family-name:var(--font-open-sans)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8" variant={plan.popular ? "default" : "outline"}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
