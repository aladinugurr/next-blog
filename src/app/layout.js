import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// clerk provider
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Next Blog",
	description: "Write your blog",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<Navbar />
					{children}
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}
