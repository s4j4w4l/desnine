import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
  
  export function TerminalDemo() {
    return (
      <Terminal>
        <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Preflight checks.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Verifying framework. Found Next.js.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Validating Tailwind CSS.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Writing components.json.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Checking registry.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating tailwind.config.ts</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={7000} className="text-muted-foreground">
          You may now add components.
        </TypingAnimation>
      </Terminal>
    );
  }
  