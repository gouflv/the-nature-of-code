import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

const SP_MIN = 10

function createDrawer(): SketchProps {
  let p: P5

  let angles

  function sum(arr) {
    return arr.reduce((sum, v) => sum + v, 0)
  }

  function _split(part: number, base = 360) {
    const mean = base / part
    const sd = 20
    const min = SP_MIN
    const max = mean * 2
    const result = []
    Array.from({ length: part - 1 })
      .fill(0)
      .forEach((_, i) => {
        while (true) {
          const r = p.randomGaussian(mean, sd)
          if (r > min && r < max) {
            result[i] = Math.floor(r)
            break
          }
        }
      })
    result.push(base - sum(result))
    console.log(result)
    return result
  }

  function splitPie(part: number) {
    let res
    while (true) {
      res = _split(part)
      if (res[res.length - 1] > SP_MIN) break
    }
    return res
  }

  function pieChart(r, angles) {
    let last = 0
    angles.forEach((angle, i) => {
      const c = p.color(p.map(i, 0, angles.length - 1, 50, 255))
      p.fill(p.red(c), p.green(c), p.blue(c), 200)
      p.arc(p.width / 2, p.height / 2, r, r, last, last + p.radians(angle))
      last += p.radians(angle)
    })
  }

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)
      p.noLoop()
    },
    draw: () => {
      p.background(255)
      angles = splitPie(6)
      pieChart(400, angles)
    },
    mouseClicked: () => {
      p.redraw()
    }
  }
}

export default P5Render(
  createDrawer,
  <div className='tip'>
    类似红包分配，可以保证每个切分结果在数值范围内。点击刷新。
  </div>
)
