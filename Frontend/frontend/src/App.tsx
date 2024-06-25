import { useMemo } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import Test from './pages/Test';
import Explorer from './pages/Explorer';
import Fund from './pages/Fund';
import CreateFund from './pages/CreateFund';
import Success from './pages/Success';
import Claim from './pages/Claim';
import DepositorProfile from './pages/DepositorProfile';
import { AuthKitProvider } from '@farcaster/auth-kit';

function App() {

  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  const config = {
    rpcUrl: 'https://mainnet.optimism.io',
    domain: 'solana-whale.vercel.app',
    siweUri: 'https://example.com/login',
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <AuthKitProvider config={config}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={
                    <Layout
                    />
                  }>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/funds" element={<Explorer />} />
                    <Route path="/funds/:id" element={<Fund />} />
                    <Route path="/create-fund" element={<CreateFund />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/claim" element={<Claim />} />
                    <Route path="/depositor/:address" element={<DepositorProfile />} />
                    <Route path="*" element={<div>404</div>} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </AuthKitProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  )
}

export default App
