// app/contact/page.tsx
import ContactCard from "@/components/contactCardSection";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <Container className="px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="pb-16 md:pb-24">
        <Container className="px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Card */}
              <div className="lg:col-span-2">
                <ContactCard
                  title="Get in touch"
                  description="Feel free to reach out through any of these channels. I typically respond within 24 hours."
                  email="your.email@example.com"
                  linkedin="https://linkedin.com/in/yourprofile"
                  github="https://github.com/yourusername"
                  twitter="https://twitter.com/yourusername"
                />
              </div>

              {/* Additional Info */}
              <div className="space-y-6 ">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">Response Time</h3>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Within 24 hours</p>
                        <p className="text-sm text-muted-foreground">
                          I&apos;ll do my best to get back to you as soon as possible
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">Current Availability</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Available for new projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Open to collaborations</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">Preferred Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">
                            For work, project inquiries and collaborations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="text-xs font-bold">in</span>
                        </div>
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">
                            For networking
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">What kind of projects do you work on?</h3>
                    <p className="text-sm text-muted-foreground">
                      I work on a variety of projects including web applications, UI/UX design, and technical consulting.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">What&apos;s your typical project timeline?</h3>
                    <p className="text-sm text-muted-foreground">
                      Project timelines vary depending on scope, but most projects are completed within 4-8 weeks.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Do you offer ongoing support?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, I offer maintenance and support packages for all completed projects.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Can we schedule a call to discuss?</h3>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! Send me an email with your availability and we&apos;ll set up a time to chat.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}