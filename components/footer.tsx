import { Hammer } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Hammer className="h-5 w-5 text-primary" />
              <span className="font-sans text-lg font-bold text-foreground">Michigan Handyman</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {'Your trusted partner for all home repairs, maintenance, and improvements in Michigan.'}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm font-semibold text-foreground">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Appliance Installation</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Painting & Drywall</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Flooring</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Electrical & Plumbing</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm font-semibold text-foreground">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><a href="#why-us" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Free Estimate</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm font-semibold text-foreground">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>(555) 123-4567</li>
              <li>contact@michiganhandyman.com</li>
              <li>{'Serving Michigan & surrounding areas'}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {'© 2025 Michigan Handyman. All rights reserved.'}
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
