
'use strict';
/* v0.8.9: generated electric/magic facility icons and demon realm art integrated */
(()=>{
const S=13, WORLD=9, SAVEKEY='wildcard_survival_v06';
const WORLD_ROWS=['~~~CC~~~~','~~CFFFC~~','~CFFGGFC~','~CFRGGGC~','~CFFRGGC~','~~CGGGHC~','~~~CHHCC~','~~~~CC~~~','~~~~~~~~~'];
const BIOMES={F:['深い森','木と食料を見つけやすい森','#456a4c'],G:['草原','見晴らしがよく採集に向いている','#749567'],R:['川辺','飲める川が流れる恵みの地','#598273'],C:['海岸','漂着物と砂がある。海水は飲めない','#b09b73'],H:['岩山','鉱石・石・火打石が豊富','#8a8881'],'~':['外海','いかだがなければ渡れない','#386b86']};
/* 現世と魔界のワールド定義。既存の現世セーブキーは変更しない。 */
const DEMON_WORLD=7;
const DEMON_ROWS=['VVDDDVV','VDMMMDV','VDOODDV','VDBDDBV','VDOODDV','VDMMMDV','VVDDDVV'];
Object.assign(BIOMES,{
 D:['魔瘴荒野','魔界の荒れた平原。魔木や魔鉱石を探せる','#714e6d'],
 B:['紅蓮沼','瘴気に満ちた沼地。危険な魔物が徘徊する','#86515e'],
 O:['黒曜山地','黒曜石と魔鉱石を多く産する険しい山地','#555160'],
 M:['魔樹林','魔木が群生する薄暗い森','#503b58'],
 V:['虚無海','黒い海。いかだがなければ進めない','#382b4c']
});
const DEMON_GATE_SURFACE={mortal:{wx:6,wy:2,x:9,y:4},demon:{wx:3,wy:6,x:6,y:5}};
const DEMON_CASTLE_POS={wx:3,wy:0,x:6,y:3};
const DEMON_TOWERS=[
 {id:'ember',name:'紅蓮の塔',boss:'blaze_duke',wx:1,wy:1,x:8,y:4},
 {id:'venom',name:'毒霧の塔',boss:'venom_count',wx:5,wy:1,x:4,y:8},
 {id:'void',name:'虚影の塔',boss:'void_seer',wx:1,wy:5,x:8,y:8},
 {id:'ruin',name:'断罪の塔',boss:'ruin_marshal',wx:5,wy:5,x:4,y:4}
];
function currentRealm(){return st?.realm||'mortal';}
function currentWorldSize(){return currentRealm()==='demon'?DEMON_WORLD:WORLD;}
function currentWorldRows(){return currentRealm()==='demon'?DEMON_ROWS:WORLD_ROWS;}
function fieldKey(x=st.wx,y=st.wy){return currentRealm()==='demon'?'demon|'+x+','+y:x+','+y;}
function currentVisited(){
 if(currentRealm()==='demon'){
   st.visitedDemon=st.visitedDemon||{};
   return st.visitedDemon;
 }
 st.visited=st.visited||{'4,4':true};return st.visited;
}
function demonProgress(){
 st.demon=st.demon||{towers:{},kingDefeated:false};
 st.demon.towers=st.demon.towers||{};return st.demon;
}
function towerInfo(id){return DEMON_TOWERS.find(t=>t.id===id)||null;}
function towerAt(wx,wy){return DEMON_TOWERS.find(t=>t.wx===wx&&t.wy===wy)||null;}
function clearedTowerCount(){return DEMON_TOWERS.filter(t=>!!demonProgress().towers[t.id]).length;}
function allTowersCleared(){return clearedTowerCount()===DEMON_TOWERS.length;}
function realmLabel(){return currentRealm()==='demon'?'魔界':'現世';}

const ITEMS={
 branch:['小枝','🪵',.25,'素材'],wood:['木材','🪵',1.3,'素材'],stone:['石','🪨',1,'素材'],fiber:['繊維','🌾',.12,'素材'],leaf:['葉','🍃',.08,'素材'],berry:['ベリー','🫐',.12,'食料'],mushroom:['キノコ','🍄',.22,'食料'],clay:['粘土','🟤',.8,'素材'],sand:['砂','🏖️',.6,'素材'],flint:['火打石','✨',.35,'素材'],vine:['ツタ','🌿',.18,'素材'],raw_meat:['生肉','🥩',.7,'食料'],hide:['革','🧶',.5,'素材'],bone:['骨','🦴',.35,'素材'],feather:['羽','🪶',.08,'素材'],fat:['獣脂','🧈',.3,'素材'],fang:['牙','🦷',.2,'素材'],gel:['スライムの粘液','🟢',.3,'素材'],shard:['魔石の欠片','💠',.25,'素材'],ore:['鉄鉱石','⛏️',1.4,'素材'],
 rope:['ロープ','🪢',.35,'加工品'],plank:['板材','🪵',.8,'加工品'],stone_blade:['石刃','🔪',.45,'加工品'],charcoal:['木炭','⚫',.28,'加工品'],brick:['煉瓦','🧱',.9,'加工品'],glass:['ガラス','🔹',.3,'加工品'],cooked_meat:['焼き肉','🍖',.65,'食料'],soup:['木の実スープ','🥣',.45,'食料'],water:['飲み水','💧',1,'飲料'],
 axe:['石斧','🪓',2,'道具'],pick:['石つるはし','⛏️',2.3,'道具'],spear:['石槍','🔱',1.8,'道具'],leafcup:['葉の器','🍵',.3,'容器'],waterskin:['革の水袋','🫗',.8,'容器'],flask:['陶器の水瓶','🏺',1.5,'容器'],
 chest:['木のチェスト','🧰',6,'設備'],bench:['作業台','🛠️',9,'設備'],campfire:['焚き火','🔥',4,'設備'],bed:['簡易寝床','🛏️',4,'設備'],distiller:['蒸留器','⚗️',9,'設備'],furnace:['かまど','♨️',12,'設備'],rack:['乾燥棚','🪜',6,'設備'],raft:['いかだ','🛶',10,'乗り物']};

/* コンテンツ拡張：鉱石、精錬材、自然素材、段階的な道具・武器・防具 */
Object.assign(ITEMS,{
 copper_ore:['銅鉱石','🟠',1.1,'鉱石'],tin_ore:['錫鉱石','⚪',1.1,'鉱石'],coal:['石炭','⬛',.65,'鉱石'],silver_ore:['銀鉱石','🔘',1.35,'鉱石'],gold_ore:['金鉱石','🟡',1.5,'鉱石'],mythril_ore:['ミスリル鉱石','🔮',1.25,'鉱石'],quartz:['水晶','💎',.65,'鉱石'],sulfur:['硫黄','🟨',.55,'鉱石'],salt:['岩塩','🧂',.35,'鉱石'],obsidian:['黒曜石','⚫',.85,'鉱石'],
 copper_ingot:['銅インゴット','🟠',.85,'金属'],tin_ingot:['錫インゴット','⚪',.8,'金属'],bronze_ingot:['青銅インゴット','🥉',.95,'金属'],iron_ingot:['鉄インゴット','🔩',1.0,'金属'],steel_ingot:['鋼インゴット','🔗',1.1,'金属'],silver_ingot:['銀インゴット','🥈',1.0,'金属'],gold_ingot:['金インゴット','🥇',1.1,'金属'],mythril_ingot:['ミスリルインゴット','💠',.9,'金属'],
 herb:['薬草','🌿',.12,'素材'],reed:['葦','🌾',.18,'素材'],cotton:['綿花','☁️',.12,'素材'],resin:['樹脂','🟤',.35,'素材'],bark:['樹皮','🪵',.3,'素材'],fish:['生魚','🐟',.55,'食料'],shell:['貝殻','🐚',.15,'素材'],seed:['野菜の種','🌱',.08,'素材'],vegetable:['野菜','🥕',.33,'食料'],cloth:['布','🧵',.28,'加工品'],leather:['なめし革','🟤',.48,'加工品'],healing_potion:['回復薬','🧪',.35,'食料'],grilled_fish:['焼き魚','🍤',.45,'食料'],herb_stew:['野菜煮込み','🍲',.75,'食料'],jerky:['干し肉','🍖',.42,'食料'],
 copper_axe:['銅の斧','🪓',2.1,'道具'],bronze_axe:['青銅の斧','🪓',2.15,'道具'],iron_axe:['鉄の斧','🪓',2.3,'道具'],steel_axe:['鋼の斧','🪓',2.4,'道具'],mythril_axe:['ミスリルの斧','🪓',2.0,'道具'],
 copper_pick:['銅のつるはし','⛏️',2.2,'道具'],bronze_pick:['青銅のつるはし','⛏️',2.35,'道具'],iron_pick:['鉄のつるはし','⛏️',2.45,'道具'],steel_pick:['鋼のつるはし','⛏️',2.6,'道具'],mythril_pick:['ミスリルのつるはし','⛏️',2.2,'道具'],
 stone_dagger:['石の短剣','🗡️',.8,'武器'],wood_club:['木の棍棒','🏏',1.8,'武器'],bone_spear:['骨の槍','🔱',1.65,'武器'],copper_sword:['銅の剣','🗡️',2.2,'武器'],bronze_sword:['青銅の剣','⚔️',2.4,'武器'],iron_sword:['鉄の剣','⚔️',2.6,'武器'],steel_sword:['鋼の剣','⚔️',2.8,'武器'],mythril_sword:['ミスリルの剣','⚔️',2.0,'武器'],bronze_mace:['青銅のメイス','🔨',2.9,'武器'],iron_warhammer:['鉄の戦鎚','🔨',3.7,'武器'],steel_spear:['鋼の槍','🔱',2.4,'武器'],obsidian_dagger:['黒曜石の短剣','🗡️',1.0,'武器'],
 cloth_hat:['布の帽子','🎩',.5,'防具'],leather_helmet:['革の兜','🪖',.8,'防具'],bronze_helmet:['青銅の兜','🪖',1.5,'防具'],iron_helmet:['鉄の兜','🪖',1.85,'防具'],steel_helmet:['鋼の兜','🪖',2.1,'防具'],mythril_helmet:['ミスリルの兜','🪖',1.4,'防具'],
 cloth_tunic:['布の服','👕',1,'防具'],leather_armor:['革の鎧','🥋',2.2,'防具'],bronze_armor:['青銅の鎧','🛡️',4,'防具'],iron_armor:['鉄の鎧','🛡️',4.5,'防具'],steel_armor:['鋼の鎧','🛡️',5,'防具'],mythril_armor:['ミスリルの鎧','🛡️',3.2,'防具'],
 leather_boots:['革の靴','🥾',1,'防具'],bronze_boots:['青銅の靴','🥾',1.6,'防具'],iron_boots:['鉄の靴','🥾',1.85,'防具'],steel_boots:['鋼の靴','🥾',2,'防具'],mythril_boots:['ミスリルの靴','🥾',1.4,'防具'],
 fishing_rod:['釣り竿','🎣',1.3,'道具'],anvil:['金床','⚒️',11,'設備'],loom:['織機','🧶',7,'設備'],tanning_rack:['なめし台','🪚',7,'設備']
});

/* 発展装備・料理・農業・インフラ */
Object.assign(ITEMS,{
 orichalcum_ore:['オリハルコン鉱石','🟣',1.4,'鉱石'],adamantite_ore:['アダマンタイト鉱石','🔷',1.5,'鉱石'],orichalcum_ingot:['オリハルコン鋼','🟣',1.05,'金属'],adamantite_ingot:['アダマンタイト鋼','🔷',1.15,'金属'],ancient_core:['古代の炉心','✨',.45,'素材'],monster_core:['魔獣の核','💠',.4,'素材'],dragon_scale:['竜鱗','🐲',.65,'素材'],
 adamantite_axe:['アダマン斧','🪓',2.1,'道具'],orichalcum_axe:['オリハルコン斧','🪓',1.9,'道具'],adamantite_pick:['アダマンつるはし','⛏️',2.2,'道具'],orichalcum_pick:['オリハルコンつるはし','⛏️',2.0,'道具'],
 adamantite_sword:['アダマン剣','⚔️',2.5,'武器'],orichalcum_sword:['オリハルコン剣','⚔️',2.3,'武器'],orichalcum_spear:['神金の槍','🔱',2.2,'武器'],adamantite_helmet:['アダマン兜','🪖',1.8,'防具'],adamantite_armor:['アダマン鎧','🛡️',4.1,'防具'],adamantite_boots:['アダマン靴','🥾',1.6,'防具'],orichalcum_helmet:['神金の兜','🪖',1.4,'防具'],orichalcum_armor:['神金の鎧','🛡️',3.3,'防具'],orichalcum_boots:['神金の靴','🥾',1.25,'防具'],
 repair_bench:['修理台','🛠️',10,'設備'],rain_tank:['雨水タンク','🚰',9,'設備'],water_tap:['屋内水道','🚿',4,'設備'],irrigation:['自動散水装置','💦',6,'設備'],garden_plot:['栽培区画','🪴',2.0,'設備'],watering_can:['じょうろ','🚿',1,'道具'],
 potato_seed:['じゃがいもの種芋','🥔',.12,'素材'],berry_seed:['ベリーの種','🫐',.08,'素材'],wheat_seed:['小麦の種','🌾',.08,'素材'],potato:['じゃがいも','🥔',.4,'食料'],wheat:['小麦','🌾',.2,'素材'],flour:['小麦粉','🥡',.28,'加工品'],bread:['パン','🍞',.35,'食料'],roast_potato:['焼き芋','🍠',.38,'食料'],meat_stew:['肉と野菜のシチュー','🍲',.7,'食料'],fish_soup:['魚介スープ','🥘',.65,'食料'],mushroom_soup:['きのこスープ','🥣',.55,'食料'],berry_jam:['ベリージャム','🍯',.3,'食料'],hearty_meal:['冒険者の定食','🍱',.9,'食料']
});

ITEMS.river_bridge=['木の橋','🪵',4,'設備'];
// Energy infrastructure: generators are installed in house power slots, not on the ground.
Object.assign(ITEMS,{
 copper_wire:['銅線','🧵',.18,'電子素材'],insulated_cable:['絶縁ケーブル','🔌',.35,'電子素材'],circuit_board:['回路基板','🟩',.3,'電子素材'],electric_motor:['電動モーター','⚙️',2.3,'電子素材'],
 generator:['発電機','🔌',9,'インフラ'],electric_workbench:['電気作業台','🛠️',12,'設備'],electric_furnace:['電気炉','🔥',15,'設備'],fridge:['電気冷蔵庫','🧊',13,'設備'],electric_lamp:['電気ランプ','💡',2.5,'設備'],
 mana_crystal:['マナ結晶','💎',.4,'魔法素材'],mana_core:['マナコア','🔮',1.6,'魔法素材'],rune_plate:['魔導刻印板','📜',.5,'魔法素材'],
 mana_generator:['マナ発電機','✨',10,'インフラ'],magic_workbench:['マナ作業台','🔮',12,'設備'],mana_forge:['魔導炉','⚗️',14,'設備'],alchemy_table:['錬金術台','🧪',10,'設備'],arcane_lamp:['マナランプ','💠',2.5,'設備'],mana_fountain:['癒やしの泉','⛲',20,'設備'],
 magic_potion:['魔法回復薬','🧪',.4,'料理']
});
const TOOL_AXES=['axe','copper_axe','bronze_axe','iron_axe','steel_axe','mythril_axe','adamantite_axe','orichalcum_axe'];
const TOOL_PICKS=['pick','copper_pick','bronze_pick','iron_pick','steel_pick','mythril_pick','adamantite_pick','orichalcum_pick'];
const PLACE_SIZE={large_cottage:[2,1],grand_loghouse:[2,1],grand_manor:[2,2],river_bridge:[1,1],enhance_bench:[2,1],chest:[1,1],bench:[2,1],campfire:[1,1],bed:[2,1],distiller:[2,1],furnace:[2,2],rack:[1,2],anvil:[1,1],loom:[1,1],tanning_rack:[1,1],repair_bench:[2,1],rain_tank:[2,2],water_tap:[1,1],irrigation:[2,1],garden_plot:[2,2],medal_stand:[1,1],electric_workbench:[2,1],electric_furnace:[2,2],fridge:[2,2],electric_lamp:[1,1],magic_workbench:[2,1],mana_forge:[2,2],alchemy_table:[2,1],arcane_lamp:[1,1],mana_fountain:[2,2]};
function placeSize(type,rotated=false){let a=PLACE_SIZE[type]||[1,1];return rotated?{w:a[1],h:a[0]}:{w:a[0],h:a[1]};}
function occupies(o,x,y){let w=o.w||1,h=o.h||1;return x>=o.x&&y>=o.y&&x<o.x+w&&y<o.y+h;}
function objectsInCurrentBase(){return field().placed.filter(o=>['chest','fridge'].includes(o.type)&&(ui.inside?o.room===ui.inside:!st.cave&&o.room==null&&Math.max(Math.max(o.x-st.pos.x,st.pos.x-(o.x+(o.w||1)-1),0),Math.max(o.y-st.pos.y,st.pos.y-(o.y+(o.h||1)-1),0))<=1));} 
function accessibleCount(item){let total=st.inventory[item]||0;for(const ch of objectsInCurrentBase())total+=(ch.items?.[item]||0);return total;}
function consumeAccessible(item,n){let left=n;if(st.inventory[item]){let use=Math.min(left,st.inventory[item]);removeItem(item,use);left-=use;}if(left>0){for(const ch of objectsInCurrentBase()){let q=ch.items?.[item]||0;if(!q)continue;let use=Math.min(left,q);if(DURABLE.has(item)){let src=durabilityStore(ch);(src[item]||[]).splice(0,use);(ch.enhancements?.[item]||[]).splice(0,use);}ch.items[item]-=use;if(ch.items[item]<=0){delete ch.items[item];delete ch.durability?.[item];}left-=use;if(left<=0)break;}}return left<=0;}

const GEAR={
 spear:{slot:'weapon',attack:16,kind:'刺突'},stone_dagger:{slot:'weapon',attack:12,kind:'斬撃',crit:.16},wood_club:{slot:'weapon',attack:10,kind:'打撃'},bone_spear:{slot:'weapon',attack:19,kind:'刺突'},
 axe:{slot:'weapon',attack:11,kind:'斬撃'},copper_axe:{slot:'weapon',attack:17,kind:'斬撃'},bronze_axe:{slot:'weapon',attack:22,kind:'斬撃'},iron_axe:{slot:'weapon',attack:29,kind:'斬撃'},steel_axe:{slot:'weapon',attack:38,kind:'斬撃'},mythril_axe:{slot:'weapon',attack:50,kind:'斬撃'},
 pick:{slot:'weapon',attack:9,kind:'打撃'},copper_pick:{slot:'weapon',attack:15,kind:'打撃'},bronze_pick:{slot:'weapon',attack:20,kind:'打撃'},iron_pick:{slot:'weapon',attack:27,kind:'打撃'},steel_pick:{slot:'weapon',attack:35,kind:'打撃'},mythril_pick:{slot:'weapon',attack:47,kind:'打撃'},
 copper_sword:{slot:'weapon',attack:22,kind:'斬撃'},bronze_sword:{slot:'weapon',attack:27,kind:'斬撃'},iron_sword:{slot:'weapon',attack:35,kind:'斬撃'},steel_sword:{slot:'weapon',attack:44,kind:'斬撃'},mythril_sword:{slot:'weapon',attack:58,kind:'斬撃'},bronze_mace:{slot:'weapon',attack:31,kind:'打撃'},iron_warhammer:{slot:'weapon',attack:42,kind:'打撃'},steel_spear:{slot:'weapon',attack:42,kind:'刺突',crit:.12},obsidian_dagger:{slot:'weapon',attack:31,kind:'斬撃',crit:.22},
 cloth_hat:{slot:'head',def:1},leather_helmet:{slot:'head',def:3},bronze_helmet:{slot:'head',def:5},iron_helmet:{slot:'head',def:7},steel_helmet:{slot:'head',def:9},mythril_helmet:{slot:'head',def:12},
 cloth_tunic:{slot:'body',def:2},leather_armor:{slot:'body',def:5},bronze_armor:{slot:'body',def:8},iron_armor:{slot:'body',def:11},steel_armor:{slot:'body',def:14},mythril_armor:{slot:'body',def:19},
 leather_boots:{slot:'feet',def:1},bronze_boots:{slot:'feet',def:3},iron_boots:{slot:'feet',def:4},steel_boots:{slot:'feet',def:5},mythril_boots:{slot:'feet',def:7}
};

Object.assign(GEAR,{
 adamantite_axe:{slot:'weapon',attack:68,kind:'斬撃'},orichalcum_axe:{slot:'weapon',attack:89,kind:'斬撃'},adamantite_pick:{slot:'weapon',attack:65,kind:'打撃'},orichalcum_pick:{slot:'weapon',attack:85,kind:'打撃'},
 adamantite_sword:{slot:'weapon',attack:80,kind:'斬撃'},orichalcum_sword:{slot:'weapon',attack:108,kind:'斬撃',crit:.12},orichalcum_spear:{slot:'weapon',attack:99,kind:'刺突',crit:.24},
 adamantite_helmet:{slot:'head',def:18},adamantite_armor:{slot:'body',def:27},adamantite_boots:{slot:'feet',def:10},orichalcum_helmet:{slot:'head',def:25},orichalcum_armor:{slot:'body',def:38},orichalcum_boots:{slot:'feet',def:14}
});

const ORE_META={copper_ore:{name:'銅鉱脈',icon:'🟠',req:1},tin_ore:{name:'錫鉱脈',icon:'⚪',req:1},ore:{name:'鉄鉱脈',icon:'🔩',req:1},coal:{name:'石炭層',icon:'⬛',req:1},silver_ore:{name:'銀鉱脈',icon:'🔘',req:2},gold_ore:{name:'金鉱脈',icon:'🟡',req:2},quartz:{name:'水晶鉱脈',icon:'💎',req:2},sulfur:{name:'硫黄鉱脈',icon:'🟨',req:1},obsidian:{name:'黒曜石層',icon:'⚫',req:3},mythril_ore:{name:'ミスリル鉱脈',icon:'🔮',req:4},adamantite_ore:{name:'アダマン鉱脈',icon:'🔷',req:6},orichalcum_ore:{name:'神金鉱脈',icon:'🟣',req:7}};
function bestTool(kind){let list=kind==='axe'?TOOL_AXES:TOOL_PICKS;for(let i=list.length-1;i>=0;i--)if(has(list[i]))return {id:list[i],tier:i+1};return{id:null,tier:0};}
function miningDeposit(n){if(n.deposit&&ORE_META[n.deposit])return n.deposit;let b=biome(st.wx,st.wy),roll=hash(n.x+st.wx*13,n.y+st.wy*19,st.seed)%100;
 const opts=b==='H'?['copper_ore','tin_ore','ore','coal','silver_ore','gold_ore','quartz','sulfur','obsidian','mythril_ore','adamantite_ore','orichalcum_ore']:['copper_ore','tin_ore','ore','coal','sulfur'];
 const idx=b==='H'? (roll<19?0:roll<32?1:roll<53?2:roll<68?3:roll<77?4:roll<84?5:roll<90?6:roll<94?7:roll<97?8:roll<99?9:10):(roll<37?0:roll<62?1:roll<80?2:roll<94?3:4);
 n.deposit=opts[idx];return n.deposit;}
function equipped(slot){return st.equipment?.[slot]&&has(st.equipment[slot])?st.equipment[slot]:null;}
function armorTotal(){return defenseBonus()+['head','body','feet'].reduce((sum,slot)=>sum+activeGearValue(equipped(slot),'def'),0);}
function equipItem(id){let data=GEAR[id];if(!data||!has(id))return;st.equipment=st.equipment||{weapon:null,head:null,body:null,feet:null};st.equipment[data.slot]=id;if(data.slot==='weapon')ui.aim=!!GEAR[id]?.range;addLog(`🛡 ${ITEMS[id][0]}を装備した。`);ui.tab='equip';ui.page=0;draw();}
function unequipSlot(slot){if(!st.equipment)return;st.equipment[slot]=null;if(slot==='weapon')ui.aim=false;draw();}
function syncEquipment(){if(!st.equipment)st.equipment={weapon:has('spear')?'spear':null,head:null,body:null,feet:null};for(let k of ['weapon','head','body','feet'])if(st.equipment[k]&&!has(st.equipment[k]))st.equipment[k]=null;}


/* v0.8.3: taming, individual companion traits, trophies. Pet cards use stable per-pet IDs. */
Object.assign(ITEMS,{
 incense_1:['草木のお香','🪔',.18,'テイム'],incense_2:['獣寄せのお香','🪔',.22,'テイム'],
 incense_3:['秘銀のお香','🔮',.28,'テイム'],incense_4:['古代のお香','💠',.35,'テイム'],
 medal_beast:['獣王のメダル','🏅',0,'メダル'],medal_crystal:['水晶のメダル','🥈',0,'メダル'],
 medal_abyss:['深淵のメダル','🥇',0,'メダル'],medal_dragon:['古竜のメダル','🏵️',0,'メダル'],
 medal_stand:['メダル展示台','🏆',4,'設備']
});

Object.assign(ITEMS,{
 demon_gate:['魔界の門','🌀',0,'特別'],return_gate:['帰還の門','🚪',0,'特別'],demon_tower:['四天王の塔','🗼',0,'特別'],demon_castle:['魔王城','🏰',0,'特別'],
 infernal_ore:['魔鉱石','🟥',0.9,'魔界素材'],hellwood:['魔木材','🪵',0.7,'魔界素材'],shadow_grass:['影草','🌿',0.2,'魔界素材'],nightshade:['宵毒の実','🫐',0.15,'魔界素材'],obsidian_shard:['黒曜片','⚫',0.4,'魔界素材'],demon_ichor:['魔血液','🩸',0.25,'魔界素材'],
 demon_crown:['魔王の証','👑',0,'特別']
});

const INCENSE_RANK={rabbit:1,bird:1,cave_rat:1,slime:1,bat:1,boar:2,wolf:2,shadowwolf:3,golem:3,rock_beast:3,crystal_guard:4,abyss_knight:4,dragon:4,imp:2,hellhound:3,gargoyle:3,succubus:4};
const INCENSE_IDS=['incense_1','incense_2','incense_3','incense_4'];
const MEDAL_BY_BOSS={rock_beast:'medal_beast',crystal_guard:'medal_crystal',abyss_knight:'medal_abyss',dragon:'medal_dragon'};
const PET_BIAS={rabbit:['produce','carry','heal'],bird:['produce','heal','water'],boar:['carry','produce','heal'],slime:['water','heal','produce'],wolf:['carry','heal','produce'],shadowwolf:['heal','carry','produce'],golem:['carry','produce','heal'],cave_rat:['produce','carry','water'],bat:['heal','produce','water'],rock_beast:['carry','produce','heal'],crystal_guard:['water','produce','heal'],abyss_knight:['heal','carry','produce'],dragon:['produce','heal','water'],imp:['produce','heal','carry'],hellhound:['carry','heal','produce'],gargoyle:['carry','produce','heal'],succubus:['heal','produce','water']};
const PET_PRODUCE={rabbit:'fiber',bird:'feather',boar:'raw_meat',slime:'gel',wolf:'hide',shadowwolf:'shard',golem:'stone',cave_rat:'bone',bat:'fang',rock_beast:'obsidian',crystal_guard:'quartz',abyss_knight:'monster_core',dragon:'dragon_scale',imp:'shadow_grass',hellhound:'demon_ichor',gargoyle:'obsidian_shard',succubus:'nightshade'};
function petToken(p){return 'pet_'+p.id;}
/* Per-individual combat attributes. Saved companions keep their identity and current HP. */
function mobHP(m){return m.maxHp||CREATURES[m.type]?.[2]||1;}
function mobATK(m){return m.attack??CREATURES[m.type]?.[3]??1;}
function mobDEF(m){return m.defense||0;}
function initializeMobStats(m){if(!m||!CREATURES[m.type])return m;const base=CREATURES[m.type];if(m.maxHp===undefined){const original=m.hp??base[2];m.maxHp=Math.max(3,Math.round(base[2]*(.60+Math.random()*.90)));m.hp=Math.min(m.maxHp,Math.max(1,Math.round(original*m.maxHp/base[2])));}if(m.attack==null)m.attack=Math.max(1,Math.round(base[3]*(.60+Math.random()*.90)));if(m.defense==null)m.defense=Math.max(0,Math.round((base[3]*.13+2)*(.60+Math.random()*.90)));return m;}
function initializePetStats(p){if(!p||!CREATURES[p.type])return p;const b=CREATURES[p.type];if(!p.maxHp)p.maxHp=Math.max(2,Math.round(b[2]*(.60+Math.random()*.90)));p.hp=Math.min(p.maxHp,Math.max(0,p.hp??p.maxHp));if(p.attack==null)p.attack=Math.max(1,Math.round(b[3]*(.60+Math.random()*.90)));if(p.defense==null)p.defense=Math.max(0,Math.round((b[3]*.13+2)*(.60+Math.random()*.90)));if(!Number.isFinite(p.level)||p.level<1)p.level=1;if(!Number.isFinite(p.xp)||p.xp<0)p.xp=0;if(!p.growth)p.growth={hp:0,attack:0,defense:0};return p;}
function petNextXP(p){return 26+Math.max(1,p.level)*22;}
function gainPetXP(amount){const alive=petParty().filter(p=>p.hp>0);for(const p of alive){initializePetStats(p);p.xp+=Math.max(1,Math.round(amount));while(p.xp>=petNextXP(p)){
 p.xp-=petNextXP(p);p.level++;
 const increase={hp:0,attack:0,defense:0};const stat=['hp','attack','defense'][Math.floor(Math.random()*3)];increase[stat]=stat==='hp'?3+Math.floor(Math.random()*5):stat==='attack'?1+Math.floor(Math.random()*3):1+Math.floor(Math.random()*2);
 if(Math.random()<.35){const extra=['hp','attack','defense'][Math.floor(Math.random()*3)];increase[extra]+=extra==='hp'?2:1;}
 p.maxHp+=increase.hp;p.hp=Math.min(p.maxHp,p.hp+increase.hp);p.attack+=increase.attack;p.defense+=increase.defense;
 for(const k of Object.keys(increase))p.growth[k]+=increase[k];
 addLog(`🐾 ${p.nick}がLv.${p.level}に成長！ ${Object.entries(increase).filter(([,v])=>v).map(([k,v])=>({hp:'最大HP',attack:'攻撃',defense:'防御'}[k]+'+'+v)).join(' / ')}`);
 }} }
function losePet(p){if(!p||!st.pets?.some(x=>x.id===p.id))return;const id=petToken(p);
 delete st.inventory[id];for(const f of Object.values(st.fields||{}))for(const o of f.placed||[])if(o.type==='chest'&&o.items)delete o.items[id];
 st.pets=st.pets.filter(x=>x.id!==p.id);delete ITEMS[id];
 const msg=`💀 ${p.nick}は力尽きた。仲間は永久ロストした。`;if(st.combat)battleLine(msg);else addLog(msg);
}

function pastureLimit(o){const area=BUILDS.find(b=>b.id===o?.type)?.size||6;return area*area*3;}
function pastureCount(o){return Object.values(o?.penDrops||{}).reduce((sum,n)=>sum+n,0);}

function registerPetCard(p){ITEMS[petToken(p)]=[`${CREATURES[p.type]?.[0]||p.type}（${p.nick||'仲間'}）`,CREATURES[p.type]?.[1]||'🐾',1.4,'仲間カード'];}
function petParty(){return (st?.pets||[]).filter(p=>p.where==='party');}
function petPasture(){const h=home();return h&&h.type==='pasture'?h:null;}
function skillLabel(p){return ({produce:`${ITEMS[PET_PRODUCE[p.type]]?.[0]||'素材'}を${p.interval}分ごとに${p.power}個生産`,carry:`所持重量の上限+${p.power}kg`,heal:`HPを${p.power}時間あたり回復`,water:`水を最大${p.power}回分ためる`})[p.skill]||'特殊な能力';}
function makePet(m){initializeMobStats(m);const bias=PET_BIAS[m.type]||['produce','carry','heal'],skill=bias[Math.random()<.72?0:Math.floor(Math.random()*bias.length)];const strength=Math.max(1,Math.ceil((INCENSE_RANK[m.type]||1)/2));let power=skill==='carry'?5+Math.floor(Math.random()*(8+strength*4)):skill==='heal'?3+Math.floor(Math.random()*(4+strength*3)):skill==='water'?2+Math.floor(Math.random()*(5+strength*2)):1+Math.floor(Math.random()*(1+strength));
 return {id:makeId(),type:m.type,nick:CREATURES[m.type][0],where:'bag',level:1,xp:0,growth:{hp:0,attack:0,defense:0},skill,power,interval:skill==='produce'?Math.max(50,240-strength*22-Math.floor(Math.random()*50)):0,nextProduce:st.time+150,water:0,maxHp:mobHP(m),hp:Math.max(1,Math.round(mobHP(m)*.6)),attack:mobATK(m),defense:mobDEF(m),baseId:null};}
function petAt(x,y){const h=home();return h?.type==='pasture'?(st.pets||[]).find(p=>p.where==='pasture'&&p.baseId===h.id&&p.px===x&&p.py===y):null;}
function petOrder(id,action){const p=st.pets?.find(p=>p.id===id);if(!p){toast('仲間が見つかりません');return;}const h=petPasture();if(action==='party'){if(p.where==='party')return;if(petParty().length>=3){toast('同行できるのは3匹までです');return;}if(p.where==='pasture'&&!h){toast('放牧先の牧畜場で迎えに行ってください');return;}if(p.where==='bag')removeItem(petToken(p));p.where='party';p.baseId=null;}
 else if(action==='bag'){if(p.where==='bag')return;if(p.where==='pasture'&&!h){toast('放牧した牧畜場で回収してください');return;}if(freeWeight()+.0001<1.4+(p.where==='party'&&p.skill==='carry'?p.power:0)){toast('手持ち重量が足りません');return;}p.where='bag';p.baseId=null;st.inventory[petToken(p)]=1;}
 else if(action==='pasture'){if(!h){toast('牧畜場の中に入ってください');return;}if(p.where==='pasture')return;if(p.where==='bag')removeItem(petToken(p));p.where='pasture';p.baseId=h.id;let available=[];for(let y=1;y<7;y++)for(let x=1;x<7;x++)if(!locatedObjects().some(o=>occupies(o,x,y))&&!(st.pets||[]).some(q=>q.where==='pasture'&&q.baseId===h.id&&q.px===x&&q.py===y))available.push([x,y]);if(!available.length){p.where='bag';p.baseId=null;st.inventory[petToken(p)]=1;toast('放牧スペースがいっぱいです');return;}[p.px,p.py]=available[0];}
 addLog(`🐾 ${CREATURES[p.type][0]}を${action==='party'?'同行':action==='bag'?'カードに収納':'放牧'}した。`);draw();}
function tameMob(level){const m=battleMob();if(!m||m.boss){toast('この相手はテイムできません');return;}if(m.hp>mobHP(m)*.35){toast('HPを35%以下に弱らせてください');return;}const id=INCENSE_IDS[level-1];if(!has(id)){toast('お香がありません');return;}if((INCENSE_RANK[m.type]||1)>level){toast('この魔物にはもっと強いお香が必要です');return;}if(Math.random()>=skillValue('incenseSave')/100)removeItem(id,1);const chance=Math.min(.99,.65+level*.06+(1-m.hp/mobHP(m))*.13+skillValue('tameChance')/100);if(Math.random()<chance){let p=makePet(m);p.maxHp=Math.round(p.maxHp*(1+skillValue('tameHp')/100));p.hp=Math.min(p.maxHp,p.hp+Math.round(mobHP(m)*skillValue('tameHp')/100));st.pets.push(p);registerPetCard(p);if(petParty().length<3)p.where='party';else st.inventory[petToken(p)]=1;st.quests.tamed=true;battleLine(`✨ ${CREATURES[m.type][0]}のテイムに成功！ ${skillLabel(p)}`);ui.battleSummary={title:'🐾 テイム成功',history:st.combat.history.slice(-4)};st.combat=null;field().creatures=field().creatures.filter(c=>c.id!==m.id);ui.selected=null;gainXP(15,'tame');}
 else {battleLine('お香を使ったがテイム失敗！');if(st.combat)enemyHit(m,false);}draw();}
function resumeCombat(){if(st.combat){st.combat.tamePause=false;st.combat.prompted=true;draw();}}
function toggleGentle(){if(st.combat){st.combat.gentle=!st.combat.gentle;st.combat.tamePause=false;st.combat.prompted=false;draw();}}
function collectPasture(){const h=petPasture();if(!h)return;let got=[];for(const [id,n] of Object.entries(h.penDrops||{})){let taken=0;while(taken<n&&addItem(id))taken++;if(taken)got.push(`${ITEMS[id][0]}×${taken}`);h.penDrops[id]-=taken;if(!h.penDrops[id])delete h.penDrops[id];}if(got.length)addLog('🐾 放牧資源を回収：'+got.join('、'));else toast('回収できる資源がないか、荷物がいっぱいです');draw();}
function petWater(){const p=petParty().find(x=>x.skill==='water'&&x.water>=1);if(!p){toast('同行している仲間に飲み水がありません');return;}p.water--;st.thirst=clamp(st.thirst+28);cost({min:2,energy:0,hunger:0,thirst:0});addLog('🐾 仲間が蓄えた水を飲んだ。');draw();}
function petLife(minutes){if(!st?.pets)return;for(const p of st.pets){if(p.where!=='party'&&p.where!=='pasture')continue;if(p.where==='pasture'&&!Object.values(st.fields).some(f=>f.placed.some(o=>o.id===p.baseId)))continue;
 if(p.hp<=0){losePet(p);continue;}if(p.hp<p.maxHp)p.hp=Math.min(p.maxHp,p.hp+minutes*.12);
 if(p.skill==='heal'&&p.where==='party')st.hp=clamp(st.hp+minutes*p.power/60,0,hpMax());
 if(p.skill==='water'){p.water=Math.min(p.power,(p.water||0)+minutes/180);}
 if(p.skill==='produce'){const id=PET_PRODUCE[p.type]||'fiber';p.nextProduce=p.nextProduce||st.time+p.interval;let cycles=0;while(st.time>=p.nextProduce&&cycles++<30){p.nextProduce+=p.interval;const n=p.power;if(p.where==='party'){if(!addItem(id,n))addLog(`🐾 ${p.nick}の産物は重量超過で受け取れなかった。`);}else {const owner=Object.values(st.fields).flatMap(f=>f.placed).find(o=>o.id===p.baseId);if(owner){owner.penDrops=owner.penDrops||{};owner.penDrops[id]=(owner.penDrops[id]||0)+Math.max(0,Math.min(n,pastureLimit(owner)-pastureCount(owner)));}}}}}}
function renderPets(){const party=petParty(),h=petPasture(),group=(where,title)=>`<h3 class="sectiontitle">${title}</h3>${(st.pets||[]).filter(p=>p.where===where&&(where!=='pasture'||!h||p.baseId===h.id)).map(p=>`<div class="pet-row"><div class="pet-avatar">${artFor(p.type,CREATURES[p.type][1])}</div><div class="pet-info"><b>${esc(p.nick)} <span class="chip">Lv.${p.level||1}</span></b><small>経験値 ${p.xp||0}/${petNextXP(p)}<br>HP ${Math.round(p.hp)}/${p.maxHp} / ⚔ ${p.attack} / 🛡 ${p.defense}<br>${skillLabel(p)}</small><div class="actionbuttons">${where!=='party'?`<button class="btn small" data-petorder="${p.id},party" ${party.length>=3?'disabled':''}>同行させる</button>`:''}${where!=='bag'?`<button class="btn small subtle" data-petorder="${p.id},bag">カードに戻す</button>`:''}${h&&where!=='pasture'?`<button class="btn small primary" data-petorder="${p.id},pasture">放牧</button>`:''}${where==='party'&&p.skill==='water'?`<button class="btn small primary" data-act="petwater" ${p.water<1?'disabled':''}>💧 蓄えた水を飲む（${Math.floor(p.water)}回）</button>`:''}</div></div></div>`).join('')||'<div class="tiny pet-empty">まだいません</div>'}`;
 let html=`<div class="splitheader"><h3 class="sectiontitle">🐾 仲間の管理</h3><span class="tiny">同行 ${party.length}/3匹 ・ 全${st.pets.length}匹</span></div><div class="shared-note">敵のHPを35%以下に減らし、戦闘中にお香を使用すると仲間にできます。同行は戦闘に参加し、固有能力が発動します。</div><div class="pane-content pet-list">${group('party','同行中（効果あり）')}${group('bag','カード状態（効果なし）')}${h?group('pasture','この牧畜場で放牧中'):''}${h?`<div class="shared-note">牧畜場の収納 ${pastureCount(h)}/${pastureLimit(h)}個｜資源：${Object.entries(h.penDrops||{}).map(([id,q])=>ITEMS[id]?.[0]+'×'+q).join('、')||'なし'} <button class="btn small primary" data-act="collectpasture">資源を回収</button></div>`:''}</div>`;setPane(html);}
function putMedal(){const e=selectedEntity();if(e?.obj?.type!=='medal_stand')return;const id=ui.medalChoice;if(!ITEMS[id]||!has(id)){toast('飾るメダルがありません');return;}if(e.obj.medal){toast('すでに展示中です');return;}removeItem(id,1);e.obj.medal=id;addLog('🏅 '+ITEMS[id][0]+'を展示台に飾った。');draw();}
function removeMedal(){const o=selectedEntity()?.obj;if(o?.type!=='medal_stand'||!o.medal)return;if(!addItem(o.medal)){toast('所持重量がいっぱいです');return;}o.medal=null;draw();}

const CAP={leafcup:2,waterskin:6,flask:10};
const RECIPES=[
 {id:'rope',in:{fiber:4},out:2,at:'hand',cat:'素材',min:7,desc:'繊維を編んだ丈夫な紐。'},
 {id:'stone_blade',in:{stone:2},at:'hand',cat:'素材',min:5,desc:'小型の加工刃。'},
 {id:'axe',in:{branch:2,stone:2,fiber:1},at:'hand',cat:'道具',min:16,desc:'木を効率よく切り出す。'},
 {id:'pick',in:{branch:2,stone:3,fiber:2},at:'hand',cat:'道具',min:17,desc:'岩石と鉄鉱石の採取に役立つ。'},
 {id:'spear',in:{branch:3,stone_blade:1,rope:1},at:'hand',cat:'道具',min:15,desc:'装備すると攻撃が強くなる。'},
 {id:'leafcup',in:{leaf:3,fiber:2},at:'hand',cat:'道具',min:8,desc:'飲み水を2回分まで持てる。'},
 {id:'bench',in:{wood:6,stone:4},at:'hand',cat:'設備',min:35,desc:'高度な工作に使う設備。'},
 {id:'campfire',in:{stone:5,branch:5},at:'hand',cat:'設備',min:22,desc:'生肉を焼ける。'},
 {id:'bed',in:{fiber:8,branch:4,leaf:5},at:'hand',cat:'設備',min:25,desc:'近くで休むと回復効率が上がる。'},
 {id:'chest',in:{wood:7,rope:1},at:'bench',cat:'設備',min:24,desc:'内容量120kgの収納箱。'},
 {id:'waterskin',in:{hide:2,rope:1},at:'bench',cat:'道具',min:22,desc:'飲み水を6回分まで携帯する。'},
 {id:'plank',in:{wood:2},out:2,at:'bench',cat:'素材',min:8,desc:'精度を高めた建築材。'},
 {id:'rack',in:{wood:6,rope:2},at:'bench',cat:'設備',min:24,desc:'食品加工向けの乾燥棚。'},
 {id:'distiller',in:{stone:6,clay:5,plank:4,rope:2},at:'bench',cat:'設備',min:55,desc:'海水を飲み水に変える。'},
 {id:'furnace',in:{stone:10,clay:6,wood:3},at:'bench',cat:'設備',min:45,desc:'土と砂を焼いて素材を作る。'},
 {id:'cooked_meat',in:{raw_meat:1,branch:1},at:'campfire',cat:'料理',min:15,desc:'生肉を火で焼く。栄養価が高い。'},
 {id:'soup',in:{berry:3,mushroom:1,water:1},at:'campfire',cat:'料理',min:15,desc:'体力も少し回復する温かい食事。'},
 {id:'charcoal',in:{wood:2},out:2,at:'campfire',cat:'素材',min:18,desc:'かまどなどに使う燃料。'},
 {id:'brick',in:{clay:3,charcoal:1},out:2,at:'furnace',cat:'素材',min:25,desc:'頑丈な建築材。'},
 {id:'glass',in:{sand:3,charcoal:1},out:2,at:'furnace',cat:'素材',min:25,desc:'瓶や光学部品に利用できる。'},
 {id:'flask',in:{clay:4,charcoal:1},at:'furnace',cat:'道具',min:30,desc:'水を10回分運べる陶器。'},
 {id:'raft',in:{wood:12,plank:6,rope:4},at:'bench',cat:'乗り物',min:95,desc:'外海を越えて探索できる。'}
];

/* 追加レシピはデータ駆動。既存のレシピを壊さず末尾に登録 */
const EXTRA_RECIPES=[
 ['cloth',{cotton:3,fiber:2},'loom','素材',15,'防具用の布。',2],['leather',{hide:2,salt:1},'tanning_rack','素材',22,'革を加工して防具用素材に。',2],
 ['fishing_rod',{branch:3,rope:1,bone:1},'hand','道具',18,'水辺で魚を釣ることができる。'],['healing_potion',{herb:3,water:1,glass:1},'bench','料理',25,'HPを35回復。'],['grilled_fish',{fish:1,branch:1},'campfire','料理',12,'火を通した魚。'],['herb_stew',{vegetable:2,herb:1,water:1},'campfire','料理',20,'栄養と水分を補う料理。'],['jerky',{raw_meat:2,salt:1},'rack','料理',28,'保存しやすい干し肉。',2],
 ['copper_ingot',{copper_ore:2,charcoal:1},'furnace','金属',24,'銅鉱石を精錬。'],['tin_ingot',{tin_ore:2,charcoal:1},'furnace','金属',24,'錫鉱石を精錬。'],['bronze_ingot',{copper_ingot:2,tin_ingot:1,charcoal:1},'furnace','金属',22,'銅と錫を合金化。',3],['iron_ingot',{ore:2,charcoal:1},'furnace','金属',30,'鉄鉱石を精錬。'],['steel_ingot',{iron_ingot:2,coal:2},'furnace','金属',35,'鉄に炭素を加えて鋼に。',2],['silver_ingot',{silver_ore:2,charcoal:1},'furnace','金属',30,'銀を精錬。'],['gold_ingot',{gold_ore:2,charcoal:1},'furnace','金属',30,'金を精錬。'],['mythril_ingot',{mythril_ore:2,steel_ingot:1,shard:1},'anvil','金属',65,'高位の金属インゴット。'],
 ['anvil',{iron_ingot:5,plank:4,stone:4},'bench','設備',65,'鉄・鋼・ミスリル装備を鍛造できる金床。'],['loom',{wood:6,rope:3},'bench','設備',35,'布の加工設備。'],['tanning_rack',{wood:4,rope:2,stone:2},'bench','設備',35,'革をなめす台。'],
 ['stone_dagger',{stone_blade:2,branch:1,fiber:1},'hand','武器',12,'序盤の軽量短剣。'],['wood_club',{wood:2,rope:1},'hand','武器',12,'木製の鈍器。'],['bone_spear',{bone:3,branch:2,rope:1},'bench','武器',21,'先端を骨で強化した槍。'],
 ['copper_axe',{copper_ingot:3,wood:1,rope:1},'bench','道具',28,'木材4、採取時間・体力消費を軽減。'],['bronze_axe',{bronze_ingot:3,wood:1,rope:1},'bench','道具',33,'木材5、採取効率向上。'],['iron_axe',{iron_ingot:3,wood:1,rope:1},'anvil','道具',35,'木材6、採取効率向上。'],['steel_axe',{steel_ingot:3,wood:1,leather:1},'anvil','道具',40,'木材8、採取効率向上。'],['mythril_axe',{mythril_ingot:3,steel_ingot:1,leather:1},'anvil','道具',55,'木材10、最高級の採取効率。'],
 ['copper_pick',{copper_ingot:3,wood:1,rope:1},'bench','道具',30,'銀・金鉱脈を採取可能。'],['bronze_pick',{bronze_ingot:3,wood:1,rope:1},'bench','道具',35,'岩石・鉱石採取効率が向上。'],['iron_pick',{iron_ingot:3,wood:1,rope:1},'anvil','道具',38,'黒曜石の採取が可能。'],['steel_pick',{steel_ingot:3,wood:1,leather:1},'anvil','道具',44,'ミスリルの採取が可能。'],['mythril_pick',{mythril_ingot:3,steel_ingot:1,leather:1},'anvil','道具',60,'採掘効率が最高級。'],
 ['copper_sword',{copper_ingot:3,wood:1,rope:1},'bench','武器',26,'斬撃22。'],['bronze_sword',{bronze_ingot:3,wood:1,rope:1},'bench','武器',30,'斬撃27。'],['iron_sword',{iron_ingot:3,wood:1,leather:1},'anvil','武器',34,'斬撃35。'],['steel_sword',{steel_ingot:3,wood:1,leather:1},'anvil','武器',43,'斬撃44。'],['mythril_sword',{mythril_ingot:3,steel_ingot:1,leather:1},'anvil','武器',65,'斬撃58。'],
 ['bronze_mace',{bronze_ingot:4,wood:1,rope:1},'bench','武器',32,'打撃31。'],['iron_warhammer',{iron_ingot:5,wood:2,leather:1},'anvil','武器',44,'打撃42。'],['steel_spear',{steel_ingot:3,wood:2,leather:1},'anvil','武器',44,'刺突42、急所攻撃率上昇。'],['obsidian_dagger',{obsidian:3,wood:1,leather:1},'anvil','武器',33,'斬撃31、急所攻撃率が高い。'],
 ['cloth_hat',{cloth:2,fiber:2},'hand','防具',14,'防御1。'],['cloth_tunic',{cloth:4,rope:1},'hand','防具',18,'防御2。'],['leather_helmet',{leather:2,rope:1},'bench','防具',23,'防御3。'],['leather_armor',{leather:4,rope:2},'bench','防具',28,'防御5。'],['leather_boots',{leather:2,rope:1},'bench','防具',21,'防御1。'],
 ['bronze_helmet',{bronze_ingot:2,leather:1},'bench','防具',30,'防御5。'],['bronze_armor',{bronze_ingot:5,leather:2},'bench','防具',45,'防御8。'],['bronze_boots',{bronze_ingot:2,leather:1},'bench','防具',30,'防御3。'],
 ['iron_helmet',{iron_ingot:2,leather:1},'anvil','防具',36,'防御7。'],['iron_armor',{iron_ingot:5,leather:2},'anvil','防具',50,'防御11。'],['iron_boots',{iron_ingot:2,leather:1},'anvil','防具',35,'防御4。'],
 ['steel_helmet',{steel_ingot:2,leather:1},'anvil','防具',40,'防御9。'],['steel_armor',{steel_ingot:5,leather:2},'anvil','防具',60,'防御14。'],['steel_boots',{steel_ingot:2,leather:1},'anvil','防具',40,'防御5。'],
 ['mythril_helmet',{mythril_ingot:2,leather:1},'anvil','防具',55,'防御12。'],['mythril_armor',{mythril_ingot:5,leather:2},'anvil','防具',75,'防御19。'],['mythril_boots',{mythril_ingot:2,leather:1},'anvil','防具',55,'防御7。']
];
for(let [id,ingredients,station,cat,min,desc,out] of EXTRA_RECIPES)RECIPES.push({id,in:ingredients,at:station,cat,min,desc,out:out||1});


/* 上位レシピと生活ループ */
const PLUS_RECIPES=[
 ['adamantite_ingot',{adamantite_ore:2,mythril_ingot:1,coal:2},'furnace','金属',55,'高純度の硬質合金。'],
 ['orichalcum_ingot',{orichalcum_ore:2,adamantite_ingot:1,ancient_core:1},'anvil','金属',70,'深層遺跡の神金。'],
 ['repair_bench',{iron_ingot:3,plank:5,stone:3},'bench','設備',40,'損耗した道具・武具を素材で修理する。'],
 ['rain_tank',{plank:8,iron_ingot:2,clay:5},'bench','設備',46,'拠点のインフラスロットに登録。容量30。'],
 ['water_tap',{copper_ingot:3,iron_ingot:1,glass:1},'anvil','設備',35,'タンクの水を室内で利用できる。'],
 ['irrigation',{iron_ingot:3,copper_ingot:3,glass:2},'anvil','設備',45,'水タンクから畑に自動給水する。'],
 ['garden_plot',{wood:2,clay:3,stone:1},'hand','設備',18,'種を植えて栽培する畑。屋内外に設置可能。'],
 ['watering_can',{copper_ingot:2,wood:1},'bench','道具',16,'畑の世話に便利な水やり道具。'],
 ['flour',{wheat:3},'bench','素材',12,'小麦から挽いた粉。'],
 ['bread',{flour:2,water:1,charcoal:1},'campfire','料理',18,'空腹を38回復するパン。'],
 ['roast_potato',{potato:2,branch:1},'campfire','料理',13,'素朴な焼き芋。'],
 ['meat_stew',{raw_meat:2,vegetable:2,potato:1,water:2,salt:1},'campfire','料理',28,'食料50・水分12・HP12回復。'],
 ['fish_soup',{fish:2,reed:1,vegetable:1,water:2},'campfire','料理',24,'栄養豊富な魚介スープ。'],
 ['mushroom_soup',{mushroom:3,herb:1,water:1},'campfire','料理',20,'HPも少し回復するきのこスープ。'],
 ['berry_jam',{berry:6,water:1},'campfire','料理',18,'保存食として役立つベリージャム。',2],
 ['hearty_meal',{bread:1,meat_stew:1,vegetable:2},'campfire','料理',27,'スタミナも回復する満腹の定食。'],
];
for(const [prefix,ingot,prev,need] of [['adamantite','adamantite_ingot','mythril_ingot',3],['orichalcum','orichalcum_ingot','adamantite_ingot',4]]){
 for(const [suffix,n,kind] of [['axe',3,'道具'],['pick',3,'道具'],['sword',3,'武器'],['helmet',2,'防具'],['armor',5,'防具'],['boots',2,'防具']]){
 let r={[ingot]:n,[prev]:1,leather:1};PLUS_RECIPES.push([prefix+'_'+suffix,r,'anvil',kind,65+need*10,ITEMS[prefix+'_'+suffix][0]+'。最高峰の性能。']);
 }
}
PLUS_RECIPES.push(['orichalcum_spear',{orichalcum_ingot:3,adamantite_ingot:1,monster_core:1},'anvil','武器',92,'伝説級の刺突武器。']);
for(let [id,ingredients,station,cat,min,desc,out] of PLUS_RECIPES)RECIPES.push({id,in:ingredients,at:station,cat,min,desc,out:out||1});
// 料理全種の統一された効果表: 空腹、水分、HP、スタミナ
RECIPES.push(
 {id:'incense_1',in:{branch:2,herb:2,berry:2,fiber:1},out:2,at:'hand',cat:'テイム',min:12,desc:'弱った小動物や小型魔物を仲間にするお香。'},
 {id:'incense_2',in:{resin:3,hide:2,herb:4,gel:2},at:'bench',cat:'テイム',min:26,desc:'イノシシやオオカミなど中型の敵用。'},
 {id:'incense_3',in:{mythril_ingot:1,shard:6,monster_core:2,herb:5},at:'anvil',cat:'テイム',min:48,desc:'ゴーレムや上位の魔獣用。'},
 {id:'incense_4',in:{orichalcum_ingot:1,ancient_core:2,dragon_scale:1,shard:8},at:'anvil',cat:'テイム',min:75,desc:'極めて強い魔物用。ボスはテイム不可。'},
 {id:'medal_stand',in:{plank:4,stone:4,bronze_ingot:1},at:'bench',cat:'設備',min:35,desc:'洞窟ボスのメダルを1枚飾れる。'}
);
const FOOD={berry:[9,0,0,0],mushroom:[11,0,-3,0],cooked_meat:[35,0,8,0],soup:[22,8,12,0],grilled_fish:[24,0,5,0],herb_stew:[30,12,14,0],jerky:[26,0,3,0],vegetable:[12,0,0,0],fish:[6,0,-10,0],raw_meat:[7,0,-16,0],potato:[13,0,0,0],wheat:[3,0,0,0],bread:[38,0,4,0],roast_potato:[25,0,2,0],meat_stew:[50,12,12,0],fish_soup:[36,16,8,0],mushroom_soup:[27,15,9,0],berry_jam:[18,2,0,4],hearty_meal:[65,15,18,25]};
// 保存期限はゲーム内経過時間（分）。種類ごとの基準日数は1個所持したときの値。
const FOOD_SHELF_DAYS={
 fish:.6,raw_meat:.8,mushroom:1.5,grilled_fish:2,cooked_meat:2.5,soup:1.5,
 herb_stew:2.2,meat_stew:2,fish_soup:1.7,mushroom_soup:1.7,hearty_meal:2.5,
 berry:4,vegetable:4,potato:6,wheat:12,roast_potato:3,bread:4,berry_jam:9,jerky:12
};
function foodShelfMinutes(id){return 1440*(FOOD_SHELF_DAYS[id]||3);}
function foodDecayRate(q){return 1+Math.max(0,q-1)*.5;}
function foodTimeLabel(minutes){const m=Math.max(0,Math.ceil(minutes));if(m>=1440)return `${(m/1440).toFixed(1)}日`;if(m>=60)return `${Math.ceil(m/60)}時間`;return `${Math.max(1,m)}分`;}
// 各スタックの残り鮮度を1つの数値で保持。合流時には減りが大きい側（残りが少ない側）を優先する。
function mergeFoodFresh(id,from,to){const life=foodShelfMinutes(id);to[id]=Math.min(to[id]??life,from[id]??life);}
// 箱・お墓を運搬しても鮮度の減り具合を保持する。
function foodStacks(){let containers=[{items:st.inventory,foodFresh:st.foodFresh||{}}];st.foodFresh=containers[0].foodFresh;
 for(const f of Object.values(st.fields||{}))for(const b of f.placed||[])if(b.type==='chest'||b.type==='fridge'){
   b.items=b.items||{};b.foodFresh=b.foodFresh||{};containers.push({items:b.items,foodFresh:b.foodFresh,decayFactor:b.type==='fridge'&&fridgePoweredInField(f,b)?.25:1});
 }
 for(const f of [...Object.values(st.fields||{}),...Object.values(st.caves||{})])for(const grave of f.placed||[])if(grave.type==='grave'){
   grave.items=grave.items||{};grave.foodFresh=grave.foodFresh||{};containers.push({items:grave.items,foodFresh:grave.foodFresh});
 }
 if(st.carriedChest){st.carriedChest.items=st.carriedChest.items||{};st.carriedChest.foodFresh=st.carriedChest.foodFresh||{};containers.push(st.carriedChest);}
 return containers;
}
function syncFoodFresh(){if(!st)return;for(const c of foodStacks()){
 for(const [id,q] of Object.entries(c.items))if(FOOD[id]&&q>0&&!(c.foodFresh[id]>0))c.foodFresh[id]=foodShelfMinutes(id);
 for(const id of Object.keys(c.foodFresh))if(!FOOD[id]||!(c.items[id]>0))delete c.foodFresh[id];
 }}
function foodExpiryDisplay(id,quantity,container=null){if(!FOOD[id]||quantity<=0)return '';const life=foodShelfMinutes(id),rate=foodDecayRate(quantity),remaining=container?.foodFresh?.[id]??st.foodFresh?.[id]??life;
 return `⏳残り消費期限：約${foodTimeLabel(remaining/(rate*(container?.type==='fridge'&&fridgePoweredInField(field(),container)?.25:1)))}`;
}
// 期限到来ごとに1個だけ腐敗させる。残りのスタックは期限を満額リセット。
function advanceFoodSpoilage(minutes){if(minutes<=0||!st)return;syncFoodFresh();let lost={};for(const c of foodStacks())for(const id of Object.keys(c.foodFresh)){
 let q=c.items[id]||0,remaining=c.foodFresh[id]||foodShelfMinutes(id),time=minutes;
 while(q>0&&time>0){const rate=foodDecayRate(q)*(c.decayFactor||1),until=remaining/rate;
  if(time+1e-9<until){remaining-=time*rate;time=0;}
  else{time=Math.max(0,time-until);q--;lost[id]=(lost[id]||0)+1;remaining=foodShelfMinutes(id);}
 }
 if(q>0){c.items[id]=q;c.foodFresh[id]=Math.max(.001,remaining);}else{delete c.items[id];delete c.foodFresh[id];}
 }
 for(const [id,n] of Object.entries(lost))addLog(`⌛ ${ITEMS[id][0]}×${n}が消費期限切れで消滅した。`);
 if(ui.chosenItem&&!has(ui.chosenItem))ui.chosenItem=null;
}

// 所持品詳細・製作画面で共用する性能説明。
const ITEM_HINTS={
 branch:'簡単な武器、工具、たき火、矢の材料。草木から集められる。',wood:'作業台や家屋、道具の柄の材料。木を伐採して入手。',stone:'石器、炉、建築の基本素材。岩から採取できる。',fiber:'ロープ、衣服、寝床の材料。草むらなどから手に入る。',leaf:'仮設の水容器や寝床、シェルターに利用する。',clay:'炉やレンガ、陶器の水容器に使う。',sand:'かまどで加工してガラスを作る。',flint:'火を起こす際や石器の加工に用いる。',vine:'丈夫な縄・工作の材料になる植物のつる。',hide:'なめして革にすると防具の材料になる。',bone:'槍や工具などの加工材料。',feather:'矢を安定して飛ばすための重要素材。鳥のほか、草・木の採取から低確率で入手。',fat:'動物から採れる脂。燃料・加工材料に使える。',fang:'魔物や獣の牙。上位工作の素材。',gel:'スライムが落とす粘液。加工・テイム用素材。',shard:'魔物から手に入る魔力を帯びた破片。',ore:'かまどで鉄に精錬する。鉄の工具や装備の基礎。',
 copper_ore:'銅の原料。初歩的な金属装備に利用。',tin_ore:'錫の原料。銅と合わせて青銅を製造。',coal:'鋼鉄を作るときに使う高火力燃料。',silver_ore:'銀のインゴットに精錬できる鉱石。',gold_ore:'金のインゴットに精錬できる鉱石。',mythril_ore:'希少な魔力金属の鉱石。高級装備向け。',adamantite_ore:'深い坑道で採れる高硬度鉱石。',orichalcum_ore:'伝説級の装備を作る最上位鉱石。',quartz:'精密な工作に使える結晶。',sulfur:'火薬や加工材料の原料。',obsidian:'極めて鋭い刃物の材料となる黒曜石。',
 rope:'道具・建築・武器に広く使用する結束材。',plank:'木材を加工した板。建物や家具の製作に使用。',stone_blade:'鋭く加工した石製の刃。武器の材料。',charcoal:'木を焼いて作る燃料。金属精錬にも使用。',brick:'粘土を焼き固めた丈夫な建材。',glass:'透明な加工材。容器や設備製造に使用。',cloth:'織機で加工した布。軽い防具の材料。',leather:'なめした革。防具や上級装備の材料。',
 fishing_rod:'川や海に隣接した場所で釣りを行う。',watering_can:'畑に水を与えるための道具。',raft:'所持すると海のエリアへ進める。外海を探索するための乗り物。',
 campfire:'料理・木炭作りに使う。設置して選択すると関連レシピが使える。',bench:'道具・設備・初級装備の製作を解放する作業台。',furnace:'鉱石の精錬、ガラス・レンガの加工に使用。',anvil:'上位の金属武器、防具、工具を作る金床。',chest:'収納容量120kg。近くのチェスト内の素材は製作に使える。',bed:'休憩時の回復効率が上がり、リスポーン地点を設定・更新できる。',rack:'肉などの乾燥加工に使う。',distiller:'海水から飲める水を作る蒸留器。',loom:'繊維を布に加工する設備。',tanning_rack:'皮をなめして革を作る設備。',repair_bench:'工具や装備を修理し、耐久力を回復する。',enhance_bench:'素材を消費して装備を50%で強化。失敗時は強化値が1下がる。',
 rain_tank:'雨天時に水を蓄積する設備。拠点インフラに登録。',water_tap:'貯水した水を室内で飲めるようにする設備。',irrigation:'貯水タンクの水を使い、畑に自動で給水する設備。',garden_plot:'種を植えて食料を生産できる畑。',
 incense_1:'HP35％以下に弱らせた小型魔物を仲間にできるお香。',incense_2:'HP35％以下の中型魔物を仲間にするお香。',incense_3:'HP35％以下の上位魔獣に使えるお香。',incense_4:'強力な魔獣用。四天王・魔王などのボスは対象外。',
 demon_crown:'魔王討伐の証。ゲームはクリア後も継続できる。',infernal_ore:'魔界の岩・鉱脈から得られる異界の鉱石。',hellwood:'魔界の木から採れる特殊な木材。',shadow_grass:'魔界の草むらや魔樹から採れる素材。',nightshade:'魔界の茂みで採れる不気味な実。',obsidian_shard:'魔界の岩から得られる黒曜の破片。',demon_ichor:'魔物や魔界の資源から得られる妖しい液体。'
};
function toolEffectDescription(id){
 let axe=TOOL_AXES.indexOf(id),pick=TOOL_PICKS.indexOf(id);
 if(axe>=0){const label=axe<2?'小さく':axe<5?'中程度に':'大きく';const wood=[3,4,5,6,8,10,12,15][axe];return `木の採取効率を${label}上昇。木材獲得量の目安${wood}個。上位ほど採取時間・スタミナ消費が減る（斧は自動使用）。`;}
 if(pick>=0){const label=pick<2?'小さく':pick<5?'中程度に':'大きく';return `岩・鉱石の採取効率を${label}上昇。採掘等級${pick+1}で採掘可能な鉱石が増え、採取量・作業時間・スタミナ消費が改善（つるはしは自動使用）。`;}
 return '';
}
function itemDescription(id){
 let parts=[],r=RECIPES.find(x=>x.id===id);
 if(ITEM_HINTS[id])parts.push(ITEM_HINTS[id]);else if(r?.desc)parts.push(r.desc);
 else if(ITEMS[id]?.[3]==='素材'||ITEMS[id]?.[3]==='魔界素材')parts.push('探索・採取で手に入る素材。装備や施設の製作で使う場合がある。');
 else if(ITEMS[id]?.[3]==='金属')parts.push('金属加工で得られる中間素材。上位の武器・防具・工具の製作に利用する。');
 let tool=toolEffectDescription(id);if(tool)parts.push(tool);
 if(GEAR[id]){const g=GEAR[id];if(g.slot==='weapon')parts.push(`⚔ 攻撃力 ${g.attack}（${g.kind}）${g.crit?' / 会心率'+Math.round(g.crit*100)+'%':''}${g.range?' / 射程'+g.range+'マス / 射撃威力'+g.shot:''}`);else parts.push(`🛡 防御力 ${g.def}（敵から受けるダメージを軽減）`);
 parts.push(`最大耐久 ${maxDur(id)}。使用時や戦闘で耐久が減り、0になると壊れる。`);}
 if(FOOD[id]){const f=FOOD[id],v=[['空腹',f[0]],['水分',f[1]],['HP',f[2]],['スタミナ',f[3]]];parts.push('食べたとき：'+v.map(([n,x])=>`${n}${x>=0?'+':''}${x}`).join(' / '));parts.push(`基本消費期限：${FOOD_SHELF_DAYS[id]??3}日`);}
 if(id==='healing_potion')parts.push('使用時：HP+35。');
 if(id==='magic_potion')parts.push('使用時：HP+95、スタミナ+35。消費期限なし。');
 if(id==='water')parts.push('飲むと水分+32（スキルによって増加）。');
 if(!parts.length)parts.push(ITEMS[id]?.[3]==='弾薬'?'弓で消費する矢。金属矢は追加ダメージを与える。':'製作・建築・探索に利用できるアイテム。');
 return parts.join('　');
}


RECIPES.push({id:'river_bridge',in:{plank:4,rope:2,wood:2},at:'bench',cat:'建築材',min:28,out:1,desc:'川の水面1マスに設置。橋の上を歩ける。海には設置不可。連結可能。'});
// Higher-tier crafting is deliberately reassigned, including pre-existing saved recipes.
for(const r of RECIPES){
 if(/^(adamantite|orichalcum)_/.test(r.id))r.at='magic_workbench';
 else if(/^(steel|mythril)_/.test(r.id)||['incense_3','incense_4'].includes(r.id))r.at='electric_workbench';
}
const TECH_MAGIC_RECIPES=[
 ['copper_wire',{copper_ingot:2,fiber:1},'bench','電子素材',15,'銅から引いた導線。発電機や電気作業台を組み立てる。',3],
 ['insulated_cable',{copper_wire:3,gel:2,cloth:1},'bench','電子素材',17,'絶縁した電源ケーブル。',2],
 ['generator',{iron_ingot:5,copper_ingot:4,coal:3,copper_wire:4,glass:2},'bench','インフラ',90,'拠点の設備スロットに登録。室内の電気作業台・冷蔵庫を起動する。'],
 ['electric_workbench',{iron_ingot:6,copper_ingot:5,plank:6,copper_wire:5,glass:3},'bench','設備',85,'発電機を登録した拠点で使える上位作業台。鋼鉄・ミスリル加工に必須。'],
 ['circuit_board',{copper_wire:4,quartz:2,gold_ingot:1,glass:2},'electric_workbench','電子素材',30,'高度な電気設備の制御回路。'],
 ['electric_motor',{iron_ingot:3,copper_wire:4,circuit_board:1},'electric_workbench','電子素材',36,'ポンプや電気炉の駆動装置。'],
 ['electric_furnace',{iron_ingot:5,brick:8,electric_motor:1,circuit_board:2},'electric_workbench','設備',86,'電気で動く高効率の精錬設備。発電機が必要。'],
 ['fridge',{iron_ingot:5,glass:5,electric_motor:1,circuit_board:2,plank:3},'electric_workbench','設備',100,'電気で食料を冷やす収納庫。電源があると腐敗速度が1/4になる。'],
 ['electric_lamp',{glass:2,copper_wire:2,circuit_board:1},'electric_workbench','設備',22,'電気を使う室内照明。電源のある拠点で点灯。'],
 ['mana_crystal',{shard:4,quartz:3,obsidian_shard:2},'electric_workbench','魔法素材',42,'魔界由来の魔力を結晶化した材料。',2],
 ['mana_core',{mana_crystal:3,mythril_ingot:2,demon_ichor:3},'electric_workbench','魔法素材',55,'マナ発電装置の核になる魔力結晶。'],
 ['mana_generator',{mana_core:2,mythril_ingot:4,hellwood:5,circuit_board:2,obsidian_shard:4},'electric_workbench','インフラ',130,'拠点の設備スロットに登録。マナ作業台などの魔法設備を起動する。'],
 ['magic_workbench',{mythril_ingot:5,mana_crystal:5,hellwood:6,glass:4,shard:6},'electric_workbench','設備',110,'マナ発電機のある拠点で使える最上位作業台。アダマン・神金加工に必須。'],
 ['rune_plate',{mana_crystal:2,obsidian_shard:3,hellwood:2},'magic_workbench','魔法素材',45,'魔法設備の出力を制御する刻印板。',2],
 ['mana_forge',{adamantite_ingot:3,brick:8,mana_core:2,rune_plate:3},'magic_workbench','設備',110,'魔力で動く高位の精錬炉。マナ発電機が必要。'],
 ['alchemy_table',{mythril_ingot:3,hellwood:6,glass:5,rune_plate:2},'magic_workbench','設備',95,'魔法薬を精製する作業台。マナ電源が必要。'],
 ['arcane_lamp',{mana_crystal:2,glass:2,hellwood:1},'magic_workbench','設備',30,'マナ発電機で点灯する魔法の照明。'],
 ['mana_fountain',{adamantite_ingot:4,mana_crystal:4,rune_plate:3,stone:10},'magic_workbench','設備',125,'マナ電源で回復効果を発揮する泉。室内休憩時の回復量を上昇。'],
 ['magic_potion',{nightshade:2,shadow_grass:3,mana_crystal:1,water:1},'alchemy_table','料理',38,'魔力を込めた高性能な回復薬。HP+95、スタミナ+35。']
];
for(const [id,ingredients,at,cat,min,desc,out] of TECH_MAGIC_RECIPES)RECIPES.push({id,in:ingredients,at,cat,min,desc,out:out||1});

const BUILDS=[
 {id:'shelter',name:'草のシェルター',icon:'⛺',in:{wood:6,leaf:8,fiber:8},at:'hand',size:4,min:90,infra:{water:0,farm:0},desc:'最初の雨風しのぎ。内部4×4マス。水道設備は設置不可。'},
 {id:'hut',name:'木の小屋',icon:'🏠',in:{wood:12,plank:8,rope:3},at:'bench',size:6,min:180,infra:{water:2,farm:1},desc:'設備を広く配置できる小屋。内部6×6マス。水設備2・農業1枠。'},
 {id:'warehouse',name:'木造倉庫',icon:'🏚️',in:{wood:18,plank:12,rope:5,brick:4},at:'bench',size:8,min:310,infra:{water:4,farm:2},desc:'大型の作業・収納拠点。内部8×8マス。水設備4・農業2枠。'},
 {id:'pasture',name:'牧畜場',icon:'🐾',in:{wood:14,plank:12,rope:9,stone:8},at:'bench',size:8,min:220,infra:{water:0,farm:0},desc:'テイムした仲間を放牧できる建物。内部8×8マス。資源も蓄積する。'},
 {id:'stonehouse',name:'石造りの家',icon:'🏡',in:{stone:22,brick:14,plank:9,glass:3},at:'bench',size:7,min:270,infra:{water:3,farm:1},desc:'防風性に優れた石造りの家。室内7×7・水設備3枠。'},
 {id:'smithy',name:'鍛冶工房',icon:'⚒️',in:{stone:18,brick:16,iron_ingot:5,plank:10},at:'bench',size:7,min:310,infra:{water:1,farm:0},desc:'金床・炉をまとめて設置できる広い鍛冶工房。室内7×7。'},
 {id:'greenhouse',name:'温室',icon:'🌿',in:{plank:15,glass:12,iron_ingot:4,rope:4},at:'bench',size:7,min:300,infra:{water:3,farm:4},desc:'農業用の温室。水設備と農業スロットが充実。室内7×7。'},
 {id:'watchtower',name:'見張り塔',icon:'🗼',in:{wood:16,plank:13,stone:8,rope:7},at:'bench',size:5,min:200,infra:{water:0,farm:0},desc:'探索用の高台。屋内5×5の小さな待機場所。'},
 {id:'granary',name:'穀物庫',icon:'🏚️',in:{wood:22,plank:15,brick:6,rope:6},at:'bench',size:7,min:250,infra:{water:1,farm:2},desc:'食料や素材を保管する倉庫。室内7×7。チェストを複数設置可能。'},
 {id:'fort',name:'砦',icon:'🏰',in:{stone:28,brick:18,steel_ingot:5,plank:14},at:'bench',size:9,min:480,infra:{water:4,farm:1},desc:'遠征の大型拠点。室内9×9で道具・設備をまとめられる。'},
 {id:'mana_tower',name:'魔術研究塔',icon:'🔮',in:{stone:20,glass:9,mythril_ingot:4,shard:10,obsidian_shard:8},at:'bench',size:7,min:430,infra:{water:2,farm:1},desc:'魔界素材を使う研究塔。室内7×7。将来の魔法設備用の拠点。'},
 {id:'large_cottage',name:'広い木造住宅',icon:'🏡',in:{wood:24,plank:24,stone:12,glass:6,rope:6},at:'bench',size:8,min:360,desc:'暮らしやすい居住用の家。室内8×8。屋外2×1マス。'},
 {id:'grand_loghouse',name:'大きなログハウス',icon:'🏠',in:{wood:38,plank:32,brick:16,glass:9,iron_ingot:7,rope:8},at:'electric_workbench',size:10,min:540,desc:'多くの家具や設備をまとめられる大型住宅。室内10×10。屋外2×1マス。'},
 {id:'grand_manor',name:'大邸宅',icon:'🏰',in:{stone:56,brick:44,plank:35,steel_ingot:12,glass:18,mythril_ingot:5},at:'magic_workbench',size:12,min:920,desc:'最上級の居住拠点。室内12×12。屋外2×2マス。すべてのインフラ設備をまとめて管理できる。'}
];
// Every infrastructure device competes for a single building-wide slot pool.
// These slots are separate from freely placed furniture/workstations on room tiles.
const BUILDING_SLOT_CAPACITY={shelter:0,hut:3,warehouse:7,pasture:2,stonehouse:5,smithy:5,greenhouse:6,watchtower:1,granary:5,fort:10,mana_tower:6,large_cottage:6,grand_loghouse:10,grand_manor:16};
for(const b of BUILDS){
 b.slots=BUILDING_SLOT_CAPACITY[b.id]??Math.max(0,(b.infra?.water||0)+(b.infra?.farm||0)+(b.infra?.power||0));
 // Construction is a field activity: no workbench, electric station or mana generator required.
 b.at='hand';
 // Normalise legacy descriptions that referred to subdivided water/farm/power slots.
 b.desc=b.desc.replace(/水設備\d+(?:枠)?(?:・農業\d+枠)?[。・]?/g,'')
              .replace(/農業(?:設備)?\d+枠[。・]?/g,'')
              .replace(/電源\d+枠[。・]?/g,'')
              .replace(/水道設備は設置不可。/g,'')
              .replace(/水設備と農業スロットが充実。/g,'')
              .replace(/水設備を(?:複数)?設置できる。/g,'')
              .replace(/すべてのインフラ設備をまとめて管理できる。/g,'');
 b.desc=b.desc.replace(/。+/g,'。').replace(/[。・\s]+$/,'');
 b.desc+=`。設備スロット ${b.slots}。`;

}
function buildingSlotCapacity(meta,base){return Math.max(meta?.slots||0,(base?.addons||[]).length);}
const INFRA_SLOT_ITEMS=['rain_tank','water_tap','irrigation','generator','mana_generator'];

const NODES={tree:['木','🌳','木と枝を採取できる'],rock:['岩','🪨','石や火打石が採れる'],bush:['ベリーの茂み','🫐','食べられる木の実がある'],grass:['草むら','🌾','繊維と葉を集める'],clay:['粘土質の土','🟤','土器や蒸留器に使う粘土'],sand:['砂地','🏖️','砂や貝殻がある'],vine:['ツタ','🌿','繊維やツタを採取できる'],ore:['鉱脈','💎','つるはしが必要な金属鉱石'],drift:['漂着木','🪵','海岸に流れ着いた木片']};
Object.assign(NODES,{herb:['薬草の茂み','🌿','薬草と植物を採取する'],reed:['水辺の草','🌾','葦や綿花を採集する'],garden:['野菜の群生','🥕','野菜と種を採集する']});
const CREATURES={rabbit:['野ウサギ','🐇',13,3,{raw_meat:1,hide:1},'小さな動物。肉と革が手に入る。'],boar:['イノシシ','🐗',35,10,{raw_meat:3,hide:2,bone:1},'突進が危険だが食料が豊富。'],bird:['野鳥','🦆',10,3,{raw_meat:1,feather:2},'羽と肉を持つ。'],slime:['スライム','🟢',25,7,{gel:2,shard:1},'不思議な粘液の魔物。'],wolf:['灰色オオカミ','🐺',45,14,{raw_meat:2,hide:3,fang:1},'強敵。石槍があると安全。']};
Object.assign(CREATURES,{
 cave_rat:['洞窟ネズミ','🐀',18,5,{raw_meat:1,bone:1},'洞窟を走り回る小型の魔物。'],bat:['コウモリ','🦇',16,5,{fang:1,hide:1},'夜行性の小型魔物。'],shadowwolf:['影狼','🐺',60,18,{hide:3,shard:2,fang:1},'闇に紛れる獰猛な狼。'],golem:['ゴーレム','🪨',74,21,{stone:5,ore:2},'重い一撃を放つ岩の番人。'],rock_beast:['岩獣','🪨',92,24,{obsidian:2,stone:6},'洞窟深部の獣。'],crystal_guard:['水晶守衛','💠',108,28,{quartz:4,silver_ore:2},'硬い水晶装甲を持つ守衛。'],abyss_knight:['深淵騎士','⚔️',134,34,{monster_core:2,steel_ingot:1},'深淵で鍛えられた重騎士。'],dragon:['古竜','🐉',188,46,{dragon_scale:3,ancient_core:1},'古代洞窟の頂点に立つ竜。'],
 imp:['インプ','😈',32,10,{demon_ichor:2,shadow_grass:1},'魔界にうごめく小悪魔。'],hellhound:['ヘルハウンド','🐺',58,18,{raw_meat:2,hide:2,demon_ichor:1,fang:1},'炎をまとった魔犬。'],gargoyle:['ガーゴイル','🗿',72,20,{stone:4,obsidian_shard:3},'黒曜の皮膚を持つ石像の魔物。'],succubus:['サキュバス','🦋',66,22,{nightshade:2,demon_ichor:2},'魅了の瘴気をまとう上位魔族。'],
 blaze_duke:['紅蓮公','🔥',156,36,{infernal_ore:6,demon_ichor:4},'紅蓮の塔を守る四天王。討伐すると塔が解放される。'],venom_count:['毒霧侯','☠️',162,35,{nightshade:6,demon_ichor:4},'毒霧の塔を守る四天王。討伐すると塔が解放される。'],void_seer:['虚影卿','🌑',148,38,{obsidian_shard:7,shadow_grass:6},'虚影の塔を守る四天王。討伐すると塔が解放される。'],ruin_marshal:['断罪将','🛡️',176,40,{infernal_ore:5,obsidian_shard:5,hellwood:4},'断罪の塔を守る四天王。討伐すると塔が解放される。'],
 demon_king:['魔王','👑',260,52,{demon_crown:1,infernal_ore:10,obsidian_shard:10,demon_ichor:8},'魔王城の最奥に待つ、この世界の支配者。']
});

Object.assign(CREATURES,{golem:['岩のゴーレム','🗿',140,28,{stone:5,ore:3,quartz:2,shard:2},'岩山に棲む強敵。頑丈な防具と金属武器が必要。'],shadowwolf:['影オオカミ','🐺',92,22,{raw_meat:3,hide:4,fang:3,shard:2},'森の奥に棲む大型の魔獣。']});

Object.assign(CREATURES,{
 cave_rat:['洞窟ネズミ','🐀',22,5,{raw_meat:1,bone:1},'薄暗い洞窟に棲む。'],bat:['吸血コウモリ','🦇',37,9,{fang:1,hide:1},'素早く襲ってくる。'],rock_beast:['岩喰らい','🦂',110,23,{ore:3,obsidian:2,monster_core:1},'硬い甲殻を持つ。'],crystal_guard:['水晶の番人','💎',205,37,{quartz:5,mythril_ore:2,monster_core:1},'魔力を纏う鉱山の守護者。'],abyss_knight:['深淵の騎士','👹',350,55,{adamantite_ore:4,monster_core:2,ancient_core:1},'古代の重装剣士。'],dragon:['古竜','🐲',680,85,{dragon_scale:5,orichalcum_ore:5,ancient_core:2},'伝説級の洞窟の主。']
});

const el=id=>document.getElementById(id), fmt=n=>Number(n||0).toFixed(1).replace(/\.0$/,''), clamp=(x,l=0,h=100)=>Math.max(l,Math.min(h,x));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* WILDCARD Art Pack - map/creatures/objects/inventory imagery */
const GAME_ART_MAP={"branch":"drift","wood":"drift","stone":"rock","fiber":"grassnode","leaf":"herb","berry":"bush","mushroom":"glowshrooms","clay":"clay","sand":"clay","flint":"ore","vine":"vine","raw_meat":"boar","hide":"tanning_rack","bone":"bones","feather":"bird","fat":"boar","fang":"wolf","gel":"slime","shard":"blue_crystal","ore":"ore","rope":"vine","plank":"bench","stone_blade":"short_sword","charcoal":"ore","brick":"rock","glass":"blue_crystal","cooked_meat":"boar","soup":"dining_table","water":"water_tap","leafcup":"ceramic","waterskin":"ceramic","flask":"ceramic","copper_ore":"ore","tin_ore":"ore","coal":"ore","silver_ore":"ore","gold_ore":"ore","mythril_ore":"blue_crystal","quartz":"blue_crystal","sulfur":"red_crystal","salt":"rock","obsidian":"ore","adamantite_ore":"blue_crystal","orichalcum_ore":"purple_crystal","copper_ingot":"copper_axe","tin_ingot":"iron_axe","bronze_ingot":"bronze_axe","iron_ingot":"iron_axe","steel_ingot":"steel_axe","silver_ingot":"iron_axe","gold_ingot":"bronze_axe","mythril_ingot":"mythril_axe","adamantite_ingot":"blue_crystal","orichalcum_ingot":"purple_crystal","herb":"herb","reed":"reed","cotton":"grassnode","resin":"tree","bark":"drift","fish":"fishmob","shell":"ceramic","seed":"seedtray","vegetable":"carrot_ripe","cloth":"divider","leather":"tanning_rack","healing_potion":"ceramic","grilled_fish":"fishmob","herb_stew":"dining_table","jerky":"rack","flour":"ceramic","bread":"dining_table","roast_potato":"potato_ripe","meat_stew":"dining_table","fish_soup":"dining_table","mushroom_soup":"dining_table","berry_jam":"bush","hearty_meal":"dining_table","stone_dagger":"short_sword","wood_club":"spear","bone_spear":"spear","copper_sword":"short_sword","bronze_sword":"short_sword","iron_sword":"steel_sword","mythril_sword":"steel_sword","bronze_mace":"battle_axe","iron_warhammer":"battle_axe","obsidian_dagger":"short_sword","adamantite_axe":"steel_axe","orichalcum_axe":"mythril_axe","adamantite_pick":"steel_pick","orichalcum_pick":"mythril_pick","adamantite_sword":"steel_sword","orichalcum_sword":"steel_sword","orichalcum_spear":"steel_spear","cloth_hat":"leather_helmet","cloth_tunic":"leather_armor","bronze_helmet":"iron_helmet","steel_helmet":"iron_helmet","mythril_helmet":"iron_helmet","adamantite_helmet":"iron_helmet","orichalcum_helmet":"iron_helmet","bronze_armor":"iron_armor","steel_armor":"iron_armor","mythril_armor":"iron_armor","adamantite_armor":"iron_armor","orichalcum_armor":"iron_armor","bronze_boots":"iron_boots","steel_boots":"iron_boots","mythril_boots":"iron_boots","adamantite_boots":"iron_boots","orichalcum_boots":"iron_boots","raft":"rowboat","fishing_rod":"bow","repair_bench":"repair_bench","garden_plot":"garden_plot","watering_can":"watering_can","rain_tank":"rain_tank","water_tap":"water_tap","irrigation":"irrigation","potato_seed":"seedtray","berry_seed":"seedtray","wheat_seed":"seedtray","potato":"potato_ripe","wheat":"wheat_ripe","ancient_core":"altar","monster_core":"purple_crystal","dragon_scale":"dragon","shelter":"shelter","hut":"hut","warehouse":"warehouse","cave_next":"cave_back","treasure":"treasure_closed","cave_entrance":"cave_entrance","cave_exit":"cave_exit","golem":"golem","shadowwolf":"shadowwolf","rock_beast":"rock_beast","crystal_guard":"crystal_guard","abyss_knight":"abyss_knight","dragon":"dragon","axe":"axe","pick":"pick","spear":"spear","chest":"chest","bench":"bench","campfire":"campfire","bed":"bed","distiller":"distiller","furnace":"furnace","rack":"rack","anvil":"anvil","loom":"loom","tanning_rack":"tanning_rack","rabbit":"rabbit","bird":"bird","boar":"boar","slime":"slime","wolf":"wolf","bat":"bat","cave_rat":"cave_rat","tree":"tree","rock":"rock","bush":"bush","grass":"grassnode","drift":"drift","copper_axe":"copper_axe","bronze_axe":"bronze_axe","iron_axe":"iron_axe","steel_axe":"steel_axe","mythril_axe":"mythril_axe","copper_pick":"copper_pick","bronze_pick":"bronze_pick","iron_pick":"iron_pick","steel_pick":"steel_pick","mythril_pick":"mythril_pick","leather_helmet":"leather_helmet","leather_armor":"leather_armor","leather_boots":"leather_boots","iron_helmet":"iron_helmet","iron_armor":"iron_armor","iron_boots":"iron_boots","steel_sword":"steel_sword","steel_spear":"steel_spear"};
const GAME_ART_SPRITES={"tree":[0,0],"rock":[1,0],"bush":[2,0],"grassnode":[3,0],"clay":[4,0],"vine":[5,0],"herb":[6,0],"reed":[7,0],"drift":[8,0],"ore":[9,0],"cave_entrance":[10,0],"cave_exit":[11,0],"treasure":[0,1],"chest":[1,1],"bench":[2,1],"campfire":[3,1],"bed":[4,1],"distiller":[5,1],"furnace":[6,1],"anvil":[7,1],"rack":[8,1],"loom":[9,1],"tanning_rack":[10,1],"repair_bench":[11,1],"garden_plot":[0,2],"rain_tank":[1,2],"water_tap":[2,2],"irrigation":[3,2],"rabbit":[4,2],"bird":[5,2],"boar":[6,2],"fishmob":[7,2],"slime":[8,2],"wolf":[9,2],"shadowwolf":[10,2],"goblin":[11,2],"bat":[0,3],"cave_rat":[1,3],"golem":[2,3],"rock_beast":[3,3],"giant_spider":[4,3],"abyss_knight":[5,3],"crystal_guard":[6,3],"axe":[7,3],"copper_axe":[8,3],"bronze_axe":[9,3],"iron_axe":[10,3],"steel_axe":[11,3],"mythril_axe":[0,4],"pick":[1,4],"copper_pick":[2,4],"bronze_pick":[3,4],"iron_pick":[4,4],"steel_pick":[5,4],"mythril_pick":[6,4],"spear":[7,4],"steel_spear":[8,4],"short_sword":[9,4],"steel_sword":[10,4],"battle_axe":[11,4],"bow":[0,5],"quiver":[1,5],"wood_shield":[2,5],"steel_shield":[3,5],"leather_helmet":[4,5],"leather_armor":[5,5],"leather_boots":[6,5],"iron_helmet":[7,5],"iron_armor":[8,5],"iron_boots":[9,5],"shelter":[10,5],"warehouse":[11,5],"smithy":[0,6],"hut":[1,6],"stonehouse":[2,6],"greenhouse":[3,6],"fence":[4,6],"fence_corner":[5,6],"gate":[6,6],"signpost":[7,6],"bridge":[8,6],"raft":[9,6],"rowboat":[10,6],"sailboat":[11,6],"mine_entrance":[0,7],"watchtower":[1,7],"wood_wall":[2,7],"wood_door":[3,7],"floor_mat":[4,7],"carrot_small":[5,7],"carrot_mid":[6,7],"carrot_ripe":[7,7],"potato_small":[8,7],"potato_mid":[9,7],"potato_ripe":[10,7],"cabbage_small":[11,7],"cabbage_mid":[0,8],"cabbage_ripe":[1,8],"tomato_small":[2,8],"tomato_mid":[3,8],"tomato_ripe":[4,8],"wheat_small":[5,8],"wheat_mid":[6,8],"wheat_ripe":[7,8],"herb_plot":[8,8],"berry_plot":[9,8],"blueberry_plot":[10,8],"fruit_sapling":[11,8],"apple_tree":[0,9],"scarecrow":[1,9],"compost":[2,9],"seedtray":[3,9],"watering_can":[4,9],"treasure_closed":[5,9],"treasure_open":[6,9],"boss_chest":[7,9],"minecart":[8,9],"rail":[9,9],"rail_curved":[10,9],"mine_support":[11,9],"cave_back":[0,10],"glowshrooms":[1,10],"blue_crystal":[2,10],"purple_crystal":[3,10],"red_crystal":[4,10],"altar":[5,10],"portal":[6,10],"spike_trap":[7,10],"bear_trap":[8,10],"chain":[9,10],"ruin_pillar":[10,10],"bones":[11,10],"torch":[0,11],"locked_gate":[1,11],"dining_table":[2,11],"stool":[3,11],"chair":[4,11],"long_bench":[5,11],"side_table":[6,11],"bookcase":[7,11],"wall_shelf":[8,11],"cupboard":[9,11],"wardrobe":[10,11],"barrel":[11,11],"crates":[0,12],"ceramic":[1,12],"candles":[2,12],"lantern":[3,12],"fireplace":[4,12],"rug":[5,12],"divider":[6,12],"pantry":[7,12],"dining_set":[8,12],"bear":[9,12],"lizard":[10,12],"orc":[11,12],"scorpion":[0,13],"mushroom_beast":[1,13],"fire_elemental":[2,13],"ice_wolf":[3,13],"dragon":[4,13],"troll":[5,13],"lich":[6,13],"cave_worm":[7,13],"orichalcum_golem":[8,13]};
const GAME_ART_TERRAIN={"grass":[0,0],"woodland":[1,0],"dirt":[2,0],"sand":[3,0],"rocky":[4,0],"water":[5,0],"ocean":[0,1],"floor":[1,1],"cavefloor":[2,1],"cavewall":[3,1],"duskground":[4,1],"nightground":[5,1],"cave_mine":[0,2],"cave_stone":[1,2],"cave_blue":[2,2],"cave_purple":[3,2],"cave_mud":[4,2],"cave_pool":[5,2],"cave_tracks":[0,3],"cave_support":[1,3],"cave_lava":[2,3],"cave_ruins":[3,3],"cave_dark":[4,3],"cave_abyss":[5,3]};
function atlasCSS(key,isGround=false){
 const data=isGround?GAME_ART_TERRAIN:GAME_ART_SPRITES, pos=data[key];if(!pos)return '';
 const columns=isGround?6:12,rows=isGround?4:14;
 return 'background-image:var('+(isGround?'--wild-ground':'--wild-sprites')+');background-size:'+(100*columns)+'% '+(100*rows)+'%;background-position:'+(pos[0]/Math.max(1,columns-1)*100).toFixed(4)+'% '+(pos[1]/Math.max(1,rows-1)*100).toFixed(4)+'%;';
}
function artKey(id){return GAME_ART_MAP[id]||id;}
const SPECIAL_ITEM_ICONS={"branch":window.WS_ASSETS[0],"wood":window.WS_ASSETS[1],"bark":window.WS_ASSETS[1],"plank":window.WS_ASSETS[2],"stone":window.WS_ASSETS[3],"flint":window.WS_ASSETS[4],"coal":window.WS_ASSETS[5],"clay":window.WS_ASSETS[6],"sand":window.WS_ASSETS[7],"fiber":window.WS_ASSETS[8],"vine":window.WS_ASSETS[9],"rope":window.WS_ASSETS[10],"hide":window.WS_ASSETS[11],"leather":window.WS_ASSETS[11],"cloth":window.WS_ASSETS[12],"berry":window.WS_ASSETS[13],"mushroom":window.WS_ASSETS[14],"herb":window.WS_ASSETS[15],"raw_meat":window.WS_ASSETS[16],"cooked_meat":window.WS_ASSETS[17],"fish":window.WS_ASSETS[18],"grilled_fish":window.WS_ASSETS[19],"waterskin":window.WS_ASSETS[20],"healing_potion":window.WS_ASSETS[21],"copper_ore":window.WS_ASSETS[22],"tin_ore":window.WS_ASSETS[23],"ore":window.WS_ASSETS[24],"silver_ore":window.WS_ASSETS[25],"gold_ore":window.WS_ASSETS[26],"mythril_ore":window.WS_ASSETS[27],"orichalcum_ore":window.WS_ASSETS[28],"copper_ingot":window.WS_ASSETS[29],"bronze_ingot":window.WS_ASSETS[30],"iron_ingot":window.WS_ASSETS[31],"steel_ingot":window.WS_ASSETS[32],"mythril_ingot":window.WS_ASSETS[33],"orichalcum_ingot":window.WS_ASSETS[34],"seed":window.WS_ASSETS[35],"potato_seed":window.WS_ASSETS[35],"berry_seed":window.WS_ASSETS[35],"wheat_seed":window.WS_ASSETS[35],"bone":window.WS_ASSETS[36],"obj_chest":window.WS_ASSETS[37],"obj_bench":window.WS_ASSETS[38],"obj_campfire":window.WS_ASSETS[39],"obj_bed":window.WS_ASSETS[40],"obj_distiller":window.WS_ASSETS[41],"obj_furnace":window.WS_ASSETS[42],"obj_rack":window.WS_ASSETS[43],"obj_anvil":window.WS_ASSETS[44],"obj_loom":window.WS_ASSETS[45],"obj_tanning_rack":window.WS_ASSETS[46],"obj_repair_bench":window.WS_ASSETS[47],"obj_rain_tank":window.WS_ASSETS[48],"obj_water_tap":window.WS_ASSETS[49],"obj_irrigation":window.WS_ASSETS[50],"obj_garden_plot":window.WS_ASSETS[51],"obj_shelter":window.WS_ASSETS[52],"obj_warehouse":window.WS_ASSETS[53],"obj_hut":window.WS_ASSETS[54],"obj_stonehouse":window.WS_ASSETS[55],"obj_smithy":window.WS_ASSETS[56],"imp":window.WS_ASSETS[57],"hellhound":window.WS_ASSETS[58],"gargoyle":window.WS_ASSETS[59],"succubus":window.WS_ASSETS[60],"blaze_duke":window.WS_ASSETS[61],"venom_count":window.WS_ASSETS[62],"ruin_marshal":window.WS_ASSETS[63],"void_seer":window.WS_ASSETS[64],"demon_king":window.WS_ASSETS[65],"infernal_ore":window.WS_ASSETS[66],"hellwood":window.WS_ASSETS[67],"shadow_grass":window.WS_ASSETS[68],"nightshade":window.WS_ASSETS[69],"obsidian_shard":window.WS_ASSETS[70],"demon_ichor":window.WS_ASSETS[71],"obj_demon_gate":window.WS_ASSETS[72],"obj_return_gate":window.WS_ASSETS[73],"obj_demon_tower":window.WS_ASSETS[74],"obj_demon_castle":window.WS_ASSETS[75],"generator":window.WS_ASSETS[76],"obj_generator":window.WS_ASSETS[77],"large_generator":window.WS_ASSETS[77],"obj_large_generator":window.WS_ASSETS[77],"battery_bank":window.WS_ASSETS[78],"obj_battery_bank":window.WS_ASSETS[78],"electric_workbench":window.WS_ASSETS[79],"obj_electric_workbench":window.WS_ASSETS[79],"electric_furnace":window.WS_ASSETS[80],"obj_electric_furnace":window.WS_ASSETS[80],"control_panel":window.WS_ASSETS[81],"obj_control_panel":window.WS_ASSETS[81],"cable_spool":window.WS_ASSETS[82],"obj_cable_spool":window.WS_ASSETS[82],"power_pole":window.WS_ASSETS[83],"obj_power_pole":window.WS_ASSETS[83],"street_lamp":window.WS_ASSETS[84],"obj_street_lamp":window.WS_ASSETS[84],"wall_lamp":window.WS_ASSETS[85],"obj_wall_lamp":window.WS_ASSETS[85],"floodlight":window.WS_ASSETS[86],"obj_floodlight":window.WS_ASSETS[86],"water_pump":window.WS_ASSETS[87],"obj_water_pump":window.WS_ASSETS[87],"fridge":window.WS_ASSETS[88],"obj_fridge":window.WS_ASSETS[88],"powered_chest":window.WS_ASSETS[89],"obj_powered_chest":window.WS_ASSETS[89],"electric_terminal":window.WS_ASSETS[90],"obj_electric_terminal":window.WS_ASSETS[90],"vehicle_bay":window.WS_ASSETS[91],"obj_vehicle_bay":window.WS_ASSETS[91],"mana_generator":window.WS_ASSETS[92],"obj_mana_generator":window.WS_ASSETS[92],"mana_core":window.WS_ASSETS[93],"obj_mana_core":window.WS_ASSETS[93],"magic_workbench":window.WS_ASSETS[94],"obj_magic_workbench":window.WS_ASSETS[94],"mana_forge":window.WS_ASSETS[95],"obj_mana_forge":window.WS_ASSETS[95],"alchemy_table":window.WS_ASSETS[96],"obj_alchemy_table":window.WS_ASSETS[96],"enchant_altar":window.WS_ASSETS[97],"obj_enchant_altar":window.WS_ASSETS[97],"teleport_pad":window.WS_ASSETS[98],"obj_teleport_pad":window.WS_ASSETS[98],"mana_relay":window.WS_ASSETS[99],"obj_mana_relay":window.WS_ASSETS[99],"arcane_lamp":window.WS_ASSETS[100],"obj_arcane_lamp":window.WS_ASSETS[100],"mana_fountain":window.WS_ASSETS[101],"obj_mana_fountain":window.WS_ASSETS[101],"mana_pool":window.WS_ASSETS[102],"obj_mana_pool":window.WS_ASSETS[102],"cursed_brazier":window.WS_ASSETS[103],"obj_cursed_brazier":window.WS_ASSETS[103],"rune_lectern":window.WS_ASSETS[104],"obj_rune_lectern":window.WS_ASSETS[104],"crystal_node":window.WS_ASSETS[105],"obj_crystal_node":window.WS_ASSETS[105],"demon_altar":window.WS_ASSETS[106],"obj_demon_altar":window.WS_ASSETS[106],"astral_desk":window.WS_ASSETS[107],"obj_astral_desk":window.WS_ASSETS[107]};
SPECIAL_ITEM_ICONS.obj_granary=SPECIAL_ITEM_ICONS.obj_warehouse;SPECIAL_ITEM_ICONS.obj_fort=SPECIAL_ITEM_ICONS.obj_stonehouse;SPECIAL_ITEM_ICONS.obj_mana_tower=SPECIAL_ITEM_ICONS.mana_generator;SPECIAL_ITEM_ICONS.obj_large_cottage=SPECIAL_ITEM_ICONS.obj_hut;SPECIAL_ITEM_ICONS.obj_grand_loghouse=SPECIAL_ITEM_ICONS.obj_warehouse;SPECIAL_ITEM_ICONS.obj_grand_manor=SPECIAL_ITEM_ICONS.obj_stonehouse;
Object.assign(SPECIAL_ITEM_ICONS,{
 copper_wire:SPECIAL_ITEM_ICONS.cable_spool,insulated_cable:SPECIAL_ITEM_ICONS.cable_spool,
 circuit_board:SPECIAL_ITEM_ICONS.electric_terminal,electric_motor:SPECIAL_ITEM_ICONS.electric_generator,
 mana_crystal:SPECIAL_ITEM_ICONS.crystal_node,rune_plate:SPECIAL_ITEM_ICONS.rune_lectern,
 magic_potion:SPECIAL_ITEM_ICONS.healing_potion
});

Object.assign(SPECIAL_ITEM_ICONS,{
 cave_entrance:window.WS_ASSETS[108],
 obj_cave_entrance:window.WS_ASSETS[108],
 cave_next:window.WS_ASSETS[109],
 obj_cave_next:window.WS_ASSETS[109],
 cave_back:window.WS_ASSETS[110],
 obj_cave_back:window.WS_ASSETS[110],
 cave_exit:window.WS_ASSETS[111],
 obj_cave_exit:window.WS_ASSETS[111],
 water:window.WS_ASSETS[112],
 flask:window.WS_ASSETS[112],
 leafcup:window.WS_ASSETS[112],
 glass:window.WS_ASSETS[113],
 copper_ingot:window.WS_ASSETS[114],
 gold_ingot:window.WS_ASSETS[115],
 bronze_ingot:window.WS_ASSETS[115],
 tin_ingot:window.WS_ASSETS[116],
 iron_ingot:window.WS_ASSETS[117],
 steel_ingot:window.WS_ASSETS[117],
 silver_ingot:window.WS_ASSETS[117],
 mythril_ingot:window.WS_ASSETS[118],
 adamantite_ingot:window.WS_ASSETS[119],
 orichalcum_ingot:window.WS_ASSETS[120],
 fishing_rod:window.WS_ASSETS[121],
 bow:window.WS_ASSETS[122],
 cooked_meat:window.WS_ASSETS[123],
 grilled_fish:window.WS_ASSETS[124],
 berry_jam:window.WS_ASSETS[125],
 mushroom_soup:window.WS_ASSETS[126],
 soup:window.WS_ASSETS[126],
 herb_stew:window.WS_ASSETS[127],
 meat_stew:window.WS_ASSETS[128],
 fish_soup:window.WS_ASSETS[126],
 bread:window.WS_ASSETS[129],
 jerky:window.WS_ASSETS[130],
 hearty_meal:window.WS_ASSETS[131],
 waterskin:window.WS_ASSETS[132]
});

// WILDSEED v1.0.6 - verified individual transparent sprites.
Object.assign(SPECIAL_ITEM_ICONS,{
 copper_ingot:window.WS_ASSETS[133],
 tin_ingot:window.WS_ASSETS[134],
 bronze_ingot:window.WS_ASSETS[135],
 iron_ingot:window.WS_ASSETS[136],
 steel_ingot:window.WS_ASSETS[137],
 silver_ingot:window.WS_ASSETS[138],
 gold_ingot:window.WS_ASSETS[139],
 mythril_ingot:window.WS_ASSETS[140],
 adamantite_ingot:window.WS_ASSETS[141],
 orichalcum_ingot:window.WS_ASSETS[142],
 glass:window.WS_ASSETS[143],
 water:window.WS_ASSETS[144],
 waterskin:window.WS_ASSETS[145],
 watering_can:window.WS_ASSETS[146],
 coal:window.WS_ASSETS[147],
 quartz:window.WS_ASSETS[148],
 cooked_meat:window.WS_ASSETS[149],
 grilled_fish:window.WS_ASSETS[150],
 soup:window.WS_ASSETS[151],
 meat_stew:window.WS_ASSETS[152],
 jerky:window.WS_ASSETS[153],
 mushroom_soup:window.WS_ASSETS[154],
 bread:window.WS_ASSETS[155],
 herb_stew:window.WS_ASSETS[156],
 fish_soup:window.WS_ASSETS[157],
 berry:window.WS_ASSETS[158],
 hearty_meal:window.WS_ASSETS[159],
 berry_jam:window.WS_ASSETS[160],
 roast_potato:window.WS_ASSETS[161],
 fishing_rod:window.WS_ASSETS[162],
 bow:window.WS_ASSETS[163],
 tanning_rack:window.WS_ASSETS[164],
 loom:window.WS_ASSETS[165],
 campfire:window.WS_ASSETS[166],
 fridge:window.WS_ASSETS[167],
 generator:window.WS_ASSETS[168],
 mana_generator:window.WS_ASSETS[169],
 electric_workbench:window.WS_ASSETS[170],
 magic_workbench:window.WS_ASSETS[171],
 repair_bench:window.WS_ASSETS[172],
 anvil:window.WS_ASSETS[173],
 cave_entrance:window.WS_ASSETS[174],
 obj_cave_entrance:window.WS_ASSETS[174],
 cave_next:window.WS_ASSETS[175],
 obj_cave_next:window.WS_ASSETS[175],
 cave_back:window.WS_ASSETS[176],
 obj_cave_back:window.WS_ASSETS[176],
 river_bridge:window.WS_ASSETS[177],
 obj_river_bridge:window.WS_ASSETS[177],
 rain_tank:window.WS_ASSETS[178],
 demon_gate:window.WS_ASSETS[179],
 obj_demon_gate:window.WS_ASSETS[179],
 demon_castle:window.WS_ASSETS[180],
 obj_demon_castle:window.WS_ASSETS[180],
 cave_exit:window.WS_ASSETS[181],
 obj_cave_exit:window.WS_ASSETS[181],
 copper_ore:window.WS_ASSETS[182],
 ore:window.WS_ASSETS[183],
 iron_ore:window.WS_ASSETS[183],
 mythril_ore:window.WS_ASSETS[184],
 mana_crystal:window.WS_ASSETS[185],
 chest:window.WS_ASSETS[186],
 obj_chest:window.WS_ASSETS[186],
 feather:window.WS_ASSETS[187],
 hide:window.WS_ASSETS[188],
 leather:window.WS_ASSETS[188],
 bone:window.WS_ASSETS[189],
 fang:window.WS_ASSETS[190],
 gel:window.WS_ASSETS[191],
 dragon_scale:window.WS_ASSETS[192],
 monster_core:window.WS_ASSETS[193],
 mana_core:window.WS_ASSETS[194],
 raw_meat:window.WS_ASSETS[195],
 irrigation:window.WS_ASSETS[196],
 water_tap:window.WS_ASSETS[197],
 seed:window.WS_ASSETS[198],
 flask:window.WS_ASSETS[199],
 leafcup:window.WS_ASSETS[200],
 glass_bottle:window.WS_ASSETS[201],
 obj_fridge:window.WS_ASSETS[167],
 obj_irrigation:window.WS_ASSETS[196],
 obj_generator:window.WS_ASSETS[168],
 obj_mana_generator:window.WS_ASSETS[169],
 obj_electric_workbench:window.WS_ASSETS[170],
 obj_magic_workbench:window.WS_ASSETS[171],
 obj_rain_tank:window.WS_ASSETS[178]
});

// WILDSEED v1.0.8 - manual art corrections and newly generated sprites.
SPECIAL_ITEM_ICONS.berry=window.WS_ASSETS[13];
SPECIAL_ITEM_ICONS.leather=window.WS_ASSETS[164];
SPECIAL_ITEM_ICONS.mana_core=window.WS_ASSETS[105];
SPECIAL_ITEM_ICONS.obj_mana_core=window.WS_ASSETS[105];
const CUSTOM_ICON_BASE='custom_assets/';
Object.assign(SPECIAL_ITEM_ICONS,{
 charcoal:CUSTOM_ICON_BASE+'charcoal.png',
 raft:CUSTOM_ICON_BASE+'raft.png',
 leather:CUSTOM_ICON_BASE+'leather.png',
 mana_core:CUSTOM_ICON_BASE+'mana_core.png',
 obj_mana_core:CUSTOM_ICON_BASE+'mana_core.png',
 incense_1:CUSTOM_ICON_BASE+'incense.png',
 incense_2:CUSTOM_ICON_BASE+'incense.png',
 incense_3:CUSTOM_ICON_BASE+'incense.png',
 incense_4:CUSTOM_ICON_BASE+'incense.png',
 medal_stand:CUSTOM_ICON_BASE+'medal_stand.png',
 obj_medal_stand:CUSTOM_ICON_BASE+'medal_stand.png',
 enhance_bench:CUSTOM_ICON_BASE+'enhance_bench.png',
 obj_enhance_bench:CUSTOM_ICON_BASE+'enhance_bench.png',
 electric_motor:CUSTOM_ICON_BASE+'electric_motor.png',
 garden:CUSTOM_ICON_BASE+'carrot_patch.png',
 arrow:CUSTOM_ICON_BASE+'arrow_basic.png',
 metal_arrow:CUSTOM_ICON_BASE+'arrow_iron.png',
 obj_granary:CUSTOM_ICON_BASE+'building_granary.png',
 obj_fort:CUSTOM_ICON_BASE+'building_fort.png',
 obj_large_cottage:CUSTOM_ICON_BASE+'building_large_cottage.png',
 obj_grand_loghouse:CUSTOM_ICON_BASE+'building_grand_loghouse.png',
 obj_grand_manor:CUSTOM_ICON_BASE+'building_grand_manor.png',
 obj_pasture:CUSTOM_ICON_BASE+'building_pasture.png'
});

const EMOJI_ICON_OVERRIDES=new Set();
function artFor(id,fallback='',className=''){if(BOW_IDS.includes(id)&&id!=='bow')id='bow';if(String(id).startsWith('pet_')){const pet=(st?.pets||[]).find(p=>petToken(p)===id);if(pet)return artFor(pet.type,CREATURES[pet.type][1],className);}const emojiOnly=EMOJI_ICON_OVERRIDES.has(id);const allowSpecialOnMap=/^(obj_)?cave_|^(obj_)?demon_(gate|castle)$|^(obj_)?river_bridge$/.test(id)||id==='garden';if(!emojiOnly&&SPECIAL_ITEM_ICONS[id]&&((!className.includes('map-object')&&!className.includes('node-art'))||allowSpecialOnMap))return '<span class="art-sprite special-icon '+className+'" style="background-image:url('+SPECIAL_ITEM_ICONS[id]+');background-size:contain;background-position:center;"></span>';const k=artKey(id);return !emojiOnly&&GAME_ART_SPRITES[k]?'<span class="art-sprite '+className+'" style="'+atlasCSS(k)+'" title="'+esc(ITEMS[id]?.[0]||NODES[id]?.[0]||CREATURES[id]?.[0]||'')+'"></span>':fallback;}

const HERO_FRAMES={"adventurer":[window.WS_ASSETS[202],window.WS_ASSETS[203],window.WS_ASSETS[204],window.WS_ASSETS[205],window.WS_ASSETS[206],window.WS_ASSETS[207],window.WS_ASSETS[208],window.WS_ASSETS[209],window.WS_ASSETS[210],window.WS_ASSETS[211],window.WS_ASSETS[212],window.WS_ASSETS[213],window.WS_ASSETS[214],window.WS_ASSETS[215],window.WS_ASSETS[216],window.WS_ASSETS[217]],"ranger":[window.WS_ASSETS[218],window.WS_ASSETS[219],window.WS_ASSETS[220],window.WS_ASSETS[221],window.WS_ASSETS[222],window.WS_ASSETS[223],window.WS_ASSETS[224],window.WS_ASSETS[225],window.WS_ASSETS[226],window.WS_ASSETS[227],window.WS_ASSETS[228],window.WS_ASSETS[229],window.WS_ASSETS[230],window.WS_ASSETS[231],window.WS_ASSETS[232],window.WS_ASSETS[233]],"mage":[window.WS_ASSETS[234],window.WS_ASSETS[235],window.WS_ASSETS[236],window.WS_ASSETS[237],window.WS_ASSETS[238],window.WS_ASSETS[239],window.WS_ASSETS[240],window.WS_ASSETS[241],window.WS_ASSETS[242],window.WS_ASSETS[243],window.WS_ASSETS[244],window.WS_ASSETS[245],window.WS_ASSETS[246],window.WS_ASSETS[247],window.WS_ASSETS[248],window.WS_ASSETS[249]],"knight":[window.WS_ASSETS[266],window.WS_ASSETS[267],window.WS_ASSETS[268],window.WS_ASSETS[269],window.WS_ASSETS[270],window.WS_ASSETS[271],window.WS_ASSETS[272],window.WS_ASSETS[273],window.WS_ASSETS[274],window.WS_ASSETS[275],window.WS_ASSETS[276],window.WS_ASSETS[277],window.WS_ASSETS[278],window.WS_ASSETS[279],window.WS_ASSETS[280],window.WS_ASSETS[281]]};

// Character standees: 4 columns = down,left,right,up; rows = idle,walkA,walkB,attack.
const HERO_STYLES=[['adventurer','冒険者'],['ranger','レンジャー'],['mage','魔導士'],['knight','騎士']];
const HERO_DIRECTIONS=['down','left','right','up'];
let heroMotion={facing:'down',stepUntil:0,attackUntil:0,lastSrc:'',lastStyle:''};
function currentHeroStyle(){return HERO_FRAMES[st?.avatarStyle]?st.avatarStyle:'adventurer';}
function heroFacingByDelta(dx,dy){if(Math.abs(dx)>=Math.abs(dy)&&dx)heroMotion.facing=dx>0?'right':'left';else if(dy)heroMotion.facing=dy>0?'down':'up';}
function heroMarkMove(from,to){heroFacingByDelta(to.x-from.x,to.y-from.y);heroMotion.stepUntil=Date.now()+360;}
function heroMarkAttack(to){if(to)heroFacingByDelta(to.x-st.pos.x,to.y-st.pos.y);heroMotion.attackUntil=Date.now()+640;}
function heroIndex(row,dir=heroMotion.facing){return 4*row+Math.max(0,HERO_DIRECTIONS.indexOf(dir));}
function heroFrameURL(row=0,dir=heroMotion.facing){return HERO_FRAMES[currentHeroStyle()][heroIndex(row,dir)];}
function updateHeroStandee(){if(!st)return;
 const image=el('heroStandeeImage'),root=el('heroStandee');if(!image||!root)return;
 const now=Date.now(),attacking=now<heroMotion.attackUntil;
 const walking=!attacking&&(!!ui.moving||now<heroMotion.stepUntil);
 const frame=attacking?3:walking?1+(Math.floor(now/155)%2):st.combat?(Math.floor(now/950)%2?3:0):0;
 const url=heroFrameURL(frame);
 if(heroMotion.lastSrc!==url){image.src=url;heroMotion.lastSrc=url;}
 root.classList.toggle('is-walking',walking);root.classList.toggle('is-attacking',attacking);root.classList.toggle('in-battle',!!st.combat);
 const heroName=HERO_STYLES.find(a=>a[0]===currentHeroStyle())?.[1]||'主人公';
 const nameLabel=el('heroStandeeName');if(nameLabel)nameLabel.textContent=heroName;
 const statusLabel=el('heroStandeeStatus');if(statusLabel)statusLabel.textContent=attacking?'⚔ 攻撃中':st.combat?'⚔ 戦闘中':walking?'👣 移動中':'待機中';
}
function positionHeroStandee(){const root=el('heroStandee'),grid=el('mapgrid');if(!root||!grid)return;const g=grid.getBoundingClientRect(),p=root.parentElement.getBoundingClientRect();if(!g.width)return;root.style.left=Math.max(-2,Math.round(g.left-p.left-4))+'px';root.style.bottom=Math.max(34,Math.round(p.bottom-g.bottom-2))+'px';}
function openHeroSelector(force=false){const modal=el('heroOverlay');if(force)ui.forceHeroSelect=true;modal.classList.remove('hidden');const current=currentHeroStyle();
 const intro=modal.querySelector('p'),closeBtn=modal.querySelector('[data-act="heroclose"]'),title=el('heroTitle');
 if(title)title.textContent=ui.forceHeroSelect?'最初に主人公を選んでください':'主人公の見た目';
 if(intro)intro.textContent=ui.forceHeroSelect?'ゲーム開始前に主人公の見た目を1つ選んでください。見た目だけが変わり、能力や装備には影響しません。':'冒険中いつでも変更できます。見た目だけが切り替わり、職業・装備・能力値は変わりません。移動方向、歩行、戦闘に合わせて姿が変化します。';
 if(closeBtn){closeBtn.disabled=!!ui.forceHeroSelect;closeBtn.textContent=ui.forceHeroSelect?'下から1つ選んで開始':'閉じる';}
 el('heroChoices').innerHTML=HERO_STYLES.map(([id,name])=>`<button class="hero-choice ${current===id?'selected':''}" data-herostyle="${id}" aria-pressed="${current===id}" title="${name}に変更"><img src="${HERO_FRAMES[id][0]}" alt="${name}" draggable="false" loading="lazy"><b>${name}</b><small>${id===current?'✓ 使用中':ui.forceHeroSelect?'この見た目で始める':'選択する'}</small></button>`).join('');}
function closeHeroSelector(force=false){if(ui?.forceHeroSelect&&!force)return;el('heroOverlay').classList.add('hidden');}
function selectHeroStyle(id){if(!HERO_FRAMES[id])return;const initial=!!ui.forceHeroSelect;st.avatarStyle=id;heroMotion.lastSrc='';ui.forceHeroSelect=false;closeHeroSelector(true);heroMotion.lastSrc='';draw();toast(initial?'主人公の見た目を決定しました':'主人公の見た目を変更しました');if(initial&&st.firstRun)showHelp(true);}
setInterval(updateHeroStandee,155);

function playerMiniAvatar(){const w=equipped('weapon');const weaponIcon=w?(ITEMS[w]?.[1]||'⚔️'):'';return `<span class="mini-player">🧑‍🌾</span>${weaponIcon?`<span class="mini-weapon">${weaponIcon}</span>`:''}`;}
function playerBattleAvatar(){const slots=[['head','head'],['body','body'],['feet','feet'],['weapon','weapon']];return `<div class="player-card"><div class="hero-battle-image"><img src="${heroFrameURL(3)}" alt="主人公の戦闘姿"></div>${slots.map(([slot,cls])=>{const id=equipped(slot);return id?`<div class="eq ${cls}">${artFor(id,ITEMS[id]?.[1]||'')}</div>`:''}).join('')}</div>`;}



// Ranged equipment and the equipment-upgrade workbench.
Object.assign(ITEMS,{
 bow:['木弓','🏹',1.6,'武器'],copper_bow:['銅補強弓','🏹',2.1,'武器'],iron_bow:['鉄補強弓','🏹',2.8,'武器'],mythril_bow:['ミスリル弓','🏹',2.3,'武器'],orichalcum_bow:['オリハルコン弓','🏹',3.0,'武器'],
 arrow:['木の矢','➶',.08,'弾薬'],metal_arrow:['金属矢','➶',.12,'弾薬'],enhance_bench:['装備強化台','⚒️',12,'設備']
});
Object.assign(GEAR,{
 bow:{slot:'weapon',attack:4,kind:'射撃',range:2,shot:10},copper_bow:{slot:'weapon',attack:5,kind:'射撃',range:3,shot:15},iron_bow:{slot:'weapon',attack:7,kind:'射撃',range:4,shot:23},mythril_bow:{slot:'weapon',attack:9,kind:'射撃',range:5,shot:37},orichalcum_bow:{slot:'weapon',attack:11,kind:'射撃',range:6,shot:54}
});
RECIPES.push(
 {id:'arrow',in:{branch:2,stone_blade:1,feather:1},out:6,at:'hand',cat:'武器',min:8,desc:'弓で使用する基本の矢。6本作れる。'},
 {id:'metal_arrow',in:{iron_ingot:1,branch:3,feather:2},out:8,at:'bench',cat:'武器',min:12,desc:'威力を増す金属矢。8本作れる。'},
 {id:'bow',in:{branch:6,rope:3,wood:2},at:'bench',cat:'武器',min:25,desc:'射程2マス。弓を装備し「射撃モード」を使う。'},
 {id:'copper_bow',in:{bow:1,copper_ingot:3,rope:2},at:'bench',cat:'武器',min:36,desc:'射程3マス。'},
 {id:'iron_bow',in:{copper_bow:1,iron_ingot:4,rope:3},at:'anvil',cat:'武器',min:48,desc:'射程4マス。'},
 {id:'mythril_bow',in:{iron_bow:1,mythril_ingot:5,rope:4},at:'anvil',cat:'武器',min:65,desc:'射程5マス。'},
 {id:'orichalcum_bow',in:{mythril_bow:1,orichalcum_ingot:6,rope:5},at:'anvil',cat:'武器',min:80,desc:'射程6マス。'},
 {id:'enhance_bench',in:{wood:8,iron_ingot:5,stone:8,steel_ingot:2},at:'bench',cat:'設備',min:70,desc:'武器・防具を50％の確率で強化する設備。'}
);
const BOW_IDS=['bow','copper_bow','iron_bow','mythril_bow','orichalcum_bow'];

const DURABLE=new Set([...Object.keys(GEAR),...TOOL_AXES,...TOOL_PICKS,'fishing_rod','watering_can']);
function gearTier(id){let x=String(id);if(x.includes('orichalcum'))return 8;if(x.includes('adamantite'))return 7;if(x.includes('mythril'))return 6;if(x.includes('steel'))return 5;if(x.includes('iron'))return 4;if(x.includes('bronze'))return 3;if(x.includes('copper'))return 2;if(x.includes('leather'))return 2;return 1;}
function maxDur(id){return DURABLE.has(id)?Math.round(35+gearTier(id)**1.5*25):0;}
function durabilityStore(container){if(!container)return {};if(!container.durability)container.durability={};return container.durability;}
function ensureDura(){if(!st.durability)st.durability={};for(let [id,n]of Object.entries(st.inventory))if(DURABLE.has(id)){let arr=st.durability[id]||[];while(arr.length<n)arr.push(maxDur(id));if(arr.length>n)arr.length=n;st.durability[id]=arr;} }

function ensureEnhancements(){
 st.enhancements=st.enhancements||{};
 for(const [id,n] of Object.entries(st.inventory||{}))if(DURABLE.has(id)){
   const list=st.enhancements[id]||[];
   while(list.length<n)list.push(0);
   if(list.length>n)list.length=n;
   st.enhancements[id]=list;
 }
}
function upgradeIndex(id){ensureEnhancements();const a=st.enhancements[id]||[];let best=0;for(let i=1;i<a.length;i++)if(a[i]>a[best])best=i;return best;}
function upgradeLevel(id){if(!id||!has(id))return 0;const a=st.enhancements?.[id]||[];return a[upgradeIndex(id)]||0;}
function upgradeName(id){return (ITEMS[id]?.[0]||id)+(upgradeLevel(id)?' +'+upgradeLevel(id):'');}
function activeGearValue(id,stat){if(!id)return 0;const gear=GEAR[id];if(!gear)return 0;const lv=upgradeLevel(id);return Math.round((gear[stat]||0)+(stat==='def'?2:stat==='shot'?4:3)*lv);}
function enhanceItem(id){
 if(!GEAR[id]||!has(id)){toast('強化できる装備を所持していません');return;}
 if(!stationAvailable('enhance_bench')){toast('設置した装備強化台が必要です');return;}
 const recipe=RECIPES.find(r=>r.id===id);if(!recipe){toast('この装備には製作レシピがありません');return;}
 if(!canAfford(recipe.in)){toast('装備製作と同じ量の素材が必要です');return;}
 if(st.stamina<4){toast('強化に必要なスタミナが不足しています');return;}
 // Materials are spent whether the 50% gamble succeeds or fails.
 useMats(recipe.in);
 const idx=upgradeIndex(id),levels=st.enhancements[id]||[],before=levels[idx]||0,success=Math.random()<.5;
 levels[idx]=Math.max(0,before+(success?1:-1));
 cost({min:20+gearTier(id)*4,energy:4,hunger:.3,thirst:.4});
 addLog(`⚒ ${ITEMS[id][0]} 強化${success?'成功':'失敗'}：+${before} → +${levels[idx]}（成功率50%）`);
 playSfx(success?'craft':'hit');draw();
}

function durText(id,storage=null){if(!DURABLE.has(id))return '';let arr=storage?storage.durability?.[id]:st.durability?.[id];let v=arr?.length?Math.min(...arr):maxDur(id);return `${v}/${maxDur(id)}`;}
function wear(id,amount=1){if(!id||!DURABLE.has(id)||!has(id))return;if(Math.random()<skillValue('durabilitySave')/100)return;ensureDura();let arr=st.durability[id];let idx=Object.values(st.equipment||{}).includes(id)?upgradeIndex(id):arr.indexOf(Math.min(...arr));arr[idx]=Math.max(0,arr[idx]-amount);if(arr[idx]===0){removeItem(id,1,idx);addLog(`💥 ${ITEMS[id][0]}が壊れた！`);toast(`${ITEMS[id][0]}が壊れた`);} }
function recipeRepairMaterial(id){let tier=gearTier(id);if(tier===8)return 'orichalcum_ingot';if(tier===7)return 'adamantite_ingot';if(tier===6)return 'mythril_ingot';if(tier===5)return 'steel_ingot';if(tier===4)return 'iron_ingot';if(tier===3)return 'bronze_ingot';if(tier===2)return id.includes('leather')?'leather':'copper_ingot';return id.includes('cloth')?'cloth':id.includes('leather')?'leather':'stone';}
function repairItem(id){if(!has(id)||!DURABLE.has(id)||!stationAvailable('repair_bench')){toast('設置した修理台が必要です');return;}ensureDura();let a=st.durability[id],index=a.indexOf(Math.min(...a)),val=a[index];if(val===maxDur(id)){toast('耐久力は満タンです');return;}let mat=recipeRepairMaterial(id);if(!has(mat)){toast(`${ITEMS[mat][0]}が1個必要です`);return;}removeItem(mat,1);a[index]=maxDur(id);cost({min:20+gearTier(id)*3,energy:3});addLog(`🛠 ${ITEMS[id][0]}を修理した（${ITEMS[mat][0]}×1）。`);draw();}
function rainNow(){let d=day(),h=Math.floor(st.time%1440/180);return (hash(d,Math.floor(h/2),st.seed)%100)<43;}
function timeOfDay(){let h=(st.time%1440)/60;return h>=18.4||h<5.1?'night':h>=16.6&&h<18.4?'dusk':h>=5.1&&h<6.5?'dawn':'day';}

let st,ui={tab:'items',view:'field',page:0,storageMode:'in',journalMode:'goals',selected:null,chosenItem:null,craftFilter:'全部',showCraftable:false,placing:null,inside:null,storageId:null,tooltip:null,moving:false,route:[],storePages:{in:0,out:0},storeAmount:1,transferFlash:null,battleSummary:null,forceHeroSelect:false};let uid=1,toastTimer;
function makeId(){return 'o'+Date.now().toString(36)+'_'+(uid++).toString(36)}
function hash(a,b,c){let x=(a*73856093)^(b*19349663)^(c*83492791);x=Math.imul(x^(x>>>16),0x45d9f3b);x=Math.imul(x^(x>>>16),0x45d9f3b);return(x^(x>>>16))>>>0}
function rng(seed){let x=seed>>>0;return()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
// A river's exit point is keyed to the shared edge so adjacent fields agree.
// Multi-cell structures must be selectable and usable from any occupied cell.
function rectDistance(pos,o){
 const maxX=o.x+(o.w||1)-1, maxY=o.y+(o.h||1)-1;
 const dx=pos.x<o.x?o.x-pos.x:pos.x>maxX?pos.x-maxX:0;
 const dy=pos.y<o.y?o.y-pos.y:pos.y>maxY?pos.y-maxY:0;
 return dx+dy;
}
function adjacentToObject(pos,o){return rectDistance(pos,o)<=1;}
function riverEdgeCenter(ax,ay,bx,by){
 const a=(ax+WORLD)%WORLD, b=(ay+WORLD)%WORLD, c=(bx+WORLD)%WORLD, d=(by+WORLD)%WORLD;
 const k1=a*WORLD+b,k2=c*WORLD+d;
 return 3+(hash(Math.min(k1,k2),Math.max(k1,k2),st.seed)%7);
}

/* 世界全域を一度に117×117（魔界は91×91）で生成し、各13×13エリアは切り出す。
   これにより川と海岸がエリア境界で途切れない。ワールドの東西・南北も連続。 */
const SHARED_TERRAIN_VERSION=2;
const worldTerrainCache={};
const RIVER_PATH=[[60,82],[56,75],[54,69],[51,63],[52,57],[48,51],[44,44],[42,38],[37,43],[32,51],[26,60],[19,67],[13,71]];
function sharedWorldTerrain(realm='mortal'){
 const size=realm==='demon'?DEMON_WORLD:WORLD,rows=realm==='demon'?DEMON_ROWS:WORLD_ROWS;
 const cacheKey=realm+':'+st.seed;
 if(worldTerrainCache[cacheKey])return worldTerrainCache[cacheKey];
 const length=size*S,terrain=Array.from({length},()=>Array(length));
 const mod=(v,n)=>((v%n)+n)%n;
 const interp=(a,b,t)=>a+(b-a)*(t*t*(3-2*t));
 const elevOf=t=>realm==='demon'?({V:-1.2,D:.9,M:1.05,O:1.3,B:.62}[t]??.8):({'~':-1.12,C:.33,F:1.18,G:1.03,R:.93,H:1.43}[t]??.7);
 function blendedElevation(gx,gy){
  const px=(gx+.5)/S-.5,py=(gy+.5)/S-.5,ix=Math.floor(px),iy=Math.floor(py),tx=px-ix,ty=py-iy;
  const a=interp(elevOf(rows[mod(iy,size)][mod(ix,size)]),elevOf(rows[mod(iy,size)][mod(ix+1,size)]),tx);
  const b=interp(elevOf(rows[mod(iy+1,size)][mod(ix,size)]),elevOf(rows[mod(iy+1,size)][mod(ix+1,size)]),tx);
  return interp(a,b,ty);
 }
 function periodicNoise(x,y){
  const seed=st.seed||0,ph=seed*.000003;
  return .095*Math.sin(x*2*Math.PI/length*5+ph)*Math.cos(y*2*Math.PI/length*4-ph)+
         .055*Math.sin(x*2*Math.PI/length*11+ph*.7)*Math.cos(y*2*Math.PI/length*9+ph*1.3);
 }
 function riverDistance(x,y){let d=1e4;for(let i=1;i<RIVER_PATH.length;i++){
  const [ax,ay]=RIVER_PATH[i-1],[bx,by]=RIVER_PATH[i];
  const t=Math.max(0,Math.min(1,((x-ax)*(bx-ax)+(y-ay)*(by-ay))/((bx-ax)**2+(by-ay)**2||1)));
  d=Math.min(d,Math.hypot(x-ax-(bx-ax)*t,y-ay-(by-ay)*t));
 }return d;}
 for(let gy=0;gy<length;gy++)for(let gx=0;gx<length;gx++){
  const height=blendedElevation(gx,gy)+periodicNoise(gx,gy),b=rows[Math.floor(gy/S)][Math.floor(gx/S)];
  let g;
  if(height<-.12)g='ocean';else if(height<.04)g='water';else if(height<.29)g='sand';
  else if(realm==='demon'){
   if(b==='O')g=height>1.08?'rocky':'dirt';
   else if(b==='M')g='woodland';
   else if(b==='B')g=height<.64?'water':'dirt';
   else g=height>1.15?'rocky':'dirt';
  }else{
   const chance=(hash(gx,gy,st.seed)%1000)/1000;
   g=b==='H'?(chance<.68?'rocky':'dirt'):b==='F'?(chance<.71?'woodland':'grass'):
     b==='R'?(chance<.20?'dirt':'grass'):chance<.1?'dirt':'grass';
  }
  if(realm==='mortal'&&height>.03){
   const rd=riverDistance(gx,gy);
   if(rd<2.35)g='water';else if(rd<3.8&&!['ocean','water'].includes(g))g='sand';
  }
  terrain[gy][gx]=g;
 }
 // 初期位置を歩行可能に。ただし川自体をエリア端で上書きしない。
 if(realm==='mortal'){
  const px=4*S+6,py=4*S+6;
  for(let y=py-1;y<=py+1;y++)for(let x=px-1;x<=px+1;x++)if(terrain[y]?.[x]&&!['water','ocean'].includes(terrain[y][x]))terrain[y][x]='grass';
 }
 worldTerrainCache[cacheKey]=terrain;
 return terrain;
}
function continuousFieldGround(wx,wy,realm=currentRealm()){
 const terrain=sharedWorldTerrain(realm);
 return Array.from({length:S},(_,y)=>terrain[wy*S+y].slice(wx*S,wx*S+S));
}
function upgradeExistingFieldTerrain(f,wx,wy){
 if(!f||f.cave||f.terrainVersion===SHARED_TERRAIN_VERSION)return;
 f.ground=continuousFieldGround(wx,wy);
 for(const o of f.placed||[]){if(o.type==='river_bridge')continue;for(let yy=o.y;yy<o.y+(o.h||1);yy++)for(let xx=o.x;xx<o.x+(o.w||1);xx++)if(f.ground[yy]?.[xx]&&['water','ocean'].includes(f.ground[yy][xx]))f.ground[yy][xx]='grass';}
 f.nodes=(f.nodes||[]).filter(n=>!['water','ocean'].includes(f.ground[n.y]?.[n.x]));
 f.terrainVersion=SHARED_TERRAIN_VERSION;
}

function biome(x,y){const rows=currentWorldRows(),size=currentWorldSize();return rows[(y+size)%size][(x+size)%size]}
function key(x=st.wx,y=st.wy){return x+','+y}
function field(){
 if(st.cave){let cid=st.cave.id+':'+st.cave.room;if(!st.caves)st.caves={};if(!st.caves[cid])st.caves[cid]=genCaveRoom(st.cave.id,st.cave.room);st.caves[cid].creatures?.forEach(initializeMobStats);return st.caves[cid];}
 let k=fieldKey();if(!st.fields[k])st.fields[k]=genField(st.wx,st.wy);else upgradeExistingFieldTerrain(st.fields[k],st.wx,st.wy);st.fields[k].creatures?.forEach(initializeMobStats);return st.fields[k];}
function genDemonField(wx,wy){const b=biome(wx,wy),r=rng(hash(700+wx,900+wy,st.seed));let ground=continuousFieldGround(wx,wy,'demon');
 let nodes=[],creatures=[],placed=[];
 const types=b==='O'?{rock:14,ore:16,grass:5,bush:3}:b==='M'?{tree:18,bush:9,grass:13,ore:5,vine:4}:b==='B'?{grass:10,bush:8,ore:5,clay:6,reed:8}:b==='V'?{}:{tree:8,rock:9,grass:12,bush:7,ore:10,clay:3};
 function addNode(type){for(let t=0;t<120;t++){let x=1+Math.floor(r()*(S-2)),y=1+Math.floor(r()*(S-2));if(Math.abs(x-6)+Math.abs(y-6)<2||['water','ocean'].includes(ground[y][x])||nodes.some(n=>n.x===x&&n.y===y))continue;nodes.push({x,y,type,qty:2+Math.floor(r()*4)});return;}}
 for(const [type,count] of Object.entries(types))for(let i=0;i<count;i++)addNode(type);
 if(wx===DEMON_GATE_SURFACE.demon.wx&&wy===DEMON_GATE_SURFACE.demon.wy){placed.push({id:makeId(),type:'return_gate',x:DEMON_GATE_SURFACE.demon.x,y:DEMON_GATE_SURFACE.demon.y,room:null});}
 const tw=towerAt(wx,wy);if(tw)placed.push({id:makeId(),type:'demon_tower',towerId:tw.id,x:tw.x,y:tw.y,room:null});
 if(wx===DEMON_CASTLE_POS.wx&&wy===DEMON_CASTLE_POS.wy)placed.push({id:makeId(),type:'demon_castle',x:DEMON_CASTLE_POS.x,y:DEMON_CASTLE_POS.y,room:null});
 if(b!=='V'){const pools={O:['gargoyle','hellhound','imp'],M:['imp','succubus','hellhound'],B:['imp','succubus','slime'],D:['imp','hellhound','gargoyle']};const options=pools[b]||['imp','hellhound','gargoyle'];for(let t=0;t<4;t++){let type=options[Math.floor(r()*options.length)];for(let z=0;z<45;z++){let x=1+Math.floor(r()*(S-2)),y=1+Math.floor(r()*(S-2));if(Math.abs(x-6)+Math.abs(y-6)<4||['water','ocean'].includes(ground[y][x])||nodes.some(n=>n.x===x&&n.y===y)||creatures.some(c=>c.x===x&&c.y===y)||placed.some(o=>o.x===x&&o.y===y))continue;creatures.push({id:makeId(),x,y,type,hp:CREATURES[type][2]});break;}}}
 return {ground,nodes,creatures,placed,day:1,demon:true,terrainVersion:SHARED_TERRAIN_VERSION};}
function genField(wx,wy){if(currentRealm()==='demon')return genDemonField(wx,wy);const b=biome(wx,wy),r=rng(hash(wx,wy,st.seed));let ground=continuousFieldGround(wx,wy,'mortal');
 let nodes=[],creatures=[],placed=[];
 const types= b==='F'?{tree:20,rock:7,grass:12,bush:11,vine:5,clay:2,ore:2,herb:5,garden:3}:b==='G'?{tree:9,rock:8,grass:16,bush:11,clay:4,ore:2,herb:4,garden:7}:b==='R'?{tree:11,rock:10,grass:15,bush:12,clay:10,ore:2,reed:8,herb:5}:b==='C'?{tree:5,rock:10,grass:7,bush:5,sand:13,drift:8,ore:2,reed:3}:b==='H'?{tree:3,rock:14,grass:7,bush:4,ore:15,clay:6,herb:3}:b==='~'?{}:{};
 function addNode(type){for(let t=0;t<100;t++){let x=1+Math.floor(r()*(S-2)),y=1+Math.floor(r()*(S-2));if(Math.abs(x-6)+Math.abs(y-6)<2||['water','ocean'].includes(ground[y][x])||nodes.some(n=>n.x===x&&n.y===y))continue;nodes.push({x,y,type,qty:2+Math.floor(r()*4)});return;}}
 for(let [type,count] of Object.entries(types))for(let j=0;j<count;j++)addNode(type);
 if(wx===4&&wy===4){for(let [x,y] of [[6,5],[7,5],[7,6],[8,6],[8,5],[6,7],[6,8],[7,7],[8,7],[5,6],[4,6],[4,7],[4,8]]){if(!['water','ocean'].includes(ground[y][x]))ground[y][x]=['6,5','7,5'].includes(x+','+y)?'sand':'grass';}for(let [type,x,y] of [['tree',8,5],['rock',6,8],['grass',7,6],['bush',8,7],['clay',4,8]]){nodes=nodes.filter(n=>n.x!==x||n.y!==y);if(!['water','ocean'].includes(ground[y][x]))nodes.push({type,x,y,qty:7});}}
 if(caveEntrances(wx,wy)){let x=wx===4?10:2+(hash(wx,wy,st.seed)%9),y=wy===4?3:2+(hash(wy,wx,st.seed)%9);nodes=nodes.filter(n=>n.x!==x||n.y!==y);ground[y][x]='rocky';placed.push({id:makeId(),type:'cave_entrance',x,y,room:null});}
 if(wx===DEMON_GATE_SURFACE.mortal.wx&&wy===DEMON_GATE_SURFACE.mortal.wy){nodes=nodes.filter(n=>n.x!==DEMON_GATE_SURFACE.mortal.x||n.y!==DEMON_GATE_SURFACE.mortal.y);ground[DEMON_GATE_SURFACE.mortal.y][DEMON_GATE_SURFACE.mortal.x]='rocky';placed.push({id:makeId(),type:'demon_gate',x:DEMON_GATE_SURFACE.mortal.x,y:DEMON_GATE_SURFACE.mortal.y,room:null});}
 if(b!=='~'){const options=b==='H'?['rabbit','boar','slime','wolf','golem']:b==='F'?['rabbit','boar','bird','wolf','shadowwolf']:['rabbit','bird','boar','slime'];for(let t=0;t<3;t++){let type=options[Math.floor(r()*options.length)];for(let z=0;z<35;z++){let x=1+Math.floor(r()*(S-2)),y=1+Math.floor(r()*(S-2));if(Math.abs(x-6)+Math.abs(y-6)<4||['water','ocean'].includes(ground[y][x])||nodes.some(n=>n.x===x&&n.y===y)||creatures.some(c=>c.x===x&&c.y===y))continue;creatures.push({id:makeId(),x,y,type,hp:CREATURES[type][2]});break;}}}
 return{ground,nodes,creatures,placed,day:1,terrainVersion:SHARED_TERRAIN_VERSION};}

/* 洞窟はワールド上に分散配置。各洞窟は独立した2～4区画の13×13マップ */
function caveSpec(id){if(String(id).startsWith('demonTower:')){const tid=String(id).split(':')[1],info=towerInfo(tid);return {rank:9,rooms:1,name:info?info.name:'四天王の塔'};}if(id==='demonCastle')return {rank:11,rooms:3,name:'魔王城'};let [wx,wy]=id.split(',').map(Number),d=Math.abs(wx-4)+Math.abs(wy-4),h=hash(wx,wy,st.seed),rank=d<=2?1:2+h%5;return {rank,rooms:Math.min(4,2+Math.floor(rank/3)),name:rank<=1?'小さな洞穴':rank<=3?'地下洞窟':rank<=5?'深層坑道':'古代の竜窟'};}
function caveEntrances(wx,wy){if(currentRealm()==='demon')return false;const b=biome(wx,wy);if(b==='~')return false;if(wx===4&&wy===4)return true;let near=Math.abs(wx-4)+Math.abs(wy-4)<=2;return near?(hash(wx,wy,st.seed)%3===0):hash(wx,wy,st.seed)%4===0;}
function genCaveRoom(id,room){if(String(id).startsWith('demonTower:')){const tid=String(id).split(':')[1],info=towerInfo(tid),r=rng(hash(400+room,tid.length,st.seed));
 let ground=Array.from({length:S},(_,y)=>Array.from({length:S},(_,x)=>(x===0||y===0||x===S-1||y===S-1)?'cavewall':r()<.08?'caverock':'cavefloor'));
 for(let [x,y] of [[6,6],[6,5],[6,7],[5,6],[7,6],[9,6],[9,7],[9,8]])ground[y][x]='cavefloor';
 const nodes=[{x:3,y:3,type:'ore',deposit:'orichalcum_ore',qty:2},{x:3,y:9,type:'ore',deposit:'adamantite_ore',qty:2}],placed=[{id:makeId(),type:'cave_exit',room:null,x:6,y:6}],creatures=[];
 if(!demonProgress().towers[tid])creatures.push({id:makeId(),x:9,y:8,type:info?.boss||'blaze_duke',hp:CREATURES[info?.boss||'blaze_duke'][2],boss:true,towerId:tid});
 return {ground,nodes,creatures,placed,day:day(),cave:true};}
 if(id==='demonCastle'){const r=rng(hash(520+room,777,st.seed));
 let ground=Array.from({length:S},(_,y)=>Array.from({length:S},(_,x)=>(x===0||y===0||x===S-1||y===S-1)?'cavewall':r()<.10?'caverock':'cavefloor'));
 for(let [x,y] of [[6,6],[6,5],[6,7],[5,6],[7,6],[9,6]])ground[y][x]='cavefloor';
 const nodes=room===2?[]:[{x:3,y:3,type:'ore',deposit:room===0?'adamantite_ore':'orichalcum_ore',qty:3},{x:3,y:9,type:'ore',deposit:'obsidian',qty:3}],placed=[{id:makeId(),type:room===0?'cave_exit':'cave_back',room:null,x:6,y:6}],creatures=[];
 if(room<2)placed.push({id:makeId(),type:'cave_next',room:null,x:9,y:6});
 if(room===0){creatures.push({id:makeId(),x:9,y:8,type:'hellhound',hp:CREATURES.hellhound[2]},{id:makeId(),x:8,y:9,type:'gargoyle',hp:CREATURES.gargoyle[2]});}
 else if(room===1){creatures.push({id:makeId(),x:9,y:8,type:'succubus',hp:CREATURES.succubus[2]},{id:makeId(),x:8,y:9,type:'gargoyle',hp:CREATURES.gargoyle[2]});}
 else if(!demonProgress().kingDefeated){creatures.push({id:makeId(),x:9,y:8,type:'demon_king',hp:CREATURES.demon_king[2],boss:true});}
 return {ground,nodes,creatures,placed,day:day(),cave:true};}
 let [wx,wy]=id.split(',').map(Number),spec=caveSpec(id),r=rng(hash(wx*13+room,wy*17-room,st.seed));
 let ground=Array.from({length:S},(_,y)=>Array.from({length:S},(_,x)=>(x===0||y===0||x===S-1||y===S-1)?'cavewall':r()<.12?'caverock':'cavefloor'));
 for(let [x,y]of [[6,6],[6,5],[6,7],[5,6],[7,6],[3,6],[9,6],[6,3],[6,9]])ground[y][x]='cavefloor';
 const nodes=[],creatures=[],placed=[];
 const used=new Set(['6,6','6,5','6,7','5,6','7,6','3,6','9,6','6,3','6,9']);
 function spot(){for(let t=0;t<150;t++){let x=2+Math.floor(r()*9),y=2+Math.floor(r()*9);if(!used.has(x+','+y)){used.add(x+','+y);ground[y][x]='cavefloor';return{x,y};}}return{x:2,y:2};}
 placed.push({id:makeId(),type:room===0?'cave_exit':'cave_back',room:null,x:6,y:6});
 if(room<spec.rooms-1)placed.push({id:makeId(),type:'cave_next',room:null,x:9,y:6});
 for(let i=0;i<4+room*2;i++){let p=spot();let ores=spec.rank>=6?['mythril_ore','adamantite_ore','orichalcum_ore','coal','quartz']:spec.rank>=4?['ore','silver_ore','obsidian','mythril_ore','adamantite_ore']:spec.rank>=2?['copper_ore','tin_ore','ore','silver_ore','coal']:['copper_ore','tin_ore','ore','coal'];nodes.push({...p,type:'ore',deposit:ores[Math.floor(r()*ores.length)],qty:2+Math.floor(r()*4)});}
 for(let i=0;i<3;i++){let p=spot();nodes.push({...p,type:i%2?'rock':'herb',qty:2+Math.floor(r()*3)});}
 if(room===spec.rooms-1){let boss=spec.rank>=6?'dragon':spec.rank>=4?'abyss_knight':spec.rank>=2?'crystal_guard':'rock_beast';creatures.push({id:makeId(),x:9,y:9,type:boss,hp:CREATURES[boss][2],rank:spec.rank,boss:true});}
 else for(let i=0;i<Math.min(5,2+room+Math.floor(spec.rank/2));i++){let p=spot();let pool=spec.rank>=6?['shadowwolf','rock_beast','crystal_guard','abyss_knight']:spec.rank>=4?['wolf','rock_beast','crystal_guard']:['cave_rat','bat','slime','wolf'];let type=pool[Math.floor(r()*pool.length)];creatures.push({id:makeId(),...p,type,hp:CREATURES[type][2],rank:spec.rank});}
 for(let i=0;i<1+Math.floor(room/2);i++){let p=spot();placed.push({id:makeId(),type:'treasure',room:null,...p,opened:false,loot:generateTreasure(spec.rank,room,i)});}
 return{ground,nodes,creatures,placed,day:day(),cave:true};
}
function generateTreasure(rank,room,i){let rng2=rng(hash(rank,room+i,st.seed)),pool=rank>=6?['adamantite_ore','orichalcum_ore','mythril_ore','ancient_core','dragon_scale']:rank>=4?['iron_ingot','steel_ingot','mythril_ore','obsidian','monster_core']:['copper_ingot','tin_ingot','ore','herb','quartz','coal'];let loot={};for(let j=0;j<3;j++){let id=pool[Math.floor(rng2()*pool.length)];loot[id]=(loot[id]||0)+(1+Math.floor(rng2()*(rank>=4?3:2)));}return loot;}
function enterCave(id){if(st.cave||st.combat)return;st.cave={id,room:0};st.quests=st.quests||{};if(id==='demonCastle')st.quests.entered_demon_castle=true;else if(!String(id).startsWith('demonTower:'))st.quests.entered_cave=true;ui.inside=null;ui.selected=null;ui.storageId=null;ui.placing=null;st.pos={x:6,y:6};field();cost({min:8,energy:2});addLog(`🕳 ${caveSpec(id).name}に入った（危険度 ${caveSpec(id).rank}）。`);draw();}
function caveTraverse(dir){if(!st.cave||st.combat)return;let current=st.cave.room;const spec=caveSpec(st.cave.id);if(dir==='out'){let id=st.cave.id;st.cave=null;let obj=field().placed.find(o=>['cave_entrance','demon_tower','demon_castle'].includes(o.type));st.pos=obj?{x:Math.min(S-2,obj.x+1),y:obj.y}:{x:6,y:6};addLog(String(id).startsWith('demon')?'☀ 地上へ戻った。':'☀ 洞窟から地上へ戻った。');}
 else{let dest=current+(dir==='next'?1:-1);if(dest<0||dest>=spec.rooms)return;st.cave.room=dest;st.pos={x:6,y:6};addLog(`🕯 洞窟の第${dest+1}区画へ移動。`);}ui.selected=null;ui.battleSummary=null;cost({min:8,energy:1.3});draw();}
function openTreasure(){let o=selectedEntity()?.obj;if(!o||o.type!=='treasure')return;if(o.opened){toast('空の宝箱です');return;}if(!requireNear(o))return;let got=[];for(let[id,n]of Object.entries(o.loot||{})){let k=0;while(k<n&&addItem(id))k++;if(k)got.push(`${ITEMS[id][0]}×${k}`);if(k<n)o.loot[id]=n-k;else delete o.loot[id];}if(!Object.keys(o.loot).length)o.opened=true;cost({min:8,energy:1});addLog(`🎁 宝箱：${got.join('、')||'所持重量がいっぱい！'}`);toast(got.length?'宝箱の中身を獲得':'空き重量が必要');draw();}
function shiftRealm(target){if(st.combat||ui.moving)return;ui.inside=null;ui.selected=null;ui.storageId=null;ui.placing=null;st.cave=null;st.realm=target;if(target==='demon'){st.quests=st.quests||{};st.quests.entered_demon=true;st.wx=DEMON_GATE_SURFACE.demon.wx;st.wy=DEMON_GATE_SURFACE.demon.wy;st.pos={x:Math.max(1,DEMON_GATE_SURFACE.demon.x-1),y:DEMON_GATE_SURFACE.demon.y};currentVisited()[key()]=true;field();cost({min:12,energy:2,hunger:.2,thirst:.3});addLog('🌀 魔界の門をくぐり、薄暗い魔界へ足を踏み入れた。');toast('魔界へ移動した');}
 else{st.wx=DEMON_GATE_SURFACE.mortal.wx;st.wy=DEMON_GATE_SURFACE.mortal.wy;st.pos={x:Math.max(1,DEMON_GATE_SURFACE.mortal.x-1),y:DEMON_GATE_SURFACE.mortal.y};currentVisited()[key()]=true;field();cost({min:8,energy:1.2,hunger:.1,thirst:.1});addLog('🚪 帰還の門を抜けて現世へ戻った。');toast('現世へ戻った');}draw();}
function interactSpecialObject(){const e=selectedEntity();if(e?.kind!=='object')return;const o=e.obj;if(!requireNear(o))return;if(o.type==='demon_gate')shiftRealm('demon');else if(o.type==='return_gate')shiftRealm('mortal');else if(o.type==='demon_tower'){enterCave('demonTower:'+o.towerId);}else if(o.type==='demon_castle'){if(!allTowersCleared()){toast('四天王をすべて倒さないと魔王城に入れない');return;}enterCave('demonCastle');}}
function demonBossDefeated(m){const prog=demonProgress();if(st.cave?.id&&String(st.cave.id).startsWith('demonTower:')){const tid=String(st.cave.id).split(':')[1],info=towerInfo(tid);prog.towers[tid]=true;addLog(`🗼 ${info?.name||'四天王の塔'}を制圧！ 四天王撃破 ${clearedTowerCount()}/${DEMON_TOWERS.length}`);if(allTowersCleared())addLog('🏰 四天王をすべて倒した。魔王城への封印が解けた！');}else if(st.cave?.id==='demonCastle'&&m.type==='demon_king'){prog.kingDefeated=true;addLog('👑 魔王を討伐した！ これで一応のクリア。以後も冒険は続けられる。');toast('魔王討伐！ 一応のクリアです');}}

function blankState(){return{skillPoints:0,skills:{},pets:[],version:14,respawn:null,settings:{graveDays:10},goalVisibility:{},seed:Math.floor(Math.random()*1e9),realm:'mortal',wx:4,wy:4,pos:{x:6,y:6},hp:100,hunger:87,thirst:85,stamina:100,inventory:{},fields:{},time:480,logs:[],visited:{'4,4':true},visitedDemon:{},demon:{towers:{},kingDefeated:false},quests:{},carriedChest:null,deaths:0,waterSource:'',firstRun:true,avatarStyle:null,combat:null,equipment:{weapon:null,head:null,body:null,feet:null},durability:{},caves:{},cave:null,level:1,xp:0,points:0,perks:{hp:0,stamina:0,attack:0,defense:0,carry:0},turn:0};}
function progressInit(){st.quests=st.quests||{};if(st.respawn===undefined)st.respawn=null;if(!st.level)st.level=1;if(!st.realm)st.realm='mortal';if(!st.visitedDemon)st.visitedDemon={};if(!st.demon)st.demon={towers:{},kingDefeated:false};if(!st.skills||typeof st.skills!=='object')st.skills={};if(!Number.isFinite(st.skillPoints))st.skillPoints=Math.max(0,st.level-1-Object.keys(st.skills).filter(k=>st.skills[k]).length);if(!Number.isFinite(st.xp))st.xp=0;if(!Number.isFinite(st.points))st.points=0;if(!st.perks)st.perks={hp:0,stamina:0,attack:0,defense:0,carry:0};if(!Number.isFinite(st.turn))st.turn=0;if(!Array.isArray(st.pets))st.pets=[];for(const pet of st.pets){initializePetStats(pet);registerPetCard(pet);if(pet.where==='bag'&&!has(petToken(pet)))st.inventory[petToken(pet)]=1;}}

/* 10ジャンル × 4系統 × 5段階 = 200の独立ノード。前段階を取得すると上位が開く。 */
const SKILL_GROUPS=[
 ['🌳','伐採',[['樹木の収穫','woodQty','木材の採取数','個'],['枝集めの知恵','branchQty','小枝の採取数','個'],['速斧の技','chopTime','伐採時間短縮','分'],['省力伐採','chopEnergy','伐採スタミナ軽減','pt']]],
 ['⛏','採掘',[['鉱脈の見極め','oreQty','鉱石の採取数','個'],['石工の目利き','stoneQty','石の採取数','個'],['速掘り','mineTime','採掘時間短縮','分'],['省力採掘','mineEnergy','採掘スタミナ軽減','pt']]],
 ['🧭','探索',[['軽やかな足運び','moveEnergy','歩行スタミナ軽減','pt'],['旅路の達人','moveTime','1歩の時間短縮','分'],['運び屋の心得','carry','最大重量増加','kg'],['探究心','xp','獲得経験値増加','%']]],
 ['🏹','弓術',[['遠見の射手','bowRange','射程延長','マス'],['強弓の技','bowDamage','弓ダメージ増加',''],['必中の心得','bowAccuracy','射撃命中率増加','%'],['引き絞り','bowEnergy','射撃スタミナ軽減','pt']]],
 ['⚔','近接戦',[['剣術','swordDamage','剣ダメージ増加',''],['槍術','spearDamage','槍ダメージ増加',''],['打撃術','maceDamage','打撃ダメージ増加',''],['急所狙い','meleeCrit','会心率増加','%']]],
 ['🛡','守護',[['生命力','hp','最大HP増加',''],['持久力','stamina','最大スタミナ増加',''],['護身術','defense','防御力増加',''],['痛みへの耐性','damageReduction','被ダメージ軽減','']]],
 ['🐾','調教',[['お香の扱い','tameChance','テイム成功率増加','%'],['育成の才','tameHp','テイム後の仲間HP増加','%'],['群れの指揮','petDamage','仲間の援護攻撃増加','%'],['節香術','incenseSave','お香が残る確率','%']]],
 ['🛠','製作',[['手際の良さ','craftTime','製作時間短縮','%'],['職人の学び','craftXp','製作経験値増加','%'],['築城の心得','buildTime','建築時間短縮','%'],['丁寧な扱い','durabilitySave','耐久消費を防ぐ確率','%']]],
 ['🌿','農業と食料',[['薬草の知識','herbQty','薬草採取数増加','個'],['果実の知識','berryQty','ベリー採取数増加','個'],['畑の恵み','veggieQty','野菜採取数増加','個'],['食養生','foodEffect','食事の回復量増加','%']]],
 ['🏕','生活',[['熟睡','restStamina','休憩スタミナ回復増加',''],['休養術','restHp','休憩HP回復増加',''],['水分補給の技','drinkEffect','飲用水分の回復量増加',''],['釣りの勘','fishChance','釣り成功率増加','%']]]
];
const SKILL_STEP={woodQty:1,branchQty:1,chopTime:.55,chopEnergy:.30,oreQty:1,stoneQty:1,mineTime:.55,mineEnergy:.30,moveEnergy:.06,moveTime:.18,carry:2,xp:3,bowRange:1,bowDamage:2,bowAccuracy:2,bowEnergy:.3,swordDamage:3,spearDamage:3,maceDamage:3,meleeCrit:1.3,hp:6,stamina:5,defense:1,damageReduction:1,tameChance:3,tameHp:5,petDamage:6,incenseSave:4,craftTime:4,craftXp:5,buildTime:4,durabilitySave:4,herbQty:1,berryQty:1,veggieQty:1,foodEffect:4,restStamina:6,restHp:2,drinkEffect:4,fishChance:3};
const SKILL_NODES=SKILL_GROUPS.flatMap((g,gid)=>g[2].flatMap((b,col)=>Array.from({length:5},(_,t)=>({id:'s'+gid+'_'+col+'_'+t,group:gid,col,tier:t,key:b[1],name:b[0]+' '+['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ'][t],description:b[2],unit:b[3],amount:SKILL_STEP[b[1]],prereq:t?'s'+gid+'_'+col+'_'+(t-1):null}))));
const SKILL_BY_ID=Object.fromEntries(SKILL_NODES.map(x=>[x.id,x]));
function skillValue(key){let sum=0;for(const n of SKILL_NODES)if(n.key===key&&st?.skills?.[n.id])sum+=n.amount;return sum;}
function skillAdjustedTime(n,key,floor=1){return Math.max(floor,n-skillValue(key));}
function learnSkill(id){const n=SKILL_BY_ID[id];if(!n||st.combat||ui.moving)return;progressInit();if(st.skills[id]){toast('取得済みです');return;}if(!st.skillPoints){toast('スキルポイントが不足しています');return;}if(n.prereq&&!st.skills[n.prereq]){toast('前段階のスキルを取得してください');return;}st.skills[id]=true;st.skillPoints--;st.quests=st.quests||{};st.quests.learned_skill=true;if(n.key==='hp')st.hp=Math.min(hpMax(),st.hp+n.amount);if(n.key==='stamina')st.stamina=Math.min(staminaMax(),st.stamina+n.amount);addLog('✦ スキル取得：'+n.name+'（'+n.description+'）');draw();}

function worldmapVisited(){return currentVisited();}
function renderWorldMap(){const root=el('worldmapGrid');if(!root)return;
 const visited=worldmapVisited(),total=Object.keys(visited).filter(k=>visited[k]).length;
 const totalAreas=currentWorldSize()*currentWorldSize();el('worldmapProgress').textContent=realmLabel()+'｜探索 '+total+' / '+totalAreas+' エリア';
 const counter=el('visitedCount');if(counter)counter.textContent=total+'/'+(currentWorldSize()*currentWorldSize());
 let markup='';
 const size=currentWorldSize();root.style.gridTemplateColumns=`repeat(${size},minmax(0,1fr))`;for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const key=x+','+y,known=!!visited[key],current=st.wx===x&&st.wy===y;
  if(!known){markup+=`<div class="worldmap-cell" role="gridcell" aria-label="未踏のエリア" title="未踏のエリア"><span>?</span></div>`;continue;}
  const b=biome(x,y),icon={F:'🌲',G:'🌿',R:'💧',C:'🏖',H:'⛰','~':'🌊',D:'🌋',B:'🩸',O:'🪨',M:'🌲',V:'🌫️'}[b]||'●';
  markup+=`<button class="worldmap-cell explored ${current?'current':''}" role="gridcell" data-worldcell="${x},${y}" data-biome="${b}" title="${BIOMES[b][0]}${current?'（現在地）':''}" aria-label="${BIOMES[b][0]}${current?'、現在地':''}"><span>${current?'📍':icon}</span></button>`;
 }
 root.innerHTML=markup;
 const detail=el('worldmapDetail');if(detail){const cell=ui.worldCell||`${st.wx},${st.wy}`;let [x,y]=cell.split(',').map(Number);if(!visited[cell]){x=st.wx;y=st.wy;}const b=biome(x,y),current=x===st.wx&&y===st.wy;root.querySelector(`[data-worldcell="${x},${y}"]`)?.classList.add('selected');detail.textContent=`${realmLabel()}｜${current?'📍 現在地｜':''}${BIOMES[b][0]} — ${BIOMES[b][1]}${current?'（このエリアを探索中）':''}`;}
}
function openWorldMap(){if(!st||st.combat||ui.moving){toast('戦闘または移動を終えてから確認してください');return;}ui.worldCell=`${st.wx},${st.wy}`;renderWorldMap();el('worldmapOverlay').classList.remove('hidden');}
function closeWorldMap(){el('worldmapOverlay').classList.add('hidden');}
function renderSkills(){progressInit();const current=Math.max(0,Math.min(SKILL_GROUPS.length-1,ui.skillGroup||0));ui.skillGroup=current;const g=SKILL_GROUPS[current];let html=`<div class="splitheader"><h3 class="sectiontitle">✦ スキルツリー</h3><span class="tiny">Lv${st.level}・未使用 <b class="skill-points">${st.skillPoints}pt</b> / ${Object.keys(st.skills).filter(k=>st.skills[k]).length}/200取得</span></div><p class="tiny">レベルアップごとに1pt。各系統の下位から順に取得。LV100でも全取得はできません。</p><div class="skill-groups">${SKILL_GROUPS.map((a,i)=>`<button class="skill-group ${current===i?'on':''}" data-skillgroup="${i}">${a[0]} ${a[1]}<small>${SKILL_NODES.filter(n=>n.group===i&&st.skills[n.id]).length}/20</small></button>`).join('')}</div><div class="skill-tree-title">${g[0]} ${g[1]} <span class="tiny">4系統 × 5段階</span></div><div class="skill-lanes">${g[2].map(b=>`<div>${b[0]}</div>`).join('')}</div><div class="skill-grid">`;
 for(let tier=0;tier<5;tier++)for(let col=0;col<4;col++){const n=SKILL_NODES.find(x=>x.group===current&&x.tier===tier&&x.col===col);const got=!!st.skills[n.id],ready=!got&&(!n.prereq||!!st.skills[n.prereq])&&st.skillPoints>0;const unlocked=!n.prereq||!!st.skills[n.prereq];const total=skillValue(n.key);html+=`<button class="skill-node ${got?'learned':ready?'ready':unlocked?'waiting':'locked'}" data-learnskill="${n.id}" ${got||!ready?'disabled':''}><span class="skill-rank">${['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ'][tier]} ${got?'✓':unlocked?'◆':'🔒'}</span><b>${n.name}</b><span>${n.description}<strong> +${fmt(n.amount)}${n.unit}</strong></span>${tier?'<i class="skill-line"></i>':''}</button>`;}
 html+=`</div><div class="shared-note">選択中のジャンル効果はすべて実際の行動へ反映されます。取得した能力は自動セーブされます。</div>`;setPane(html);}

function hpMax(){return 100+(st.perks?.hp||0)*12+skillValue('hp');}
function staminaMax(){return 100+(st.perks?.stamina||0)*9+skillValue('stamina');}
function carryMax(){return 45+(st.perks?.carry||0)*5+skillValue('carry')+petParty().filter(p=>p.skill==='carry').reduce((v,p)=>v+p.power,0);}
function defenseBonus(){return (st.perks?.defense||0)*2+skillValue('defense');}
function attackBonus(){return (st.perks?.attack||0)*3;}
function nextXp(){return 35+st.level*27+Math.floor(st.level**1.4*4);}
function gainXP(n,why=''){progressInit();st.xp+=Math.round(n*(1+skillValue('xp')/100)*(why==='craft'?1+skillValue('craftXp')/100:1));let up=false;while(st.xp>=nextXp()){st.xp-=nextXp();st.level++;st.points+=3;st.skillPoints++;st.hp=clamp(st.hp+12,0,hpMax());st.stamina=clamp(st.stamina+9,0,staminaMax());addLog(`🌟 レベル${st.level}に上昇！ 能力ポイント+3 / スキルポイント+1`);up=true;}if(up){toast(`🌟 レベル${st.level}！ 能力ポイント ${st.points}`);playSfx('level');}}
function allocateStat(id){progressInit();if(st.points<1||!['hp','stamina','attack','defense','carry'].includes(id))return;st.points--;st.perks[id]++;if(id==='hp')st.hp+=12;if(id==='stamina')st.stamina+=9;addLog('⬆ 能力ポイントを割り振った：'+{hp:'最大HP',stamina:'最大スタミナ',attack:'攻撃力',defense:'防御力',carry:'最大所持重量'}[id]);draw();}

function addLog(msg){st.logs.unshift({t:st.time,msg});st.logs=st.logs.slice(0,90)}
function lootPopup(id,n){const root=document.getElementById('lootPopups');if(!root||!id||!n)return;const div=document.createElement('div');div.className='loot-entry';div.textContent='＋ '+(ITEMS[id]?.[0]||id)+' ×'+n;root.appendChild(div);while(root.children.length>6)root.firstElementChild.remove();setTimeout(()=>div.remove(),3900);}
function toast(msg){let old=el('toast');if(old)old.remove();const t=document.createElement('div');t.id='toast';t.className='toast';t.textContent=msg;document.body.appendChild(t);clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.remove(),2600)}
function has(item,count=1){return(st.inventory[item]||0)>=count}
function count(item){return st.inventory[item]||0}
function invWeight(){let w=Object.entries(st.inventory).reduce((s,[id,q])=>s+(ITEMS[id]?.[2]||0)*q,0);if(st.carriedChest)w+=ITEMS.chest[2]+itemsWeight(st.carriedChest.items);return w}
function itemsWeight(o){return Object.entries(o).reduce((s,[id,q])=>s+(ITEMS[id]?.[2]||0)*q,0)}
function freeWeight(){return carryMax()-invWeight()}
function capacity(){return Object.entries(CAP).reduce((s,[k,c])=>s+count(k)*c,0)}
function addItem(id,n=1){if(!ITEMS[id]||n<=0)return false;if(invWeight()+ITEMS[id][2]*n>carryMax()+.0001)return false;if(id==='water'&&count('water')+n>capacity())return false;const before=st.inventory[id]||0;st.inventory[id]=before+n;if(FOOD[id]){st.foodFresh=st.foodFresh||{};if(!before)st.foodFresh[id]=foodShelfMinutes(id);}st.quests=st.quests||{};st.quests['obtained_'+id]=true;lootPopup(id,n);if(DURABLE.has(id)){if(!st.durability)st.durability={};if(!st.durability[id])st.durability[id]=[];if(!st.enhancements)st.enhancements={};if(!st.enhancements[id])st.enhancements[id]=[];for(let i=0;i<n;i++){st.durability[id].push(maxDur(id));st.enhancements[id].push(0);}}return true;}
function removeItem(id,n=1,index=null){if(!has(id,n))return false;if(DURABLE.has(id)){ensureDura();ensureEnhancements();let arr=st.durability[id],up=st.enhancements[id];for(let i=0;i<n;i++){let at=index!==null&&i===0?index:arr.length-1;arr.splice(at,1);up.splice(at,1);}}
 st.inventory[id]-=n;if(!st.inventory[id]){delete st.inventory[id];if(st.foodFresh)delete st.foodFresh[id];delete st.durability?.[id];delete st.enhancements?.[id];if(st.equipment)for(const slot of Object.keys(st.equipment))if(st.equipment[slot]===id)st.equipment[slot]=null;}return true;}
function canRemoveVessel(id,n=1){if(!CAP[id])return true;return capacity()-CAP[id]*n>=count('water')}
function safeTake(id,n){if(!canRemoveVessel(id,n))return false;return removeItem(id,n)}
function minsDisplay(time){let m=Math.floor(time%1440),hh=Math.floor(m/60),mm=m%60;return`${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}`}
function day(){return Math.floor(st.time/1440)+1}
function cost({min=5,energy=2,hunger=.25,thirst=.38}={}){const oldDay=day();st.time+=min;advanceFoodSpoilage(min);st.stamina=clamp(st.stamina-energy,0,staminaMax());st.hunger=clamp(st.hunger-hunger);st.thirst=clamp(st.thirst-thirst);if(st.thirst<8||st.hunger<7)st.hp=clamp(st.hp-(st.thirst<8?3:0)-(st.hunger<7?2:0),0,hpMax());advanceLife(min);petLife(min);expireGraves();if(!st.combat&&st.hp>0)moveCreatures(min);if(day()>oldDay){regen();addLog(`🌅 ${day()}日目の朝。自然の恵みが少し戻った。`)}if(st.hp<=0)knockout();}

function installedInfra(o,id){return(o?.addons||[]).includes(id);}
const POWER_SLOT_TYPES=['generator','mana_generator'];
function powerLevel(base){return installedInfra(base,'mana_generator')?2:installedInfra(base,'generator')?1:0;}
function stationTier(type){return type==='bench'?0:type==='electric_workbench'?1:type==='magic_workbench'?2:-1;}
function stationIsPowered(type,room){
 if(!['electric_workbench','electric_furnace','electric_lamp','fridge','magic_workbench','mana_forge','alchemy_table','arcane_lamp','mana_fountain'].includes(type))return true;
 if(!room)return false;
 const house=field().placed.find(o=>o.id===room&&BUILDS.some(b=>b.id===o.type));
 if(type==='electric_workbench'||type==='electric_furnace'||type==='electric_lamp'||type==='fridge')return installedInfra(house,'generator');
 if(type==='magic_workbench'||type==='mana_forge'||type==='alchemy_table'||type==='arcane_lamp'||type==='mana_fountain')return installedInfra(house,'mana_generator');
 return true;
}
function fridgePoweredInField(f,o){if(o.type!=='fridge'||!o.room)return false;const house=f.placed.find(b=>b.id===o.room&&BUILDS.some(meta=>meta.id===b.type));return installedInfra(house,'generator');}

function home(){return ui.inside?field().placed.find(o=>o.id===ui.inside):null;}
function homeTank(o){return Math.min(30,Math.max(0,o?.tankWater||0));}
function advanceLife(minutes){
 for(let [k,f]of Object.entries(st.fields)){for(let b of f.placed.filter(o=>BUILDS.some(bb=>bb.id===o.type))){if(installedInfra(b,'rain_tank')){
 if(rainNow())b.tankWater=Math.min(30,(b.tankWater||0)+minutes*.035);
 }
 }
 for(let o of f.placed.filter(o=>o.type==='garden_plot'&&o.crop)){if(o.crop.ready)continue;
 let pump=f.placed.find(b=>BUILDS.some(bb=>bb.id===b.type)&&installedInfra(b,'irrigation')&&installedInfra(b,'rain_tank')&&Math.abs(b.x-o.x)+Math.abs(b.y-o.y)<=7&&homeTank(b)>=minutes*.003);
 if(pump){pump.tankWater=Math.max(0,(pump.tankWater||0)-minutes*.003);o.crop.watered=true;}
 o.crop.progress=(o.crop.progress||0)+minutes*(pump?1.6:1);if(o.crop.progress>=o.crop.need)o.crop.ready=true;}
 }
}
function useHomeWater(n=1){let b=home();if(b&&installedInfra(b,'water_tap')&&installedInfra(b,'rain_tank')&&homeTank(b)>=n){b.tankWater=Math.max(0,b.tankWater-n);return true;}if(count('water')>=n){removeItem('water',n);return true;}return false;}
function waterHome(){let b=home();if(!b||!installedInfra(b,'water_tap')){toast('水道設備が必要です');return;}if(homeTank(b)<1){toast('水タンクが空です');return;}b.tankWater--;st.thirst=clamp(st.thirst+35);cost({min:2,energy:0,hunger:0,thirst:0});addLog('🚰 拠点の水道から水を飲んだ。');draw();}
function farmPlant(seed){let e=selectedEntity(),o=e?.obj;if(!o||o.type!=='garden_plot'||o.crop)return;if(!has(seed)){toast('種が足りません');return;}removeItem(seed);let crops={seed:['vegetable',360,3],potato_seed:['potato',480,3],berry_seed:['berry',650,5],wheat_seed:['wheat',420,4]},[crop,need,amount]=crops[seed];o.crop={seed,item:crop,need,amount,progress:0,watered:false,ready:false};cost({min:12,energy:2});addLog(`🌱 ${ITEMS[seed][0]}を植えた。`);draw();}
function farmWater(){let e=selectedEntity(),o=e?.obj;if(!o||o.type!=='garden_plot'||!o.crop)return;if(o.crop.watered){toast('すでに水やり済みです');return;}let homeBase=home();if(!useHomeWater(1)){toast('水1が必要です（水道か携帯水）');return;}o.crop.watered=true;o.crop.need=Math.round(o.crop.need*.70);cost({min:5,energy:1});addLog('💦 畑に水を与えた。成長が早くなる。');draw();}
function farmHarvest(){let e=selectedEntity(),o=e?.obj;if(!o||o.type!=='garden_plot'||!o.crop?.ready){toast('まだ収穫できません');return;}let {item,amount}=o.crop;if(!addItem(item,amount)){toast('所持重量がいっぱいです');return;}if(Math.random()<.6)addItem(o.crop.seed,1);o.crop=null;cost({min:10,energy:1});gainXP(10,'farm');addLog(`🌾 ${ITEMS[item][0]}×${amount}を収穫した。`);draw();}
function infraInstall(id){
 const b=home(),meta=b&&BUILDS.find(z=>z.id===b.type);
 if(!b||!meta){toast('建物の中から設備スロットに登録してください');return;}
 if(!INFRA_SLOT_ITEMS.includes(id)){toast('この設備はスロットに設置できません');return;}
 b.addons=b.addons||[];
 if(installedInfra(b,id)){toast('すでに登録済みです');return;}
 if(b.addons.length>=buildingSlotCapacity(meta,b)){toast('設備スロットに空きがありません');return;}
 if(!has(id)){toast('設備を所持していません');return;}
 // どの設備からでも登録可。水タンクが無い設備は登録されても水を供給しない。
 removeItem(id);b.addons.push(id);b.tankWater=b.tankWater||0;
 cost({min:25,energy:3});addLog(`🔧 ${ITEMS[id][0]}を${meta.name}の設備スロットに登録（${b.addons.length}/${buildingSlotCapacity(meta,b)}）。`);draw();
}
function infraRemove(id){
 const b=home(),meta=b&&BUILDS.find(z=>z.id===b.type);
 if(!b||!meta||!INFRA_SLOT_ITEMS.includes(id)||!installedInfra(b,id))return;
 if(id==='rain_tank'&&['water_tap','irrigation'].some(k=>installedInfra(b,k))){toast('先に水道と散水装置を取り外してください');return;}
 if(!confirm(`${ITEMS[id][0]}を設備スロットから取り外しますか？`))return;
 if(!addItem(id)){toast('持ち運び重量が足りません');return;}
 b.addons=b.addons.filter(a=>a!==id);
 if(id==='rain_tank')b.tankWater=0;
 if(ui.activeStation)ui.activeStation=null;
 addLog(`🔧 ${ITEMS[id][0]}を設備スロットから回収した（${b.addons.length}/${buildingSlotCapacity(meta,b)}）。`);draw();
}
function regen(){for(let f of Object.values(st.fields)){if(!f.day)f.day=1;let diff=Math.min(3,day()-f.day);if(diff<=0)continue;for(let node of f.nodes)node.qty=Math.min(7,node.qty+diff);if(f.creatures.length<3){const r=rng(hash(day(),f.nodes.length,st.seed));let opts=['rabbit','bird','boar','slime'];for(let z=0;z<2&&f.creatures.length<3;z++){let x=1+Math.floor(r()*(S-2)),y=1+Math.floor(r()*(S-2));if(!['water','ocean'].includes(f.ground[y][x])&&!f.placed.some(o=>o.x===x&&o.y===y)&&!f.creatures.some(c=>c.x===x&&c.y===y)){let type=opts[Math.floor(r()*opts.length)];f.creatures.push({id:makeId(),x,y,type,hp:CREATURES[type][2]});}}}f.day=day();}}

const GRAVE_DAYS=[1,3,10,30,0];
function graveSettings(){st.settings=st.settings||{};if(st.settings.graveDays===undefined)st.settings.graveDays=10;return st.settings.graveDays;}
function gravesRemaining(o){const d=graveSettings();return d?Math.max(0,Math.ceil((o.created+d*1440-st.time)/1440)):null;}
function expireGraves(){const keep=o=>o.type!=='grave'||!graveSettings()||st.time<o.created+graveSettings()*1440;let lost=0;for(const f of [...Object.values(st.fields),...Object.values(st.caves||{})]){const before=f.placed.length;for(const o of f.placed.filter(o=>o.type==='grave'&&!keep(o)))for(const p of st.pets||[])if(p.where==='grave'&&p.graveId===o.id)p.where='lost';f.placed=f.placed.filter(keep);lost+=before-f.placed.length;}if(lost)addLog('🪦 お墓が期限切れで消滅した。所持品と仲間は失われた。');}
function recoverGrave(){const o=selectedEntity()?.obj;if(o?.type!=='grave')return;if(!ui.inside&&(st.pos.x!==o.x||st.pos.y!==o.y)){toast('お墓のマスまで移動してから回収してください');walkTo(o.x,o.y,false,true);return;}let got=[];for(const [id,num] of Object.entries(o.items||{})){let n=0;for(let i=0;i<num;i++){if(!addItem(id,1))break;n++;}if(n){o.items[id]-=n;if(o.items[id]<=0)delete o.items[id];if(DURABLE.has(id)){const from=o.durability?.[id]||[],to=st.durability[id]||[];const fromUp=o.enhancements?.[id]||[],toUp=st.enhancements[id]||[];
 for(let j=0;j<n;j++){const at=to.length-n+j;to[at]=from.shift()??maxDur(id);toUp[at]=fromUp.shift()??0;}
 st.durability[id]=to;st.enhancements[id]=toUp;}}if(n){if(FOOD[id])mergeFoodFresh(id,o.foodFresh||{},st.foodFresh=st.foodFresh||{});got.push(`${ITEMS[id]?.[0]||id}×${n}`);}}if(o.chest&&invWeight()+ITEMS.chest[2]+itemsWeight(o.chest.items)<=carryMax()){st.carriedChest=o.chest;o.chest=null;got.push('運搬チェスト');}
 for(const p of st.pets.filter(p=>p.where==='grave'&&p.graveId===o.id)){p.graveId=null;if(petParty().length<3){p.where='party';got.push(`${p.nick}が同行`);}else if(freeWeight()>=ITEMS[petToken(p)][2]){p.where='bag';st.inventory[petToken(p)]=1;got.push(`${p.nick}をカードで回収`);} }
 if(got.length){addLog('🪦 お墓から回収：'+got.join('、'));toast('お墓から回収しました');}else toast('重量が足りないか、回収するものがありません');
 const petsLeft=st.pets.some(p=>p.where==='grave'&&p.graveId===o.id);if(!Object.keys(o.items||{}).length&&!petsLeft&&!o.chest){field().placed=field().placed.filter(x=>x!==o);ui.selected=null;addLog('🪦 お墓の中身をすべて回収した。');}draw();}
function createDeathGrave(){const f=field(),g={id:makeId(),type:'grave',room:ui.inside||null,x:ui.inside?Math.floor((BUILDS.find(b=>b.id===home()?.type)?.size||6)/2):st.pos.x,y:ui.inside?Math.floor((BUILDS.find(b=>b.id===home()?.type)?.size||6)/2):st.pos.y,w:1,h:1,created:st.time,items:{...st.inventory},durability:JSON.parse(JSON.stringify(st.durability||{})),enhancements:JSON.parse(JSON.stringify(st.enhancements||{})),foodFresh:{...(st.foodFresh||{})},chest:st.carriedChest};for(const p of st.pets||[])if(p.where==='party'||p.where==='bag'){delete g.items[petToken(p)];p.where='grave';p.graveId=g.id;}f.placed.push(g);st.inventory={};st.foodFresh={};st.durability={};st.enhancements={};st.carriedChest=null;st.equipment={weapon:null,head:null,body:null,feet:null};addLog(`🪦 死亡地点にお墓ができた。回収期限：${graveSettings()===0?'無期限':graveSettings()+'日'}。`);}
function findRespawnBed(){
 const r=st.respawn;if(!r||!r.bedId)return null;
 const realm=r.realm==='demon'?'demon':'mortal';
 const index=(realm==='demon'?'demon|':'')+r.wx+','+r.wy;
 const f=st.fields?.[index];
 if(!f||!Array.isArray(f.placed))return null;
 const bed=f.placed.find(o=>o.type==='bed'&&o.id===r.bedId&&((o.room||null)===(r.room||null)));
 if(!bed)return null;
 if(r.room&&!f.placed.some(o=>o.id===r.room&&BUILDS.some(b=>b.id===o.type)))return null;
 return {r,f,bed};
}
function respawnBedSelected(o){return !!(o&&o.type==='bed'&&st.respawn?.bedId===o.id&&st.respawn?.wx===st.wx&&st.respawn?.wy===st.wy&&st.respawn?.realm===currentRealm());}
function setRespawnBed(){
 if(st.cave){toast('洞窟の中ではリスポーン地点を登録できません');return;}
 const e=selectedEntity(),bed=e?.kind==='object'?e.obj:null;
 if(!bed||bed.type!=='bed'){toast('ベッドを選んでください');return;}
 const register=()=>{
   const current=field().placed.find(o=>o.id===bed.id&&o.type==='bed');
   if(!current){toast('ベッドが見つかりません');return;}
   st.respawn={realm:currentRealm(),wx:st.wx,wy:st.wy,room:current.room||null,bedId:current.id};
   addLog('🛏 このベッドをリスポーン地点に登録した。');toast('🛏 リスポーン地点を更新しました');draw();
 };
 if(!ui.inside&&!adjacentToObject(st.pos,bed)){requireNear(bed,register);return;}
 register();
}
function spawnNearBed(f,bed,parent){
 const anchor=parent||bed;
 const candidates=[];
 for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]]){
   const ax=anchor.x+(dx>0?(anchor.w||1)-1:0),ay=anchor.y+(dy>0?(anchor.h||1)-1:0);
   const x=ax+dx,y=ay+dy;
   if(x<0||y<0||x>=S||y>=S)continue;
   if(['water','ocean','cavewall'].includes(f.ground?.[y]?.[x]))continue;
   if((f.placed||[]).some(o=>o.room==null&&occupies(o,x,y)))continue;
   if((f.creatures||[]).some(m=>m.x===x&&m.y===y))continue;
   candidates.push({x,y});
 }
 return candidates[0]||{x:6,y:6};
}
function applyDeathRespawn(){
 let location=findRespawnBed();
 st.realm=location?.r.realm||'mortal';st.wx=location?.r.wx??4;st.wy=location?.r.wy??4;
 if(location){
   const parent=location.r.room?location.f.placed.find(o=>o.id===location.r.room):null;
   st.pos=spawnNearBed(location.f,location.bed,parent);
   ui.inside=location.r.room||null;
 }else{
   if(st.respawn){st.respawn=null;addLog('🛏 登録先のベッドが無いため、初期地点で復活した。');}
   st.pos={x:6,y:6};ui.inside=null;
 }
 return !!location;
}
/* 緊急救出: 死亡・ドロップ・時間進行なし。セーブ地点への復帰を最優先。 */
function findSafeRescueTile(f,origin={x:6,y:6},room=null){
 if(!f?.ground)return null;
 const width=S, height=S, available=[];
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const tile=f.ground[y]?.[x];
  if(!tile||['water','ocean','cavewall','inwall','caverock'].includes(tile))continue;
  if((f.placed||[]).some(o=>(o.room||null)===(room||null)&&o.type!=='river_bridge'&&o.type!=='grave'&&occupies(o,x,y)))continue;
  if((f.creatures||[]).some(m=>m.x===x&&m.y===y))continue;
  const danger=(f.creatures||[]).some(m=>enemyIsHostile(m)&&Math.abs(m.x-x)+Math.abs(m.y-y)<=2)?15:0;
  available.push({x,y,score:Math.abs(x-origin.x)+Math.abs(y-origin.y)+danger});
 }
 available.sort((a,b)=>a.score-b.score);
 return available[0]?{x:available[0].x,y:available[0].y}:null;
}
function closeDebug(){el('debugOverlay')?.classList.add('hidden');}
function openDebug(){
 if(!st)return;
 const bed=findRespawnBed();
 el('debugCurrent').textContent=`現在地：${currentRealm()==='demon'?'魔界':'現世'} ${st.wx+1},${st.wy+1} / ${st.pos.x+1},${st.pos.y+1}　｜　復帰先：${bed?'登録したベッド':'初期地点'}`;
 el('debugOverlay').classList.remove('hidden');
}
function clearTravelForRescue(){
 ui.moving=false;ui.route=[];ui.crossDirection=null;ui.inside=null;ui.selected=null;ui.storageId=null;ui.activeStation=null;ui.placing=null;ui.aim=false;ui.chosenItem=null;ui.battleSummary=null;st.combat=null;st.cave=null;
}
function applyForcedRescue(kind){
 if(!st)return;
 const snapshot={realm:st.realm,wx:st.wx,wy:st.wy,pos:{...st.pos},cave:st.cave,inside:ui.inside};
 let usedBed=false,method='';
 if(kind==='safe'&&!st.cave&&!ui.inside){
  const landing=findSafeRescueTile(field(),st.pos);
  if(landing){clearTravelForRescue();st.pos=landing;method='同じMAPの安全な陸地';}
 }
 if(!method){
  clearTravelForRescue();
  if(kind==='respawn'){
   const dest=findRespawnBed();
   if(dest){st.realm=dest.r.realm;st.wx=dest.r.wx;st.wy=dest.r.wy;st.pos=spawnNearBed(dest.f,dest.bed,dest.r.room?dest.f.placed.find(o=>o.id===dest.r.room):null);ui.inside=dest.r.room||null;usedBed=true;method='登録したベッド';}
  }
  if(!usedBed){st.realm='mortal';st.wx=4;st.wy=4;st.pos={x:6,y:6};ui.inside=null;method='初期地点';}
  const landing=findSafeRescueTile(field(),st.pos);
  if(landing&&!ui.inside)st.pos=landing;
 }
 if(!ui.inside&&['water','ocean','cavewall'].includes(field().ground[st.pos.y]?.[st.pos.x])){
  st.realm=snapshot.realm;st.wx=snapshot.wx;st.wy=snapshot.wy;st.pos=snapshot.pos;st.cave=snapshot.cave;ui.inside=snapshot.inside;
  toast('安全な着地点が見つかりませんでした');closeDebug();draw();return;
 }
 currentVisited()[key()]=true;
 ui.view='field';el('worldmapOverlay')?.classList.add('hidden');closeDebug();
 addLog('🛠 緊急救出：'+method+'に移動した。所持品・仲間・経験値はそのまま。');
 toast('🛠 '+method+'へ移動しました');draw();
}
function rescueAfterTerrainUpdate(){
 // v0.9.7以降の地形変化で旧セーブの足元が水になったときだけ救済。
 // いかだを持っている場合は通常の水上移動が可能なため自動転送しない。
 if(st.cave||ui.inside||has('raft'))return;
 const f=field(),x=st.pos?.x,y=st.pos?.y;
 if(!Number.isInteger(x)||!Number.isInteger(y)||x<0||y<0||x>=S||y>=S||!['water','ocean'].includes(f.ground[y]?.[x]))return;
 const landing=findSafeRescueTile(f,st.pos);
 if(landing){st.pos=landing;st.combat=null;addLog('🛠 地形更新により水中に埋まっていたため、近くの陸地へ救出した。');}
 // エリア一面が水の場合も復帰できるようボタンは常時表示する。
}
function knockout(){
 // Grave is created at the place of death BEFORE moving the player.
 createDeathGrave();st.cave=null;st.deaths++;
 st.hp=Math.min(hpMax(),70);st.hunger=40;st.thirst=45;st.stamina=Math.min(staminaMax(),85);
 const atBed=applyDeathRespawn();
 ui.selected=null;ui.placing=null;ui.moving=false;ui.route=[];ui.activeStation=null;ui.storageId=null;st.combat=null;st.time+=180;advanceFoodSpoilage(180);
 addLog(atBed?'💫 力尽きた。登録したベッドで目覚めた。':'💫 力尽きた。初期地点で目覚めた。');
 toast(atBed?'🛏 登録したベッドで復活しました':'力尽きた！ 初期地点に戻りました');
}

function canAfford(mats){return Object.entries(mats).every(([id,n])=>accessibleCount(id)>=n)}
function useMats(mats){for(let [id,n] of Object.entries(mats))consumeAccessible(id,n)}
function stationAvailable(at){
 if(at==='hand')return true;
 const stationRank=stationTier(at);
 const candidates=ui.inside?field().placed.filter(o=>o.room===ui.inside):ui.activeStation?field().placed.filter(o=>o.id===ui.activeStation&&o.room==null&&adjacentToObject(st.pos,o)):[];
 return candidates.some(o=>{
  const currentRank=stationTier(o.type);
  if(stationRank>=0){
   if(currentRank<stationRank)return false;
   return currentRank===0||stationIsPowered(o.type,o.room);
  }
  if(o.type===at)return stationIsPowered(o.type,o.room);
  if(at==='furnace'&&o.type==='electric_furnace')return stationIsPowered(o.type,o.room);
  if(at==='anvil'&&o.type==='mana_forge')return stationIsPowered(o.type,o.room);
  return false;
 });
}
function nearbyStationLabel(at){return at==='hand'?'手元':{'bench':'作業台','campfire':'焚き火','furnace':'かまど','rack':'乾燥棚','anvil':'金床','loom':'織機','tanning_rack':'なめし台','enhance_bench':'装備強化台','electric_workbench':'電気作業台（要：発電機）','magic_workbench':'マナ作業台（要：マナ発電機）','electric_furnace':'電気炉（要：発電機）','mana_forge':'魔導炉（要：マナ発電機）','alchemy_table':'錬金術台（要：マナ発電機）'}[at]||at}
function restConditions(){
 // No player coordinate is tracked indoors, so a bed placed anywhere in the same room is usable.
 const beds=field().placed.filter(o=>o.type==='bed'&&(ui.inside?o.room===ui.inside:o.room==null));
 const dist=beds.length?Math.min(...beds.map(o=>{
  if(ui.inside)return 0;
  const bx=Math.max(o.x,Math.min(st.pos.x,o.x+(o.w||1)-1));
  const by=Math.max(o.y,Math.min(st.pos.y,o.y+(o.h||1)-1));
  return Math.abs(st.pos.x-bx)+Math.abs(st.pos.y-by);
 })):Infinity;
 const boosted=dist<=2&&!st.cave;
 const fountain=!!ui.inside&&field().placed.some(o=>o.room===ui.inside&&o.type==='mana_fountain')&&stationIsPowered('mana_fountain',ui.inside);
 const minutes=boosted?90:55, stamina=(boosted?65:35)+(fountain?20:0), hp=(boosted?10:0)+(fountain?30:0);
 const status=(boosted?(ui.inside?'室内の寝床を利用可能':'寝床の有効範囲内（2マス以内）'):(beds.length?'寝床の範囲外（距離 '+dist+'マス）':'近くに寝床なし'))+(fountain?' / ✦ 癒やしの泉が稼働中':'');
 return{boosted,minutes,stamina,hp,status};
}
function renderRestPreview(){
 const r=restConditions(),target=el('restContext');if(!target)return;
 const appliedStamina=fmt(Math.min(r.stamina,Math.max(0,staminaMax()-st.stamina)));
 const appliedHp=fmt(Math.min(r.hp,Math.max(0,hpMax()-st.hp)));
 target.innerHTML=`<span class="${r.boosted?'rest-bed-ok':'rest-bed-no'}">${r.boosted?'🛏':'🌿'} ${esc(r.status)}</span><span class="rest-efficiency">${r.minutes}分 / スタミナ +${appliedStamina}（最大+${r.stamina}） / HP +${appliedHp}</span>`;
}

function locatedObjects(){return field().placed.filter(o=>ui.inside?o.room===ui.inside:o.room==null)}
function selectedEntity(){if(!ui.selected)return null;const f=field(),{x,y}=ui.selected;if(ui.inside){const obj=objectAt(x,y),pet=petAt(x,y);return obj?{kind:'object',obj}:pet?{kind:'pet',pet}:{kind:'floor',x,y};}const obj=objectAt(x,y);if(obj)return {kind:'object',obj};const mob=f.creatures.find(c=>c.x===x&&c.y===y);if(mob)return {kind:'creature',mob};const node=f.nodes.find(n=>n.x===x&&n.y===y&&n.qty>0);if(node)return {kind:'node',node};const terrain=f.ground[y]?.[x];if(terrain==='water'||terrain==='ocean')return{kind:'water',x,y};return{kind:'ground',x,y};}
function safeTerrain(x,y){if(x<0||y<0||x>=S||y>=S)return false;let t=field().ground[y][x],bridge=field().placed.some(o=>o.type==='river_bridge'&&o.room==null&&occupies(o,x,y));if(t==='cavewall'||(t==='water'&&!bridge&&!has('raft'))||(t==='ocean'&&!has('raft')))return false;return !field().placed.some(o=>o.room==null&&occupies(o,x,y)&&o.type!=='river_bridge'&&(BUILDS.some(b=>b.id===o.type)||['cave_entrance','cave_exit','cave_next','cave_back','treasure'].includes(o.type)||PLACE_SIZE[o.type]));}
function enemyIsHostile(m){return ['slime','wolf','golem','shadowwolf','cave_rat','bat','rock_beast','crystal_guard','abyss_knight','dragon','imp','hellhound','gargoyle','succubus','blaze_duke','venom_count','void_seer','ruin_marshal','demon_king'].includes(m.type);}
function distance(a,b){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y);}
function validStep(x,y){return safeTerrain(x,y);}
function findPath(x,y,neighbor=false){
 const start={...st.pos};if((neighbor&&distance(start,{x,y})<=1)||(!neighbor&&start.x===x&&start.y===y))return [];
 let queue=[start],head=0,seen=new Set([start.x+','+start.y]),prev={},dest=null;
 while(head<queue.length){let p=queue[head++];if((neighbor&&distance(p,{x,y})<=1)||(!neighbor&&p.x===x&&p.y===y)){dest=p;break;}
 for(let[dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){let nx=p.x+dx,ny=p.y+dy,k=nx+','+ny;if(seen.has(k)||!validStep(nx,ny))continue;seen.add(k);prev[k]=p;queue.push({x:nx,y:ny});}}
 if(!dest)return null;let path=[];while(dest.x!==start.x||dest.y!==start.y){path.push(dest);dest=prev[dest.x+','+dest.y];}return path.reverse();
}
function battleLine(line){if(!st.combat)return;st.combat.history.push(line);st.combat.history=st.combat.history.slice(-24);addLog('⚔ '+line);}
function battleMob(){return st.combat?field().creatures.find(m=>m.id===st.combat.mobId):null;}
function enemyHit(m,surprise=false){
 if(!st.combat)return;st.combat.lastActor='enemy';
 const defenders=petParty().filter(p=>p.hp>0);if(!surprise&&defenders.length&&Math.random()<.22){const p=defenders[Math.floor(Math.random()*defenders.length)];const dmg=Math.max(1,Math.ceil(mobATK(m)*.75-p.defense*.65));p.hp=Math.max(0,p.hp-dmg);battleLine(`🐾 ${p.nick}が攻撃を受けた！ ${dmg}ダメージ（HP ${Math.ceil(p.hp)}/${p.maxHp}）`);if(p.hp<=0)losePet(p);return;}

 if(Math.random()<.80){let raw=Math.ceil(mobATK(m)*(m.rank?1+.09*(m.rank-1):1)*((!st.cave&&timeOfDay()==='night')?1.35:1)),guard=armorTotal();let damage=Math.max(1,Math.ceil(raw-guard*.65-skillValue('damageReduction')));st.hp=clamp(st.hp-damage,0,hpMax());battleLine(`${CREATURES[m.type][0]}${surprise?'が奇襲！':'の反撃！'} ${damage}ダメージ${guard?`（防御 ${guard}で${raw-damage}軽減）`:''}（HP ${Math.round(st.hp)}）`);}else battleLine(`${CREATURES[m.type][0]}の攻撃を回避した！`);for(let slot of ['head','body','feet'])if(equipped(slot)&&Math.random()<.55)wear(equipped(slot),1);
 if(st.hp<=0){let logs=[...st.combat.history];knockout();ui.battleSummary={title:'💫 戦闘不能',history:logs.slice(-3)};}
}
function beginCombat(m,ambush=false){heroMarkAttack(m);
 if(st.combat)return;ui.moving=false;ui.route=[];ui.selected={x:m.x,y:m.y};ui.view='field';
 st.combat={mobId:m.id,turn:1,history:[],lastActor:ambush?'enemy':'player',gentle:false,tamePause:false};ui.battleSummary=null;
 battleLine(`${CREATURES[m.type][1]} ${CREATURES[m.type][0]}と遭遇！`);playSfx('battle');
 if(ambush)enemyHit(m,true);
}
function completeBattle(m){st.quests=st.quests||{};st.quests.first_kill=true;if(currentRealm()==='demon')st.quests.demon_kill=true;let got=[],miss=[];for(let[id,n]of Object.entries(CREATURES[m.type][4])){if(addItem(id,n))got.push(`${ITEMS[id][0]}×${n}`);else miss.push(`${ITEMS[id][0]}×${n}`);}
 const combatXP=Math.round(10+CREATURES[m.type][2]*.3+(m.boss?120:0));gainXP(combatXP,'combat');gainPetXP(Math.max(8,Math.round(combatXP*.75)));if(m.boss){st.bosses=st.bosses||{};st.bosses[st.cave?.id+':'+st.cave?.room]=true;demonBossDefeated(m);const medal=MEDAL_BY_BOSS[m.type];if(medal){addItem(medal,1);got.push('🏆 '+ITEMS[medal][0]);}}battleLine(`${CREATURES[m.type][0]}を倒した！ ${got.join('、')||'戦利品なし'}${miss.length?'（重すぎて一部取得できず）':''}`);
 ui.battleSummary={title:`🏆 ${CREATURES[m.type][0]}に勝利`,history:st.combat.history.slice(-3)};st.combat=null;
 field().creatures=field().creatures.filter(c=>c.id!==m.id);ui.selected=null;
}
function attackRound(){let m=battleMob();if(m)heroMarkAttack(m);if(!m){st.combat=null;draw();return;}if(st.combat.tamePause)st.combat.tamePause=false;if(st.stamina<6){cost({min:3,energy:0,hunger:.1,thirst:.1});st.stamina=Math.min(staminaMax(),st.stamina+8);battleLine('息を整えてスタミナを回復した。');if(st.combat)enemyHit(m,false);draw();return;}
 let weapon=equipped('weapon'),spec=GEAR[weapon],critical=spec&&Math.random()<(spec.crit||.06)+skillValue('meleeCrit')/100;let damage=Math.max(1,(weapon?activeGearValue(weapon,'attack'):6)+attackBonus()+Math.floor(Math.random()*7)+(spec?.kind==='斬撃'?skillValue('swordDamage'):spec?.kind==='刺突'?skillValue('spearDamage'):skillValue('maceDamage'))-mobDEF(m));if(critical)damage=Math.ceil(damage*1.5);if(st.combat.gentle&&!m.boss){damage=Math.max(0,Math.min(Math.max(1,Math.floor(damage*.45)),m.hp-1));}m.hp-=damage;if(weapon)wear(weapon,1);
 cost({min:7,energy:6,hunger:.6,thirst:.8});if(!st.combat){draw();return;}
 battleLine(`第${st.combat.turn}ターン：${weapon?ITEMS[weapon][0]+'の'+spec.kind:'素手'}攻撃${critical?'【会心】':''}！ ${damage}ダメージ（敵HP ${Math.max(0,m.hp)}）`);
 if(m.hp>0){for(const p of petParty()){if(p.hp<=0)continue;let damage=Math.max(1,Math.round((p.attack*.45+p.power*.15+Math.random()*3)*(1+skillValue('petDamage')/100)-mobDEF(m)*.45));if(st.combat?.gentle&&!m.boss)damage=Math.min(damage,Math.max(0,m.hp-1));m.hp-=damage;battleLine(`🐾 ${p.nick}が援護攻撃！ ${damage}ダメージ`);if(m.hp<=0)break;}}
 if(m.hp<=0)completeBattle(m);else if(!m.boss&&!st.combat.prompted&&m.hp<=mobHP(m)*.35&&INCENSE_IDS.some((x,i)=>has(x)&&i+1>=(INCENSE_RANK[m.type]||1))){st.combat.tamePause=true;st.combat.prompted=true;battleLine('✨ 弱った相手にお香を使ってテイムできます。');}else{enemyHit(m,false);if(st.combat)st.combat.turn++;}
 draw();
}

function bowInfo(){const id=equipped('weapon');return id&&GEAR[id]?.range?{id,...GEAR[id],range:GEAR[id].range+skillValue('bowRange')}:null;}
function arrowSupply(){return has('metal_arrow')?'metal_arrow':has('arrow')?'arrow':null;}
function beginAiming(){if(st.combat||ui.moving)return;const bow=bowInfo();if(!bow){ui.aim=false;toast('弓を武器スロットに装備してください');draw();return;}ui.aim=!ui.aim;ui.view='field';draw();}
function rangedAttack(){
 const bow=bowInfo(),sel=selectedEntity(),m=sel?.kind==='creature'?field().creatures.find(v=>v.id===sel.mob.id):null;
 if(!ui.aim||!bow||!m){toast('射撃モードで対象の動物・魔物を選んでください');return;}
 if(distance(st.pos,m)>bow.range){toast(`射程外です（射程${bow.range}マス）`);return;}
 if(!arrowSupply()){toast('矢がありません。先に矢を製作してください');return;}
 if(st.stamina<Math.max(.5,3-skillValue('bowEnergy'))){toast('スタミナが足りません');return;}
  heroMarkAttack(m);const ammo=arrowSupply();removeItem(ammo,1);wear(bow.id,1);
 const impact=Math.max(1,Math.round(activeGearValue(bow.id,'shot')+(ammo==='metal_arrow'?8:0)+skillValue('bowDamage')+attackBonus()*.5+Math.random()*6-mobDEF(m)*.65));
 const hit=Math.random()<Math.min(.99,.87+skillValue('bowAccuracy')/100);
 if(hit){m.hp=Math.max(0,m.hp-impact);addLog(`🏹 ${CREATURES[m.type][0]}に${impact}の遠距離ダメージ（残HP ${m.hp}）`);}
 else addLog(`🏹 ${CREATURES[m.type][0]}への矢は外れた。`);
 if(m.hp>0){
   if(enemyIsHostile(m)){m.shotAggro=true;m.moveClock=Math.max(m.moveClock||0,(MOB_MOVE_MINUTES[m.type]||3)*.65);}
   else {m.fleeUntil=st.time+25;m.moveClock=Math.max(m.moveClock||0,(MOB_MOVE_MINUTES[m.type]||3)*.65);}
 }
 if(m.hp<=0){
   st.quests=st.quests||{};st.quests.first_kill=true;if(currentRealm()==='demon')st.quests.demon_kill=true;
   let got=[];for(const [id,n] of Object.entries(CREATURES[m.type][4])){if(addItem(id,n))got.push(`${ITEMS[id][0]}×${n}`);}
   if(m.boss){st.bosses=st.bosses||{};st.bosses[st.cave?.id+':'+st.cave?.room]=true;demonBossDefeated(m);const medal=MEDAL_BY_BOSS[m.type];if(medal){addItem(medal,1);got.push(ITEMS[medal][0]);}}
   const combatXP=Math.round(10+CREATURES[m.type][2]*.3+(m.boss?120:0));gainXP(combatXP,'combat');gainPetXP(Math.max(8,Math.round(combatXP*.75)));
   field().creatures=field().creatures.filter(c=>c.id!==m.id);
   addLog(`🏹 ${CREATURES[m.type][0]}を仕留めた！ ${got.join('、')||'戦利品なし'}`);ui.selected=null;
 }
 cost({min:3,energy:Math.max(.5,3-skillValue('bowEnergy')),hunger:.25,thirst:.3});playSfx('hit');draw();
}

function canEscape(x,y){return Math.abs(st.pos.x-x)+Math.abs(st.pos.y-y)===1&&safeTerrain(x,y)&&!field().creatures.some(m=>m.x===x&&m.y===y);}
function fleeTo(x,y){if(!st.combat)return;if(!canEscape(x,y)){toast('その方向には逃げられません');return;}
 let m=battleMob(),name=m?CREATURES[m.type][0]:'敵',old=st.combat.history.slice(-2);if(Math.random()>.76){battleLine('逃走失敗！ '+name+'に追いつかれた。');if(m)enemyHit(m,false);draw();return;}st.combat=null;st.pos={x,y};
 cost({min:2,energy:.45,hunger:.10,thirst:.12});ui.battleSummary={title:'🏃 逃走成功',history:[...old,`${name}から逃れた。`]};addLog(`🏃 ${name}から隣のマスへ逃走した。`);ui.selected=null;draw();
}
const MOB_MOVE_MINUTES={rabbit:1.4,bird:1.15,cave_rat:1.7,bat:1.1,slime:5.5,boar:3.4,wolf:1.35,shadowwolf:1.15,golem:9,rock_beast:7,crystal_guard:5.5,abyss_knight:2.3,dragon:1.5,imp:2.1,hellhound:1.25,gargoyle:4.8,succubus:1.7,blaze_duke:2.4,venom_count:2.2,void_seer:2.0,ruin_marshal:2.6,demon_king:1.7};
function moveCreatures(elapsed=0){
 if(!Number.isFinite(elapsed)||elapsed<=0||st.combat)return;
 const f=field(),mobs=f.creatures||[];
 // An enclosed house remains safe, but creatures outside still move with time.
 for(const m of mobs){
  if(st.combat)break;
  let pace=(MOB_MOVE_MINUTES[m.type]||3)*((timeOfDay()==='night'||st.cave)?.85:1);
  m.moveClock=(m.moveClock||0)+elapsed;
  let steps=Math.min(150,Math.floor(m.moveClock/pace));m.moveClock=Math.max(0,m.moveClock-steps*pace);
  for(let tick=0;tick<steps;tick++){
   if(st.combat)break;
   const dist=distance(m,st.pos),hostile=enemyIsHostile(m),peaceful=['rabbit','bird','cave_rat'].includes(m.type);const chasing=!!m.shotAggro&&hostile;const fleeing=!!m.fleeUntil&&st.time<m.fleeUntil&&!hostile;
   let candidates=[[0,0],[1,0],[-1,0],[0,1],[0,-1]].map(([dx,dy])=>({x:m.x+dx,y:m.y+dy})).filter(p=>safeTerrain(p.x,p.y)&&!f.placed.some(o=>o.room==null&&occupies(o,p.x,p.y))&&!mobs.some(other=>other!==m&&other.x===p.x&&other.y===p.y));
   if(!candidates.length)break;
   let dest;
   if(!ui.inside&&(fleeing||(peaceful&&dist<=3))){candidates.sort((a,b)=>distance(b,st.pos)-distance(a,st.pos));dest=candidates[0];}
   else if(!ui.inside&&hostile&&(chasing||dist<=((timeOfDay()==='night'||st.cave)?7:4))){
    candidates.sort((a,b)=>distance(a,st.pos)-distance(b,st.pos));dest=Math.random()<.87?candidates[0]:candidates[Math.floor(Math.random()*candidates.length)];
   }else {const moves=candidates.filter(p=>p.x!==m.x||p.y!==m.y);dest=moves.length?moves[Math.floor(Math.random()*moves.length)]:candidates[0];}
   m.x=dest.x;m.y=dest.y;
   if(!ui.inside&&m.x===st.pos.x&&m.y===st.pos.y){beginCombat(m,hostile);break;}
  }
 }
}
function oneStep(p){if(st.combat||ui.inside||!safeTerrain(p.x,p.y))return false;
 if(st.stamina<.46){toast('移動するスタミナが不足しています');return false;}
 heroMarkMove(st.pos,p);st.pos={x:p.x,y:p.y};st.turn=(st.turn||0)+1;gainXP(1,'walk');let collided=field().creatures.find(m=>m.x===p.x&&m.y===p.y);if(collided)beginCombat(collided,enemyIsHostile(collided));const beforeDeaths=st.deaths;cost({min:Math.max(.7,2-skillValue('moveTime')),energy:Math.max(.08,.45-skillValue('moveEnergy')),hunger:.10,thirst:.13});
 if(st.deaths!==beforeDeaths)return false;
 // Mobs get exactly one movement turn for each player tile, then collisions are checked.
 if(st.hp<=0||st.combat)return false;
 let occupant=field().creatures.find(m=>m.x===p.x&&m.y===p.y);
 if(occupant){beginCombat(occupant,enemyIsHostile(occupant));return false;}
 ui.lastTurnReport=`TURN ${st.turn}｜(${p.x+1},${p.y+1})へ移動。生物は経過時間に応じて行動。`;addLog('👣 '+ui.lastTurnReport);return !st.combat;
}
function walkTo(x,y,neighbor=false,animate=false,onArrival=null){
 if(ui.inside)return true;if(st.combat){toast('戦闘中です。攻撃するか逃走してください');return false;}
 if(ui.moving){toast('移動中です');return false;}
 const path=findPath(x,y,neighbor);if(path===null){toast('そこまで移動できません');draw();return false;}if(!path.length){if(onArrival)onArrival();return true;}
 if(animate){ui.moving=true;ui.route=path.slice();ui.battleSummary=null;let finished=0;
   function step(){if(!ui.moving||!ui.route.length){ui.moving=false;ui.route=[];draw();return;}
    const p=ui.route.shift(),ok=oneStep(p);finished++;if(!ok){ui.moving=false;ui.route=[];if(!st.combat)addLog(`👣 ${finished}マス進んで移動を中断。`);draw();return;}
    if(ui.route.length){draw();setTimeout(step,290);}else{ui.moving=false;addLog(`👣 ${finished}マス移動した。`);if(onArrival&&!st.combat)onArrival();draw();}
   }draw();setTimeout(step,40);return false;
 }
 let completed=0;for(let p of path){if(!oneStep(p)){draw();return false;}completed++;}
 if(completed>0)addLog(`👣 ${completed}マス移動した。`);return true;
}
function requireNear(entity,onArrival=null){if(ui.inside)return true;if(adjacentToObject(st.pos,entity))return true;walkTo(entity.x,entity.y,true,true,onArrival);return false;}
function locationTransition(dx,dy){heroFacingByDelta(dx,dy);if(st.cave){toast('洞窟は階段から移動してください');return;}if(st.combat||ui.moving){toast('戦闘または移動を終えてから移動してください');return;}if(ui.inside){toast('まず建物から外に出てください');return;}
 const size=currentWorldSize(),nx=(st.wx+dx+size)%size,ny=(st.wy+dy+size)%size;if(['~','V'].includes(biome(nx,ny))&&!has('raft')){toast('🌊 海や虚無海を渡るには「いかだ」が必要です');return;}
 // Direction button walks to the nearest reachable border tile, then the next turn crosses.
 let options=[];for(let i=0;i<S;i++){let x=dx>0?S-1:dx<0?0:i,y=dy>0?S-1:dy<0?0:i;if(!safeTerrain(x,y))continue;let path=findPath(x,y);if(path)options.push({path,x,y});}
 if(!options.length){toast('その方向のMAP端には到達できません');return;}
 options.sort((a,b)=>a.path.length-b.path.length);let path=options[0].path;
 ui.moving=true;ui.route=path.slice();ui.crossDirection={dx,dy};ui.selected=null;ui.battleSummary=null;
 function step(){if(!ui.moving)return;let p=ui.route.shift();if(p){let ok=oneStep(p);draw();if(!ok){ui.moving=false;ui.route=[];ui.crossDirection=null;draw();return;}setTimeout(step,290);return;}
 let oldWorld=key();st.wx=nx;st.wy=ny;currentVisited()[key()]=true;st.pos={x:dx>0?0:dx<0?S-1:options[0].x,y:dy>0?0:dy<0?S-1:options[0].y};field();
 if(!safeTerrain(st.pos.x,st.pos.y)){let original={...st.pos},best=null;for(let i=0;i<S;i++){let x=dx?original.x:i,y=dy?original.y:i;if(safeTerrain(x,y)&&(!best||Math.abs(i-(dx?original.y:original.x))<best.d))best={x,y,d:Math.abs(i-(dx?original.y:original.x))};}if(best)st.pos={x:best.x,y:best.y};}
 st.turn=(st.turn||0)+1;gainXP(2,'travel');cost({min:Math.max(.7,2-skillValue('moveTime')),energy:Math.max(.08,.5-skillValue('moveEnergy')),hunger:.1,thirst:.13});ui.moving=false;ui.route=[];ui.crossDirection=null;ui.activeStation=null;ui.storageId=null;ui.placing=null;ui.lastTurnReport=`TURN ${st.turn}｜${oldWorld}から${key()}へ。反対側のMAP端に到着。`;addLog('🧭 '+ui.lastTurnReport);if(!st.combat){let occupant=field().creatures.find(m=>enemyIsHostile(m)&&distance(m,st.pos)===0);if(occupant)beginCombat(occupant,true);}draw();
 }
 draw();setTimeout(step,80);
}
function gather(times=1){let e=selectedEntity();if(!e||e.kind!=='node'||!e.node.qty)return;let n=e.node;
 let axe=bestTool('axe'),pick=bestTool('pick'),mineral=n.type==='ore'?miningDeposit(n):null,req=mineral?ORE_META[mineral].req:0;
 if(n.type==='ore'&&pick.tier<req){toast(`${ORE_META[mineral].name}には${req>=4?'鋼':req>=3?'鉄':req>=2?'銅':'石'}以上のつるはしが必要です`);return;}
 if(!ui.inside&&(st.pos.x!==n.x||st.pos.y!==n.y)){const ref=n;walkTo(n.x,n.y,false,true,()=>{if(field().nodes.includes(ref)&&ref.qty>0){ui.selected={x:ref.x,y:ref.y};gather(times);}});return;}let done=0,obtained={};for(let i=0;i<times&&n.qty>0;i++){
 let t=n.type==='tree'?axe.tier:['rock','ore'].includes(n.type)?pick.tier:0;
 let min=t?Math.max(3,9-t):9,energy=t?Math.max(1.3,3.5-t*.40):3.5; if(n.type==='tree'){min=skillAdjustedTime(min,'chopTime',2);energy=Math.max(.5,energy-skillValue('chopEnergy'));}if(n.type==='rock'||n.type==='ore'){min=skillAdjustedTime(min,'mineTime',2);energy=Math.max(.5,energy-skillValue('mineEnergy'));}
 if(st.stamina+0.001<energy){toast('採取するスタミナが不足しています');break;}
 const loot={},demon=currentRealm()==='demon';switch(n.type){
 case'tree':if(demon){loot.hellwood=(axe.tier?3+Math.min(6,axe.tier):1)+skillValue('woodQty');loot.shadow_grass=1+skillValue('branchQty');if(Math.random()<.35)loot.demon_ichor=1;}else{if(axe.tier){loot.wood=axe.tier===1?3:axe.tier===2?4:axe.tier===3?5:axe.tier===4?6:axe.tier===5?8:10;loot.branch=Math.random()<.55?2:1;}else loot.branch=2;loot.wood=(loot.wood||0)+skillValue('woodQty');loot.branch+=skillValue('branchQty');loot.leaf=1;if(Math.random()<.26)loot.bark=1;if(Math.random()<.12)loot.resin=1;}break;
 case'rock':if(demon){loot.obsidian_shard=(pick.tier?pick.tier+1:2)+skillValue('stoneQty');if(Math.random()<.35)loot.infernal_ore=1;}else{loot.stone=(pick.tier?pick.tier===1?3:pick.tier+2:2)+skillValue('stoneQty');if(Math.random()<.35)loot.flint=1;if(Math.random()<.2)loot.coal=1;if(Math.random()<.11)loot.salt=1;}break;
 case'grass':if(demon){loot.shadow_grass=3+skillValue('herbQty');if(Math.random()<.25)loot.nightshade=1;}else{loot.fiber=3;loot.leaf=2;if(Math.random()<.25)loot.cotton=2;if(Math.random()<.16)loot.wheat_seed=1;}break;
 case'bush':if(demon){loot.nightshade=3+skillValue('berryQty');if(Math.random()<.22)loot.demon_ichor=1;}else{loot.berry=3+skillValue('berryQty');if(Math.random()<.25)loot.mushroom=1;if(Math.random()<.28)loot.seed=1;if(Math.random()<.24)loot.berry_seed=1;}break;
 case'clay':if(demon){loot.obsidian_shard=2;if(Math.random()<.25)loot.infernal_ore=1;}else loot.clay=2;break;case'sand':if(demon){loot.obsidian_shard=2;if(Math.random()<.25)loot.nightshade=1;}else{loot.sand=3;if(Math.random()<.3)loot.shell=2;}break;
 case'vine':if(demon){loot.shadow_grass=3;loot.hellwood=1;}else{loot.vine=2;loot.fiber=2;}break;
 case'ore':if(demon){loot.infernal_ore=(pick.tier<=1?2:pick.tier<=3?3:pick.tier<=5?4:5)+skillValue('oreQty');if(Math.random()<.35)loot.obsidian_shard=1;}else{loot[mineral]=(pick.tier<=1?2:pick.tier<=3?3:pick.tier<=5?4:5)+skillValue('oreQty');if(Math.random()<.35)loot.stone=1;}break;
 case'drift':if(demon){loot.hellwood=2;loot.shadow_grass=1;}else{loot.wood=2;loot.branch=2;}break;
 case'herb':if(demon){loot.shadow_grass=2+skillValue('herbQty');if(Math.random()<.35)loot.nightshade=1;}else{loot.herb=2+skillValue('herbQty');if(Math.random()<.35)loot.cotton=1;}break;
 case'reed':if(demon){loot.shadow_grass=2;loot.nightshade=1;}else{loot.reed=3;loot.cotton=2;}break;
 case'garden':if(demon){loot.nightshade=2+skillValue('veggieQty');loot.shadow_grass=2;}else{loot.vegetable=2+skillValue('veggieQty');loot.seed=2;if(Math.random()<.6)loot.potato_seed=1;if(Math.random()<.4)loot.wheat_seed=2;}break;
 }
 // Fallen feathers in vegetation give an early alternative to chasing fast birds.
 if(!demon && (n.type==='grass'||n.type==='tree') && Math.random()<(n.type==='grass'?.12:.08))loot.feather=(loot.feather||0)+1;
 let total=Object.entries(loot).reduce((sum,[id,q])=>sum+ITEMS[id][2]*q,0);if(total>freeWeight()+.001){toast('荷物が重すぎます。チェストに預けてください');break;}
 for(let [id,q] of Object.entries(loot)){addItem(id,q);obtained[id]=(obtained[id]||0)+q;}
 n.qty--;done++;if((n.type==='tree'?axe:['rock','ore'].includes(n.type)?pick:{id:null}).id)wear((n.type==='tree'?axe:pick).id,1);cost({min,energy,hunger:.44,thirst:.72});if(st.hp<=0||st.combat)break;
 }
 if(done)gainXP(done*(n.type==='ore'?8:4),'gather');if(done)addLog(`🌿 ${(mineral?ORE_META[mineral].name:NODES[n.type][0])}を${done}回採取：${Object.entries(obtained).map(([id,q])=>ITEMS[id][0]+'×'+q).join('、')}`);playSfx('gather');if(n.qty===0)ui.selected=null;draw();}
function attack(){
 if(st.combat)return;
 const e=selectedEntity();if(e?.kind!=='creature')return;
 const m=field().creatures.find(o=>o.id===e.mob.id);
 if(!m){toast('相手はすでに移動しました');draw();return;}
 if(distance(st.pos,m)!==1){toast('攻撃するには隣のマスにいる必要があります');draw();return;}
 beginCombat(m,false);draw();
}

function catchFish(){let e=selectedEntity();if(!e||e.kind!=='water')return;if(!has('fishing_rod')){toast('釣り竿が必要です');return;}if(!requireNear(e))return;if(st.stamina<4){toast('スタミナが不足しています');return;}if(freeWeight()<ITEMS.fish[2]){toast('荷物がいっぱいです');return;}wear('fishing_rod',1);cost({min:16,energy:4,hunger:.65,thirst:.9});if(Math.random()<Math.min(.98,.72+skillValue('fishChance')/100)){let n=Math.random()<.26?2:1;if(!addItem('fish',n)){addItem('fish',1);n=1;}addLog(`🎣 魚を${n}匹釣った！`);toast(`魚を${n}匹釣った`);}else{addLog('🎣 魚が逃げてしまった。');toast('釣りに失敗した');}draw();}
function drinkAt(){const e=selectedEntity();if(e?.kind!=='water')return;let type=field().ground[e.y][e.x];if(type==='ocean'){toast('海水はそのまま飲めません。蒸留器が必要です');return;}if(!requireNear(e))return;cost({min:3,energy:.5,hunger:.1,thirst:0});st.thirst=clamp(st.thirst+38+skillValue('drinkEffect'));st.quests.drink=true;addLog('💧 川の水を飲んで喉を潤した。');draw();}
function fillWater(){let e=selectedEntity();if(e?.kind!=='water')return;let type=field().ground[e.y][e.x];if(!requireNear(e))return;if(type==='ocean'&&!stationAvailable('distiller')){toast('海水を使うには近くに蒸留器が必要です');return;}let n=Math.min(capacity()-count('water'),Math.floor(Math.max(0,freeWeight())));if(n<=0){toast(capacity()<=count('water')?'空きのある水容器が必要です':'重量がいっぱいです');return;}if(st.stamina<1){toast('スタミナが不足');return;}for(let i=0;i<n;i++)addItem('water');cost({min:n*4+(type==='ocean'?20:0),energy:Math.min(14,1+n),hunger:n*.1,thirst:n*.13});addLog(`💧 ${type==='ocean'?'海水を蒸留し':'川から'}飲み水×${n}を容器に入れた。`);draw();}
function drinkStored(){if(!has('water'))return;removeItem('water');st.thirst=clamp(st.thirst+32+skillValue('drinkEffect'));st.quests.drink=true;cost({min:2,energy:0,hunger:0,thirst:0});addLog('💧 携帯している飲み水を飲んだ。');draw();}
function eatItem(id){if(id==='magic_potion'){if(!has(id))return;removeItem(id);st.hp=clamp(st.hp+95,0,hpMax());st.stamina=clamp(st.stamina+35,0,staminaMax());cost({min:3,energy:0,hunger:0,thirst:0});addLog('✦ 魔法回復薬を使い、HP+95・スタミナ+35。');draw();return;}if(id==='healing_potion'){if(!has(id))return;removeItem(id);st.hp=clamp(st.hp+35,0,hpMax());cost({min:2,energy:0,hunger:0,thirst:0});addLog('🧪 回復薬を使用してHPを35回復した');draw();return;}if(!FOOD[id]||!has(id))return;syncFoodFresh();const remainingFreshness=st.foodFresh?.[id]??foodShelfMinutes(id);removeItem(id);if(st.inventory[id]>0)st.foodFresh[id]=remainingFreshness; // 食事で腐敗進行度は変更しない。個数減少による劣化速度の低下のみ有効。
 st.quests.ate_food=true;const[h,t,p,e]=FOOD[id],bonus=1+skillValue('foodEffect')/100;st.hunger=clamp(st.hunger+h*bonus);st.thirst=clamp(st.thirst+t*bonus);st.hp=clamp(st.hp+p*bonus,0,hpMax());st.stamina=clamp(st.stamina+e*bonus,0,staminaMax());cost({min:3,energy:0,hunger:0,thirst:0});addLog(`🍽 ${ITEMS[id][0]}を食べた。空腹+${h}${t?', 水分+'+t:''}`);playSfx('eat');draw();}
function rest(){const r=restConditions();r.stamina+=skillValue('restStamina');r.hp+=skillValue('restHp');cost({min:r.minutes,energy:0,hunger:r.boosted?2.8:1.7,thirst:r.boosted?3.8:2.4});let recovered=0,hpRecovered=0;if(st.hp>0){recovered=Math.min(r.stamina,Math.max(0,staminaMax()-st.stamina));st.stamina=clamp(st.stamina+r.stamina,0,staminaMax());hpRecovered=Math.min(r.hp,Math.max(0,hpMax()-st.hp));if(r.hp)st.hp=clamp(st.hp+r.hp,0,hpMax());}addLog(`🌙 ${r.boosted?'寝床で眠り':'地面で休み'}、${r.minutes}分経過。スタミナ+${fmt(recovered)}、HP+${fmt(hpRecovered)}。`);draw();}
function craftRecipe(id){const r=RECIPES.find(r=>r.id===id);if(!r)return;if(!stationAvailable(r.at)){toast(`${nearbyStationLabel(r.at)}をMAP上でクリックしてください`);return;}if(!canAfford(r.in)){toast('素材が足りません');return;}if(st.stamina<3){toast('スタミナが不足しています');return;}
 let out=r.out||1,need=ITEMS[r.id][2]*out-Object.entries(r.in).reduce((s,[k,q])=>s+ITEMS[k][2]*q,0);if(need>freeWeight()+.001){toast('完成品を持つ重量の空きがありません');return;}if(Object.keys(CAP).includes(id)&&capacity()===0&&count('water')>0){};useMats(r.in);addItem(id,out);const efficientStation=ui.inside&&field().placed.some(o=>o.room===ui.inside&&((r.at==='furnace'&&o.type==='electric_furnace')||(r.at==='anvil'&&o.type==='mana_forge'))&&stationIsPowered(o.type,o.room));
 cost({min:Math.max(1,Math.ceil(r.min*(1-skillValue('craftTime')/100)*(efficientStation?.75:1))),energy:4,hunger:.4,thirst:.6});st.quests['crafted_'+id]=true;gainXP(Math.max(7,Math.min(65,Math.round(r.min*.36))),'craft');addLog(`🔨 ${ITEMS[id][0]}×${out}を製作した。`);playSfx('craft');draw();}
function placeSelection(type,kind='item'){if(POWER_SLOT_TYPES.includes(type)){toast('発電機は建物の建築タブから設備スロットに登録してください');return;}if(kind==='item'&&!has(type)){toast('設置する設備を所持していません');return;}if(kind==='building'){let b=BUILDS.find(x=>x.id===type);if(!b||!canAfford(b.in)){toast('建築素材が足りません');return;}/* 建物の建築に作業台は不要。材料だけ確認する。 */}
 ui.placing={type,kind,rotated:false,preview:null,hover:null};ui.selected=null;ui.view='field';toast('MAPで配置場所を選択してから「ここに設置」で決定してください');draw();}
function emptyAt(x,y){let szp=placeSize(ui.placing?.type||'',!!ui.placing?.rotated);let w=szp.w,h=szp.h;if(ui.inside){let sz=BUILDS.find(b=>b.id===field().placed.find(o=>o.id===ui.inside)?.type)?.size||6;if(x<0||y<0||x+w>sz||y+h>sz)return false;for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++)if(locatedObjects().some(o=>occupies(o,xx,yy)))return false;return true;}for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++){if(!safeTerrain(xx,yy))return false;if(field().nodes.some(n=>n.x===xx&&n.y===yy&&n.qty>0))return false;if(field().creatures.some(c=>c.x===xx&&c.y===yy))return false;if(field().placed.some(o=>o.room==null&&occupies(o,xx,yy)))return false;}return true;}

// Find a reachable position next to any edge of the proposed building footprint.
function placementApproach(x,y,p=ui.placing){
 if(ui.inside)return {x,y};
 const dims=placeSize(p.type,p.rotated),poss=[];
 for(let dx=0;dx<dims.w;dx++){poss.push({x:x+dx,y:y-1});poss.push({x:x+dx,y:y+dims.h});}
 for(let dy=0;dy<dims.h;dy++){poss.push({x:x-1,y:y+dy});poss.push({x:x+dims.w,y:y+dy});}
 let best=null,bestLen=Infinity,seen=new Set();
 for(const pt of poss){
   const key=pt.x+','+pt.y;if(seen.has(key))continue;seen.add(key);
   if(!safeTerrain(pt.x,pt.y))continue;
   const path=findPath(pt.x,pt.y,false);if(path&&path.length<bestLen){bestLen=path.length;best=pt;if(bestLen===0)break;}
 }
 return best;
}
// A single placement validator powers the red/green preview and the final confirmation.
function placementValidity(x,y){
 const p=ui.placing;if(!p)return {ok:false,reason:'設置モードではありません'};
 const dims=placeSize(p.type,p.rotated),max=ui.inside?(BUILDS.find(b=>b.id===field().placed.find(o=>o.id===ui.inside)?.type)?.size||6):S;
 if(x<0||y<0||x+dims.w>max||y+dims.h>max)return {ok:false,reason:'MAPの範囲外にはみ出します'};
 if(p.kind==='building'&&ui.inside)return {ok:false,reason:'建築物は屋外に設置してください'};
 if(p.type==='garden_plot'&&ui.inside)return {ok:false,reason:'畑は屋外に設置してください'};
 if(p.type==='medal_stand'&&!ui.inside)return {ok:false,reason:'展示台は屋内に設置してください'};
 if(['electric_workbench','electric_furnace','fridge','electric_lamp','magic_workbench','mana_forge','alchemy_table','arcane_lamp','mana_fountain'].includes(p.type)&&!ui.inside)return {ok:false,reason:'電気・魔法設備は家の中に設置してください'};
 if(p.type==='river_bridge'){
   if(ui.inside||st.cave||currentRealm()!=='mortal'||field().ground[y]?.[x]!=='water')return {ok:false,reason:'橋は現世の川の水上だけに置けます'};
   if(field().placed.some(o=>o.room==null&&occupies(o,x,y)))return {ok:false,reason:'他の設備が重なっています'};
   if(!placementApproach(x,y,p))return {ok:false,reason:'周囲に到達できる場所がありません'};
   return {ok:true,reason:'橋を架けられます'};
 }
 if(!emptyAt(x,y))return {ok:false,reason:'地形・資源・魔物・設備に重なっています'};
 if(!ui.inside&&st.pos.x>=x&&st.pos.x<x+dims.w&&st.pos.y>=y&&st.pos.y<y+dims.h)return {ok:false,reason:'プレイヤーがいる場所には設置できません'};
 if(!ui.inside&&!placementApproach(x,y,p))return {ok:false,reason:'周囲に到達できる場所がありません'};
 return {ok:true,reason:'設置できる場所です'};
}
function placementPosition(){return ui.placing?(ui.placing.preview||ui.placing.hover||null):null;}
// Draw just the overlay, never rerender the entire map while moving the mouse.
function updatePlacementGhost(){
 const map=el('mapgrid');if(!map)return;
 map.querySelector('.placement-ghost')?.remove();
 const p=ui.placing,pos=placementPosition();if(!p||!pos)return;
 const size=placeSize(p.type,p.rotated),inside=!!ui.inside;
 const pad=inside?Math.floor((S-(BUILDS.find(b=>b.id===field().placed.find(o=>o.id===ui.inside)?.type)?.size||6))/2):0;
 const validity=placementValidity(pos.x,pos.y);
 const layer=document.createElement('div');layer.className='placement-ghost'+(validity.ok?'':' invalid');
 layer.style.gridColumn=(pos.x+pad+1)+' / span '+size.w;
 layer.style.gridRow=(pos.y+pad+1)+' / span '+size.h;
 layer.setAttribute('aria-hidden','true');
 const image=document.createElement('span');image.className='placement-preview-image';
 const uri=SPECIAL_ITEM_ICONS['obj_'+p.type]||SPECIAL_ITEM_ICONS[p.type];
 if(uri){image.style.backgroundImage='url('+uri+')';}
 else if(GAME_ART_SPRITES[artKey(p.type)]){image.classList.add('atlas-image');image.style.cssText+=atlasCSS(artKey(p.type));}
 else{image.className='placement-preview-icon';image.textContent=BUILDS.find(b=>b.id===p.type)?.icon||ITEMS[p.type]?.[1]||'🏠';}
 if(image.classList.contains('placement-preview-image')&&p.rotated&&size.w!==size.h){
   image.style.setProperty('--place-rotate','90deg');
   image.style.width=(100*size.h/size.w)+'%';image.style.height=(100*size.w/size.h)+'%';
 }
 layer.appendChild(image);
 const status=document.createElement('span');status.className='placement-preview-status';status.textContent=validity.ok?'✓':'×';layer.appendChild(status);
 const badge=document.createElement('span');badge.className='placement-preview-size';badge.textContent=size.w+'×'+size.h;layer.appendChild(badge);
 map.appendChild(layer);
}
function selectPlacementPreview(x,y){if(!ui.placing)return;ui.placing.preview={x,y};ui.placing.hover=null;updatePlacementGhost();renderActions();}
function confirmPlacement(){const p=ui.placing,pos=p?.preview;if(!pos){toast('先にMAP上の配置場所を選んでください');return;}const valid=placementValidity(pos.x,pos.y);if(!valid.ok){toast(valid.reason);return;}doPlace(pos.x,pos.y);}

function doPlace(x,y){if(!ui.placing)return;let p=ui.placing;const check=placementValidity(x,y);if(!check.ok){toast(check.reason);return;}if(p.type==='river_bridge'){if(ui.inside||st.cave||currentRealm()!=='mortal'||field().ground[y]?.[x]!=='water'){toast('橋は現世の川の上にだけ設置できます。海には設置できません');return;}if(objectAt(x,y)){toast('その場所には既に設置物があります');return;}{const approach=placementApproach(x,y,p);if(!approach||!walkTo(approach.x,approach.y,false))return;}if(!has('river_bridge')){toast('木の橋を所持していません');return;}removeItem('river_bridge',1);field().placed.push({id:makeId(),type:'river_bridge',x,y,w:1,h:1,room:null});cost({min:18,energy:2,hunger:.2,thirst:.3});gainXP(9,'build');addLog('🌉 川に橋を架けた。通行可能になった。');ui.placing=null;ui.selected={x,y};draw();return;}
if(p.type==='garden_plot'&&ui.inside){toast('畑は屋外に設置してください');return;}if(p.type==='medal_stand'&&!ui.inside){toast('展示台は拠点の中に設置してください');return;}if(!emptyAt(x,y)){toast('ここには設置できません');return;}if(!ui.inside){const approach=placementApproach(x,y,p);if(!approach||!walkTo(approach.x,approach.y,false))return;}
 if(p.kind==='building'){if(ui.inside){toast('建物は屋外に建ててください');return;}let b=BUILDS.find(o=>o.id===p.type);if(!canAfford(b.in)){toast('建築素材が足りません');return;}useMats(b.in);{let sz=placeSize(b.id,p.rotated);field().placed.push({id:makeId(),type:b.id,x,y,w:sz.w,h:sz.h,rotated:!!p.rotated,room:null});}cost({min:Math.max(1,Math.ceil(b.min*(1-skillValue('buildTime')/100))),energy:10,hunger:1.6,thirst:2.3});addLog(`${b.icon} ${b.name}を建てた。`);st.quests.building=true;gainXP(32,'build');
 }else if(p.kind==='carry'){if(!st.carriedChest){ui.placing=null;draw();return;}{let sz=placeSize('chest',p.rotated);field().placed.push({id:makeId(),type:'chest',x,y,w:sz.w,h:sz.h,rotated:!!p.rotated,room:ui.inside,items:st.carriedChest.items,foodFresh:st.carriedChest.foodFresh||{},durability:st.carriedChest.durability||{},enhancements:st.carriedChest.enhancements||{}});} st.carriedChest=null;cost({min:12,energy:3,hunger:.3,thirst:.4});addLog('📦 運んでいたチェストを設置した。');
 }else{if(!has(p.type)){toast('設置するアイテムがありません');return;}if(ui.inside&&p.type==='raft'){toast('いかだは手持ちで使う道具です');return;}removeItem(p.type);{let sz=placeSize(p.type,p.rotated);field().placed.push({id:makeId(),type:p.type,x,y,w:sz.w,h:sz.h,rotated:!!p.rotated,room:ui.inside,items:['chest','fridge'].includes(p.type)?{}:undefined});} cost({min:12,energy:3,hunger:.2,thirst:.3});addLog(`🧰 ${ITEMS[p.type][0]}を設置した。`);st.quests['placed_'+p.type]=true;}
 ui.placing=null;ui.selected={x,y};draw();}

function fixRoomLayout(roomId){const b=field().placed.find(o=>o.id===roomId),size=BUILDS.find(d=>d.id===b?.type)?.size||6;
 const used=new Set(),items=field().placed.filter(o=>o.room===roomId);
 for(const o of items){const sz=placeSize(o.type,!!o.rotated);o.w=sz.w;o.h=sz.h;
 const valid=(x,y)=>x>=0&&y>=0&&x+o.w<=size&&y+o.h<=size&&Array.from({length:o.w*o.h},(_,i)=>(y+Math.floor(i/o.w))+','+(x+i%o.w)).every(k=>!used.has(k));
 if(!valid(o.x,o.y)){
  let candidates=[];for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(valid(x,y))candidates.push({x,y,d:Math.abs(x-o.x)+Math.abs(y-o.y)});
  candidates.sort((a,b)=>a.d-b.d);if(candidates.length){o.x=candidates[0].x;o.y=candidates[0].y;}
 }
 for(let dy=0;dy<o.h;dy++)for(let dx=0;dx<o.w;dx++)used.add((o.y+dy)+','+(o.x+dx));
 }
}

function canDemolish(o){
 if(!o||!BUILDS.some(b=>b.id===o.type))return{ok:false,why:'建物ではありません'};
 if(ui.inside===o.id)return{ok:false,why:'建物の外に出てください'};
 if(field().placed.some(p=>p.room===o.id)||st.pets.some(p=>p.where==='pasture'&&p.baseId===o.id))return{ok:false,why:'室内に設備・収納・放牧中の仲間がいます。先にすべて回収してください'};
 if((o.addons||[]).length)return{ok:false,why:'設備スロットに登録中の設備を先に取り外してください'};
 const b=BUILDS.find(x=>x.id===o.type);
 const w=Object.entries(b.in).reduce((v,[id,n])=>v+(ITEMS[id]?.[2]||0)*n,0);
 if(w>freeWeight()+.00001)return{ok:false,why:'返却資源を持つ重量が不足（必要 '+fmt(w)+'kg、空き '+fmt(freeWeight())+'kg）'};
 return{ok:true,why:''};
}
function demolishBuilding(){
 const e=selectedEntity(),o=e?.kind==='object'?e.obj:null,check=canDemolish(o);
 if(!check.ok){toast(check.why);return;}
 const b=BUILDS.find(x=>x.id===o.type);
 if(!adjacentToObject(st.pos,o)){
   const id=o.id;
   walkTo(o.x,o.y,true,true,()=>{const current=field().placed.find(p=>p.id===id);if(!current)return;ui.selected={x:current.x,y:current.y};demolishBuilding();});
   return;
 }
 if(!confirm(b.name+'を解体し、建築材料を全量回収しますか？'))return;
 if(!field().placed.find(p=>p.id===o.id)){toast('建物が見つかりません');return;}
 for(const [id,n]of Object.entries(b.in)){st.inventory[id]=(st.inventory[id]||0)+n;}
 field().placed=field().placed.filter(p=>p.id!==o.id);
 ui.selected=null;ui.activeStation=null;ui.storageId=null;
 cost({min:30,energy:2,hunger:.3,thirst:.4});
 addLog('🏚 '+b.name+'を解体。'+Object.entries(b.in).map(([id,n])=>ITEMS[id][0]+'×'+n).join('、')+'を回収。');
 draw();
}
function inspectPlace(){let e=selectedEntity();if(e?.kind!=='object')return;let o=e.obj;if(['cave_entrance','cave_exit','cave_next','cave_back','treasure'].includes(o.type)){interactCave();return;}if(['demon_gate','return_gate','demon_tower','demon_castle'].includes(o.type)){interactSpecialObject();return;}
 if(BUILDS.some(b=>b.id===o.type)){const enter=()=>{if(st.combat||!adjacentToObject(st.pos,o)||!field().placed.some(p=>p.id===o.id))return;fixRoomLayout(o.id);ui.inside=o.id;st.quests=st.quests||{};st.quests.entered_building=true;ui.activeStation=null;ui.selected=null;ui.storageId=null;ui.placing=null;addLog('🚪 建物の中に入った。');draw();};if(!requireNear(o,enter))return;enter();return;}
 if(['chest','fridge'].includes(o.type)){if(!ui.inside&&!requireNear(o))return;ui.storageId=o.id;ui.tab='storage';ui.view='side';draw();return;}
 if(o.type==='garden_plot'){draw();return;}
 if(!ui.inside&&!requireNear(o))return;ui.activeStation=o.id;ui.tab='craft';ui.view='side';ui.craftFilter='全部';addLog(`🛠 ${ITEMS[o.type]?.[0]||o.type}を使用中。`);draw();}
function interactCave(){let e=selectedEntity();if(e?.kind!=='object')return;let o=e.obj;if(o.type==='treasure'){openTreasure();return;}if(!requireNear(o))return;if(o.type==='cave_entrance')enterCave(key());else if(o.type==='cave_exit')caveTraverse('out');else if(o.type==='cave_next')caveTraverse('next');else if(o.type==='cave_back')caveTraverse('back');}
function exitBuilding(){ui.activeStation=null;ui.inside=null;ui.selected=null;ui.storageId=null;ui.placing=null;draw();}
function selectedStorage(){return field().placed.find(o=>o.id===ui.storageId&&['chest','fridge'].includes(o.type)&&(ui.inside?o.room===ui.inside:o.room==null&&rectDistance(st.pos,o)<=2));}
function transfer(id,n,way){let box=selectedStorage();if(!box){toast('近くのチェストを選択してください');return;}let src=way==='in'?st.inventory:box.items,dst=way==='in'?box.items:st.inventory;
 if(!src[id])return;n=Math.min(n,src[id]);if(way==='in'){if(id.startsWith('pet_')){toast('仲間カードはチェストに預けられません');return;}if(Object.values(st.equipment||{}).includes(id)){n=Math.min(n,Math.max(0,count(id)-1));if(!n){toast('装備中のアイテムは先に外してください');return;}}if(id==='water'){toast('飲み水は容器と一緒に管理します。現在は預けられません');return;}if(!canRemoveVessel(id,n)){toast('水が入った状態では容器を預けられません');return;}let weight=itemsWeight(box.items),free=(box.type==='fridge'?160:120)-weight;n=Math.min(n,Math.floor((free+.0001)/ITEMS[id][2]));if(n<1){toast('チェストの容量が足りません');return;}}
 else {n=Math.min(n,Math.floor((freeWeight()+.0001)/ITEMS[id][2]));if(id==='water')n=Math.min(n,capacity()-count('water'));if(n<1){toast('持ち運び重量または容器の容量がいっぱいです');return;}}
 if(FOOD[id]){syncFoodFresh();const sourceFresh=way==='in'?st.foodFresh:box.foodFresh,destFresh=way==='in'?box.foodFresh:st.foodFresh;const moved=sourceFresh?.[id]??foodShelfMinutes(id);if(dst[id]>0)mergeFoodFresh(id,{[id]:moved},destFresh);else destFresh[id]=moved;}
 if(DURABLE.has(id)){
 ensureDura();ensureEnhancements();
 box.enhancements=box.enhancements||{};
 let srcD=way==='in'?st.durability:durabilityStore(box),dstD=way==='in'?durabilityStore(box):st.durability;
 let srcU=way==='in'?st.enhancements:box.enhancements,dstU=way==='in'?box.enhancements:st.enhancements;
 let a=srcD[id]||[],b=srcU[id]||[];if(!dstD[id])dstD[id]=[];if(!dstU[id])dstU[id]=[];
 let keep=way==='in'&&Object.values(st.equipment||{}).includes(id)?upgradeIndex(id):-1;
 const idxs=Array.from({length:src[id]},(_,i)=>i).filter(i=>i!==keep).slice(0,n);
 const movedD=idxs.map(i=>a[i]??maxDur(id)),movedU=idxs.map(i=>b[i]??0);
 idxs.slice().reverse().forEach(i=>{a.splice(i,1);b.splice(i,1)});
 dstD[id].push(...movedD);dstU[id].push(...movedU);
 }
 src[id]-=n;if(src[id]<=0){delete src[id];if(FOOD[id])delete (way==='in'?st.foodFresh:box.foodFresh)[id];if(way==='in'&&st.equipment)for(const slot of Object.keys(st.equipment))if(st.equipment[slot]===id)st.equipment[slot]=null;}dst[id]=(dst[id]||0)+n;if(way==='in'){st.quests=st.quests||{};st.quests.stored_chest=true;}ui.transferFlash={id,side:way==='in'?'out':'in',msg:`${ITEMS[id][1]} ${ITEMS[id][0]} ×${n} ${way==='in'?'→ チェスト':'→ 手持ち'}`};addLog(`📦 ${ITEMS[id][0]}×${n}を${way==='in'?'預けた':'取り出した'}。`);playSfx('chest');draw();}
function liftChest(){let box=selectedStorage();if(!box)return;if(box.type==='fridge'){toast('冷蔵庫は中身を空にしてから回収できます');return;}if(st.carriedChest){toast('一度に運べるチェストは1つです');return;}let w=ITEMS.chest[2]+itemsWeight(box.items);if(freeWeight()+.001<w){toast(`チェストごとの運搬には空き重量${fmt(w)}kgが必要です`);return;}st.carriedChest={items:box.items,foodFresh:box.foodFresh||{},durability:box.durability||{},enhancements:box.enhancements||{}};field().placed=field().placed.filter(o=>o.id!==box.id);ui.storageId=null;ui.selected=null;ui.placing={type:'chest',kind:'carry',rotated:false,preview:null,hover:null};addLog(`📦 チェストを中身ごと持ち上げた（${fmt(w)}kg）。`);draw();}
function pickupFixture(){let e=selectedEntity();if(e?.kind!=='object')return;let o=e.obj;if(o.type==='river_bridge'&&st.pos.x===o.x&&st.pos.y===o.y&&!has('raft')){toast('橋の上に立ったまま回収できません。まず岸へ移動してください');return;}if(BUILDS.some(b=>b.id===o.type)){toast('建物は移動できません');return;}if(o.type==='chest'||o.type==='fridge'){if(o.type==='fridge'){if(Object.values(o.items||{}).some(q=>q>0)){toast('冷蔵庫を空にしてから回収してください');return;}}else{ui.storageId=o.id;ui.tab='storage';ui.page=0;ui.view='side';draw();return;}}if(o.type==='medal_stand'&&o.medal){toast('展示中のメダルを先に外してください');return;}if(!ui.inside&&!requireNear(o))return;if(!addItem(o.type)){toast('持ち運べる重量を超えています');return;}field().placed=field().placed.filter(e=>e.id!==o.id);if(o.type==='bed'&&st.respawn?.bedId===o.id){st.respawn=null;addLog('🛏 ベッドを回収したため、リスポーン地点を初期地点へ戻した。');}if(ui.activeStation===o.id)ui.activeStation=null;ui.selected=null;cost({min:7,energy:2});addLog(`📦 ${ITEMS[o.type][0]}を回収した。`);draw();}
function discard(id,n=1){if(id.startsWith('pet_')){toast('テイムした仲間は仲間タブで管理してください');return;}if(!has(id,n))return;if(Object.values(st.equipment||{}).includes(id)&&count(id)<=n){toast('装備中です。装備を外してから捨ててください');return;}if(id==='raft'&&biome(st.wx,st.wy)==='~'){toast('海の上ではいかだを捨てられません');return;}if(!canRemoveVessel(id,n)){toast('水が入っているので容器を捨てられません');return;}if(!confirm(`${ITEMS[id][0]}×${n}を捨てますか？`))return;removeItem(id,n);addLog(`🗑 ${ITEMS[id][0]}×${n}を捨てた。`);draw();}
function walkNextToBuilding(o){
 // Buildings can occupy several cells. Choose the nearest reachable cell on any edge.
 const choices=[];
 for(let y=Math.max(0,o.y-1);y<Math.min(S,o.y+(o.h||1)+1);y++){
  for(let x=Math.max(0,o.x-1);x<Math.min(S,o.x+(o.w||1)+1);x++){
   if(rectDistance({x,y},o)!==1||!safeTerrain(x,y))continue;
   const path=findPath(x,y,false);
   if(path)choices.push({x,y,steps:path.length});
  }
 }
 choices.sort((a,b)=>a.steps-b.steps);
 if(!choices.length){toast('この建物には近づけません');return false;}
 return walkTo(choices[0].x,choices[0].y,false,true);
}
function selectedTile(x,y){
 const sz=ui.inside?(BUILDS.find(b=>b.id===field().placed.find(o=>o.id===ui.inside)?.type)?.size||6):S;
 if(x<0||y<0||x>=sz||y>=sz)return;
 if(st.combat){toast('戦闘中は前面の逃走ボタンから操作してください');return;}
 if(ui.moving){toast('移動中です');return;}
 if(ui.battleSummary)ui.battleSummary=null;
 if(ui.placing){
  const repeatedPreview=ui.placing.preview?.x===x&&ui.placing.preview?.y===y;
  if(repeatedPreview){confirmPlacement();return;}
  selectPlacementPreview(x,y);return;
 }
 const repeated=ui.selected?.x===x&&ui.selected?.y===y;
 if(repeated&&!ui.inside){const sel=selectedEntity();if(ui.aim&&sel?.kind==='creature'&&bowInfo()&&distance(st.pos,sel.mob)<=bowInfo().range){rangedAttack();return;}
  if(sel?.kind==='water'){
   if(distance(st.pos,{x,y})<=1){drinkAt();return;}
   walkTo(x,y,true,true,()=>{ui.selected={x,y};drinkAt();});
   return;
  }
  if(sel?.kind==='object'&&['cave_entrance','cave_exit','cave_next','cave_back','treasure','demon_gate','return_gate','demon_tower','demon_castle'].includes(sel.obj.type)){
   if(adjacentToObject(st.pos,sel.obj))inspectPlace();
   else walkTo(sel.obj.x,sel.obj.y,true,true,()=>{ui.selected={x:sel.obj.x,y:sel.obj.y};inspectPlace();});
   return;
  }
  if(sel?.kind==='object'&&BUILDS.some(b=>b.id===sel.obj.type)){
   // Select once for details; repeat click enters if adjacent, or walks to the edge otherwise.
   if(adjacentToObject(st.pos,sel.obj))inspectPlace();else walkNextToBuilding(sel.obj);
   return;
  }
  if(st.pos.x===x&&st.pos.y===y){if(sel?.kind==='node'&&sel.node.qty>0){gather(1);return;}toast('現在地です');draw();return;}
  if(sel?.kind==='object'){if(sel.obj.type==='river_bridge')walkTo(x,y,false,true);else walkTo(sel.obj.x,sel.obj.y,true,true);}else{walkTo(x,y,false,true);}return;}
 ui.selected={x,y};const sel=selectedEntity();if(sel?.kind==='object'&&['chest','fridge'].includes(sel.obj.type)&&(ui.inside||adjacentToObject(st.pos,sel.obj))){ui.storageId=sel.obj.id;ui.tab='storage';ui.view='side';draw();return;}if(sel?.kind==='object'&&sel.obj.type!=='chest'&&!BUILDS.some(b=>b.id===sel.obj.type)&&sel.obj.type!=='garden_plot'&&sel.obj.type!=='medal_stand'&&ITEMS[sel.obj.type]?.[3]==='設備'){if(ui.inside||adjacentToObject(st.pos,sel.obj)){ui.activeStation=sel.obj.id;ui.tab='craft';ui.view='side';}}draw();
}

function showHelp(open,details=false){const modal=el('modal');modal.classList.toggle('hidden',!open);if(open){modal.classList.toggle('intro-mode',!details);el('welcomeIntro').classList.toggle('hidden',details);el('helpDetails').classList.toggle('hidden',!details);st.firstRun=false;}save();}
/* WILDSEED v1.0.3 — IndexedDB primary storage (legacy localStorage migration) */
const GAME_DB_NAME='wildseed_game_storage_v1', GAME_DB_STORE='saves', GAME_DB_SLOT='primary';
let gameDB=null, saveReady=false, savePending=null, saveDrain=null, saveSuspended=false;
let saveBackend='準備中', saveLastOK=0, saveLastBytes=0, saveFailure='', saveNotice='', saveMigrated=false;
function gameSaveBytes(v){return new Blob([v]).size;}
function saveMB(bytes){return (bytes/1048576).toFixed(2)+' MiB';}
function validSavedWorld(world){return !!(world&&typeof world==='object'&&!Array.isArray(world)&&world.fields&&typeof world.fields==='object'&&!Array.isArray(world.fields)&&world.inventory&&typeof world.inventory==='object'&&!Array.isArray(world.inventory)&&world.pos&&Number.isFinite(world.pos.x)&&Number.isFinite(world.pos.y));}
function openGameDB(){return new Promise((resolve,reject)=>{
 if(!window.indexedDB){reject(new Error('IndexedDBを利用できません'));return;}
 let req;
 try{req=indexedDB.open(GAME_DB_NAME,1);}catch(error){reject(error);return;}
 req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(GAME_DB_STORE))db.createObjectStore(GAME_DB_STORE,{keyPath:'id'});};
 req.onerror=()=>reject(req.error||new Error('IndexedDBを開けません'));
 req.onblocked=()=>reject(new Error('別のタブがデータベースを使用しています'));
 req.onsuccess=()=>{const db=req.result;db.onversionchange=()=>db.close();resolve(db);};
});}
function readGameDB(){return new Promise((resolve,reject)=>{
 try{const tx=gameDB.transaction(GAME_DB_STORE,'readonly'),req=tx.objectStore(GAME_DB_STORE).get(GAME_DB_SLOT);
 req.onsuccess=()=>resolve(req.result||null);
 req.onerror=()=>reject(req.error||new Error('IndexedDBの読み込みに失敗'));
 tx.onabort=()=>reject(tx.error||new Error('IndexedDBの読み込みが中断'));
 }catch(e){reject(e);}
});}
function writeGameDB(json){return new Promise((resolve,reject)=>{
 try{const tx=gameDB.transaction(GAME_DB_STORE,'readwrite');
 tx.objectStore(GAME_DB_STORE).put({id:GAME_DB_SLOT,content:json,updatedAt:Date.now()});
 tx.oncomplete=()=>resolve(true);tx.onerror=()=>reject(tx.error||new Error('IndexedDBへの保存に失敗'));
 tx.onabort=()=>reject(tx.error||new Error('IndexedDBの保存が中断'));
 }catch(e){reject(e);}
});}
function removeLegacySave(){try{localStorage.removeItem(SAVEKEY);}catch(e){}}
function showSaveFailure(msg){
 saveFailure=msg;const alert=el('saveAlert');if(alert){alert.classList.remove('hidden');alert.innerHTML='⚠ 自動セーブに失敗しました：'+esc(msg)+'。次の更新が保存されない可能性があります。<button data-act="savemanager">バックアップを作成</button>';}
 const detail=el('saveStorageDetail');if(detail&&!el('saveOverlay')?.classList.contains('hidden'))refreshSaveStatus();
}
function clearSaveFailure(){saveFailure='';const alert=el('saveAlert');if(!alert)return;
 if(saveBackend==='localStorage（予備）'&&saveNotice){alert.classList.remove('hidden');alert.innerHTML='⚠ '+esc(saveNotice)+' <button data-act="savemanager">バックアップを作成</button>';}
 else alert.classList.add('hidden');
}
function markSaveSuccess(json){saveLastOK=Date.now();saveLastBytes=gameSaveBytes(json);clearSaveFailure();}
async function writeSavePayload(json){
 if(saveBackend==='IndexedDB'&&gameDB){await writeGameDB(json);removeLegacySave();}
 else if(saveBackend==='localStorage（予備）'){localStorage.setItem(SAVEKEY,json);}
 else throw new Error('使用できる保存先がありません');
 markSaveSuccess(json);
}
async function flushGameSaves(){
 while(savePending!==null){const latest=savePending;savePending=null;
  try{await writeSavePayload(latest);}catch(e){showSaveFailure((e&&e.message)||String(e));}
 }
}
function save(){
 if(!saveReady||saveSuspended||!st)return;
 try{
  savePending=JSON.stringify(st);
  if(!saveDrain){saveDrain=Promise.resolve().then(flushGameSaves).finally(()=>{saveDrain=null;if(savePending!==null&&!saveSuspended)save();});}
 }catch(e){showSaveFailure('セーブデータの生成に失敗：'+(e?.message||e));}
}
async function waitForSave(){
 while(saveDrain){await saveDrain;}
 if(savePending!==null){save();if(saveDrain)await saveDrain;}
}
async function loadGameState(){
 let legacyText=null, legacyObj=null;
 try{legacyText=localStorage.getItem(SAVEKEY);if(legacyText){const obj=JSON.parse(legacyText);if(validSavedWorld(obj))legacyObj=obj;else saveNotice='旧形式の保存内容を読み込めなかったため、元データは残してあります。';}}catch(e){saveNotice='旧セーブの読み込みに問題があります：'+(e?.message||e);}
 try{
  gameDB=await openGameDB();saveBackend='IndexedDB';
  const row=await readGameDB();
  if(row&&row.content){let parsed=typeof row.content==='string'?JSON.parse(row.content):row.content;
   if(!validSavedWorld(parsed))throw new Error('保存済みデータの形式が正しくありません');
   const json=typeof row.content==='string'?row.content:JSON.stringify(parsed);
   saveLastOK=row.updatedAt||0;saveLastBytes=gameSaveBytes(json);
   saveReady=true;return parsed;
  }
  if(legacyObj){
   // Migrate before deleting old storage. Keep old data if the transaction fails.
   const json=legacyText;
   try{await writeGameDB(json);removeLegacySave();saveMigrated=true;markSaveSuccess(json);}
   catch(e){showSaveFailure('旧セーブのIndexedDB移行に失敗：'+(e?.message||e));}
   saveReady=true;return legacyObj;
  }
  saveReady=true;return null;
 }catch(e){
  // Unsupported or blocked IndexedDB: keep the legacy save and warn visibly.
  saveBackend='localStorage（予備）';gameDB=null;
  saveNotice='IndexedDBが利用できないため、容量の小さいlocalStorageを使用しています。バックアップを取ってください。';
  if(e?.message)saveNotice+='（'+e.message+'）';
  clearSaveFailure();
  saveReady=true;return legacyObj;
 }
}
async function refreshSaveStatus(){
 const detail=el('saveStorageDetail');if(!detail||!st)return;
 const current=JSON.stringify(st),bytes=gameSaveBytes(current);
 let estimate='取得できません';
 try{if(navigator.storage?.estimate){const n=await navigator.storage.estimate();if(n.quota)estimate=saveMB(n.usage||0)+' / '+saveMB(n.quota)+'（ブラウザ全体の概算）';}}catch(e){}
 if(el('saveOverlay')?.classList.contains('hidden'))return;
 detail.textContent='保存方式：'+saveBackend+'\n現在のセーブ：約'+saveMB(bytes)+'（'+bytes.toLocaleString('ja-JP')+' バイト）'
  +'\n最終保存：'+(saveLastOK?new Date(saveLastOK).toLocaleString('ja-JP'):'まだ完了していません')
  +'\nブラウザ保存領域：'+estimate
  +(saveMigrated?'\n旧セーブ：IndexedDBへ移行済み':'')
  +(saveNotice?'\n注意：'+saveNotice:'')+(saveFailure?'\n保存エラー：'+saveFailure:'');
}
function openSaveManager(){el('saveOverlay').classList.remove('hidden');refreshSaveStatus();}
function closeSaveManager(){el('saveOverlay').classList.add('hidden');}
function exportGameSave(){
 if(!st)return;
 try{
  const data={format:'WILDSEED_SAVE',version:1,exportedAt:new Date().toISOString(),state:JSON.parse(JSON.stringify(st))};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='WILDSEED_save_'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
  toast('セーブデータを書き出しました');
 }catch(e){showSaveFailure('バックアップの書き出しに失敗：'+(e?.message||e));}
}
async function importGameSave(file){
 if(!file)return;
 try{
  if(file.size>60*1024*1024)throw new Error('60MBを超えるファイルは読み込めません');
  const parsed=JSON.parse(await file.text()),world=parsed?.format==='WILDSEED_SAVE'?parsed.state:parsed;
  if(!validSavedWorld(world))throw new Error('WILDSEEDの正しいセーブファイルではありません');
  if(!confirm('現在のセーブデータを読み込んだ内容で上書きします。先にバックアップを取りましたか？'))return;
  saveSuspended=true;await waitForSave();savePending=null;
  const json=JSON.stringify(world);
  await writeSavePayload(json);saveNotice='バックアップを読み込みました。';
  window.location.reload();
 }catch(e){showSaveFailure('読み込み失敗：'+(e?.message||e));toast('読み込みに失敗しました。現在のデータは維持されています');}
 finally{saveSuspended=false;refreshSaveStatus();}
}

async function init(){try{let saved=await loadGameState();if(saved?.fields&&saved.inventory){st=saved;for(let f of Object.values(st.fields)){for(let n of (f.nodes||[]))if(n.type==='ore'&&!n.deposit)n.deposit='ore';for(let o of (f.placed||[])){let sz=placeSize(o.type,!!o.rotated);o.w=sz.w;o.h=sz.h;}}}else st=blankState();syncEquipment();ensureDura();ensureEnhancements();if(st.fields['4,4']){let g=st.fields['4,4'].ground;for(let [x,y] of [[6,5],[7,5],[7,6],[8,6],[8,5],[6,7],[6,8],[7,7],[8,7],[5,6],[4,6],[4,7],[4,8]])if(g?.[y]?.[x]==='water')g[y][x]='sand';}for(let [k,f]of Object.entries(st.fields)){let [x,y]=k.split(',').map(Number);if(caveEntrances(x,y)&&!f.placed.some(o=>o.type==='cave_entrance')){let xx=2+hash(x,y,st.seed)%8,yy=2+hash(y,x,st.seed)%8;f.nodes=f.nodes.filter(n=>n.x!==xx||n.y!==yy);f.placed.push({id:makeId(),type:'cave_entrance',x:xx,y:yy,room:null,w:1,h:1});}}if(!st.caves)st.caves={};for(const ff of Object.values(st.fields)){for(const o of ff.placed.filter(z=>BUILDS.some(b=>b.id===z.type))){/* indoor layouts will be normalized on entry */}}}catch(e){st=blankState();}loadAudioPrefs();progressInit();syncFoodFresh();if(st.combat&&!field().creatures.some(m=>m.id===st.combat.mobId))st.combat=null;field();rescueAfterTerrainUpdate();graveSettings();expireGraves();if(!st.logs.length)addLog('🌱 目を覚ますと、見知らぬ川辺にいた。まずは木・石・草を集めよう。');draw();syncAudioUI();if(st.firstRun){if(!st.avatarStyle)openHeroSelector(true);else showHelp(true);}document.addEventListener('pointerdown',()=>{if(audio.enabled)setAudioEnabled(true);else ensureAudio();},{once:true});}
function newGame(){if(ui.moving)ui.moving=false;if(!confirm('現在の世界と自動セーブを消して、新しい世界を始めますか？'))return;st=blankState();ui={tab:'items',view:'field',page:0,storageMode:'in',journalMode:'goals',selected:null,chosenItem:null,craftFilter:'全部',showCraftable:false,placing:null,inside:null,storageId:null,moving:false,route:[],storePages:{in:0,out:0},storeAmount:1,transferFlash:null,battleSummary:null,forceHeroSelect:false};field();addLog('🌱 新しい世界が始まった。');draw();syncAudioUI();if(!st.avatarStyle)openHeroSelector(true);else showHelp(true);}
function renderStats(){progressInit();const arr=[['HP','hp','#e7928a',hpMax()],['空腹','hunger','#f0ca7e',100],['水分','thirst','#87c6de',100],['スタミナ','stamina','#9acba1',staminaMax()]];
 el('stats').innerHTML=arr.map(([name,k,c,max])=>`<div class="stat"><div class="statlabel"><span>${name}</span><b>${Math.round(st[k])}/${max}</b></div><div class="meter"><i style="width:${clamp(st[k]/max*100)}%;background:${c}"></i></div></div>`).join('');
 el('levelbar').innerHTML=`<span>⭐ Lv.${st.level} <small>経験 ${st.xp}/${nextXp()}</small></span><div class="xp-track"><i style="width:${clamp(st.xp/nextXp()*100)}%"></i></div><span>${st.points?'✨ 未割振 '+st.points+'pt':'TURN '+st.turn}</span>`;
 el('load').textContent=`🎒 荷物 ${fmt(invWeight())} / ${carryMax()} kg`;el('waterSupply').textContent=`💧 携帯水 ${count('water')} / ${capacity()}`;el('equipment').textContent=`⚔ ${equipped('weapon')?ITEMS[equipped('weapon')][0]:'素手'} / 🛡 防御${armorTotal()}`;el('worldtime').textContent=`${timeOfDay()==='night'?'🌙':'☀'} ${day()}日目 ${minsDisplay(st.time)}`;el('mobileHUD').innerHTML=`<span>Lv${st.level}</span><span>❤ ${Math.round(st.hp)}</span><span>🍗 ${Math.round(st.hunger)}</span><span>💧 ${Math.round(st.thirst)}</span><span>⚡ ${Math.round(st.stamina)}</span><span>🎒 ${fmt(invWeight())}kg</span>`;
}
function nodeAt(x,y){return field().nodes.find(n=>n.x===x&&n.y===y&&n.qty>0)}
function objectAt(x,y){return locatedObjects().find(o=>occupies(o,x,y))}
function mobAt(x,y){return ui.inside?null:field().creatures.find(m=>m.x===x&&m.y===y)}
function tileHTML(x,y,mode=false,pad=0){const f=field(),node=mode?null:nodeAt(x,y),obj=objectAt(x,y),mob=mobAt(x,y),penpet=mode?petAt(x,y):null;
 let g=mode?'floor':f.ground[y][x],icon='',marker='',aria='',occupied=false,anchorTile=false,illustrated=false,spanW=1,spanH=1;
 if(obj){let b=BUILDS.find(b=>b.id===obj.type);const cave={river_bridge:['木の橋','🌉'],grave:['遺品のお墓','🪦'],cave_entrance:['洞窟の入口','🕳️'],cave_exit:['地上への出口','🚪'],cave_back:['戻り階段','⬆️'],cave_next:['奥への階段','⬇️'],treasure:[obj.opened?'空の宝箱':'宝箱',obj.opened?'📭':'🎁']};occupied=true;anchorTile=(obj.x===x&&obj.y===y);aria=b?b.name:ITEMS[obj.type]?.[0]||cave[obj.type]?.[0]||'設備';spanW=obj.w||1;spanH=obj.h||1;if(obj.type==='medal_stand'&&obj.medal){aria=ITEMS[obj.medal][0]+'を展示中';}
   if(anchorTile&&obj.type==='river_bridge'){icon='<span class="river-bridge-art" aria-hidden="true"></span>';}else if(anchorTile&&spanW===1&&spanH===1&&!SPECIAL_ITEM_ICONS['obj_'+obj.type]){icon=artFor(obj.opened&&obj.type==='treasure'?'treasure_open':obj.type==='cave_entrance'?'mine_entrance':obj.type,b?.icon||ITEMS[obj.type]?.[1]||cave[obj.type]?.[1]||'🏠','map-object');}
 }else if(penpet){icon=artFor(penpet.type,CREATURES[penpet.type][1],'mob-art');aria=penpet.nick+'（放牧中）';}
 else if(mob){icon=artFor(mob.type,CREATURES[mob.type][1],'mob-art');aria=CREATURES[mob.type][0];marker=enemyIsHostile(mob)?'⚔':'';}
 else if(node){let ore=node.type==='ore'?ORE_META[miningDeposit(node)]:null;let oreId=ore?(miningDeposit(node).includes('mythril')?'blue_crystal':miningDeposit(node).includes('orichalcum')?'purple_crystal':'ore'):node.type;
 icon=artFor(oreId,ore?ore.icon:NODES[node.type][1],'node-art');aria=ore?ore.name:NODES[node.type][0];marker=node.qty;
 }
 let chosen=ui.selected?.x===x&&ui.selected?.y===y,player=!mode&&st.pos.x===x&&st.pos.y===y;
 let escaping=!mode&&st.combat&&canEscape(x,y),battling=!mode&&st.combat&&mob?.id===st.combat.mobId;
 let route=!mode&&ui.route?.some(p=>p.x===x&&p.y===y);
 let groundKey=mode?'floor':g==='caverock'?'cavewall':g;
 return `<button type="button" class="tile ${mode?'room-tile':''} ${g} ${chosen?'active':''} ${player?'player':''} ${escaping?'escape':''} ${battling?'battling':''} ${route?'route':''} ${!mode&&ui.aim&&bowInfo()&&distance(st.pos,{x,y})<=bowInfo().range?'aim-range':''} ${!mode&&ui.aim&&mob&&bowInfo()&&distance(st.pos,{x,y})<=bowInfo().range?'aim-target':''} ${occupied?'occupied fixture-cell':''} ${anchorTile?'anchor':''} ${mob&&enemyIsHostile(mob)?'hostile':''}" data-x="${x}" data-y="${y}" style="${atlasCSS(groundKey,true)}grid-column:${x+pad+1};grid-row:${y+pad+1};" aria-label="${esc(aria||'地面')} ${x+1},${y+1}${player?'・現在位置':''}"><span class="sprite" style="--big-w:${spanW};--big-h:${spanH}">${icon}</span>${obj?.type==='cave_entrance'?'<span class="cave-entry-label">洞窟</span>':''}${marker?`<span class="marker">${marker}</span>`:''}${player?'':''}</button>`;}
function drawBigFixtures(pad=0){
 const map=el('mapgrid');
 for(const obj of locatedObjects()){
   const w=obj.w||1,h=obj.h||1,id='obj_'+obj.type,uri=SPECIAL_ITEM_ICONS[id];
   if(!uri && w===1&&h===1)continue;
   const d=document.createElement('div');
   d.className='fixture-art'+(w===h?' square-art':'')+(BUILDS.some(b=>b.id===obj.type)?' building-art':'')+(ui.selected&&occupies(obj,ui.selected.x,ui.selected.y)?' selected-fixture':'');
   d.style.gridColumn=(obj.x+pad+1)+' / span '+w;
   d.style.gridRow=(obj.y+pad+1)+' / span '+h;
   d.title=ITEMS[obj.type]?.[0]||BUILDS.find(b=>b.id===obj.type)?.name||obj.type;
   if(uri){
     const dims=placeSize(obj.type),rotated=!!obj.rotated;
     const pic=document.createElement('span');pic.className='fixture-picture';
     pic.style.backgroundImage='url('+uri+')';
     pic.style.width=(rotated?100*h/w:100)+'%';
     pic.style.height=(rotated?100*w/h:100)+'%';
     pic.style.setProperty('--sprite-rotate',rotated?'90deg':'0deg');
     d.appendChild(pic);
   }else{
     d.style.backgroundImage='var(--wild-sprites)';
     d.style.backgroundSize='contain';
   }
   map.appendChild(d);
 }
}

function renderMap(){const f=field(),b=biome(st.wx,st.wy),insideObj=ui.inside?f.placed.find(o=>o.id===ui.inside):null,insideType=insideObj?BUILDS.find(z=>z.id===insideObj.type):null,inside=!!insideType,cave=!!st.cave;
 let caveName=cave?caveSpec(st.cave.id):null;
 const visitedCount=Object.keys(currentVisited()).length;el('locmeta').textContent=inside?'拠点内部 / 設備を自由に配置':cave?`洞窟 ${st.cave.room+1}/${caveName.rooms}区画 · 危険度${caveName.rank}`:`${realmLabel()} · 訪問したエリア ${visitedCount}か所`;
 el('locname').textContent=inside?insideType.name:cave?caveName.name:BIOMES[b][0]+'（'+realmLabel()+'）';el('locdesc').textContent=inside?'マスを選択して設備を配置。外に出ると周辺を探索できます。':cave?'奥の部屋へ進み、鉱石や宝箱を探そう。':BIOMES[b][1];
 el('locdanger').textContent=inside?'🏡 拠点内部':cave?'🕳 危険な洞窟':currentRealm()==='demon'?'👿 魔界探索中':b==='~'?'🌊 海上':b==='H'?'⚠ 危険地帯':'☘ 探索可能';el('locdanger').className='tag '+(cave||b==='H'||currentRealm()==='demon'?'warn':b==='~'?'sea':'');
 const map=el('mapgrid');map.classList.toggle('room-map',inside);map.classList.remove('dusk','night');let phase=timeOfDay();if(!inside&&!cave&&(phase==='dusk'||phase==='dawn'))map.classList.add('dusk');if(!inside&&(cave||phase==='night'||currentRealm()==='demon'))map.classList.add('night');
 map.style.gridTemplateColumns=`repeat(${S},minmax(0,1fr))`;
 if(inside){let sz=insideType.size,pad=Math.floor((S-sz)/2),end=pad+sz;map.innerHTML=Array.from({length:S*S},(_,i)=>{let x=i%S,y=Math.floor(i/S);return x>=pad&&y>=pad&&x<end&&y<end?tileHTML(x-pad,y-pad,true,pad):`<div class="tile room-void" style="grid-column:${x+1};grid-row:${y+1};" aria-hidden="true"></div>`;}).join('');drawBigFixtures(pad);
 el('maphelp').textContent=insideType.id==='pasture'?'🐾 牧畜場：放牧・資源回収は仲間タブ、インフラは建築タブ。':'🏠 室内：床に設備を配置。建築タブでは共通設備スロットを管理できます。';el('travel').innerHTML='<button class="btn primary" data-act="exit">🚪 建物の外に出る</button>'+ (installedInfra(insideObj,'water_tap')?`<button class="btn primary" data-act="waterhome" ${homeTank(insideObj)<1?'disabled':''}>🚰 水を飲む（${fmt(homeTank(insideObj))}L）</button>`:'');
 }else{map.innerHTML=Array.from({length:S*S},(_,i)=>tileHTML(i%S,Math.floor(i/S))).join('');drawBigFixtures(0);el('maphelp').textContent=st.combat?'⚔ 手動戦闘中：前面のウィンドウで1ターンずつ操作':ui.moving?'👣 1マスごとに時間・スタミナを消費します':cave?'🕯 階段や宝箱をクリックして探索。戦闘は手動ターン制。':ui.placing?'🧰 仮配置中：場所を選び「ここに設置」で確定':'黄色い枠が現在地。左下の主人公が移動方向・戦闘状態を表します。';
 el('travel').classList.toggle('battle-travel',!!st.combat);el('travel').innerHTML=cave?'<span class="tiny">🕳 洞窟探索中　出口・階段を選択してください</span>':[[0,-1,'↑ 北'],[-1,0,'← 西'],[1,0,'東 →'],[0,1,'↓ 南']].map(([dx,dy,l])=>{let size=currentWorldSize(),bb=biome((st.wx+dx+size)%size,(st.wy+dy+size)%size);let sea=['~','V'].includes(bb)&&!has('raft');return`<button class="btn subtle" data-travel="${dx},${dy}" title="${sea?'海：いかだが必要':'隣のフィールドへ移動'}">${l} ${sea?'🔒':''}</button>`}).join('');}
 updatePlacementGhost();
 el('weatherlabel').textContent=inside?'🏠 屋内':cave?'🕯 地下洞窟':`${rainNow()?'🌧 雨':'☀ 晴れ'}　${phase==='night'?'🌙 夜・敵が強化':phase==='dusk'?'🌇 夕方':phase==='dawn'?'🌄 夜明け':'🌤 昼'}`;
 renderRestPreview();
 let battle=battleMob(),flash=el('combatFloat');if(battle){flash.classList.remove('hidden');flash.innerHTML=`<strong>⚔ 戦闘中｜${CREATURES[battle.type][1]} ${CREATURES[battle.type][0]} HP ${Math.max(0,battle.hp)}/${CREATURES[battle.type][2]}</strong><div><span>${esc(st.combat.history.at(-1)||'戦闘中')}</span></div>`;}else{flash.classList.add('hidden');flash.innerHTML='';}
}
function renderBattleOverlay(){
 const host=el('mapgrid').parentElement;
 let box=document.getElementById('battleOverlay');
 if(!box){box=document.createElement('div');box.id='battleOverlay';host.appendChild(box);}
 const m=battleMob();if(!m){box.hidden=true;return;}
 const info=CREATURES[m.type],ratio=Math.max(0,Math.min(100,Math.round(m.hp/mobHP(m)*100)));
 const dirs=[[0,-1,'北'],[-1,0,'西'],[1,0,'東'],[0,1,'南']];
 const tameUI=(!m.boss&&m.hp<=mobHP(m)*.35)?`<div class="tame-panel"><b>🪔 テイムの機会！必要なお香Lv${INCENSE_RANK[m.type]||1}</b><div class="actionbuttons">${INCENSE_IDS.map((id,i)=>`<button class="btn small primary" data-tame="${i+1}" ${has(id)&&i+1>=(INCENSE_RANK[m.type]||1)?'':'disabled'}>${ITEMS[id][0]} ×${count(id)}</button>`).join('')}${st.combat.tamePause?'<button class="btn small subtle" data-act="resumebattle">戦闘を続ける</button>':''}</div></div>`:'';
 const lines=st.combat.history.slice(-6);
 box.innerHTML=`<div class="enemy-name">⚔ ${esc(info[0])} と戦闘中</div>
 <div class="duel-stage"><div class="combatant player ${st.combat.lastActor==='player'?'active':''}"><div class="combat-sprite">${playerBattleAvatar()}</div><div class="combat-label">あなた HP ${Math.ceil(st.hp)} / ST ${Math.ceil(st.stamina)}</div></div>
 <div class="versus">VS</div><div class="combatant enemy ${st.combat.lastActor==='enemy'?'active':''}"><div class="combat-sprite enemy-image">${artFor(m.type,info[1])}</div><div class="combat-label">${info[0]} HP ${Math.max(0,m.hp)}/${info[2]}</div></div></div>
 <div class="pet-battle-line">${petParty().map(p=>`<span>🐾 ${esc(p.nick)} <small>援護攻撃</small></span>`).join('')}</div>
 <div class="combat-bar"><i style="width:${ratio}%"></i></div>
 <div class="battle-lines">${lines.map((x,i)=>`<div class="${i===lines.length-1?'newest':''}">${esc(x)}</div>`).join('')}</div>
 <div class="actionbuttons battle-controls" style="justify-content:center;margin:5px 0"><button class="btn small primary" data-act="round">⚔ 1ターン進める</button><button class="btn small ${st.combat.gentle?'primary':'subtle'}" data-act="gentle">${st.combat.gentle?'✓ 手加減を解除':'⚔ 手加減を有効化'}</button></div>${tameUI}<div class="escape-tip">ボタンを押すと1ターンずつ進行。逃走成功率76%（失敗すると反撃）</div>
 <div class="escape-options">${dirs.map(([dx,dy,label])=>`<button class="btn small" data-flee="${st.pos.x+dx},${st.pos.y+dy}" ${canEscape(st.pos.x+dx,st.pos.y+dy)?'':'disabled'}>${label}へ逃げる</button>`).join('')}</div>`;
 box.hidden=false;
}
function renderActions(){let e=selectedEntity(),html='';el('actionbox').classList.toggle('incombat',!!(st.combat||ui.battleSummary));el('actionbox').classList.toggle('battle-result',!!ui.battleSummary&&!st.combat);
 if(st.combat){let m=battleMob(),name=m?CREATURES[m.type][0]:'魔物';let dirs=[[0,-1,'↑'],[-1,0,'←'],[1,0,'→'],[0,1,'↓']];html=`<div class="actionhead"><div class="actionicon">⚔️</div><div><b>第${st.combat.turn}ターン　${name}</b><div class="combat-hp">敵 HP ${m?.hp??0}　あなた HP ${Math.round(st.hp)} / スタミナ ${Math.round(st.stamina)}</div></div></div><div class="combat-history">${st.combat.history.slice(-(innerWidth<=380?3:4)).map(x=>`<div>${esc(x)}</div>`).join('')}</div><div class="actionbuttons"><button class="btn small primary" data-act="round">⚔ 1ターン進める</button><span class="tiny">逃走：</span>${dirs.map(([dx,dy,l])=>`<button class="btn small subtle" data-flee="${st.pos.x+dx},${st.pos.y+dy}" ${canEscape(st.pos.x+dx,st.pos.y+dy)?'':'disabled'}>${l}</button>`).join('')}</div>`;}
 else if(ui.battleSummary){html=`<div class="actionhead"><div class="actionicon">${ui.battleSummary.title.split(' ')[0]}</div><div><b>${esc(ui.battleSummary.title)}</b><div class="tiny">戦闘を終了しました</div></div></div><div class="combat-history">${ui.battleSummary.history.map(x=>`<div>${esc(x)}</div>`).join('')}</div><div class="actionbuttons"><button class="btn small" data-act="dismissbattle">閉じる</button></div>`;}
 else if(ui.moving){html=`<div class="actionhead"><div class="actionicon">👣</div><div><b>移動中 — TURN ${st.turn||0}</b><div class="tiny">${ui.route.length}マス先へ進行中 · スタミナ -0.45 /歩</div></div></div><p class="actiontext">${esc(ui.lastTurnReport||'1歩進むごとに周囲の魔物・動物も動きます。')}</p>`;}
 else if(ui.placing){let p=ui.placing,pos=p.preview,valid=pos?placementValidity(pos.x,pos.y):null;const dims=placeSize(p.type,p.rotated);html=`<div class="actionhead"><div class="actionicon">📍</div><div><b>設置する場所を確認</b><div class="tiny">${esc(p.kind==='carry'?'運搬中のチェスト':p.kind==='building'?BUILDS.find(b=>b.id===p.type)?.name:ITEMS[p.type]?.[0])}（${dims.w}×${dims.h}マス）</div></div></div><p class="actiontext">MAP上で場所を選ぶと、完成後の位置・向き・占有範囲が半透明で表示されます。別のマスを選べば位置を変更できます。</p><p class="placement-confirm-hint ${valid&&!valid.ok?'invalid':''}">${pos?`選択：${pos.x+1}列・${pos.y+1}行｜${valid.ok?'✓ 設置可能':'× '+esc(valid.reason)}`:'MAPをクリック・タップして場所を選んでください。'}</p><div class="actionbuttons"><button class="btn small primary" data-act="confirmplace" ${pos&&valid.ok?'':'disabled'}>✓ ここに設置</button><button class="btn small" data-act="rotateplace" ${dims.w===dims.h?'disabled':''}>⟳ 90°回転（${dims.w}×${dims.h}）</button><button class="btn small subtle" data-act="cancelplace">設置を中止</button></div>`;}
 else if(!e)html='<div class="actionhead"><div class="actionicon">🧭</div><div><b>どこを調べますか？</b><div class="tiny">セルをクリックして情報を確認</div></div></div><p class="actiontext">マスをクリックして詳細を開き、「移動」「採取」などの行動を選んでください。製作タブで必要な材料と設備、使用条件を確認できます。</p>';
 else if(e.kind==='node'){let n=e.node,meta=n.type==='ore'?(()=>{let id=miningDeposit(n);return[ORE_META[id].name,ORE_META[id].icon,`必要つるはし：${ORE_META[id].req}段階 / 所持：${bestTool('pick').tier}段階`];})():NODES[n.type];let tool=n.type==='tree'?bestTool('axe'):['rock','ore'].includes(n.type)?bestTool('pick'):null;html=`<div class="actionhead"><div class="actionicon">${artFor(e.kind==='node'?(n.type==='ore'?'ore':n.type):m.type,meta[1])}</div><div><b>${meta[0]}</b><div class="tiny">残り採取回数 ${n.qty}回</div></div></div><p class="actiontext">${meta[2]}${tool?` 使用道具：${tool.id?ITEMS[tool.id][0]:'なし'} / 採取${tool.tier?Math.max(3,9-tool.tier):9}分 / スタミナ${fmt(tool.tier?Math.max(1.3,3.5-tool.tier*.4):3.5)}`:''}</p><div class="actionbuttons"><button class="btn small primary" data-act="gather" data-num="1">採取する（移動後）</button><button class="btn small" data-act="gather" data-num="3">最大3回採取</button><button class="btn small subtle" data-act="walkselected">移動する</button></div>`;}
 else if(e.kind==='creature'){let m=e.mob,meta=CREATURES[m.type];html=`<div class="actionhead"><div class="actionicon">${artFor(e.kind==='node'?(n.type==='ore'?'ore':n.type):m.type,meta[1])}</div><div><b>${meta[0]}</b><div class="tiny">HP ${m.hp}/${mobHP(m)} / ⚔ ${mobATK(m)}・🛡 ${mobDEF(m)}</div></div></div><p class="actiontext">${meta[5]} 武器の攻撃力と装備防御力で戦闘結果が変わります。</p><div class="actionbuttons">${distance(st.pos,m)===1?'<button class="btn small primary" data-act="attack">⚔ 隣から攻撃</button>':''}${ui.aim&&bowInfo()&&distance(st.pos,m)<=bowInfo().range?'<button class="btn small primary" data-act="shoot">🏹 矢を放つ</button>':''}<button class="btn small subtle" data-act="walkselected">そのマスへ移動</button></div>`;}
 else if(e.kind==='water'){let fresh=field().ground[e.y][e.x]==='water';html=`<div class="actionhead"><div class="actionicon">${artFor(fresh?'water_tap':'fishmob',fresh?'💧':'🌊')}</div><div><b>${fresh?'川の水':'海水'}</b><div class="tiny">${fresh?'飲用可能':'そのままは飲めない'}</div></div></div><p class="actiontext">${fresh?'その場で飲むことができます。容器があれば飲み水カードを汲めます。':'蒸留器が近くにあれば、海水を飲用水に変えて容器に入れられます。'}</p><div class="actionbuttons">${fresh?'<button class="btn small primary" data-act="drinkriver">💧 その場で飲む</button>':''}${has('fishing_rod')?'<button class="btn small" data-act="fish">🎣 釣り</button>':''}<button class="btn small" data-act="fillwater">${fresh?'水を汲む':'蒸留して汲む'}</button><button class="btn small subtle" data-act="walkselected">移動する</button></div>`;}
 else if(e.kind==='object'&&['cave_entrance','cave_exit','cave_next','cave_back','treasure'].includes(e.obj.type)){let o=e.obj;let label={cave_entrance:'洞窟の入口',cave_exit:'地上への出口',cave_next:'奥への階段',cave_back:'戻り階段',treasure:'宝箱'}[o.type];html=`<div class="actionhead"><div class="actionicon">${o.type==='treasure'?'🎁':'🕳️'}</div><div><b>${label}</b><div class="tiny">${o.type==='cave_entrance'?`危険度 ${caveSpec(key()).rank}`:o.type==='treasure'?(o.opened?'開封済み':'宝物が眠っている'):'洞窟を進む'}</div></div></div><div class="actionbuttons"><button class="btn small primary" data-act="caveinteract">${o.type==='treasure'?'宝箱を開ける':'出入りする'}</button><button class="btn small subtle" data-act="walkselected">近くへ移動</button></div>`;}
 else if(e.kind==='object'&&['demon_gate','return_gate','demon_tower','demon_castle'].includes(e.obj.type)){let o=e.obj;const tw=o.towerId?towerInfo(o.towerId):null;const cleared=tw?!!demonProgress().towers[o.towerId]:false;const title=o.type==='demon_gate'?'魔界の門':o.type==='return_gate'?'帰還の門':o.type==='demon_tower'?(tw?.name||'四天王の塔'):'魔王城';const icon=o.type==='demon_gate'?'🌀':o.type==='return_gate'?'🚪':o.type==='demon_tower'?'🗼':'🏰';const sub=o.type==='demon_gate'?'現世と魔界をつなぐ門':o.type==='return_gate'?'現世への帰還地点':o.type==='demon_tower'?(cleared?'討伐済みの塔':'頂上に四天王が待つ塔'):allTowersCleared()?(demonProgress().kingDefeated?'魔王は討伐済み':'四天王撃破済み。最奥に魔王がいる'):`封印中｜四天王 ${clearedTowerCount()}/${DEMON_TOWERS.length}`;html=`<div class="actionhead"><div class="actionicon">${icon}</div><div><b>${title}</b><div class="tiny">${sub}</div></div></div><p class="actiontext">${o.type==='demon_gate'?'門を通ると薄暗い魔界へ移動します。':o.type==='return_gate'?'ここから現世へ戻れます。':o.type==='demon_tower'?'塔の内部に入り、最上層の四天王を倒すと魔王城の封印が1つ解けます。':(allTowersCleared()?'四天王をすべて倒した者だけが魔王城に挑めます。':'四天王4体を倒すまで大扉は開きません。')}</p><div class="actionbuttons"><button class="btn small primary" data-act="interact" ${o.type==='demon_castle'&&!allTowersCleared()?'disabled':''}>${o.type==='demon_gate'?'魔界へ入る':o.type==='return_gate'?'現世へ戻る':o.type==='demon_tower'?'塔に入る':'魔王城へ入る'}</button><button class="btn small subtle" data-act="walkselected">近くへ移動</button></div>`;}
 else if(e.kind==='pet'){const p=e.pet;html=`<div class="actionhead"><div class="actionicon">${artFor(p.type,CREATURES[p.type][1])}</div><div><b>${p.nick}（放牧中）</b><div class="tiny">${skillLabel(p)}</div></div></div><div class="actionbuttons"><button class="btn small primary" data-petorder="${p.id},party" ${petParty().length>=3?'disabled':''}>同行させる</button><button class="btn small" data-petorder="${p.id},bag">カードに戻す</button></div>`;}
 else if(e.kind==='object'&&e.obj.type==='medal_stand'){let o=e.obj;html=`<div class="actionhead"><div class="actionicon">🏆</div><div><b>メダル展示台</b><div class="tiny">${o.medal?ITEMS[o.medal][0]+' を展示中':'メダルを飾ることができます'}</div></div></div><div class="actionbuttons">${o.medal?'<button class="btn small primary" data-act="removemedal">メダルを外す</button>':Object.keys(MEDAL_BY_BOSS).map(k=>MEDAL_BY_BOSS[k]).filter(id=>has(id)).map(id=>`<button class="btn small primary" data-medal="${id}">${ITEMS[id][0]}を展示</button>`).join('')||'メダルを所持していません'}<button class="btn small" data-act="pickup" ${o.medal?'disabled':''}>台を回収</button></div>`;}
 else if(e.kind==='object'&&e.obj.type==='grave'){let o=e.obj;html=`<div class="actionhead"><div class="actionicon">🪦</div><div><b>遺品のお墓</b><div class="tiny">${gravesRemaining(o)===null?'消失期限なし':'消失まで約'+gravesRemaining(o)+'日'}</div></div></div><div class="grave-detail">${Object.entries(o.items||{}).map(([id,n])=>(ITEMS[id]?.[0]||id)+'×'+n).join('、')||'所持品なし'} / 仲間${st.pets.filter(p=>p.where==='grave'&&p.graveId===o.id).length}匹</div><div class="actionbuttons"><button class="btn small primary" data-act="recovergrave">🪦 お墓の場所で回収</button><button class="btn small subtle" data-act="walkselected">移動</button></div>`;}
 else if(e.kind==='object'&&e.obj.type==='river_bridge'){html='<div class="actionhead"><div class="actionicon">🌉</div><div><b>木の橋</b><div class="tiny">川を渡れる通路</div></div></div><p class="actiontext">川の上を安全に歩けます。橋を並べて対岸まで延ばしてください。</p><div class="actionbuttons"><button class="btn small primary" data-act="walkselected">橋へ移動</button><button class="btn small" data-act="pickup">橋を回収</button></div>'; }
 else if(e.kind==='object'&&e.obj.type==='garden_plot'){let o=e.obj,c=o.crop;html=`<div class="actionhead"><div class="actionicon">🪴</div><div><b>栽培区画</b><div class="tiny">${c?(c.ready?'🌾 収穫可能':ITEMS[c.item][0]+' 成長 '+Math.min(100,Math.round(c.progress/c.need*100))+'%'):'種を植えることができます'}</div></div></div><div class="actionbuttons"><button class="btn small subtle" data-act="walkselected">近くへ移動</button>${c?`<button class="btn small primary" data-act="farmharvest" ${c.ready?'':'disabled'}>🌾 収穫</button><button class="btn small" data-act="farmwater" ${c.watered||c.ready?'disabled':''}>💧 水やり</button>`: ['seed','potato_seed','berry_seed','wheat_seed'].filter(id=>has(id)).map(id=>`<button class="btn small" data-plant="${id}">${ITEMS[id][1]} ${ITEMS[id][0]}を植える</button>`).join('')||'<span class="tiny">種を入手してください</span>'}</div>`;}
 else if(e.kind==='object'){let o=e.obj,b=BUILDS.find(z=>z.id===o.type),meta=b?[b.name,b.icon]:ITEMS[o.type]||[o.type,'🏠'];html=`<div class="actionhead"><div class="actionicon">${artFor(o.type,meta[1])}</div><div><b>${meta[0]}</b><div class="tiny">${b?'建物':['chest','fridge'].includes(o.type)?'収納設備':o.type==='bed'?(respawnBedSelected(o)?'🛏 リスポーン地点：登録済み':'リスポーン地点に登録できます'):'設置済み設備'}</div></div></div><p class="actiontext">${b?'建物を選択後、隣で再クリックすると入れます。離れていればまず隣まで移動します。解体は下のボタンから選べます。':o.type==='chest'?'アイテムを預けられます。重量に余裕があれば箱ごと運搬可能。':o.type==='fridge'?'食料160kgまで保存可能。発電機が稼働中は食料の腐敗速度を1/4に抑えます。':o.type==='bed'?'休憩効率が上がる寝床。ここを死亡後の復帰地点に指定できます。別のベッドで上書き可能。':'この設備を選択すると製作画面が切り替わります。回収もできます。'}${b?'<span class="tiny" style="display:block">'+esc(canDemolish(o).ok?'空の建物は解体して資源を全量回収できます。':canDemolish(o).why)+'</span>':''}</p><div class="actionbuttons"><button class="btn small primary" data-act="interact">${b?'🚪 中に入る':['chest','fridge'].includes(o.type)?'📦 開く':o.type==='bed'?'☾ 寝床を選択':'⚒ 製作画面を開く'}</button>${o.type==='bed'?`<button class="btn small ${respawnBedSelected(o)?'subtle':'primary'}" data-act="setrespawn" ${respawnBedSelected(o)?'disabled':''}>${respawnBedSelected(o)?'✓ 登録済み':'🛏 リスポーン地点に設定'}</button>`:''}<button class="btn small subtle" data-act="walkselected">近くへ移動</button>${b?`<button class="btn small alert" data-act="demolish" ${canDemolish(o).ok?'':'disabled'} title="${esc(canDemolish(o).why||'素材を全量返却')}">解体して資源を回収</button>`:'<button class="btn small" data-act="pickup">回収する</button>'}</div>`;}
 else html='<div class="actionhead"><div class="actionicon">👣</div><div><b>空きマス</b><div class="tiny">移動先として選択中</div></div></div><p class="actiontext">このマスへ移動できます。</p><div class="actionbuttons"><button class="btn small primary" data-act="walkselected">ここへ移動</button></div>';
 el('actionbox').innerHTML=html;}
// 画面全体の縦スクロールを発生させず、右ペインはページで切り替える。
function pageRows(kind, extra=0){const area=el('tabbody');const h=area.clientHeight||Math.max(280,innerHeight*.45);const w=area.clientWidth||410;
 if(kind==='items'){const cols=w<270?3:w<350?4:w<460?4:5;return Math.max(cols,cols*Math.max(1,Math.floor((h-74-extra)/64)));}
 if(kind==='recipe')return Math.max(1,Math.floor((h-128-extra)/112));
 if(kind==='storage')return Math.max(1,Math.floor((h-172-extra)/95));
 if(kind==='log')return Math.max(1,Math.floor((h-155-extra)/51));
 return Math.max(1,Math.floor((h-90-extra)/115));
}
function getPage(list,size){let total=Math.max(1,Math.ceil(list.length/size));ui.page=Math.max(0,Math.min(ui.page,total-1));return {slice:list.slice(ui.page*size,(ui.page+1)*size),total};}
function pageFooter(total,count){return `<div class="page-footer"><span>${count}件 <span class="tiny">· ${ui.page+1} / ${total}ページ</span></span><div class="row"><button class="btn small subtle" data-page="prev" ${ui.page===0?'disabled':''}>◀ 前へ</button><button class="btn small subtle" data-page="next" ${ui.page>=total-1?'disabled':''}>次へ ▶</button></div></div>`;}
function setPane(html){el('tabbody').innerHTML=html;}
function renderItems(){let cats=['全部',...new Set(Object.values(ITEMS).map(x=>x[3]))],equippedSet=new Set(Object.values(st.equipment||{}).filter(Boolean)),list=Object.entries(st.inventory).filter(([id,n])=>n>0&&ITEMS[id]&&(!ui.itemFilter||ui.itemFilter==='全部'||ITEMS[id][3]===ui.itemFilter)).sort((a,b)=>ITEMS[a[0]][3].localeCompare(ITEMS[b[0]][3],'ja')||ITEMS[a[0]][0].localeCompare(ITEMS[b[0]][0],'ja'));
 let details='';if(ui.chosenItem&&has(ui.chosenItem)){let id=ui.chosenItem,[name,icon,weight,cat]=ITEMS[id],edible=!!FOOD[id]||id==='healing_potion'||id==='magic_potion',placeable=cat==='設備'&&!POWER_SLOT_TYPES.includes(id);let r=RECIPES.find(r=>r.id===id);let description=itemDescription(id);if(id.startsWith('pet_')){const pet=st.pets.find(p=>petToken(p)===id);if(pet)description=`Lv.${pet.level||1} 経験値 ${pet.xp||0}/${petNextXP(pet)}｜HP ${pet.hp}/${pet.maxHp}｜攻撃 ${pet.attack}｜防御 ${pet.defense}｜固有能力：${skillLabel(pet)}。同行3匹以内で戦闘経験値を獲得。HPが0になったら永久ロスト。`;}details=`<div class="detail item-detail"><div class="detailtitle"><span>${artFor(id,icon)}</span>${name}${GEAR[id]&&upgradeLevel(id)?' +'+upgradeLevel(id):''}<small class="tiny">×${count(id)}・単体${fmt(weight)}kg</small></div><p class="detail-explain">${esc(description)}${FOOD[id]?`<br><strong>${foodExpiryDisplay(id,count(id))}</strong>`:''}${DURABLE.has(id)?`<br>現在の耐久：${durText(id)}（最大${maxDur(id)}）`:''}</p><div class="actionbuttons">${GEAR[id]?`<button class="btn small primary" data-equip="${id}">${equipped(GEAR[id].slot)===id?'装備中・変更':'装備する'}</button>`:''}${edible?`<button class="btn small primary" data-act="eat" data-itemid="${id}">${['healing_potion','magic_potion'].includes(id)?'回復薬を使う':'食べる'}</button>`:''}${id==='water'?'<button class="btn small primary" data-act="drinkstored">飲む</button>':''}${placeable?`<button class="btn small primary" data-act="placeitem" data-itemid="${id}">設置</button>`:''}${DURABLE.has(id)?`<button class="btn small" data-repair="${id}" ${stationAvailable('repair_bench')?'':'disabled'}>🛠 修理</button>`:''}${GEAR[id]?`<button class="btn small" data-enhance="${id}" ${stationAvailable('enhance_bench')&&canAfford(RECIPES.find(r=>r.id===id)?.in||{})?'':'disabled'}>⚒ 強化+${upgradeLevel(id)}</button>`:''}${id.startsWith('pet_')?`<button class="btn small" data-petorder="${id.slice(4)},party" ${petParty().length>=3?'disabled':''}>同行させる</button>${petPasture()?`<button class="btn small primary" data-petorder="${id.slice(4)},pasture">放牧</button>`:''}`:`<button class="btn small alert" data-act="discard" data-itemid="${id}">1個捨てる</button>`}<button class="btn small subtle" data-act="closeitem">閉じる</button></div></div>`;} let carrying=st.carriedChest?`<div class="waterbox carry-note">📦 チェスト運搬中 ${fmt(ITEMS.chest[2]+itemsWeight(st.carriedChest.items))}kg <button class="btn small primary" data-act="placecarry">設置</button></div>`:'';
 let html=`<div class="splitheader"><h3 class="sectiontitle">バックパック</h3><span class="tiny">${list.length}種類 / ${fmt(invWeight())}kg</span></div><div class="craft-filter-row"><label>ジャンル <select id="itemCategory">${cats.map(c=>`<option value="${c}" ${(ui.itemFilter||'全部')===c?'selected':''}>${c}</option>`).join('')}</select></label><span class="tiny">再クリックで使用・装備・設置</span></div><div class="pane-content"><div class="itemgrid">${list.map(([id,q])=>`<button class="itemcard ${ui.chosenItem===id?'chosen':''}" data-item="${id}"><span class="emoji">${artFor(id,ITEMS[id][1])}</span>${equippedSet.has(id)?'<span class="equipped-tag">装備中</span>':''}${upgradeLevel(id)?`<span class="enhance-tag">+${upgradeLevel(id)}</span>`:''}<span class="qty">×${q}</span><span class="name">${ITEMS[id][0]}</span><span class="weight">${fmt(ITEMS[id][2]*q)}kg</span>${DURABLE.has(id)?`<span class="durability">⚒${durText(id)}</span>`:''}${FOOD[id]?`<span class="freshness-mini">${foodExpiryDisplay(id,q)}</span>`:''}</button>`).join('')}</div>${!list.length?'<div class="empty">このジャンルの所持品はありません。</div>':''}</div>${details}${carrying}`;setPane(html);
}
function matHTML(mats){return Object.entries(mats).map(([id,q])=>`<span class="${accessibleCount(id)<q?'missing':''}">${ITEMS[id]?.[0]||id} ${accessibleCount(id)}/${q}</span>`).join(' · ')}
function renderEquip(){syncEquipment();progressInit();const slots=[['weapon','⚔ 武器'],['head','🪖 頭'],['body','🛡 胴'],['feet','🥾 足']];
 let html=`<div class="splitheader"><h3 class="sectiontitle">装備・レベルアップ</h3><span class="tiny">Lv${st.level}　未割振 ${st.points}pt</span></div><div class="gear-summary"><span>⚔ 攻撃 <strong>${(equipped('weapon')?activeGearValue(equipped('weapon'),'attack'):6)+attackBonus()}</strong></span><span>🛡 防御 <strong>${armorTotal()}</strong></span><span>❤️ 最大HP <strong>${hpMax()}</strong></span></div>`;
 html+='<div class="pane-content"><div class="perks">'+[['hp','HP',hpMax(),'+12'],['stamina','スタミナ',staminaMax(),'+9'],['attack','攻撃',attackBonus(),'+3'],['defense','防御',defenseBonus(),'+2'],['carry','重量',carryMax(),'+5kg']].map(([id,label,v,desc])=>`<div class="perk"><span>${label}<small> ${v} (${st.perks[id]}振り)</small></span><button class="btn small ${st.points?'primary':'subtle'}" data-allocate="${id}" ${st.points?'':'disabled'}>＋ ${desc}</button></div>`).join('')+'</div><div class="gear-grid">';
 for(let [slot,label] of slots){let cur=equipped(slot),choice=Object.keys(GEAR).filter(id=>GEAR[id].slot===slot&&has(id));html+=`<div class="gear-slot"><div class="slot-title">${label}</div><div class="slot-value">${cur?artFor(cur,ITEMS[cur][1])+' '+upgradeName(cur):'未装備'}</div><div class="slot-info">${cur?slot==='weapon'?`攻撃 ${activeGearValue(cur,'attack')} / ${GEAR[cur].kind}${GEAR[cur].range?' / 射程'+GEAR[cur].range:''}`:`防御 ${activeGearValue(cur,'def')}`:'装備で能力が変化'} ${cur?`　耐久 ${durText(cur)}`:''}</div><select class="equip-select" data-equipselect="${slot}" aria-label="${label}を選択"><option value="">— 外す —</option>${choice.map(id=>`<option value="${id}" ${cur===id?'selected':''}>${ITEMS[id][0]} ${slot==='weapon'?`攻${GEAR[id].attack}`:`防${GEAR[id].def}`}・耐久${durText(id)}${upgradeLevel(id)?' +'+upgradeLevel(id):''}</option>`).join('')}</select>${cur?`<button class="btn small" data-repair="${cur}" ${stationAvailable('repair_bench')?'':'disabled'}>修理（${ITEMS[recipeRepairMaterial(cur)][0]}×1）</button><div class="enhance-option"><span class="tiny">強化 +${upgradeLevel(cur)}｜成功50% / 失敗-1（最低0）</span><button class="btn small" data-enhance="${cur}" ${stationAvailable('enhance_bench')&&canAfford(RECIPES.find(r=>r.id===cur)?.in||{})?'':'disabled'}>⚒ 強化</button></div>`:''}</div>`;}
 html+='</div><div class="enhance-help">⚒ 強化台を設置して選択（拠点内なら置くだけでOK）。装備1個につき製作時と同じ素材を消費し、成功50％で＋1、失敗50％で－1。＋0未満にはなりません。</div><div class="equipment-detail">🪓 斧・つるはしは所持品中の最高性能を自動使用。採取・戦闘で耐久が減り、0で破損します。修理はMAPで修理台を選択して実行します。</div></div>';setPane(html);}
function renderCraft(){let cats=[...new Set(RECIPES.map(r=>r.cat))];let active=ui.craftCategories;if(!Array.isArray(active))active=ui.craftCategories=ui.craftFilter&&ui.craftFilter!=='全部'?[ui.craftFilter]:cats.slice();let allSelected=cats.every(c=>active.includes(c));let html=`<div class="splitheader"><h3 class="sectiontitle">アイテム製作</h3><label class="tiny"><input type="checkbox" id="craftableOnly" ${ui.showCraftable?'checked':''}> 作れるものだけ</label></div><div class="craft-category-checks" aria-label="製作ジャンルの絞り込み"><label class="craft-category-pill"><input type="checkbox" id="craftCategoryAll" ${allSelected?'checked':''}> 全部</label>${cats.map(c=>`<label class="craft-category-pill"><input type="checkbox" data-craft-category="${esc(c)}" ${active.includes(c)?'checked':''}> ${esc(c)}</label>`).join('')}</div><div class="craft-filter-row"><span class="tiny">${ui.inside?'室内の全設備が使用可能':'使用中：'+(ui.activeStation?nearbyStationLabel(field().placed.find(o=>o.id===ui.activeStation)?.type||'hand'):'手元')}</span></div>${ui.activeStation?`<div class="station-banner">⚒ 現在使用中：<b>${nearbyStationLabel(field().placed.find(o=>o.id===ui.activeStation)?.type)}</b><button class="btn small subtle" data-act="clearstation">手元に戻す</button></div>`:''}<div class="shared-note">⚡ 通常作業台 → 電気作業台（発電機） → マナ作業台（マナ発電機）。鋼鉄・ミスリルは電気以上、アダマン・神金はマナが必要。<br>📦 ${ui.inside?'室内のチェスト・冷蔵庫':'自分の周囲3×3マスのチェスト'}の素材を共有して製作できます。</div>`;
 let list=RECIPES.filter(r=>active.includes(r.cat)&&(!ui.showCraftable||(canAfford(r.in)&&stationAvailable(r.at))));
 html+='<div class="pane-content recipe-list craft-matrix">';for(let r of list){let affordable=canAfford(r.in),station=stationAvailable(r.at),can=affordable&&station;
 html+=`<div class="recipe"><div class="ricon">${artFor(r.id,ITEMS[r.id][1])}</div><div class="recipebody"><div class="rname">${ITEMS[r.id][0]} ${r.out>1?'×'+r.out:''}</div>${GEAR[r.id]?`<div class="craft-gear-stats">${GEAR[r.id].slot==='weapon'?`⚔ 攻撃 ${GEAR[r.id].attack}　${GEAR[r.id].kind}${GEAR[r.id].shot?' / 射撃'+GEAR[r.id].shot:''}${GEAR[r.id].range?' / 射程'+GEAR[r.id].range:''}${GEAR[r.id].crit?' / 会心'+Math.round(GEAR[r.id].crit*100)+'%':''}`:`🛡 防御 ${GEAR[r.id].def}`}　│　耐久 ${maxDur(r.id)}</div>`:''}<div class="rdesc">${esc(itemDescription(r.id))}</div><div class="required-station ${!station&&r.at!=='hand'?'needs-station':''}">${r.at==='hand'?'✋ 必要設備：なし（手元製作）':'🛠 必要設備：'+esc(nearbyStationLabel(r.at))}<span class="station-state ${!station?'locked':''}">${r.at==='hand'?'｜いつでも製作可能':station?'｜使用中':'｜MAPで設備をクリック'}</span></div><div class="materials">${matHTML(r.in)}</div><div class="recipefoot"><span class="chip ${station?'':'lock'}">${affordable?'素材OK':'素材不足'} / ${station?'設備OK':'設備未選択'}</span><button class="btn small ${can?'primary':''}" data-craft="${r.id}" ${can?'':'disabled'}>製作 (${r.min}分)</button></div></div></div>`;}
 if(!list.length)html+='<div class="empty">条件に合うレシピがありません。</div>';html+='</div>';setPane(html);}
function renderBuild(){let entries=[...BUILDS.map(b=>({...b,kind:'building'})),...Object.keys(ITEMS).filter(i=>ITEMS[i][3]==='設備'&&has(i)&&!INFRA_SLOT_ITEMS.includes(i)).map(i=>({id:i,name:ITEMS[i][0],icon:ITEMS[i][1],kind:'fixture',desc:'MAP上に設置する設備。選択して使用します。'}))];
 let html=`<div class="splitheader"><h3 class="sectiontitle">建築・設備配置</h3><span class="tiny">建物の設備は共通スロット制</span></div>${ui.inside?'<div class="shared-note">📦 室内ではチェスト内資材も建築・拡張に使用可能です。</div>':''}`;
 let h=home();if(h){let b=BUILDS.find(z=>z.id===h.type),used=(h.addons||[]).length,max=buildingSlotCapacity(b,h);
 html+=`<div class="room-operations"><b>🏠 ${b.name}・設備スロット</b><div class="slot-summary"><strong>設備スロット ${used} / ${max}</strong><span class="tiny">水・農業・電力・マナの共通枠。設備は好きな組み合わせで登録できます（同種1個まで）。</span></div><div class="slot-meter"><i style="width:${max?Math.min(100,used/max*100):0}%"></i></div><div class="tiny">貯水量：${fmt(homeTank(h))}/30L　｜　🔌 電力：${installedInfra(h,'generator')?'供給中':'停止'}　｜　✦ マナ：${installedInfra(h,'mana_generator')?'供給中':'停止'}</div><div class="infrastructure unified-slots">${INFRA_SLOT_ITEMS.map(id=>{const active=installedInfra(h,id),canAdd=has(id)&&used<max;return `<div class="infra-cell ${active?'is-installed':''}"><div class="slot-title">${artFor(id,ITEMS[id][1])} <b>${ITEMS[id][0]}</b></div><div class="tiny">${active?'✓ 登録済み':'手持ち ×'+count(id)}</div><button class="btn small ${active?'subtle':'primary'}" ${active?`data-infra-remove="${id}"`:`data-infra="${id}"`} ${active?'':canAdd?'':'disabled'}>${active?'取り外す':'登録する'}</button></div>`;}).join('')}</div><div class="tiny">雨水タンクは貯水、水道は室内飲水、散水装置は畑の自動給水に使います（水設備の使用にはタンクが必要）。発電機・マナ発電機は対応作業台の動力源です。家具・作業台は室内の床に別途置けます。</div></div>`;
 }
 html+=`<p class="actiontext pane-tip">建物は材料だけでフィールド上に建築できます（作業台・電源不要）。建築・設置を選んでMAP上の空きマスへ。</p><div class="pane-content recipe-list">`;
 for(let b of entries){if(b.kind==='fixture'){html+=`<div class="recipe"><div class="ricon">${artFor(b.id,b.icon)}</div><div class="recipebody"><div class="rname">${b.name}（手持ち×${count(b.id)}）</div><div class="rdesc">${b.desc}</div><div class="recipefoot"><button class="btn small primary" data-placeid="${b.id}">設置する</button></div></div></div>`;continue;}
 let ok=canAfford(b.in);html+=`<div class="recipe"><div class="ricon">${artFor(b.id,b.icon)}</div><div class="recipebody"><div class="rname">${b.name} <span class="chip">室内${b.size}×${b.size}</span> <span class="chip">屋外${placeSize(b.id).w}×${placeSize(b.id).h}</span></div><div class="rdesc">${b.desc}</div><div class="materials">${matHTML(b.in)}</div><div class="recipefoot"><span class="chip">材料のみ / ${b.min}分</span><button class="btn small ${ok?'primary':''}" data-build="${b.id}" ${ok?'':'disabled'}>建築する</button></div></div></div>`;}
 html+='</div>';setPane(html);}
function storageEntries(source,way){return Object.entries(source).filter(([id,n])=>n>0&&ITEMS[id]&&(way==='in'?id!=='water':true)).sort((a,b)=>ITEMS[a[0]][3].localeCompare(ITEMS[b[0]][3],'ja')||ITEMS[a[0]][0].localeCompare(ITEMS[b[0]][0],'ja'));}
function renderStorage(){let box=selectedStorage();let html=`<div class="splitheader"><h3 class="sectiontitle">収納・チェスト</h3><span class="tiny">MAPからチェストを選んで使用</span></div>`;
 if(!box){html+='<div class="empty">📦 収納を使うには、MAP上のチェストを選択して「開く」を押してください。</div>';if(st.carriedChest)html+='<button class="btn full primary" data-act="placecarry">運搬中のチェストを設置</button>';setPane(html);return;}
 html+=`<div class="storage-summary"><span>${box.type==='fridge'?'🧊 電気冷蔵庫':'📦 チェスト'} ${fmt(itemsWeight(box.items))} / ${box.type==='fridge'?160:120}kg${ui.inside?' ・ 拠点共有クラフト対象':''}</span><button class="btn small subtle" data-act="liftchest" ${box.type==='fridge'||st.carriedChest||freeWeight()+.001<ITEMS.chest[2]+itemsWeight(box.items)?'disabled':''}>箱ごと運ぶ ${fmt(ITEMS.chest[2]+itemsWeight(box.items))}kg</button></div>`;
 html+=`<div class="store-qtybar"><label>移動する個数</label><div class="row">${[1,5,10,9999].map(n=>`<button class="pill ${ui.storeAmount===n?'on':''}" data-storeamount="${n}">${n===9999?'全部':n+'個'}</button>`).join('')}<input id="storeAmountCustom" type="number" min="1" max="999" value="${ui.storeAmount===9999?1:ui.storeAmount||1}" /><button class="btn small subtle" data-act="applystoreamount">指定数</button></div></div>`;
 html+=`<div class="transfer-feedback" aria-live="polite">${ui.transferFlash?esc(ui.transferFlash.msg):'手持ち → チェスト / チェスト → 手持ち'}</div><div class="storage-dual">`;
 for(let [way,title,source,side] of [['in','🎒 手持ち',st.inventory,'in'],['out','📦 チェスト',box.items,'out']]){const entries=storageEntries(source,way);html+=`<div class="store-column ${way==='out'?'destination':''}"><div class="store-head"><span>${title}</span><small>${way==='in'?`${fmt(invWeight())}/${carryMax()}`:`${fmt(itemsWeight(box.items))}/${box.type==='fridge'?160:120}`}kg</small></div><div class="store-items">`;
 for(let[id,n]of entries){let disabled=way==='in'&&(id==='water'||(CAP[id]&&!canRemoveVessel(id,1))||(Object.values(st.equipment||{}).includes(id)&&count(id)<=1))?'disabled':'';html+=`<button class="store-item ${ui.transferFlash?.id===id&&ui.transferFlash.side===side?'flash':''}" data-storetransfer="${way},${id}" ${disabled} title="${ITEMS[id][0]} ×${n}を${way==='in'?'預ける':'取り出す'}"><span class="store-icon">${artFor(id,ITEMS[id][1])}</span><span class="store-name">${ITEMS[id][0]}${way==='in'&&Object.values(st.equipment||{}).includes(id)?'（装備中×1）':''}${DURABLE.has(id)&&(way==='out'?Math.max(0,...(box.enhancements?.[id]||[0])):upgradeLevel(id))?` +${way==='out'?Math.max(0,...(box.enhancements?.[id]||[0])):upgradeLevel(id)}`:''}<small>×${n} ${DURABLE.has(id)?'耐久'+durText(id,way==='out'?box:null):''}${FOOD[id]?foodExpiryDisplay(id,n,way==='out'?box:null):''}</small></span><span class="store-arrow">${way==='in'?'→':'←'}</span></button>`;}
 if(!entries.length)html+='<div class="tiny" style="text-align:center;padding:16px 0">空です</div>';html+='</div></div>';}
 html+='</div>';setPane(html);}

/* Progressive objectives: only the first three unfinished goals are unlocked.
   Evidence is persisted through quests and goalsDone even when resources are later consumed. */
const GOAL_STEPS=[
 {id:'start_branch',chapter:'はじめの一歩',label:'小枝を入手する',hint:'フィールドの木や落ち枝から小枝を集めよう。'},
 {id:'start_stone',chapter:'はじめの一歩',label:'石を入手する',hint:'岩を選択して採取しよう。'},
 {id:'start_fiber',chapter:'はじめの一歩',label:'繊維を入手する',hint:'草むらから繊維を集めよう。'},
 {id:'axe',chapter:'道具の基本',label:'石斧を製作する',hint:'製作タブの「石斧」を作ろう。'},
 {id:'collect_wood',chapter:'道具の基本',label:'木材を手に入れる',hint:'石斧があれば木の採取で木材が増える。'},
 {id:'pick',chapter:'道具の基本',label:'石のつるはしを製作する',hint:'製作タブから採掘用の「石のつるはし」を作ろう。'},
 {id:'eat',chapter:'サバイバル生活',label:'何か食べて空腹を回復する',hint:'ベリーなどの食料を所持品から選んで食べよう。'},
 {id:'drink',chapter:'サバイバル生活',label:'水を飲んで水分を回復する',hint:'川の水を飲むか、携帯した飲み水を使おう。'},
 {id:'craft_campfire',chapter:'サバイバル生活',label:'焚き火を製作する',hint:'製作タブで焚き火を作ろう。'},
 {id:'place_campfire',chapter:'サバイバル生活',label:'焚き火を設置する',hint:'持ち物の焚き火を選び、MAPに設置しよう。'},
 {id:'craft_bench',chapter:'クラフトの拡張',label:'作業台を製作する',hint:'基本の素材を集めて作業台を作ろう。'},
 {id:'bench',chapter:'クラフトの拡張',label:'作業台を設置する',hint:'作業台の近くで高度なクラフトができる。'},
 {id:'craft_chest',chapter:'クラフトの拡張',label:'チェストを製作する',hint:'作業台を使えばチェストのレシピを扱える。'},
 {id:'chest',chapter:'クラフトの拡張',label:'チェストを設置する',hint:'アイテムの重量に備えて収納箱を置こう。'},
 {id:'store',chapter:'クラフトの拡張',label:'チェストにアイテムを預ける',hint:'チェストを選び、手持ちからアイテムを移そう。'},
 {id:'building',chapter:'拠点づくり',label:'建築物を1つ建てる',hint:'建築タブで草のシェルターなどを建てよう。'},
 {id:'enter_home',chapter:'拠点づくり',label:'建物の中に入る',hint:'建てた建物をMAPで選び、入室しよう。'},
 {id:'learn_skill',chapter:'冒険への準備',label:'スキルを1個習得する',hint:'レベルアップで得たポイントをスキルタブで割り振ろう。'},
 {id:'spear',chapter:'冒険への準備',label:'石の槍を製作する',hint:'石刃とロープを加工し、石の槍を作ろう。'},
 {id:'first_kill',chapter:'冒険への準備',label:'動物か魔物を1体倒す',hint:'敵と重なると戦闘開始。武器を装備して挑戦しよう。'},
 {id:'cook_meat',chapter:'冒険への準備',label:'焚き火で肉を焼く',hint:'倒した動物の生肉を焚き火で調理しよう。'},
 {id:'first_cave',chapter:'洞窟探索',label:'洞窟の中に入る',hint:'フィールドの洞窟入口を見つけて入ろう。'},
 {id:'copper',chapter:'洞窟探索',label:'銅鉱石を入手する',hint:'鉱脈からつるはしを使って採掘しよう。'},
 {id:'craft_furnace',chapter:'鍛冶のはじまり',label:'かまどを製作する',hint:'作業台を使って鉱石を精錬するためのかまどを作ろう。'},
 {id:'place_furnace',chapter:'鍛冶のはじまり',label:'かまどを設置する',hint:'かまどを好きな場所へ設置しよう。'},
 {id:'copper_ingot',chapter:'鍛冶のはじまり',label:'銅インゴットを精錬する',hint:'かまどで銅鉱石と木炭から銅インゴットを作ろう。'},
 {id:'metal_weapon',chapter:'鍛冶のはじまり',label:'金属製の武器を作る',hint:'銅剣などを製作し、より強い敵に備えよう。'},
 {id:'craft_incense',chapter:'仲間との冒険',label:'草木のお香を製作する',hint:'テイム用の草木のお香は手元で製作できる。'},
 {id:'first_tame',chapter:'仲間との冒険',label:'MOBを1匹テイムする',hint:'敵HPを35％以下に弱らせ、戦闘中にお香を使おう。'},
 {id:'three_areas',chapter:'世界を広げる',label:'現世の3エリアを訪れる',hint:'MAP端まで移動して新しいエリアを探索しよう。'},
 {id:'level_five',chapter:'世界を広げる',label:'レベル5になる',hint:'採取・製作・戦闘・探索で経験値をためよう。'},
 {id:'demon_gate',chapter:'魔界への道',label:'現世で魔界の門を発見する',hint:'未知のエリアを探索して魔界の門を探そう。'},
 {id:'enter_demon',chapter:'魔界への道',label:'魔界の門を通る',hint:'門を選択し「魔界へ入る」で別世界へ行こう。'},
 {id:'demon_resource',chapter:'魔界への道',label:'魔界の素材を採取する',hint:'魔樹・魔鉱石など現世にない資源を集めよう。'},
 {id:'demon_enemy',chapter:'魔界への道',label:'魔界の魔物を1体倒す',hint:'魔界のMOBは強敵。装備と仲間を整えて挑戦しよう。'},
 {id:'find_tower',chapter:'四天王への挑戦',label:'四天王の塔を1つ発見する',hint:'魔界の各エリアを探索して塔を見つけよう。'},
 {id:'lord1',chapter:'四天王への挑戦',label:'四天王を1体倒す',hint:'四天王の塔に入り、頂上のボスを倒そう。'},
 {id:'lord2',chapter:'四天王への挑戦',label:'四天王を2体倒す',hint:'別の塔を探し、2体目の四天王を倒そう。'},
 {id:'lord3',chapter:'四天王への挑戦',label:'四天王を3体倒す',hint:'四天王の撃破数は記録に残る。'},
 {id:'lord4',chapter:'四天王への挑戦',label:'四天王を全員倒す',hint:'4体目を倒すと魔王城の封印が解ける。'},
 {id:'enter_castle',chapter:'最後の決戦',label:'魔王城へ入る',hint:'魔界の魔王城へ向かい、最奥を目指そう。'},
 {id:'demon_king',chapter:'最後の決戦',label:'魔王を討伐する',hint:'魔王を討伐すると一応のクリア。冒険はその後も続けられる。'}
];
const GOAL_COUNT_VISIBLE=3;
function goalEvidence(id){const q=st.quests||{},visited=st.visited||{},vd=st.visitedDemon||{};switch(id){
 case 'start_branch':return !!q.obtained_branch;
 case 'start_stone':return !!q.obtained_stone;
 case 'start_fiber':return !!q.obtained_fiber;
 case 'axe':return !!q.crafted_axe;
 case 'collect_wood':return !!q.obtained_wood;
 case 'pick':return !!q.crafted_pick;
 case 'eat':return !!q.ate_food;
 case 'drink':return !!q.drink;
 case 'craft_campfire':return !!q.crafted_campfire;
 case 'place_campfire':return !!q.placed_campfire;
 case 'craft_bench':return !!q.crafted_bench;
 case 'bench':return !!q.placed_bench;
 case 'craft_chest':return !!q.crafted_chest;
 case 'chest':return !!q.placed_chest;
 case 'store':return !!q.stored_chest;
 case 'building':return !!q.building;
 case 'enter_home':return !!q.entered_building;
 case 'learn_skill':return !!q.learned_skill||Object.keys(st.skills||{}).some(k=>st.skills[k]);
 case 'spear':return !!q.crafted_spear;
 case 'first_kill':return !!q.first_kill;
 case 'cook_meat':return !!q.crafted_cooked_meat;
 case 'first_cave':return !!q.entered_cave;
 case 'copper':return !!q.obtained_copper_ore;
 case 'craft_furnace':return !!q.crafted_furnace;
 case 'place_furnace':return !!q.placed_furnace;
 case 'copper_ingot':return !!q.crafted_copper_ingot;
 case 'metal_weapon':return !!q.crafted_copper_sword||!!q.crafted_bronze_sword||!!q.crafted_iron_sword||!!q.crafted_steel_sword||!!q.crafted_mythril_sword;
 case 'craft_incense':return !!q.crafted_incense_1;
 case 'first_tame':return !!q.tamed||(st.pets||[]).length>0;
 case 'three_areas':return Object.keys(visited).filter(k=>visited[k]).length>=3;
 case 'level_five':return (st.level||1)>=5;
 case 'demon_gate':return !!q.found_demon_gate||!!visited[DEMON_GATE_SURFACE.mortal.wx+','+DEMON_GATE_SURFACE.mortal.wy]||Object.keys(vd).some(k=>vd[k]);
 case 'enter_demon':return !!q.entered_demon||Object.keys(vd).some(k=>vd[k]);
 case 'demon_resource':return ['infernal_ore','hellwood','shadow_grass','nightshade','obsidian_shard','demon_ichor'].some(k=>q['obtained_'+k]);
 case 'demon_enemy':return !!q.demon_kill;
 case 'find_tower':return !!q.found_demon_tower||DEMON_TOWERS.some(t=>!!vd[t.wx+','+t.wy]);
 case 'lord1':return clearedTowerCount()>=1;
 case 'lord2':return clearedTowerCount()>=2;
 case 'lord3':return clearedTowerCount()>=3;
 case 'lord4':return allTowersCleared();
 case 'enter_castle':return !!q.entered_demon_castle;
 case 'demon_king':return !!demonProgress().kingDefeated;
 default:return false;
}}
function goalDefinitions(){st.quests=st.quests||{};st.goalsDone=st.goalsDone||{};
 // One-time compatibility: old versions used a single aggregated gathering goal.
 if(!st.goalV2Migrated){if(st.goalsDone.gather){for(const id of ['start_branch','start_stone','start_fiber'])st.goalsDone[id]=true;}
 for(const id of ['branch','stone','fiber','wood'])if((st.inventory||{})[id]>0)st.quests['obtained_'+id]=true;
 for(const [id,qty] of Object.entries(st.inventory||{}))if(qty>0&&ITEMS[id])st.quests['obtained_'+id]=true;
 if((st.pets||[]).length)st.quests.tamed=true;
 st.goalV2Migrated=true;}
 return GOAL_STEPS.map((g,i)=>{if(goalEvidence(g.id))st.goalsDone[g.id]=true;return {...g,number:i+1,done:!!st.goalsDone[g.id]};});}
function activeGoals(all=goalDefinitions()){return all.filter(g=>!g.done).slice(0,GOAL_COUNT_VISIBLE);}
function renderMapGoals(){const root=el('mapGoals');if(!root)return;const all=goalDefinitions(),active=activeGoals(all),display=active.filter(g=>st.goalVisibility?.[g.id]!==false);
 if(!active.length){root.innerHTML='<span class="goal-clear">🏆 全目標達成！ クリア後も冒険できます。</span>';return;}
 root.innerHTML=`<span class="goal-heading">📜 目標 ${all.filter(g=>g.done).length}/${all.length} ・ ${esc(active[0].chapter)}</span>`+display.map(g=>`<span class="map-goal" title="${esc(g.hint)}"><span class="goal-order">${g.number}.</span><span>${esc(g.label)}</span></span>`).join('');}
function renderJournal(){let html=`<div class="splitheader"><h3 class="sectiontitle">旅の記録</h3><span class="tiny">現世 ${Object.keys(st.visited||{}).length}/${WORLD*WORLD} ・ 魔界 ${Object.keys(st.visitedDemon||{}).length}/${DEMON_WORLD*DEMON_WORLD}</span></div><nav class="subtabs"><button class="pill ${ui.journalMode==='goals'?'on':''}" data-journalmode="goals">生存目標</button><button class="pill ${ui.journalMode==='log'?'on':''}" data-journalmode="log">出来事ログ</button></nav>`;
 if(ui.journalMode==='log'){let pg=getPage(st.logs,pageRows('log'));html+='<div class="pane-content"><div class="log">'+pg.slice.map(l=>`<div class="logitem"><span class="time">${Math.floor(l.t/1440)+1}日目 ${minsDisplay(l.t)}</span>${esc(l.msg)}</div>`).join('')+'</div></div>'+pageFooter(pg.total,st.logs.length);}
 else {const goals=goalDefinitions(),active=activeGoals(goals),visible=goals.filter(g=>g.done||active.includes(g));
 html+=`<p class="progression">達成 ${goals.filter(g=>g.done).length} / ${goals.length} ・ 次の目標は達成するごとに開放されます</p>`;
 html+=`<div class="pane-content"><div class="shared-note">現在の目標は最大3件。完了すると次の目標が現れます。チェックを外した目標はMAPに出ませんが、達成判定には影響しません。</div>`;
 html+=visible.map(g=>`<label class="goal-choice ${g.done?'done':'current'}"><span>${g.done?'✓':'◇'} ${g.number}. ${esc(g.label)}<small>${esc(g.done?'達成済み':g.hint)}</small></span><span><input type="checkbox" data-goal-id="${g.id}" ${st.goalVisibility?.[g.id]===false?'':'checked'}> MAP表示</span></label>`).join('');
 if(!active.length)html+='<div class="shared-note">🏆 最終目標達成！ 世界の探索とクラフトは続けられます。</div>';
 else html+='<div class="shared-note">🔒 この先の目標はまだ非公開です。現在の目標を達成すると追加されます。</div>';
 html+=`<label class="goal-choice">お墓が消えるまで <select id="graveDays">${GRAVE_DAYS.map(n=>`<option value="${n}" ${graveSettings()===n?'selected':''}>${n===0?'無期限':n+'日'}</option>`).join('')}</select></label></div>`;}
 setPane(html);}
function renderGoals(){const root=el('objectives');if(!root)return;root.innerHTML=activeGoals().map(g=>`<div class="goal">◇ ${esc(g.label)}</div>`).join('');}
function draw(){if(!st)return;
 const body=el('tabbody');body.classList.toggle('skills-scroll',ui.tab==='skills');const samePane=ui._lastDrawTab===ui.tab;const oldScroll={};
 if(samePane&&body){for(const cls of ['pane-content','store-items','tabbody']){const list=cls==='tabbody'?[body]:Array.from(body.querySelectorAll('.'+cls));oldScroll[cls]=list.map(e=>e.scrollTop);}}
el('app').dataset.view=ui.view||'field';el('app').dataset.realm=currentRealm();el('app').dataset.tab=ui.tab||'items';document.querySelectorAll('[data-view]').forEach(v=>{if(v.matches('button'))v.classList.toggle('on',v.dataset.view===ui.view)});renderStats();renderMap();renderMapGoals();const visitCount=el('visitedCount');if(visitCount){const v=worldmapVisited();visitCount.textContent=Object.keys(v).filter(k=>v[k]).length+'/'+(currentWorldSize()*currentWorldSize());}
 if(!ui.inside&&!st.combat){const info=bowInfo();el('travel').insertAdjacentHTML('beforeend',`<button class="btn small aim-control ${ui.aim?'on':''}" data-act="aim">🏹 ${info?(ui.aim?'射撃モード中｜射程'+info.range:'弓で狙う｜射程'+info.range):'弓で狙う'}</button>`);}
renderBattleOverlay();updateHeroStandee();renderActions();for(let tab of el('tabs').querySelectorAll('button'))tab.classList.toggle('on',ui.tab===tab.dataset.tab);if(ui.tab==='items')renderItems();else if(ui.tab==='equip')renderEquip();else if(ui.tab==='craft')renderCraft();else if(ui.tab==='build')renderBuild();else if(ui.tab==='skills')renderSkills();else if(ui.tab==='pets')renderPets();else if(ui.tab==='storage')renderStorage();else renderJournal();if(samePane&&body){for(const cls of ['pane-content','store-items','tabbody']){const list=cls==='tabbody'?[body]:Array.from(body.querySelectorAll('.'+cls));list.forEach((e,i)=>{if(oldScroll[cls]?.[i]!=null)e.scrollTop=oldScroll[cls][i];});}}
 ui._lastDrawTab=ui.tab;syncAudioUI();save();}

const AUDIOKEY='wildcard_audio_v1';
let audio={ctx:null,master:null,bgm:null,se:null,enabled:false,bgmVol:.28,seVol:.45,step:0,loop:null};
function loadAudioPrefs(){try{let a=JSON.parse(localStorage.getItem(AUDIOKEY)||'null');if(a){audio.enabled=!!a.enabled;if(a.bgmVol!=null)audio.bgmVol=a.bgmVol;if(a.seVol!=null)audio.seVol=a.seVol;}}catch(e){}}
function saveAudioPrefs(){try{localStorage.setItem(AUDIOKEY,JSON.stringify({enabled:audio.enabled,bgmVol:audio.bgmVol,seVol:audio.seVol}))}catch(e){}}
function ensureAudio(){if(audio.ctx)return;let AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;audio.ctx=new AC();audio.master=audio.ctx.createGain();audio.bgm=audio.ctx.createGain();audio.se=audio.ctx.createGain();audio.bgm.gain.value=audio.enabled?audio.bgmVol:0;audio.se.gain.value=audio.enabled?audio.seVol:0;audio.bgm.connect(audio.master);audio.se.connect(audio.master);audio.master.connect(audio.ctx.destination);}
function tone(freq,dur=0.12,type='sine',vol=.1,target='se',delay=0){ensureAudio();if(!audio.ctx)return;let now=audio.ctx.currentTime+delay,o=audio.ctx.createOscillator(),g=audio.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,now);g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(vol,now+0.01);g.gain.exponentialRampToValueAtTime(0.0001,now+dur);o.connect(g);g.connect(target==='bgm'?audio.bgm:audio.se);o.start(now);o.stop(now+dur+0.02);}
function playSfx(kind){ensureAudio();if(!audio.enabled||!audio.ctx||audio.ctx.state==='suspended')return;({click:()=>{tone(420,.05,'square',.04);tone(620,.05,'square',.03,'se',.06)},gather:()=>{tone(210,.08,'triangle',.06);tone(320,.1,'triangle',.04,'se',.06)},craft:()=>{tone(350,.06,'square',.05);tone(520,.08,'square',.05,'se',.06);tone(700,.08,'square',.03,'se',.12)},battle:()=>{tone(150,.08,'sawtooth',.06);tone(90,.1,'triangle',.05,'se',.03)},hit:()=>{tone(140,.08,'sawtooth',.08);tone(100,.12,'square',.05,'se',.04)},eat:()=>{tone(520,.07,'triangle',.04);tone(680,.05,'triangle',.03,'se',.07)},move:()=>{tone(240,.04,'triangle',.025)},chest:()=>{tone(280,.05,'square',.05);tone(380,.07,'square',.05,'se',.06)},level:()=>{[392,523,659].forEach((f,i)=>tone(f,.22,'triangle',.045,'se',i*.08))}}[kind]||(()=>{}))();}
function bgmTick(){if(!audio.enabled||!audio.ctx||document.hidden)return;let seq=timeOfDay()==='night'?[[220,277],[247,330],[196,262],[175,247]]:[[262,392],[294,440],[330,494],[294,440]];let step=seq[audio.step%seq.length];tone(step[0],.42,'triangle',.018,'bgm');tone(step[1],.30,'sine',.012,'bgm',.05);audio.step++;}
function setAudioEnabled(flag){ensureAudio();audio.enabled=flag;if(audio.ctx&&audio.ctx.state==='suspended')audio.ctx.resume();audio.bgm.gain.value=flag?audio.bgmVol:0;audio.se.gain.value=flag?audio.seVol:0;if(flag&&!audio.loop)audio.loop=setInterval(bgmTick,540);saveAudioPrefs();syncAudioUI();}
function syncAudioUI(){let btn=el('musicToggle'),bgm=el('bgmVolume'),se=el('seVolume');if(btn)btn.textContent=audio.enabled?'♪ 音ON':'♪ 音OFF';if(bgm&&document.activeElement!==bgm)bgm.value=Math.round(audio.bgmVol*100);if(se&&document.activeElement!==se)se.value=Math.round(audio.seVol*100);} 
function updateAudioVolume(kind,value){const vol=clamp(Number(value),0,100)/100;if(kind==='bgm'){audio.bgmVol=vol;if(audio.bgm)audio.bgm.gain.value=audio.enabled?audio.bgmVol:0;}else if(kind==='se'){audio.seVol=vol;if(audio.se)audio.se.gain.value=audio.enabled?audio.seVol:0;}saveAudioPrefs();}
loadAudioPrefs();
const lootHost=document.createElement('div');lootHost.id='lootPopups';document.querySelector('.map-panel .mapwrap').appendChild(lootHost);

// Pointer hover is an optional live ghost; touch users simply tap a cell to pin it.
el('mapgrid').addEventListener('pointerover',event=>{
 const p=ui.placing;if(!p||p.preview)return;
 const tile=event.target.closest('.tile[data-x][data-y]');if(!tile||!el('mapgrid').contains(tile))return;
 const x=Number(tile.dataset.x),y=Number(tile.dataset.y);
 if(p.hover&&p.hover.x===x&&p.hover.y===y)return;
 p.hover={x,y};updatePlacementGhost();
});
el('mapgrid').addEventListener('pointerleave',()=>{if(ui.placing&&!ui.placing.preview){ui.placing.hover=null;updatePlacementGhost();}});
document.addEventListener('click',e=>{let target=e.target.closest('button');if(!target)return;playSfx('click');if(target.dataset.herostyle){selectHeroStyle(target.dataset.herostyle);return;}if(target.dataset.act==='heroopen'){openHeroSelector();return;}if(target.dataset.act==='heroclose'){closeHeroSelector();return;}if(target.dataset.worldcell){ui.worldCell=target.dataset.worldcell;renderWorldMap();return;}
 if(target.dataset.tame){tameMob(Number(target.dataset.tame));return;}if(target.dataset.petorder){let [id,action]=target.dataset.petorder.split(',');petOrder(id,action);return;}if(target.dataset.medal){ui.medalChoice=target.dataset.medal;putMedal();return;}if(target.dataset.flee){let[x,y]=target.dataset.flee.split(',').map(Number);fleeTo(x,y);return;}
 if(target.dataset.equip){if(st.combat||ui.moving){toast('戦闘・移動中は装備を変更できません');return;}equipItem(target.dataset.equip);return;}if(target.dataset.unequip){if(st.combat||ui.moving){toast('戦闘・移動中は装備を変更できません');return;}unequipSlot(target.dataset.unequip);return;}
 if(target.dataset.skillgroup){ui.skillGroup=Number(target.dataset.skillgroup);draw();return;}if(target.dataset.learnskill){learnSkill(target.dataset.learnskill);return;}if(target.dataset.enhance){enhanceItem(target.dataset.enhance);return;}if(target.dataset.allocate){allocateStat(target.dataset.allocate);return;}if(target.dataset.repair){repairItem(target.dataset.repair);return;}if(target.dataset.infraRemove){infraRemove(target.dataset.infraRemove);return;}if(target.dataset.infra){infraInstall(target.dataset.infra);return;}if(target.dataset.plant){farmPlant(target.dataset.plant);return;}if(target.dataset.itemfilter){ui.itemFilter=target.dataset.itemfilter;draw();return;}
 if(target.dataset.storeamount){ui.storeAmount=Number(target.dataset.storeamount);draw();return;}
 if(target.dataset.storepage){let[side,dir]=target.dataset.storepage.split(',');ui.storePages[side]=Math.max(0,(ui.storePages[side]||0)+Number(dir));draw();return;}
 if(target.dataset.storetransfer){let[dir,id]=target.dataset.storetransfer.split(',');transfer(id,ui.storeAmount||1,dir);return;}
 if((st.combat||ui.moving)&&target.dataset.act&&!['attack','round','gentle','resumebattle','help','closehelp','newgame','dismissbattle'].includes(target.dataset.act)){toast(st.combat?'戦闘中は攻撃か逃走を選んでください':'移動が終わるまで操作できません');return;}
 if(target.dataset.x!==undefined){selectedTile(Number(target.dataset.x),Number(target.dataset.y));return;}
 if(target.dataset.view){ui.view=target.dataset.view;ui.page=0;draw();return;}
 if(target.dataset.tab){ui.tab=target.dataset.tab;ui.page=0;draw();return;}
 if(target.dataset.page){ui.page=Math.max(0,ui.page+(target.dataset.page==='next'?1:-1));draw();return;}
 if(target.dataset.storemode){ui.storageMode=target.dataset.storemode;ui.page=0;draw();return;}
 if(target.dataset.journalmode){ui.journalMode=target.dataset.journalmode;ui.page=0;draw();return;}
 if(st.combat&&(target.dataset.craft||target.dataset.build||target.dataset.placeid||target.dataset.transfer)){toast('戦闘中は使用できません');return;}
 if(target.dataset.travel){let[dx,dy]=target.dataset.travel.split(',').map(Number);locationTransition(dx,dy);return;}
 if(target.dataset.item){const id=target.dataset.item;if(ui.chosenItem===id){if(id.startsWith('pet_')){toast('仲間タブから管理できます');draw();return;}if(FOOD[id]||id==='healing_potion'||id==='magic_potion'){eatItem(id);return;}if(id==='water'){drinkStored();return;}if(ITEMS[id]?.[3]==='設備'){placeSelection(id);return;}if(GEAR[id]){equipItem(id);return;}toast('詳細欄から操作を選んでください');draw();return;}ui.chosenItem=id;draw();return;}
 if(target.dataset.filter){ui.craftFilter=target.dataset.filter;ui.page=0;draw();return;}
 if(target.dataset.craft){craftRecipe(target.dataset.craft);return;}
 if(target.dataset.build){placeSelection(target.dataset.build,'building');return;}
 if(target.dataset.placeid){placeSelection(target.dataset.placeid);return;}
 if(target.dataset.box){ui.storageId=target.dataset.box;ui.page=0;draw();return;}
 if(target.dataset.transfer){let[dir,id,n]=target.dataset.transfer.split(',');transfer(id,Number(n),dir);return;}
 let act=target.dataset.act;if(!act)return;
 switch(act){case'savemanager':openSaveManager();break;case'saveclose':closeSaveManager();break;case'saveexport':exportGameSave();break;case'saveimport':el('saveFileInput').click();break;case'saveforce':save();waitForSave().then(()=>refreshSaveStatus());break;case'debugopen':openDebug();break;case'debugclose':closeDebug();break;case'debugrespawn':applyForcedRescue('respawn');break;case'debugsafe':applyForcedRescue('safe');break;case'debugstart':applyForcedRescue('start');break;case'worldmap':openWorldMap();break;case'closeworldmap':closeWorldMap();break;case'music':setAudioEnabled(!audio.enabled);break;case'aim':beginAiming();break;case'shoot':rangedAttack();break;case'clearstation':ui.activeStation=null;draw();break;case'collectpasture':collectPasture();break;case'recovergrave':recoverGrave();break;case'gentle':toggleGentle();break;case'petwater':petWater();break;case'resumebattle':resumeCombat();break;case'round':attackRound();break;case'removemedal':removeMedal();break;case'applystoreamount':{let v=Math.max(1,Math.floor(Number(el('storeAmountCustom')?.value||1)));ui.storeAmount=v;draw();break;}case'dismissbattle':ui.battleSummary=null;draw();break;case'closeitem':ui.chosenItem=null;draw();break;case'rest':rest();break;case'help':showHelp(true,true);break;case'showhelpdetails':showHelp(true,true);break;case'showintro':showHelp(true,false);break;case'closehelp':showHelp(false);break;case'newgame':newGame();break;case'gather':gather(Number(target.dataset.num)||1);break;case'attack':attack();break;case'drinkriver':drinkAt();break;case'fish':catchFish();break;case'fillwater':fillWater();break;case'drinkstored':drinkStored();break;case'eat':eatItem(target.dataset.itemid);break;case'placeitem':placeSelection(target.dataset.itemid);break;case'discard':discard(target.dataset.itemid);break;case'walkselected':{let e1=selectedEntity();if(!e1)break;const dest=ui.selected;
    if(e1.kind==='object'&&e1.obj.type==='river_bridge'){walkTo(dest.x,dest.y,false,true);}else if(e1.kind==='object'){let o=e1.obj;if(adjacentToObject(st.pos,o)){toast('すでに設備の近くにいます');draw();}else walkTo(o.x,o.y,true,true);}
    else walkTo(dest.x,dest.y,false,true);
    break;}case'interact':inspectPlace();break;case'setrespawn':setRespawnBed();break;case'caveinteract':interactCave();break;case'waterhome':waterHome();break;case'farmharvest':farmHarvest();break;case'farmwater':farmWater();break;case'pickup':pickupFixture();break;case'demolish':demolishBuilding();break;case'exit':exitBuilding();break;case'confirmplace':confirmPlacement();break;case'rotateplace':if(ui.placing){ui.placing.rotated=!ui.placing.rotated;draw();}break;case'cancelplace':ui.placing=null;draw();break;case'liftchest':liftChest();break;case'placecarry':ui.placing={type:'chest',kind:'carry',rotated:false,preview:null,hover:null};ui.view='field';toast('チェストの配置先を選び「ここに設置」で確定してください');draw();break;}
});
document.addEventListener('input',e=>{if(e.target.id==='bgmVolume'){updateAudioVolume('bgm',e.target.value);return;}if(e.target.id==='seVolume'){updateAudioVolume('se',e.target.value);return;}});
document.addEventListener('change',e=>{if(e.target.id==='bgmVolume'){updateAudioVolume('bgm',e.target.value);return;}if(e.target.id==='seVolume'){updateAudioVolume('se',e.target.value);return;}if(e.target.id==='saveFileInput'){const f=e.target.files?.[0];e.target.value='';if(f)importGameSave(f);return;}if(e.target.id==='craftCategoryAll'){ui.craftCategories=e.target.checked?[...new Set(RECIPES.map(r=>r.cat))]:[];draw();return;}if(e.target.dataset.craftCategory!==undefined){const c=e.target.dataset.craftCategory;let active=Array.isArray(ui.craftCategories)?ui.craftCategories.slice():[...new Set(RECIPES.map(r=>r.cat))];if(e.target.checked&&!active.includes(c))active.push(c);if(!e.target.checked)active=active.filter(v=>v!==c);ui.craftCategories=active;draw();return;}if(e.target.dataset.goalId){st.goalVisibility=st.goalVisibility||{};st.goalVisibility[e.target.dataset.goalId]=e.target.checked;draw();return;}if(e.target.id==='graveDays'){st.settings=st.settings||{};st.settings.graveDays=Number(e.target.value);expireGraves();draw();return;}if(e.target.dataset.equipselect){if(st.combat||ui.moving){toast('戦闘・移動中は装備を変更できません');draw();return;}if(e.target.value)equipItem(e.target.value);else unequipSlot(e.target.dataset.equipselect);return;}if(e.target.id==='itemCategory'){ui.itemFilter=e.target.value;draw();return;}if(e.target.id==='craftCategory'){ui.craftFilter=e.target.value;ui.page=0;draw();return;}if(e.target.id==='craftableOnly'){ui.showCraftable=e.target.checked;ui.page=0;draw();}});
el('worldmapOverlay').addEventListener('click',e=>{if(e.target.id==='worldmapOverlay')closeWorldMap();});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeWorldMap();closeDebug();closeSaveManager();closeHeroSelector();}});el('debugOverlay').addEventListener('click',e=>{if(e.target.id==='debugOverlay')closeDebug();});el('saveOverlay').addEventListener('click',e=>{if(e.target.id==='saveOverlay')closeSaveManager();});el('heroOverlay').addEventListener('click',e=>{if(e.target.id==='heroOverlay')closeHeroSelector();});document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')save();});window.addEventListener('pagehide',save);window.addEventListener('resize',()=>{draw();if(!el('worldmapOverlay').classList.contains('hidden'))renderWorldMap();});init().catch(e=>{showSaveFailure('起動時の読み込みエラー：'+(e?.message||e));console.error(e);});
})();
