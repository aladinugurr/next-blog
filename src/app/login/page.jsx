import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";

export default function page() {
	return (
		<div className="h-[80vh] flex items-center justify-center">
			<SignIn />
		</div>
	);
}
