import { SketchProps } from 'react-p5'
import { P5Render } from '../../components/P5Render'

function createDrawer(): SketchProps {
  return {
    setup: (p, canvas) => {
      p.createCanvas(800, 500).parent(canvas)

      let offX = 0,
        offY = 0

      p.loadPixels()

      for (let x = 0; x < p.width; x++) {
        offY = 0
        for (let y = 0; y < p.height; y++) {
          const c = p.color(p.map(p.noise(offX, offY), 0, 1, 0, 255))
          p.pixels[x + y * p.width] = p.red(c)
          p.pixels[x + y * p.width + 1] = p.green(c)
          p.pixels[x + y * p.width + 2] = p.blue(c)
          p.pixels[x + y * p.width + 3] = 255
          offY += 0.01
        }
        offX += 0.01
      }

      p.updatePixels()
    },
    draw: () => {}
  }
}

export default P5Render(createDrawer)
