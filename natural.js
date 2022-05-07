import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";


function degreesToRadians(deg) {
  return (deg * Math.PI) / 180;
}

let treeObCtr = 0;
let d = 1; 
let count = 0;
let curPos; 
let theta;

export class tree extends GrObject {
    constructor(x,y,z) {
        let tre = new T.Group;

        let lf1 = new T.ConeBufferGeometry(2,2,10,8);
        let lfmat = new T.MeshBasicMaterial({
            map: new T.TextureLoader().load("../for_students/images/tree.jpg")
        })
        let leaf1 = new T.Mesh(lf1, lfmat);
        leaf1.position.set(0,5,0);
        tre.add(leaf1);

        let lf2 = new T.ConeBufferGeometry(1.75,2, 10, 8);
        let leaf2 = new T.Mesh(lf2, lfmat);
        leaf2.position.set(0, 6, 0);
        tre.add(leaf2);

        let lf3 = new T.ConeBufferGeometry(1.5,2, 10, 8);
        let leaf3 = new T.Mesh(lf3, lfmat);
        leaf3.position.set(0,7,0);
        tre.add(leaf3);

        let lf4 = new T.ConeBufferGeometry(1.25, 2, 10, 8);
        let leaf4 = new T.Mesh(lf4,lfmat);
        leaf4.position.set(0,8,0);
        tre.add(leaf4); 


        let brk = new T.CylinderBufferGeometry(.65,.65,5);
        let brkmat = new T.MeshBasicMaterial({
            map: new T.TextureLoader().load("../for_students/images/bark.jpg")
        })
        let bark = new T.Mesh(brk, brkmat);
        bark.position.set(0,2.5,0);
        tre.add(bark);
        
        tre.position.set(-15,0,15);
        curPos = tre.position.y; 

        super(`tree-${treeObCtr++}`, tre);
        this.highlighted = true;
        this.tre = tre; 
        this.rideable = tre;

    }

    stepWorld(delta) {
 
        count++; 

      //  console.log(d);
       // this.tre.position.z += d * 0.0001 * delta;
       if(count%2 == 0) {
           this.tre.rotateY(.0005*delta);
       } else if(count%2 == 1) {
           this.tre.rotateY(-.0005*delta);
       }


       theta = delta / 100;
       // console.log(this.qc.position);
       if(this.tre.position.y > 1) {
           d = -1;
       } else if(this.tre.position.y <= 0) {
           d = 1;
       }
       this.tre.position.y += d * .05* theta;
    }
}


let snowObCtr = 0;

export class snow extends GrObject {
    constructor() {
        let snw = new T.Group;
        
        let pth1 = new T.BoxBufferGeometry(40,1.2,16);
        let pmat = new T.MeshStandardMaterial({
            map: new T.TextureLoader().load("../for_students/images/snow.jpg"),
            bumpMap: new T.TextureLoader().load("../for_students/images/snow.jpg"),
    
        })  
        let path1 = new T.Mesh(pth1, pmat);
        path1.position.set(0,.55,14);
        snw.add(path1);

        let pth2 = new T.BoxBufferGeometry(32,1.2,18);
        let path2 = new T.Mesh(pth2, pmat);
        path2.position.set(-4, .55, -11);
        snw.add(path2);


        super(`snow-${snowObCtr++}`, snw);
        this.highlighted = true; 
    }
}

let snowmanObCtr = 0;

export class snowman extends GrObject {

