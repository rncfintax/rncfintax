import Link from "next/link"
import { Context } from "../script/context"
import { useContext } from "react"
import { convert } from 'html-to-text'

export default function BlogCard({ NumberOfPost, page }) {
  const { bloggerPost } = useContext(Context)

  // extract thumbnail from blogger content
  function thumbnail(response) {
    const parser = new DOMParser()
    const html = parser.parseFromString(response, 'text/html')
    const img = html.querySelector('img')
    const url = img ? img.src : ''
    return url
  }

  // extract slug from blogger post url
  function slug(url) {
    const split_url = url.split('/')
    return split_url[split_url.length - 1].replace('.html', '')
  }

  const options = {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } }
    ],
  }

  return (
    <>
      {bloggerPost.slice(0, NumberOfPost).map(data => (
        <div key={data.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Link href={page + slug(data.url)}>
            <img loading='lazy'  alt={data.title} width={300} height={250} className="rounded-t-lg w-full object-cover object-center h-48 lg:h-52" src={thumbnail(data.content)} />
          </Link>
          <div className="p-5">
            <Link href={page + slug(data.url)}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title.length >= 55 ? data.title.slice(0, 55) + '...' : data.title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">{convert(data.content, options).slice(0, 150) + '...'}</p>
          </div>
        </div>
      ))}
    </>
  )
}