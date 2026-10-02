
(()=>{
'use strict';
const $=s=>document.querySelector(s);
const els={home:$('#homeScreen'),lobby:$('#lobbyScreen'),game:$('#gameScreen'),result:$('#resultScreen'),hostName:$('#hostName'),joinName:$('#joinName'),roomInput:$('#roomInput'),create:$('#createBtn'),join:$('#joinBtn'),roomCode:$('#roomCodeText'),net:$('#netStatus'),lobbyPlayers:$('#lobbyPlayers'),start:$('#startBtn'),mode:$('#modeSelect'),modeInfo:$('#modeInfo'),speed:$('#speedSelect'),messageSpeed:$('#messageSpeedSelect'),hostLobby:$('#hostLobbyControls'),addCpu:$('#addCpuBtn'),fillCpu:$('#fillCpuBtn'),gamePlayers:$('#gamePlayers'),board:$('#board'),boardPanel:$('#boardPanel'),turnName:$('#turnName'),turnStage:$('#turnStage'),roll:$('#rollDisplay'),wheel:$('#rouletteWheel'),rollBtn:$('#rollBtn'),hint:$('#turnHint'),cards:$('#cardArea'),assets:$('#assetArea'),log:$('#gameLog'),choice:$('#choiceOverlay'),messageClickLayer:$('#messageClickLayer'),choiceTitle:$('#choiceTitle'),choiceText:$('#choiceText'),choiceStatus:$('#choiceStatus'),choiceList:$('#choiceList'),message:$('#messageWindow'),messageSpeaker:$('#messageSpeaker'),messageText:$('#messageText'),messageOwner:$('#messageOwner'),messageNext:$('#messageNext'),messageScene:$('#messageScene'),messageActors:$('#messageActors'),curtain:$('#stageCurtain'),curtainIcon:$('#curtainIcon'),curtainName:$('#curtainName'),curtainSub:$('#curtainSub'),turnBanner:$('#turnBanner'),turnBannerName:$('#turnBannerName'),turnBannerAvatar:$('#turnBannerAvatar'),turnBannerIcon:$('#turnBannerIcon'),portraitImg:$('#portraitImg'),portraitName:$('#portraitName'),portraitRole:$('#portraitRole'),portraitStats:$('#portraitStats'),portraitSub:$('#portraitSub'),portraitBadge:$('#portraitBadge'),eraIcon:$('#eraIcon'),eraName:$('#eraName'),eraFlavor:$('#eraFlavor'),roundText:$('#roundText'),roundDots:$('#roundDots'),fieldInfo:$('#fieldInfo'),bgmBtn:$('#bgmBtn'),sfxBtn:$('#sfxBtn'),volumeSlider:$('#volumeSlider'),volumeValue:$('#volumeValue'),portraitPanel:$('#portraitPanel'),portraitToggle:$('#portraitToggle'),awardArea:$('#awardArea'),resultArea:$('#resultArea'),back:$('#backBtn'),resumeCard:$('#resumeCard'),resumeInfo:$('#resumeInfo'),resumeBtn:$('#resumeBtn'),discardResumeBtn:$('#discardResumeBtn'),boardRollPop:$('#boardRollPop'),spaceLandingPop:$('#spaceLandingPop'),spaceLandingIcon:$('#spaceLandingIcon'),spaceLandingText:$('#spaceLandingText'),rollWaitLayer:$('#rollWaitLayer'),rollWaitText:$('#rollWaitText'),avatarPicker:$('#avatarPickerOverlay'),avatarPickerGrid:$('#avatarPickerGrid'),avatarPickerClose:$('#avatarPickerClose'),gameHomeBtn:$('#gameHomeBtn'),leaveGameBtn:$('#leaveGameBtn')};
const COLORS=['#5577a8','#b45f5f','#5b8c62','#936aa2'];
const AVATAR_OPTIONS=[{id:'akane',name:'あかね',cat:'girl',src:'assets/avatar5.webp'},{id:'kotoha',name:'ことは',cat:'girl',src:'assets/avatar6.webp'},{id:'momoka',name:'ももか',cat:'girl',src:'assets/avatar7.webp'},{id:'ruri',name:'るり',cat:'girl',src:'assets/avatar8.webp'},{id:'yukari',name:'ゆかり',cat:'girl',src:'assets/avatar9.webp'},{id:'dino_girl',name:'恐竜ガール',cat:'quirky',src:'assets/avatar15.webp'},{id:'mushroom_girl',name:'きのこガール',cat:'quirky',src:'assets/avatar16.webp'},{id:'ghost_girl',name:'おばけガール',cat:'quirky',src:'assets/avatar18.webp'},{id:'robot_girl',name:'メカガール',cat:'quirky',src:'assets/avatar19.webp'},{id:'penguin_girl',name:'ペンギンガール',cat:'quirky',src:'assets/avatar21.webp'},{id:'panda_girl',name:'パンダガール',cat:'quirky',src:'assets/avatar23.webp'},{id:'street_boy',name:'やんちゃ少年',cat:'boy',src:'assets/avatar24.webp'},{id:'adventure_boy',name:'冒険少年',cat:'boy',src:'assets/avatar25.webp'},{id:'office_boy',name:'会社員くん',cat:'boy',src:'assets/avatar26.webp'},{id:'hamster',name:'ハムスター',cat:'animal',src:'assets/avatar28.webp'},{id:'penguin',name:'ペンギン',cat:'animal',src:'assets/avatar30.webp'},{id:'dino',name:'ちび恐竜',cat:'quirky',src:'assets/avatar31.webp'},{id:'panda_odd',name:'ブサカワパンダ',cat:'animal',src:'assets/avatar33.webp'},{id:'hamster_odd',name:'ぽっちゃりハム',cat:'animal',src:'assets/avatar34.webp'},{id:'alien_odd',name:'脱力宇宙人',cat:'quirky',src:'assets/avatar35.webp'}];
const AVATARS=AVATAR_OPTIONS.map(v=>v.src);
const TOKENS=['assets/token1.webp','assets/token2.webp','assets/token3.webp','assets/token4.webp'];
const SPACE_ICONS={event:'assets/icon1.webp',plus:'assets/icon7.webp',minus:'assets/icon2.webp',grow:'assets/icon5.webp',social:'assets/icon6.webp',chance:'assets/icon2.webp',card:'assets/icon3.webp',start:'assets/icon4.webp',career:'assets/icon5.webp',romance:'assets/icon6.webp',payday:'assets/icon7.webp',property:'assets/icon8.webp',family:'assets/icon9.webp',treasure:'assets/icon10.webp',submap:'assets/icon11.webp',special:'assets/icon12.webp'};
const STAGE_BACKGROUNDS={baby:'assets/map_baby.webp',elementary:'assets/map_elementary.webp',middle:'assets/map_middle.webp',high:'assets/map_high.webp',young:'assets/map_young.webp',mature:'assets/map_mature.webp',senior:'assets/map_senior.webp'};
const STAGES=[
 {id:'baby',name:'幼少期',icon:'🍼'},{id:'elementary',name:'小学生',icon:'🎒'},{id:'middle',name:'中学生',icon:'📘'},{id:'high',name:'高校生',icon:'🏫'},
 {id:'young',name:'大人前半',icon:'🌱'},{id:'mature',name:'大人後半',icon:'🏙️'},{id:'senior',name:'円熟期',icon:'🌅'}
];
const MODES={
 quick:{name:'さっくり',rounds:[2,2,2,3,4,4,3],sizes:[42,42,42,42,42,42,42],desc:'各時代を短めに遊ぶ。盤面は同じでラウンド数が少なめ。'},
 standard:{name:'じっくり',rounds:[3,4,4,5,7,7,5],sizes:[42,42,42,42,42,42,42],desc:'時代ごとの専用42マスマップをしっかり周回する標準モード。'},
 long:{name:'ロング',rounds:[4,5,5,6,9,9,7],sizes:[42,42,42,42,42,42,42],desc:'同じ専用マップを多く周回し、育成・資産形成を長く楽しむ。'}
};
const CPU_TYPES=[
 {id:'balanced',name:'バランス型',icon:'⚖️',w:{study:1,career:1,love:1,asset:1,risk:1}},
 {id:'scholar',name:'知性派',icon:'🧠',w:{study:2.2,career:1.3,love:.7,asset:1,risk:.7}},
 {id:'career',name:'仕事人',icon:'💼',w:{study:1.2,career:2.3,love:.6,asset:1.4,risk:1}},
 {id:'romance',name:'恋愛派',icon:'💗',w:{study:.8,career:.8,love:2.5,asset:.7,risk:1.1}},
 {id:'investor',name:'資産家',icon:'📈',w:{study:.8,career:1.2,love:.7,asset:2.6,risk:1.5}}
];
const JOBS=[
 ['office','会社スタッフ',70000,{communication:1},'career'],['sales','営業職',85000,{communication:4},'career'],['chef','料理人',80000,{fitness:2,charm:2},'career'],['designer','デザイナー',85000,{charm:4},'career'],['engineer','エンジニア',100000,{knowledge:5},'study'],['teacher','教師',95000,{knowledge:5,communication:3},'study'],['nurse','医療スタッフ',100000,{knowledge:4,communication:3},'study'],['civil','公務員',90000,{knowledge:4},'study'],['mechanic','整備士',90000,{fitness:3,knowledge:2},'career'],['creator','動画クリエイター',75000,{charm:4,communication:3},'risk'],
 ['programmer','プログラマー',105000,{knowledge:6},'study'],['architect','建築士',115000,{knowledge:7},'study'],['researcher','研究職',120000,{knowledge:8},'study'],['doctor','医師',145000,{knowledge:10},'study'],['lawyer','法律家',135000,{knowledge:9,communication:5},'study'],['pilot','パイロット',130000,{knowledge:7,fitness:5},'career'],['athlete','プロスポーツ選手',125000,{fitness:10},'risk'],['musician','音楽家',90000,{charm:7},'risk'],['actor','俳優',95000,{charm:8,communication:5},'risk'],['idol','タレント',100000,{charm:9},'risk'],
 ['manager','経営企画',130000,{knowledge:7,communication:7},'career'],['consultant','コンサルタント',140000,{knowledge:8,communication:8},'career'],['entrepreneur','起業家',120000,{knowledge:6,communication:7},'risk'],['trader','トレーダー',125000,{knowledge:7},'asset'],['author','作家',85000,{knowledge:6,charm:5},'risk'],['artisan','職人',100000,{fitness:5,knowledge:4},'career'],['farmer','農業経営',95000,{fitness:5,communication:3},'asset'],['game','ゲーム企画',105000,{knowledge:6,charm:4},'career'],['scientist','先端研究者',155000,{knowledge:12},'study'],['executive','企業役員',170000,{knowledge:9,communication:10},'career']
].map((x,i)=>({id:x[0],name:x[1],base:x[2],req:x[3],tag:x[4],index:i}));
// Family members reuse character art that already existed in the project.
// The 15 extra images were previously removed from the player picker and are NPC/family-only.
const EXTRA_EXISTING_AVATARS=[
 {id:'old_sakura',src:'assets/avatar1.webp',family:true},{id:'old_mio',src:'assets/avatar2.webp',family:true},{id:'old_tsubaki',src:'assets/avatar3.webp',family:true},{id:'old_sumire',src:'assets/avatar4.webp',family:true},
 {id:'old_alice',src:'assets/avatar10.webp',family:true},{id:'old_chloe',src:'assets/avatar11.webp',family:true},{id:'old_mint',src:'assets/avatar12.webp',family:true},{id:'old_serena',src:'assets/avatar13.webp',family:true},{id:'old_koharu',src:'assets/avatar14.webp',family:true},
 {id:'old_alien_girl',src:'assets/avatar17.webp',family:true},{id:'old_slime_girl',src:'assets/avatar20.webp',family:true},{id:'old_hamster_girl',src:'assets/avatar22.webp',family:true},
 {id:'old_panda',src:'assets/avatar27.webp',family:false},{id:'old_alien',src:'assets/avatar29.webp',family:false},{id:'old_ghost',src:'assets/avatar32.webp',family:false}
];
const FAMILY_FRIENDLY_CURRENT_IDS=new Set(['akane','kotoha','momoka','ruri','yukari','dino_girl','mushroom_girl','ghost_girl','robot_girl','penguin_girl','panda_girl','street_boy','adventure_boy','office_boy']);
const ALL_EXISTING_CHARACTER_ART=[
 ...AVATAR_OPTIONS.map(v=>({id:v.id,src:v.src,family:FAMILY_FRIENDLY_CURRENT_IDS.has(v.id)})),
 ...EXTRA_EXISTING_AVATARS
];
const CHILD_NAMES=['あお','ひかり','ゆず','りん','はる','なぎ','つむぎ','そら','みなと','かなた','いおり','こはる','あさひ','すず','れお','しおん','まひろ','ひなた','あき','るか'];
const CHILD_JOBS=[
 ['会社員',32000],['デザイナー',35000],['エンジニア',42000],['公務員',38000],['料理人',34000],['研究職',45000],['販売職',30000],['クリエイター',36000],['医療職',43000],['スポーツ関係',36000]
];
const PARTNERS=[
 ['あおい','落ち着いた読書好き','knowledge','図書館スタッフ',72000],
 ['ひなた','明るいアウトドア派','fitness','スポーツインストラクター',78000],
 ['れん','話好きの社交派','communication','営業職',88000],
 ['みさき','おしゃれ好き','charm','デザイナー',84000],
 ['かえで','堅実な仕事人','knowledge','会社員',90000],
 ['そら','自由なクリエイター','charm','クリエイター',82000],
 ['ゆう','スポーツ好き','fitness','トレーナー',80000],
 ['なお','聞き上手','communication','福祉スタッフ',76000],
 ['つばさ','好奇心旺盛','knowledge','研究補助',94000],
 ['まこと','行動派','fitness','技術職',86000]
].map((x,i)=>({id:'pt'+i,name:x[0],desc:x[1],pref:x[2],job:x[3],income:x[4]}));
const PROPS=[['郊外の小さな家',220000,180000,0],['駅近マンション',360000,330000,10000],['海辺のコテージ',420000,380000,12000],['古民家リノベ',480000,450000,14000],['都市型マンション',650000,620000,18000],['店舗付き住宅',760000,720000,28000],['高原別荘',880000,800000,20000],['小さなアパート',1000000,970000,45000],['デザイナーズ住宅',1200000,1150000,26000],['商業ビル区画',1500000,1450000,65000],['リゾートヴィラ',1800000,1700000,42000],['大型賃貸物件',2200000,2100000,90000]].map((x,i)=>({id:'pr'+i,name:x[0],price:x[1],value:x[2],income:x[3]}));
const TREASURES=[['古い腕時計',50000,180000],['限定スニーカー',30000,120000],['アンティーク食器',60000,250000],['希少なレコード',40000,200000],['古いカメラ',70000,260000],['記念硬貨セット',80000,320000],['名工の工芸品',100000,420000],['謎の絵画',120000,650000],['ヴィンテージ家具',90000,350000],['絶版コミック全集',50000,230000],['古酒コレクション',100000,480000],['クラシック楽器',130000,550000],['鉱石標本',60000,300000],['サイン入り記念品',70000,380000],['古地図',90000,500000],['未鑑定の箱',30000,800000]].map((x,i)=>({id:'tr'+i,name:x[0],buy:x[1],max:x[2]}));
const CARDS=[
 {id:'plus2',name:'追い風カード',desc:'次のルーレット結果に+2',tag:'risk',turnCost:'free'},
 {id:'guard',name:'安心カード',desc:'次の損失イベントを半減',tag:'asset',turnCost:'free'},
 {id:'study',name:'集中カード',desc:'知力+3',tag:'study',turnCost:'end'},
 {id:'charm',name:'イメチェンカード',desc:'魅力+3',tag:'love',turnCost:'end'},
 {id:'network',name:'交流カード',desc:'交流+3',tag:'career',turnCost:'end'},
 {id:'fitness',name:'元気カード',desc:'体力+3',tag:'career',turnCost:'end'},
 {id:'bonus',name:'臨時収入カード',desc:'その場で8万円',tag:'asset',turnCost:'free'},
 {id:'date',name:'デート応援カード',desc:'交際中なら好感度+2',tag:'love',turnCost:'end'}
];
const EVENT_RAW={
 baby:[['家族みんなに可愛がられた',30000,{charm:1,communication:1},2],['積み木に夢中',0,{knowledge:2},1],['公園を走り回った',0,{fitness:2},1],['人見知りを克服',0,{communication:2},2],['お気に入りのおもちゃをなくした',-10000,{},1],['写真をたくさん撮ってもらった',0,{charm:1},3],['絵本を何度も読んだ',0,{knowledge:2},2],['よく食べてよく寝た',0,{fitness:2},1]],
 elementary:[['テストで良い点',10000,{knowledge:2},2],['運動会で活躍',10000,{fitness:2},3],['クラスの人気者に',0,{communication:2,charm:1},3],['図書館に通った',0,{knowledge:3},2],['ゲームに熱中',-10000,{knowledge:1},2],['自由研究が表彰された',30000,{knowledge:2,charm:1},4],['遠足で大はしゃぎ',-10000,{fitness:1,communication:1},4],['お手伝いでおこづかい',20000,{communication:1},1],['習い事を始めた',-20000,{charm:2},2],['友達と秘密基地を作った',0,{communication:2},4]],
 middle:[['部活に打ち込んだ',-10000,{fitness:3},3],['定期テストで上位',20000,{knowledge:3},2],['文化祭で目立った',0,{charm:2,communication:2},4],['初めてのアルバイト体験',30000,{communication:1},2],['趣味の大会に出場',-20000,{charm:2},4],['友達と大げんか',0,{communication:-1},1],['仲直りして絆が深まる',0,{communication:3},4],['資格の勉強を始めた',-10000,{knowledge:2},2],['体力測定で好記録',10000,{fitness:2},2],['SNS投稿が少し話題に',10000,{charm:2},3]],
 high:[['模試で手応え',0,{knowledge:3},2],['体育祭で大活躍',10000,{fitness:3},4],['文化祭の実行委員',0,{communication:3},4],['アルバイトで貯金',50000,{communication:1},2],['趣味に大出費',-40000,{charm:2},3],['進路相談で視野が広がる',0,{knowledge:1,communication:2},2],['コンテスト入賞',50000,{charm:3},5],['部活最後の大会',-20000,{fitness:2},5],['友達と卒業旅行の計画',-30000,{communication:2},4],['夜更かし続き',0,{fitness:-1,knowledge:1},1]],
 young:[['仕事で褒められた',60000,{communication:2},3],['資格試験に合格',-30000,{knowledge:3},3],['同僚と飲み会',-30000,{communication:2},3],['趣味のイベントへ',-50000,{charm:2},5],['副業がうまくいく',90000,{knowledge:1},2],['急な修理費',-70000,{},1],['健康診断で運動を決意',-10000,{fitness:2},2],['旅行でリフレッシュ',-80000,{charm:1,communication:1},6],['仕事のミスを挽回',-20000,{communication:2},3],['友人の結婚式',-50000,{communication:1},4],['ネット販売がヒット',120000,{charm:1},3],['勉強会に参加',-20000,{knowledge:2,communication:1},2]],
 mature:[['大きな仕事を任された',100000,{communication:2,knowledge:1},4],['後輩を育てた',0,{communication:3},4],['家電を一気に買い替え',-120000,{},2],['家族旅行',-140000,{communication:1},8],['投資先が好調',140000,{},2],['趣味の作品が売れた',100000,{charm:2},4],['健康づくりを始めた',-30000,{fitness:3},3],['地域活動に参加',0,{communication:3},5],['思わぬ臨時収入',160000,{},2],['車の買い替え',-180000,{charm:1},3],['旧友と再会',-30000,{communication:2},5],['専門知識が評価された',90000,{knowledge:2},4]],
 senior:[['昔の趣味を再開',-50000,{charm:2},6],['のんびり温泉旅行',-100000,{},8],['家族からプレゼント',50000,{},7],['地域の先生役になる',50000,{communication:2,knowledge:1},6],['健康維持の散歩',0,{fitness:2},4],['古い持ち物を整理',80000,{},3],['孫世代と遊ぶ',-30000,{communication:2},8],['思い出の場所を訪ねる',-60000,{},9],['昔の知識が役立った',70000,{knowledge:1},5],['ゆっくり読書三昧',-10000,{knowledge:2},5]]
};
const EVENTS={};for(const k in EVENT_RAW)EVENTS[k]=EVENT_RAW[k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]}));

