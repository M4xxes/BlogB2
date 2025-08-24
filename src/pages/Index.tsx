import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, Building, Code2, Lightbulb, Target } from 'lucide-react';
import heroImage from '@/assets/hero-blog.jpg';

const Index = () => {
  const highlights = [
    {
      icon: Building,
      title: "Stage chez ENI",
      description: "6 semaines d'immersion dans une entreprise leader du secteur énergétique"
    },
    {
      icon: Code2,
      title: "Site Vitrine",
      description: "Développement complet d'un site vitrine avec React et technologies modernes"
    },
    {
      icon: Lightbulb,
      title: "Compétences Acquises",
      description: "Montée en compétences technique et découverte du monde professionnel"
    }
  ];

  const technologies = ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-3xl" />
        <div className="relative grid lg:grid-cols-1 gap-12 items-center justify-items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <Badge variant="outline" className="w-fit">
              <Calendar className="mr-2 h-3 w-3" />
              Stage du 7 juillet - 17 août 2025 - 6 semaines
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Mon Stage de
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {" "}Développement
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez mon expérience de 6 semaines chez ENI où j'ai développé un site vitrine 
              avec React et approfondi mes compétences en développement web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/articles">
                <Button size="lg" className="group">
                  Découvrir mes articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  En savoir plus sur moi
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl" />
            {/* Image removed - add your content here */}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Points Clés de mon Stage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expérience enrichissante qui m'a permis de mettre en pratique mes connaissances 
            et d'acquérir de nouvelles compétences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Technologies Utilisées</CardTitle>
            <CardDescription>
              Stack technique mise en œuvre pendant le stage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Info */}
      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5 text-primary" />
                Entreprise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-semibold">ENI</p>
              <p className="text-muted-foreground">Secteur énergétique</p>
              <p className="text-sm text-muted-foreground">
                Développement d'un site vitrine pour le magasin
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-semibold">Ynov Campus</p>
              <p className="text-muted-foreground">Bachelor 2</p>
              <p className="text-sm text-muted-foreground">
                Spécialisation développement web
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;