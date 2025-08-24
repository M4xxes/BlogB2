import { Link } from 'react-router-dom';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Code className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Maxime Pero
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Étudiant développeur passionné par les technologies web et l'innovation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Accueil
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </Link>
              <Link to="/articles" className="text-muted-foreground hover:text-foreground transition-colors">
                Articles
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex space-x-4">
              <a href="mailto:maxime.pero@ynov.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2025 Maxime Pero - Blog de stage Ynov Campus</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;