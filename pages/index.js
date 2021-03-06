import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className='chapters'>
        <header>
          <h1>The Nature of Code</h1>
        </header>

        <section>
          <h2>Chapter 0 引言</h2>
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
          <h2>Chapter 1 向量</h2>
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
              <Link href='/chapter-1/08-car'>08-2 加速度控制</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>chapter-2 合力</h2>
          <ul>
            <li>
              <Link href='/chapter-2/04-balloon'>04 气球</Link>
            </li>
            <li>
              <Link href='/chapter-2/05-pinball'>05 重力弹球</Link>
            </li>
            <li>
              <Link href='/chapter-2/09-attraction'>09 引力</Link>
            </li>
            <li>
              <Link href='/chapter-2/09-three-body'>09-2 万有引力</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>chapter-3</h2>
          <ul>
            <li>
              <Link href='/chapter-3/02-angle'>02-角运动</Link>
            </li>
            <li>
              <Link href='/chapter-3/04-point-angle'>04-跟随鼠标的角运动</Link>
            </li>
            <li>
              <Link href='/chapter-3/04-car'>04-加速度+角运动</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Example</h2>
          <ul>
            <li>
              <Link href='/example/01-pieChart'>01 正态分布切分饼图</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
