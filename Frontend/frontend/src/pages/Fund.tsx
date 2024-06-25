import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Table,
    // TableBody,
    // TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Label } from "@radix-ui/react-label";
import HeroSection from "@/components/Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Coins, TrendingUp, Wallet } from "lucide-react"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { fundData } from "@/utils/mock"
import { Reveal, RevealWrapper } from "@/components/Reveal"

export default function Fund() {

    const params = useParams();
    const fundId = params.id || '';
    const [fund, setFund] = useState<any>({});

    const getFundData = async () => {
        try {
            setLoading(true);
            setFund(fundData[Number(fundId) - 1]);
            setLoading(false);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFundData();
    })
    
    const [loading, setLoading] = useState<boolean>(false);

    const [balance, setBalance] = useState(0);
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
        if (!connection || !publicKey) {
        return;
        }

        connection.onAccountChange(
        publicKey,
        (updatedAccountInfo) => {
            setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
        },
        "confirmed",
        );

        connection.getAccountInfo(publicKey).then((info) => {
        if (info) {
            setBalance(info.lamports);
        }
        });
    }, [connection, publicKey]);

    const [invest, setInvest] = useState(0);
    const [investMsg, setInvestMsg] = useState("Invest");

    async function makeInvestment(){
        try{
            console.log("Investing", invest);

            toast({
                title: "You invested",
                description: "using Whale Finance",
              })

        }catch(err){
            console.log(err);
            console.log("ERRRR")
        } finally{
            setLoading(false);
            setInvest(0);
            setInvestMsg("Approve Deposit")
        }
    }
    
    useEffect(() => {
        makeInvestment();
    },[]);

    return (
        <div className='w-[100vw]'>
            <div className="h-16 bg-background"></div>
            <HeroSection name={fund.name} description={fund.description} avatar={fund.avatar} image={fund.image} color="primary" manager={fund.manager} loading={loading}/>
            <RevealWrapper>
            <div className="px-12 pb-12">
                <Tabs defaultValue="invest" className="w-full">
                    <Reveal delay={0.6}>
                    <TabsList className="mb-8 grid-cols-2">
                        <TabsTrigger className="px-6" value="invest">Overview</TabsTrigger>
                        <TabsTrigger className="px-6" value="fund_information">Portfolio Info</TabsTrigger>
                    </TabsList>
                    </Reveal>
                    <TabsContent className="space-y-4" value="invest">
                        <Reveal delay={0.8}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Invest</CardTitle>
                                <CardDescription>You can choose the amount of SOL to invest in this fund</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex space-x-4">
                                    <div className="flex-1 space-y-1">
                                        <Label className="text-sm ml-2">Amount of SOL</Label>
                                        <div className="flex flex-row space-x-1">
                                            <Input 
                                                id="invest" 
                                                type="number" 
                                                placeholder="ex. 129"
                                                value={invest}
                                                onChange={(e) => setInvest(parseFloat(e.target.value))} 
                                            />
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Button
                                                        onClick={() => setInvest(balance)}
                                                        className="underline text-primary px-2" variant="outline">Max</Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                    <p>Invest all your money in the wallet</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col items-start space-y-1 bg-primarylighter rounded px-4 py-2">
                                        <Label className="text-sm">SOL Balance in your wallet</Label>
                                        <div className="flex flex-col items-center justify-center">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger className="text-2xl font-bold">
                                                    <div>
                                                    {publicKey ? `${(balance / LAMPORTS_PER_SOL).toFixed(3)} SOL` : "Disconnected"}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                <p>Check in your wallet</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </div>
                                    </div>
                                </div>
                                {loading ?
                                <Button disabled>
                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </Button>
                                :
                                <Button onClick={makeInvestment}>{investMsg}</Button>
                                }
                            </CardContent>
                        </Card>
                        </Reveal>
                        <Reveal delay={1}>
                        <div className="grid grid-cols-1 gap-4 justify-center my-6 md:grid-cols-5 lg:grid-cols-5">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Price</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <Wallet />
                                    <p>quota</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Assets Under Management (TVL)</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <Coins />
                                    <p>tokensHolding</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Fund Performance (APY)</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <TrendingUp />
                                    <p>+25%</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[1px] border-primary">
                                <CardHeader>
                                    <CardTitle>My Value Deposited</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <Coins />
                                    <p>quotaBalance</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[1px] border-primary">
                                <CardHeader>
                                    <CardTitle>My Total Return</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <TrendingUp />
                                    <p>0%</p>
                                </CardContent>
                            </Card>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Performance</CardTitle>
                                <CardDescription>Price</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>CHART</p>
                            </CardContent>
                        </Card>
                        </Reveal>
                    </TabsContent>
                    <Reveal delay={0.8}>
                    <TabsContent className="space-y-4" value="fund_information">
                        <Card>
                            <CardHeader>
                                <CardTitle>Tokens Allocation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="">Asset</TableHead>
                                        
                                        <TableHead className="text-right">Price</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    {/* <TableBody>
                                        {Object.keys(tokensHolding).map((token: string) => (
                                        <TableRow key={token}>
                                            <TableCell className="">{token}</TableCell>
                                            <TableCell className="text-right">{allowedtokensPrices[token]}</TableCell>
                                            <TableCell className="text-right">{tokensHolding[token]}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                        <TableCell colSpan={4} className="text-right">${getAum(tokensHolding, allowedtokensPrices)}</TableCell>
                                        </TableRow>
                                    </TableFooter> */}
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    </Reveal>
                </Tabs>
            </div>
            </RevealWrapper>
        </div>
    );
};