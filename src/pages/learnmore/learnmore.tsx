/*import React, { useState, CSSProperties, useEffect } from 'react'
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
}*/

import "./styles.css";
import { motion, Variants } from "framer-motion";
import Microlink from '@microlink/react'
import React, { ReactElement } from 'react';

interface Props {
  emoji: string | ReactElement;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

type FoodItem = [string | ReactElement, number, number];

const food: FoodItem[] = [
    [<Microlink url="https://motcp.org" className="linkpadding" />, 340, 10],
  [<Microlink url="https://americanindian.si.edu/nk360/removal-cherokee/index.html" className="linkpadding" />, 20, 40],
  [<Microlink url="https://loc.gov" className="linkpadding" />, 60, 90],
  [<Microlink url="https://www.okhistory.org/publications/enc/entry?entry=CH014" className="linkpadding" />, 80, 120],

];

export default function LearnMore() {
  return (
    <div className="learn-more-container">
    {food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={typeof emoji === 'string' ? emoji : hueB.toString()} />
  ))}
  </div>

);
}
