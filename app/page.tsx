"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Zap,
  FileText,
  CheckCircle2,
  Play,
  ArrowRight,
  Star,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github,
  Lock,
  FileCheck,
  PenTool,
  Send
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    icon: Shield,
    title: "Secure",
    tagline: "Bank-grade encryption",
    description: "256-bit AES encryption with SOC 2 compliance keeps your documents safe.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50"
  },
  {
    icon: Zap,
    title: "Fast",
    tagline: "Sign in seconds",
    description: "Intuitive drag-and-drop interface for lightning-fast signing workflow.",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    bgGradient: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50"
  },
  {
    icon: CheckCircle2,
    title: "Easy",
    tagline: "Legally binding",
    description: "eIDAS, ESIGN & UETA compliant electronic signatures recognized worldwide.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50"
  }
];

const steps = [
  {
    number: "01",
    icon: FileSignatureIcon,
    title: "Upload Document",
    description: "Drag and drop your document or choose from cloud storage."
  },
  {
    number: "02",
    icon: PenTool,
    title: "Add Signatures",
    description: "Place signature fields and customize the signing experience."
  },
  {
    number: "03",
    icon: Send,
    title: "Send & Track",
    description: "Send for signing and receive real-time status updates."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "SJ",
    content: "SignPDF transformed our contract workflow. What used to take days now happens in minutes. Absolutely essential for any modern business.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Legal Director",
    company: "Global Law Partners",
    avatar: "MC",
    content: "The security features and compliance certifications give us peace of mind. Our clients trust the platform for sensitive legal documents.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Swift Solutions",
    avatar: "ER",
    content: "Team collaboration has never been easier. We can now coordinate signatures across departments seamlessly. Highly recommended!",
    rating: 5
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "3 documents per month",
      "Basic signing tools",
      "Email support",
      "Mobile app access"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$12",
    period: "/month",
    description: "For growing businesses with advanced needs.",
    features: [
      "Unlimited documents",
      "Advanced templates",
      "Priority support",
      "Team collaboration",
      "API access",
      "Custom branding"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Everything in Professional",
      "SSO integration",
      "Dedicated account manager",
      "Custom contracts",
      "SLA guarantee",
      "On-premise option"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "Is SignPDF legally binding?",
    answer: "Yes! SignPDF complies with eIDAS (EU), ESIGN Act (US), and UETA, making your electronic signatures legally binding in most countries worldwide."
  },
  {
    question: "What document formats are supported?",
    answer: "We support PDF, Word documents (DOC/DOCX), Excel spreadsheets, and most image formats. Our platform automatically optimizes documents for the best signing experience."
  },
  {
    question: "How secure is my data?",
    answer: "We use 256-bit AES encryption, SOC 2 Type II certified infrastructure, and GDPR-compliant data handling. Your documents are protected at every step."
  },
  {
    question: "Can I use SignPDF on mobile?",
    answer: "Absolutely! SignPDF works seamlessly on iOS and Android devices through our mobile web app. Sign documents on the go with full functionality."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, the Professional plan includes a 14-day free trial with full feature access. No credit card required to start your trial."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise customers."
  }
];

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" }
];

function FileSignatureIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 17c3.333-3.333 6.667-5 10-5 1.667 0 3.667.5 6 1.5" />
      <path d="M20 19.5c0 .5-.5 1-1 1H6" />
      <path d="M16 3.5c2 0 3.5 1 3.5 2.5S18 8 16 8s-3.5-1-3.5-2.5S14 3.5 16 3.5z" />
      <path d="M3 3h5v5H3z" />
      <path d="M8 6h3" />
      <path d="M8 9h3" />
    </svg>
  );
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; navRef?: React.RefObject<HTMLElement | null> }) {
  const menuRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      const firstFocusable = menuRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = "";
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="md:hidden border-t bg-background overflow-hidden"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          tabIndex={-1}
        >
          <nav className="px-4 py-6 space-y-1" aria-label="Mobile menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                onClick={onClose}
              >
                {link.name}
              </a>
            ))}
            <Separator className="my-4" />
            <div className="space-y-3 pt-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={onClose}
              >
                Sign In
              </Button>
              <Button
                className="w-full justify-start"
                onClick={onClose}
              >
                Start Free
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SkipLink({ targetId }: { targetId: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    target?.focus();
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}

function SocialButton({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </a>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function StepConnector({ index, total }: { index: number; total: number }) {
  if (index >= total - 1) return null;

  return (
    <div
      className="hidden md:flex absolute top-10 left-[60%] w-[80%] items-center"
      aria-hidden="true"
    >
      <div className="w-full h-px bg-border" />
      <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-border rotate-45 transform translate-x-1/2" />
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.getElementById("mobile-menu-button")?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <SkipLink targetId="main-content" />

      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md" aria-label="SignPDF Home">
              <div className="w-9 h-9 bg-gradient-to-br from-stone-700 to-stone-800 rounded-lg flex items-center justify-center shadow-sm">
                <FileCheck className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-medium tracking-tight text-foreground">SignPDF</span>
            </a>

            <div className="hidden md:flex items-center gap-1" role="navigation" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" className="font-medium text-foreground">
                Sign In
              </Button>
              <Button className="font-medium shadow-sm bg-stone-800 hover:bg-stone-900 text-white">
                Start Free
              </Button>
            </div>

            <Button
              id="mobile-menu-button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navRef={navRef} />
      </motion.nav>

      <main id="main-content" ref={mainRef} className="pt-16">
        <section className="pt-24 pb-20 px-6" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium bg-orange-50 text-orange-700 border-orange-200">
                    Trusted by 10,000+ businesses worldwide
                  </Badge>
                </motion.div>

                <motion.h1
                  id="hero-heading"
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl/tight font-bold tracking-tight text-foreground mb-6"
                >
                  Sign Documents{" "}
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                    Securely
                  </span>
                  ,{" "}
                  <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Legally
                  </span>
                  , in Seconds
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                >
                  The fastest way to get signatures on any device. Bank-grade encryption
                  with global compliance for legally binding electronic signatures.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-start gap-4 mb-10"
                >
                  <Button size="lg" className="font-medium shadow-lg bg-stone-800 hover:bg-stone-900 text-white">
                    Start Signing Free
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button size="lg" variant="outline" className="font-medium border-stone-300 text-foreground hover:bg-muted/50">
                    <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                    Watch Demo
                  </Button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["JD", "AS", "MK", "RL"].map((initials, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center text-xs font-medium border-2 border-background text-stone-600 dark:text-stone-300"
                          aria-label={`User ${initials}`}
                        >
                          {initials}
                        </div>
                      ))}
                    </div>
                    <span className="font-medium">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={5} />
                  </div>
                  <span className="hidden sm:inline">10,000+ reviews</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 rounded-3xl p-8 shadow-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-700 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-stone-200" />
                        <div className="w-3 h-3 rounded-full bg-stone-300" />
                        <div className="w-3 h-3 rounded-full bg-stone-400" />
                      </div>
                      <div className="flex-1 text-center text-xs text-stone-400 font-medium">signpdf.com/doc</div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-stone-500" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-stone-100 dark:bg-stone-700 rounded w-3/4 mb-2" />
                          <div className="h-2 bg-stone-50 dark:bg-stone-800 rounded w-full" />
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                          <PenTool className="w-5 h-5 text-orange-500" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: 120 }}
                              transition={{ delay: 0.8, duration: 0.5 }}
                              className="h-8 bg-gradient-to-r from-stone-800 to-stone-600 rounded-lg"
                            />
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.3 }}
                              className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" aria-hidden="true" />
                            </motion.div>
                          </div>
                          <div className="h-2 bg-stone-50 dark:bg-stone-800 rounded w-5/6" />
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-700"
                      >
                        <div className="flex -space-x-2">
                          {["SJ", "MC", "ER"].map((avatar, i) => (
                            <motion.div
                              key={avatar}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.6 + i * 0.1 }}
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-600 dark:to-stone-700 flex items-center justify-center text-xs font-medium border-2 border-white dark:border-stone-800 text-stone-600 dark:text-stone-300"
                            >
                              {avatar}
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">3 signers</span>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                          className="ml-auto flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-full"
                        >
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Active</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-4 -right-4 bg-white dark:bg-stone-800 rounded-xl shadow-xl p-4 flex items-center gap-3 border border-stone-100 dark:border-stone-700"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">256-bit Encrypted</p>
                      <p className="text-xs text-muted-foreground">Bank-grade security</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -top-4 -left-4 bg-white dark:bg-stone-800 rounded-xl shadow-xl p-3 flex items-center gap-2 border border-stone-100 dark:border-stone-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground">Document Signed</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-6" aria-labelledby="features-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-orange-300 text-orange-700 bg-orange-50">Features</Badge>
              <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
                Everything you need to sign smarter
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Powerful features designed to streamline your document signing workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className={`h-full rounded-3xl p-8 ${feature.bgGradient} border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </motion.div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {feature.tagline}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <motion.div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="how-it-works" className="py-24 px-6" aria-labelledby="how-it-works-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-stone-300 text-stone-600 bg-stone-50">How It Works</Badge>
              <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-foreground">
                Sign documents in three simple steps
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get your documents signed in minutes, not days
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 flex items-center justify-center shadow-sm">
                      <step.icon className="w-8 h-8 text-stone-600 dark:text-stone-400" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-stone-800 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  <StepConnector index={index} total={steps.length} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-24 px-6 bg-muted/30" aria-labelledby="testimonials-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-stone-300 text-stone-600 bg-stone-50">Testimonials</Badge>
              <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-foreground">
                Loved by teams everywhere
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See what our customers have to say about SignPDF
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <StarRating rating={testimonial.rating} />
                      <p className="text-muted-foreground mt-4 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-700 dark:to-stone-800 text-stone-600 dark:text-stone-300 font-medium">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="pricing" className="py-24 px-6" aria-labelledby="pricing-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-stone-300 text-stone-600 bg-stone-50">Pricing</Badge>
              <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-foreground">
                Simple, transparent pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose the plan that fits your needs. No hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={plan.popular ? "relative" : ""}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-orange-500 text-white hover:bg-orange-600 shadow-sm">Most Popular</Badge>
                    </div>
                  )}
                  <Card className={`h-full relative ${plan.popular ? "border-stone-300 shadow-lg" : ""}`}>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">{plan.name}</CardTitle>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <span className="text-4xl font-medium tracking-tight text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <ul className="space-y-3 mb-6" role="list" aria-label={`${plan.name} plan features`}>
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full font-medium shadow-sm"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="faq" className="py-24 px-6 bg-muted/30" aria-labelledby="faq-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-stone-300 text-stone-600 bg-stone-50">FAQ</Badge>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-foreground">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about SignPDF
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left pr-4 text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>

        <section className="py-24 px-6" aria-labelledby="cta-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-stone-800 to-stone-900 text-white overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
                <div className="relative p-8 sm:p-12 text-center">
                  <h2 id="cta-heading" className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
                    Ready to get started?
                  </h2>
                  <p className="text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join 10,000+ businesses signing smarter, faster, and more securely.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto font-medium shadow-lg bg-white text-stone-900 hover:bg-stone-100">
                      Start Signing Free
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-border/50 bg-muted/20" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-stone-700 to-stone-800 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-xl font-medium tracking-tight text-foreground">SignPDF</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Secure, legally binding digital signatures for everyone.
              </p>
            </div>

            <nav aria-label="Product links">
              <h4 className="font-medium mb-4 text-foreground">Product</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </nav>

            <nav aria-label="Company links">
              <h4 className="font-medium mb-4 text-foreground">Company</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </nav>

            <nav aria-label="Legal links">
              <h4 className="font-medium mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Compliance</a></li>
              </ul>
            </nav>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 SignPDF. All rights reserved.
            </p>
            <div className="flex items-center gap-2" role="list" aria-label="Social media links">
              <SocialButton icon={Twitter} label="Follow us on Twitter" href="#" />
              <SocialButton icon={Linkedin} label="Follow us on LinkedIn" href="#" />
              <SocialButton icon={Github} label="Follow us on GitHub" href="#" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
