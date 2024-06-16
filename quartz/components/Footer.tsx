// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import commentsScript from "./scripts/comments.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        {/* Giscus Comment Container - only on leaf pages */}
        {fileData.slug?.endsWith('index')? <></> : (<div id="giscus-container"></div>)}
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <br />
          Copyright © {year} <a href="https://github.com/avcton/">avcton</a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.beforeDOMLoaded = commentsScript
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
