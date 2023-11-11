import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="flex min-h-screen flex-col py-4 px-12">
      <h2 className="text-3xl">This is my home page</h2>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </main>
  );
}
