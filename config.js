const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_28_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY2LFxuICAgICAgICA0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiak8vK1ByM2IyN3pOVEFxZnVkdW9IUDlsaDhVWGtJaFUyemJiQUM1ckxEaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibEh5VDMtUXVUN0dMbUduVy1DQzVMUVwiLFxuICBcInBob25lSWRcIjogXCJjODI1YTk2Yy00Y2ZkLTQ2ZTktOTk3My02N2ExOGU5OGIwMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAxMTAsXG4gICAgICAxNDEsXG4gICAgICAyMTcsXG4gICAgICAyMDAsXG4gICAgICA2NCxcbiAgICAgIDUzLFxuICAgICAgMjQ0LFxuICAgICAgMTY3LFxuICAgICAgMjA4LFxuICAgICAgMTczLFxuICAgICAgMTQsXG4gICAgICAxNjEsXG4gICAgICAyMDgsXG4gICAgICAyMTQsXG4gICAgICA3NyxcbiAgICAgIDE4MyxcbiAgICAgIDEzMixcbiAgICAgIDEzMyxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAyLFxuICAgICAgNTAsXG4gICAgICA0NSxcbiAgICAgIDMzLFxuICAgICAgMjA2LFxuICAgICAgNjIsXG4gICAgICA5NSxcbiAgICAgIDY0LFxuICAgICAgMjksXG4gICAgICAxODcsXG4gICAgICA2NyxcbiAgICAgIDIwMCxcbiAgICAgIDY5LFxuICAgICAgMzAsXG4gICAgICAyMzAsXG4gICAgICAyMDgsXG4gICAgICAyMjEsXG4gICAgICAxODYsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkQ1NFJYVEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY4NTEyODY2Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NjA0MjQ2ODg5MjcwNjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpM3U1TUNFTm5HMExvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZGgrZlhRVWQwdzROeXlwaEw3YXJFc3U0bGc1RXhaS1VYSlB2S0N5RTNIYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5cjNNZkUyTmV4UVdYTHdjdGs2U0pxZzFhSGYxZmo4MFlLdGEyMUlXSTY1ZUhZSktVeUNieko2WkF2ZVNnR1Z1VmRqSXdkb2NtZHRiZHZmMTIwN1dDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpOUpoTjVTditSU0NHQThKcmhsSTJpd2VKM0l4TkI2cm53bVF0MG5ZUitwOXk2YTFJbVR3QWF5Z25kbWxNakR5Q3NHanFHM0l6ZitKWU1UM05PSlppZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2ODUxMjg2Njc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTY3MzI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkxaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGTFouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4VFZXVU9scVMwNW1FTUhnb3dpdGFsdVY0RE82dUVUZUdxMXZQYUVsbTdzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3NzY5MDU1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMzEyNzM3OTY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
