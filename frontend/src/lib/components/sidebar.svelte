<script lang="ts">
	import { ScrollArea } from 'bits-ui';
	import {
		Sidebar,
		SidebarContent,
		SidebarFooter,
		SidebarGroup,
		SidebarGroupContent,
		SidebarHeader,
		SidebarMenu,
		SidebarMenuButton,
		SidebarMenuItem
	} from './ui/sidebar';
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
	import { Separator } from './ui/separator';
	import { Avatar, AvatarFallback } from './ui/avatar';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from './ui/dropdown-menu';
	import { Button } from './ui/button';

	import LogIn from '@lucide/svelte/icons/log-in';
	import LogOut from '@lucide/svelte/icons/log-out';
	import Settings from '@lucide/svelte/icons/settings-2';
</script>

<Sidebar>
	<SidebarHeader>
		<p class="text-xs tracking-wide text-muted-foreground uppercase">Menu</p>
	</SidebarHeader>
	<SidebarContent class="h-full overflow-hidden">
		<ScrollArea.Root class="h-full">
			<SidebarGroup>
				<SidebarGroupContent>
					<Accordion type="single">
						<AccordionItem value="feminino">
							<AccordionTrigger>Feminino</AccordionTrigger>
							<Separator />
							<AccordionContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Camisas</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Shorts</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Tênis</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Blusas</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Meia</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Cropped</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="masculino">
							<AccordionTrigger>Masculino</AccordionTrigger>
							<Separator />
							<AccordionContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Camisas</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Bermudas</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Tênis</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Boné</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Blusas</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Meia</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="unissex">
							<AccordionTrigger>Unissex</AccordionTrigger>
							<Separator />
							<AccordionContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Camisas</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Tênis</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Boné</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Blusas</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>Meia</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</SidebarGroupContent>
			</SidebarGroup>

			<ScrollArea.Scrollbar orientation="vertical" />
		</ScrollArea.Root>
	</SidebarContent>
	<Separator />
	<SidebarFooter>
		<div class="flex items-center justify-between">
			<Avatar>
				<AvatarFallback>A</AvatarFallback>
			</Avatar>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant="ghost">
						<Settings />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent class="px-4 py-2">
					<DropdownMenuGroup>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuItem>
							<LogIn /> Sign In
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LogIn /> Log In
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem class="bg-red-400">
							<LogOut /> Log Out
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	</SidebarFooter>
</Sidebar>
