import { Router, Link } from "@reach/router";

// Pages
import { BlockNumberPage } from "./pages/block-number";
import { MemePage } from "./pages/meme";
import { MnemonicPage } from "./pages/mnemonic";

export function App() {
  return (
		<>
			<ul>
				<li><Link to="/1">Block number</Link></li>
				<li><Link to="/2">Mnemonic</Link></li>
				<li><Link to="/3">Meme</Link></li>
			</ul>
			<Router>
				<BlockNumberPage path="/1" />
				<MnemonicPage path="/2" />
				<MemePage path="/3" />
			</Router>
		</>
  )
}
