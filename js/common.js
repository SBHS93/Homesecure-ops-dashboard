export const TYPES={salesTracker:{label:"Sales Tracker",color:"orange"},serviceJobs:{label:"Service Jobs",color:"teal"},upgrades:{label:"Upgrades",color:"gold"}};
export const TYPE_KEYS=Object.keys(TYPES);
export const number=v=>Number.isFinite(Number(v))?Number(v):0;
export const fmtDateTime=v=>{const d=v?.toDate?v.toDate():v?.seconds?new Date(v.seconds*1000):null;return d?new Intl.DateTimeFormat("en-IE",{dateStyle:"short",timeStyle:"short"}).format(d):"Pending"};
export function emptyCounts(){return{salesTracker:0,serviceJobs:0,upgrades:0,total:0}}
