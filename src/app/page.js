import Link from "next/link";
import Header from "../components/header"
import Footer from "../components/footer"
import Projects from "../components/projects"

export default function Home() {
	return (
		<main className="flex flex-col justify-between p-4">
			<Header title="Page title"/>
			
			<div className="py-12">CONTENT</div>

			<Projects/>

			<Footer>
				<p>Footer</p>
			</Footer>
		</main>
	);
}
