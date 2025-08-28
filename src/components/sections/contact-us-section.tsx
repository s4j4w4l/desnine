"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactUsSection() {
  return (
    <section
      id="contact-us-section"
      className="group w-full py-20 px-6 md:px-12 bg-background border-t border-border transition-transform duration-300 hover:scale-[1.02] hover:bg-muted/30"
    >
      <div className="max-w-3xl mx-auto text-center px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary group-hover:text-primary/90 transition-colors">
          Design it Once. Design it Right.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto group-hover:text-foreground transition-colors">
          Let’s collaborate to bring your vision to life.  
          Ready to start your project?
        </p>

        <div className="mt-8">
          <Link href="/contact">
            <Button className="px-8 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary">
              Let’s Talk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
