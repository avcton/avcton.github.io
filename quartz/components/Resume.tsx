import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } 
from "./types"
import { pathToRoot } from "../util/path"
import { classNames } from "../util/lang"
import styles from "./styles/resume.scss"

interface Options {
  resumeURL: string,
}

export default ((userOpts?: Options) => {
  const Resume: QuartzComponent = ({ fileData, displayClass}: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    const opts = { ...userOpts }
    let resumeURL = opts.resumeURL;
    if (opts.resumeURL == null || opts.resumeURL == ''){
      resumeURL = baseDir;
    }
    return (
        <a href={resumeURL} class={classNames(displayClass, "resume")}>
          Resume
        </a>
    )
  }

  // Custom CSS
  Resume.css = styles;
  return Resume
}) satisfies QuartzComponentConstructor
