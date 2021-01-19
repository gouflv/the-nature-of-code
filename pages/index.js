import Link from 'next/link'

export default function Home() {
  return (
    <div className='chapters'>
      <h2>Chapter 0</h2>
      <ul>
        <li>
          <Link href='/chapter-0/walker01'>0-1 传统的随机游走</Link>
        </li>
      </ul>
    </div>
  )
}
