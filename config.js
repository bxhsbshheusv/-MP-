const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['967771160204']
global.OwnerNumber = ['967730348571']
global.ownertag = ['967771160204']
global.BotName = "๐คุงูุงูุจุฑุงุทูุฑ ุงููุณ ๐ค"
global.packname = "ใโ๏ธใ๐รMPรลรล รลลฎล.๐ค]โ"
global.author = "โ 967771160204 โ"
global.OwnerName = "ุงููุณ"
global.BotSourceCode = "https://youtu.be/nesSv2Gbh9s"
global.SupportGroupLink = "https://api.whatsapp.com/send?phone=+967730348571"
global.sessionName = "session"

// Prefix //
// ๐don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['-'] 


global.location = "Egypt,Egypt"
global.reactmoji = "๐ค"
global.themeemoji = "โ"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://chat.whatsapp.com/FiRwXZoBuSyLlUZBtNAgx8"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'ุชู...',
    useradmin: '*ุฎููู ุงุฏูู ูุงุฑุฌุน ุฌุฑุจ*',
    botadmin: '*ุงุฑูุนูุง ุงุฏูู*',
    botowner: '*ุงูููุฒู ุฐู ูููุงูู ููุท!*',
    grouponly: '*ุงูููุฒู ุฐู ููุฌุฑูุจุงุช ููุท!*',
    privateonly: '*ุงูููุฒู ุฐู ูู ุงูุฎุงุต ููุท!*',
    botonly: '*ุงูููุฒู ุฐู ููุจูุช ููุท!*',
    waiting: '*ุงูุชุธุฑ....*',
    nolink: '*ููู ุงูุฑุงุจุท ุ*',
    error: '*ุงูุฑูุฑ!*',
    banned: '*ุงูุช ูุญุธูุฑ ูู ุงุณุชุฎุฏุงู ุงูุจูุช ุงุชูุงุตู ูุน ุงููุทูุฑ ูุงูุบุงุก ุญุธุฑู!*',
    bangc: '*ุชู ุญุธุฑ ุงูุฌุฑูุจ ุฐุง ูู ุงุณุชุฎุฏุงู ุงูุจูุช!*',
    nonsfw: 'ูุง ุชูู ููุญุฑูุง ูุฐู ุงููุฌููุนู ููุณุช ูุงุจุงุญู!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
