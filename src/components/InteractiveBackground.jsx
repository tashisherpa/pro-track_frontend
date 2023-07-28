import React, { useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import p5 from 'p5';

function InteractiveBackground() {
  useEffect(() => {
    let canvas;

    const sketch = (p) => {
      p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.angleMode(p.DEGREES);
      };

      p.draw = () => {
        p.background(113, 128, 150); 
        p.rotateX(66);
        p.noFill();
        p.stroke(255);

        for (let i = 0; i < 20; i++) {
          let r = p.map(p.sin(p.frameCount / 2), -1, 1, 0, 255);
          let g = p.map(i, 0, 20, 0, 255);
          let b = p.map(p.cos(p.frameCount), -1, 1, 255, 0);

          p.beginShape();

          for (let j = 0; j < 360; j += 10) {
            let rad = i * 17;
            let x = rad * p.cos(j);
            let y = rad * p.sin(j);
            let z = p.sin(p.frameCount * 2 + i * 12) * 50;

            p.vertex(x, y, z);
          }

          p.endShape(p.CLOSE);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const canvasContainer = document.getElementById('canvas-container');
    new p5(sketch, canvasContainer);

    return () => {
      // Cleanup if needed
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return (
    <div className="bg-gray-700 mb-10 min-h-screen">
      <NavBar />
      <div id="canvas-container" className="flex bg-gray-800 flex-col items-center p-8"></div>
    </div>
  );
}

export default InteractiveBackground;


// import React, { useEffect, useRef } from 'react';
// import NavBar from '../components/NavBar/NavBar';
// import p5 from 'p5';

// function Homepage() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let canvas;

//     const sketch = (p) => {
//       p.setup = () => {
//         canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
//         p.angleMode(p.DEGREES);
//       };

//       p.draw = () => {
//         p.background(113, 128, 150); // Matching background color
//         p.rotateX(66);
//         p.noFill();
//         p.stroke(255);

//         for (let i = 0; i < 20; i++) {
//           let r = p.map(p.sin(p.frameCount / 2), -1, 1, 0, 255);
//           let g = p.map(i, 0, 20, 0, 255);
//           let b = p.map(p.cos(p.frameCount), -1, 1, 255, 0);

//           p.beginShape();

//           for (let j = 0; j < 360; j += 10) {
//             let rad = i * 17;
//             let x = rad * p.cos(j);
//             let y = rad * p.sin(j);
//             let z = p.sin(p.frameCount * 2 + i * 12) * 50;

//             p.vertex(x, y, z);
//           }

//           p.endShape(p.CLOSE);
//         }
//         p.push(); // Save the current transformation matrix
//         p.translate(0, 0, 50); // Move the origin (0,0,0) to a position slightly in front of the canvas
//         p.textSize(32);
//         p.fill(255);
//         p.textAlign(p.CENTER);
//         p.text('Hello, World!', 0, 0); // Draw the text at the new origin (0,0,0)
//         p.pop(); // Restore the previous transformation matrix
//       };

//       p.windowResized = () => {
//         p.resizeCanvas(p.windowWidth, p.windowHeight);
//       };
//     };

//     // Check if the canvas has already been initialized
//     if (!canvasRef.current) {
//       canvasRef.current = new p5(sketch, 'canvas-container');
//     }

//     return () => {
//       // Cleanup if needed
//       if (canvasRef.current) {
//         canvasRef.current.remove();
//       }
//     };
//   }, []);

//   return (
//     <div className="bg-gray-700 mb-10 min-h-screen">
//     <NavBar />
//     <div >
//       <div id="canvas-container" className="w-full h-full">
//       </div>
//     </div>

//     <div className="container mx-auto relative z-10">
      
//       <footer className="bg-gray-800 py-4 m-10 text-gray-400 text-center">
//         <div className="container mx-auto">
//           <p className="text-sm">© 2023 All rights reserved. Design, Code, and Ship!</p>
//         </div>
//       </footer>
//     </div>
//   </div>
//   );
// }

// export default Homepage;

