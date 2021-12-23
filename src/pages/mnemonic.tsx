import { useMemo } from 'preact/hooks'
import { Wallet } from 'ethers'
import type { RouteComponentProps } from '@reach/router'

type MnemonicPageProps = RouteComponentProps

export const MnemonicPage = (_: MnemonicPageProps) => {
	const { mnemonic } = useMemo(() => Wallet.createRandom(), [])
	return <div>Mnemonic: {mnemonic.phrase}</div>
}
