// class Main extends egret.DisplayObjectContainer {
//     public constructor() {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.MBP, _this);
        return _this;
    }
    Main.prototype.MBP = function () {
        var bg = new egret.Shape();
        bg.graphics.drawRect(0, 0, this.stage.stageHeight, this.stage.stageWidth);
        bg.graphics.beginFill(0x543218);
        bg.graphics.endFill();
        this.addChild(bg);
        var tx = new egret.TextField();
        tx.size = 40;
        tx.text = "白鹭引擎";
        tx.x = (this.height - tx.width) / 2;
        tx.y = (this.width - tx.height) / 2;
        this.addChild(tx);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map