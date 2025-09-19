import Aurora from "../components/backgrounds/Aurora";
import ModelViewer from '../components/3Dmodel/ModelViewer';
import ProfileCard  from '../components/card/ProfileCard';
import StarBorder   from '../components/buttons/StarBorder';
import CardSwap, { Card } from '../components/card/CardSwap'
import SpotlightCard from '../components/card/SpotlightCard';
import GooeyNav from '../components/navigations/GooeyNav';
import AuroraShader from  '../components/lightswind/aurora-shader';
import ParticlesBackground from '@/components/lightswind/particles-background';
import { ShinyText } from "@/components/lightswind/shiny-text"
import { InteractiveGradient } from "@/components/lightswind/interactive-gradient-card"
import { Iphone16Pro } from '@/components/lightswind/Iphone16Pro';
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"
import OrbitCard from '../components/lightswind/orbit-card';
import TeamCarousel from  '../components/lightswind/team-carousel';
import SparkleNavbar from  '../components/lightswind/sparkle-navbar';
import { DynamicNavigation } from "@/components/lightswind/dynamic-navigation";
import Lanyard from '../components/card/Lanyard';
import GradientBackground from '../components/lightswind/gradient-background';
import {SlidingLogoMarquee,  type SlidingLogoMarqueeItem } from "@/components/lightswind/sliding-logo-marquee"
import './HomePage.css';
import sinegyLogo from '../assets/sinegy_transparent.png'; 
import { Home, Crown, Phone, Users, Briefcase, Building, Shield, Zap, Globe, BarChart3 } from 'lucide-react';
import "../components/lightswind.css"

import bitcoinModel from '/models/bitcoin.glb?url';

// Team member images
import kelvynImg from '/src/assets/kel.png';
import shenImg from '/src/assets/shen.png';
import jackImg from '/src/assets/jack.png';
import ikmalImg from '/src/assets/ikmal.jpg';
import staff1Img from '/src/assets/staff1.png';

// Logo images
import bitcoinIcon from '/src/assets/bitcoin_icon.png';
import ethIcon from '/src/assets/eth.png';
import solIcon from '/src/assets/sol.png';
import xrpIcon from '/src/assets/xrp.png';
import adaIcon from '/src/assets/ada.png';

// App store images
import appStoreIcon from '/src/assets/appstore.svg';
import playStoreIcon from '/src/assets/playstore.png';

