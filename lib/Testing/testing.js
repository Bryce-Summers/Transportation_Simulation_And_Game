// Generated by CoffeeScript 1.11.1

/*
 * Testing Routines.
 *
 * Written by Bryce Summers on 12 - 16 - 2016.
 */


/*
 * Testing Axis Aligned Bounding Box.
 */

(function() {
  TSAG.Testing = (function() {
    function Testing() {}

    Testing.prototype.test_AABB = function() {
      var AABB, direction, geometry, i, inter, mesh, origin, ray, ref, scene, x, y;
      scene = new THREE.Scene();
      geometry = new THREE.Geometry();
      y = 0;
      for (x = i = 0; i <= 10; x = ++i) {
        mesh = this.test_mesh(new THREE.Vector3(x * 3 + 0, y * 3 + 1, 0), new THREE.Vector3(x * 3 + -1, y * 3 - 1, 0), new THREE.Vector3(x * 3 + 1, y * 3 - 1, 0));
        scene.add(mesh);
      }
      AABB = new TSAG.AABB(scene, {
        val: 'x',
        dim: 2
      });
      origin = new THREE.Vector3(0, 0, -10);
      direction = new THREE.Vector3(0, 0, 1);
      ray = new THREE.Ray(origin, direction);
      ref = AABB.collision_query(ray), mesh = ref[0], inter = ref[1];
      console.log(mesh);
      return console.log(inter);
    };

    Testing.prototype.test_mesh = function(a, b, c) {
      var geometry, material, mesh;
      geometry = new THREE.Geometry();
      geometry.vertices.push(a, b, c);
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      material = new THREE.MeshBasicMaterial({
        color: 0xffff00
      });
      return mesh = new THREE.Mesh(geometry, material);
    };

    return Testing;

  })();

}).call(this);
