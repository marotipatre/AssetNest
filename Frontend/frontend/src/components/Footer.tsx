import { FaDiscord, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Reveal, RevealWrapper } from './Reveal';
import imageBkg from '@/assets/whale_bkg2.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigator = useNavigate();

  return  (
    <RevealWrapper>
    <footer className="bg-cover text-background relative overflow-hidden">
        <img src={imageBkg} alt="fund" className="absolute object-cover w-full"/>
        <div className='py-12'>
        <Reveal>
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
            {/* <img src={Logo} alt="Whale Finance Logo" className="w-[70px] h-[70px]"/> */}
            <h5 className="text-xl font-semibold mb-4 mt-4">About Us</h5>
            <p className="text-background">
            We are the first decentralized platform that allows investors to invest in a manager's portfolio and managers to manage investors' assets.
            </p>
        </div>

        {/* Quick Links */}
        <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="text-background">
            <li className="mb-2" onClick={() => navigator("/")}>Home</li>
            <a href="https://twitter.com/Whale_dApp" className="mb-2" target='_blank'>About</a>
            <a href="https://github.com/Whale-Finance-Blockchain" className="mb-2" target='_blank'>Docs</a>
            <li className="mb-2" onClick={() => navigator("/")}>Contact</li>
            </ul>
        </div>

        {/* Contact Info */}
        <div>
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <ul className="text-background">
            <li className="mb-2">Email: whale_finance@gmail.com</li>
            <li className="mb-2">Address: DCTA, São José dos Campos Brazil</li>
            </ul>
        </div>
        </div>
        </Reveal>

        {/* Social Media Icons */}
        <Reveal delay={0.6}>
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://discord.gg/zCRxDTTM" target='_blank'><FaDiscord className="text-3xl cursor-pointer" /></a>
          <a href="https://twitter.com/Whale_dApp" target='_blank'><FaTwitter className="text-3xl cursor-pointer" /></a>
          <a href="https://t.me/finance_whale" target='_blank'><FaTelegram className="text-3xl cursor-pointer" /></a>
          <a href="https://github.com/whale-finance-solana" target='_blank'><FaGithub className="text-3xl cursor-pointer" /></a>
          <a href="https://www.linkedin.com/company/whale-finance/" target='_blank'><FaLinkedin className="text-3xl cursor-pointer" /></a>
        </div>

        <div className="text-center text-background mt-8">
        © {new Date().getFullYear()} Whale Finance. All rights reserved.
        </div>
        </Reveal>
        </div>
    </footer>
    </RevealWrapper>
  )
}

export default Footer