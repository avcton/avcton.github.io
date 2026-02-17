import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/pageLogo.scss"
import { joinSegments } from "../util/path"
import { classNames } from "../util/lang"

const PageLogo: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const whiteLogoPath = joinSegments(baseDir, "static/assets/logo_white.png")

  return (
    <a href={baseDir} class={classNames(displayClass, "page-logo")}>
      <img src={whiteLogoPath} width={150} />
    </a>
  )
}

PageLogo.css = styles

export default (() => PageLogo) satisfies QuartzComponentConstructor
