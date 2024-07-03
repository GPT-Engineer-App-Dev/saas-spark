import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaS Product</h1>
        <p className="text-xl text-muted-foreground">The best solution for your business needs</p>
        <Button size="lg">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto mt-8" />
      </section>

      <Separator />

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <p className="text-center text-muted-foreground">Discover what makes our product unique</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature three.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Four</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature four.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Avatar>
              <img src="https://placehold.co/100x100" alt="User 1" />
            </Avatar>
            <div>
              <h3 className="font-bold">User One</h3>
              <p>"This product has changed my life for the better!"</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <img src="https://placehold.co/100x100" alt="User 2" />
            </Avatar>
            <div>
              <h3 className="font-bold">User Two</h3>
              <p>"I can't imagine working without it now."</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <img src="https://placehold.co/100x100" alt="User 3" />
            </Avatar>
            <div>
              <h3 className="font-bold">User Three</h3>
              <p>"A must-have for any business."</p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <p className="text-2xl font-bold">$10/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Choose Basic</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard</CardTitle>
              <p className="text-2xl font-bold">$20/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
              </ul>
              <Button className="mt-4">Choose Standard</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <p className="text-2xl font-bold">$30/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
                <li>Feature E</li>
              </ul>
              <Button className="mt-4">Choose Premium</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="space-y-4 text-center">
        <div className="space-x-4">
          <a href="/about" className="text-muted-foreground">About</a>
          <a href="/contact" className="text-muted-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground">Privacy Policy</a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground">Facebook</a>
          <a href="https://twitter.com" className="text-muted-foreground">Twitter</a>
          <a href="https://linkedin.com" className="text-muted-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;