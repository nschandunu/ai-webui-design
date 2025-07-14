import React from 'react';
const CtaButton = ({ text }) => (
  <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-4 px-8 rounded-full inline-flex items-center space-x-2 text-lg hover:shadow-xl transition-shadow transform hover:scale-105">
    <span>{text}</span>
    <ChevronRight className="h-6 w-6" />
  </button>
);
import React from 'react';
const Header = () => (
  <header className="flex justify-between items-center py-6">
    <div className="text-xl font-bold tracking-tight">thimirathenuwara.com</div>
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-black transition-colors">Projects</a>
      <a href="#" className="text-gray-600 hover:text-black transition-colors">Services</a>
      <a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a>
    </nav>
  </header>
);
import React from 'react';
const HeroSection = () => (
  <section className="text-center py-16 md:py-24">
    <div className="max-w-4xl mx-auto mb-10">
      <img 
        src="https://placehold.co/800x450/DB2777/FFFFFF?text=World-class+Ghost+Sites&font=sans" 
        alt="Ghost website example" 
        className="rounded-xl shadow-2xl w-full"
      />
    </div>
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight max-w-3xl mx-auto">
      World-class <span className="text-pink-500">Ghost</span> sites for ambitious companies
    </h1>
  </section>
);
import React from 'react';
const PartnerSection = () => (
  <section className="text-center py-16">
    <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">Your perfect Ghost partner.</p>
    <h2 className="text-3xl md:text-4xl font-bold mt-4 max-w-2xl mx-auto">A complete solution to launch your newsletter.</h2>
    <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <img src="https://placehold.co/600x400/F3F4F6/333333?text=Custom+Theme" alt="Custom Ghost Theme" className="rounded-md mb-4 w-full"/>
        <h3 className="text-xl font-bold">Custom Ghost Theme</h3>
        <p className="text-gray-600 mt-2">A unique theme that fits your brand.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <img src="https://placehold.co/600x400/F3F4F6/333333?text=Installation" alt="Ghost Installation" className="rounded-md mb-4 w-full"/>
        <h3 className="text-xl font-bold">Ghost Installation</h3>
        <p className="text-gray-600 mt-2">Fast, secure, and reliable setup.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <img src="https://placehold.co/600x400/F3F4F6/333333?text=Hosting" alt="Managed Hosting" className="rounded-md mb-4 w-full"/>
        <h3 className="text-xl font-bold">Managed Hosting</h3>
        <p className="text-gray-600 mt-2">So you can focus on creating content.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <img src="https://placehold.co/600x400/F3F4F6/333333?text=Support" alt="Ongoing Support" className="rounded-md mb-4 w-full"/>
        <h3 className="text-xl font-bold">Ongoing Support</h3>
        <p className="text-gray-600 mt-2">I'm here when you need help.</p>
      </div>
    </div>
  </section>
);
import React from 'react';
const SwitchSection = () => (
  <section className="py-16">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 text-left">
        <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">Switch to Ghost</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Migrate from any platform, seamlessly.</h2>
        <p className="text-gray-600 mt-4 text-lg">Tired of Mailchimp, Substack, or ConvertKit? I'll migrate your content and subscribers to Ghost, hassle-free.</p>
        <ul className="space-y-3 mt-6">
          <li className="flex items-center text-gray-700"><CheckCircle2 className="h-6 w-6 text-green-500 mr-3" /> Free & paid subscribers</li>
          <li className="flex items-center text-gray-700"><CheckCircle2 className="h-6 w-6 text-green-500 mr-3" /> All your content & images</li>
          <li className="flex items-center text-gray-700"><CheckCircle2 className="h-6 w-6 text-green-500 mr-3" /> SEO & Redirects</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img src="https://placehold.co/600x400/10B981/FFFFFF?text=Migration+Process" alt="Migration process diagram" className="rounded-xl shadow-lg w-full"/>
      </div>
    </div>
  </section>
);
import React from 'react';
const ExpertSection = () => (
  <section className="py-16">
    <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 rounded-2xl p-8 md:p-12">
      <div className="md:w-2/5">
        <img src="https://placehold.co/400x500/0891B2/FFFFFF?text=Thimira" alt="Thimira Thenuwara" className="rounded-xl w-full"/>
      </div>
      <div className="md:w-3/5 text-left">
        <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">Built by an expert</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Hi, I'm Thimira. A Ghost expert and web developer.</h2>
        <p className="text-gray-600 mt-4 text-lg">I've helped creators and companies of all sizes launch their Ghost publications. I can help you with the design, development, and technical aspects of your new site.</p>
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md flex items-center">
          <img src="https://placehold.co/60x60/333333/FFFFFF?text=TT" alt="Thimira avatar" className="w-16 h-16 rounded-full"/>
          <div className="ml-4">
            <p className="font-bold text-lg">Thimira Thenuwara</p>
            <p className="text-gray-500">Official Ghost Expert</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
import React from 'react';
const TestimonialSection = () => (
  <section className="py-16">
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl p-8 md:p-12">
      <img src="https://placehold.co/120x40/000000/FFFFFF?text=Hertz" alt="Hertz logo" className="h-8 mx-auto mb-6"/>
      <blockquote className="text-2xl italic text-center text-gray-700 leading-relaxed">
        “Thimira is an absolute pleasure to work with. He is responsive, proactive, and his work is of the highest quality.”
      </blockquote>
      <div className="text-center mt-8">
        <p className="font-bold text-lg">Senior Product Manager</p>
        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
        </div>
      </div>
    </div>
  </section>
);
import React from 'react';
const ProjectsSection = () => (
  <section className="text-center py-16">
    <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">My Projects</p>
    <h2 className="text-3xl md:text-4xl font-bold mt-4">A small selection of my projects.</h2>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Take a look at some of the Ghost sites I've developed for my clients.</p>
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <img src="https://placehold.co/500x350/EEEEEE/333333?text=Project+One" alt="Project 1" className="rounded-xl shadow-lg w-full"/>
      <img src="https://placehold.co/500x350/EEEEEE/333333?text=Project+Two" alt="Project 2" className="rounded-xl shadow-lg w-full"/>
      <img src="https://placehold.co/500x350/EEEEEE/333333?text=Project+Three" alt="Project 3" className="rounded-xl shadow-lg w-full"/>
    </div>
  </section>
);
import React from 'react';
const WorkflowSection = () => (
  <section className="text-center py-16">
    <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">My Workflow</p>
    <h2 className="text-3xl md:text-4xl font-bold mt-4">My workflow to make your Ghost website.</h2>
    <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-4 gap-8 text-left">
       <div className="text-center">
         <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto font-bold text-2xl">1</div>
         <h3 className="font-bold mt-4">Discovery</h3>
       </div>
       <div className="text-center">
         <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto font-bold text-2xl">2</div>
         <h3 className="font-bold mt-4">Design</h3>
       </div>
       <div className="text-center">
         <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto font-bold text-2xl">3</div>
         <h3 className="font-bold mt-4">Development</h3>
       </div>
       <div className="text-center">
         <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto font-bold text-2xl">4</div>
         <h3 className="font-bold mt-4">Launch</h3>
       </div>
    </div>
  </section>
);
import React from 'react';
const FaqSection = () => {
    const [openFaq, useState] = useState(null);
    const faqs = [
        { q: "How much does a website cost?", a: "The cost depends on the project scope. Get in touch for a custom quote." },
        { q: "How long does it take?", a: "A typical project takes around 4-6 weeks from start to launch." },
        { q: "Do you offer support?", a: "Yes, I offer ongoing support and maintenance packages." },
        { q: "Can you migrate my existing site?", a: "Absolutely. I can migrate your content and subscribers from any platform." },
    ];

    return (
        <section className="py-16 bg-gray-50 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
                <div className="mt-10 text-left space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                            <button onClick={() => useState(openFaq === index ? null : index)} className="w-full flex justify-between items-center text-lg font-semibold">
                                <span>{faq.q}</span>
                                <span>{openFaq === index ? '-' : '+'}</span>
                            </button>
                            {openFaq === index && (
                                <p className="mt-2 text-gray-600">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
import React from 'react';
const InterestSection = () => (
  <section className="text-center py-24">
    <div className="bg-gray-800 text-white rounded-2xl p-12">
      <h2 className="text-3xl md:text-4xl font-bold">Interested in working with me?</h2>
      <p className="text-gray-300 mt-4 max-w-xl mx-auto">I'm currently available for new projects. Let's talk about your ideas.</p>
      <div className="mt-8">
        <CtaButton text="Send me an email" />
      </div>
    </div>
  </section>
);
import React from 'react';
const Footer = () => (
  <footer className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-200 text-gray-500">
    <p>© 2025 Thimira Thenuwara. All rights reserved.</p>
    <div className="flex items-center space-x-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-black transition-colors">Twitter</a>
      <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
    </div>
  </footer>
);
import React from 'react';
export default function HomePage() {
  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <div className="container mx-auto px-6">
        <Header />
        <main>
          <HeroSection />
          <PartnerSection />
          <SwitchSection />
          <ExpertSection />
          <TestimonialSection />
          <div className="text-center py-12">
            <CtaButton text="Get a free consultation" />
          </div>
          <ProjectsSection />
          <WorkflowSection />
          <FaqSection />
          <InterestSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
