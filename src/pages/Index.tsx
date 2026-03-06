import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: i * 0.08,
    },
  }),
};

const features = [
  {
    label: "PR Automation",
    desc: "Auto-plan on PR, apply on merge. PR-level locking prevents conflicts. Configurable approval gates.",
  },
  {
    label: "State Management",
    desc: "Versioned state with RBAC, cross-account support, and one-click rollback.",
  },
  {
    label: "Drift Detection",
    desc: "Scheduled scans detect infrastructure drift. Auto-creates issues in GitHub, Jira, Linear, or Slack.",
  },
  {
    label: "Remote Runs",
    desc: "Execute Terraform commands remotely via TFE protocol. Logs stream back to your terminal or CI.",
  },
  {
    label: "Self-Hosted",
    desc: "Run it on your infra. Open source. No vendor lock-in. Your secrets stay yours.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="mx-auto flex max-w-[994px] items-center justify-between px-10 py-6 max-sm:px-5">
        <span
          className="glitch-logo font-mono text-[15px] font-medium tracking-tight text-foreground"
          data-text="opentaco"
        >
          <a
            href="/"
            className="font-display text-lg font-medium tracking-tight text-foreground logo-ai-hover cursor-pointer no-underline"
            data-text="digger"
          >
            digger
          </a>{" "}
          / opentaco
        </span>
        <div className="flex gap-6">
          <a
            href="https://docs.opentaco.dev"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            docs
          </a>
          <a
            href="https://github.com/diggerhq/digger"
            className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github size={16} />
            github
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-[994px] px-10 pb-16 pt-20 max-sm:px-5 max-sm:pb-20 max-sm:pt-12">
        <motion.h1
          className="font-serif text-[clamp(42px,6vw,64px)] leading-[1.15] tracking-[-1.5px] text-foreground mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Terraform automation that feels invisible.
        </motion.h1>

        <motion.div
          className="font-serif text-[clamp(28px,4vw,38px)] leading-[1.35] tracking-[-0.8px] text-foreground mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          OpenTaco is a CI/CD orchestrator purpose-built for Terraform.
        </motion.div>

        <Divider i={2} />

        <motion.div
          className="mb-14 space-y-7"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            Raise a PR and OpenTaco runs{" "}
            <em className="font-serif not-italic text-[19px] italic">
              terraform plan
            </em>{" "}
            automatically, posting the output as a comment. Approve and merge,
            it applies. State is versioned with rollback built in. Drift is
            detected on a schedule and filed as issues in GitHub.
          </p>
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            Terraform runs natively in your CI. Your cloud credentials never
            leave your environment. No third-party compute, no secrets shared
            with a SaaS.
          </p>
        </motion.div>

        {/* Feature list */}
        <motion.ul
          className="my-14 list-none"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          {features.map((f, idx) => (
            <li
              key={idx}
              className="flex gap-5 border-b border-border-light py-5 first:border-t max-sm:flex-col max-sm:gap-1"
            >
              <span className="min-w-[160px] shrink-0 font-mono text-[13px] font-medium text-foreground max-sm:min-w-0">
                {f.label}
              </span>
              <span className="text-[15px] leading-[1.6] text-lighter">
                {f.desc}
              </span>
            </li>
          ))}
        </motion.ul>

        <Divider i={5} />

        <motion.div
          className="my-14 space-y-7"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
        >
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            Most teams don't need Terraform Cloud. They need their existing CI
            to understand Terraform, to know what a plan is, what a state lock
            means, when to apply, and when to wait.
          </p>
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            OpenTaco gives your CI that understanding.
          </p>
        </motion.div>

        <Divider i={8} />

        {/* Architecture diagram */}
        <motion.div
          className="my-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={9}
        >
          <ArchitectureDiagram />
        </motion.div>

        <motion.div
          className="font-serif text-[clamp(28px,4vw,38px)] leading-[1.35] tracking-[-0.8px] text-foreground"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={10}
        >
          Your CI already runs your code. Let it run your infrastructure too.
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8 pt-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={11}
        >
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://otaco.app"
              className="inline-block rounded-md border border-primary bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
            >
              Get started
            </a>
            <a
              href="https://github.com/diggerhq/digger"
              className="inline-block rounded-md border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              View on GitHub
            </a>
            <a
              href="https://bit.ly/diggercommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              <svg width="16" height="16" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#E01E5A"/>
                <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36C5F0"/>
                <path d="M97.2 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97.2V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.9 5.8 70.7 0 77.8 0s12.9 5.8 12.9 12.9v32.3z" fill="#2EB67D"/>
                <path d="M77.8 97.2c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97.2h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.8z" fill="#ECB22E"/>
              </svg>
              Join Slack
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[994px] items-center justify-between border-t border-border-light px-10 py-10 max-sm:px-5 max-sm:py-8">
        <span
          className="glitch-logo font-mono text-[13px] text-faint"
          data-text="© 2026 opentaco"
        >
          © 2026 opentaco by{" "}
          <span className="underline">
            <a
              href="/"
              data-text="digger"
            >
              digger
            </a>
          </span>
        </span>
        <div className="flex gap-4">
          <a
            href="https://docs.opentaco.dev"
            className="font-mono text-[13px] text-faint transition-colors hover:text-foreground"
          >
            docs
          </a>
          <a
            href="https://github.com/diggerhq/digger"
            className="flex items-center gap-1.5 font-mono text-[13px] text-faint transition-colors hover:text-foreground"
          >
            <Github size={14} />
            github
          </a>
        </div>
      </footer>
    </div>
  );
};

const Divider = ({ i }: { i: number }) => (
  <motion.div
    className="my-14 h-px w-12 bg-border"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={i}
  />
);

export default LandingPage;
