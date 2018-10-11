// class Main extends egret.DisplayObjectContainer {
//     public constructor() {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

//     }
//     public onAddToStage() {
//         var bg: egret.Shape = new egret.Shape();
//         bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
//         bg.graphics.beginFill(0x823111);
//         bg.graphics.endFill();
//         this.addChild(bg);

//         var tx: egret.TextField = new egret.TextField();
//         tx.text = "显示文本多少";
//         tx.size = 30;
//         tx.x = (this.width - tx.width) / 2;
//         tx.y = (this.height - tx.height) / 2;
//         this.addChild(tx);
//     }
// }

class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.MBP, this);
    }
    public MBP() {
        var bg: egret.Shape = new egret.Shape();
        bg.graphics.drawRect(0, 0, this.stage.stageHeight, this.stage.stageWidth);
        bg.graphics.beginFill(0x543218);
        bg.graphics.endFill();
        this.addChild(bg);

        var tx: egret.TextField = new egret.TextField();
        tx.size = 40;
        tx.text = "白鹭引擎";
        tx.x = (this.height - tx.width) / 2;
        tx.y = (this.width - tx.height) / 2;
        this.addChild(tx);
    }
}
// 自己写的一个使用tx(typescript来写的一个helloworld简单显示文本类型)2018.10.11



