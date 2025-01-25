init:
	pnpm install
eleventy-serve:
	pnpm dev
tailwind-dev:
	pnpm tailwind:dev
tailwind-build: 
	pnpm tailwind:build
dev:
	(trap 'kill 0' SIGINT; make eleventy-serve & make tailwind-dev)
build:
	pnpm build
