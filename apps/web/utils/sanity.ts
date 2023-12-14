import { createClient } from "next-sanity"

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-25",
  useCdn: false
});



export default sanity;
export { sanity };

export function generateImageUrl({asset, width, height, fit}: GenerateImageUrlParams): string {
  const ext = asset._ref.split('-')[3]
  const baseUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${asset._ref.split('-')[1]}-${asset._ref.split('-')[2]}.${ext}`
  const imageParams = []

  if (ext !== 'svg') {
    if (width) {
      imageParams.push(`w=${width}`)
    }
  
    if (height) {
      imageParams.push(`h=${height}`)
    }
  
    if (fit) {
      imageParams.push(`fit=${fit}`)
    }
  }

  const imageUrl = `${baseUrl}${imageParams.length > 0 ? '?' : ''}${imageParams.join('&')}`
  return imageUrl
}