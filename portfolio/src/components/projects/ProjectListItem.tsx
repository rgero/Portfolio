import Image from "next/image"
import Link from "next/link"
import { Project } from "@/app/interfaces/Project"
import { getLanguageImage } from "@/utils/LanguageParser"

const ProjectListItem = ({project}: {project: Project}) => {
  return (
    <li
      key={project.id}
      className="border p-3 rounded-lg"
    >
      <Link href={`/projects/${project.id.toString()}`}>
        <div className="flex gap-4">
          <div className="flex-1 basis-[15%] relative h-24">
            <Image
              src={getLanguageImage(project.tags ? project.tags[0] : "undefined")}
              alt=""
              fill
              className="object-contain object-center"
            />
          </div>

          <div className="flex-1 basis-[80%]">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <hr/>
            <p>{project.short}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ProjectListItem
