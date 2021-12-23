import { Router, Link } from '@reach/router'
import { Mainnet, DAppProvider, Config } from '@usedapp/core'

// Config
const config: Config = {
	readOnlyChainId: Mainnet.chainId,
	readOnlyUrls: {
		[Mainnet.chainId]:
			'https://mainnet.infura.io/v3/7d41a9e494734b098a15c2da59724cd9',
	},
}

// Pages
import { BlockNumberPage } from './pages/block-number'
import { MemePage } from './pages/meme'
import { MnemonicPage } from './pages/mnemonic'

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
			<DAppProvider config={config}>
				<Router>
					<BlockNumberPage path="/1" />
					<MnemonicPage path="/2" />
					<MemePage path="/3" />
				</Router>
			</DAppProvider>
		</>
	)
}
