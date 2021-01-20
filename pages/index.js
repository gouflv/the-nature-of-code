import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className='chapters'>
        <header>
          <h1>The Nature of Code</h1>
        </header>

        <section>
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
              <Link href='/chapter-0/04-gaussian-random'>
                04 高斯随机数分布
              </Link>
            </li>
            <li>
              <Link href='/chapter-0/04-splash'>04-2 飞溅效果</Link>
            </li>
            <li>
              <Link href='/chapter-0/06-noise'>06 噪声</Link>
            </li>
            <li>
              <Link href='/chapter-0/06-noise-walker'>06-2 噪声游走</Link>
            </li>
            <li>
              <Link href='/chapter-0/06-noise-cloud'>06-3 噪声纹理</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Chapter 1</h2>
          <ul>
            <li>
              <Link href='/chapter-1/03-ball'>03 向量弹球</Link>
            </li>
            <li>
              <Link href='/chapter-1/04-vector-sub'>04 向量相减</Link>
            </li>
            <li>
              <Link href='/chapter-1/07-mover'>07 速度</Link>
            </li>
            <li>
              <Link href='/chapter-1/08-acceleration'>08 加速度</Link>
            </li>
            <li>
              <Link href='/chapter-1/08-car'>08-2 汽车</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
