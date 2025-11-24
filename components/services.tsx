import { Card, CardContent } from '@/components/ui/card'
import { Wrench, PaintBucket, Hammer, Zap, Droplet, Tv, Drill, Wind, Home } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Appliance Installation',
    description: 'Expert installation of dishwashers, microwaves, garbage disposals, and more',
  },
  {
    icon: PaintBucket,
    title: 'Painting & Drywall',
    description: 'Interior and exterior painting, patching, texturing, and finishing',
  },
  {
    icon: Hammer,
    title: 'Flooring Services',
    description: 'Installation and repair of laminate, vinyl, tile, and hardwood flooring',
  },
  {
    icon: Zap,
    title: 'Electrical Fixes',
    description: 'Outlet installation, fixture replacement, and minor electrical repairs',
  },
  {
    icon: Droplet,
    title: 'Plumbing Repairs',
    description: 'Faucet repairs, fixture replacement, and minor plumbing work',
  },
  {
    icon: Tv,
    title: 'TV Mounting',
    description: 'Professional mounting with cable management and secure installation',
  },
  {
    icon: Drill,
    title: 'Furniture Assembly',
    description: 'Fast and precise assembly of any furniture, big or small',
  },
  {
    icon: Wind,
    title: 'Pressure Washing',
    description: 'Driveways, decks, siding, and patios cleaned to perfection',
  },
  {
    icon: Home,
    title: 'General Projects',
    description: 'Caulking, gutter cleaning, weatherproofing, and all home repairs',
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {'Comprehensive Home Services'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {'From small repairs to complete home improvements, we handle it all with professional craftsmanship'}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
