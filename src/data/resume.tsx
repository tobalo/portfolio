import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tobalo",
  initials: "T",
  url: "https://tobalo.me",
  location: "North Texas",
  locationLink: "https://www.google.com/maps/place/dallas-fortworth",
  description:
    "Solutions Architect, Software Developer, Entrepreneur, Analyst, and Life Long Student",
  summary:
    "In the middle of 2024, I decided to leave my cushy big tech and corporate job and live in the trenches of startups, small business, and building companys from the ground up. I currently lead and run yeetum.com and actively provide technical advisory for WhitegloveAI, Intrana, and a few other organizations. I also mentor, coach, and teach aspiring computer science, information systems, and math to students ranging from middle school to masters students. I'm hyperfocused on supporting the next generation of engineering for R&D and restoring American industry with my information skills.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "IAM/IdP",
    "AuthN/AuthZ",
    "Cloud Infrastructure",
    "DevSecOps",
    "API & Microservices",
    "Data Integration",
    "Large Language Models",
    "Vision Language Models",
    "IaC",
    "Cloud Security",
    "Next.js",
    "Typescript",
    "Node.js",
    "Data Orchestration",
    "Intelligent Document Processing",
    "Web3",
    "OSINT",
    "Internet Investigations"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@tobalo.me",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tobalo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tobalo",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tobalotv",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/tobalotv",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "WhitegloveAI",
      href: "https://whitegloveai.com",
      badges: [],
      location: "",
      title: "VP, AI Incubation Lab",
      logoUrl: "/whitegloveai.png",
      start: "Aug 2024",
      end: "Present",
      description: "• Led engineering team at WhitegloveAI to design AI-based data engineering workflows for complex business documents, resulting in improved data serialization and structured outputs.\n• Provided strategic advice on AI industry updates for product strategy and technical due diligence on services & consulting.\n• Developed multi-model AI agents for regulated industries using various toolkits and frameworks.",
      skills: ["System Architecture", "Python", "Team Building", "Systems Thinking", "Technical Enablement"]
    },
    {
      company: "IpserLab",
      href: "https://ipserlab.com",
      badges: [],
      location: "Fort Worth, Texas, United States",
      title: "Advisory Board Member",
      logoUrl: "https://ipserlab.com/app/image/imageimage?name=IpserLabLogo.jpg",
      start: "Jul 2024",
      end: "Present",
      description: "• Advised and mentored the builder community of Fort Worth on technical and innovation strategy, supporting startups and entrepreneurs.\n• Guided strategic innovation within Fort Worth Innovation Council, specializing in cloud architecture and hyper scaling, Web3, and GenAI.\n• Provided expertise on cloud-native principles and advised on IP for strategic M&A for technical asset and debt.",
      skills: ["Data Analysis", "Entrepreneurship", "IT Strategy", "Leadership", "Management", "Networking", "Research", "Strategic Planning", "Strategy", "Teaching", "Team Building", "Technical Enablement"]
    },
    {
      company: "Yeetum",
      href: "https://yeetum.com",
      badges: [],
      location: "Texas, United States",
      title: "Founder & CEO",
      logoUrl: "https://yeetum.com/favicon.ico",
      start: "Jan 2021",
      end: "Present",
      description: "• Developed a platform for cyber and financial security awareness, utilizing OSINT data mining for cyber threat news and government financial data.\n• Curated aggregated resources for OSINT investigations and internet researchers, fostering global macro and geo-political discussions.\n• Produced an intelligence newsletter with executive summaries, insider trades, and latest Cyber, Web3, and FinSec news updates.",
      skills: ["Business Strategy", "Product Development", "Strategic Planning"]
    },
    {
      company: "Oracle",
      href: "https://oracle.com",
      badges: [],
      location: "Austin",
      title: "Solutions Architect",
      logoUrl: "/oracle.png",
      start: "Aug 2018",
      end: "Jul 2024",
      description: "- Driven ~$25mm OCI ACR\n- Partner with sales to build organizational relationships with lines of business built on trust for business & technical problems\n- Designed and deployed OCI landing zones for data center consolidation & migrations\n- Onboard customer tenancies to expedite time-to-consumption and ensure delivery success\n- Deepened Cloud-Native engineering relationships in the OCI ecosystem\n- Liaison pain points from P0 security to CSAT/CX/XDR\n- Advise day 2 operational excellence best practices with cloud-native methodologies\n- Augment XDR resolution times by 2x through cross-functional collaboration\n- Finalist in Accenture OCI 2023 & 2024 Mastermind hackathons\n- Led program for OCI-C->OCI upgrades for 150+ clients\n- Field researcher in OCI strategic innovation - AI & Blockchain",
      skills: ["Strategic Planning", "Data Analysis", "Business Development", "Solution Architecture"]
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "",
      title: "Web Developer",
      logoUrl: "/freelance.png",
      start: "Nov 2016",
      end: "Aug 2018",
      description: "",
      skills: []
    },
    {
      company: "Texas State University",
      href: "https://txstate.edu",
      badges: [],
      location: "San Marcos, Texas, United States",
      title: "Analyst - Network Operations Center",
      logoUrl: "/txstate.png",
      start: "Apr 2016",
      end: "May 2018",
      description: "• Monitored Texas State University System NOC for anomalies in HVAC, network outages, and security incidents.\n• Trained new employees on support operations and data center monitoring.\n• Responded to critical systems escalations for faculty, staff, and students.",
      skills: []
    },
    {
      company: "McCoy Corporation",
      href: "https://mccoy.com",
      badges: [],
      location: "San Marcos, TX",
      title: "Information Systems Specialist",
      logoUrl: "/mccoy.png",
      start: "Aug 2015",
      end: "Dec 2017",
      description: "• Programmed scripts to automate image deployment, software installations, and system administration tasks, saving over 100+ hours per year.\n• Implemented one-click silent software installations to streamline processes and increase efficiency.\n• Developed automation solutions for legacy IT shop at McCoy Corporation in San Marcos, TX.",
      skills: []
    },
    {
      company: "Solid IT Networks, Inc.",
      href: "https://soliditnetworks.com",
      badges: [],
      location: "San Marcos, Tx",
      title: "Networking Contractor",
      logoUrl: "/solidit.png",
      start: "Feb 2017",
      end: "May 2017",
      description: "• Instructed cabling team during wireless upgrade project for 100+ academic buildings and 20+ dorms with 5ghz Cisco Meraki APs.\n• Conducted quality assurance for 2,300+ wireless access points, advising on necessary changes.\n• Achieved seamless implementation of wireless network infrastructure for educational facilities.",
      skills: ["Strategic Planning"]
    },
    {
      company: "Tilt.com",
      href: "https://tilt.com",
      badges: [],
      location: "San marcos",
      title: "Team Lead, Marketing Associate",
      logoUrl: "/tilt.png",
      start: "Jul 2015",
      end: "Feb 2017",
      description: "Managed growth of tilt.com at Texas State by hiring ambassadors, issuing promo codes, promoting events, and selling items.",
      skills: []
    }
  ],
  education: [
    {
      school: "Texas State University",
      href: "https://txstate.edu",
      location: "San Marcos, TX",
      degree: "Bachelor of Business Administration - BBA, Computer Information Systems",
      start: "2014",
      end: "2018",
      description: "Activities and societies: Sigma Chi, Inter-fraternity Council, Data Analytics Club, and Association of Information Technology Professionals (AITP)\n\nCoursework in:\n- Object-Oriented Programming (.NET, Java)\n- Data Communications\n- Agile Framework\n- Database Systems\n- Mobile Development (iOS, Android)\n- Information Security\n- Data Mining & Statistics",
      logoUrl: "/txstate.png"
    },
    {
      school: "R L Paschal High School",
      href: "https://paschalhs.org",
      location: "Fort Worth, TX",
      degree: "High School Diploma",
      start: "2010",
      end: "2014",
      description: "",
      logoUrl: "/paschal.png"
    }
  ],
  projects: [
    {
      title: "Yeetum Cloud",
      href: "https://yeetum.com",
      dates: "2020 - Present",
      active: true,
      description:
        "Platform focused on growing laymen understanding of cyber & economics. All source data collection on cyber, economics, and geopolitical issues for both market analysis and cyber estate strategy. Free and paid newsletter on government contracts, insider trading, latest news, trends, and reindustrialization.",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "SMTP",
        "Stripe",
        "Shadcn UI",
        "Microservices",
        "DevSecOps",
        "IaaS / PaaS"
      ],
      links: [
        {
          type: "Website",
          href: "https://yeetum.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/yeetum.png",
      video: ""
    },
    {
      title: "Gogent - Agentic Worker AI",
      href: "https://github.com/tobalo/gogent",
      dates: "2025",
      active: true,
      description: 
        "Developed a distributed log analysis system using Go-based AI agents and embedded NATS messaging for real-time edge processing. Focused on manufacturing and industrial applications to increase productivity through automated error analysis.",
      technologies: [
        "Go",
        "NATS",
        "LLM",
        "Ollama",
        "Edge Computing",
        "Docker",
        "Real-time Processing",
        "Industrial AI",
        "Syslogs"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tobalo/gogent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gogent.png",
      video: "",
      imagealt: "Gogent - Agentic Worker AI in Go"
    },
    {
      title: "Dispatchr.sh",
      href: "https://dispatchr.sh",
      dates: "Dec 2024",
      active: true,
      description: 
        "Built an agentic workflow platform for dispatchers, streamlining communication and operations through intelligent automation. Integrates Twilio for seamless communication and leverages Docker Swarm for scalable deployment.",
      technologies: [
        "Vite.js",
        "React",
        "Docker Swarm",
        "Twilio",
        "REST API",
        "Agentic AI",
        "Workflow Automation",
        "Real-time Communication"
      ],
      links: [
        {
          type: "Website",
          href: "https://dispatchr.sh",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/dispatchr.png",
      video: "",
      imagealt: "Dispatchr.sh - Agentic Workflow Platform"
    },
    {
      title: "Spiritual Mental Health AI Chat",
      href: "https://github.com/tobalo/spiritual-ai-chat-example",
      dates: "Feb 2025",
      active: true,
      description:
        "Developed a custom AI chat interface focused on spiritual and mental health guidance using JStack and 21st.dev for enhanced design. Deployable to Cloudflare Workers using the Hono framework.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Hono",
        "Cloudflare Workers",
        "Google Gemini",
        "21st.dev",
        "JStack"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tobalo/spiritual-ai-chat-example",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yeshuit.png",
      video: "",
    },
    {
      title: "Fort Worth DAO Constitution & Whitepaper",
      imagealt: "Fort Worth City DAO Constitution",
      image: "/fwtx-dao.webp",
      video: "",
      href: "https://constitution.fwtx.city/",
      dates: "2023",
      active: true,
      description: "Contributed to the development of Fort Worth City's DAO Constitution, establishing governance frameworks for digital civic engagement.",
      technologies: ["CityDAOs", "Leadership","Blockchain", "Smart Contracts", "Governance", "Web3"],
      links: [
        {
          type: "Document",
          href: "https://constitution.fwtx.city",
          icon: <Icons.globe className="size-3" />,
        }
      ]
    },
    {
      title: "The Great Capitulation",
      imagealt: "Sovereign Capital and Data Flows",
      image: "/capitulation.webp",
      href: "https://github.com/tobalo/sovereign-capital-data-flow.git",
      dates: "2022",
      active: true,
      video: "",
      description: "Thesis on National Financial Security risk to USG + American Retirements",
      technologies: ["Information Capital", "Complex Systems", "Markets", "Macroeconomics"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tobalo/sovereign-capital-data-flow.git",
          icon: <Icons.github className="size-3" />,
        }
      ]
    },
    {
      title: "EdgeAI Intel Tool",
      imagealt: "Edge Data and SIGINT Analysis Tool",
      image: "/synopsis-poc.gif",
      video: "",
      href: "https://github.com/tobalo/synopsis.git",
      dates: "2023",
      active: true,
      description: "Edge computing solution for data and SIGINT analysis",
      technologies: ["Edge Computing", "AI", "Signal Processing", "Golang", "Emergency Response"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tobalo/synopsis.git",
          icon: <Icons.github className="size-3" />,
        }
      ]
    },
    {
      title: "Global Satellite Tracking",
      imagealt: "NATS GEOINT Network Fabric",
      image: "/satellites.webp",
      video: "",
      href: "https://github.com/Ynosis/nats-geoint",
      dates: "2023",
      active: true,
      description: "NATS-based GEOINT network fabric for global satellite tracking",
      technologies: ["NATS", "GEOINT", "Space","Distributed Systems", "Go"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ynosis/nats-geoint",
          icon: <Icons.github className="size-3" />,
        }
      ]
    },
    {
      title: "Encrypted News Network",
      imagealt: "Immutable News DAG PoC",
      image: "/encrypted-news.jpeg",
      video: "",
      href: "https://github.com/jedi-ops/immutable-news-dag-poc",
      dates: "2023",
      active: true,
      description: "Proof of concept for an immutable news network using DAG architecture",
      technologies: ["Blockchain", "DAG", "Encryption", "Distributed Systems", "Journalism Provenance"],
      links: [
        {
          type: "Source",
          href: "https://github.com/jedi-ops/immutable-news-dag-poc",
          icon: <Icons.github className="size-3" />,
        }
      ]
    },
  ],
  hackathons: [
    {
      title: "Constellation Network Hackathon",
      dates: "Fall 2024",
      location: "Virtual",
      description: "Social good winner for project on Auditability, Encrypting, and Provenance to News Publishing.",
      image: "/constellation.png",
      links: []
    },
    {
      title: "Accenture Oracle 2024 Mastermind",
      dates: "Spring 2024",
      location: "Austin, Texas",
      description: "Finalist for edgeAI focused on disconnected multi-cloud innovation for emergency response for raw SIGINIT data or video/image inference for GenAI apps and vector search.",
      image: "/",
      links: []
    },
    {
      title: "Accenture Oracle 2023 Mastermind",
      dates: "March 2023",
      location: "Austin, Texas",
      description: "Finalist focused on space & satellite innovation for work on global satellite tracking, sending .tiff files from Azure orbital gateway with global round robins to OCI regions, network research and testing on Starlink packet routing from disparate regions to OCI hosted apps.",
      image: "",
      links: []
    },
    /* {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    }, */
  ],
} as const;
