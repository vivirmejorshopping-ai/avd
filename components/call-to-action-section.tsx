import { Button } from "@/components/ui/button"

export function CallToActionSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-6">Ready to Transform Your Look?</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-12 text-lg">
          Book your appointment today and experience the confidence that comes with exceptional hair styling. Our expert
          team is ready to create your perfect look.
        </p>

        <Button
          asChild
          className="bg-sage hover:bg-sage/90 text-white px-12 py-4 text-base font-normal rounded-sm uppercase tracking-wide"
        >
          <a href="https://www.fresha.com/pt/p/murillo-de-oliveira-duque-3402928">
            BOOK YOUR APPOINTMENT NOW
          </a>
        </Button>
      </div>
    </section>
  )
}
