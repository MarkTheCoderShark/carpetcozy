import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Thank You | CarpetCozy",
  description: "Thank you for contacting CarpetCozy. We'll get back to you soon!",
};

export default function ThankYouPage() {
  return (
    <>
      <section className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            We&apos;ve received your message and will get back to you shortly.
          </p>
          <Button href="/" variant="primary">
            Return Home
          </Button>
        </div>
      </section>

      <Section bgColor="default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">
            What&apos;s Next?
          </h2>
          <p className="mb-8 text-text-primary/80">
            Our team will review your message and contact you within 24 hours. In the meantime, feel free to explore our services or check out our blog for helpful tips and information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" variant="secondary">
              View Our Services
            </Button>
            <Button href="/blog" variant="secondary">
              Read Our Blog
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
} 