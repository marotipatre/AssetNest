import bkg from '@/assets/whale_bkg2.png';
import whale1 from '@/assets/whale_avatar1.png';
import whale2 from '@/assets/whale_avatar2.png';
import whale3 from '@/assets/whale_avatar3.png';
import whale4 from '@/assets/whale_avatar4.png';

export const fundData = [
    {
        id: 1,
        name: 'Fund 1',
        description: 'conservative fund',
        avatar: whale1,
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
        avatar: whale2,
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
        avatar: whale3,
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
        avatar: whale4,
        image: bkg,
        manager: '0x1234567890',
        risk: 'Medium',
        TVL: '5000',
        performance: '+5%',
    }
]