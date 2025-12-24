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
        // Material with gradient-like color and emissive properties
        const materials = [
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffd700,
                emissiveIntensity: 0.3,
                metalness: 0.5,
                roughness: 0.2
            }),
            new THREE.MeshStandardMaterial({
                color: 0xff6b6b,
                emissive: 0xff6b6b,
                emissiveIntensity: 0.4,
                metalness: 0.6,
                roughness: 0.3
            }),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffffff,
                emissiveIntensity: 0.2,
                metalness: 0.4,
                roughness: 0.3
            })
        ];

        // Text 1: "Merry Christmas"
        const text1Geometry = new TextGeometry('Merry Christmas', {
            font: font,
            size: 0.6,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });
        text1Geometry.center();

        const text1Mesh = new THREE.Mesh(text1Geometry, materials[0]);
        text1Mesh.position.set(0, 3.5, -2);
        text1Mesh.castShadow = true;
        this.scene.add(text1Mesh);
        this.textMeshes.push(text1Mesh);

        // Text 2: "Trương Mỹ Hoa"
        const text2Geometry = new TextGeometry('Truong My Hoa', {
            font: font,
            size: 0.5,
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
        text2Mesh.position.set(0, 2.7, -2);
        text2Mesh.castShadow = true;
        this.scene.add(text2Mesh);
        this.textMeshes.push(text2Mesh);

        // Text 3: "Chúc mày báo cáo"
        const text3Geometry = new TextGeometry('Chuc may bao cao', {
            font: font,
            size: 0.25,
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
        text3Mesh.position.set(0, 2.0, -2);
        text3Mesh.castShadow = true;
        this.scene.add(text3Mesh);
        this.textMeshes.push(text3Mesh);

        // Text 4: "khóa luận tốt nghiệp tuyệt vời!"
        const text4Geometry = new TextGeometry('khoa luan tot nghiep', {
            font: font,
            size: 0.25,
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
        text4Mesh.position.set(0, 1.7, -2);
        text4Mesh.castShadow = true;
        this.scene.add(text4Mesh);
        this.textMeshes.push(text4Mesh);

        // Text 5: "Mọi điều tốt đẹp sẽ đến với mày"
        const text5Geometry = new TextGeometry('Moi dieu tot dep se den voi may', {
            font: font,
            size: 0.2,
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
        text5Mesh.position.set(0, 1.3, -2);
        text5Mesh.castShadow = true;
        this.scene.add(text5Mesh);
        this.textMeshes.push(text5Mesh);
    }

    update(deltaTime, elapsedTime) {
        if (!this.loaded) return;

        // Gentle floating animation for all text meshes
        this.textMeshes.forEach((mesh, index) => {
            const offset = index * 0.5;
            mesh.position.y += Math.sin(elapsedTime * 0.5 + offset) * 0.0005;

            // Subtle rotation
            mesh.rotation.y = Math.sin(elapsedTime * 0.3 + offset) * 0.03;
        });
    }
}

export default GreetingText;
