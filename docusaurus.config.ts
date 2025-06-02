import { themes as prismThemes } from "prism-react-renderer";

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "ThunLights Oauth Document",
	tagline: "This is the official documentation of Team ThunLights.",
	favicon: "img/favicon.ico",

	url: "https://documents.thunlights.com",
	baseUrl: "/",

	projectName: "thunlights.github.io",
	organizationName: "thunlights",
	trailingSlash: false,

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		path: "i18n",
		locales: ["en", "ja"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: "https://github.com/ThunLights/oauth-document/tree/main",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					editUrl: "https://github.com/ThunLights/oauth-document/tree/main",
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "ThunLights",
			logo: {
				alt: "Logo",
				src: "img/icon.webp",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Docs",
				},
				{ to: "/blog", label: "Blog", position: "left" },
//                {
//                    type: "docsVersionDropdown",
//                    position: "left",
//                },
				{
					href: "https://github.com/thunlights/oauth-document",
					label: "GitHub",
					position: "right",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/docs/intro",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "X",
							href: "https://x.com/thunlights",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "ThunLights",
							href: "https://thunlights.com",
						},
						{
							label: "GitHub",
							href: "https://github.com/thunlights/oauth-document",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} ThunLights Oauth Document, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
