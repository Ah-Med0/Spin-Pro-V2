module.exports = {
    // ─── Log ───
    channels: {
        inviteLogChannelId: 'YOUR_INVITE_LOG_CHANNEL_ID', // قناة تسجيل الدعوات (ليست قناة الدعوات، بل قناة تسجل فيها الدعوات)
        adminLogChannelId: 'YOUR_ADMIN_LOG_CHANNEL_ID',  // قناة سجل الإداريين (تسجيل عمليات الإضافة/الإزالة)
        prizeLogChannelId: 'YOUR_PRIZE_LOG_CHANNEL_ID', // قناة تسجيل الجوائز (تسجيل الفائزين بعجلة الحظ)
    },

    // ─── إعدادات البوت الأساسية ───
    settings: {
        prefix: '-', // البادئة التي يبدأ بها الأمر (مثال: -نقاط)
        defaultInviteExpiry: 604800, // مدة صلاحية الدعوة بالثواني (604800 = 7 أيام)
        defaultInviteMaxUses: 0, // عدد الاستخدامات القصوى للدعوة (0 = غير محدود)
    },


    rest: {
        timeout: 30000,
    },

    // ─── جوائز عجلة الحظ (النسبة المئوية: 80 = 80%) ───
    prizes: {
        normal: [
            // 🎪 العجلة العادية (تكلفة: 1 نقطة)
            { prize: '200k 💰', chance: 80 },
            { prize: '400k 💰', chance: 70 },
            { prize: '900k 💰', chance: 7 },
            { prize: '10 Coins', chance: 9 },
            { prize: '20 Coins', chance: 8 },
            { prize: '50 Coins', chance: 5 },
            { prize: '60 Coins', chance: 2 },
            { prize: '100 Coins', chance: 1 },
            { prize: '1M 💸', chance: 7 },
            { prize: '2M 💸', chance: 5 },
            { prize: '3M 💸', chance: 3 },
            { prize: '15M 💎', chance: 0.2 },
            { prize: '20M 💎', chance: 0.01 },
        ],
        super: [
            // 🔥 العجلة السوبر (تكلفة: 2 نقطة)
            { prize: '400k 💰', chance: 70 },
            { prize: '500k 💰', chance: 80 },
            { prize: '50 Coins', chance: 0.9 },
            { prize: '70 Coins', chance: 0.8 },
            { prize: '100 Coins', chance: 0.5 },
            { prize: '155 Coins', chance: 0.2 },
            { prize: '200 Coins', chance: 0.1 },
            { prize: '1M 💸', chance: 10 },
            { prize: '2M 💸', chance: 3 },
            { prize: '3M 💸', chance: 4 },
            { prize: '5M 💎', chance: 5 },
            { prize: '10M 💎', chance: 0.02 },
            { prize: '25M 👑', chance: 0.001 },
        ],
    },

    // ─── حالة البوت (Presence) ───
    status: {
        enabled: true,
        interval: 300000, 
        type: 'streaming', // نوع الحالة: streaming, playing, listening, watching, competing
        url: 'https://www.twitch.tv/2.7m', // رابط البث (فقط عندما type = streaming)
        messages: [
            // رسائل تتغير تلقائياً تحت اسم البوت
            'البادئة الخاصة بي -',
            'دعم فني 24/7',
            'ضمان تجربة مميزة',
            'ميزات حصرية للمكتبة',
            'حلول عربية مخصصة',
            'خدمة سريعة وموثوقة',
            '-مساعدة'
        ]
    },

    // ─── قائمة السيرفرات المسموح بها (ضع آيدي السيرفر) ───
    allowedGuilds: ['YOUR_GUILD_ID', 'YOUR_GUILD_ID_2'], // البوت يعمل فقط في هذه السيرفرات، الباقي يغادرها تلقائياً
    intervals: {
        cleanExpiredInvites: 3600000, 
        loginRetryDelay: 5000, 
        guildCheck: 1800000, 
    },

    colors: {
        success: '#2ECC71', 
        info: '#3498DB',    
        warning: '#F1C40F',
        error: '#E74C3C',   
        primary: '#9B59B6', 
        gold: '#FFD700',  
        super: '#FF5733',  
    },

    // ─── نظام استبدال النقاط ───
    exchange: {
        enabled: true, 
        cooldown: 5000,
        logChannel: 'YOUR_EXCHANGE_LOG_CHANNEL_ID', // قناة تسجيل عمليات الاستبدال
        prizes: [
            // قائمة الجوائز المتاحة للاستبدال
            { points: 10, prize: 'رتبة VIP لمدة أسبوع', emoji: '👑', description: 'احصل على رتبة VIP كاملة لمدة 7 أيام' },
            { points: 20, prize: 'رتبة VIP لمدة شهر', emoji: '💎', description: 'استمتع برتبة VIP لمدة 30 يوماً' },
            { points: 50, prize: 'رتبة مميز دائمة', emoji: '🌟', description: 'رتبة حصرية لا تنتهي أبداً' },
        ]
    },
    ticketChannelId: 'YOUR_TICKET_CHANNEL_ID' // قناة التكت
};
