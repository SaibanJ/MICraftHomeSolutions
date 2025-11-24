import { Card, CardContent } from '@/components/ui/card'
import { Clock, DollarSign, Award, Shield } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Fast Response Times',
    description: 'We understand your time is valuable. Same-day service available for urgent repairs.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Fair rates with transparent pricing. Free estimates on all projects, no hidden fees.',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Experienced professionals who take pride in delivering exceptional results every time.',
  },
  {
    icon: Shield,
    title: 'Reliable & Trustworthy',
    description: 'We show up on time, respect your home, and guarantee 100% satisfaction.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              {'Why Michigan Homeowners Choose Us'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {'We\'re not just handymen—we\'re your neighbors who genuinely care about the quality and longevity of the work we do. Our commitment to excellence and customer satisfaction sets us apart.'}
            </p>
            <div className="flex flex-col gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans text-lg font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-border/50 bg-card">
              <CardContent className="flex flex-col gap-2 p-6">
                <span className="font-sans text-4xl font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card sm:mt-8">
              <CardContent className="flex flex-col gap-2 p-6">
                <span className="font-sans text-4xl font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="flex flex-col gap-2 p-6">
                <span className="font-sans text-4xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card sm:mt-8">
              <CardContent className="flex flex-col gap-2 p-6">
                <span className="font-sans text-4xl font-bold text-primary">24/7</span>
                <span className="text-sm text-muted-foreground">Emergency Service</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
