import Aurora from "../components/backgrounds/Aurora";
import ModelViewer from '../components/3Dmodel/ModelViewer';
import ProfileCard  from '../components/card/ProfileCard';
import GooeyNav from '../components/navigations/GooeyNav';
import AuroraShader from  '../components/lightswind/aurora-shader';
import { ShinyText  } from  '../components/lightswind/shiny-text';
import TeamCarousel from  '../components/lightswind/team-carousel';
import SparkleNavbar from  '../components/lightswind/sparkle-navbar';
import DynamicNavigation  from  '../components/lightswind/dynamic-navigation';
import ScrollStack   from  '../components/lightswind/scroll-stack';
import Lanyard from '../components/card/Lanyard';
import GradientBackground from '../components/lightswind/gradient-background';
import {SlidingLogoMarquee,  type SlidingLogoMarqueeItem } from '../components/lightswind/sliding-logo-marquee';
import './HomePage.css';
import sinegyLogo from '../assets/sinegy_transparent.png'; 
import { Home, ShoppingCart, Info, Phone, Users, Briefcase, Building } from 'lucide-react';

function HomePage() {

  const links = [
    { id: 'home', label: 'Home', href: '#home', icon: <Home /> },
    { id: 'team', label: 'Team', href: '#team', icon: <Users /> },
    { id: 'products', label: 'Products', href: '#products', icon: <Briefcase /> },
    { id: 'organization', label: 'Organization', href: '#organization', icon: <Building /> },
    { id: 'contact', label: 'Contact', href: '#contact', icon: <Phone /> }
  ];

  const logos: SlidingLogoMarqueeItem[] = [
    {
      id: "1",
      content: <img src="/src/assets/bitcoin_icon.png" alt="Logo" className="h-[120px] w-[120px]" />
    },
    {
      id: "2",
      content: <img src="/src/assets/eth.png" alt="Logo" className="h-[120px] w-[120px]" />
    },
    {
      id: "3",
      content: <img src="/src/assets/sol.png" alt="Logo" className="h-[120px] w-[120px]" />
    },
    {
      id: "4",
      content: <img src="/src/assets/xrp.png" alt="Logo" className="h-[120px] w-[120px]" />
    },
    {
      id: "5",
      content: <img src="/src/assets/ada.png" alt="Logo" className="h-[120px] w-[120px]" />
    },
     {
      id: "6",
      content: <img src="/src/assets/bitcoin_icon.png" alt="Logo" className="h-[120px] w-[120px]" />
    },
    {
      id: "7",
      content: <img src="/src/assets/eth.png" alt="Logo" className="h-[120px] w-[120px]" />
    },
  ];

  const teamMembers = [
    {
      id: "1",
      name: "Kelvyn Chuah",
      role: "Managing Director",
      image: "/src/assets/kel.png",
      bio: "Visionary leader with 10+ years of experience."
    },
    {
      id: "2",
      name: "Shen Hoe Yeoh",
      role: "Compliance Officer",
      image: "/src/assets/shen.png",
      bio: "Visionary leader with 10+ years of experience."
    },
    {
      id: "3",
      name: "Jack Chan",
      role: "DAX Lead",
      image: "/src/assets/jack.png",
      bio: "Visionary leader with 10+ years of experience."
    },
    {
      id: "4",
      name: "Ikmal Badrol",
      role: "Software Engineer",
      image: "/src/assets/ikmal.jpg",
      bio: "Visionary leader with 10+ years of experience."
    },
    {
      id: "5",
      name: "John Doe",
      role: "Software Engineer",
      image: "/src/assets/staff1.png",
      bio: "Visionary leader with 10+ years of experience."
    }
  ];

  return (
    <div className="homepage">
      <AuroraShader
        colorStops={['#11E5A3', '#1D262D', '#11E5A3']}
        amplitude={1.0}
        blend={0.5}
        speed={1.0}
      />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="relative left-1/2 transform -translate-x-1/2 z-20 w-3/5">
          <DynamicNavigation 
            links={links}
            glowIntensity={5}
            backgroundColor = "rgba(255,255,255,0.08)"
            className="border-[rgba(255,255,255,0.08)]"
            onLinkClick={(id) => {
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                window.location.hash = id;
              }
            }}
          />
        </div>

        {/* Home Section */}
        <header id="home" className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <ModelViewer
              url="/models/bitcoin.glb"
              width={360}
              height={360} 
            />
            <ShinyText
              baseColor="rgba(255, 255, 255, 1)"
              shineColor="#DCE667"
              speed={5}
            >
              <h1 className="text-[90px] font-bold text-white mb-4">sinegy</h1>
            </ShinyText>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl text-center px-4">
            SINEGY is a Malaysian homegrown, fully regulated digital asset exchange (DAX), 
            committed to delivering secure, transparent and accessible cryptocurrency trading. 
            With oversight by the Securities Commission of Malaysia, we serve both retail and 
            institutional clients with robust infrastructure, intuitive tools, and support for 
            fiat-on-ramps in MYR. Built for security, simplicity, and trust, SINEGY empowers 
            users to trade major digital assets with confidence.</p>

            <h3 className="text-center text-[#11E5A3] mt-12">Our Coins: </h3>
            <div className="w-full overflow-x-hidden mt-6">
              <SlidingLogoMarquee
                items={logos}
                speed={40}
                height="150px"
                enableBlur={false}
                blurIntensity={2}
                pauseOnHover={true}
                showGridBackground={true}
                onItemClick={(item) => console.log("Clicked:", item.id)}
              />
            </div>
          </div>
        </header>

        {/* Team Section */}
        <section id="team" className="w-full py-16 md:py-24 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#11E5A3] mb-12">Our Team</h2>
            <div className="flex flex-row flex-wrap justify-center items-start gap-8 md:gap-12">
              {teamMembers.map((member) => (
                <ProfileCard
                  key={member.id}
                  name=""  
                  title=""
                  handle={member.name}
                  status={member.role}
                  contactText="Contact"
                  avatarUrl={member.image}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log(`Contact clicked for ${member.name}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-16 md:py-24 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
                Products Section
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Trading Platform</h3>
                  <p className="text-white/80">Advanced trading platform with real-time charts and analytics</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Wallet Services</h3>
                  <p className="text-white/80">Secure digital wallet for storing your cryptocurrencies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">API Access</h3>
                  <p className="text-white/80">Developer-friendly API for building custom trading solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Section */}
        <section id="organization" className="w-full py-16 md:py-24 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
                Organization Section
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    About Our Organization
                  </h3>
                  <p className="text-white/80 mb-6">
                    SINEGY is Malaysia's premier regulated digital asset exchange, providing
                    secure and transparent cryptocurrency trading services to both retail and
                    institutional investors. Licensed by the Securities Commission of Malaysia,
                    we prioritize security, compliance, and user experience.
                  </p>
                  <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <p className="text-white/80">
                    Organization image, chart, or additional content goes here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 min-h-screen flex items-center">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
                Contact Us
              </h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#11E5A3]" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#11E5A3]" 
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#11E5A3]" 
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#11E5A3]" 
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#11E5A3] hover:bg-[#0fc98c] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full py-12 md:py-16">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center border-t border-white/20 pt-8">
              <p className="text-white/60">
                © 2024 SINEGY. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer> 
      </div>
    </div>
  );
}

export default HomePage;