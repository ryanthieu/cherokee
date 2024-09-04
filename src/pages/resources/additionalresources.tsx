/*import './resources.css';
import Microlink from '@microlink/react'



export const AdditionalResources = () => {
    return(
        <div>
        <div>
            <h1>Additional Resources</h1>
        </div>
        <div className="resourcecontainer">
            <h1>example</h1>
        </div>
        <div className="resourcecontainer">
            <h1>Museum of the Cherokee People</h1>
            <Microlink url="https://visitcherokeenc.com/play/attractions/museum-of-the-cherokee-people/" className="linkpadding" />
        </div>
        </div>
    )
}*/

import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
import Microlink from '@microlink/react'

import styles from './styles.module.css'

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><Microlink url="https://americanindian.si.edu/nk360/removal-cherokee/index.html" className="linkpadding" /></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><Microlink url="https://loc.gov" className="linkpadding" /> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}><Microlink url="https://motcp.org" className="linkpadding" /></animated.div>,
 
  
]

export default function AdditionalResources () {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 3)
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
    <div>
    <div>
        <h1 className="addresources">Additional Resources</h1>
    </div>
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
    </div>
  )
}

