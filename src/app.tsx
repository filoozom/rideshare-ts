import { Router, Link } from '@reach/router'
import { Provider as WagmiProvider } from 'wagmi'
import {
	InfuraProvider,
	InfuraWebSocketProvider,
} from '@ethersproject/providers'
import type { BaseProvider, WebSocketProvider } from '@ethersproject/providers'

// Pages
import { BlockNumberPage } from './pages/block-number'
import { MemePage } from './pages/meme'
import { MnemonicPage } from './pages/mnemonic'

// Wagmi config
const infuraId = '7d41a9e494734b098a15c2da59724cd9'
const provider = ({ chainId }: { chainId?: number }): BaseProvider =>
	new InfuraProvider(chainId, infuraId)
const webSocketProvider = ({
	chainId,
}: {
	chainId?: number
}): WebSocketProvider => new InfuraWebSocketProvider(chainId, infuraId)

export function App() {
	return (
		<>
			<ul>
				<li>
					<Link to="/1">Block number</Link>
				</li>
				<li>
					<Link to="/2">Mnemonic</Link>
				</li>
				<li>
					<Link to="/3">Meme</Link>
				</li>
			</ul>
			<WagmiProvider provider={provider} webSocketProvider={webSocketProvider}>
				<Router>
					<BlockNumberPage path="/1" />
					<MnemonicPage path="/2" />
					<MemePage path="/3" />
				</Router>
			</WagmiProvider>
		</>
	)
}
