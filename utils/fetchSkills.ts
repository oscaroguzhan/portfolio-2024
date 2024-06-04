import { Skill } from "@/typing";

export const  fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`, {next: {revalidate: 100}});
  const data = await res.json();
  const skills : Skill[] = data.skills;

  // console.log('====================================');
  // console.log(skills);
  // console.log('====================================');
  return skills
}