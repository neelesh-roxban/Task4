import SlotItems from "./SlotItems";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   @property(cc.Slider)
   slider:cc.Slider;
   
   @property(cc.Node)
   sliderItems:cc.Node[]=[];

   @property(SlotItems)
   slotItems:SlotItems[]=[];
   
  


   Slider(event)
   { console.log(event.progress);
    if(event.progress>0&&event.progress<=0.3)
    {  
        this.sliderItems[0].color= new cc.Color(255,255,255);
        this.sliderItems[1].color= new cc.Color(128,184,255);
        this.sliderItems[2].color= new cc.Color(128,184,255);
        this.slotItems[0].isSelected=true;
        this.slotItems[1].isSelected=false;
        this.slotItems[2].isSelected=false;

    }
    if(event.progress>0.3&&event.progress<=0.6)
    {
        this.sliderItems[1].color= new cc.Color(255,255,255)
        this.sliderItems[0].color= new cc.Color(128,184,255)
        this.sliderItems[2].color= new cc.Color(128,184,255)
        this.slotItems[1].isSelected=true;
        this.slotItems[0].isSelected=false;
        this.slotItems[2].isSelected=false;


        
    }
    if(event.progress>0.6&&event.progress<=1)
    {

        this.sliderItems[2].color= new cc.Color(255,255,255)
        this.sliderItems[0].color= new cc.Color(128,184,255)
        this.sliderItems[1].color= new cc.Color(128,184,255)
        this.slotItems[2].isSelected=true;
        this.slotItems[1].isSelected=false;
        this.slotItems[0].isSelected=false;
       
        
    }
    
   }

   fire()
   { 
       for(var i=0;i<this.slotItems.length;i++)
       {
           if(this.slotItems[i].isSelected==true)
           {
               this.slotItems[i].fire();
           }
       }

   }
}
