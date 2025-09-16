import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/hero";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <div className="flex sm:flex-row items-center justify-around gap-8 flex-col">
        <Card className="max-w-sm w-full border-0 shadow-xl">
          <CardHeader>
            <CardTitle>My Vision</CardTitle>
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
    </div>
  );
}
