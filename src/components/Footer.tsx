import { Github } from "lucide-react";

const Footer = () => (
  <footer className="px-10 max-sm:px-5">
    <div className="max-w-[1220px] mx-auto flex items-center justify-between border-t border-border py-5 max-sm:py-4">
      <span className="font-mono text-[13px] text-muted-foreground">
        © {new Date().getFullYear()} digger
      </span>
      <div className="flex gap-4">
        <a
          href="https://github.com/diggerhq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github size={14} />
          github
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
