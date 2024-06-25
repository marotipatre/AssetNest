import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import NavButton from "./NavButton";
import { ModeToggle } from "./mode-toggle";
import LogoApp from '../assets/whale_logo_green.png';
import { useEffect, useState } from 'react';
import {
    useAnchorWallet,
    useConnection,
    useWallet
} from "@solana/wallet-adapter-react";
import {
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import '@solana/wallet-adapter-react-ui/styles.css';
import './bottomGlow.css';
import { useTheme } from "@/components/theme-provider";
import { menuOptions } from "@/utils/menu";

export function Header() {

    const { theme } = useTheme();

    const navigator = useNavigate();

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

    return (
        <div className={` duration-600 sticky w-full top-0 z-20 shadow-2xl backdrop-blur-md bg-background/15`}>
            <div className="w-full bg-transparent flex flex-row justify-center items-center px-12 h-14">
                <img className="cursor-pointer h-[100%] py-2" src={LogoApp} alt="Whale Finance" onClick={() => navigator('/')}/>
                <p className="cursor-pointer text-primary mx-2" onClick={() => navigator('/')}>Whale Finance</p>
                <div className="flex-1 flex flex-row h-[100%] justify-center items-center">
                    <Button variant="ghost" className="h-[100%] w-24 relative glow-bottom-border hover:bg-transparent group" onClick={() => navigator('/')}><p className="group-hover:text-primary group-hover:text-shadow-primary-glow">Home</p></Button>
                    {menuOptions.map((option, index) => (
                        <NavButton key={index} to={option.to}>{option.name}</NavButton>
                    ))}
                </div>
                <div className="h-[100%] flex flex-row justify-center items-center">
                    <div className="flex flex-col items-center mx-6 h-[100%]">
                        <ModeToggle/>
                    </div> 
                    <div className="mx-4 w-28">
                        <p className="font-thin text-xs">Balance: </p>
                        <p className="text-primary text-shadow-primary-glow font-bold">{publicKey ? `${(balance / LAMPORTS_PER_SOL).toFixed(3)} SOL` : "Disconnected"}</p>
                    </div>
                    <div className={`flex flex-col items-center ${theme == "light" ? 'bg-gray-400' : ''} `}>
                        <WalletMultiButton />
                    </div>
                </div>           
            </div>
        </div>
    )
}