// Roughly half of ordinary event spaces become hidden-result 3-choice events.
// The choices intentionally do not reveal stat changes, checks, or rewards before selection.
const CHOICE_EVENTS={
 baby:[
  {id:'baby_box',title:'大きな箱を見つけた',text:'部屋のすみに、ちょうど入れそうな大きな箱がある。どうしよう？',options:[
   {label:'中に入って遊ぶ',out:{stats:{charm:1},memory:3,text:'箱は秘密基地になった。夢中で遊んだ。'}},
   {label:'積み木を詰めてみる',out:{stats:{knowledge:2},memory:1,text:'形を考えながら、ぴったり詰める遊びに夢中になった。'}},
   {label:'家族のところへ運ぶ',out:{stats:{communication:2},memory:2,text:'みんなで遊ぶことになり、にぎやかな時間になった。'}}]},
  {id:'baby_rain',title:'雨の日のおうち時間',text:'外は雨。今日は家の中で過ごすことになった。',options:[
   {label:'絵本を選ぶ',out:{stats:{knowledge:2},memory:2,text:'気に入った絵本を何度も読んでもらった。'}},
   {label:'音楽に合わせて踊る',out:{stats:{fitness:1,charm:1},memory:3,text:'部屋いっぱいに踊って大はしゃぎ。'}},
   {label:'家族にずっと話しかける',out:{stats:{communication:2},memory:2,text:'意味の分からない言葉も含めて、たくさん会話した。'}}]},
  {id:'baby_snack',title:'おやつの時間',text:'テーブルにおやつが並んだ。今日はどれからいこう？',options:[
   {label:'見たことのないものを選ぶ',out:{stats:{knowledge:1,charm:1},memory:2,text:'少し驚いたけれど、新しい味を覚えた。'}},
   {label:'大好きなものを選ぶ',out:{stats:{fitness:1},memory:3,text:'大満足でご機嫌な一日になった。'}},
   {label:'みんなに分ける',out:{stats:{communication:2},memory:2,text:'分けっこして、みんなで笑った。'}}]},
  {id:'baby_guest',title:'お客さんがやってきた',text:'家に知らない大人が遊びに来た。',options:[
   {label:'すぐ近づいてみる',out:{stats:{communication:2,charm:1},memory:2,text:'すぐに打ち解けて、たくさん可愛がってもらった。'}},
   {label:'少し離れて観察する',out:{stats:{knowledge:2},memory:1,text:'じっと様子を見て、少しずつ慣れていった。'}},
   {label:'お気に入りのおもちゃを見せる',out:{stats:{charm:2},memory:2,text:'得意げにおもちゃを披露して場が和んだ。'}}]}
 ],
 elementary:[
  {id:'el_free',title:'放課後、何して遊ぶ？',text:'今日は予定なし。友達から誘いが来た。',options:[
   {label:'公園へ行く',out:{stats:{fitness:2,communication:1},memory:3,text:'暗くなるまで走り回った。'}},
   {label:'家でゲーム大会',out:{stats:{knowledge:1,communication:2},memory:3,text:'作戦を考えながら盛り上がった。'}},
   {label:'図書館へ寄る',out:{stats:{knowledge:3},memory:1,text:'気になる本を見つけて一気に読み進めた。'}}]},
  {id:'el_festival',title:'学校のお祭り',text:'クラスで何を担当するか決めることになった。',options:[
   {label:'お客さんを呼び込む',out:{stats:{charm:2,communication:1},memory:4,text:'元気な呼び込みでお店がにぎわった。'}},
   {label:'飾りつけを担当する',out:{stats:{charm:1,knowledge:1},memory:3,text:'工夫した飾りつけが好評だった。'}},
   {label:'裏方で進行を手伝う',out:{stats:{communication:2,knowledge:1},memory:3,text:'目立たないところで全体をうまく回せた。'}}]},
  {id:'el_allowance',title:'おこづかいの使い道',text:'少しだけ自由に使えるお金をもらった。',options:[
   {label:'欲しかった物を買う',out:{cash:-10000,stats:{charm:1},memory:3,text:'欲しかった物を手に入れて大満足。'}},
   {label:'貯金しておく',out:{cash:10000,stats:{knowledge:1},memory:1,text:'使わずに取っておくことにした。'}},
   {label:'友達とおやつを買う',out:{cash:-5000,stats:{communication:2},memory:3,text:'一緒に食べると、いつもよりおいしかった。'}}]},
  {id:'el_team',title:'班分けで迷った',text:'授業で自由に班を作ることになった。',options:[
   {label:'仲の良い子と組む',out:{stats:{communication:2},memory:3,text:'息の合うメンバーで楽しく進めた。'}},
   {label:'知らない子に声をかける',out:{stats:{communication:2,charm:1},memory:2,text:'新しい友達ができた。'}},
   {label:'得意そうな子を探す',out:{stats:{knowledge:2},memory:2,text:'役割分担がうまくいき、課題を早く終えられた。'}}]}
 ],
 middle:[
  {id:'mid_club',title:'部活をどう楽しむ？',text:'少し自由に動ける時間ができた。',options:[
   {label:'基礎練習を続ける',out:{stats:{fitness:3},memory:2,text:'地味な練習を積み重ね、体の動きが良くなった。'}},
   {label:'後輩に教える',out:{stats:{communication:2},memory:3,text:'人に教える難しさと楽しさを知った。'}},
   {label:'新しいやり方を試す',out:{stats:{knowledge:1,charm:2},memory:3,text:'自分なりの工夫が思った以上に好評だった。'}}]},
  {id:'mid_sns',title:'SNSに何を投稿する？',text:'ちょっと面白い出来事があった。',options:[
   {label:'写真をきれいにまとめる',out:{stats:{charm:2},memory:2,text:'見やすくまとめた投稿に反応が集まった。'}},
   {label:'面白く文章で紹介する',out:{stats:{communication:2},memory:2,text:'コメント欄がにぎやかになった。'}},
   {label:'投稿せず友達だけに話す',out:{stats:{communication:1,knowledge:1},memory:3,text:'直接話すうちに、別の面白い話まで広がった。'}}]},
  {id:'mid_shop',title:'帰り道に新しい店',text:'友達と帰る途中、気になる店を見つけた。',options:[
   {label:'入ってみる',out:{cash:-15000,stats:{charm:1},memory:4,text:'思い切って入ると、思わぬお気に入りが見つかった。'}},
   {label:'今日は見るだけ',out:{stats:{knowledge:1},memory:1,text:'外から眺めて、次に来る楽しみを残した。'}},
   {label:'友達に任せる',out:{cash:-5000,stats:{communication:2},memory:3,text:'友達おすすめのものを試して盛り上がった。'}}]},
  {id:'mid_project',title:'グループ課題',text:'自由研究のテーマを決めることになった。',options:[
   {label:'難しいテーマに挑む',out:{stats:{knowledge:3},memory:2,text:'苦戦したぶん、かなり詳しくなった。'}},
   {label:'みんなが楽しめる内容にする',out:{stats:{communication:2,charm:1},memory:3,text:'班全体が乗り気になり、発表も盛り上がった。'}},
   {label:'実験中心で進める',out:{stats:{knowledge:2,fitness:1},memory:3,text:'何度も試して、納得のいく結果を出した。'}}]}
 ],
 high:[
  {id:'high_after',title:'放課後の過ごし方',text:'予定のない放課後。今日は何をしよう？',options:[
   {label:'自習室へ行く',out:{stats:{knowledge:3},memory:1,text:'静かな環境で集中して勉強できた。'}},
   {label:'友達と街へ出る',out:{cash:-20000,stats:{communication:2,charm:1},memory:4,text:'何でもない時間が良い思い出になった。'}},
   {label:'ひとりで趣味に没頭する',out:{stats:{charm:2},memory:3,text:'時間を忘れて好きなことに打ち込んだ。'}}]},
  {id:'high_fest',title:'文化祭の企画会議',text:'クラスの案がなかなかまとまらない。',options:[
   {label:'自分の案を出す',out:{stats:{charm:2,communication:1},memory:4,text:'思い切った案が採用され、準備が動き始めた。'}},
   {label:'みんなの意見をまとめる',out:{stats:{communication:3},memory:3,text:'ばらばらだった案が一つにまとまった。'}},
   {label:'必要な作業を先に始める',out:{stats:{knowledge:2,fitness:1},memory:2,text:'話し合いの間に準備を進め、後でかなり助かった。'}}]},
  {id:'high_parttime',title:'アルバイト先が忙しい',text:'急に人手が足りなくなった。',options:[
   {label:'追加でシフトに入る',out:{cash:45000,stats:{communication:1,fitness:1},memory:2,text:'かなり忙しかったが、しっかり稼げた。'}},
   {label:'短時間だけ手伝う',out:{cash:20000,stats:{communication:1},memory:2,text:'無理のない範囲で手伝って感謝された。'}},
   {label:'今日は予定を優先する',out:{stats:{charm:1},memory:3,text:'自分の予定を大切にして、良い気分転換になった。'}}]},
  {id:'high_trip',title:'休日の小旅行',text:'友達から日帰りで出かけようと誘われた。',options:[
   {label:'遠くまで行く',out:{cash:-40000,stats:{communication:1},memory:6,text:'見たことのない景色に大興奮。'}},
   {label:'近場をじっくり回る',out:{cash:-15000,stats:{knowledge:1,charm:1},memory:4,text:'身近な場所にも知らない魅力がたくさんあった。'}},
   {label:'家で計画だけ立てる',out:{stats:{knowledge:2},memory:2,text:'次に行きたい場所がどんどん増えた。'}}]}
 ],
 young:[
  {id:'young_weekend',title:'久しぶりの休日',text:'仕事の予定がない一日。どう過ごそう？',options:[
   {label:'朝から外へ出る',out:{cash:-30000,stats:{fitness:2,charm:1},memory:4,text:'体を動かして気分がすっきりした。'}},
   {label:'家で勉強する',out:{stats:{knowledge:3},memory:1,text:'気になっていた分野をじっくり学べた。'}},
   {label:'友達を誘う',out:{cash:-20000,stats:{communication:3},memory:4,text:'久しぶりに会って話が尽きなかった。'}}]},
  {id:'young_bonus',title:'臨時のお金が入った',text:'思っていなかった収入が少し入った。',options:[
   {label:'すぐ使う',out:{cash:30000,stats:{charm:1},memory:4,text:'欲しかったものを買って満足した。'}},
   {label:'そのまま残す',out:{cash:70000,stats:{knowledge:1},memory:1,text:'使わずに残し、少し安心感が増した。'}},
   {label:'誰かにごちそうする',out:{cash:10000,stats:{communication:2},memory:4,text:'みんなで楽しい時間を過ごした。'}}]},
  {id:'young_invite',title:'仕事帰りのお誘い',text:'同僚から寄り道しようと声をかけられた。',options:[
   {label:'一緒に行く',out:{cash:-25000,stats:{communication:2},memory:3,text:'仕事以外の話で意外と盛り上がった。'}},
   {label:'別の人も誘う',out:{cash:-35000,stats:{communication:2,charm:1},memory:4,text:'人数が増えてにぎやかな時間になった。'}},
   {label:'今日は帰る',out:{stats:{fitness:1,knowledge:1},memory:1,text:'早めに休んで、翌日はかなり調子が良かった。'}}]},
  {id:'young_side',title:'副業の話を聞いた',text:'知り合いから小さな副業の話を持ちかけられた。',options:[
   {label:'やってみる',out:{cash:70000,stats:{knowledge:1},memory:2,text:'慣れない作業だったが、ちょっとした収入になった。'}},
   {label:'知り合いを紹介する',out:{cash:25000,stats:{communication:2},memory:2,text:'紹介した相手にも喜ばれた。'}},
   {label:'今回は断る',out:{stats:{fitness:1},memory:1,text:'無理に予定を増やさず、余裕を残した。'}}]}
 ],
 mature:[
  {id:'mat_home',title:'家のことを見直そう',text:'少しまとまった時間ができた。',options:[
   {label:'大掃除する',out:{stats:{fitness:2},memory:2,text:'思い切って片づけたら家がすっきりした。'}},
   {label:'家具を入れ替える',out:{cash:-70000,stats:{charm:2},memory:3,text:'部屋の雰囲気が一気に変わった。'}},
   {label:'家族や友人を招く',out:{cash:-40000,stats:{communication:2},memory:5,text:'にぎやかな時間が良い思い出になった。'}}]},
  {id:'mat_hobby',title:'昔の趣味を再開',text:'しばらく離れていた趣味が気になってきた。',options:[
   {label:'道具を揃え直す',out:{cash:-60000,stats:{charm:2},memory:5,text:'新しい道具でやる気が一気に戻った。'}},
   {label:'昔の仲間に連絡する',out:{stats:{communication:3},memory:5,text:'久しぶりの再会で話が止まらなかった。'}},
   {label:'まずは気軽に試す',out:{stats:{knowledge:1,charm:1},memory:3,text:'無理せず再開したら思った以上に楽しかった。'}}]},
  {id:'mat_money',title:'まとまった余裕資金',text:'少しだけ自由に使えるお金ができた。',options:[
   {label:'生活をちょっと豪華にする',out:{cash:-80000,stats:{charm:2},memory:5,text:'少し贅沢して、良い気分転換になった。'}},
   {label:'学び直しに使う',out:{cash:-50000,stats:{knowledge:3},memory:2,text:'新しい知識が仕事にも日常にも役立ちそうだ。'}},
   {label:'手元に置いておく',out:{cash:30000,stats:{knowledge:1},memory:1,text:'余裕を残して、安心感が増した。'}}]},
  {id:'mat_local',title:'地域イベントのお手伝い',text:'近所の催しで人手を探している。',options:[
   {label:'受付をする',out:{stats:{communication:3},memory:4,text:'たくさんの人と話し、顔見知りが増えた。'}},
   {label:'設営を手伝う',out:{stats:{fitness:2,communication:1},memory:4,text:'汗をかいたぶん、終わった後の達成感も大きかった。'}},
   {label:'企画を考える',out:{stats:{knowledge:1,charm:2},memory:4,text:'考えた企画が好評で次回も頼まれた。'}}]}
 ],
 senior:[
  {id:'senior_morning',title:'朝の時間をどう使う？',text:'いつもより早く目が覚めた。',options:[
   {label:'散歩へ出る',out:{stats:{fitness:2},memory:3,text:'朝の空気が気持ちよく、良い一日の始まりになった。'}},
   {label:'ゆっくり本を読む',out:{stats:{knowledge:2},memory:3,text:'静かな時間の中で、昔とは違う発見があった。'}},
   {label:'誰かに電話する',out:{stats:{communication:2},memory:4,text:'何気ない会話が思った以上に楽しかった。'}}]},
  {id:'senior_album',title:'古いアルバムを発見',text:'懐かしい写真がたくさん出てきた。',options:[
   {label:'一人でじっくり見る',out:{stats:{knowledge:1},memory:6,text:'忘れていた出来事まで次々と思い出した。'}},
   {label:'家族に見せる',out:{stats:{communication:2},memory:7,text:'昔話で盛り上がり、笑い声が絶えなかった。'}},
   {label:'きれいに整理する',out:{stats:{charm:1,knowledge:1},memory:5,text:'写真を整理しながら、自分の人生を振り返った。'}}]},
  {id:'senior_trip',title:'少し遠出してみよう',text:'天気も良く、出かけるにはちょうどいい。',options:[
   {label:'思い出の場所へ行く',out:{cash:-50000,memory:8,text:'昔と変わった景色、変わらない景色の両方を楽しんだ。'}},
   {label:'初めての場所へ行く',out:{cash:-70000,stats:{charm:1},memory:8,text:'まだ知らない景色に出会えた。'}},
   {label:'近所をのんびり歩く',out:{stats:{fitness:1,communication:1},memory:5,text:'近所の人と話しながら穏やかに過ごした。'}}]},
  {id:'senior_help',title:'誰かから相談を受けた',text:'これまでの経験を聞かせてほしいと言われた。',options:[
   {label:'自分の経験を話す',out:{stats:{communication:2,knowledge:1},memory:5,text:'話しているうちに、自分でも忘れていた経験を思い出した。'}},
   {label:'まず相手の話を聞く',out:{stats:{communication:3},memory:5,text:'じっくり聞くことで、相手も少し元気になった。'}},
   {label:'一緒に考えてみる',out:{stats:{knowledge:2,communication:1},memory:5,text:'答えを押しつけず、一緒に道筋を考えた。'}}]}
 ]
};
const ALL_CHOICE_EVENTS=Object.values(CHOICE_EVENTS).flat();
const ABILITY_EVENT_RULES={
 '自由研究が表彰された':{stat:'knowledge',target:7,failText:'自由研究は入賞を逃したが、調べたことはしっかり身についた。'},
 '趣味の大会に出場':{stat:'charm',target:7,failText:'大会では結果を残せなかったが、良い経験になった。'},
 '体力測定で好記録':{stat:'fitness',target:7,failText:'記録は平均的だった。次はもっと伸ばせそうだ。'},
 'コンテスト入賞':{stat:'charm',target:9,failText:'コンテストでは惜しくも入賞を逃した。'},
 '部活最後の大会':{stat:'fitness',target:9,failText:'最後の大会は悔しい結果だったが、やり切った。'},
 '資格試験に合格':{stat:'knowledge',target:10,failText:'資格試験はあと一歩。勉強した分だけ知識は増えた。'},
 '専門知識が評価された':{stat:'knowledge',target:11,failText:'専門知識を試す場面で少し力不足を感じた。'},
 '地域の先生役になる':{stat:'communication',target:10,failText:'人に教える難しさを実感したが、良い刺激になった。'}
};
const CAREER_EVENTS=['大口案件を成功させた','資格が仕事に活きた','チームをまとめた','新企画が採用された','難しいトラブルを解決した','顧客から高評価を受けた','後輩の指導が評価された','社内表彰を受けた'];
const MILESTONES={baby:'幼少期が始まった',elementary:'小学校生活が始まった',middle:'中学生になった',high:'高校生活が始まった',young:'大人としての生活が始まった',mature:'人生の中盤に入った',senior:'円熟期に入った'};

