import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

import styles from './styles.module.css'

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>What was the Cherokee geography?</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>They were living in the appalachians</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>oh</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'red' }}>hi</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'brown' }}>ryan</animated.div>,
  
]

export default function LearnMore () {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 5)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
