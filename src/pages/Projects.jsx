import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'CricStore', status: 'In progress', category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&q=80&auto=format&fit=crop',
    points: [
      'Microservices eCommerce for cricket gear — 5 isolated services, RSA auth, multi-tenancy.',
      'Kafka + WebSockets for real-time updates and live shopping.',
      'EAV modeling in PostgreSQL; Docker + GitHub Actions CI/CD on Render.',
      'SonarCloud for coverage, duplication, and maintainability tracking.',
    ],
    tech: ['React', 'Next.js', 'PostgreSQL', 'Kafka', 'Docker', 'AWS'],
    code: 'https://github.com/adarsh-naik-2004',
  },
  {
    title: 'AI Interview Platform', status: 'Completed', category: 'Full Stack',
    image: 'public/ai-article-1-banner-shot-min.jpg',
    points: [
      'Interview simulator using Gemini AI — real-time feedback, scoring, insights.',
      'JWT auth, optimised MongoDB schemas, React Query for data fetching.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    code: 'https://github.com/adarsh-naik-2004/interview-platform',
  },
  {
    title: 'Custom Reverse Proxy', status: 'Completed', category: 'Infrastructure',
    image: 'public/proxy.png',
    points: [
      'High-throughput reverse proxy from scratch — 8000+ concurrent connections at <100ms.',
      'Worker-thread clustering and circuit breaker patterns for resilience.',
      'YAML config, Redis caching, health checks.',
    ],
    tech: ['Node.js', 'Nginx', 'Redis', 'YAML'],
    code: 'https://github.com/adarsh-naik-2004/proxy',
  },
  {
    title: 'FileVault', status: 'Completed', category: 'Systems',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80&auto=format&fit=crop',
    points: [
      'AES-256-CBC encryption utility with recursive directory processing.',
      'Parallel execution via fork() + shared memory; semaphore-synchronised.',
    ],
    tech: ['C++', 'OpenSSL', 'IPC'],
    code: 'https://github.com/adarsh-naik-2004/FileVault',
  },
  {
    title: 'Mindwell', status: 'Completed', category: 'AI / ML',
    image: 'public/mindwell.jpg',
    points: [
      'Multimodal mental-health assessment — BERT text + MFCC audio in TensorFlow.',
      'Flask web app with speech recognition, real-time chatbot, secure auth.',
    ],
    tech: ['Python', 'TensorFlow', 'Flask', 'BERT', 'NLP'],
    code: '',
  },
  {
    title: 'Network Slicing Classification', status: 'Completed', category: 'ML / Networks',
    image: 'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=900&q=80&auto=format&fit=crop',
    points: [
      'KNN classifier on 5G network data to identify slice types for resource allocation.',
      'Preprocessing, feature extraction, baseline comparison.',
    ],
    tech: ['Python', 'Machine Learning', 'KNN'],
    code: 'https://github.com/adarsh-naik-2004/Network-Slicing-Classification',
  },
  {
    title: 'Text Summarizer', status: 'Completed', category: 'NLP',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80&auto=format&fit=crop',
    points: [
      'NLP summarisation on noisy inputs like car reviews — 77.6% accuracy.',
      'Clean web interface with interactive visualisations.',
    ],
    tech: ['Python', 'NLP', 'Flask'],
    code: 'https://github.com/adarsh-naik-2004/NLP-Based-Text-Summarizer',
  },
  {
    title: 'Audio Equalizer', status: 'Completed', category: 'Signal Processing',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80&auto=format&fit=crop',
    points: [
      'Interactive MATLAB equalizer with frequency sliders and vocal/instrumental splitting.',
      'FFT + Butterworth filters for real-time audio feedback.',
    ],
    tech: ['MATLAB', 'DSP', 'FFT'],
    code: 'https://github.com/adarsh-naik-2004/Audio-Equalizer-using-Matlab',
  },
  {
    title: 'AR Try-On App', status: 'Completed', category: 'AR',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=900&q=80&auto=format&fit=crop',
    points: [
      'AR try-on for watches and furniture — marker-based and marker-less tracking.',
      'Depth masking + wrist detection for realism.',
    ],
    tech: ['Unity', 'C#', 'Blender'],
    code: 'https://github.com/adarsh-naik-2004/AR-Try-On_Watch_Furniture',
  },
];

function ProjectItem({ title, status, category, image, points, tech, code }) {
  return (
    <div className="py-8 border-b border-line last:border-b-0 grid sm:grid-cols-[12rem_1fr] gap-6 items-start">
      {image && (
        <div className="rounded-md overflow-hidden border border-line bg-surface aspect-[4/3]">
          <img src={image} alt={title} loading="lazy"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div>
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h3 className="font-serif text-2xl sm:text-3xl text-ink">{title}</h3>
          <span className="text-sm text-muted shrink-0">{status}</span>
        </div>
        <span className="text-sm text-olive uppercase tracking-widest">{category}</span>
        <ul className="mt-4 space-y-2">
          {points.map((p, i) => (
            <li key={i} className="text-base text-muted leading-relaxed pl-5 relative max-w-2xl">
              <span className="absolute left-0 text-olive">–</span>{p}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-muted">{tech.join(' · ')}</span>
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer"
              className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-accent transition-colors shrink-0">
              Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const inProgress = projects.filter((p) => p.status === 'In progress');
  const completed = projects.filter((p) => p.status === 'Completed');

  return (
    <div className="bg-bg text-ink min-h-screen font-mono">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        <section className="pt-16 pb-12">
          <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-tight">Projects.</h1>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            A working record of things I've built, in code and outside of it.
          </p>
        </section>

        {inProgress.length > 0 && (
          <section className="py-12 border-t border-line">
            <h2 className="font-serif text-3xl sm:text-4xl text-blue leading-tight">In Progress.</h2>
            <div className="mt-6">{inProgress.map((p) => <ProjectItem key={p.title} {...p} />)}</div>
          </section>
        )}

        <section className="py-12 border-t border-line">
          <h2 className="font-serif text-3xl sm:text-4xl text-blue leading-tight">Completed.</h2>
          <div className="mt-6">{completed.map((p) => <ProjectItem key={p.title} {...p} />)}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}