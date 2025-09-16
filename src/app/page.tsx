import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/hero";
import SkillsSection from "@/components/skills";
import ProjectSection from "@/components/projectSection";
import ContactCard from "@/components/contactCardSection";
import BlogHighlights from "@/components/blogHighlights";
import blogPosts from "@/data/bolgPosts";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <div className="flex sm:flex-row items-center justify-around gap-8 flex-col">
        <Card className="max-w-md w-full border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="font-bold">My Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              “I’m driven by the idea of using code and design to make life
              simpler, smarter, and more inspiring. For me, it’s not just about
              building projects that work, but creating things that actually
              help people and open doors to bigger opportunities. My vision is
              to keep learning, keep building, and use my skills to shape
              solutions that can grow, scale, and make a real difference.”
            </p>
          </CardContent>
        </Card>
      </div>
      <SkillsSection />
      <div className="bg-gray-200 py-12 px-4 w-full flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          So basically, I’m a JavaScript Developer.
        </h2>
      </div>
      <ProjectSection />
      <section id="contact" className="flex justify-center items-center py-5 m-0 ">
        <ContactCard
          title="We can work together!"
          description="I'm open to collaboration and new opportunities."
          email="elkanahdonkor@gmail.com"
          linkedin="https://www.linkedin.com/in/elkanah-donkor/"
          github="https://github.com/elkanahdonkor"
          twitter="https://twitter.com/elkanahdonkor"
        />
      </section>
      <BlogHighlights
        title="Featured Articles"
        subtitle="My latest thoughts and tutorials on web development"
        posts={blogPosts}
        maxPosts={3}
        viewAllLink="/blog"
      />
    </div>
  );
}
