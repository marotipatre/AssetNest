import bkg from '@/assets/yellowbg.png';
import w1 from '@/assets/w_avatar1.png';
import w2 from '@/assets/w_avatar2.png';
import w3 from '@/assets/w_avatar3.png';
import w4 from '@/assets/w_avatar4.png';

export const fundData = [
    {
        id: 1,
        name: 'Fund 1',
        description: 'conservative fund',
        avatar: w1,
        image: bkg,
        manager: '0x1234567890',
        risk: 'Low',
        TVL: '1000',
        performance: '+10%',
    },
    {
        id: 2,
        name: 'Fund 2',
        description: 'high risk fund',
        avatar: w2,
        image: bkg,
        manager: '0x1234567890',
        risk: 'High',
        TVL: '2000',
        performance: '+20%',
    },
    {
        id: 3,
        name: 'Fund 3',
        description: 'random',
        avatar: w3,
        image: bkg,
        manager: '0x1234567890',
        risk: 'Low',
        TVL: '1000',
        performance: '-10%',
    },
    {
        id: 4,
        name: 'Fund 4',
        description: 'SOL ETF',
        avatar: w4,
        image: bkg,
        manager: '0x1234567890',
        risk: 'Medium',
        TVL: '5000',
        performance: '+5%',
    }
]