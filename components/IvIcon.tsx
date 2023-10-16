interface IvIconProps {
	name: string;
	styles?: React.CSSProperties; // Allow passing styles as a prop,
	size?: string;
}

export function IvIcon(props: IvIconProps) {
	switch (props.name) {
		case 'bible':
			return (
				<svg width='57' height='71' viewBox='0 0 57 71' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M2.5 11C2.5 6.30558 6.30558 2.5 11 2.5H51C52.933 2.5 54.5 4.067 54.5 6V64.8115C54.5 66.7445 52.933 68.3115 51 68.3115H11C6.30558 68.3115 2.5 64.506 2.5 59.8115V11Z'
						strokeWidth='5'
						style={props.styles}
					/>
					<path d='M14.25 57.8294H42.75' strokeWidth='5' strokeLinecap='round' style={props.styles} />
					<path d='M21.375 21.7914H35.625' strokeWidth='5' strokeLinecap='round' style={props.styles} />
					<path d='M28.5 15.3425L28.5 35.4058' strokeWidth='5' strokeLinecap='round' style={props.styles} />
				</svg>
			);
		case 'home':
			return (
				<svg width='73' height='75' viewBox='0 0 73 75' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M70 31.613L70 67C70 70.866 66.866 74 63 74L54.5982 74C50.7322 74 47.5982 70.866 47.5982 67L47.5982 62.1348C47.5982 58.2688 44.4642 55.1348 40.5982 55.1348L32.1963 55.1348C28.3303 55.1348 25.1963 58.2688 25.1963 62.1348L25.1963 67C25.1963 70.866 22.0623 74 18.1963 74L9.99999 74C6.134 74 2.99999 70.866 2.99999 67L3 30.8311C3 28.6964 3.97412 26.6783 5.64556 25.3504L31.9 4.49135C34.4679 2.45119 38.108 2.46742 40.6576 4.53039L67.4031 26.1712C69.0457 27.5003 70 29.5001 70 31.613Z'
						strokeWidth='5'
						strokeLinejoin='round'
						style={props.styles}
					/>
				</svg>
			);
		case 'menu':
			return (
				<svg width='15' height='74' viewBox='0 0 15 74' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='7.5' cy='7.5' r='7.5' style={props.styles} />
					<circle cx='7.5' cy='36.5' r='7.5' style={props.styles} />
					<circle cx='7.5' cy='66.5' r='7.5' style={props.styles} />
				</svg>
			);
	}
}
