
(()=>{
'use strict';
const $=s=>document.querySelector(s);
const els={home:$('#homeScreen'),lobby:$('#lobbyScreen'),game:$('#gameScreen'),result:$('#resultScreen'),hostName:$('#hostName'),joinName:$('#joinName'),roomInput:$('#roomInput'),create:$('#createBtn'),join:$('#joinBtn'),roomCode:$('#roomCodeText'),net:$('#netStatus'),lobbyPlayers:$('#lobbyPlayers'),start:$('#startBtn'),variant:$('#variantSelect'),mode:$('#modeSelect'),modeInfo:$('#modeInfo'),speed:$('#speedSelect'),messageSpeed:$('#messageSpeedSelect'),hostLobby:$('#hostLobbyControls'),addCpu:$('#addCpuBtn'),fillCpu:$('#fillCpuBtn'),gamePlayers:$('#gamePlayers'),board:$('#board'),boardPanel:$('#boardPanel'),turnName:$('#turnName'),turnStage:$('#turnStage'),roll:$('#rollDisplay'),wheel:$('#rouletteWheel'),rollBtn:$('#rollBtn'),hint:$('#turnHint'),cards:$('#cardArea'),assets:$('#assetArea'),log:$('#gameLog'),choice:$('#choiceOverlay'),messageClickLayer:$('#messageClickLayer'),choiceTitle:$('#choiceTitle'),choiceText:$('#choiceText'),choiceStatus:$('#choiceStatus'),choiceList:$('#choiceList'),message:$('#messageWindow'),messageSpeaker:$('#messageSpeaker'),messageText:$('#messageText'),messageOwner:$('#messageOwner'),messageNext:$('#messageNext'),messageScene:$('#messageScene'),messageActors:$('#messageActors'),curtain:$('#stageCurtain'),curtainIcon:$('#curtainIcon'),curtainName:$('#curtainName'),curtainSub:$('#curtainSub'),turnBanner:$('#turnBanner'),turnBannerName:$('#turnBannerName'),turnBannerAvatar:$('#turnBannerAvatar'),turnBannerIcon:$('#turnBannerIcon'),lastTurnBanner:$('#lastTurnBanner'),portraitImg:$('#portraitImg'),portraitName:$('#portraitName'),portraitRole:$('#portraitRole'),portraitStats:$('#portraitStats'),portraitSub:$('#portraitSub'),portraitBadge:$('#portraitBadge'),eraIcon:$('#eraIcon'),eraName:$('#eraName'),eraFlavor:$('#eraFlavor'),variantBadge:$('#variantBadge'),roundText:$('#roundText'),roundDots:$('#roundDots'),fieldInfo:$('#fieldInfo'),bgmBtn:$('#bgmBtn'),sfxBtn:$('#sfxBtn'),audioFixBtn:$('#audioFixBtn'),volumeSlider:$('#volumeSlider'),volumeValue:$('#volumeValue'),portraitPanel:$('#portraitPanel'),portraitToggle:$('#portraitToggle'),awardArea:$('#awardArea'),resultArea:$('#resultArea'),resultCeremony:$('#resultCeremony'),resultStepLabel:$('#resultStepLabel'),resultRevealArea:$('#resultRevealArea'),resultNext:$('#resultNextBtn'),resultPrev:$('#resultPrevBtn'),resultSummaryBack:$('#resultSummaryBackBtn'),resultSummaryWrap:$('#resultSummaryWrap'),back:$('#backBtn'),resumeCard:$('#resumeCard'),resumeInfo:$('#resumeInfo'),resumeBtn:$('#resumeBtn'),discardResumeBtn:$('#discardResumeBtn'),boardRollPop:$('#boardRollPop'),spaceLandingPop:$('#spaceLandingPop'),spaceLandingIcon:$('#spaceLandingIcon'),spaceLandingText:$('#spaceLandingText'),rollWaitLayer:$('#rollWaitLayer'),rollWaitText:$('#rollWaitText'),avatarPicker:$('#avatarPickerOverlay'),avatarPickerGrid:$('#avatarPickerGrid'),avatarPickerClose:$('#avatarPickerClose'),gameHomeBtn:$('#gameHomeBtn'),leaveGameBtn:$('#leaveGameBtn'),spaceDetail:$('#spaceDetailOverlay'),spaceDetailClose:$('#spaceDetailClose'),spaceDetailIcon:$('#spaceDetailIcon'),spaceDetailTitle:$('#spaceDetailTitle'),spaceDetailText:$('#spaceDetailText'),branchMobilePanel:$('#branchMobilePanel'),branchMobileTitle:$('#branchMobileTitle'),branchMobileMain:$('#branchMobileMain'),branchMobileMainTitle:$('#branchMobileMainTitle'),branchMobileMainNote:$('#branchMobileMainNote'),branchMobileAlt:$('#branchMobileAlt'),branchMobileAltTitle:$('#branchMobileAltTitle'),branchMobileAltNote:$('#branchMobileAltNote'),mapOverviewBtn:$('#mapOverviewBtn'),titleCutOverlay:$('#titleCutOverlay'),titleCutLogo:$('#titleCutLogo'),howtoBtn:$('#howtoBtn'),howtoOverlay:$('#howtoOverlay'),howtoClose:$('#howtoClose')};
const COLORS=['#5577a8','#b45f5f','#5b8c62','#936aa2'];
const AVATAR_OPTIONS=[{id:'akane',name:'あかね',cat:'girl',src:'assets/avatar5.webp'},{id:'kotoha',name:'ことは',cat:'girl',src:'assets/avatar6.webp'},{id:'momoka',name:'ももか',cat:'girl',src:'assets/avatar7.webp'},{id:'ruri',name:'るり',cat:'girl',src:'assets/avatar8.webp'},{id:'yukari',name:'ゆかり',cat:'girl',src:'assets/avatar9.webp'},{id:'dino_girl',name:'恐竜ガール',cat:'quirky',src:'assets/avatar15.webp'},{id:'mushroom_girl',name:'きのこガール',cat:'quirky',src:'assets/avatar16.webp'},{id:'ghost_girl',name:'おばけガール',cat:'quirky',src:'assets/avatar18.webp'},{id:'robot_girl',name:'メカガール',cat:'quirky',src:'assets/avatar19.webp'},{id:'penguin_girl',name:'ペンギンガール',cat:'quirky',src:'assets/avatar21.webp'},{id:'panda_girl',name:'パンダガール',cat:'quirky',src:'assets/avatar23.webp'},{id:'street_boy',name:'やんちゃ少年',cat:'boy',src:'assets/avatar24.webp'},{id:'adventure_boy',name:'冒険少年',cat:'boy',src:'assets/avatar25.webp'},{id:'office_boy',name:'会社員くん',cat:'boy',src:'assets/avatar26.webp'},{id:'hamster',name:'ハムスター',cat:'animal',src:'assets/avatar28.webp'},{id:'penguin',name:'ペンギン',cat:'animal',src:'assets/avatar30.webp'},{id:'dino',name:'ちび恐竜',cat:'quirky',src:'assets/avatar31.webp'},{id:'panda_odd',name:'ブサカワパンダ',cat:'animal',src:'assets/avatar33.webp'},{id:'hamster_odd',name:'ぽっちゃりハム',cat:'animal',src:'assets/avatar34.webp'},{id:'alien_odd',name:'脱力宇宙人',cat:'quirky',src:'assets/avatar35.webp'},
{id:'wolf_girl',name:'オオカミっ娘',cat:'girl',src:'assets/avatar36.webp'},
{id:'sleepy_girl',name:'おやすみガール',cat:'girl',src:'assets/avatar37.webp'},
{id:'fox_miko',name:'狐巫女',cat:'girl',src:'assets/avatar38.webp'},
{id:'inventor_boy',name:'発明少年',cat:'boy',src:'assets/avatar39.webp'},
{id:'witch_girl',name:'星の魔女',cat:'girl',src:'assets/avatar40.webp'},
{id:'knight_boy',name:'ちび騎士',cat:'boy',src:'assets/avatar41.webp'},
{id:'office_girl',name:'オフィス女子',cat:'girl',src:'assets/avatar42.webp'},
{id:'skater_boy',name:'スケボー少年',cat:'boy',src:'assets/avatar43.webp'},
{id:'red_panda',name:'レッサーパンダ',cat:'animal',src:'assets/avatar44.webp'},
{id:'star_alien',name:'星の宇宙人',cat:'quirky',src:'assets/avatar45.webp'}];
const AVATARS=AVATAR_OPTIONS.map(v=>v.src);
const TOKENS=['assets/token1.webp','assets/token2.webp','assets/token3.webp','assets/token4.webp'];
const SPACE_ICONS={event:'assets/icon_new_event.webp',plus:'assets/icon_new_plus.webp',minus:'assets/icon_new_minus.webp',grow:'assets/icon_new_grow.webp',social:'assets/icon_new_social.webp',chance:'assets/icon_new_chance.webp',gamble:'assets/icon_new_chance.webp',card:'assets/icon_new_card.webp',start:'assets/icon_new_start.webp',career:'assets/icon_new_career.webp',romance:'assets/icon_new_romance.webp',payday:'assets/icon_new_payday.webp',property:'assets/icon_new_property.webp',family:'assets/icon_new_family.webp',treasure:'assets/icon_new_treasure.webp',submap:'assets/icon_new_branch.webp',branch:'assets/icon_new_branch.webp',special:'assets/icon_new_chance.webp',bigluck:'assets/icon_new_bigluck.webp',bigbad:'assets/icon_new_bigbad.webp'};
const STAGE_BACKGROUNDS={baby:'assets/map_baby.webp',elementary:'assets/map_elementary.webp',middle:'assets/map_middle.webp',high:'assets/map_high.webp',young:'assets/map_young.webp',mature:'assets/map_mature.webp',senior:'assets/map_senior.webp'};
const STAGES=[
 {id:'baby',name:'幼少期',icon:'🍼'},{id:'elementary',name:'小学生',icon:'🎒'},{id:'middle',name:'中学生',icon:'📘'},{id:'high',name:'高校生',icon:'🏫'},
 {id:'young',name:'大人前半',icon:'🌱'},{id:'mature',name:'大人後半',icon:'🏙️'},{id:'senior',name:'円熟期',icon:'🌅'}
];
const MODES={
 quick:{name:'さっくり',rounds:[3,3,3,5,9,9,5],sizes:[42,42,42,42,42,42,42],desc:'短めのプレイ時間で、進路・仕事・恋愛・家族まで一通り楽しめます。'},
 standard:{name:'普通',rounds:[3,4,4,6,12,12,8],sizes:[42,42,42,42,42,42,42],desc:'大人時代までバランスよく遊べる標準ボリュームです。'},
 long:{name:'ロング',rounds:[3,4,4,8,15,15,10],sizes:[42,42,42,42,42,42,42],desc:'大人前半・後半を大幅に増量。恋愛・結婚・昇進・家族・資産形成をじっくり楽しむ。'}
};
const CPU_TYPES=[
 {id:'balanced',name:'バランス型',icon:'⚖️',w:{study:1,career:1,love:1,asset:1,risk:1}},
 {id:'scholar',name:'知性派',icon:'🧠',w:{study:2.2,career:1.3,love:.7,asset:1,risk:.7}},
 {id:'career',name:'仕事人',icon:'💼',w:{study:1.2,career:2.3,love:.6,asset:1.4,risk:1}},
 {id:'romance',name:'恋愛派',icon:'💗',w:{study:.8,career:.8,love:2.5,asset:.7,risk:1.1}},
 {id:'investor',name:'資産家',icon:'📈',w:{study:.8,career:1.2,love:.7,asset:2.6,risk:1.5}}
];
const JOBS=[
 ['office','会社スタッフ',140000,{communication:1},'career'],['sales','営業職',170000,{communication:4},'career'],['chef','料理人',160000,{fitness:2,charm:2},'career'],['designer','デザイナー',170000,{charm:4},'career'],['engineer','エンジニア',200000,{knowledge:5},'study'],['teacher','教師',190000,{knowledge:5,communication:3},'study'],['nurse','医療スタッフ',200000,{knowledge:4,communication:3},'study'],['civil','公務員',180000,{knowledge:4},'study'],['mechanic','整備士',180000,{fitness:3,knowledge:2},'career'],['creator','動画クリエイター',150000,{charm:4,communication:3},'risk'],
 ['programmer','プログラマー',210000,{knowledge:6},'study'],['architect','建築士',230000,{knowledge:7},'study'],['researcher','研究職',240000,{knowledge:8},'study'],['doctor','医師',290000,{knowledge:10},'study'],['lawyer','法律家',270000,{knowledge:9,communication:5},'study'],['pilot','パイロット',260000,{knowledge:7,fitness:5},'career'],
 ['athlete','プロ野球選手',250000,{fitness:8,charm:3},'risk'],['soccer','プロサッカー選手',240000,{fitness:8,communication:3},'risk'],['fighter','格闘家',220000,{fitness:9,charm:3},'risk'],
 ['musician','音楽家',180000,{charm:7},'risk'],['actor','俳優',190000,{charm:8,communication:5},'risk'],['idol','タレント',200000,{charm:9},'risk'],['vtuber','VTuber',190000,{charm:7,communication:5,knowledge:3},'risk'],
 ['manager','経営企画',260000,{knowledge:7,communication:7},'career'],['consultant','コンサルタント',280000,{knowledge:8,communication:8},'career'],['entrepreneur','起業家',240000,{knowledge:6,communication:7},'risk'],['trader','トレーダー',250000,{knowledge:7},'asset'],['author','作家',170000,{knowledge:6,charm:5},'risk'],['artisan','大工',200000,{fitness:6,knowledge:4},'career'],['farmer','農業経営',190000,{fitness:5,communication:3},'asset'],['game','ゲーム企画',210000,{knowledge:6,charm:4},'career'],['scientist','先端研究者',310000,{knowledge:12},'study'],['executive','企業役員',340000,{knowledge:9,communication:10},'career']
].map((x,i)=>({id:x[0],name:x[1],base:x[2],req:x[3],tag:x[4],index:i}));
// 転職でのみ解禁される上位職。指定職で一定の仕事経験を積む必要がある。
const ADVANCED_CAREERS=[
 {id:'director',name:'管理職',base:300000,req:{knowledge:7,communication:8},tag:'career',careerOnly:true,prereq:{jobs:['office','sales','civil','manager'],exp:7}},
 {id:'headchef',name:'料理長',base:300000,req:{fitness:5,charm:7,communication:5},tag:'career',careerOnly:true,prereq:{jobs:['chef'],exp:7}},
 {id:'producer',name:'プロデューサー',base:310000,req:{charm:8,communication:8,knowledge:5},tag:'career',careerOnly:true,prereq:{jobs:['creator','vtuber','actor','musician','game','idol'],exp:7}},
 {id:'coach',name:'プロコーチ',base:290000,req:{fitness:8,communication:7},tag:'career',careerOnly:true,prereq:{jobs:['athlete','soccer','fighter'],exp:7}},
 {id:'masterbuilder',name:'棟梁',base:300000,req:{fitness:7,knowledge:7,communication:5},tag:'career',careerOnly:true,prereq:{jobs:['artisan'],exp:7}},
 {id:'techlead',name:'技術責任者',base:330000,req:{knowledge:10,communication:7},tag:'study',careerOnly:true,prereq:{jobs:['engineer','programmer','architect','researcher'],exp:9}}
];
for(const j of ADVANCED_CAREERS){j.index=JOBS.length;JOBS.push(j)}
const executiveJob=JOBS.find(j=>j.id==='executive');if(executiveJob){executiveJob.careerOnly=true;executiveJob.prereq={jobs:['director','manager','consultant','entrepreneur','techlead'],exp:9}}
const JOB_TRAIT_GROUPS={
 stable:new Set(['office','teacher','nurse','civil']),
 performance:new Set(['sales','designer','creator','athlete','soccer','fighter','musician','actor','idol','vtuber','entrepreneur','trader','author']),
 specialist:new Set(['engineer','programmer','architect','researcher','doctor','lawyer','scientist','techlead','game']),
 field:new Set(['chef','mechanic','pilot','artisan','farmer','headchef','masterbuilder']),
 leadership:new Set(['manager','consultant','executive','director','producer','coach'])
};
function jobTraitKey(j){if(!j)return'normal';for(const [k,set] of Object.entries(JOB_TRAIT_GROUPS))if(set.has(j.id))return k;return'normal'}
function jobTraitInfo(j){
 const key=jobTraitKey(j);
 return ({
  stable:{name:'安定職',desc:'収入マスを通るたび安定手当が入る。大きな上振れは少ないが収入が安定。'},
  performance:{name:'成果報酬型',desc:'仕事イベントで給与査定が発生することがある。給料が上がることも下がることもある。'},
  specialist:{name:'専門職',desc:'仕事イベントで主能力が通常より伸びやすい。就職・昇格条件は高め。'},
  field:{name:'現場職',desc:'仕事イベントの成果報酬が多め。複数能力を求められる職が多い。'},
  leadership:{name:'マネジメント職',desc:'仕事イベントの成果報酬が多く、交流も伸びやすい。到達条件は重い。'},
  normal:{name:'標準型',desc:'大きな癖がなく、安定した成長がしやすい。'}
 })[key];
}
function jobTraitText(j){const t=jobTraitInfo(j);return`${t.name}：${t.desc}`}
function stableJobAllowance(p){return p?.job&&jobTraitKey(p.job)==='stable'?10000*Math.max(1,Number(p.jobRank)||1):0}
function jobWorkRewardMultiplier(j){const k=jobTraitKey(j);return k==='performance'?1.15:k==='field'?1.15:k==='leadership'?1.20:1}
function jobWorkStatGain(j){return jobTraitKey(j)==='specialist'?2:1}
function jobWorkCommunicationBonus(j){return jobTraitKey(j)==='leadership'?1:0}

// Family members reuse character art that already existed in the project.
// These extra existing images are reserved for NPC/family use and do not appear in the player picker.
const EXTRA_EXISTING_AVATARS=[
 {id:'old_alice',src:'assets/avatar10.webp',family:true},{id:'old_chloe',src:'assets/avatar11.webp',family:true},{id:'old_mint',src:'assets/avatar12.webp',family:true},{id:'old_serena',src:'assets/avatar13.webp',family:true},{id:'old_koharu',src:'assets/avatar14.webp',family:true},
 {id:'old_alien_girl',src:'assets/avatar17.webp',family:true},{id:'old_slime_girl',src:'assets/avatar20.webp',family:true},{id:'old_hamster_girl',src:'assets/avatar22.webp',family:true},
 {id:'old_panda',src:'assets/avatar27.webp',family:false},{id:'old_alien',src:'assets/avatar29.webp',family:false},{id:'old_ghost',src:'assets/avatar32.webp',family:false}
];
const FAMILY_FRIENDLY_CURRENT_IDS=new Set(['akane','kotoha','momoka','ruri','yukari','dino_girl','mushroom_girl','ghost_girl','robot_girl','penguin_girl','panda_girl','street_boy','adventure_boy','office_boy','wolf_girl','sleepy_girl','fox_miko','inventor_boy','witch_girl','knight_boy','office_girl','skater_boy','red_panda','star_alien']);
const ALL_EXISTING_CHARACTER_ART=[
 ...AVATAR_OPTIONS.map(v=>({id:v.id,src:v.src,family:FAMILY_FRIENDLY_CURRENT_IDS.has(v.id)})),
 ...EXTRA_EXISTING_AVATARS
];
// Retired artwork: completely removed from all current pools. Old saves using these are migrated on load.
const RETIRED_AVATAR_SRCS=new Set(['assets/avatar1.webp','assets/avatar2.webp','assets/avatar3.webp','assets/avatar4.webp']);
const CHILD_NAMES=['あお','ひかり','ゆず','りん','はる','なぎ','つむぎ','そら','みなと','かなた','いおり','こはる','あさひ','すず','れお','しおん','まひろ','ひなた','あき','るか'];
const CHILD_JOBS=[
 ['会社員',32000],['デザイナー',35000],['エンジニア',42000],['公務員',38000],['料理人',34000],['研究職',45000],['販売職',30000],['クリエイター',36000],['医療職',43000],['スポーツ関係',36000]
];
const PARTNER_TYPES={
 family:{id:'family',name:'家庭派',icon:'🏠',desc:'家で過ごす時間や家族行事を大切にする。家庭イベントで思い出が増えやすい。'},
 career:{id:'career',name:'キャリア派',icon:'💼',desc:'仕事への意欲が高い。昇進・転職・大きな仕事で配偶者収入が伸びやすい。'},
 steady:{id:'steady',name:'堅実派',icon:'🐢',desc:'派手さより安定重視。貯蓄や資格など、じわじわ家計を強くする展開が多い。'},
 social:{id:'social',name:'社交派',icon:'🤝',desc:'人付き合いが広い。友人・人脈・地域活動から交流や臨時収入につながりやすい。'},
 adventure:{id:'adventure',name:'冒険派',icon:'🧭',desc:'旅行や新しい挑戦が好き。出費も増えるが、思い出や能力が大きく伸びやすい。'},
 intellectual:{id:'intellectual',name:'知性派',icon:'📚',desc:'学びや資格取得を好む。知力が伸び、専門性を活かして収入が上がることもある。'},
 creative:{id:'creative',name:'クリエイティブ派',icon:'🎨',desc:'作品づくりや副業に積極的。魅力や思い出が伸び、当たれば副収入も大きい。'},
 volatile:{id:'volatile',name:'波乱派',icon:'🎢',desc:'転職・独立・思い切った挑戦が多い。大成功も大失敗もあり、人生の振れ幅が大きい。'}
};
const PARTNERS=[
 ['あおい','落ち着いた読書好き','knowledge','図書館スタッフ',72000,'intellectual'],
 ['ひなた','明るいアウトドア派','fitness','スポーツインストラクター',78000,'adventure'],
 ['れん','話好きの社交派','communication','営業職',88000,'social'],
 ['みさき','おしゃれ好き','charm','デザイナー',84000,'creative'],
 ['かえで','堅実な仕事人','knowledge','会社員',90000,'steady'],
 ['そら','自由なクリエイター','charm','クリエイター',82000,'volatile'],
 ['ゆう','スポーツ好き','fitness','トレーナー',80000,'adventure'],
 ['なお','聞き上手','communication','福祉スタッフ',76000,'family'],
 ['つばさ','好奇心旺盛','knowledge','研究補助',94000,'intellectual'],
 ['まこと','行動派','fitness','技術職',86000,'career']
].map((x,i)=>({id:'pt'+i,name:x[0],desc:x[1],pref:x[2],job:x[3],income:x[4],type:x[5]}));

const PARTNER_LIFE_EVENTS={
 family:[
  {id:'family_schedule',text:'勤務時間を少し調整し、家で過ごせる時間を増やした。',incomeDelta:-3000,stats:{communication:1},memory:5,tone:'good'},
  {id:'family_sidework',text:'家でできる小さな副業を始め、家計の足しになるようになった。',cash:70000,incomeDelta:3000,memory:3,tone:'good'},
  {id:'family_skill',text:'家事や暮らしに役立つ講座へ通い、生活の段取りがかなり上手くなった。',stats:{knowledge:1},memory:4,tone:'good'},
  {id:'family_support',text:'親戚の手伝いをきっかけに、家族同士の付き合いがぐっと増えた。',stats:{communication:2},memory:6,tone:'good'}
 ],
 career:[
  {id:'career_promo',text:'仕事ぶりが評価され、配偶者が昇進した。',incomeDelta:14000,cash:120000,memory:3,tone:'good'},
  {id:'career_headhunt',text:'別の会社から声がかかり、より条件の良い職場へ転職した。',incomeDelta:18000,job:'管理職',memory:4,tone:'good'},
  {id:'career_project',text:'大きな案件を成功させ、まとまった成果報酬が入った。',cash:220000,stats:{communication:1},memory:4,tone:'good'},
  {id:'career_reset',text:'忙しさが続き、いったん役職を離れて働き方を見直すことにした。',incomeDelta:-9000,stats:{communication:1},memory:5,tone:'bad'}
 ],
 steady:[
  {id:'steady_raise',text:'長く勤めた実績が評価され、少しだけ給料が上がった。',incomeDelta:6000,memory:2,tone:'good'},
  {id:'steady_save',text:'家計を見直して固定費を整理し、まとまったお金を貯蓄へ回せた。',cash:110000,memory:2,tone:'good'},
  {id:'steady_cert',text:'仕事に役立つ資格を取得し、毎月の収入も少し増えた。',incomeDelta:7000,stats:{knowledge:1},memory:3,tone:'good'},
  {id:'steady_bonus',text:'勤務先から永年勤続の小さな表彰と一時金を受け取った。',cash:90000,memory:4,tone:'good'}
 ],
 social:[
  {id:'social_network',text:'人脈から新しい仕事を紹介され、ちょっとした副収入につながった。',cash:100000,incomeDelta:3000,stats:{communication:1},memory:4,tone:'good'},
  {id:'social_event',text:'地域イベントのまとめ役を引き受け、知り合いが一気に増えた。',stats:{communication:2},memory:6,tone:'good'},
  {id:'social_party',text:'友人たちを集めた大きな会を開き、出費はしたが忘れられない夜になった。',cash:-90000,stats:{communication:1,charm:1},memory:8,tone:'normal'},
  {id:'social_offer',text:'知人から仕事の相談を受け、そのまま継続案件になった。',incomeDelta:5000,cash:60000,memory:3,tone:'good'}
 ],
 adventure:[
  {id:'adv_trip',text:'思い立って長めの旅行を計画し、普段なら行かない場所まで足を伸ばした。',cash:-140000,stats:{fitness:1},memory:9,tone:'good'},
  {id:'adv_project',text:'遠方のプロジェクトへ自分から手を挙げ、新しい仕事経験を積んだ。',incomeDelta:9000,job:'プロジェクト担当',stats:{knowledge:1},memory:6,tone:'good'},
  {id:'adv_hobby',text:'新しいアウトドア趣味を始め、休日の過ごし方が大きく変わった。',cash:-70000,stats:{fitness:2},memory:7,tone:'good'},
  {id:'adv_sidejob',text:'旅先で知り合った人から思わぬ仕事を頼まれ、臨時収入になった。',cash:150000,stats:{communication:1},memory:5,tone:'good'}
 ],
 intellectual:[
  {id:'intel_cert',text:'難しい資格試験に合格し、専門手当が付くようになった。',incomeDelta:9000,stats:{knowledge:2},memory:4,tone:'good'},
  {id:'intel_lecture',text:'得意分野について小さな講座を頼まれ、講師料を受け取った。',cash:100000,stats:{knowledge:1,communication:1},memory:5,tone:'good'},
  {id:'intel_job',text:'専門性を買われ、より高度な仕事を任されるようになった。',incomeDelta:11000,job:'専門職',stats:{knowledge:1},memory:3,tone:'good'},
  {id:'intel_study',text:'仕事とは別に勉強を続け、家でも新しい知識の話題が増えた。',stats:{knowledge:2},memory:5,tone:'good'}
 ],
 creative:[
  {id:'creative_hit',text:'作ったものが予想以上に評判になり、まとまった依頼が舞い込んだ。',cash:190000,incomeDelta:7000,stats:{charm:1},memory:6,tone:'good'},
  {id:'creative_show',text:'作品を発表する場を作り、準備費はかかったが大きな手応えを得た。',cash:-90000,stats:{charm:2},memory:8,tone:'good'},
  {id:'creative_slump',text:'しばらく思うように仕事が進まず、収入も少し落ち込んだ。',incomeDelta:-7000,memory:3,tone:'bad'},
  {id:'creative_client',text:'昔の作品を見た人から新しい依頼が入り、副収入が増えた。',cash:120000,incomeDelta:4000,memory:4,tone:'good'}
 ],
 volatile:[
  {id:'volatile_startup_win',text:'勢いで始めた新しい事業が当たり、生活が一気に忙しくなった。',cash:320000,incomeDelta:23000,job:'起業家',memory:8,tone:'good'},
  {id:'volatile_startup_loss',text:'思い切って始めた仕事がうまくいかず、立て直しにかなりのお金がかかった。',cash:-280000,incomeDelta:-18000,job:'フリーランス',memory:7,tone:'bad'},
  {id:'volatile_change',text:'突然まったく違う業界へ飛び込み、ゼロから新しい仕事を始めた。',incomeDelta:6000,job:'新しい業界の仕事',stats:{communication:1},memory:7,tone:'normal'},
  {id:'volatile_bigdeal',text:'一か八かで受けた大仕事が成功し、予想外の報酬が入った。',cash:380000,stats:{charm:1},memory:8,tone:'good'}
 ]
};

const PARTNER_COUPLE_EVENTS={
 family:[
  {text:'家で一緒に少し手の込んだ夕食を作り、ゆっくり話して過ごした。',cash:-25000,stats:{communication:1},memory:7},
  {text:'近場へ家族向けの小旅行に出かけ、写真をたくさん残した。',cash:-80000,stats:{communication:1},memory:9},
  {text:'家の模様替えを二人で始め、思った以上に大仕事になった。',cash:-45000,stats:{knowledge:1},memory:6}
 ],
 career:[
  {text:'お互いの仕事の節目を祝って、少し良い店で食事をした。',cash:-70000,stats:{communication:1},memory:6},
  {text:'忙しい予定を合わせて丸一日休みを取り、久しぶりに二人で出かけた。',cash:-55000,stats:{charm:1},memory:7},
  {text:'配偶者の仕事の相談にじっくり付き合い、次の方針を一緒に考えた。',cash:0,stats:{knowledge:1,communication:1},memory:5}
 ],
 steady:[
  {text:'近所の店を何軒か巡る、背伸びしない穏やかなデートを楽しんだ。',cash:-18000,stats:{communication:1},memory:6},
  {text:'二人で家計と将来の予定を整理し、欲しいものを一つだけ買うことにした。',cash:-30000,stats:{knowledge:1},memory:5},
  {text:'家で映画を見ながらのんびり過ごし、静かな休日を満喫した。',cash:-5000,stats:{},memory:6}
 ],
 social:[
  {text:'配偶者の友人たちとの食事会へ参加し、新しい知り合いが増えた。',cash:-50000,stats:{communication:2},memory:7},
  {text:'二人で大きなイベントへ出かけ、帰る頃には知り合いが何人も増えていた。',cash:-65000,stats:{communication:1,charm:1},memory:8},
  {text:'友人夫婦を招いてホームパーティーを開き、夜までにぎやかに過ごした。',cash:-45000,stats:{communication:2},memory:7}
 ],
 adventure:[
  {text:'朝に思い立って遠出し、予定になかった場所までドライブした。',cash:-90000,stats:{fitness:1},memory:9},
  {text:'二人で初めてのアクティビティに挑戦し、翌日は筋肉痛になった。',cash:-70000,stats:{fitness:2},memory:8},
  {text:'格安チケットを見つけ、その勢いのまま短い旅行へ出発した。',cash:-120000,stats:{charm:1},memory:10}
 ],
 intellectual:[
  {text:'本屋と博物館を一日かけて巡り、帰宅後も話が尽きなかった。',cash:-30000,stats:{knowledge:2},memory:7},
  {text:'興味のある講演会へ二人で参加し、帰り道に感想を語り合った。',cash:-20000,stats:{knowledge:1,communication:1},memory:6},
  {text:'家でそれぞれ好きな本を読み、面白かった部分だけ交換して話した。',cash:-5000,stats:{knowledge:1},memory:5}
 ],
 creative:[
  {text:'展覧会を見に行き、そのまま街を歩きながら写真を撮って回った。',cash:-45000,stats:{charm:2},memory:8},
  {text:'二人で小さな作品を作り始め、休日を丸ごと使って完成させた。',cash:-35000,stats:{charm:1,knowledge:1},memory:8},
  {text:'ライブや舞台を見に行き、帰宅後まで演出の話で盛り上がった。',cash:-65000,stats:{charm:2},memory:9}
 ],
 volatile:[
  {text:'突然「今日は豪華にいこう」と言い出し、予定外の高級店へ向かった。',cash:-130000,stats:{charm:1},memory:9},
  {text:'急に予定を変えて知らない街へ出かけ、結果的にかなり面白い一日になった。',cash:-60000,stats:{communication:1},memory:9},
  {text:'思いつきで二人の新しい趣味を始め、道具を一式そろえてしまった。',cash:-100000,stats:{fitness:1,charm:1},memory:8}
 ]
};
const PROPS=[
 ['郊外の小さな家',220000,180000,0],
 ['郊外のガレージ',280000,240000,7000],
 ['駅前ワンルーム',320000,290000,9000],
 ['駅近マンション',360000,330000,10000],
 ['海辺のコテージ',420000,380000,12000],
 ['古民家リノベ',480000,450000,14000],
 ['小さな駐車場',540000,500000,18000],
 ['コインランドリー店舗',600000,560000,24000],
 ['都市型マンション',650000,620000,18000],
 ['小型倉庫',700000,670000,26000],
 ['店舗付き住宅',760000,720000,28000],
 ['シェアハウス',820000,780000,33000],
 ['高原別荘',880000,800000,20000],
 ['小さなアパート',1000000,970000,45000],
 ['商店街の店舗',1100000,1050000,48000],
 ['デザイナーズ住宅',1200000,1150000,26000],
 ['オフィス区画',1350000,1300000,56000],
 ['商業ビル区画',1500000,1450000,65000],
 ['温泉宿',1650000,1580000,70000],
 ['リゾートヴィラ',1800000,1700000,42000],
 ['テナントビル',1950000,1880000,82000],
 ['大型賃貸物件',2200000,2100000,90000],
 ['リゾートホテル',2500000,2400000,105000],
 ['都心商業ビル',3000000,2880000,135000]
].map((x,i)=>({id:'pr'+i,name:x[0],price:x[1],value:x[2],income:x[3]}));
const TREASURES=[['古い腕時計',50000,180000],['限定スニーカー',30000,120000],['アンティーク食器',60000,250000],['希少なレコード',40000,200000],['古いカメラ',70000,260000],['記念硬貨セット',80000,320000],['名工の工芸品',100000,420000],['謎の絵画',120000,650000],['ヴィンテージ家具',90000,350000],['絶版コミック全集',50000,230000],['古酒コレクション',100000,480000],['クラシック楽器',130000,550000],['鉱石標本',60000,300000],['サイン入り記念品',70000,380000],['古地図',90000,500000],['未鑑定の箱',30000,800000]].map((x,i)=>({id:'tr'+i,name:x[0],buy:x[1],max:x[2]}));
const CARDS=[
 {id:'plus2',name:'追い風カード',desc:'次のルーレット結果に+5して進む',tag:'risk',turnCost:'free'},
 {id:'guard',name:'安心カード',desc:'所持中、金銭損失イベントが発生すると自動で1枚消費し、その損失を半減',tag:'asset',turnCost:'auto'},
 {id:'study',name:'集中カード',desc:'知力+4',tag:'study',turnCost:'end'},
 {id:'charm',name:'イメチェンカード',desc:'魅力+4',tag:'love',turnCost:'end'},
 {id:'network',name:'交流カード',desc:'交流+4',tag:'career',turnCost:'end'},
 {id:'fitness',name:'元気カード',desc:'体力+4',tag:'career',turnCost:'end'},
 {id:'bonus',name:'臨時収入カード',desc:'その場で1万円〜30万円をランダムに獲得',tag:'asset',turnCost:'free'},
 {id:'date',name:'恋愛応援カード',desc:'交際中なら好感度+2',tag:'love',turnCost:'end'},
 ...Array.from({length:10},(_,i)=>({id:`roll${i+1}`,name:`出目${i+1}カード`,desc:`次のルーレットの出目が${i+1}になる`,tag:'risk',turnCost:'free',fixedRoll:i+1})),
 {id:'mud',name:'泥沼カード',desc:'自分を含むランダムな1人の次のルーレットの出目を1にする',tag:'risk',turnCost:'free'},
 {id:'steal',name:'横取りカード',desc:'自分以外の1人を選び、1万円〜100万円をランダムに奪う',tag:'asset',turnCost:'end',needsOther:true},
 {id:'jealousy',name:'嫉妬カード',desc:'自分以外の1人を選び、知力・体力・魅力のどれかを2奪う。自分の交流-1',tag:'love',turnCost:'free',needsOther:true},
 {id:'freewill',name:'自由気ままカード',desc:'次のルーレットの出目を1〜10から自由に決める',tag:'risk',turnCost:'free'}
];
const EVENT_RAW={
 baby:[
  ['祖父母が遊びに来て、一日中抱っこされたり写真を撮られたりして可愛がられた',30000,{charm:1,communication:1},2],
  ['木の積み木を色と形ごとに並べ、最後には自分の背丈ほどの塔を作った',0,{knowledge:2},1],
  ['近所の公園で滑り台と追いかけっこを何度も繰り返し、帰る頃にはぐっすり眠った',0,{fitness:2},1],
  ['親戚の集まりで最初は隠れていたが、帰る頃には自分からみんなに話しかけていた',0,{communication:2},2],
  ['お気に入りのぬいぐるみをスーパーに置き忘れ、家族総出で探し回った',-10000,{},1],
  ['七五三のように少しよそ行きの服を着て、家族写真をたくさん撮ってもらった',0,{charm:1},3],
  ['動物の絵本を気に入り、同じページを何度も指さして名前を覚えた',0,{knowledge:2},2],
  ['朝ごはんをしっかり食べ、公園で遊び、夜は早く寝る生活が続いて体が丈夫になった',0,{fitness:2},1]],
 elementary:[
  ['算数の小テストで満点を取り、ごほうびに好きなお菓子を買ってもらった',10000,{knowledge:2},2],
  ['運動会のクラス対抗リレーで最終走者を任され、最後の直線で一人抜いた',10000,{fitness:2},3],
  ['休み時間に始めた鬼ごっこへクラスの半分が参加し、いつの間にか遊びの中心になっていた',0,{communication:2,charm:1},3],
  ['図書館で恐竜図鑑に夢中になり、借りられる上限いっぱいまで関連本を持ち帰った',0,{knowledge:3},2],
  ['家で新しい冒険ゲームに夢中になり、おこづかいを攻略本と追加コントローラーに使った',-10000,{knowledge:1},2],
  ['夏休みに太陽熱で目玉焼きを作る自由研究をまとめ、校内発表で表彰された',30000,{knowledge:2,charm:1},4],
  ['遠足の水族館で友達とはしゃぎすぎ、売店で予定以上におみやげを買った',-10000,{fitness:1,communication:1},4],
  ['週末に家族の車を洗う手伝いをして、特別なおこづかいをもらった',20000,{communication:1},1],
  ['近所のピアノ教室へ通い始め、発表会に向けて短い曲を一曲練習することになった',-20000,{charm:2},2],
  ['友達と空き地に段ボールとブルーシートで秘密基地を作り、合言葉まで決めた',0,{communication:2},4]],
 middle:[
  ['バスケットボール部で毎日シュート練習を続け、放課後の自主練にも残るようになった',-10000,{fitness:3},3],
  ['数学の定期テストで学年上位に入り、家族から小さなお祝いをもらった',20000,{knowledge:3},2],
  ['文化祭のステージ企画で司会を担当し、予定外のトラブルもアドリブでつないだ',0,{charm:2,communication:2},4],
  ['商店街のパン屋で一日職業体験をし、接客と品出しを任された',30000,{communication:1},2],
  ['学校近くのイラストコンテストへ作品を出し、結果発表まで毎日掲示板を確認した',-20000,{charm:2},4],
  ['部活の片づけ方を巡って親友と本気で口論し、数日間ほとんど話さなくなった',0,{communication:-1},1],
  ['けんかした親友と放課後のファミレスで話し合い、最後は同じポテトをつまんで仲直りした',0,{communication:3},4],
  ['英語検定の参考書を買い、寝る前に毎日20分ずつ勉強する習慣を始めた',-10000,{knowledge:2},2],
  ['体力測定の20mシャトルランで自己ベストを大きく更新し、体育の先生に驚かれた',10000,{fitness:2},2],
  ['自作した弁当の写真をSNSに載せたところ、友達以外からも反応がついた',10000,{charm:2},3]],
 high:[
  ['大学受験向けの全国模試で第一志望の判定が一段上がり、勉強の手応えを感じた',0,{knowledge:3},2],
  ['体育祭の障害物リレーでアンカーを任され、クラスを逆転優勝へ導いた',10000,{fitness:3},4],
  ['文化祭の実行委員として出店の配置と時間割をまとめ、当日の混乱を最小限に抑えた',0,{communication:3},4],
  ['放課後のファミレスでアルバイトを続け、夏休みの旅行代を自分で貯めた',50000,{communication:1},2],
  ['好きなバンドの限定ライブとグッズ販売に全力を出し、一日でかなり使ってしまった',-40000,{charm:2},3],
  ['担任との進路面談で、名前も知らなかった学部や職業をいくつも教えてもらった',0,{knowledge:1,communication:2},2],
  ['地域の動画コンテストに三分の短編を応募し、審査員特別賞に選ばれた',50000,{charm:3},5],
  ['バスケットボール部最後の大会で県大会出場を懸けた試合に挑んだ',-20000,{fitness:2},5],
  ['卒業前に友達と温泉旅行を計画し、宿と交通費を少しずつ出し合った',-30000,{communication:2},4],
  ['定期テスト前に動画を見続けて夜更かしし、翌日は眠気と戦いながら授業を受けた',0,{fitness:-1,knowledge:1},1]],
 young:[
  ['取引先へのプレゼンで自分の説明が採用の決め手になり、上司から臨時の報奨金をもらった',60000,{communication:2},3],
  ['仕事に関係する資格試験へ挑み、休日の勉強が実って合格通知を受け取った',-30000,{knowledge:3},3],
  ['同僚三人と焼き鳥屋へ行き、仕事の愚痴から趣味の話まで閉店近くまで語った',-30000,{communication:2},3],
  ['好きな作品の大型イベントへ遠征し、交通費とグッズ代を惜しまず使った',-50000,{charm:2},5],
  ['休日に始めた中古品のネット販売が軌道に乗り、まとまった利益が出た',90000,{knowledge:1},2],
  ['自宅のエアコンが真夏に故障し、急いで修理業者を呼ぶことになった',-70000,{},1],
  ['健康診断で運動不足を指摘され、帰り道でランニングシューズを買って週二回走り始めた',-10000,{fitness:2},2],
  ['友人と二泊三日の温泉旅行へ出かけ、仕事のことを忘れてしっかり休んだ',-80000,{charm:1,communication:1},6],
  ['提出直前に見つかった仕事のミスを一晩かけて修正し、翌朝ぎりぎりで間に合わせた',-20000,{communication:2},3],
  ['学生時代の友人の結婚式に出席し、久しぶりに同級生たちと再会した',-50000,{communication:1},4],
  ['趣味で作ったハンドメイド品をネット販売したところ、予想外に注文が殺到した',120000,{charm:1},3],
  ['業界の勉強会へ参加し、講師や他社の参加者と名刺を交換して新しい知識を持ち帰った',-20000,{knowledge:2,communication:1},2]],
 mature:[
  ['複数部署が関わる半年規模のプロジェクト責任者を任され、無事に納期までまとめ切った',100000,{communication:2,knowledge:1},4],
  ['新しく入った後輩の教育担当になり、週一回の面談と実務指導を続けた',0,{communication:3},4],
  ['冷蔵庫と洗濯機が同じ月に故障し、思い切って省エネ家電へまとめて買い替えた',-120000,{},2],
  ['家族で三泊四日の北海道旅行へ行き、レンタカーで観光地を巡った',-140000,{communication:1},8],
  ['数年前から少額で積み立てていた投資信託が好調で、一部を利益確定した',140000,{},2],
  ['休日に作っていた木工作品を地域のマルシェへ出したところ、用意した分がほぼ売り切れた',100000,{charm:2},4],
  ['腰の重さが気になり、近所のスポーツジムへ入会して週末の水泳を始めた',-30000,{fitness:3},3],
  ['町内会の夏祭りで受付と会計を手伝い、近所に顔見知りが一気に増えた',0,{communication:3},5],
  ['昔払い過ぎていた保険料の返金通知が届き、思わぬ臨時収入になった',160000,{},2],
  ['長年乗った車の車検見積もりを見て買い替えを決め、中古のファミリーカーを購入した',-180000,{charm:1},3],
  ['学生時代の旧友と十数年ぶりに再会し、駅前の居酒屋で当時の話を何時間もした',-30000,{communication:2},5],
  ['社内勉強会で自分の専門分野を解説し、その内容が別部署の案件にも採用された',90000,{knowledge:2},4]],
 senior:[
  ['若い頃に弾いていたギターを押し入れから出し、弦を張り替えて練習を再開した',-50000,{charm:2},6],
  ['平日に二泊で温泉旅館へ出かけ、混雑の少ない露天風呂とのんびりした食事を楽しんだ',-100000,{},8],
  ['誕生日に家族から新しいタブレット端末を贈られ、写真や動画を見る楽しみが増えた',50000,{},7],
  ['公民館のスマホ教室で講師役を頼まれ、近所の人へ写真の送り方や地図アプリを教えた',50000,{communication:2,knowledge:1},6],
  ['毎朝同じ川沿いを30分歩く習慣をつけ、季節の変化を楽しむようになった',0,{fitness:2},4],
  ['物置を整理して使わなくなったカメラや工具をリサイクルショップへ持ち込んだ',80000,{},3],
  ['孫世代の子どもたちとボードゲームを遊び、ルール説明から本気の勝負まで付き合った',-30000,{communication:2},8],
  ['昔住んでいた町を訪ね、通学路だった道とよく通った店の跡をゆっくり歩いた',-60000,{},9],
  ['昔の仕事で身につけた知識が地域の設備トラブル解決に役立ち、お礼を受け取った',70000,{knowledge:1},5],
  ['図書館で歴史小説をまとめて借り、毎朝一冊ずつ読む穏やかな時間を楽しんだ',-10000,{knowledge:2},5]]
};
const EVENTS={};for(const k in EVENT_RAW)EVENTS[k]=EVENT_RAW[k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]}));

// Plus / minus spaces use their own story pools.  They intentionally do not
// recycle neutral events and then change only the money result: the premise
// and the outcome point in the same direction.
const PLUS_EVENT_RAW={
 baby:[
  ['親戚から成長祝いをもらい、家族が将来のために貯金してくれた',30000,{charm:1},2],
  ['児童館のミニイベントで最後まで元気に参加し、小さな記念品をもらった',10000,{fitness:1},2],
  ['家族写真が地域の広報に採用され、謝礼と記念品が届いた',20000,{charm:1,communication:1},3],
  ['お気に入りの絵本を何度も読んでもらい、新しい言葉をたくさん覚えた',0,{knowledge:2},2],
  ['公園で年上の子に遊び方を教えてもらい、すぐ仲良くなった',0,{communication:2},3]],
 elementary:[
  ['学校の作品展で入賞し、図書カードと表彰状をもらった',20000,{charm:1},3],
  ['家の手伝いを続けたごほうびに、いつもより多めのおこづかいをもらった',15000,{communication:1},2],
  ['漢字テストで満点を取り、先生からクラスみんなの前で褒められた',0,{knowledge:2,charm:1},3],
  ['地域のスポーツ大会でチームが優勝し、記念品とお祝いをもらった',20000,{fitness:2},4],
  ['友達の忘れ物を届けたお礼に、家族ぐるみでお菓子をたくさんもらった',10000,{communication:2},3]],
 middle:[
  ['校内コンテストで作品が入賞し、副賞の商品券をもらった',30000,{charm:2},4],
  ['部活の大会で自己ベストを更新し、顧問から次の大会のメンバーに選ばれた',0,{fitness:2,charm:1},4],
  ['定期テストの成績が大きく上がり、家族から臨時のおこづかいをもらった',20000,{knowledge:2},3],
  ['商店街の手伝いで働きぶりを褒められ、予定より多めの謝礼をもらった',30000,{communication:2},3],
  ['友達に勉強を教えたら自分の理解も深まり、二人そろって点数が上がった',0,{knowledge:1,communication:2},4]],
 high:[
  ['アルバイト先で忙しい時間帯をうまく回し、特別手当をもらった',50000,{communication:1},3],
  ['模試で過去最高の判定が出て、志望校へ向けて大きな自信がついた',0,{knowledge:3},4],
  ['文化祭の企画が人気投票一位になり、クラスに賞金が出た',30000,{charm:2,communication:1},5],
  ['地域の動画コンテストで入賞し、賞金と機材券を受け取った',50000,{charm:2},5],
  ['体育祭で活躍してクラスを優勝へ導き、学校中で少し名前が知られた',0,{fitness:2,charm:1},4]],
 young:[
  ['担当案件が予想以上の成果を出し、臨時ボーナスが支給された',120000,{communication:1},4],
  ['趣味で出品していた作品が話題になり、まとまった売上が入った',100000,{charm:2},4],
  ['資格手当の対象試験に合格し、祝い金も合わせて受け取った',80000,{knowledge:2},3],
  ['以前助けた取引先から新しい仕事を紹介され、報奨金につながった',90000,{communication:2},4],
  ['購入していた少額の資産が値上がりし、良いタイミングで利益を確定した',140000,{knowledge:1},3]],
 mature:[
  ['大型案件の成果が評価され、業績賞与が上乗せされた',220000,{communication:1},4],
  ['昔から積み立てていた資産の一部を好条件で売却できた',260000,{knowledge:1},3],
  ['社内改善案が採用され、表彰金と特別休暇をもらった',180000,{knowledge:2},4],
  ['趣味の作品が地域イベントで完売し、予想以上の収入になった',160000,{charm:2},5],
  ['長く付き合ってきた顧客から大きな追加依頼を受け、成果報酬が入った',240000,{communication:2},4]],
 senior:[
  ['昔買った品を整理したところ予想以上の価値がつき、高値で売れた',300000,{knowledge:1},4],
  ['長年の地域活動が表彰され、記念品と謝礼を受け取った',120000,{communication:2},6],
  ['昔の仕事の知識を頼られて手伝い、まとまった謝礼をもらった',160000,{knowledge:2},5],
  ['家庭菜園が大豊作になり、近所との物々交換で暮らしが少し豊かになった',50000,{communication:1,fitness:1},5],
  ['忘れていた積立金の満期通知が届き、思わぬ臨時収入になった',260000,{},4]]
};
const MINUS_EVENT_RAW={
 baby:[
  ['お気に入りのおもちゃを外でなくしてしまい、同じものを買い直すことになった',-12000,{},1],
  ['急な発熱で休日診療へ行き、家族に予定外の出費が出た',-15000,{fitness:-1},1],
  ['家の中で走って花瓶を割ってしまい、片づけと買い直しが必要になった',-10000,{},1],
  ['旅行の直前に体調を崩し、予約の変更費用だけが残った',-18000,{fitness:-1},1],
  ['雨の日に転んで服と靴をだめにし、まとめて買い替えることになった',-12000,{},1]],
 elementary:[
  ['遠足の日に水筒を落として壊し、帰りに新しいものを買うことになった',-12000,{},1],
  ['自転車で転んでタイヤとライトを壊し、修理代がかかった',-18000,{fitness:-1},1],
  ['おこづかいで買ったゲームをすぐなくしてしまい、しばらく買い直せなかった',-10000,{},1],
  ['習い事の道具を壊してしまい、家族に買い直してもらった',-20000,{},1],
  ['風邪で学校を休み、楽しみにしていた行事にも参加できなかった',-8000,{fitness:-1},1]],
 middle:[
  ['部活の道具を壊してしまい、自分のおこづかいから修理代を出した',-25000,{},1],
  ['電車に定期入れを落とし、再発行と帰宅の交通費が余計にかかった',-18000,{},1],
  ['テスト前に体調を崩して十分に勉強できず、成績も少し落ち込んだ',0,{knowledge:-1,fitness:-1},1],
  ['友達との約束を勘違いしてすっぽかし、気まずい空気になってしまった',0,{communication:-1},1],
  ['遠征用の荷物を忘れ、現地で必要なものを急きょ買いそろえた',-30000,{},1]],
 high:[
  ['アルバイト中に自分のミスで商品をだめにし、給料から一部を弁償した',-35000,{},1],
  ['スマホを落として画面を割り、修理代で貯めていたお金が減った',-45000,{},1],
  ['試験前に夜更かしを続けて体調を崩し、集中力も落ちてしまった',0,{fitness:-1,knowledge:-1},1],
  ['予約していた遠征を直前で取りやめ、キャンセル料がかかった',-40000,{},1],
  ['友達との言い争いが長引き、しばらく連絡を取りづらくなった',0,{communication:-1},1]],
 young:[
  ['仕事用のノートPCが突然故障し、急きょ買い替えることになった',-160000,{},1],
  ['引っ越し直後に水回りの故障が見つかり、追加の修理費が発生した',-120000,{},1],
  ['仕事のミスで休日まで対応に追われ、心身ともにぐったりした',-60000,{fitness:-1},1],
  ['契約内容の見落としで余計な手数料が発生し、予定外の支払いになった',-90000,{knowledge:-1},1],
  ['友人との金銭の行き違いがこじれ、返金と謝罪で大きく消耗した',-70000,{communication:-1},1]],
 mature:[
  ['自宅の給湯器が突然壊れ、急ぎの交換工事で大きな出費になった',-220000,{},1],
  ['車の故障が重なり、修理と代車の費用が予想以上に膨らんだ',-180000,{},1],
  ['仕事上の確認漏れで取引先へ迷惑をかけ、損失の一部を負担することになった',-200000,{communication:-1},1],
  ['無理を続けて腰を痛め、通院と休養で予定が大きく狂った',-90000,{fitness:-1},1],
  ['保有していた資産の一部が急落し、損切りでまとまった損失が出た',-240000,{},1]],
 senior:[
  ['自宅の屋根に大きな傷みが見つかり、予定外の修繕費が必要になった',-280000,{},1],
  ['長く使った家電が立て続けに故障し、まとめて買い替えることになった',-180000,{},1],
  ['旅行直前に体調を崩し、治療費とキャンセル料が重なった',-120000,{fitness:-1},1],
  ['資産整理のタイミングを誤り、想定よりかなり安い価格で手放すことになった',-220000,{},1],
  ['大切な手続きの期限を勘違いし、追加費用と何度もの窓口通いが必要になった',-80000,{knowledge:-1},1]]
};
const PLUS_EVENTS={};for(const k in PLUS_EVENT_RAW)PLUS_EVENTS[k]=PLUS_EVENT_RAW[k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]}));
const MINUS_EVENTS={};for(const k in MINUS_EVENT_RAW)MINUS_EVENTS[k]=MINUS_EVENT_RAW[k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]}));

// Roughly half of the ordinary life spaces (event / plus / minus / grow / social)
// become hidden-result 3-choice events. Choices do not reveal stat changes, checks,
// or rewards before selection; each space type adds its own flavor after the choice.
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
  {id:'mid_club',title:'バスケットボール部の放課後',text:'通常練習が早く終わり、体育館をあと30分自由に使えることになった。',options:[
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
  {id:'high_parttime',title:'ファミレスのアルバイトが大混雑',text:'夕食どきに団体客が重なり、ホールの人手が急に足りなくなった。',options:[
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
  {id:'young_side',title:'ネットショップの手伝いを頼まれた',text:'知り合いから、週末だけ商品撮影と出品作業を手伝ってほしいと頼まれた。',options:[
   {label:'やってみる',out:{cash:70000,stats:{knowledge:1},memory:2,text:'慣れない作業だったが、ちょっとした収入になった。'}},
   {label:'知り合いを紹介する',out:{cash:25000,stats:{communication:2},memory:2,text:'紹介した相手にも喜ばれた。'}},
   {label:'今回は断る',out:{stats:{fitness:1},memory:1,text:'無理に予定を増やさず、余裕を残した。'}}]}
 ],
 mature:[
  {id:'mat_home',title:'家のことを見直そう',text:'少しまとまった時間ができた。',options:[
   {label:'大掃除する',out:{stats:{fitness:2},memory:2,text:'思い切って片づけたら家がすっきりした。'}},
   {label:'家具を入れ替える',out:{cash:-70000,stats:{charm:2},memory:3,text:'部屋の雰囲気が一気に変わった。'}},
   {label:'家族や友人を招く',out:{cash:-40000,stats:{communication:2},memory:5,text:'にぎやかな時間が良い思い出になった。'}}]},
  {id:'mat_hobby',title:'昔好きだった写真撮影を再開',text:'棚の奥から古いカメラが出てきて、久しぶりに休日の街を撮り歩きたくなった。',options:[
   {label:'新しいレンズを買う',out:{cash:-60000,stats:{charm:2},memory:5,text:'中古の単焦点レンズを一本買い、休日の撮影が一気に楽しくなった。'}},
   {label:'昔の写真仲間に連絡する',out:{stats:{communication:3},memory:5,text:'十数年ぶりに撮影会へ集まり、昔使っていた機材の話で盛り上がった。'}},
   {label:'スマホだけ持って散歩する',out:{stats:{knowledge:1,charm:1},memory:3,text:'構図を考えながら近所を撮るだけでも、昔の感覚が少し戻ってきた。'}}]},
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
  {id:'senior_help',title:'近所の若い夫婦から相談を受けた',text:'仕事と子育ての両立で悩んでいるらしく、長く働いてきた経験を聞かせてほしいと言われた。',options:[
   {label:'自分の経験を話す',out:{stats:{communication:2,knowledge:1},memory:5,text:'話しているうちに、自分でも忘れていた経験を思い出した。'}},
   {label:'まず相手の話を聞く',out:{stats:{communication:3},memory:5,text:'じっくり聞くことで、相手も少し元気になった。'}},
   {label:'一緒に考えてみる',out:{stats:{knowledge:2,communication:1},memory:5,text:'答えを押しつけず、一緒に道筋を考えた。'}}]}
 ]
};

// --- TOGA MODE -------------------------------------------------------------
// A deliberately chaotic alternate content set aimed at retro-game/anime/TRPG fans.
// Systems, balance, maps and character progression stay shared with normal mode.
const TOGA_EVENT_RAW={
 baby:[
  ['夜中、消したはずのテレビの砂嵐から自分の名前を呼ばれた',0,{knowledge:1,charm:1},4],['押し入れの奥に1マスだけのダンジョンを発見',10000,{knowledge:1,fitness:1},4],['謎の変身ポーズを覚えた',0,{charm:2},3],['親の古いゲーム機を起動したらセーブデータが未来日付だった',20000,{knowledge:2},4],['名状しがたいぬいぐるみを気に入った',-10000,{communication:1},4],['夜中、天井の隅にいる誰かと楽しそうに話していたらしい',0,{communication:2},3],['三輪車で近所最速の称号を得た',10000,{fitness:2},3],['お絵描きが偶然召喚陣っぽく完成した',-10000,{charm:1,knowledge:1},5]],
 elementary:[
  ['下校中、排水路の奥で黒く蠢くスライム状の何かを見た。目を離した一瞬のうちに、それは排水口の奥へ消えていた',0,{knowledge:1,communication:1},6],['駄菓子屋の古い筐体で謎の隠しキャラを出した',30000,{knowledge:2},4],['図書室の禁断っぽい本を借りたが中身は園芸だった',-10000,{knowledge:2},3],['カードゲームでクラス内ランキング上位へ',20000,{knowledge:1,communication:2},4],['必殺技名を叫びながら運動会を走った',10000,{fitness:2,charm:1},5],['隣町で行方不明者が続いているという噂が学校まで広がった',0,{knowledge:1,communication:1},6],['秘密基地に謎の石像を飾った',-20000,{charm:1},6],['夏休みの宿題を最終日に時空圧縮した',0,{knowledge:-1,fitness:-1},2]],
 middle:[
  ['深夜アニメを一気見して翌朝だけ別人のような語尾になった',-10000,{charm:2},4],['オカルト研究会の仮入部でSAN値っぽい何かが揺れた',0,{knowledge:2,communication:1},5],['ゲームセンターで地元ランキングに名前を刻んだ',30000,{fitness:1,charm:2},5],['TRPGの初セッションで開始20分で地下室を開けた',-10000,{knowledge:2,communication:2},6],['黒歴史ノートが友達に発見された',-30000,{charm:-1,communication:1},4],['部活の大会で覚醒演出だけは完璧だった',20000,{fitness:2,charm:1},5],['中古ゲーム屋でプレミアソフトを発掘した',50000,{knowledge:2},4],['放課後、友人数人と気づけば窓も扉もない見知らぬ部屋にいた。力を合わせて壁の記号を解くと、次の瞬間には元の教室へ戻っていた',0,{knowledge:1,communication:2},8]],
 high:[
  ['文化祭で巨大ロボっぽい段ボール兵器を完成させた',-30000,{knowledge:2,charm:2},6],['友人宅の廊下が、その日だけ歩いても歩いても終わらなかった。何度目かの角を曲がると、なぜか玄関前へ戻っていた',-10000,{knowledge:2},7],['初めて作った同人誌が、身内以外の人にも何冊か売れた。帰り道で何度も売上を数え直した',40000,{charm:2,communication:1},7],['格闘ゲーム大会で校内ベスト4',30000,{fitness:1,knowledge:2},5],['卒業文集に未来への伏線を大量に仕込んだ',0,{charm:2},5],['受験勉強中に古文書みたいな攻略法を発見した',0,{knowledge:3},3],['学園祭ライブで最終回みたいな盛り上がりになった',50000,{charm:3,communication:1},7],['隣町の行方不明事件を調べた配信が妙に伸び、知らないアカウントから位置情報だけ届いた',60000,{charm:1,communication:2},8]],
 young:[
  ['徹夜MMOレイドを完走したが翌日の会議が真のラスボスだった',-20000,{knowledge:1,communication:1,fitness:-1},5],['押し入れから未開封の限定版が出てきた',120000,{charm:1},4],['終電が存在しないはずのホームに停まり、数人だけが降りていった。扉が閉まるまで席を立てずにいると、電車は何事もなく次の駅へ進んだ',-30000,{knowledge:2},8],['同人即売会で予算を完全にオーバーした',-90000,{charm:2,communication:2},7],['懐かしゲーム配信が妙にバズった',140000,{charm:2,communication:1},6],['深夜のコンビニ裏で、黒く濡れた塊が人の声を真似しているのを見た。店員を呼んで戻ると、そこには濡れた跡しか残っていなかった',0,{communication:1,knowledge:2},8],['資格試験会場でラスボス戦みたいなBGMが脳内再生された',-30000,{knowledge:3},4],['謎のクラウドファンディングに出資した',-80000,{knowledge:1},4]],
 mature:[
  ['実家から段ボール3箱分のレトロゲームが発掘された',160000,{knowledge:1,charm:1},7],['町内で昔からある石像が一体増えていた。近所の人に尋ねても、なぜか全員が話題を変えた',0,{communication:2,knowledge:1},8],['昔のオタク仲間と20年ぶりに朝まで語った',-40000,{communication:2,charm:1},8],['限定フィギュア棚が地震対策で要塞化した',-100000,{knowledge:2},5],['出張先で一晩だけ地図にない集落へ迷い込み、翌朝には道ごと消えていた',80000,{knowledge:2},9],['子ども世代に古いゲームの理不尽さを教えた',0,{communication:2,knowledge:1},7],['謎の健康器具が変身ベルトにしか見えない',-70000,{fitness:2,charm:1},5],['昔描いた漫画がネットで発掘され静かに話題になった',100000,{charm:2},6]],
 senior:[
  ['30年前のセーブデータがまだ生きていた',0,{knowledge:2},9],['夜空の星の並びが一晩だけ明らかに違って見えた。翌晩には元通りだったが、撮った写真にはその夜の空が残っていた',0,{knowledge:1,communication:1},10],['孫世代相手にレトロゲーム無双',50000,{knowledge:1,charm:2},8],['昔の同人誌を発掘して封印し直した',-20000,{charm:1},8],['地域のTRPG会で最年長探索者になった',30000,{knowledge:1,communication:2},9],['庭先の古い石像を処分した翌朝、元の場所に戻っていたうえ一体増えていた',-50000,{fitness:1},10],['昔のアニメ談義で若者と意気投合',0,{communication:3},8],['人生そのものが長編RPGだった気がしてきた',0,{knowledge:1,charm:1,communication:1},10]]
};
const TOGA_EVENTS={};for(const k in TOGA_EVENT_RAW)TOGA_EVENTS[k]=TOGA_EVENT_RAW[k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]}));

const TOGA_CHOICE_EVENTS={
 baby:[
  {id:'toga_baby_tv',title:'深夜のテレビが勝手についた',text:'砂嵐の向こうから、何かがこちらを見ている気がする。',options:[
   {label:'近づいてみる',out:{stats:{knowledge:2},memory:4,text:'画面には一瞬だけ見知らぬ星空が映った。翌朝には元通りだった。'}},
   {label:'変身ポーズで対抗する',out:{stats:{charm:2},memory:4,text:'なぜか砂嵐が止まった。勝ったことにしておいた。'}},
   {label:'家族を呼ぶ',out:{stats:{communication:2},memory:3,text:'家族が来た瞬間テレビは消えた。誰も信じてくれなかった。'}}]},
  {id:'toga_baby_closet',title:'押し入れの奥が妙に深い',text:'いつもより奥行きが2メートルくらい増えている。気のせいだろうか。',options:[
   {label:'探検する',out:{cash:10000,stats:{fitness:1,knowledge:1},memory:5,text:'奥で古いコインを拾った。次の日、押し入れは普通の深さに戻っていた。'}},
   {label:'おもちゃを送り込む',out:{stats:{knowledge:2},memory:3,text:'おもちゃは数分後、なぜか別の棚から帰還した。'}},
   {label:'そっと閉める',out:{stats:{communication:1},memory:2,text:'知らない方がいいこともある。幼くして大人の判断をした。'}}]},
  {id:'toga_baby_pose',title:'鏡の前で謎のポーズ',text:'なぜか今なら何かに変身できる気がする。',options:[
   {label:'右手を高く掲げる',out:{stats:{charm:2,fitness:1},memory:3,text:'何も起きなかったが本人だけは満足げだった。'}},
   {label:'謎の呪文を唱える',out:{stats:{knowledge:1,charm:1},memory:4,text:'照明が一瞬だけ点滅した。偶然ということにした。'}},
   {label:'家族も巻き込む',out:{stats:{communication:2},memory:5,text:'家族全員で謎のポーズを決めた写真が残った。'}}]},
  {id:'toga_baby_pad',title:'古いコントローラーを発見',text:'ボタンは少ないが、妙な威圧感がある。',options:[
   {label:'連打する',out:{stats:{fitness:2},memory:3,text:'驚異的な連打速度を獲得した。人生のどこで役立つかは不明。'}},
   {label:'分解せず観察する',out:{stats:{knowledge:2},memory:2,text:'裏側の謎の端子に強い興味を持った。'}},
   {label:'大事にしまう',out:{cash:10000,stats:{charm:1},memory:3,text:'後年、ちょっとだけ価値がある物だったと判明した。'}}]}
 ],
 elementary:[
  {id:'toga_el_mystery',title:'放課後の排水路',text:'友達が「さっき黒いのが動いた」と言う。奥では何かが濡れた音を立てている。',options:[
   {label:'近づいて確かめる',out:{stats:{knowledge:2,fitness:1},memory:7,text:'黒い塊は壁を這うように奥へ消えた。友達は冗談で「ショゴスみたいだ」と笑ったが、誰も二度とは近づかなかった。'}},
   {label:'友達を呼ぶ',out:{stats:{communication:2,charm:1},memory:6,text:'人数を集めて戻ると何もいなかった。ただ、排水路の壁だけが妙に新しく濡れていた。'}},
   {label:'先生に知らせる',out:{stats:{knowledge:1,communication:1},memory:6,text:'先生は一瞬だけ顔色を変え、「そこには近づくな」と強く言った。理由は教えてくれなかった。'}}]},
  {id:'toga_el_arcade',title:'古いゲーム筐体を発見',text:'画面には見たことのないタイトル。1プレイだけできそうだ。',options:[
   {label:'攻めまくる',out:{cash:20000,stats:{fitness:1,charm:1},memory:4,text:'勢いだけで謎のボスを突破。景品のメダルを大量に獲得した。'}},
   {label:'慎重に攻略する',out:{stats:{knowledge:2},memory:4,text:'パターンを読んでノーミス進行。背後にギャラリーができた。'}},
   {label:'友達と交代で遊ぶ',out:{stats:{communication:2},memory:5,text:'勝ち負けより騒いだ記憶の方が残った。'}}]},
  {id:'toga_el_card',title:'謎のカード交換会',text:'休み時間、クラスの隅で妙に真剣な取引が始まっている。',options:[
   {label:'自慢の一枚を出す',out:{cash:15000,stats:{charm:2},memory:4,text:'思わぬ人気カードだった。交換後も英雄扱いされた。'}},
   {label:'ルールを調べる',out:{stats:{knowledge:2},memory:2,text:'カードよりルールブックを読み込んでしまった。'}},
   {label:'交換せず観戦する',out:{stats:{communication:2},memory:3,text:'人間関係と相場の怖さを小学生で学んだ。'}}]},
  {id:'toga_el_secret',title:'秘密基地の強化案',text:'秘密基地をもっと「それっぽく」したくなった。',options:[
   {label:'司令室を作る',out:{cash:-10000,stats:{knowledge:1,charm:1},memory:5,text:'段ボール製だが司令官席まで完成した。'}},
   {label:'罠を作る',out:{stats:{knowledge:2,fitness:1},memory:4,text:'侵入者ゼロなのに罠だけ豪華になった。'}},
   {label:'仲間を増やす',out:{stats:{communication:3},memory:5,text:'基地よりメンバーの方が増えた。'}}]}
 ],
 middle:[
  {id:'toga_mid_trpg',title:'初めてのTRPGセッション',text:'GMが意味深に「本当にその扉を開けますか？」と聞いてきた。',options:[
   {label:'もちろん開ける',out:{stats:{knowledge:1,charm:1},memory:6,text:'開始早々に怪異と遭遇。全員から「そうなると思った」と言われた。'}},
   {label:'聞き耳を立てる',out:{stats:{knowledge:2},memory:4,text:'慎重さが功を奏し、最悪の展開だけは避けた。'}},
   {label:'仲間を先に呼ぶ',out:{stats:{communication:2},memory:5,text:'全員で開けたので怖さも責任も均等になった。'}}]},
  {id:'toga_mid_anime',title:'深夜アニメ最終回の日',text:'翌日は学校。でも今夜はリアルタイムで見届けたい。',options:[
   {label:'最後まで見る',out:{stats:{charm:2,fitness:-1},memory:6,text:'翌朝は眠かったが、ネットの祭りに参加できた満足感は大きい。'}},
   {label:'録画して寝る',out:{stats:{knowledge:1,fitness:1},memory:2,text:'健康的に眠った。翌朝うっかりネタバレを踏んだ。'}},
   {label:'友達と通話しながら見る',out:{stats:{communication:2,charm:1},memory:6,text:'感想会まで含めて朝になった。'}}]},
  {id:'toga_mid_occult',title:'気づけば見知らぬ部屋にいた',text:'放課後、友人数人と話していたはずが、次の瞬間には窓も扉もない白い部屋に立っていた。',options:[
   {label:'部屋を徹底的に調べる',out:{stats:{knowledge:2},memory:9,text:'壁の傷と床の模様から規則を見つけ、全員で順番に触れると出口が現れた。外では数分しか経っていなかった。'}},
   {label:'みんなで情報を出し合う',out:{stats:{communication:3},memory:9,text:'一人では気づけない小さな違和感を繋ぎ合わせ、仕掛けを解いて脱出した。誰もあの場所を説明できなかった。'}},
   {label:'大声で助けを呼ぶ',out:{stats:{fitness:1,charm:1},memory:8,text:'何度目かの呼びかけで照明が消え、気づくと元の教室に戻っていた。机の上に見覚えのない鍵だけが残っていた。'}}]},
  {id:'toga_mid_arcade',title:'ゲーセンで強敵を発見',text:'連勝中の見知らぬプレイヤー。周囲がざわついている。',options:[
   {label:'乱入する',out:{cash:20000,stats:{fitness:1,charm:2},memory:5,text:'大接戦の末に勝利。知らない人から拍手された。'}},
   {label:'プレイを観察する',out:{stats:{knowledge:2},memory:3,text:'技の癖をかなり覚えた。次は勝てそうな気がする。'}},
   {label:'友達を応援する',out:{stats:{communication:2},memory:4,text:'自分は遊んでいないのに妙に疲れた。でも盛り上がった。'}}]}
 ],
 high:[
  {id:'toga_high_fes',title:'文化祭で何をやる？',text:'「普通の出し物では弱い」という危険な意見が出た。',options:[
   {label:'巨大ロボ展示',out:{cash:-30000,stats:{knowledge:2,charm:1},memory:7,text:'ほぼ段ボールだが撮影スポットとして大人気になった。'}},
   {label:'怪談喫茶',out:{cash:30000,stats:{charm:1,communication:2},memory:7,text:'演出が妙にリアルで、先生まで本気で怖がった。'}},
   {label:'レトロゲーム大会',out:{cash:20000,stats:{knowledge:1,communication:2},memory:6,text:'教師陣が一番本気になり大会が予定時間を超えた。'}}]},
  {id:'toga_high_roof',title:'友人宅の長すぎる廊下',text:'遊びに来ただけなのに、二階の廊下がどう見ても家の外寸より長い。',options:[
   {label:'奥まで進む',out:{stats:{knowledge:2},memory:8,text:'何分歩いたか分からない頃、突然いつもの階段前に戻った。時計は一時間進んでいた。'}},
   {label:'壁に印を付ける',out:{stats:{charm:2},memory:7,text:'同じ印を三度通り過ぎた。四度目に見たとき、印の横に知らない手形が増えていた。'}},
   {label:'友人と引き返す',out:{stats:{communication:2},memory:7,text:'二人で目を閉じて戻ると、数歩で階段に着いた。その家では以後その話をしなくなった。'}}]},
  {id:'toga_high_doujin',title:'初めての同人誌制作',text:'締切まであとわずか。ページはまだ白い。',options:[
   {label:'徹夜で描く',out:{cash:40000,stats:{charm:2,fitness:-1},memory:7,text:'なんとか完成。睡眠は失ったが達成感は得た。'}},
   {label:'友達と分担する',out:{cash:25000,stats:{communication:2,charm:1},memory:7,text:'合作になったが、むしろ一人では出ない味が出た。'}},
   {label:'ページ数を減らす',out:{stats:{knowledge:1},memory:4,text:'現実的な判断で無事完成。計画性を学んだ。'}}]},
  {id:'toga_high_exam',title:'受験前夜に謎の攻略本',text:'机の上に「人生攻略・高校編」という見覚えのない本がある。',options:[
   {label:'読む',out:{stats:{knowledge:3},memory:4,text:'中身は普通に良い勉強法だった。誰が置いたかだけ不明。'}},
   {label:'お守りにする',out:{stats:{charm:1,knowledge:1},memory:4,text:'なぜか落ち着いた。表紙の目だけ時々動く気がする。'}},
   {label:'友達に見せる',out:{stats:{communication:2},memory:5,text:'みんなで笑って緊張がほぐれた。翌朝、本は消えていた。'}}]}
 ],
 young:[
  {id:'toga_young_mmo',title:'大型アップデート初日',text:'仲間から「今夜だけ頼む」と連絡が来た。翌日は仕事だ。',options:[
   {label:'レイドに参加する',out:{cash:-20000,stats:{communication:2,fitness:-1},memory:7,text:'朝までかかったが初日攻略に成功。翌日の仕事は地獄だった。'}},
   {label:'一時間だけ参加する',out:{stats:{knowledge:1,communication:1},memory:4,text:'本当に一時間で抜けた。大人になった自分を少し褒めた。'}},
   {label:'寝る',out:{stats:{fitness:2},memory:2,text:'健康を手に入れた代わりに、翌朝チャットが500件溜まっていた。'}}]},
  {id:'toga_young_shop',title:'中古ショップの奥に怪しい棚',text:'「店員に聞かないでください」と書かれた棚がある。',options:[
   {label:'一つ買う',out:{cash:-50000,stats:{charm:2},memory:6,text:'説明書のない謎グッズを入手。部屋の照明が一度だけ消えた。'}},
   {label:'値札だけ確認する',out:{stats:{knowledge:2},memory:3,text:'価格設定に独自の法則があると気づいた。深追いはしなかった。'}},
   {label:'店員に聞く',out:{stats:{communication:2},memory:5,text:'店員は無言で別の商品を勧めてきた。話は通じているらしい。'}}]},
  {id:'toga_young_work',title:'帰宅途中の知らないホーム',text:'終電が見覚えのない駅に停まった。車内放送は聞き取れず、外には誰もいない。',options:[
   {label:'降りて確かめる',out:{cash:40000,stats:{knowledge:2,fitness:-1},memory:10,text:'ホームの先には古い住宅街が続いていた。戻ると同じ電車が待っていたが、時計だけ二時間進んでいた。'}},
   {label:'他の乗客と相談する',out:{stats:{communication:2},memory:9,text:'数人で車内に残り、扉が閉じるのを待った。次に開いた時はいつもの駅だった。先に降りた二人は戻らなかった。'}},
   {label:'絶対に降りない',out:{stats:{fitness:1},memory:8,text:'窓の外を見ないようにして待った。しばらくして電車は動き出した。翌日、その駅名を検索しても何も出てこなかった。'}}]},
  {id:'toga_young_event',title:'懐かし作品の大型イベント',text:'財布と体力、両方へのダメージが予想される。',options:[
   {label:'始発で行く',out:{cash:-90000,stats:{fitness:1,charm:2},memory:8,text:'満身創痍だが戦利品は十分。青春が一日だけ戻ってきた。'}},
   {label:'昼から行く',out:{cash:-50000,stats:{communication:1,charm:1},memory:6,text:'混雑を少し避けつつ十分楽しんだ。'}},
   {label:'配信で見る',out:{cash:-10000,stats:{knowledge:1},memory:4,text:'家で快適に見た。現地組の投稿を見て少しだけ羨ましくなった。'}}]}
 ],
 mature:[
  {id:'toga_mat_box',title:'実家から「あなたの物」と段ボールが届く',text:'中身を開けるのが少し怖い。',options:[
   {label:'全部開ける',out:{cash:100000,stats:{charm:1},memory:8,text:'レトロゲームと黒歴史ノートが同時に出た。片方は高く売れた。'}},
   {label:'必要な物だけ探す',out:{cash:40000,stats:{knowledge:1},memory:5,text:'懐かしい物を少しだけ回収。被害は最小限だった。'}},
   {label:'家族と開封する',out:{stats:{communication:2},memory:8,text:'昔話で大盛り上がり。黒歴史も共有財産になった。'}}]},
  {id:'toga_mat_meeting',title:'町内会の怪異対策会議',text:'議題に「夜中に増える石像」が普通に載っている。',options:[
   {label:'原因を調べる',out:{stats:{knowledge:2},memory:6,text:'石像は近所の美大生の作品だった。数だけは説明がつかなかった。'}},
   {label:'見回り班に入る',out:{stats:{fitness:1,communication:2},memory:6,text:'夜回り仲間が増え、妙に楽しくなった。'}},
   {label:'議事録を取る',out:{stats:{knowledge:1,communication:1},memory:5,text:'「石像17体目」の文字を打ちながら感覚が麻痺してきた。'}}]},
  {id:'toga_mat_reunion',title:'古いオタク仲間との再会',text:'昔好きだった作品の話題だけで数時間いけそうだ。',options:[
   {label:'朝まで語る',out:{cash:-40000,stats:{communication:2,charm:1},memory:9,text:'記憶違いで何度も揉めたが、それも含めて楽しかった。'}},
   {label:'昔の店を巡る',out:{cash:-60000,stats:{fitness:1,charm:1},memory:8,text:'店はかなり変わっていたが、思い出話は尽きなかった。'}},
   {label:'家に招く',out:{stats:{communication:2},memory:7,text:'棚を見せ合うだけで時間が消えた。'}}]},
  {id:'toga_mat_device',title:'怪しい健康デバイス',text:'説明には「装着者の潜在能力を解放」と書いてある。',options:[
   {label:'装着する',out:{cash:-60000,stats:{fitness:2,charm:1},memory:5,text:'ただの高性能運動計だった。見た目は完全に変身アイテムだった。'}},
   {label:'分解記事を読む',out:{stats:{knowledge:2},memory:3,text:'構造を理解して満足。購入欲も少し落ち着いた。'}},
   {label:'家族に見せる',out:{stats:{communication:2},memory:5,text:'全員で変身ポーズをしてから棚に飾った。'}}]}
 ],
 senior:[
  {id:'toga_senior_save',title:'昔のセーブデータを起動',text:'30年以上前のデータ。まだ読み込めるだろうか。',options:[
   {label:'続きを遊ぶ',out:{stats:{knowledge:2},memory:10,text:'指が操作を覚えていた。昔の自分から手紙を受け取ったような気分になった。'}},
   {label:'最初から遊ぶ',out:{stats:{charm:1,knowledge:1},memory:9,text:'当時は気づかなかった作り込みに今さら感心した。'}},
   {label:'家族に見せる',out:{stats:{communication:2},memory:10,text:'画面の粗さに驚かれたが、気づけばみんなで遊んでいた。'}}]},
  {id:'toga_senior_radio',title:'深夜ラジオに混線',text:'知らない言語の合間に、自分の昔のあだ名が聞こえた。',options:[
   {label:'最後まで聞く',out:{stats:{knowledge:2},memory:9,text:'結局意味は分からなかった。最後に「おやすみ」だけ日本語だった。'}},
   {label:'録音する',out:{stats:{knowledge:1,charm:1},memory:8,text:'翌朝聞き直すと、普通のノイズしか入っていなかった。'}},
   {label:'誰かに電話する',out:{stats:{communication:2},memory:8,text:'夜中の怪談電話になった。相手は迷惑そうだが少し楽しんでいた。'}}]},
  {id:'toga_senior_session',title:'地域TRPG会に参加',text:'最年長探索者として妙な期待を集めている。',options:[
   {label:'慎重な探索者を作る',out:{stats:{knowledge:2},memory:8,text:'経験の重みで危険を回避。若者から「生存力が違う」と尊敬された。'}},
   {label:'豪快な探索者を作る',out:{stats:{charm:2},memory:9,text:'無茶な行動が全部盛り上がりにつながった。'}},
   {label:'GMを手伝う',out:{stats:{communication:2,knowledge:1},memory:8,text:'昔話までシナリオのネタにされ、妙に壮大な卓になった。'}}]},
  {id:'toga_senior_final',title:'人生をゲームに例えるなら',text:'ここまで来ると、かなり長いキャンペーンだった気がする。',options:[
   {label:'やり込み派だった',out:{stats:{knowledge:1,fitness:1},memory:10,text:'寄り道だらけだったが、それこそが面白かったと思えた。'}},
   {label:'イベント回収派だった',out:{stats:{communication:1,charm:1},memory:10,text:'人との出会いが一番多くのイベントを生んだ。'}},
   {label:'初見プレイだった',out:{stats:{charm:1,knowledge:1,communication:1},memory:10,text:'攻略本なしでも、案外ここまで来られるものだ。'}}]}
 ]
};
const TOGA_ABILITY_EVENT_RULES={
 'ゲームセンターで地元ランキングに名前を刻んだ':{stat:'knowledge',target:7,failText:'ランキング入りは逃したが、対戦相手の癖はかなり読めるようになった。'},
 '部活の大会で覚醒演出だけは完璧だった':{stat:'fitness',target:8,failText:'覚醒演出のわりに結果は普通だった。でも観客には妙にウケた。'},
 '学園祭ライブで最終回みたいな盛り上がりになった':{stat:'charm',target:9,failText:'盛り上がりはしたが伝説までは届かなかった。次回作に期待。'},
 '資格試験会場でラスボス戦みたいなBGMが脳内再生された':{stat:'knowledge',target:10,failText:'脳内BGMだけ壮大だった。試験はあと一歩だった。'},
 '町内会の怪異対策係にいつの間にか任命された':{stat:'communication',target:10,failText:'怪異より町内会の調整の方が難しかった。'},
 '地域のTRPG会で最年長探索者になった':{stat:'communication',target:10,failText:'卓は少しグダったが、終わってみれば良い思い出になった。'}
};
const TOGA_STAGE_FLAVOR={
 baby:'ごく普通の幼少期。たまにテレビの砂嵐や押し入れの奥が少し気になる。',
 elementary:'学校と放課後の毎日。駄菓子屋、ゲーム、七不思議が同じ距離にある。',
 middle:'部活や友人関係が広がる頃。深夜アニメやTRPG、妙な噂話も少しずつ混ざる。',
 high:'受験と文化祭と趣味の時間。青春の横で、説明しづらい出来事もたまに起きる。',
 young:'普通に働き、恋愛し、生活する。その合間に妙な案件や懐かしい沼が顔を出す。',
 mature:'仕事も家庭も落ち着いてくる頃。昔の趣味や忘れていたものが時々戻ってくる。',
 senior:'長い人生の終盤。昔のセーブデータも、古い仲間も、妙な記憶もまだ残っている。'
};
const TOGA_CAREER_EVENTS=['古い仕様書の余白に、昨日までなかった筆跡で修正指示が増えていた','炎上した納品直前の案件で担当を振り直し、徹夜一回でなんとか公開日に間に合わせた','深夜の会議室を片づけていると、座席表にない椅子が一脚だけ壁際に増えていた','退職したはずなのに社内事情へ異様に詳しい古参社員へ電話し、昔の取引先の癖を教えてもらった','深夜メンテナンス中、社員名簿にない番号から同じファイルへのアクセスが何度も記録された','申請書を三部署へ回す社内ルールの理由を調べたら、十年前の一件以来ずっと誰も変えていなかった','後輩の作業手順をゲームの攻略チャートのように整理したら、ミスが目に見えて減った','取引先へのプレゼン中、一瞬だけ窓の外からビル群が消えたように見えたが、次の瞬間には元通りだった'];
const TOGA_JOB_NAMES={office:'ギルド系会社員',sales:'異界営業',chef:'回復料理人',designer:'概念デザイナー',engineer:'魔導機関エンジニア',teacher:'知識伝承教師',nurse:'SAN値ケア医療職',civil:'王国系公務員',mechanic:'機甲整備士',creator:'深夜配信クリエイター',programmer:'古代言語プログラマー',architect:'迷宮建築士',researcher:'禁書庫研究員',doctor:'高位ヒーラー医師',lawyer:'ルールブック法律家',pilot:'空中戦パイロット',athlete:'魔球系プロ野球選手',soccer:'必殺技系プロサッカー選手',fighter:'異種格闘家',musician:'必殺曲ミュージシャン',actor:'実写化対応俳優',idol:'伝説候補タレント',vtuber:'異界配信VTuber',manager:'作戦本部・経営企画',consultant:'攻略指南コンサル',entrepreneur:'異世界系起業家',trader:'乱数読解トレーダー',author:'締切召喚作家',artisan:'王国建築大工',farmer:'スローライフ農業経営',game:'クソゲー再生ゲーム企画',scientist:'宇宙的先端研究者',executive:'最終形態・企業役員'};
const TOGA_CARD_VIEW={
 plus2:{name:'追い風カード',desc:'次のルーレット結果に+5。'},guard:{name:'SAN値保険カード',desc:'次の損失イベントを半減。正気度そのものは保証対象外。'},study:{name:'禁書読破カード',desc:'知力+4'},charm:{name:'作画覚醒カード',desc:'魅力+4'},network:{name:'古参コネカード',desc:'交流+4'},fitness:{name:'修行回カード',desc:'体力+4'},bonus:{name:'謎の埋蔵金カード',desc:'その場で8万円'},date:{name:'恋愛応援カード',desc:'交際中なら好感度+2'}
};
const TOGA_SPACE_NAMES={event:'怪異',plus:'幸運？',minus:'厄災',grow:'覚醒',social:'遭遇',chance:'混沌',card:'遺物カード',treasure:'発掘品',submap:'寄り道',career:'仕事クエスト',romance:'恋愛イベント',payday:'給料',property:'拠点',family:'家族イベント',start:'スタート',bigluck:'大ラッキー',bigbad:'大不幸'};


// v0.45: expanded event libraries. Toga mode mixes ordinary life with hidden strangeness.
const EXTRA_EVENT_RAW={"baby":[["近所の児童館で大きなボールを追いかけ、転んでもすぐ立ち上がって遊び続けた",0,{"fitness":2},2],["家族と動物園へ行き、ゾウの前からなかなか動こうとせず飼育員の話まで聞いた",-15000,{"knowledge":1,"charm":1},3],["折り紙を何度も折ってもらい、最後には自分でも角を合わせようと真似し始めた",0,{"knowledge":2},1],["台所でホットケーキ作りを手伝い、粉を混ぜる係を任されて得意げだった",-5000,{"communication":1,"charm":1},2],["近所の子と砂場で巨大な山を作り、バケツの水で川まで通した",0,{"fitness":1,"communication":2},3],["風邪で一日寝込み、元気になってからお気に入りの公園へ行けるありがたさを実感した",-8000,{"fitness":1},1],["初めて美容院の大きな椅子に座り、最後まで泣かずに髪を切ってもらった",-4000,{"charm":2},2],["家族旅行で海辺の宿に泊まり、朝から貝殻を拾って小さな箱いっぱいに集めた",-25000,{"knowledge":1},4]],"elementary":[["学校の係で飼育小屋のウサギ当番になり、朝早く登校して水と餌を交換した",0,{"communication":1,"fitness":1},3],["社会科見学で消防署へ行き、はしご車の高さと装備の重さに驚いて質問を連発した",0,{"knowledge":2},2],["クラスのドッジボール大会で最後まで外野に残り、逆転の一投を決めた",10000,{"fitness":2,"charm":1},4],["夏祭りの射的で狙っていた大きなお菓子を一発で落とし、友達に自慢した",-5000,{"charm":2},3],["図工の時間に段ボールで動くロボットを作り、休み時間も改造を続けた",-3000,{"knowledge":2,"charm":1},3],["友達の家で初めて泊まり会をし、消灯後も小声で怖い話を続けてなかなか眠れなかった",-5000,{"communication":2},5],["学校のバザーで使わなくなった本とおもちゃを売り、自分で値札を考えた",15000,{"knowledge":1,"communication":1},2],["縄跳びの二重跳びがどうしてもできず、放課後に練習してついに10回続いた",0,{"fitness":3},3],["理科室で育てたアサガオの種を持ち帰り、翌年用に小瓶へ丁寧に保存した",0,{"knowledge":2},2],["学芸会で台詞の多い役を任され、本番では緊張しながらも最後まで言い切った",0,{"charm":2,"communication":1},4],["雨の日に友達と家でボードゲームを遊び、ルールの抜け道を見つけて大騒ぎになった",-3000,{"knowledge":1,"communication":2},3],["町探検の授業で昔からある和菓子屋を取材し、店主から昔の商店街の話を聞いた",0,{"knowledge":2,"communication":1},3]],"middle":[["吹奏楽部の助っ人で文化祭だけ打楽器を担当し、放課後にリズム練習を繰り返した",-10000,{"charm":2,"communication":1},4],["友達と中古ゲーム店を巡り、ずっと探していた一本をワゴンの底から見つけた",-6000,{"knowledge":1,"charm":1},3],["家庭科で作ったハンバーグが思った以上にうまく焼け、家でも同じレシピを再現した",-5000,{"knowledge":1,"charm":2},3],["学級新聞の編集を任され、記事の順番と見出しを何度も直して読みやすく仕上げた",0,{"knowledge":2,"communication":1},3],["校外学習の班長になり、乗り換えを間違えそうな班員を駅の案内図で無事に誘導した",0,{"communication":2,"knowledge":1},4],["陸上記録会の1500mに出場し、最後の一周で自己ベストを更新した",10000,{"fitness":3},4],["友達から借りた推理小説に夢中になり、シリーズを図書館でまとめて借りた",-2000,{"knowledge":2},2],["夏休みに親戚の店を三日間手伝い、レジと品出しで初めて働く大変さを知った",30000,{"communication":2},3],["部活のユニフォームを電車に置き忘れ、駅員へ連絡して終点まで取りに行った",-8000,{"communication":1},2],["美術室で描いたポスターが地域イベントに採用され、駅前に貼り出された",20000,{"charm":3},5],["英語のスピーチ発表で好きな映画について三分間話し、意外と質問が盛り上がった",0,{"knowledge":1,"communication":2},4],["自転車のパンクを自分で直そうとして失敗し、結局自転車屋で修理方法まで教わった",-7000,{"knowledge":2},2]],"high":[["友達四人で体育祭の応援看板を徹夜寸前まで描き、当日は記念写真の人気スポットになった",-10000,{"charm":2,"communication":2},5],["放課後の自習室で同じ志望校の友人と問題集を交換し、苦手分野を教え合った",0,{"knowledge":2,"communication":1},3],["中古のギターをアルバイト代で買い、文化祭までに一曲だけ弾けるよう毎晩練習した",-50000,{"charm":3},5],["オープンキャンパスへ行き、模擬講義と学食を体験して志望校のイメージが具体的になった",-15000,{"knowledge":2},3],["体育のバドミントン大会でペアと作戦を練り、クラス内トーナメントを勝ち上がった",10000,{"fitness":2,"communication":1},4],["学校帰りに友達と証明写真を撮りに行き、履歴書用なのに何度も撮り直した",-3000,{"charm":1},2],["地域の子ども向けイベントでボランティアをし、工作コーナーを一日担当した",0,{"communication":3},4],["模試の帰りにゲームセンターへ寄り、音楽ゲームで自己ベストを更新して気分転換した",-5000,{"fitness":1,"charm":1},2],["クラスメイトの進路相談を聞いているうち、自分が何を大事にしたいかも整理できた",0,{"communication":2,"knowledge":1},3],["初めて一人で夜行バスに乗ってイベントへ遠征し、翌朝へとへとで帰宅した",-35000,{"fitness":1,"charm":2},5],["学校の映像制作課題で脚本と編集を担当し、完成版を上映したら教室が予想以上に沸いた",-12000,{"knowledge":1,"charm":2},5],["卒業アルバムの寄せ書きを集めて回り、普段話さない同級生とも最後に少し話せた",0,{"communication":2},4]],"young":[["引っ越しを機に家具を一式そろえ、部屋の配置を何度も変えてようやく落ち着いた",-180000,{"charm":1},4],["会社の同期と週末にフットサルへ参加し、翌日は全身筋肉痛になった",-12000,{"fitness":2,"communication":1},3],["資格講座へ三か月通い、仕事帰りに毎週同じ教室で勉強を続けた",-80000,{"knowledge":3},3],["担当していた顧客から追加発注が入り、部署の月間目標達成に大きく貢献した",120000,{"communication":2},3],["ネット通販で大型家電を買った直後にセールが始まり、少しだけ悔しい気持ちになった",-70000,{},1],["学生時代の仲間とキャンプへ行き、火起こしから料理まで役割分担して楽しんだ",-50000,{"fitness":1,"communication":2},6],["朝の通勤電車を一駅手前で降りて歩く習慣を始め、三か月で体が軽くなった",0,{"fitness":2},2],["趣味の写真を投稿していたら小さな雑誌から掲載依頼が届き、謝礼も受け取った",70000,{"charm":2},4],["仕事で使うノートPCが突然故障し、急きょ買い替えることになった",-160000,{"knowledge":1},1],["友人の結婚式で余興のまとめ役を任され、動画編集と進行表づくりに追われた",-30000,{"communication":2,"charm":1},5],["部署の歓迎会で隣になった別部署の人と話が合い、後日仕事でも協力するようになった",-8000,{"communication":2},3],["週末だけ料理教室へ通い、だし巻き卵をきれいに巻けるようになった",-40000,{"charm":2},3],["スマホを落として画面を割り、保証に入っていなかったので修理代が痛かった",-45000,{},1],["昔から欲しかった腕時計をボーナスで買い、仕事の日に着けるのが少し楽しみになった",-120000,{"charm":2},3],["同僚と始めた小さな勉強会が半年続き、社内で参加者が少しずつ増えた",0,{"knowledge":2,"communication":2},4],["休日に地域のマラソン大会5kmへ参加し、目標タイムをぎりぎり切った",-6000,{"fitness":3},4]],"mature":[["子どもや親戚を連れて大型テーマパークへ行き、朝から閉園まで歩き回った",-180000,{"fitness":1,"communication":1},8],["自宅の給湯器が突然壊れ、真冬に急いで交換工事を依頼した",-220000,{},1],["部署の予算管理を任され、半年かけて無駄な契約を見直して大きく経費を削減した",160000,{"knowledge":2,"communication":1},4],["昔の趣味仲間と年に一度の集まりを復活させ、久しぶりに朝まで話し込んだ",-50000,{"communication":2},7],["健康診断の数値をきっかけに食生活を見直し、毎日の弁当を自分で用意するようになった",-20000,{"fitness":2,"knowledge":1},3],["親の家の片づけを手伝い、押し入れから学生時代の写真と手紙が大量に出てきた",-30000,{},7],["仕事で大きなトラブルが起きたが、過去の経験を頼りに優先順位をつけて一日で復旧した",120000,{"knowledge":2,"communication":2},5],["家族の記念日に少し高いレストランを予約し、久しぶりに全員でゆっくり食事をした",-90000,{"charm":1,"communication":1},7],["長く使っていたパソコンを買い替え、データ移行に丸一日かかった",-180000,{"knowledge":1},2],["地域の防災訓練で班長を任され、消火器とAEDの使い方を実演した",0,{"communication":2,"fitness":1},4],["昔買ったコレクションの一部を整理して専門店へ持ち込み、予想以上の査定額になった",220000,{"knowledge":1},4],["夫婦や友人と二泊三日の旅行へ出かけ、温泉と地元料理をゆっくり楽しんだ",-150000,{"communication":1},8],["仕事帰りに習慣だったコンビニ通いをやめ、その分を毎月積立へ回すことにした",60000,{"knowledge":1},2],["地域の写真コンテストへ旅先の一枚を応募し、佳作に選ばれて展示された",50000,{"charm":2},5],["後輩のプレゼン練習に付き合い、資料の構成と話し方を一緒に直した",0,{"communication":3},4],["自宅の屋根修理が必要になり、複数社から見積もりを取って大きな出費を決断した",-300000,{"knowledge":1},2]],"senior":[["昔の職場仲間と昼の同窓会を開き、退職後の生活や孫の話で盛り上がった",-40000,{"communication":2},8],["家庭菜園でトマトとナスが豊作になり、近所へ配ってお返しまでたくさんもらった",20000,{"fitness":1,"communication":1},5],["地域の歴史散歩ツアーへ参加し、何十年も住んだ町に知らない話がまだあると知った",-5000,{"knowledge":2},5],["古いレコードプレーヤーを修理し、若い頃によく聴いたアルバムを一枚ずつかけ直した",-40000,{"charm":1},7],["自宅の庭木が大きくなりすぎ、専門業者へ剪定を頼んだ",-60000,{},2],["孫世代の進路相談に乗り、自分の失敗談も含めて一時間じっくり話した",0,{"communication":2,"knowledge":1},6],["友人に誘われて陶芸教室へ通い始め、半年かけて普段使いの湯のみを完成させた",-30000,{"charm":2},6],["健康のため毎週プールへ通い、水中ウォーキングを日課にした",-15000,{"fitness":2},4],["昔買った土地の一部を整理し、思わぬ高値で売却できた",350000,{},4],["近所の子ども会で昔遊びを教え、けん玉と紙飛行機で思った以上に盛り上がった",0,{"communication":2},7],["長年使ったソファを買い替え、座り心地の良いものをじっくり選んだ",-120000,{"charm":1},3],["昔の旅行写真をデジタル化し、家族でテレビに映して思い出話をした",-20000,{"knowledge":1,"communication":1},8],["町の図書館へ寄贈する本を整理し、箱いっぱいの本を運び込んだ",0,{"knowledge":1,"fitness":1},5],["定年後に始めた小さな仕事から思わぬ依頼が続き、まとまった副収入になった",180000,{"communication":1},4]]};
for(const k in EXTRA_EVENT_RAW){EVENTS[k]=EVENTS[k]||[];EVENTS[k].push(...EXTRA_EVENT_RAW[k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]})));}
const EXTRA_CHOICE_EVENTS={"baby":[{"id":"baby_zoo","title":"動物園でどこを見る？","text":"家族で動物園へ。時間はあと少し。最後にどこへ行こう？","options":[{"label":"ゾウを見に行く","out":{"text":"大きな体と長い鼻をじっと観察した。","stats":{"knowledge":2},"memory":2}},{"label":"ふれあい広場へ行く","out":{"text":"小さな動物にそっと触れて大喜びした。","stats":{"charm":1,"communication":1},"memory":3}},{"label":"園内をもう一周する","out":{"text":"最後まで元気に歩き回った。","stats":{"fitness":2},"memory":2}}]},{"id":"baby_cake","title":"誕生日ケーキの飾りつけ","text":"家族がケーキの最後の飾りを任せてくれた。","options":[{"label":"果物を並べる","out":{"text":"色の順番を考えながら果物を並べた。","stats":{"knowledge":1,"charm":1},"memory":3}},{"label":"クリームを絞る","out":{"text":"少し不格好でも、自分で作った飾りに大満足した。","stats":{"charm":2},"memory":3}},{"label":"みんなに任せる","out":{"text":"そばで応援しながら、完成した瞬間に一番大きく拍手した。","stats":{"communication":2},"memory":2}}]},{"id":"baby_park","title":"公園で新しい遊具","text":"見たことのない遊具がある。どう遊ぼう？","options":[{"label":"すべり台から試す","out":{"text":"何度も階段を上って滑り、すっかりお気に入りになった。","stats":{"fitness":2},"memory":2}},{"label":"他の子の遊び方を見る","out":{"text":"しばらく観察してから同じように挑戦した。","stats":{"knowledge":2},"memory":1}},{"label":"近くの子を誘う","out":{"text":"一緒に遊ぶ相手が増えて、帰るまでずっとにぎやかだった。","stats":{"communication":2},"memory":3}}]},{"id":"baby_photo","title":"家族写真を撮ることに","text":"今日は家族みんなで記念写真。どうしよう？","options":[{"label":"カメラに向かって笑う","out":{"text":"とびきりの笑顔が写真に残った。","stats":{"charm":2},"memory":3}},{"label":"お気に入りのおもちゃも持つ","out":{"text":"大好きなものと一緒に、今しか撮れない一枚になった。","stats":{"charm":1},"memory":4}},{"label":"家族の真ん中に座る","out":{"text":"みんなに囲まれて安心した表情になった。","stats":{"communication":2},"memory":3}}]}],"elementary":[{"id":"el_library","title":"図書室で一冊だけ借りる","text":"帰りの時間まであと少し。今日は一冊だけ借りられる。","options":[{"label":"宇宙の図鑑","out":{"text":"惑星や探査機のページを夢中で読み込んだ。","stats":{"knowledge":3},"memory":2}},{"label":"冒険小説","out":{"text":"主人公になった気分で帰り道まで物語の続きを考えた。","stats":{"charm":1,"knowledge":1},"memory":3}},{"label":"友達おすすめの本","out":{"text":"感想を話す約束をして借りた。","stats":{"communication":2},"memory":3}}]},{"id":"el_sportsday","title":"運動会の自由種目","text":"希望する種目を一つ選べることになった。","options":[{"label":"短距離走","out":{"text":"スタートの練習を重ね、本番では最後まで全力で走った。","stats":{"fitness":3},"memory":3}},{"label":"応援団","out":{"text":"声をからしながらクラス全員を盛り上げた。","stats":{"charm":1,"communication":2},"memory":4}},{"label":"用具係","out":{"text":"競技が止まらないよう道具を先回りして準備した。","stats":{"knowledge":1,"communication":1},"memory":2}}]},{"id":"el_cooking","title":"家庭科クラブの体験会","text":"簡単なおやつを一つ作れる。何にしよう？","options":[{"label":"クッキー","out":{"text":"形をそろえて焼き上げ、家にも少し持ち帰った。","cash":-3000,"stats":{"charm":2},"memory":3}},{"label":"フルーツポンチ","out":{"text":"材料を人数分きれいに分け、みんなで食べた。","cash":-2000,"stats":{"communication":2},"memory":3}},{"label":"ホットケーキ","out":{"text":"焼き色を見ながら火加減を覚えた。","cash":-3000,"stats":{"knowledge":2},"memory":2}}]},{"id":"el_market","title":"商店街のおつかい","text":"家族から買い物を頼まれた。少しだけお金が余りそうだ。","options":[{"label":"頼まれた物だけ買う","out":{"text":"間違えずに全部そろえて帰った。","cash":5000,"stats":{"knowledge":1},"memory":1}},{"label":"駄菓子も買う","out":{"text":"余った分で友達と駄菓子を選んだ。","cash":-2000,"stats":{"communication":1},"memory":3}},{"label":"特売品も探す","out":{"text":"チラシと値札を見比べ、少し得して帰った。","cash":10000,"stats":{"knowledge":2},"memory":2}}]},{"id":"el_rain","title":"急な夕立","text":"下校中に急な雨。傘を持っていない。","options":[{"label":"走って帰る","out":{"text":"ランドセルを抱えて家まで全力疾走した。","stats":{"fitness":2},"memory":2}},{"label":"友達の傘に入れてもらう","out":{"text":"肩を濡らしながら二人でゆっくり帰った。","stats":{"communication":2},"memory":3}},{"label":"商店の軒先で待つ","out":{"text":"店のおじさんと天気の話をしながら雨宿りした。","stats":{"communication":1,"knowledge":1},"memory":2}}]},{"id":"el_stage","title":"学芸会の役決め","text":"劇の役を自由に希望できる。","options":[{"label":"主役に立候補","out":{"text":"練習では苦労したが、本番は大きな声で演じ切った。","stats":{"charm":3},"memory":5}},{"label":"ナレーターをする","out":{"text":"場面転換を見ながら落ち着いて物語をつないだ。","stats":{"communication":2,"knowledge":1},"memory":4}},{"label":"大道具を作る","out":{"text":"段ボールと絵の具で舞台セットを作り込んだ。","stats":{"knowledge":1,"charm":2},"memory":4}}]}],"middle":[{"id":"mid_festival","title":"文化祭で何を担当する？","text":"クラス企画の担当を決めることになった。","options":[{"label":"接客係","out":{"text":"来場者へ声をかけ続け、最後には呼び込みが妙に上手くなった。","stats":{"communication":3},"memory":4}},{"label":"装飾係","out":{"text":"教室の壁一面を使ってテーマに合う装飾を作った。","stats":{"charm":3},"memory":4}},{"label":"会計係","out":{"text":"売上と釣り銭を最後まできっちり合わせた。","stats":{"knowledge":2},"memory":3}}]},{"id":"mid_exam","title":"テスト前日の夜","text":"明日は定期テスト。まだ少し時間がある。","options":[{"label":"苦手科目を復習","out":{"text":"最後に見直した範囲が本番でそのまま出た。","stats":{"knowledge":3},"memory":2}},{"label":"早く寝る","out":{"text":"しっかり眠って、朝から頭がすっきりしていた。","stats":{"fitness":2},"memory":1}},{"label":"友達と問題を出し合う","out":{"text":"通話しながら確認し、覚えにくい部分を一緒に整理した。","stats":{"knowledge":1,"communication":2},"memory":3}}]},{"id":"mid_trip","title":"校外学習の自由時間","text":"班ごとに一時間だけ自由に回れる。","options":[{"label":"博物館をじっくり見る","out":{"text":"展示の解説まで読み込み、予定時間ぎりぎりになった。","stats":{"knowledge":3},"memory":3}},{"label":"名物を食べ歩く","out":{"text":"班のみんなで少しずつ買って分け合った。","cash":-5000,"stats":{"communication":2},"memory":4}},{"label":"写真スポットを探す","out":{"text":"何枚も撮って、あとで一番良い写真を選んだ。","stats":{"charm":2},"memory":4}}]},{"id":"mid_game","title":"友達の家で対戦ゲーム","text":"四人で遊ぶことになった。どんな遊び方にする？","options":[{"label":"本気で勝ちにいく","out":{"text":"操作を覚えて集中し、最後の一戦を制した。","stats":{"knowledge":1,"fitness":1},"memory":4}},{"label":"初心者に教える","out":{"text":"操作方法を説明しながら全員が楽しめるように進めた。","stats":{"communication":3},"memory":4}},{"label":"変なルールを追加する","out":{"text":"独自ルールのせいで勝敗より笑いが止まらなくなった。","stats":{"charm":2},"memory":5}}]},{"id":"mid_money","title":"臨時のおこづかい","text":"親戚から少し多めのおこづかいをもらった。","options":[{"label":"欲しかった靴を買う","out":{"text":"前から欲しかった一足を選んだ。","cash":-15000,"stats":{"charm":2},"memory":3}},{"label":"友達と遊びに使う","out":{"text":"映画と食事で一日たっぷり遊んだ。","cash":-12000,"stats":{"communication":2},"memory":4}},{"label":"ほとんど貯金する","out":{"text":"少しだけ使って、残りは封筒へしまった。","cash":15000,"stats":{"knowledge":1},"memory":1}}]},{"id":"mid_volunteer","title":"地域清掃の手伝い","text":"学校から地域清掃への参加募集が来た。","options":[{"label":"朝から参加する","out":{"text":"公園と通学路を歩き回ってごみを集めた。","stats":{"fitness":1,"communication":2},"memory":3}},{"label":"分別係を担当する","out":{"text":"集まったごみを種類ごとに仕分けた。","stats":{"knowledge":2},"memory":2}},{"label":"ポスターを作る","out":{"text":"次回参加者募集の掲示物を作った。","stats":{"charm":2},"memory":3}}]}],"high":[{"id":"high_parttime","title":"アルバイトのシフト相談","text":"店長から週末の人手が足りないと相談された。","options":[{"label":"追加で入る","out":{"text":"忙しい週末を乗り切り、いつもより給料が増えた。","cash":40000,"stats":{"communication":1},"memory":2}},{"label":"予定どおりにする","out":{"text":"無理せず自分の時間を守った。","stats":{"fitness":1},"memory":1}},{"label":"友達を紹介する","out":{"text":"知り合いを紹介し、店長にも友達にも感謝された。","cash":10000,"stats":{"communication":2},"memory":3}}]},{"id":"high_course","title":"選択授業を決める","text":"来学期の選択授業を一つ決めることになった。","options":[{"label":"情報系の授業","out":{"text":"簡単なプログラムを組み、画面が動いた瞬間に達成感があった。","stats":{"knowledge":3},"memory":3}},{"label":"スポーツ実習","out":{"text":"普段やらない競技にも挑戦し、思った以上に汗をかいた。","stats":{"fitness":3},"memory":3}},{"label":"表現・芸術系","out":{"text":"作品づくりと発表を繰り返して人前に出るのに慣れた。","stats":{"charm":2,"communication":1},"memory":4}}]},{"id":"high_dateish","title":"放課後に二人で帰ることに","text":"同級生と偶然帰る方向が同じになった。","options":[{"label":"進路の話をする","out":{"text":"互いの将来の話をして、考えが少し整理された。","stats":{"knowledge":1,"communication":2},"memory":3}},{"label":"趣味の話をする","out":{"text":"好きな作品が意外と重なり、駅まで話が止まらなかった。","stats":{"charm":1,"communication":2},"memory":4}},{"label":"寄り道して食べる","out":{"text":"駅前で軽く食べながらゆっくり話した。","cash":-8000,"stats":{"communication":2},"memory":4}}]},{"id":"high_mock","title":"模試の結果が返ってきた","text":"判定は微妙。ここからどうする？","options":[{"label":"弱点を洗い出す","out":{"text":"間違えた問題を分類し、次にやることを具体化した。","stats":{"knowledge":3},"memory":2}},{"label":"先生へ相談する","out":{"text":"勉強法と志望校について具体的な助言をもらった。","stats":{"knowledge":2,"communication":1},"memory":3}},{"label":"一日休んで切り替える","out":{"text":"映画を見て早く寝て、翌日からまた机に向かった。","stats":{"fitness":1,"charm":1},"memory":2}}]},{"id":"high_trip","title":"卒業旅行の計画","text":"友達と卒業前に一度どこかへ行こうという話になった。","options":[{"label":"温泉旅行","out":{"text":"宿を早めに予約し、みんなでのんびり過ごした。","cash":-45000,"stats":{"communication":1},"memory":6}},{"label":"テーマパーク","out":{"text":"朝から閉園まで遊び尽くした。","cash":-55000,"stats":{"fitness":1,"charm":1},"memory":6}},{"label":"日帰りで街歩き","out":{"text":"費用を抑えつつ、食べ歩きと写真を楽しんだ。","cash":-20000,"stats":{"communication":1,"charm":1},"memory":5}}]},{"id":"high_contest","title":"校内コンテストへ出す作品","text":"自由作品を一つ提出できる。何を作ろう？","options":[{"label":"短い映像作品","out":{"text":"撮影と編集を繰り返し、三分の作品を完成させた。","stats":{"knowledge":1,"charm":2},"memory":5}},{"label":"研究レポート","out":{"text":"興味のあるテーマを調べ、図表まで入れてまとめた。","stats":{"knowledge":3},"memory":4}},{"label":"ステージ発表","out":{"text":"友達を誘って練習し、本番で観客を沸かせた。","stats":{"charm":2,"communication":2},"memory":5}}]}],"young":[{"id":"young_bonus","title":"ボーナスの使い道","text":"予想より少し多めのボーナスが入った。","options":[{"label":"旅行へ使う","out":{"text":"休みを合わせて遠出し、仕事のことを忘れて過ごした。","cash":-90000,"stats":{"charm":1},"memory":7}},{"label":"資格や道具へ投資","out":{"text":"仕事に使える講座と機材へまとめて使った。","cash":-100000,"stats":{"knowledge":3},"memory":3}},{"label":"貯金する","out":{"text":"大半を手を付けずに残し、口座残高を見て少し安心した。","cash":80000,"stats":{"knowledge":1},"memory":1}}]},{"id":"young_weekend","title":"予定のない土曜日","text":"久しぶりに完全な休日。どう過ごそう？","options":[{"label":"友達を誘う","out":{"text":"昼から集まり、食事と買い物で一日があっという間だった。","cash":-25000,"stats":{"communication":2},"memory":5}},{"label":"運動する","out":{"text":"近所を走ってから温泉へ行き、体をしっかり休めた。","cash":-12000,"stats":{"fitness":3},"memory":3}},{"label":"家で趣味に没頭","out":{"text":"積んでいたゲームや本をまとめて楽しんだ。","stats":{"charm":2},"memory":4}}]},{"id":"young_workshop","title":"社外研修へ参加","text":"休日を使う研修の案内が来た。参加方法を選べる。","options":[{"label":"前列で参加","out":{"text":"質問もして、講師と名刺交換までできた。","cash":-30000,"stats":{"knowledge":2,"communication":2},"memory":3}},{"label":"オンライン参加","out":{"text":"費用を抑えて必要な部分を集中して学んだ。","cash":-10000,"stats":{"knowledge":3},"memory":2}},{"label":"今回は見送る","out":{"text":"休養を優先し、翌週の仕事を元気に始めた。","stats":{"fitness":2},"memory":1}}]},{"id":"young_sidejob","title":"副業の誘い","text":"知人から週末だけ手伝わないかと声をかけられた。","options":[{"label":"しっかり参加する","out":{"text":"毎週忙しくなったが、まとまった副収入になった。","cash":130000,"stats":{"communication":1},"memory":3}},{"label":"月に一度だけ参加","out":{"text":"無理のない範囲で続け、少しずつ収入を増やした。","cash":60000,"stats":{"knowledge":1},"memory":2}},{"label":"断る","out":{"text":"本業と自分の時間を優先した。","stats":{"fitness":1},"memory":1}}]},{"id":"young_party","title":"友人宅のホームパーティー","text":"知り合いの知り合いまで集まる大きめの会になった。","options":[{"label":"料理を持っていく","out":{"text":"得意料理を一品作り、思った以上に評判になった。","cash":-12000,"stats":{"charm":2,"communication":1},"memory":5}},{"label":"ゲームを持っていく","out":{"text":"全員で遊べるゲームを持参し、最後まで盛り上がった。","cash":-5000,"stats":{"communication":2},"memory":5}},{"label":"早めに帰る","out":{"text":"翌日の予定を優先して、ほどほどで切り上げた。","stats":{"fitness":1},"memory":2}}]},{"id":"young_move","title":"引っ越し先を迷う","text":"更新時期が来て、住み替えも検討できる。","options":[{"label":"駅近を選ぶ","out":{"text":"家賃は上がったが、毎日の通勤がかなり楽になった。","cash":-120000,"stats":{"fitness":1},"memory":3}},{"label":"広い部屋を選ぶ","out":{"text":"少し郊外へ移り、趣味の荷物を置く余裕ができた。","cash":-100000,"stats":{"charm":2},"memory":4}},{"label":"今の部屋に残る","out":{"text":"引っ越し費用を使わず、そのまま更新した。","cash":-40000,"stats":{"knowledge":1},"memory":2}}]},{"id":"young_project","title":"仕事の新企画","text":"小さな企画を自由に提案していいと言われた。","options":[{"label":"新しい客層を狙う","out":{"text":"資料を作り込み、試験的な企画として採用された。","cash":90000,"stats":{"communication":2},"memory":4,"jobExp":1}},{"label":"業務改善を提案","out":{"text":"面倒だった作業を減らす仕組みを作り、部署で使われ始めた。","cash":60000,"stats":{"knowledge":2},"memory":3,"jobExp":1}},{"label":"チームイベントを企画","out":{"text":"交流会を開き、部署内で相談しやすい空気ができた。","cash":-20000,"stats":{"communication":3},"memory":4,"jobExp":1}}]},{"id":"young_hobby","title":"新しい趣味を始めたい","text":"仕事以外の時間に何か一つ始めることにした。","options":[{"label":"写真","out":{"text":"中古カメラを買い、休日に街を歩いて撮るようになった。","cash":-70000,"stats":{"charm":2},"memory":4}},{"label":"登山","out":{"text":"近郊の低山から始め、朝早く起きる習慣がついた。","cash":-40000,"stats":{"fitness":3},"memory":4}},{"label":"語学","out":{"text":"オンライン講座を続け、海外の記事を少し読めるようになった。","cash":-50000,"stats":{"knowledge":3},"memory":3}}]}],"mature":[{"id":"mature_bonus","title":"まとまった余裕資金","text":"家計に少し余裕ができた。どう使おう？","options":[{"label":"家を整える","out":{"text":"家具と家電を見直し、暮らしやすさがかなり上がった。","cash":-180000,"stats":{"charm":1},"memory":4}},{"label":"旅行へ行く","out":{"text":"家族や友人と少し遠くへ出かけ、写真をたくさん残した。","cash":-160000,"stats":{"communication":1},"memory":8}},{"label":"将来用に残す","out":{"text":"大半を手を付けず、今後の大きな出費に備えた。","cash":120000,"stats":{"knowledge":1},"memory":2}}]},{"id":"mature_parent","title":"親から相談の電話","text":"実家のことで少し相談したいと言われた。","options":[{"label":"すぐ会いに行く","out":{"text":"予定を空けて話を聞き、一緒に必要な手続きを進めた。","cash":-40000,"stats":{"communication":2},"memory":6}},{"label":"電話で整理する","out":{"text":"必要な情報を調べ、連絡先や手順をまとめて送った。","stats":{"knowledge":2,"communication":1},"memory":4}},{"label":"兄弟や親戚にも相談","out":{"text":"一人で抱えず役割を分け、全員で対応することになった。","stats":{"communication":3},"memory":5}}]},{"id":"mature_lead","title":"大きな仕事のまとめ役","text":"複数人をまとめる案件を任された。","options":[{"label":"細かく計画する","out":{"text":"工程表を作り、遅れが出る前に何度も調整した。","stats":{"knowledge":2},"memory":4,"jobExp":2}},{"label":"人に任せる","out":{"text":"得意分野ごとに役割を任せ、全体調整に集中した。","stats":{"communication":3},"memory":4,"jobExp":2}},{"label":"自分も前線に入る","out":{"text":"忙しくなったが、現場の問題を早く拾えた。","stats":{"fitness":1,"communication":1},"memory":4,"jobExp":2}}]},{"id":"mature_health","title":"健康診断の結果","text":"少し気になる項目があった。生活を見直すことにした。","options":[{"label":"食事を変える","out":{"text":"外食を減らし、家で作る回数を増やした。","cash":20000,"stats":{"fitness":2},"memory":2}},{"label":"運動を始める","out":{"text":"ジムへ入会し、週二回は体を動かすようになった。","cash":-50000,"stats":{"fitness":3},"memory":3}},{"label":"睡眠を優先する","out":{"text":"夜更かしを減らし、平日の疲れが残りにくくなった。","stats":{"fitness":2,"knowledge":1},"memory":2}}]},{"id":"mature_reunion","title":"久しぶりの同窓会","text":"学生時代の仲間がかなり集まるらしい。","options":[{"label":"最初から最後まで参加","out":{"text":"昔話から今の仕事まで話が尽きず、二次会まで残った。","cash":-30000,"stats":{"communication":3},"memory":8}},{"label":"一次会だけ参加","out":{"text":"懐かしい顔とゆっくり話し、ほどよい時間で帰った。","cash":-15000,"stats":{"communication":2},"memory":6}},{"label":"今回は欠席する","out":{"text":"写真だけ送ってもらい、家で昔のアルバムを開いた。","stats":{"charm":1},"memory":3}}]},{"id":"mature_home","title":"家のメンテナンス","text":"そろそろ家のあちこちを直す必要がありそうだ。","options":[{"label":"まとめて修繕","out":{"text":"外壁や設備をまとめて直し、大きな出費になったが安心できた。","cash":-320000,"stats":{"knowledge":1},"memory":3}},{"label":"必要な所だけ直す","out":{"text":"優先順位をつけて最低限の修理だけ済ませた。","cash":-140000,"stats":{"knowledge":2},"memory":2}},{"label":"自分でできる所は直す","out":{"text":"休日に工具を持ち出し、小さな修繕を少しずつ進めた。","cash":-50000,"stats":{"knowledge":2,"fitness":1},"memory":3}}]},{"id":"mature_hobby","title":"昔の趣味を再開","text":"しばらく離れていた趣味の道具が目に入った。","options":[{"label":"本格的に再開","out":{"text":"必要な道具を買い直し、週末の楽しみが一つ増えた。","cash":-100000,"stats":{"charm":3},"memory":6}},{"label":"昔の道具だけで楽しむ","out":{"text":"手元にあるもので久しぶりに触れ、感覚を思い出した。","stats":{"charm":2},"memory":5}},{"label":"友達を誘う","out":{"text":"昔の仲間にも連絡し、一緒に再開することになった。","cash":-30000,"stats":{"communication":2,"charm":1},"memory":7}}]},{"id":"mature_invest","title":"資産運用を見直す","text":"積立や保険の内容を見直す時期が来た。","options":[{"label":"専門家へ相談","out":{"text":"手数料はかかったが、家計全体を整理できた。","cash":-40000,"stats":{"knowledge":2},"memory":2}},{"label":"自分で調べる","out":{"text":"資料を読み比べ、不要な契約を一つ解約した。","cash":70000,"stats":{"knowledge":3},"memory":2}},{"label":"今のまま続ける","out":{"text":"大きく変えず、安定を優先した。","stats":{"knowledge":1},"memory":1}}]}],"senior":[{"id":"senior_day","title":"今日は一日予定なし","text":"時間を自由に使える。何をしよう？","options":[{"label":"散歩へ出る","out":{"text":"川沿いをゆっくり歩き、季節の花を見つけた。","stats":{"fitness":2},"memory":4}},{"label":"昔の写真を整理","out":{"text":"古いアルバムを開き、何十年前の出来事まで思い出した。","stats":{"knowledge":1},"memory":7}},{"label":"友人へ連絡","out":{"text":"久しぶりに電話をかけ、そのまま長話になった。","stats":{"communication":2},"memory":6}}]},{"id":"senior_trip","title":"平日の小旅行","text":"混雑の少ない時期に一泊旅行へ行けそうだ。","options":[{"label":"温泉地へ行く","out":{"text":"温泉と食事をゆっくり楽しみ、よく眠れた。","cash":-90000,"stats":{"fitness":1},"memory":8}},{"label":"歴史の街へ行く","out":{"text":"資料館と古い町並みを一日かけて歩いた。","cash":-70000,"stats":{"knowledge":2},"memory":7}},{"label":"近場の日帰りにする","out":{"text":"費用を抑えつつ、昼食と景色を楽しんだ。","cash":-30000,"stats":{"communication":1},"memory":5}}]},{"id":"senior_family","title":"家族が集まる休日","text":"久しぶりに家族が集まることになった。","options":[{"label":"料理を用意する","out":{"text":"朝から台所に立ち、みんなで食べられる料理をたくさん作った。","cash":-40000,"stats":{"communication":1},"memory":8}},{"label":"写真を撮る","out":{"text":"全員がそろったところで何枚も写真を残した。","stats":{"charm":1},"memory":8}},{"label":"昔話をする","out":{"text":"子どもや孫世代へ、若い頃の失敗談まで話した。","stats":{"communication":2},"memory":9}}]},{"id":"senior_teach","title":"地域講座の講師を頼まれた","text":"昔の仕事や趣味について話してほしいと言われた。","options":[{"label":"資料を作り込む","out":{"text":"写真や図を用意して、分かりやすく話せるよう準備した。","stats":{"knowledge":2,"communication":1},"memory":6}},{"label":"実演中心にする","out":{"text":"道具を持ち込み、参加者にも実際に触ってもらった。","stats":{"communication":2,"charm":1},"memory":7}},{"label":"少人数で話す","out":{"text":"座談会形式にして、質問へゆっくり答えた。","stats":{"communication":3},"memory":6}}]},{"id":"senior_collection","title":"長年のコレクション整理","text":"棚いっぱいの品をどうするか考えることになった。","options":[{"label":"一部を売る","out":{"text":"価値のあるものだけ専門店へ持ち込み、まとまったお金になった。","cash":220000,"stats":{"knowledge":1},"memory":4}},{"label":"家族へ譲る","out":{"text":"思い出を説明しながら、欲しい人へ一つずつ渡した。","stats":{"communication":2},"memory":7}},{"label":"そのまま残す","out":{"text":"並べ直して、眺められるようにきれいに整理した。","stats":{"charm":1},"memory":5}}]},{"id":"senior_newtech","title":"新しい機器を使ってみる","text":"家族から便利だからと新しい機器を勧められた。","options":[{"label":"すぐ試す","out":{"text":"最初は戸惑ったが、動画通話まで一人で使えるようになった。","stats":{"knowledge":2},"memory":4}},{"label":"教えてもらう","out":{"text":"何度も聞きながら覚え、家族との連絡が増えた。","stats":{"communication":2,"knowledge":1},"memory":5}},{"label":"必要な機能だけ使う","out":{"text":"写真を見る機能だけ覚え、それでも十分楽しめた。","stats":{"knowledge":1},"memory":3}}]}]};
for(const k in EXTRA_CHOICE_EVENTS){CHOICE_EVENTS[k]=CHOICE_EVENTS[k]||[];CHOICE_EVENTS[k].push(...EXTRA_CHOICE_EVENTS[k]);}
const TOGA_EXTRA_EVENT_RAW={"baby":[["夜中に目を覚ますと、廊下の奥で黒い影が四つん這いのまま静かにこちらを見ていた。瞬きをしたら消えていた",0,{"charm":1},4],["砂場で掘り出した丸い石に、誰も描いていないはずの目のような模様が浮かんでいた",0,{"knowledge":1},3],["家族写真を見返すと、撮った覚えのない後ろ姿が一枚だけ端に写っていた",0,{"knowledge":1,"charm":1},4],["テレビの砂嵐から子どもの名前を呼ぶ声が聞こえた気がして、家族全員でしばらく黙り込んだ",0,{"communication":1},4]],"elementary":[["放課後の校庭で、黒く蠢くスライムのようなものが排水溝へ吸い込まれていくのを見た。先生に話したが泥だろうと言われた",0,{"knowledge":1},5],["図書室の一番奥に、貸出記録が一度もない分厚い本を見つけた。開くと学校の見取り図に存在しない部屋が描かれていた",0,{"knowledge":2},5],["下校中、友達と曲がったはずの角を何度曲がっても同じ自動販売機の前へ戻ってきた。十分ほど歩くと突然いつもの道に出た",0,{"communication":1},6],["夏休みのラジオ体操で、見たことのない子が毎日最後列にいた。最終日だけ来ず、近所の誰もその子を知らなかった",0,{"charm":1},5],["友達の家で古いゲーム機を起動すると、説明書にないセーブデータに自分たちと同じ名前が並んでいた",0,{"knowledge":1,"communication":1},6]],"middle":[["隣の街で行方不明者が続いているという話を聞いた。帰りの電車では、車内放送が一度だけ存在しない駅名を告げた",0,{"knowledge":1},6],["部活の倉庫で黒いゼリー状の塊を見つけた。棒で触る前にゆっくり排水口へ逃げていった",0,{"fitness":1},5],["友人数人と旧校舎を探検していたら、気づいた時には窓も扉もない見知らぬ教室にいた。壁の暗号を解いて元の廊下へ戻った",0,{"knowledge":2,"communication":2},8],["深夜のグループ通話に、招待していないアカウントが一人参加していた。誰も発言しないまま朝になると履歴ごと消えていた",0,{"communication":1},5],["中古で買った漫画の余白に、自分が翌日する予定の行動が鉛筆で細かく書き込まれていた",0,{"knowledge":2},6]],"high":[["文化祭準備で遅くなった夜、校舎の窓から見えるはずの街灯がすべて消え、数分だけ外が完全な闇になった",0,{"communication":1},6],["友人三人と帰宅中、駅の階段を上がると知らない地下街に出た。閉店した店の看板を手掛かりに出口を探し、気づけば元の駅前に戻っていた",0,{"knowledge":2,"communication":1},8],["模試の問題冊子に一問だけ印刷の違う設問があり、解答欄には『見たものを記せ』とだけ書かれていた。回収後、先生はそんな問題はないと言った",0,{"knowledge":2},6],["中古ゲームショップの奥で見つけたディスクにはタイトルも型番もなかった。店員に聞いた瞬間、さっきまであった棚ごと見当たらなくなった",0,{"charm":1},6],["夜の公園で星を見上げたら、いつもの星座の間に巨大な輪のような並びがあった。写真には何も写らなかった",0,{"knowledge":1,"charm":1},7]],"young":[["終電で寝過ごし、目を覚ますと車内に自分しかいなかった。次の駅名は表示されず、十分後に突然いつもの終点へ着いた",0,{"fitness":1},7],["会社の共有フォルダに『開かないこと』という名前のファイルが現れた。翌朝には消えていたが、アクセス履歴には自分のIDだけが残っていた",0,{"knowledge":2},6],["同僚と飲んだ帰り、雑居ビルの階段を降り続けても一階に着かなくなった。全員で同じ階数を数え直した瞬間、入口へ戻っていた",0,{"communication":2},8],["旅行先の港で、海面すれすれを黒い巨大な影がゆっくり通過した。地元の人は誰も気づいていないようだった",0,{"charm":1},6],["深夜のコンビニ帰りに、人の声を真似しながら壁沿いを這う黒い塊を見た。角を曲がると痕跡もなかった",0,{"fitness":1},7],["TRPG仲間と集まった夜、誰も用意していない古びたキャラクターシートが机の中央に置かれていた。能力値だけ全員の現実と妙に一致していた",0,{"knowledge":1,"communication":2},7]],"mature":[["隣町で行方不明者が相次ぎ、ニュースでは山中の捜索が続いていた。数日後、全員が別々の場所で無事見つかったが、その間の記憶を誰も話さなかった",0,{"knowledge":1},7],["家の廊下が夜中だけ数メートル長くなっていることに気づいた。家族と一緒に確認した翌朝には元の長さへ戻っていた",0,{"communication":1},7],["出張先のナビに地図にない集落が表示され、道沿いに同じ顔の石像が何十体も並んでいた。引き返すと履歴から目的地ごと消えた",0,{"knowledge":2},8],["昔の友人から『あの部屋のこと覚えてる？』と連絡が来た。何のことか思い出せないのに、手のひらには古い鍵の跡だけ残っていた",0,{"communication":1},7],["町内会倉庫の整理中、処分したはずの石像が翌週また棚に戻っていた。しかも前より一体増えていた",0,{"knowledge":1},7],["夜中に目覚めると窓の外の星が見慣れない配置になっていた。家族を起こした頃にはいつもの空へ戻っていた",0,{"charm":1},7]],"senior":[["昔のアルバムから、家族全員が覚えていない旅行写真が出てきた。背景の海には黒い柱のようなものが何本も立っていた",0,{"knowledge":1},8],["散歩コースの石碑に昨日までなかった名前が刻まれていた。翌日には消えていたが、写真にははっきり残っていた",0,{"knowledge":1},6],["古い友人と昔話をしていると、二人とも同じ『存在しない夏休み』の記憶を持っていることに気づいた",0,{"communication":2},8],["夜のラジオから若い頃の自分の声にそっくりな投稿が読まれた。内容は明日する予定の散歩についてだった",0,{"charm":1},7],["物置の奥から黒いぬめりのついた箱が出てきた。庭へ置いた翌朝には箱ごとなくなり、地面だけが丸く焦げていた",0,{"fitness":1},6]]};
for(const k in TOGA_EXTRA_EVENT_RAW){TOGA_EVENTS[k]=TOGA_EVENTS[k]||[];TOGA_EVENTS[k].push(...TOGA_EXTRA_EVENT_RAW[k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]})));}
const TOGA_EXTRA_CHOICE_EVENTS={"baby":[{"id":"toga_baby_closet","title":"押し入れの奥が妙に深い","text":"押し入れを開けたら、いつもより奥行きがずっと深く見える。","options":[{"label":"少しだけ中をのぞく","out":{"text":"暗がりの奥で何かが動いた気がして、すぐに戸を閉めた。","stats":{"knowledge":1},"memory":5}},{"label":"家族を呼ぶ","out":{"text":"みんなで確認すると普通の押し入れに戻っていた。","stats":{"communication":2},"memory":4}},{"label":"おもちゃを奥へ転がす","out":{"text":"転がしたおもちゃはしばらく戻らず、数分後に別の場所から見つかった。","stats":{"charm":1},"memory":6}}]},{"id":"toga_baby_tv","title":"テレビの砂嵐","text":"電源を切ったテレビから、かすかな音が聞こえる。","options":[{"label":"近づいて聞く","out":{"text":"知らない子守歌のような音が聞こえ、急に画面が真っ暗になった。","stats":{"knowledge":1},"memory":5}},{"label":"家族に知らせる","out":{"text":"家族が来た時には音は消えていた。","stats":{"communication":2},"memory":4}},{"label":"部屋を出る","out":{"text":"気にしないことにして別の部屋へ行った。翌朝テレビは普通に動いた。","stats":{"fitness":1},"memory":3}}]}],"elementary":[{"id":"toga_el_drain","title":"排水溝の黒いもの","text":"校庭の排水溝で、黒いスライムのようなものがゆっくり動いている。","options":[{"label":"先生を呼ぶ","out":{"text":"戻ってきた時には何も残っていなかったが、排水溝だけ妙にきれいだった。","stats":{"communication":2},"memory":5}},{"label":"少し離れて観察する","out":{"text":"塊は形を変えながら排水溝の奥へ消えていった。","stats":{"knowledge":2},"memory":6}},{"label":"友達を呼ぶ","out":{"text":"二人で見た直後に消えた。少なくとも見間違いではなかったらしい。","stats":{"communication":1},"memory":6}}]},{"id":"toga_el_station","title":"帰り道の知らないホーム","text":"電車を降りると、見たことのないホームだった。案内板にも駅名がない。","options":[{"label":"次の電車を待つ","out":{"text":"数分後に来た電車へ乗ると、次の駅でいつもの路線に戻った。","stats":{"knowledge":1},"memory":7}},{"label":"階段を探す","out":{"text":"長い通路を歩き続け、非常口を開けると近所の踏切脇に出た。","stats":{"fitness":1},"memory":7}},{"label":"友達に電話する","out":{"text":"通話はつながらなかったが、呼び出し音がホームの反対側から聞こえた。","stats":{"communication":1},"memory":8}}]},{"id":"toga_el_game","title":"説明書にないセーブデータ","text":"中古ゲームを起動すると、自分と友達の名前が入ったセーブデータがある。","options":[{"label":"ロードする","out":{"text":"画面には自分たちの学校そっくりのマップが表示された。怖くなってすぐ電源を切った。","stats":{"knowledge":2},"memory":7}},{"label":"削除する","out":{"text":"削除したはずなのに、再起動すると同じデータが戻っていた。","stats":{"knowledge":1},"memory":6}},{"label":"店へ持っていく","out":{"text":"店員は首をかしげ、そのソフトはうちで売ったものではないと言った。","stats":{"communication":1},"memory":6}}]}],"middle":[{"id":"toga_mid_room","title":"見知らぬ教室","text":"友人数人で旧校舎を歩いていたら、いつの間にか窓も扉もない教室へ移っていた。","options":[{"label":"壁の記号を調べる","out":{"text":"同じ模様が繰り返す場所を見つけ、そこを押すと元の廊下へ戻れた。","stats":{"knowledge":2},"memory":9}},{"label":"全員で記憶を確認する","out":{"text":"入ってきた順番を一人ずつ話し、共通点を頼りに出口を見つけた。","stats":{"communication":2},"memory":9}},{"label":"机を動かして探す","out":{"text":"床下に小さな扉を見つけ、くぐった瞬間に旧校舎の物置へ出た。","stats":{"fitness":1},"memory":9}}]},{"id":"toga_mid_call","title":"知らない参加者","text":"友達との深夜通話に、招待していないアカウントが一人入っている。","options":[{"label":"誰か聞いてみる","out":{"text":"返事はなかったが、全員のマイクから同時に小さなノイズが流れた。","stats":{"communication":1},"memory":7}},{"label":"すぐ退出する","out":{"text":"全員で通話を切った。翌朝、参加履歴からそのアカウントだけ消えていた。","stats":{"knowledge":1},"memory":6}},{"label":"画面を録画する","out":{"text":"録画には参加者が一人多い状態が残っていた。","stats":{"knowledge":2},"memory":8}}]},{"id":"toga_mid_book","title":"明日のことが書かれた漫画","text":"中古漫画の余白に、明日の自分の予定が細かく書かれている。","options":[{"label":"書かれた通りに動く","out":{"text":"驚くほど予定通りに進んだが、最後の一行だけ黒く塗りつぶされていた。","stats":{"knowledge":1},"memory":8}},{"label":"予定を変える","out":{"text":"あえて別の道を選ぶと、そのページの文字が少しずつ薄くなった。","stats":{"charm":1},"memory":7}},{"label":"友達に見せる","out":{"text":"友達が読んだ瞬間、余白は普通の落書きに戻った。","stats":{"communication":1},"memory":7}}]}],"high":[{"id":"toga_high_platform","title":"存在しない駅","text":"帰宅中、電車が聞いたことのない駅名を告げて停車した。ドアは開いている。","options":[{"label":"降りてみる","out":{"text":"人気のないホームを歩くと、反対側の階段からいつもの駅前へ出た。","stats":{"knowledge":1},"memory":9}},{"label":"車内に残る","out":{"text":"ドアが閉じた後、窓の外を真っ暗なホームが数分流れ続けた。次に停まったのはいつもの駅だった。","stats":{"fitness":1},"memory":8}},{"label":"友達へ連絡する","out":{"text":"圏外なのにメッセージだけ送信済みになった。後で見ると内容が別の文章に変わっていた。","stats":{"communication":1},"memory":9}}]},{"id":"toga_high_disk","title":"タイトルのないゲームディスク","text":"中古店の棚に、ラベルも型番もないディスクが一枚だけ置かれている。","options":[{"label":"店員に聞く","out":{"text":"店員が棚を見ると、ディスクどころかその棚自体が置かれていなかった。","stats":{"communication":1},"memory":7}},{"label":"買ってみる","out":{"text":"レジではバーコードが読めず、店員から『これは商品じゃない』と返された。","stats":{"knowledge":1},"memory":7}},{"label":"写真だけ撮る","out":{"text":"帰宅して写真を見ると、ディスクの部分だけ真っ黒に潰れていた。","stats":{"charm":1},"memory":7}}]},{"id":"toga_high_stars","title":"星の並びが違う夜","text":"帰り道で空を見上げると、知っている星座の間に巨大な輪がある。","options":[{"label":"写真を撮る","out":{"text":"画面には普通の星空しか写らなかった。","stats":{"knowledge":1},"memory":7}},{"label":"友達を呼ぶ","out":{"text":"友達が来る直前に輪は消えたが、空を指している間ずっと寒気がした。","stats":{"communication":1},"memory":7}},{"label":"見なかったことにする","out":{"text":"足早に帰った。翌日のニュースには何も出ていなかった。","stats":{"fitness":1},"memory":6}}]}],"young":[{"id":"toga_young_folder","title":"開かないこと、と書かれたファイル","text":"会社の共有フォルダに、誰が作ったか分からないファイルがある。","options":[{"label":"開いてみる","out":{"text":"中には空の文書が一枚だけあり、最下部に自分の社員番号だけが書かれていた。","stats":{"knowledge":2},"memory":8}},{"label":"管理者へ連絡する","out":{"text":"管理者が確認する頃にはファイルは消えており、作成ログも残っていなかった。","stats":{"communication":1},"memory":7}},{"label":"触らずに帰る","out":{"text":"翌朝には消えていた。ただしアクセス履歴には自分が開いた記録だけ残っていた。","stats":{"knowledge":1},"memory":7}}]},{"id":"toga_young_stairs","title":"終わらない階段","text":"飲み会帰りに雑居ビルの階段を降りているが、何階下りても一階に着かない。","options":[{"label":"全員で階数を数える","out":{"text":"声をそろえて十まで数えた瞬間、次の踊り場が一階になった。","stats":{"communication":2},"memory":9}},{"label":"上へ戻る","out":{"text":"上り始めるとすぐ屋上に出た。そこから非常階段で普通に帰れた。","stats":{"fitness":1},"memory":8}},{"label":"非常口を開ける","out":{"text":"扉の向こうは自宅近くの路地だった。翌日ビルへ戻ると、その扉は物置だった。","stats":{"knowledge":1},"memory":9}}]},{"id":"toga_young_black","title":"人の声を真似する黒い塊","text":"深夜の帰り道、壁沿いを這う黒いものが知人の声で名前を呼んでいる。","options":[{"label":"距離を取って観察する","out":{"text":"塊は声色を変えながら角の向こうへ消えた。","stats":{"knowledge":2},"memory":8}},{"label":"走って帰る","out":{"text":"振り返らず家まで走った。玄関へ着く頃には声も聞こえなくなった。","stats":{"fitness":2},"memory":7}},{"label":"誰かに電話する","out":{"text":"通話相手の声が聞こえた瞬間、黒い塊は排水溝へ逃げ込んだ。","stats":{"communication":2},"memory":8}}]},{"id":"toga_young_sheet","title":"知らないキャラクターシート","text":"TRPGの卓に、誰も用意していない古びたキャラクターシートが一枚ある。","options":[{"label":"内容を読む","out":{"text":"能力値が参加者全員の現実と妙に一致しており、最後の欄だけ空白だった。","stats":{"knowledge":2},"memory":8}},{"label":"ゲームに使う","out":{"text":"シナリオ中、そのキャラクターだけGMも知らない行動を記録欄に残し始めた。","stats":{"charm":1},"memory":9}},{"label":"しまっておく","out":{"text":"終了後に確認すると、紙は新品の無地シートへ戻っていた。","stats":{"communication":1},"memory":7}}]},{"id":"toga_young_port","title":"海面の巨大な影","text":"旅行先の港で、船より大きな黒い影が海面のすぐ下を通過した。","options":[{"label":"動画を撮る","out":{"text":"映像には波しか映っていなかったが、音声に低い振動音が残っていた。","stats":{"knowledge":1},"memory":8}},{"label":"地元の人に聞く","out":{"text":"相手は一瞬だけ黙り、『夕方の海は見ない方がいい』とだけ答えた。","stats":{"communication":1},"memory":9}},{"label":"その場を離れる","out":{"text":"宿へ戻った。翌朝、港には普段通り漁船が並んでいた。","stats":{"fitness":1},"memory":7}}]}],"mature":[{"id":"toga_mature_hall","title":"夜だけ長い廊下","text":"家の廊下が、夜中だけ明らかに長くなっている。家族も同じことに気づいた。","options":[{"label":"全員で端まで歩く","out":{"text":"何十歩も進んだところで照明が一度消え、次の瞬間には普通の長さへ戻っていた。","stats":{"communication":2},"memory":10}},{"label":"長さを測る","out":{"text":"メジャーは途中から目盛りが全部同じ数字になった。翌朝は普通に使えた。","stats":{"knowledge":2},"memory":9}},{"label":"部屋へ戻る","out":{"text":"扉を閉めて朝まで待った。朝になると廊下はいつも通りだった。","stats":{"fitness":1},"memory":7}}]},{"id":"toga_mature_village","title":"地図にない集落","text":"出張先でナビに地図にない集落が表示され、道沿いに同じ顔の石像が並んでいる。","options":[{"label":"少しだけ入る","out":{"text":"人影はなかった。広場の時計だけが逆向きに動いており、急いで引き返した。","stats":{"knowledge":2},"memory":10}},{"label":"写真を撮って戻る","out":{"text":"写真には石像が一体も写っていなかった。","stats":{"charm":1},"memory":8}},{"label":"すぐUターンする","out":{"text":"来た道を戻ると、ナビの履歴から集落の名前ごと消えた。","stats":{"fitness":1},"memory":7}}]},{"id":"toga_mature_statue","title":"増える石像","text":"町内会倉庫で処分した石像が戻ってきた。しかも前より一体増えている。","options":[{"label":"もう一度処分する","out":{"text":"今度は記録を残して処分した。翌週、記録だけがなくなっていた。","stats":{"knowledge":1},"memory":9}},{"label":"倉庫の外へ出す","out":{"text":"翌朝、石像は元の棚へ戻っていた。床には濡れた足跡が続いていた。","stats":{"fitness":1},"memory":9}},{"label":"触らずに報告する","out":{"text":"他の役員も確認したが、昔から三体あったと言い張る人が一人だけいた。","stats":{"communication":1},"memory":9}}]},{"id":"toga_mature_missing","title":"隣町の行方不明者","text":"隣町で行方不明者が相次いでいる。数日後、全員が無事見つかったらしい。","options":[{"label":"ニュースを追う","out":{"text":"全員が同じ数日間の記憶を失っていることだけが報じられた。","stats":{"knowledge":2},"memory":8}},{"label":"知人に連絡する","out":{"text":"隣町の知人は『夜に窓を開けない方がいい』とだけ言った。","stats":{"communication":1},"memory":8}},{"label":"気にせず生活する","out":{"text":"自分の町はいつも通りだった。ただ、その週だけ夜の犬の鳴き声が少なかった。","stats":{"fitness":1},"memory":7}}]},{"id":"toga_mature_sky","title":"一晩だけ違う星空","text":"夜中、家族と同時に目を覚ました。窓の外の星が見慣れない配置になっている。","options":[{"label":"家族で外へ出る","out":{"text":"空全体を見上げているうち、雲が流れた瞬間にいつもの星空へ戻った。","stats":{"communication":2},"memory":10}},{"label":"写真を撮る","out":{"text":"写真には星ではなく、真っ黒な円が一つだけ写っていた。","stats":{"knowledge":1},"memory":9}},{"label":"カーテンを閉める","out":{"text":"朝まで見ないことにした。翌日は普通のニュースしか流れていなかった。","stats":{"fitness":1},"memory":7}}]}],"senior":[{"id":"toga_senior_album","title":"覚えのない旅行写真","text":"昔のアルバムに、家族全員が覚えていない旅行写真が一枚ある。","options":[{"label":"家族に見せる","out":{"text":"誰も覚えていないのに、写真の場所だけ全員が同じ名前で呼んだ。","stats":{"communication":2},"memory":10}},{"label":"拡大して調べる","out":{"text":"背景の海に、黒い柱のようなものが何本も立っているのが分かった。","stats":{"knowledge":2},"memory":10}},{"label":"アルバムへ戻す","out":{"text":"次に開いた時、その写真はなくなっていた。","stats":{"charm":1},"memory":8}}]},{"id":"toga_senior_radio","title":"若い頃の自分の声","text":"夜のラジオから、若い頃の自分にそっくりな声で投稿が読まれた。","options":[{"label":"最後まで聞く","out":{"text":"投稿内容は明日の散歩コースについてだった。翌日、その道は工事で通行止めになっていた。","stats":{"knowledge":1},"memory":9}},{"label":"番組へ電話する","out":{"text":"スタッフはその投稿を読んでいないと言った。","stats":{"communication":1},"memory":8}},{"label":"ラジオを切る","out":{"text":"翌朝、電源を入れると同じ番組の続きが流れていた。","stats":{"charm":1},"memory":8}}]},{"id":"toga_senior_stone","title":"昨日までなかった名前","text":"散歩道の古い石碑に、昨日まではなかったはずの名前が刻まれている。","options":[{"label":"写真を撮る","out":{"text":"翌日には文字は消えていたが、写真にははっきり残っていた。","stats":{"knowledge":2},"memory":9}},{"label":"近所の人に聞く","out":{"text":"昔からその名前があったと言う人と、初めて見たと言う人に分かれた。","stats":{"communication":2},"memory":9}},{"label":"触らずに帰る","out":{"text":"その夜、夢の中で同じ名前を何度も呼ばれた。朝には内容をほとんど忘れていた。","stats":{"charm":1},"memory":8}}]},{"id":"toga_senior_save","title":"古いセーブデータ","text":"何十年ぶりに起動したゲーム機に、昨日の日付のセーブデータが残っている。","options":[{"label":"ロードする","out":{"text":"画面には今の自宅そっくりの部屋が表示され、キャラクターはテレビの前に立っていた。","stats":{"knowledge":2},"memory":10}},{"label":"データを消す","out":{"text":"削除確認の画面に『本当に？』ではなく自分の名前が表示された。","stats":{"charm":1},"memory":9}},{"label":"電源を切る","out":{"text":"そのまま箱へ戻した。数日後、勝手に起動音が鳴った気がした。","stats":{"fitness":1},"memory":8}}]}]};
for(const k in TOGA_EXTRA_CHOICE_EVENTS){TOGA_CHOICE_EVENTS[k]=TOGA_CHOICE_EVENTS[k]||[];TOGA_CHOICE_EVENTS[k].push(...TOGA_EXTRA_CHOICE_EVENTS[k]);}

const ALL_CHOICE_EVENTS=[...Object.values(CHOICE_EVENTS).flat(),...Object.values(TOGA_CHOICE_EVENTS).flat()];
// v0.58: dedicated event pools, choice-heavy balance, adult-stage expansion.
// Every era has 8 normal stories + 2 three-choice stories per type (10 total).
const SPACE_EVENT_RAW={"plus":{"baby":[["親戚から成長祝いをもらい、家族が将来のために貯金してくれた",30000,{"charm":1},2],["児童館のミニイベントで最後まで元気に参加し、小さな記念品をもらった",10000,{"fitness":1},2],["家族写真が地域の広報に採用され、謝礼と記念品が届いた",20000,{"charm":1,"communication":1},3],["お気に入りの絵本を何度も読んでもらい、新しい言葉をたくさん覚えた",0,{"knowledge":2},2],["公園で年上の子に遊び方を教えてもらい、すぐ仲良くなった",0,{"communication":2},3],["健診で「順調に育っています」と褒められ、帰りに自治体の育児応援券までもらった",12000,{"fitness":1},2],["児童館の工作展示で作った紙の冠が今月の作品に選ばれ、小さな記念品をもらった",10000,{"charm":1,"knowledge":1},3],["商店街のスタンプラリーを家族と回り切り、抽選でおもちゃ券が当たった",18000,{"communication":1},3]],"elementary":[["学校の作品展で入賞し、図書カードと表彰状をもらった",20000,{"charm":1},3],["家の手伝いを続けたごほうびに、いつもより多めのおこづかいをもらった",15000,{"communication":1},2],["漢字テストで満点を取り、先生からクラスみんなの前で褒められた",0,{"knowledge":2,"charm":1},3],["地域のスポーツ大会でチームが優勝し、記念品とお祝いをもらった",20000,{"fitness":2},4],["友達の忘れ物を届けたお礼に、家族ぐるみでお菓子をたくさんもらった",10000,{"communication":2},3],["読書感想文が校内代表に選ばれ、図書カードと表彰状をもらった",25000,{"knowledge":2},3],["通学路で拾った財布を交番へ届け、持ち主から丁寧なお礼と図書券をもらった",15000,{"communication":1,"charm":1},3],["理科作品展で作った風力発電模型が特別賞に選ばれ、実験キットをもらった",30000,{"knowledge":2},4]],"middle":[["校内コンテストで作品が入賞し、副賞の商品券をもらった",30000,{"charm":2},4],["部活の大会で自己ベストを更新し、顧問から次の大会のメンバーに選ばれた",0,{"fitness":2,"charm":1},4],["定期テストの成績が大きく上がり、家族から臨時のおこづかいをもらった",20000,{"knowledge":2},3],["商店街の手伝いで働きぶりを褒められ、予定より多めの謝礼をもらった",30000,{"communication":2},3],["友達に勉強を教えたら自分の理解も深まり、二人そろって点数が上がった",0,{"knowledge":1,"communication":2},4],["英語スピーチ大会で入賞し、商品券と次の大会への推薦をもらった",35000,{"knowledge":1,"communication":1},4],["部活の月間MVPに選ばれ、スポーツ用品店の商品券をもらった",30000,{"fitness":2,"charm":1},4],["地域イベントの司会を手伝ったお礼に、主催者から謝礼と記念品を受け取った",25000,{"communication":2},4]],"high":[["アルバイト先で忙しい時間帯をうまく回し、特別手当をもらった",50000,{"communication":1},3],["模試で過去最高の判定が出て、志望校へ向けて大きな自信がついた",0,{"knowledge":3},4],["文化祭の企画が人気投票一位になり、クラスに賞金が出た",30000,{"charm":2,"communication":1},5],["地域の動画コンテストで入賞し、賞金と機材券を受け取った",50000,{"charm":2},5],["体育祭で活躍してクラスを優勝へ導き、学校中で少し名前が知られた",0,{"fitness":2,"charm":1},4],["成績と活動実績が評価され、学校独自の奨励金を受け取った",60000,{"knowledge":2},4],["アルバイト先で提案した新しい陳列方法が採用され、特別手当をもらった",45000,{"communication":1,"knowledge":1},3],["写真部で応募した街の写真が地域コンテストに入賞し、賞金を受け取った",55000,{"charm":2},5]],"young":[["担当案件が予想以上の成果を出し、臨時ボーナスが支給された",120000,{"communication":1},4],["趣味で出品していた作品が話題になり、まとまった売上が入った",100000,{"charm":2},4],["資格手当の対象試験に合格し、祝い金も合わせて受け取った",80000,{"knowledge":2},3],["以前助けた取引先から新しい仕事を紹介され、報奨金につながった",90000,{"communication":2},4],["購入していた少額の資産が値上がりし、良いタイミングで利益を確定した",140000,{"knowledge":1},3],["以前払い過ぎていた保険料の精算通知が届き、まとまった返金を受け取った",100000,{},2],["取引先を別部署へ紹介した案件が成約し、社内の紹介報奨金をもらった",110000,{"communication":2},4],["業務改善の提案が全社表彰され、賞金と特別休暇をもらった",130000,{"knowledge":2,"charm":1},4]],"mature":[["大型案件の成果が評価され、業績賞与が上乗せされた",220000,{"communication":1},4],["昔から積み立てていた資産の一部を好条件で売却できた",260000,{"knowledge":1},3],["社内改善案が採用され、表彰金と特別休暇をもらった",180000,{"knowledge":2},4],["趣味の作品が地域イベントで完売し、予想以上の収入になった",160000,{"charm":2},5],["長く付き合ってきた顧客から大きな追加依頼を受け、成果報酬が入った",240000,{"communication":2},4],["住宅の省エネ改修が補助金の対象になり、申請してまとまった還付を受けた",180000,{"knowledge":1},3],["社外セミナーの講師を頼まれ、週末の講演でまとまった謝礼を受け取った",150000,{"communication":1,"knowledge":1},4],["長く続けた積立型保険が満期を迎え、予定より多い返戻金が入った",220000,{},3]],"senior":[["昔買った品を整理したところ予想以上の価値がつき、高値で売れた",300000,{"knowledge":1},4],["長年の地域活動が表彰され、記念品と謝礼を受け取った",120000,{"communication":2},6],["昔の仕事の知識を頼られて手伝い、まとまった謝礼をもらった",160000,{"knowledge":2},5],["家庭菜園が大豊作になり、近所との物々交換で暮らしが少し豊かになった",50000,{"communication":1,"fitness":1},5],["忘れていた積立金の満期通知が届き、思わぬ臨時収入になった",260000,{},4],["年金の精算で過去分の差額がまとめて振り込まれ、思わぬ余裕ができた",160000,{},4],["地域の文化講座で経験談を話す講師を頼まれ、謝礼を受け取った",100000,{"communication":2},5],["昔買ったカメラを専門店で査定してもらうと希少品と分かり、高値で買い取られた",220000,{"knowledge":1},5]]},"minus":{"baby":[["お気に入りのおもちゃを外でなくしてしまい、同じものを買い直すことになった",-12000,{},1],["急な発熱で休日診療へ行き、家族に予定外の出費が出た",-15000,{"fitness":-1},1],["家の中で走って花瓶を割ってしまい、片づけと買い直しが必要になった",-10000,{},1],["旅行の直前に体調を崩し、予約の変更費用だけが残った",-18000,{"fitness":-1},1],["雨の日に転んで服と靴をだめにし、まとめて買い替えることになった",-12000,{},1],["ジュースをこぼして家族のタブレットを故障させ、修理に出すことになった",-18000,{},0],["楽しみにしていたお出かけ当日に熱を出し、診察代と予約変更料がかかった",-16000,{"fitness":-1},0],["クレヨンで壁いっぱいに絵を描いてしまい、壁紙の補修費が必要になった",-14000,{},0]],"elementary":[["遠足の日に水筒を落として壊し、帰りに新しいものを買うことになった",-12000,{},1],["自転車で転んでタイヤとライトを壊し、修理代がかかった",-18000,{"fitness":-1},1],["おこづかいで買ったゲームをすぐなくしてしまい、しばらく買い直せなかった",-10000,{},1],["習い事の道具を壊してしまい、家族に買い直してもらった",-20000,{},1],["風邪で学校を休み、楽しみにしていた行事にも参加できなかった",-8000,{"fitness":-1},1],["図書室で借りた本を水で濡らしてしまい、同じ本を弁償することになった",-15000,{},0],["習い事へ向かう途中で定期券をなくし、再発行と交通費でおこづかいが減った",-18000,{},0],["給食当番で配膳台を倒してしまい、片づけで放課後の予定が全部なくなった",0,{"communication":-1},0]],"middle":[["部活の道具を壊してしまい、自分のおこづかいから修理代を出した",-25000,{},1],["電車に定期入れを落とし、再発行と帰宅の交通費が余計にかかった",-18000,{},1],["テスト前に体調を崩して十分に勉強できず、成績も少し落ち込んだ",0,{"knowledge":-1,"fitness":-1},1],["友達との約束を勘違いしてすっぽかし、気まずい空気になってしまった",0,{"communication":-1},1],["遠征用の荷物を忘れ、現地で必要なものを急きょ買いそろえた",-30000,{},1],["自転車を駅前に置いたまま鍵をなくし、鍵交換と回収費がかかった",-28000,{},0],["提出直前のレポートデータを消してしまい、徹夜で作り直して翌日は集中できなかった",0,{"knowledge":-1,"fitness":-1},0],["友達から借りたイヤホンを壊してしまい、同じ物を買って返すことになった",-22000,{"communication":-1},0]],"high":[["アルバイト中に自分のミスで商品をだめにし、給料から一部を弁償した",-35000,{},1],["スマホを落として画面を割り、修理代で貯めていたお金が減った",-45000,{},1],["試験前に夜更かしを続けて体調を崩し、集中力も落ちてしまった",0,{"fitness":-1,"knowledge":-1},1],["予約していた遠征を直前で取りやめ、キャンセル料がかかった",-40000,{},1],["友達との言い争いが長引き、しばらく連絡を取りづらくなった",0,{"communication":-1},1],["模試の申込期限を勘違いし、追加料金を払って別会場で受けることになった",-30000,{"knowledge":-1},0],["アルバイトの制服を汚して交換になり、給料から代金が引かれた",-25000,{},0],["自転車通学中にチェーンが外れて転び、修理代もかかって遅刻までしてしまった",-22000,{"fitness":-1},0]],"young":[["仕事用のノートPCが突然故障し、急きょ買い替えることになった",-160000,{},1],["引っ越し直後に水回りの故障が見つかり、追加の修理費が発生した",-120000,{},1],["仕事のミスで休日まで対応に追われ、心身ともにぐったりした",-60000,{"fitness":-1},1],["契約内容の見落としで余計な手数料が発生し、予定外の支払いになった",-90000,{"knowledge":-1},1],["友人との金銭の行き違いがこじれ、返金と謝罪で大きく消耗した",-70000,{"communication":-1},1],["駅前の駐車ルールを勘違いして車を移動され、反則金と保管料を払うことになった",-90000,{"knowledge":-1},0],["使っていない有料サービスの自動更新に気づくのが遅れ、年間料金を丸ごと払うことになった",-70000,{},0],["引っ越し時の傷をめぐって敷金だけでは足りず、追加の修繕費を請求された",-130000,{},0]],"mature":[["自宅の給湯器が突然壊れ、急ぎの交換工事で大きな出費になった",-220000,{},1],["車の故障が重なり、修理と代車の費用が予想以上に膨らんだ",-180000,{},1],["仕事上の確認漏れで取引先へ迷惑をかけ、損失の一部を負担することになった",-200000,{"communication":-1},1],["無理を続けて腰を痛め、通院と休養で予定が大きく狂った",-90000,{"fitness":-1},1],["保有していた資産の一部が急落し、損切りでまとまった損失が出た",-240000,{},1],["洗面所の配管から水漏れし、床の補修まで必要になって大きな修理費が出た",-240000,{},0],["税金の申告漏れが見つかり、追加納付と延滞分をまとめて支払うことになった",-180000,{"knowledge":-1},0],["車庫で車をこすってしまい、板金修理と代車費用が重なった",-160000,{},0]],"senior":[["自宅の屋根に大きな傷みが見つかり、予定外の修繕費が必要になった",-280000,{},1],["長く使った家電が立て続けに故障し、まとめて買い替えることになった",-180000,{},1],["旅行直前に体調を崩し、治療費とキャンセル料が重なった",-120000,{"fitness":-1},1],["資産整理のタイミングを誤り、想定よりかなり安い価格で手放すことになった",-220000,{},1],["大切な手続きの期限を勘違いし、追加費用と何度もの窓口通いが必要になった",-80000,{"knowledge":-1},1],["眼鏡を落としてレンズを割り、予備も古かったため一式作り直すことになった",-90000,{},0],["台所の給水管が破損し、緊急修理と床の乾燥作業で予想以上の費用が出た",-170000,{},0],["旅行先で荷物が見つからず、着替えや日用品を急きょ買い直すことになった",-110000,{},0]]},"grow":{"baby":[["動物の絵本を気に入り、同じページを何度も指さして名前を覚えた",0,{"knowledge":2},2],["木の積み木を色と形ごとに並べ、最後には自分の背丈ほどの塔を作った",0,{"knowledge":2},1],["近所の公園で滑り台と追いかけっこを何度も繰り返し、帰る頃にはぐっすり眠った",0,{"fitness":2},1],["朝ごはんをしっかり食べ、公園で遊び、夜は早く寝る生活が続いて体が丈夫になった",0,{"fitness":2},1],["折り紙を何度も折ってもらい、最後には自分でも角を合わせようと真似し始めた",0,{"knowledge":2},1],["家族と動物園へ行き、ゾウの前からなかなか動こうとせず飼育員の話まで聞いた",-15000,{"knowledge":1,"charm":1},3],["風邪で一日寝込み、元気になってからお気に入りの公園へ行けるありがたさを実感した",-8000,{"fitness":1},1],["型はめパズルに夢中になり、丸・三角・四角を何度も入れ直して全部一人で完成させた",0,{"knowledge":2},2]],"elementary":[["縄跳びの二重跳びがどうしてもできず、放課後に練習してついに10回続いた",0,{"fitness":3},3],["図書館で恐竜図鑑に夢中になり、借りられる上限いっぱいまで関連本を持ち帰った",0,{"knowledge":3},2],["夏休みに太陽熱で目玉焼きを作る自由研究をまとめ、校内発表で表彰された",30000,{"knowledge":2,"charm":1},4],["図工の時間に段ボールで動くロボットを作り、休み時間も改造を続けた",-3000,{"knowledge":2,"charm":1},3],["算数の小テストで満点を取り、ごほうびに好きなお菓子を買ってもらった",10000,{"knowledge":2},2],["社会科見学で消防署へ行き、はしご車の高さと装備の重さに驚いて質問を連発した",0,{"knowledge":2},2],["理科室で育てたアサガオの種を持ち帰り、翌年用に小瓶へ丁寧に保存した",0,{"knowledge":2},2],["近所のピアノ教室へ通い始め、発表会に向けて短い曲を一曲練習することになった",-20000,{"charm":2},2]],"middle":[["陸上記録会の1500mに出場し、最後の一周で自己ベストを更新した",10000,{"fitness":3},4],["バスケットボール部で毎日シュート練習を続け、放課後の自主練にも残るようになった",-10000,{"fitness":3},3],["数学の定期テストで学年上位に入り、家族から小さなお祝いをもらった",20000,{"knowledge":3},2],["学級新聞の編集を任され、記事の順番と見出しを何度も直して読みやすく仕上げた",0,{"knowledge":2,"communication":1},3],["英語検定の参考書を買い、寝る前に毎日20分ずつ勉強する習慣を始めた",-10000,{"knowledge":2},2],["体力測定の20mシャトルランで自己ベストを大きく更新し、体育の先生に驚かれた",10000,{"fitness":2},2],["友達から借りた推理小説に夢中になり、シリーズを図書館でまとめて借りた",-2000,{"knowledge":2},2],["自転車のパンクを自分で直そうとして失敗し、結局自転車屋で修理方法まで教わった",-7000,{"knowledge":2},2]],"high":[["大学受験向けの全国模試で第一志望の判定が一段上がり、勉強の手応えを感じた",0,{"knowledge":3},2],["学校の映像制作課題で脚本と編集を担当し、完成版を上映したら教室が予想以上に沸いた",-12000,{"knowledge":1,"charm":2},5],["オープンキャンパスへ行き、模擬講義と学食を体験して志望校のイメージが具体的になった",-15000,{"knowledge":2},3],["地域の動画コンテストに三分の短編を応募し、審査員特別賞に選ばれた",50000,{"charm":3},5],["中古のギターをアルバイト代で買い、文化祭までに一曲だけ弾けるよう毎晩練習した",-50000,{"charm":3},5],["模試の帰りにゲームセンターへ寄り、音楽ゲームで自己ベストを更新して気分転換した",-5000,{"fitness":1,"charm":1},2],["学校のパソコン室でタイピング練習を続け、十分間の入力数が一か月で大きく伸びた",0,{"knowledge":2},3],["家庭科で弁当づくりに挑戦し、包丁の使い方と段取りを覚えて家でも作るようになった",-8000,{"knowledge":1,"charm":2},4]],"young":[["休日に地域のマラソン大会5kmへ参加し、目標タイムをぎりぎり切った",-6000,{"fitness":3},4],["仕事に関係する資格試験へ挑み、休日の勉強が実って合格通知を受け取った",-30000,{"knowledge":3},3],["資格講座へ三か月通い、仕事帰りに毎週同じ教室で勉強を続けた",-80000,{"knowledge":3},3],["会社の同期と週末にフットサルへ参加し、翌日は全身筋肉痛になった",-12000,{"fitness":2,"communication":1},3],["健康診断で運動不足を指摘され、帰り道でランニングシューズを買って週二回走り始めた",-10000,{"fitness":2},2],["業界の勉強会へ参加し、講師や他社の参加者と名刺を交換して新しい知識を持ち帰った",-20000,{"knowledge":2,"communication":1},2],["週末だけ料理教室へ通い、だし巻き卵をきれいに巻けるようになった",-40000,{"charm":2},3],["表計算ソフトのオンライン講座を一か月受け、仕事で使う集計表を自動化できるようになった",-30000,{"knowledge":3},3]],"mature":[["腰の重さが気になり、近所のスポーツジムへ入会して週末の水泳を始めた",-30000,{"fitness":3},3],["健康診断の数値をきっかけに食生活を見直し、毎日の弁当を自分で用意するようになった",-20000,{"fitness":2,"knowledge":1},3],["社内勉強会で自分の専門分野を解説し、その内容が別部署の案件にも採用された",90000,{"knowledge":2},4],["地域の写真コンテストへ旅先の一枚を応募し、佳作に選ばれて展示された",50000,{"charm":2},5],["仕事帰りに習慣だったコンビニ通いをやめ、その分を毎月積立へ回すことにした",60000,{"knowledge":1},2],["週一回のストレッチ教室へ通い、肩と腰をほぐす習慣がついて体が軽くなった",-25000,{"fitness":2},3],["自治体のデジタル講座で家計管理アプリを学び、毎月の支出を自分で分析するようになった",-10000,{"knowledge":2},3],["市民講座のパソコン教室で写真整理とバックアップ方法を学び、家中のデータを安全に整理した",-15000,{"knowledge":2},3]],"senior":[["図書館で歴史小説をまとめて借り、毎朝一冊ずつ読む穏やかな時間を楽しんだ",-10000,{"knowledge":2},5],["地域の歴史散歩ツアーへ参加し、何十年も住んだ町に知らない話がまだあると知った",-5000,{"knowledge":2},5],["町の図書館へ寄贈する本を整理し、箱いっぱいの本を運び込んだ",0,{"knowledge":1,"fitness":1},5],["健康のため毎週プールへ通い、水中ウォーキングを日課にした",-15000,{"fitness":2},4],["若い頃に弾いていたギターを押し入れから出し、弦を張り替えて練習を再開した",-50000,{"charm":2},6],["友人に誘われて陶芸教室へ通い始め、半年かけて普段使いの湯のみを完成させた",-30000,{"charm":2},6],["古いレコードプレーヤーを修理し、若い頃によく聴いたアルバムを一枚ずつかけ直した",-40000,{"charm":1},7],["公民館の水彩画教室へ通い始め、半年かけて自宅近くの風景を一枚完成させた",-20000,{"charm":2},6]]},"social":{"baby":[["親戚の集まりで最初は隠れていたが、帰る頃には自分からみんなに話しかけていた",0,{"communication":2},2],["近所の子と砂場で巨大な山を作り、バケツの水で川まで通した",0,{"fitness":1,"communication":2},3],["児童館で同じ年頃の子に積み木を一つ渡したことをきっかけに、並んで一緒に遊び始めた",0,{"communication":2},3],["親戚の誕生日会でいとこたちと風船を追いかけ、帰る頃には名前を呼び合っていた",0,{"communication":2,"charm":1},4],["公園で転んだ子に家族と一緒にハンカチを渡し、その後は一緒に砂場で遊んだ",0,{"communication":2},3],["近所のパン屋で店員さんに毎回手を振っていたら、名前を覚えて声をかけてもらえるようになった",0,{"communication":2,"charm":1},3],["家族の友人が遊びに来て、最初は隠れていたが最後にはお気に入りのおもちゃを全部見せた",0,{"communication":2,"charm":1},3],["保育イベントの輪になって踊る時間で隣の子と手をつなぎ、最後まで楽しそうに参加した",0,{"communication":2,"fitness":1},4]],"elementary":[["休み時間に始めた鬼ごっこへクラスの半分が参加し、いつの間にか遊びの中心になっていた",0,{"communication":2,"charm":1},3],["友達の家で初めて泊まり会をし、消灯後も小声で怖い話を続けてなかなか眠れなかった",-5000,{"communication":2},5],["友達と空き地に段ボールとブルーシートで秘密基地を作り、合言葉まで決めた",0,{"communication":2},4],["雨の日に友達と家でボードゲームを遊び、ルールの抜け道を見つけて大騒ぎになった",-3000,{"knowledge":1,"communication":2},3],["遠足の水族館で友達とはしゃぎすぎ、売店で予定以上におみやげを買った",-10000,{"fitness":1,"communication":1},4],["町探検の授業で昔からある和菓子屋を取材し、店主から昔の商店街の話を聞いた",0,{"knowledge":2,"communication":1},3],["週末に家族の車を洗う手伝いをして、特別なおこづかいをもらった",20000,{"communication":1},1],["転校してきた子に教室や図書室を案内し、昼休みには一緒に遊ぶ約束をした",0,{"communication":2},4]],"middle":[["けんかした親友と放課後のファミレスで話し合い、最後は同じポテトをつまんで仲直りした",0,{"communication":3},4],["校外学習の班長になり、乗り換えを間違えそうな班員を駅の案内図で無事に誘導した",0,{"communication":2,"knowledge":1},4],["夏休みに親戚の店を三日間手伝い、レジと品出しで初めて働く大変さを知った",30000,{"communication":2},3],["新学期に席が隣になったクラスメイトと昼休みに話し込み、好きなゲームが同じだと分かった",-3000,{"communication":2},4],["部活の後輩と二人で片づけをしながら悩みを聞き、次の練習から少し打ち解けた",0,{"communication":2},4],["テスト前に友達三人で図書館へ集まり、分からない問題を順番に教え合った",0,{"communication":2,"knowledge":1},4],["文化祭の模擬店で呼び込みを担当し、普段話さない同級生とも声を掛け合って一日を回した",0,{"communication":2,"charm":1},5],["落ち込んでいた友達の話を放課後のベンチで聞き、帰る頃には少し笑顔が戻った",0,{"communication":3},5]],"high":[["地域の子ども向けイベントでボランティアをし、工作コーナーを一日担当した",0,{"communication":3},4],["友達四人で体育祭の応援看板を徹夜寸前まで描き、当日は記念写真の人気スポットになった",-10000,{"charm":2,"communication":2},5],["卒業前に友達と温泉旅行を計画し、宿と交通費を少しずつ出し合った",-30000,{"communication":2},4],["クラスメイトの進路相談を聞いているうち、自分が何を大事にしたいかも整理できた",0,{"communication":2,"knowledge":1},3],["体育のバドミントン大会でペアと作戦を練り、クラス内トーナメントを勝ち上がった",10000,{"fitness":2,"communication":1},4],["放課後の自習室で同じ志望校の友人と問題集を交換し、苦手分野を教え合った",0,{"knowledge":2,"communication":1},3],["放課後のファミレスでアルバイトを続け、夏休みの旅行代を自分で貯めた",50000,{"communication":1},2],["新入生向けの学校案内を手伝い、校内を回りながら質問に答えて何人も顔見知りができた",0,{"communication":3},4]],"young":[["友人の結婚式で余興のまとめ役を任され、動画編集と進行表づくりに追われた",-30000,{"communication":2,"charm":1},5],["学生時代の仲間とキャンプへ行き、火起こしから料理まで役割分担して楽しんだ",-50000,{"fitness":1,"communication":2},6],["同僚と始めた小さな勉強会が半年続き、社内で参加者が少しずつ増えた",0,{"knowledge":2,"communication":2},4],["同僚三人と焼き鳥屋へ行き、仕事の愚痴から趣味の話まで閉店近くまで語った",-30000,{"communication":2},3],["部署の歓迎会で隣になった別部署の人と話が合い、後日仕事でも協力するようになった",-8000,{"communication":2},3],["友人と二泊三日の温泉旅行へ出かけ、仕事のことを忘れてしっかり休んだ",-80000,{"charm":1,"communication":1},6],["学生時代の友人の結婚式に出席し、久しぶりに同級生たちと再会した",-50000,{"communication":1},4],["引っ越したばかりの隣人の家具運びを手伝い、その日の夜にお礼の食事へ招かれた",0,{"communication":2},4]],"mature":[["町内会の夏祭りで受付と会計を手伝い、近所に顔見知りが一気に増えた",0,{"communication":3},5],["新しく入った後輩の教育担当になり、週一回の面談と実務指導を続けた",0,{"communication":3},4],["後輩のプレゼン練習に付き合い、資料の構成と話し方を一緒に直した",0,{"communication":3},4],["昔の趣味仲間と年に一度の集まりを復活させ、久しぶりに朝まで話し込んだ",-50000,{"communication":2},7],["学生時代の旧友と十数年ぶりに再会し、駅前の居酒屋で当時の話を何時間もした",-30000,{"communication":2},5],["地域の防災訓練で班長を任され、消火器とAEDの使い方を実演した",0,{"communication":2,"fitness":1},4],["夫婦や友人と二泊三日の旅行へ出かけ、温泉と地元料理をゆっくり楽しんだ",-150000,{"communication":1},8],["家族の記念日に少し高いレストランを予約し、久しぶりに全員でゆっくり食事をした",-90000,{"charm":1,"communication":1},7]],"senior":[["孫世代の子どもたちとボードゲームを遊び、ルール説明から本気の勝負まで付き合った",-30000,{"communication":2},8],["昔の職場仲間と昼の同窓会を開き、退職後の生活や孫の話で盛り上がった",-40000,{"communication":2},8],["近所の子ども会で昔遊びを教え、けん玉と紙飛行機で思った以上に盛り上がった",0,{"communication":2},7],["孫世代の進路相談に乗り、自分の失敗談も含めて一時間じっくり話した",0,{"communication":2,"knowledge":1},6],["公民館のスマホ教室で講師役を頼まれ、近所の人へ写真の送り方や地図アプリを教えた",50000,{"communication":2,"knowledge":1},6],["昔の旅行写真をデジタル化し、家族でテレビに映して思い出話をした",-20000,{"knowledge":1,"communication":1},8],["家庭菜園でトマトとナスが豊作になり、近所へ配ってお返しまでたくさんもらった",20000,{"fitness":1,"communication":1},5],["地域のふれあい喫茶で受付を手伝い、常連客や初参加の人と一時間以上ゆっくり話した",0,{"communication":3},6]]}};
const SPACE_EVENTS={};for(const type in SPACE_EVENT_RAW){SPACE_EVENTS[type]={};for(const k in SPACE_EVENT_RAW[type])SPACE_EVENTS[type][k]=SPACE_EVENT_RAW[type][k].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]}));}
const SPACE_CHOICE_EVENTS={"plus":{"baby":[{"id":"sp_plus_baby_1","title":"うれしいお祝いをもらった","text":"親戚から成長祝いとして選べるプレゼント券をもらった。何に使おう？","options":[{"label":"絵本セットを選ぶ","out":{"text":"動物と乗り物の絵本を何冊も読んでもらい、新しい言葉を覚えた。","stats":{"knowledge":2},"memory":2}},{"label":"外遊びのおもちゃを選ぶ","out":{"text":"柔らかいボールを持って公園へ行き、何度も追いかけて遊んだ。","stats":{"fitness":2},"memory":2}},{"label":"残りを貯金してもらう","out":{"text":"必要な物だけ買い、残りは将来用の貯金に回してもらった。","cash":20000,"memory":1}}]},{"id":"sp_plus_baby_2","title":"児童館のくじで当たり","text":"帰り際のくじ引きで当たりが出た。三つの景品から一つ選べる。","options":[{"label":"知育パズル","out":{"text":"家に帰るとすぐ箱を開け、形を合わせて何度も遊んだ。","stats":{"knowledge":2},"memory":2}},{"label":"ミニボール","out":{"text":"家族と転がし合って遊び、部屋の中を元気に動き回った。","stats":{"fitness":2},"memory":2}},{"label":"商品券","out":{"text":"家族が日用品を買い、余った分を貯金してくれた。","cash":15000,"memory":1}}]}],"elementary":[{"id":"sp_plus_elementary_1","title":"学校からごほうび券","text":"校内表彰の副賞として、三つの景品から一つ選べることになった。","options":[{"label":"図書カード","out":{"text":"気になっていた科学の本を何冊か買った。","cash":15000,"stats":{"knowledge":1},"memory":2}},{"label":"スポーツ用品券","out":{"text":"新しい縄跳びとボールを選び、放課後すぐ使った。","cash":12000,"stats":{"fitness":1},"memory":2}},{"label":"画材セット","out":{"text":"色鉛筆と絵の具をそろえ、週末に一枚の絵を仕上げた。","cash":10000,"stats":{"charm":1},"memory":3}}]},{"id":"sp_plus_elementary_2","title":"商店街の抽選で当選","text":"家族と買い物をした帰り、抽選会で二等が当たった。景品を選べる。","options":[{"label":"商品券","out":{"text":"家族で必要な物を買い、残りをおこづかいにしてもらった。","cash":25000,"memory":2}},{"label":"体験教室券","out":{"text":"工作教室へ参加し、木の小物入れを完成させた。","stats":{"knowledge":1,"charm":1},"memory":3}},{"label":"遊園地券","out":{"text":"休日に家族で遊びに行き、一日たっぷり楽しんだ。","stats":{"communication":1},"memory":5}}]}],"middle":[{"id":"sp_plus_middle_1","title":"校内コンテストの副賞","text":"入賞した副賞として、好きな支援券を一つ選べる。","options":[{"label":"書店の商品券","out":{"text":"参考書と気になっていた小説をまとめて買った。","cash":20000,"stats":{"knowledge":1},"memory":3}},{"label":"スポーツ用品券","out":{"text":"新しいシューズを選び、次の練習から使い始めた。","cash":22000,"stats":{"fitness":1},"memory":3}},{"label":"画材・音楽券","out":{"text":"作品づくりに使える道具をそろえた。","cash":20000,"stats":{"charm":1},"memory":4}}]},{"id":"sp_plus_middle_2","title":"地域活動のお礼","text":"休日の地域イベントを手伝ったお礼として三つの特典から選べることになった。","options":[{"label":"商品券をもらう","out":{"text":"そのまま使える商品券を受け取った。","cash":30000,"memory":2}},{"label":"スポーツ施設の回数券","out":{"text":"市民体育館へ通い、体を動かす機会が増えた。","stats":{"fitness":2},"memory":3}},{"label":"ワークショップ参加券","out":{"text":"デザイン講座へ参加し、作品を一つ完成させた。","stats":{"charm":2},"memory":4}}]}],"high":[{"id":"sp_plus_high_1","title":"学校から奨励金","text":"活動実績が評価され、用途を選べる奨励金を受け取った。","options":[{"label":"受験教材へ使う","out":{"text":"模試と参考書代に充て、勉強環境を整えた。","cash":30000,"stats":{"knowledge":2},"memory":3}},{"label":"部活動の道具へ使う","out":{"text":"新しい道具をそろえ、練習への気合いが入った。","cash":30000,"stats":{"fitness":2},"memory":3}},{"label":"そのまま貯める","out":{"text":"進学後のためにほとんど手を付けず残した。","cash":60000,"memory":2}}]},{"id":"sp_plus_high_2","title":"アルバイトで特別手当","text":"忙しい月を乗り切ったごほうびとして、店長から特別手当と希望特典を選ばせてもらった。","options":[{"label":"手当をそのまま受け取る","out":{"text":"まとまった臨時収入になった。","cash":50000,"memory":2}},{"label":"接客研修も受ける","out":{"text":"手当の一部を研修に使い、接客のコツを身につけた。","cash":25000,"stats":{"communication":2},"memory":3}},{"label":"仲間と食事会","out":{"text":"店の負担でスタッフ全員の食事会が開かれ、かなり盛り上がった。","cash":15000,"stats":{"communication":1,"charm":1},"memory":5}}]}],"young":[{"id":"sp_plus_young_1","title":"臨時ボーナスの使い道","text":"予想外の臨時ボーナスが入った。今回は使い道まで自由に決められる。","options":[{"label":"ほとんど貯金","out":{"text":"まとまった額をそのまま口座へ残した。","cash":130000,"memory":2}},{"label":"資格講座へ投資","out":{"text":"ボーナスの一部で仕事に関係する講座を受けた。","cash":70000,"stats":{"knowledge":2},"memory":3}},{"label":"友人との旅行へ使う","out":{"text":"旅行代を差し引いても少し残り、良い気分転換になった。","cash":50000,"stats":{"communication":1},"memory":6}}]},{"id":"sp_plus_young_2","title":"大きめの返金があった","text":"保険や税金の精算でまとまった返金が入った。どう活かそう？","options":[{"label":"生活防衛資金にする","out":{"text":"急な出費に備えてそのまま残した。","cash":110000,"memory":2}},{"label":"運動環境を整える","out":{"text":"靴とウェアを新調しても十分お金が残り、運動を始めた。","cash":60000,"stats":{"fitness":2},"memory":3}},{"label":"仕事道具を新調","out":{"text":"作業用の機器を更新し、仕事が少し楽になった。","cash":50000,"stats":{"knowledge":2},"memory":3}}]}],"mature":[{"id":"sp_plus_mature_1","title":"成果報酬が入った","text":"長く関わった仕事の成果報酬が入り、まとまった余裕ができた。","options":[{"label":"そのまま資金に残す","out":{"text":"大半を使わず残し、家計に余裕ができた。","cash":220000,"memory":2}},{"label":"学び直しへ使う","out":{"text":"専門講座の費用を払っても十分残り、新しい知識を得た。","cash":120000,"stats":{"knowledge":2},"memory":3}},{"label":"家族旅行に使う","out":{"text":"旅行代を差し引いても余裕が残り、家族との思い出が増えた。","cash":80000,"stats":{"communication":1},"memory":8}}]},{"id":"sp_plus_mature_2","title":"住宅補助が通った","text":"自宅の省エネ改修が補助対象になり、想定より多い補助金が出た。","options":[{"label":"残額を貯める","out":{"text":"改修費を払った後の余りをそのまま残した。","cash":180000,"memory":2}},{"label":"追加で断熱を改善","out":{"text":"補助金を活かして冬の光熱費も抑えられるようにした。","cash":100000,"stats":{"knowledge":1},"memory":3}},{"label":"家電も省エネ型へ","out":{"text":"古い家電を一台更新しても資金に余裕が残った。","cash":70000,"stats":{"charm":1},"memory":4}}]}],"senior":[{"id":"sp_plus_senior_1","title":"思わぬ精算金","text":"昔の契約の精算でまとまったお金が入った。何に使おう？","options":[{"label":"そのまま残す","out":{"text":"今後の安心のためにほとんど手を付けず残した。","cash":180000,"memory":2}},{"label":"健康づくりへ使う","out":{"text":"運動用品や通いやすい施設を整えても十分お金が残った。","cash":100000,"stats":{"fitness":2},"memory":4}},{"label":"家族との旅行へ使う","out":{"text":"近場の旅行代を出しても余裕が残り、良い思い出になった。","cash":80000,"stats":{"communication":1},"memory":8}}]},{"id":"sp_plus_senior_2","title":"地域表彰の副賞","text":"長年の地域活動が表彰され、副賞を三つから選べることになった。","options":[{"label":"記念の商品券","out":{"text":"使いやすい商品券を受け取った。","cash":120000,"memory":4}},{"label":"文化講座の年間券","out":{"text":"歴史や美術の講座へ通い、新しい楽しみが増えた。","stats":{"knowledge":2},"memory":6}},{"label":"温泉宿泊券","out":{"text":"家族や友人と一泊し、ゆっくり過ごした。","stats":{"communication":1},"memory":9}}]}]},"minus":{"baby":[{"id":"sp_minus_baby_1","title":"ジュースをこぼした","text":"テーブルの上でコップを倒し、近くにあった物まで濡れてしまった。","options":[{"label":"おもちゃを買い直す","out":{"text":"濡れて動かなくなったおもちゃを同じ物に買い替えた。","cash":-12000}},{"label":"服をまとめて洗い直す","out":{"text":"汚れた服と敷物をクリーニングに出すことになった。","cash":-8000}},{"label":"タブレットを修理する","out":{"text":"画面に水が入り、修理店へ持ち込むことになった。","cash":-18000}}]},{"id":"sp_minus_baby_2","title":"お出かけ直前に発熱","text":"楽しみにしていた家族のお出かけ当日に熱が出てしまった。","options":[{"label":"休日診療へ行く","out":{"text":"診察と薬を受け、予定はすべて中止になった。","cash":-12000,"stats":{"fitness":-1}}},{"label":"予約を変更する","out":{"text":"宿と交通の変更料がかかり、家で休むことになった。","cash":-16000,"stats":{"fitness":-1}}},{"label":"タクシーで病院へ行く","out":{"text":"移動費まで重なり、予定外の出費になった。","cash":-20000,"stats":{"fitness":-1}}}]}],"elementary":[{"id":"sp_minus_elementary_1","title":"借りた物を壊した","text":"学校や友達から借りていた物をうっかり壊してしまった。","options":[{"label":"図書室の本を弁償","out":{"text":"水で濡らした本を同じ物で弁償した。","cash":-15000}},{"label":"友達のゲームを弁償","out":{"text":"落として動かなくなったソフトを買い直して返した。","cash":-12000,"stats":{"communication":-1}}},{"label":"習い事の道具を弁償","out":{"text":"壊れた道具の交換費を家族に払ってもらった。","cash":-20000}}]},{"id":"sp_minus_elementary_2","title":"遠足の朝に忘れ物","text":"集合場所へ着いてから大事な物を忘れたことに気づいた。","options":[{"label":"水筒を現地で買う","out":{"text":"売店で急きょ新しい水筒を買うことになった。","cash":-8000}},{"label":"雨具を買う","out":{"text":"天気が崩れ、現地で高めの雨具を買うことになった。","cash":-10000}},{"label":"家族に届けてもらう","out":{"text":"家族が往復することになり、交通費も時間も余計にかかった。","cash":-12000,"stats":{"communication":-1}}}]}],"middle":[{"id":"sp_minus_middle_1","title":"スマホを落とした","text":"帰宅途中にスマホを落として画面が割れてしまった。どう対処しても出費は避けられない。","options":[{"label":"正規店で修理","out":{"text":"安心できるが修理代は高くついた。","cash":-35000}},{"label":"街の修理店へ行く","out":{"text":"少し安く直せたが予定外の出費になった。","cash":-25000}},{"label":"中古端末へ買い替える","out":{"text":"修理を諦め、中古の端末を買うことになった。","cash":-30000}}]},{"id":"sp_minus_middle_2","title":"提出データが消えた","text":"グループ課題の提出前夜、保存していたデータが壊れて開けなくなった。","options":[{"label":"一人で作り直す","out":{"text":"夜遅くまで作業し、翌日は完全に寝不足になった。","stats":{"fitness":-1,"knowledge":-1}}},{"label":"友達に復元を頼む","out":{"text":"何とか提出できたが、迷惑をかけて少し気まずくなった。","stats":{"communication":-1}}},{"label":"先生へ事情を話す","out":{"text":"再提出は認められたものの評価は少し下がった。","stats":{"knowledge":-1}}}]}],"high":[{"id":"sp_minus_high_1","title":"受験の手続きミス","text":"出願や模試の手続きでミスが見つかった。どの対応でも痛手が出る。","options":[{"label":"追加料金で再申請","out":{"text":"期限後の手続きになり追加料金を払った。","cash":-30000,"stats":{"knowledge":-1}}},{"label":"別会場へ変更","out":{"text":"遠い会場しか空いておらず交通費まで増えた。","cash":-25000}},{"label":"今回は見送る","out":{"text":"費用は抑えたが大事な受験機会を一つ失った。","stats":{"knowledge":-1}}}]},{"id":"sp_minus_high_2","title":"アルバイト中の失敗","text":"混雑中に自分のミスで店へ損害を出してしまった。","options":[{"label":"壊した備品を弁償","out":{"text":"交換費用の一部を負担することになった。","cash":-35000}},{"label":"制服を交換","out":{"text":"汚してしまった制服代が給料から引かれた。","cash":-25000}},{"label":"シフトを減らされる","out":{"text":"しばらく勤務を減らされ、収入が落ち込んだ。","cash":-30000,"stats":{"communication":-1}}}]}],"young":[{"id":"sp_minus_young_1","title":"予想外の請求書","text":"忘れていた契約や手続きから大きめの請求が届いた。","options":[{"label":"自動更新分を払う","out":{"text":"使っていないサービスの年間料金を支払った。","cash":-70000}},{"label":"違約金を払って解約","out":{"text":"これ以上増えないよう解約したが違約金が痛かった。","cash":-90000}},{"label":"分割で支払う","out":{"text":"月々に分けたぶん手数料まで上乗せされた。","cash":-110000}}]},{"id":"sp_minus_young_2","title":"車のトラブル","text":"出先で車のトラブルが起き、予定外の費用が避けられない。","options":[{"label":"レッカーを呼ぶ","out":{"text":"移動と修理でかなりの出費になった。","cash":-120000}},{"label":"近くの工場で応急修理","out":{"text":"最低限は直ったが急ぎ料金がかかった。","cash":-90000}},{"label":"代車を借りる","out":{"text":"修理中の代車費まで重なった。","cash":-130000}}]}],"mature":[{"id":"sp_minus_mature_1","title":"家の水回りが故障","text":"配管から水が漏れ、床まで濡れてしまった。修理方法を選ぶことになった。","options":[{"label":"緊急業者へ依頼","out":{"text":"その日のうちに直ったが緊急料金が高かった。","cash":-240000}},{"label":"床もまとめて補修","out":{"text":"再発防止までしたぶん費用がさらに膨らんだ。","cash":-300000}},{"label":"最低限だけ修理","out":{"text":"出費は抑えたが何度も立ち会いが必要になった。","cash":-180000,"stats":{"fitness":-1}}}]},{"id":"sp_minus_mature_2","title":"税金の手続き漏れ","text":"以前の申告に不足があると通知が届いた。","options":[{"label":"すぐ追加納付","out":{"text":"延滞分を含めてまとめて支払った。","cash":-180000,"stats":{"knowledge":-1}}},{"label":"専門家へ相談","out":{"text":"手続きは整ったが相談料までかかった。","cash":-160000}},{"label":"分納を選ぶ","out":{"text":"一度の負担は減ったが手数料が増えた。","cash":-200000}}]}],"senior":[{"id":"sp_minus_senior_1","title":"家の設備が急に故障","text":"長く使っていた設備が突然使えなくなった。","options":[{"label":"給湯器を交換","out":{"text":"急ぎの工事になり高い交換費用がかかった。","cash":-180000}},{"label":"エアコンを交換","out":{"text":"古い機種で部品がなく、結局本体ごと買い替えた。","cash":-150000}},{"label":"水道設備を修理","out":{"text":"床下まで点検することになり修理費が膨らんだ。","cash":-170000}}]},{"id":"sp_minus_senior_2","title":"旅行前の体調不良","text":"出発直前に体調を崩し、予定の変更が必要になった。","options":[{"label":"旅行をキャンセル","out":{"text":"宿と交通のキャンセル料がかかった。","cash":-120000,"stats":{"fitness":-1}}},{"label":"病院へ行って延期","out":{"text":"診療費と予約変更料が重なった。","cash":-100000,"stats":{"fitness":-1}}},{"label":"近場の宿へ変更","out":{"text":"遠出は諦めたが変更費用がかなりかかった。","cash":-90000,"stats":{"fitness":-1}}}]}]},"grow":{"baby":[{"id":"sp_grow_baby_1","title":"動物園でどこを見る？","text":"家族で動物園へ。時間はあと少し。最後にどこへ行こう？","options":[{"label":"ゾウを見に行く","out":{"text":"大きな体と長い鼻をじっと観察した。","stats":{"knowledge":2},"memory":2}},{"label":"ふれあい広場へ行く","out":{"text":"小さな動物にそっと触れて大喜びした。","stats":{"charm":1,"communication":1},"memory":3}},{"label":"園内をもう一周する","out":{"text":"最後まで元気に歩き回った。","stats":{"fitness":2},"memory":2}}]},{"id":"sp_grow_baby_2","title":"公園で新しい遊具","text":"見たことのない遊具がある。どう遊ぼう？","options":[{"label":"すべり台から試す","out":{"text":"何度も階段を上って滑り、すっかりお気に入りになった。","stats":{"fitness":2},"memory":2}},{"label":"他の子の遊び方を見る","out":{"text":"しばらく観察してから同じように挑戦した。","stats":{"knowledge":2},"memory":1}},{"label":"近くの子を誘う","out":{"text":"一緒に遊ぶ相手が増えて、帰るまでずっとにぎやかだった。","stats":{"communication":2},"memory":3}}]}],"elementary":[{"id":"sp_grow_elementary_1","title":"図書室で一冊だけ借りる","text":"帰りの時間まであと少し。今日は一冊だけ借りられる。","options":[{"label":"宇宙の図鑑","out":{"text":"惑星や探査機のページを夢中で読み込んだ。","stats":{"knowledge":3},"memory":2}},{"label":"冒険小説","out":{"text":"主人公になった気分で帰り道まで物語の続きを考えた。","stats":{"charm":1,"knowledge":1},"memory":3}},{"label":"友達おすすめの本","out":{"text":"感想を話す約束をして借りた。","stats":{"communication":2},"memory":3}}]},{"id":"sp_grow_elementary_2","title":"運動会の自由種目","text":"希望する種目を一つ選べることになった。","options":[{"label":"短距離走","out":{"text":"スタートの練習を重ね、本番では最後まで全力で走った。","stats":{"fitness":3},"memory":3}},{"label":"応援団","out":{"text":"声をからしながらクラス全員を盛り上げた。","stats":{"charm":1,"communication":2},"memory":4}},{"label":"用具係","out":{"text":"競技が止まらないよう道具を先回りして準備した。","stats":{"knowledge":1,"communication":1},"memory":2}}]}],"middle":[{"id":"sp_grow_middle_1","title":"テスト前日の夜","text":"明日は定期テスト。まだ少し時間がある。","options":[{"label":"苦手科目を復習","out":{"text":"最後に見直した範囲が本番でそのまま出た。","stats":{"knowledge":3},"memory":2}},{"label":"早く寝る","out":{"text":"しっかり眠って、朝から頭がすっきりしていた。","stats":{"fitness":2},"memory":1}},{"label":"友達と問題を出し合う","out":{"text":"通話しながら確認し、覚えにくい部分を一緒に整理した。","stats":{"knowledge":1,"communication":2},"memory":3}}]},{"id":"sp_grow_middle_2","title":"バスケットボール部の放課後","text":"通常練習が早く終わり、体育館をあと30分自由に使えることになった。","options":[{"label":"基礎練習を続ける","out":{"stats":{"fitness":3},"memory":2,"text":"地味な練習を積み重ね、体の動きが良くなった。"}},{"label":"後輩に教える","out":{"stats":{"communication":2},"memory":3,"text":"人に教える難しさと楽しさを知った。"}},{"label":"新しいやり方を試す","out":{"stats":{"knowledge":1,"charm":2},"memory":3,"text":"自分なりの工夫が思った以上に好評だった。"}}]}],"high":[{"id":"sp_grow_high_1","title":"選択授業を決める","text":"来学期の選択授業を一つ決めることになった。","options":[{"label":"情報系の授業","out":{"text":"簡単なプログラムを組み、画面が動いた瞬間に達成感があった。","stats":{"knowledge":3},"memory":3}},{"label":"スポーツ実習","out":{"text":"普段やらない競技にも挑戦し、思った以上に汗をかいた。","stats":{"fitness":3},"memory":3}},{"label":"表現・芸術系","out":{"text":"作品づくりと発表を繰り返して人前に出るのに慣れた。","stats":{"charm":2,"communication":1},"memory":4}}]},{"id":"sp_grow_high_2","title":"模試の結果が返ってきた","text":"判定は微妙。ここからどうする？","options":[{"label":"弱点を洗い出す","out":{"text":"間違えた問題を分類し、次にやることを具体化した。","stats":{"knowledge":3},"memory":2}},{"label":"先生へ相談する","out":{"text":"勉強法と志望校について具体的な助言をもらった。","stats":{"knowledge":2,"communication":1},"memory":3}},{"label":"一日休んで切り替える","out":{"text":"映画を見て早く寝て、翌日からまた机に向かった。","stats":{"fitness":1,"charm":1},"memory":2}}]}],"young":[{"id":"sp_grow_young_1","title":"社外研修へ参加","text":"休日を使う研修の案内が来た。参加方法を選べる。","options":[{"label":"前列で参加","out":{"text":"質問もして、講師と名刺交換までできた。","cash":-30000,"stats":{"knowledge":2,"communication":2},"memory":3}},{"label":"オンライン参加","out":{"text":"費用を抑えて必要な部分を集中して学んだ。","cash":-10000,"stats":{"knowledge":3},"memory":2}},{"label":"今回は見送る","out":{"text":"休養を優先し、翌週の仕事を元気に始めた。","stats":{"fitness":2},"memory":1}}]},{"id":"sp_grow_young_2","title":"新しい趣味を始めたい","text":"仕事以外の時間に何か一つ始めることにした。","options":[{"label":"写真","out":{"text":"中古カメラを買い、休日に街を歩いて撮るようになった。","cash":-70000,"stats":{"charm":2},"memory":4}},{"label":"登山","out":{"text":"近郊の低山から始め、朝早く起きる習慣がついた。","cash":-40000,"stats":{"fitness":3},"memory":4}},{"label":"語学","out":{"text":"オンライン講座を続け、海外の記事を少し読めるようになった。","cash":-50000,"stats":{"knowledge":3},"memory":3}}]}],"mature":[{"id":"sp_grow_mature_1","title":"健康診断の結果","text":"少し気になる項目があった。生活を見直すことにした。","options":[{"label":"食事を変える","out":{"text":"外食を減らし、家で作る回数を増やした。","cash":20000,"stats":{"fitness":2},"memory":2}},{"label":"運動を始める","out":{"text":"ジムへ入会し、週二回は体を動かすようになった。","cash":-50000,"stats":{"fitness":3},"memory":3}},{"label":"睡眠を優先する","out":{"text":"夜更かしを減らし、平日の疲れが残りにくくなった。","stats":{"fitness":2,"knowledge":1},"memory":2}}]},{"id":"sp_grow_mature_2","title":"昔の趣味を再開","text":"しばらく離れていた趣味の道具が目に入った。","options":[{"label":"本格的に再開","out":{"text":"必要な道具を買い直し、週末の楽しみが一つ増えた。","cash":-100000,"stats":{"charm":3},"memory":6}},{"label":"昔の道具だけで楽しむ","out":{"text":"手元にあるもので久しぶりに触れ、感覚を思い出した。","stats":{"charm":2},"memory":5}},{"label":"友達を誘う","out":{"text":"昔の仲間にも連絡し、一緒に再開することになった。","cash":-30000,"stats":{"communication":2,"charm":1},"memory":7}}]}],"senior":[{"id":"sp_grow_senior_1","title":"新しい機器を使ってみる","text":"家族から便利だからと新しい機器を勧められた。","options":[{"label":"すぐ試す","out":{"text":"最初は戸惑ったが、動画通話まで一人で使えるようになった。","stats":{"knowledge":2},"memory":4}},{"label":"教えてもらう","out":{"text":"何度も聞きながら覚え、家族との連絡が増えた。","stats":{"communication":2,"knowledge":1},"memory":5}},{"label":"必要な機能だけ使う","out":{"text":"写真を見る機能だけ覚え、それでも十分楽しめた。","stats":{"knowledge":1},"memory":3}}]},{"id":"sp_grow_senior_2","title":"今日は一日予定なし","text":"時間を自由に使える。何をしよう？","options":[{"label":"散歩へ出る","out":{"text":"川沿いをゆっくり歩き、季節の花を見つけた。","stats":{"fitness":2},"memory":4}},{"label":"昔の写真を整理","out":{"text":"古いアルバムを開き、何十年前の出来事まで思い出した。","stats":{"knowledge":1},"memory":7}},{"label":"友人へ連絡","out":{"text":"久しぶりに電話をかけ、そのまま長話になった。","stats":{"communication":2},"memory":6}}]}]},"social":{"baby":[{"id":"sp_social_baby_1","title":"お客さんがやってきた","text":"家に知らない大人が遊びに来た。","options":[{"label":"すぐ近づいてみる","out":{"stats":{"communication":2,"charm":1},"memory":2,"text":"すぐに打ち解けて、たくさん可愛がってもらった。"}},{"label":"少し離れて観察する","out":{"stats":{"knowledge":2},"memory":1,"text":"じっと様子を見て、少しずつ慣れていった。"}},{"label":"お気に入りのおもちゃを見せる","out":{"stats":{"charm":2},"memory":2,"text":"得意げにおもちゃを披露して場が和んだ。"}}]},{"id":"sp_social_baby_2","title":"家族写真を撮ることに","text":"今日は家族みんなで記念写真。どうしよう？","options":[{"label":"カメラに向かって笑う","out":{"text":"とびきりの笑顔が写真に残った。","stats":{"charm":2},"memory":3}},{"label":"お気に入りのおもちゃも持つ","out":{"text":"大好きなものと一緒に、今しか撮れない一枚になった。","stats":{"charm":1},"memory":4}},{"label":"家族の真ん中に座る","out":{"text":"みんなに囲まれて安心した表情になった。","stats":{"communication":2},"memory":3}}]}],"elementary":[{"id":"sp_social_elementary_1","title":"班分けで迷った","text":"授業で自由に班を作ることになった。","options":[{"label":"仲の良い子と組む","out":{"stats":{"communication":2},"memory":3,"text":"息の合うメンバーで楽しく進めた。"}},{"label":"知らない子に声をかける","out":{"stats":{"communication":2,"charm":1},"memory":2,"text":"新しい友達ができた。"}},{"label":"得意そうな子を探す","out":{"stats":{"knowledge":2},"memory":2,"text":"役割分担がうまくいき、課題を早く終えられた。"}}]},{"id":"sp_social_elementary_2","title":"学校のお祭り","text":"クラスで何を担当するか決めることになった。","options":[{"label":"お客さんを呼び込む","out":{"stats":{"charm":2,"communication":1},"memory":4,"text":"元気な呼び込みでお店がにぎわった。"}},{"label":"飾りつけを担当する","out":{"stats":{"charm":1,"knowledge":1},"memory":3,"text":"工夫した飾りつけが好評だった。"}},{"label":"裏方で進行を手伝う","out":{"stats":{"communication":2,"knowledge":1},"memory":3,"text":"目立たないところで全体をうまく回せた。"}}]}],"middle":[{"id":"sp_social_middle_1","title":"グループ課題","text":"自由研究のテーマを決めることになった。","options":[{"label":"難しいテーマに挑む","out":{"stats":{"knowledge":3},"memory":2,"text":"苦戦したぶん、かなり詳しくなった。"}},{"label":"みんなが楽しめる内容にする","out":{"stats":{"communication":2,"charm":1},"memory":3,"text":"班全体が乗り気になり、発表も盛り上がった。"}},{"label":"実験中心で進める","out":{"stats":{"knowledge":2,"fitness":1},"memory":3,"text":"何度も試して、納得のいく結果を出した。"}}]},{"id":"sp_social_middle_2","title":"友達の家で対戦ゲーム","text":"四人で遊ぶことになった。どんな遊び方にする？","options":[{"label":"本気で勝ちにいく","out":{"text":"操作を覚えて集中し、最後の一戦を制した。","stats":{"knowledge":1,"fitness":1},"memory":4}},{"label":"初心者に教える","out":{"text":"操作方法を説明しながら全員が楽しめるように進めた。","stats":{"communication":3},"memory":4}},{"label":"変なルールを追加する","out":{"text":"独自ルールのせいで勝敗より笑いが止まらなくなった。","stats":{"charm":2},"memory":5}}]}],"high":[{"id":"sp_social_high_1","title":"文化祭の企画会議","text":"クラスの案がなかなかまとまらない。","options":[{"label":"自分の案を出す","out":{"stats":{"charm":2,"communication":1},"memory":4,"text":"思い切った案が採用され、準備が動き始めた。"}},{"label":"みんなの意見をまとめる","out":{"stats":{"communication":3},"memory":3,"text":"ばらばらだった案が一つにまとまった。"}},{"label":"必要な作業を先に始める","out":{"stats":{"knowledge":2,"fitness":1},"memory":2,"text":"話し合いの間に準備を進め、後でかなり助かった。"}}]},{"id":"sp_social_high_2","title":"放課後に二人で帰ることに","text":"同級生と偶然帰る方向が同じになった。","options":[{"label":"進路の話をする","out":{"text":"互いの将来の話をして、考えが少し整理された。","stats":{"knowledge":1,"communication":2},"memory":3}},{"label":"趣味の話をする","out":{"text":"好きな作品が意外と重なり、駅まで話が止まらなかった。","stats":{"charm":1,"communication":2},"memory":4}},{"label":"寄り道して食べる","out":{"text":"駅前で軽く食べながらゆっくり話した。","cash":-8000,"stats":{"communication":2},"memory":4}}]}],"young":[{"id":"sp_social_young_1","title":"仕事帰りのお誘い","text":"同僚から寄り道しようと声をかけられた。","options":[{"label":"一緒に行く","out":{"cash":-25000,"stats":{"communication":2},"memory":3,"text":"仕事以外の話で意外と盛り上がった。"}},{"label":"別の人も誘う","out":{"cash":-35000,"stats":{"communication":2,"charm":1},"memory":4,"text":"人数が増えてにぎやかな時間になった。"}},{"label":"今日は帰る","out":{"stats":{"fitness":1,"knowledge":1},"memory":1,"text":"早めに休んで、翌日はかなり調子が良かった。"}}]},{"id":"sp_social_young_2","title":"友人宅のホームパーティー","text":"知り合いの知り合いまで集まる大きめの会になった。","options":[{"label":"料理を持っていく","out":{"text":"得意料理を一品作り、思った以上に評判になった。","cash":-12000,"stats":{"charm":2,"communication":1},"memory":5}},{"label":"ゲームを持っていく","out":{"text":"全員で遊べるゲームを持参し、最後まで盛り上がった。","cash":-5000,"stats":{"communication":2},"memory":5}},{"label":"早めに帰る","out":{"text":"翌日の予定を優先して、ほどほどで切り上げた。","stats":{"fitness":1},"memory":2}}]}],"mature":[{"id":"sp_social_mature_1","title":"地域イベントのお手伝い","text":"近所の催しで人手を探している。","options":[{"label":"受付をする","out":{"stats":{"communication":3},"memory":4,"text":"たくさんの人と話し、顔見知りが増えた。"}},{"label":"設営を手伝う","out":{"stats":{"fitness":2,"communication":1},"memory":4,"text":"汗をかいたぶん、終わった後の達成感も大きかった。"}},{"label":"企画を考える","out":{"stats":{"knowledge":1,"charm":2},"memory":4,"text":"考えた企画が好評で次回も頼まれた。"}}]},{"id":"sp_social_mature_2","title":"久しぶりの同窓会","text":"学生時代の仲間がかなり集まるらしい。","options":[{"label":"最初から最後まで参加","out":{"text":"昔話から今の仕事まで話が尽きず、二次会まで残った。","cash":-30000,"stats":{"communication":3},"memory":8}},{"label":"一次会だけ参加","out":{"text":"懐かしい顔とゆっくり話し、ほどよい時間で帰った。","cash":-15000,"stats":{"communication":2},"memory":6}},{"label":"今回は欠席する","out":{"text":"写真だけ送ってもらい、家で昔のアルバムを開いた。","stats":{"charm":1},"memory":3}}]}],"senior":[{"id":"sp_social_senior_1","title":"近所の若い夫婦から相談を受けた","text":"仕事と子育ての両立で悩んでいるらしく、長く働いてきた経験を聞かせてほしいと言われた。","options":[{"label":"自分の経験を話す","out":{"stats":{"communication":2,"knowledge":1},"memory":5,"text":"話しているうちに、自分でも忘れていた経験を思い出した。"}},{"label":"まず相手の話を聞く","out":{"stats":{"communication":3},"memory":5,"text":"じっくり聞くことで、相手も少し元気になった。"}},{"label":"一緒に考えてみる","out":{"stats":{"knowledge":2,"communication":1},"memory":5,"text":"答えを押しつけず、一緒に道筋を考えた。"}}]},{"id":"sp_social_senior_2","title":"家族が集まる休日","text":"久しぶりに家族が集まることになった。","options":[{"label":"料理を用意する","out":{"text":"朝から台所に立ち、みんなで食べられる料理をたくさん作った。","cash":-40000,"stats":{"communication":1},"memory":8}},{"label":"写真を撮る","out":{"text":"全員がそろったところで何枚も写真を残した。","stats":{"charm":1},"memory":8}},{"label":"昔話をする","out":{"text":"子どもや孫世代へ、若い頃の失敗談まで話した。","stats":{"communication":2},"memory":9}}]}]}};

// v0.58: rebalance dedicated event libraries.
// Five normal + five 3-choice events per family/stage; young/mature double that.
const V58_ADULT_EXTRA_NORMAL={
 plus:{
  young:[
   {text:'社内の改善提案コンテストで自動集計の仕組みを提案し、採用報奨金と特別手当を受け取った',cash:150000,stats:{knowledge:1},memory:4},
   {text:'クレジットカードの不正利用が早期に見つかり、全額補償されたうえにキャンペーン還元まで受け取った',cash:90000,stats:{knowledge:1},memory:2}
  ],
  mature:[
   {text:'永年勤続表彰の対象になり、記念金と特別休暇をまとめて受け取った',cash:240000,stats:{communication:1},memory:5},
   {text:'住宅ローンの借り換えがうまく進み、諸費用を差し引いても家計にまとまった余裕が生まれた',cash:200000,stats:{knowledge:1},memory:3}
  ]
 },
 minus:{
  young:[
   {text:'洗濯機の排水ホースが外れて床まで水浸しになり、修理と清掃費がまとめてかかった',cash:-100000,stats:{},memory:0},
   {text:'旅行先で帰りの便が欠航し、急きょ宿泊と別ルートの交通費を払うことになった',cash:-140000,stats:{fitness:-1},memory:1}
  ],
  mature:[
   {text:'真夏にエアコンの室外機が故障し、繁忙期料金で急ぎの交換工事を頼むことになった',cash:-190000,stats:{fitness:-1},memory:0},
   {text:'親族の冠婚葬祭と遠方への移動が重なり、宿泊費まで含めてまとまった出費になった',cash:-150000,stats:{},memory:1}
  ]
 },
 grow:{
  young:[
   {text:'社外のプレゼン講座へ通い、三分で要点を伝える練習を何度も繰り返した',cash:-50000,stats:{communication:3},memory:3},
   {text:'市民プールの初心者向け水泳教室へ申し込み、週末ごとにフォームを直してもらった',cash:-35000,stats:{fitness:3},memory:3}
  ],
  mature:[
   {text:'大学の公開講座でデータ分析を学び、仕事の実データを使って復習する習慣をつけた',cash:-70000,stats:{knowledge:3},memory:4},
   {text:'体力の落ち込みを感じて少人数の筋力トレーニング教室へ通い、半年かけて基礎体力を戻した',cash:-60000,stats:{fitness:3},memory:4}
  ]
 },
 social:{
  young:[
   {text:'同僚の引っ越しを休日に手伝い、作業後は新居でみんなと遅い昼食を囲んだ',cash:-12000,stats:{communication:2,fitness:1},memory:5},
   {text:'友人の結婚式で二次会の幹事を任され、店との調整から当日の進行までやり切った',cash:-30000,stats:{communication:3,charm:1},memory:7}
  ],
  mature:[
   {text:'地域の防災イベントで受付と誘導を担当し、近所の若い世代とも顔見知りになった',cash:0,stats:{communication:3},memory:5},
   {text:'昔の趣味仲間と月一回の食事会を始め、仕事や家庭の近況をゆっくり話す時間ができた',cash:-40000,stats:{communication:2},memory:7}
  ]
 }
};
const V58_STAGE_CASH={baby:12000,elementary:18000,middle:28000,high:45000,young:100000,mature:180000,senior:140000};
const V58_OPTION_LABELS={
 plus:[
  ['そのまま貯めておく','次の挑戦に使う','家族や友達とお祝いする'],
  ['現金を多めに残す','道具や教材をそろえる','思い出づくりに使う'],
  ['必要な物だけ買う','自分への投資に回す','みんなで楽しむ'],
  ['将来用に取っておく','趣味や練習へ使う','周囲へおすそ分けする'],
  ['堅実に残す','新しい経験へ使う','食事や外出に使う']
 ],
 minus:[
  ['すぐ修理・対応する','安く済む方法を探す','周囲に相談して乗り切る'],
  ['その場で片づける','最低限だけ直す','予定を変えて対応する'],
  ['正規の方法で直す','応急処置でしのぐ','詳しい人に助けを頼む'],
  ['必要な費用を払う','自分でできる範囲を直す','別の方法へ切り替える'],
  ['早めに手続きを済ませる','費用を抑えて対処する','一度予定を組み直す']
 ],
 grow:[
  ['基礎をじっくり続ける','少し難しい課題に挑む','誰かに見てもらう'],
  ['毎日短時間ずつ練習する','道具や教材を追加する','仲間と一緒に取り組む'],
  ['苦手部分を重点的にやる','実践の場へ出てみる','経験者に教わる'],
  ['記録を取りながら続ける','一段上の目標を決める','人前で成果を試す'],
  ['基本からやり直す','新しい方法を試す','誰かと成果を比べる']
 ],
 social:[
  ['自分から声をかける','相手の話をじっくり聞く','もう一人誘って輪を広げる'],
  ['一緒に作業する','相手を手伝う','みんなの役割をまとめる'],
  ['近況を聞いてみる','共通の趣味へ誘う','複数人で集まる予定を立てる'],
  ['自分の話もしてみる','相手の相談に乗る','別の知り合いも紹介する'],
  ['その場に参加する','終わった後も少し話す','次の集まりを企画する']
 ]
};
function v58PrimaryStat(e,def='knowledge'){
 const entries=Object.entries(e?.stats||{}).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
 return entries[0]?.[0]||def;
}
function v58SecondaryStat(primary){return ['knowledge','fitness','charm','communication'].find(k=>k!==primary)||'communication'}
function v58AutoChoice(type,stageId,e,idx){
 const labels=V58_OPTION_LABELS[type][idx%V58_OPTION_LABELS[type].length],primary=v58PrimaryStat(e,type==='social'?'communication':'knowledge'),secondary=v58SecondaryStat(primary),base=V58_STAGE_CASH[stageId]||50000,id=`v60_${type}_${stageId}_${idx}`;
 const premise=/[。！？!?]$/.test(e.text)?e.text:`${e.text}。`,sourceText=`choice:${e.text}`;
 if(type==='plus'){
  const hasCash=(e.cash||0)>0,reward=Math.max(base,Math.max(0,e.cash||0));
  if(!hasCash)return{id,sourceText,title:['うれしい出来事のあと','この好調をどう伸ばす？','せっかくの成功を活かす','良い流れが来ている','次に何をする？'][idx%5],text:`${premise} この良い流れをどう活かそう？`,options:[
   {label:labels[0],out:{text:'結果に満足しつつ、得意な部分をさらに伸ばした。',stats:{[primary]:2},memory:3}},
   {label:labels[1],out:{text:'勢いのあるうちにもう一段難しいことへ挑戦した。',stats:{[primary]:3},memory:4}},
   {label:labels[2],out:{text:'周囲と喜びを分かち合い、新しいつながりまで生まれた。',stats:{communication:2,[secondary]:1},memory:5}}
  ]};
  return{id,sourceText,title:['うれしい余裕ができた','ごほうびをどう活かす？','好調な流れの使い道','思わぬプラスのあと','せっかくの幸運を活かす'][idx%5],text:`${premise} せっかくのプラスをどう活かそう？`,options:[
   {label:labels[0],out:{text:'大半を手元に残して、次の機会へ備えた。',cash:Math.round(reward*.9),memory:2}},
   {label:labels[1],out:{text:'一部を自分への投資へ回し、能力も伸ばした。',cash:Math.round(reward*.4),stats:{[primary]:2},memory:3}},
   {label:labels[2],out:{text:'周囲と楽しむことを選び、お金以上の思い出を残した。',cash:Math.round(reward*.2),stats:{communication:1,[secondary]:1},memory:5}}
  ]};
 }
 if(type==='minus'){
  const hasCash=(e.cash||0)<0,neg=Object.entries(e?.stats||{}).find(([,v])=>v<0)?.[0]||'fitness';
  if(!hasCash)return{id,sourceText,title:['調子を崩した日の立て直し','気まずい出来事のあと','失敗をどう受け止める？','少しつまずいてしまった','ここから立て直そう'][idx%5],text:`${premise} お金では解決しない。どう立て直す？`,options:[
   {label:labels[0],out:{text:'無理に取り返そうとせず、一度落ち着いて受け止めた。',stats:{[neg]:-1},memory:1}},
   {label:labels[1],out:{text:'少し無理をしてでも早く立て直そうと動いた。',stats:{[neg]:-1,fitness:-1},memory:2}},
   {label:labels[2],out:{text:'周囲へ事情を話し、助けてもらいながら整理した。',stats:{[neg]:-1,communication:1},memory:2}}
  ]};
  const loss=Math.max(base,Math.abs(e.cash||0));
  return{id,sourceText,title:['急なトラブルへの対応','困った出来事が起きた','予定外の出費をどうする？','その場で判断が必要になった','被害をどう抑える？'][idx%5],text:`${premise} どの対応を選んでも少し痛手は出そうだ。`,options:[
   {label:labels[0],out:{text:'費用はかかったが、すぐ対処して被害を広げずに済んだ。',cash:-Math.round(loss*1.0)}},
   {label:labels[1],out:{text:'安い方法を探して出費を抑えたが、そのぶん手間がかかった。',cash:-Math.round(loss*.65),stats:{knowledge:1},memory:1}},
   {label:labels[2],out:{text:'周囲にも頼りながら最低限の負担で収めた。',cash:-Math.round(loss*.45),stats:{communication:1},memory:1}}
  ]};
 }
 if(type==='grow'){
  const cost=Math.min(0,e.cash||0),smallCost=Math.round(cost*.6);
  return{id,sourceText,title:['伸ばし方を決める','もう一段成長するには？','練習方法を選ぶ','次の目標を決める','上達のための一工夫'][idx%5],text:`${premise} ここから、どんな取り組み方をする？`,options:[
   {label:labels[0],out:{text:'基本を繰り返した成果が出て、以前より安定してできるようになった。',...(smallCost?{cash:smallCost}:{}),stats:{[primary]:2},memory:2}},
   {label:labels[1],out:{text:'少し背伸びした課題に挑み、失敗も含めて大きな経験になった。',...(cost?{cash:cost}:{}),stats:{[primary]:3},memory:3}},
   {label:labels[2],out:{text:'人に見てもらったことで改善点が分かり、取り組み方がぐっと具体的になった。',...(smallCost?{cash:smallCost}:{}),stats:{[primary]:1,communication:1},memory:4}}
  ]};
 }
 const socialCost=Math.min(0,e.cash||0);
 return{id,sourceText,title:['人との関わり方を選ぶ','この時間をどう過ごす？','せっかくの交流の機会','一緒に何をする？','話の輪が広がりそうだ'][idx%5],text:`${premise} この機会をどう過ごそう？`,options:[
  {label:labels[0],out:{text:'自分から動いたことで会話が自然に続き、距離が少し縮まった。',...(socialCost?{cash:Math.round(socialCost*.6)}:{}),stats:{communication:2},memory:4}},
  {label:labels[1],out:{text:'相手の話を丁寧に聞くうち、今まで知らなかった一面まで知ることができた。',...(socialCost?{cash:Math.round(socialCost*.4)}:{}),stats:{communication:2,knowledge:1},memory:4}},
  {label:labels[2],out:{text:'人数が増えてにぎやかな時間になり、新しいつながりもできた。',...(socialCost?{cash:socialCost}:{}),stats:{communication:2,charm:1},memory:5}}
 ]};
}

// v0.60: additional era-specific events. Money only moves when the story calls for it.
const V60_EXTRA_NORMAL_RAW={"baby":{"plus":[["町の読み聞かせ会でお気に入りの絵本を最後まで聞き、帰りに小さなシール帳をもらった",0,{"knowledge":2},3],["初めてのおつかいごっこで上手にでき、家族みんなから大げさなくらい褒められた",0,{"charm":1,"communication":2},3]],"minus":[["楽しみにしていた公園の日に大雨が降り、一日中ふてくされてしまった",0,{"charm":-1},1],["夜ふかしして翌朝ずっと眠く、せっかくのお出かけでも元気が出なかった",0,{"fitness":-1},1]],"grow":[["家族と毎日少しずつひらがなカードで遊び、読める文字が一気に増えた",0,{"knowledge":3},3],["公園の低い遊具に何度も挑戦し、一人で最後まで渡り切れるようになった",0,{"fitness":3},3]],"social":[["近所の子と毎朝あいさつするうち、顔を見るだけで一緒に遊ぶ仲になった",0,{"communication":3},4],["親戚の集まりで覚えたばかりの歌を披露し、拍手喝采で何度もアンコールされた",0,{"charm":2,"communication":1},4]]},"elementary":{"plus":[["校内の読書スタンプを全部集め、先生から特製しおりと表彰カードをもらった",0,{"knowledge":2},3],["給食の献立アイデア募集で自分の案が採用され、全校放送で名前を呼ばれた",0,{"charm":2,"communication":1},4]],"minus":[["発表の順番を勘違いして準備不足のまま前に出てしまい、頭が真っ白になった",0,{"charm":-1},2],["友達との言い合いで意地を張りすぎ、仲直りまで数日かかってしまった",0,{"communication":-1},2]],"grow":[["毎朝10分だけ計算ドリルを続け、苦手だった割り算が急に得意になった",0,{"knowledge":3},3],["放課後に鉄棒の練習を続け、ついに逆上がりを連続で成功させた",0,{"fitness":3},4]],"social":[["転校してきた子へ校内を案内し、そのまま休み時間も一緒に遊ぶようになった",0,{"communication":3},4],["クラスで困っている子の係を自然に手伝い、先生にも友達にも感謝された",0,{"communication":2,"charm":1},4]]},"middle":{"plus":[["文化祭のポスターが来場者投票で一位になり、クラス全員で大騒ぎした",0,{"charm":3},5],["苦手科目の小テストで初めて満点を取り、先生から答案を見本として紹介された",0,{"knowledge":3},4]],"minus":[["部活のレギュラー争いに負け、しばらく練習へ行く気が起きなかった",0,{"fitness":-1,"charm":-1},2],["グループチャットで言葉足らずの返信をしてしまい、ちょっとした誤解が広がった",0,{"communication":-1},2]],"grow":[["放課後の補習へ真面目に通い、苦手だった英語の長文が読めるようになってきた",0,{"knowledge":3},3],["部活で基礎メニューを一か月続け、以前より最後まで動けるようになった",0,{"fitness":3},4]],"social":[["クラス替えで離れた友達とも毎週昼休みに集まり、関係が途切れず続いた",0,{"communication":3},5],["後輩から悩み相談を受け、放課後の教室で一時間じっくり話を聞いた",0,{"communication":2,"knowledge":1},4]]},"high":{"plus":[["推薦候補の校内選考に通り、担任から「ここからが本番だ」と背中を押された",0,{"knowledge":2,"charm":1},5],["文化祭ライブで予想以上に盛り上がり、終了後に知らない生徒からまで声をかけられた",0,{"charm":3,"communication":1},6]],"minus":[["模試で得意科目まで大きく崩れ、志望校判定が一段落ちてしまった",0,{"knowledge":-1},2],["友人関係の板挟みになり、どちらにも気を遣ってしばらく疲れ切ってしまった",0,{"communication":-1,"fitness":-1},2]],"grow":[["毎日一時間だけ受験勉強の時間を固定し、数か月後には模試の偏差値が大きく伸びた",0,{"knowledge":4},4],["体育祭へ向けて朝練を続け、短距離走のタイムを自己ベストまで縮めた",0,{"fitness":3},4]],"social":[["進路が違う友達とも卒業後に会う約束をし、連絡先を改めて交換した",0,{"communication":3},5],["文化祭準備で普段話さないクラスメイトと組み、意外な共通趣味で一気に仲良くなった",0,{"communication":3,"charm":1},5]]},"young":{"plus":[["社内の改善提案が採用され、全社共有の場で名前を挙げて評価された",0,{"knowledge":2,"charm":1},4],["休日に作った小さなアプリがSNSで話題になり、広告収入がまとまって入った",180000,{},4],["取引先への丁寧な対応が評価され、次の大きな案件も指名で任された",0,{"communication":3},4],["昔応募した懸賞の特賞が忘れた頃に届き、旅行券を現金化した",120000,{},4],["資格試験で上位成績を取り、社内でも専門分野を任される機会が増えた",0,{"knowledge":3},4],["副業で作った作品がまとめ買いされ、月収を超える売上になった",260000,{"charm":1},5],["趣味の大会で地区優勝し、賞金よりも周囲からの祝福がうれしかった",60000,{"fitness":2,"communication":1},6],["仕事の繁忙期をチーム全員で乗り切り、特別休暇をまとめて取れた",0,{"fitness":2,"communication":2},5],["古い保険契約の精算で返戻金が入り、口座残高が思った以上に増えた",220000,{},3],["行きつけの店で知り合った人から趣味仲間を紹介され、新しいコミュニティが広がった",0,{"communication":3,"charm":1},5]],"minus":[["大事なプレゼンで資料の数字を一か所間違え、信用回復のため何度も説明に回った",0,{"communication":-1,"knowledge":-1},2],["寝不足のまま働き続けて体調を崩し、週末を丸ごと寝て過ごした",0,{"fitness":-2},1],["勢いで買った高級家電がほとんど使わず、数か月後に安く手放した",-140000,{},2],["友人との旅行予約を勘違いし、変更手数料と追加宿泊費がまとめて発生した",-110000,{},2],["仕事の締切を抱え込みすぎて周囲への連絡が遅れ、チームの空気が少し悪くなった",0,{"communication":-2},2],["駐車場で車をこすってしまい、保険を使わず修理したため痛い出費になった",-180000,{},1],["投資先の決算悪化で含み損が膨らみ、迷った末に損切りした",-240000,{"knowledge":-1},2],["スマホと財布を同時に落とし、再発行や買い直しで一日中走り回った",-90000,{"fitness":-1},2],["職場の人間関係の仲裁に入り、どちらからも不満をぶつけられて疲れ切った",0,{"communication":-1,"fitness":-1},2],["更新を忘れていたサービスが年払いで自動継続され、まとめて請求が来た",-80000,{},1]],"grow":[["仕事で使う専門知識を学び直し、社内で質問されても即答できる範囲が広がった",0,{"knowledge":4},4],["三か月の筋トレを習慣化し、階段を上っても息切れしなくなった",0,{"fitness":4},4],["人前で話す練習会へ参加し、緊張しても最後まで話し切れるようになった",-20000,{"charm":3,"communication":1},4],["料理を一から覚え直し、平日の夕食をほぼ自炊で回せるようになった",-30000,{"knowledge":2,"charm":2},5],["朝の30分を読書に固定し、一年でかなりの冊数を読み切った",0,{"knowledge":3},4],["週末のランニングを続け、初めてハーフマラソンを完走した",-15000,{"fitness":4},6],["仕事のために動画編集を覚え、簡単なPR映像なら一人で作れるようになった",-60000,{"knowledge":2,"charm":2},5],["異業種交流会で発表役を引き受け、知らない人へ話しかける抵抗がかなり減った",-10000,{"communication":3,"charm":1},5],["毎月の家計を記録する習慣をつけ、無駄な固定費を自分で見つけられるようになった",0,{"knowledge":3},3],["休日にDIYへ挑戦し、棚や机を自分で直せる程度まで工具の扱いに慣れた",-40000,{"knowledge":2,"fitness":2},5]],"social":[["学生時代の友人と月一回だけ集まる習慣ができ、仕事の愚痴から将来の話まで続く関係になった",0,{"communication":3},6],["同僚の引っ越しを一日手伝い、その後ずっと家族ぐるみで付き合う仲になった",0,{"fitness":1,"communication":3},5],["趣味のオンラインコミュニティでオフ会を企画し、初対面同士をうまくまとめた",-20000,{"communication":3,"charm":1},6],["昔の恩師へ久しぶりに連絡し、近況報告だけのつもりが二時間話し込んだ",0,{"communication":2},5],["近所のイベントへ顔を出すうち、道で挨拶する知り合いが一気に増えた",-5000,{"communication":3},5],["友人の結婚式で受付を任され、知らない人とも自然に話せるようになった",-30000,{"communication":2,"charm":2},6],["職場の後輩の相談に乗り、数か月後に「あの時助かった」と改めて礼を言われた",0,{"communication":3},5],["旅行先の相席で意気投合した人と連絡先を交換し、その後も交流が続いた",-40000,{"communication":2,"charm":1},6],["友人同士の誕生日会を企画し、店選びから連絡まで全部まとめて成功させた",-25000,{"communication":3,"charm":1},6],["仕事つながりの知人から別業界の友人を紹介され、視野がかなり広がった",0,{"communication":2,"knowledge":1},5]]},"mature":{"plus":[["長年担当した顧客から感謝状を受け、社内でも改めて実績を評価された",0,{"communication":3,"charm":1},5],["昔買って忘れていた限定品がプレミア化し、専門店で高値がついた",320000,{},4],["子どもや親戚から旅行をプレゼントされ、費用を気にせず久しぶりに遠出できた",0,{"communication":2},8],["社内の大型改善プロジェクトが成功し、まとまった特別賞与が入った",420000,{"knowledge":1},5],["健康診断の結果が前年より大きく改善し、医師からこの調子でと褒められた",0,{"fitness":3},4],["昔から続けていた趣味の作品が雑誌で特集され、依頼が一気に増えた",180000,{"charm":2},6],["保有していた小さな土地が再開発対象になり、予想以上の価格で売却できた",600000,{},5],["部下が大きく成長してチーム表彰につながり、自分まで誇らしい気持ちになった",0,{"communication":3},6],["住宅ローンの借り換えがうまくいき、まとまった返金と今後の支払い減につながった",260000,{"knowledge":1},4],["地域活動で長年の貢献を表彰され、知り合いから次々と祝福された",80000,{"communication":2,"charm":1},7]],"minus":[["重要な会議で判断を急ぎすぎ、後から条件を見直す大きな手戻りが出た",0,{"knowledge":-1,"communication":-1},2],["無理な働き方が続いて体力が落ち、休日に何もする気が起きない日が増えた",0,{"fitness":-2},2],["自宅のエアコンと冷蔵庫が同じ月に壊れ、まとめて買い替える羽目になった",-320000,{},2],["親族の急な用事で遠方を何度も往復し、交通費と宿泊費が大きく膨らんだ",-240000,{"fitness":-1},3],["昔の友人との金銭トラブルが再燃し、関係までぎくしゃくしてしまった",-100000,{"communication":-1},2],["車検で予想外の故障が次々見つかり、見積額を見て言葉を失った",-360000,{},1],["投資先企業の不祥事で株価が急落し、長く持っていた分を大きく損切りした",-520000,{},2],["腰を痛めてしばらく運動できず、回復まで想像以上に時間がかかった",0,{"fitness":-2},2],["仕事で部下との認識違いが続き、チームの立て直しにかなり苦労した",0,{"communication":-2},3],["住宅設備の水漏れが床まで広がり、修繕と清掃で大きな請求が来た",-450000,{},2]],"grow":[["若手向け研修の講師を引き受け、教えるために自分の知識を一から整理し直した",0,{"knowledge":3,"communication":1},5],["毎朝のストレッチと散歩を一年続け、以前より体が軽く感じられるようになった",0,{"fitness":4},5],["長年避けていた英会話へ挑戦し、旅行先なら困らない程度まで話せるようになった",-80000,{"knowledge":3,"communication":1},6],["写真講座へ通い直し、構図や光を意識して撮れるようになった",-60000,{"charm":3},5],["家計と資産を整理するため金融知識を学び、契約内容を自分で比較できるようになった",0,{"knowledge":4},4],["市民大会へ向けて半年練習し、年齢別部門で自己ベストを出した",-30000,{"fitness":4},6],["地域の司会を何度か頼まれ、人前で話すことにほとんど緊張しなくなった",0,{"charm":2,"communication":2},6],["昔の趣味を基礎からやり直し、若い頃より丁寧な作品を作れるようになった",-50000,{"charm":3,"knowledge":1},6],["パソコンの新しいツールを覚え、面倒だった作業をかなり自動化できるようになった",-40000,{"knowledge":4},4],["ボランティアで新人をまとめる役を続け、世代の違う人とも話しやすくなった",0,{"communication":4},6]],"social":[["昔の同僚と定例の昼食会を始め、仕事を離れても相談し合える関係が続いた",-15000,{"communication":3},7],["近所の自治会イベントを手伝い、顔と名前が一致する知り合いが一気に増えた",0,{"communication":3},6],["子どもの昔の友達家族と再会し、十年以上ぶりに家族ぐるみで食事した",-50000,{"communication":2},8],["職場の若手から人生相談を受け、帰りの喫茶店で長く話を聞いた",-3000,{"communication":3,"knowledge":1},6],["趣味の集まりで幹事を引き受け、年代の違うメンバーをうまくまとめた",-20000,{"communication":3,"charm":1},7],["昔の親友と旅行へ出かけ、学生時代と同じようにくだらない話で笑い続けた",-120000,{"communication":2},10],["地域の子どもへ仕事の話をする機会があり、質問攻めにされながら楽しく答えた",0,{"communication":3,"charm":1},7],["兄弟姉妹や親戚が久しぶりに集まり、昔の写真を見ながら夜まで話し込んだ",-40000,{"communication":2},9],["オンラインで昔の仲間と定期通話を始め、遠方でも交流が続くようになった",0,{"communication":3},6],["仕事関係の知人を趣味仲間へ紹介したら意気投合し、自分を中心に新しい輪ができた",0,{"communication":3,"charm":1},7]]},"senior":{"plus":[["昔書いた文章が地域誌で再掲載され、思いがけず多くの人から感想が届いた",0,{"charm":2,"communication":1},8],["家族が企画したサプライズ旅行へ招かれ、財布をほとんど開かずに贅沢な時間を過ごした",0,{"communication":2},10]],"minus":[["昔の友人との約束の日を完全に勘違いし、後から何度も謝ることになった",0,{"communication":-1},2],["張り切って庭仕事をしすぎて翌日動けなくなり、数日ゆっくり休むことになった",0,{"fitness":-1},2]],"grow":[["毎週の囲碁教室で若い参加者とも対局し、読みの幅が少しずつ広がった",0,{"knowledge":3},6],["朝のラジオ体操へ欠かさず参加し、近所の坂道も以前より楽に歩けるようになった",0,{"fitness":3},6]],"social":[["昔の同級生へ一人ずつ電話をかけ、小さな同窓会を自分で企画した",-20000,{"communication":3},9],["近所の子どもに昔の遊びを教えているうち、毎週遊びに来るようになった",0,{"communication":3,"charm":1},8]]}};
const V60_EXTRA_NORMAL={};for(const st in V60_EXTRA_NORMAL_RAW){V60_EXTRA_NORMAL[st]={};for(const type in V60_EXTRA_NORMAL_RAW[st])V60_EXTRA_NORMAL[st][type]=V60_EXTRA_NORMAL_RAW[st][type].map(x=>({text:x[0],cash:x[1],stats:x[2],memory:x[3]}));}

(function rebalanceV58SpaceEvents(){
 const types=['plus','minus','grow','social'],stages=['baby','elementary','middle','high','young','mature','senior'];
 for(const type of types)for(const stageId of stages){
  const adult=stageId==='young'||stageId==='mature',normalTarget=adult?20:10,choiceTarget=adult?20:10;
  const source=[...(SPACE_EVENTS[type]?.[stageId]||[])];
  if(adult)source.push(...(V58_ADULT_EXTRA_NORMAL[type]?.[stageId]||[]));
  source.push(...(V60_EXTRA_NORMAL[stageId]?.[type]||[]));
  // Existing raw pools contain 8 events in the other eras and 10 in adult eras;
  // v0.60 fills them to 10 / 20 without forcing a money change into every story.
  SPACE_EVENTS[type][stageId]=source.slice(0,normalTarget);
  const choices=[...(SPACE_CHOICE_EVENTS[type]?.[stageId]||[])];
  let cursor=0;
  while(choices.length<choiceTarget){
   const src=source[(cursor*3+choices.length)%source.length]||source[cursor%source.length];
   choices.push(v58AutoChoice(type,stageId,src,choices.length));cursor++;
  }
  SPACE_CHOICE_EVENTS[type][stageId]=choices.slice(0,choiceTarget);
 }
})();

const ALL_SPACE_CHOICE_EVENTS=Object.values(SPACE_CHOICE_EVENTS).flatMap(byStage=>Object.values(byStage).flat());
function activeSpaceEvents(type,id){return SPACE_EVENTS[type]?.[id]||SPACE_EVENTS[type]?.young||[]}
function activeSpaceChoices(type,id){return SPACE_CHOICE_EVENTS[type]?.[id]||SPACE_CHOICE_EVENTS[type]?.young||[]}
function spaceContentPool(type,id){return[...activeSpaceEvents(type,id).map(e=>({id:`${type}:${e.text}`,kind:'normal',event:e})),...activeSpaceChoices(type,id).map(e=>({id:`${type}:${e.sourceText||('choice:'+e.id)}`,kind:'choice',event:e}))]}
function isCurrentWorkFailureContent(item){const e=item?.event||item||{},texts=[e.text,e.title,e.sourceText,e?.out?.text,...(e.options||[]).map(o=>o?.out?.text||o?.outcome?.text||'')].filter(Boolean).join(' ');return/(仕事|職場|会社|社内|業務|取引先|顧客|部下|上司|同僚|会議|勤務|案件|納期)/.test(texts)}
function eligibleSpaceContentPool(p,type,id){let pool=spaceContentPool(type,id);if(id==='senior'&&type==='minus'&&!p.job){const filtered=pool.filter(x=>!isCurrentWorkFailureContent(x));if(filtered.length)pool=filtered}return pool}
function pickSpaceContent(p,type,id){return pickFresh(p,eligibleSpaceContentPool(p,type,id),`space-${type}`)}

const ABILITY_EVENT_RULES={
 '夏休みに太陽熱で目玉焼きを作る自由研究をまとめ、校内発表で表彰された':{stat:'knowledge',target:7,failText:'発表では賞に届かなかったが、実験を繰り返したぶん知識はしっかり身についた。'},
 '学校近くのイラストコンテストへ作品を出し、結果発表まで毎日掲示板を確認した':{stat:'charm',target:7,failText:'入賞は逃したが、完成まで描き切った作品は自信につながった。'},
 '体力測定の20mシャトルランで自己ベストを大きく更新し、体育の先生に驚かれた':{stat:'fitness',target:7,failText:'記録は平均的だったが、最後まで走り切って次の目標ができた。'},
 '地域の動画コンテストに三分の短編を応募し、審査員特別賞に選ばれた':{stat:'charm',target:9,failText:'入賞は逃したものの、作品を完成させて公開した経験は大きかった。'},
 'バスケットボール部最後の大会で県大会出場を懸けた試合に挑んだ':{stat:'fitness',target:9,failText:'県大会には届かなかったが、最後の笛まで走り切って部活を終えた。'},
 '仕事に関係する資格試験へ挑み、休日の勉強が実って合格通知を受け取った':{stat:'knowledge',target:10,failText:'合格にはあと少し届かなかった。勉強した範囲は仕事で使える知識として残った。'},
 '社内勉強会で自分の専門分野を解説し、その内容が別部署の案件にも採用された':{stat:'knowledge',target:11,failText:'説明には苦戦したが、質問を受けたことで自分の理解不足も見つかった。'},
 '公民館のスマホ教室で講師役を頼まれ、近所の人へ写真の送り方や地図アプリを教えた':{stat:'communication',target:10,failText:'説明がうまく伝わらない場面もあったが、一緒に操作しながら最後まで付き合った。'}
};
const JOB_EVENT_LIBRARY={"office":{"work":["月次レポートの集計方法を見直し、チームの残業時間を大きく減らした。","取引先との調整役を任され、複数部署の予定をうまくまとめた。","急な欠員をカバーしながら通常業務も崩さず、繁忙日を乗り切った。"],"general":["業務で使う表計算のテンプレートを自作し、日々の作業がかなり楽になった。","社外のセミナーへ参加し、他社の働き方から新しい改善案を持ち帰った。"]},"sales":{"work":["長く連絡を取り続けていた顧客から大型契約を獲得した。","相手の要望を丁寧に整理し、競合から契約を取り返した。","新規開拓で一日中歩き回り、最後の訪問先で大きな商談につながった。"],"general":["街で偶然昔の顧客と再会し、新しい相談を持ちかけられた。","話し方の研修に参加し、短時間で要点を伝えるコツを身につけた。"]},"chef":{"work":["新メニューの試作を重ね、看板料理として正式採用された。","満席のピークタイムを厨房全体で乗り切り、提供の遅れを最小限に抑えた。","仕入れた旬の食材を活かした限定メニューが予想以上の人気になった。"],"general":["休日に市場を巡り、知らなかった食材と調理法をいくつも教わった。","友人の集まりで料理を振る舞い、レシピを教えてほしいと頼まれた。"]},"designer":{"work":["クライアントの曖昧な要望を整理し、提案したデザインが一発で採用された。","締切直前の大幅修正に対応し、品質を落とさず納品まで間に合わせた。","新しいビジュアル案がキャンペーンの中心デザインに選ばれた。"],"general":["街で見かけた看板の配色に刺激を受け、帰宅後すぐ新しい案を描き始めた。","小さな展示会を見に行き、今まで使わなかった表現を試してみたくなった。"]},"engineer":{"work":["障害の原因をログから突き止め、サービス停止を短時間で復旧させた。","古いシステムの処理を整理し、毎日の作業時間を大幅に短縮した。","難しい技術検証を任され、試作版を予定より早く完成させた。"],"general":["個人用に小さな自動化ツールを作り、面倒な作業を一つ減らした。","技術イベントで新しい仕組みを知り、仕事にも使えそうだとメモを取った。"]},"teacher":{"work":["苦手科目で伸び悩んでいた生徒の勉強方法を見直し、成績が大きく上がった。","文化祭準備で揉めていたクラスの話を聞き、全員が納得できる役割分担を作った。","授業用に作った教材が分かりやすいと評判になり、他の先生にも共有された。"],"general":["書店で授業に使えそうな本を見つけ、つい時間を忘れて読み込んだ。","卒業生から近況報告の連絡が届き、教師を続けていて良かったと感じた。"]},"nurse":{"work":["慌ただしい時間帯でも患者の小さな変化に気づき、早めの対応につなげた。","新人スタッフへ処置の手順を丁寧に教え、チーム全体の動きが安定した。","長く通院していた患者から元気になった姿を見せてもらい、感謝の言葉を受け取った。"],"general":["健康イベントの手伝いをし、地域の人へ簡単な体調管理のコツを説明した。","医療の新しい知識を学ぶ講習へ参加し、ノートがびっしり埋まった。"]},"civil":{"work":["住民から長く寄せられていた相談を整理し、関係部署と連携して解決まで進めた。","繁忙期の窓口を担当し、待ち時間を減らす案内方法を考えた。","地域イベントの運営計画をまとめ、事故なく予定どおり終えることができた。"],"general":["地域の施設を見て回り、普段気づかない課題をいくつも見つけた。","防災訓練へ参加し、いざという時の連絡手順を改めて確認した。"]},"mechanic":{"work":["原因不明だった異音を突き止め、部品交換だけで故障を直した。","難しい修理依頼に取り組み、古い車をもう一度走れる状態まで戻した。","点検中に重大な不具合を早期発見し、大きな事故を未然に防いだ。"],"general":["休日に自分の工具を整備し、使いやすい配置へ並べ直した。","旧車イベントへ足を運び、珍しい構造のエンジンをじっくり見学した。"]},"creator":{"work":["企画した動画が大きく伸び、チャンネルの新規視聴者が一気に増えた。","撮影トラブルを編集の工夫で逆に面白く仕上げ、好評を得た。","企業案件の動画を期限内に仕上げ、次の依頼も指名でもらえた。"],"general":["街歩き中に面白い撮影スポットを見つけ、短い動画にして投稿した。","新しい編集ソフトを試し、今まで難しかった演出を使えるようになった。"]},"programmer":{"work":["長年残っていた不具合を再現し、原因箇所を特定して修正した。","大量処理のコードを書き直し、実行時間を半分以下まで短縮した。","新機能の実装を担当し、レビューでもほとんど修正なしで通過した。"],"general":["個人開発で小さなアプリを作り、友人に使ってもらった。","新しいプログラミング言語を触り始め、簡単なツールまで作れるようになった。"]},"architect":{"work":["難しい敷地条件の住宅案をまとめ、施主からその場で気に入ってもらえた。","施工現場で見つかった問題に設計変更で対応し、工期への影響を抑えた。","コンペに出した建築案が高く評価され、次の設計依頼につながった。"],"general":["古い建築を見学し、細かな納まりを写真に残して研究した。","街を歩きながら気になる建物の外観をスケッチして回った。"]},"researcher":{"work":["何度も失敗していた実験条件を見直し、ようやく再現性のある結果が出た。","研究発表で鋭い質問を受けたが、データを示して最後まで説明し切った。","共同研究の解析を担当し、新しい傾向を発見して論文につながった。"],"general":["専門外の論文を読んだことで、自分の研究へ使えそうな発想を得た。","研究会で別分野の人と話し、思いがけない共同研究の話が始まった。"]},"doctor":{"work":["診断が難しかった患者の症状を丁寧に追い、原因を突き止めた。","緊急対応が重なった日をチームで乗り切り、全員無事に治療を終えた。","長期治療を続けていた患者が回復し、笑顔で退院する姿を見送った。"],"general":["最新の治療法に関する勉強会へ参加し、診療に活かせそうな知識を得た。","地域の健康相談会で多くの質問に答え、生活習慣の大切さを伝えた。"]},"lawyer":{"work":["複雑な契約書の問題点を見つけ、依頼人が不利になる条件を修正できた。","長く続いた交渉を粘り強くまとめ、双方が納得する合意へたどり着いた。","大量の資料から重要な証拠を見つけ、案件の流れを大きく変えた。"],"general":["法律改正の研修へ参加し、実務への影響を細かく確認した。","知人から契約について相談され、一般的な注意点を分かりやすく説明した。"]},"pilot":{"work":["悪天候で揺れる中でも状況を冷静に判断し、安全に目的地へ到着した。","機材トラブルの兆候を早めに察知し、出発前に整備へつなげた。","長距離便を担当し、予定どおりの運航で乗客を無事に送り届けた。"],"general":["休日に航空博物館へ行き、昔の機体をじっくり見て回った。","体調管理のためトレーニングを続け、長時間勤務でも集中を保ちやすくなった。"]},"athlete":{"work":["満員の球場で決勝打を放ち、チームを逆転勝利へ導いた。","不調だったフォームを修正し、連続試合で安打を重ねた。","大事な試合で守備の好プレーを決め、流れを一気に引き寄せた。"],"general":["休日も軽い自主練を続け、打撃フォームを動画で細かく確認した。","少年野球教室へ参加し、子どもたちにバッティングを教えた。"]},"soccer":{"work":["終了間際に決勝ゴールを決め、スタジアムが大歓声に包まれた。","相手の守備を崩すパスを何本も通し、チームの勝利に貢献した。","厳しい連戦でも走り切り、監督から運動量を高く評価された。"],"general":["地域のサッカー教室で子どもたちと一緒にボールを蹴った。","試合映像を見返し、ポジショニングの改善点をノートにまとめた。"]},"fighter":{"work":["大一番で相手の動きを読み切り、判定勝ちを収めた。","苦手だった技への対策を積み重ね、試合で見事に封じ込めた。","厳しい減量を乗り越え、ベストコンディションでリングへ上がった。"],"general":["道場で基礎練習をやり直し、細かなフォームの癖を修正した。","後輩のスパーリング相手を務め、教える中で自分の技も整理できた。"]},"musician":{"work":["新曲のライブ演奏が大きく盛り上がり、追加公演が決まった。","何度も録り直した音源が完成し、納得できる仕上がりになった。","他のアーティストとの共演が好評で、新しいファンが増えた。"],"general":["街の小さなライブハウスへ行き、知らないバンドから刺激を受けた。","自宅で新しいフレーズを思いつき、忘れないうちに録音した。"]},"actor":{"work":["難しい長回しのシーンを一発で決め、現場から拍手が起きた。","役作りのために続けた練習が本番で活き、監督から高く評価された。","脇役として参加した作品が話題になり、次の出演依頼につながった。"],"general":["舞台を観に行き、台詞の間や立ち姿をじっくり研究した。","普段と違う役柄のオーディションへ挑み、新しい演技を試した。"]},"idol":{"work":["新曲のステージでセンターを任され、会場を大きく盛り上げた。","生放送のトークでうまく場を回し、出演後に反響が広がった。","ファンイベントを最後まで笑顔でやり切り、来場者から多くの感想が届いた。"],"general":["ダンスレッスンを追加で受け、苦手な振りを重点的に練習した。","SNS用の写真を自分で工夫して撮り、反応がいつもより大きく伸びた。"]},"vtuber":{"work":["記念配信が予想以上に盛り上がり、同時視聴者数の自己記録を更新した。","大型コラボで進行役を務め、初対面の配信者ともテンポよく掛け合えた。","新衣装のお披露目配信が話題になり、登録者が一気に増えた。"],"general":["配信用のマイク設定を見直し、以前より聞きやすい音になった。","短い切り抜き動画を試しに作ったところ、思った以上に拡散された。"]},"manager":{"work":["複数部門の計画を一本にまとめ、重要プロジェクトの方針を決めた。","数字を分析して不採算な施策を見直し、利益改善につなげた。","経営会議用の提案をまとめ、新規事業の予算を確保した。"],"general":["他業界の事例を調べ、自社でも使えそうな仕組みをメモした。","若手社員との意見交換会で、現場の課題を直接聞くことができた。"]},"consultant":{"work":["複雑な業務フローを整理し、顧客へ具体的な改善案を提示した。","経営陣への報告会で厳しい質問に答え、提案の採用を勝ち取った。","短期間の調査で問題の核心を見つけ、プロジェクトを立て直した。"],"general":["移動中に業界資料を読み込み、次の提案に使える数字を見つけた。","異業種の勉強会へ参加し、新しい分析手法を学んだ。"]},"entrepreneur":{"work":["新サービスの初月売上が目標を超え、追加投資を決断した。","資金繰りが厳しい時期を乗り越え、大口顧客との契約を獲得した。","採用した新メンバーが活躍し、会社の成長速度が一段上がった。"],"general":["交流会で事業の相談をしたところ、思わぬ協力者を紹介された。","休日に競合サービスを研究し、自社の改善点をいくつも見つけた。"]},"trader":{"work":["相場の急変を早めに察知し、大きな損失を避けながら利益を確保した。","決算資料を読み込んでいた銘柄が上昇し、狙いどおり利益を出した。","無理な取引を避けて資金を守り、次の好機を待つ判断がうまくいった。"],"general":["市場ニュースを整理し、自分の取引ルールを改めて見直した。","投資家向けの勉強会で、今まで見ていなかった指標を学んだ。"]},"author":{"work":["何度も書き直した原稿が完成し、編集者から手応えのある返事をもらった。","新刊の評判が広がり、重版が決まった。","締切直前に物語の最後がまとまり、一気に書き上げて納稿した。"],"general":["喫茶店で人の会話を聞いていたら、新しい登場人物の着想が浮かんだ。","資料探しで図書館へ行き、予定外の本まで大量に借りて帰った。"]},"artisan":{"work":["難しい寸法の造作家具をぴたりと納め、施主から感謝された。","古い住宅の傷んだ部分を補修し、できるだけ元の雰囲気を残して仕上げた。","現場で急な設計変更が入ったが、加工を工夫して工期内に収めた。"],"general":["休日に自分用の小さな棚を作り、余った木材まできれいに使い切った。","伝統建築の見学会へ行き、継手や仕口をじっくり観察した。"]},"farmer":{"work":["天候を見ながら収穫時期を調整し、作物を一番良い状態で出荷できた。","新しい栽培方法を試し、前年より収量を増やすことに成功した。","直売イベントへ出店し、用意した野菜が予定より早く売り切れた。"],"general":["近隣農家と情報交換し、害虫対策の新しい方法を教わった。","休日に農機具を整備し、次の作業へ備えて細かく点検した。"]},"game":{"work":["テストプレイで不評だった部分を作り直し、遊びやすさが大きく改善した。","企画した新システムが開発チームに通り、正式仕様として採用された。","発売直前の調整をやり切り、予定どおりリリース日を迎えた。"],"general":["休日に話題のゲームを遊び、面白かった仕組みをノートにまとめた。","小さなゲームイベントへ行き、個人制作の作品から刺激を受けた。"]},"scientist":{"work":["高精度な測定に成功し、これまで説明できなかった現象の手がかりを得た。","国際共同研究のデータ解析を担当し、重要な結果をまとめた。","新しい実験装置の調整を終え、長期研究を次の段階へ進めた。"],"general":["異分野の研究者と議論し、自分では思いつかなかった仮説を得た。","最新の研究論文を読み込み、次の実験計画を書き直した。"]},"executive":{"work":["大きな投資案件を最終判断し、新事業を正式に動かした。","業績が落ちていた部門の再建策を決め、改善の道筋をつけた。","重要な提携交渉をまとめ、会社の新しい成長分野を確保した。"],"general":["経営者同士の会合で他社の事例を聞き、自社の課題を考え直した。","現場を直接見て回り、報告書だけでは分からない問題を確認した。"]}};
const CAREER_EVENTS=['取引先向けの提案資料を作り直し、プレゼンで大型契約を決めた','取得した資格の知識を使って、現場の手戻りを一つ減らした','納期が遅れていたチームの作業を整理し、担当を振り直して立て直した','社内公募へ出した新サービス案が採用され、試験運用まで進んだ','顧客先で起きた急なトラブルへ対応し、その日のうちに復旧までこぎつけた','担当した顧客から名指しで感謝のメールが届き、上司にも共有された','新人の教育担当として作った手順書が部署全体で使われるようになった','一年間の成果が認められ、社内表彰で名前を呼ばれた'];
const MILESTONES={baby:'幼少期が始まった',elementary:'小学校生活が始まった',middle:'中学生になった',high:'高校生活が始まった',young:'大人としての生活が始まった',mature:'人生の中盤に入った',senior:'円熟期に入った'};

const STAGE_FLAVOR={baby:'家族に見守られながら、はじめての世界へ。',elementary:'遊びも勉強も、毎日が新発見。',middle:'得意なことや人間関係が少しずつ形になる。',high:'進路を考えながら、自分らしさを伸ばす。',young:'仕事・恋愛・資産形成。選択肢が一気に広がる。',mature:'仕事も家庭も人生の大きな節目へ。',senior:'積み重ねた人生を楽しみ、最後の総決算へ。'};
const STAGE_THEME={baby:['#e7f2e5','#fff0d5'],elementary:['#e1f1dc','#fff1bd'],middle:['#dce8f5','#eadff4'],high:['#e8e3f7','#f8dfdc'],young:['#dcefe8','#dce7f6'],mature:['#e0e8ee','#f0decf'],senior:['#f2e6d7','#f1dcae']};
const SPACE_META={start:['🏁','スタート'],event:['📜','出来事'],plus:['🍀','プラス'],minus:['💥','マイナス'],grow:['📖','成長'],social:['💌','交流'],chance:['🌟','チャンス'],gamble:['🎰','大勝負'],payday:['💰','収入'],card:['🃏','カード'],treasure:['💎','お宝'],submap:['↪️','寄り道'],branch:['↗️','分岐点'],romance:['💗','恋愛'],property:['🔑','物件'],career:['💼','仕事'],family:['🏠','家族'],bigluck:['🌈','大ラッキー'],bigbad:['⛈️','大不幸']};
let peer=null,hostConn=null,isHost=false,roomCode='',localPlayerId='',state=null,cpuTimer=null,hostTimers=[];const connections=new Map();
let bgmOn=localStorage.getItem('lifeRoadBgmOn')!=='0',sfxOn=localStorage.getItem('lifeRoadSfxOn')!=='0',audioCtx=null,bgmTimer=null,bgmStep=0,bgmStage=-1,bgmThemeKey='',lastFx={roulette:null,move:'',stage:null,message:''},rollVisualTimer=null,mobileBoardFocusTimer=null,boardRollPopTimer=null;
let titleCutTimer=null,lastTitleCutId='';
let queuedImmediatePromotion=null;
let typewriterTimer=null,typewriterKey='',typewriterFullText='',typewriterDone=true,typewriterPos=0,messageSceneKey='',landingPopKey='';
let masterVolume=Math.max(0,Math.min(1,Number(localStorage.getItem('lifeRoadVolume')??'1')));
let portraitCollapsed=localStorage.getItem('lifeRoadPortraitCollapsed')==='1';
const SESSION_KEY='lifeRoadSessionV22';
let reconnectTimer=null,reconnectAttempts=0,resumeInProgress=false,portraitTogglePointerLock=false,rollAdvanceLock=false,localHomeView=false,intentionalDisconnect=false;
let resultSessionKey='',resultRevealIndex=0,resultSummaryVisible=false;
const rnd=n=>Math.floor(Math.random()*n),pick=a=>a[rnd(a.length)],clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function pickFresh(p,pool,kind='event'){
 if(!pool?.length)return null;
 p.recentEventKeys=Array.isArray(p.recentEventKeys)?p.recentEventKeys:[];
 state.recentContentKeys=Array.isArray(state.recentContentKeys)?state.recentContentKeys:[];
 const keyOf=x=>`${stageDef().id}:${kind}:${x?.id||x?.text||String(x)}`;
 const personal=new Set(p.recentEventKeys.slice(-12)),globalRecent=new Set(state.recentContentKeys.slice(-10));
 let candidates=pool.filter(x=>!personal.has(keyOf(x))&&!globalRecent.has(keyOf(x)));
 if(!candidates.length)candidates=pool.filter(x=>!personal.has(keyOf(x)));
 const chosen=pick(candidates.length?candidates:pool),key=keyOf(chosen);
 p.recentEventKeys.push(key);if(p.recentEventKeys.length>18)p.recentEventKeys=p.recentEventKeys.slice(-18);
 state.recentContentKeys.push(key);if(state.recentContentKeys.length>24)state.recentContentKeys=state.recentContentKeys.slice(-24);
 return chosen;
}
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
function isToga(){return false}
function variantName(){return '通常モード'}
function variantDescription(){return '日常・進路・仕事・恋愛・家族・資産形成を中心に遊びます。'}
function stageFlavor(id){return isToga()?(TOGA_STAGE_FLAVOR[id]||STAGE_FLAVOR[id]):STAGE_FLAVOR[id]}
function activeEventsForStage(id){const normal=EVENTS[id]||EVENTS.young;if(!isToga())return normal;return [...normal,...(TOGA_EVENTS[id]||TOGA_EVENTS.young||[])]}
function activeChoiceEventsForStage(id){const normal=CHOICE_EVENTS[id]||CHOICE_EVENTS.young;if(!isToga())return normal;return [...normal,...(TOGA_CHOICE_EVENTS[id]||TOGA_CHOICE_EVENTS.young||[])]}
function abilityRuleFor(text){return (isToga()?TOGA_ABILITY_EVENT_RULES[text]:null)||ABILITY_EVENT_RULES[text]||null}
function activeCareerEvents(){return isToga()?TOGA_CAREER_EVENTS:CAREER_EVENTS}
const JOB_WORK_FLAVOR={"office":["資料整理","部署間の調整","業務改善"],"sales":["顧客提案","新規開拓","契約交渉"],"chef":["仕込み","新メニュー開発","厨房連携"],"designer":["デザイン提案","修正対応","ビジュアル制作"],"engineer":["障害対応","設計改善","技術検証"],"teacher":["授業づくり","生徒指導","学校行事"],"nurse":["患者対応","処置補助","チーム連携"],"civil":["窓口対応","地域施策","行政調整"],"mechanic":["故障診断","整備作業","部品調整"],"creator":["企画撮影","動画編集","企業案件"],"programmer":["実装","不具合修正","コード改善"],"architect":["設計提案","現場調整","図面修正"],"researcher":["実験","データ解析","研究発表"],"doctor":["診療","緊急対応","治療方針"],"lawyer":["契約確認","交渉","資料精査"],"pilot":["運航判断","安全確認","長距離便"],"athlete":["打撃練習","公式戦","守備連携"],"soccer":["試合運び","連携プレー","フィジカル調整"],"fighter":["試合対策","スパーリング","コンディション調整"],"musician":["楽曲制作","ライブ","レコーディング"],"actor":["撮影","役作り","オーディション"],"idol":["ステージ","番組収録","ファンイベント"],"vtuber":["生配信","大型コラボ","企画配信"],"manager":["事業計画","部門調整","数値分析"],"consultant":["課題分析","改善提案","経営報告"],"entrepreneur":["資金繰り","新規事業","採用"],"trader":["市場分析","売買判断","リスク管理"],"author":["執筆","推敲","編集打合せ"],"artisan":["木材加工","現場施工","造作作業"],"farmer":["栽培管理","収穫","出荷調整"],"game":["ゲーム企画","テストプレイ","仕様調整"],"scientist":["精密実験","共同研究","装置調整"],"executive":["経営判断","大型投資","事業再編"],"director":["部下の育成","チーム運営","部署目標の管理"],"headchef":["厨房全体の指揮","コース開発","若手料理人の育成"],"producer":["企画統括","出演者調整","制作予算の管理"],"coach":["選手育成","試合分析","戦術指導"],"masterbuilder":["現場統括","職人への指示","難所の施工"],"techlead":["技術方針の決定","開発チーム統括","重大障害の指揮"]};
const JOB_WORK_EVENT_TEMPLATES=[
 (n,a,b,c)=>`${a}を任され、細かな問題を一つずつ片づけて予定どおり成果を出した。`,
 (n,a,b,c)=>`${b}で難しい判断を迫られたが、経験を活かして周囲が納得する形にまとめた。`,
 (n,a,b,c)=>`${c}のやり方を見直し、以前より短い時間で同じ品質を出せるようになった。`,
 (n,a,b,c)=>`${a}の途中で想定外のトラブルが起きたが、落ち着いて立て直し最後までやり切った。`,
 (n,a,b,c)=>`${b}で後輩から相談を受け、実例を交えながらコツを教えた。`,
 (n,a,b,c)=>`${c}で新しい方法を試し、周囲から「次もこのやり方でいこう」と評価された。`,
 (n,a,b,c)=>`${a}と${b}が同時に重なる忙しい日になったが、優先順位を決めて両方を無事に終えた。`,
 (n,a,b,c)=>`${c}の成果が数字や反応にはっきり表れ、${n}として手応えのある一日になった。`,
 (n,a,b,c)=>`${b}について他のスタッフと意見が割れたが、根拠を示してより良い案へまとめた。`,
 (n,a,b,c)=>`${a}で積み重ねてきた経験が活き、以前なら苦戦した仕事を余裕を持って仕上げた。`
];
function expandedJobWorkEvents(job,base=[]){const f=JOB_WORK_FLAVOR[job?.id]||[`${job?.name||'仕事'}の実務`,'重要案件','仕事の改善'],out=[...base];let i=0;while(out.length<10){const fn=JOB_WORK_EVENT_TEMPLATES[i%JOB_WORK_EVENT_TEMPLATES.length];out.push(fn(job?.name||'仕事',f[0],f[1],f[2]));i++}return out.slice(0,10)}
function jobEventDef(job){const raw=JOB_EVENT_LIBRARY[job?.id]||{work:[],general:CAREER_EVENTS};return{...raw,work:expandedJobWorkEvents(job,raw.work||[]),general:(raw.general&&raw.general.length?raw.general:CAREER_EVENTS)}}
function pickJobWorkStory(p,job){const pool=jobEventDef(job).work.map((text,i)=>({id:`${job?.id||'job'}_work_${i}`,text}));return pickFresh(p,pool,`job-work-${job?.id||'job'}`)?.text||pool[0]?.text||'仕事に取り組んだ。'}
function primaryJobStat(job){const entries=Object.entries(job?.req||{}).sort((a,b)=>b[1]-a[1]);return entries[0]?.[0]||'communication'}
function jobSideEventLines(p,spaceType){if(!p?.job)return[];const def=jobEventDef(p.job),story=pick(def.general),stat=primaryJobStat(p.job),trait=jobTraitKey(p.job),lines=[{text:`【${jobDisplayName(p.job)}】${story}`,tone:'good'}];if(spaceType==='plus'){const gain=Math.round((50000+rnd(90001))*jobWorkRewardMultiplier(p.job));p.cash+=gain;p.memory+=2;lines.push({text:`仕事につながる追い風！ +${money(gain)} / 思い出+2`,tone:'good'})}else if(spaceType==='grow'){const g=trait==='specialist'?3:2;applyStats(p,{[stat]:g});p.memory+=2;lines.push({text:`${paramLabel(stat)}+${g} / 思い出+2`,tone:'good'})}else if(spaceType==='social'){const extra=trait==='leadership'?2:1;applyStats(p,{communication:extra,[stat]:1});p.memory+=3;lines.push({text:`交流+${extra}${stat!=='communication'?` / ${paramLabel(stat)}+1`:''} / 思い出+3`,tone:'good'})}else{const g=trait==='specialist'?2:1;applyStats(p,{[stat]:g});p.memory+=3;lines.push({text:`${paramLabel(stat)}+${g} / 思い出+3`,tone:'good'})}return lines}
function shouldJobSideEvent(p,spaceType){if(!p?.job||state.stageIndex<4)return false;const rate={event:.18,plus:.20,grow:.18,social:.14}[spaceType]||0;return Math.random()<rate}
function spaceMeta(type){return SPACE_META[type]||SPACE_META.event}
function jobDisplayName(j){return !j?'':j.name}
function cardDisplay(c){if(!c)return{name:'',desc:''};if(isToga()&&c.id==='guard')return{name:'SAN値保険カード',desc:'所持中、金銭損失イベントで自動消費して損失を半減。正気度そのものは保証対象外。'};return{name:c.name,desc:c.desc}}

function speedScale(){if(location.search.includes('test=1'))return .02;return state?.settings?.speed==='fast'?.58:1}
function messageSpeedMode(){return state?.settings?.messageSpeed||'normal'}
function messageSpeedConfig(){return({slow:{char:46,hold:1950,min:3900,max:18000},normal:{char:32,hold:1450,min:2850,max:14000},fast:{char:20,hold:900,min:1850,max:9000}})[messageSpeedMode()]||{char:32,hold:1450,min:2850,max:14000}}
function currentMessageLineText(m=state?.message){const line=m?.lines?.[m.index];return typeof line==='string'?line:(line?.text||'…')}
function cpuMessageDelay(m){if(location.search.includes('test=1'))return 45;const cfg=messageSpeedConfig(),text=currentMessageLineText(m),chars=Array.from(text).length,punct=(text.match(/[、。！？!?…]/g)||[]).length;return clamp(chars*cfg.char+punct*95+cfg.hold,cfg.min,cfg.max)}
function typewriterDelay(ch){const base=messageSpeedConfig().char;if(/[。！？!?]/.test(ch))return base+125;if(/[、,]/.test(ch))return base+65;if(ch==='…')return base+45;return base}
function later(fn,ms){const t=setTimeout(fn,Math.max(20,Math.round(ms*speedScale())));hostTimers.push(t);return t}
function clearHostTimers(){hostTimers.forEach(clearTimeout);hostTimers=[]}
function saveSession(){
 if(intentionalDisconnect||!state||!roomCode||!localPlayerId)return;
 try{localStorage.setItem(SESSION_KEY,JSON.stringify({v:40,ts:Date.now(),isHost,roomCode,localPlayerId,state}))}catch(e){console.warn('session save failed',e)}
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
 if(!state)return;
 state.settings=state.settings||{};state.settings.variant='normal';state.settings.mode=state.settings.mode||'standard';state.settings.speed=state.settings.speed||'normal';state.settings.messageSpeed=state.settings.messageSpeed||'normal';
 state.players.forEach(p=>{ensureFamilyData(p);if(typeof p.cardUsedThisTurn!=='boolean')p.cardUsedThisTurn=false;syncCpuCharacterName(p)});state.recentContentKeys=Array.isArray(state.recentContentKeys)?state.recentContentKeys:[];
 if(state.phase!=='playing')return;
 // A choice reveal is only a short visual effect. If the host reloads during it,
 // reopen the same choice rather than leaving the room stuck in a transient state.
 if(state.pendingChoice?.revealing){state.pendingChoice.revealing=false;state.pendingChoice.selectedIndex=null}
 clearHostTimers();
 state.fx=state.fx||{roulette:null,move:null,stage:null,turn:null,landing:null,lastTurn:null};state.pendingPromotion=state.pendingPromotion||null;state.pendingGamble=state.pendingGamble||null;state.pendingCheck=state.pendingCheck||null;if(state.pendingPromotion&&!state.pendingPromotion.phase)state.pendingPromotion.phase=Number.isInteger(state.pendingPromotion.result)?'spinning':'await';if(state.pendingPromotion?.phase==='intro'&&!state.message){state.pendingPromotion.phase='await';state.pendingPromotion.introShown=true}if(state.pendingCheck?.phase==='intro'&&!state.message)state.pendingCheck.phase='await';
 // Timers disappear on reload. Convert transient animations to a safe resumable state.
 if(state.fx.lastTurn){state.fx.lastTurn=null;state.busy=false;setTimeout(()=>beginTurn(),80);return}
 if(state.fx.landing){
  const lf=state.fx.landing,p=state.players.find(x=>x.id===lf.playerId);state.fx.landing=null;state.busy=false;
  if(p){setTimeout(()=>{resolveLandingEffect(p,lf.wraps||0);broadcast()},80);return}
 }
 if(state.pendingPromotion){if(state.pendingPromotion.phase==='spinning'&&Number.isInteger(state.pendingPromotion.result)){state.busy=true;state.fx.roulette=state.fx.roulette||{id:state.pendingPromotion.id,playerId:state.pendingPromotion.playerId,result:state.pendingPromotion.result,kind:'promotion'};setTimeout(()=>finishPromotionRoulette(state.pendingPromotion?.id),220)}else{state.busy=false;state.fx.roulette=null}}
 if(state.pendingCheck){if(state.pendingCheck.phase==='spinning'&&Number.isInteger(state.pendingCheck.result)){state.busy=true;state.fx.roulette=state.fx.roulette||{id:state.pendingCheck.id,playerId:state.pendingCheck.playerId,result:state.pendingCheck.result,kind:'check'};setTimeout(()=>finishPendingCheck(state.pendingCheck?.id),220)}else{state.busy=false;state.fx.roulette=null}}
 if(state.pendingGamble){if(state.pendingGamble.phase==='spinning'&&Number.isInteger(state.pendingGamble.result)){state.busy=true;state.fx.roulette=state.fx.roulette||{id:state.pendingGamble.id,playerId:state.pendingGamble.playerId,result:state.pendingGamble.result,kind:'gamble'};setTimeout(()=>resolvePendingGamble(state.pendingGamble?.id),220)}else{state.busy=false;state.fx.roulette=null}}
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
  hostConn.on('data',msg=>{if(msg?.type==='welcome'){localPlayerId=msg.playerId;state=msg.state;render();saveSession();net(msg.resumed?'対戦に復帰しました':`参加済み：${state.players.length}/4人`)}else if(msg?.type==='snapshot'){state=msg.state;render();saveSession()}else if(msg?.type==='resultsClosed'){handleResultsClosed()}else if(msg?.type==='roomClosed'){handleRoomClosed(msg.reason)}else if(msg?.type==='reject'){net(msg.reason);if(!resuming)alert(msg.reason)}});
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
function handleResultsClosed(){intentionalDisconnect=true;clearSavedSession();resetLocalSessionState();show(els.home);refreshResumeCard();intentionalDisconnect=false;window.scrollTo({top:0,behavior:'smooth'})}
function showTopScreen(){
 if(!state)return;localHomeView=true;saveSession();show(els.home);refreshResumeCard();window.scrollTo({top:0,behavior:'smooth'});
}
function exitResultsToTitle(){
 if(state?.phase==='finished'&&!isHost)return;
 if(isHost)connections.forEach(c=>{try{if(c.open)c.send({type:'resultsClosed'})}catch(e){}});
 intentionalDisconnect=true;clearSavedSession();resetLocalSessionState();show(els.home);refreshResumeCard();intentionalDisconnect=false;window.scrollTo({top:0,behavior:'smooth'});
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
function randomAvailableAvatarId(exceptPlayerId=null){const used=usedAvatarIds(exceptPlayerId);const free=AVATAR_OPTIONS.filter(v=>!used.has(v.id));return pick(free||AVATAR_OPTIONS)?.id||(AVATAR_OPTIONS[0]?.id||'')}
function syncCpuCharacterName(p,force=false){
 if(!p?.cpu)return;
 const opt=avatarOption(p.avatarId)||AVATAR_OPTIONS.find(v=>v.src===p.avatar);
 if(!opt)return;
 const generic=/^(?:CPU|ＣＰＵ)\s*\d*$/i.test(String(p.name||'').trim());
 if(force||p.generatedCpu||generic||!p.name){p.name=opt.name;p.generatedCpu=true}
}
function setPlayerAvatar(p,id){const opt=avatarOption(id);if(!opt||!p)return false;p.avatarId=opt.id;p.avatar=opt.src;if(p.cpu)syncCpuCharacterName(p,true);return true}
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
 const idx=state?state.players.length:0;const avatarId=cpu?randomAvailableAvatarId():firstAvailableAvatarId(),displayName=cpu?avatarOption(avatarId).name:name;return{id:uuid(),name:displayName,color:COLORS[idx%COLORS.length],avatarId,avatar:avatarOption(avatarId).src,token:TOKENS[idx%TOKENS.length],cpu,cpuType,generatedCpu:!!cpu,cash:120000,job:null,jobRank:0,jobExp:0,jobHistory:{},education:'高校',educationChosen:false,educationWaitTurns:0,careerReviewDone:false,retireDone:false,salaryMultiplier:1,jobSalaryFactor:1,stats:{knowledge:1,fitness:1,charm:1,communication:1},memory:0,pos:0,laps:0,partner:null,affection:0,married:false,children:0,childProfiles:[],home:null,properties:[],treasures:[],cards:[],cardUsedThisTurn:false,nextRollBonus:0,nextRollFixed:null,guard:false,awards:0};
}
function newState(){return{phase:'lobby',players:[],turnIndex:0,stageIndex:0,stageTurnCount:0,pendingChoice:null,pendingBranch:null,message:null,pendingRollAdvance:null,pendingPromotion:null,pendingGamble:null,pendingCheck:null,busy:false,turnReady:false,lastRoll:null,log:['部屋を作成しました。'],settings:{variant:'normal',mode:'standard',speed:'normal',messageSpeed:'normal'},boards:[],version:1,fx:{roulette:null,move:null,stage:null,turn:null,landing:null,lastTurn:null,titleCut:null},awards:[],resultPrepared:false,finalRoundAnnounced:false,recentContentKeys:[]};}
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
function spacePalette(type){return({start:'#e3ad2f',plus:'#2387e8',minus:'#e33d48',grow:'#43a862',social:'#d96aaf',event:'#ed893c',chance:'#9565dd',gamble:'#b24a88',card:'#6671cc',payday:'#dba321',career:'#8a5b41',romance:'#e86d9b',property:'#41a8b5',treasure:'#d1a119',submap:'#e2822d',branch:'#f08b24',family:'#df865b',bigluck:'#f2b300',bigbad:'#9b2548'}[type]||'#7aa9df')}
// Each era has one meaningful fork. The normal route keeps a big-luck square in reach,
// but a big-bad square waits just before the merge. The shortcut skips the whole 6-square segment.
const BRANCH_CONFIG={
 baby:{at:13,altTo:20,kind:'shortcut',mainLabel:'通常ルート',altLabel:'近道',altNote:'6マスを飛ばして合流',luckAt:15,badAt:19},
 elementary:{at:13,altTo:20,kind:'shortcut',mainLabel:'通常ルート',altLabel:'近道',altNote:'6マスを飛ばして合流',luckAt:15,badAt:19},
 middle:{at:13,altTo:20,kind:'shortcut',mainLabel:'通常ルート',altLabel:'近道',altNote:'6マスを飛ばして合流',luckAt:15,badAt:19},
 high:{at:13,altTo:20,kind:'shortcut',mainLabel:'通常ルート',altLabel:'近道',altNote:'6マスを飛ばして合流',luckAt:15,badAt:19},
 young:{at:20,altTo:27,kind:'shortcut',mainLabel:'通常ルート',altLabel:'近道',altNote:'6マスを飛ばして合流',luckAt:22,badAt:26},
 mature:{at:20,altTo:27,kind:'shortcut',mainLabel:'通常ルート',altLabel:'近道',altNote:'6マスを飛ばして合流',luckAt:22,badAt:26},
 senior:{at:20,altTo:27,kind:'shortcut',mainLabel:'通常ルート',altLabel:'近道',altNote:'6マスを飛ばして合流',luckAt:22,badAt:26}
};
const BIG_SPACE_POSITIONS=[
 {luck:[15,31],bad:[19,38]},
 {luck:[15,33],bad:[19,39]},
 {luck:[15,30],bad:[19,37]},
 {luck:[15,32],bad:[19,39]},
 {luck:[22,34],bad:[26,40]},
 {luck:[22,32],bad:[26,38]},
 {luck:[22,31],bad:[26,39]}
];
function branchDef(si=state?.stageIndex||0){const id=STAGES[si]?.id;return id?BRANCH_CONFIG[id]||null:null}

const ROMANCE_EXTRA_POSITIONS={
 high:[8,28],
 young:[10,30],
 mature:[10,30]
};
function buildStageBoard(si,size){
 const st=STAGES[si],a=[];
 const early=['plus','social','grow','event','plus','grow','minus','social','event','plus'];
 const adult=['plus','career','social','minus','event','grow','romance','plus','property','card','career','event'];
 const senior=['social','plus','family','event','grow','minus','plus','chance','social','event'];
 for(let i=0;i<size;i++){
  let type=i===0?'start':(si<4?early[(i+si*2)%early.length]:si===6?senior[i%senior.length]:adult[(i+si)%adult.length]);
  if(i>0&&i%13===0)type='chance';
  if(i>0&&i%12===0)type='card';
  if(i>0&&i%23===0)type='submap';
  if(si>=1&&i>0&&i%29===0)type='treasure';
  if(si>=4&&i>0&&i%14===0)type='payday';
  if(si===6&&[9,18,29,36].includes(i))type='gamble';
  const bigPos=BIG_SPACE_POSITIONS[si]||BIG_SPACE_POSITIONS[4];
  if(bigPos.luck.includes(i))type='bigluck';
  else if(bigPos.bad.includes(i))type='bigbad';
  if(BRANCH_CONFIG[st.id]?.at===i)type='event';
  if((ROMANCE_EXTRA_POSITIONS[st.id]||[]).includes(i))type='romance';
  const meta=spaceMeta(type);
  a.push({i,type,title:meta[1],icon:meta[0],stage:st.id});
 }
 return a;
}
function boardPosStyle(i){const cols=8,row=Math.floor(i/cols),raw=i%cols,col=row%2===0?raw:cols-1-raw;return`--gc:${col+1};--gr:${row+1}`}
function boardCoord(i){const cols=8,row=Math.floor(i/cols),raw=i%cols,col=row%2===0?raw:cols-1-raw;return{row,col}}
function spaceDirClass(i,len){if(i>=len-1)return 'end';const a=boardCoord(i),b=boardCoord(i+1);if(b.row===a.row&&b.col>a.col)return 'dir-right';if(b.row===a.row&&b.col<a.col)return 'dir-left';return 'dir-down'}
const SALARY_MULTIPLIERS={1:1,2:1.35,3:1.75,4:2.5,5:5};
function salaryNow(p){return p.job?Math.round(p.job.base*(SALARY_MULTIPLIERS[p.jobRank]||1)*(Number(p.salaryMultiplier)||1)*(Number(p.jobSalaryFactor)||1)):0}
function partnerIncome(p){return p.married&&p.partner?Math.round(p.partner.income||0):0}
function partnerTypeDef(partnerOrType){const id=typeof partnerOrType==='string'?partnerOrType:partnerOrType?.type;return PARTNER_TYPES[id]||PARTNER_TYPES.steady}
function partnerTypeLabel(partner){const t=partnerTypeDef(partner);return `${t.icon} ${t.name}`}
function partnerLifeEventLines(p,chance=.38){
 ensureFamilyData(p);if(!p.married||!p.partner||Math.random()>chance)return[];
 const pool=PARTNER_LIFE_EVENTS[p.partner.type]||PARTNER_LIFE_EVENTS.steady;
 let candidates=pool.filter(e=>e.id!==p.partner.lastLifeEventId);if(!candidates.length)candidates=pool;
 const e=pick(candidates),lines=[];p.partner.lastLifeEventId=e.id;p.partner.lifeEventCount=(p.partner.lifeEventCount||0)+1;
 let detail=[];
 if(e.cash){const actual=cashChange(p,eventCash(e.cash));detail.push(`${actual>0?'+':''}${money(actual)}`)}
 if(e.incomeDelta){const before=Math.max(0,Math.round(p.partner.income||0));p.partner.income=Math.max(0,before+e.incomeDelta);detail.push(`配偶者収入 ${e.incomeDelta>0?'+':''}${money(e.incomeDelta)}`)}
 if(e.job){p.partner.job=e.job;detail.push(`仕事：${e.job}`)}
 if(e.stats){applyStats(p,e.stats);const t=Object.entries(e.stats).filter(([,v])=>v).map(([k,v])=>`${paramLabel(k)}${v>0?'+':''}${v}`).join(' / ');if(t)detail.push(t)}
 if(e.memory){p.memory+=e.memory;detail.push(`思い出+${e.memory}`)}
 p.partner.lastLifeNote=e.text;
 lines.push({text:`${p.partner.name}の人生にも変化があった。${e.text}`,tone:e.tone||'normal'});if(detail.length)lines.push({text:detail.join(' / '),tone:e.tone||'normal'});return lines
}
function marriedRomanceLines(p){
 ensureFamilyData(p);const t=partnerTypeDef(p.partner),pool=PARTNER_COUPLE_EVENTS[t.id]||PARTNER_COUPLE_EVENTS.steady,e=pick(pool),lines=[];let detail=[];
 if(e.cash){const actual=cashChange(p,eventCash(e.cash));detail.push(`${actual>0?'+':''}${money(actual)}`)}
 if(e.stats){applyStats(p,e.stats);const txt=Object.entries(e.stats).filter(([,v])=>v).map(([k,v])=>`${paramLabel(k)}${v>0?'+':''}${v}`).join(' / ');if(txt)detail.push(txt)}
 p.memory+=e.memory||0;if(e.memory)detail.push(`思い出+${e.memory}`);
 lines.push({text:`【${t.name}】${p.partner.name}と過ごした。${e.text}`,tone:'good'});if(detail.length)lines.push({text:detail.join(' / '),tone:'good'});lines.push(...partnerLifeEventLines(p,.32));return lines
}
function childList(p){return Array.isArray(p.childProfiles)?p.childProfiles:[]}
function childCount(p){return childList(p).length||(Number(p.children)||0)}
function adultChildIncome(p){return 0}
function familyIncome(p){return partnerIncome(p)}
function totalChildrenCount(){return state?.players?.reduce((sum,p)=>sum+childCount(p),0)||0}
function birthEventLines(p){if(!p?.married||totalChildrenCount()>=15)return null;ensureFamilyData(p);const c=makeChildProfile(p),pt=p.partner?partnerTypeDef(p.partner):null;p.childProfiles.push(c);p.children=p.childProfiles.length;p.cash-=80000;p.memory+=10;const lines=[{text:`${p.partner?.name||'パートナー'}との間に ${c.name} が誕生！`,tone:'good'},{text:`出産や育児の準備で -${money(80000)}。これから何かとお金がかかりそうだ。`,tone:'normal'},{text:`子ども${p.children}人 / 思い出+10`,tone:'good'}],guests=state.players.filter(x=>x.id!==p.id);let giftTotal=0;for(const giver of guests){const gift=(5+rnd(16))*10000;giver.cash-=gift;p.cash+=gift;giftTotal+=gift;lines.push({text:`${giver.name}から出産祝い ${money(gift)}！`,tone:'good'})}if(guests.length)lines.push({text:`出産祝い合計 +${money(giftTotal)}`,tone:'good'});if(pt?.id==='family'){p.memory+=2;lines.push({text:'家庭派のパートナーらしく、家族みんなで新しい生活の準備を楽しんだ。思い出+2',tone:'good'})}return lines}
function maybeBirthOnSpace(p,rate){return p?.married&&Math.random()<rate?birthEventLines(p):null}
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
function availablePartnerPortraits(ignoreEntity=null){
 const used=usedFamilyPortraits(ignoreEntity),free=ALL_EXISTING_CHARACTER_ART.filter(x=>!used.has(x.src)),friendly=free.filter(x=>x.family);
 return friendly.length?friendly:free;
}
function nextPartnerPortrait(ignoreEntity=null,extraUsed=new Set()){
 let pool=availablePartnerPortraits(ignoreEntity).filter(x=>!extraUsed.has(x.src));
 if(!pool.length)pool=ALL_EXISTING_CHARACTER_ART.filter(x=>!extraUsed.has(x.src));
 return pick(pool)?.src||AVATARS[0];
}
function makeChildProfile(p){
 const usedNames=new Set((state?.players||[]).flatMap(x=>childList(x).map(c=>c.name))),names=CHILD_NAMES.filter(n=>!usedNames.has(n));
 return{id:uuid(),name:pick(names.length?names:CHILD_NAMES),avatar:nextFamilyPortrait(),age:0,adult:false,job:null,income:0};
}
function ensureCareerData(p){if(!p)return;p.jobHistory=(p.jobHistory&&typeof p.jobHistory==='object')?p.jobHistory:{};if(!Number.isFinite(Number(p.jobExp)))p.jobExp=0}
function careerExpFor(p,jobId){ensureCareerData(p);return Math.max(p.job?.id===jobId?(Number(p.jobExp)||0):0,Number(p.jobHistory?.[jobId])||0)}
function careerPathEligible(p,j){if(!j?.careerOnly)return true;if(!p?.job||!j.prereq)return false;return(j.prereq.jobs||[]).some(id=>careerExpFor(p,id)>=(j.prereq.exp||0))}
function careerPrereqText(j){if(!j?.careerOnly||!j.prereq)return'';const names=(j.prereq.jobs||[]).map(id=>JOBS.find(x=>x.id===id)?.name||id);return`${names.join('・')}のいずれかで仕事経験${j.prereq.exp}pt以上`}
function ensureFamilyData(p){
 if(!p)return;
 ensureCareerData(p);
 if(!Number.isFinite(Number(p.salaryMultiplier))||Number(p.salaryMultiplier)<=0)p.salaryMultiplier=1;
 if(!Number.isFinite(Number(p.jobSalaryFactor))||Number(p.jobSalaryFactor)<=0)p.jobSalaryFactor=1;
 if(p.partner?.id){
  const def=PARTNERS.find(x=>x.id===p.partner.id);
  if(def)p.partner={...def,...p.partner,type:p.partner.type||def.type,job:p.partner.job||def.job,income:p.partner.income??def.income};
  if(!p.partner.avatar||isLegacyGeneratedFamilyArt(p.partner.avatar)||RETIRED_AVATAR_SRCS.has(p.partner.avatar))p.partner.avatar=nextPartnerPortrait(p.partner);
 }
 if(!Array.isArray(p.childProfiles)){
  p.childProfiles=[];const legacy=Math.max(0,Number(p.children)||0);
  for(let i=0;i<legacy;i++)p.childProfiles.push(makeChildProfile(p));
 }
 for(const c of p.childProfiles)if(!c.avatar||isLegacyGeneratedFamilyArt(c.avatar)||RETIRED_AVATAR_SRCS.has(c.avatar))c.avatar=nextFamilyPortrait(c);
 p.children=p.childProfiles.length;
}
function growChildrenForStage(stageIndex){return[]}
function residenceProperty(p){return (p?.properties||[]).map(id=>PROPS.find(x=>x.id===id)).filter(Boolean).sort((a,b)=>(b.value||0)-(a.value||0))[0]||null}
function passiveIncome(p){return p.properties.reduce((s,id)=>s+(PROPS.find(x=>x.id===id)?.income||0),0)}
function isMajorSpaceType(type){return ['start','payday','career','romance','property','family','treasure','submap','branch','bigluck','bigbad'].includes(type)}
function collectIncomePass(p){ensureFamilyData(p);const own=salaryNow(p),allowance=stableJobAllowance(p),prop=passiveIncome(p),fam=familyIncome(p),total=own+allowance+prop+fam;if(total)p.cash+=total;if(p.job)p.jobExp+=1;return{own,allowance,prop,fam,total,partner:partnerIncome(p)}}
function incomePassLines(p,passes){const count=passes.length,total=passes.reduce((n,x)=>n+x.total,0),own=passes.reduce((n,x)=>n+x.own,0),allowance=passes.reduce((n,x)=>n+(x.allowance||0),0),partner=passes.reduce((n,x)=>n+x.partner,0),prop=passes.reduce((n,x)=>n+x.prop,0),lines=[];if(total){lines.push({text:`収入マスを${count>1?count+'回 ':''}通過。世帯の定期収入 +${money(total)}`,tone:'good'});const parts=[own?`本人給料 ${money(own)}`:'',allowance?`安定手当 ${money(allowance)}`:'',partner?`配偶者収入 ${money(partner)}`:'',prop?`物件収入 ${money(prop)}`:''].filter(Boolean);if(parts.length)lines.push({text:parts.join(' / ')})}else lines.push({text:'収入マスを通過したが、まだ定期収入はない。'});if(p.job)lines.push({text:`仕事経験 +${count}`});return lines}
function finishMoveAfterIncomePass(p,wraps,passes,routeLines=[]){if(!passes.length&&!routeLines.length){resolveLanding(p,wraps);return}const finalSpace=stageBoard()[p.pos],exactPayday=finalSpace?.type==='payday',after=exactPayday?{type:'completeTurn'}:{type:'resolveLandingAfterIncome',playerId:p.id,wraps},lines=[...(exactPayday?lapBonus(p,wraps):[]),...routeLines,...(passes.length?incomePassLines(p,passes):[])];if(exactPayday&&p.job){p.jobExp+=2;lines.push({text:'収入マスぴったり停止ボーナス！ 仕事経験 +2',tone:'good'})}else if(exactPayday&&!p.job){lines.push({text:'収入マスぴったり停止！ まだ仕事に就いていないため仕事経験ボーナスはなし。'})}const rank=passes.length||exactPayday?rankUpCheck(p):null;if(rank?.kind==='success')lines.push({text:rank.text,tone:'good'});else if(rank?.kind==='blocked'||rank?.kind==='progress')lines.push({text:promotionProgressText(p,rank)});const speaker=exactPayday?'収入マス到着':routeLines.length?'分かれ道の結果':'収入マス通過';if(rank?.kind==='roulette'){beginPromotionRoulette(p,rank,lines,speaker,after);return}state.busy=false;setMessage(p.id,speaker,lines,after)}
function resolveChosenPayday(p){
 const pass=collectIncomePass(p),lines=incomePassLines(p,[pass]);
 if(p.job){p.jobExp+=2;lines.push({text:'収入マスぴったり相当のボーナス！ 仕事経験 +2',tone:'good'})}
 else lines.push({text:'まだ仕事に就いていないため仕事経験ボーナスはなし。'});
 const rank=rankUpCheck(p);
 if(rank?.kind==='success')lines.push({text:rank.text,tone:'good'});
 else if(rank?.kind==='blocked'||rank?.kind==='progress')lines.push({text:promotionProgressText(p,rank)});
 if(rank?.kind==='roulette'){beginPromotionRoulette(p,rank,lines,'収入マス',{type:'completeTurn'});return}
 setMessage(p.id,'収入マス',lines,{type:'completeTurn'});
}

function assetScore(p){return p.cash+p.properties.reduce((s,id)=>s+(PROPS.find(x=>x.id===id)?.value||0),0)+p.treasures.reduce((s,t)=>s+(t.appraised||0),0)+p.awards}
function applyStats(p,d={}){for(const k of ['knowledge','fitness','charm','communication'])p.stats[k]=clamp(p.stats[k]+(d[k]||0),0,30)}
function debtStatPenalty(p,k){return p?.cash<0&&(k==='charm'||k==='communication')?5:0}
function effectiveStat(p,k){return clamp((Number(p?.stats?.[k])||0)-debtStatPenalty(p,k),0,30)}
function romanceCharmBonus(p){const c=effectiveStat(p,'charm'),chance=clamp((c-4)*0.055,0,.85);return Math.random()<chance?1:0}
function affectionGain(p,min,max){return min+rnd(Math.max(1,max-min+1))+romanceCharmBonus(p)}
function jobEntryRequirements(j){const req={};for(const [k,v] of Object.entries(j?.req||{}))req[k]=Math.ceil((v+2)*1.2);return req}
function jobEligible(p,j){return careerPathEligible(p,j)&&Object.entries(jobEntryRequirements(j)).every(([k,v])=>effectiveStat(p,k)>=v)}
function reqText(r){return Object.entries(r).map(([k,v])=>`${{knowledge:'知力',fitness:'体力',charm:'魅力',communication:'交流'}[k]} ${v}`).join(' / ')}
function paramLabel(k){return{knowledge:'知力',fitness:'体力',charm:'魅力',communication:'交流'}[k]||k}
function spaceIcon(type){return SPACE_ICONS[type]||SPACE_ICONS.event}
function promotionRequirements(p,targetRank){
 if(!p.job)return null;
 const abilityOffset={2:1,3:2,4:4,5:5}[targetRank]??99;
 const abilityFloor={2:4,3:6,4:9,5:12}[targetRank]??99;
 const entry=jobEntryRequirements(p.job),entryStep={2:1,3:2,4:4,5:6}[targetRank]??99,req={};
 for(const [k,v] of Object.entries(p.job.req||{})){
  const oldRule=Math.ceil(Math.max(v+abilityOffset,abilityFloor)*1.2);
  req[k]=Math.min(30,Math.max(oldRule,(entry[k]||0)+entryStep));
 }
 // 仕事経験は昇格で消費せず、その職業での累積値として扱う。
 // Lv2=5、Lv3=12、Lv4=21、Lv5=33。仕事経験は昇格しても消費しない。
 const cumulativeExpTable={2:5,3:12,4:21,5:33};
 return{req,needExp:cumulativeExpTable[targetRank]||999};
}
function promotionReqText(req){return Object.entries(req||{}).map(([k,v])=>`${paramLabel(k)}${v}`).join('・')}
function promotionProgressText(p,check){
 if(!p?.job||!check?.plan)return'';
 const plan=check.plan,targetRank=check.targetRank||p.jobRank+1,parts=[];
 const curExp=Math.max(0,Number(p.jobExp)||0),needExp=Math.max(0,Number(plan.needExp)||0),expLeft=Math.max(0,needExp-curExp);
 parts.push(`仕事経験 ${curExp}/${needExp}${expLeft?`（あと${expLeft}）`:' ✓'}`);
 for(const [k,v] of Object.entries(plan.req||{})){
  const cur=effectiveStat(p,k),left=Math.max(0,v-cur);
  parts.push(`${paramLabel(k)} ${cur}/${v}${left?`（あと${left}）`:' ✓'}`);
 }
 return`次の昇格条件（Lv.${targetRank}）：${parts.join(' / ')}`;
}
function rankUpCheck(p){
 if(!p.job||p.jobRank>=5)return null;
 const targetRank=p.jobRank+1,plan=promotionRequirements(p,targetRank);if(!plan)return null;
 if(p.jobExp<plan.needExp)return{kind:'progress',targetRank,plan};
 const meets=Object.entries(plan.req).every(([k,v])=>effectiveStat(p,k)>=v);
 if(!meets)return{kind:'blocked',targetRank,plan};
 const needsRoulette=targetRank>=4||(targetRank>=3&&p.job.tag==='risk');
 if(!needsRoulette){
  p.jobRank=targetRank;const bonus=targetRank*30000;p.cash+=bonus;
  return{kind:'success',text:`${jobDisplayName(p.job)}がランク${p.jobRank}にアップ！ 昇格祝い +${money(bonus)}`};
 }
 const excess=Object.entries(plan.req).reduce((sum,[k,v])=>sum+Math.max(0,effectiveStat(p,k)-v),0);
 // 上位昇格ほど厳しい。必要能力を上回るほど成功枠が増える。
 const base=targetRank===3?6:targetRank===4?5:3;
 const successMax=clamp(base+(p.job.tag==='risk'?-1:0)+Math.floor(excess/2),2,9);
 return{kind:'roulette',targetRank,needExp:plan.needExp,successMax,plan};
}
function finishPromotionSuccess(p,targetRank,needExp){
 p.jobRank=targetRank;const bonus=targetRank*30000;p.cash+=bonus;
 return`${jobDisplayName(p.job)}がランク${targetRank}にアップ！ 昇格祝い +${money(bonus)}`;
}
function activatePendingPromotion(id){const pr=state.pendingPromotion;if(!pr||pr.id!==id)return;pr.phase='await';pr.introShown=true;state.busy=false;state.fx.roulette=null}
function beginPromotionRoulette(p,check,lines,speaker,after={type:'completeTurn'}){
 const id=uuid();state.turnReady=false;state.busy=false;
 state.pendingPromotion={id,playerId:p.id,targetRank:check.targetRank,needExp:check.needExp,successMax:check.successMax,phase:'intro',lines:[...(lines||[])],speaker,after,introShown:false};
 state.fx.roulette=null;
 const intro=[...(lines||[]),{text:`昇格条件をすべて満たした！ ${jobDisplayName(p.job)} Lv.${check.targetRank}への昇格チャンス。`,tone:'good'},{text:`昇格ルーレットで1〜${check.successMax}が出れば成功。メッセージを進めたあと、ルーレットを回そう。`}];
 setMessage(p.id,speaker||'昇格チャレンジ',intro,{type:'activatePendingPromotion',id});
 broadcast();
}
function startPendingPromotionRoll(playerId){const pr=state.pendingPromotion;if(!pr||pr.playerId!==playerId||pr.phase!=='await')return;pr.result=1+rnd(10);pr.phase='spinning';state.busy=true;state.fx.roulette={id:pr.id,playerId:pr.playerId,result:pr.result,kind:'promotion'};broadcast();const t=setTimeout(()=>finishPromotionRoulette(pr.id),Math.max(1900,Math.round(2350*speedScale())));hostTimers.push(t)}
function finishPromotionRoulette(id){
 const pr=state?.pendingPromotion;if(!pr||pr.id!==id)return;const p=state.players.find(x=>x.id===pr.playerId);if(!p){state.pendingPromotion=null;state.fx.roulette=null;state.busy=false;broadcast();return}
 const ok=pr.result<=pr.successMax,lines=pr.introShown?[]:[...(pr.lines||[])];
 lines.push({text:`昇格ルーレットは「${pr.result}」！`,tone:ok?'good':'bad'});
 if(ok)lines.push({text:finishPromotionSuccess(p,pr.targetRank,pr.needExp),tone:'good'});
 else lines.push({text:'今回は昇格を逃した。経験は残るので、次の機会に再挑戦できる。',tone:'bad'});
 state.pendingPromotion=null;state.fx.roulette=null;state.busy=false;setMessage(p.id,pr.speaker||'昇格チャレンジ',lines,pr.after||{type:'completeTurn'});broadcast();
}
function finishWithPromotion(p,rank,baseLines,speaker,finish){
 if(!rank){finish(baseLines,speaker);return true}
 if(rank.kind==='success'){finish([...baseLines,{text:rank.text,tone:'good'}],speaker);return true}
 if(rank.kind==='blocked'||rank.kind==='progress'){finish([...baseLines,{text:promotionProgressText(p,rank)}],speaker);return true}
 if(rank.kind==='roulette'){beginPromotionRoulette(p,rank,baseLines,speaker);return true}
 return false
}

function playerCard(p,active=false,lobby=false){
 const c=p.cpu?`${cpuDef(p.cpuType).icon} CPU`:'👤 人間',job=p.job?`${jobDisplayName(p.job)} Lv.${p.jobRank}`:'未就職';
 const tokenBadge=lobby?'':`<div class="player-token-badge" title="${esc(p.name)}のコマ"><img src="${esc(p.token||TOKENS[0])}" alt="${esc(p.name)}の車コマ"></div>`;
 return `<div class="player-card ${active?'active':''} ${lobby?'lobbycard':''}" style="border-color:${p.color};--pc:${p.color}">${tokenBadge}<div class="player-card-top"><div class="player-avatar-thumb"><img class="thumb-face" src="${esc(p.avatar||AVATARS[0])}" alt=""></div><div class="player-card-main"><div class="player-name">${esc(p.name)}</div><div class="player-meta"><span class="pill">${c}</span></div>${lobby?`<div class="statsline">${p.cpu?esc(cpuDef(p.cpuType).name):'プレイヤー'} / 初期資金 ${money(p.cash)}</div>`:`<div class="statsline">${esc(job)} / ${money(p.cash)}${p.cash<0?' <span class="debt-text">借金</span>':''}<br>${p.married?'💍結婚':'未婚'}・子${childCount(p)}人・物件${p.properties.length}</div><div class="param-grid"><span class="param">🧠 知力 ${p.stats.knowledge}</span><span class="param">💪 体力 ${p.stats.fitness}</span><span class="param">✨ 魅力 ${effectiveStat(p,'charm')}${p.cash<0?'（借金-5）':''}</span><span class="param">🗣 交流 ${effectiveStat(p,'communication')}${p.cash<0?'（借金-5）':''}</span></div>`}</div></div></div>`}

let boardPan={x:0,y:0,anchorKey:'',dragging:false,startX:0,startY:0,baseX:0,baseY:0};
let mapOverview=false;
function canKeepMapOverview(){const branchMode=!!state?.pendingBranch;return !!(state&&state.phase==='playing'&&(!state.busy||branchMode)&&!state.message&&!state.pendingChoice&&!state.pendingRollAdvance&&!state.fx?.turn&&!state.fx?.move&&!state.fx?.landing&&!state.fx?.stage&&!state.fx?.lastTurn)}
function renderMapOverviewButton(){if(!els.mapOverviewBtn)return;const ok=!!(state&&state.phase==='playing'&&canKeepMapOverview());els.mapOverviewBtn.classList.toggle('active',mapOverview);els.mapOverviewBtn.textContent=mapOverview?'↩ 元の表示':'🗺 MAP全体';els.mapOverviewBtn.disabled=!ok&&!mapOverview;els.mapOverviewBtn.setAttribute('aria-pressed',mapOverview?'true':'false')}
function toggleMapOverview(){if(mapOverview){mapOverview=false;requestAnimationFrame(()=>focusBoardCamera());renderMapOverviewButton();return}if(!canKeepMapOverview())return;mapOverview=true;boardPan.dragging=false;resetBoardPan(`overview:${state.stageIndex}`);requestAnimationFrame(()=>focusBoardCamera(true));renderMapOverviewButton()}
function resetBoardPan(nextKey=''){boardPan.x=0;boardPan.y=0;boardPan.anchorKey=nextKey||''}
function canDragBoard(){const branchMode=!!state?.pendingBranch;return !!(state&&state.phase==='playing'&&!mapOverview&&(!state.busy||branchMode)&&!state.message&&!state.pendingChoice&&!state.pendingRollAdvance&&!state.fx?.turn&&!state.fx?.landing)}
function updateBoardDragUi(){if(!els.boardPanel)return;els.boardPanel.classList.toggle('drag-ready',canDragBoard());els.boardPanel.classList.toggle('dragging',!!boardPan.dragging)}
function setupBoardDrag(){if(!els.boardPanel||els.boardPanel.dataset.dragReady)return;els.boardPanel.dataset.dragReady='1';const end=()=>{if(!boardPan.dragging)return;boardPan.dragging=false;updateBoardDragUi()};els.boardPanel.addEventListener('pointerdown',e=>{if(!canDragBoard())return;boardPan.dragging=true;boardPan.startX=e.clientX;boardPan.startY=e.clientY;boardPan.baseX=boardPan.x;boardPan.baseY=boardPan.y;try{els.boardPanel.setPointerCapture(e.pointerId)}catch(err){}updateBoardDragUi();e.preventDefault()});els.boardPanel.addEventListener('pointermove',e=>{if(!boardPan.dragging)return;boardPan.x=boardPan.baseX+(e.clientX-boardPan.startX);boardPan.y=boardPan.baseY+(e.clientY-boardPan.startY);focusBoardCamera(true)});els.boardPanel.addEventListener('pointerup',end);els.boardPanel.addEventListener('pointercancel',end);updateBoardDragUi()}
function render(){if(!state)return;saveSession();if(localHomeView){show(els.home);hideTitleCut();refreshResumeCard();updateBoardDragUi();if(isHost)maybeRunCpu();return}if(state.phase==='lobby'){show(els.lobby);hideTitleCut();renderLobby()}else if(state.phase==='titlecut'){show(els.home);renderTitleCut()}else if(state.phase==='playing'){show(els.game);renderGame();renderTitleCut()}else if(state.phase==='finished'){prepareResults();show(els.result);hideTitleCut();renderResult()}updateBoardDragUi();updateBgmForState();if(isHost)maybeRunCpu()}
function lobbyEntryCard(p){
 const mine=p.id===localPlayerId&&!p.cpu,kind=p.cpu?`${cpuDef(p.cpuType).icon} ${cpuDef(p.cpuType).name} CPU`:'👤 プレイヤー',opt=avatarOption(p.avatarId);
 return `<div class="lobby-entry-card ${mine?'mine':''}" style="--pc:${p.color}"><div class="lobby-entry-top"><div class="lobby-mini-avatar"><img src="${esc(p.avatar||AVATARS[0])}" alt=""></div><div class="lobby-entry-heading"><div class="lobby-entry-name">${esc(p.name)}</div><div class="lobby-entry-kind">${esc(kind)}</div></div></div><div class="lobby-character-stage"><img class="lobby-character-full" src="${esc(p.avatar||AVATARS[0])}" alt="${esc(opt.name)}"></div><div class="lobby-entry-info"><div class="lobby-entry-money">初期資金 ${money(p.cash)}</div>${avatarSelectHtml(p)}${isHost&&p.cpu?`<button class="btn small warn cpu-remove" data-id="${p.id}" style="width:100%">CPU削除</button>`:''}</div></div>`;
}
function renderLobby(){state.players?.forEach(p=>syncCpuCharacterName(p));state.settings=state.settings||{};state.settings.variant='normal';state.settings.mode=state.settings.mode||'standard';state.settings.speed=state.settings.speed||'normal';state.settings.messageSpeed=state.settings.messageSpeed||'normal';state.players.forEach((p,i)=>{if(!p.avatarId){const opt=AVATAR_OPTIONS.find(v=>v.src===p.avatar)||AVATAR_OPTIONS[i%AVATAR_OPTIONS.length];p.avatarId=opt.id;p.avatar=opt.src}});els.roomCode.textContent=roomCode;els.hostLobby.classList.toggle('hidden',!isHost);els.start.classList.toggle('hidden',!isHost);if(els.variant)els.variant.disabled=!isHost;els.mode.disabled=!isHost;els.speed.disabled=!isHost;if(els.messageSpeed)els.messageSpeed.disabled=!isHost;if(els.variant)els.variant.value=state.settings.variant;els.mode.value=state.settings.mode;els.speed.value=state.settings.speed;if(els.messageSpeed)els.messageSpeed.value=state.settings.messageSpeed;els.modeInfo.textContent=modeDescription(state.settings.mode)+'　/　キャラクターは重複なし・早い者勝ち';els.lobbyPlayers.innerHTML=state.players.map(lobbyEntryCard).join('')+Array.from({length:Math.max(0,4-state.players.length)},()=>'<div class="lobby-empty-slot"><div>参加待ち…<br><span class="sub">キャラクターがここに表示されます</span></div></div>').join('');els.start.disabled=state.players.length<1;els.addCpu.disabled=!isHost||state.players.length>=4;els.fillCpu.disabled=!isHost||state.players.length>=4;net(isHost?`ホスト中：${state.players.length}/4人`:`参加済み：${state.players.length}/4人`);document.querySelectorAll('.cpu-remove').forEach(b=>b.addEventListener('click',()=>removeCpu(b.dataset.id)));document.querySelectorAll('[data-avatar-edit]').forEach(b=>b.addEventListener('click',()=>openAvatarPicker(b.dataset.avatarEdit)));if(avatarPickerTargetId&&!els.avatarPicker.classList.contains('hidden'))renderAvatarPicker()}
function pendingInteractiveRoll(){
 if(state?.pendingPromotion){const x=state.pendingPromotion;return{action:'promotionRoll',ownerId:x.playerId,label:'昇格判定',ready:x.phase==='await',hint:`Lv.${x.targetRank}昇格：1〜${x.successMax}で成功`}}
 if(state?.pendingCheck){const x=state.pendingCheck;let hint='';if(x.kind==='workExp')hint='仕事経験：1〜6→+1pt / 7〜9→+2pt / 10→+3pt';else if(x.kind==='jobPayReview')hint='給与査定：1〜2→給料-10% / 3〜7→変化なし / 8〜10→給料+10%';else if(x.kind==='proposal')hint=x.successMax>=10?'プロポーズ成功確定':`プロポーズ：1〜${x.successMax}で成功（${x.successMax*10}%）`;else if(x.kind==='retireChallenge')hint='第二の挑戦：1〜6で成功';return{action:'checkRoll',ownerId:x.playerId,label:x.label||'判定',ready:x.phase==='await',hint}}
 if(state?.pendingGamble){const x=state.pendingGamble;return{action:'gambleRoll',ownerId:x.playerId,label:x.label||'大勝負',ready:x.phase!=='spinning',hint:`${x.label||'大勝負'}：1〜${x.successMax}で成功`}}
 return null
}
function renderGame(){
 state.players?.forEach(p=>syncCpuCharacterName(p));
 if(mapOverview&&!canKeepMapOverview())mapOverview=false;
 const st=stageDef(),cp=currentPlayer(),rounds=modeDef().rounds[state.stageIndex],round=Math.min(rounds,Math.floor(state.stageTurnCount/state.players.length)+1),theme=STAGE_THEME[st.id];
 document.documentElement.style.setProperty('--stageA',theme[0]);document.documentElement.style.setProperty('--stageB',theme[1]);
 document.documentElement.style.setProperty('--boardBg',`url('${STAGE_BACKGROUNDS[st.id]||STAGE_BACKGROUNDS.young}')`);
 document.body.dataset.lifeVariant=state.settings?.variant||'normal';els.eraIcon.textContent=st.icon;els.eraName.textContent=st.name;els.eraFlavor.textContent=stageFlavor(st.id);if(els.variantBadge){els.variantBadge.classList.toggle('hidden',!isToga());els.variantBadge.textContent=isToga()?'トガモード':'通常モード'};els.roundText.textContent=`第${round}/${rounds}ラウンド`;els.fieldInfo.textContent=`専用${stageBoard().length}マスマップ・規定ラウンド終了まで周回します`;els.roundDots.innerHTML=Array.from({length:rounds},(_,i)=>`<span class="round-dot ${i<round-1?'done':i===round-1?'now':''}"></span>`).join('');
 els.gamePlayers.innerHTML=state.players.map((p,i)=>playerCard(p,i===state.turnIndex)).join('');renderBoard();renderBranchMobilePanel();els.turnName.textContent=cp?.name||'-';els.turnStage.textContent=`${st.icon} ${st.name}`;const mine=cp&&cp.id===localPlayerId&&!cp.cpu,rollWait=state.pendingRollAdvance,branchWait=state.pendingBranch,rollTask=pendingInteractiveRoll(),rollOwner=rollTask&&state.players.find(x=>x.id===rollTask.ownerId),rollMine=!!(rollTask&&rollOwner?.id===localPlayerId&&!rollOwner?.cpu);els.rollBtn.disabled=rollTask?(!rollMine||!rollTask.ready||!!state.message||!!state.pendingChoice||!!branchWait||!!rollWait||state.busy):(!mine||!state.turnReady||state.busy||!!state.message||!!state.pendingChoice||!!branchWait||!!rollWait);els.rollBtn.textContent=rollTask?(rollTask.ready?(rollMine?`${rollTask.label}を回す`:`${rollOwner?.name||'相手'}が${rollTask.label}中…`):`${rollTask.label}中…`):mine?'ルーレットを回す':cp?.cpu?'CPUが考え中…':'相手の手番です';els.hint.textContent=rollTask?`${rollTask.hint}${rollTask.ready?(rollMine?' / ルーレットを回してください':' / 相手の操作待ち'): ' / 判定中…'}`:branchWait?(mine?'画面下部から進むルートを選んでください':`${cp?.name||'相手'}がルートを選択中`):rollWait?(rollWait.ready?(mine?'盤面をクリック / タップして進みます':`${cp?.name||'相手'}の操作待ち`):'出目を確認中…'):state.message?'メッセージ進行中':state.pendingChoice?'選択中':state.busy?'演出中…':mine&&state.turnReady?'あなたの手番です':cp?.cpu?'CPUの手番です':'手番を待っています';els.log.innerHTML=state.log.map(x=>`<div class="logline">${esc(x)}</div>`).join('');
 const pp=cp||state.players[0];
 if(pp){els.portraitImg.src=pp.avatar||AVATARS[0];els.portraitName.textContent=pp.name;els.portraitRole.textContent=pp.job?`${jobDisplayName(pp.job)} Lv.${pp.jobRank}`:(pp.cpu?`${cpuDef(pp.cpuType).name} CPU`:'プレイヤー');els.portraitBadge.textContent=mine?'YOUR TURN':'NOW';els.portraitStats.innerHTML=`<div class="portrait-stat">🧠 <span>知力</span><strong>${pp.stats.knowledge}</strong></div><div class="portrait-stat">💪 <span>体力</span><strong>${pp.stats.fitness}</strong></div><div class="portrait-stat">✨ <span>魅力</span><strong>${effectiveStat(pp,'charm')}${pp.cash<0?' (-5)':''}</strong></div><div class="portrait-stat">🗣 <span>交流</span><strong>${effectiveStat(pp,'communication')}${pp.cash<0?' (-5)':''}</strong></div>`;ensureFamilyData(pp);els.portraitSub.innerHTML=`<strong>${money(pp.cash)}</strong>${pp.cash<0?' <span class="debt-text">借金</span>':''} / 思い出 ${pp.memory}pt${pp.partner?`<br>パートナー：${esc(pp.partner.name)}【${esc(partnerTypeDef(pp.partner).name)}】 好感度${pp.affection}${pp.married?`・結婚 / 収入 ${money(partnerIncome(pp))}`:''}`:''}${childCount(pp)?`<br>家族：子ども ${childCount(pp)}人${adultChildIncome(pp)?` / 成人子収入 ${money(adultChildIncome(pp))}`:''}`:''}`}
 setupBoardDrag();renderMapOverviewButton();renderCards();renderAssets();renderChoice();renderMessage();renderCurtain();renderTurnBanner();renderLastTurnBanner();renderRollWait();renderLandingPop();handleFx();
}
function canInspectSpace(){return !!(state&&state.phase==='playing'&&!state.message&&!state.pendingChoice&&!state.fx?.move&&!state.pendingBranch&&!state.pendingRollAdvance&&!state.fx?.landing)}
function closeSpaceDetail(){els.spaceDetail?.classList.add('hidden')}
function spaceDescription(type){
 const descriptions={
  start:'この時代のスタート地点。ここを基準に盤面を周回します。',
  event:'日常のさまざまな出来事が起こります。良いことも悪いこともあります。',
  plus:'基本的にうれしい出来事や、少し得する出来事が起こります。',
  minus:'出費や困りごとなど、少し痛い出来事が起こります。',
  grow:'知力・体力・魅力・交流など、能力が伸びる出来事が起こりやすいマスです。',
  social:'他のプレイヤーとの交流や、人付き合いに関する出来事が起こりやすいマスです。',
  chance:'何が起こるか分からない特別なマス。大きな幸運や珍しい出来事が起こることがあります。',
  gamble:'円熟期限定の大勝負マス。小さく遊ぶか、大きく張るか、一発逆転を狙うかを選び、最後は運で結果が決まります。',
  payday:'通過すると給料・家族収入・物件収入を受け取り、仕事経験と昇格チャンスも得られます。ぴったり止まるとさらに仕事経験+2。',
  card:'役立つカードを1枚手に入れます。カード枠がいっぱいの場合は入手できません。',
  treasure:'価値の分からないお宝を買うかどうか選べます。購入で借金になるのはOKですが、すでに借金中だと購入できません。',
  submap:'寄り道先を選んで、いつもと少し違う出来事を楽しめます。',
  romance:'出会い・デート・プロポーズなど、恋愛に関する出来事が起こります。',
  property:'物件を購入するチャンス。購入で借金になるのはOKですが、すでに借金中だと購入できません。物件は収入と最終資産に加算されます。',
  career:'仕事中の出来事が起こります。就職中なら臨時収入・仕事経験・昇格チャンスを得られます。',
  family:'結婚後の家族や子どもに関する出来事が起こります。',
  branch:'ルートの分岐点です。ここから先へ進む時に、2つの道から進行ルートを選びます。',
  bigluck:'かなり大きな幸運が起こる特別なマス。大きな収入や成長が期待できます。',
  bigbad:'かなり大きな不幸が起こる特別なマス。高額な損失や痛い出来事に注意。'
 };
 return descriptions[type]||'このマスに止まると、そのマスに応じた出来事が起こります。'
}
function openSpaceDetail(spaceIndex){
 if(!canInspectSpace())return;
 const s=stageBoard().find(x=>String(x.i)===String(spaceIndex));if(!s||!els.spaceDetail)return;
 const meta=spaceMeta(s.type),label=`${meta[1]}マス`;
 els.spaceDetailIcon.innerHTML=`<img src="${spaceIcon(s.type)}" alt="">`;els.spaceDetailTitle.textContent=label;els.spaceDetailText.textContent=spaceDescription(s.type);els.spaceDetail.classList.remove('hidden')
}
function bindSpaceInspectors(){
 document.querySelectorAll('.map-node[data-space-index]').forEach(n=>{
  n.classList.toggle('inspectable',canInspectSpace());
  n.addEventListener('pointerdown',e=>{if(!canInspectSpace())return;e.stopPropagation()});
  n.addEventListener('click',e=>{if(!canInspectSpace())return;e.preventDefault();e.stopPropagation();openSpaceDetail(n.dataset.spaceIndex)})
 })
}
function renderBranchMobilePanel(){
 if(!els.branchMobilePanel)return;
 const pb=state?.pendingBranch;
 if(!pb){els.branchMobilePanel.classList.add('hidden');return}
 const br=branchDef(pb.stageIndex),owner=state.players.find(x=>x.id===pb.playerId),mine=owner?.id===localPlayerId&&!owner?.cpu;
 // CPU・他プレイヤーの選択は盤面を隠さない。上部の手番表示だけで待機する。
 if(!br||!mine){els.branchMobilePanel.classList.add('hidden');return}
 const remaining=Math.max(0,Number(pb.move?.left)||0);
 els.branchMobileTitle.textContent=`進むルートを選んでください　｜　残り ${remaining} マス`;
 els.branchMobileMainTitle.textContent=br.mainLabel;els.branchMobileMainNote.textContent='通常ルート';
 els.branchMobileAltTitle.textContent=br.altLabel;els.branchMobileAltNote.textContent=br.altNote;
 els.branchMobileAlt.classList.toggle('risk',br.kind==='gamble');
 els.branchMobilePanel.style.bottom=window.innerWidth<=900?(portraitCollapsed?'calc(36px + env(safe-area-inset-bottom))':'calc(142px + env(safe-area-inset-bottom))'):'24px';
 els.branchMobilePanel.classList.remove('hidden');
 const choose=(option,e)=>{e?.preventDefault?.();e?.stopPropagation?.();sendAction({kind:'branchChoose',option})};
 els.branchMobileMain.onpointerdown=e=>{e.preventDefault();e.stopPropagation()};
 els.branchMobileAlt.onpointerdown=e=>{e.preventDefault();e.stopPropagation()};
 els.branchMobileMain.onclick=e=>choose('main',e);els.branchMobileAlt.onclick=e=>choose('alt',e);
}
function branchArrowPoint(from,to,side=0){
 const dx=to[0]-from[0],dy=to[1]-from[1],d=Math.max(.001,Math.hypot(dx,dy)),off=Math.min(10,Math.max(6,d*.38));
 return{x:clamp(from[0]+dx/d*off+side,11,89),y:clamp(from[1]+dy/d*off,10,90),angle:Math.atan2(dy,dx)*180/Math.PI};
}
function branchChoiceMarkup(pts){return'';}
function bindBranchChoices(){document.querySelectorAll('[data-branch-choice]').forEach(btn=>{btn.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation()});btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(btn.disabled)return;sendAction({kind:'branchChoose',option:btn.dataset.branchChoice})})})}
function returnRoutePoints(pts){
 if(!pts?.length)return[];
 const start=pts[0],end=pts[pts.length-1],edge=1.25;
 // The loop-back line is intentionally routed along the outer rim so it never looks like a playable fork.
 if(start[0]<=18&&end[0]<=18)return [end,[edge,end[1]],[edge,start[1]],start];
 if(start[1]<=18&&end[1]<=18)return [end,[end[0],edge],[start[0],edge],start];
 // Fallback: use the nearest outer edge and a corner instead of crossing the board centre.
 const endNearLeft=end[0]<50,startNearLeft=start[0]<50;
 if(endNearLeft&&startNearLeft)return [end,[edge,end[1]],[edge,start[1]],start];
 const top=1.25;return [end,[end[0],top],[start[0],top],start];
}
function renderBoard(){
 if(!canInspectSpace())closeSpaceDetail();
 const b=stageBoard(),cp=currentPlayer(),pts=routePoints(stageDef().id,b.length),mapSrc=STAGE_BACKGROUNDS[stageDef().id]||STAGE_BACKGROUNDS.young,br=branchDef();
 els.boardPanel.dataset.watermark='';
 const poly=pts.map(p=>`${p[0]},${p[1]}`).join(' '),returnPoly=returnRoutePoints(pts).map(p=>`${p[0]},${p[1]}`).join(' ');
 const mapImg=`<img class="stage-map-image" src="${mapSrc}" alt="${esc(stageDef().name)}の盤面">`;
 let branchLines='';if(br&&pts[br.at]&&pts[br.altTo]){const a=pts[br.at],z=pts[br.altTo];branchLines=`<line class="branch-route-shadow" x1="${a[0]}" y1="${a[1]}" x2="${z[0]}" y2="${z[1]}"/><line class="branch-route-main" x1="${a[0]}" y1="${a[1]}" x2="${z[0]}" y2="${z[1]}"/>`}
 const routeSvg=`<svg class="route-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="route-shadow" points="${poly}"/><polyline class="route-main" points="${poly}"/><polyline class="return-route-shadow" points="${returnPoly}"/><polyline class="return-route-main" points="${returnPoly}"/>${branchLines}</svg>`;
 const nodes=b.map((s,i)=>{const [x,y]=pts[i],ps=state.players.filter(p=>p.pos===s.i),active=cp?.pos===s.i;return `<div class="map-node ${s.type} ${isMajorSpaceType(s.type)?'major':''} ${active?'current':''}" style="left:${x}%;top:${y}%;--nodeColor:${spacePalette(s.type)}" id="space-${s.i}" data-space-index="${s.i}" title="${s.i===0?'START':s.i} ${esc(s.title)}：タップで説明"><span class="node-num">${s.i===0?'S':s.i}</span><img class="node-icon" src="${spaceIcon(s.type)}" alt=""><div class="map-tokens">${ps.map(p=>`<span class="map-token ${cp?.id===p.id?'active':''}" data-player-id="${esc(p.id)}" style="--tokenColor:${p.color}" title="${esc(p.name)}"><img src="${esc(p.token||TOKENS[0])}" alt=""></span>`).join('')}</div></div>`}).join('');
 let directionArrow='';if(cp&&b.length&&!state.fx?.move&&!state.fx?.landing&&!state.pendingBranch){const a=pts[cp.pos]||pts[0],n=pts[(cp.pos+1)%b.length]||pts[0],angle=Math.atan2(n[1]-a[1],n[0]-a[0])*180/Math.PI;directionArrow=`<div class="turn-direction-arrow" style="left:${a[0]}%;top:${a[1]}%;--dir-angle:${angle}deg" aria-hidden="true"><span>➤</span></div>`}
 els.board.innerHTML=mapImg+routeSvg+nodes+directionArrow+branchChoiceMarkup(pts);bindSpaceInspectors();bindBranchChoices();
 requestAnimationFrame(()=>requestAnimationFrame(()=>focusBoardCamera()));
}
function focusBoardCamera(skipAnchorReset=false){
 if(!state||state.phase!=='playing'||!els.board||!els.boardPanel)return;
 const b=stageBoard(); if(!b.length)return;
 const moverId=state.fx?.move?.playerId||state.fx?.landing?.playerId; const p=(moverId?state.players.find(x=>x.id===moverId):null)||currentPlayer(); if(!p)return;
 const pts=routePoints(stageDef().id,b.length),pt=pts[p.pos]||pts[0];
 const rect=els.boardPanel.getBoundingClientRect(); if(!rect.width||!rect.height)return;
 if(mapOverview){const scale=(window.innerWidth<900 ? .92 : .96),tx=(rect.width-rect.width*scale)/2,ty=(rect.height-rect.height*scale)/2;els.board.style.setProperty('--cam-x',`${tx}px`);els.board.style.setProperty('--cam-y',`${ty}px`);els.board.style.setProperty('--cam-scale',scale);els.boardPanel.classList.add('map-overview');updateBoardDragUi();return}else els.boardPanel.classList.remove('map-overview');
 const isSmall=window.innerWidth<900,verySmall=window.innerWidth<600,focused=!!(state.turnReady||state.pendingRollAdvance||state.fx?.move||state.fx?.landing),moving=!!state.fx?.move; const scale=isSmall?(verySmall?(focused?(moving?1.78:1.62):1.02):(focused?(moving?1.92:1.72):1.04)):(focused?(moving?2.75:2.55):1.08);
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
function landingSpaceLabel(type){const meta=spaceMeta(type);return `${meta?.[1]||'出来事'}マス`}
function renderLandingPop(){
 const f=state?.fx?.landing;if(!els.spaceLandingPop)return;
 if(!f){els.spaceLandingPop.classList.add('hidden');els.spaceLandingPop.classList.remove('show');landingPopKey='';return}
 if(els.spaceLandingText)els.spaceLandingText.textContent=f.label||landingSpaceLabel(f.type);
 if(els.spaceLandingIcon){els.spaceLandingIcon.src=spaceIcon(f.type||'event');els.spaceLandingIcon.alt=f.label||''}
 els.spaceLandingPop.classList.remove('hidden');
 if(landingPopKey!==f.id){landingPopKey=f.id;els.spaceLandingPop.classList.remove('show');void els.spaceLandingPop.offsetWidth;els.spaceLandingPop.classList.add('show')}
}

function hideTitleCut(){
 if(titleCutTimer){clearTimeout(titleCutTimer);titleCutTimer=null}
 if(!els.titleCutOverlay)return;
 els.titleCutOverlay.classList.remove('play');
 els.titleCutOverlay.classList.add('hidden');
}
function renderTitleCut(){
 const fx=state?.fx?.titleCut;
 if(!fx){
  hideTitleCut();
  lastTitleCutId='';
  return;
 }
 if(!els.titleCutOverlay||!els.titleCutLogo)return;
 if(fx.id===lastTitleCutId)return;
 lastTitleCutId=fx.id;
 if(titleCutTimer){clearTimeout(titleCutTimer);titleCutTimer=null}
 els.titleCutOverlay.classList.remove('hidden');
 els.titleCutOverlay.classList.remove('play');
 void els.titleCutOverlay.offsetWidth;
 els.titleCutOverlay.classList.add('play');
 titleCutTimer=setTimeout(()=>{
  els.titleCutOverlay.classList.remove('play');
  setTimeout(()=>{
   if(!state?.fx?.titleCut||state.fx.titleCut.id!==fx.id)hideTitleCut();
   else els.titleCutOverlay.classList.add('hidden');
  },170);
 },1860);
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
 const discardable=currentPlayer()?.id===p.id&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice&&!p.cpu;
 els.cards.innerHTML=`<div class="card-rule-note">カード使用は1ターン1枚まで。自分の手番で使用可能な間は、確認後にカードを何枚でも捨てられます。（安心カードは所持中に自動発動）</div>`+p.cards.map((id,i)=>{const c=CARDS.find(x=>x.id===id);if(!c)return'';const cv=cardDisplay(c),auto=c.id==='guard',turnLabel=auto?'所持中に自動発動':c.turnCost==='end'?'使用すると手番終了':'使用後も手番継続',usable=!auto&&canBase&&canUseCard(p,c),buttonLabel=auto?'自動発動カード':p.cardUsedThisTurn?'このターンは使用済み':(c.needsOther&&!state.players.some(x=>x.id!==p.id)?'他プレイヤーが必要':(c.id==='date'&&(!p.partner||p.married)?'交際中のみ使用可':'使用する'));return`<div class="inventory-card"><div class="inventory-card-head"><strong>${esc(cv.name)}</strong><span class="card-turn-tag ${auto?'free':c.turnCost==='end'?'end':'free'}">${turnLabel}</span></div><div class="inventory-card-desc">${esc(cv.desc)}</div><div class="inventory-card-actions"><button class="btn small use-card" data-i="${i}" ${usable?'':'disabled'}>${buttonLabel}</button><button class="btn small discard-card" data-i="${i}" ${discardable?'':'disabled'}>捨てる</button></div></div>`}).join('');
 document.querySelectorAll('.use-card').forEach(b=>b.addEventListener('click',()=>sendAction({kind:'useCard',index:Number(b.dataset.i)})));
 document.querySelectorAll('.discard-card').forEach(b=>b.addEventListener('click',()=>{
  const i=Number(b.dataset.i),id=p.cards[i],c=CARDS.find(x=>x.id===id),cv=cardDisplay(c);
  if(!Number.isInteger(i)||!c)return;
  if(!confirm(`「${cv.name}」を捨てますか？\n捨てたカードは元に戻せません。`))return;
  sendAction({kind:'discardCard',index:i})
 }))
}
function renderAssets(){const p=state.players.find(x=>x.id===localPlayerId)||currentPlayer();if(!p){els.assets.innerHTML='-';return}ensureFamilyData(p);const fam=familyIncome(p),kids=childList(p),residence=residenceProperty(p);let expLine='';if(p.job){if(p.jobRank>=5)expLine=`<div>仕事経験：<strong>${Math.max(0,Number(p.jobExp)||0)}pt</strong>（最高Lv.5）</div>`;else{const plan=promotionRequirements(p,p.jobRank+1),cur=Math.max(0,Number(p.jobExp)||0),need=Math.max(0,Number(plan?.needExp)||0),left=Math.max(0,need-cur);expLine=`<div>仕事経験：<strong>${cur}pt</strong> / 次のLv.${p.jobRank+1}まで ${left?`あと${left}pt`:'経験条件達成'}</div>`}}else if((Number(p.jobExp)||0)>0)expLine=`<div>仕事経験：<strong>${Math.max(0,Number(p.jobExp)||0)}pt</strong>（引退時点）</div>`;els.assets.innerHTML=`<div>現金：<strong>${money(p.cash)}</strong>${p.cash<0?` <span class="debt-text">借金 ${money(-p.cash)}</span>`:''}</div>${p.cash<0?'<div class="debt-text">借金中ペナルティ：魅力・交流 -5（返済すると解除）</div>':''}<div>本人給料：${money(salaryNow(p))}${Number(p.salaryMultiplier)!==1?` <span class="pill">第二の挑戦 ×${Number(p.salaryMultiplier).toFixed(1)}</span>`:''}${Number(p.jobSalaryFactor)!==1?` <span class="pill">仕事評価 ×${Number(p.jobSalaryFactor).toFixed(1)}</span>`:''}</div>${p.job?`<div>職業特性：<strong>${esc(jobTraitInfo(p.job).name)}</strong> — ${esc(jobTraitInfo(p.job).desc)}</div>`:''}${expLine}<div>家族収入：${money(fam)}${p.married?`（配偶者 ${money(partnerIncome(p))}）`:''}</div><div>住まい：${residence?esc(residence.name):'賃貸'}</div><div>物件：${p.properties.length}件 / お宝：${p.treasures.length}個</div><div>思い出：${p.memory}pt</div><div>子ども：${childCount(p)}人（全体 ${totalChildrenCount()}/15）</div>${p.partner?`<div class="family-card"><img src="${esc(p.partner.avatar||AVATARS[0])}" alt=""><div><strong>${esc(p.partner.name)}</strong> <span>${esc(partnerTypeDef(p.partner).icon)}${esc(partnerTypeDef(p.partner).name)}</span><br><span>${p.married?'配偶者':'交際中'} / ${esc(p.partner.job||'仕事中')}</span>${p.married?`<br><span>家計収入 ${money(partnerIncome(p))}</span>`:''}${p.partner.lastLifeNote?`<br><span>最近：${esc(p.partner.lastLifeNote)}</span>`:''}</div></div>`:''}${kids.length?`<div class="family-kids">${kids.map(c=>`<div class="family-kid"><img src="${esc(c.avatar)}" alt=""><div><strong>${esc(c.name)}</strong><br><span>子ども</span></div></div>`).join('')}</div>`:''}` }
function choiceStatHint(c,o){
 const labels={knowledge:'知力',fitness:'体力',charm:'魅力',communication:'交流'};
 let stats=o?.statEffects;
 if(!stats&&c?.type==='event3')stats=o?.outcome?.stats||{};
 if(!stats&&c?.type==='education'){
  stats=o?.value==='voc'?{knowledge:1,charm:1}:o?.value==='college'?{knowledge:1,communication:1}:{};
 }
 if(!stats&&c?.type==='submap'){
  stats=o?.value==='study'?{knowledge:1}:o?.value==='fitness'?{fitness:1}:o?.value==='social'?{charm:1,communication:1}:{};
 }
 if(!stats&&c?.type==='meet'&&o?.value==='skip'&&c?.school)stats={communication:1};
 if(c?.type==='cardJealousy')return'能力：知力・体力・魅力のどれかUP / 交流DOWN';
 if(c?.type==='startEvent')return'能力：選んだマスの内容による';
 const parts=[];
 for(const k of ['knowledge','fitness','charm','communication']){
  const v=Number(stats?.[k]||0);
  if(v)parts.push(`${labels[k]}${v>0?'UP':'DOWN'}`);
 }
 return parts.length?`能力：${parts.join('・')}`:'能力：変化なし';
}
function renderChoice(){const c=state.pendingChoice;if(!c){els.choice.classList.add('hidden');return}els.choice.classList.remove('hidden');const owner=state.players.find(p=>p.id===c.playerId),mine=c.playerId===localPlayerId&&!owner?.cpu,revealing=!!c.revealing;els.choiceTitle.textContent=c.title;els.choiceText.textContent=c.text||'';els.choiceStatus.textContent=revealing?`${owner?.name||'プレイヤー'}が「${c.options?.[c.selectedIndex]?.label||''}」を選択しました`:mine?'あなたが選択してください':`${owner?.name||'プレイヤー'}が選択中です`;els.choiceList.innerHTML='';c.options.forEach((o,i)=>{const b=document.createElement('button');b.className=`choicebtn ${o.advanced?'advanced-job-option':''} ${revealing&&i===c.selectedIndex?'choice-selected-reveal':''}`;b.disabled=revealing||!mine;const hint=choiceStatHint(c,o);b.innerHTML=`${o.avatar?`<img class="choice-avatar" src="${esc(o.avatar)}" alt="">`:''}<span class="choice-copy"><strong>${o.advanced?'<span class="advanced-job-badge">上位職</span>':''}${esc(o.label)}</strong>${o.desc?`<span class="note">${esc(o.desc)}</span>`:''}<span class="choice-stat-hint">${esc(hint)}</span></span>`;b.addEventListener('click',()=>{if(!revealing)sendAction({kind:'choose',index:i})});els.choiceList.appendChild(b)})}
function choiceAnnouncement(p,c,o){
 if(c.type==='cardFreeRoll')return `${p.name}は次のルーレットの出目を「${o.label}」に決めた。`;
 if(c.type==='cardSteal'||c.type==='cardJealousy')return `${p.name}は「${o.label}」を対象に選んだ。`;
 if(c.type==='meet'&&o.value!=='skip')return `${p.name}は「${o.label}」に声をかけた。`;
 if(c.type==='job'&&o.value!=='keep')return `${p.name}は「${o.label}」の道を選んだ。`;
 if(c.type==='treasure'&&o.value!=='skip')return `${p.name}は「${o.label}」を選んだ。`;
 if(c.type==='property'&&o.value!=='skip')return `${p.name}は「${o.label}」を選んだ。`;
 return `${p.name}は「${o.label}」を選んだ。`;
}
function clearTypewriter(){if(typewriterTimer){clearTimeout(typewriterTimer);typewriterTimer=null}}
function finishTypewriter(){const m=state?.message,key=m?`${m.id}_${m.index}`:'';if(!m||key!==typewriterKey||typewriterDone)return false;clearTypewriter();typewriterDone=true;typewriterPos=Array.from(typewriterFullText).length;els.messageText.textContent=typewriterFullText;els.message.classList.remove('typing');return true}
function startTypewriter(key,text){clearTypewriter();typewriterKey=key;typewriterFullText=text;typewriterDone=false;typewriterPos=0;els.message.classList.add('typing');els.messageText.textContent='';const chars=Array.from(text);const step=()=>{if(typewriterKey!==key||!state?.message||`${state.message.id}_${state.message.index}`!==key){clearTypewriter();return}if(typewriterPos>=chars.length){typewriterDone=true;typewriterTimer=null;els.message.classList.remove('typing');const owner=state.players.find(p=>p.id===state.message?.ownerId);if(state.message?.ownerId===localPlayerId&&!owner?.cpu)els.messageOwner.textContent='クリックで次へ';return}const ch=chars[typewriterPos++];els.messageText.textContent+=ch;typewriterTimer=setTimeout(step,typewriterDelay(ch))};step()}
function messageActorsFor(m,line){
 // Narration/system announcements are not spoken by the active player's character.
 // Keep the character stage hidden for these messages.
 if(m?.narration)return [];
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
 if(els.spaceDetail&&!els.spaceDetail.classList.contains('hidden'))closeSpaceDetail();
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
function renderCurtain(){const f=state.fx.stage;if(!f){els.curtain.classList.add('hidden');return}const st=STAGES[f.stageIndex];els.curtain.classList.remove('hidden');els.curtainIcon.textContent=st.icon;els.curtainName.textContent=st.name;els.curtainSub.textContent=stageFlavor(st.id)}
function renderTurnBanner(){const f=state.fx.turn;if(!f){els.turnBanner.classList.add('hidden');return}const p=state.players.find(x=>x.id===f.playerId);els.turnBanner.classList.remove('hidden');els.turnBannerName.textContent=`${p?.name||'プレイヤー'} の手番です`;els.turnBannerAvatar.style.backgroundImage=`url('${p?.avatar||AVATARS[0]}')`;els.turnBanner.title=(p?.id===localPlayerId&&!p?.cpu)?'クリック / タップで開始':'手番が変わります'}
function renderLastTurnBanner(){if(!els.lastTurnBanner)return;els.lastTurnBanner.classList.toggle('hidden',!state?.fx?.lastTurn)}
function broadcast(){state.version=(state.version||0)+1;connections.forEach(c=>{if(c.open)c.send({type:'snapshot',state})});render()}
function sendAction(a){ensureAudio();if(isHost)hostHandleAction(localPlayerId,a);else if(hostConn?.open)hostConn.send({type:'action',action:a})}
function setMessage(ownerId,speaker,lines,after=null,opts={}){state.turnReady=false;const normalized=lines.map(x=>typeof x==='string'?{text:x,tone:'normal'}:x),owner=state.players.find(p=>p.id===ownerId);if(owner?._guardNotice){const n=owner._guardNotice;normalized.push({text:`安心カードが自動発動！ 1枚消費して損失を半減（${money(n.original)} → ${money(n.actual)}）`,tone:'good'});owner._guardNotice=null}state.message={id:uuid(),ownerId,speaker,lines:normalized,index:0,after,narration:!!opts.narration}}
function messageResult(playerId,speaker,lines,after='completeTurn'){setMessage(playerId,speaker,lines,{type:after})}
function handleMessageNext(playerId){const m=state.message;if(!m||m.ownerId!==playerId)return;if(m.index<m.lines.length-1){m.index++;broadcast();return}const after=m.after;state.message=null;runAfter(after);broadcast()}
function runAfter(a){if(!a)return;if(a.type==='beginTurn')beginTurn();else if(a.type==='resumeTurn'){state.busy=false;state.turnReady=true}else if(a.type==='completeTurn')completeTurn();else if(a.type==='openChoice')openChoice(a.choice,state.players.find(p=>p.id===a.playerId),a.returnTo||'completeTurn',a);else if(a.type==='resolveLandingAfterIncome'){const p=state.players.find(x=>x.id===a.playerId);if(p)resolveLanding(p,a.wraps||0)}else if(a.type==='activatePendingCheck')activatePendingCheck(a.id);else if(a.type==='activatePendingPromotion')activatePendingPromotion(a.id);else if(a.type==='finishGame')finishGame()}

function finishTurnIntro(fxId){if(!state?.fx?.turn||state.fx.turn.id!==fxId)return;state.fx.turn=null;state.busy=false;beginTurnCore();broadcast()}
function beginTurn(){if(state.phase!=='playing')return;const p=currentPlayer();state.turnReady=false;state.busy=true;if(!p)return;p.cardUsedThisTurn=false;const fxId=uuid();state.fx.turn={id:fxId,playerId:p.id};broadcast();later(()=>finishTurnIntro(fxId),1950)}
function beginTurnCore(){if(state.phase!=='playing')return;const p=currentPlayer();state.turnReady=false;state.busy=false;if(!p)return;
 if(state.stageIndex===4&&!p.educationChosen){setMessage(p.id,'人生の分岐点',[`${p.name}は社会へ踏み出す前に、進路を決めることになった。`,`これまで積み重ねてきた能力や思い出が、ここからの人生を少しずつ形作っていく。`],{type:'openChoice',choice:'education',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===4&&p.educationChosen&&!p.job&&Number(p.educationWaitTurns||0)>0){
  const before=Number(p.educationWaitTurns||0);p.educationWaitTurns=Math.max(0,before-1);
  const school=p.education==='大学'?'大学':'専門スクール';
  const remain=p.educationWaitTurns;
  setMessage(p.id,school,[`${p.name}は${school}で学んでいる。`,remain>0?`就職まであと${remain}ターン。`:'次の自分の手番から就職活動が始まる。'],{type:'completeTurn'},{narration:true});return
 }
 if(state.stageIndex===4&&!p.job){setMessage(p.id,'就職活動',['進路が決まった。次は最初の仕事を選ぼう。','ここで選んだ道は、今後の収入やイベントにも影響していく。'],{type:'openChoice',choice:'job',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===5&&!p.careerReviewDone){p.careerReviewDone=true;setMessage(p.id,'キャリアの節目',[`これまでの経験を活かし、仕事を見直す機会がやってきた。`,`転職するか、今の道を極めるか。ここから先の伸び方が変わる。`],{type:'openChoice',choice:'job',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===6&&!p.retireDone){p.retireDone=true;setMessage(p.id,'これからの働き方',[`円熟期をどう過ごすか、働き方を決める時が来た。`,`お金を追うか、ゆとりを取るか、それとも最後の大勝負に出るか。`],{type:'openChoice',choice:'retire',playerId:p.id,returnTo:'beginTurn'});return}
 state.turnReady=true;
}
function startGame(){const md=modeDef();state.players.forEach(ensureFamilyData);state.boards=STAGES.map((_,i)=>buildStageBoard(i,md.sizes[i]));state.phase='titlecut';state.resultPrepared=false;state.finalRoundAnnounced=false;state.pendingBranch=null;state.stageIndex=0;state.stageTurnCount=0;state.turnIndex=0;state.busy=true;state.turnReady=false;state.players.forEach((p,i)=>{p.color=COLORS[i];p.pos=0;p.laps=0});const titleCutId=uuid();state.fx.titleCut={id:titleCutId};state.fx.stage=null;addLog(`${md.name} 開始！`);broadcast();later(()=>{if(state?.fx?.titleCut?.id!==titleCutId)return;state.fx.titleCut=null;state.phase='playing';startStage(0,true)},2150)}
function startStage(si,initial=false){const familyNotices=!initial?growChildrenForStage(si):[];familyNotices.forEach(addLog);state.stageIndex=si;state.stageTurnCount=0;state.turnIndex=0;state.busy=true;state.turnReady=false;state.pendingChoice=null;state.pendingBranch=null;state.message=null;state.pendingRollAdvance=null;state.players.forEach(p=>{p.pos=0;p.laps=0});state.fx.landing=null;state.fx.stage={id:uuid(),stageIndex:si};broadcast();later(()=>{state.fx.stage=null;state.busy=false;const p=currentPlayer();setMessage(p.id,`${stageDef(si).icon} ${stageDef(si).name}`,[initial?(isToga()?'ライフロード、スタート。普通の人生になる予定です。たぶん。':'ライフロード、スタート！'):`${stageDef(si).name}のフィールドへ進みます。`,stageFlavor(stageDef(si).id)],{type:'beginTurn'},{narration:true});broadcast()},1650)}
function announceLastRound(){state.turnReady=false;state.busy=true;state.finalRoundAnnounced=true;state.fx=state.fx||{};const id=uuid();state.fx.lastTurn={id};broadcast();later(()=>{if(!state.fx?.lastTurn||state.fx.lastTurn.id!==id)return;state.fx.lastTurn=null;state.busy=false;beginTurn();broadcast()},2450)}
function completeTurn(){state.turnReady=false;state.stageTurnCount++;const need=modeDef().rounds[state.stageIndex]*state.players.length;if(state.stageTurnCount>=need){if(state.stageIndex>=STAGES.length-1){const owner=currentPlayer()?.id||state.players[0].id;setMessage(owner,'人生の総決算',['すべての時代が終わりました。',isToga()?'現金・物件・お宝・特別賞を集計します。なお、妙な記憶のいくつかは採点対象外です。':'現金・物件・お宝・特別賞を集計します。'],{type:'finishGame'},{narration:true});return}addLog(`${stageDef().name}が終了`);startStage(state.stageIndex+1);return}state.turnIndex=(state.turnIndex+1)%state.players.length;state.lastRoll=null;const rounds=modeDef().rounds[state.stageIndex],lastRoundStart=state.stageIndex===STAGES.length-1&&state.stageTurnCount===(rounds-1)*state.players.length;if(lastRoundStart&&!state.finalRoundAnnounced)announceLastRound();else beginTurn()}
function doRoll(p){if(!state.turnReady||state.busy)return;state.turnReady=false;state.busy=true;let baseRoll,roll,bonus=0;if(Number.isInteger(p.nextRollFixed)){baseRoll=clamp(p.nextRollFixed,1,10);roll=baseRoll;p.nextRollFixed=null;p.nextRollBonus=0}else{baseRoll=1+rnd(10);bonus=Math.max(0,Number(p.nextRollBonus)||0);roll=baseRoll+bonus;p.nextRollBonus=0}state.lastRoll=roll;state.pendingRollAdvance={id:uuid(),playerId:p.id,result:roll,ready:false};state.fx.roulette={id:uuid(),playerId:p.id,result:baseRoll,moveResult:roll,bonus,kind:'move'};addLog(`${p.name}：ルーレット ${baseRoll}${bonus?` +${bonus} = ${roll}`:''}`);broadcast();later(()=>{if(!state.pendingRollAdvance||state.pendingRollAdvance.playerId!==p.id)return;state.pendingRollAdvance.ready=true;state.busy=false;state.fx.roulette=null;broadcast()},Math.max(1900,Math.round(2350*speedScale())))}
function moveToPosition(p,ctx,target){
 const board=stageBoard(),prev=p.pos;p.pos=((target%board.length)+board.length)%board.length;if(p.pos<prev){p.laps++;ctx.wraps++}
 const crossed=board[p.pos];if(crossed?.type==='payday')ctx.incomePasses.push(collectIncomePass(p));ctx.left--;ctx.step++;
 state.fx.move={id:ctx.id,playerId:p.id,step:ctx.step,total:ctx.total,pos:p.pos};broadcast();later(()=>continueMove(ctx),260)
}
function continueMove(ctx){
 const p=state.players.find(x=>x.id===ctx.playerId);if(!p){state.fx.move=null;state.busy=false;state.pendingBranch=null;broadcast();return}
 if(ctx.left<=0){state.fx.move=null;broadcast();later(()=>{finishMoveAfterIncomePass(p,ctx.wraps,ctx.incomePasses,ctx.routeLines);broadcast()},240);return}
 const br=branchDef(ctx.stageIndex);if(br&&!ctx.branchUsed&&p.pos===br.at){ctx.branchUsed=true;state.fx.move=null;state.pendingBranch={id:uuid(),playerId:p.id,stageIndex:ctx.stageIndex,move:ctx};state.busy=true;broadcast();return}
 moveToPosition(p,ctx,p.pos+1)
}
function startMove(p,steps){state.pendingRollAdvance=null;state.pendingBranch=null;state.fx.roulette=null;state.busy=true;const ctx={id:uuid(),playerId:p.id,stageIndex:state.stageIndex,left:steps,total:steps,wraps:0,step:0,incomePasses:[],routeLines:[],branchUsed:false};continueMove(ctx)}
function chooseBranchRoute(p,option){
 const pb=state.pendingBranch;if(!pb||pb.playerId!==p.id)return;const br=branchDef(pb.stageIndex),ctx=pb.move;if(!br||!ctx)return;
 state.pendingBranch=null;let target=(br.at+1)%stageBoard().length;
 if(option==='alt'){
  target=br.altTo;
  // 近道は通常ルート上の大ラッキー／大不幸区間をまとめて飛ばす。
  // 分岐選択そのものではメッセージを挟まず、そのまま移動を再開する。
 }
 moveToPosition(p,ctx,target)
}
function lapBonus(p,wraps){if(!wraps)return[];const lines=[];for(let n=0;n<wraps;n++){if(state.stageIndex<4){p.memory+=2;applyStats(p,{communication:1});lines.push({text:`フィールドを1周！ 思い出+2、交流+1`,tone:'good'})}else{const gain=40000+state.stageIndex*15000;p.cash+=gain;lines.push({text:`フィールドを1周！ 周回ボーナス +${money(gain)}`,tone:'good'})}}return lines}
function resolveLanding(p,wraps=0){
 const s=stageBoard()[p.pos];if(!s){resolveLandingEffect(p,wraps);return}
 state.turnReady=false;state.busy=true;state.fx=state.fx||{};
 const fxId=uuid();state.fx.landing={id:fxId,playerId:p.id,pos:p.pos,type:s.type,label:landingSpaceLabel(s.type),wraps};
 broadcast();
 later(()=>{if(!state.fx?.landing||state.fx.landing.id!==fxId)return;state.fx.landing=null;resolveLandingEffect(p,wraps,s);broadcast()},1050)
}
function adjustedAbilityEvent(p,e){
 const rule=abilityRuleFor(e.text);if(!rule)return{event:e,check:null};
 const stat=p.stats[rule.stat]||0,roll=1+rnd(6),ok=stat+roll>=rule.target;
 if(ok)return{event:e,check:{ok,stat:rule.stat,roll,text:`${paramLabel(rule.stat)}を活かして結果を出した。`}};
 const weaker={...e,cash:Math.min(0,e.cash||0),stats:{[rule.stat]:1},memory:Math.max(1,Math.floor((e.memory||1)/2)),text:rule.failText};
 return{event:weaker,check:{ok,stat:rule.stat,roll,text:rule.failText}};
}
function choiceEventById(id){return ALL_SPACE_CHOICE_EVENTS.find(e=>e.id===id)||ALL_CHOICE_EVENTS.find(e=>e.id===id)||null}
// v0.66: choice-event titles stay as UI headings only. The spoken/message intro must stand on its own.
const CHOICE_INTRO_OVERRIDES={
 '公園で新しい遊具':'公園で見たことのない遊具を見つけた。どれから遊ぼう？',
 '家族写真を撮ることに':'今日は家族みんなで記念写真を撮ることになった。どんな一枚にしよう？',
 '運動会の自由種目':'運動会では希望する種目を一つ選べることになった。どれに出よう？',
 '家庭科クラブの体験会':'家庭科クラブの体験会で、簡単なおやつを一つ作れることになった。何にしよう？',
 '学芸会の役決め':'学芸会の劇で、希望する役を自由に選べることになった。どの役にしよう？',
 '文化祭で何を担当する？':'文化祭のクラス企画で担当を決めることになった。どの役割を引き受けよう？',
 '校外学習の自由時間':'校外学習で、班ごとに一時間だけ自由に回れる時間ができた。どこへ行こう？',
 '模試の結果が返ってきた':'模試の結果が返ってきた。志望校判定は少し微妙だった。ここからどうする？',
 '校内コンテストへ出す作品':'校内コンテストへ自由作品を一つ提出できることになった。何を作ろう？',
 'ボーナスの使い道':'会社から予想より少し多めのボーナスが入った。どう使おう？',
 '引っ越し先を迷う':'今の住まいの契約更新が近づき、住み替えも検討できる時期になった。どうする？',
 '親から相談の電話':'親から電話があり、実家のことで少し相談したいと言われた。どう対応しよう？',
 '大きな仕事のまとめ役':'仕事で複数人をまとめる大きめの案件を任された。どう進めよう？',
 '学校のお祭り':'学校のお祭りで、クラスの担当を決めることになった。何を担当しよう？',
 '文化祭の企画会議':'文化祭の企画会議が始まったが、クラスの案がなかなかまとまらない。どう動こう？',
 'お客さんがやってきた':'家族の知り合いだという大人がお客さんとして家へやってきた。どう過ごそう？'
};
function choiceIntroText(ev){const text=CHOICE_INTRO_OVERRIDES[ev?.title]||ev?.text||'';return String(text).trim()}
function createStageEventChoice(p,returnTo,ctx={}){const spaceType=ctx.spaceType||'event',category=ctx.eventCategory||spaceType,meta=spaceMeta(spaceType),pool=ctx.togaSpecial?activeChoiceEventsForStage(stageDef().id):activeSpaceChoices(category,stageDef().id),ev=choiceEventById(ctx.eventId)||pickFresh(p,pool,ctx.togaSpecial?'toga-choice':`space-${category}`);state.pendingChoice={playerId:p.id,type:'event3',eventId:ev.id,spaceType,eventCategory:category,togaSpecial:!!ctx.togaSpecial,returnTo,title:spaceType==='event'?ev.title:`${meta[1]}マス：${ev.title}`,text:ctx.introShown?'どうする？':choiceIntroText(ev),options:ev.options.map((o,i)=>({label:o.label,value:String(i),desc:'',outcome:o.out,statEffects:{...(o.out?.stats||{})}}))}}
function queueSpecificStageChoice(p,ev,prefix=[],spaceType='event',eventCategory=spaceType,togaSpecial=false){const meta=spaceMeta(spaceType);setMessage(p.id,`${meta[1]}マス`,[...prefix,{text:choiceIntroText(ev)}],{type:'openChoice',choice:'event3',eventId:ev.id,spaceType,eventCategory,togaSpecial,playerId:p.id,returnTo:'completeTurn',introShown:true});broadcast()}
function queueStageChoice(p,prefix=[],spaceType='event',eventCategory=spaceType,togaSpecial=false){const pool=togaSpecial?activeChoiceEventsForStage(stageDef().id):activeSpaceChoices(eventCategory,stageDef().id),ev=pickFresh(p,pool,togaSpecial?'toga-choice':`space-${eventCategory}`);queueSpecificStageChoice(p,ev,prefix,spaceType,eventCategory,togaSpecial)}
function maybeAwardEventCard(p,category,spaceType,lines){
 if(!p||p.cards.length>=5)return;
 let chance=0;
 if(spaceType==='event')chance=.24;
 else if(category==='plus')chance=.36;
 else if(category==='grow')chance=.32;
 else if(category==='social')chance=.20;
 if(!chance||Math.random()>=chance)return;
 const c=pick(CARDS),cv=cardDisplay(c);p.cards.push(c.id);
 lines.push({text:`さらに「${cv.name}」も手に入れた！`,tone:'good'},{text:`カード効果：${cv.desc}`,tone:'good'});
}
function applyHiddenEventChoice(p,o,c={}){const base=o.outcome||{},out={...base,stats:{...(base.stats||{})}},spaceType=c.spaceType||'event',category=c.eventCategory||spaceType,lines=[];let amt=0;if(out.cash)amt=cashChange(p,eventCash(out.cash,['event','plus','minus'].includes(spaceType)?p:null));if(Object.keys(out.stats).length)applyStats(p,out.stats);if(out.memory)p.memory+=out.memory;if(out.jobExp&&p.job)p.jobExp+=out.jobExp;const statVals=Object.values(out.stats||{}),hasPos=statVals.some(v=>v>0),hasNeg=statVals.some(v=>v<0),tone=(amt>0||hasPos)?'good':(amt<0||hasNeg)?'bad':'normal';lines.push({text:out.text||'選んだ行動の結果が出た。',tone});const detail=[];if(amt)detail.push(`${amt>0?'+':''}${money(amt)}`);for(const [k,v] of Object.entries(out.stats||{}))if(v)detail.push(`${paramLabel(k)}${v>0?'+':''}${v}`);if(out.memory)detail.push(`思い出+${out.memory}`);if(out.jobExp&&p.job)detail.push(`仕事経験+${out.jobExp}`);if(detail.length)lines.push({text:detail.join(' / '),tone});if(category==='social')lines.push(...maybePlayerInteraction(p,true));maybeAwardEventCard(p,category,spaceType,lines);return lines}

const BIG_SPACE_MONEY=[
 {win:[70000,85000],loss:[50000,60000]},
 {win:[110000,110000],loss:[75000,95000]},
 {win:[170000,155000],loss:[120000,155000]},
 {win:[265000,215000],loss:[190000,230000]},
 {win:[540000,660000],loss:[400000,620000]},
 {win:[900000,1080000],loss:[660000,1020000]},
 {win:[1320000,1560000],loss:[960000,1440000]}
];
const BIG_LUCK_STORIES={
 baby:['親戚一同から成長祝いをまとめてもらい、家族の貯金が一気に増えた。','家族写真が地域の広告に採用され、思わぬ謝礼が入った。','祖父母から将来のための大きなお祝いを受け取った。'],
 elementary:['地域の作品コンクールで特別賞に選ばれ、副賞とお祝いが一気に集まった。','家族で応募していた旅行券と商品券のセットが当選した。','学校の自由研究が大きな大会で表彰され、豪華な副賞を受け取った。'],
 middle:['部活動の全国規模イベントで特別賞を取り、賞金とお祝いが入った。','応募した作品が企業賞に選ばれ、予想外に大きな副賞を受け取った。','家族が忘れていた懸賞の一等に当たり、まとまった賞金が入った。'],
 high:['全国コンテストで上位入賞し、奨励金と副賞をまとめて受け取った。','アルバイト先の企画提案が採用され、特別な報奨金をもらった。','長く応募していた奨学金に採用され、進路資金に大きな余裕ができた。'],
 young:['担当した大型案件が予想以上の成功を収め、特別ボーナスが支給された。','趣味で続けていた活動が大きく評価され、まとまった収益につながった。','少額で持っていた資産の価値が急上昇し、大きな利益を確定できた。'],
 mature:['長年関わった案件の成果報酬が入り、家計に大きな余裕が生まれた。','昔から保有していた資産が高値で売れ、まとまった利益になった。','会社の特別表彰と業績賞与が重なり、大きな収入になった。'],
 senior:['昔購入した資産が想像以上の価値になり、整理したことで大きな利益が出た。','長年の活動が表彰され、記念賞金と謝礼をまとめて受け取った。','忘れていた権利収入の精算が入り、思わぬ大金が振り込まれた。']
};
const BIG_BAD_STORIES={
 baby:['家の設備故障と通院が重なり、家族に大きな出費が発生した。','旅行直前に大きな家電が壊れ、急な買い替えが必要になった。','家族の車で大きな修理が必要になり、予定外の出費が重なった。'],
 elementary:['家の水回りが大きく故障し、修理費と宿泊費がまとめて必要になった。','家族旅行の直前に予約トラブルが重なり、大きなキャンセル料が出た。','大切な物を壊してしまい、修理と買い直しでかなりの出費になった。'],
 middle:['自転車事故と物品の破損が重なり、修理費が大きく膨らんだ。','家族の急な引っ越しで予想外の費用が一気に発生した。','遠征先で荷物を失い、買い直しと移動費で大きな出費になった。'],
 high:['進学準備と機材故障が同時に重なり、想定以上の支払いになった。','遠征イベントの予約変更が重なり、高額なキャンセル料を払うことになった。','アルバイト先のトラブルで弁償が必要になり、貯金が大きく減った。'],
 young:['投資話を信じてしまい、大きな損失を抱えた。','仕事上の事故で自己負担が発生し、まとまった借金まで背負うことになった。','保証人トラブルに巻き込まれ、高額な支払いが突然発生した。'],
 mature:['住宅修繕と家族の大きな出費が重なり、家計へ深刻なダメージが出た。','長年保有していた資産が急落し、大きな損失を確定することになった。','事業上のトラブルで高額な負担が発生し、借金を抱える可能性まで出た。'],
 senior:['大規模な住宅修繕と医療費が重なり、まとまった資金が一気に出ていった。','資産整理で大きな損失が確定し、老後資金が大きく減った。','身近な人の金銭トラブルに巻き込まれ、高額な支払いを負うことになった。']
};
function resolveBigLuck(p){
 const si=state.stageIndex||0,sc=BIG_SPACE_MONEY[si]||BIG_SPACE_MONEY[4],gain=sc.win[0]+rnd(sc.win[1]+1),story=pick(BIG_LUCK_STORIES[stageDef().id]||BIG_LUCK_STORIES.young);
 p.cash+=gain;p.memory+=8;const stat=['knowledge','fitness','charm','communication'][rnd(4)];applyStats(p,{[stat]:2});
 return[{text:story,tone:'good'},{text:`大ラッキー！ +${money(gain)} / ${paramLabel(stat)}+2 / 思い出+8`,tone:'good'}];
}
function resolveBigBad(p){
 const si=state.stageIndex||0,sc=BIG_SPACE_MONEY[si]||BIG_SPACE_MONEY[4],loss=sc.loss[0]+rnd(sc.loss[1]+1),story=pick(BIG_BAD_STORIES[stageDef().id]||BIG_BAD_STORIES.young),actual=cashChange(p,-loss);
 p.memory+=2;const stat=['knowledge','fitness','charm','communication'][rnd(4)];applyStats(p,{[stat]:-1});
 const lines=[{text:story,tone:'bad'},{text:`大不幸… ${money(actual)} / ${paramLabel(stat)}-1`,tone:'bad'}],d=debtLine(p);if(d)lines.push(d);return lines;
}

function resolveLandingEffect(p,wraps=0,sOverride=null){state.busy=false;const s=sOverride||stageBoard()[p.pos],lines=lapBonus(p,wraps);const finish=(more,speaker='出来事')=>{const all=[...lines,...more];messageResult(p.id,speaker,all.length?all:[{text:'何事もなく穏やかな一日だった。'}])};
 if(s.type==='start'){setMessage(p.id,'スタートマス',[...lines,{text:'スタートマスにぴったり停止！ 大ラッキー・大不幸以外から、好きなマスのイベントを1つ選べる。',tone:'good'}],{type:'openChoice',choice:'startEvent',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='bigluck'){finish(resolveBigLuck(p),'大ラッキーマス');return}
 if(s.type==='bigbad'){finish(resolveBigBad(p),'大不幸マス');return}
 if((s.type==='event'||s.type==='plus')&&p.married){const born=maybeBirthOnSpace(p,s.type==='plus'?.20:.10);if(born){finish(born,s.type==='plus'?'プラスマス：家族イベント':'出来事マス：家族イベント');return}}
 if(['event','plus','minus','grow','social'].includes(s.type)){
  const sid=stageDef().id,spaceType=s.type;
  if(spaceType==='social'&&state.stageIndex>=3&&Math.random()<.5){
   if(p.married){finish(marriedRomanceLines(p),'交流マス：恋愛・夫婦イベント')}else{setMessage(p.id,'交流マス：恋愛イベント',[...lines,{text:p.partner?'交流の中で、パートナーとの関係を進めるきっかけができた。':'交流の場で、少し気になる相手と出会うきっかけがあった。'}],{type:'openChoice',choice:'romance',playerId:p.id,returnTo:'completeTurn'});broadcast()}
   return
  }
  if(shouldJobSideEvent(p,spaceType)){finish(jobSideEventLines(p,spaceType),`${spaceMeta(spaceType)[1]}マス：${jobDisplayName(p.job)}イベント`);return}
  // Toga's strange one-off scenes live on the generic event space; signed/grow/social spaces stay semantically consistent.
  if(spaceType==='event'&&isToga()&&Math.random()<.28){
   if(Math.random()<.48){const pool=activeChoiceEventsForStage(sid),ev=pickFresh(p,pool,'toga-choice');queueSpecificStageChoice(p,ev,lines,'event','event',true);return}
   const pool=TOGA_EVENTS[sid]||TOGA_EVENTS.young,e=pickFresh(p,pool,'toga-event'),amt=cashChange(p,eventCash(e.cash,p));applyStats(p,e.stats);p.memory+=e.memory;const detail=[];if(amt)detail.push(`${amt>0?'+':''}${money(amt)}`);const stattxt=Object.entries(e.stats||{}).filter(([,v])=>v).map(([k,v])=>`${paramLabel(k)}${v>0?'+':''}${v}`).join(' / ');if(stattxt)detail.push(stattxt);if(e.memory)detail.push(`思い出+${e.memory}`);finish([...eventStoryLines(p,e,sid,amt),...(detail.length?[{text:detail.join('　'),tone:amt<0?'bad':amt>0?'good':'normal'}]:[])],'出来事マス');return
  }
  // A generic event space borrows one of the four dedicated families at random.
  const category=spaceType==='event'?pick(['plus','minus','grow','social']):spaceType,speaker=spaceType==='event'?'出来事マス':spaceMeta(spaceType)[1]+'マス';
  if((category==='plus'||category==='minus')&&spaceType!=='event'&&shouldTriggerMajorFinance(category)){finish(majorFinanceStory(p,category),speaker);return}
  const content=pickSpaceContent(p,category,sid);
  if(content?.kind==='choice'){queueSpecificStageChoice(p,content.event,lines,spaceType,category,false);return}
  const e=content?.event||pickFresh(p,activeSpaceEvents(category,sid),`space-${category}`),amt=cashChange(p,eventCash(e.cash,['event','plus','minus'].includes(spaceType)?p:null));applyStats(p,e.stats);p.memory+=e.memory;
  const detail=[];if(amt)detail.push(`${amt>0?'+':''}${money(amt)}`);const stattxt=Object.entries(e.stats||{}).filter(([,v])=>v).map(([k,v])=>`${paramLabel(k)}${v>0?'+':''}${v}`).join(' / ');if(stattxt)detail.push(stattxt);if(e.memory)detail.push(`思い出+${e.memory}`);
  const statVals=Object.values(e.stats||{}),tone=(amt>0||statVals.some(v=>v>0))?'good':(amt<0||statVals.some(v=>v<0))?'bad':'normal',interactions=category==='social'?maybePlayerInteraction(p,true):[];
  finish([...eventStoryLines(p,e,sid,amt),...(detail.length?[{text:detail.join('　'),tone}]:[]),...interactions],speaker);
  maybeAwardEventCard(p,category,spaceType,state.message?.lines||[]);
  return}
 if(s.type==='gamble'){setMessage(p.id,'大勝負マス',[...lines,{text:'勝負の場が開いている。張り方を選び、あとは運に任せる。'}],{type:'openChoice',choice:'bigGamble',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='chance'){if(p.married){const born=maybeBirthOnSpace(p,.20);if(born){finish(born,'チャンスマス：家族イベント');return}}resolveChance(p,lines);return}
 if(s.type==='payday'){if(s.fromStartChoice){resolveChosenPayday(p);broadcast()}else finish([{text:'収入マスに到着。定期収入を受け取った。'}],'収入マス');return}
 if(s.type==='card'){if(p.cards.length>=5)finish([{text:'カード枠がいっぱいで、新しいカードを持てなかった。'}],'カード');else{const c=pick(CARDS);p.cards.push(c.id);{const cv=cardDisplay(c);finish([{text:`「${cv.name}」を手に入れた！`,tone:'good'},{text:cv.desc}],'カード')}}return}
 if(s.type==='treasure'){setMessage(p.id,'お宝マス',[...lines,{text:'価値の読めないお宝を見つけた。買ってみる？'}],{type:'openChoice',choice:'treasure',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='submap'){setMessage(p.id,'寄り道マス',[...lines,{text:'少し寄り道できそうだ。どこへ行こう？'}],{type:'openChoice',choice:'submap',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='romance'){if(p.married){const born=maybeBirthOnSpace(p,.50);if(born)finish(born,'恋愛マス：家族イベント');else finish(marriedRomanceLines(p),'夫婦の時間')}else{setMessage(p.id,'恋愛マス',[...lines,{text:p.partner?'パートナーとの関係を進めるチャンス。':'新しい出会いがありそうだ。'}],{type:'openChoice',choice:'romance',playerId:p.id,returnTo:'completeTurn'});broadcast()}return}
 if(s.type==='property'){setMessage(p.id,'物件マス',[...lines,{text:'気になる物件情報が入ってきた。'}],{type:'openChoice',choice:'property',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='career'){if(p.job){const story=pickJobWorkStory(p,p.job),stat=primaryJobStat(p.job),statGain=jobWorkStatGain(p.job),commBonus=jobWorkCommunicationBonus(p.job),gain=Math.round((50000+p.jobRank*25000+rnd(70001))*jobWorkRewardMultiplier(p.job));p.cash+=gain;const statDelta={[stat]:statGain};if(commBonus&&stat!=='communication')statDelta.communication=(statDelta.communication||0)+commBonus;applyStats(p,statDelta);const statParts=[`${paramLabel(stat)}+${statGain}`];if(commBonus&&stat!=='communication')statParts.push(`交流+${commBonus}`);const baseLines=[...lines,{text:`【${jobDisplayName(p.job)}】${story}`,tone:'good'},{text:`仕事の成果 +${money(gain)} / ${statParts.join(' / ')}`,tone:'good'}];if(jobTraitKey(p.job)==='performance'&&Math.random()<.35)beginJobPayReviewCheck(p,baseLines,{type:'completeTurn'});else beginWorkExpCheck(p,baseLines,{type:'completeTurn'});broadcast()}else finish([{text:'仕事イベントは起きたが、まだ職には就いていない。'}],'仕事イベント');return}
 if(s.type==='family'){resolveFamily(p,lines);return}
 finish([{text:'穏やかな一日を過ごした。'}])
}

function flavorLine(stageId){const map={baby:['家族の笑顔に包まれ、部屋の空気までやさしく感じられた。','小さな出来事でも心に残る、大事な思い出がまたひとつ増える。'],elementary:['教室や校庭の空気がにぎやかで、今日も何かが起こりそうだ。','友だちとの何気ない時間が、あとから大きな思い出になる。'],middle:['少し背伸びした毎日が、得意なことや人間関係を育てていく。','嬉しいことも気まずいことも、全部が今の自分をつくっていく。'],high:['忙しい日々の中で、将来へつながる経験が少しずつ積み上がっていく。','友人や挑戦との出会いが、人生の進路をゆっくり変えていく。'],young:['仕事も遊びも選択肢が多く、ひとつの決断が明日を大きく動かす。','自分で選んだ行動が、収入や人間関係へはっきり返ってくる時期だ。'],mature:['積み上げた経験が実を結び、周囲との関わり方にも深みが出てくる。','家庭も仕事も忙しいが、そのぶん得られるものも大きい。'],senior:['これまでの歩みを振り返りながら、余裕のある時間を楽しめる。','穏やかな毎日の中にも、心が動く出来事はまだまだ待っている。']};return pick(map[stageId]||map.young)}
function togaEventStoryLines(p,e,stageId,amt){
 const text=/[。！？!?]$/.test(e.text)?e.text:`${e.text}。`;
 const tone=amt>0?'good':amt<0?'bad':'normal';
 return[{text,tone}]
}
function eventStoryLines(p,e,stageId,amt){
 if(isToga())return togaEventStoryLines(p,e,stageId,amt);
 const text=/[。！？!?]$/.test(e.text)?e.text:`${e.text}。`;
 const tone=amt>0?'good':amt<0?'bad':'normal';
 return[{text,tone}]
}
function randomOtherPlayer(p){const others=state.players.filter(x=>x.id!==p.id);return others.length?pick(others):null}
function maybeTogaPlayerInteraction(p,force=false){
 if(state.players.length<2||(!force&&Math.random()>.50))return[];
 const other=randomOtherPlayer(p);if(!other)return[];const school=state.stageIndex<4,r=rnd(5),lines=[];
 if(school){
  if(r===0){applyStats(p,{communication:1});applyStats(other,{communication:1});p.memory+=4;other.memory+=4;lines.push({text:`そこへ${other.name}が現れた。なぜか二人で「このイベントは伏線だ」と確信する。`},{text:`結局何も起きなかったが、二人の仲だけは少し深まった。`,tone:'good'},{text:`二人とも 交流+1・思い出+4`,tone:'good'})}
  else if(r===1){const win=(p.stats.knowledge+rnd(8))>=(other.stats.knowledge+rnd(8))?p:other;applyStats(win,{charm:1});win.memory+=5;lines.push({text:`${p.name}と${other.name}、古のゲーム知識クイズで突然の対決！`},{text:`勝者は${win.name}。何の役にも立たない知識ほど強かった。`,tone:'good'},{text:`${win.name} 魅力+1・思い出+5`,tone:'good'})}
  else if(r===2){applyStats(p,{knowledge:1});applyStats(other,{knowledge:1});p.memory+=3;other.memory+=3;lines.push({text:`${p.name}と${other.name}は、怪しい噂を検証するため放課後の校舎を探索した。`},{text:'怪異は見つからなかったが、使われていないコンセントだけ大量に見つかった。',tone:'normal'},{text:'二人とも 知力+1・思い出+3',tone:'good'})}
  else if(r===3){const g=10000+rnd(25000);p.cash+=g;other.cash+=g;p.memory+=3;other.memory+=3;lines.push({text:`${p.name}と${other.name}が謎のゲーム大会へ参加。`},{text:'ルールを最後まで理解しないまま、なぜか賞金圏内へ滑り込んだ。',tone:'good'},{text:`二人とも +${money(g)}・思い出+3`,tone:'good'})}
  else{applyStats(p,{charm:1});applyStats(other,{communication:1});p.memory+=5;other.memory+=5;lines.push({text:`${p.name}と${other.name}は好きな作品の「どの時期が一番良かったか」で大論争。`},{text:'結論は出なかったが、二人とも非常に満足そうだった。',tone:'good'},{text:'二人とも 思い出+5 / 魅力・交流が少し成長',tone:'good'})}
 }else{
  if(r===0){const cost=30000+rnd(50000);p.cash-=cost;p.memory+=5;other.memory+=4;lines.push({text:`${p.name}と${other.name}、仕事帰りに「一杯だけ」のはずがオタク談義へ突入。`},{text:`気づけば終電間際。今回は${p.name}が多めに払った。`,tone:'bad'},{text:`${p.name} -${money(cost)} / 二人の思い出増加`,tone:'normal'})}
  else if(r===1){const g=50000+rnd(90000);p.cash+=g;other.cash+=Math.round(g*.8);lines.push({text:`${p.name}と${other.name}が昔の知識を活かした謎の副業を開始。`},{text:'需要がどこにあったのか分からないまま売れた。',tone:'good'},{text:`${p.name} +${money(g)} / ${other.name} +${money(Math.round(g*.8))}`,tone:'good'})}
  else if(r===2){const a=p.stats.knowledge+p.stats.communication+rnd(10),b=other.stats.knowledge+other.stats.communication+rnd(10),win=a>=b?p:other,lose=win===p?other:p,g=40000+rnd(60000);win.cash+=g;lose.cash-=Math.round(g*.3);lines.push({text:`${p.name}と${other.name}が限定品の最後の一個を巡って心理戦へ。`},{text:`勝ったのは${win.name}。負けた${lose.name}は「今回は縁がなかった」と強がった。`,tone:win===p?'good':'bad'},{text:`${win.name} +${money(g)} / ${lose.name} -${money(Math.round(g*.3))}`})}
  else if(r===3){applyStats(p,{knowledge:1,communication:1});applyStats(other,{knowledge:1,communication:1});p.memory+=4;other.memory+=4;lines.push({text:`${p.name}と${other.name}で「昔の作品は本当に今見ても面白いのか」検証会を開催。`},{text:'結局、作品より思い出話の方が長かった。',tone:'good'},{text:'二人とも 知力+1・交流+1・思い出+4',tone:'good'})}
  else{const cost=50000+rnd(40000);p.cash-=cost;other.cash-=cost;p.memory+=8;other.memory+=8;lines.push({text:`${p.name}と${other.name}は怪しい展示会へ。入口には「正気の保証はしません」とある。`},{text:'展示内容より物販コーナーで財布が削れた。',tone:'normal'},{text:`二人とも -${money(cost)} / 思い出+8`,tone:'normal'})}
 }
 return lines
}
function maybePlayerInteraction(p,force=false){
 if(isToga())return maybeTogaPlayerInteraction(p,force);
 if(state.players.length<2||(!force&&Math.random()>.46))return[];
 const other=randomOtherPlayer(p);if(!other)return[];
 const sid=stageDef().id,school=['baby','elementary','middle','high'].includes(sid),lines=[];
 if(school){
  const r=rnd(5);
  if(r===0){applyStats(p,{communication:1,knowledge:1});applyStats(other,{communication:1});p.memory+=3;other.memory+=2;lines.push({text:`そこへ${other.name}も合流。二人で相談しながら動くうち、いつの間にか息が合ってきた。`,tone:'normal'},{text:`最後は二人とも笑顔で解散。${p.name}は知力・交流+1、${other.name}は交流+1。`,tone:'good'},{text:`思い出：${p.name}+3 / ${other.name}+2`,tone:'good'});}
  else if(r===1){const a=p.stats.knowledge+p.stats.fitness+rnd(8),b=other.stats.knowledge+other.stats.fitness+rnd(8),winner=a>=b?p:other,loser=winner.id===p.id?other:p;winner.memory+=4;loser.memory+=2;applyStats(winner,{charm:1});{const contests=['積み木をどちらが高く積めるか','紙飛行機をどちらが遠くまで飛ばせるか','早押しクイズで何問取れるか','体育館のフリースローを何本決められるか'],contest=contests[Math.min(state.stageIndex,3)];lines.push({text:`${p.name}と${other.name}が「${contest}」で勝負することになった！`},{text:`接戦の末、今回は${winner.name}の勝ち！ ${loser.name}も「次は負けない」と笑っている。`,tone:'good'},{text:`${winner.name} 魅力+1・思い出+4 / ${loser.name} 思い出+2`,tone:'good'});}}
  else if(r===2){applyStats(p,{communication:2});applyStats(other,{knowledge:1});p.memory+=2;other.memory+=2;lines.push({text:`困っていた${other.name}に${p.name}が声をかけ、二人で問題を片づけることになった。`},{text:`助けたつもりが、${p.name}のほうも意外なことを教わった。持ちつ持たれつだ。`,tone:'good'},{text:`${p.name} 交流+2 / ${other.name} 知力+1 / 二人の思い出+2`,tone:'good'});}
  else if(r===3){const g=10000+rnd(30000);p.cash+=g;other.cash+=g;p.memory+=2;other.memory+=2;lines.push({text:`${p.name}と${other.name}は商店街のスタンプラリーへペアで参加し、制限時間内に全チェックポイントを回ることにした。`},{text:`最後の一か所へ滑り込み、完走賞の賞金を二人で山分けした。`,tone:'good'},{text:`二人とも +${money(g)} / 思い出+2`,tone:'good'});}
  else{p.memory+=4;other.memory+=4;applyStats(p,{charm:1});applyStats(other,{charm:1});lines.push({text:`帰り道、${p.name}と${other.name}は予定を忘れて長話。気づけばすっかり遅い時間だ。`},{text:`特に何かを得たわけではない。でも、二人にとってかなり楽しい一日になった。`,tone:'good'},{text:`二人とも 魅力+1・思い出+4`,tone:'good'});}
 }else{
  const r=rnd(6);
  if(r===0){const cost=25000+rnd(45000);p.cash-=cost;other.memory+=3;p.memory+=4;lines.push({text:`帰り際、${p.name}は偶然${other.name}を見つけ、そのまま食事へ行くことになった。`},{text:`話が盛り上がった勢いで、今回は${p.name}がお会計を引き受けた。`,tone:'normal'},{text:`${p.name} -${money(cost)}・思い出+4 / ${other.name} 思い出+3`,tone:'bad'});}
  else if(r===1){const gain=50000+rnd(90000);p.cash+=gain;other.cash+=Math.round(gain*.7);applyStats(p,{communication:1});applyStats(other,{communication:1});lines.push({text:`${p.name}と${other.name}は、二人で小さな副業企画を試してみることにした。`},{text:`役割分担がうまくハマり、予想以上の成果が出た！`,tone:'good'},{text:`${p.name} +${money(gain)} / ${other.name} +${money(Math.round(gain*.7))} / 二人とも交流+1`,tone:'good'});}
  else if(r===2){const swing=30000+rnd(70000),pa=p.stats.knowledge+p.stats.communication+rnd(10),pb=other.stats.knowledge+other.stats.communication+rnd(10);if(pa>=pb){p.cash+=swing;other.cash-=Math.round(swing*.35);lines.push({text:`${p.name}と${other.name}が、異業種参加の地域アイデアコンテストで同じ入賞枠を争うことになった。`},{text:`今回は${p.name}が一歩先へ！ ${other.name}は悔しそうに結果を見つめている。`,tone:'good'},{text:`${p.name} +${money(swing)} / ${other.name} -${money(Math.round(swing*.35))}`,tone:'good'});}else{other.cash+=swing;p.cash-=Math.round(swing*.35);lines.push({text:`${p.name}と${other.name}が、異業種参加の地域アイデアコンテストで同じ入賞枠を争うことになった。`},{text:`最後に抜け出したのは${other.name}！ ${p.name}は次の機会を狙うことにした。`,tone:'bad'},{text:`${p.name} -${money(Math.round(swing*.35))} / ${other.name} +${money(swing)}`,tone:'normal'});}}
  else if(r===3){applyStats(p,{knowledge:1,communication:1});applyStats(other,{knowledge:1,communication:1});p.memory+=3;other.memory+=3;lines.push({text:`${other.name}から転職候補の二社で迷っていると相談され、${p.name}は求人票と条件を一緒に見比べることになった。`},{text:`話しているうちに${p.name}自身の働き方も整理され、二人とも少し頭がすっきりした。`,tone:'good'},{text:`二人とも 知力+1・交流+1・思い出+3`,tone:'good'});}
  else if(r===4){const cost=40000+rnd(50000);p.cash-=cost;other.cash-=cost;p.memory+=7;other.memory+=7;lines.push({text:`予定が偶然合い、${p.name}と${other.name}は思い切って日帰り旅行へ！`},{text:`財布は少し軽くなったが、写真フォルダは一気ににぎやかになった。`,tone:'good'},{text:`二人とも -${money(cost)} / 思い出+7`,tone:'normal'});}
  else{applyStats(p,{charm:1});applyStats(other,{communication:2});p.memory+=3;other.memory+=3;lines.push({text:`${p.name}が昔好きだったゲームの話を出すと、${other.name}も同じ作品を遊んでいたことが判明した。`},{text:`好きだったキャラクターや難所の話で予想以上に盛り上がり、二人とも笑いながら別れた。`,tone:'good'},{text:`${p.name} 魅力+1 / ${other.name} 交流+2 / 二人の思い出+3`,tone:'good'});}
 }
 return lines;
}

const EVENT_CASH_RATE=1.25; // legacy/non-target event cash keeps the old +25% adjustment
// v0.83: target spaces use one simple money model:
// common event base x memory multiplier x era multiplier.
// Raw era-specific prices are compressed into a common base band first, so the era itself
// no longer determines most of the amount through the data table.
const EVENT_STAGE_RATE=[0.75,0.75,0.75,0.75,1.00,1.00,1.00];
function stageEventRate(){return EVENT_STAGE_RATE[Math.max(0,Math.min(EVENT_STAGE_RATE.length-1,Number(state?.stageIndex)||0))]||1}
function memoryEventRate(p){
 const memory=Math.max(0,Number(p?.memory)||0);
 // Simple linear rule with no cap: every 1 memory point adds +10%.
 // 0pt=1.0x, 1pt=1.1x, 10pt=2.0x, 100pt=11.0x, 120pt=13.0x.
 return 1+memory*0.1;
}
function normalizedEventBaseCash(amt){
 if(!amt)return 0;
 const sign=amt<0?-1:1,a=Math.abs(amt);let base=15000;
 // Preserve only the event's rough small/medium/large character; erase most era inflation.
 if(a<=25000)base=15000;
 else if(a<=100000)base=20000;
 else if(a<=300000)base=25000;
 else base=30000;
 return sign*base;
}
function eventCash(amt,p=null){
 if(!amt)return 0;
 // p is supplied for Plus / Minus / generic Event spaces. Other systems keep their old cash scale.
 if(!p)return Math.round((amt*EVENT_CASH_RATE)/1000)*1000;
 const v=normalizedEventBaseCash(amt)*memoryEventRate(p)*stageEventRate();
 return Math.round(v/1000)*1000;
}
function cashChange(p,amt){if(amt<0){const guardIndex=Array.isArray(p.cards)?p.cards.indexOf('guard'):-1,legacyGuard=!!p.guard;if(guardIndex>=0||legacyGuard){const original=amt;amt=Math.ceil(amt/2);if(guardIndex>=0)p.cards.splice(guardIndex,1);p.guard=false;p._guardNotice={original,actual:amt}}}p.cash+=amt;return amt}
function debtLine(p){return p.cash<0?{text:`現金がマイナスに。借金 ${money(-p.cash)} を抱えた。借金中は魅力・交流が一時的に-5される。返済すると元に戻る。`,tone:'bad'}:null}
function financeScale(){
 const si=state.stageIndex||0;
 if(si>=6)return{winMin:750000,winRange:1550001,lossMin:480000,lossRange:900001,smallWin:350000,smallLoss:210000};
 if(si>=5)return{winMin:520000,winRange:980001,lossMin:350000,lossRange:600001,smallWin:250000,smallLoss:160000};
 return{winMin:320000,winRange:600001,lossMin:210000,lossRange:390001,smallWin:175000,smallLoss:115000};
}
function majorFinanceStory(p,kind){
 const toga=isToga(),lines=[];let amt=0;
 // Major finance events are still larger than ordinary events, but their base no longer changes by era.
 if(kind==='plus'){
  const base=60000+rnd(60001);
  amt=Math.round(base*stageEventRate()*memoryEventRate(p)/1000)*1000;p.cash+=amt;
  lines.push({text:toga?'昔から持っていた品に思わぬ価値がつき、まとまったお金が入った。':'思わぬ大型案件が成功し、まとまった臨時収入が入った。',tone:'good'},{text:`大きな臨時収入 +${money(amt)}`,tone:'good'});
 }else if(kind==='minus'){
  const base=45000+rnd(45001);
  amt=-Math.round(base*stageEventRate()*memoryEventRate(p)/1000)*1000;amt=cashChange(p,amt);
  const stories=toga?['身近な人の保証人トラブルに巻き込まれ、現実的な支払いだけが残った。','古いコレクションの保管場所で事故が起き、大規模な修繕費が必要になった。','妙な出来事の後始末で、説明しづらいまま大きな出費を背負った。']:['保証人トラブルに巻き込まれ、大きな支払いを抱えることになった。','事故と修繕が重なり、想定外の高額出費になった。','仕事上のトラブルで損害を負担することになった。'];
  lines.push({text:pick(stories),tone:'bad'},{text:`大きな損失 ${money(amt)}`,tone:'bad'});const d=debtLine(p);if(d)lines.push(d);
 }else{
  if(Math.random()<.48)return majorFinanceStory(p,'plus');
  return majorFinanceStory(p,'minus');
 }
 p.memory+=3;return lines;
}
function shouldTriggerMajorFinance(spaceType){if(state.stageIndex<4)return false;if(!['event','plus','minus'].includes(spaceType))return false;return Math.random()<(state.stageIndex>=6 ? .22 : state.stageIndex>=5 ? .18 : .14)}
function createBigGambleChoice(p,returnTo){
 const options=[
  {label:'小さく挑戦する',value:'small',desc:'勝ちやすいが配当も控えめ。',tags:{risk:1.4,asset:1}},
  {label:'大勝負に出る',value:'go',desc:'成功すれば大金、失敗すれば借金もあり得る。',tags:{risk:3,asset:1}},
  ...(state.stageIndex>=6?[{label:'一発逆転に全部賭ける',value:'allin',desc:'勝率は低い。成功すれば数百万円級、失敗も最大級。',tags:{risk:5,asset:.5}}]:[]),
  {label:'見送る',value:'skip',desc:'今の資産を守る。',tags:{asset:1.2}}
 ];
 state.pendingChoice={playerId:p.id,type:'bigGamble',returnTo,title:state.stageIndex>=6?'老後の大勝負':'一発逆転の大勝負',text:state.stageIndex>=6?'ここからでも順位はひっくり返せる。どこまで張る？':'大きく状況を変えられる話が舞い込んだ。乗るか、見送るか。',options};
}
function gambleProfile(value){const allin=value==='allin',big=value==='go'||allin;return{allin,big,successMax:allin?3:(big?5:7),label:allin?'一発逆転':big?'大勝負':'小さな勝負'}}
function beginGambleRoulette(p,value,returnTo='completeTurn'){const prof=gambleProfile(value),id=uuid();state.pendingGamble={id,playerId:p.id,successMax:prof.successMax,mode:value,label:prof.label,phase:'await',returnTo};state.turnReady=false;state.busy=false;state.fx.roulette=null;els.roll.textContent='?';addLog(`${p.name}は${prof.label}を選択。成功条件は1〜${prof.successMax}`);broadcast()}
function startPendingGambleRoll(playerId){const g=state.pendingGamble;if(!g||g.playerId!==playerId||g.phase==='spinning')return;const p=state.players.find(x=>x.id===playerId);if(!p)return;const prof=gambleProfile(g.mode),sc=financeScale(),okResult=1+rnd(10),ok=okResult<=g.successMax;let amount=0,memoryGain=prof.allin?8:(prof.big?6:3);if(ok){memoryGain=prof.allin?12:(prof.big?8:4);amount=prof.allin?2500000+rnd(2000001):prof.big?(sc.winMin+rnd(sc.winRange)):sc.smallWin+rnd(Math.max(50001,Math.floor(sc.winRange*.22)))}else{amount=prof.allin?900000+rnd(1200001):prof.big?(sc.lossMin+rnd(sc.lossRange)):sc.smallLoss+rnd(Math.max(40001,Math.floor(sc.lossRange*.18)))}if(state.stageIndex>=6)amount=Math.round(amount*1.5);g.result=okResult;g.ok=ok;g.amount=amount;g.memoryGain=memoryGain;g.phase='spinning';state.busy=true;state.fx.roulette={id:g.id,playerId:p.id,result:okResult,kind:'gamble'};broadcast();const timer=setTimeout(()=>resolvePendingGamble(g.id),Math.max(1900,Math.round(2350*speedScale())));hostTimers.push(timer)}
function resolvePendingGamble(id){const g=state.pendingGamble;if(!g||g.id!==id)return;const p=state.players.find(x=>x.id===g.playerId);if(!p){state.pendingGamble=null;state.fx.roulette=null;state.busy=false;broadcast();return}const lines=[{text:`${g.label}の成功条件は 1〜${g.successMax}。ルーレットの結果は「${g.result}」！`,tone:g.ok?'good':'bad'}];if(g.ok){p.cash+=g.amount;p.memory+=g.memoryGain;lines.push({text:g.mode==='allin'?`一発逆転成功！ +${money(g.amount)} / 思い出+12`:g.mode==='go'?`大勝負成功！ +${money(g.amount)} / 思い出+8`:`手堅く勝利！ +${money(g.amount)} / 思い出+4`,tone:'good'})}else{const actual=cashChange(p,-g.amount);p.memory+=g.memoryGain;lines.push({text:g.mode==='allin'?`一発逆転は失敗… ${money(actual)} / 思い出+8`:g.mode==='go'?`大勝負は失敗… ${money(actual)} / 思い出+6`:`小さな勝負は外れ… ${money(actual)} / 思い出+3`,tone:'bad'});const d=debtLine(p);if(d)lines.push(d)}const afterType=g.returnTo||'completeTurn';state.pendingGamble=null;state.fx.roulette=null;state.busy=false;setMessage(p.id,g.label+'の結果',lines,{type:afterType});broadcast()}
function activatePendingCheck(id){const c=state.pendingCheck;if(!c||c.id!==id)return;c.phase='await';state.busy=false;state.fx.roulette=null}
function beginJobPayReviewCheck(p,baseLines,after={type:'completeTurn'}){
 const id=uuid();state.pendingCheck={id,kind:'jobPayReview',playerId:p.id,label:'給与査定',phase:'intro',after:typeof after==='string'?{type:after}:after};
 setMessage(p.id,'仕事イベント',[...baseLines,{text:'成果報酬型の給与査定が発生！ 1〜2で給料倍率-0.1、3〜7は変化なし、8〜10で+0.1。'},{text:`現在の仕事評価倍率は ×${(Number(p.jobSalaryFactor)||1).toFixed(1)}。`}],{type:'activatePendingCheck',id});
}
function beginWorkExpCheck(p,baseLines,after={type:'completeTurn'}){const id=uuid();state.pendingCheck={id,kind:'workExp',playerId:p.id,label:'仕事経験',phase:'intro',after:typeof after==='string'?{type:after}:after};setMessage(p.id,'仕事イベント',[...baseLines,{text:'今回増える仕事経験はルーレットで決める。1〜6なら+1pt、7〜9なら+2pt、10なら+3pt。'}],{type:'activatePendingCheck',id})}
function beginProposalCheck(p,after='completeTurn'){const id=uuid(),successMax=clamp(Math.floor(p.affection||0),1,10);state.pendingCheck={id,kind:'proposal',playerId:p.id,label:'プロポーズ',phase:'intro',successMax,after:typeof after==='string'?{type:after}:after};setMessage(p.id,'プロポーズ',[{text:`${p.partner?.name||'パートナー'}へプロポーズする。現在の好感度は${p.affection}。`},{text:successMax>=10?'好感度10以上なので成功確定。ルーレットを回して結果を見届けよう。':`成功条件はルーレット1〜${successMax}。成功率は${successMax*10}%だ。`}],{type:'activatePendingCheck',id})}
function beginRetireChallengeCheck(p,after='completeTurn'){const id=uuid();state.pendingCheck={id,kind:'retireChallenge',playerId:p.id,label:'第二の挑戦',phase:'intro',successMax:6,after:typeof after==='string'?{type:after}:after};setMessage(p.id,'第二の挑戦',[{text:'円熟期の働き方を賭けた第二の挑戦。成功すれば以後の本人給料が1.5倍、失敗すると0.5倍になる。'},{text:'成功条件はルーレット1〜6（成功率60%）。'}],{type:'activatePendingCheck',id})}
function startPendingCheckRoll(playerId){const c=state.pendingCheck;if(!c||c.playerId!==playerId||c.phase!=='await')return;c.result=1+rnd(10);c.phase='spinning';state.busy=true;state.fx.roulette={id:c.id,playerId:c.playerId,result:c.result,kind:'check'};broadcast();const t=setTimeout(()=>finishPendingCheck(c.id),Math.max(1900,Math.round(2350*speedScale())));hostTimers.push(t)}
function finishPendingCheck(id){const c=state.pendingCheck;if(!c||c.id!==id)return;const p=state.players.find(x=>x.id===c.playerId);if(!p){state.pendingCheck=null;state.fx.roulette=null;state.busy=false;broadcast();return}state.pendingCheck=null;state.fx.roulette=null;state.busy=false;const after=c.after||{type:'completeTurn'};if(c.kind==='workExp'){const gain=c.result<=6?1:c.result<=9?2:3;p.jobExp+=gain;const lines=[{text:`仕事経験ルーレットは「${c.result}」！ 仕事経験+${gain}pt`,tone:'good'}],rank=rankUpCheck(p);if(rank?.kind==='roulette'){beginPromotionRoulette(p,rank,lines,'仕事イベント',after);return}if(rank?.kind==='success')lines.push({text:rank.text,tone:'good'});else if(rank?.kind==='blocked'||rank?.kind==='progress')lines.push({text:promotionProgressText(p,rank)});setMessage(p.id,'仕事イベント',lines,after);broadcast();return}if(c.kind==='jobPayReview'){const before=Number(p.jobSalaryFactor)||1;let afterFactor=before,tone='normal',resultText='今回は給料に変化なし。';if(c.result<=2){afterFactor=Math.max(.7,Math.round((before-.1)*10)/10);tone='bad';resultText=afterFactor<before?`評価ダウン。仕事評価倍率が ×${afterFactor.toFixed(1)} になった。`:'これ以上は下がらず、仕事評価倍率は据え置き。'}else if(c.result>=8){afterFactor=Math.min(1.4,Math.round((before+.1)*10)/10);tone='good';resultText=afterFactor>before?`評価アップ！ 仕事評価倍率が ×${afterFactor.toFixed(1)} になった。`:'評価は上限。仕事評価倍率は ×1.4 のまま。'}p.jobSalaryFactor=afterFactor;p.jobExp+=1;const lines=[{text:`給与査定ルーレットは「${c.result}」！`,tone},{text:resultText,tone},{text:`現在の本人給料 ${money(salaryNow(p))} / 仕事経験+1`,tone:tone==='bad'?'normal':'good'}],rank=rankUpCheck(p);if(rank?.kind==='roulette'){beginPromotionRoulette(p,rank,lines,'給与査定',after);return}if(rank?.kind==='success')lines.push({text:rank.text,tone:'good'});else if(rank?.kind==='blocked'||rank?.kind==='progress')lines.push({text:promotionProgressText(p,rank)});setMessage(p.id,'給与査定',lines,after);broadcast();return}if(c.kind==='proposal'){const ok=c.result<=c.successMax,lines=[{text:`プロポーズ判定の出目は「${c.result}」！`,tone:ok?'good':'bad'}];if(ok){p.married=true;p.memory+=15;const pt=partnerTypeDef(p.partner),guests=state.players.filter(x=>x.id!==p.id);let giftTotal=0;lines.push({text:`想いが届いた！ ${p.partner.name}と結婚することになった。`,tone:'good'},{text:`配偶者タイプ：${pt.icon}${pt.name} — ${pt.desc}`,tone:'good'});for(const giver of guests){const gift=(1+rnd(30))*10000;giver.cash-=gift;p.cash+=gift;giftTotal+=gift;lines.push({text:`${giver.name}からご祝儀 ${money(gift)}！`,tone:'good'});}lines.push({text:guests.length?`ご祝儀合計 +${money(giftTotal)} / 思い出+15`:`思い出+15`,tone:'good'});}else{p.affection=Math.max(0,p.affection-1);lines.push({text:`今回はまだタイミングが合わなかった。好感度${p.affection}`,tone:'bad'})}setMessage(p.id,'プロポーズの結果',lines,after);broadcast();return}if(c.kind==='retireChallenge'){const ok=c.result<=c.successMax,lines=[{text:`挑戦ルーレットは「${c.result}」！`,tone:ok?'good':'bad'}];p.salaryMultiplier=ok?1.5:.5;if(ok)lines.push({text:`第二の挑戦に成功！ 以後の本人給料が1.5倍になった。現在の給料 ${money(salaryNow(p))}`,tone:'good'});else lines.push({text:`第二の挑戦は失敗…。以後の本人給料が0.5倍になった。現在の給料 ${money(salaryNow(p))}`,tone:'bad'});setMessage(p.id,'第二の挑戦',lines,after);broadcast();return}}
function cpuGambleOfferRate(p){const base={balanced:.28,scholar:.16,career:.22,romance:.20,investor:.40}[p?.cpuType]??.26;return state.stageIndex>=6?Math.min(.48,base+.05):base}
function resolveChance(p,prefix=[]){const gambleOfferRate=p?.cpu?cpuGambleOfferRate(p):.52;if(state.stageIndex>=4&&Math.random()<gambleOfferRate){setMessage(p.id,'チャンスマス',[...prefix,{text:'後半戦らしい、大きな勝負の話が舞い込んだ。'}],{type:'openChoice',choice:'bigGamble',playerId:p.id,returnTo:'completeTurn'});broadcast();return}const n=rnd(6),a=[...prefix,{text:'何が起こるか分からない、特別な流れがやってきた。'}];if(n===0){const g=100000+rnd(180000);p.cash+=g;a.push({text:isToga()?`妙に羽振りのいい研究アンケートの謝礼が届いた。 +${money(g)}`:`臨時ボーナス！ +${money(g)}`,tone:'good'})}else if(n===1){applyStats(p,{knowledge:2,communication:2});a.push({text:isToga()?'深夜の電波越しに妙に話の合う相手と長話をした。知力+2・交流+2':'良い出会いから大きく成長。知力+2・交流+2',tone:'good'})}else if(n===2){const t=pick(TREASURES);p.treasures.push({id:t.id,appraised:0});a.push({text:isToga()?`フリーマーケットの隅で妙に気になる「${t.name}」を手に入れた！`:`お宝「${t.name}」を手に入れた！`,tone:'good'})}else if(n===3||n===4){if(p.cards.length<5){const c=pick(CARDS),cv=cardDisplay(c);p.cards.push(c.id);a.push({text:`「${cv.name}」を手に入れた！`,tone:'good'})}else a.push({text:'カード枠がいっぱいだった。'})}else{p.memory+=8;a.push({text:isToga()?'記憶に残りすぎる体験。思い出+8（詳細は語らない）':'忘れられない体験！ 思い出+8',tone:'good'})}if(Math.random()<.26)a.push(...maybePlayerInteraction(p));messageResult(p.id,'チャンス！',a)}
function resolveFamily(p,prefix=[]){ensureFamilyData(p);const a=[...prefix,{text:isToga()?'家族にまつわる普通の時間。たまに変な話題が混ざるくらいだ。':'家族にまつわる時間は、資産では測れない大きな影響を残していく。'}],pt=p.married&&p.partner?partnerTypeDef(p.partner):null;const birthChance=pt?.id==='family'?0.67:0.55;if(p.married&&Math.random()<birthChance&&totalChildrenCount()<15){const born=birthEventLines(p);if(born)a.push(...born)}else if(childCount(p)){const g=childCount(p)*(30000+rnd(30000));p.cash+=g;p.memory+=4;a.push({text:`家族から嬉しい知らせ。 +${money(g)} / 思い出+4`,tone:'good'});if(totalChildrenCount()>=15)a.push({text:'家族みんなで穏やかな時間を過ごした。'})}else{p.memory+=5;a.push({text:'穏やかな休日を満喫。思い出+5',tone:'good'})}if(p.married)a.push(...partnerLifeEventLines(p,.42));if(Math.random()<.2)a.push(...maybePlayerInteraction(p));messageResult(p.id,'家族イベント',a)}
function openChoice(kind,p,returnTo,ctx={}){if(!p)return;if(kind==='event3')createStageEventChoice(p,returnTo,ctx);else if(kind==='startEvent')createStartEventChoice(p,returnTo);else if(kind==='education')createEducationChoice(p,returnTo);else if(kind==='job')createJobChoice(p,returnTo);else if(kind==='retire')createRetireChoice(p,returnTo);else if(kind==='treasure')createTreasureChoice(p,returnTo);else if(kind==='submap')createSubmapChoice(p,returnTo);else if(kind==='romance')createRomanceChoice(p,returnTo);else if(kind==='property')createPropertyChoice(p,returnTo);else if(kind==='bigGamble')createBigGambleChoice(p,returnTo)}
function createEducationChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'education',returnTo,title:'卒業後の進路',text:'待機ターン・進路の特徴・能力上昇を確認して選びます。',options:[{label:'すぐ就職',value:'work',desc:'待機なし / 仕事経験4から開始',statEffects:{},tags:{career:2}},{label:'専門卒業後に就職',value:'voc',desc:'待機1ターン / 専門・技術系職を上位表示',statEffects:{knowledge:4,charm:2},tags:{career:1.5,study:1.5}},{label:'大学卒業後に就職',value:'college',desc:'待機2ターン / 高度専門職を解禁',statEffects:{knowledge:6,communication:4},tags:{study:2.5}}]}}
const COLLEGE_REQUIRED_JOBS=new Set(['teacher','architect','researcher','doctor','lawyer','scientist','consultant']);
const VOCATIONAL_PRIORITY_JOBS=new Set(['chef','designer','engineer','nurse','mechanic','creator','programmer','pilot','musician','actor','vtuber','artisan','game']);
const WORK_PRIORITY_JOBS=new Set(['office','sales','chef','mechanic','creator','athlete','soccer','fighter','vtuber','entrepreneur','trader','artisan','farmer']);
function educationAllowsJob(p,j){return !COLLEGE_REQUIRED_JOBS.has(j.id)||p.education==='大学'}
function educationJobScore(p,j){let score=Math.random()*1.25;if(p.education==='専門'&&VOCATIONAL_PRIORITY_JOBS.has(j.id))score+=3.4;if(p.education==='大学'&&COLLEGE_REQUIRED_JOBS.has(j.id))score+=3.6;if(p.education==='高校'&&WORK_PRIORITY_JOBS.has(j.id))score+=2.2;return score}
function eligibleJobs(p){const list=JOBS.filter(j=>jobEligible(p,j)&&educationAllowsJob(p,j)&&(!j.careerOnly||!!p.job));return list.length?list:[JOBS[0]]}
function jobFocusText(j){
 const req=Object.entries(j?.req||{}).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
 if(!req.length)return'バランス型';
 if(req.length===1)return`${paramLabel(req[0][0])}中心`;
 const [first,second]=req;
 if(first[1]>=second[1]+2)return`${paramLabel(first[0])}中心・${paramLabel(second[0])}も重要`;
 return`${paramLabel(first[0])}・${paramLabel(second[0])}`;
}
function createJobChoice(p,returnTo){
 let pool=eligibleJobs(p).map(j=>({j,score:educationJobScore(p,j)})).sort((a,b)=>(Number(b.j.careerOnly)-Number(a.j.careerOnly))||b.score-a.score||a.j.index-b.j.index).map(x=>x.j);
 if(p.job)pool=pool.filter(j=>j.id!==p.job.id);
 const pathText=(p.job?'現在の仕事を続けるか、条件を満たしている転職先を選べます。転職すると前職の仕事経験の50%を新しい職業へ引き継ぎます。下積み経験が必要な上位職もあります。':'能力条件を満たしている仕事を選べます。')+' 「重視」は、その仕事で昇格していくうえで特に重要なステータスの目安です。'+(!p.job?(p.education==='高校'?' すぐ就職を選んだため、仕事経験4から開始します。':p.education==='専門'?' 専門・技術系の仕事は見つけやすいよう上位に並びます。':' 大学卒業で解禁された高度専門職も含まれます。'):'');
 const jobOptions=pool.map(j=>({label:jobDisplayName(j),value:j.id,advanced:!!j.careerOnly,desc:`就職条件：${promotionReqText(jobEntryRequirements(j))}${j.careerOnly?` / 転職条件：${careerPrereqText(j)}`:''} / 重視：${jobFocusText(j)} / 初任給 ${money(j.base)} / 特徴：${jobTraitText(j)}${COLLEGE_REQUIRED_JOBS.has(j.id)?' / 大卒対象':''}`,tags:{[j.tag]:2,career:1}}));
 const keepOption=p.job?{label:'今の職業を続ける',value:'keep',desc:`現在：${jobDisplayName(p.job)} Lv.${p.jobRank} / 重視：${jobFocusText(p.job)} / 特徴：${jobTraitText(p.job)}`,tags:{career:1.2}}:null;
 state.pendingChoice={playerId:p.id,type:'job',returnTo,title:p.job?'仕事を見直す':'仕事を選ぶ',text:pathText,options:[...(keepOption?[keepOption]:[]),...jobOptions]}
}
function createRetireChoice(p,returnTo){const severance=p.job?Math.round(salaryNow(p)*2.5):80000;state.pendingChoice={playerId:p.id,type:'retire',returnTo,title:'これからの働き方',text:'円熟期をどう過ごしますか？ メリット・デメリットを見て選びましょう。',options:[
 {label:'仕事を続ける',value:'continue',desc:`【メリット】仕事経験+2。今の仕事と給料を維持し、今後も昇格を狙える。 / 【デメリット】退職金や引退時の思い出ボーナスはなし。`,tags:{career:2,asset:1}},
 {label:'ゆったり引退',value:'retire',desc:`【メリット】退職金 ${money(severance)}（現在の本人給料2.5回分）＋ 思い出+10。 / 【デメリット】仕事を辞めるため、以後は本人の給料と昇格がなくなる。`,tags:{love:1,asset:1}},
 {label:'第二の挑戦',value:'challenge',desc:`【メリット】成功率60%。成功すると以後の本人給料が1.5倍。 / 【デメリット】失敗すると以後の本人給料が0.5倍。`,tags:{risk:2,career:1}}
 ]}}
function createStartEventChoice(p,returnTo){
 const types=['event','plus','minus','grow','social','chance','payday','card','treasure','submap','romance','property','career','family','gamble'];
 const desc={event:'通常の出来事',plus:'良い出来事',minus:'悪い出来事',grow:'能力が伸びる出来事',social:'交流イベント',chance:'特別なチャンス',payday:'定期収入＋仕事経験ボーナス',card:'カードを1枚入手',treasure:'お宝の購入チャンス',submap:'寄り道先を選択',romance:'恋愛・夫婦イベント',property:'物件購入チャンス',career:'仕事イベント',family:'家族イベント',gamble:'大勝負に挑戦'};
 state.pendingChoice={playerId:p.id,type:'startEvent',returnTo,title:'スタートぴったりボーナス',text:'発生させたいマスのイベントを選んでください。',options:types.map(type=>({label:`${spaceMeta(type)[0]} ${spaceMeta(type)[1]}マス`,value:type,desc:desc[type]||'',tags:type==='minus'?{risk:.2}:type==='gamble'?{risk:2}:type==='property'||type==='treasure'?{asset:1.6}:type==='romance'||type==='family'?{love:1.5}:type==='career'||type==='payday'?{career:1.5,asset:1}:type==='grow'?{study:1.2}:{} }))}
}
function createTreasureChoice(p,returnTo){const t=pick(TREASURES);if(p.cash<0){state.pendingChoice={playerId:p.id,type:'treasure',returnTo,title:'お宝を発見',text:'借金中は信用がなく、お宝を購入できません。',options:[{label:'見送る',value:'skip',desc:'借金を返してからまた狙おう',tags:{asset:1}}]};return}state.pendingChoice={playerId:p.id,type:'treasure',returnTo,title:'お宝を発見',text:'最後に本当の価値が判明します。購入後に借金になるのはOKです。',options:[{label:`${t.name}を買う`,value:t.id,desc:`価格 ${money(t.buy)} / 最大鑑定 ${money(t.max)}`,tags:{asset:1.6,risk:1.2}},{label:'見送る',value:'skip',desc:'現金を温存',tags:{asset:.7}}]}}
function createPropertyChoice(p,returnTo){if(p.cash<0){state.pendingChoice={playerId:p.id,type:'property',returnTo,title:'物件購入チャンス',text:'借金中は信用がなく、物件を購入できません。',options:[{label:'買わない',value:'skip',desc:'借金を返して信用を取り戻そう',tags:{asset:1}}]};return}const affordable=PROPS.filter(x=>!p.properties.includes(x.id)).filter(x=>x.price<=Math.max(300000,p.cash+250000)).sort((a,b)=>a.price-b.price),picks=affordable.slice(-3);state.pendingChoice={playerId:p.id,type:'property',returnTo,title:'物件購入チャンス',text:'物件は収入マスで利益を生み、最後に資産価値も加算されます。購入後に借金になるのはOKです。',options:[...picks.map(x=>({label:x.name,value:x.id,desc:`価格 ${money(x.price)} / 資産 ${money(x.value)} / 収入 ${money(x.income)}`,tags:{asset:2}})),{label:'買わない',value:'skip',desc:'今回は見送る',tags:{asset:.6}}]}}
function createRomanceChoice(p,returnTo){const school=stageDef().id==='high';if(!p.partner){const cand=[...PARTNERS].sort(()=>Math.random()-.5).slice(0,5),used=new Set();const options=cand.map(x=>{const avatar=nextPartnerPortrait(null,used);used.add(avatar);const t=partnerTypeDef(x);return{label:`${x.name}　${t.icon}${t.name}`,value:x.id,avatar,desc:school?`タイプ：${t.name}｜${t.desc}｜${x.desc} / 同級生`:`タイプ：${t.name}｜${t.desc}｜${x.desc} / ${x.job}`,statEffects:{},tags:{love:2}}});const skip=school?{label:'今は恋愛しない',value:'skip',desc:'自分の時間を優先して交流を伸ばす',statEffects:{communication:2},tags:{career:1,asset:1}}:{label:'今は恋愛しない',value:'skip',desc:'恋愛より仕事を優先して仕事経験+2',statEffects:{},tags:{career:1.6,asset:1}};state.pendingChoice={playerId:p.id,type:'meet',returnTo,title:school?'放課後の出会い':'新しい出会い',text:school?'5人の候補から選べます。相手のタイプによって、将来結婚した後の暮らしや出来事も変わります。※一度恋人になると、そのプレイ中は別の相手へ変更できません。':'5人の候補から選べます。相手のタイプによって、結婚後の夫婦イベントや配偶者自身の人生展開が変わります。※一度恋人になると、そのプレイ中は別の相手へ変更できません。',school,options:[...options,skip]};return}ensureFamilyData(p);const t=partnerTypeDef(p.partner);const options=school?[{label:'放課後に寄り道',value:'light',desc:'一緒に帰りながら少し寄り道する',statEffects:{},tags:{love:1.5}},{label:'休日にデート',value:'special',desc:'休みの日に少し特別な時間を作る',statEffects:{},tags:{love:2.3}},{label:'今回は見送る',value:'skip',desc:'今日は自分の予定を優先',statEffects:{},tags:{career:1}}]:[{label:'気軽なデート',value:'light',desc:'気楽に一緒の時間を過ごす',statEffects:{},tags:{love:1.5}},{label:'特別なデート',value:'special',desc:'少し特別な時間を作る',statEffects:{},tags:{love:2.3}},{label:'プロポーズ',value:'propose',desc:`成功率は好感度×10%（好感度10以上で確定）。結婚後は「${t.name}」らしい夫婦イベントが発生`,statEffects:{},tags:{love:3,risk:1.3}},{label:'今回は見送る',value:'skip',desc:'何もしない',statEffects:{},tags:{career:1}}];state.pendingChoice={playerId:p.id,type:'date',returnTo,title:`${p.partner.name}とどうする？`,text:`現在の好感度：${p.affection} / タイプ：${t.icon}${t.name} — ${t.desc}　※魅力が高いほどデート時に好感度+1の追加ボーナスが発生しやすくなります。プロポーズ成功率は好感度だけで決まります。`,school,options}}
function createSubmapChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'submap',returnTo,title:'寄り道スポット',text:'1つ選んで過ごします。',options:[{label:'学びの街',value:'study',desc:'じっくり学びに行く',statEffects:{knowledge:4},tags:{study:2}},{label:'スポーツ施設',value:'fitness',desc:'思いきり体を動かす',statEffects:{fitness:4},tags:{career:1.2}},{label:'交流フェス',value:'social',desc:'人が集まる場所へ行く',statEffects:{charm:2,communication:3},tags:{love:1.5,career:1}},{label:'チャレンジ市場',value:'market',desc:'ちょっと変わった市場をのぞく',statEffects:{},tags:{asset:1.5,risk:2}}]}}
function applyChoice(p,c,o){const lines=[];
 if(c.type==='cardFreeRoll'){p.nextRollFixed=clamp(Number(o.value)||1,1,10);lines.push({text:'自由気ままカードの効果がセットされた。',tone:'good'});return lines}
 if(c.type==='cardSteal'){const target=state.players.find(x=>x.id===o.value);if(!target){lines.push({text:'対象を選べなかった。'});return lines}const amount=(1+rnd(100))*10000;target.cash-=amount;p.cash+=amount;lines.push({text:`${money(amount)}を奪うことに成功！`,tone:'good'});if(target.cash<0)lines.push({text:`${target.name}は借金 ${money(-target.cash)} になった。`,tone:'bad'});return lines}
 if(c.type==='cardJealousy'){const target=state.players.find(x=>x.id===o.value);if(!target){lines.push({text:'対象を選べなかった。'});return lines}const stat=pick(['knowledge','fitness','charm']),take=Math.min(2,target.stats[stat]||0);applyStats(target,{[stat]:-take});applyStats(p,{[stat]:take,communication:-1});lines.push({text:`${paramLabel(stat)}を${take}奪うことに成功した。`,tone:'good'},{text:`${p.name}：${paramLabel(stat)}+${take} / 交流-1　${target.name}：${paramLabel(stat)}-${take}`,tone:'normal'});return lines}
 if(c.type==='event3')return applyHiddenEventChoice(p,o,c);
 if(c.type==='bigGamble'){
  if(o.value==='skip'){p.memory+=1;lines.push({text:'今回は見送った。大きな損得は発生せず、資産を守った。思い出+1'});return lines}
  const prof=gambleProfile(o.value);
  lines.push({text:`${prof.label}に挑戦！ 成功条件は 1〜${prof.successMax}。ルーレットで判定する。`,tone:'normal'});
  return lines;
 }
 if(c.type==='education'){
  p.educationChosen=true;
  if(o.value==='work'){p.education='高校';p.educationWaitTurns=0;p.careerStartExp=4;lines.push({text:'すぐ就職する道を選んだ。',tone:'good'},{text:'就職後は仕事経験4からスタートする。',tone:'good'})}
  else if(o.value==='voc'){p.education='専門';p.educationWaitTurns=1;p.careerStartExp=0;p.cash-=150000;applyStats(p,{knowledge:4,charm:2});lines.push({text:`専門スクールへ進学。学費 -${money(150000)} / 知力+4 / 魅力+2`,tone:'good'},{text:'次の自分の手番を1回待機したあと就職する。専門・技術系の職業が候補に出やすくなる。',tone:'good'})}
  else{p.education='大学';p.educationWaitTurns=2;p.careerStartExp=0;p.cash-=300000;applyStats(p,{knowledge:6,communication:4});lines.push({text:`大学へ進学。学費 -${money(300000)} / 知力+6 / 交流+4`,tone:'good'},{text:'次の自分の手番を2回待機したあと就職する。医師・研究職・法律家など、高度な専門職も就職候補になる。',tone:'good'})}
  return lines
 }
 if(c.type==='job'){
  if(o.value==='keep'){p.jobExp++;lines.push({text:'仕事経験+1'});return lines}
  const j=JOBS.find(x=>x.id===o.value);if(j){const oldJob=p.job,oldExp=Math.max(0,Number(p.jobExp)||0),changed=!oldJob||oldJob.id!==j.id;if(changed){ensureCareerData(p);let carry=0;if(oldJob){p.jobHistory[oldJob.id]=Math.max(Number(p.jobHistory[oldJob.id])||0,oldExp);carry=Math.floor(oldExp/2)}else carry=Math.max(0,Number(p.careerStartExp)||0);p.job=j;p.jobRank=1;p.jobExp=carry;p.jobSalaryFactor=1;p.careerStartExp=0;lines.push({text:oldJob?`${jobDisplayName(oldJob)}から${jobDisplayName(j)}へ転職。前職の仕事経験${oldExp}ptの50% → ${carry}ptを引き継いだ。`:`${jobDisplayName(j)}へ就職した。`,tone:'good'});let safety=0;while(safety++<4){const rank=rankUpCheck(p);if(rank?.kind==='success'){lines.push({text:`転職時点で昇格条件達成！ ${rank.text}`,tone:'good'});continue}if(rank?.kind==='roulette'){queuedImmediatePromotion={playerId:p.id,check:rank};lines.push({text:`転職時点でLv.${rank.targetRank}の昇格条件を満たしている。続けて昇格ルーレットへ！`,tone:'good'})}break}}else p.job=j;lines.push({text:`現在：${jobDisplayName(p.job)} Lv.${p.jobRank} / 給料 ${money(salaryNow(p))}${p.jobExp?` / 仕事経験 ${p.jobExp}`:''}`,tone:'good'})}return lines
 }
 if(c.type==='treasure'){
  if(o.value==='skip')lines.push({text:p.cash<0?'借金中のため購入を見送った。':'現金を温存した。'});
  else if(p.cash<0)lines.push({text:'借金中は信用がなく、お宝を購入できない。',tone:'bad'});
  else{const t=TREASURES.find(x=>x.id===o.value);p.cash-=t.buy;p.treasures.push({id:t.id,appraised:0});lines.push({text:`現金 -${money(t.buy)} / 最後の鑑定で価値が判明する。${p.cash<0?' 購入により借金状態になった。':''}`,tone:'good'})}
  return lines
 }
 if(c.type==='property'){
  if(o.value==='skip')lines.push({text:p.cash<0?'借金中のため物件購入を見送った。':'今回は資金を温存した。'});
  else if(p.cash<0)lines.push({text:'借金中は信用がなく、物件を購入できない。',tone:'bad'});
  else{const x=PROPS.find(x=>x.id===o.value);p.cash-=x.price;p.properties.push(x.id);lines.push({text:`現金 -${money(x.price)} / 資産価値 ${money(x.value)} / 収入 ${money(x.income)}${p.cash<0?' / 購入により借金状態':''}`,tone:'good'})}
  return lines
 }
 if(c.type==='meet'){
  if(o.value==='skip'){
   if(c.school){applyStats(p,{communication:2});lines.push({text:'今は恋愛を選ばず、自分の時間や友人関係を大切にした。交流+2',tone:'good'})}
   else if(p.job){p.jobExp+=2;lines.push({text:'今は恋愛を選ばず、仕事に集中した。仕事経験+2',tone:'good'})}
   else lines.push({text:'今は恋愛を選ばず、自分の時間を優先した。'});
  }
  else{const x=PARTNERS.find(x=>x.id===o.value),t=partnerTypeDef(x);p.partner={...x,avatar:o.avatar||nextPartnerPortrait()};p.affection=1+romanceCharmBonus(p);lines.push({text:`会話が弾み、好感度${p.affection}から関係が始まった。`,tone:'good'},{text:`${x.name}は【${t.icon}${t.name}】タイプ。${t.desc}`,tone:'good'})}
  return lines
 }
 if(c.type==='date'){
  if(o.value==='light'){const cost=c.school?3000:20000;p.cash-=cost;p.affection+=affectionGain(p,1,2);p.memory+=2;lines.push({text:`自然体で楽しい時間になった。好感度${p.affection} / -${money(cost)} / 思い出+2`,tone:'good'})}
  else if(o.value==='special'){const cost=c.school?10000:70000;p.cash-=cost;p.affection+=affectionGain(p,2,4);p.memory+=5;lines.push({text:`忘れられない一日になった。好感度${p.affection} / -${money(cost)} / 思い出+5`,tone:'good'})}
  else if(o.value==='propose'){lines.push({text:'プロポーズはルーレット判定へ進む。'});}
  else lines.push({text:'自分の時間をゆっくり過ごした。'});
  return lines
 }
 if(c.type==='submap'){
  if(o.value==='study'){p.cash-=80000;applyStats(p,{knowledge:4});lines.push({text:`-${money(80000)} / 知力+4`,tone:'good'})}
  if(o.value==='fitness'){p.cash-=50000;applyStats(p,{fitness:4});lines.push({text:`-${money(50000)} / 体力+4`,tone:'good'})}
  if(o.value==='social'){p.cash-=60000;applyStats(p,{charm:2,communication:3});lines.push({text:`-${money(60000)} / 魅力+2 / 交流+3`,tone:'good'})}
  if(o.value==='market'){p.cash-=100000;const g=[0,40000,100000,180000,300000][rnd(5)];p.cash+=g;lines.push({text:`参加費 -${money(100000)} / 戻り ${money(g)} / 差引 ${g-100000>=0?'+':''}${money(g-100000)}`,tone:g>=100000?'good':'bad'})}
  p.memory+=3;lines.push({text:'思い出+3',tone:'good'});return lines
 }
 if(c.type==='retire'){
  if(o.value==='continue'){p.jobExp+=2;lines.push({text:'仕事経験+2'})}
  else if(o.value==='retire'){const severance=p.job?Math.round(salaryNow(p)*2.5):80000;p.cash+=severance;p.job=null;p.jobRank=0;p.jobSalaryFactor=1;p.memory+=10;lines.push({text:`退職金 +${money(severance)}（本人給料2.5回分） / 思い出+10`,tone:'good'})}
  else{lines.push({text:'第二の挑戦はルーレット判定へ進む。'})}
  return lines
 }
 return[{text:'結果が確定した。'}]
}
function cpuScoreOption(p,o){const w=cpuDef(p.cpuType).w,t=o.tags||{};let s=Math.random()*.8;for(const k in t)s+=(w[k]||1)*t[k];if(/買う|大学|専門|デート|挑戦/.test(o.label)&&p.cash<100000)s-=2;if(o.value==='propose'&&p.affection<4)s-=2.5;if(o.value==='skip')s+=p.cash<0?2:0;if(o.value==='keep'&&p.jobRank>=4)s+=1.3;return s}
function cpuBigGambleChoiceIndex(p,c){
 const profiles={
  balanced:{small:40,go:20,allin:5,skip:35},
  scholar:{small:27,go:8,allin:1,skip:64},
  career:{small:36,go:14,allin:3,skip:47},
  romance:{small:34,go:18,allin:5,skip:43},
  investor:{small:30,go:35,allin:15,skip:20}
 },weights={...(profiles[p.cpuType]||profiles.balanced)};
 if(p.cash<0){weights.go*=.18;weights.allin*=.08;weights.skip*=2.2}
 else if(p.cash<200000){weights.go*=.55;weights.allin*=.3;weights.skip*=1.45}
 else if(p.cash>1500000){weights.go*=1.18;weights.allin*=1.35}
 const scores=(c.options||[]).map(o=>Math.max(.01,weights[o.value]??10)),total=scores.reduce((a,b)=>a+b,0);let r=Math.random()*total;
 for(let i=0;i<scores.length;i++){r-=scores[i];if(r<=0)return i}
 return Math.max(0,scores.length-1)
}

function canUseCard(p,c){if(!p||!c||c.id==='guard')return false;if(c.needsOther&&!state.players.some(x=>x.id!==p.id))return false;if(c.id==='date'&&(!p.partner||p.married))return false;return true}
function openCardTargetChoice(p,c){const others=state.players.filter(x=>x.id!==p.id);state.pendingChoice={playerId:p.id,type:c.id==='steal'?'cardSteal':'cardJealousy',returnTo:c.id==='jealousy'?'resumeTurn':'completeTurn',title:c.name,text:'対象にするプレイヤーを選んでください。',options:others.map(x=>({label:x.name,value:x.id,avatar:x.avatar,desc:'',statEffects:{}}))}}
function openFreeRollChoice(p){state.pendingChoice={playerId:p.id,type:'cardFreeRoll',returnTo:'resumeTurn',title:'自由気ままカード',text:'次のルーレットの出目を選んでください。',options:Array.from({length:10},(_,i)=>({label:`${i+1}`,value:String(i+1),desc:''}))}}
function useCard(p,index){if(p.cardUsedThisTurn)return;const id=p.cards[index],c=CARDS.find(x=>x.id===id);if(!c||!canUseCard(p,c))return;const cv=cardDisplay(c);p.cardUsedThisTurn=true;p.cards.splice(index,1);
 if(id==='steal'||id==='jealousy'){openCardTargetChoice(p,c);return}
 if(id==='freewill'){openFreeRollChoice(p);return}
 if(id==='plus2')p.nextRollBonus=5;
 if(c.fixedRoll)p.nextRollFixed=c.fixedRoll;
 if(id==='mud'){const target=pick(state.players);target.nextRollFixed=1;setMessage(p.id,'カード使用',[{text:`「${cv.name}」を使用！`,tone:'good'},{text:`${target.name}の次のルーレットの出目が1になった。`,tone:target.id===p.id?'bad':'good'}],{type:'resumeTurn'});return}
 let effectText=cv.desc;if(id==='study')applyStats(p,{knowledge:4});if(id==='charm')applyStats(p,{charm:4});if(id==='network')applyStats(p,{communication:4});if(id==='fitness')applyStats(p,{fitness:4});if(id==='bonus'){const gain=(1+rnd(30))*10000;p.cash+=gain;effectText=`臨時収入 +${money(gain)}`}if(id==='date'&&p.partner&&!p.married)p.affection+=2+romanceCharmBonus(p);const after=c.turnCost==='end'?{type:'completeTurn'}:{type:'resumeTurn'};setMessage(p.id,'カード使用',[{text:`「${cv.name}」を使用！`,tone:'good'},{text:effectText},{text:c.turnCost==='end'?'このカードの使用で手番終了。':'カード使用後もこの手番を続けられる。'}],after)}
function hostHandleAction(playerId,a){if(!isHost||!state)return;const p=state.players.find(x=>x.id===playerId);if(!p)return;
 if(state.phase==='lobby'){
  if(a.kind==='setAvatar'){const targetId=a.targetId||playerId;const target=state.players.find(x=>x.id===targetId);if(!target)return;if(target.id!==playerId&&!(p.id===localPlayerId&&target.cpu))return;const opt=AVATAR_OPTIONS.find(v=>v.id===a.avatarId);if(!opt)return;if(state.players.some(x=>x.id!==target.id&&x.avatarId===opt.id))return;setPlayerAvatar(target,opt.id);broadcast();return}
  if(a.kind==='start'){startGame();return}
  return
 }
 if(state.phase!=='playing')return;
 if(a.kind==='dismissTurnIntro'&&state.fx?.turn?.playerId===playerId&&currentPlayer()?.id===playerId){finishTurnIntro(state.fx.turn.id);return}
 if(a.kind==='nextMessage'){handleMessageNext(playerId);return}
 if(a.kind==='choose'&&state.pendingChoice?.playerId===playerId){const c=state.pendingChoice;if(c.revealing)return;const o=c.options[a.index];if(!o)return;c.id=c.id||uuid();c.revealing=true;c.selectedIndex=a.index;const revealId=c.id;broadcast();const revealTimer=setTimeout(()=>{if(!state.pendingChoice||state.pendingChoice!==c||!c.revealing||c.id!==revealId)return;state.pendingChoice=null;if(c.type==='bigGamble'&&o.value!=='skip'){beginGambleRoulette(p,o.value,c.returnTo||'completeTurn');return}if(c.type==='date'&&o.value==='propose'){beginProposalCheck(p,c.returnTo||'completeTurn');broadcast();return}if(c.type==='retire'&&o.value==='challenge'){beginRetireChallengeCheck(p,c.returnTo||'completeTurn');broadcast();return}if(c.type==='startEvent'){resolveLandingEffect(p,0,{type:o.value,title:spaceMeta(o.value)[1],icon:spaceMeta(o.value)[0],fromStartChoice:true});broadcast();return}const lines=[{text:choiceAnnouncement(p,c,o)},...applyChoice(p,c,o)];if(c.type==='job'&&queuedImmediatePromotion?.playerId===p.id){const q=queuedImmediatePromotion;queuedImmediatePromotion=null;beginPromotionRoulette(p,q.check,lines,'転職・昇格',{type:c.returnTo||'completeTurn'});return}setMessage(p.id,'選択',lines,{type:c.returnTo||'completeTurn'});broadcast()},1200);hostTimers.push(revealTimer);return}
 if(a.kind==='advanceRoll'&&state.pendingRollAdvance?.playerId===playerId&&state.pendingRollAdvance.ready){const steps=state.pendingRollAdvance.result;startMove(p,steps);return}
 if(a.kind==='promotionRoll'&&state.pendingPromotion?.playerId===playerId&&state.pendingPromotion.phase==='await'&&!state.message&&!state.pendingChoice){startPendingPromotionRoll(playerId);return}
 if(a.kind==='checkRoll'&&state.pendingCheck?.playerId===playerId&&state.pendingCheck.phase==='await'&&!state.message&&!state.pendingChoice){startPendingCheckRoll(playerId);return}
 if(a.kind==='gambleRoll'&&state.pendingGamble?.playerId===playerId&&state.pendingGamble.phase!=='spinning'&&!state.message&&!state.pendingChoice){startPendingGambleRoll(playerId);return}
 if(a.kind==='branchChoose'&&state.pendingBranch?.playerId===playerId){if(a.option!=='main'&&a.option!=='alt')return;chooseBranchRoute(p,a.option);return}
 const cp=currentPlayer();if(!cp||cp.id!==playerId)return;
 if(a.kind==='discardCard'&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice){const i=Number(a.index);if(Number.isInteger(i)&&i>=0&&i<p.cards.length){const id=p.cards[i],cv=cardDisplay(CARDS.find(x=>x.id===id));p.cards.splice(i,1);addLog(`${p.name}は「${cv.name}」を捨てた`);state.turnReady=false;setMessage(p.id,'カードを捨てた',[{text:`${p.name}が「${cv.name}」を捨てた。`,tone:'normal'}],{type:'resumeTurn'});broadcast()}return}
 if(a.kind==='useCard'&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice&&!p.cardUsedThisTurn){useCard(p,a.index);broadcast();return}
 if(a.kind==='roll'&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice&&!state.pendingGamble&&!state.pendingPromotion&&!state.pendingCheck){doRoll(p);return}
}
function finishGame(){state.message=null;state.pendingChoice=null;state.pendingBranch=null;state.pendingRollAdvance=null;state.pendingPromotion=null;state.pendingCheck=null;state.pendingGamble=null;state.busy=false;if(state.fx){state.fx.landing=null;state.fx.turn=null;state.fx.roulette=null;state.fx.lastTurn=null}state.turnReady=false;state.players.forEach(p=>{for(const t of p.treasures){const def=TREASURES.find(x=>x.id===t.id);t.appraised=Math.round(def.buy+(def.max-def.buy)*(.25+Math.random()*.75))}});state.resultId=uuid();state.resultPresentation={index:0,summary:false};state.phase='finished';prepareResults();resultSessionKey='';resultRevealIndex=0;resultSummaryVisible=false}
function prepareResults(){if(state.resultPrepared)return;state.resultPrepared=true;const awards=[
 ['知力ナンバー1',p=>p.stats.knowledge],
 ['体力ナンバー1',p=>p.stats.fitness],
 ['魅力ナンバー1',p=>p.stats.charm],
 ['交流ナンバー1',p=>p.stats.communication],
 ['思い出最多',p=>p.memory],
 ['家族にぎやか賞',p=>childCount(p)],
 ['キャリアトップ',p=>(p.jobRank||0)*1000+(p.jobExp||0)],
 ['最高給料',p=>salaryNow(p)+familyIncome(p)],
 ['物件コレクター',p=>p.properties.length],
 ['お宝コレクター',p=>p.treasures.length]
 ];state.awards=[];for(const [name,fn] of awards){const best=Math.max(...state.players.map(fn)),winners=state.players.filter(p=>fn(p)===best),bonus=Math.round(180000/winners.length);winners.forEach(p=>p.awards+=bonus);state.awards.push({name,winners:winners.map(p=>p.name),bonus})}}
function resultAssetParts(p){const properties=p.properties.reduce((sum,id)=>sum+(PROPS.find(x=>x.id===id)?.value||0),0),treasures=p.treasures.reduce((sum,t)=>sum+(t.appraised||0),0),awards=p.awards||0,totalBeforeAwards=p.cash+properties+treasures;return{cash:p.cash,properties,treasures,awards,totalBeforeAwards,total:totalBeforeAwards+awards}}
function ensureResultPresentation(){const key=state.resultId||`legacy_${roomCode}_${state.players.map(p=>p.id).join('_')}`;if(resultSessionKey!==key)resultSessionKey=key;if(!state.resultPresentation)state.resultPresentation={index:0,summary:false};resultRevealIndex=Math.max(0,Number(state.resultPresentation.index)||0);resultSummaryVisible=!!state.resultPresentation.summary}
function resultRevealSteps(){const steps=[{kind:'intro',title:'人生の総決算',subtitle:`${modeDef().name}`,html:`<div class="result-big-copy">長いライフロード、おつかれさまでした。</div><div class="result-copy">最初に、ゲーム中に手に入れたお宝を1個ずつ鑑定します。そのあと各プレイヤーの人生、特別賞、最終順位を発表します。</div>`}];
 const treasureReveals=[];for(const p of state.players){for(const t of p.treasures||[]){const def=TREASURES.find(x=>x.id===t.id);if(def)treasureReveals.push({p,t,def})}}
 if(treasureReveals.length){
  steps.push({kind:'treasureIntro',title:'お宝鑑定',subtitle:'TREASURE',html:`<div class="result-award-icon">💎</div><div class="result-big-copy">お宝の価値を発表！</div><div class="result-copy">入手したお宝を1個ずつ鑑定していきます。</div>`});
  treasureReveals.forEach(({p,t,def},i)=>steps.push({kind:'treasure',title:def.name,subtitle:`お宝鑑定 ${i+1} / ${treasureReveals.length}`,html:`<div class="result-award-icon">💎</div><div class="result-big-copy">${money(t.appraised||0)}</div><div class="result-copy"><strong>${esc(p.name)}</strong> が入手した「${esc(def.name)}」<br>購入額 ${money(def.buy)} → 鑑定額 <strong>${money(t.appraised||0)}</strong></div>`}));
 }
 for(const p of state.players){const a=resultAssetParts(p),family=p.married?`${esc(p.partner?.name||'パートナー')}（${esc(partnerTypeDef(p.partner).name)}）と結婚・子ども${childCount(p)}人`:`未婚・子ども${childCount(p)}人`,job=p.job?`${esc(jobDisplayName(p.job))} Lv.${p.jobRank}`:'引退';steps.push({kind:'player',title:`${p.name}の人生`,subtitle:'個人集計',html:`<div class="result-player-card"><div class="result-player-visual"><img src="${esc(p.avatar||AVATARS[0])}" alt=""><strong>${esc(p.name)}</strong></div><div class="result-player-life"><div><b>仕事</b><span>${job}</span></div><div><b>家族</b><span>${family}</span></div><div><b>能力</b><span>知力 ${p.stats.knowledge} / 体力 ${p.stats.fitness} / 魅力 ${p.stats.charm} / 交流 ${p.stats.communication}</span></div><div><b>思い出</b><span>${p.memory}</span></div></div><div class="result-money-breakdown"><div><span>現金</span><b>${money(a.cash)}</b></div><div><span>物件</span><b>${money(a.properties)}</b></div><div><span>お宝</span><b>${money(a.treasures)}</b></div><div class="result-money-total"><span>特別賞前の資産</span><b>${money(a.totalBeforeAwards)}</b></div></div></div>`})}
 for(const a of state.awards){steps.push({kind:'award',title:a.name,subtitle:'特別賞',html:`<div class="result-award-icon">🏆</div><div class="result-big-copy">${a.winners.map(esc).join('・')}</div><div class="result-copy">${esc(a.name)}を獲得！　賞金は1人 ${money(a.bonus)}。</div>`})}
 steps.push({kind:'final',title:'すべての集計が完了',subtitle:'FINAL',html:`<div class="result-award-icon">🎉</div><div class="result-big-copy">いよいよ最終順位です。</div><div class="result-copy">特別賞も総資産に加算されました。次の画面で順位と人生の総評をまとめて確認できます。</div>`});return steps}
function resultOverallComment(rows){if(!rows.length)return'';const winner=rows[0],memoryTop=[...state.players].sort((a,b)=>(b.memory+childCount(b)*5)-(a.memory+childCount(a)*5))[0],careerTop=[...state.players].sort((a,b)=>(b.jobRank||0)-(a.jobRank||0))[0];return `<div class="result-overall"><div class="result-overall-title">ライフロード 総評</div><p>今回の1位は <strong>${esc(winner.name)}</strong>。最終総資産は <strong>${money(assetScore(winner))}</strong> でした。</p><p>思い出と家族の積み重ねが目立ったのは <strong>${esc(memoryTop.name)}</strong>${careerTop?.job?`、仕事では <strong>${esc(careerTop.name)}</strong> が ${esc(jobDisplayName(careerTop.job))} Lv.${careerTop.jobRank} まで歩みました。`:'。'} お金だけでなく、仕事・家族・能力にもそれぞれ違った人生が残りました。</p></div>`}
function hideResultObscuringUi(){[els.message,els.messageScene,els.messageClickLayer,els.choice,els.turnBanner,els.lastTurnBanner,els.curtain,els.spaceDetail].forEach(e=>e?.classList.add('hidden'))}
function renderResultReveal(){const steps=resultRevealSteps(),idx=Math.max(0,Number(state.resultPresentation?.index)||0),step=steps[Math.min(idx,steps.length-1)];if(!step)return;els.resultStepLabel.textContent=`${step.subtitle}　${Math.min(idx+1,steps.length)} / ${steps.length}`;els.resultRevealArea.innerHTML=`<div class="result-reveal-title">${esc(step.title)}</div>${step.html}`;if(els.resultPrev){els.resultPrev.disabled=!isHost||idx<=0;els.resultPrev.textContent=isHost?'戻る':'ホストの操作待ち'}els.resultNext.disabled=!isHost;els.resultNext.textContent=isHost?(idx>=steps.length-1?'最終順位・総評を見る':'次へ'):'ホストの操作待ち'}
function advanceResultPresentation(){if(!isHost)return;ensureResultPresentation();const steps=resultRevealSteps(),rp=state.resultPresentation;if(rp.index<steps.length-1){rp.index++;resultRevealIndex=rp.index;broadcast();window.scrollTo({top:0,behavior:'smooth'});return}rp.summary=true;resultSummaryVisible=true;broadcast();window.scrollTo({top:0,behavior:'smooth'})}
function retreatResultPresentation(){if(!isHost)return;ensureResultPresentation();const rp=state.resultPresentation;if(rp.summary){rp.summary=false;rp.index=Math.max(0,resultRevealSteps().length-1);resultSummaryVisible=false;resultRevealIndex=rp.index;broadcast();window.scrollTo({top:0,behavior:'smooth'});return}if(rp.index>0){rp.index--;resultRevealIndex=rp.index;broadcast();window.scrollTo({top:0,behavior:'smooth'})}}

function renderResult(){hideResultObscuringUi();ensureResultPresentation();const rows=[...state.players].sort((a,b)=>assetScore(b)-assetScore(a));if(els.back){els.back.disabled=!isHost;els.back.textContent=isHost?'リザルトを終了してトップへ':'ホストが終了するまで待機'}if(state.resultPresentation.summary){els.resultCeremony.classList.add('hidden');els.resultSummaryWrap.classList.remove('hidden');if(els.resultSummaryBack){els.resultSummaryBack.disabled=!isHost;els.resultSummaryBack.textContent=isHost?'発表を見直す':'ホストの操作待ち'}els.awardArea.innerHTML=state.awards.map(a=>`<div class="award"><strong>${esc(a.name)}</strong>：${a.winners.map(esc).join('・')}　賞金 ${money(a.bonus)} / 人</div>`).join('');els.resultArea.innerHTML=`${resultOverallComment(rows)}<table class="summary-table"><thead><tr><th>順位</th><th>名前</th><th>総資産</th><th>現金</th><th>仕事</th><th>家族</th><th>物件/お宝</th></tr></thead><tbody>${rows.map((p,i)=>`<tr class="${i===0?'rank1':''}"><td>${i+1}位</td><td>${esc(p.name)}</td><td><strong>${money(assetScore(p))}</strong></td><td>${money(p.cash)}</td><td>${p.job?esc(jobDisplayName(p.job))+' Lv.'+p.jobRank:'引退'}</td><td>${p.married?'結婚':''} 子${childCount(p)}</td><td>${p.properties.length}/${p.treasures.length}</td></tr>`).join('')}</tbody></table><div class="note" style="margin-top:10px">総資産＝現金＋物件価値＋お宝鑑定額＋特別賞。</div>`}else{els.resultSummaryWrap.classList.add('hidden');els.resultCeremony.classList.remove('hidden');renderResultReveal()}}
function broadcastResultsIfHost(){if(isHost)connections.forEach(c=>{if(c.open)c.send({type:'snapshot',state})})}
function maybeRunCpu(){clearTimeout(cpuTimer);if(!isHost||state?.phase!=='playing')return;if(state.fx?.titleCut)return;if(state.pendingPromotion){const x=state.pendingPromotion,po=state.players.find(p=>p.id===x.playerId);if(po?.cpu){if(x.phase==='await')cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'promotionRoll'}),Math.round(820*speedScale()));else if(x.phase==='intro'&&state.message?.ownerId===po.id)cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'nextMessage'}),cpuMessageDelay(state.message));}return}if(state.pendingCheck){const x=state.pendingCheck,po=state.players.find(p=>p.id===x.playerId);if(po?.cpu){if(x.phase==='await')cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'checkRoll'}),Math.round(820*speedScale()));else if(x.phase==='intro'&&state.message?.ownerId===po.id)cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'nextMessage'}),cpuMessageDelay(state.message));}return}if(state.pendingGamble){const g=state.pendingGamble,po=state.players.find(x=>x.id===g.playerId);if(po?.cpu&&g.phase!=='spinning')cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'gambleRoll'}),Math.round(820*speedScale()));return}if(state.fx.stage||state.fx.turn||state.fx.lastTurn)return;if(state.pendingBranch){const pb=state.pendingBranch,po=state.players.find(x=>x.id===pb.playerId);if(po?.cpu){const br=branchDef(pb.stageIndex),risk=cpuDef(po.cpuType).w.risk||1,altChance=clamp(.56+(risk-1)*.08,.42,.72);cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'branchChoose',option:Math.random()<altChance?'alt':'main'}),Math.round(900*speedScale()))}return}const pr=state.pendingRollAdvance;if(pr?.ready){const po=state.players.find(x=>x.id===pr.playerId);if(po?.cpu)cpuTimer=setTimeout(()=>hostHandleAction(po.id,{kind:'advanceRoll'}),Math.round(700*speedScale()));return}const m=state.message;if(m){const owner=state.players.find(p=>p.id===m.ownerId);if(owner?.cpu)cpuTimer=setTimeout(()=>hostHandleAction(owner.id,{kind:'nextMessage'}),cpuMessageDelay(m));return}if(state.busy)return;const c=state.pendingChoice;if(c){if(c.revealing)return;const p=state.players.find(x=>x.id===c.playerId);if(p?.cpu)cpuTimer=setTimeout(()=>{let best=0;if(c.type==='bigGamble')best=cpuBigGambleChoiceIndex(p,c);else{let bestS=-1e9;c.options.forEach((o,i)=>{const s=cpuScoreOption(p,o);if(s>bestS){bestS=s;best=i}})}hostHandleAction(p.id,{kind:'choose',index:best})},Math.round(850*speedScale()));return}const p=currentPlayer();if(p?.cpu&&state.turnReady)cpuTimer=setTimeout(()=>{if(!p.cardUsedThisTurn&&p.cards.length&&Math.random()<.20){const idx=p.cards.findIndex(id=>{const c=CARDS.find(x=>x.id===id);return c&&c.id!=='guard'&&(cpuDef(p.cpuType).w[c.tag]||1)>1.3});if(idx>=0){hostHandleAction(p.id,{kind:'useCard',index:idx});return}}hostHandleAction(p.id,{kind:'roll'})},Math.round(720*speedScale()))}
function randomCode(){return String(Math.floor(100000+Math.random()*900000))}
function createRoom(){ensureAudio();clearSavedSession();intentionalDisconnect=false;localHomeView=false;const name=cleanName(els.hostName.value);roomCode=randomCode();isHost=true;state=newState();const p=makePlayer(name);state.players.push(p);localPlayerId=p.id;show(els.lobby);render();saveSession();openHostPeer(false)}
function joinRoom(){ensureAudio();clearSavedSession();intentionalDisconnect=false;localHomeView=false;const name=cleanName(els.joinName.value),code=(els.roomInput.value||'').replace(/\D/g,'').slice(0,6);if(code.length!==6){alert('6桁の部屋コードを入力してください');return}roomCode=code;isHost=false;localPlayerId='';state={phase:'lobby',players:[],settings:{variant:'normal',mode:'standard',speed:'normal',messageSpeed:'normal'},fx:{roulette:null,move:null,stage:null,turn:null,landing:null,titleCut:null}};show(els.lobby);net('ホストへ接続中...');
 if(typeof Peer==='undefined'){alert('オンライン通信ライブラリを読み込めませんでした。');show(els.home);return}
 connectGuestToHost(false);
}
function addCpu(){if(!isHost||state.players.length>=4)return;const type=pick(CPU_TYPES),p=makePlayer('',true,type.id);syncCpuCharacterName(p,true);state.players.push(p);addLog(`${p.name}（${type.name}）を追加`);broadcast()}
function fillCpu(){while(isHost&&state.players.length<4)addCpu()}
function removeCpu(id){if(!isHost||state.phase!=='lobby')return;state.players=state.players.filter(p=>p.id!==id);state.players.forEach((p,i)=>p.color=COLORS[i]);broadcast()}
function handleFx(){const f=state.fx;if(f.roulette&&lastFx.roulette!==f.roulette.id){const result=f.roulette.result,moveResult=f.roulette.moveResult??result;lastFx.roulette=f.roulette.id;animateRoulette(result,moveResult);sfxRoulette();const delay=Math.round(1450*speedScale());if(f.roulette.kind!=='promotion')setTimeout(()=>{if(f.roulette.kind==='move')focusBoardAfterRoulette();setTimeout(()=>showBoardRollPop(moveResult),window.innerWidth<900?330:120)},delay)}const mv=f.move;if(mv){const key=mv.id+'_'+mv.step;if(lastFx.move!==key){lastFx.move=key;sfxStep();requestAnimationFrame(focusBoardCamera)}}if(f.stage&&lastFx.stage!==f.stage.id){lastFx.stage=f.stage.id;updateBgmForState(true);sfxStage()}const m=state.message;if(m){const key=m.id+'_'+m.index;if(lastFx.message!==key){lastFx.message=key;els.messageText.classList.remove('message-enter');void els.messageText.offsetWidth;els.messageText.classList.add('message-enter');const line=m.lines[m.index];if(line?.tone==='good')sfxGood();else if(line?.tone==='bad')sfxBad()}}}
function focusBoardAfterRoulette(){
 if(!els.boardPanel||state?.phase!=='playing')return;
 // Keep the player's attention on the map after a movement roulette on both desktop and mobile.
 els.boardPanel.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
 setTimeout(()=>focusBoardCamera(),window.innerWidth<900?260:180);
}
function animateRoulette(result,displayResult=result){
 clearTimeout(rollVisualTimer);clearTimeout(mobileBoardFocusTimer);
 els.roll.textContent='…';els.wheel.style.transition='none';els.wheel.style.transform='rotate(0deg)';
 requestAnimationFrame(()=>requestAnimationFrame(()=>{els.wheel.style.transition=`transform ${Math.round(1350*speedScale())}ms cubic-bezier(.12,.67,.12,1)`;const target=1080+(10-result)*36+18;els.wheel.style.transform=`rotate(${target}deg)`}));
 rollVisualTimer=setTimeout(()=>{els.roll.textContent=displayResult===result?String(result):`${result}+${displayResult-result}=${displayResult}`},Math.round(1050*speedScale()));

}
function ensureAudio(){if(!bgmOn&&!sfxOn)return;if(!audioCtx){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;audioCtx=new AC()}if(audioCtx.state==='suspended')audioCtx.resume();if(bgmOn&&!bgmTimer)updateBgmForState(true)}
function tone(freq,dur=.09,g=.028,type='sine',when=0,kind='sfx'){if(!audioCtx)return;if(kind==='bgm'?!bgmOn:!sfxOn)return;const o=audioCtx.createOscillator(),gain=audioCtx.createGain();o.type=type;o.frequency.value=freq;gain.gain.setValueAtTime(Math.min(.58,g*6*masterVolume),audioCtx.currentTime+when);gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+when+dur);o.connect(gain).connect(audioCtx.destination);o.start(audioCtx.currentTime+when);o.stop(audioCtx.currentTime+when+dur+.02)}
const BGM_THEMES={
 lobby:{seq:[330,392,494,392,349,440,523,440],tempo:390,wave:'triangle',gain:.014,bass:.010},
 bright:{seq:[523,659,784,659,587,698,880,784],tempo:255,wave:'triangle',gain:.018,bass:.011},
 warm:{seq:[392,494,587,494,440,523,659,523],tempo:410,wave:'sine',gain:.017,bass:.011},
 choice:{seq:[330,392,440,392,349,415,466,415],tempo:340,wave:'triangle',gain:.015,bass:.010},
 eerie:{seq:[220,233,196,185,207,174,196,165],tempo:470,wave:'sine',gain:.014,bass:.012},
 trouble:{seq:[220,196,174,196,185,165,147,165],tempo:310,wave:'triangle',gain:.016,bass:.012},
 tension:{seq:[262,294,311,349,311,294,370,349],tempo:225,wave:'square',gain:.011,bass:.010},
 result:{seq:[523,659,784,1047,880,784,659,784],tempo:330,wave:'triangle',gain:.019,bass:.012},
 field0:{seq:[262,330,392,330,294,349,392,349],tempo:355,wave:'triangle',gain:.015,bass:.010},
 field1:{seq:[294,370,440,370,330,392,494,392],tempo:335,wave:'triangle',gain:.015,bass:.010},
 field2:{seq:[247,294,370,294,220,277,330,277],tempo:370,wave:'triangle',gain:.015,bass:.010},
 field3:{seq:[262,311,392,311,294,349,466,349],tempo:345,wave:'triangle',gain:.015,bass:.010},
 field4:{seq:[220,277,330,277,247,294,370,294],tempo:360,wave:'triangle',gain:.015,bass:.010},
 field5:{seq:[196,247,294,247,220,262,330,262],tempo:390,wave:'triangle',gain:.015,bass:.010},
 field6:{seq:[175,220,262,220,196,247,294,247],tempo:420,wave:'sine',gain:.016,bass:.011}
};
function desiredBgmTheme(){
 if(localHomeView)return'lobby';
 if(!state)return'lobby';
 if(state.phase==='finished')return'result';
 if(state.phase!=='playing')return'lobby';
 if(state.pendingPromotion||state.pendingCheck||state.pendingGamble||state.pendingChoice?.type==='bigGamble'||state.fx?.lastTurn)return'tension';
 if(state.pendingChoice)return'choice';
 const m=state.message;
 if(m){
  const line=m.lines?.[m.index],text=`${m.speaker||''} ${typeof line==='string'?line:(line?.text||'')}`,toneName=typeof line==='string'?'normal':(line?.tone||'normal');
  if(isToga()&&/黒|怪異|行方不明|見知らぬ|存在しない|石像|砂嵐|深夜|名状|異様|押し入れ|廊下|転移|星の並び|排水路|白い部屋/.test(text))return'eerie';
  if(/恋愛|家族|デート|結婚|誕生|パートナー/.test(text))return'warm';
  if(toneName==='bad')return'trouble';
  if(toneName==='good')return'bright';
 }
 return`field${state.stageIndex||0}`;
}
function updateBgmForState(force=false){if(!bgmOn||!audioCtx||audioCtx.state!=='running')return;const key=desiredBgmTheme();if(!force&&bgmThemeKey===key&&bgmTimer)return;startBgmTheme(key)}
function startBgmTheme(key){if(!bgmOn)return;ensureAudioCore();if(!audioCtx)return;const cfg=BGM_THEMES[key]||BGM_THEMES.field0;bgmThemeKey=key;bgmStep=0;if(bgmTimer)clearInterval(bgmTimer);bgmTimer=setInterval(()=>{if(!bgmOn||!audioCtx||audioCtx.state!=='running')return;const f=cfg.seq[bgmStep++%cfg.seq.length];tone(f,.25,cfg.gain,cfg.wave,0,'bgm');if(bgmStep%4===1)tone(f/2,.34,cfg.bass,'sine',0,'bgm');if((key==='eerie'||key==='tension')&&bgmStep%4===3)tone(f*1.5,.16,cfg.gain*.45,'sine',.04,'bgm')},cfg.tempo)}
function startBgm(si){bgmStage=si;startBgmTheme(`field${si}`)}
function ensureAudioCore(){if(!audioCtx){const AC=window.AudioContext||window.webkitAudioContext;if(AC)audioCtx=new AC()}}
function sfxStep(){tone(520,.055,.026,'square')}function sfxGood(){tone(659,.11,.034,'triangle');tone(784,.13,.028,'triangle',.07)}function sfxBad(){tone(220,.13,.032,'sawtooth');tone(174,.17,.026,'sawtooth',.08)}function sfxStage(){tone(392,.13,.038,'triangle');tone(523,.15,.035,'triangle',.1);tone(659,.19,.032,'triangle',.2)}
function sfxRoulette(){if(!sfxOn||!audioCtx)return;let i=0;const tick=setInterval(()=>{tone(760-i*10,.025,.012,'square');i++;if(i>15)clearInterval(tick)},Math.max(35,Math.round(65*speedScale())))}
function updateVolumeUi(){if(!els.volumeSlider)return;els.volumeSlider.value=String(Math.round(masterVolume*100));if(els.volumeValue)els.volumeValue.textContent=`${Math.round(masterVolume*100)}%`}
function updateAudioToggleUi(){if(els.bgmBtn){els.bgmBtn.textContent=bgmOn?'🎵 BGM ON':'🎵 BGM OFF';els.bgmBtn.classList.toggle('off',!bgmOn)}if(els.sfxBtn){els.sfxBtn.textContent=sfxOn?'🔔 効果音 ON':'🔕 効果音 OFF';els.sfxBtn.classList.toggle('off',!sfxOn)}}
function setMasterVolume(v){masterVolume=Math.max(0,Math.min(1,Number(v)||0));localStorage.setItem('lifeRoadVolume',String(masterVolume));updateVolumeUi();if(masterVolume>0&&(bgmOn||sfxOn))ensureAudio()}
function applyPortraitCollapsed(){if(!els.portraitPanel)return;els.portraitPanel.classList.toggle('collapsed',portraitCollapsed);if(els.portraitToggle){const mobile=window.innerWidth<=900;els.portraitToggle.setAttribute('aria-expanded',portraitCollapsed?'false':'true');els.portraitToggle.title=portraitCollapsed?'手番キャラクター表示を開く':'手番キャラクター表示を収納';els.portraitToggle.textContent=mobile?(portraitCollapsed?'▲':'▼'):(portraitCollapsed?'▶':'◀')}}
function togglePortraitPanel(){portraitCollapsed=!portraitCollapsed;localStorage.setItem('lifeRoadPortraitCollapsed',portraitCollapsed?'1':'0');applyPortraitCollapsed();renderBranchMobilePanel()}
async function repairAudio(){
 const btn=els.audioFixBtn,original='🔊 音が鳴らない時に押す';
 try{
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!AC){if(btn){btn.textContent='⚠️ このブラウザは音声非対応';setTimeout(()=>btn.textContent=original,2200)}return}
  if(!audioCtx||audioCtx.state==='closed')audioCtx=new AC();
  if(audioCtx.state!=='running')await audioCtx.resume();
  if(masterVolume<=0){masterVolume=1;localStorage.setItem('lifeRoadVolume','1');updateVolumeUi()}
  // Direct confirmation chime: does not depend on the BGM/SE toggles.
  const now=audioCtx.currentTime;
  [659.25,783.99,987.77].forEach((f,i)=>{
   const o=audioCtx.createOscillator(),g=audioCtx.createGain();
   o.type='sine';o.frequency.value=f;
   g.gain.setValueAtTime(.07*masterVolume,now+i*.09);
   g.gain.exponentialRampToValueAtTime(.0001,now+i*.09+.16);
   o.connect(g).connect(audioCtx.destination);
   o.start(now+i*.09);o.stop(now+i*.09+.18)
  });
  if(bgmTimer){clearInterval(bgmTimer);bgmTimer=null}
  bgmThemeKey='';
  if(bgmOn)updateBgmForState(true);
  if(btn){btn.textContent='✅ 音声を再有効化';setTimeout(()=>btn.textContent=original,1800)}
 }catch(err){
  console.warn('audio repair failed',err);
  try{
   if(audioCtx&&audioCtx.state!=='closed')await audioCtx.close();
  }catch(_){}
  audioCtx=null;
  if(btn){btn.textContent='⚠️ もう一度押してください';setTimeout(()=>btn.textContent=original,2200)}
 }
}
function toggleBgm(){bgmOn=!bgmOn;localStorage.setItem('lifeRoadBgmOn',bgmOn?'1':'0');updateAudioToggleUi();if(bgmOn){ensureAudio();updateBgmForState(true)}else if(bgmTimer){clearInterval(bgmTimer);bgmTimer=null}}
function toggleSfx(){sfxOn=!sfxOn;localStorage.setItem('lifeRoadSfxOn',sfxOn?'1':'0');updateAudioToggleUi();if(sfxOn)ensureAudio()}
els.wheel.innerHTML='';setupBoardDrag();
const advanceRollInput=e=>{if(!state?.pendingRollAdvance?.ready)return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation?.();tryAdvancePendingRoll()};
els.rollWaitLayer?.addEventListener('pointerdown',advanceRollInput,{capture:true});
els.rollWaitLayer?.addEventListener('click',advanceRollInput,{capture:true});
els.boardPanel?.addEventListener('pointerdown',e=>{if(state?.pendingRollAdvance?.ready)advanceRollInput(e)},{capture:true});
els.mapOverviewBtn?.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation?.()},{capture:true});els.mapOverviewBtn?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggleMapOverview()});
els.avatarPickerClose?.addEventListener('click',closeAvatarPicker);els.spaceDetailClose?.addEventListener('click',closeSpaceDetail);els.spaceDetail?.addEventListener('click',e=>{if(e.target===els.spaceDetail)closeSpaceDetail()});
els.avatarPicker?.addEventListener('click',e=>{if(e.target===els.avatarPicker)closeAvatarPicker()});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){if(els.avatarPicker&&!els.avatarPicker.classList.contains('hidden'))closeAvatarPicker();if(els.spaceDetail&&!els.spaceDetail.classList.contains('hidden'))closeSpaceDetail()}});

els.resultNext?.addEventListener('click',advanceResultPresentation);els.resultPrev?.addEventListener('click',retreatResultPresentation);els.resultSummaryBack?.addEventListener('click',retreatResultPresentation);

function openHowto(){if(!els.howtoOverlay)return;els.howtoOverlay.classList.remove('hidden');document.body.classList.add('howto-open');const sc=els.howtoOverlay.querySelector('.howto-scroll');if(sc)sc.scrollTop=0;els.howtoClose?.focus()}
function closeHowto(){if(!els.howtoOverlay)return;els.howtoOverlay.classList.add('hidden');document.body.classList.remove('howto-open');els.howtoBtn?.focus()}

els.create.addEventListener('click',createRoom);els.join.addEventListener('click',joinRoom);els.addCpu.addEventListener('click',addCpu);els.fillCpu.addEventListener('click',fillCpu);els.start.addEventListener('click',()=>sendAction({kind:'start'}));els.rollBtn.addEventListener('click',()=>{const task=pendingInteractiveRoll();sendAction({kind:task?.action||'roll'})});els.variant?.addEventListener('change',()=>{if(!isHost)return;state.settings.variant=els.variant.value==='toga'?'toga':'normal';broadcast()});els.mode.addEventListener('change',()=>{if(!isHost)return;state.settings.mode=els.mode.value;broadcast()});els.speed.addEventListener('change',()=>{if(!isHost)return;state.settings.speed=els.speed.value;broadcast()});els.messageSpeed?.addEventListener('change',()=>{if(!isHost)return;state.settings.messageSpeed=els.messageSpeed.value;broadcast()});els.bgmBtn?.addEventListener('click',toggleBgm);els.sfxBtn?.addEventListener('click',toggleSfx);els.audioFixBtn?.addEventListener('click',repairAudio);els.volumeSlider?.addEventListener('input',e=>setMasterVolume(Number(e.target.value)/100));els.howtoBtn?.addEventListener('click',openHowto);els.howtoClose?.addEventListener('click',closeHowto);els.howtoOverlay?.addEventListener('click',e=>{if(e.target===els.howtoOverlay)closeHowto()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!els.howtoOverlay?.classList.contains('hidden'))closeHowto()});els.back.addEventListener('click',exitResultsToTitle);els.gameHomeBtn?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();showTopScreen()});els.leaveGameBtn?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();leaveCurrentGame(true)});els.resumeBtn?.addEventListener('click',()=>{if(localHomeView&&state)returnToActiveSession();else resumeLastSession()});els.discardResumeBtn?.addEventListener('click',()=>{if(localHomeView&&state)leaveCurrentGame(true);else{clearSavedSession();refreshResumeCard()}});
els.portraitToggle?.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();if(portraitTogglePointerLock)return;portraitTogglePointerLock=true;togglePortraitPanel();setTimeout(()=>portraitTogglePointerLock=false,180)},{capture:true});updateVolumeUi();updateAudioToggleUi();applyPortraitCollapsed();refreshResumeCard();
let messageAdvanceLock=false;
function canAdvanceLocalMessage(){if(!state?.message)return false;const owner=state.players.find(p=>p.id===state.message.ownerId);return state.message.ownerId===localPlayerId&&!owner?.cpu}
function advanceMessage(){if(!canAdvanceLocalMessage()||messageAdvanceLock)return;if(finishTypewriter()){if(state?.message)els.messageOwner.textContent='クリックで次へ';return}messageAdvanceLock=true;sendAction({kind:'nextMessage'});setTimeout(()=>{messageAdvanceLock=false},120)}
// Capture at document level so clicking the board, side UI, portrait, or message frame all advances the current message.
document.addEventListener('click',e=>{const priority=e.target?.closest?.('#portraitToggle,#mapOverviewBtn,#gameHomeBtn,#leaveGameBtn,#resumeBtn,#discardResumeBtn,#spaceDetailOverlay,.map-node[data-space-index]');if(priority){if(priority.matches?.('.map-node[data-space-index]')&&canAdvanceLocalMessage()){e.preventDefault();e.stopPropagation();advanceMessage();return}if(priority.id==='portraitToggle'){e.preventDefault();e.stopImmediatePropagation()}return}if(tryAdvancePendingRoll()){e.preventDefault();e.stopPropagation();return}const tf=state?.fx?.turn,tp=tf&&state?.players?.find(p=>p.id===tf.playerId);if(tf&&tp?.id===localPlayerId&&!tp.cpu){e.preventDefault();e.stopPropagation();sendAction({kind:'dismissTurnIntro'});return}if(!canAdvanceLocalMessage())return;e.preventDefault();e.stopPropagation();advanceMessage()},{capture:true});
document.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){if(tryAdvancePendingRoll()){e.preventDefault();return}if(canAdvanceLocalMessage()){e.preventDefault();advanceMessage()}}},{capture:true});
const unlockAudio=()=>{if(bgmOn||sfxOn)ensureAudio()};document.addEventListener('pointerdown',unlockAudio,{capture:true});document.addEventListener('touchstart',unlockAudio,{capture:true,passive:true});document.addEventListener('click',unlockAudio,{capture:true});window.addEventListener('resize',()=>{applyPortraitCollapsed();if(state?.phase==='playing'){renderBoard();renderBranchMobilePanel();requestAnimationFrame(()=>focusBoardCamera())}updateBoardDragUi()});
window.addEventListener('beforeunload',saveSession);
const navType=performance?.getEntriesByType?.('navigation')?.[0]?.type;if(navType==='reload'&&loadSession())setTimeout(resumeLastSession,80);
if(globalThis.__LIFE_NODE_TEST__){globalThis.__lifeDebug={newState,makePlayer,startGame,hostHandleAction,maybeRunCpu,getState:()=>state,setHost:v=>{isHost=v},setState:v=>{state=v},setLocalPlayerId:v=>{localPlayerId=v},addCpu,fillCpu,rankUpCheck,promotionRequirements,promotionProgressText,eligibleJobs,applyHiddenEventChoice,useCard,CARDS,JOBS,CHOICE_EVENTS,TOGA_CHOICE_EVENTS,TOGA_EVENTS,isToga};}
})();
