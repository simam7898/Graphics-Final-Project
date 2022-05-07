



import { forklift, quadcopter } from "./vehicles.js";
import { snow, tree, snowman, load, bush, load2 } from "./natural.js";
import { road, tower, shader } from "./buildings.js";

export function main(world) {

    let l2 = new load2();
    world.add(l2);
  
    let b01 = new bush();
    b01.setPos(0,1,-1);
    world.add(b01);
    let b0 = new bush();
    b0.setPos(0,1,1);
    world.add(b0);
    let b1 = new bush();
    b1.setPos(0,1,3);
    world.add(b1);
    let b2 = new bush();
    b2.setPos(-2,1,3);
    world.add(b2);
    let b3 = new bush();
    b3.setPos(-4,1,3);
    world.add(b3);
    let b4 = new bush();
    b4.setPos(-6,1,3);
    world.add(b4);
    let b5 = new bush();
    b5.setPos(0,1,-3);
    world.add(b5);

    let sh1 = new shader();
    sh1.setPos(6,2,-8);
    world.add(sh1);

    let sh2 = new shader();
    sh2.setPos(2,2,-8);
    world.add(sh2);

    let sh3 = new shader();
    sh3.setPos(2,4,-8);
    world.add(sh3);

    let sh4 = new shader();
    sh4.setPos(6,4,-8);
    world.add(sh4);

  let frklft = new forklift(15,0,0);
  frklft.setPos(8,.2, -8);
  frklft.setScale(1.3);
  world.add(frklft);

  let sm = new snowman(0,0,0);
  sm.setScale(.5);
  sm.setPos(-7, 6.5, 13);

  let sm2 = new snowman();
  sm2.setScale(.3);
  sm2.setPos(-5,4.5, -13);

  world.add(sm);
  world.add(sm2);

  let quadcop = new quadcopter();
  quadcop.setScale(2);
  quadcop.setPos(10, 5, 10);
  world.add(quadcop); 
  
  world.add(new load());


  world.add(new tower(-20,0,0));

  world.add(new snow());

  world.add(new road());

      let t1 = new tree();
      t1.setPos(-15,0,15);
      world.add(t1);
      
      let t2 = new tree(0,0,0);
      t2.setPos(-18,1.2,10);
      world.add(t2);
      
      let t3 = new tree();
      t3.setPos(-12,.8,10);
      world.add(t3);

      let t7 = new tree();
      t7.setPos(-12, 1.3, 19);
      world.add(t7);

      let t4 = new tree();
      t4.setPos(-10, .9, -8);
      world.add(t4);

      let t5 = new tree();
      t5.setPos(-14, 1.2, -6);
      world.add(t5);

      let t6 = new tree();
      t6.setPos(-14, .6, -12);
      world.add(t6);

      let t8 = new tree();
      t8.setPos(-10,.9,-15);
      world.add(t8);

}