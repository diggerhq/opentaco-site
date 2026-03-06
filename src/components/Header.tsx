import { Github } from "lucide-react";

const Header = () =>
<header className="bg-background/80 backdrop-blur-sm border-b border-border w-full">
    <div className="mx-auto h-14 flex items-center justify-between md:px-0 px-5">
      <a href="/" className="font-display text-lg font-medium tracking-tight text-foreground logo-ai-hover cursor-pointer no-underline" data-text="digger">
        digger
      </a>
      <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm"
      aria-label="GitHub">
        <Github className="w-4 h-4" />
        <span>github</span>
      </a>
    </div>
  </header>;


export default Header;