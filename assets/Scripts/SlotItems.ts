// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
   public itemName:string="";


    @property
   public power:number=0;

   @property
   public isSelected:boolean=false;
   @property(cc.Label)
   fireText:cc.Label;

   public fire()
   {
     console.log(this.itemName,this.power);
     this.fireText.string=this.itemName+ " "+ "Fired"+" "+"Damage Done:"+this.power;

   }

    start () {

    }

}