const STAGE_FLAVOR={baby:'家族に見守られながら、はじめての世界へ。',elementary:'遊びも勉強も、毎日が新発見。',middle:'得意なことや人間関係が少しずつ形になる。',high:'進路を考えながら、自分らしさを伸ばす。',young:'仕事・恋愛・資産形成。選択肢が一気に広がる。',mature:'仕事も家庭も人生の大きな節目へ。',senior:'積み重ねた人生を楽しみ、最後の総決算へ。'};
const STAGE_THEME={baby:['#e7f2e5','#fff0d5'],elementary:['#e1f1dc','#fff1bd'],middle:['#dce8f5','#eadff4'],high:['#e8e3f7','#f8dfdc'],young:['#dcefe8','#dce7f6'],mature:['#e0e8ee','#f0decf'],senior:['#f2e6d7','#f1dcae']};
const SPACE_META={start:['🏁','スタート'],event:['🎲','出来事'],plus:['＋','プラス'],minus:['－','マイナス'],grow:['📚','成長'],social:['💬','交流'],chance:['✨','チャンス'],payday:['💴','収入'],card:['🃏','カード'],treasure:['💎','お宝'],submap:['🗺️','寄り道'],romance:['💗','恋愛'],property:['🏠','物件'],career:['💼','仕事'],family:['👪','家族']};
let peer=null,hostConn=null,isHost=false,roomCode='',localPlayerId='',state=null,cpuTimer=null,hostTimers=[];const connections=new Map();
let bgmOn=localStorage.getItem('lifeRoadBgmOn')!=='0',sfxOn=localStorage.getItem('lifeRoadSfxOn')!=='0',audioCtx=null,bgmTimer=null,bgmStep=0,bgmStage=-1,lastFx={roulette:null,move:'',stage:null,message:''},rollVisualTimer=null,mobileBoardFocusTimer=null,boardRollPopTimer=null;
let typewriterTimer=null,typewriterKey='',typewriterFullText='',typewriterDone=true,typewriterPos=0,messageSceneKey='',landingPopKey='';
let masterVolume=Math.max(0,Math.min(1,Number(localStorage.getItem('lifeRoadVolume')??'1')));
let portraitCollapsed=localStorage.getItem('lifeRoadPortraitCollapsed')==='1';
const SESSION_KEY='lifeRoadSessionV22';
let reconnectTimer=null,reconnectAttempts=0,resumeInProgress=false,portraitTogglePointerLock=false,rollAdvanceLock=false,localHomeView=false,intentionalDisconnect=false;
const rnd=n=>Math.floor(Math.random()*n),pick=a=>a[rnd(a.length)],clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function uuid(){return 'x_'+Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-5)}
function cleanName(v){return (v||'プレイヤー').trim().slice(0,12)||'プレイヤー'}
function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function money(n){n=Math.round(n||0);return (n<0?'-':'')+'¥'+Math.abs(n).toLocaleString('ja-JP')}
function show(x){[els.home,els.lobby,els.game,els.result].forEach(e=>e.classList.add('hidden'));x.classList.remove('hidden')}
function net(t){els.net.textContent=t}
function addLog(t){state.log.unshift(t);state.log=state.log.slice(0,120)}
function currentPlayer(){return state?.players[state.turnIndex]||null}
function stageDef(i=state?.stageIndex||0){return STAGES[i]||STAGES[0]}
function cpuDef(id){return CPU_TYPES.find(c=>c.id===id)||CPU_TYPES[0]}
function modeDef(){return MODES[state?.settings?.mode||'standard']}
function speedScale(){if(location.search.includes('test=1'))return .02;return state?.settings?.speed==='fast'?.58:1}
function messageSpeedMode(){return state?.settings?.messageSpeed||'normal'}
function messageSpeedConfig(){return({slow:{char:46,hold:1950,min:3900,max:18000},normal:{char:32,hold:1450,min:2850,max:14000},fast:{char:20,hold:900,min:1850,max:9000}})[messageSpeedMode()]||{char:32,hold:1450,min:2850,max:14000}}
function currentMessageLineText(m=state?.message){const line=m?.lines?.[m.index];return typeof line==='string'?line:(line?.text||'…')}
function cpuMessageDelay(m){if(location.search.includes('test=1'))return 45;const cfg=messageSpeedConfig(),text=currentMessageLineText(m),chars=Array.from(text).length,punct=(text.match(/[、。！？!?…]/g)||[]).length;return clamp(chars*cfg.char+punct*95+cfg.hold,cfg.min,cfg.max)}
function typewriterDelay(ch){const base=messageSpeedConfig().char;if(/[。！？!?]/.test(ch))return base+125;if(/[、,]/.test(ch))return base+65;if(ch==='…')return base+45;return base}
function later(fn,ms){const t=setTimeout(fn,Math.max(20,Math.round(ms*speedScale())));hostTimers.push(t);return t}
function clearHostTimers(){hostTimers.forEach(clearTimeout);hostTimers=[]}
function saveSession(){
 if(!state||!roomCode||!localPlayerId)return;
 try{localStorage.setItem(SESSION_KEY,JSON.stringify({v:25,ts:Date.now(),isHost,roomCode,localPlayerId,state}))}catch(e){console.warn('session save failed',e)}
}
function loadSession(){
 try{const raw=localStorage.getItem(SESSION_KEY);if(!raw)return null;const d=JSON.parse(raw);if(!d||!d.roomCode||!d.localPlayerId||!d.state)return null;if(Date.now()-(d.ts||0)>1000*60*60*48)return null;return d}catch(e){return null}
}
function clearSavedSession(){try{localStorage.removeItem(SESSION_KEY)}catch(e){}}
function refreshResumeCard(){
 if(!els.resumeCard)return;
 if(localHomeView&&state&&roomCode&&localPlayerId){
  const p=state.players?.find(x=>x.id===localPlayerId),phase=state.phase==='playing'?'ゲーム途中':state.phase==='finished'?'結果画面':'ロビー';
  els.resumeCard.classList.remove('hidden');
  if(els.resumeInfo)els.resumeInfo.textContent=`現在接続中 / ${isHost?'ホスト':'参加者'} / 部屋 ${roomCode} / ${p?.name||'プレイヤー'} / ${phase}`;
  if(els.resumeBtn)els.resumeBtn.textContent='対戦画面に戻る';
  if(els.discardResumeBtn)els.discardResumeBtn.textContent='ゲームから抜ける';
  return;
 }
 const d=loadSession();
 if(!d){els.resumeCard.classList.add('hidden');return}
 const p=d.state?.players?.find(x=>x.id===d.localPlayerId),phase=d.state?.phase==='playing'?'ゲーム途中':d.state?.phase==='finished'?'結果画面':'ロビー';
 els.resumeCard.classList.remove('hidden');
 if(els.resumeInfo)els.resumeInfo.textContent=`${d.isHost?'ホスト':'参加者'} / 部屋 ${d.roomCode} / ${p?.name||'プレイヤー'} / ${phase}`;
 if(els.resumeBtn)els.resumeBtn.textContent='前回の対戦に復帰';
 if(els.discardResumeBtn)els.discardResumeBtn.textContent='保存を破棄';
}
function normalizeRestoredHostState(){
 if(!state||state.phase!=='playing')return;
 state.settings=state.settings||{};state.settings.mode=state.settings.mode||'standard';state.settings.speed=state.settings.speed||'normal';state.settings.messageSpeed=state.settings.messageSpeed||'normal';
 state.players.forEach(p=>{ensureFamilyData(p);if(typeof p.cardUsedThisTurn!=='boolean')p.cardUsedThisTurn=false});
 clearHostTimers();
 state.fx=state.fx||{roulette:null,move:null,stage:null,turn:null,landing:null};state.pendingPromotion=state.pendingPromotion||null;
 // Timers disappear on reload. Convert transient animations to a safe resumable state.
 if(state.fx.landing){
  const lf=state.fx.landing,p=state.players.find(x=>x.id===lf.playerId);state.fx.landing=null;state.busy=false;
  if(p){setTimeout(()=>{resolveLandingEffect(p,lf.wraps||0);broadcast()},80);return}
 }
 if(state.pendingPromotion){state.busy=true;state.fx.roulette=state.fx.roulette||{id:state.pendingPromotion.id,playerId:state.pendingPromotion.playerId,result:state.pendingPromotion.result,kind:'promotion'}}
 if(state.pendingRollAdvance){state.pendingRollAdvance.ready=true;state.busy=false;state.fx.roulette=null}
 if(state.fx.move){
  const mv=state.fx.move,p=state.players.find(x=>x.id===mv.playerId),remaining=Math.max(0,(mv.total||0)-(mv.step||0));
  state.fx.move=null;state.busy=false;
  if(p&&remaining>0){setTimeout(()=>startMove(p,remaining),80);return}
  if(p){setTimeout(()=>{resolveLanding(p,0);broadcast()},80);return}
 }
 if(state.fx.turn){state.fx.turn=null;state.busy=false;beginTurnCore()}
 else if(state.fx.stage){
  state.fx.stage=null;state.busy=false;
  const p=currentPlayer();if(p&&!state.message&&!state.pendingChoice)setMessage(p.id,`${stageDef().icon} ${stageDef().name}`,[`${stageDef().name}のフィールドへ戻りました。`],{type:'beginTurn'});
 }else if(state.busy&&!state.message&&!state.pendingChoice&&!state.pendingRollAdvance){state.busy=false;if(!state.turnReady)state.turnReady=true}
}
function handleHostPeerConnection(conn){
 connections.set(conn.peer,conn);
 conn.on('data',msg=>{
  if(msg?.type==='join'){
   const resumeId=msg.resumePlayerId;
   if(resumeId){
    const rp=state.players.find(x=>x.id===resumeId);
    if(rp){rp.cpu=false;rp.resumeHuman=false;rp.cpuType=rp.cpuType||'balanced';conn.playerId=rp.id;conn.send({type:'welcome',playerId:rp.id,state,resumed:true});addLog(`${rp.name}が復帰しました`);broadcast();return}
    if(state.phase!=='lobby'){conn.send({type:'reject',reason:'保存したプレイヤーをこの部屋で確認できませんでした'});return}
   }
   if(state.phase!=='lobby'){conn.send({type:'reject',reason:'ゲームは開始済みです'});return}
   if(state.players.length>=4){conn.send({type:'reject',reason:'満員です'});return}
   const np=makePlayer(cleanName(msg.name));state.players.push(np);conn.playerId=np.id;conn.send({type:'welcome',playerId:np.id,state});addLog(`${np.name}が参加しました`);broadcast();
  }else if(msg?.type==='leave'&&conn.playerId){const lp=state.players.find(x=>x.id===conn.playerId);if(state.phase==='lobby')state.players=state.players.filter(x=>x.id!==conn.playerId);else if(lp){lp.cpu=true;lp.resumeHuman=false;lp.cpuType=lp.cpuType||'balanced';addLog(`${lp.name}が退出したためCPUが引き継ぎます`)}conn.playerId=null;broadcast();try{conn.close()}catch(e){}
  }else if(msg?.type==='action'&&conn.playerId)hostHandleAction(conn.playerId,msg.action)
 });
 conn.on('close',()=>{if(conn.playerId){const p=state.players.find(x=>x.id===conn.playerId);if(state.phase==='lobby')state.players=state.players.filter(x=>x.id!==conn.playerId);else if(p&&!p.cpu){p.cpu=true;p.resumeHuman=true;p.cpuType='balanced';addLog(`${p.name}の通信が切れたためCPUが一時代行します`)}broadcast()}})
}
function openHostPeer(resuming=false,retry=0){
 intentionalDisconnect=false;if(typeof Peer==='undefined'){net('オンライン通信ライブラリを読み込めませんでした。ローカルCPU対戦は遊べます。');return}
 try{peer?.destroy?.()}catch(e){}
 peer=new Peer('life-road-'+roomCode,{debug:0});
 peer.on('open',()=>{reconnectAttempts=0;net(`${resuming?'復帰完了':'部屋を公開中'}：${state.players.length}/4人`);saveSession()});
 peer.on('connection',handleHostPeerConnection);
 peer.on('error',e=>{if(resuming&&e?.type==='unavailable-id'&&retry<6){net('部屋を復旧中...');setTimeout(()=>openHostPeer(true,retry+1),900+retry*350);return}net('通信エラー：'+(e.type||e.message||'不明'))})
}
function connectGuestToHost(resuming=false){
 intentionalDisconnect=false;if(!roomCode)return;if(typeof Peer==='undefined'){net('オンライン通信ライブラリを読み込めませんでした。');return}
 const connectNow=()=>{
  if(hostConn?.open)return;
  hostConn=peer.connect('life-road-'+roomCode,{reliable:true});
  hostConn.on('open',()=>{reconnectAttempts=0;hostConn.send({type:'join',name:state?.players?.find(x=>x.id===localPlayerId)?.name||cleanName(els.joinName?.value),resumePlayerId:resuming?localPlayerId:null});net(resuming?'復帰確認中...':'ホストへ接続中...')});
  hostConn.on('data',msg=>{if(msg?.type==='welcome'){localPlayerId=msg.playerId;state=msg.state;render();saveSession();net(msg.resumed?'対戦に復帰しました':`参加済み：${state.players.length}/4人`)}else if(msg?.type==='snapshot'){state=msg.state;render();saveSession()}else if(msg?.type==='roomClosed'){handleRoomClosed(msg.reason)}else if(msg?.type==='reject'){net(msg.reason);if(!resuming)alert(msg.reason)}});
  hostConn.on('close',()=>{if(intentionalDisconnect)return;net('ホストとの接続が切れました。自動で再接続します…');scheduleGuestReconnect()})
 };
 if(peer?.open){connectNow();return}
 try{peer?.destroy?.()}catch(e){}
 peer=new Peer(undefined,{debug:0});peer.on('open',connectNow);peer.on('error',e=>{net('再接続待ち…');if(resuming)scheduleGuestReconnect();else console.error(e)})
}
function scheduleGuestReconnect(){
 if(isHost||!roomCode||reconnectTimer)return;
 reconnectTimer=setTimeout(()=>{reconnectTimer=null;reconnectAttempts++;if(reconnectAttempts>40){net('再接続できません。最初の画面から「前回の対戦に復帰」を試してください。');return}connectGuestToHost(true)},1400)
}
function resumeLastSession(){
 const d=loadSession();if(!d)return;localHomeView=false;intentionalDisconnect=false;resumeInProgress=true;roomCode=d.roomCode;localPlayerId=d.localPlayerId;state=d.state;isHost=!!d.isHost;
 if(isHost){normalizeRestoredHostState();render();openHostPeer(true)}else{render();connectGuestToHost(true)}
 saveSession();resumeInProgress=false;
}

function resetLocalSessionState(){
 clearTimeout(reconnectTimer);reconnectTimer=null;clearTimeout(cpuTimer);clearHostTimers();
 try{hostConn?.close?.()}catch(e){};try{peer?.destroy?.()}catch(e){};
 hostConn=null;peer=null;connections.clear();roomCode='';localPlayerId='';state=null;isHost=false;localHomeView=false;resumeInProgress=false;reconnectAttempts=0;
}
function handleRoomClosed(reason='ホストがゲームを終了しました。'){
 intentionalDisconnect=true;clearSavedSession();resetLocalSessionState();show(els.home);refreshResumeCard();intentionalDisconnect=false;alert(reason);
}
function showTopScreen(){
 if(!state)return;localHomeView=true;saveSession();show(els.home);refreshResumeCard();window.scrollTo({top:0,behavior:'smooth'});
}
function returnToActiveSession(){
 if(!state)return;localHomeView=false;render();window.scrollTo({top:0,behavior:'smooth'});
}
function leaveCurrentGame(ask=true){
 if(!state){show(els.home);return}
 const msg=isHost?'ホストが抜けると、この部屋は終了します。ゲームから抜けますか？':'ゲームから抜けますか？ あなたのキャラクターはCPUが引き継ぎます。';
 if(ask&&!confirm(msg))return;
 intentionalDisconnect=true;
 if(isHost){connections.forEach(c=>{try{if(c.open)c.send({type:'roomClosed',reason:'ホストがゲームから抜けたため、部屋を終了しました。'})}catch(e){}})}
 else{try{if(hostConn?.open)hostConn.send({type:'leave'})}catch(e){}}
 clearSavedSession();resetLocalSessionState();show(els.home);refreshResumeCard();intentionalDisconnect=false;window.scrollTo({top:0,behavior:'smooth'});
}

function avatarOption(id){return AVATAR_OPTIONS.find(v=>v.id===id)||AVATAR_OPTIONS[0]}
function usedAvatarIds(exceptPlayerId=null){return new Set((state?.players||[]).filter(p=>p.id!==exceptPlayerId).map(p=>p.avatarId).filter(Boolean))}
function firstAvailableAvatarId(exceptPlayerId=null){const used=usedAvatarIds(exceptPlayerId);const free=AVATAR_OPTIONS.find(v=>!used.has(v.id));return (free||AVATAR_OPTIONS[0]).id}
function setPlayerAvatar(p,id){const opt=avatarOption(id);if(!opt||!p)return false;p.avatarId=opt.id;p.avatar=opt.src;return true}
let avatarPickerTargetId=null;
function avatarPickerCanEdit(p){return !!(p&&state?.phase==='lobby'&&(p.id===localPlayerId||(isHost&&p.cpu)))}
function avatarSelectHtml(p){if(!avatarPickerCanEdit(p))return'';const opt=avatarOption(p.avatarId);return `<div class="lobby-avatar-edit"><button class="avatar-change-btn" data-avatar-edit="${p.id}">🎭 キャラ変更</button><span class="avatar-current-label">${esc(opt.name)}</span></div>`}
function openAvatarPicker(playerId){const p=state?.players.find(x=>x.id===playerId);if(!avatarPickerCanEdit(p))return;avatarPickerTargetId=playerId;renderAvatarPicker();els.avatarPicker?.classList.remove('hidden')}
function closeAvatarPicker(){avatarPickerTargetId=null;els.avatarPicker?.classList.add('hidden')}
function renderAvatarPicker(){
 if(!els.avatarPickerGrid||!avatarPickerTargetId)return;
 const p=state.players.find(x=>x.id===avatarPickerTargetId);if(!p){closeAvatarPicker();return}
 const used=usedAvatarIds(p.id);
 els.avatarPickerGrid.innerHTML=AVATAR_OPTIONS.map(v=>{
  const u=used.has(v.id),sel=p.avatarId===v.id;
  const cat={girl:'女の子',boy:'男の子',animal:'動物',quirky:'イロモノ'}[v.cat]||'';
  return `<button class="avatar-choice ${u?'used':''} ${sel?'selected':''}" data-avatar-id="${v.id}" ${u?'disabled':''}><img class="avatar-choice-img" src="${esc(v.src)}" alt="${esc(v.name)}"><div class="avatar-choice-name">${esc(v.name)}</div><div class="avatar-choice-cat">${cat}</div>${u?'<span class="avatar-used-tag">使用中</span>':''}${sel?'<span class="avatar-selected-tag">選択中</span>':''}</button>`
 }).join('');
 els.avatarPickerGrid.querySelectorAll('.avatar-choice:not(.used)').forEach(b=>b.addEventListener('click',()=>{
  const avatarId=b.dataset.avatarId,targetId=avatarPickerTargetId;
  if(isHost)hostHandleAction(localPlayerId,{kind:'setAvatar',targetId,avatarId});else sendAction({kind:'setAvatar',targetId,avatarId});
  closeAvatarPicker()
 }))
}
function makePlayer(name,cpu=false,cpuType='balanced'){
 const idx=state?state.players.length:0;const avatarId=firstAvailableAvatarId();return{id:uuid(),name,color:COLORS[idx%COLORS.length],avatarId,avatar:avatarOption(avatarId).src,token:TOKENS[idx%TOKENS.length],cpu,cpuType,cash:120000,job:null,jobRank:0,jobExp:0,education:'高校',educationChosen:false,careerReviewDone:false,retireDone:false,stats:{knowledge:1,fitness:1,charm:1,communication:1},memory:0,pos:0,laps:0,partner:null,affection:0,married:false,children:0,childProfiles:[],home:null,properties:[],treasures:[],cards:[],cardUsedThisTurn:false,nextRollBonus:0,guard:false,awards:0};
}
function newState(){return{phase:'lobby',players:[],turnIndex:0,stageIndex:0,stageTurnCount:0,pendingChoice:null,message:null,pendingRollAdvance:null,pendingPromotion:null,busy:false,turnReady:false,lastRoll:null,log:['部屋を作成しました。'],settings:{mode:'standard',speed:'normal',messageSpeed:'normal'},boards:[],version:1,fx:{roulette:null,move:null,stage:null,turn:null,landing:null},awards:[],resultPrepared:false};}
function modeDescription(m){const d=MODES[m];if(!d)return'';return`${d.desc}　ターン数：${d.rounds.join(' / ')}`}
function stageBoard(){return state.boards[state.stageIndex]||[]}

