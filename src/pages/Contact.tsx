import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Send,
  GraduationCap,
  Building,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En situation réelle, ici on enverrait le formulaire
    alert("Formulaire soumis ! (En situation réelle, ceci serait envoyé par email)");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maxime.pero@ynov.com",
      href: "mailto:maxime.pero@ynov.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Maxime Pero",
      href: "https://www.linkedin.com/in/maxime-pero-b320a3356/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@maximepero",
      href: "https://github.com/M4xxes/"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "France",
      href: null
    }
  ];

  const education = {
    school: "Ynov Campus",
    program: "Bachelor Développement Web",
    year: "2ème année",
    location: "France"
  };

  const internship = {
    company: "ENI",
    position: "Développeur Full Stack",
    duration: "6 semaines",
    project: "Site vitrine"
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          <Mail className="mr-2 h-3 w-3" />
          Contact
        </Badge>
        <h1 className="text-4xl font-bold mb-6">
          Restons en
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {" "}Contact
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          N'hésitez pas à me contacter pour discuter de développement web, d'opportunités 
          professionnelles ou simplement pour échanger sur les technologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Formulaire de contact */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
              <CardDescription>
                Je vous répondrai dans les plus brefs délais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Votre prénom" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Votre nom" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input 
                    id="subject" 
                    placeholder="Sujet de votre message" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Votre message..." 
                    rows={6}
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Informations de contact */}
        <div className="space-y-6">
          {/* Contact direct */}
          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
              <CardDescription>
                Différents moyens de me joindre
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                        {info.href.startsWith('http') && (
                          <ExternalLink className="ml-1 h-3 w-3" />
                        )}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Formation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold">{education.school}</p>
                <p className="text-sm text-muted-foreground">{education.program}</p>
                <p className="text-sm text-muted-foreground">{education.year}</p>
              </div>
            </CardContent>
          </Card>

          {/* Stage actuel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5 text-primary" />
                Stage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold">{internship.company}</p>
                <p className="text-sm text-muted-foreground">{internship.position}</p>
                <p className="text-sm text-muted-foreground">{internship.duration} • {internship.project}</p>
              </div>
            </CardContent>
          </Card>

          {/* Disponibilité */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
            <CardContent className="p-6 text-center space-y-4">
              <h3 className="font-semibold">Disponibilité</h3>
              <p className="text-sm text-muted-foreground">
                Actuellement disponible pour une alternance. 
                Ouvert aux opportunités pour la suite de mon cursus.
              </p>
              <Badge variant="outline" className="bg-background">
                Réponse sous 24h
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;