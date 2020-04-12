import React, { FC, ReactElement } from 'react';
import Link from 'next/link';

type NinkProps = {
	title: string;
	href: string;
	className?: string;
	as?: string;
	disabled?: boolean;
	plain?: boolean;
	newTab?: boolean;
};

const Anchor: FC<NinkProps> = ({
	disabled = false,
	className,
	children,
	title,
	href,
	as = '',
	plain = false,
	newTab = false,
}): ReactElement => {
	if (disabled) {
		return (
			<a title={title} className={className}>
				{children ? children : title}
			</a>
		);
	}

	if (plain) {
		return (
			<a title={title} className={className} href={href}>
				{children ? children : title}
			</a>
		);
	}

	if (as === '') {
		as = href;
	}

	const nextLinkTarget = href;
	const nextLinkAs = as;

	let rel = '';
	let target = '';
	if (newTab) {
		rel = 'noopener noreferrer';
		target = '_blank';
	}

	return (
		<Link href={nextLinkTarget} as={nextLinkAs}>
			<a title={title} className={className} rel={rel} target={target}>
				{children ? children : title}
			</a>
		</Link>
	);
};

export default Anchor;
