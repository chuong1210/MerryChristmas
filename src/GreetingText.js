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
        text1Mesh.position.set(0, 4.5, -2.5);
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
        text2Mesh.position.set(0, 3.6, -2.5);
        text2Mesh.castShadow = true;
        this.scene.add(text2Mesh);
        this.textMeshes.push(text2Mesh);

        // ========== Line 1: "Chuc cho may co mot" ==========
        const text3Geometry = new TextGeometry('Chuc cho may co mot', {
            font: font,
            size: 0.28,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text3Geometry.center();
        const text3Mesh = new THREE.Mesh(text3Geometry, materials[2]);
        text3Mesh.position.set(0, 2.8, -2.5);
        text3Mesh.castShadow = true;
        this.scene.add(text3Mesh);
        this.textMeshes.push(text3Mesh);

        // ========== Line 2: "giang sinh an lanh" ==========
        const text4Geometry = new TextGeometry('giang sinh an lanh', {
            font: font,
            size: 0.28,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text4Geometry.center();
        const text4Mesh = new THREE.Mesh(text4Geometry, materials[2]);
        text4Mesh.position.set(0, 2.45, -2.5);
        text4Mesh.castShadow = true;
        this.scene.add(text4Mesh);
        this.textMeshes.push(text4Mesh);

        // ========== Line 3: "Chuc m bao cao tot nghiep" ==========
        const text5Geometry = new TextGeometry('Chuc m bao cao tot nghiep', {
            font: font,
            size: 0.22,
            height: 0.08,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.015,
            bevelSize: 0.008,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text5Geometry.center();
        const text5Mesh = new THREE.Mesh(text5Geometry, materials[2]);
        text5Mesh.position.set(0, 2.0, -2.5);
        text5Mesh.castShadow = true;
        this.scene.add(text5Mesh);
        this.textMeshes.push(text5Mesh);

        // ========== Line 4: "that tot va mong" ==========
        const text6Geometry = new TextGeometry('that tot va mong', {
            font: font,
            size: 0.22,
            height: 0.08,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.015,
            bevelSize: 0.008,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text6Geometry.center();
        const text6Mesh = new THREE.Mesh(text6Geometry, materials[2]);
        text6Mesh.position.set(0, 1.7, -2.5);
        text6Mesh.castShadow = true;
        this.scene.add(text6Mesh);
        this.textMeshes.push(text6Mesh);

        // ========== Line 5: "moi dieu tot dep se den voi may" ==========
        const text7Geometry = new TextGeometry('moi dieu tot dep se den voi may', {
            font: font,
            size: 0.22,
            height: 0.08,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.015,
            bevelSize: 0.008,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text7Geometry.center();
        const text7Mesh = new THREE.Mesh(text7Geometry, materials[2]);
        text7Mesh.position.set(0, 1.4, -2.5);
        text7Mesh.castShadow = true;
        this.scene.add(text7Mesh);
        this.textMeshes.push(text7Mesh);

        // Add soft ambient lighting for text
        this.addTextLights();
    }

    addTextLights() {
        // Soft, subtle lights for better readability
        const light1 = new THREE.PointLight(0xffffff, 0.8, 6);
        light1.position.set(0, 3.5, -1);
        this.scene.add(light1);

        const light2 = new THREE.PointLight(0xffffff, 0.6, 5);
        light2.position.set(2, 2.5, -1.5);
        this.scene.add(light2);

        const light3 = new THREE.PointLight(0xffffff, 0.6, 5);
        light3.position.set(-2, 2.5, -1.5);
        this.scene.add(light3);
    }

    update(deltaTime, elapsedTime) {
        // Text is static - no animations
    }
}

export default GreetingText;