const ROUTE_ANCHORS={
 baby:[[8.0,13.0],[23.1,15.0],[36.7,15.4],[49.3,14.1],[62.8,11.9],[78.0,10.6],[93.1,11.1],[95.0,30.2],[81.7,30.3],[66.3,28.6],[51.8,26.5],[39.0,25.5],[26.1,26.4],[11.7,28.5],[6.7,45.0],[19.3,43.1],[32.8,41.1],[48.0,40.5],[63.1,41.8],[76.7,44.0],[89.3,45.4],[95.0,57.6],[80.8,55.8],[68.0,55.7],[55.1,57.3],[40.7,59.4],[25.3,60.5],[10.8,59.7],[5.0,70.6],[19.0,70.9],[34.1,72.8],[47.7,74.8],[60.3,75.5],[73.8,74.3],[88.9,72.1],[93.0,85.2],[80.1,87.3],[65.7,89.1],[50.3,89.4],[35.8,87.8],[22.9,85.6],[10.1,84.5]],
 elementary:[[9.0,11.2],[11.0,23.6],[11.4,35.5],[10.1,48.8],[7.9,63.2],[6.6,77.3],[7.1,91.2],[28.3,93.0],[28.2,79.5],[26.5,65.8],[24.4,52.2],[23.5,39.3],[24.5,27.2],[26.7,13.9],[44.9,7.5],[42.9,19.8],[41.0,33.2],[40.6,48.3],[42.1,63.2],[44.2,75.9],[45.5,87.8],[59.2,92.8],[57.7,80.2],[57.9,68.3],[59.7,55.2],[61.7,40.9],[62.5,26.8],[61.4,12.9],[74.5,7.0],[75.2,20.3],[77.3,34.2],[79.1,47.9],[79.4,60.8],[77.8,72.9],[75.6,86.0],[91.7,90.3],[93.9,78.2],[95.0,64.9],[95.0,49.8],[93.2,34.9],[91.2,22.0],[90.5,10.0]],
 middle:[[5.0,12.0],[20.1,14.3],[33.7,14.9],[46.3,13.3],[59.8,10.7],[75.0,9.1],[92.1,9.7],[95.0,29.7],[82.7,29.7],[67.3,27.7],[52.8,25.2],[40.0,24.0],[27.1,25.1],[12.7,27.6],[5.0,44.4],[15.3,42.1],[28.8,39.7],[44.0,39.1],[59.1,40.6],[72.7,43.2],[87.3,44.9],[95.0,57.5],[81.8,55.4],[69.0,55.2],[56.1,57.2],[41.7,59.7],[26.3,61.0],[11.8,60.0],[5.0,70.1],[17.0,70.5],[32.1,72.8],[45.7,75.2],[58.3,76.0],[71.8,74.5],[88.9,71.9],[95.0,85.9],[80.1,88.3],[65.7,90.6],[50.3,90.8],[35.8,89.0],[22.9,86.4],[10.1,85.0]],
 high:[[9.2,12.9],[22.8,14.2],[36.0,13.5],[49.5,11.4],[63.4,9.9],[77.9,10.3],[92.9,12.3],[88.1,29.1],[74.7,28.7],[61.7,26.8],[49.3,25.0],[37.5,25.1],[25.9,26.9],[14.1,28.8],[18.9,43.9],[28.9,42.1],[39.5,40.2],[50.5,40.0],[61.5,41.6],[72.1,43.6],[82.1,44.1],[83.9,58.4],[73.3,56.4],[62.8,55.9],[52.2,57.3],[40.9,59.4],[29.1,60.2],[16.9,59.0],[11.1,71.7],[25.1,70.8],[38.6,72.0],[51.6,74.1],[64.0,75.2],[76.3,74.3],[88.8,72.2],[95.2,85.8],[80.7,86.7],[65.7,88.8],[50.3,90.2],[35.0,89.5],[20.2,87.5],[6.0,85.9]],
 young:[[10.5,15.1],[23.1,14.8],[35.9,12.9],[49.2,11.1],[63.2,11.1],[77.5,12.8],[91.8,14.7],[83.1,30.0],[71.7,28.2],[60.9,26.3],[50.6,25.9],[40.5,27.5],[30.2,29.5],[19.3,30.2],[6.7,43.5],[21.6,41.5],[36.8,40.8],[51.9,42.2],[66.6,44.3],[80.7,45.2],[94.3,44.1],[78.7,56.7],[69.9,55.8],[60.9,56.9],[51.2,59.0],[41.0,60.2],[30.5,59.4],[20.0,57.3],[10.0,70.8],[24.1,71.6],[37.6,73.7],[50.7,75.1],[63.7,74.6],[76.9,72.6],[90.8,71.0],[87.2,85.4],[74.7,87.4],[62.0,89.0],[49.4,88.8],[37.4,86.9],[25.9,85.1],[14.9,85.0]],
 mature:[[9.0,10.2],[11.5,22.6],[12.1,34.5],[10.4,47.8],[7.6,62.2],[5.9,76.3],[6.5,90.2],[28.9,93.0],[28.8,80.5],[26.6,66.8],[23.9,53.2],[22.8,40.3],[24.1,28.2],[26.8,14.9],[45.4,7.0],[42.8,17.8],[40.4,31.2],[39.9,46.3],[41.8,61.2],[44.6,73.9],[46.2,85.8],[59.0,92.8],[57.0,80.2],[57.3,68.3],[59.6,55.2],[62.2,40.9],[63.2,26.8],[61.7,12.9],[73.8,7.0],[74.7,20.3],[77.4,34.2],[79.7,47.9],[80.0,60.8],[78.0,72.9],[75.3,86.0],[91.4,91.3],[94.1,79.2],[95.0,65.9],[95.0,50.8],[93.2,35.9],[90.6,23.0],[89.8,11.0]],
 senior:[[11.0,14.0],[26.1,16.7],[39.7,17.4],[52.3,15.5],[65.8,12.5],[81.0,10.6],[95.0,11.3],[90.1,32.1],[76.7,32.2],[61.3,29.8],[46.8,26.9],[34.0,25.5],[21.1,26.8],[6.7,29.8],[13.7,46.8],[26.3,44.1],[39.8,41.4],[55.0,40.6],[70.1,42.4],[83.7,45.4],[95.0,47.4],[87.3,57.4],[73.8,54.9],[61.0,54.8],[48.1,57.0],[33.7,60.0],[18.3,61.5],[5.0,60.3],[10.8,69.7],[26.0,70.1],[41.1,72.7],[54.7,75.6],[67.3,76.5],[80.8,74.8],[94.9,71.7],[90.0,84.5],[78.1,87.4],[63.7,90.0],[48.3,90.3],[33.8,88.1],[20.9,85.1],[8.1,83.5]]
};
function routePoints(stageId,count=42){
 const a=ROUTE_ANCHORS[stageId]||ROUTE_ANCHORS.young;if(a.length===count)return a;
 const out=[];for(let i=0;i<count;i++){const t=i*(a.length-1)/(count-1),j=Math.floor(t),f=t-j,p=a[j],q=a[Math.min(a.length-1,j+1)];out.push([p[0]+(q[0]-p[0])*f,p[1]+(q[1]-p[1])*f])}return out
}
function spacePalette(type){return({start:'#f3c94f',plus:'#7bc96f',minus:'#ef7f83',grow:'#9b86e8',social:'#e88ec7',event:'#71a9e9',chance:'#d58be0',card:'#6f98dc',payday:'#f1b548',career:'#658fd3',romance:'#ec8baa',property:'#71b9c9',treasure:'#e1b84d',submap:'#6fc79b',family:'#e6a36e'}[type]||'#7aa9df')}
function buildStageBoard(si,size){
 const st=STAGES[si],a=[];
 const early=['plus','social','grow','event','plus','grow','minus','social','event','plus'];
 const adult=['plus','career','social','minus','payday','event','grow','romance','plus','property','card','career'];
 const senior=['social','plus','family','event','grow','minus','plus','chance','social','event'];
 for(let i=0;i<size;i++){
  let type=i===0?'start':(si<4?early[(i+si*2)%early.length]:si===6?senior[i%senior.length]:adult[(i+si)%adult.length]);
  if(i>0&&i%13===0)type='chance';
  if(i>0&&i%17===0)type='card';
  if(i>0&&i%23===0)type='submap';
  if(si>=1&&i>0&&i%29===0)type='treasure';
  if(si>=4&&i>0&&i%8===0)type='payday';
  const meta=SPACE_META[type]||SPACE_META.event;
  a.push({i,type,title:meta[1],icon:meta[0],stage:st.id});
 }
 return a;
}
function boardPosStyle(i){const cols=8,row=Math.floor(i/cols),raw=i%cols,col=row%2===0?raw:cols-1-raw;return`--gc:${col+1};--gr:${row+1}`}
function boardCoord(i){const cols=8,row=Math.floor(i/cols),raw=i%cols,col=row%2===0?raw:cols-1-raw;return{row,col}}
function spaceDirClass(i,len){if(i>=len-1)return 'end';const a=boardCoord(i),b=boardCoord(i+1);if(b.row===a.row&&b.col>a.col)return 'dir-right';if(b.row===a.row&&b.col<a.col)return 'dir-left';return 'dir-down'}
function salaryNow(p){return p.job?Math.round(p.job.base*(1+.22*(p.jobRank-1))):0}
function partnerIncome(p){return p.married&&p.partner?Math.round(p.partner.income||0):0}
function childList(p){return Array.isArray(p.childProfiles)?p.childProfiles:[]}
function childCount(p){return childList(p).length||(Number(p.children)||0)}
function adultChildIncome(p){return childList(p).reduce((sum,c)=>sum+(c.adult?(c.income||0):0),0)}
function familyIncome(p){return partnerIncome(p)+adultChildIncome(p)}
function totalChildrenCount(){return state?.players?.reduce((sum,p)=>sum+childCount(p),0)||0}
function isLegacyGeneratedFamilyArt(src){return /^assets\/(?:family|child)\d+\.webp$/.test(src||'')}
function usedFamilyPortraits(ignoreEntity=null){
 const used=new Set((state?.players||[]).map(p=>p.avatar).filter(Boolean));
 for(const p of state?.players||[]){
  if(p.partner&&p.partner!==ignoreEntity&&p.partner.avatar&&!isLegacyGeneratedFamilyArt(p.partner.avatar))used.add(p.partner.avatar);
  for(const c of childList(p))if(c!==ignoreEntity&&c.avatar&&!isLegacyGeneratedFamilyArt(c.avatar))used.add(c.avatar);
 }
 return used;
}
function availableFamilyPortraits(ignoreEntity=null){
 const used=usedFamilyPortraits(ignoreEntity),free=ALL_EXISTING_CHARACTER_ART.filter(x=>!used.has(x.src)),friendly=free.filter(x=>x.family);
 return friendly.length?friendly:free;
}
function nextFamilyPortrait(ignoreEntity=null,extraUsed=new Set()){
 let pool=availableFamilyPortraits(ignoreEntity).filter(x=>!extraUsed.has(x.src));
 if(!pool.length)pool=ALL_EXISTING_CHARACTER_ART.filter(x=>!extraUsed.has(x.src));
 return pick(pool)?.src||AVATARS[0];
}
function makeChildProfile(p){
 const usedNames=new Set((state?.players||[]).flatMap(x=>childList(x).map(c=>c.name))),names=CHILD_NAMES.filter(n=>!usedNames.has(n));
 return{id:uuid(),name:pick(names.length?names:CHILD_NAMES),avatar:nextFamilyPortrait(),age:0,adult:false,job:null,income:0};
}
function ensureFamilyData(p){
 if(!p)return;
 if(p.partner?.id){
  const def=PARTNERS.find(x=>x.id===p.partner.id);
  if(def)p.partner={...def,...p.partner,job:p.partner.job||def.job,income:p.partner.income||def.income};
  if(!p.partner.avatar||isLegacyGeneratedFamilyArt(p.partner.avatar))p.partner.avatar=nextFamilyPortrait(p.partner);
 }
 if(!Array.isArray(p.childProfiles)){
  p.childProfiles=[];const legacy=Math.max(0,Number(p.children)||0);
  for(let i=0;i<legacy;i++)p.childProfiles.push(makeChildProfile(p));
 }
 for(const c of p.childProfiles)if(!c.avatar||isLegacyGeneratedFamilyArt(c.avatar))c.avatar=nextFamilyPortrait(c);
 p.children=p.childProfiles.length;
}
function growChildrenForStage(stageIndex){
 if(stageIndex<5)return[];
 const addYears=stageIndex===5?10:12,notices=[];
 for(const p of state.players){
  ensureFamilyData(p);
  for(const c of p.childProfiles){
   if(c.adult)continue;
   c.age=(c.age||0)+addYears;
   if(c.age>=18){
    c.adult=true;
    const j=pick(CHILD_JOBS);c.job=j[0];c.income=j[1]+rnd(15001);
    notices.push(`${p.name}の子ども・${c.name}が成人し、${c.job}として働き始めた`);
   }
  }
 }
 return notices;
}
function passiveIncome(p){return p.properties.reduce((s,id)=>s+(PROPS.find(x=>x.id===id)?.income||0),0)}
function assetScore(p){return p.cash+(p.home?.value||0)+p.properties.reduce((s,id)=>s+(PROPS.find(x=>x.id===id)?.value||0),0)+p.treasures.reduce((s,t)=>s+(t.appraised||0),0)+p.awards}
function applyStats(p,d={}){for(const k of ['knowledge','fitness','charm','communication'])p.stats[k]=clamp(p.stats[k]+(d[k]||0),0,30)}
function jobEligible(p,j){return Object.entries(j.req).every(([k,v])=>p.stats[k]>=v)}
function reqText(r){return Object.entries(r).map(([k,v])=>`${{knowledge:'知力',fitness:'体力',charm:'魅力',communication:'交流'}[k]} ${v}`).join(' / ')}
function paramLabel(k){return{knowledge:'知力',fitness:'体力',charm:'魅力',communication:'交流'}[k]||k}
function spaceIcon(type){return SPACE_ICONS[type]||SPACE_ICONS.event}
function promotionRequirements(p,targetRank){
 if(!p.job)return null;
 const req={};for(const [k,v] of Object.entries(p.job.req||{}))req[k]=v+Math.max(0,targetRank-2);
 const expTable={2:3,3:6,4:10,5:15};
 return{req,needExp:expTable[targetRank]||999};
}
function promotionReqText(req){return Object.entries(req||{}).map(([k,v])=>`${paramLabel(k)}${v}`).join('・')}
function rankUpCheck(p){
 if(!p.job||p.jobRank>=5)return null;
 const targetRank=p.jobRank+1,plan=promotionRequirements(p,targetRank);if(!plan||p.jobExp<plan.needExp)return null;
 const meets=Object.entries(plan.req).every(([k,v])=>(p.stats[k]||0)>=v);
 if(!meets)return{kind:'blocked',targetRank,plan};
 const needsRoulette=targetRank>=4||(targetRank>=3&&p.job.tag==='risk');
 if(!needsRoulette){
  p.jobExp-=plan.needExp;p.jobRank=targetRank;const bonus=targetRank*30000;p.cash+=bonus;
  return{kind:'success',text:`${p.job.name}がランク${p.jobRank}にアップ！ 昇格祝い +${money(bonus)}`};
 }
 const excess=Object.entries(plan.req).reduce((sum,[k,v])=>sum+Math.max(0,(p.stats[k]||0)-v),0);
 const base=targetRank===3?6:targetRank===4?5:4;
 const successMax=clamp(base+(p.job.tag==='risk'?-1:0)+Math.floor(excess/2),2,9);
 return{kind:'roulette',targetRank,needExp:plan.needExp,successMax,plan};
}
function finishPromotionSuccess(p,targetRank,needExp){
 p.jobExp=Math.max(0,p.jobExp-needExp);p.jobRank=targetRank;const bonus=targetRank*30000;p.cash+=bonus;
 return`${p.job.name}がランク${targetRank}にアップ！ 昇格祝い +${money(bonus)}`;
}
function beginPromotionRoulette(p,check,lines,speaker){
 const result=1+rnd(10),id=uuid();state.turnReady=false;state.busy=true;
 state.pendingPromotion={id,playerId:p.id,targetRank:check.targetRank,needExp:check.needExp,successMax:check.successMax,result,lines,speaker};
 state.fx.roulette={id,playerId:p.id,result,kind:'promotion'};broadcast();
}
function finishPromotionRoulette(id){
 const pr=state?.pendingPromotion;if(!pr||pr.id!==id)return;const p=state.players.find(x=>x.id===pr.playerId);if(!p){state.pendingPromotion=null;state.fx.roulette=null;state.busy=false;broadcast();return}
 const ok=pr.result<=pr.successMax,lines=[...(pr.lines||[])];
 lines.push({text:`昇格ルーレットは「${pr.result}」！`,tone:ok?'good':'bad'});
 if(ok)lines.push({text:finishPromotionSuccess(p,pr.targetRank,pr.needExp),tone:'good'});
 else lines.push({text:'今回は昇格を逃した。経験は残るので、次の機会に再挑戦できる。',tone:'bad'});
 state.pendingPromotion=null;state.fx.roulette=null;state.busy=false;messageResult(p.id,pr.speaker||'昇格チャレンジ',lines);broadcast();
}
function finishWithPromotion(p,rank,baseLines,speaker,finish){
 if(!rank){finish(baseLines,speaker);return true}
 if(rank.kind==='success'){finish([...baseLines,{text:rank.text,tone:'good'}],speaker);return true}
 if(rank.kind==='blocked'){finish([...baseLines,{text:'昇格候補に上がったが、今はまだ実力を磨く時期のようだ。'}],speaker);return true}
 if(rank.kind==='roulette'){beginPromotionRoulette(p,rank,baseLines,speaker);return true}
 return false
}

function playerCard(p,active=false,lobby=false){
 const c=p.cpu?`${cpuDef(p.cpuType).icon} CPU`:'👤 人間',job=p.job?`${p.job.name} Lv.${p.jobRank}`:'未就職';
 return `<div class="player-card ${active?'active':''} ${lobby?'lobbycard':''}" style="border-color:${p.color};--pc:${p.color}"><div class="player-card-top"><div class="player-avatar-thumb"><img class="thumb-face" src="${esc(p.avatar||AVATARS[0])}" alt=""></div><div class="player-card-main"><div class="player-name">${esc(p.name)}</div><div class="player-meta"><span class="pill">${c}</span>${lobby?'':`<span class="pill">周回 ${p.laps}</span>`}</div>${lobby?`<div class="statsline">${p.cpu?esc(cpuDef(p.cpuType).name):'プレイヤー'} / 初期資金 ${money(p.cash)}</div>`:`<div class="statsline">${esc(job)} / ${money(p.cash)}<br>${p.married?'💍結婚':'未婚'}・子${childCount(p)}人・物件${p.properties.length}</div><div class="param-grid"><span class="param">🧠 知力 ${p.stats.knowledge}</span><span class="param">💪 体力 ${p.stats.fitness}</span><span class="param">✨ 魅力 ${p.stats.charm}</span><span class="param">🗣 交流 ${p.stats.communication}</span></div>`}</div></div></div>`}

