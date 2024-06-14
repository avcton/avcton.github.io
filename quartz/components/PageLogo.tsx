import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } 
from "./types"
import styles from "./styles/pageLogo.scss"
import { joinSegments } from "../util/path"
import { classNames } from "../util/lang"

const PageLogo: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const blackLogoPath = joinSegments(baseDir, "_assets/logo_black.png")
  const whiteLogoPath = joinSegments(baseDir, "_assets/logo_white.png")
  
  return (
      <a href={baseDir} class={classNames(displayClass, "page-logo")}>
        <img id="whiteLogo" src={whiteLogoPath} width={150}/>
        <img id="blackLogo" src={blackLogoPath} width={150}/>
      </a>
  )
}

PageLogo.css = styles // Adding my custom style to change logo based on theme

export default (() => PageLogo) satisfies QuartzComponentConstructor
