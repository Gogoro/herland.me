interface Asset {
  _ref: string,
  _type: string
}

interface Author {
  name: string
  slug: string
  image: {
    asset: Asset
  }
}

interface Book {
  name: string
  slug: string
  url: string,
  authors: Author[]
}

interface BookCategory {
  title: string
  slug: string
  order: number
  books: Book[]
}

interface GenerateImageUrlParams {
  asset: Asset
  width?: number
  height?: number
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
}