function HomePage() {

  const links = [
    { id: 'home', label: 'Home', href: '#home', icon: <Home /> },
    { id: 'team', label: 'Team', href: '#team', icon: <Users /> },
    { id: 'products', label: 'Products', href: '#products', icon: <Briefcase /> },
    { id: 'organization', label: 'Organization', href: '#organization', icon: <Building /> },
    { id: 'contact', label: 'Contact', href: '#contact', icon: <Phone /> }
  ];

const logos: SlidingLogoMarqueeItem[] = [
    { id: "1", content: <img src={bitcoinIcon} alt="Bitcoin" className="h-[120px] w-[120px]" /> },
    { id: "2", content: <img src={ethIcon} alt="Ethereum" className="h-[120px] w-[120px]" /> },
    { id: "3", content: <img src={solIcon} alt="Solana" className="h-[120px] w-[120px]" /> },
    { id: "4", content: <img src={xrpIcon} alt="XRP" className="h-[120px] w-[120px]" /> },
    { id: "5", content: <img src={adaIcon} alt="Cardano" className="h-[120px] w-[120px]" /> },
    { id: "6", content: <img src={bitcoinIcon} alt="Bitcoin" className="h-[120px] w-[120px]" /> },
    { id: "7", content: <img src={ethIcon} alt="Ethereum" className="h-[120px] w-[120px]" /> },
];

const teamMembers = [
    { id: "1", name: "Kelvyn Chuah", role: "Managing Director", image: kelvynImg, bio: "..." },
    { id: "2", name: "Shen Hoe Yeoh", role: "Compliance Officer", image: shenImg, bio: "..." },
    { id: "3", name: "Jack Chan", role: "DAX Lead", image: jackImg, bio: "..." },
    { id: "4", name: "Ikmal Badrol", role: "Software Engineer", image: ikmalImg, bio: "..." },
    { id: "5", name: "John Doe", role: "Software Engineer", image: staff1Img, bio: "..." }
];

  const orbitCards = [
    {
      icon: <Crown className="w-8 h-8 text-yellow-500 mb-3" />,
      title: "Premium Access",
      description: "Gain priority access to new ",
      buttonText: "Upgrade Now",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500 mb-3" />,
      title: "Enhanced Security",
      description: "Multi-layer security protocols .",
      buttonText: "Learn More",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500 mb-3" />,
      title: "Lightning Fast",
      description: "High-speed trading engine capable .",
      buttonText: "See Performance",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500 mb-3" />,
      title: "Global Reach",
      description: "Access to global markets with .",
      buttonText: "Explore Markets",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700"
    }
  ];

  const gradientCards = [
    {
      title: "Premium Trading",
      description: "Access advanced trading tools and exclusive market insights",
      icon: <Home className="w-6 h-6" />,
      color: "#11E5A3",
      glowColor: "#107667ed"
    },
    {
      title: "Secure Storage",
      description: "Bank-level security for your digital assets with multi-sig protection",
      icon: <Home className="w-6 h-6" />,
      color: "#11E5A3",
      glowColor: "#107667ed"
    },
    {
      title: "Fast Execution",
      description: "Lightning-fast trade execution with minimal latency",
      icon: <Home className="w-6 h-6" />,
      color: "#11E5A3",
      glowColor: "#107667ed"
    },
    {
      title: "Award Winning",
      description: "Recognized as Malaysia's most innovative crypto platform",
      icon: <Home className="w-6 h-6" />,
      color: "#11E5A3",
      glowColor: "#107667ed"
    }
  ];

  const events = [
    {
      year: "Step 1",
      title: "Verify Your Account",
      subtitle: "Referral Program Requirement",
      description: "Complete your KYC—only verified personal accounts can participate.",
    },
    {
      year: "Step 2",
      title: "Share Your Link",
      subtitle: "How to Refer",
      description: "Grab your unique referral URL or code from the Rewards tab and send it to anyone.",
    },
    {
      year: "Step 3",
      title: "Tier 1: Your Direct Referrals",
      subtitle: "Earning Structure",
      description: "You receive 25% of the trading fees generated by anyone who signs up with your link.",
    },
    {
      year: "Step 4",
      title: "Tier 2: Referrals of Your Referrals",
      subtitle: "Earning Structure",
      description: "Earn 10% of the fees from trades made by users brought in by your Tier 1 connections.",
    },
    {
      year: "Step 5",
      title: "Tier 3: Extended Network",
      subtitle: "Earning Structure",
      description: "Collect 5% of trading fees from one more level out—your Tier 2's referrals.",
    },
    {
      year: "Step 6",
      title: "Automatic Payouts",
      subtitle: "Commission Details",
      description: "Commissions are credited in real time to your SINEGY wallet—no thresholds, no waiting.",
    },
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
        <div className="relative z-20 max-w-3xl mx-auto w-full px-4 py-6">
          <DynamicNavigation
            links={links}
            glowIntensity={5}
            backgroundColor="rgba(255,255,255,0.08)"
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
              url={bitcoinModel} // Use the imported variable
              width={360}
              height={360}
            />
            <ShinyText
              baseColor="rgba(255, 255, 255, 1)"
              shineColor="#DCE667"
              speed={5}
              className="text-[90px] font-bold mb-4"
            >
              sinegy
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

        <section className="w-full py-16 md:py-24">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"> {/* Changed to items-stretch */}
              {/* First Column - Interactive Gradient Cards */}
              <div className="grid grid-cols-2 gap-6 h-full"> {/* Added h-full */}
                {gradientCards.map((card, index) => (
                  <div key={index} className="w-full h-full"> {/* Added h-full */}
                    <InteractiveGradient
                      color={card.color}
                      glowColor={card.glowColor}
                      followMouse={true}
                      hoverOnly={false}
                      intensity={80}
                      backgroundColor="rgba(255,255,255,0.08)"
                      width="100%"
                      height="100%"
                      borderRadius="1.5rem"
                      className="h-full" 
                    >
                      <div className="p-6 text-white flex flex-col h-full justify-center"> {/* Added justify-center */}
                        <div className="mb-4 text-[#11E5A3]">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-white/80 text-sm">{card.description}</p>
                      </div>
                    </InteractiveGradient>
                  </div>
                ))}
              </div>
              
              {/* Second Column - Text Content */}
              <div className="text-white pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-center"> {/* Added flex and justify-center */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why <span className="text-[#11E5A3]">SINEGY</span> Stands Out
                </h2>
                <p className="text-lg mb-6 text-white/80">
                  We've built Malaysia's most advanced digital asset exchange with features designed for both beginners and professional traders.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#11E5A3] rounded-full p-2 mr-4 flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Advanced Trading Experience</h3>
                      <p className="text-white/70">Professional-grade trading tools with real-time market data and advanced charting capabilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#11E5A3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Military-Grade Security</h3>
                      <p className="text-white/70">Multi-signature cold wallets, insurance protection, and 24/7 monitoring to keep your assets safe.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#11E5A3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Lightning Fast Execution</h3>
                      <p className="text-white/70">High-performance matching engine capable of processing thousands of transactions per second.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#11E5A3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Global Liquidity</h3>
                      <p className="text-white/70">Access to deep liquidity pools and global markets with competitive pricing.</p>
                    </div>
                  </div>
                </div>
                
                <button className="bg-[#11E5A3] hover:bg-[#11E5A3] text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  <a href="https://sinegy.com" target="_blank">
                    Start Trading Now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full text-white py-16 md:py-24">
          <ParticlesBackground
            colors={['#11E5A3', '#DCE667', '#104DFF']}
            size={4}
            countDesktop={80}
            countTablet={60}
            countMobile={40}
            zIndex={-1}
            height="100vh"
          />;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Column 1: Text Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Experience Our App in Action
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Watch a live demo of our app's seamless interface and powerful features. From intuitive navigation to real-time data, see how we've designed the ultimate mobile experience for you.
                </p>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a 
                    href="https://apps.apple.com/app/sinegy-trade-btc-and-crypto/id6749148230" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={appStoreIcon}
                      alt="Download on App Store" 
                      className="w-40 h-auto cursor-pointer hover:opacity-80 transition"
                    />
                  </a>
                  <a 
                    href="https://play.google.com/store/search?q=sinegy&c=apps" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={playStoreIcon}
                      alt="Download on Play Store" 
                      className="w-40 h-auto cursor-pointer hover:opacity-80 transition"
                    />
                  </a>
                </div>
              </div>

              {/* Column 2: iPhone Mockup */}
              <div className="w-full flex justify-center items-center p-4 md:p-0">
                <Iphone16Pro
                  width={333}
                  height={682}
                  src="/path/to/image.jpg"
                  videoSrc="src/assets/mobile_app_demo.MP4"
                  showIsland={true}
                  islandWidth={110}
                  islandHeight={30}
                  frameColor="black"
                  frameDarkColor="black"
                  bezelColor="neutral-100"
                  screenRadius={35}
                  shadow={true}
                  rounded={true}
                  contentClassName="object-cover overflow-hidden"
                  contentStyle={{ borderRadius: '35px' }}
                  showCamera={true}
                  screenGradient="#ff00ff,#00ffff"
                  hoverAnimation={true}
                />
              </div>
              
            </div>
          </div>
        </section>

        <ScrollTimeline 
          events={events}
          title="Affiliate Tiers Program"
          subtitle="Be the first to enjoy the benefits"
          progressIndicator={true}
          cardAlignment="alternating"
          revealAnimation="fade"
          cardVariant="glass"
        />

        {/* Team Section */}
        <section id="team" className="w-full py-16 md:py-24 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#11E5A3] mb-12">Our Team</h2>
            <div className="flex flex-row flex-wrap justify-center items-start gap-8 md:gap-4">
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