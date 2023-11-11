import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className=" py-4 px-12">
      <h1 className="text-7xl">
        Hello ! I am{" "}
        <span className="bg-gradient-to-r from-orange-500 via-red-800 to-purple-600 bg-clip-text text-transparent">
          Dinesh
        </span>
      </h1>
      <h2 className="text-3xl font-bold mt-8">My Project</h2>
      <div className="mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-8">
        {projects.map((project) => (
          <Link
            href={`/project/${project.slug}`}
            key={project._id}
            className="p-4 border border-red-900"
          >
            {project.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
