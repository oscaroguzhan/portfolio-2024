interface SanityBody {
  _createdAt:string
  _updatedAt:string
  _id:string
  _rev:string
}

interface Image {
  _type:"image"
  asset: {
    _ref:string
    _type:"reference"
  }
}

export interface Social extends SanityBody {
  _type: "social"
  url:string
  name:string
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo"
  address: string
  backgroundInfo: string
  email:string
  role:string
  heroImage: Image
  name:string
  phoneNumber: string
  profilePic: Image
}

export interface Skill extends SanityBody {
  _type: "skill"
  image:Image
  name:string
  progress:number
}

export interface Experience extends SanityBody {
  _type: "experience"
  company:string
  companyImage: Image
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorking: boolean
  title:string
  details: string []
  technologies: Technology []
}
export interface Technology extends SanityBody {
  _type: "skill"
  image:Image
  progress:number
  title:string
}
export interface Project extends SanityBody {
  _type: "project"
  title:string
  image:Image
  link:string
  summary:string
  technologies:Technology[]
}