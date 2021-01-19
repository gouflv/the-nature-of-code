import Link from 'next/link'

export default function Home() {
  return (
    <div className='chapters'>
      <h2>Chapter 0</h2>
      <ul>
        <li>
          <Link href='/chapter-0/01-walker'>01 传统的随机游走</Link>
        </li>
        <li>
          <Link href='/chapter-0/02-random'>02 随机数分布</Link>
        </li>
        <li>
          <Link href='/chapter-0/03-direction-walker'>
            03 根据鼠标方向的趋势游走
          </Link>
        </li>
        <li>
          <Link href='/chapter-0/04-gaussian-random'>04 高斯随机数分布</Link>
        </li>
      </ul>
    </div>
  )
}
