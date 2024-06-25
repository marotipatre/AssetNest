import { Player } from '@lottiefiles/react-lottie-player';
import Animation from '../assets/congrats_animation.json';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Button } from '../components/ui/button';
import { Reveal, RevealWrapper } from '@/components/Reveal';
import FarcasterLogo from "@/assets/farcaster_logo.png";

export default function Success() {

    const history = useNavigate();
      
    return (
        <div className='w-[100vw] my-16'>
            <RevealWrapper>
            <div className="p-12">
                <Card>
                    <Reveal delay={0.4}>
                    <CardHeader>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <CardTitle>Thank you!</CardTitle>
                            <CardDescription>Keep using Whale Finance</CardDescription>
                        </div>
                    </CardHeader>
                    </Reveal>
                    <Reveal delay={0.6}>
                    <CardContent>
                        <div className='flex flex-col justify-center items-center space-y-16'>
                            <div className='w-[50%] h-auto md:w-[20%] lg:w-[15%]'>
                                <Player
                                    src={Animation}
                                    className="player"
                                    loop
                                    autoplay
                                />
                            </div>
                            <div className='flex flex-row space-x-4'>
                                <Button onClick={() => history('/')}>Back Home</Button>
                                <Button onClick={() => history('/funds')}>Explore Funds</Button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center w-full items-center mt-6'>
                            <a href={`https://warpcast.com/~/compose?text=Deposit%20with%20Whale%20Finance!%20Follow%20us%20@Whale_dApp&embeds[]=https://whale-frame.vercel.app//api/${1}`} target="_blank" className='w-56 flex flex-row justify-center items-center space-x-2 border-[2px] border-secondary py-2 h-10 hover:cursor-pointer'>
                                <div>Share on Farcaster</div>
                                <img src={FarcasterLogo} alt="" className="shadow-md w-5"/>
                            </a>
                        </div>
                    </CardContent>
                    </Reveal>
                </Card>
            </div>
            </RevealWrapper>
        </div>
    )
}