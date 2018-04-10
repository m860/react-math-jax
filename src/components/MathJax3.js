import React, {PureComponent} from "react";
import PropTypes from 'prop-types'
import {MathJax} from 'mathjax3'
import {MathML} from 'mathjax3/mathjax3/input/mathml'
import {TeX} from 'mathjax3/mathjax3/input/tex'
import {CHTML} from 'mathjax3/mathjax3/output/chtml'
import {HTMLHandler} from 'mathjax3/mathjax3/handlers/html/HTMLHandler'

export default class MathJax3 extends PureComponent {
	static propTypes = {
		inputType: PropTypes.oneOf(["MathML", "TeX", "AsciiMath"]),
		inputOption: PropTypes.object,
		children: PropTypes.any,
		style: PropTypes.object,
		className: PropTypes.string
	};
	static defaultProps = {
		inputType: "TeX"
	};

	constructor(props) {
		super(props);
		//init handle
		MathJax.handlers.register(new HTMLHandler());
	}

	update() {
		let inputJax = null;
		switch (this.props.inputType) {
			// case "AsciiMath":
			// 	inputJax = new AsciiMath(this.props.inputOption);
			// 	break;
			case "MathML":
				inputJax = new MathML(this.props.inputOption);
				break;
			default:
				inputJax = new TeX(this.props.inputOption);
		}
		const html = MathJax.document(document, {
			InputJax: inputJax,
			OutputJax: new CHTML()
		});
		html.findMath()
			.compile()
			.getMetrics()
			.typeset()
			.updateDocument();
	}

	render() {
		return (
			<div style={this.props.style}
				 className={this.props.className}>
				{this.props.children}
			</div>
		);
	}

	componentDidUpdate() {
		this.update()
	}

	componentDidMount() {
		this.update();
	}
}
