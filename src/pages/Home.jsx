import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const education = [
  {
    school: 'IIIT, Naya Raipur',
    degree: 'B.Tech · ECE',
    detail: 'CGPA: 8.12',
    period: '2022 – 2026',
    location: 'Chhattisgarh',
  },
  {
    school: 'Gyan Ganga Educational Academy',
    degree: 'CBSE — Class 10 - 93% · Class 12 - 92%',
    detail: '',
    period: '2019 – 2022',
    location: 'Chhattisgarh',
  },
];

const experience = [
  {
    role: 'Software Engineer',
    org: 'Arcesium',
    orgLink: 'https://www.linkedin.com/company/arcesium/',
    period: 'Jul 2026 – Present',
    location: 'Hyderabad, Telangana',
    points: [
      'Joined the engineering team full-time after converting from the internship.',
      'Ramping up on the platform, internal tooling, and service architecture across post-trade fintech.',
      'Contributing to code reviews and small changes while getting fully onboarded.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Arcesium',
    orgLink: 'https://www.linkedin.com/company/arcesium/',
    period: 'Apr 2026 – Jun 2026',
    location: 'Hyderabad, Telangana',
    points: [
      'Built REST API test suites — validating payloads, status codes, and business logic.',
      'Wrote scalable UI automation in TypeScript & Playwright with reusable components.',
      'Piloted AI/LLM tooling for test-case generation and high-risk area identification.',
    ],
  },
  {
    role: 'Research Intern — Hybrid AR Navigation',
    org: 'GUNI SSRP · Centre for Advanced Research Studies',
    orgLink: 'https://www.linkedin.com/school/ganpat-university/',
    period: 'Apr 2025 – Jun 2025',
    location: 'Remote',
    points: [
      'Built a hybrid GPS + QR-based AR indoor navigation system serving 4,000+ monthly users.',
      'Shipped a 3-tier admin dashboard for POIs and routes, deployed on university infra.',
    ],
  },
];

const work = [
  {
    title: 'CricStore',
    status: 'Jan 2025 – Present',
    stack: 'MERN · Next.js · PostgreSQL · Kafka · AWS',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80&auto=format&fit=crop',
    points: [
      'Microservices eCommerce platform — 5 isolated services, RSA auth, multi-tenancy.',
      'Kafka + WebSockets for real-time updates and live shopping.',
      'EAV modeling in PostgreSQL; Docker + GitHub Actions CI/CD on Render.',
      'SonarCloud wired in for coverage, duplication, and maintainability.',
    ],
    code: 'https://github.com/adarsh-naik-2004',
  },
  {
    title: 'FileVault',
    status: 'Dec 2024 – Apr 2025',
    stack: 'C++ · OpenSSL · IPC',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&auto=format&fit=crop',
    points: [
      'AES-256-CBC file encryption utility with recursive directory processing.',
      'Parallel processing with fork() and shared memory; semaphore-synchronised.',
    ],
    code: 'https://github.com/adarsh-naik-2004/FileVault',
  },
  {
    title: 'AI-Powered Interview Platform',
    status: 'Feb 2025 – Mar 2025',
    stack: 'React · Node.js · MongoDB · Gemini AI',
    image: 'public/ai-article-1-banner-shot-min.jpg',
    points: [
      'Full-stack interview simulator using Gemini for real-time feedback and scoring.',
      'JWT auth and optimised MongoDB schemas, wrapped in a React Query UI.',
    ],
    code: 'https://github.com/adarsh-naik-2004/interview-platform',
  },
];

const skills = [
  { label: 'Languages',  value: 'C++, C, Python, JavaScript / TypeScript, SQL' },
  { label: 'Frontend',   value: 'React, Next.js, Tailwind, Redux, Zustand, Vite' },
  { label: 'Backend',    value: 'Node.js, Express, Flask, REST APIs, Microservices, Socket.IO, Kafka' },
  { label: 'Databases',  value: 'PostgreSQL, MongoDB, Redis, Mongoose, TypeORM' },
  { label: 'DevOps',     value: 'Docker, GitHub Actions, GitLab CI, Jenkins, ArgoCD, SonarCloud, Cypress, Playwright' },
  { label: 'Cloud',      value: 'AWS (EC2, S3), Confluent Cloud (Kafka)' },
  { label: 'Tools',      value: 'Git, VS Code, Postman, Linux, Figma, JIRA' },
];

/* ---------- Reusable ---------- */
function SectionLabel({ children, color = 'text-accent' }) {
  return (
    <div className="flex items-center gap-4">
      <span className={`font-mono text-xs tracking-[0.25em] uppercase ${color}`}>{children}</span>
      
    </div>
  );
}
function SectionTitle({ children }) {
  return <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-ink leading-tight">{children}</h2>;
}
function Bullets({ points, dotColor = 'text-accent' }) {
  return (
    <ul className="mt-4 space-y-2">
      {points.map((p, i) => (
        <li key={i} className="text-base text-muted leading-relaxed pl-5 relative max-w-2xl">
          <span className={`absolute left-0 ${dotColor}`}>–</span>{p}
        </li>
      ))}
    </ul>
  );
}
function EducationItem({ school, degree, detail, period, location }) {
  return (
    <div className="py-6 border-b border-line last:border-b-0">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h3 className="font-serif text-xl sm:text-2xl text-ink">{school}</h3>
        <span className="text-sm text-muted shrink-0">{period}</span>
      </div>
      <p className="mt-1 text-sm sm:text-base text-muted">
        {degree}{detail && <span className="text-ink"> · {detail}</span>} · {location}
      </p>
    </div>
  );
}
function ExperienceItem({ role, org, orgLink, period, location, points }) {
  return (
    <div className="py-8 border-b border-line last:border-b-0">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h3 className="font-serif text-2xl sm:text-3xl text-ink">{role}</h3>
        <span className="text-sm text-muted shrink-0">{period}</span>
      </div>
      <p className="mt-1 text-sm sm:text-base text-muted">
        {orgLink ? (
          <a
            href={orgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line underline-offset-4 hover:text-accent transition-colors"
          >
            {org}
          </a>
        ) : (
          <span className="text-ink">{org}</span>
        )}
        {' '}· {location}
      </p>
      <Bullets points={points} dotColor="text-blue" />
    </div>
  );
}
function WorkItem({ title, status, stack, image, points, code }) {
  return (
    <div className="py-8 border-b border-line last:border-b-0 grid sm:grid-cols-[10rem_1fr] gap-6 items-start">
      {image && (
        <div className="rounded-md overflow-hidden border border-line bg-surface aspect-[4/3] sm:aspect-square">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" loading="lazy" />
        </div>
      )}
      <div>
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h3 className="font-serif text-2xl sm:text-3xl text-ink">{title}</h3>
          <span className="text-sm text-muted shrink-0">{status}</span>
        </div>
        <p className="mt-1 text-sm text-olive">{stack}</p>
        <Bullets points={points} dotColor="text-olive" />
        {code && (
          <div className="mt-4">
            <a href={code} target="_blank" rel="noopener noreferrer"
              className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-accent transition-colors">
              View code →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
function SkillRow({ label, value }) {
  return (
    <div className="py-4 border-b border-line last:border-b-0 grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6">
      <span className="font-mono text-sm uppercase tracking-widest text-olive">{label}</span>
      <span className="text-base text-muted leading-relaxed">{value}</span>
    </div>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <div className="bg-bg text-ink min-h-screen font-mono">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 sm:px-8">

        {/* Hero — no full name kicker, no email, bullets */}
        <section className="min-h-[75vh] flex flex-col justify-center pt-12 pb-16">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink">
            Software engineer,
            <br />
            <span className="italic text-accent">building reliable systems.</span>
          </h1>

          <ul className="mt-10 space-y-3 max-w-2xl">
            <li className="text-base sm:text-lg text-muted leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-accent">–</span>
              Software Engineer at <span className="text-ink font-medium">Arcesium</span>, Hyderabad.
            </li>
            <li className="text-base sm:text-lg text-muted leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-accent">–</span>
              B.Tech in ECE, <span className="text-ink font-medium">IIIT Naya Raipur</span>.
            </li>
            <li className="text-base sm:text-lg text-muted leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-accent">–</span>
              Focus: distributed systems, quality engineering, well-crafted software.
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
            <a href="https://github.com/adarsh-naik-2004" target="_blank" rel="noopener noreferrer" className="text-muted underline decoration-line underline-offset-4 hover:text-ink transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/adarsh-manjunath-naik/" target="_blank" rel="noopener noreferrer" className="text-muted underline decoration-line underline-offset-4 hover:text-ink transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/u/Adarsh_Manjunath_Naik/" target="_blank" rel="noopener noreferrer" className="text-muted underline decoration-line underline-offset-4 hover:text-ink transition-colors">LeetCode</a>
            <a href="https://x.com/Adarsh_M_Naik" target="_blank" rel="noopener noreferrer" className="text-muted underline decoration-line underline-offset-4 hover:text-ink transition-colors">X (Twitter)</a>
          </div>
        </section>

        {/* About — bullets, not paragraphs */}
        <section id="about" className="py-20 border-t border-line">
          <SectionLabel color="text-accent">01 · About</SectionLabel>
          <SectionTitle>A short introduction.</SectionTitle>
          <ul className="mt-8 space-y-3 max-w-2xl">
            <li className="text-base sm:text-lg text-muted leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-accent">–</span>
              Born in Karnataka, raised in Chhattisgarh.
            </li>
            <li className="text-base sm:text-lg text-muted leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-accent">–</span>
              Started programming in college — curiosity that turned into habit.
            </li>
            <li className="text-base sm:text-lg text-muted leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-accent">–</span>
              Interested in <span className="text-ink font-medium">distributed systems</span> and <span className="text-ink font-medium">quality engineering</span>.
            </li>
            <li className="text-base sm:text-lg text-muted leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-accent">–</span>
              Off-hours: <span className="text-ink font-medium">long reads</span>, web series, staying curious.
            </li>
          </ul>
        </section>

        {/* Education */}
        <section id="education" className="py-20 border-t border-line">
          <SectionLabel color="text-yellow">02 · Education</SectionLabel>
          <SectionTitle>Where I studied.</SectionTitle>
          <div className="mt-8">{education.map((e) => <EducationItem key={e.school} {...e} />)}</div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 border-t border-line">
          <SectionLabel color="text-blue">03 · Experience</SectionLabel>
          <SectionTitle>Where I've worked.</SectionTitle>
          <div className="mt-8">{experience.map((item) => <ExperienceItem key={item.role + item.org} {...item} />)}</div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 border-t border-line">
          <SectionLabel color="text-olive">04 · Technical Skills</SectionLabel>
          <SectionTitle>The tools I reach for.</SectionTitle>
          <div className="mt-8">{skills.map((s) => <SkillRow key={s.label} {...s} />)}</div>
        </section>

        {/* Selected Work — with images */}
        <section id="work" className="py-20 border-t border-line">
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[16rem]">
              <SectionLabel color="text-accent">05 · Selected Work</SectionLabel>
              <SectionTitle>Things I've built.</SectionTitle>
            </div>
            <Link to="/projects" className="text-sm text-muted hover:text-ink transition-colors underline decoration-line underline-offset-4 shrink-0">View all →</Link>
          </div>
          <div className="mt-8">{work.map((item) => <WorkItem key={item.title} {...item} />)}</div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-line">
          <SectionLabel color="text-yellow">06 · Contact</SectionLabel>
          <SectionTitle>Let's talk.</SectionTitle>
          <p className="mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            Best way to reach me is over email at{' '}
            <a href="mailto:adarshnaik270@gmail.com" className="text-ink underline decoration-line underline-offset-4 hover:text-accent transition-colors">adarshnaik270@gmail.com</a>.
          </p>
          <p className="mt-3 text-sm text-muted"></p>
        </section>
      </main>

      <Footer />
    </div>
  );
}