import AboutHeroSection from "@/components/aboutHero";
import TheStorySection from "@/components/storySection";
import ServicesSection from "@/components/servicesSection";
import services from "@/data/myServices";
import HobbySectionTwo from "@/components/hobbySectionTwo";
import hobbies from "@/data/hobbies";
import TestimonialsSection from "@/components/testimonialSection";
import testimonials from "@/data/testimonials";

export default function AboutPage() {
  return (
    <div>
      <AboutHeroSection
        subtitle="My Philosophy"
        title="I don't just build projects — I shape solutions to connect people."
        description="As a passionate developer, I believe technology should serve humanity. Every line of code I write is driven by a desire to create meaningful digital experiences that solve real problems and bring people together. I'm not just writing software; I'm crafting the digital bridges that connect ideas to reality. Seriously! But I've come to see that it's not that easy. Yet, it's this challenge that fuels my passion."
        imageUrl="/aboutHeroPic2.jpg"
        imageAlt="Person working on a computer with a warm, focused expression"
        ctaText="Let's create together"
        ctaLink="/contact"
      />

      <TheStorySection
        openingHook="I didn't always know I'd end up building and designing digital experiences. But it had been my childhood fantasy for a long time."
        earlyCuriosity="My journey kicked off back in Junior High when I got my first laptop. Honestly, all I used it for back then was games and movies. That was it. 😅

Then I stumbled into my very first Python course on Edureka (shoutout to Edureka 🙌). It was a full 12 hours long—which, let’s be real, was way too much for someone with the attention span of a goldfish 😏. But at that time, with zero mentors around, it was all I had.

So, I dug in and did what I could. And, between you and me… I never actually finished the course 🤫."
        turningPoint="Everything changed when I completed Senior High. I sat down and decided on what aspect of sofware engineering i would specialize in. I chose WEB-DEV and joined the training course from Microverse - one good team who actually taught what was neccessary, no fluff. And I also took a bunch of tutorials on YOUTUBE. Then I built my first application. it was raw but then very, very exciting. Honestly, i was too excited and showed it to everyone in the house. I felt like the cool hacker of a spy movie 😅. From that moment onward, i was stuck to siting behind my PC."
        lessonsGrowth="Through years of trial and error, I've learned that technical skills are just the foundation. The real value comes from understanding people's needs and communicating effectively. I've grown from someone who just writes code to someone who sits to think for solutions with intention and purpose. Honestly, the journey has been tough, but every challenge has made me better. One wise man once said: 'Experience is the best teacher.' And I couldn't agree more."
        bridgeToPresent="Today, I see every project as more than code or design — it's a chance to shape experiences, to add a piece of me, to help someone's idea take form, and to build the digital tools that make a difference in people's lives. Sounds very idealistic i know, but hey, that's me! Let's connect and create something meaningful together."
      />
      <ServicesSection services={services} />
      <HobbySectionTwo
        title="Beyond the Code"
        intro="When I'm not crafting digital experiences, you'll find me..."
        hobbies={hobbies}
      />
      <TestimonialsSection 
        title="What Others Say"
        subtitle="Hear from people I've had the pleasure of working with"
        testimonials={testimonials}
        showRating={false}
      />

      {/* Rest of your about page content */}
    </div>
  );
}