    constructor(x,y,z) {
       let snwman = new T.Group;

        let body = new T.Group;

            let s1 = new T.SphereBufferGeometry(3, 20, 20);
            let bdy = new T.MeshStandardMaterial( {color: 0xE1FDFA});

                let body1 = new T.Mesh(
                    s1,
                    bdy
                )
                body1.position.set(0, -9, 0);
            body.add(body1)
           
                    let s2 = new T.SphereBufferGeometry(2.5, 20, 20);
                    let body2 = new T.Mesh(
                        s2,
                        bdy
                    )
                    body2.position.set(0, -5, 0);
            body.add(body2);


                    let s3 = new T.SphereBufferGeometry(1.5, 20, 20);
                    let body3 =new T.Mesh(
                        s3,
                        bdy
                    )
                    body3.position.set(0,-2,0);
            body.add(body3);


        let eyes = new T.Group;
            let ey;

            ey = new T.MeshStandardMaterial({color: 0x680101});
                

            let e1 = new T.SphereBufferGeometry(.2, 20, 20);
            let e2 = new T.SphereBufferGeometry(.2,20,20);

            let eye1 = new T.Mesh(e1, ey);
                eye1.position.set(-.4,-1,1.3);
            eyes.add(eye1);
            let eye2 = new T.Mesh(e2,ey);
                eye2.position.set(.4,-1, 1.3);
            eyes.add(eye2);


        let nose = new T.Group;

            let nos = new T.SphereBufferGeometry(.2, 20, 20);
            let nos2 = new T.SphereBufferGeometry(.15, 20,20);
            let nos3 = new T.SphereBufferGeometry(.1, 20, 20);

            let nos1 = new T.MeshStandardMaterial({color: 0xFF7400});

                let nose1 = new T.Mesh(nos, nos1);
                nose1.position.set(0, -1.5, 1.5);
            nose.add(nose1);
                let nose2 = new T.Mesh(nos2, nos1);
                nose2.position.set(0, -1.5, 1.7);
            nose.add(nose2);
                let nose3 = new T.Mesh(nos3, nos1);
                nose3.position.set(0,-1.5,1.85);
            nose.add(nose3);

        let mouths = new T.Group;

            let mouth = new T.SphereBufferGeometry(.2, 20,20);
            let mouth2 = new T.SphereBufferGeometry(.2, 20,20);
            let mouth3 = new T.SphereBufferGeometry(.2, 20,20);
            let mouth4 = new T.SphereBufferGeometry(.2,20,20);
            let mouth5 = new T.SphereBufferGeometry(.2,20,20);

            let m1 = new T.MeshStandardMaterial({color: 0x000000});
 

        
            let mouths1 = new T.Mesh(mouth, m1);
                mouths1.position.set(0, -2, 1.5);
            mouths.add(mouths1);
            let mouths2 = new T.Mesh(mouth2, m1);
                mouths2.position.set(-.35, -1.95, 1.5);
            mouths.add(mouths2);
            let mouths3 = new T.Mesh(mouth3, m1);
                mouths3.position.set(.35,-1.95,1.5);
            mouths.add(mouths3);
            let mouths4 = new T.Mesh(mouth4, m1);
                mouths4.position.set(.6,-1.85,1.5);
            mouths.add(mouths4);
            let mouths5 = new T.Mesh(mouth5, m1);
                mouths5.position.set(-.6,-1.85,1.5);
            mouths.add(mouths5);


        snwman.add(body);
        snwman.add(eyes);
        snwman.add(nose);
        snwman.add(mouths);

        snwman.position.set(15,6,0);
        snwman.rotateY(1.5);

        
        super(`Snowman-${snowmanObCtr++}`, snwman);
        this.highlighted = true;
        this.snwman = snwman;
        this.rideable = snwman;

    }
    
    stepWorld(delta) {
        this.snwman.rotateY(Math.PI/25);
        this.snwman.rotateZ(.001 * Math.cos(delta));
    }
    
}


let loadObCtr = 0;

export class load extends Loaders.FbxGrObject {
    constructor() {
        super({fbx: "../for_students/images/bear.fbx", norm: 2.0, name: "bear", callback: function(g) {console.log("Loaded:",g.objects[0].children.length)}});
        this.setScale(0.08, 0.08, 0.08);
        this.setPos(5, 1, -14);
        
        //this.setPos(params.x, params.y, params.z);
        this.highlighted = true;
        console.log(this);

        function normObject(obj, scale = 1.0, center = true, ground = true) {
            // since other bounding box things aren't reliable
            const box = new T.Box3();
            box.setFromObject(obj);
            // easier than vector subtract
            const dx = box.max.x - box.min.x;
            const dy = box.max.y - box.min.y;
            const dz = box.max.z - box.min.z;
            const size = Math.max(dx, dy, dz);
            const s = scale / size;
            obj.scale.set(s, s, s);
          
            if (center) {
              obj.translateX((-s * (box.max.x + box.min.x)) / 2);
              obj.translateZ((-s * (box.max.z + box.min.z)) / 2);
              if (!ground) {
                // only center Y if not grounding
                obj.translateY((-s * (box.max.y + box.min.y)) / 2);
              }
            }
            if (ground) {
              obj.translateY(-box.min.y * s);
            }
          }

        

    }

}

let bushObCtr = 0;
export class bush extends GrObject {
    constructor() {
        let bsh = new T.Group;

        let bsh1 = new T.BoxBufferGeometry(2,2,2);
        let bmat = new T.MeshStandardMaterial ({
            map: new T.TextureLoader().load("../for_students/images/bush.jpg"),
            bumpMap: new T.TextureLoader().load("../for_students/images/bush.jpg")
        })

        let snwcov1 = new T.BoxBufferGeometry(2, .1, 2);
        let scmat = new T.MeshBasicMaterial ({
             map: new T.TextureLoader().load("../for_students/images/snow.jpg"),
         })
         let snwcover = new T.Mesh(snwcov1, scmat);
         snwcover.position.set(15,2,15);
         bsh.add(snwcover);

        let bush1 = new T.Mesh(bsh1, bmat);
        bush1.position.set(15,1,15);
        bsh.add(bush1);


        super(`bush-${bushObCtr++}`, bsh);
        this.highlighted = true; 
        this.bsh = bsh;
    }

    stepWorld(delta) {
        theta = delta / 100;
        // console.log(this.qc.position);
        if(this.bsh.position.y > 1.5) {
            d = -1;
        } else if(this.bsh.position.y < 1) {
            d = 1;
        }
        this.bsh.position.y += d * .05* theta;
    }
}


export class load2 extends Loaders.FbxGrObject {
    constructor() {
        super({fbx: "../for_students/images/marching-dog.fbx", norm: 2.0, name: "load", callback: function(g) {console.log("Loaded:",g.objects[0].children.length)}});
        this.setScale(0.02, 0.02, 0.02);
        this.setPos(5, 1, 14);
        
        this.highlighted = true;
        console.log(this);
    }



}