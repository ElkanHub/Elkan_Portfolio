import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">About This App</h2>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Why I Built This</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This app is just a playground to practice Next.js with shadcn/ui.
            I’m experimenting with layouts, navigation, and reusable components.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
