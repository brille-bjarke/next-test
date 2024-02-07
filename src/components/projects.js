'use client'

import Link from "next/link"
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

export default function Projects({ children }) {
	const el1 = useRef();
	const el2 = useRef();
	const el3 = useRef();

	useEffect(() => {
		console.log([el1.current, el2.current, el3.current])
		gsap.fromTo([el1.current, el2.current, el3.current], {
			y: '40px',
			opacity: '0',
			
		}, {
			y: '0px',
			opacity: '1',
			stagger: .15
		});
	}, []);

	return (
		<div className="projects py-12">
			<h2 className="text-3xl mb-4">Projects</h2>
			<div className="flex flex-row gap-4 justify-between">
				<div className="opacity-0" ref={el1}>
					<Link href="/project/lorem">
						<Image
							src="/img.webp"
							width={1600}
							height={1000}
							alt="Picture of the author"
						/>
						Lorem
					</Link>
				</div>
				<div className="opacity-0" ref={el2}>
					<Link href="/project/ipsum">
						<Image
							src="/img.webp"
							width={1600}
							height={1000}
							alt="Picture of the author"
						/>
						Ipsum
					</Link>
				</div>
				<div className="opacity-0" ref={el3}>
					<Link href="/project/dolor-sit">
						<Image
							src="/img.webp"
							width={1600}
							height={1000}
							alt="Picture of the author"
						/>
						Dolor sit
					</Link>
				</div>
			</div>
		</div>
	)
}