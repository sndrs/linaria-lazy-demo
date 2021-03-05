import { render } from 'react-dom'
import Header from './components/Header'

document.body.innerHTML = `<div id="root"></div>`
render(
	<div>
		<Header>Hello, world!</Header>
		<a href="report.html">bundle stats</a>
	</div>,
	document.getElementById('root'),
)
