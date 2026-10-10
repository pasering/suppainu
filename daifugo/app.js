'use strict';
const $=id=>document.getElementById(id);
const R=['3','4','5','6','7','8','9','10','J','Q','K','A','2'], S=['♠','♥','♦','♣'];
const EFFECT={ace:'エース現る',three:'3最強',force:'フォースロマンキャンセル',five:'内山田洋とクール・ファイブ',romance:'ロマンキャンセル',seven:'マイルドセブン',eight:'8流し',nine:'銀河鉄道スリーナイン',eleven:'イレブンバック',bohemian:'ボヘミアン・ラプソディ',king:'キングオブキングス',revolution:'革命'};
const rules=[
'開始時は全員がカードを1枚伏せて場に出し、全員そろったら一斉公開。強いカードを出した人が先攻です。提出カードは全員消費。同点なら再勝負。',
'階段なし・同じ数字の組のみ。革命は同数字4枚。JKは単体では最強のJK、複数枚では数字の代用。',
'エース現る：A×3で単体ジョーカーを返せる（K×3で対抗可能）',
'3最強：3で最強札2を返して強制流し（同じ枚数）',
'フォースロマンキャンセル：6のロマンキャンセルを4で返して強制流し',
'内山田洋とクール・ファイブ：イレブンバック中に5で通常状態へ戻す',
'ロマンキャンセル：8流しを6で返す（4で対抗可能）',
'マイルドセブン：2枚以上の場に7×3で強制流し',
'8流し：8を出すと流し（6で対抗可能）',
'銀河鉄道スリーナイン：2枚以上の場に9×3で強制流し',
'イレブンバック：Jを出すと場が流れるまで強さが逆転',
'ボヘミアン・ラプソディ：K×3のキングオブキングスをQ×3で返して強制流し',
'キングオブキングス：A×3のエース現るをK×3で返す（Q×3で対抗可能）'
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const randomId=()=>Math.random().toString(36).slice(2,8).toUpperCase();
const AVATAR_COUNT=12;
const avatarSrc=n=>`assets/avatars/avatar_${String(n+1).padStart(2,'0')}.webp`;
const avatarValid=n=>Number.isInteger(n)&&n>=0&&n<AVATAR_COUNT;
const avatarNumber=n=>avatarValid(n)?n:null;
const avatarPicture=(n,cls='')=>avatarValid(n)?`<img class="${cls}" src="${avatarSrc(n)}" alt="アイコン${n+1}" loading="eager">`:'';
let preferredAvatar=(()=>{try{const v=Number(localStorage.getItem('hdexAvatar'));return avatarValid(v)?v:0}catch{return 0}})();
let avatarRequestPending=null;
function availableAvatar(preferred,excludedId=null){const used=new Set(members.filter(m=>m.id!==excludedId&&avatarValid(m.avatar)).map(m=>m.avatar));if(avatarValid(preferred)&&!used.has(preferred))return preferred;return Array.from({length:AVATAR_COUNT},(_,i)=>i).find(i=>!used.has(i))??null}
function randomAvailableAvatar(){const options=Array.from({length:AVATAR_COUNT},(_,i)=>i).filter(i=>!members.some(m=>m.avatar===i));return options.length?options[Math.floor(Math.random()*options.length)]:null}
function avatarPicker(){const grid=$('avatarGrid');if(!grid)return;const own=members.find(m=>m.id===myId);const taken=new Map(members.filter(m=>m.id!==myId&&avatarValid(m.avatar)).map(m=>[m.avatar,m]));const active=avatarRequestPending??own?.avatar??preferredAvatar;
 grid.innerHTML=Array.from({length:AVATAR_COUNT},(_,n)=>{const busy=taken.get(n),chosen=active===n;return `<button type="button" class="avatar-choice ${chosen?'chosen':''} ${busy?'taken':''}" data-avatar="${n}" ${busy?'disabled':''} aria-pressed="${chosen?'true':'false'}" aria-label="アイコン${n+1}${busy?' 使用中：'+esc(busy.name):''}">${avatarPicture(n)}${busy?`<span class="avatar-taken">使用中</span>`:''}</button>`}).join('');
 grid.querySelectorAll('[data-avatar]').forEach(b=>b.addEventListener('click',()=>chooseAvatar(Number(b.dataset.avatar))));
 const caption=$('avatarCaption');const name=own?'現在のあなたのアイコン':'入室前の希望アイコン';caption.textContent=`${name}：${active+1}番　${avatarRequestPending!==null?'（変更を送信しました。確定待ち）':own?'（ほかの人が使用しているアイコンは選べません）':'（入室時に先着順で確定します）'}`;
}
function chooseAvatar(n){if(!avatarValid(n))return;const other=members.find(m=>m.id!==myId&&m.avatar===n);if(other)return;preferredAvatar=n;try{localStorage.setItem('hdexAvatar',String(n))}catch{}
 if(!peer||!roomId){avatarPicker();return}
 if(state){return}
 if(host){const mine=members.find(m=>m.id===myId);if(mine){mine.avatar=availableAvatar(n,myId);broadcastLobby()}else avatarPicker()}
 else {avatarRequestPending=n;const c=connections[roomId];if(c?.open)c.send({type:'avatar',avatar:n});avatarPicker()}
 sfx('tap')
}

let peer,connections={},host=false,myId='',roomId='',members=[],state=null,selected=[],cutinSeen=0,openingRevealSeen='',botTimer=null,openingTimer=null;
const say=s=>$('lobbyStatus').textContent=s;

// Audio: local controls per player, synthesized background music and short effects.
const audioSettings=(()=>{try{return {...{music:true,sfx:true,musicVolume:35,sfxVolume:65},...JSON.parse(localStorage.getItem('hdexAudio')||'{}')}}catch{return {music:true,sfx:true,musicVolume:35,sfxVolume:65}}})();
let audioCtx=null,musicTimer=null,musicStep=0;
function ensureAudio(){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;if(!audioCtx)audioCtx=new AC();if(audioCtx.state==='suspended')audioCtx.resume().catch(()=>{});return audioCtx}
function note(freq,duration=0.18,volume=0.07,wave='sine',when=0){const ctx=ensureAudio();if(!ctx)return;const t=ctx.currentTime+when,osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=wave;osc.frequency.setValueAtTime(freq,t);gain.gain.setValueAtTime(0.0001,t);gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),t+.015);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);osc.connect(gain).connect(ctx.destination);osc.start(t);osc.stop(t+duration+.02)}
function sfx(kind='tap'){if(!audioSettings.sfx||!audioSettings.sfxVolume)return;const v=audioSettings.sfxVolume/100;ensureAudio();if(kind==='special'){[523,659,784,1047].forEach((f,i)=>note(f,.34,.085*v,'triangle',i*.095))}else if(kind==='reveal'){[392,523,659].forEach((f,i)=>note(f,.2,.075*v,'triangle',i*.085))}else if(kind==='play'){note(392,.11,.05*v,'triangle');note(587,.12,.04*v,'sine',.06)}else if(kind==='pass'){note(220,.12,.03*v,'sine')}else note(660,.055,.025*v,'sine')}
const melody=[659,0,587,523,0,587,659,784,659,0,523,0,440,523,587,0,659,0,784,880,0,784,659,587,523,0,587,0,440,0,392,0];
function musicTick(){if(!audioSettings.music||!audioSettings.musicVolume)return;const v=audioSettings.musicVolume/100,i=musicStep++%melody.length,f=melody[i];if(f)note(f,.17,.025*v,'triangle');if(i%4===0)note([130.81,146.83,164.81,146.83][Math.floor(i/8)%4],.36,.033*v,'sine');if(i%8===4)note(261.6,.08,.009*v,'square')}
function updateMusic(){if(musicTimer){clearInterval(musicTimer);musicTimer=null}if(audioSettings.music&&audioSettings.musicVolume>0){ensureAudio();musicTimer=setInterval(musicTick,240)}}
function setAudio(k,v){audioSettings[k]=k.endsWith('Volume')?Number(v):Boolean(v);try{localStorage.setItem('hdexAudio',JSON.stringify(audioSettings))}catch{}syncAudioUI();if(k==='music'||k==='musicVolume')updateMusic();else sfx('tap')}
function syncAudioUI(){document.querySelectorAll('[data-audio]').forEach(el=>{const k=el.dataset.audio;if(el.type==='checkbox')el.checked=!!audioSettings[k];else el.value=audioSettings[k];const out=el.parentElement.querySelector('output');if(out)out.textContent=audioSettings[k]+'%'})}
function initializeAudio(){document.querySelectorAll('[data-audio]').forEach(el=>el.addEventListener('input',()=>setAudio(el.dataset.audio,el.type==='checkbox'?el.checked:el.value)));syncAudioUI();document.addEventListener('pointerdown',()=>{if(!audioCtx)updateMusic()},{once:true})}

