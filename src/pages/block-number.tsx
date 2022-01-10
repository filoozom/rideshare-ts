import type { RouteComponentProps } from '@reach/router'
import { useBlockNumber } from 'wagmi'

type BlockNumberPageProps = RouteComponentProps

export const BlockNumberPage = (_: BlockNumberPageProps) => {
	const [{ data: blockNumber, error, loading }] = useBlockNumber({
		watch: true,
	})

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return <div>Block number: {blockNumber}</div>
}
