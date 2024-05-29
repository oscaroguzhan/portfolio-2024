This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### TO PULL INFORMATION FROM SANITY TO FRONT END

GROQ - is a query language helps to describe exactly what is information the application needs. It usually start with "\*[_type==""]" where we can filter by document type

### fetch data with next.js

Next.js can be used to fetch data where pages/api file acts as server to fetch data

- then we define API endpoints in "data.ts" file to create endpoints by using "NextApiRequest and NextApiResponse" types from Next

 ````ts
 import { NextApiRequest, NextApiResponse } from 'next';

interface DataResponse {
  title: string;
  completed: boolean;
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataResponse>) {
  try {
    const response = await fetch(apiUrl);
    const data: DataResponse = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```

- Create a new file called index.tsx inside the pages directory. This file will fetch the data from the API endpoint and display it on the page.

- Add the following code to the index.tsx file:

````ts

import { useState, useEffect } from 'React';

interface DataResponse {
  title: string;
  completed: boolean;
}

const HomePage = () => {
  const [data, setData] = useState<DataResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const data: DataResponse = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.completed? 'Completed' : 'Not completed'}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

```

## connect sanity and frontend 
- Install dependencies to setup sanity client
````js

npm install next-sanity @sanity/image-url @sanity/react-loader @sanity/client
```

then we need to create client.ts file by using createClient

````ts

import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-03-25",
}

// set up the client the fetching data in the getProps page function

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source);
```

## DATA FETCHING - ISR 
-  ISR (Incremental static regenation) is a technique allowing developer to update static pages after they have been generated (revalidate the page), eliminating the need of rebuild the entire site.
-  we need to create a getStaticProps function to fetch data from sanity client
