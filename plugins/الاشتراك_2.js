import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const harley = 'https://telegra.ph/file/f97d2943120c84579f236.png';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'HARLEY' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> 𝐁𝐎𝐀𝐘𝐊𝐀﹝❄️﹞𝐁𝐎𝐓
> 〔 الاشتراك الاسبوعي┊ ˼‏ 🚀˹ ↶〕
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
            *بــويــكــا بــ🤖ــوت*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
╗───¤﹝السعر ↶ 💵﹞
> •┊˹👾˼┊- رقم وهمي اسبوعيا
> •┊˹👾˼┊- روبل بوت ارقام
> •┊˹👾˼┊- 500 نقطة دعمكم
╝───────────────¤
╗───¤﹝المميزات ↶ 🚀﹞
> •┊˹👾˼┊- اشتراك سرفر عام
> •┊˹👾˼┊- شغال 7/24
> •┊˹👾˼┊- البوت تحت التطوير
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹👾˼┊- Payeer
> •┊˹👾˼┊- VodafoneCash
╝───────────────¤
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌠𝐁𝐎𝐀𝐘𝐊𝐀﹝❄️﹞𝐁𝐎𝐓⌡
*⋅ ───━ •﹝👑﹞• ━─── ⋅*`,
                        subtitle: "HARLEY"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: harley } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+972546887176","merchant_url":"https://api.whatsapp.com/send?phone=+972546887176"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029VaXddtu0lwgiREisx82C","merchant_url":"https://whatsapp.com/channel/0029VaXddtu0lwgiREisx82C"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اسبوعي', 'ش2', 'اشتراك_اسبوعي', 'بمقابل'];

export default handler;
