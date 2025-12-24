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
                emissiveIntensity: 0.5,
                metalness: 0.3,
                roughness: 0.4
            }),
            new THREE.MeshStandardMaterial({
                color: 0xffccdd,
                emissive: 0xff99aa,
                emissiveIntensity: 0.4,
                metalness: 0.3,
                roughness: 0.5
            }),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xccddff,
                emissiveIntensity: 0.3,
                metalness: 0.2,
                roughness: 0.5
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
        text1Mesh.position.set(0, 5.0, -2.5);
        text1Mesh.castShadow = true;
        this.scene.add(text1Mesh);
        this.textMeshes.push(text1Mesh);

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
        text2Mesh.position.set(0, 4.0, -2.5);
        text2Mesh.castShadow = true;
        this.scene.add(text2Mesh);
        this.textMeshes.push(text2Mesh);

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
        text3Mesh.position.set(0, 3.2, -2.5);
        text3Mesh.castShadow = true;
        this.scene.add(text3Mesh);
        this.textMeshes.push(text3Mesh);

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
        text4Mesh.position.set(0, 2.85, -2.5);
        text4Mesh.castShadow = true;
        this.scene.add(text4Mesh);
        this.textMeshes.push(text4Mesh);

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
        text5Mesh.position.set(0, 2.4, -2.5);
        text5Mesh.castShadow = true;
        this.scene.add(text5Mesh);
        this.textMeshes.push(text5Mesh);

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
