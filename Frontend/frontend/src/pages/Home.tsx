import { Reveal, RevealWrapper } from '@/components/Reveal';
import './glowClass.css';
import './typedEffect.css';
import './movingLine.css'
import { fundData } from '@/utils/mock';
import { CardFund } from '@/components/CardFund';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faq } from '@/utils/faq';
import imageBkg from '@/assets/bkg_hero_whale.png';
import { useNavigate } from 'react-router-dom';
import { FaDiscord, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

export default function Home() {

    const fund = fundData[0];

    const navigator = useNavigate();

    return (
        <div className='w-[100vw] relative'>


            {/* Hero Part */}


            <RevealWrapper>
            <div className="w-full h-[600px] bg-cover bg-center relative">
                <img src={imageBkg} alt="fund" className="absolute object-cover w-full top-0 left-0 w-full"/>
                <div className='absolute w-full h-[100%] flex flex-row'>
                    <div className='basis-1/2 h-[100%]'>
                        
                    </div>
                    <div className='basis-1/2 h-[100%] flex flex-col justify-center items-start space-y-12'>
                        <div className=''>
                            <p className='typed_out text-background font-bold text-7xl'>Whale Finance</p>
                        </div>
                        <Reveal delay={0.5}>
                        <p className='text-background font-thin text-2xl'>Connecting Exceptional Traders to On-chain Investors</p>
                        </Reveal>
                        <Reveal delay={0.7}>
                        <div className="flex justify-center -mt-5 space-x-4">
                            <a href="https://twitter.com/Whale_dApp" target='_blank'><FaTwitter className="text-3xl text-background cursor-pointer" /></a>
                            <a href="https://t.me/finance_whale" target='_blank'><FaTelegram className="text-3xl text-background cursor-pointer" /></a>
                            <a href="https://discord.gg/zCRxDTTM" target='_blank'><FaDiscord className="text-3xl text-background cursor-pointer" /></a>
                            <a href="https://github.com/whale-finance-solana" target='_blank'><FaGithub className="text-3xl text-background cursor-pointer" /></a>
                            <a href="https://www.linkedin.com/company/whale-finance/" target='_blank'><FaLinkedin className="text-3xl text-background cursor-pointer" /></a>
                        </div>
                        </Reveal>
                        <Reveal delay={0.9}>
                        <div className="fancy bg-[#4FC0B0] border-background w-96 h-12 rounded-full">
                            <button className="bg-transparent text-background flex flex-col items-center justify-center text-lg absolute inset-0 z-10 p-6" onClick={() => navigator("/funds")}>
                                Explore Funds
                            </button>
                        </div>
                        </Reveal>
                        <Reveal delay={1.1}>
                        <div className="fancy bg-[#4FC0B0] border-background w-96 h-12 rounded-full -mt-6">
                            <button className="bg-transparent text-background flex flex-col items-center justify-center text-lg absolute inset-0 z-10 p-6" onClick={() => navigator("/create-fund")}>
                                Create Vault as Trader
                            </button>
                        </div>
                        </Reveal>
                    </div>
                </div>
            </div>
            </RevealWrapper>
            <div className='px-12 py-8 flex flex-row'>
                <p className='w-36 px-4'>Backed by:</p>
                <div className="moving-line-container">
                    <div className="moving-line">
                        <p className='w-48'>Superteam Brazil</p>
                    </div>
                </div>
            </div>


            {/* Example Part */}


            <div className='p-16 bg-secondary w-full flex flex-col items-center'>
                <div className='w-[60%]'>
                <RevealWrapper>
                <div className='grid grid-cols-2'>
                    <Reveal delay={0.4}>
                    <div className='w-[360px]'>
                        <CardFund 
                            id={fund.id}
                            name={fund.name}
                            description={fund.description}
                            avatar={fund.avatar}
                            image={fund.image}
                            manager={fund.manager}
                            risk={fund.risk}
                            TVL={fund.TVL}
                            performance={fund.performance}
                            loading={false}
                        />
                    </div>
                    </Reveal>
                    <Reveal delay={0.6}>
                    <div className='flex-1 flex flex-col justify-start items-center justify-center'>
                        <p className='text-4xl font-bold text-primary'>Invest in Vaults</p>
                        <p className='text-lg px-4 mt-12'>
                            With Whale Finance, you can invest in a variety of funds managed by the best traders in the world.
                        </p>
                        <div className='flex flex-row space-x-8 mt-12'>
                            <div className="fancy bg-secondary shadow-xl w-48 h-12 rounded-full">
                                <button className="bg-transparent text-primary flex flex-col items-center justify-center text-lg absolute inset-0 z-10 p-6" onClick={() => navigator("/funds")}> 
                                    Explore Funds
                                </button>
                            </div>
                            <div className="fancy bg-secondary shadow-xl w-48 h-12 rounded-full">
                                <button className="bg-transparent text-primary flex flex-col items-center justify-center text-lg absolute inset-0 z-10 p-6" onClick={() => navigator("/create-fund")}>
                                    Create my Fund
                                </button>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                </div>
                </RevealWrapper>
                </div>
            </div>


            {/* FAQ Part */}

            <RevealWrapper>
            <div className='w-full flex flex-col items-center py-24'>
                <Accordion className='w-[60%]' type="single" collapsible>
                    {faq.map((item, index) => (
                        <Reveal>
                        <AccordionItem value={index.toString()}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                        </Reveal>
                    ))
                    }
                </Accordion>
            </div>
            </RevealWrapper>
        </div>
    );
};