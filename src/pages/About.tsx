import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  User, 
  GraduationCap, 
  Code, 
  Target, 
  Heart, 
  Lightbulb,
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react';

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Git", "Responsive Design", "UI/UX"
  ];

  const interests = [
    "Développement Web", "Technologies Émergentes", "Design UI/UX", 
    "Open Source", "Innovation", "Apprentissage Continu"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          <User className="mr-2 h-3 w-3" />
          À propos de moi
        </Badge>
        <h1 className="text-4xl font-bold mb-6">
          Salut, je suis 
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {" "}Maxime Pero
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Étudiant passionné en développement web à Ynov Campus, je m'épanouis dans la création 
          d'expériences digitales modernes et l'apprentissage de nouvelles technologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-8">
          {/* Mon Parcours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Mon Parcours
              </CardTitle>
              <CardDescription>
                De la découverte à la spécialisation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary/20 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">2025</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        Stage ENI - 6 semaines
                      </span>
                    </div>
                    <h3 className="font-semibold">Développeur Stagiaire</h3>
                    <p className="text-muted-foreground">
                      Développement d'un site vitrine pour le magasin ENI avec React et les technologies modernes. 
                      Une expérience enrichissante qui m'a permis de mettre en pratique mes compétences en situation réelle.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 bg-primary/60 rounded-full border-4 border-background" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">En cours</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        Ynov Campus
                      </span>
                    </div>
                    <h3 className="font-semibold">Bachelor Développement Web</h3>
                    <p className="text-muted-foreground">
                      Formation spécialisée en développement web et technologies digitales. 
                      Apprentissage des frameworks modernes, des méthodologies agiles et des bonnes pratiques du développement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ma Mission */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Ma Mission
              </CardTitle>
              <CardDescription>
                Ce qui me motive au quotidien
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Je suis animé par la volonté de créer des solutions web innovantes et accessibles. 
                Mon objectif est de maîtriser les technologies modernes pour développer des applications 
                qui ont un impact positif. Chaque projet est une opportunité d'apprendre, de grandir 
                et de contribuer à l'écosystème technologique.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Compétences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Compétences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Centres d'intérêt */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-primary" />
                Centres d'intérêt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center text-sm">
                    <Lightbulb className="mr-2 h-3 w-3 text-primary/60" />
                    {interest}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
            <CardContent className="p-6 text-center space-y-4">
              <h3 className="font-semibold">Découvrez mon travail</h3>
              <p className="text-sm text-muted-foreground">
                Explorez mes articles sur le stage et les technologies utilisées.
              </p>
              <Link to="/articles">
                <Button className="w-full group">
                  Voir mes articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;