
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { Vector2, Vector3 } from "../libs/CS559-Three/build/three.module.js";

function degreesToRadians(deg) {
  return (deg * Math.PI) / 180;
}

let theta;

let forkliftObCtr = 0;

const rot = Math.PI/2;
let zpos = new T.Vector3(-15,0,11.5);

// A SeeSaw
/**
 * @typedef forkliftProperties
 * @type {object}
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [z=0]
 * @property {number} [size=1]
 */
export class forklift extends GrObject {
  // 
  /**
   *  @param {forkliftProperties} params
   */
  constructor(x, y, z) {
    let forklift = new T.Group;
    
    let lifts = new T.Group;

        let liftt1 = new T.BoxBufferGeometry(3,.2,1);
        let lift1 = new T.Mesh(
          liftt1, 
          new T.MeshStandardMaterial({color: 0xA47A00})
        )
        lift1.position.set(5, .1, -5.5);
          
        lifts.add(lift1);    
      
        let liftt2 = new T.BoxBufferGeometry(3,1.6,.2)
        let lift2 = new T.Mesh(
          liftt2,
          new T.MeshStandardMaterial({color: 0xA47A00})
        )
          lift2.position.set(5, .8, -6);
        lifts.add(lift2);
        
        let lconn = new T.BoxBufferGeometry(2, .2, .3);
        let lcon = new T.Mesh( 
          lconn,
          new T.MeshStandardMaterial({color: 0xA47A00})
        )
        lcon.position.set(5,1,-6.2);
        lifts.add(lcon);

    let body = new T.Group;
          
          let bodyy1 = new T.BoxBufferGeometry(1.8,2,1.5);
          let body1 = new T.Mesh(
            bodyy1,
            new T.MeshStandardMaterial({
              map: new T.TextureLoader().load("../for_students/images/silver.jpg")
            })
          )
          body1.position.set(5, 1.8, -7.8);
          
          let bodyy2 = new T.BoxBufferGeometry(2, 1.5, 4);
          let body2 = new T.Mesh( 
            bodyy2,
            new T.MeshStandardMaterial({
              map: new T.TextureLoader().load("../for_students/images/silver.jpg")
            })
          )
          body2.position.set(5, 1, -8.3);

          lifts.add(body1);
          lifts.add(body2);

      let tires = new T.Group;
            
            let tr1 = new T.BoxBufferGeometry(.5,.75,.75);
            let t1 = new T.Mesh(
              tr1,
              new T.MeshStandardMaterial({color: 0x000000})
            )
            t1.position.set(6, .3, -7);

            tires.add(t1);

            let tr2 = new T.BoxBufferGeometry(.5,.75,.75);
            let t2 = new T.Mesh(
              tr2,
              new T.MeshStandardMaterial({color: 0x000000})
            )
            t2.position.set(4, .3, -7);

            tires.add(t2);

            let tr3 = new T.BoxBufferGeometry(.5,.75,.75);
            let t3 = new T.Mesh(
              tr3,
              new T.MeshStandardMaterial({color: 0x000000})
            )
            t3.position.set(4, .3, -9.5);

            tires.add(t3);

            
            let tr4 = new T.BoxBufferGeometry(.5,.75,.75);
            let t4 = new T.Mesh(
              tr4,
              new T.MeshStandardMaterial({color: 0x000000})
            )
            t4.position.set(6, .3, -9.5);

            tires.add(t4);

      lifts.add(tires);

    forklift.add(lifts); 
    

    super(`Forklift-${forkliftObCtr++}`, forklift);
    this.forklift = forklift;

    this.highlighted = true;
    this.rideable = forklift;
  } 

  
  stepWorld(delta) {
    theta = delta/1000;
   // let zpos = new T.Vector3(-15,0,10);
   

        //this puts it forward in z direciton
          if(this.forklift.position.z < zpos.z) {
            this.forklift.position.z += 2*theta;
            //console.log(this.forklift.position.z);
          }
        
        
          //console.log(delta);
          //this stops z movement and starts x movmeent 
            if(this.forklift.position.z >= zpos.z) {

              //console.log(delta);
              this.forklift.position.z = 11.5; 

              if(this.forklift.position.x > zpos.x) {

                //this.forklift.rotateY(rot);
                
                              this.forklift.position.x -= 2*theta;
               // console.log(this.forklift.position.x);
              }

            }
  
          
            //this is supposed to stop neg x movement and turn into positve
            //x movement 
              if(this.forklift.position.x <= zpos.x) {

               this.forklift.position.x += 2*theta;
               // console.log(this.forklift.position.x); 
               
            }
            //console.log(delta);
            
    
}

}


let quadcopterObCtr = 0;

let renderer = new T.WebGLRenderer();

let camera = new T.PerspectiveCamera(
    40,
    renderer.domElement.width / renderer.domElement.height,
    1,
    1000
);

camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 0, 0);

let lastTimestamp;
let d = 1;

export class quadcopter extends GrObject {
    
