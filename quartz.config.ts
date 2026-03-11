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
      typography: { header: "Space Grotesk", body: "Space Grotesk", code: "JetBrains Mono" },
      colors: {
        lightMode: {
          light: "#f5f5f5",
          lightgray: "#e8e8e8",
          gray: "#c4c4c4",
          darkgray: "#3a3a3a",
          dark: "#111111",
          secondary: "#00873d",
          tertiary: "#006530",
          highlight: "rgba(0, 135, 61, 0.08)",
          textHighlight: "#00873d30",
        },
        darkMode: {
          light: "#080808",
          lightgray: "#111111",
          gray: "#2a2a2a",
          darkgray: "#aaaaaa",
          dark: "#f0f0f0",
          secondary: "#00ff88",
          tertiary: "#00c96a",
          highlight: "rgba(0, 255, 136, 0.06)",
          textHighlight: "#00ff8840",
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
        theme: { light: "github-light", dark: "github-dark" },
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages({ imageStructure: customImage }),
    ],
  },
}

export default config
