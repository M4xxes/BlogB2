import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Building, 
  Code, 
  TrendingUp, 
  Users, 
  Target,
  BookOpen,
  Lightbulb,
  Award
} from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Présentation de l'entreprise ENI",
      description: "Découverte d'ENI, leader dans le secteur énergétique, et de son environnement de travail.",
      icon: Building,
      date: "7 juillet - 17 août 2025",
      readTime: "5 min",
      category: "Entreprise",
      content: `
        <h3>À propos d'ENI</h3>
        <p>ENI est une entreprise multinationale intégrée de l'énergie, basée en Italie et opérant dans 66 pays à travers le monde dans les secteurs de l'exploration et de la production de pétrole et de gaz naturel.</p>
        
        <h3>Mission de l'entreprise</h3>
        <p>ENI s'engage dans la transition énergétique avec pour objectif de devenir une entreprise leader dans la production et la vente d'énergie décarbonée.</p>
        
        <h3>Mon intégration</h3>
        <p>J'ai été accueilli dans l'équipe digital pour travailler sur la modernisation de leur présence web, notamment avec la création d'un site vitrine pour leur magasin.</p>
        
        <h3>Environnement de travail</h3>
        <p>L'environnement chez ENI favorise l'innovation et l'apprentissage. J'ai pu travailler avec des professionnels expérimentés qui m'ont guidé tout au long de mon stage.</p>
      `
    },
    {
      id: 2,
      title: "Bilan Personnel et Apprentissages",
      description: "Retour sur les 6 semaines de stage : défis rencontrés, solutions apportées et leçons apprises.",
      icon: TrendingUp,
      date: "7 juillet - 17 août 2025",
      readTime: "7 min",
      category: "Bilan",
      content: `
        <h3>Défis rencontrés</h3>
        <p>Le principal défi a été de m'adapter rapidement à l'environnement professionnel et aux attentes de l'entreprise. La gestion du temps et la communication avec les différents intervenants ont également été des aspects importants à maîtriser.</p>
        
        <h3>Solutions apportées</h3>
        <p>J'ai développé une méthodologie de travail structurée, en utilisant des outils de gestion de projet et en maintenant une communication régulière avec mon tuteur de stage.</p>
        
        <h3>Apprentissages personnels</h3>
        <p>Ce stage m'a permis de développer mon autonomie, ma capacité d'adaptation et mes compétences en communication professionnelle. J'ai également appris l'importance du travail en équipe dans un contexte professionnel.</p>
        
        <h3>Impact sur mon projet professionnel</h3>
        <p>Cette expérience a confirmé mon intérêt pour le développement web et m'a donné une vision plus claire des opportunités de carrière dans ce domaine.</p>
      `
    },
    {
      id: 3,
      title: "Compétences Acquises",
      description: "Détail des nouvelles compétences développées pendant le stage, tant techniques qu'humaines.",
      icon: Award,
      date: "7 juillet - 17 août 2025",
      readTime: "6 min",
      category: "Compétences",
      content: `
        <h3>Compétences techniques</h3>
        <p>J'ai approfondi mes connaissances en React, appris à utiliser de nouveaux outils de développement et découvert les bonnes pratiques du développement web en entreprise.</p>
        
        <h3>Compétences organisationnelles</h3>
        <p>Gestion de projet, planification des tâches, respect des délais et documentation du code sont autant de compétences que j'ai développées.</p>
        
        <h3>Compétences relationnelles</h3>
        <p>Communication avec les clients, présentation de solutions techniques et travail en équipe multidisciplinaire ont enrichi mes compétences humaines.</p>
        
        <h3>Compétences d'adaptation</h3>
        <p>Capacité à apprendre rapidement de nouvelles technologies et à s'adapter aux processus de l'entreprise.</p>
      `
    },
    {
      id: 4,
      title: "Technologies et Outils Utilisés",
      description: "Focus sur la stack technique mise en œuvre : React, TypeScript, outils de développement et méthodologies.",
      icon: Code,
      date: "7 juillet - 17 août 2025",
      readTime: "8 min",
      category: "Technique",
      content: `
        <h3>Frontend - React & TypeScript</h3>
        <p>Le projet a été développé avec React 18 et TypeScript pour assurer une base solide et maintenable. L'utilisation de TypeScript a permis de réduire les erreurs et d'améliorer la qualité du code.</p>
        
        <h3>Styling - Tailwind CSS</h3>
        <p>Tailwind CSS a été choisi pour sa flexibilité et sa rapidité de développement. Il permet de créer des interfaces modernes tout en maintenant une cohérence visuelle.</p>
        
        <h3>Outils de développement</h3>
        <p>Utilisation de Vite pour un environnement de développement rapide, Git pour le versioning et VS Code comme éditeur principal.</p>
        
        <h3>Méthodologies</h3>
        <p>Adoption des principes de développement agile, avec des itérations courtes et des feedback réguliers de l'équipe.</p>
        
        <h3>Performance et optimisation</h3>
        <p>Mise en place de bonnes pratiques pour l'optimisation des performances : lazy loading, optimisation des images, et structure de code modulaire.</p>
      `
    },
    {
      id: 5,
      title: "Objectifs du Stage et Formation",
      description: "Les objectifs fixés par Ynov Campus et comment ils ont été atteints durant ces 6 semaines.",
      icon: Target,
      date: "7 juillet - 17 août 2025",
      readTime: "5 min",
      category: "Formation",
      content: `
        <h3>Objectifs pédagogiques</h3>
        <p>Le stage avait pour objectif de mettre en pratique les connaissances acquises en cours et de découvrir le monde professionnel du développement web.</p>
        
        <h3>Réalisation d'un projet concret</h3>
        <p>Développement complet d'un site vitrine, de la conception à la mise en production, en passant par tous les aspects du développement frontend moderne.</p>
        
        <h3>Compétences transversales</h3>
        <p>Au-delà des aspects techniques, le stage visait à développer les compétences de communication, de gestion de projet et d'autonomie.</p>
        
        <h3>Évaluation et bilan</h3>
        <p>Ce blog constitue une partie de l'évaluation du stage, permettant une prise de recul sur l'expérience vécue et les apprentissages réalisés.</p>
        
        <h3>Perspectives d'avenir</h3>
        <p>Cette expérience a confirmé mon orientation vers le développement web et m'a donné des pistes concrètes pour la suite de ma formation à Ynov Campus.</p>
      `
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          <BookOpen className="mr-2 h-3 w-3" />
          Articles de blog
        </Badge>
        <h1 className="text-4xl font-bold mb-6">
          Mon Expérience de
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {" "}Développeur Stagiaire
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Découvrez le détail de mon stage de 6 semaines chez ENI : présentation de l'entreprise, 
          bilan personnel, compétences acquises et technologies utilisées.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-8">
        {articles.map((article) => (
          <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <article.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                {article.title}
              </CardTitle>
              <CardDescription className="text-base">
                {article.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Blog Info */}
      <Card className="mt-16 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center">
            <Lightbulb className="mr-2 h-5 w-5 text-primary" />
            À propos de ce blog
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Ce blog a été créé dans le cadre de mon cursus à Ynov Campus pour documenter 
            et analyser mon expérience de stage chez ENI. Il constitue une réflexion sur 
            mes apprentissages et mon évolution professionnelle.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Ynov Campus</Badge>
            <Badge variant="secondary">Bachelor 2</Badge>
            <Badge variant="secondary">Stage ENI</Badge>
            <Badge variant="secondary">Développement Web</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Articles;