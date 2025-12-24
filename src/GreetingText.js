import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

class GreetingText {
    constructor(scene) {
        this.scene = scene;
        this.textMeshes = [];
        this.loaded = false;
    }

    load() {
        return new Promise((resolve) => {
            const loader = new FontLoader();

            // Load font from CDN
            loader.load(
                'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
                (font) => {
                    this.createGreetingTexts(font);
                    this.loaded = true;
                    resolve();
                },
                undefined,
                (error) => {
                    console.error('Font loading error:', error);
                    resolve(); // Resolve anyway to not block loading
                }
            );
        });
    }

    createGreetingTexts(font) {
        // Brighter materials with higher emissive intensity
        const materials = [
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffd700,
                emissiveIntensity: 1.2, // Increased from 0.3
                metalness: 0.8,
                roughness: 0.1
            }),
            new THREE.MeshStandardMaterial({
                color: 0xff8888,
                emissive: 0xff3366,
                emissiveIntensity: 1.0, // Increased from 0.4
                metalness: 0.8,
                roughness: 0.2
            }),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xaaddff,
                emissiveIntensity: 0.9, // Increased from 0.2
                metalness: 0.7,
                roughness: 0.2
            })
        ];

        // Text 1: "Merry Christmas"
        const text1Geometry = new TextGeometry('Merry Christmas', {
            font: font,
            size: 0.8, // Increased from 0.6
            height: 0.25, // Increased from 0.2
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.03,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text1Geometry.center();

        const text1Mesh = new THREE.Mesh(text1Geometry, materials[0]);
        text1Mesh.position.set(0, 5.0, -2.5); // Raised from 3.5, moved back slightly
        text1Mesh.castShadow = true;
        this.scene.add(text1Mesh);
        this.textMeshes.push({ mesh: text1Mesh, baseY: 5.0, scale: 1 });

        // Text 2: "Trương Mỹ Hoa" (with Vietnamese diacritics)
        const text2Geometry = new TextGeometry('Truong My Hoa', {
            font: font,
            size: 0.65, // Increased from 0.5
            height: 0.22,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.04,
            bevelSize: 0.025,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text2Geometry.center();

        const text2Mesh = new THREE.Mesh(text2Geometry, materials[1]);
        text2Mesh.position.set(0, 4.0, -2.5); // Raised from 2.7
        text2Mesh.castShadow = true;
        this.scene.add(text2Mesh);
        this.textMeshes.push({ mesh: text2Mesh, baseY: 4.0, scale: 1 });

        // Text 3: "Chúc mày báo cáo" (with diacritics)
        const text3Geometry = new TextGeometry('Chuc may bao cao', {
            font: font,
            size: 0.32, // Increased from 0.25
            height: 0.12,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.025,
            bevelSize: 0.015,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text3Geometry.center();

        const text3Mesh = new THREE.Mesh(text3Geometry, materials[2]);
        text3Mesh.position.set(0, 3.2, -2.5); // Raised from 2.0
        text3Mesh.castShadow = true;
        this.scene.add(text3Mesh);
        this.textMeshes.push({ mesh: text3Mesh, baseY: 3.2, scale: 1 });

        // Text 4: "khóa luận tốt nghiệp!" (with diacritics)
        const text4Geometry = new TextGeometry('khoa luan tot nghiep!', {
            font: font,
            size: 0.32, // Increased from 0.25
            height: 0.12,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.025,
            bevelSize: 0.015,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text4Geometry.center();

        const text4Mesh = new THREE.Mesh(text4Geometry, materials[2]);
        text4Mesh.position.set(0, 2.85, -2.5); // Raised from 1.7
        text4Mesh.castShadow = true;
        this.scene.add(text4Mesh);
        this.textMeshes.push({ mesh: text4Mesh, baseY: 2.85, scale: 1 });

        // Text 5: "Mọi điều tốt đẹp sẽ đến với mày" (with diacritics)
        const text5Geometry = new TextGeometry('Moi dieu tot dep se den voi may!', {
            font: font,
            size: 0.25, // Increased from 0.2
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text5Geometry.center();

        const text5Mesh = new THREE.Mesh(text5Geometry, materials[2]);
        text5Mesh.position.set(0, 2.4, -2.5); // Raised from 1.3
        text5Mesh.castShadow = true;
        this.scene.add(text5Mesh);
        this.textMeshes.push({ mesh: text5Mesh, baseY: 2.4, scale: 1 });

        // Add point lights to illuminate the text
        this.addTextLights();
    }

    addTextLights() {
        // Golden light for "Merry Christmas"
        const light1 = new THREE.PointLight(0xffd700, 2, 5);
        light1.position.set(0, 5.0, -1);
        this.scene.add(light1);

        // Pink/red light for name
        const light2 = new THREE.PointLight(0xff3366, 1.5, 4);
        light2.position.set(0, 4.0, -1);
        this.scene.add(light2);

        // Cyan/blue light for message
        const light3 = new THREE.PointLight(0xaaddff, 1.2, 4);
        light3.position.set(0, 2.8, -1);
        this.scene.add(light3);
    }

    update(deltaTime, elapsedTime) {
        if (!this.loaded) return;

        // Enhanced floating and pulsing animation
        this.textMeshes.forEach((textObj, index) => {
            const mesh = textObj.mesh;
            const offset = index * 0.7;

            // Floating animation (more pronounced)
            const floatAmount = Math.sin(elapsedTime * 0.8 + offset) * 0.08;
            mesh.position.y = textObj.baseY + floatAmount;

            // Rotation animation (more dynamic)
            mesh.rotation.y = Math.sin(elapsedTime * 0.5 + offset) * 0.08;
            mesh.rotation.z = Math.sin(elapsedTime * 0.4 + offset) * 0.02;

            // Scale pulsing for extra effect
            const scaleAmount = 1 + Math.sin(elapsedTime * 1.5 + offset) * 0.05;
            mesh.scale.set(scaleAmount, scaleAmount, scaleAmount);

            // Emissive intensity pulsing for glow effect
            if (mesh.material.emissive) {
                const baseIntensity = index === 0 ? 1.2 : (index === 1 ? 1.0 : 0.9);
                const pulseIntensity = Math.sin(elapsedTime * 2 + offset) * 0.3;
                mesh.material.emissiveIntensity = baseIntensity + pulseIntensity;
            }
        });
    }
}

export default GreetingText;
