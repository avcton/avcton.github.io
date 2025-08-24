import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "avcton/avcton.github.io",
        repoId: "R_kgDOME1DnA",
        category: "Site Comments",
        categoryId: "DIC_kwDOME1DnM4CgHjp",
        mapping: "pathname",
        themeUrl: "themes",
        inputPosition: "top",
        reactionsEnabled: true,
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      Linkedin: "https://www.linkedin.com/in/avcton/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageLogo(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer({ folderClickBehavior: "link" }),
    Component.DesktopOnly(Component.RecentNotes({ title: "Recent Notes", limit: 2 })),
  ],
  right: [
    Component.Graph({ globalGraph: { enableRadial: true }, localGraph: { enableRadial: true } }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageLogo(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ folderClickBehavior: "link" }),
    Component.DesktopOnly(Component.RecentNotes({ title: "Recent Notes", limit: 2 })),
  ],
  right: [],
}
