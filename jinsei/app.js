
(()=>{
'use strict';
const $=s=>document.querySelector(s);
const els={home:$('#homeScreen'),lobby:$('#lobbyScreen'),game:$('#gameScreen'),result:$('#resultScreen'),hostName:$('#hostName'),joinName:$('#joinName'),roomInput:$('#roomInput'),create:$('#createBtn'),join:$('#joinBtn'),roomCode:$('#roomCodeText'),net:$('#netStatus'),lobbyPlayers:$('#lobbyPlayers'),start:$('#startBtn'),mode:$('#modeSelect'),modeInfo:$('#modeInfo'),speed:$('#speedSelect'),hostLobby:$('#hostLobbyControls'),addCpu:$('#addCpuBtn'),fillCpu:$('#fillCpuBtn'),gamePlayers:$('#gamePlayers'),board:$('#board'),boardPanel:$('#boardPanel'),turnName:$('#turnName'),turnStage:$('#turnStage'),roll:$('#rollDisplay'),wheel:$('#rouletteWheel'),rollBtn:$('#rollBtn'),hint:$('#turnHint'),cards:$('#cardArea'),assets:$('#assetArea'),log:$('#gameLog'),choice:$('#choiceOverlay'),messageClickLayer:$('#messageClickLayer'),choiceTitle:$('#choiceTitle'),choiceText:$('#choiceText'),choiceStatus:$('#choiceStatus'),choiceList:$('#choiceList'),message:$('#messageWindow'),messageSpeaker:$('#messageSpeaker'),messageText:$('#messageText'),messageOwner:$('#messageOwner'),messageNext:$('#messageNext'),curtain:$('#stageCurtain'),curtainIcon:$('#curtainIcon'),curtainName:$('#curtainName'),curtainSub:$('#curtainSub'),turnBanner:$('#turnBanner'),turnBannerName:$('#turnBannerName'),turnBannerAvatar:$('#turnBannerAvatar'),turnBannerIcon:$('#turnBannerIcon'),portraitImg:$('#portraitImg'),portraitName:$('#portraitName'),portraitRole:$('#portraitRole'),portraitStats:$('#portraitStats'),portraitSub:$('#portraitSub'),portraitBadge:$('#portraitBadge'),eraIcon:$('#eraIcon'),eraName:$('#eraName'),eraFlavor:$('#eraFlavor'),roundText:$('#roundText'),roundDots:$('#roundDots'),fieldInfo:$('#fieldInfo'),soundBtn:$('#soundBtn'),volumeSlider:$('#volumeSlider'),volumeValue:$('#volumeValue'),portraitPanel:$('#portraitPanel'),portraitToggle:$('#portraitToggle'),awardArea:$('#awardArea'),resultArea:$('#resultArea'),back:$('#backBtn'),avatarPicker:$('#avatarPickerOverlay'),avatarPickerGrid:$('#avatarPickerGrid'),avatarPickerClose:$('#avatarPickerClose')};
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
 ['office','会社スタッフ',70000,{communication:2},'career'],['sales','営業職',85000,{communication:4},'career'],['chef','料理人',80000,{fitness:2,charm:2},'career'],['designer','デザイナー',85000,{charm:4},'career'],['engineer','エンジニア',100000,{knowledge:5},'study'],['teacher','教師',95000,{knowledge:5,communication:3},'study'],['nurse','医療スタッフ',100000,{knowledge:4,communication:3},'study'],['civil','公務員',90000,{knowledge:4},'study'],['mechanic','整備士',90000,{fitness:3,knowledge:2},'career'],['creator','動画クリエイター',75000,{charm:4,communication:3},'risk'],
 ['programmer','プログラマー',105000,{knowledge:6},'study'],['architect','建築士',115000,{knowledge:7},'study'],['researcher','研究職',120000,{knowledge:8},'study'],['doctor','医師',145000,{knowledge:10},'study'],['lawyer','法律家',135000,{knowledge:9,communication:5},'study'],['pilot','パイロット',130000,{knowledge:7,fitness:5},'career'],['athlete','プロスポーツ選手',125000,{fitness:10},'risk'],['musician','音楽家',90000,{charm:7},'risk'],['actor','俳優',95000,{charm:8,communication:5},'risk'],['idol','タレント',100000,{charm:9},'risk'],
 ['manager','経営企画',130000,{knowledge:7,communication:7},'career'],['consultant','コンサルタント',140000,{knowledge:8,communication:8},'career'],['entrepreneur','起業家',120000,{knowledge:6,communication:7},'risk'],['trader','トレーダー',125000,{knowledge:7},'asset'],['author','作家',85000,{knowledge:6,charm:5},'risk'],['artisan','職人',100000,{fitness:5,knowledge:4},'career'],['farmer','農業経営',95000,{fitness:5,communication:3},'asset'],['game','ゲーム企画',105000,{knowledge:6,charm:4},'career'],['scientist','先端研究者',155000,{knowledge:12},'study'],['executive','企業役員',170000,{knowledge:9,communication:10},'career']
].map((x,i)=>({id:x[0],name:x[1],base:x[2],req:x[3],tag:x[4],index:i}));
const PARTNERS=[['あおい','落ち着いた読書好き','knowledge'],['ひなた','明るいアウトドア派','fitness'],['れん','話好きの社交派','communication'],['みさき','おしゃれ好き','charm'],['かえで','堅実な仕事人','knowledge'],['そら','自由なクリエイター','charm'],['ゆう','スポーツ好き','fitness'],['なお','聞き上手','communication'],['つばさ','好奇心旺盛','knowledge'],['まこと','行動派','fitness']].map((x,i)=>({id:'pt'+i,name:x[0],desc:x[1],pref:x[2]}));
const PROPS=[['郊外の小さな家',220000,180000,0],['駅近マンション',360000,330000,10000],['海辺のコテージ',420000,380000,12000],['古民家リノベ',480000,450000,14000],['都市型マンション',650000,620000,18000],['店舗付き住宅',760000,720000,28000],['高原別荘',880000,800000,20000],['小さなアパート',1000000,970000,45000],['デザイナーズ住宅',1200000,1150000,26000],['商業ビル区画',1500000,1450000,65000],['リゾートヴィラ',1800000,1700000,42000],['大型賃貸物件',2200000,2100000,90000]].map((x,i)=>({id:'pr'+i,name:x[0],price:x[1],value:x[2],income:x[3]}));
const TREASURES=[['古い腕時計',50000,180000],['限定スニーカー',30000,120000],['アンティーク食器',60000,250000],['希少なレコード',40000,200000],['古いカメラ',70000,260000],['記念硬貨セット',80000,320000],['名工の工芸品',100000,420000],['謎の絵画',120000,650000],['ヴィンテージ家具',90000,350000],['絶版コミック全集',50000,230000],['古酒コレクション',100000,480000],['クラシック楽器',130000,550000],['鉱石標本',60000,300000],['サイン入り記念品',70000,380000],['古地図',90000,500000],['未鑑定の箱',30000,800000]].map((x,i)=>({id:'tr'+i,name:x[0],buy:x[1],max:x[2]}));
const CARDS=[
 {id:'plus2',name:'追い風カード',desc:'次のルーレット結果に+2',tag:'risk'},
 {id:'guard',name:'安心カード',desc:'次の損失イベントを半減',tag:'asset'},
 {id:'study',name:'集中カード',desc:'知力+3',tag:'study'},
 {id:'charm',name:'イメチェンカード',desc:'魅力+3',tag:'love'},
 {id:'network',name:'交流カード',desc:'交流+3',tag:'career'},
 {id:'fitness',name:'元気カード',desc:'体力+3',tag:'career'},
 {id:'bonus',name:'臨時収入カード',desc:'その場で8万円',tag:'asset'},
 {id:'date',name:'デート応援カード',desc:'交際中なら好感度+2',tag:'love'}
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
const CAREER_EVENTS=['大口案件を成功させた','資格が仕事に活きた','チームをまとめた','新企画が採用された','難しいトラブルを解決した','顧客から高評価を受けた','後輩の指導が評価された','社内表彰を受けた'];
const MILESTONES={baby:'幼少期が始まった',elementary:'小学校生活が始まった',middle:'中学生になった',high:'高校生活が始まった',young:'大人としての生活が始まった',mature:'人生の中盤に入った',senior:'円熟期に入った'};

const STAGE_FLAVOR={baby:'家族に見守られながら、はじめての世界へ。',elementary:'遊びも勉強も、毎日が新発見。',middle:'得意なことや人間関係が少しずつ形になる。',high:'進路を考えながら、自分らしさを伸ばす。',young:'仕事・恋愛・資産形成。選択肢が一気に広がる。',mature:'仕事も家庭も人生の大きな節目へ。',senior:'積み重ねた人生を楽しみ、最後の総決算へ。'};
const STAGE_THEME={baby:['#e7f2e5','#fff0d5'],elementary:['#e1f1dc','#fff1bd'],middle:['#dce8f5','#eadff4'],high:['#e8e3f7','#f8dfdc'],young:['#dcefe8','#dce7f6'],mature:['#e0e8ee','#f0decf'],senior:['#f2e6d7','#f1dcae']};
const SPACE_META={start:['🏁','スタート'],event:['🎲','出来事'],plus:['＋','プラス'],minus:['－','マイナス'],grow:['📚','成長'],social:['💬','交流'],chance:['✨','チャンス'],payday:['💴','収入'],card:['🃏','カード'],treasure:['💎','お宝'],submap:['🗺️','寄り道'],romance:['💗','恋愛'],property:['🏠','物件'],career:['💼','仕事'],family:['👪','家族']};
let peer=null,hostConn=null,isHost=false,roomCode='',localPlayerId='',state=null,cpuTimer=null,hostTimers=[];const connections=new Map();
let soundOn=true,audioCtx=null,bgmTimer=null,bgmStep=0,bgmStage=-1,lastFx={roulette:null,move:'',stage:null,message:''},rollVisualTimer=null,mobileBoardFocusTimer=null;
let masterVolume=Math.max(0,Math.min(1,Number(localStorage.getItem('lifeRoadVolume')??'1')));
let portraitCollapsed=localStorage.getItem('lifeRoadPortraitCollapsed')==='1';
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
function later(fn,ms){const t=setTimeout(fn,Math.max(20,Math.round(ms*speedScale())));hostTimers.push(t);return t}
function clearHostTimers(){hostTimers.forEach(clearTimeout);hostTimers=[]}
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
 const idx=state?state.players.length:0;const avatarId=firstAvailableAvatarId();return{id:uuid(),name,color:COLORS[idx%COLORS.length],avatarId,avatar:avatarOption(avatarId).src,token:TOKENS[idx%TOKENS.length],cpu,cpuType,cash:120000,job:null,jobRank:0,jobExp:0,education:'高校',educationChosen:false,careerReviewDone:false,retireDone:false,stats:{knowledge:1,fitness:1,charm:1,communication:1},memory:0,pos:0,laps:0,partner:null,affection:0,married:false,children:0,home:null,properties:[],treasures:[],cards:[],nextRollBonus:0,guard:false,awards:0};
}
function newState(){return{phase:'lobby',players:[],turnIndex:0,stageIndex:0,stageTurnCount:0,pendingChoice:null,message:null,busy:false,turnReady:false,lastRoll:null,log:['部屋を作成しました。'],settings:{mode:'standard',speed:'normal'},boards:[],version:1,fx:{roulette:null,move:null,stage:null,turn:null},awards:[],resultPrepared:false};}
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
function passiveIncome(p){return p.properties.reduce((s,id)=>s+(PROPS.find(x=>x.id===id)?.income||0),0)}
function assetScore(p){return p.cash+(p.home?.value||0)+p.properties.reduce((s,id)=>s+(PROPS.find(x=>x.id===id)?.value||0),0)+p.treasures.reduce((s,t)=>s+(t.appraised||0),0)+p.awards}
function applyStats(p,d={}){for(const k of ['knowledge','fitness','charm','communication'])p.stats[k]=clamp(p.stats[k]+(d[k]||0),0,30)}
function jobEligible(p,j){return Object.entries(j.req).every(([k,v])=>p.stats[k]>=v)}
function reqText(r){return Object.entries(r).map(([k,v])=>`${{knowledge:'知力',fitness:'体力',charm:'魅力',communication:'交流'}[k]} ${v}`).join(' / ')}
function paramLabel(k){return{knowledge:'知力',fitness:'体力',charm:'魅力',communication:'交流'}[k]||k}
function spaceIcon(type){return SPACE_ICONS[type]||SPACE_ICONS.event}
function rankUpCheck(p){if(!p.job)return null;const need=p.jobRank*3;if(p.jobRank<5&&p.jobExp>=need){p.jobExp-=need;p.jobRank++;const bonus=p.jobRank*30000;p.cash+=bonus;return`${p.job.name}がランク${p.jobRank}にアップ！ 昇格祝い +${money(bonus)}`}return null}

function playerCard(p,active=false,lobby=false){
 const c=p.cpu?`${cpuDef(p.cpuType).icon} CPU`:'👤 人間',job=p.job?`${p.job.name} Lv.${p.jobRank}`:'未就職';
 return `<div class="player-card ${active?'active':''} ${lobby?'lobbycard':''}" style="border-color:${p.color};--pc:${p.color}"><div class="player-card-top"><div class="player-avatar-thumb"><img class="thumb-face" src="${esc(p.avatar||AVATARS[0])}" alt=""><img class="thumb-frame" src="assets/portrait_frame.webp" alt=""></div><div class="player-card-main"><div class="player-name">${esc(p.name)}</div><div class="player-meta"><span class="pill">${c}</span>${lobby?'':`<span class="pill">周回 ${p.laps}</span>`}</div>${lobby?`<div class="statsline">${p.cpu?esc(cpuDef(p.cpuType).name):'プレイヤー'} / 初期資金 ${money(p.cash)}</div>`:`<div class="statsline">${esc(job)} / ${money(p.cash)}<br>${p.married?'💍結婚':'未婚'}・子${p.children}人・物件${p.properties.length}</div><div class="param-grid"><span class="param">🧠 知力 ${p.stats.knowledge}</span><span class="param">💪 体力 ${p.stats.fitness}</span><span class="param">✨ 魅力 ${p.stats.charm}</span><span class="param">🗣 交流 ${p.stats.communication}</span></div>`}</div></div></div>`}

let boardPan={x:0,y:0,anchorKey:'',dragging:false,startX:0,startY:0,baseX:0,baseY:0};
function resetBoardPan(nextKey=''){boardPan.x=0;boardPan.y=0;boardPan.anchorKey=nextKey||''}
function canDragBoard(){return !!(state&&state.phase==='playing'&&!state.message&&!state.pendingChoice)}
function updateBoardDragUi(){if(!els.boardPanel)return;els.boardPanel.classList.toggle('drag-ready',canDragBoard());els.boardPanel.classList.toggle('dragging',!!boardPan.dragging)}
function setupBoardDrag(){if(!els.boardPanel||els.boardPanel.dataset.dragReady)return;els.boardPanel.dataset.dragReady='1';const end=()=>{if(!boardPan.dragging)return;boardPan.dragging=false;updateBoardDragUi()};els.boardPanel.addEventListener('pointerdown',e=>{if(!canDragBoard())return;boardPan.dragging=true;boardPan.startX=e.clientX;boardPan.startY=e.clientY;boardPan.baseX=boardPan.x;boardPan.baseY=boardPan.y;try{els.boardPanel.setPointerCapture(e.pointerId)}catch(err){}updateBoardDragUi();e.preventDefault()});els.boardPanel.addEventListener('pointermove',e=>{if(!boardPan.dragging)return;boardPan.x=boardPan.baseX+(e.clientX-boardPan.startX);boardPan.y=boardPan.baseY+(e.clientY-boardPan.startY);focusBoardCamera(true)});els.boardPanel.addEventListener('pointerup',end);els.boardPanel.addEventListener('pointercancel',end);updateBoardDragUi()}
function render(){if(!state)return;if(state.phase==='lobby'){show(els.lobby);renderLobby()}else if(state.phase==='playing'){show(els.game);renderGame()}else if(state.phase==='finished'){prepareResults();show(els.result);renderResult()}updateBoardDragUi();if(isHost)maybeRunCpu()}
function renderLobby(){state.players.forEach((p,i)=>{if(!p.avatarId){const opt=AVATAR_OPTIONS.find(v=>v.src===p.avatar)||AVATAR_OPTIONS[i%AVATAR_OPTIONS.length];p.avatarId=opt.id;p.avatar=opt.src}});els.roomCode.textContent=roomCode;els.hostLobby.classList.toggle('hidden',!isHost);els.start.classList.toggle('hidden',!isHost);els.mode.disabled=!isHost;els.speed.disabled=!isHost;els.mode.value=state.settings.mode;els.speed.value=state.settings.speed;els.modeInfo.textContent=modeDescription(state.settings.mode)+'　/　キャラクターは重複なし・早い者勝ち';els.lobbyPlayers.innerHTML=state.players.map(p=>`<div>${playerCard(p,false,true)}${avatarSelectHtml(p)}${isHost&&p.cpu?`<button class="btn small warn cpu-remove" data-id="${p.id}" style="width:100%;margin-top:5px">CPU削除</button>`:''}</div>`).join('')+Array.from({length:Math.max(0,4-state.players.length)},()=>'<div class="player-card"><div class="sub">参加待ち...</div></div>').join('');els.start.disabled=state.players.length<1;els.addCpu.disabled=!isHost||state.players.length>=4;els.fillCpu.disabled=!isHost||state.players.length>=4;net(isHost?`ホスト中：${state.players.length}/4人`:`参加済み：${state.players.length}/4人`);document.querySelectorAll('.cpu-remove').forEach(b=>b.addEventListener('click',()=>removeCpu(b.dataset.id)));document.querySelectorAll('[data-avatar-edit]').forEach(b=>b.addEventListener('click',()=>openAvatarPicker(b.dataset.avatarEdit)));if(avatarPickerTargetId&&!els.avatarPicker.classList.contains('hidden'))renderAvatarPicker()}
function renderGame(){
 const st=stageDef(),cp=currentPlayer(),rounds=modeDef().rounds[state.stageIndex],round=Math.min(rounds,Math.floor(state.stageTurnCount/state.players.length)+1),theme=STAGE_THEME[st.id];
 document.documentElement.style.setProperty('--stageA',theme[0]);document.documentElement.style.setProperty('--stageB',theme[1]);
 document.documentElement.style.setProperty('--boardBg',`url('${STAGE_BACKGROUNDS[st.id]||STAGE_BACKGROUNDS.young}')`);
 els.eraIcon.textContent=st.icon;els.eraName.textContent=st.name;els.eraFlavor.textContent=STAGE_FLAVOR[st.id];els.roundText.textContent=`第${round}/${rounds}ラウンド`;els.fieldInfo.textContent=`専用${stageBoard().length}マスマップ・規定ラウンド終了まで周回します`;els.roundDots.innerHTML=Array.from({length:rounds},(_,i)=>`<span class="round-dot ${i<round-1?'done':i===round-1?'now':''}"></span>`).join('');
 els.gamePlayers.innerHTML=state.players.map((p,i)=>playerCard(p,i===state.turnIndex)).join('');renderBoard();els.turnName.textContent=cp?.name||'-';els.turnStage.textContent=`${st.icon} ${st.name}`;const mine=cp&&cp.id===localPlayerId&&!cp.cpu;els.rollBtn.disabled=!mine||!state.turnReady||state.busy||!!state.message||!!state.pendingChoice;els.rollBtn.textContent=mine?'ルーレットを回す':cp?.cpu?'CPUが考え中…':'相手の手番です';els.hint.textContent=state.message?'メッセージ進行中':state.pendingChoice?'選択中':state.busy?'演出中…':mine&&state.turnReady?'あなたの手番です':cp?.cpu?'CPUの手番です':'手番を待っています';els.log.innerHTML=state.log.map(x=>`<div class="logline">${esc(x)}</div>`).join('');
 const pp=cp||state.players[0];
 if(pp){els.portraitImg.src=pp.avatar||AVATARS[0];els.portraitName.textContent=pp.name;els.portraitRole.textContent=pp.job?`${pp.job.name} Lv.${pp.jobRank}`:(pp.cpu?`${cpuDef(pp.cpuType).name} CPU`:'プレイヤー');els.portraitBadge.textContent=mine?'YOUR TURN':'NOW';els.portraitStats.innerHTML=`<div class="portrait-stat">🧠 <span>知力</span><strong>${pp.stats.knowledge}</strong></div><div class="portrait-stat">💪 <span>体力</span><strong>${pp.stats.fitness}</strong></div><div class="portrait-stat">✨ <span>魅力</span><strong>${pp.stats.charm}</strong></div><div class="portrait-stat">🗣 <span>交流</span><strong>${pp.stats.communication}</strong></div>`;els.portraitSub.innerHTML=`<strong>${money(pp.cash)}</strong> / 思い出 ${pp.memory}pt${pp.partner?`<br>パートナー：${esc(pp.partner.name)} 好感度${pp.affection}${pp.married?'・結婚':''}`:''}${pp.children?`<br>家族：子ども ${pp.children}人`:''}`}
 setupBoardDrag();renderCards();renderAssets();renderChoice();renderMessage();renderCurtain();renderTurnBanner();handleFx();
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
 const moverId=state.fx?.move?.playerId; const p=(moverId?state.players.find(x=>x.id===moverId):null)||currentPlayer(); if(!p)return;
 const pts=routePoints(stageDef().id,b.length),pt=pts[p.pos]||pts[0];
 const rect=els.boardPanel.getBoundingClientRect(); if(!rect.width||!rect.height)return;
 const isSmall=window.innerWidth<900; const verySmall=window.innerWidth<600; const scale=isSmall?(verySmall?(state.fx?.move?1.46:1.28):(state.fx?.move?1.58:1.36)):(state.fx?.move?2.62:2.30);
 const worldW=rect.width,worldH=rect.height;
 const anchorKey=`${state.stageIndex}:${state.turnIndex}:${p.id}:${state.fx?.move?1:0}`;
 if(!skipAnchorReset&&boardPan.anchorKey!==anchorKey) resetBoardPan(anchorKey);
 const minX=worldW-worldW*scale,minY=worldH-worldH*scale;
 let tx=worldW/2-(pt[0]/100)*worldW*scale;
 let ty=worldH/2-(pt[1]/100)*worldH*scale;
 tx=clamp(tx+boardPan.x,minX,0); ty=clamp(ty+boardPan.y,minY,0);
 els.board.style.setProperty('--cam-x',`${tx}px`); els.board.style.setProperty('--cam-y',`${ty}px`); els.board.style.setProperty('--cam-scale',scale); updateBoardDragUi();
}
function renderCards(){const p=state.players.find(x=>x.id===localPlayerId);if(!p){els.cards.innerHTML='<span class="sub">-</span>';return}const can=currentPlayer()?.id===p.id&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice&&!p.cpu;els.cards.innerHTML=p.cards.length?p.cards.map((id,i)=>{const c=CARDS.find(x=>x.id===id);return`<button class="invbtn use-card" data-i="${i}" ${can?'':'disabled'} title="${esc(c?.desc||'')}">${esc(c?.name||id)}</button>`}).join(''):'<span class="sub">カードなし</span>';document.querySelectorAll('.use-card').forEach(b=>b.addEventListener('click',()=>sendAction({kind:'useCard',index:Number(b.dataset.i)})))}
function renderAssets(){const p=state.players.find(x=>x.id===localPlayerId)||currentPlayer();if(!p){els.assets.innerHTML='-';return}els.assets.innerHTML=`<div>現金：<strong>${money(p.cash)}</strong></div><div>給料：${money(salaryNow(p))}</div><div>住まい：${p.home?esc(p.home.name):'賃貸'}</div><div>物件：${p.properties.length}件 / お宝：${p.treasures.length}個</div><div>思い出：${p.memory}pt</div>${p.partner?`<div>パートナー：${esc(p.partner.name)} 好感度${p.affection}${p.married?'（結婚）':''}</div>`:''}`}
function renderChoice(){const c=state.pendingChoice;if(!c){els.choice.classList.add('hidden');return}els.choice.classList.remove('hidden');const owner=state.players.find(p=>p.id===c.playerId),mine=c.playerId===localPlayerId&&!owner?.cpu;els.choiceTitle.textContent=c.title;els.choiceText.textContent=c.text||'';els.choiceStatus.textContent=mine?'あなたが選択してください':`${owner?.name||'プレイヤー'}が選択中です`;els.choiceList.innerHTML='';c.options.forEach((o,i)=>{const b=document.createElement('button');b.className='choicebtn';b.disabled=!mine;b.innerHTML=`<strong>${esc(o.label)}</strong><span class="note">${esc(o.desc||'')}</span>`;b.addEventListener('click',()=>sendAction({kind:'choose',index:i}));els.choiceList.appendChild(b)})}
function renderMessage(){
 const m=state?.message;
 if(!m){
  els.message.classList.add('hidden');
  els.message.classList.remove('mine','cpu');
  els.message.removeAttribute('data-tone');
  els.message.style.removeProperty('display');
  els.messageClickLayer.classList.add('hidden');
  return;
 }
 const line=m.lines?.[m.index]||{text:'…'};
 const owner=state.players.find(p=>p.id===m.ownerId);
 const mine=m.ownerId===localPlayerId&&!owner?.cpu;
 els.message.classList.remove('hidden');
 els.messageClickLayer.classList.toggle('hidden',!mine);
 els.messageSpeaker.textContent=m.speaker||'出来事';
 els.messageText.textContent=(typeof line==='string'?line:(line.text||'…'));
 els.messageOwner.textContent=mine?'画面のどこをクリックしても進みます':owner?.cpu?`${owner.name}（CPU）が進行中`:`${owner?.name||'プレイヤー'}が進めています`;
 els.messageNext.style.visibility=mine?'visible':'hidden';
 els.message.dataset.tone=line.tone||'normal';
 els.message.classList.toggle('mine',!!mine);
 els.message.classList.toggle('cpu',!mine);
}
function renderCurtain(){const f=state.fx.stage;if(!f){els.curtain.classList.add('hidden');return}const st=STAGES[f.stageIndex];els.curtain.classList.remove('hidden');els.curtainIcon.textContent=st.icon;els.curtainName.textContent=st.name;els.curtainSub.textContent=STAGE_FLAVOR[st.id]}
function renderTurnBanner(){const f=state.fx.turn;if(!f){els.turnBanner.classList.add('hidden');return}const p=state.players.find(x=>x.id===f.playerId);els.turnBanner.classList.remove('hidden');els.turnBannerName.textContent=`${p?.name||'プレイヤー'} の手番です`;els.turnBannerAvatar.style.backgroundImage=`url('${p?.avatar||AVATARS[0]}')`;els.turnBannerIcon.textContent=stageDef().icon}
function broadcast(){state.version=(state.version||0)+1;connections.forEach(c=>{if(c.open)c.send({type:'snapshot',state})});render()}
function sendAction(a){ensureAudio();if(isHost)hostHandleAction(localPlayerId,a);else if(hostConn?.open)hostConn.send({type:'action',action:a})}
function setMessage(ownerId,speaker,lines,after=null){state.turnReady=false;state.message={id:uuid(),ownerId,speaker,lines:lines.map(x=>typeof x==='string'?{text:x,tone:'normal'}:x),index:0,after}}
function messageResult(playerId,speaker,lines,after='completeTurn'){setMessage(playerId,speaker,lines,{type:after})}
function handleMessageNext(playerId){const m=state.message;if(!m||m.ownerId!==playerId)return;if(m.index<m.lines.length-1){m.index++;broadcast();return}const after=m.after;state.message=null;runAfter(after);broadcast()}
function runAfter(a){if(!a)return;if(a.type==='beginTurn')beginTurn();else if(a.type==='completeTurn')completeTurn();else if(a.type==='openChoice')openChoice(a.choice,state.players.find(p=>p.id===a.playerId),a.returnTo||'completeTurn');else if(a.type==='finishGame')finishGame()}

function beginTurn(){if(state.phase!=='playing')return;const p=currentPlayer();state.turnReady=false;state.busy=true;if(!p)return;state.fx.turn={id:uuid(),playerId:p.id};broadcast();later(()=>{state.fx.turn=null;state.busy=false;beginTurnCore();broadcast()},Math.round(1650*speedScale()))}
function beginTurnCore(){if(state.phase!=='playing')return;const p=currentPlayer();state.turnReady=false;state.busy=false;if(!p)return;
 if(state.stageIndex===4&&!p.educationChosen){setMessage(p.id,'人生の分岐点',[`${p.name}は社会へ踏み出す前に、進路を決めることになった。`,`これまで積み重ねてきた能力や思い出が、ここからの人生を少しずつ形作っていく。`],{type:'openChoice',choice:'education',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===4&&!p.job){setMessage(p.id,'就職活動',[`進路が決まった。次は最初の仕事を選ぼう。`,`ここで選んだ道は、今後の収入やイベントにも影響していく。`],{type:'openChoice',choice:'job',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===5&&!p.careerReviewDone){p.careerReviewDone=true;setMessage(p.id,'キャリアの節目',[`これまでの経験を活かし、仕事を見直す機会がやってきた。`,`転職するか、今の道を極めるか。ここから先の伸び方が変わる。`],{type:'openChoice',choice:'job',playerId:p.id,returnTo:'beginTurn'});return}
 if(state.stageIndex===6&&!p.retireDone){p.retireDone=true;setMessage(p.id,'これからの働き方',[`円熟期をどう過ごすか、働き方を決める時が来た。`,`お金を追うか、ゆとりを取るか、それとも最後の大勝負に出るか。`],{type:'openChoice',choice:'retire',playerId:p.id,returnTo:'beginTurn'});return}
 state.turnReady=true;
}
function startGame(){const md=modeDef();state.boards=STAGES.map((_,i)=>buildStageBoard(i,md.sizes[i]));state.phase='playing';state.resultPrepared=false;state.stageIndex=0;state.stageTurnCount=0;state.turnIndex=0;state.players.forEach((p,i)=>{p.color=COLORS[i];p.pos=0;p.laps=0});addLog(`${md.name}モード開始！`);startStage(0,true)}
function startStage(si,initial=false){state.stageIndex=si;state.stageTurnCount=0;state.turnIndex=0;state.busy=true;state.turnReady=false;state.pendingChoice=null;state.message=null;state.players.forEach(p=>{p.pos=0;p.laps=0});state.fx.stage={id:uuid(),stageIndex:si};broadcast();later(()=>{state.fx.stage=null;state.busy=false;const p=currentPlayer();setMessage(p.id,`${stageDef(si).icon} ${stageDef(si).name}`,[initial?'人生ロード、スタート！':`${stageDef(si).name}のフィールドへ進みます。`,STAGE_FLAVOR[stageDef(si).id]],{type:'beginTurn'});broadcast()},1650)}
function completeTurn(){state.turnReady=false;state.stageTurnCount++;const need=modeDef().rounds[state.stageIndex]*state.players.length;if(state.stageTurnCount>=need){if(state.stageIndex>=STAGES.length-1){const owner=currentPlayer()?.id||state.players[0].id;setMessage(owner,'人生の総決算',[`すべての時代が終わりました。`,`現金・住居・物件・お宝・特別賞を集計します。`],{type:'finishGame'});return}addLog(`${stageDef().name}が終了`);startStage(state.stageIndex+1);return}state.turnIndex=(state.turnIndex+1)%state.players.length;state.lastRoll=null;beginTurn()}
function doRoll(p){if(!state.turnReady||state.busy)return;state.turnReady=false;state.busy=true;let roll=1+rnd(10);if(p.nextRollBonus){roll=clamp(roll+p.nextRollBonus,1,10);p.nextRollBonus=0}state.lastRoll=roll;state.fx.roulette={id:uuid(),playerId:p.id,result:roll};addLog(`${p.name}：ルーレット ${roll}`);broadcast();later(()=>startMove(p,roll),2150)}
function startMove(p,steps){state.fx.roulette=null;const board=stageBoard();let left=steps,wraps=0,step=0;function go(){if(left<=0){state.fx.move=null;broadcast();later(()=>{resolveLanding(p,wraps);broadcast()},220);return}const prev=p.pos;p.pos=(p.pos+1)%board.length;if(p.pos<prev){p.laps++;wraps++}left--;step++;state.fx.move={id:`${p.id}_${state.version}_${steps}`,playerId:p.id,step,total:steps,pos:p.pos};broadcast();later(go,170)}go()}
function lapBonus(p,wraps){if(!wraps)return[];const lines=[];for(let n=0;n<wraps;n++){if(state.stageIndex<4){p.memory+=2;applyStats(p,{communication:1});lines.push({text:`フィールドを1周！ 思い出+2、交流+1`,tone:'good'})}else{const gain=40000+state.stageIndex*15000;p.cash+=gain;lines.push({text:`フィールドを1周！ 周回ボーナス +${money(gain)}`,tone:'good'})}}return lines}
function resolveLanding(p,wraps=0){state.busy=false;const s=stageBoard()[p.pos],lines=lapBonus(p,wraps);const finish=(more,speaker='出来事')=>{const all=[...lines,...more];messageResult(p.id,speaker,all.length?all:[{text:'何事もなく穏やかな一日だった。'}])};
 if(s.type==='start'){finish([{text:'スタート地点に戻ってきた。次の周回へ！',tone:'good'}],'周回');return}
 if(['event','plus','minus','grow','social'].includes(s.type)){
  const all=EVENTS[stageDef().id]||EVENTS.young;
  let pool=all, speaker='出来事', bonusStats={}, bonusMemory=0, forcedTone='normal', forceInteraction=false;
  if(s.type==='plus'){pool=all.filter(e=>e.cash>0||Object.values(e.stats||{}).some(v=>v>0));speaker='プラスマス';forcedTone='good';bonusMemory=1}
  if(s.type==='minus'){pool=all.filter(e=>e.cash<0||Object.values(e.stats||{}).some(v=>v<0));speaker='マイナスマス';forcedTone='bad'}
  if(s.type==='grow'){pool=all.filter(e=>Object.values(e.stats||{}).some(v=>v>0));speaker='成長マス';bonusStats={knowledge:1};bonusMemory=2;forcedTone='good'}
  if(s.type==='social'){pool=all.filter(e=>(e.stats?.communication||0)>0||(e.stats?.charm||0)>0);speaker='交流マス';bonusStats={communication:1};bonusMemory=2;forcedTone='good';forceInteraction=true}
  if(!pool.length) pool=all;
  const e=pick(pool),amt=cashChange(p,e.cash);
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
 if(s.type==='payday'){const total=salaryNow(p)+passiveIncome(p);if(total){p.cash+=total;p.jobExp+=p.job?1:0;const rank=rankUpCheck(p);finish([{text:`給料・物件収入を受け取った。 +${money(total)}`,tone:'good'},...(rank?[{text:rank,tone:'good'}]:[])],'給料日')}else finish([{text:'まだ定期収入はない。'}],'給料日');return}
 if(s.type==='card'){if(p.cards.length>=5)finish([{text:'カード枠がいっぱいで、新しいカードを持てなかった。'}],'カード');else{const c=pick(CARDS);p.cards.push(c.id);finish([{text:`「${c.name}」を手に入れた！`,tone:'good'},{text:c.desc}],'カード')}return}
 if(s.type==='treasure'){setMessage(p.id,'お宝マス',[...lines,{text:'価値の読めないお宝を見つけた。買ってみる？'}],{type:'openChoice',choice:'treasure',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='submap'){setMessage(p.id,'寄り道マス',[...lines,{text:'少し寄り道できそうだ。どこへ行こう？'}],{type:'openChoice',choice:'submap',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='romance'){if(p.married){const cost=30000+rnd(50000);p.cash-=cost;p.memory+=5;finish([{text:`パートナーと特別な時間を過ごした。 -${money(cost)} / 思い出+5`,tone:'good'}],'家族の時間')}else{setMessage(p.id,'恋愛マス',[...lines,{text:p.partner?'パートナーとの関係を進めるチャンス。':'新しい出会いがありそうだ。'}],{type:'openChoice',choice:'romance',playerId:p.id,returnTo:'completeTurn'});broadcast()}return}
 if(s.type==='property'){setMessage(p.id,'物件マス',[...lines,{text:'気になる物件情報が入ってきた。'}],{type:'openChoice',choice:'property',playerId:p.id,returnTo:'completeTurn'});broadcast();return}
 if(s.type==='career'){const gain=30000+p.jobRank*20000+rnd(50000);if(p.job){p.cash+=gain;p.jobExp+=2;applyStats(p,{communication:1,knowledge:1});const rank=rankUpCheck(p);finish([{text:`${pick(CAREER_EVENTS)} +${money(gain)}`,tone:'good'},...(rank?[{text:rank,tone:'good'}]:[])],'仕事イベント')}else finish([{text:'仕事イベントは起きたが、まだ職には就いていない。'}],'仕事イベント');return}
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
function resolveFamily(p,prefix=[]){const a=[...prefix,{text:'家族にまつわる時間は、資産では測れない大きな影響を残していく。'}];if(p.married&&Math.random()<.55&&p.children<3){p.children++;p.cash-=80000;p.memory+=10;a.push({text:`家族が増えた！ 子ども${p.children}人 / -${money(80000)} / 思い出+10`,tone:'good'})}else if(p.children){const g=p.children*(30000+rnd(30000));p.cash+=g;p.memory+=4;a.push({text:`家族から嬉しい知らせ。 +${money(g)} / 思い出+4`,tone:'good'})}else{p.memory+=5;a.push({text:'穏やかな休日を満喫。思い出+5',tone:'good'})}if(Math.random()<.2)a.push(...maybePlayerInteraction(p));messageResult(p.id,'家族イベント',a)}
function openChoice(kind,p,returnTo){if(!p)return;if(kind==='education')createEducationChoice(p,returnTo);else if(kind==='job')createJobChoice(p,returnTo);else if(kind==='retire')createRetireChoice(p,returnTo);else if(kind==='treasure')createTreasureChoice(p,returnTo);else if(kind==='submap')createSubmapChoice(p,returnTo);else if(kind==='romance')createRomanceChoice(p,returnTo);else if(kind==='property')createPropertyChoice(p,returnTo)}
function createEducationChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'education',returnTo,title:'卒業後の進路',text:'費用と成長量、将来の職業候補が変わります。',options:[{label:'すぐ就職',value:'work',desc:'費用なし。現金+5万円',tags:{career:2}},{label:'専門スクール',value:'voc',desc:'15万円。知力+3、魅力+2',tags:{career:1.5,study:1.5}},{label:'大学へ進学',value:'college',desc:'30万円。知力+6、交流+2',tags:{study:2.5}}]}}
function eligibleJobs(p){const list=JOBS.filter(j=>jobEligible(p,j));return list.length?list:JOBS.slice(0,7)}
function createJobChoice(p,returnTo){let pool=eligibleJobs(p).sort(()=>Math.random()-.5).slice(0,5);if(p.job&&!pool.find(j=>j.id===p.job.id))pool.unshift(p.job);state.pendingChoice={playerId:p.id,type:'job',returnTo,title:p.job?'仕事を見直す':'仕事を選ぶ',text:'能力値が高いほど候補が増えます。',options:[...pool.slice(0,5).map(j=>({label:j.name,value:j.id,desc:`初任給 ${money(j.base)} / 条件 ${reqText(j.req)}`,tags:{[j.tag]:2,career:1}})),...(p.job?[{label:'今の仕事を続ける',value:'keep',desc:`${p.job.name} Lv.${p.jobRank}`,tags:{career:1.2}}]:[])]}}
function createRetireChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'retire',returnTo,title:'これからの働き方',text:'円熟期をどう過ごしますか？',options:[{label:'仕事を続ける',value:'continue',desc:'給料を受け取り続ける',tags:{career:2,asset:1}},{label:'ゆったり引退',value:'retire',desc:'退職金を受け取り、思い出+10',tags:{love:1,asset:1}},{label:'第二の挑戦',value:'challenge',desc:'20万円を投じて大きな成功を狙う',tags:{risk:2,career:1}}]}}
function createTreasureChoice(p,returnTo){const t=pick(TREASURES);state.pendingChoice={playerId:p.id,type:'treasure',returnTo,title:'お宝を発見',text:'最後に本当の価値が判明します。',options:[{label:`${t.name}を買う`,value:t.id,desc:`価格 ${money(t.buy)} / 最大鑑定 ${money(t.max)}`,tags:{asset:1.6,risk:1.2}},{label:'見送る',value:'skip',desc:'現金を温存',tags:{asset:.7}}]}}
function createPropertyChoice(p,returnTo){const affordable=PROPS.filter(x=>!p.properties.includes(x.id)).filter(x=>x.price<=Math.max(300000,p.cash+250000)).sort((a,b)=>a.price-b.price),picks=affordable.slice(-3);state.pendingChoice={playerId:p.id,type:'property',returnTo,title:'物件購入チャンス',text:'物件は収入マスで利益を生み、最後に資産価値も加算されます。',options:[...picks.map(x=>({label:x.name,value:x.id,desc:`価格 ${money(x.price)} / 資産 ${money(x.value)} / 収入 ${money(x.income)}`,tags:{asset:2}})),{label:'買わない',value:'skip',desc:'今回は見送る',tags:{asset:.6}}]}}
function createRomanceChoice(p,returnTo){if(!p.partner){const cand=[...PARTNERS].sort(()=>Math.random()-.5).slice(0,3);state.pendingChoice={playerId:p.id,type:'meet',returnTo,title:'新しい出会い',text:'気になる相手と交流してみますか？',options:[...cand.map(x=>({label:x.name,value:x.id,desc:`${x.desc} / ${paramLabel(x.pref)}が高いと好感度ボーナス`,tags:{love:2}})),{label:'今は恋愛しない',value:'skip',desc:'自分の時間を優先',tags:{career:1,asset:1}}]};return}state.pendingChoice={playerId:p.id,type:'date',returnTo,title:`${p.partner.name}とどうする？`,text:`現在の好感度：${p.affection}`,options:[{label:'気軽なデート',value:'light',desc:'2万円 / 好感度+1〜2',tags:{love:1.5}},{label:'特別なデート',value:'special',desc:'7万円 / 好感度+2〜4',tags:{love:2.3}},{label:'プロポーズ',value:'propose',desc:'好感度5以上で成功しやすい',tags:{love:3,risk:1.3}},{label:'今回は見送る',value:'skip',desc:'何もしない',tags:{career:1}}]}}
function createSubmapChoice(p,returnTo){state.pendingChoice={playerId:p.id,type:'submap',returnTo,title:'寄り道スポット',text:'1つ選んで過ごします。',options:[{label:'学びの街',value:'study',desc:'8万円 / 知力+4',tags:{study:2}},{label:'スポーツ施設',value:'fitness',desc:'5万円 / 体力+4',tags:{career:1.2}},{label:'交流フェス',value:'social',desc:'6万円 / 魅力+2・交流+3',tags:{love:1.5,career:1}},{label:'チャレンジ市場',value:'market',desc:'10万円を賭けて0〜30万円',tags:{asset:1.5,risk:2}}]}}
function applyChoice(p,c,o){const lines=[];
 if(c.type==='education'){p.educationChosen=true;if(o.value==='work'){p.education='高校';p.cash+=50000}else if(o.value==='voc'){p.education='専門';p.cash-=150000;applyStats(p,{knowledge:3,charm:2})}else{p.education='大学';p.cash-=300000;applyStats(p,{knowledge:6,communication:2})}lines.push({text:`進路は「${p.education}」に決定。`,tone:'good'});return lines}
 if(c.type==='job'){if(o.value==='keep'){p.jobExp++;const rank=rankUpCheck(p);lines.push({text:`${p.job.name}を続けることにした。`});if(rank)lines.push({text:rank,tone:'good'});return lines}const j=JOBS.find(x=>x.id===o.value);if(j){const changed=!p.job||p.job.id!==j.id;p.job=j;if(changed){p.jobRank=1;p.jobExp=0}lines.push({text:`${j.name}として働くことにした。`,tone:'good'})}return lines}
 if(c.type==='treasure'){if(o.value==='skip')lines.push({text:'お宝は見送った。'});else{const t=TREASURES.find(x=>x.id===o.value);p.cash-=t.buy;p.treasures.push({id:t.id,appraised:0});lines.push({text:`「${t.name}」を購入した。最後の鑑定が楽しみだ。`,tone:'good'})}return lines}
 if(c.type==='property'){if(o.value==='skip')lines.push({text:'物件購入は見送った。'});else{const x=PROPS.find(x=>x.id===o.value);p.cash-=x.price;p.properties.push(x.id);if(!p.home)p.home={name:x.name,value:Math.round(x.value*.55)};lines.push({text:`「${x.name}」を購入！`,tone:'good'})}return lines}
 if(c.type==='meet'){if(o.value==='skip'){p.memory++;lines.push({text:'今は恋愛より自分の時間を大切にした。'})}else{const x=PARTNERS.find(x=>x.id===o.value);p.partner=x;p.affection=1+Math.floor(p.stats[x.pref]/5);lines.push({text:`${x.name}と知り合った。好感度${p.affection}`,tone:'good'})}return lines}
 if(c.type==='date'){if(o.value==='light'){p.cash-=20000;p.affection+=1+rnd(2);p.memory+=2;lines.push({text:`気軽なデートを楽しんだ。好感度${p.affection}`,tone:'good'})}else if(o.value==='special'){p.cash-=70000;p.affection+=2+rnd(3);p.memory+=5;lines.push({text:`特別なデートは大成功。好感度${p.affection}`,tone:'good'})}else if(o.value==='propose'){const chance=clamp(.25+p.affection*.1+p.stats.charm*.015,.3,.95);if(Math.random()<chance){p.married=true;p.cash-=120000;p.memory+=15;lines.push({text:`${p.partner.name}と結婚！`,tone:'good'},{text:'新しい家族として人生を歩んでいく。',tone:'good'})}else{p.affection=Math.max(0,p.affection-1);lines.push({text:'プロポーズはまだ早かったようだ…。',tone:'bad'})}}else lines.push({text:'今回は自分の時間を優先した。'});return lines}
 if(c.type==='submap'){if(o.value==='study'){p.cash-=80000;applyStats(p,{knowledge:4});lines.push({text:'学びの街で集中。知力+4',tone:'good'})}if(o.value==='fitness'){p.cash-=50000;applyStats(p,{fitness:4});lines.push({text:'しっかり体を動かした。体力+4',tone:'good'})}if(o.value==='social'){p.cash-=60000;applyStats(p,{charm:2,communication:3});lines.push({text:'交流フェスを満喫。魅力+2・交流+3',tone:'good'})}if(o.value==='market'){p.cash-=100000;const g=[0,40000,100000,180000,300000][rnd(5)];p.cash+=g;lines.push({text:`市場チャレンジの戻り ${money(g)}`,tone:g>=100000?'good':'bad'})}p.memory+=3;return lines}
 if(c.type==='retire'){if(o.value==='continue'){p.jobExp+=2;const rank=rankUpCheck(p);lines.push({text:'仕事を続けることにした。'});if(rank)lines.push({text:rank,tone:'good'})}else if(o.value==='retire'){const severance=p.job?salaryNow(p)*3:80000;p.cash+=severance;p.job=null;p.jobRank=0;p.memory+=10;lines.push({text:`ゆったり引退。退職金 ${money(severance)}`,tone:'good'})}else{p.cash-=200000;const ok=Math.random()<.55;if(ok){p.cash+=600000;lines.push({text:`第二の挑戦が大成功！ +${money(600000)}`,tone:'good'})}else lines.push({text:'第二の挑戦は実らなかった…。',tone:'bad'})}return lines}
 return[{text:'選択した。'}]
}
function cpuScoreOption(p,o){const w=cpuDef(p.cpuType).w,t=o.tags||{};let s=Math.random()*.8;for(const k in t)s+=(w[k]||1)*t[k];if(/買う|大学|専門|デート|挑戦/.test(o.label)&&p.cash<100000)s-=2;if(o.value==='propose'&&p.affection<4)s-=2.5;if(o.value==='skip')s+=p.cash<0?2:0;if(o.value==='keep'&&p.jobRank>=4)s+=1.3;return s}
function useCard(p,index){const id=p.cards[index],c=CARDS.find(x=>x.id===id);if(!c)return;p.cards.splice(index,1);if(id==='plus2')p.nextRollBonus=2;if(id==='guard')p.guard=true;if(id==='study')applyStats(p,{knowledge:3});if(id==='charm')applyStats(p,{charm:3});if(id==='network')applyStats(p,{communication:3});if(id==='fitness')applyStats(p,{fitness:3});if(id==='bonus')p.cash+=80000;if(id==='date'&&p.partner)p.affection+=2;setMessage(p.id,'カード使用',[{text:`「${c.name}」を使用！`,tone:'good'},{text:c.desc}],{type:'beginTurn'})}
function hostHandleAction(playerId,a){if(!isHost||!state)return;const p=state.players.find(x=>x.id===playerId);if(!p)return;
 if(state.phase==='lobby'){
  if(a.kind==='setAvatar'){const targetId=a.targetId||playerId;const target=state.players.find(x=>x.id===targetId);if(!target)return;if(target.id!==playerId&&!(p.id===localPlayerId&&target.cpu))return;const opt=AVATAR_OPTIONS.find(v=>v.id===a.avatarId);if(!opt)return;if(state.players.some(x=>x.id!==target.id&&x.avatarId===opt.id))return;setPlayerAvatar(target,opt.id);broadcast();return}
  if(a.kind==='start'){startGame();return}
  return
 }
 if(state.phase!=='playing')return;
 if(a.kind==='nextMessage'){handleMessageNext(playerId);return}
 if(a.kind==='choose'&&state.pendingChoice?.playerId===playerId){const c=state.pendingChoice,o=c.options[a.index];if(!o)return;state.pendingChoice=null;const lines=applyChoice(p,c,o);setMessage(p.id,'選択結果',lines,{type:c.returnTo||'completeTurn'});broadcast();return}
 const cp=currentPlayer();if(!cp||cp.id!==playerId)return;
 if(a.kind==='useCard'&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice){useCard(p,a.index);broadcast();return}
 if(a.kind==='roll'&&state.turnReady&&!state.busy&&!state.message&&!state.pendingChoice){doRoll(p);return}
}
function finishGame(){state.message=null;state.busy=false;state.turnReady=false;state.players.forEach(p=>{for(const t of p.treasures){const def=TREASURES.find(x=>x.id===t.id);t.appraised=Math.round(def.buy+(def.max-def.buy)*(.25+Math.random()*.75))}});state.phase='finished';prepareResults()}
function prepareResults(){if(state.resultPrepared)return;state.resultPrepared=true;const awards=[['知の達人',p=>p.stats.knowledge],['体力自慢',p=>p.stats.fitness],['人気者',p=>p.stats.charm+p.stats.communication],['思い出王',p=>p.memory+p.children*5],['資産運用賞',p=>p.properties.length*4+p.treasures.length*3]];state.awards=[];for(const [name,fn] of awards){const best=Math.max(...state.players.map(fn)),winners=state.players.filter(p=>fn(p)===best),bonus=Math.round(180000/winners.length);winners.forEach(p=>p.awards+=bonus);state.awards.push({name,winners:winners.map(p=>p.name),bonus})}}
function renderResult(){const rows=[...state.players].sort((a,b)=>assetScore(b)-assetScore(a));els.awardArea.innerHTML=state.awards.map(a=>`<div class="award"><strong>${esc(a.name)}</strong>：${a.winners.map(esc).join('・')}　賞金 ${money(a.bonus)} / 人</div>`).join('');els.resultArea.innerHTML=`<table class="summary-table"><thead><tr><th>順位</th><th>名前</th><th>総資産</th><th>現金</th><th>仕事</th><th>家族</th><th>物件/お宝</th></tr></thead><tbody>${rows.map((p,i)=>`<tr class="${i===0?'rank1':''}"><td>${i+1}位</td><td>${esc(p.name)}</td><td><strong>${money(assetScore(p))}</strong></td><td>${money(p.cash)}</td><td>${p.job?esc(p.job.name)+' Lv.'+p.jobRank:'引退'}</td><td>${p.married?'結婚':''} 子${p.children}</td><td>${p.properties.length}/${p.treasures.length}</td></tr>`).join('')}</tbody></table><div class="note" style="margin-top:10px">総資産＝現金＋住居価値＋物件価値＋お宝鑑定額＋特別賞。</div>`;broadcastResultsIfHost()}
function broadcastResultsIfHost(){if(isHost)connections.forEach(c=>{if(c.open)c.send({type:'snapshot',state})})}
function maybeRunCpu(){clearTimeout(cpuTimer);if(!isHost||state?.phase!=='playing')return;if(state.fx.stage||state.fx.turn||state.busy)return;const m=state.message;if(m){const owner=state.players.find(p=>p.id===m.ownerId);if(owner?.cpu)cpuTimer=setTimeout(()=>hostHandleAction(owner.id,{kind:'nextMessage'}),Math.round(760*speedScale()));return}const c=state.pendingChoice;if(c){const p=state.players.find(x=>x.id===c.playerId);if(p?.cpu)cpuTimer=setTimeout(()=>{let best=0,bestS=-1e9;c.options.forEach((o,i)=>{const s=cpuScoreOption(p,o);if(s>bestS){bestS=s;best=i}});hostHandleAction(p.id,{kind:'choose',index:best})},Math.round(850*speedScale()));return}const p=currentPlayer();if(p?.cpu&&state.turnReady)cpuTimer=setTimeout(()=>{if(p.cards.length&&Math.random()<.20){const idx=p.cards.findIndex(id=>{const c=CARDS.find(x=>x.id===id);return c&&(cpuDef(p.cpuType).w[c.tag]||1)>1.3});if(idx>=0){hostHandleAction(p.id,{kind:'useCard',index:idx});return}}hostHandleAction(p.id,{kind:'roll'})},Math.round(720*speedScale()))}
function randomCode(){return String(Math.floor(100000+Math.random()*900000))}
function createRoom(){ensureAudio();const name=cleanName(els.hostName.value);roomCode=randomCode();isHost=true;state=newState();const p=makePlayer(name);state.players.push(p);localPlayerId=p.id;show(els.lobby);render();if(typeof Peer==='undefined'){net('オンライン通信ライブラリを読み込めませんでした。ローカルCPU対戦は遊べます。');return}peer=new Peer('life-road-'+roomCode,{debug:0});peer.on('open',()=>net(`部屋を公開中：${state.players.length}/4人`));peer.on('connection',conn=>{connections.set(conn.peer,conn);conn.on('data',msg=>{if(msg?.type==='join'){if(state.phase!=='lobby'){conn.send({type:'reject',reason:'ゲームは開始済みです'});return}if(state.players.length>=4){conn.send({type:'reject',reason:'満員です'});return}const np=makePlayer(cleanName(msg.name));state.players.push(np);conn.playerId=np.id;conn.send({type:'welcome',playerId:np.id,state});addLog(`${np.name}が参加しました`);broadcast()}else if(msg?.type==='action'&&conn.playerId)hostHandleAction(conn.playerId,msg.action)});conn.on('close',()=>{if(conn.playerId){const p=state.players.find(x=>x.id===conn.playerId);if(state.phase==='lobby')state.players=state.players.filter(x=>x.id!==conn.playerId);else if(p){p.cpu=true;p.cpuType='balanced';addLog(`${p.name}の通信が切れたためCPUが代行します`)}broadcast()}})});peer.on('error',e=>net('通信エラー：'+(e.type||e.message||'不明')))}
function joinRoom(){ensureAudio();const name=cleanName(els.joinName.value),code=(els.roomInput.value||'').replace(/\D/g,'').slice(0,6);if(code.length!==6){alert('6桁の部屋コードを入力してください');return}roomCode=code;isHost=false;show(els.lobby);net('ホストへ接続中...');if(typeof Peer==='undefined'){alert('オンライン通信ライブラリを読み込めませんでした。');show(els.home);return}peer=new Peer(undefined,{debug:0});peer.on('open',()=>{hostConn=peer.connect('life-road-'+roomCode,{reliable:true});hostConn.on('open',()=>hostConn.send({type:'join',name}));hostConn.on('data',msg=>{if(msg?.type==='welcome'){localPlayerId=msg.playerId;state=msg.state;render()}else if(msg?.type==='snapshot'){state=msg.state;render()}else if(msg?.type==='reject'){alert(msg.reason);location.reload()}});hostConn.on('close',()=>net('ホストとの接続が切れました'))});peer.on('error',e=>{net('参加できません：部屋コードを確認してください');console.error(e)})}
function addCpu(){if(!isHost||state.players.length>=4)return;const type=pick(CPU_TYPES),num=state.players.filter(p=>p.cpu).length+1,p=makePlayer(`CPU${num}`,true,type.id);state.players.push(p);addLog(`${p.name}（${type.name}）を追加`);broadcast()}
function fillCpu(){while(isHost&&state.players.length<4)addCpu()}
function removeCpu(id){if(!isHost||state.phase!=='lobby')return;state.players=state.players.filter(p=>p.id!==id);state.players.forEach((p,i)=>p.color=COLORS[i]);broadcast()}
function handleFx(){const f=state.fx;if(f.roulette&&lastFx.roulette!==f.roulette.id){lastFx.roulette=f.roulette.id;animateRoulette(f.roulette.result);sfxRoulette()}const mv=f.move;if(mv){const key=mv.id+'_'+mv.step;if(lastFx.move!==key){lastFx.move=key;sfxStep();requestAnimationFrame(focusBoardCamera)}}if(f.stage&&lastFx.stage!==f.stage.id){lastFx.stage=f.stage.id;startBgm(f.stage.stageIndex);sfxStage()}const m=state.message;if(m){const key=m.id+'_'+m.index;if(lastFx.message!==key){lastFx.message=key;els.messageText.classList.remove('message-enter');void els.messageText.offsetWidth;els.messageText.classList.add('message-enter');const line=m.lines[m.index];if(line?.tone==='good')sfxGood();else if(line?.tone==='bad')sfxBad()}}}
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
 if(window.innerWidth<900)mobileBoardFocusTimer=setTimeout(focusMobileBoardAfterRoulette,Math.round(1650*speedScale()));
}
function ensureAudio(){if(!soundOn)return;if(!audioCtx){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;audioCtx=new AC()}if(audioCtx.state==='suspended')audioCtx.resume();if(!bgmTimer)startBgm(state?.stageIndex||0)}
function tone(freq,dur=.09,g=.028,type='sine',when=0){if(!soundOn||!audioCtx)return;const o=audioCtx.createOscillator(),gain=audioCtx.createGain();o.type=type;o.frequency.value=freq;gain.gain.setValueAtTime(Math.min(.18,g*2*masterVolume),audioCtx.currentTime+when);gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+when+dur);o.connect(gain).connect(audioCtx.destination);o.start(audioCtx.currentTime+when);o.stop(audioCtx.currentTime+when+dur+.02)}
function startBgm(si){if(!soundOn)return;ensureAudioCore();bgmStage=si;bgmStep=0;if(bgmTimer)clearInterval(bgmTimer);const seqs=[[262,330,392,330,294,349,392,349],[294,370,440,370,330,392,494,392],[247,294,370,294,220,277,330,277],[262,311,392,311,294,349,466,349],[220,277,330,277,247,294,370,294],[196,247,294,247,220,262,330,262],[175,220,262,220,196,247,294,247]],seq=seqs[si]||seqs[0];bgmTimer=setInterval(()=>{if(!soundOn||!audioCtx||audioCtx.state!=='running')return;const f=seq[bgmStep++%seq.length];tone(f,.22,.010,'triangle');if(bgmStep%4===1)tone(f/2,.28,.007,'sine')},320)}
function ensureAudioCore(){if(!audioCtx){const AC=window.AudioContext||window.webkitAudioContext;if(AC)audioCtx=new AC()}}
function sfxStep(){tone(520,.045,.018,'square')}function sfxGood(){tone(659,.10,.022,'triangle');tone(784,.12,.018,'triangle',.07)}function sfxBad(){tone(220,.12,.02,'sawtooth');tone(174,.16,.016,'sawtooth',.08)}function sfxStage(){tone(392,.12,.025,'triangle');tone(523,.14,.023,'triangle',.1);tone(659,.18,.02,'triangle',.2)}
function sfxRoulette(){if(!soundOn||!audioCtx)return;let i=0;const tick=setInterval(()=>{tone(760-i*10,.025,.012,'square');i++;if(i>15)clearInterval(tick)},Math.max(35,Math.round(65*speedScale())))}
function updateVolumeUi(){if(!els.volumeSlider)return;els.volumeSlider.value=String(Math.round(masterVolume*100));if(els.volumeValue)els.volumeValue.textContent=`${Math.round(masterVolume*100)}%`}
function setMasterVolume(v){masterVolume=Math.max(0,Math.min(1,Number(v)||0));localStorage.setItem('lifeRoadVolume',String(masterVolume));updateVolumeUi();if(masterVolume>0&&soundOn)ensureAudio()}
function applyPortraitCollapsed(){if(!els.portraitPanel)return;els.portraitPanel.classList.toggle('collapsed',portraitCollapsed);if(els.portraitToggle){els.portraitToggle.setAttribute('aria-expanded',portraitCollapsed?'false':'true');els.portraitToggle.title=portraitCollapsed?'手番キャラクター表示を開く':'手番キャラクター表示を収納'}}
function togglePortraitPanel(){portraitCollapsed=!portraitCollapsed;localStorage.setItem('lifeRoadPortraitCollapsed',portraitCollapsed?'1':'0');applyPortraitCollapsed()}
function toggleSound(){soundOn=!soundOn;els.soundBtn.textContent=soundOn?'🔊 サウンド ON':'🔇 サウンド OFF';if(soundOn){ensureAudio();startBgm(state?.stageIndex||0)}else if(bgmTimer){clearInterval(bgmTimer);bgmTimer=null}}
els.wheel.innerHTML='';setupBoardDrag();
els.avatarPickerClose?.addEventListener('click',closeAvatarPicker);
els.avatarPicker?.addEventListener('click',e=>{if(e.target===els.avatarPicker)closeAvatarPicker()});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&els.avatarPicker&&!els.avatarPicker.classList.contains('hidden'))closeAvatarPicker()});

els.create.addEventListener('click',createRoom);els.join.addEventListener('click',joinRoom);els.addCpu.addEventListener('click',addCpu);els.fillCpu.addEventListener('click',fillCpu);els.start.addEventListener('click',()=>sendAction({kind:'start'}));els.rollBtn.addEventListener('click',()=>sendAction({kind:'roll'}));els.mode.addEventListener('change',()=>{if(!isHost)return;state.settings.mode=els.mode.value;broadcast()});els.speed.addEventListener('change',()=>{if(!isHost)return;state.settings.speed=els.speed.value;broadcast()});els.soundBtn.addEventListener('click',toggleSound);els.volumeSlider?.addEventListener('input',e=>setMasterVolume(Number(e.target.value)/100));els.portraitToggle?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();togglePortraitPanel()});els.back.addEventListener('click',()=>location.reload());updateVolumeUi();applyPortraitCollapsed();
let messageAdvanceLock=false;
function canAdvanceLocalMessage(){if(!state?.message)return false;const owner=state.players.find(p=>p.id===state.message.ownerId);return state.message.ownerId===localPlayerId&&!owner?.cpu}
function advanceMessage(){if(!canAdvanceLocalMessage()||messageAdvanceLock)return;messageAdvanceLock=true;sendAction({kind:'nextMessage'});setTimeout(()=>{messageAdvanceLock=false},120)}
// Capture at document level so clicking the board, side UI, portrait, or message frame all advances the current message.
document.addEventListener('click',e=>{if(!canAdvanceLocalMessage())return;e.preventDefault();e.stopPropagation();advanceMessage()},{capture:true});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&canAdvanceLocalMessage()){e.preventDefault();advanceMessage()}},{capture:true});
document.addEventListener('pointerdown',ensureAudio,{once:true});window.addEventListener('resize',()=>{if(state?.phase==='playing')requestAnimationFrame(()=>focusBoardCamera());updateBoardDragUi()});
if(globalThis.__LIFE_NODE_TEST__){globalThis.__lifeDebug={newState,makePlayer,startGame,hostHandleAction,maybeRunCpu,getState:()=>state,setHost:v=>{isHost=v},setState:v=>{state=v},setLocalPlayerId:v=>{localPlayerId=v},addCpu,fillCpu};}
})();
