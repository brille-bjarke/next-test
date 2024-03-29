import Header from "../components/header"
import Footer from "../components/footer"

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex flex-col justify-between p-4">
					<Header title="Page title"/>
					{children}
					<Footer>
						<p>Footer</p>
					</Footer>
				</main>
			</body>
		</html>
	);
}
