import ProductCard from "./ProductCard";

const products = [
{
  chip: "opentaco",
  title: "CI/CD Orchestrator for Terraform",
  description:
  "Auto-plan on every PR. Apply on merge. Drift detection. State management with rollback. Runs in your CI, your secrets never leave your environment. 4.9k GitHub stars, 600+ orgs in production.",
  href: "https://opentaco.dev"
},
{
  chip: "opencomputer",
  title: "Computers for AI Agents",
  description:
  "Background infra to run your agents. Hibernate when idle, wake when needed. With auth, storage and deployment out of the box.",
  href: "https://opencomputer.dev"
}];


const ProductsSection = () =>
<section className="pb-12 px-6">
    <div className="">
      <h2 className="font-light text-xl md:text-2xl text-slate-600 mb-4 text-center font-display">
        What we've shipped
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) =>
      <ProductCard key={p.chip} {...p} />
      )}
      </div>
    </div>
  </section>;


export default ProductsSection;