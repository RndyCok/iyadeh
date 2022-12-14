let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${dmenub} πππππ ππππ’πͺ ππ‘π πππ’π’π¦π`,
	rows: [
	    {title: "β¦β¨β¦ β¦ Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "β¦π«β¦ β¦ Delete", rowId: `${usedPrefix + command} delete`},
	    {title: "β¦πβ¦ β¦ Public", rowId: `${usedPrefix + command} public`},
	{title: "οΈβ¦π£οΈβ¦ β¦ Simi", rowId: `${usedPrefix + command} simi`},
	{title: "β¦πβ¦ β¦ Nsfw", rowId: `${usedPrefix + command} nsfw`},
	{title: "β¦πβ¦ β¦ PremNsfwChat", rowId: `${usedPrefix + command} premnsfwchat`},
	{title: "β¦πβ¦ β¦ Antilink", rowId: `${usedPrefix + command} antilink`},
	{title: "οΈβ¦πΌοΈβ¦ β¦ Antisticker", rowId: `${usedPrefix + command} antisticker`},
	{title: "β¦ββ¦ β¦ Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "β¦πβ¦ β¦ Antitoxic", rowId: `${usedPrefix + command} antibadword`},
	{title: "β¦β¬οΈβ¦ β¦ Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "β¦πΆβ¦ β¦ Autodelvn", rowId: `${usedPrefix + command} autodelvn`},
	{title: "β¦π¨β¦ β¦ Autosticker", rowId: `${usedPrefix + command} autosticker`},
	{title: "β¦πβ¦ β¦ Detect", rowId: `${usedPrefix + command} detect`},
	{title: "β¦πβ¦ β¦ Anti spam", rowId: `${usedPrefix + command} antispam`},
	{title: "β¦πβ¦ β¦ Document", rowId: `${usedPrefix + command} document`},
	{title: "β¦π€β¦ β¦ WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "β¦ββ¦ β¦ Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "β¦π΄β¦ β¦ Nyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "β¦πβ¦ β¦ Anti Call", rowId: `${usedPrefix + command} anticall`},
	{title: "β¦βοΈβ¦ β¦ Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "β¦π¬β¦ β¦ PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "β¦π’β¦ β¦ GcOnly", rowId: `${usedPrefix + command} gconly`},
	{title: "β¦π·β¦ β¦ SwOnly", rowId: `${usedPrefix + command} swonly`},
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "πππππ πππ₯πβ",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
     case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.descUpdate = isEnable
      break
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBadword = isEnable
      break
    case 'antispam':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.antispam = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'clear':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.clear = isEnable
      break
	case 'anticall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.anticall = isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isEnable
    //   break
    // case 'autolevelup':
    //   isUser = true
    //   user.autolevelup = isEnable
    //   break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
Β Β Β  Β caseΒ 'autolevelup': 
 Β Β Β Β caseΒ 'levelup': 
 Β Β Β Β Β Β isUserΒ =Β true 
 Β Β Β Β Β Β user.autolevelupΒ =Β isEnable 
 Β Β Β Β Β Β break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      Β Β Β Β Β Β ifΒ (!/[01]/.test(command))Β returnΒ conn.sendButton(m.chat,Β `*βββββγΒ SETTINGSΒ γβββββ*`,Β ` 
 πΒ α΄α΄©α΄Ιͺα΄Ι΄Β ΚΙͺsα΄: 
 β?Β antidelete 
 β?Β antilink 
 β? anticall
 β? antisticker 
 β?Β antibadwordΒ (dis-continued) 
 β?Β autolevelup 
 β?Β autoread 
 β? autosticker
 β?Β detect 
 β?Β document 
 β? detect
 β? simi
 β? nsfw
 β?Β getmsg 
 β? premnsfwchat
 β?Β gconly
 β?Β nyimak 
 β?Β pconly 
 β?Β public 
 β?Β restrict 
 β?Β swonly 
 β?Β welcome 
 β?Β whitelistmycontactsΒ (dis-continued) 
 clear
  
 =========================== 
 βΒ α΄sα΄Ι’α΄: 
 βΒ ON 
 ${usedPrefix}onΒ [option] 
 βΒ OFF 
 ${usedPrefix}offΒ [option] 
  
 βΒ α΄xα΄α΄α΄©Κα΄: 
 βΒ ON 
 ${usedPrefix}onΒ welcome 
 βΒ OFF 
 ${usedPrefix}offΒ welcome 
 `.trim(),Β `./media/settings.jpg`,Β [ 
 [`α΄α΄Β π`,Β `Ok`] 
 ],Β m,Β {asLocation:true}) 
 Β Β Β Β Β Β throwΒ false 
 Β Β } 
 Β Β m.reply(` 
 π? *${type}*Β successful\n\nποΈ *${isEnableΒ ?Β 'turnΒ ON'Β :Β 'turnΒ OFF'}*Β ${isAllΒ ?Β 'forΒ thisΒ bot'Β :Β isUserΒ ?Β ''Β :Β 'forΒ thisΒ chat.'} 
 `.trim()) 
 } 
 handler.helpΒ =Β ['settings'] 
 handler.tagsΒ =Β ['Bot'] 
 handler.commandΒ =Β /^((en|dis)able|setting|settings|(tru|fals)e|(turn)?o(n|ff)|[01])$/i 
  
 exportΒ defaultΒ handler