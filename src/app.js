import './sass/test.sass'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import MathJax3 from './components/MathJax3'

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tex: `When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$`
		};
	}

	render() {
		return (
			<div>
				<MathJax3 inputType="MathML">
					When
					<math xmlns="http://www.w3.org/1998/Math/MathML">
						<mi>a</mi>
						<mo>&#x2260;</mo>
						<mn>0</mn>
					</math>, there are two solutions to
					<math xmlns="http://www.w3.org/1998/Math/MathML">
						<mi>a</mi>
						<msup>
							<mi>x</mi>
							<mn>2</mn>
						</msup>
						<mo>+</mo>
						<mi>b</mi>
						<mi>x</mi>
						<mo>+</mo>
						<mi>c</mi>
						<mo>=</mo>
						<mn>0</mn>
					</math>
					and they are
					<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
						<mi>x</mi>
						<mo>=</mo>
						<mrow>
							<mfrac>
								<mrow>
									<mo>&#x2212;</mo>
									<mi>b</mi>
									<mo>&#x00B1;</mo>
									<msqrt>
										<msup>
											<mi>b</mi>
											<mn>2</mn>
										</msup>
										<mo>&#x2212;</mo>
										<mn>4</mn>
										<mi>a</mi>
										<mi>c</mi>
									</msqrt>
								</mrow>
								<mrow>
									<mn>2</mn>
									<mi>a</mi>
								</mrow>
							</mfrac>
						</mrow>
						<mtext>.</mtext>
					</math>
				</MathJax3>
				<h6>TeX</h6>
				<div>
					<button type="button" onClick={() => {
						this.setState({
							tex: `$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$`
						})
					}}>CHANGE TeX
					</button>
				</div>
				<MathJax3>
					{this.state.tex}
				</MathJax3>
			</div>
		);
	}
}

ReactDOM.render(
	<Example></Example>
	, document.getElementById("view"));