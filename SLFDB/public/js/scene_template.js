document.addEventListener('DOMContentLoaded', function () {
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webglviewer').appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000000);
    camera.position.set(0, 0, 0);
    camera.lookAt(10, 0, 0);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(camera.position.x + 0.1, camera.position.y, camera.position.z);
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
          const geometry = new THREE.SphereBufferGeometry(3, 64, 64);
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

    createMesh(imagePath);
    animate();

    const resized = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resized, false);
  });