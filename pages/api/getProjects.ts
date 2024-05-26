import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import {sanityClient} from '../../sanity'
import { Project } from "@/typing";

// we have technologies array as reference in project so we need to expand -> to get details
const query = groq`
*[_type=="project"] {
  ...,
  technologies[]-> 
}

`

type Data = {
  projects: Project[]
}
export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>) {

  const projects: Project[] = await sanityClient.fetch(query)
  res.status(200).json({
    projects
  })
}