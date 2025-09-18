import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "What are your check-in and check-out times?",
    answer:
      "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer free cancellation up to 7 days before your arrival date. Cancellations made within 7 days of arrival are subject to a 50% charge. No-shows will be charged the full amount.",
  },
  {
    question: "Are pets allowed at Aam Altair?",
    answer:
      "Yes, well-behaved pets are welcome but must be kept on leash at all times. Please note that we have 2 friendly resident dogs on the property. There is no additional charge for pets, but please inform us when booking.",
  },
  {
    question: "What are your noise policies?",
    answer:
      "We maintain quiet hours from 10:00 PM to 7:00 AM. No loud music or parties are permitted after 10:00 PM to respect the peaceful nature of our retreat and our neighbors.",
  },
  {
    question: "Can I swim in the River Galana?",
    answer:
      "For safety reasons, swimming in the River Galana is not permitted. However, you can enjoy the river views from your private deck and the sounds of flowing water throughout your stay.",
  },
  {
    question: "What internet and phone connectivity is available?",
    answer:
      "Wi-Fi is available at the main house with good speeds for basic internet needs. Mobile phone reception can be patchy in some areas of the property, so we recommend using Wi-Fi calling when possible.",
  },
  {
    question: "How far is the nearest supermarket or town?",
    answer:
      "The nearest supermarket is in Kibwezi, approximately 40 minutes away by car. We recommend stocking up on essentials before arrival, though we can arrange shopping services for an additional fee.",
  },
  {
    question: "What is included in my stay?",
    answer:
      "Your stay includes luxury accommodation, daily breakfast, a guided mango orchard tour, Wi-Fi at the main house, solar power, organic toiletries, and secure parking. Additional experiences and services can be arranged for extra charges.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "We offer pickup services from Kibwezi SGR and Makindu SGR stations for $20 per ride. For airport transfers from Nairobi, we can arrange private transport for an additional fee - please contact us for pricing.",
  },
  {
    question: "What should I bring for my stay?",
    answer:
      "We provide all essential amenities, but we recommend bringing sunscreen, insect repellent, comfortable walking shoes, and any personal medications. If you have specific dietary requirements, please let us know in advance.",
  },
  {
    question: "Is Aam Altair suitable for children?",
    answer:
      "Yes, children are welcome at Aam Altair. The property is safe and secure with a solar electric fence. However, children must be supervised at all times, especially near the river. We can provide additional bedding for children upon request.",
  },
  {
    question: "What wildlife might I see on the property?",
    answer:
      "Our property is home to various bird species and occasionally visits from small wildlife. The solar electric fence keeps larger animals at bay while allowing you to enjoy nature safely. Our resident dogs also help deter unwanted wildlife.",
  },
]

export function FAQSection() {
  return (
    <section className="pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">FAQ</h2>
          <p className="text-foreground/80 text-lg">Frequently Asked Questions</p>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card border-border py-3">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-4 py-1 text-left font-serif text-base font-medium text-primary hover:no-underline hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-1">
                  <p className="text-foreground/80 leading-relaxed text-sm">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>

        {/* Contact for More Questions */}
        <Card className="mt-8 bg-accent/5 border-accent/20">
          <CardContent className="p-6 text-center space-y-3">
            <h3 className="text-lg font-serif font-medium text-primary">Still Have Questions?</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-sm">
              Can't find the answer you're looking for? Our team is here to help. Contact us via WhatsApp for the
              fastest response, or send us an email for detailed inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="https://wa.me/254700000000"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground hover:bg-accent font-medium rounded-full transition-colors text-sm"
              >
                WhatsApp Us
              </a>
              <a
                href="mailto:hello@aamaltair.com"
                className="inline-flex items-center justify-center px-4 py-2 border border-accent text-accent hover:bg-accent/10 font-medium rounded-full transition-colors text-sm"
              >
                Email Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
