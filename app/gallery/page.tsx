import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const projects = [
  {
    title: 'Modern Kitchen Renovation',
    category: 'Appliance Installation',
    image: '/modern-kitchen-with-newly-installed-appliances.jpg'
  },
  {
    title: 'Living Room Paint Job',
    category: 'Painting',
    image: '/freshly-painted-living-room-with-neutral-colors.jpg'
  },
  {
    title: 'Drywall Repair & Texturing',
    category: 'Drywall Repair',
    image: '/smooth-drywall-repair-work-before-and-after.jpg'
  },
  {
    title: 'Luxury Vinyl Flooring',
    category: 'Flooring',
    image: '/luxury-vinyl-plank-flooring-installation-in-modern.jpg'
  },
  {
    title: 'Outdoor Deck Pressure Washing',
    category: 'Pressure Washing',
    image: '/pressure-washed-wooden-deck-transformation.jpg'
  },
  {
    title: 'Professional TV Mounting',
    category: 'TV Mounting',
    image: '/wall-mounted-flat-screen-tv-with-hidden-cables.jpg'
  },
  {
    title: 'Bathroom Fixture Installation',
    category: 'Plumbing',
    image: '/modern-bathroom-with-new-faucet-and-fixtures-insta.jpg'
  },
  {
    title: 'Home Office Setup',
    category: 'Furniture Assembly',
    image: '/assembled-home-office-furniture-and-desk-setup.jpg'
  },
  {
    title: 'Exterior House Painting',
    category: 'Painting',
    image: '/freshly-painted-exterior-of-beautiful-michigan-hom.jpg'
  },
  {
    title: 'Hardwood Floor Refinishing',
    category: 'Flooring',
    image: '/refinished-hardwood-floors-gleaming-in-sunlight.jpg'
  },
  {
    title: 'Gutter Cleaning Service',
    category: 'Gutter Cleaning',
    image: '/clean-gutters-on-residential-home-after-maintenanc.jpg'
  },
  {
    title: 'Crown Molding Installation',
    category: 'General Projects',
    image: '/elegant-crown-molding-installation-in-bedroom.jpg'
  }
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Work Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See the quality craftsmanship and attention to detail that goes into every project we complete for Michigan homeowners.
            </p>
          </div>

          {/* Masonry Grid Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="break-inside-avoid group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="font-sans text-lg font-semibold text-foreground text-balance">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action at Bottom */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="font-sans text-3xl font-bold text-foreground mb-4 text-balance">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Let us bring the same quality and craftsmanship to your home. Get your free estimate today.
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
