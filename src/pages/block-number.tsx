import type { RouteComponentProps } from '@reach/router'
import { useBlockNumber } from '@usedapp/core'

type BlockNumberPageProps = RouteComponentProps

export const BlockNumberPage = (_: BlockNumberPageProps) => {
	const blockNumber = useBlockNumber()

	return <div>Block number: {blockNumber}</div>
}
