import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
              <CheckCircle2 className="h-4 w-4" />
              <span>Serving Michigan & Surrounding Areas</span>
            </div>
            <h1 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              {'Your Trusted Home Repair Experts'}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {'Fast, reliable, and affordable handyman services for all your home maintenance and improvement needs. We treat every home like our own.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                <a href="#contact">Get Free Estimate</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="#services">View Services</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-foreground">500+</span>
                <span className="text-sm text-muted-foreground">Happy Customers</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-foreground">Same Day</span>
                <span className="text-sm text-muted-foreground">Service Available</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-foreground">100%</span>
                <span className="text-sm text-muted-foreground">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src="/professional-handyman-working-on-home-repairs-with.jpg"
                alt="Professional handyman working on home repairs"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
