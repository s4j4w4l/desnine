import { FooterSection } from "@/components/sections/footer-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WorkBentoSection } from "@/components/sections/work-bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";


export default function WorkPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      

      {/* Work Content Section */}
      <section className="w-full py-16 px-5 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Work
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        <span className="font-bold">Creative that connects. Design that delivers.</span> <br></br> We don’t just design we build visual stories that move people and grow brands.
           Each project below reflects our commitment to clarity, impact, and craft.
          </p> 


       
        </div>
      </section>
      <WorkBentoSection count={4} />
      <ContactUsSection />

      <FooterSection />
    </main>
  );
}
