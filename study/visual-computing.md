# Visual computing — why it’s on the site

These lines exist because of your **Graphics** projects (not FytlY):

| Project | Stack | Live claim |
|---|---|---|
| **sternstaub** | Canvas / WebGL / Three.js particles | GitHub Pages demo |
| **nebelkern** | WebGL2 + **React Three Fiber (R3F)** + GLSL | repo + video |
| **nebelkern-metal** | **Swift + Metal (MSL)** on macOS | native engine repo |

“Visual computing” = making images/motion with code (GPU/shaders), not Excel charts.

---

## Buzzword decode

| Term | Plain English | Your project |
|---|---|---|
| **Metal Shading Language (MSL)** | Apple’s GPU programming language (like GLSL but for Metal). | nebelkern-metal |
| **WebGL2** | Browser API to talk to the GPU. | sternstaub / nebelkern |
| **Three.js** | JS library so you don’t write raw WebGL for every triangle. | sternstaub |
| **R3F** | React Three Fiber — Three.js inside React components. | nebelkern |
| **Postprocessing** | Extra full-screen passes after the main render (bloom, blur, chromatic aberration = “cinematic” look). | nebelkern |
| **Curl noise** | A math trick for fluid-like particle motion (vectors that swirl, not explode randomly). | nebelkern particle advection |

---

## Say this (60 seconds) — if they ask the Graphics column

> “I built the same silhouette idea three ways: particles in the browser with Three.js, a denser WebGL2 / React Three Fiber cloud with bloom and noise-driven motion, and a native macOS Metal version in Swift. The point was to learn how the same visual moves from canvas to GPU to Apple Silicon.”

---

## Honesty rule (same as AES)

- **OK on site:** you have repos + demos (sternstaub live).  
- **Risky:** listing **Curl noise** / **Postprocessing** if you can’t explain them without reading nebelkern’s README.  
- Live **Capabilities** chips were softened to plain labels; jargon lives here until you rehearse.

### Watch later
- “Three.js crash course”
- “What is React Three Fiber”
- “Curl noise explained” (SimonDev / The Book of Shaders adjacent)
- “Metal compute shader intro” (Apple)
