import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "~/components/ui/dialog";

import { Field, FieldGroup } from "~/components/ui/field";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Home" },
		{ name: "description", content: "Pagina principal do site" },
	];
}

export default function Home() {
	return (
		<main>
			<h1 className="m-5 text-4xl">Algum texto ai</h1>
		</main>
	);
}
