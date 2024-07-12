// // 8-2
// // Basic Animations
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// // ✨ div 를 animate 하길 원한다면, motion.div 이렇게 써야함
// function App() {
//   return (
//     <Wrapper>
//       <Box
//         transition={{ type: 'spring', delay: 0.5 }}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1, rotateZ: 360 }}
//       />
//       {/* <motion.div></motion.div> */}
//     </Wrapper>
//   );
// }

// export default App;

// // 어떻게 스타일 컴포넌트를 애니메이트 시킬 수 있을까?
// // const Box = styled(motion.div)``

// // animate={{}}
// // Motion Prop 중 가장 중요함

// // initial={{}}
// // 원하는 상태. Element의 초기 상태를 써주면 됨

////////////////////////////////////////////////
// // 8-3
// // Variants part One
// // 나의 애니메이션의 Stage(무대)이다

// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// // 이름은 중요하지 않음. 단지 자바스크립트의 오브젝트이다
// // 설정을 분리된 오브젝트로 옮김
// // 두 개의 stage
// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
// };

// // ✨ div 를 animate 하길 원한다면, motion.div 이렇게 써야함
// function App() {
//   return (
//     <Wrapper>
//       <Box variants={myVars} initial="start" animate="end" />
//     </Wrapper>
//   );
// }

// export default App;

////////////////////////////////////////////////
// // 8-4
// // Variants part Two

// import styled from 'styled-components';
// import { delay, motion } from 'framer-motion';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const Circle = styled(motion.div)`
//   background-color: white;
//   height: 70px;
//   width: 70px;
//   place-self: center;
//   border-radius: 35px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.5, // 자식들에게 딜레이 주는 것
//       staggerChildren: 0.15, // 자동적으로 자식들에게 0.5초.. 1초..delay 줌
//     },
//   },
// };

// const circleVariants = {
//   start: {
//     opacity: 0,
//     y: 10, // 이건 Motion에서만 쓸 수 있음
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

// function App() {
//   return (
//     <Wrapper>
//       <Box variants={boxVariants} initial="start" animate="end">
//         {/* 부모의 initial 값과, animate 값을 상속 받는다 */}
//         {/* 그래서 start, end 이름 같게 함 */}
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//       </Box>
//     </Wrapper>
//   );
// }

// export default App;

// // 컴포넌트가 자식들을 갖고 있을 때, 기본 값으로 어떤 설정도 없을 때
// // 부모 컴포넌트가 variants랑 initial의 variant 이름, animate의 variant를 갖고 있을 때
// // 기본 동작으로, Motion은 initial="start" animate="end" 이것을 복사해서
// // 자식들에게만 자동으로 붙여 줌
// // 이것은 부모가 언제 애니메이션을 끝낼지 알 수 있게 해주고
// // 자식의 애니메이션도 마칠 수 있게 해준다
// // 자식 애니메이션까지도 컨트롤할 수 있게 해준다

////////////////////////////////////////////////
// // 8-5
// // Gestures part One
// // 이벤트 listen

// import styled from 'styled-components';
// import { delay, motion } from 'framer-motion';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   hover: { scale: 1.5, rotateZ: 90 },
//   click: { scale: 1, borderRadius: '100px' },
//   drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 10 } },
// };

// function App() {
//   return (
//     <Wrapper>
//       <Box
//         drag
//         variants={boxVariants}
//         whileHover="hover"
//         /* 숫자로 된 코드여야지만 애니메이션 작동 됨. 서서히 바뀜. */
//         whileDrag="drag"
//         whileTap="click"
//       />
//     </Wrapper>
//   );
// }

// export default App;

////////////////////////////////////////////////
// // 8-6
// // Gestures part Two
// // constraint(제약) : 드래그 가능 영역에 제약 조건을 적용

// import styled from 'styled-components';
// import { delay, motion } from 'framer-motion';
// import { useRef } from 'react';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const BiggerBox = styled.div`
//   width: 600px;
//   height: 600px;
//   background-color: rgba(255, 255, 255, 0.4);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   hover: { rotateZ: 90 },
//   click: { borderRadius: '100px' },
// };

