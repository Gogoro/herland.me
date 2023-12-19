import styles from './styles.module.scss'
import { PortableText as PT } from '@portabletext/react'
import Image from 'next/image'

import { generateImageUrl } from '@/utils/sanity'

const components = {
  types: {
    wideImage: ({value}: {value: { asset:Asset }}) => (
      <div className={styles.imageWrapper}>
        <Image src={generateImageUrl({asset: value.asset, width: 1920})}
          alt={value.asset._ref}
          width={1920}
          height={1080}
          className={styles.image}
        />
      </div>
    ),
    smallImage: ({value}: {value: { asset:Asset }}) => (
      <div className={styles.smallImageWrapper}>
        <Image src={generateImageUrl({asset: value.asset, width: 1280})}
          alt={value.asset._ref}
          width={1280}
          height={720}
          className={styles.image}
        />
      </div>
    ),
    microImage: ({value}: {value: { asset:Asset }}) => (
      <div className={styles.microImageWrapper}>
        <Image src={generateImageUrl({asset: value.asset, width: 720})}
          alt={value.asset._ref}
          width={720}
          height={480}
          className={styles.image}
        />
      </div>
    ),
  },
}


export default function PortableText({ value } : { value:any }) { 
  return <PT value={value} components={components}/>
}