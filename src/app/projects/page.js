import Link from "next/link";
import Header from "../../components/header"
import Footer from "../../components/footer"
import Projects from "../../components/projects"

export default function Projects() {
	return (
		<main className="flex flex-col justify-between p-4">
			<Header title="Page title"/>
			
			<div className="py-12">
				<h2 className="text-3xl mb-4">Projects page</h2>
				<p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
			</div>

			<Projects/>

			<Footer>
				<p>Footer</p>
			</Footer>
		</main>
	);
}