let boardPan={x:0,y:0,anchorKey:'',dragging:false,startX:0,startY:0,baseX:0,baseY:0};
function resetBoardPan(nextKey=''){boardPan.x=0;boardPan.y=0;boardPan.anchorKey=nextKey||''}
function canDragBoard(){return !!(state&&state.phase==='playing'&&!state.busy&&!state.message&&!state.pendingChoice&&!state.pendingRollAdvance&&!state.fx?.turn&&!state.fx?.landing)}
function updateBoardDragUi(){if(!els.boardPanel)return;els.boardPanel.classList.toggle('drag-ready',canDragBoard());els.boardPanel.classList.toggle('dragging',!!boardPan.dragging)}
function setupBoardDrag(){if(!els.boardPanel||els.boardPanel.dataset.dragReady)return;els.boardPanel.dataset.dragReady='1';const end=()=>{if(!boardPan.dragging)return;boardPan.dragging=false;updateBoardDragUi()};els.boardPanel.addEventListener('pointerdown',e=>{if(!canDragBoard())return;boardPan.dragging=true;boardPan.startX=e.clientX;boardPan.startY=e.clientY;boardPan.baseX=boardPan.x;boardPan.baseY=boardPan.y;try{els.boardPanel.setPointerCapture(e.pointerId)}catch(err){}updateBoardDragUi();e.preventDefault()});els.boardPanel.addEventListener('pointermove',e=>{if(!boardPan.dragging)return;boardPan.x=boardPan.baseX+(e.clientX-boardPan.startX);boardPan.y=boardPan.baseY+(e.clientY-boardPan.startY);focusBoardCamera(true)});els.boardPanel.addEventListener('pointerup',end);els.boardPanel.addEventListener('pointercancel',end);updateBoardDragUi()}
function render(){if(!state)return;saveSession();if(localHomeView){show(els.home);refreshResumeCard();updateBoardDragUi();if(isHost)maybeRunCpu();return}if(state.phase==='lobby'){show(els.lobby);renderLobby()}else if(state.phase==='playing'){show(els.game);renderGame()}else if(state.phase==='finished'){prepareResults();show(els.result);renderResult()}updateBoardDragUi();if(isHost)maybeRunCpu()}
function lobbyEntryCard(p){
 const mine=p.id===localPlayerId&&!p.cpu,kind=p.cpu?`${cpuDef(p.cpuType).icon} ${cpuDef(p.cpuType).name} CPU`:'👤 プレイヤー',opt=avatarOption(p.avatarId);
 return `<div class="lobby-entry-card ${mine?'mine':''}" style="--pc:${p.color}"><div class="lobby-entry-top"><div class="lobby-mini-avatar"><img src="${esc(p.avatar||AVATARS[0])}" alt=""></div><div class="lobby-entry-heading"><div class="lobby-entry-name">${esc(p.name)}</div><div class="lobby-entry-kind">${esc(kind)}</div></div></div><div class="lobby-character-stage"><img class="lobby-character-full" src="${esc(p.avatar||AVATARS[0])}" alt="${esc(opt.name)}"></div><div class="lobby-entry-info"><div class="lobby-entry-money">初期資金 ${money(p.cash)}</div>${avatarSelectHtml(p)}${isHost&&p.cpu?`<button class="btn small warn cpu-remove" data-id="${p.id}" style="width:100%">CPU削除</button>`:''}</div></div>`;
}
function renderLobby(){state.settings=state.settings||{};state.settings.mode=state.settings.mode||'standard';state.settings.speed=state.settings.speed||'normal';state.settings.messageSpeed=state.settings.messageSpeed||'normal';state.players.forEach((p,i)=>{if(!p.avatarId){const opt=AVATAR_OPTIONS.find(v=>v.src===p.avatar)||AVATAR_OPTIONS[i%AVATAR_OPTIONS.length];p.avatarId=opt.id;p.avatar=opt.src}});els.roomCode.textContent=roomCode;els.hostLobby.classList.toggle('hidden',!isHost);els.start.classList.toggle('hidden',!isHost);els.mode.disabled=!isHost;els.speed.disabled=!isHost;if(els.messageSpeed)els.messageSpeed.disabled=!isHost;els.mode.value=state.settings.mode;els.speed.value=state.settings.speed;if(els.messageSpeed)els.messageSpeed.value=state.settings.messageSpeed;els.modeInfo.textContent=modeDescription(state.settings.mode)+'　/　キャラクターは重複なし・早い者勝ち';els.lobbyPlayers.innerHTML=state.players.map(lobbyEntryCard).join('')+Array.from({length:Math.max(0,4-state.players.length)},()=>'<div class="lobby-empty-slot"><div>参加待ち…<br><span class="sub">キャラクターがここに表示されます</span></div></div>').join('');els.start.disabled=state.players.length<1;els.addCpu.disabled=!isHost||state.players.length>=4;els.fillCpu.disabled=!isHost||state.players.length>=4;net(isHost?`ホスト中：${state.players.length}/4人`:`参加済み：${state.players.length}/4人`);document.querySelectorAll('.cpu-remove').forEach(b=>b.addEventListener('click',()=>removeCpu(b.dataset.id)));document.querySelectorAll('[data-avatar-edit]').forEach(b=>b.addEventListener('click',()=>openAvatarPicker(b.dataset.avatarEdit)));if(avatarPickerTargetId&&!els.avatarPicker.classList.contains('hidden'))renderAvatarPicker()}
function renderGame(){
 const st=stageDef(),cp=currentPlayer(),rounds=modeDef().rounds[state.stageIndex],round=Math.min(rounds,Math.floor(state.stageTurnCount/state.players.length)+1),theme=STAGE_THEME[st.id];
 document.documentElement.style.setProperty('--stageA',theme[0]);document.documentElement.style.setProperty('--stageB',theme[1]);
 document.documentElement.style.setProperty('--boardBg',`url('${STAGE_BACKGROUNDS[st.id]||STAGE_BACKGROUNDS.young}')`);
 els.eraIcon.textContent=st.icon;els.eraName.textContent=st.name;els.eraFlavor.textContent=STAGE_FLAVOR[st.id];els.roundText.textContent=`第${round}/${rounds}ラウンド`;els.fieldInfo.textContent=`専用${stageBoard().length}マスマップ・規定ラウンド終了まで周回します`;els.roundDots.innerHTML=Array.from({length:rounds},(_,i)=>`<span class="round-dot ${i<round-1?'done':i===round-1?'now':''}"></span>`).join('');
 els.gamePlayers.innerHTML=state.players.map((p,i)=>playerCard(p,i===state.turnIndex)).join('');renderBoard();els.turnName.textContent=cp?.name||'-';els.turnStage.textContent=`${st.icon} ${st.name}`;const mine=cp&&cp.id===localPlayerId&&!cp.cpu,rollWait=state.pendingRollAdvance;els.rollBtn.disabled=!mine||!state.turnReady||state.busy||!!state.message||!!state.pendingChoice||!!rollWait;els.rollBtn.textContent=mine?'ルーレットを回す':cp?.cpu?'CPUが考え中…':'相手の手番です';els.hint.textContent=rollWait?(rollWait.ready?(mine?'盤面をクリック / タップして進みます':`${cp?.name||'相手'}の操作待ち`):'出目を確認中…'):state.message?'メッセージ進行中':state.pendingChoice?'選択中':state.busy?'演出中…':mine&&state.turnReady?'あなたの手番です':cp?.cpu?'CPUの手番です':'手番を待っています';els.log.innerHTML=state.log.map(x=>`<div class="logline">${esc(x)}</div>`).join('');
 const pp=cp||state.players[0];
 if(pp){els.portraitImg.src=pp.avatar||AVATARS[0];els.portraitName.textContent=pp.name;els.portraitRole.textContent=pp.job?`${pp.job.name} Lv.${pp.jobRank}`:(pp.cpu?`${cpuDef(pp.cpuType).name} CPU`:'プレイヤー');els.portraitBadge.textContent=mine?'YOUR TURN':'NOW';els.portraitStats.innerHTML=`<div class="portrait-stat">🧠 <span>知力</span><strong>${pp.stats.knowledge}</strong></div><div class="portrait-stat">💪 <span>体力</span><strong>${pp.stats.fitness}</strong></div><div class="portrait-stat">✨ <span>魅力</span><strong>${pp.stats.charm}</strong></div><div class="portrait-stat">🗣 <span>交流</span><strong>${pp.stats.communication}</strong></div>`;ensureFamilyData(pp);els.portraitSub.innerHTML=`<strong>${money(pp.cash)}</strong> / 思い出 ${pp.memory}pt${pp.partner?`<br>パートナー：${esc(pp.partner.name)} 好感度${pp.affection}${pp.married?`・結婚 / 収入 ${money(partnerIncome(pp))}`:''}`:''}${childCount(pp)?`<br>家族：子ども ${childCount(pp)}人${adultChildIncome(pp)?` / 成人子収入 ${money(adultChildIncome(pp))}`:''}`:''}`}
 setupBoardDrag();renderCards();renderAssets();renderChoice();renderMessage();renderCurtain();renderTurnBanner();renderRollWait();renderLandingPop();handleFx();
}
function renderBoard(){
 const b=stageBoard(),cp=currentPlayer(),pts=routePoints(stageDef().id,b.length),mapSrc=STAGE_BACKGROUNDS[stageDef().id]||STAGE_BACKGROUNDS.young;
 els.boardPanel.dataset.watermark='';
 const closed=[...pts,pts[0]],poly=closed.map(p=>`${p[0]},${p[1]}`).join(' ');
 const mapImg=`<img class="stage-map-image" src="${mapSrc}" alt="${esc(stageDef().name)}の盤面">`;
 const routeSvg=`<svg class="route-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="route-shadow" points="${poly}"/><polyline class="route-main" points="${poly}"/></svg>`;
 const nodes=b.map((s,i)=>{const [x,y]=pts[i],ps=state.players.filter(p=>p.pos===s.i),active=cp?.pos===s.i;return `<div class="map-node ${s.type} ${active?'current':''}" style="left:${x}%;top:${y}%;--nodeColor:${spacePalette(s.type)}" id="space-${s.i}" title="${s.i===0?'START':s.i} ${esc(s.title)}"><span class="node-num">${s.i===0?'S':s.i}</span><img class="node-icon" src="${spaceIcon(s.type)}" alt=""><div class="map-tokens">${ps.map(p=>`<span class="map-token ${cp?.id===p.id?'active':''}" style="--tokenColor:${p.color}" title="${esc(p.name)}"><img src="${esc(p.token||TOKENS[0])}" alt=""></span>`).join('')}</div></div>`}).join('');
 els.board.innerHTML=mapImg+routeSvg+nodes;
 requestAnimationFrame(()=>requestAnimationFrame(()=>focusBoardCamera()));
}
function focusBoardCamera(skipAnchorReset=false){
 if(!state||state.phase!=='playing'||!els.board||!els.boardPanel)return;
 const b=stageBoard(); if(!b.length)return;
 const moverId=state.fx?.move?.playerId||state.fx?.landing?.playerId; const p=(moverId?state.players.find(x=>x.id===moverId):null)||currentPlayer(); if(!p)return;
 const pts=routePoints(stageDef().id,b.length),pt=pts[p.pos]||pts[0];
 const rect=els.boardPanel.getBoundingClientRect(); if(!rect.width||!rect.height)return;
 const isSmall=window.innerWidth<900,verySmall=window.innerWidth<600,focused=!!(state.turnReady||state.pendingRollAdvance||state.fx?.move||state.fx?.landing),moving=!!state.fx?.move; const scale=isSmall?(verySmall?(focused?(moving?1.78:1.62):1.02):(focused?(moving?1.92:1.72):1.04)):(focused?(moving?2.95:2.72):1.08);
 const worldW=rect.width,worldH=rect.height;
 const anchorKey=`${state.stageIndex}:${state.turnIndex}:${p.id}:${state.fx?.move?1:0}`;
 if(!skipAnchorReset&&boardPan.anchorKey!==anchorKey) resetBoardPan(anchorKey);
 const minX=worldW-worldW*scale,minY=worldH-worldH*scale;
 let tx=worldW/2-(pt[0]/100)*worldW*scale;
 let ty=worldH/2-(pt[1]/100)*worldH*scale;
 tx=clamp(tx+boardPan.x,minX,0); ty=clamp(ty+boardPan.y,minY,0);
 els.board.style.setProperty('--cam-x',`${tx}px`); els.board.style.setProperty('--cam-y',`${ty}px`); els.board.style.setProperty('--cam-scale',scale); updateBoardDragUi();
}
function renderRollWait(){
 const r=state?.pendingRollAdvance;if(!els.rollWaitLayer)return;
 if(!r||!r.ready){els.rollWaitLayer.classList.add('hidden');els.rollWaitLayer.classList.remove('mine','sending');els.rollWaitLayer.removeAttribute('aria-disabled');return}
 const owner=state.players.find(p=>p.id===r.playerId),mine=owner?.id===localPlayerId&&!owner?.cpu;
 els.rollWaitLayer.classList.remove('hidden');els.rollWaitLayer.classList.toggle('mine',!!mine);els.rollWaitLayer.classList.toggle('sending',!!rollAdvanceLock);
 els.rollWaitLayer.setAttribute('aria-disabled',mine?'false':'true');
 els.rollWaitText.textContent=mine?(rollAdvanceLock?'移動を開始します…':'クリック / タップでコマを進める'):`${owner?.name||'プレイヤー'}の操作待ち`;
}
function showBoardRollPop(result){if(!els.boardRollPop)return;clearTimeout(boardRollPopTimer);els.boardRollPop.textContent=String(result);els.boardRollPop.classList.remove('hidden','show');void els.boardRollPop.offsetWidth;els.boardRollPop.classList.add('show');boardRollPopTimer=setTimeout(()=>{els.boardRollPop.classList.remove('show');els.boardRollPop.classList.add('hidden')},920)}
function landingSpaceLabel(type){const meta=SPACE_META[type]||SPACE_META.event;return `${meta?.[1]||'出来事'}マス`}
function renderLandingPop(){
 const f=state?.fx?.landing;if(!els.spaceLandingPop)return;
 if(!f){els.spaceLandingPop.classList.add('hidden');els.spaceLandingPop.classList.remove('show');landingPopKey='';return}
 if(els.spaceLandingText)els.spaceLandingText.textContent=f.label||landingSpaceLabel(f.type);
 if(els.spaceLandingIcon){els.spaceLandingIcon.src=spaceIcon(f.type||'event');els.spaceLandingIcon.alt=f.label||''}
 els.spaceLandingPop.classList.remove('hidden');
 if(landingPopKey!==f.id){landingPopKey=f.id;els.spaceLandingPop.classList.remove('show');void els.spaceLandingPop.offsetWidth;els.spaceLandingPop.classList.add('show')}
}
function tryAdvancePendingRoll(){
 const r=state?.pendingRollAdvance;if(!r||!r.ready)return false;
 const owner=state.players.find(p=>p.id===r.playerId);if(!owner||owner.id!==localPlayerId||owner.cpu)return false;
 // The confirmation is intentionally handled as a first-class action, not as a generic board click.
 // This avoids touch/click suppression and board-drag handlers swallowing the input on mobile.
 if(rollAdvanceLock)return true;
 if(isHost){
  rollAdvanceLock=true;renderRollWait();hostHandleAction(localPlayerId,{kind:'advanceRoll'});
  setTimeout(()=>{rollAdvanceLock=false;if(state?.pendingRollAdvance)renderRollWait()},450);
  return true;
 }
 if(hostConn?.open){
  rollAdvanceLock=true;renderRollWait();hostConn.send({type:'action',action:{kind:'advanceRoll'}});
  setTimeout(()=>{rollAdvanceLock=false;if(state?.pendingRollAdvance)renderRollWait()},700);
  return true;
 }
 net('ホストへ再接続中…');scheduleGuestReconnect();return true;
}
function renderCards(){
 const p=state.players.find(x=>x.id===localPlayerId);if(!p){els.cards.innerHTML='<span class="sub">-</span>';return}
 if(typeof p.cardUsedThisTurn!=='boolean')p.cardUsedThisTurn=false;
 const canBase=currentPlayer()?.id===p.id&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice&&!p.cpu&&!p.cardUsedThisTurn;
 if(!p.cards.length){els.cards.innerHTML='<span class="sub">カードなし</span>';return}
 els.cards.innerHTML=`<div class="card-rule-note">1ターンに使用できるカードは1枚まで</div>`+p.cards.map((id,i)=>{const c=CARDS.find(x=>x.id===id);if(!c)return'';const turnLabel=c.turnCost==='end'?'使用すると手番終了':'使用後も手番継続';return`<div class="inventory-card"><div class="inventory-card-head"><strong>${esc(c.name)}</strong><span class="card-turn-tag ${c.turnCost==='end'?'end':'free'}">${turnLabel}</span></div><div class="inventory-card-desc">${esc(c.desc)}</div><button class="btn small use-card" data-i="${i}" ${canBase?'':'disabled'}>${p.cardUsedThisTurn?'このターンは使用済み':'使用する'}</button></div>`}).join('');
 document.querySelectorAll('.use-card').forEach(b=>b.addEventListener('click',()=>sendAction({kind:'useCard',index:Number(b.dataset.i)})))
}
function renderAssets(){const p=state.players.find(x=>x.id===localPlayerId)||currentPlayer();if(!p){els.assets.innerHTML='-';return}ensureFamilyData(p);const fam=familyIncome(p),kids=childList(p);els.assets.innerHTML=`<div>現金：<strong>${money(p.cash)}</strong></div><div>本人給料：${money(salaryNow(p))}</div><div>家族収入：${money(fam)}${p.married?`（配偶者 ${money(partnerIncome(p))}${adultChildIncome(p)?` + 成人した子 ${money(adultChildIncome(p))}`:''}）`:''}</div><div>住まい：${p.home?esc(p.home.name):'賃貸'}</div><div>物件：${p.properties.length}件 / お宝：${p.treasures.length}個</div><div>思い出：${p.memory}pt</div><div>子ども：${childCount(p)}人（全体 ${totalChildrenCount()}/15）</div>${p.partner?`<div class="family-card"><img src="${esc(p.partner.avatar||AVATARS[0])}" alt=""><div><strong>${esc(p.partner.name)}</strong><br><span>${p.married?'配偶者':'交際中'} / ${esc(p.partner.job||'仕事中')}</span>${p.married?`<br><span>家計収入 ${money(partnerIncome(p))}</span>`:''}</div></div>`:''}${kids.length?`<div class="family-kids">${kids.map(c=>`<div class="family-kid"><img src="${esc(c.avatar)}" alt=""><div><strong>${esc(c.name)}</strong><br><span>${c.adult?`成人・${esc(c.job||'就職')} / ${money(c.income||0)}`:`${c.age||0}歳・成長中`}</span></div></div>`).join('')}</div>`:''}` }
function renderChoice(){const c=state.pendingChoice;if(!c){els.choice.classList.add('hidden');return}els.choice.classList.remove('hidden');const owner=state.players.find(p=>p.id===c.playerId),mine=c.playerId===localPlayerId&&!owner?.cpu;els.choiceTitle.textContent=c.title;els.choiceText.textContent=c.text||'';els.choiceStatus.textContent=mine?'あなたが選択してください':`${owner?.name||'プレイヤー'}が選択中です`;els.choiceList.innerHTML='';c.options.forEach((o,i)=>{const b=document.createElement('button');b.className='choicebtn';b.disabled=!mine;b.innerHTML=`${o.avatar?`<img class="choice-avatar" src="${esc(o.avatar)}" alt="">`:''}<span class="choice-copy"><strong>${esc(o.label)}</strong><span class="note">${esc(o.desc||'')}</span></span>`;b.addEventListener('click',()=>sendAction({kind:'choose',index:i}));els.choiceList.appendChild(b)})}
function clearTypewriter(){if(typewriterTimer){clearTimeout(typewriterTimer);typewriterTimer=null}}
function finishTypewriter(){const m=state?.message,key=m?`${m.id}_${m.index}`:'';if(!m||key!==typewriterKey||typewriterDone)return false;clearTypewriter();typewriterDone=true;typewriterPos=Array.from(typewriterFullText).length;els.messageText.textContent=typewriterFullText;els.message.classList.remove('typing');return true}
function startTypewriter(key,text){clearTypewriter();typewriterKey=key;typewriterFullText=text;typewriterDone=false;typewriterPos=0;els.message.classList.add('typing');els.messageText.textContent='';const chars=Array.from(text);const step=()=>{if(typewriterKey!==key||!state?.message||`${state.message.id}_${state.message.index}`!==key){clearTypewriter();return}if(typewriterPos>=chars.length){typewriterDone=true;typewriterTimer=null;els.message.classList.remove('typing');const owner=state.players.find(p=>p.id===state.message?.ownerId);if(state.message?.ownerId===localPlayerId&&!owner?.cpu)els.messageOwner.textContent='クリックで次へ';return}const ch=chars[typewriterPos++];els.messageText.textContent+=ch;typewriterTimer=setTimeout(step,typewriterDelay(ch))};step()}
function messageActorsFor(m,line){
 const owner=state.players.find(p=>p.id===m.ownerId),out=[],seen=new Set();
 const upto=(m.lines||[]).slice(0,(m.index||0)+1).map(v=>typeof v==='string'?v:(v?.text||''));
 const text=[m.speaker,...upto].join(' '),currentText=`${m.speaker||''} ${typeof line==='string'?line:(line?.text||'')}`;
 const add=(name,avatar)=>{if(!avatar||seen.has(avatar)||out.length>=4)return;seen.add(avatar);out.push({name:name||'',avatar})};
 // The owner is always on stage. Other people only join after they have actually appeared in the story.
 if(owner){ensureFamilyData(owner);add(owner.name,owner.avatar)}
 for(const p of state.players){if(p.id!==owner?.id&&text.includes(p.name))add(p.name,p.avatar)}
 if(owner?.partner){
  const partnerCue=text.includes(owner.partner.name)||/夫婦|パートナー|結婚|恋愛|デート|プロポーズ/.test(text)||/家族/.test(m.speaker||'');
  if(partnerCue)add(owner.partner.name,owner.partner.avatar)
 }
 if(owner){
  for(const c of childList(owner))if(text.includes(c.name))add(c.name,c.avatar);
  // A family event starts with the family already involved, but unrelated future characters are never pre-shown.
  if(/家族/.test(m.speaker||'')&&out.length<4){for(const c of childList(owner)){add(c.name,c.avatar);if(out.length>=4)break}}
 }
 return out
}
function renderMessageScene(m,line,key){
 if(!els.messageScene||!els.messageActors)return;
 const actors=messageActorsFor(m,line);
 if(!actors.length){els.messageScene.classList.add('hidden');els.messageActors.innerHTML='';messageSceneKey='';return}
 const tone=(typeof line==='string'?'normal':(line?.tone||'normal')),anim=tone==='good'?'anim-bounce':tone==='bad'?'anim-shake':'anim-sway';
 els.messageScene.classList.remove('hidden');els.messageActors.dataset.count=String(actors.length);
 els.messageActors.innerHTML=actors.map(a=>`<div class="message-actor ${anim}"><img src="${esc(a.avatar)}" alt="${esc(a.name)}"><div class="message-actor-name">${esc(a.name)}</div></div>`).join('');
 // Wipe the stage in only once per message. Later characters simply join the existing black stage.
 if(messageSceneKey!==m.id){messageSceneKey=m.id;els.messageScene.classList.remove('scene-enter');void els.messageScene.offsetWidth;els.messageScene.classList.add('scene-enter')}
}
function renderMessage(){
 const m=state?.message;
 if(!m){
  clearTypewriter();typewriterKey='';typewriterDone=true;messageSceneKey='';
  els.message.classList.add('hidden');
  els.message.classList.remove('mine','cpu','typing');
  els.message.removeAttribute('data-tone');
  els.message.style.removeProperty('display');
  els.messageClickLayer.classList.add('hidden');
  if(els.messageScene)els.messageScene.classList.add('hidden');
  if(els.messageActors)els.messageActors.innerHTML='';
  return;
 }
 const line=m.lines?.[m.index]||{text:'…'},key=`${m.id}_${m.index}`,fullText=(typeof line==='string'?line:(line.text||'…'));
 const owner=state.players.find(p=>p.id===m.ownerId);
 const mine=m.ownerId===localPlayerId&&!owner?.cpu;
 els.message.classList.remove('hidden');
 els.messageClickLayer.classList.toggle('hidden',!mine);
 els.messageSpeaker.textContent=m.speaker||'出来事';
 if(typewriterKey!==key)startTypewriter(key,fullText);else if(typewriterDone)els.messageText.textContent=fullText;
 els.messageOwner.textContent=mine?(typewriterDone?'クリックで次へ':'クリックで全文表示'):owner?.cpu?`${owner.name}（CPU）が進行中`:`${owner?.name||'プレイヤー'}が進めています`;
 els.messageNext.style.visibility=mine?'visible':'hidden';
 els.message.dataset.tone=line.tone||'normal';
 els.message.classList.toggle('mine',!!mine);
 els.message.classList.toggle('cpu',!mine);
 renderMessageScene(m,line,key);
}
function renderCurtain(){const f=state.fx.stage;if(!f){els.curtain.classList.add('hidden');return}const st=STAGES[f.stageIndex];els.curtain.classList.remove('hidden');els.curtainIcon.textContent=st.icon;els.curtainName.textContent=st.name;els.curtainSub.textContent=STAGE_FLAVOR[st.id]}
function renderTurnBanner(){const f=state.fx.turn;if(!f){els.turnBanner.classList.add('hidden');return}const p=state.players.find(x=>x.id===f.playerId);els.turnBanner.classList.remove('hidden');els.turnBannerName.textContent=`${p?.name||'プレイヤー'} の手番です`;els.turnBannerAvatar.style.backgroundImage=`url('${p?.avatar||AVATARS[0]}')`;els.turnBanner.title=(p?.id===localPlayerId&&!p?.cpu)?'クリック / タップで開始':'手番が変わります'}
function broadcast(){state.version=(state.version||0)+1;connections.forEach(c=>{if(c.open)c.send({type:'snapshot',state})});render()}
function sendAction(a){ensureAudio();if(isHost)hostHandleAction(localPlayerId,a);else if(hostConn?.open)hostConn.send({type:'action',action:a})}
function setMessage(ownerId,speaker,lines,after=null){state.turnReady=false;state.message={id:uuid(),ownerId,speaker,lines:lines.map(x=>typeof x==='string'?{text:x,tone:'normal'}:x),index:0,after}}
function messageResult(playerId,speaker,lines,after='completeTurn'){setMessage(playerId,speaker,lines,{type:after})}
function handleMessageNext(playerId){const m=state.message;if(!m||m.ownerId!==playerId)return;if(m.index<m.lines.length-1){m.index++;broadcast();return}const after=m.after;state.message=null;runAfter(after);broadcast()}
function runAfter(a){if(!a)return;if(a.type==='beginTurn')beginTurn();else if(a.type==='resumeTurn'){state.busy=false;state.turnReady=true}else if(a.type==='completeTurn')completeTurn();else if(a.type==='openChoice')openChoice(a.choice,state.players.find(p=>p.id===a.playerId),a.returnTo||'completeTurn',a);else if(a.type==='finishGame')finishGame()}

