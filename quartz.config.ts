import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { customImage } from "./quartz/util/custom-og"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "avcton",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://cloud.umami.is",
      websiteId: "7006c287-bc68-4ba8-b273-47d8ff091542",
    },
    locale: "en-US",
    baseUrl: "avcton.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: { header: "Inter", body: "Inter", code: "JetBrains Mono" },
      colors: {
        lightMode: {
          light: "#0a0a0c",
          lightgray: "#1a1a1f",
          gray: "#3a3a44",
          darkgray: "#b0b0ba",
          dark: "#ededef",
          secondary: "#8b8bf5",
          tertiary: "#a5a5fa",
          highlight: "rgba(139, 139, 245, 0.08)",
          textHighlight: "rgba(139, 139, 245, 0.2)",
        },
        darkMode: {
          light: "#0a0a0c",
          lightgray: "#1a1a1f",
          gray: "#3a3a44",
          darkgray: "#b0b0ba",
          dark: "#ededef",
          secondary: "#8b8bf5",
          tertiary: "#a5a5fa",
          highlight: "rgba(139, 139, 245, 0.08)",
          textHighlight: "rgba(139, 139, 245, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-dark", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown({ linkHeadings: true }),
      Plugin.TableOfContents({ maxDepth: 5 }),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description({ descriptionLength: 100 }),
      Plugin.HardLineBreaks(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages({ imageStructure: customImage }),
    ],
  },
}

export default config