function setupPeer(pid,onOpen){if(!window.Peer){say('通信ライブラリが読み込めません。インターネット接続を確認してください');return}peer=new Peer(pid,{debug:0});peer.on('open',onOpen);peer.on('error',e=>say('通信エラー: '+e.type));peer.on('connection',c=>{if(!host||state){c.on('open',()=>c.close());return}connections[c.peer]=c;c.on('data',m=>handle(m,c));c.on('close',()=>{delete connections[c.peer];members=members.filter(p=>p.id!==c.peer);broadcastLobby()})})}
function createRoom(){if(peer)return;host=true;roomId='HDEX-'+randomId();myId=roomId;members=[{id:myId,name:($('name').value.trim()||'ホスト').slice(0,12),avatar:preferredAvatar}];setupPeer(roomId,()=>{say('部屋を作成しました。招待コードを共有してください');broadcastLobby()});sfx('tap')}
function joinRoom(){if(peer)return;host=false;roomId=$('room').value.trim().toUpperCase();if(!roomId)return say('招待コードを入力してください');myId='P-'+randomId();setupPeer(myId,()=>{let c=peer.connect(roomId,{reliable:true});connections[roomId]=c;c.on('open',()=>{c.send({type:'join',name:$('name').value.trim()||'ゲスト',avatar:preferredAvatar});say('部屋に接続しました')});c.on('data',m=>handle(m,c));c.on('close',()=>say('ホストとの接続が切れました'))});sfx('tap')}
function copyCode(){if(navigator.clipboard?.writeText)navigator.clipboard.writeText(roomId).then(()=>say('招待コードをコピーしました')).catch(()=>say('招待コード：'+roomId));else say('招待コード：'+roomId)}
function broadcast(m){Object.values(connections).forEach(c=>{if(c.open)c.send(m)})}
function broadcastLobby(){const msg={type:'lobby',members,roomId};broadcast(msg);handle(msg)}
function addCPU(){if(!host||state)return; if(members.length>=6)return say('最大6人です');let num=1;while(members.some(m=>m.name==='CPU '+num))num++;members.push({id:'CPU-'+randomId(),name:'CPU '+num,cpu:true,avatar:randomAvailableAvatar()});broadcastLobby();sfx('tap')}
function removeCPU(id){if(!host||state)return;members=members.filter(p=>p.id!==id||!p.cpu);broadcastLobby()}
function handle(m,c){if(!m||typeof m!=='object')return;
 if(m.type==='join'&&host&&!state){if(members.length>=6){c.send({type:'error',text:'満員です（最大6人）'});return}if(members.some(p=>p.id===c.peer))return;members.push({id:c.peer,name:String(m.name||'ゲスト').slice(0,12),avatar:availableAvatar(avatarNumber(m.avatar))});broadcastLobby();return}
 if(m.type==='lobby') {members=m.members;roomId=m.roomId;avatarRequestPending=null;avatarPicker();$('waiting').classList.remove('hidden');$('code').textContent=roomId;$('members').innerHTML=members.map((p,i)=>`<div class="member-line"><div class="member-main">${avatarPicture(p.avatar,'member-avatar')}<span>PL${i+1}: ${esc(p.name)} ${p.cpu?'<span class="cpu-tag">CPU</span>':''}${p.id===myId?'（あなた）':''}</span></div>${host&&p.cpu?`<button class="micro" data-remove="${esc(p.id)}">削除</button>`:''}</div>`).join('')+Array.from({length:Math.max(0,6-members.length)},(_,i)=>`<div class="member-line empty"><span class="member-main">PL${members.length+i+1}: 空き</span></div>`).join('');$('members').querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>removeCPU(b.dataset.remove));$('start').classList.toggle('hidden',!host);$('addCPU').classList.toggle('hidden',!host);$('addCPU').disabled=members.length>=6;$('waitingNote').textContent=members.length+' / 6人（CPUを含む）';return}
 if(m.type==='error'){say(String(m.text));$('notice').textContent=String(m.text);return}
 if(m.type==='avatar'&&host&&!state&&c){const pl=members.find(p=>p.id===c.peer&&!p.cpu);if(!pl)return;const n=avatarNumber(m.avatar);if(n===null)return;const approved=availableAvatar(n,pl.id);if(approved!==n){c.send({type:'error',text:'そのアイコンは先に選ばれました。別のアイコンを選んでください。'});broadcastLobby();return}pl.avatar=n;broadcastLobby();return}

 if(m.type==='state'){state=m.state;render();return}
 if(!host||!state||!c)return;const who=c.peer;
 if(m.type==='action')apply(who,m.kind,m.cards,m.wildRank);
 if(m.type==='exchange')submitExchange(who,m.cards);
 if(m.type==='opening')submitOpening(who,m.cards);
}
function deck(){const d=[];for(const r of R)for(const s of S)d.push({id:r+s,r,s});d.push({id:'JOKER1',r:'JK',s:'★'},{id:'JOKER2',r:'JK',s:'★'});for(let i=d.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[d[i],d[j]]=[d[j],d[i]]}return d}
function sort(h){h.sort((a,b)=>(a.r==='JK'?13:R.indexOf(a.r))-(b.r==='JK'?13:R.indexOf(b.r))||S.indexOf(a.s)-S.indexOf(b.s))}
function log(s){state.logs.unshift(s);state.logs=state.logs.slice(0,60)}
function startGame(){if(openingTimer){clearTimeout(openingTimer);openingTimer=null}if(!host||members.length<2)return say('2人以上（CPUを含む）で開始してください');const d=deck(),players=members.map(m=>({...m,hand:[],rank:null,passed:false}));d.forEach((c,i)=>players[i%players.length].hand.push(c));players.forEach(p=>sort(p.hand));state={players,turn:0,table:null,leader:null,passes:0,rev:false,jback:false,round:1,finished:[],logs:[],pending:null,phase:'opening',opening:{},openingReveal:null,openingAttempt:1,openingSeq:0,exchange:{},lastRanks:null,cutin:null,seq:0};log('全員で先攻を決めます。提出カードは公開時に消費します');sync();sfx('reveal')}
function redacted(viewer){return {...state,players:state.players.map(p=>({...p,handCount:p.hand.length,hand:p.id===viewer?p.hand:[]})),opening:Object.fromEntries(Object.keys(state.opening||{}).map(k=>[k,true])),exchange:Object.fromEntries(Object.keys(state.exchange||{}).map(k=>[k,true]))}}
function sync(){if(!state)return;for(const [id,c] of Object.entries(connections)){if(c.open)c.send({type:'state',state:redacted(id)})}render();scheduleCPU()}
function next(i){for(let k=1;k<=state.players.length;k++){let j=(i+k)%state.players.length;if(!state.players[j].rank&&!state.players[j].passed)return j}return i}
function pendingNext(i){for(let k=1;k<=state.players.length;k++){let j=(i+k)%state.players.length,p=state.players[j];if(!p.rank&&j!==state.pending.owner&&!state.pending.seen.includes(p.id))return j}return null}
function flush(){state.table=null;state.leader=null;state.passes=0;state.jback=false;state.pending=null;state.players.forEach(p=>p.passed=false);log('場が流れました')}
function value(r){return r==='JK'?99:(state.rev!==state.jback?-R.indexOf(r):R.indexOf(r))}
// Single joker is always JK, never a disguised rank.  Mixed/paired jokers adopt the declared rank.
function possibleRanks(cards){if(!cards?.length)return[];const real=[...new Set(cards.filter(c=>c.r!=='JK').map(c=>c.r))];if(real.length>1)return[];if(real.length===1)return[real[0]];if(cards.length===1)return['JK'];return [...R]}
function legalRank(cards,r){const t=state.table,n=cards.length,old=t?.rank,prev=t?.effect;if(!t)return true;
 if(prev==='eight')return r==='6'&&n===t.cards.length;
 if(prev==='romance')return r==='4'&&n===t.cards.length;
 if(prev==='ace')return r==='K'&&n===3;
 if(prev==='king')return r==='Q'&&n===3;
 if(state.jback&&r==='5'&&n===t.cards.length)return true;
 if(old==='2'&&r==='3'&&n===t.cards.length)return true;
 if(old==='JK'&&r==='A'&&n===3)return true;
 if(n===3&&['7','9'].includes(r)&&t.cards.length>=2)return true;
 if(n!==t.cards.length)return false;
 if(old==='JK')return false;
 return r==='JK'||value(r)>value(old)
}
function validRanks(cards){return possibleRanks(cards).filter(r=>legalRank(cards,r))}
function resolvePlay(cards,chosen){const ranks=validRanks(cards);if(!ranks.length)return {error:'この組み合わせは出せません（枚数・数字・特殊役を確認してください）'};if(chosen){if(!ranks.includes(chosen))return{error:'指定した数字では出せません'};return{rank:chosen}}if(ranks.length>1)return {error:'ジョーカーの数字を選択してください',choices:ranks};return{rank:ranks[0]}}
function raiseEffect(effect){state.cutin={seq:++state.seq,title:EFFECT[effect]||effect};log('✦ '+state.cutin.title+' 発動！')}
function apply(who,kind,ids,chosen){if(!state||state.phase!=='playing')return;const p=state.players[state.turn];if(p.id!==who)return;const name=p.name;
 if(kind==='pass') {if(!state.table)return;if(state.pending){state.pending.seen.push(p.id);log(name+'：割り込みを見送り');const target=pendingNext(state.turn);if(target===null){const owner=state.pending.owner;flush();state.turn=state.players[owner].rank?next(owner):owner}else state.turn=target;return sync()}log(name+'：パス');p.passed=true;state.passes++;if(state.passes>=state.players.filter(x=>!x.rank).length-1){const leader=state.leader;flush();state.turn=leader!==null&&!state.players[leader].rank?leader:next(state.turn)}else state.turn=next(state.turn);return sync()}
 if(!Array.isArray(ids)||!ids.length||new Set(ids).size!==ids.length)return;
 const cards=ids.map(id=>p.hand.find(c=>c.id===id));if(cards.some(c=>!c))return;
 const result=resolvePlay(cards,chosen);if(result.error){if(host&&who===myId)$('notice').textContent=result.error;else connections[who]?.send({type:'error',text:result.error});return}
 const r=result.rank,n=cards.length,prev=state.table?.effect,old=state.table?.rank;let effect='';
 if(prev==='eight'&&r==='6')effect='romance';else if(prev==='romance'&&r==='4')effect='force';else if(prev==='ace'&&r==='K'&&n===3)effect='king';else if(prev==='king'&&r==='Q'&&n===3)effect='bohemian';else if(old==='JK'&&r==='A'&&n===3)effect='ace';else if(old==='2'&&r==='3')effect='three';else if(r==='7'&&n===3&&state.table?.cards.length>=2)effect='seven';else if(r==='9'&&n===3&&state.table?.cards.length>=2)effect='nine';else if(r==='8')effect='eight';else if(r==='J')effect='eleven';else if(r==='5'&&state.jback)effect='five';
 const revolution=n===4&&r!=='JK';if(revolution){state.rev=!state.rev;log('革命！ 強さが逆転しました')}
 if(r==='J')state.jback=true;if(effect==='five')state.jback=false;
 for(const c of cards)p.hand.splice(p.hand.findIndex(x=>x.id===c.id),1);
 state.table={cards,effect,rank:r};state.leader=state.turn;state.passes=0;state.players.forEach(x=>x.passed=false);state.pending=null;
 log(name+'：'+r+' ×'+n);if(effect)raiseEffect(effect);else if(revolution)raiseEffect('revolution');
 if(!p.hand.length){p.rank=state.finished.length+1;state.finished.push(p.id);log('🏆 '+name+' が '+p.rank+'位で上がり！');if(state.finished.length===state.players.length-1){const last=state.players.find(x=>!x.rank);last.rank=state.players.length;state.finished.push(last.id);log('ゲーム終了！ '+state.players.map(x=>x.name+':'+x.rank+'位').join(' / '));state.phase='ended';state.lastRanks=Object.fromEntries(state.players.map(x=>[x.id,x.rank]));return sync()}}
 if(['force','bohemian','three','seven','nine'].includes(effect)){const lead=state.turn;flush();state.turn=p.rank?next(lead):lead}
 else if(['eight','romance','ace','king'].includes(effect)){state.pending={effect,owner:state.turn,seen:[]};const responder=pendingNext(state.turn);if(responder===null){const leader=state.turn;flush();state.turn=p.rank?next(leader):leader}else state.turn=responder}
 else state.turn=next(state.turn);
 sync()
}
function nextRound(){if(openingTimer){clearTimeout(openingTimer);openingTimer=null}if(!host||state?.phase!=='ended')return;const d=deck(),players=state.players.map(p=>({...p,hand:[],rank:null,passed:false}));d.forEach((c,i)=>players[i%players.length].hand.push(c));players.forEach(p=>sort(p.hand));Object.assign(state,{players,table:null,leader:null,passes:0,rev:false,jback:false,pending:null,finished:[],round:state.round+1,exchange:{},opening:{},openingReveal:null,openingAttempt:1,openingSeq:0,phase:'exchange',cutin:null});state.turn=players.findIndex(p=>state.lastRanks[p.id]===1);log('第'+state.round+'ゲーム：カード交換を行ってください');sync()}
function exchangeCount(rank){const n=state.players.length;return n===2?1:rank===1||rank===n?2:rank===2||rank===n-1?1:0}
function exchangeTarget(rank){const n=state.players.length;return rank===1?n:rank===n?1:rank===2?n-1:rank===n-1?2:null}
function submitExchange(who,ids){if(!host||state?.phase!=='exchange'||state.exchange[who])return;const p=state.players.find(x=>x.id===who);if(!p)return;const count=exchangeCount(state.lastRanks[who]);if(!Array.isArray(ids)||ids.length!==count||new Set(ids).size!==count||!ids.every(id=>p.hand.some(c=>c.id===id)))return;state.exchange[who]=ids;log(p.name+'：交換カード確定');if(state.players.every(x=>state.exchange[x.id]||!exchangeCount(state.lastRanks[x.id]))){const bundles=state.players.map(x=>({id:x.id,cards:(state.exchange[x.id]||[]).map(id=>x.hand.find(c=>c.id===id))}));bundles.forEach(b=>{const p=state.players.find(x=>x.id===b.id);p.hand=p.hand.filter(c=>!b.cards.some(y=>y.id===c.id))});bundles.forEach(b=>{const recipient=state.players.find(x=>state.lastRanks[x.id]===exchangeTarget(state.lastRanks[b.id]));if(recipient)recipient.hand.push(...b.cards)});state.players.forEach(x=>sort(x.hand));state.phase='opening';state.opening={};state.openingReveal=null;state.openingAttempt=1;state.openingSeq=0;log('交換完了。全員で開始カードを選んでください')}sync()}
// Opening showdown: collect face-down submissions, publicly reveal on the table,
// consume the chosen card, and hold the result on screen before continuing.
const OPENING_REVEAL_MS=4400;
function finishOpeningReveal(sequence){
 if(!host||!state||state.phase!=='opening-reveal'||state.openingReveal?.seq!==sequence)return;
 const result=state.openingReveal;
 if(result.tie&&state.players.every(p=>p.hand.length>0)){
  state.phase='opening';state.opening={};state.openingAttempt++;
  log('先攻決定・第'+state.openingAttempt+'回戦。全員もう1枚選んでください');
 }else{
  // A rare edge case: there are no cards left for another tie-breaker.
  const winningId=result.winners[0];
  state.turn=state.players.findIndex(p=>p.id===winningId);
  state.phase='playing';
  if(result.tie)log('手札不足のため同点者の席順で先攻を決定しました');
  else log('👑 '+result.entries.find(x=>x.id===winningId).name+' が先攻！');
 }
 state.openingReveal=null;
 sync();
}
function submitOpening(who,ids){
 if(!host||state?.phase!=='opening'||state.opening[who])return;
 const p=state.players.find(x=>x.id===who);
 if(!p||!Array.isArray(ids)||ids.length!==1||!p.hand.some(c=>c.id===ids[0]))return;
 state.opening[who]=ids[0];log(p.name+'：開始カードを伏せて提出');
 if(state.players.every(x=>state.opening[x.id])){
  const entries=state.players.map((x,i)=>({id:x.id,pl:i+1,name:x.name,avatar:x.avatar,card:{...x.hand.find(c=>c.id===state.opening[x.id])}}));
  const power=c=>c.r==='JK'?13:R.indexOf(c.r);
  const max=Math.max(...entries.map(x=>power(x.card)));
  const winners=entries.filter(x=>power(x.card)===max).map(x=>x.id);
  for(const x of entries){const owner=state.players.find(p=>p.id===x.id);owner.hand=owner.hand.filter(c=>c.id!==x.card.id)}
  state.phase='opening-reveal';
  state.openingReveal={seq:++state.openingSeq,attempt:state.openingAttempt,entries,winners,tie:winners.length!==1};
  const result=entries.map(x=>'PL'+x.pl+' '+x.name+'：'+x.card.r+x.card.s).join(' / ');
  log('先攻決定・一斉公開！ '+result);
  log(winners.length===1?'👑 '+entries.find(x=>x.id===winners[0]).name+' の勝利！':'最高カードが同点！ 提出カードは消費して再勝負');
  if(openingTimer)clearTimeout(openingTimer);
  const sequence=state.openingReveal.seq;
  openingTimer=setTimeout(()=>finishOpeningReveal(sequence),OPENING_REVEAL_MS);
 }
 sync();
}
function sendOpening(){if(!state||state.phase!=='opening'||selected.length!==1)return;const ids=[...selected];selected=[];if(host)submitOpening(myId,ids);else connections[roomId]?.send({type:'opening',cards:ids});sfx('reveal');render()}
function sendExchange(){if(!state||state.phase!=='exchange')return;const ids=[...selected];selected=[];if(host)submitExchange(myId,ids);else connections[roomId]?.send({type:'exchange',cards:ids});sfx('tap');render()}
function sendAction(kind){if(!state||state.phase!=='playing')return;const me=state.players.find(p=>p.id===myId);if(!me||state.players[state.turn].id!==myId)return;if(kind==='play'){const cards=selected.map(id=>me.hand.find(c=>c.id===id));const r=resolvePlay(cards,$('wildRank').value);if(r.error){$('notice').textContent=r.error;return}}const ids=[...selected],chosen=$('wildRank').value;selected=[];if(host)apply(myId,kind,ids,chosen);else connections[roomId]?.send({type:'action',kind,cards:ids,wildRank:chosen});sfx(kind==='pass'?'pass':'play');render()}
// CPU player: opening, exchanging, and turn decisions always run on host.
// Keep a short, visible thinking pause before every CPU action.
const CPU_ACTION_DELAY_MS = 2000;
function scheduleCPU(){if(botTimer)clearTimeout(botTimer);if(!host||!state||state.phase==='ended')return;let bot=null;if(state.phase==='opening')bot=state.players.find(p=>p.cpu&&!state.opening[p.id]);else if(state.phase==='exchange')bot=state.players.find(p=>p.cpu&&exchangeCount(state.lastRanks[p.id])&&!state.exchange[p.id]);else if(state.phase==='playing')bot=state.players[state.turn]?.cpu?state.players[state.turn]:null;if(bot)botTimer=setTimeout(()=>runCPU(bot.id),CPU_ACTION_DELAY_MS)}
function runCPU(who){if(!host||!state)return;const p=state.players.find(x=>x.id===who);if(!p||!p.cpu)return;
 if(state.phase==='opening'){if(state.opening[who])return;const c=[...p.hand].sort((a,b)=>(a.r==='JK'?13:R.indexOf(a.r))-(b.r==='JK'?13:R.indexOf(b.r)))[Math.floor(p.hand.length*.5)]||p.hand[0];if(c)submitOpening(who,[c.id]);return}
 if(state.phase==='exchange'){if(state.exchange[who])return;const count=exchangeCount(state.lastRanks[who]);const cards=[...p.hand].sort((a,b)=>(a.r==='JK'?13:R.indexOf(a.r))-(b.r==='JK'?13:R.indexOf(b.r)));const poor=state.lastRanks[who]>state.players.length/2;submitExchange(who,(poor?cards.slice(-count):cards.slice(0,count)).map(x=>x.id));return}
 if(state.phase!=='playing'||state.players[state.turn].id!==who)return;
 let options=[];const groups=Object.fromEntries(R.map(r=>[r,p.hand.filter(c=>c.r===r)])),jokers=p.hand.filter(c=>c.r==='JK');
 for(const r of R){for(let n=1;n<=Math.min(4,groups[r].length+jokers.length);n++){const natural=groups[r].slice(0,n),need=n-natural.length;if(need>jokers.length)continue;const cards=[...natural,...jokers.slice(0,need)];if(cards.length!==n)continue;const ranks=validRanks(cards);if(ranks.includes(r))options.push({cards,rank:r,score:n*8-(R.indexOf(r)+1)*.13+need*16})}}
 for(let n=1;n<=Math.min(2,jokers.length);n++){const cards=jokers.slice(0,n);for(const rank of validRanks(cards))options.push({cards,rank,score:n*8+30})}
 // Avoid wasting strong ranks and jokers when several legal options exist.
 options.sort((a,b)=>a.score-b.score);if(options.length){const best=options[0];apply(who,'play',best.cards.map(c=>c.id),best.rank)}else apply(who,'pass',[],null)
}
function cardHTML(c,clickable=false){const red=['♥','♦'].includes(c.s),joker=c.r==='JK';return `<div role="${clickable?'button':'img'}" aria-label="${esc(c.r+c.s)}" class="card ${red?'red':''} ${joker?'joker':''} ${selected.includes(c.id)&&clickable?'selected':''}" ${clickable?`data-id="${esc(c.id)}" tabindex="0"`:''}><span class="corner">${joker?'★':esc(c.r)}</span><span class="suit">${joker?'JK':c.s}</span><span class="mini">${joker?'JOKER':'♛ EX ♛'}</span></div>`}
function openingStage(){
 const revealed=state.phase==='opening-reveal'&&state.openingReveal;
 const entries=revealed?state.openingReveal.entries:state.players.map((p,i)=>({id:p.id,pl:i+1,name:p.name,avatar:p.avatar,submitted:!!state.opening?.[p.id]}));
 const winners=revealed?new Set(state.openingReveal.winners):new Set();
 const cards=entries.map((p,i)=>{
  const won=winners.has(p.id),sent=!!p.submitted;
  const shown=revealed&&p.card;
  const face=shown?cardHTML(p.card):sent?'<div class="card back opening-card-back" aria-label="伏せたカード"></div>':'<div class="opening-unsubmitted" aria-label="未提出">?</div>';
  return `<div class="opening-seat ${shown?'revealed':''} ${won?'opening-win':''}" style="--seat-order:${i}">
    <div class="opening-identity">${avatarPicture(p.avatar,'opening-avatar')}<span>PL${p.pl} <strong>${esc(p.name)}</strong></span></div>
    <div class="opening-face">${face}</div>
    <div class="opening-seat-note">${shown?(won?'★ 最高札':'公開'):(sent?'提出済み':'カード選択中')}</div>
  </div>`;
 }).join('');
 const count=state.players.filter(x=>state.opening?.[x.id]).length;
 const headline=revealed?'全員のカードを公開！':'先攻決定バトル';
 const subtitle=revealed?'提出したカードはすべて消費されました':`第${state.openingAttempt||1}回戦 · ${count} / ${state.players.length}人が提出`;
 const winningEntries=revealed?state.openingReveal.entries.filter(x=>winners.has(x.id)):[];
 const verdict=revealed?(state.openingReveal.tie?'<div class="opening-verdict tie">同点！ もう一度勝負！</div>':`<div class="opening-verdict"><span class="opening-crown">♛</span> PL${winningEntries[0].pl} ${esc(winningEntries[0].name)} の勝利！<small>先攻決定</small></div>`):'<div class="opening-wait">全員がカードを出すと一斉公開！</div>';
 return `<section class="opening-board ${revealed?'is-reveal':'is-waiting'}" aria-label="先攻決定カード公開"><div class="opening-board-head"><div class="opening-eyebrow">HYBRID DAIFUGO EX · STARTING HAND</div><h2>${headline}</h2><p>${subtitle}</p></div><div class="opening-seats">${cards}</div>${verdict}</section>`;
}
function refreshWild(){if(!state)return;const me=state.players.find(p=>p.id===myId);if(!me)return;const cards=selected.map(id=>me.hand.find(c=>c.id===id)).filter(Boolean);const all=possibleRanks(cards),allowed=validRanks(cards),needsChoice=all.length>1&&allowed.length>1;const box=$('wildBox'),select=$('wildRank');const before=select.value;box.classList.toggle('hidden',!needsChoice);select.innerHTML=needsChoice?'<option value="">数字を選択</option>'+allowed.map(r=>`<option value="${r}">${r}</option>`).join(''):'';if(allowed.includes(before))select.value=before;else select.value='';$('play').disabled=state.phase!=='playing'||state.players[state.turn]?.id!==myId||(needsChoice&&!select.value)}
function showCutin(c){if(!c||c.seq===cutinSeen)return;cutinSeen=c.seq;const el=$('cutin');el.classList.remove('show');void el.offsetWidth;$('cutinTitle').textContent=c.title;el.classList.add('show');clearTimeout(el.hideTimer);el.hideTimer=setTimeout(()=>el.classList.remove('show'),1950);sfx('special')}
function render(){if(!state)return;$('lobby').classList.add('hidden');$('game').classList.remove('hidden');const me=state.players.find(p=>p.id===myId);if(!me)return;const current=state.players[state.turn];$('players').innerHTML=state.players.map((p,i)=>`<div class="player ${i===state.turn?'active':''}"><div class="player-head">${avatarPicture(p.avatar,'player-avatar')}<div class="player-text"><strong class="player-name">PL${i+1} ${esc(p.name)}${p.cpu?' 🤖':''}${p.id===myId?'（あなた）':''}</strong><div class="player-stats">${p.rank?'🏆 '+p.rank+'位':'プレイ中'} · <span class="badge">${p.handCount??p.hand.length}枚</span></div></div></div></div>`).join('');$('round').textContent=`第${state.round}ゲーム · ${state.rev?'革命中':'通常'}${state.jback?' · イレブンバック':''}`;$('turn').textContent=state.phase==='ended'?'ゲーム終了':state.phase==='exchange'?'カード交換中':state.phase==='opening'?'先攻決定カード選択中':state.phase==='opening-reveal'?'先攻決定・カード公開中':esc(current?.name||'')+' の番';$('center').innerHTML=['opening','opening-reveal'].includes(state.phase)?openingStage():state.table?state.table.cards.map(c=>cardHTML(c)).join('')+(state.table.rank&&state.table.cards.some(c=>c.r==='JK')?'<span class="badge">代用：'+esc(state.table.rank)+'</span>':''):'<span class="free-table">FREE TABLE</span>';document.querySelector('.table').classList.toggle('opening-mode',['opening','opening-reveal'].includes(state.phase));$('effect').textContent=EFFECT[state.table?.effect]||'';
 const mine=state.phase==='playing'&&current?.id===myId&&!me.rank;$('play').disabled=!mine;$('pass').disabled=!mine||!state.table;const canChoose=state.phase==='playing'||(state.phase==='opening'&&!state.opening?.[myId])||state.phase==='exchange'&&!state.exchange?.[myId];if(!canChoose)selected=[];$('hand').innerHTML=me.hand.map(c=>cardHTML(c,canChoose)).join('');$('hand').querySelectorAll('[data-id]').forEach(el=>{const choose=()=>{const id=el.dataset.id;selected=selected.includes(id)?selected.filter(x=>x!==id):[...selected,id];if(state.phase==='opening')selected=selected.slice(-1);$('hand').querySelectorAll('[data-id]').forEach(x=>x.classList.toggle('selected',selected.includes(x.dataset.id)));refreshWild();if(state.phase==='opening'){const submit=$('openingInfo').querySelector('button');if(submit)submit.disabled=selected.length!==1}sfx('tap')};el.onclick=choose;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose()}}});refreshWild();$('nextRound').classList.toggle('hidden',!(host&&state.phase==='ended'));
 const opening=state.phase==='opening';$('openingInfo').innerHTML=opening?(state.opening?.[myId]?'提出済み。場に伏せたカードが表示されます。':'<button onclick="sendOpening()" '+(selected.length!==1?'disabled':'')+'>選んだ1枚を場に出す（消費）</button>'):state.phase==='opening-reveal'?'<strong>公開結果を表示中…　勝者が決まったら自動で進みます。</strong>':'';
 const count=state.phase==='exchange'?exchangeCount(state.lastRanks[myId]):0;$('exchangeInfo').innerHTML=state.phase==='exchange'?(count?(state.exchange?.[myId]?'提出済み。交換完了を待っています。':`<button onclick="sendExchange()">${count}枚を交換する</button>　手札から${count}枚選択してください`):'カード交換の完了を待っています'):'';
 $('gameControls').classList.toggle('hidden',state.phase!=='playing');$('notice').textContent=state.phase==='ended'?'順位確定。ホストが次のゲームを開始できます。':state.phase==='exchange'?'カード交換フェーズ':state.phase==='opening-reveal'?'場のカードを公開しています。全員のカードは消費されました。':opening?'先攻決定のカードを1枚選び、場に伏せて出してください。':mine?(state.pending?'特殊能力への割り込み：対応カードを出すかパスしてください':'手札からカードを選択してください'):'ほかのプレイヤーを待っています';$('log').innerHTML=state.logs.map(x=>'<div>'+esc(x)+'</div>').join('');if(state.phase==='opening-reveal'&&state.openingReveal){const key=state.round+'-'+state.openingReveal.seq;if(openingRevealSeen!==key){openingRevealSeen=key;sfx('reveal')}}showCutin(state.cutin)
}
$('rules').innerHTML=rules.map(x=>'<div class="rule">'+esc(x)+'</div>').join('');$('gameRules').innerHTML=rules.map(x=>'<div class="rule">'+esc(x)+'</div>').join('');initializeAudio();avatarPicker();
