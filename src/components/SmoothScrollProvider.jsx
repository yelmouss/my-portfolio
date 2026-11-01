"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./SmoothScrollProvider.css";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const pathname = usePathname();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let disposed = false;
    let cleanupScene = () => {};
    let hideLoaderTimer;
    const resetLoaderFrame = window.requestAnimationFrame(() => {
      setLoadingProgress(8);
      setIsLoading(true);
    });
    const isAboutPage = pathname.split("?")[0].endsWith("/about");
    const isContactPage = pathname.split("?")[0].endsWith("/contact");
    const modelPath = isAboutPage
      ? "/3d/realistic_human_skull.glb"
      : isContactPage
        ? "/3d/laptop_free.glb"
        : "/3d/rigged_hand_-_game_model.glb";
    const modelLabel = isAboutPage
      ? "background skull"
      : isContactPage
        ? "background laptop"
        : "background hand";

    const setupScene = async () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reduceMotion.matches || !canvasRef.current) {
        setLoadingProgress(100);
        hideLoaderTimer = window.setTimeout(() => setIsLoading(false), 350);
        return;
      }

      setLoadingProgress(22);
      const THREE = await import("three");
      setLoadingProgress(38);
      const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
      if (disposed) return;

      const canvas = canvasRef.current;
      let webglContext;
      try {
        webglContext = canvas.getContext("webgl2", { alpha: true });
      } catch (error) {
        console.warn("WebGL is unavailable; the background 3D scene is disabled.", error);
        setLoadingProgress(100);
        hideLoaderTimer = window.setTimeout(() => setIsLoading(false), 350);
        return;
      }
      if (!webglContext) {
        console.warn("WebGL2 is unavailable; the background 3D scene is disabled.");
        setLoadingProgress(100);
        hideLoaderTimer = window.setTimeout(() => setIsLoading(false), 350);
        return;
      }
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
        });
      } catch (error) {
        console.warn("WebGL is unavailable; the background 3D scene is disabled.", error);
        setLoadingProgress(100);
        hideLoaderTimer = window.setTimeout(() => setIsLoading(false), 350);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.z = 7;

      const root = new THREE.Group();
      scene.add(root);
      const modelRoot = new THREE.Group();
      modelRoot.visible = false;
      root.add(modelRoot);

      let model = null;
      let modelMaterials = [];
      let modelVisible = 0;
      let modelTargetVisible = isAboutPage || isContactPage ? 1 : 0;
      const modelLoader = new GLTFLoader();
      modelLoader.load(
        modelPath,
        (gltf) => {
          if (disposed) return;
          model = gltf.scene;
          const bounds = new THREE.Box3().setFromObject(model);
          const size = bounds.getSize(new THREE.Vector3());
          const center = bounds.getCenter(new THREE.Vector3());
          const largestAxis = Math.max(size.x, size.y, size.z) || 1;
          const scale = 3.2 / largestAxis;

          model.scale.setScalar(scale);
          model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
          model.rotation.set(
            isAboutPage ? 0.05 : isContactPage ? -0.12 : 0.08,
            isAboutPage ? 0.2 : isContactPage ? -0.3 : -0.35,
            -0.12,
          );

          model.traverse((object) => {
            if (!object.isMesh) return;
            object.castShadow = false;
            object.receiveShadow = false;
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => {
              if (!material || !material.color) return;
              const tintedMaterial = material.clone();
              tintedMaterial.color.set("#A3E635");
              tintedMaterial.emissive?.set("#365314");
              if (tintedMaterial.emissiveIntensity !== undefined) tintedMaterial.emissiveIntensity = 0.65;
              tintedMaterial.transparent = true;
              tintedMaterial.opacity = 0;
              object.material = Array.isArray(object.material)
                ? materials.map((item) => (item === material ? tintedMaterial : item))
                : tintedMaterial;
              modelMaterials.push(tintedMaterial);
            });
          });

          modelRoot.add(model);
          modelRoot.visible = true;
          setLoadingProgress(100);
          hideLoaderTimer = window.setTimeout(() => setIsLoading(false), 350);
        },
        (progressEvent) => {
          if (!progressEvent.total) return;
          setLoadingProgress(Math.min(96, 42 + (progressEvent.loaded / progressEvent.total) * 54));
        },
        (error) => {
          console.error(`Unable to load the ${modelLabel} model.`, error);
          setLoadingProgress(100);
          hideLoaderTimer = window.setTimeout(() => setIsLoading(false), 350);
        },
      );

      const particleCount = window.innerWidth < 700 ? 240 : 520;
      const positions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const offset = index * 3;
        positions[offset] = (Math.random() - 0.5) * 12;
        positions[offset + 1] = (Math.random() - 0.5) * 9;
        positions[offset + 2] = (Math.random() - 0.5) * 5 - 2;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
          color: 0xa3e635,
          size: 0.018,
          transparent: true,
          opacity: 0.62,
          sizeAttenuation: true,
        }),
      );
      root.add(particles);

      const scroll = { value: 0, velocity: 0, target: 0 };
      const resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      const animate = (time) => {
        if (disposed) return;
        const elapsed = time * 0.00035;
        const direction = Number(sceneRef.current?.style.getPropertyValue("--scroll-direction")) || 1;
        scroll.value += (scroll.target - scroll.value) * 0.075;
        if (!isAboutPage && !isContactPage) {
          const expertiseSection = document.querySelector("[data-expertise-section]");
          const expertiseTop = expertiseSection
            ? expertiseSection.getBoundingClientRect().top + window.scrollY
            : Number.POSITIVE_INFINITY;
          const expertiseStart = expertiseTop - window.innerHeight * 0.7;
          modelTargetVisible = scroll.value >= expertiseStart ? 1 : 0;
        }
        modelVisible += (modelTargetVisible - modelVisible) * 0.055;
        particles.rotation.y = elapsed * 0.08 + scroll.value * 0.00006 * direction;
        particles.rotation.z = scroll.value * 0.000025;
        particles.rotation.x = Math.sin(elapsed * 0.7) * 0.015;
        root.position.y = Math.sin(elapsed * 2) * 0.025;
        root.rotation.z = 0;
        if (model) {
          modelRoot.visible = modelVisible > 0.01;
          modelRoot.position.set(
            0,
            isAboutPage ? -0.7 : isContactPage ? -0.95 : -1.45 + modelVisible * 0.28,
            0.65,
          );
          modelRoot.rotation.y = scroll.value * (isContactPage ? 0.001 : 0.0007);
          modelRoot.rotation.x = Math.sin(elapsed * 0.8) * 0.04;
          modelRoot.scale.setScalar(isAboutPage || isContactPage ? 1.35 : 1.35 + modelVisible * 0.15);
          modelMaterials.forEach((material) => {
            material.opacity = modelVisible * 0.28;
          });
        }
        renderer.render(scene, camera);
        animationFrame = window.requestAnimationFrame(animate);
      };

      let animationFrame = window.requestAnimationFrame(animate);
      resize();
      window.addEventListener("resize", resize);

      cleanupScene = () => {
        window.removeEventListener("resize", resize);
        window.cancelAnimationFrame(animationFrame);
        particleGeometry.dispose();
        particles.material.dispose();
        modelMaterials.forEach((material) => material.dispose());
        model?.traverse((object) => {
          if (object.isMesh) object.geometry.dispose();
        });
        modelMaterials = [];
        renderer.dispose();
      };
      sceneRef.current.__threeScroll = scroll;
    };

    // The loader no longer waits for the 3D model, and the scene starts once the browser is idle.
    const loaderTimer = window.setTimeout(() => {
      setLoadingProgress(100);
      setIsLoading(false);
    }, 400);
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    const startScene = () => {
      if (!disposed && !isSmallScreen) setupScene();
    };
    let idleHandle;
    let idleTimer;
    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(startScene, { timeout: 2500 });
    } else {
      idleTimer = window.setTimeout(startScene, 1200);
    }

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
    });
    window.__portfolioLenis = lenis;

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    const handleScroll = ({ scroll, velocity, direction }) => {
      if (!sceneRef.current) return;
      sceneRef.current.style.setProperty("--scroll-y", `${scroll}px`);
      sceneRef.current.style.setProperty("--scroll-velocity", `${velocity}`);
      sceneRef.current.style.setProperty("--scroll-direction", `${direction}`);
      if (sceneRef.current.__threeScroll) {
        sceneRef.current.__threeScroll.target = scroll;
        sceneRef.current.__threeScroll.velocity = velocity;
      }
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", handleScroll);
      gsap.ticker.remove(update);
      lenis.destroy();
      if (window.__portfolioLenis === lenis) delete window.__portfolioLenis;
      disposed = true;
      window.clearTimeout(hideLoaderTimer);
      window.clearTimeout(loaderTimer);
      window.clearTimeout(idleTimer);
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      window.cancelAnimationFrame(resetLoaderFrame);
      cleanupScene();
    };
  }, [pathname]);

  const locale = pathname.split("/")[1];
  const loadingCopy = locale === "fr"
    ? "Nous préparons quelque chose de beau..."
    : locale === "ar"
      ? "نحن نحضّر لك شيئًا جميلاً..."
      : "Crafting something beautiful...";

  return (
    <div className="smooth-scroll-root">
      <div className={`scene-loader${isLoading ? "" : " scene-loader--hidden"}`} aria-live="polite">
        <div className="scene-loader__content">
          <span className="scene-loader__eyebrow">YELMOUSS</span>
          <p>{loadingCopy}</p>
          <div className="scene-loader__track" aria-hidden="true">
            <span style={{ width: `${loadingProgress}%` }} />
          </div>
          <span className="scene-loader__percent">{Math.round(loadingProgress)}%</span>
        </div>
      </div>
      <div ref={sceneRef} className="scroll-scene" aria-hidden="true">
        <canvas ref={canvasRef} className="scroll-scene__canvas" />
      </div>
      <div className="smooth-scroll-content">{children}</div>
    </div>
  );
}
