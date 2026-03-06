const ArchitectureDiagram = () => (
  <svg
    viewBox="0 0 900 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full rounded-lg border border-border-light bg-[hsl(40,20%,97%)]"
  >
    {/* Dotted background pattern */}
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="0.8" fill="hsl(40,10%,80%)" />
      </pattern>
    </defs>
    <rect width="900" height="340" fill="url(#dots)" />

    {/* CLIENTS label */}
    <text x="68" y="132" fontSize="9" fontFamily="monospace" fill="hsl(0,0%,55%)" textAnchor="middle">
      CLIENTS
    </text>

    {/* Developer / User box */}
    <rect x="20" y="140" width="96" height="40" rx="4" fill="white" stroke="hsl(0,0%,80%)" strokeWidth="1" />
    <text x="68" y="164" fontSize="11" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,20%)" textAnchor="middle">
      Developer / User
    </text>

    {/* Arrow 1 */}
    <line x1="116" y1="160" x2="168" y2="160" stroke="hsl(0,0%,70%)" strokeWidth="1" />
    <polygon points="168,156 176,160 168,164" fill="hsl(0,0%,70%)" />

    {/* HTTP / Browser box */}
    <rect x="180" y="140" width="96" height="40" rx="4" fill="white" stroke="hsl(0,0%,80%)" strokeWidth="1" />
    <text x="228" y="164" fontSize="11" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,20%)" textAnchor="middle">
      HTTP / Browser
    </text>

    {/* Arrow 2 */}
    <line x1="276" y1="160" x2="348" y2="160" stroke="hsl(0,0%,70%)" strokeWidth="1" />
    <polygon points="348,156 356,160 348,164" fill="hsl(0,0%,70%)" />

    {/* OPENTACO label */}
    <text x="430" y="28" fontSize="9" fontFamily="monospace" fill="hsl(0,0%,55%)" textAnchor="middle">
      OPENTACO
    </text>

    {/* Outer opentaco border */}
    <rect x="340" y="36" width="540" height="280" rx="6" fill="none" stroke="hsl(0,0%,80%)" strokeWidth="1" strokeDasharray="4 3" />

    {/* UI box */}
    <rect x="360" y="120" width="140" height="80" rx="4" fill="white" stroke="hsl(0,0%,80%)" strokeWidth="1" />
    <text x="430" y="145" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="600" fill="hsl(0,0%,20%)" textAnchor="middle">
      UI
    </text>
    <text x="430" y="165" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)" textAnchor="middle">
      + Gateway proxy
    </text>
    <text x="430" y="180" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)" textAnchor="middle">
      + Token validation
    </text>

    {/* BACKEND SERVICES label */}
    <text x="710" y="55" fontSize="9" fontFamily="monospace" fill="hsl(0,0%,55%)" textAnchor="middle">
      BACKEND SERVICES
    </text>

    {/* Backend services border */}
    <rect x="580" y="62" width="280" height="240" rx="6" fill="none" stroke="hsl(0,0%,80%)" strokeWidth="1" strokeDasharray="4 3" />

    {/* Arrow to Drift */}
    <line x1="500" y1="145" x2="598" y2="105" stroke="hsl(0,0%,70%)" strokeWidth="1" />
    <polygon points="595,100 604,104 596,110" fill="hsl(0,0%,70%)" />

    {/* Arrow to Orchestrator */}
    <line x1="500" y1="160" x2="598" y2="185" stroke="hsl(0,0%,70%)" strokeWidth="1" />
    <polygon points="595,180 604,185 596,190" fill="hsl(0,0%,70%)" />

    {/* Arrow to Statesman */}
    <line x1="500" y1="175" x2="598" y2="260" stroke="hsl(0,0%,70%)" strokeWidth="1" />
    <polygon points="594,256 604,260 596,266" fill="hsl(0,0%,70%)" />

    {/* Drift box */}
    <rect x="600" y="76" width="240" height="70" rx="4" fill="white" stroke="hsl(0,0%,80%)" strokeWidth="1" />
    <text x="620" y="98" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="600" fill="hsl(0,0%,20%)">
      Drift
    </text>
    <text x="620" y="115" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)">
      + Drift detection
    </text>
    <text x="620" y="130" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)">
      + Remediation
    </text>

    {/* Orchestrator box */}
    <rect x="600" y="160" width="240" height="70" rx="4" fill="white" stroke="hsl(0,0%,80%)" strokeWidth="1" />
    <text x="620" y="182" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="600" fill="hsl(0,0%,20%)">
      Orchestrator
    </text>
    <text x="620" y="199" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)">
      + Start/stop CI jobs
    </text>
    <text x="620" y="214" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)">
      + PR automation
    </text>

    {/* Statesman box */}
    <rect x="600" y="244" width="240" height="70" rx="4" fill="white" stroke="hsl(0,0%,80%)" strokeWidth="1" />
    <text x="620" y="266" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="600" fill="hsl(0,0%,20%)">
      Statesman
    </text>
    <text x="620" y="283" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)">
      + State mgmt
    </text>
    <text x="620" y="298" fontSize="10" fontFamily="system-ui, sans-serif" fill="hsl(0,0%,50%)">
      + Remote runs
    </text>
  </svg>
);

export default ArchitectureDiagram;
