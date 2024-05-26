import { Experience } from "@/typing";

export const  fetchExperiences = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperiences`);
  const data = await res.json();
  const experiences : Experience[] = data.experiences;

  // console.log('====================================');
  // console.log(experiences);
  // console.log('====================================');
  return experiences
}