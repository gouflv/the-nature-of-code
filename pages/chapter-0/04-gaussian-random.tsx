import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  let p: P5

  const list = Array.from<number>({ length: 20 }).fill(0)

  return {
    setup: (p5, canvas) => {
      p = p5
      p.createCanvas(800, 500).parent(canvas)
    },
    draw: () => {
      const index = Math.floor(p.randomGaussian(list.length / 2, 5))
      if (index < 0 || index > list.length - 1) {
        return
      }
      list[index]++

      p.stroke(0)
      p.fill(150)

      const w = p.width / list.length

      for (let i = 0; i < list.length; i++) {
        p.rect(w * i, p.height - list[i], w - 1, list[i])
      }
    }
  }
}

export default P5Render(createDrawer)
