import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Cpu, 
  Globe, 
  Smartphone, 
  BarChart, 
  MessageSquare, 
  Mail, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Github,
  Linkedin,
  Rocket,
  Zap,
  Users
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      title: "Web Development",
      description: "Responsive websites, landing pages, and complex front-end architecture using React and Next.js.",
      icon: <Globe className="w-6 h-6" />,
      category: "dev"
    },
    {
      title: "SaaS & Dashboards",
      description: "Admin panels with analytics, login systems, and data-driven management tools.",
      icon: <Code className="w-6 h-6" />,
      category: "dev"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for business and customer use cases.",
      icon: <Smartphone className="w-6 h-6" />,
      category: "dev"
    },
    {
      title: "AI Automation",
      description: "Custom AI assistants, smart follow-up systems, and automated task routing.",
      icon: <Cpu className="w-6 h-6" />,
      category: "ai"
    },
    {
      title: "Business Growth",
      description: "SEO, lead generation, and digital transformation for offline businesses.",
      icon: <BarChart className="w-6 h-6" />,
      category: "growth"
    },
    {
      title: "Messaging Automation",
      description: "WhatsApp automation, chatbot flows, and CRM-integrated communication.",
      icon: <MessageSquare className="w-6 h-6" />,
      category: "ai"
    }
  ];

  const projects = [
    {
      name: "Kwala Network",
      type: "SaaS Product",
      category: "SaaS",
      result: "Centralized analytics and user management system.",
      icon: <BarChart className="w-10 h-10 text-indigo-500" />,
      url: "https://kwala.network/"
    },
    {
      name: "Urologist Mumbai",
      type: "Web Application",
      category: "Web",
      result: "Offline-to-online transition with appointment booking.",
      icon: <Users className="w-10 h-10 text-teal-500" />,
      url: "https://www.urologistmumbai.com/"
    },
    {
      name: "K&D Bus Tours",
      type: "Web Application",
      category: "Web",
      result: "Lead-focused site with automated CRM sync.",
      icon: <Rocket className="w-10 h-10 text-blue-500" />,
      url: "https://kdbustours.com/"
    }
  ];

  const techStack = [
    "React", "Next.js", "JavaScript", "PHP", "Laravel", "WordPress", 
    "MySQL", "Firebase", "Flutter", "Python", "REST APIs", "AI Automation Tools"
  ];

  const filteredProjects = activeTab === 'all' 
  ? projects 
  : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">Vishal Ranmode</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
              <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#about" className="hover:text-indigo-600 transition-colors">Why Me?</a>
              <a href="resume.pdf" download className="px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-sm">Download CV</a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Why Me?</a>
            <a href="resume.pdf" download onClick={() => setIsMenuOpen(false)} className="bg-indigo-600 text-white p-3 rounded-lg text-center">Download CV</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4" />
              <span>Available for New Projects</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Building Systems That <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">Scale Businesses.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              I’m a Software Developer with 3+ years of experience helping businesses move from offline to online through custom SaaS, AI automation, and high-performance websites.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                Start My Digitization <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#projects" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                View Work
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4 grayscale opacity-60">
              <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Trusted by 20+ Businesses</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-3xl -z-10"></div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Code className="w-32 h-32" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">3+ Years Experience</p>
                    <p className="text-sm text-slate-500">Software & Automation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">End-to-End Solutions</p>
                    <p className="text-sm text-slate-500">Dev + Growth + Support</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-3">Core Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "SaaS", "AI Flow", "Next.js", "Lead Gen"].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Capabilities</h2>
            <p className="text-4xl font-bold text-slate-900">What I Help With</p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              I provide a full-stack approach to business growth, covering technical development and marketing automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                {/* <div className="flex items-center text-indigo-600 font-semibold text-sm cursor-pointer group-hover:translate-x-1 transition-transform">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Case Studies</h2>
              <p className="text-4xl font-bold text-slate-900">Real Results for Real Businesses</p>
            </div>
            <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
              {['all', 'SaaS', 'Web'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all ${activeTab === cat ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="h-48 bg-slate-100 flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-indigo-600 uppercase mb-2 tracking-widest">{project.type}</div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.name}</h3>
                  <div className="flex items-start gap-2 text-slate-600 mb-6">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <p className="text-sm font-medium">{project.result}</p>
                  </div>
                  <a href={project.url} target='_blank' rel="noopener noreferrer nofollow" className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">View Case Study <ExternalLink className="w-4 h-4" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section id="about" className="py-24 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Value Proposition</h2>
              <p className="text-4xl font-bold leading-tight">Why Clients Choose One Partner for Dev & Growth</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-indigo-400 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Results Over Code</h4>
                    <p className="text-indigo-200">I focus on business outcomes—leads, automation, and efficiency—not just lines of code.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-indigo-400 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Unified Strategy</h4>
                    <p className="text-indigo-200">Handling development, SEO, and automation means one reliable partner for your entire digital ecosystem.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-indigo-400 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Scalable Execution</h4>
                    <p className="text-indigo-200">I build systems that grow with you, from your first landing page to a complex SaaS dashboard.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Full Tech Ecosystem</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 px-4 bg-white/5 rounded-xl border border-white/5">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Get in Touch</h2>
          <p className="text-4xl font-bold text-slate-900 mb-4">Let's Digitize Your Business</p>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ready to automate your workflows or build your next SaaS? Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-indigo-600 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-bold text-slate-900">Email Me</p>
              <p className="text-slate-500 text-sm"><a href="mailto:vishalranmode786@gmail.com" target="_blank">vishalranmode786@gmail.com</a></p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-green-600 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="font-bold text-slate-900">WhatsApp</p>
              <p className="text-slate-500 text-sm"><a href="https://wa.me/919702247042?text=Hello!" target="_blank">+91-9702247042</a></p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600 mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <p className="font-bold text-slate-900">LinkedIn</p>
              <p className="text-slate-500 text-sm"><a href="javascript:void(0)">vishal-ranmode</a></p>
            </div>
          </div>

          <form className="hidden mt-16 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-700">Business Type</label>
                <input type="text" placeholder="Medical / Real Estate / Agency" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-slate-700">How can I help you grow?</label>
              <textarea rows="4" placeholder="Describe your project goals..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"></textarea>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Vishal Ranmode</span>
            </div>
            <p className="text-slate-400 max-w-xs text-sm">
              Helping businesses move from offline to online with clean code and smart automation.
            </p>
          </div>
          
          <div className="flex gap-6 text-slate-400">
            <a href="javascript:void(0)" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href="javascript:void(0)" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:vishalranmode786@gmail.com" target="_blank" className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vishal Ranmode. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;