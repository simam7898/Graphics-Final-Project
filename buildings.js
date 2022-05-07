import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
//import { main } from "./main.js";

let towerObCtr = 0;

export class tower extends GrObject {
    constructor(x,y,z) {
        let twr = new T.Group; 

        let geo = new T.CylinderGeometry( 1, 1, 10, 16 );
        let mat = new T.MeshStandardMaterial( {
            color: 0x964B00,
            map: new T.TextureLoader().load("../for_students/images/chimney1.jpg"),
            bumpMap: new T.TextureLoader().load("../for_students/images/chimney1.jpg")

        } );
        let cyl = new T.Mesh( geo, mat );
        
        cyl.position.set(-15,5,0);
        twr.add(cyl);
        //twr.position.set(-15,5,0);

        let b1 = new T.BoxBufferGeometry(6,6,6);
        let bm = new T.MeshBasicMaterial( {
            color: 0xD2B48C
        });
        let bod = new T.Mesh(b1, bm);
        bod.position.set(-15,2.5,2);
        twr.add(bod);

        /*
        const workTexture = new T.MeshStandardMaterial({
            map: new T.TextureLoader().load("../images/brick.jpg"),

            bumpMap: new T.TextureLoader().load("../images/brick.jpg"),
            //bumpScale: 0.5

        });
        let metalT = new Mesh(new T.BoxGeometry(2, 2, 2), workTexture);
        */

        let r1 = new T.ConeGeometry( 5, 5, 12 );
        let rmat = new T.MeshStandardMaterial( {
            color: 0x964B00,
            map: new T.TextureLoader().load("../for_students/images/roof.jpg"),
            bumpMap: new T.TextureLoader().load("../for_students/images/roof.jpg")
        } );
        let roof = new T.Mesh( r1, rmat);
        roof.position.set(-15,8,2);
        twr.add( roof );

        let d1 = new T.BoxBufferGeometry(.5,4,2);
        let dmat = new T.MeshBasicMaterial({
            map: new T.TextureLoader().load("../for_students/images/door.jpg")
        })
        let door = new T.Mesh(d1, dmat);
        door.position.set(-12,2,1.5);
        twr.add(door);

        let w1 = new T.BoxBufferGeometry(2,2,.5);
        let wmat = new T.MeshBasicMaterial({
            map: new T.TextureLoader().load("../for_students/images/window.jpg")
        })
        let window = new T.Mesh(w1, wmat);
        window.position.set(-15, 3, 5);
        twr.add(window);

        super(`tower-${towerObCtr++}`, twr);
        this.highlighted = true;
    }
}

let roadObCtr = 0;

export class road extends GrObject {
    constructor() {
        let rd = new T.Group; 

        let rod1 = new T.BoxBufferGeometry(40,.3,8);
        let rmat = new T.MeshStandardMaterial({
            map: new T.TextureLoader().load("../for_students/images/gravel.jpg"),
            bumpMap: new T.TextureLoader().load("../for_students/images/gravel.jpg"),
        })
        let road1 = new T.Mesh(rod1, rmat);
        rd.position.set(0,0,2);
        rd.add(road1);

        let rod2 = new T.BoxBufferGeometry(25,.3,8);
        let road2 = new T.Mesh(rod2, rmat);
        road2.rotateY(Math.PI/2);
        road2.position.set(16, 0, -10);
        rd.add(road2);

        super(`road-${roadObCtr++}`, rd);
        this.highlighted = true; 
    }
}



import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";
import { Mesh } from "../libs/CS559-Three/build/three.module.js";

export class shader extends GrObject {
    constructor(params = {}) {
      
      let shader1 = shaderMaterial("../images/shader.vs", "../images/shader.vs");
      let lit = new Mesh(new T.BoxGeometry(5,3,.1), shader1);
      super("light", lit);
      this.lit = lit;
      this.highlighted = true;
    }
  
  }