import { Button } from "@repo/ui/button";

export default function Home() {
	return (
		<div className="p-4 bg-yellow-500">
			<Button appName="web">Click1</Button>
			<Button appName="web">Click2</Button>
			<Button appName="web">Click3</Button>
		</div>
	);
}
