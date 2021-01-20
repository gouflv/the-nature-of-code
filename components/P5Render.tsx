import dynamic from 'next/dynamic'
import { SketchProps } from 'react-p5'
import { ReactElement } from 'react'

const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export const P5Render = (render: () => SketchProps, tip?: ReactElement) => {
  return () => (
    <div className='drawing-board'>
      <Sketch {...render()} />
      {tip}
    </div>
  )
}
