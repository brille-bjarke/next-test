import Link from "next/link";

export default function Header({ title }) {
	return (
		<header className="w-full flex flex-row justify-between text-sm lg:flex">
			<h1 className="text-2xl"><Link href="/">{title}</Link></h1>
			<div>
				<nav>
					<ul>
						<li className="inline ml-2">
							<Link href="/projects">Projects</Link>
						</li>
						<li className="inline ml-2">
							<Link href="/about">About</Link>
						</li>
						<li className="inline ml-2">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}