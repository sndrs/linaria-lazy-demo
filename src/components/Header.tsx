import { css } from '@linaria/core'
import React, { Suspense } from 'react'
import Hello from './Hello'

const PinkWorld = React.lazy(() => import('./PinkWorld'))

const header = css`
	color: #14ffc4;
`
export default ({ children }) => (
	<h1 className={header}>
		<Hello />{' '}
		<Suspense fallback={<div>Loading...</div>}>
			<PinkWorld />
		</Suspense>
	</h1>
)