    constructor(x, y, z) {
        let quadcopter = new T.Group;

        let qc = new T.Group();

        let quadBody = new T.BoxGeometry(.5, .25, 1.5);
        let quadMesh = new T.Mesh(
            quadBody, 
            new T.MeshStandardMaterial({color: 0xfffffff})
        )
        quadMesh.position.y = 1.5;
        qc.add(quadMesh);
        
        let quadFront = new T.BoxGeometry(.3, .25, 1.75);
        let quadfMesh = new T.Mesh(
            quadFront,
            new T.MeshStandardMaterial({color: 0xffffff})
        )
        quadfMesh.position.y = 1.5;
        qc.add(quadfMesh);
        
        
        
        let quadCopters = new T.BoxGeometry(.1, .5, .1);
        let quadCmesh = new T.Mesh(
            quadCopters, 
            new T.MeshStandardMaterial({color: 0x000000})
        )
        quadCmesh.position.y = 1.6;
        quadCmesh.position.x = .2;
        quadCmesh.position.z = .8;
        qc.add(quadCmesh);
        
        
        let quadCopters2 = new T.BoxGeometry(.1, .5, .1);
        let quadCmesh2 = new T.Mesh(
            quadCopters2, 
            new T.MeshStandardMaterial({color: 0x000000})
        )
        quadCmesh2.position.y = 1.6;
        quadCmesh2.position.x = -.2;
        quadCmesh2.position.z = .8;
        qc.add(quadCmesh2);
        
        
        let quadCopters3 = new T.BoxGeometry(.1, .5, .1);
        let quadCmesh3 = new T.Mesh(
            quadCopters3, 
            new T.MeshStandardMaterial({color: 0x000000})
        )
        quadCmesh3.position.y = 1.6;
        quadCmesh3.position.x = -.2;
        quadCmesh3.position.z = -.8;
        qc.add(quadCmesh3);
        
        
        let quadCopters4 = new T.BoxGeometry(.1, .5, .1);
        let quadCmesh4 = new T.Mesh(
            quadCopters4, 
            new T.MeshStandardMaterial({color: 0x000000})
        )
        quadCmesh4.position.y = 1.6;
        quadCmesh4.position.x = .2;
        quadCmesh4.position.z = -.8;
        qc.add(quadCmesh4);
        
            let blade1 = new T.BoxGeometry(.1, .01, .5);
            let blde1 = new T.Mesh(
                blade1,
                new T.MeshStandardMaterial({color: 0xFFD400})
            )
            blde1.position.y = 1.85;
            blde1.position.x = .2;
            blde1.position.z = .8;
            qc.add(blde1);
        
            let blade2 = new T.BoxGeometry(.1, .01, .5);
            let blde2 = new T.Mesh(
                blade2,
                new T.MeshStandardMaterial({color: 0xFFD400})
            )
            blde2.position.y = 1.85;
            blde2.position.x = -.2;
            blde2.position.z = .8;
            qc.add(blde2);
        
        
            let blade3 = new T.BoxGeometry(.1, .01, .5);
            let blde3 = new T.Mesh(
                blade3,
                new T.MeshStandardMaterial({color: 0xFFD400})
            )
            blde3.position.y = 1.85;
            blde3.position.x = -.2;
            blde3.position.z = -.8;
            qc.add(blde3);
        
            let blade4 = new T.BoxGeometry(.1, .01, .5);
            let blde4 = new T.Mesh(
                blade4,
                new T.MeshStandardMaterial({color: 0xFFD400})
            )
            blde4.position.y = 1.85;
            blde4.position.x = .2;
            blde4.position.z = -.8;
            qc.add(blde4);
        
        
        
        qc.add(quadMesh);
        qc.add(quadfMesh);
        qc.add(quadCmesh);
        qc.add(quadCmesh2);
        qc.add(quadCmesh3);
        qc.add(quadCmesh4);
        qc.add(blde1);
        qc.add(blde2);
        qc.add(blde3);
        qc.add(blde4);
        
        qc.rotateY(Math.PI/4);
        
        quadcopter.add(qc);

        super(`Quadcopter-${quadcopterObCtr++}`, quadcopter);
        this.qc = qc;
        this.quadcopter = quadcopter;
        this.blde1 = blde1;
        this.blde2 = blde2;
        this.blde3 = blde3;
        this.blde4 = blde4;
        this.highlighted = true;
        this.rideable = qc;
        
        // let lastTimestamp;
        // // animation loop
        // function animateLoop(timestamp) {
        //     //** EXAMPLE CODE - STUDENT SHOULD REPLACE */
        //     // move in a circle
        //     let theta = timestamp / 1000;
        //     let x = 3 * Math.cos(theta);
        //     let z = 3 * Math.sin(theta);
        //     qc.position.x = x;
        //     qc.position.z = z;
        //     qc.rotateY(Math.PI + .002);


        //     let timeDelta = 0.05 * (lastTimestamp ? timestamp - lastTimestamp : 0);
        //     lastTimestamp = timestamp;

        //     blde1.rotateOnWorldAxis(new T.Vector3(0,1,0), timeDelta);
        //     blde2.rotateOnWorldAxis(new T.Vector3(0,1,0), timeDelta);
        //     blde3.rotateOnWorldAxis(new T.Vector3(0,1,0), timeDelta);
        //     blde4.rotateOnWorldAxis(new T.Vector3(0,1,0), timeDelta);
        
        //     renderer.render(quadcopter, camera);
        //     window.requestAnimationFrame(animateLoop);
        // }
        // window.requestAnimationFrame(animateLoop);

    }

        
    stepWorld(delta) {
        theta = delta / 100;
        // console.log(this.qc.position);
        if(this.qc.position.y > 4) {
            d = -1;
        } else if(this.qc.position.y < 0) {
            d = 1;
        }
        this.qc.position.y += d * .05* theta;

       // this.qc.position.x = 3* Math.cos(theta);
       // this.qc.position.z = 3* Math.sin(theta);
        //console.log(this.qc.position.x);
       // this.qc.rotateY(Math.PI + .005);

        let timeDelta = 0.5 * (lastTimestamp ? delta - lastTimestamp : 0);
        lastTimestamp = delta;

        this.blde1.rotateY(theta*2);
        this.blde2.rotateY(theta*2);
        this.blde3.rotateY(theta*2);
        this.blde4.rotateY(theta*2);

    }
}
