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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_05_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdKZE5MUkZ3aDR6akc4Uld4WVJHeTVaMTRnSTNhTFByZUc5d0Rsd1plNVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInEwZDI3Q0NSVDNhdTlZdDdlU01VclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTAzZTBhY2EtNjAyZC00OTg0LTkxZWMtZjBmNGM0MDFmZGVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDI1LFxuICAgICAgMjIwLFxuICAgICAgMjcsXG4gICAgICA4NyxcbiAgICAgIDExNCxcbiAgICAgIDk4LFxuICAgICAgMTUyLFxuICAgICAgMTkzLFxuICAgICAgMTE5LFxuICAgICAgMTQwLFxuICAgICAgMTAsXG4gICAgICAyMTUsXG4gICAgICAyMCxcbiAgICAgIDI4LFxuICAgICAgMTkxLFxuICAgICAgMTA4LFxuICAgICAgNzAsXG4gICAgICAxNTgsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMTkyLFxuICAgICAgMTk5LFxuICAgICAgMjIwLFxuICAgICAgMTY1LFxuICAgICAgMjA1LFxuICAgICAgMTg0LFxuICAgICAgMjIwLFxuICAgICAgMTg5LFxuICAgICAgNTQsXG4gICAgICAxNzEsXG4gICAgICAxMTMsXG4gICAgICAxODgsXG4gICAgICAxMSxcbiAgICAgIDUsXG4gICAgICAyOSxcbiAgICAgIDExOSxcbiAgICAgIDU2LFxuICAgICAgMTM0LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFpFQVZIU1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjYxMDk0OTg3MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIzNzM4MzkzNjg2MjQ2OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05UY3ZaNERFS3VLMWJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL0FveGkrMytFNjdWVzVuZlkzSE5JMUIwa3Z0UklZMCs4cGEvUlZ3Q1BpST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1anBUOWtYZXhhNjNwMjNlbWpMcVVNQXhQS3VGYW42b20rSEdZNEpaOFFZVEVQYTJSdm0wL2grbTMvS1ZKaytnWmduRXZrRGhsWUtYVGtuWmVzZnZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJZ0FtTlFheE9CMjdHb1J3TG5rbVhpQ1oySlphajA3WFRva1VFQ2hXNExISENTOGdvNHJveVZOcWRyY29xMXYrSllKTkd4dEdrVUhuRHoxWDNaL0hDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2MTA5NDk4NzM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY0MTUyMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Cabaas-X",


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
