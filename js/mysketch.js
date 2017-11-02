if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
var camera, scene, renderer;
var geometry, material, mesh;

function setup() {

	var W = window.innerWidth, H = window.innerHeight;
	renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true } );
	renderer.autoClearColor = false;

	renderer.setSize( W, H );
	document.body.appendChild( renderer.domElement );

	camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
	camera.position.z = 500;

	scene = new THREE.Scene();
					
	geometry = new THREE.TorusGeometry(59.23, 67.86, 8, 15, 21.99);
	material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, side: THREE.BackSide});
	mesh = new THREE.Mesh(geometry, material);
	mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.42;
	scene.add(mesh);
}

function draw() {
	requestAnimationFrame( draw );
	mesh.position.x = Math.sin( Date.now() * 0.001 ) * 50;  
	mesh.rotation.z = Date.now() * 0.0005;
	renderer.render( scene, camera );

}