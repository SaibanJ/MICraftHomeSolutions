import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Ann Arbor, MI',
    rating: 5,
    text: 'Outstanding service! They mounted our 75" TV and installed all our kitchen appliances in one day. Professional, punctual, and very reasonably priced. Will definitely use them again for future projects.',
    service: 'TV Mounting & Appliance Installation',
    image: '/professional-woman-smiling.png'
  },
  {
    name: 'Michael Chen',
    location: 'Detroit, MI',
    rating: 5,
    text: 'I had a long list of repairs that needed attention - drywall patches, painting, and some minor plumbing issues. They tackled everything efficiently and the quality was excellent. Highly recommend!',
    service: 'Drywall Repair & Painting',
    image: '/professional-man-smiling.png'
  },
  {
    name: 'Jennifer Martinez',
    location: 'Grand Rapids, MI',
    rating: 5,
    text: 'The pressure washing of our deck and driveway made our home look brand new. Fair pricing, great communication, and they showed up exactly when they said they would. Very impressed!',
    service: 'Pressure Washing',
    image: '/woman-customer-smiling.jpg'
  },
  {
    name: 'Robert Williams',
    location: 'Lansing, MI',
    rating: 5,
    text: 'We needed our vinyl flooring replaced in the kitchen and they did an amazing job. Clean work, attention to detail, and they cleaned up everything when done. Worth every penny!',
    service: 'Flooring Installation',
    image: '/mature-man-smiling.jpg'
  },
  {
    name: 'Emily Thompson',
    location: 'Troy, MI',
    rating: 5,
    text: 'Had them fix several electrical outlets and install new light fixtures throughout our home. Very knowledgeable and they explained everything they were doing. Felt safe and confident in their work.',
    service: 'Electrical Repairs',
    image: '/smiling-homeowner.png'
  },
  {
    name: 'David Anderson',
    location: 'Kalamazoo, MI',
    rating: 5,
    text: 'These guys are the real deal! Fixed our leaky faucets, assembled all our furniture after our move, and even helped with some minor repairs we did not originally ask for. Great customer service!',
    service: 'Plumbing & Furniture Assembly',
    image: '/man-customer-happy.jpg'
  },
  {
    name: 'Lisa Brown',
    location: 'Warren, MI',
    rating: 5,
    text: 'I am very particular about who works in my home, and they exceeded all expectations. Professional, respectful, and the quality of their painting work is impeccable. My rooms look beautiful!',
    service: 'Interior Painting',
    image: '/professional-woman-satisfied.jpg'
  },
  {
    name: 'James Miller',
    location: 'Sterling Heights, MI',
    rating: 5,
    text: 'Gutter cleaning and caulking around the windows - they did both quickly and thoroughly. Prevented potential water damage before winter. Very grateful for their expertise and fair pricing.',
    service: 'Gutter Cleaning & Caulking',
    image: '/mature-homeowner-smiling.jpg'
  },
  {
    name: 'Amanda Garcia',
    location: 'Dearborn, MI',
    rating: 5,
    text: 'Called them for an emergency drywall repair after a pipe leak. They came out the next day, fixed everything perfectly, and even touched up the paint to match. Lifesavers!',
    service: 'Emergency Drywall Repair',
    image: '/woman-grateful-customer.jpg'
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                What Our Customers Say
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Don't just take our word for it. Here's what Michigan homeowners have to say about our handyman services.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={testimonial.image || "/placeholder.svg"} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-sans font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Quote className="w-8 h-8 text-primary/20 mb-2" />
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                      {testimonial.text}
                    </p>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-primary">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Ready to Join Our Happy Customers?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Experience the quality service that Michigan homeowners trust. Get your free estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/#contact">Get Free Estimate</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
