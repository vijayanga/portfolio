import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-12 border-t border-border shadow-lg dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text">
              Vijayanga Dissanayaka
            </h3>
            <p className="text-muted-foreground mt-2">
              IT Undergraduate Student
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/vijayanga"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vijayanga-dissanayaka-556bb22b4/"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="vijayanga123@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground  flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} /> by
            Vijayanga Dissanayaka
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            © 2025 Vijayanga Dissanayaka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
