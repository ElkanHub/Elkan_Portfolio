import HeroSection from "@/components/hero";
import SkillsSection from "@/components/skills";
import ProjectSection from "@/components/projectSection";
import ContactCard from "@/components/contactCardSection";
import BlogHighlights from "@/components/blogHighlights";
import CardSection from "@/components/cardSection";
import blogPosts from "@/data/bolgPosts";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <div className="flex items-center justify-center w-full px-4">
        <CardSection
          title="My Vision"
          description="I’m driven by the idea of using code and design to make life
                        simpler, smarter, and more inspiring. For me, it’s not just about
                        building projects that work, but creating things that actually
                        help people and open doors to bigger opportunities. My vision is
                        to keep learning, keep building, and use my skills to shape
                        solutions that can grow, scale, and make a real difference."
        />
      </div>
      <SkillsSection />
      <div className="bg-secondary py-12 px-4 w-full flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          So basically, I’m a JavaScript Developer.
        </h2>
      </div>
      <ProjectSection />
      <div className="flex items-center justify-center w-full px-4 my-10">
        <CardSection
          title="Just a parting thought..."
          description="As I continue on this journey, I’m excited about the possibilities that lie ahead. I’ve always believed that good work isn’t just about skill—it’s about connection. You know that feeling when someone just gets what you’re trying to say, even before you finish? That’s the space I like to create with the people I work with. Not just building something that looks good, but something that feels right. If that resonates with you, then maybe this is where our paths are meant to cross."
        />
      </div>
      <BlogHighlights
        title="You can Feel Free to Explore some of my Articles"
        subtitle="My latest thoughts and tutorials on web development - its free!"
        posts={blogPosts}
        maxPosts={3}
        viewAllLink="/blog"
      />

      <section
        id="contact"
        className="flex justify-center items-center py-5 m-0 w-full"
      >
        <ContactCard
          title="We can work together!"
          description="I'm open to collaboration and new opportunities."
          email="elkanahdonkor@gmail.com"
          linkedin="https://www.linkedin.com/in/elkanah-donkor/"
          github="https://github.com/elkanahdonkor"
          twitter="https://twitter.com/elkanahdonkor"
        />
      </section>
    </div>
  );
}
