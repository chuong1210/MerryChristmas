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
        // Friendly, readable materials with soft colors
        const materials = [
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffd700,
                emissiveIntensity: 0.6,
                metalness: 0.3,
                roughness: 0.4
            }),
            new THREE.MeshStandardMaterial({
                color: 0xffccdd,
                emissive: 0xff99aa,
                emissiveIntensity: 0.5,
                metalness: 0.3,
                roughness: 0.5
            }),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xccddff,
                emissiveIntensity: 0.4,
                metalness: 0.2,
                roughness: 0.5
            })
        ];

        // ========== Title: "Merry Christmas" ==========
        const text1Geometry = new TextGeometry('Merry Christmas', {
            font: font,
            size: 0.7,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.04,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text1Geometry.center();
        const text1Mesh = new THREE.Mesh(text1Geometry, materials[0]);
        text1Mesh.position.set(0, 5.2, -2.5);
        text1Mesh.castShadow = true;
        this.scene.add(text1Mesh);
        this.textMeshes.push(text1Mesh);

        // ========== Name: "Truong My Hoa" ==========
        const text2Geometry = new TextGeometry('Truong My Hoa', {
            font: font,
            size: 0.55,
            height: 0.18,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text2Geometry.center();
        const text2Mesh = new THREE.Mesh(text2Geometry, materials[1]);
        text2Mesh.position.set(0, 4.3, -2.5);
        text2Mesh.castShadow = true;
        this.scene.add(text2Mesh);
        this.textMeshes.push(text2Mesh);

        // ========== Message: "Chuc may Giang sinh an lanh" ==========
        const text3Geometry = new TextGeometry('Chuc may Giang sinh an lanh', {
            font: font,
            size: 0.35,
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
        text3Mesh.position.set(0, 3.3, -2.5);
        text3Mesh.castShadow = true;
        this.scene.add(text3Mesh);
        this.textMeshes.push(text3Mesh);

        // Add soft ambient lighting for text
        this.addTextLights();
    }

    addTextLights() {
        // Soft, subtle lights for better readability
        const light1 = new THREE.PointLight(0xffffff, 0.8, 6);
        light1.position.set(0, 4.5, -1);
        this.scene.add(light1);

        const light2 = new THREE.PointLight(0xffffff, 0.6, 5);
        light2.position.set(2, 3.5, -1.5);
        this.scene.add(light2);

        const light3 = new THREE.PointLight(0xffffff, 0.6, 5);
        light3.position.set(-2, 3.5, -1.5);
        this.scene.add(light3);
    }

    update(deltaTime, elapsedTime) {
        // Text is static - no animations
    }
}

export default GreetingText;
