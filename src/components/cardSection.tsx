import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardSection({ title, description }: { title: string; description: string }) {
  return (
      <Card className="max-w-md w-full border-0 shadow-xl m-0">
        <CardHeader>
          <CardTitle className="font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
  );
}
