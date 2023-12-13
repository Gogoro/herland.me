import { createClient } from "next-sanity"

const sanity = createClient({
  projectId: "wgeiw1hl",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export default sanity;