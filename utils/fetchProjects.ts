import { Project } from "@/typing";

export const  fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`);
  const data = await res.json();
  const projects : Project[] = data.projects;

  // console.log('====================================');
  // console.log(projects);
  // console.log('====================================');
  return projects
}