// function App() {
//   const biggerBoxRef = useRef<HTMLDivElement>(null);
//   return (
//     <Wrapper>
//       <BiggerBox ref={biggerBoxRef}>
//         <Box
//           drag
//           dragSnapToOrigin
//           dragElastic={0.5}
//           /* dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }} */
//           dragConstraints={biggerBoxRef}
//           variants={boxVariants}
//           whileHover="hover"
//           whileTap="click"
//         />
//       </BiggerBox>
//     </Wrapper>
//   );
// }

// export default App;

// // dragConstraints
// // 기본적으로 어떤 Box를 만들 수 있다. 제약있는 Box. 드래킹이 허용될 수 있는 영역

// // 중앙으로 오게 하는 방법 두 가지
// // dragSnapToOrigin
// // 원래 위치로 돌아감

// // dragElastic
// // 0과 1 사이의 값이어야 함
// // 기본 값 0.5

////////////////////////////////////////////////
// // 8-7
// // MotionValues part One
// // 나의 애니메이션 내의 수치를 트래킹할 때 필요

// import styled from 'styled-components';
// import { motion, useMotionValue } from 'framer-motion';
// import { useEffect, useRef } from 'react';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   hover: { rotateZ: 90 },
//   click: { borderRadius: '100px' },
// };

// function App() {
//   const x = useMotionValue(0);
//   // x값 보는 방법
//   useEffect(() => {
//     x.on('change', () => console.log(x.get));
//   }, [x]);

//   return (
//     <Wrapper>
//       <Box style={{ x }} drag="x" dragSnapToOrigin />
//     </Wrapper>
//   );
// }

// export default App;

// // style의 x좌표가 바뀔 때마다, 이 MotionValue 업데이트 됨
// // MotionValue가 업데이트 될 때 React Rendering Cycle(랜더링 싸이클)을 발동시키지 않음
// // 이 말은 MotionValue가 React State(상태)로 살지 않는다는 것이다. State가 아님
// // 그래서 MotionValue가 바뀌어도, 컴포넌트는 다시 랜더링 되지 않는다
// // 사실 우리는 컴포넌트 값이 바뀐다고 매번 다시 랜더링하고 싶지는 않음
// // 그래서 Motion 이 하는 일은, x값을 계속해서 추적하는데,
// // 이 값은 ReactJS 세계에서 존재하지 않는 다는 것
// // 그래서 만약 이 값이 바뀌면, 우리 컴포넌트는 다시 랜더링 되지 않는다
// // Framer Motion 세계에서, MotionValue 값들은 ReactJS 세계에서 존재하지 않는다
// // MotionValue는 네가 계속 특정한 값을 추적할 수 있도록 해줌. x나 y 뭐든.
// // 그리고 네가 특정 값을 만들 때, const x = useMotionValue(0);
// // 그리고 네가 그 값을 style에 넣을 때, <Box style={{ x }} drag="x" dragSnapToOrigin />
// // 유저가 움직일 때 자동적으로, 예를 들면 유저가 드래그할 때 x 값이 업데이트 된다
// // useMotionValue 를 기본 값 0으로 사용하고
// // 원하는 곳에 style을 넣는다. style이 변경될 때 그 값도 변경 됨.

////////////////////////////////////////////////
// 8-8
// MotionValues part Two
//

import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  // x값 보는 방법
  useEffect(() => {
    // x.on('change', () => console.log(x.get));
    scale.on('change', () => console.log(scale.get));
  }, [x]);

  return (
    <Wrapper>
      {/* <Box style={{ x, scale: scale }} drag="x" dragSnapToOrigin /> */}
      {/* 이름을 같게 하면 shortcut으로 하나로 줄여서 쓸 수 있다 */}
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;

// 다시 한번 듣고 노션에 정리하기
// 깃 다시 올리기
