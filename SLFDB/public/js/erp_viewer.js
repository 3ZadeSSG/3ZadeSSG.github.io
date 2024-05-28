const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('webglviewer').appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000000
        );

        camera.position.set(0, 0, 0);
        camera.lookAt(10, 0, 0);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.target.set(
            camera.position.x + 0.1,
            camera.position.y,
            camera.position.z
        );
        controls.rotateSpeed = -0.4;
        controls.enableDamping = true;
        controls.dampingFactor = 0.2;

        const loadingContainer = document.getElementById('loadingContainer');
        const loadingBar = document.getElementById('loadingBar');

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        const createMesh = (imagePath) => {
            const loader = new THREE.TextureLoader();
            loader.load(
                imagePath,
                (texture) => {
                    const material = new THREE.MeshBasicMaterial({
                        map: texture,
                    });
                    const geometry = new THREE.SphereBufferGeometry(3, 32, 32);
                    geometry.scale(-1, 1, 1);
                    const sphere = new THREE.Mesh(geometry, material);
                    sphere.position.set(0, 0, 0);
                    scene.add(sphere);
                    renderer.render(scene, camera);
                    loadingContainer.style.display = 'none';
                },
                (xhr) => {
                    // Update the loading bar
                    const percentage = (xhr.loaded / xhr.total) * 100;
                    loadingBar.style.width = `${percentage}%`;
                },
                (error) => {
                    console.error('An error occurred loading the texture', error);
                }
            );

            renderer.render(scene, camera);
        };

        createMesh('./public/images/f001.png');
        animate();

        const resized = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', resized, false);




        
/*
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('webglviewer').appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000000
);

camera.position.set(0, 0, 0);
camera.lookAt(10, 0, 0);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(
    camera.position.x + 0.1,
    camera.position.y,
    camera.position.z
);
controls.rotateSpeed = -0.4;
controls.enableDamping = true;
controls.dampingFactor = 0.2;

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

const createMesh = (imagePath) => {
    const loader = new THREE.TextureLoader();
    loader.load(imagePath, texture => {
        const material = new THREE.MeshBasicMaterial({
            map: texture,
        });
        const geometry = new THREE.SphereBufferGeometry(3, 32, 32);
        geometry.scale(-1, 1, 1);
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(0, 0, 0);
        scene.add(sphere);
        renderer.render(scene, camera);
    });

    renderer.render(scene, camera);
};

createMesh('./public/images/f001.png');
animate();

const resized = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', resized, false);
*/



/*
// Wait for the window to load
window.onload = function() {
    // Create the scene
    const scene = new THREE.Scene();
    
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 0.1);
    
    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewer').appendChild(renderer.domElement);
    
    // Add OrbitControls for navigation and zoom
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true; // Enable zoom functionality
    controls.zoomSpeed = 0.5; // Set zoom speed
    controls.rotateSpeed = 0.3;
    
    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('./public/images/f001.png', function(texture) {
        // Create a sphere and apply the texture
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
        const sphere = new THREE.Mesh(geometry, material);
        
        // Reverse the sphere geometry to make the inside visible
        sphere.geometry.scale(-1, 1, 1);
        
        // Add the sphere to the scene
        scene.add(sphere);
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
};
*/

