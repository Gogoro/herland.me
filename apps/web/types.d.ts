interface Asset {
  _ref: string,
  _type: string
}

interface Author {
  name: string
  slug: {
    current: string
  },
  image: {
    asset: Asset
  }
}

interface Book {
  name: string
  slug: {
    current: string
  },
  url: string,
  authors: Author[]
}

interface BookCategory {
  title: string
  slug: {
    current: string
  },
  order: number
  books: Book[]
}

interface GenerateImageUrlParams {
  asset: Asset
  width?: number
  height?: number
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
}

interface Project {
  name: string
  slug: {
    current: string
  },
  thumbnailText: string,
  description: string,
  order: number
  image: {
    asset: Asset
  },
  content: any
}

interface Category {
  title: string,
  description: string,
  slug: {
    current: string
  },
}

interface Post {
  title: string
  slug: {
    current: string
  },
  metaImage: {
    asset: Asset
  },
  categories: Category[]
  publishedAt: string
  content: any
}