function finishTurnIntro(fxId){if(!state?.fx?.turn||state.fx.turn.id!==fxId)return;state.fx.turn=null;state.busy=false;beginTurnCore();broadcast()}
function beginTurn(){if(state.phase!=='playing')return;const p=currentPlayer();state.turnReady=false;state.busy=true;if(!p)return;p.cardUsedThisTurn=false;const fxId=uuid();state.fx.turn={id:fxId,playerId:p.id};broadcast();later(()=>finishTurnIntro(fxId),1950)}
function beginTurnCore(){if(state.phase!=='playing')return;const p=currentPlayer();state.turnReady=false;state.busy=false;if(!p)return;
 if(state.stageIndex===4&&!p.educationChosen){setMessage(p.id,'人生の分岐点',[`${p.name}は社会へ踏み出す前に、進路を決めることになった。`,`これまで積み重ねてきた能力や思い出が、ここからの人生を少しずつ形作っていく。`],{type:'openChoice',choice:'education',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===4&&!p.job){setMessage(p.id,'就職活動',[`進路が決まった。次は最初の仕事を選ぼう。`,`ここで選んだ道は、今後の収入やイベントにも影響していく。`],{type:'openChoice',choice:'job',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===5&&!p.careerReviewDone){p.careerReviewDone=true;setMessage(p.id,'キャリアの節目',[`これまでの経験を活かし、仕事を見直す機会がやってきた。`,`転職するか、今の道を極めるか。ここから先の伸び方が変わる。`],{type:'openChoice',choice:'job',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===6&&!p.retireDone){p.retireDone=true;setMessage(p.id,'これからの働き方',[`円熟期をどう過ごすか、働き方を決める時が来た。`,`お金を追うか、ゆとりを取るか、それとも最後の大勝負に出るか。`],{type:'openChoice',choice:'retire',playerId:p.id,returnTo:'beginTurn'});return}
 state.turnReady=true;
}
function startGame(){const md=modeDef();state.players.forEach(ensureFamilyData);state.boards=STAGES.map((_,i)=>buildStageBoard(i,md.sizes[i]));state.phase='playing';state.resultPrepared=false;state.stageIndex=0;state.stageTurnCount=0;state.turnIndex=0;state.players.forEach((p,i)=>{p.color=COLORS[i];p.pos=0;p.laps=0});addLog(`${md.name}モード開始！`);startStage(0,true)}
function startStage(si,initial=false){const familyNotices=!initial?growChildrenForStage(si):[];familyNotices.forEach(addLog);state.stageIndex=si;state.stageTurnCount=0;state.turnIndex=0;state.busy=true;state.turnReady=false;state.pendingChoice=null;state.message=null;state.pendingRollAdvance=null;state.players.forEach(p=>{p.pos=0;p.laps=0});state.fx.landing=null;state.fx.stage={id:uuid(),stageIndex:si};broadcast();later(()=>{state.fx.stage=null;state.busy=false;const p=currentPlayer();setMessage(p.id,`${stageDef(si).icon} ${stageDef(si).name}`,[initial?'人生ロード、スタート！':`${stageDef(si).name}のフィールドへ進みます。`,STAGE_FLAVOR[stageDef(si).id]],{type:'beginTurn'});broadcast()},1650)}
function completeTurn(){state.turnReady=false;state.stageTurnCount++;const need=modeDef().rounds[state.stageIndex]*state.players.length;if(state.stageTurnCount>=need){if(state.stageIndex>=STAGES.length-1){const owner=currentPlayer()?.id||state.players[0].id;setMessage(owner,'人生の総決算',[`すべての時代が終わりました。`,`現金・住居・物件・お宝・特別賞を集計します。`],{type:'finishGame'});return}addLog(`${stageDef().name}が終了`);startStage(state.stageIndex+1);return}state.turnIndex=(state.turnIndex+1)%state.players.length;state.lastRoll=null;beginTurn()}
function doRoll(p){if(!state.turnReady||state.busy)return;state.turnReady=false;state.busy=true;let roll=1+rnd(10);if(p.nextRollBonus){roll=clamp(roll+p.nextRollBonus,1,10);p.nextRollBonus=0}state.lastRoll=roll;state.pendingRollAdvance={id:uuid(),playerId:p.id,result:roll,ready:false};state.fx.roulette={id:uuid(),playerId:p.id,result:roll,kind:'move'};addLog(`${p.name}：ルーレット ${roll}`);broadcast();later(()=>{if(!state.pendingRollAdvance||state.pendingRollAdvance.playerId!==p.id)return;state.pendingRollAdvance.ready=true;state.busy=false;state.fx.roulette=null;broadcast()},Math.max(1900,Math.round(2350*speedScale())))}
function startMove(p,steps){state.pendingRollAdvance=null;state.fx.roulette=null;state.busy=true;const board=stageBoard();let left=steps,wraps=0,step=0;function go(){if(left<=0){state.fx.move=null;broadcast();later(()=>{resolveLanding(p,wraps);broadcast()},220);return}const prev=p.pos;p.pos=(p.pos+1)%board.length;if(p.pos<prev){p.laps++;wraps++}left--;step++;state.fx.move={id:`${p.id}_${state.version}_${steps}`,playerId:p.id,step,total:steps,pos:p.pos};broadcast();later(go,170)}go()}
function lapBonus(p,wraps){if(!wraps)return[];const lines=[];for(let n=0;n<wraps;n++){if(state.stageIndex<4){p.memory+=2;applyStats(p,{communication:1});lines.push({text:`フィールドを1周！ 思い出+2、交流+1`,tone:'good'})}else{const gain=40000+state.stageIndex*15000;p.cash+=gain;lines.push({text:`フィールドを1周！ 周回ボーナス +${money(gain)}`,tone:'good'})}}return lines}
function resolveLanding(p,wraps=0){
 const s=stageBoard()[p.pos];if(!s){resolveLandingEffect(p,wraps);return}
 state.turnReady=false;state.busy=true;state.fx=state.fx||{};
 const fxId=uuid();state.fx.landing={id:fxId,playerId:p.id,pos:p.pos,type:s.type,label:landingSpaceLabel(s.type),wraps};
 broadcast();
 later(()=>{if(!state.fx?.landing||state.fx.landing.id!==fxId)return;state.fx.landing=null;resolveLandingEffect(p,wraps,s);broadcast()},1050)
}
function adjustedAbilityEvent(p,e){
 const rule=ABILITY_EVENT_RULES[e.text];if(!rule)return{event:e,check:null};
 const stat=p.stats[rule.stat]||0,roll=1+rnd(6),ok=stat+roll>=rule.target;
 if(ok)return{event:e,check:{ok,stat:rule.stat,roll,text:`${paramLabel(rule.stat)}を活かして結果を出した。`}};
 const weaker={...e,cash:Math.min(0,e.cash||0),stats:{[rule.stat]:1},memory:Math.max(1,Math.floor((e.memory||1)/2)),text:rule.failText};
 return{event:weaker,check:{ok,stat:rule.stat,roll,text:rule.failText}};
}
function choiceEventById(id){return ALL_CHOICE_EVENTS.find(e=>e.id===id)||null}
function createStageEventChoice(p,returnTo,ctx={}){const pool=CHOICE_EVENTS[stageDef().id]||CHOICE_EVENTS.young,ev=choiceEventById(ctx.eventId)||pick(pool);state.pendingChoice={playerId:p.id,type:'event3',eventId:ev.id,returnTo,title:ev.title,text:ev.text,options:ev.options.map((o,i)=>({label:o.label,value:String(i),desc:'',outcome:o.out}))}}
function queueStageChoice(p,prefix=[]){const pool=CHOICE_EVENTS[stageDef().id]||CHOICE_EVENTS.young,ev=pick(pool);setMessage(p.id,'出来事',[...prefix,{text:ev.text}],{type:'openChoice',choice:'event3',eventId:ev.id,playerId:p.id,returnTo:'completeTurn'});broadcast()}
function applyHiddenEventChoice(p,o){const out=o.outcome||{},lines=[];let amt=0;if(out.cash)amt=cashChange(p,out.cash);if(out.stats)applyStats(p,out.stats);if(out.memory)p.memory+=out.memory;if(out.jobExp&&p.job)p.jobExp+=out.jobExp;lines.push({text:out.text||'選んだ行動が思わぬ結果につながった。',tone:(amt>0||Object.values(out.stats||{}).some(v=>v>0))?'good':amt<0?'bad':'normal'});const detail=[];if(amt)detail.push(`${amt>0?'+':''}${money(amt)}`);for(const [k,v] of Object.entries(out.stats||{}))if(v)detail.push(`${paramLabel(k)}${v>0?'+':''}${v}`);if(out.memory)detail.push(`思い出+${out.memory}`);if(out.jobExp&&p.job)detail.push(`仕事経験+${out.jobExp}`);if(detail.length)lines.push({text:detail.join(' / '),tone:amt<0?'bad':'good'});return lines}
function resolveLandingEffect(p,wraps=0,sOverride=null){state.busy=false;const s=sOverride||stageBoard()[p.pos],lines=lapBonus(p,wraps);const finish=(more,speaker='出来事')=>{const all=[...lines,...more];messageResult(p.id,speaker,all.length?all:[{text:'何事もなく穏やかな一日だった。'}])};
 if(s.type==='start'){finish([{text:'スタート地点に戻ってきた。次の周回へ！',tone:'good'}],'周回');return}
 if(['event','plus','minus','grow','social'].includes(s.type)){
  if(s.type==='event'&&Math.random()<.5){queueStageChoice(p,lines);return}
  const all=EVENTS[stageDef().id]||EVENTS.young;
  let pool=all, speaker='出来事', bonusStats={}, bonusMemory=0, forcedTone='normal', forceInteraction=false;
  if(s.type==='plus'){pool=all.filter(e=>e.cash>0||Object.values(e.stats||{}).some(v=>v>0));speaker='プラスマス';forcedTone='good';bonusMemory=1}
  if(s.type==='minus'){pool=all.filter(e=>e.cash<0||Object.values(e.stats||{}).some(v=>v<0));speaker='マイナスマス';forcedTone='bad'}
  if(s.type==='grow'){pool=all.filter(e=>Object.values(e.stats||{}).some(v=>v>0));speaker='成長マス';bonusStats={knowledge:1};bonusMemory=2;forcedTone='good'}
  if(s.type==='social'){pool=all.filter(e=>(e.stats?.communication||0)>0||(e.stats?.charm||0)>0);speaker='交流マス';bonusStats={communication:1};bonusMemory=2;forcedTone='good';forceInteraction=true}
  if(!pool.length) pool=all;
  const picked=pick(pool),adj=adjustedAbilityEvent(p,picked),e=adj.event,amt=cashChange(p,e.cash);
  applyStats(p,e.stats); if(Object.keys(bonusStats).length) applyStats(p,bonusStats); p.memory+=e.memory+bonusMemory;
  const detail=[]; if(amt) detail.push(`${amt>0?'+':''}${money(amt)}`);
  const statObj={...(e.stats||{})}; for(const k in bonusStats) statObj[k]=(statObj[k]||0)+bonusStats[k];
  const stattxt=Object.entries(statObj).filter(([,v])=>v).map(([k,v])=>`${paramLabel(k)}${v>0?'+':''}${v}`).join(' / ');
  if(stattxt) detail.push(stattxt); detail.push(`思い出+${e.memory+bonusMemory}`);
  const story=eventStoryLines(p,e,stageDef().id,amt),tone=(forcedTone!=='normal'?forcedTone:(amt>0?'good':amt<0?'bad':'normal'));
  const interactions = forceInteraction ? maybePlayerInteraction(p,true) : maybePlayerInteraction(p);
  const more=[...story,{text:detail.join('　'),tone},...interactions];
  finish(more,speaker);
  if((s.type==='plus'||s.type==='grow')&&Math.random()<.18&&p.cards.length<5){
    const c=pick(CARDS); p.cards.push(c.id);
    state.message.lines.push({text:`帰り際、思いがけず「${c.name}」まで手に入れた。`,tone:'good'},{text:`カード効果：${c.desc}`,tone:'good'})
  }
  return}
 if(s.type==='chance'){resolveChance(p,lines);return}
 if(s.type==='payday'){ensureFamilyData(p);const own=salaryNow(p),prop=passiveIncome(p),fam=familyIncome(p),total=own+prop+fam;if(total){p.cash+=total;p.jobExp+=p.job?1:0;const rank=rankUpCheck(p),breakdown=[own?`本人給料 ${money(own)}`:'',partnerIncome(p)?`配偶者収入 ${money(partnerIncome(p))}`:'',adultChildIncome(p)?`成人した子の収入 ${money(adultChildIncome(p))}`:'',prop?`物件収入 ${money(prop)}`:''].filter(Boolean).join(' / ');finishWithPromotion(p,rank,[{text:`世帯の定期収入を受け取った。 +${money(total)}`,tone:'good'},{text:breakdown}],'給料日',finish)}else finish([{text:'まだ定期収入はない。'}],'給料日');return}
 if(s.type==='card'){if(p.cards.length>=5)finish([{text:'カード枠がいっぱいで、新しいカードを持てなかった。'}],'カード');else{const c=pick(CARDS);p.cards.push(c.id);finish([{text:`「${c.name}」を手に入れた！`,tone:'good'},{text:c.desc}],'カード')}return}
 if(s.type==='treasure'){setMessage(p.id,'お宝マス',[...lines,{text:'価値の読めないお宝を見つけた。買ってみる？'}],{type:'openChoice',choice:'treasure',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='submap'){setMessage(p.id,'寄り道マス',[...lines,{text:'少し寄り道できそうだ。どこへ行こう？'}],{type:'openChoice',choice:'submap',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='romance'){if(p.married){const cost=30000+rnd(50000);p.cash-=cost;p.memory+=5;finish([{text:`パートナーと特別な時間を過ごした。 -${money(cost)} / 思い出+5`,tone:'good'}],'家族の時間')}else{setMessage(p.id,'恋愛マス',[...lines,{text:p.partner?'パートナーとの関係を進めるチャンス。':'新しい出会いがありそうだ。'}],{type:'openChoice',choice:'romance',playerId:p.id,returnTo:'completeTurn'});broadcast()}return}
 if(s.type==='property'){setMessage(p.id,'物件マス',[...lines,{text:'気になる物件情報が入ってきた。'}],{type:'openChoice',choice:'property',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='career'){const gain=30000+p.jobRank*20000+rnd(50000);if(p.job){p.cash+=gain;p.jobExp+=2;applyStats(p,{communication:1,knowledge:1});const rank=rankUpCheck(p);finishWithPromotion(p,rank,[{text:`${pick(CAREER_EVENTS)} +${money(gain)}`,tone:'good'}],'仕事イベント',finish)}else finish([{text:'仕事イベントは起きたが、まだ職には就いていない。'}],'仕事イベント');return}
 if(s.type==='family'){resolveFamily(p,lines);return}
 finish([{text:'穏やかな一日を過ごした。'}])
}

function flavorLine(stageId){const map={baby:['家族の笑顔に包まれ、部屋の空気までやさしく感じられた。','小さな出来事でも心に残る、大事な思い出がまたひとつ増える。'],elementary:['教室や校庭の空気がにぎやかで、今日も何かが起こりそうだ。','友だちとの何気ない時間が、あとから大きな思い出になる。'],middle:['少し背伸びした毎日が、得意なことや人間関係を育てていく。','嬉しいことも気まずいことも、全部が今の自分をつくっていく。'],high:['忙しい日々の中で、将来へつながる経験が少しずつ積み上がっていく。','友人や挑戦との出会いが、人生の進路をゆっくり変えていく。'],young:['仕事も遊びも選択肢が多く、ひとつの決断が明日を大きく動かす。','自分で選んだ行動が、収入や人間関係へはっきり返ってくる時期だ。'],mature:['積み上げた経験が実を結び、周囲との関わり方にも深みが出てくる。','家庭も仕事も忙しいが、そのぶん得られるものも大きい。'],senior:['これまでの歩みを振り返りながら、余裕のある時間を楽しめる。','穏やかな毎日の中にも、心が動く出来事はまだまだ待っている。']};return pick(map[stageId]||map.young)}
function eventStoryLines(p,e,stageId,amt){
 const openers={
  baby:[`${p.name}のまわりで、いつもと少し違う一日が始まった。`,`家族が見守る中、${p.name}に小さな出来事が訪れた。`],
  elementary:[`放課後までまだ時間はたっぷり。${p.name}の一日は思わぬ方向へ転がり始めた。`,`学校で過ごす何気ない一日。その途中で${p.name}にちょっとした事件が起きた。`],
  middle:[`友人関係も勉強も少し複雑になる頃。${p.name}にも新しい出来事が舞い込んだ。`,`いつもの学校生活のはずが、今日は少しだけ空気が違った。`],
  high:[`将来を意識し始めた${p.name}。そんな日々の中で、忘れにくい出来事が起きた。`,`忙しい高校生活の途中、${p.name}に思いがけない展開が待っていた。`],
  young:[`仕事や私生活に慣れてきた${p.name}。しかし今日は予定通りには進まなかった。`,`大人の毎日は選択の連続。${p.name}にも新しい話が飛び込んできた。`],
  mature:[`経験を積んだ${p.name}にも、まだ予想外の出来事はやってくる。`,`仕事も暮らしも落ち着いてきた頃、${p.name}の日常に変化が訪れた。`],
  senior:[`ゆったりした時間を楽しむ${p.name}。今日は少し特別な一日になりそうだ。`,`これまでの人生を振り返る中で、${p.name}に新しい思い出が加わった。`]
 };
 const afterGood=['思っていた以上にうまくいき、気分よく一日を終えた。','予想外の幸運に恵まれ、しばらく顔がほころんだ。','小さな成功だったが、次につながりそうな手応えを感じた。'];
 const afterBad=['痛い出費にはなったが、あとで笑い話にできそうだ。','予定外の展開に少し落ち込んだものの、経験だけはしっかり残った。','思い通りにはいかなかった。それでも、この失敗も人生の一部だ。'];
 const afterFlat=['派手な出来事ではないが、こういう一日が後から思い出になっていく。','何気ない経験が、少しだけ${p.name}を成長させた。'.replace('${p.name}',p.name),'その場では気づかなかったが、今日の経験は確かに何かを残した。'];
 const resultTone=amt>0?'good':amt<0?'bad':'normal';
 return [{text:pick(openers[stageId]||openers.young)},{text:`そして――「${e.text}」。`,tone:resultTone},{text:pick(amt>0?afterGood:amt<0?afterBad:afterFlat),tone:resultTone}];
}
function randomOtherPlayer(p){const others=state.players.filter(x=>x.id!==p.id);return others.length?pick(others):null}
function maybePlayerInteraction(p,force=false){
 if(state.players.length<2||(!force&&Math.random()>.46))return[];
 const other=randomOtherPlayer(p);if(!other)return[];
 const sid=stageDef().id,school=['baby','elementary','middle','high'].includes(sid),lines=[];
 if(school){
  const r=rnd(5);
  if(r===0){applyStats(p,{communication:1,knowledge:1});applyStats(other,{communication:1});p.memory+=3;other.memory+=2;lines.push({text:`そこへ${other.name}も合流。二人で相談しながら動くうち、いつの間にか息が合ってきた。`,tone:'normal'},{text:`最後は二人とも笑顔で解散。${p.name}は知力・交流+1、${other.name}は交流+1。`,tone:'good'},{text:`思い出：${p.name}+3 / ${other.name}+2`,tone:'good'});}
  else if(r===1){const a=p.stats.knowledge+p.stats.fitness+rnd(8),b=other.stats.knowledge+other.stats.fitness+rnd(8),winner=a>=b?p:other,loser=winner.id===p.id?other:p;winner.memory+=4;loser.memory+=2;applyStats(winner,{charm:1});lines.push({text:`話の流れで、${p.name}と${other.name}がちょっとした勝負をすることになった！`},{text:`接戦の末、今回は${winner.name}の勝ち！ ${loser.name}も「次は負けない」と笑っている。`,tone:'good'},{text:`${winner.name} 魅力+1・思い出+4 / ${loser.name} 思い出+2`,tone:'good'});}
  else if(r===2){applyStats(p,{communication:2});applyStats(other,{knowledge:1});p.memory+=2;other.memory+=2;lines.push({text:`困っていた${other.name}に${p.name}が声をかけ、二人で問題を片づけることになった。`},{text:`助けたつもりが、${p.name}のほうも意外なことを教わった。持ちつ持たれつだ。`,tone:'good'},{text:`${p.name} 交流+2 / ${other.name} 知力+1 / 二人の思い出+2`,tone:'good'});}
  else if(r===3){const g=10000+rnd(30000);p.cash+=g;other.cash+=g;p.memory+=2;other.memory+=2;lines.push({text:`${p.name}と${other.name}は一緒に小さな企画へ参加することにした。`},{text:`思った以上に盛り上がり、ごほうびまで獲得！ 二人で山分けした。`,tone:'good'},{text:`二人とも +${money(g)} / 思い出+2`,tone:'good'});}
  else{p.memory+=4;other.memory+=4;applyStats(p,{charm:1});applyStats(other,{charm:1});lines.push({text:`帰り道、${p.name}と${other.name}は予定を忘れて長話。気づけばすっかり遅い時間だ。`},{text:`特に何かを得たわけではない。でも、二人にとってかなり楽しい一日になった。`,tone:'good'},{text:`二人とも 魅力+1・思い出+4`,tone:'good'});}
 }else{
  const r=rnd(6);
  if(r===0){const cost=25000+rnd(45000);p.cash-=cost;other.memory+=3;p.memory+=4;lines.push({text:`帰り際、${p.name}は偶然${other.name}を見つけ、そのまま食事へ行くことになった。`},{text:`話が盛り上がった勢いで、今回は${p.name}がお会計を引き受けた。`,tone:'normal'},{text:`${p.name} -${money(cost)}・思い出+4 / ${other.name} 思い出+3`,tone:'bad'});}
  else if(r===1){const gain=50000+rnd(90000);p.cash+=gain;other.cash+=Math.round(gain*.7);applyStats(p,{communication:1});applyStats(other,{communication:1});lines.push({text:`${p.name}と${other.name}は、二人で小さな副業企画を試してみることにした。`},{text:`役割分担がうまくハマり、予想以上の成果が出た！`,tone:'good'},{text:`${p.name} +${money(gain)} / ${other.name} +${money(Math.round(gain*.7))} / 二人とも交流+1`,tone:'good'});}
  else if(r===2){const swing=30000+rnd(70000),pa=p.stats.knowledge+p.stats.communication+rnd(10),pb=other.stats.knowledge+other.stats.communication+rnd(10);if(pa>=pb){p.cash+=swing;other.cash-=Math.round(swing*.35);lines.push({text:`${p.name}と${other.name}が同じチャンスを狙うことになり、静かな競争が始まった。`},{text:`今回は${p.name}が一歩先へ！ ${other.name}は悔しそうに結果を見つめている。`,tone:'good'},{text:`${p.name} +${money(swing)} / ${other.name} -${money(Math.round(swing*.35))}`,tone:'good'});}else{other.cash+=swing;p.cash-=Math.round(swing*.35);lines.push({text:`${p.name}と${other.name}が同じチャンスを狙うことになり、静かな競争が始まった。`},{text:`最後に抜け出したのは${other.name}！ ${p.name}は次の機会を狙うことにした。`,tone:'bad'},{text:`${p.name} -${money(Math.round(swing*.35))} / ${other.name} +${money(swing)}`,tone:'normal'});}}
  else if(r===3){applyStats(p,{knowledge:1,communication:1});applyStats(other,{knowledge:1,communication:1});p.memory+=3;other.memory+=3;lines.push({text:`${other.name}から相談を持ちかけられ、${p.name}は少し長めに話を聞くことになった。`},{text:`話しているうちにお互い考えが整理され、結局二人とも得をした気分になった。`,tone:'good'},{text:`二人とも 知力+1・交流+1・思い出+3`,tone:'good'});}
  else if(r===4){const cost=40000+rnd(50000);p.cash-=cost;other.cash-=cost;p.memory+=7;other.memory+=7;lines.push({text:`予定が偶然合い、${p.name}と${other.name}は思い切って日帰り旅行へ！`},{text:`財布は少し軽くなったが、写真フォルダは一気ににぎやかになった。`,tone:'good'},{text:`二人とも -${money(cost)} / 思い出+7`,tone:'normal'});}
  else{applyStats(p,{charm:1});applyStats(other,{communication:2});p.memory+=3;other.memory+=3;lines.push({text:`${p.name}の何気ない一言がきっかけで、${other.name}との会話が思わぬ方向へ広がった。`},{text:`二人とも「こんな話をするとは思わなかった」と笑いながら別れた。`,tone:'good'},{text:`${p.name} 魅力+1 / ${other.name} 交流+2 / 二人の思い出+3`,tone:'good'});}
 }
 return lines;
}

function cashChange(p,amt){if(amt<0&&p.guard){amt=Math.ceil(amt/2);p.guard=false}p.cash+=amt;return amt}
function resolveChance(p,prefix=[]){const n=rnd(5),a=[...prefix,{text:'何が起こるか分からない、特別な流れがやってきた。'}];if(n===0){const g=100000+rnd(180000);p.cash+=g;a.push({text:`臨時ボーナス！ +${money(g)}`,tone:'good'})}else if(n===1){applyStats(p,{knowledge:2,communication:2});a.push({text:'良い出会いから大きく成長。知力+2・交流+2',tone:'good'})}else if(n===2){const t=pick(TREASURES);p.treasures.push({id:t.id,appraised:0});a.push({text:`お宝「${t.name}」を手に入れた！`,tone:'good'})}else if(n===3){if(p.cards.length<5){const c=pick(CARDS);p.cards.push(c.id);a.push({text:`「${c.name}」を手に入れた！`,tone:'good'})}else a.push({text:'カード枠がいっぱいだった。'})}else{p.memory+=8;a.push({text:'忘れられない体験！ 思い出+8',tone:'good'})}if(Math.random()<.26)a.push(...maybePlayerInteraction(p));messageResult(p.id,'チャンス！',a)}
function resolveFamily(p,prefix=[]){ensureFamilyData(p);const a=[...prefix,{text:'家族にまつわる時間は、資産では測れない大きな影響を残していく。'}];if(p.married&&Math.random()<.55&&totalChildrenCount()<15){const c=makeChildProfile(p);p.childProfiles.push(c);p.children=p.childProfiles.length;p.cash-=80000;p.memory+=10;a.push({text:`${p.partner?.name||'パートナー'}との間に ${c.name} が誕生！ 子ども${p.children}人 / -${money(80000)} / 思い出+10`,tone:'good'})}else if(childCount(p)){const g=childCount(p)*(30000+rnd(30000));p.cash+=g;p.memory+=4;a.push({text:`家族から嬉しい知らせ。 +${money(g)} / 思い出+4`,tone:'good'});if(totalChildrenCount()>=15)a.push({text:'家族みんなで穏やかな時間を過ごした。'})}else{p.memory+=5;a.push({text:'穏やかな休日を満喫。思い出+5',tone:'good'})}if(Math.random()<.2)a.push(...maybePlayerInteraction(p));messageResult(p.id,'家族イベント',a)}
function openChoice(kind,p,returnTo,ctx={}){if(!p)return;if(kind==='event3')createStageEventChoice(p,returnTo,ctx);else if(kind==='education')createEducationChoice(p,returnTo);else if(kind==='job')createJobChoice(p,returnTo);else if(kind==='retire')createRetireChoice(p,returnTo);else if(kind==='treasure')createTreasureChoice(p,returnTo);else if(kind==='submap')createSubmapChoice(p,returnTo);else if(kind==='romance')createRomanceChoice(p,returnTo);else if(kind==='property')createPropertyChoice(p,returnTo)}
function createEducationChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'education',returnTo,title:'卒業後の進路',text:'これからの進路を選びます。結果は選んだあとに分かります。',options:[{label:'すぐ就職',value:'work',desc:'早めに社会へ出る',tags:{career:2}},{label:'専門スクール',value:'voc',desc:'専門分野を学ぶ',tags:{career:1.5,study:1.5}},{label:'大学へ進学',value:'college',desc:'幅広く学ぶ',tags:{study:2.5}}]}}
function eligibleJobs(p){const list=JOBS.filter(j=>jobEligible(p,j));return list.length?list:[JOBS[0]]}
function createJobChoice(p,returnTo){let pool=eligibleJobs(p).sort(()=>Math.random()-.5).slice(0,5);if(p.job&&!pool.find(j=>j.id===p.job.id))pool.unshift(p.job);state.pendingChoice={playerId:p.id,type:'job',returnTo,title:p.job?'仕事を見直す':'仕事を選ぶ',text:'能力値が高いほど候補が増えます。',options:[...pool.slice(0,5).map(j=>({label:j.name,value:j.id,desc:`初任給 ${money(j.base)}`,tags:{[j.tag]:2,career:1}})),...(p.job?[{label:'今の仕事を続ける',value:'keep',desc:`${p.job.name} Lv.${p.jobRank}`,tags:{career:1.2}}]:[])]}}
function createRetireChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'retire',returnTo,title:'これからの働き方',text:'円熟期をどう過ごしますか？',options:[{label:'仕事を続ける',value:'continue',desc:'今の仕事を続ける',tags:{career:2,asset:1}},{label:'ゆったり引退',value:'retire',desc:'仕事を離れてゆっくり過ごす',tags:{love:1,asset:1}},{label:'第二の挑戦',value:'challenge',desc:'新しいことに挑む',tags:{risk:2,career:1}}]}}
function createTreasureChoice(p,returnTo){const t=pick(TREASURES);state.pendingChoice={playerId:p.id,type:'treasure',returnTo,title:'お宝を発見',text:'最後に本当の価値が判明します。',options:[{label:`${t.name}を買う`,value:t.id,desc:`価格 ${money(t.buy)} / 最大鑑定 ${money(t.max)}`,tags:{asset:1.6,risk:1.2}},{label:'見送る',value:'skip',desc:'現金を温存',tags:{asset:.7}}]}}
function createPropertyChoice(p,returnTo){const affordable=PROPS.filter(x=>!p.properties.includes(x.id)).filter(x=>x.price<=Math.max(300000,p.cash+250000)).sort((a,b)=>a.price-b.price),picks=affordable.slice(-3);state.pendingChoice={playerId:p.id,type:'property',returnTo,title:'物件購入チャンス',text:'物件は収入マスで利益を生み、最後に資産価値も加算されます。',options:[...picks.map(x=>({label:x.name,value:x.id,desc:`価格 ${money(x.price)} / 資産 ${money(x.value)} / 収入 ${money(x.income)}`,tags:{asset:2}})),{label:'買わない',value:'skip',desc:'今回は見送る',tags:{asset:.6}}]}}
function createRomanceChoice(p,returnTo){if(!p.partner){const cand=[...PARTNERS].sort(()=>Math.random()-.5).slice(0,3),used=new Set();const options=cand.map(x=>{const avatar=nextFamilyPortrait(null,used);used.add(avatar);return{label:x.name,value:x.id,avatar,desc:`${x.desc} / ${x.job}`,tags:{love:2}}});state.pendingChoice={playerId:p.id,type:'meet',returnTo,title:'新しい出会い',text:'気になる相手と交流してみますか？',options:[...options,{label:'今は恋愛しない',value:'skip',desc:'自分の時間を優先',tags:{career:1,asset:1}}]};return}state.pendingChoice={playerId:p.id,type:'date',returnTo,title:`${p.partner.name}とどうする？`,text:`現在の好感度：${p.affection}`,options:[{label:'気軽なデート',value:'light',desc:'気楽に一緒の時間を過ごす',tags:{love:1.5}},{label:'特別なデート',value:'special',desc:'少し特別な時間を作る',tags:{love:2.3}},{label:'プロポーズ',value:'propose',desc:'思い切って気持ちを伝える',tags:{love:3,risk:1.3}},{label:'今回は見送る',value:'skip',desc:'何もしない',tags:{career:1}}]}}
function createSubmapChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'submap',returnTo,title:'寄り道スポット',text:'1つ選んで過ごします。',options:[{label:'学びの街',value:'study',desc:'じっくり学びに行く',tags:{study:2}},{label:'スポーツ施設',value:'fitness',desc:'思いきり体を動かす',tags:{career:1.2}},{label:'交流フェス',value:'social',desc:'人が集まる場所へ行く',tags:{love:1.5,career:1}},{label:'チャレンジ市場',value:'market',desc:'ちょっと変わった市場をのぞく',tags:{asset:1.5,risk:2}}]}}
function applyChoice(p,c,o){const lines=[];
 if(c.type==='event3')return applyHiddenEventChoice(p,o);
 if(c.type==='education'){p.educationChosen=true;if(o.value==='work'){p.education='高校';p.cash+=50000}else if(o.value==='voc'){p.education='専門';p.cash-=150000;applyStats(p,{knowledge:3,charm:2})}else{p.education='大学';p.cash-=300000;applyStats(p,{knowledge:6,communication:2})}lines.push({text:`進路は「${p.education}」に決定。`,tone:'good'});return lines}
 if(c.type==='job'){if(o.value==='keep'){p.jobExp++;lines.push({text:`${p.job.name}を続けることにした。仕事経験が少し増えた。`});return lines}const j=JOBS.find(x=>x.id===o.value);if(j){const changed=!p.job||p.job.id!==j.id;p.job=j;if(changed){p.jobRank=1;p.jobExp=0}lines.push({text:`${j.name}として働くことにした。`,tone:'good'})}return lines}
 if(c.type==='treasure'){if(o.value==='skip')lines.push({text:'お宝は見送った。'});else{const t=TREASURES.find(x=>x.id===o.value);p.cash-=t.buy;p.treasures.push({id:t.id,appraised:0});lines.push({text:`「${t.name}」を購入した。最後の鑑定が楽しみだ。`,tone:'good'})}return lines}
 if(c.type==='property'){if(o.value==='skip')lines.push({text:'物件購入は見送った。'});else{const x=PROPS.find(x=>x.id===o.value);p.cash-=x.price;p.properties.push(x.id);if(!p.home)p.home={name:x.name,value:Math.round(x.value*.55)};lines.push({text:`「${x.name}」を購入！`,tone:'good'})}return lines}
 if(c.type==='meet'){if(o.value==='skip'){p.memory++;lines.push({text:'今は恋愛より自分の時間を大切にした。'})}else{const x=PARTNERS.find(x=>x.id===o.value);p.partner={...x,avatar:o.avatar||nextFamilyPortrait()};p.affection=1+Math.floor(p.stats[x.pref]/5);lines.push({text:`${x.name}と知り合った。好感度${p.affection}`,tone:'good'})}return lines}
 if(c.type==='date'){if(o.value==='light'){p.cash-=20000;p.affection+=1+rnd(2);p.memory+=2;lines.push({text:`気軽なデートを楽しんだ。好感度${p.affection}`,tone:'good'})}else if(o.value==='special'){p.cash-=70000;p.affection+=2+rnd(3);p.memory+=5;lines.push({text:`特別なデートは大成功。好感度${p.affection}`,tone:'good'})}else if(o.value==='propose'){const chance=clamp(.25+p.affection*.1+p.stats.charm*.015,.3,.95);if(Math.random()<chance){p.married=true;p.cash-=120000;p.memory+=15;lines.push({text:`${p.partner.name}と結婚！`,tone:'good'},{text:'新しい家族として人生を歩んでいく。',tone:'good'})}else{p.affection=Math.max(0,p.affection-1);lines.push({text:'プロポーズはまだ早かったようだ…。',tone:'bad'})}}else lines.push({text:'今回は自分の時間を優先した。'});return lines}
 if(c.type==='submap'){if(o.value==='study'){p.cash-=80000;applyStats(p,{knowledge:4});lines.push({text:'学びの街で集中。知力+4',tone:'good'})}if(o.value==='fitness'){p.cash-=50000;applyStats(p,{fitness:4});lines.push({text:'しっかり体を動かした。体力+4',tone:'good'})}if(o.value==='social'){p.cash-=60000;applyStats(p,{charm:2,communication:3});lines.push({text:'交流フェスを満喫。魅力+2・交流+3',tone:'good'})}if(o.value==='market'){p.cash-=100000;const g=[0,40000,100000,180000,300000][rnd(5)];p.cash+=g;lines.push({text:`市場チャレンジの戻り ${money(g)}`,tone:g>=100000?'good':'bad'})}p.memory+=3;return lines}
 if(c.type==='retire'){if(o.value==='continue'){p.jobExp+=2;lines.push({text:'仕事を続けることにした。仕事経験が増えた。'})}else if(o.value==='retire'){const severance=p.job?salaryNow(p)*3:80000;p.cash+=severance;p.job=null;p.jobRank=0;p.memory+=10;lines.push({text:`ゆったり引退。退職金 ${money(severance)}`,tone:'good'})}else{p.cash-=200000;const ok=Math.random()<.55;if(ok){p.cash+=600000;lines.push({text:`第二の挑戦が大成功！ +${money(600000)}`,tone:'good'})}else lines.push({text:'第二の挑戦は実らなかった…。',tone:'bad'})}return lines}
 return[{text:'選択した。'}]
}
function cpuScoreOption(p,o){const w=cpuDef(p.cpuType).w,t=o.tags||{};let s=Math.random()*.8;for(const k in t)s+=(w[k]||1)*t[k];if(/買う|大学|専門|デート|挑戦/.test(o.label)&&p.cash<100000)s-=2;if(o.value==='propose'&&p.affection<4)s-=2.5;if(o.value==='skip')s+=p.cash<0?2:0;if(o.value==='keep'&&p.jobRank>=4)s+=1.3;return s}
function useCard(p,index){if(p.cardUsedThisTurn)return;const id=p.cards[index],c=CARDS.find(x=>x.id===id);if(!c)return;p.cardUsedThisTurn=true;p.cards.splice(index,1);if(id==='plus2')p.nextRollBonus=2;if(id==='guard')p.guard=true;if(id==='study')applyStats(p,{knowledge:3});if(id==='charm')applyStats(p,{charm:3});if(id==='network')applyStats(p,{communication:3});if(id==='fitness')applyStats(p,{fitness:3});if(id==='bonus')p.cash+=80000;if(id==='date'&&p.partner)p.affection+=2;const after=c.turnCost==='end'?{type:'completeTurn'}:{type:'resumeTurn'};setMessage(p.id,'カード使用',[{text:`「${c.name}」を使用！`,tone:'good'},{text:c.desc},{text:c.turnCost==='end'?'このカードの使用で手番終了。':'カード使用後もこの手番を続けられる。'}],after)}
function hostHandleAction(playerId,a){if(!isHost||!state)return;const p=state.players.find(x=>x.id===playerId);if(!p)return;
 if(state.phase==='lobby'){
  if(a.kind==='setAvatar'){const targetId=a.targetId||playerId;const target=state.players.find(x=>x.id===targetId);if(!target)return;if(target.id!==playerId&&!(p.id===localPlayerId&&target.cpu))return;const opt=AVATAR_OPTIONS.find(v=>v.id===a.avatarId);if(!opt)return;if(state.players.some(x=>x.id!==target.id&&x.avatarId===opt.id))return;setPlayerAvatar(target,opt.id);broadcast();return}
  if(a.kind==='start'){startGame();return}
  return
 }
 if(state.phase!=='playing')return;
 if(a.kind==='dismissTurnIntro'&&state.fx?.turn?.playerId===playerId&&currentPlayer()?.id===playerId){finishTurnIntro(state.fx.turn.id);return}
 if(a.kind==='nextMessage'){handleMessageNext(playerId);return}
 if(a.kind==='choose'&&state.pendingChoice?.playerId===playerId){const c=state.pendingChoice,o=c.options[a.index];if(!o)return;state.pendingChoice=null;const lines=applyChoice(p,c,o);setMessage(p.id,'選択結果',lines,{type:c.returnTo||'completeTurn'});broadcast();return}
 if(a.kind==='advanceRoll'&&state.pendingRollAdvance?.playerId===playerId&&state.pendingRollAdvance.ready){const steps=state.pendingRollAdvance.result;startMove(p,steps);return}
 const cp=currentPlayer();if(!cp||cp.id!==playerId)return;
 if(a.kind==='useCard'&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice&&!p.cardUsedThisTurn){useCard(p,a.index);broadcast();return}
 if(a.kind==='roll'&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice){doRoll(p);return}
}
function finishGame(){state.message=null;state.busy=false;if(state.fx)state.fx.landing=null;state.turnReady=false;state.players.forEach(p=>{for(const t of p.treasures){const def=TREASURES.find(x=>x.id===t.id);t.appraised=Math.round(def.buy+(def.max-def.buy)*(.25+Math.random()*.75))}});state.phase='finished';prepareResults()}
function prepareResults(){if(state.resultPrepared)return;state.resultPrepared=true;const awards=[['知の達人',p=>p.stats.knowledge],['体力自慢',p=>p.stats.fitness],['人気者',p=>p.stats.charm+p.stats.communication],['思い出王',p=>p.memory+childCount(p)*5],['資産運用賞',p=>p.properties.length*4+p.treasures.length*3]];state.awards=[];for(const [name,fn] of awards){const best=Math.max(...state.players.map(fn)),winners=state.players.filter(p=>fn(p)===best),bonus=Math.round(180000/winners.length);winners.forEach(p=>p.awards+=bonus);state.awards.push({name,winners:winners.map(p=>p.name),bonus})}}
function renderResult(){const rows=[...state.players].sort((a,b)=>assetScore(b)-assetScore(a));els.awardArea.innerHTML=state.awards.map(a=>`<div class="award"><strong>${esc(a.name)}</strong>：${a.winners.map(esc).join('・')}　賞金 ${money(a.bonus)} / 人</div>`).join('');els.resultArea.innerHTML=`<table class="summary-table"><thead><tr><th>順位</th><th>名前</th><th>総資産</th><th>現金</th><th>仕事</th><th>家族</th><th>物件/お宝</th></tr></thead><tbody>${rows.map((p,i)=>`<tr class="${i===0?'rank1':''}"><td>${i+1}位</td><td>${esc(p.name)}</td><td><strong>${money(assetScore(p))}</strong></td><td>${money(p.cash)}</td><td>${p.job?esc(p.job.name)+' Lv.'+p.jobRank:'引退'}</td><td>${p.married?'結婚':''} 子${childCount(p)}</td><td>${p.properties.length}/${p.treasures.length}</td></tr>`).join('')}</tbody></table><div class="note" style="margin-top:10px">総資産＝現金＋住居価値＋物件価値＋お宝鑑定額＋特別賞。</div>`;broadcastResultsIfHost()}
function broadcastResultsIfHost(){if(isHost)connections.forEach(c=>{if(c.open)c.send({type:'snapshot',state})})}
function maybeRunCpu(){clearTimeout(cpuTimer);if(!isHost||state?.phase!=='playing')return;if(state.pendingPromotion){const id=state.pendingPromotion.id;cpuTimer=setTimeout(()=>finishPromotionRoulette(id),Math.round(1850*speedScale()));return}if(state.fx.stage||state.fx.turn)return;const pr=state.pendingRollAdvance;if(pr?.ready){const po=state.players.find(x=>x.id===pr.playerId);if(po?.cpu)cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'advanceRoll'}),Math.round(700*speedScale()));return}if(state.busy)return;const m=state.message;if(m){const owner=state.players.find(p=>p.id===m.ownerId);if(owner?.cpu)cpuTimer=setTimeout(()=>hostHandleAction(owner.id,{kind:'nextMessage'}),cpuMessageDelay(m));return}const c=state.pendingChoice;if(c){const p=state.players.find(x=>x.id===c.playerId);if(p?.cpu)cpuTimer=setTimeout(()=>{let best=0,bestS=-1e9;c.options.forEach((o,i)=>{const s=cpuScoreOption(p,o);if(s>bestS){bestS=s;best=i}});hostHandleAction(p.id,{kind:'choose',index:best})},Math.round(850*speedScale()));return}const p=currentPlayer();if(p?.cpu&&state.turnReady)cpuTimer=setTimeout(()=>{if(!p.cardUsedThisTurn&&p.cards.length&&Math.random()<.20){const idx=p.cards.findIndex(id=>{const c=CARDS.find(x=>x.id===id);return c&&(cpuDef(p.cpuType).w[c.tag]||1)>1.3});if(idx>=0){hostHandleAction(p.id,{kind:'useCard',index:idx});return}}hostHandleAction(p.id,{kind:'roll'})},Math.round(720*speedScale()))}
function randomCode(){return String(Math.floor(100000+Math.random()*900000))}
function createRoom(){ensureAudio();clearSavedSession();intentionalDisconnect=false;localHomeView=false;const name=cleanName(els.hostName.value);roomCode=randomCode();isHost=true;state=newState();const p=makePlayer(name);state.players.push(p);localPlayerId=p.id;show(els.lobby);render();saveSession();openHostPeer(false)}
function joinRoom(){ensureAudio();clearSavedSession();intentionalDisconnect=false;localHomeView=false;const name=cleanName(els.joinName.value),code=(els.roomInput.value||'').replace(/\D/g,'').slice(0,6);if(code.length!==6){alert('6桁の部屋コードを入力してください');return}roomCode=code;isHost=false;localPlayerId='';state={phase:'lobby',players:[],settings:{mode:'standard',speed:'normal',messageSpeed:'normal'},fx:{roulette:null,move:null,stage:null,turn:null,landing:null}};show(els.lobby);net('ホストへ接続中...');
 if(typeof Peer==='undefined'){alert('オンライン通信ライブラリを読み込めませんでした。');show(els.home);return}
 connectGuestToHost(false);
}
function addCpu(){if(!isHost||state.players.length>=4)return;const type=pick(CPU_TYPES),num=state.players.filter(p=>p.cpu).length+1,p=makePlayer(`CPU${num}`,true,type.id);state.players.push(p);addLog(`${p.name}（${type.name}）を追加`);broadcast()}
function fillCpu(){while(isHost&&state.players.length<4)addCpu()}
function removeCpu(id){if(!isHost||state.phase!=='lobby')return;state.players=state.players.filter(p=>p.id!==id);state.players.forEach((p,i)=>p.color=COLORS[i]);broadcast()}
function handleFx(){const f=state.fx;if(f.roulette&&lastFx.roulette!==f.roulette.id){const result=f.roulette.result;lastFx.roulette=f.roulette.id;animateRoulette(result);sfxRoulette();const delay=Math.round(1450*speedScale());if(f.roulette.kind!=='promotion')setTimeout(()=>{if(window.innerWidth<900)focusMobileBoardAfterRoulette();setTimeout(()=>showBoardRollPop(result),window.innerWidth<900?330:0)},delay)}const mv=f.move;if(mv){const key=mv.id+'_'+mv.step;if(lastFx.move!==key){lastFx.move=key;sfxStep();requestAnimationFrame(focusBoardCamera)}}if(f.stage&&lastFx.stage!==f.stage.id){lastFx.stage=f.stage.id;startBgm(f.stage.stageIndex);sfxStage()}const m=state.message;if(m){const key=m.id+'_'+m.index;if(lastFx.message!==key){lastFx.message=key;els.messageText.classList.remove('message-enter');void els.messageText.offsetWidth;els.messageText.classList.add('message-enter');const line=m.lines[m.index];if(line?.tone==='good')sfxGood();else if(line?.tone==='bad')sfxBad()}}}
function focusMobileBoardAfterRoulette(){
 if(window.innerWidth>=900||!els.boardPanel||state?.phase!=='playing')return;
 els.boardPanel.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
 setTimeout(()=>focusBoardCamera(),260);
}
function animateRoulette(result){
 clearTimeout(rollVisualTimer);clearTimeout(mobileBoardFocusTimer);
 els.roll.textContent='…';els.wheel.style.transition='none';els.wheel.style.transform='rotate(0deg)';
 requestAnimationFrame(()=>requestAnimationFrame(()=>{els.wheel.style.transition=`transform ${Math.round(1350*speedScale())}ms cubic-bezier(.12,.67,.12,1)`;const target=1080+(10-result)*36+18;els.wheel.style.transform=`rotate(${target}deg)`}));
 rollVisualTimer=setTimeout(()=>{els.roll.textContent=String(result)},Math.round(1050*speedScale()));

}
function ensureAudio(){if(!bgmOn&&!sfxOn)return;if(!audioCtx){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;audioCtx=new AC()}if(audioCtx.state==='suspended')audioCtx.resume();if(bgmOn&&!bgmTimer)startBgm(state?.stageIndex||0)}
function tone(freq,dur=.09,g=.028,type='sine',when=0,kind='sfx'){if(!audioCtx)return;if(kind==='bgm'?!bgmOn:!sfxOn)return;const o=audioCtx.createOscillator(),gain=audioCtx.createGain();o.type=type;o.frequency.value=freq;gain.gain.setValueAtTime(Math.min(.58,g*6*masterVolume),audioCtx.currentTime+when);gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+when+dur);o.connect(gain).connect(audioCtx.destination);o.start(audioCtx.currentTime+when);o.stop(audioCtx.currentTime+when+dur+.02)}
function startBgm(si){if(!bgmOn)return;ensureAudioCore();if(!audioCtx)return;bgmStage=si;bgmStep=0;if(bgmTimer)clearInterval(bgmTimer);const seqs=[[262,330,392,330,294,349,392,349],[294,370,440,370,330,392,494,392],[247,294,370,294,220,277,330,277],[262,311,392,311,294,349,466,349],[220,277,330,277,247,294,370,294],[196,247,294,247,220,262,330,262],[175,220,262,220,196,247,294,247]],seq=seqs[si]||seqs[0];bgmTimer=setInterval(()=>{if(!bgmOn||!audioCtx||audioCtx.state!=='running')return;const f=seq[bgmStep++%seq.length];tone(f,.24,.018,'triangle',0,'bgm');if(bgmStep%4===1)tone(f/2,.30,.012,'sine',0,'bgm')},320)}
function ensureAudioCore(){if(!audioCtx){const AC=window.AudioContext||window.webkitAudioContext;if(AC)audioCtx=new AC()}}
function sfxStep(){tone(520,.055,.026,'square')}function sfxGood(){tone(659,.11,.034,'triangle');tone(784,.13,.028,'triangle',.07)}function sfxBad(){tone(220,.13,.032,'sawtooth');tone(174,.17,.026,'sawtooth',.08)}function sfxStage(){tone(392,.13,.038,'triangle');tone(523,.15,.035,'triangle',.1);tone(659,.19,.032,'triangle',.2)}
function sfxRoulette(){if(!sfxOn||!audioCtx)return;let i=0;const tick=setInterval(()=>{tone(760-i*10,.025,.012,'square');i++;if(i>15)clearInterval(tick)},Math.max(35,Math.round(65*speedScale())))}
function updateVolumeUi(){if(!els.volumeSlider)return;els.volumeSlider.value=String(Math.round(masterVolume*100));if(els.volumeValue)els.volumeValue.textContent=`${Math.round(masterVolume*100)}%`}
function updateAudioToggleUi(){if(els.bgmBtn){els.bgmBtn.textContent=bgmOn?'🎵 BGM ON':'🎵 BGM OFF';els.bgmBtn.classList.toggle('off',!bgmOn)}if(els.sfxBtn){els.sfxBtn.textContent=sfxOn?'🔔 効果音 ON':'🔕 効果音 OFF';els.sfxBtn.classList.toggle('off',!sfxOn)}}
function setMasterVolume(v){masterVolume=Math.max(0,Math.min(1,Number(v)||0));localStorage.setItem('lifeRoadVolume',String(masterVolume));updateVolumeUi();if(masterVolume>0&&(bgmOn||sfxOn))ensureAudio()}
function applyPortraitCollapsed(){if(!els.portraitPanel)return;els.portraitPanel.classList.toggle('collapsed',portraitCollapsed);if(els.portraitToggle){const mobile=window.innerWidth<=900;els.portraitToggle.setAttribute('aria-expanded',portraitCollapsed?'false':'true');els.portraitToggle.title=portraitCollapsed?'手番キャラクター表示を開く':'手番キャラクター表示を収納';els.portraitToggle.textContent=mobile?(portraitCollapsed?'▲':'▼'):(portraitCollapsed?'▶':'◀')}}
function togglePortraitPanel(){portraitCollapsed=!portraitCollapsed;localStorage.setItem('lifeRoadPortraitCollapsed',portraitCollapsed?'1':'0');applyPortraitCollapsed()}
function toggleBgm(){bgmOn=!bgmOn;localStorage.setItem('lifeRoadBgmOn',bgmOn?'1':'0');updateAudioToggleUi();if(bgmOn){ensureAudio();startBgm(state?.stageIndex||0)}else if(bgmTimer){clearInterval(bgmTimer);bgmTimer=null}}
function toggleSfx(){sfxOn=!sfxOn;localStorage.setItem('lifeRoadSfxOn',sfxOn?'1':'0');updateAudioToggleUi();if(sfxOn)ensureAudio()}
els.wheel.innerHTML='';setupBoardDrag();
const advanceRollInput=e=>{if(!state?.pendingRollAdvance?.ready)return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation?.();tryAdvancePendingRoll()};
els.rollWaitLayer?.addEventListener('pointerdown',advanceRollInput,{capture:true});
els.rollWaitLayer?.addEventListener('click',advanceRollInput,{capture:true});
els.boardPanel?.addEventListener('pointerdown',e=>{if(state?.pendingRollAdvance?.ready)advanceRollInput(e)},{capture:true});
els.avatarPickerClose?.addEventListener('click',closeAvatarPicker);
els.avatarPicker?.addEventListener('click',e=>{if(e.target===els.avatarPicker)closeAvatarPicker()});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&els.avatarPicker&&!els.avatarPicker.classList.contains('hidden'))closeAvatarPicker()});

