﻿//var container;
//var camera, scene, renderer;
//var mouseX = 0, mouseY = 0;
//var windowHalfX = window.innerWidth / 2;
//var windowHalfY = window.innerHeight / 2;
//var object;
//init();
//animate();
//function init() {
//    container = document.createElement('div');
//    document.body.appendChild(container);
//    camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 2000);
//    camera.position.z = 250;
//    // scene
//    scene = new THREE.Scene();
//    var ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
//    scene.add(ambientLight);
//    var pointLight = new THREE.PointLight(0xffffff, 0.8);
//    camera.add(pointLight);
//    scene.add(camera);
//    scene.background = new THREE.Color(0xffffff);

//    // manager
//    function loadModel() {
//        object.traverse(function (child) {
//            if (child.isMesh) child.material.map = texture;
//        });
//        object.position.y = - 90;
//        object.rotateZ(45.5);
//        object.rotateY(45);
//        // object.rotateX(45);
//        scene.add(object);
//    }
//    var manager = new THREE.LoadingManager(loadModel);
//    manager.onProgress = function (item, loaded, total) {
//        console.log(item, loaded, total);
//    };
//    // texture
//    var textureLoader = new THREE.TextureLoader(manager);
//    var texture = textureLoader.load('./snow.png');
//    // model
//    function onProgress(xhr) {
//        if (xhr.lengthComputable) {
//            var percentComplete = xhr.loaded / xhr.total * 100;
//            console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
//        }
//    }
//    function onError() { }
//    var loader = new THREE.OBJLoader(manager);
//    loader.load('./snow.obj', function (obj) {
//        object = obj;
//    }, onProgress, onError);
//    //
//    renderer = new THREE.WebGLRenderer();
//    renderer.setPixelRatio(window.devicePixelRatio);
//    renderer.setSize(window.innerWidth, window.innerHeight);
//    container.appendChild(renderer.domElement);
//    document.addEventListener('mousemove', onDocumentMouseMove, false);
//    //
//    window.addEventListener('resize', onWindowResize, false);
//}
//function onWindowResize() {
//    windowHalfX = window.innerWidth / 2;
//    windowHalfY = window.innerHeight / 2;
//    camera.aspect = window.innerWidth / window.innerHeight;
//    camera.updateProjectionMatrix();
//    renderer.setSize(window.innerWidth, window.innerHeight);
//}
//function onDocumentMouseMove(event) {
//    mouseX = (event.clientX - windowHalfX) / 20;
//    mouseY = (event.clientY - windowHalfY) / 20;
//}
////
//function animate() {
//    requestAnimationFrame(animate);
//    render();
//}
//function render() {
//    camera.position.x += (mouseX - camera.position.x) * .05;
//    camera.position.y += (- mouseY - camera.position.y) * .05;
//    camera.lookAt(scene.position);
//    renderer.render(scene, camera);
//}