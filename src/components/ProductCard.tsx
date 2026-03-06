import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  chip?: string;
  title: string;
  description: string;
  href: string;
}

const ProductCard = ({ chip, title, description, href }: ProductCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-xl border border-border p-8 transition-all duration-300 bg-white hover:bg-foreground hover:border-foreground"
  >
    <div className="flex items-start justify-between mb-4">
      {chip && (
        <span className="inline-block text-xs font-thin tracking-wide text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
          {chip}
        </span>
      )}
      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors ml-auto" />
    </div>
    <h3 className="font-display text-[24px] font-medium text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors font-thin">
      {description}
    </p>
  </a>
);

export default ProductCard;