els.create.addEventListener('click',createRoom);els.join.addEventListener('click',joinRoom);els.addCpu.addEventListener('click',addCpu);els.fillCpu.addEventListener('click',fillCpu);els.start.addEventListener('click',()=>sendAction({kind:'start'}));els.rollBtn.addEventListener('click',()=>sendAction({kind:'roll'}));els.mode.addEventListener('change',()=>{if(!isHost)return;state.settings.mode=els.mode.value;broadcast()});els.speed.addEventListener('change',()=>{if(!isHost)return;state.settings.speed=els.speed.value;broadcast()});els.messageSpeed?.addEventListener('change',()=>{if(!isHost)return;state.settings.messageSpeed=els.messageSpeed.value;broadcast()});els.bgmBtn?.addEventListener('click',toggleBgm);els.sfxBtn?.addEventListener('click',toggleSfx);els.volumeSlider?.addEventListener('input',e=>setMasterVolume(Number(e.target.value)/100));els.back.addEventListener('click',()=>{clearSavedSession();location.reload()});els.gameHomeBtn?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();showTopScreen()});els.leaveGameBtn?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();leaveCurrentGame(true)});els.resumeBtn?.addEventListener('click',()=>{if(localHomeView&&state)returnToActiveSession();else resumeLastSession()});els.discardResumeBtn?.addEventListener('click',()=>{if(localHomeView&&state)leaveCurrentGame(true);else{clearSavedSession();refreshResumeCard()}});
els.portraitToggle?.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();if(portraitTogglePointerLock)return;portraitTogglePointerLock=true;togglePortraitPanel();setTimeout(()=>portraitTogglePointerLock=false,180)},{capture:true});updateVolumeUi();updateAudioToggleUi();applyPortraitCollapsed();refreshResumeCard();
let messageAdvanceLock=false;
function canAdvanceLocalMessage(){if(!state?.message)return false;const owner=state.players.find(p=>p.id===state.message.ownerId);return state.message.ownerId===localPlayerId&&!owner?.cpu}
function advanceMessage(){if(!canAdvanceLocalMessage()||messageAdvanceLock)return;if(finishTypewriter()){if(state?.message)els.messageOwner.textContent='クリックで次へ';return}messageAdvanceLock=true;sendAction({kind:'nextMessage'});setTimeout(()=>{messageAdvanceLock=false},120)}
// Capture at document level so clicking the board, side UI, portrait, or message frame all advances the current message.
document.addEventListener('click',e=>{const priority=e.target?.closest?.('#portraitToggle,#gameHomeBtn,#leaveGameBtn,#resumeBtn,#discardResumeBtn');if(priority){if(priority.id==='portraitToggle'){e.preventDefault();e.stopImmediatePropagation()}return}if(tryAdvancePendingRoll()){e.preventDefault();e.stopPropagation();return}const tf=state?.fx?.turn,tp=tf&&state?.players?.find(p=>p.id===tf.playerId);if(tf&&tp?.id===localPlayerId&&!tp.cpu){e.preventDefault();e.stopPropagation();sendAction({kind:'dismissTurnIntro'});return}if(!canAdvanceLocalMessage())return;e.preventDefault();e.stopPropagation();advanceMessage()},{capture:true});
document.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){if(tryAdvancePendingRoll()){e.preventDefault();return}if(canAdvanceLocalMessage()){e.preventDefault();advanceMessage()}}},{capture:true});
const unlockAudio=()=>{if(bgmOn||sfxOn)ensureAudio()};document.addEventListener('pointerdown',unlockAudio,{capture:true});document.addEventListener('touchstart',unlockAudio,{capture:true,passive:true});document.addEventListener('click',unlockAudio,{capture:true});window.addEventListener('resize',()=>{applyPortraitCollapsed();if(state?.phase==='playing')requestAnimationFrame(()=>focusBoardCamera());updateBoardDragUi()});
window.addEventListener('beforeunload',saveSession);
const navType=performance?.getEntriesByType?.('navigation')?.[0]?.type;if(navType==='reload'&&loadSession())setTimeout(resumeLastSession,80);
if(globalThis.__LIFE_NODE_TEST__){globalThis.__lifeDebug={newState,makePlayer,startGame,hostHandleAction,maybeRunCpu,getState:()=>state,setHost:v=>{isHost=v},setState:v=>{state=v},setLocalPlayerId:v=>{localPlayerId=v},addCpu,fillCpu,rankUpCheck,eligibleJobs,applyHiddenEventChoice,useCard,CARDS,JOBS,CHOICE_EVENTS};}
})();
