const ACHIEVEMENT_LIST = {
        'first_blood': { name: 'First Blood', description: 'Get your first XP!', threshold: { type: 'total_xp', count: 1 }, icon: '🩸' },
        
        'beginner_conjugator': { name: 'Beginner Conjugator', description: 'Complete your first lesson.', threshold: { type: 'lesson_complete', count: 1 }, icon: '⭐' },
        'dedicated_learner': { name: 'Dedicated Learner', description: 'Complete 5 different lessons.', threshold: { type: 'lesson_complete', count: 5 }, icon: '📚' },
        'kfc_expert': { name: 'KFC Expert', description: 'Complete 10 different lessons.', threshold: { type: 'lesson_complete', count: 10 }, icon: '🎓' },
        'spanish_power': { name: 'Spanish Power', description: 'Complete 15 different lessons.', threshold: { type: 'lesson_complete', count: 15 }, icon: '⚡' },
        'latin_roots': { name: 'Latin Roots', description: 'Complete 25 different lessons.', threshold: { type: 'lesson_complete', count: 25 }, icon: '🌲' },
        'king_spanish': { name: 'King Spanish', description: 'Complete 50 different lessons.', threshold: { type: 'lesson_complete', count: 50 }, icon: '👑' },
        
        'perfect_starter': { name: 'Perfect Starter', description: 'Get 5 perfect scores in a row.', threshold: { type: 'perfect_streak', count: 5 }, icon: '🎯' },
        'streak_master': { name: 'Streak Master', description: 'Get 15 perfect scores in a row.', threshold: { type: 'perfect_streak', count: 15 }, icon: '🔥' },
        'streak_legend': { name: 'Streak Legend', description: 'Get 30 perfect scores in a row.', threshold: { type: 'perfect_streak', count: 30 }, icon: '☄️' },
        'streak_king': { name: 'Streak King', description: 'Get 50 perfect scores in a row.', threshold: { type: 'perfect_streak', count: 50 }, icon: '♾️' },
        
        'xp_grinder': { name: 'XP Grinder', description: 'Reach 100 total XP.', threshold: { type: 'total_xp', count: 100 }, icon: '💯' },
        'xp_enthusiast': { name: 'XP Enthusiast', description: 'Reach 500 total XP.', threshold: { type: 'total_xp', count: 500 }, icon: '💎' },
        'xp_maniac': { name: 'XP Maniac', description: 'Reach 1000 total XP.', threshold: { type: 'total_xp', count: 1000 }, icon: '🌌' },
        'xp_legend': { name: 'XP Legend', description: 'Reach 2500 total XP.', threshold: { type: 'total_xp', count: 2500 }, icon: '🚀' },
		
		'gemstone_grinder': { name: 'Gemstone Grinder', description: 'Reach 100 total Gemstones.', threshold: { type: 'total_gemstones', count: 100 }, icon: '💯' },
        'gemstone_enthusiast': { name: 'Gemstone Enthusiast', description: 'Reach 500 total Gemstones.', threshold: { type: 'total_gemstones', count: 500 }, icon: '💎' },
        'gemstone_maniac': { name: 'Gemstone Maniac', description: 'Reach 1000 total Gemstones.', threshold: { type: 'total_gemstones', count: 1000 }, icon: '🌌' },
        'gemstone_legend': { name: 'Gemstone Legend', description: 'Reach 2500 total Gemstones.', threshold: { type: 'total_gemstones', count: 2500 }, icon: '🚀' },
        
        'boss_slayer': { name: 'Boss Slayer', description: 'Complete a lesson worth 75 XP or more.', threshold: { type: 'boss_lesson', count: 75 }, icon: '🐲' },
        'gauntlet_survivor': { name: 'Gauntlet Survivor', description: 'Complete The Ketchup Gauntlet.', threshold: { type: 'complete_gauntlet', count: 1 }, icon: '🏆' },

		'zombie_annihilator': { name: 'Zombie Annihilator', description: 'Destroy 15 zombies!', threshold: { type: 'zombie_kills', count: 15 }, icon: '🧟' },
		'zombie_slayer': { name: 'Zombie Slayer', description: 'Destroy 50 zombies!', threshold: { type: 'zombie_kills', count: 50 }, icon: '🧟‍♀️' },
		'zombie_universe': { name: 'Zombie Universe', description: 'Destroy 250 zombies!', threshold: { type: 'zombie_kills', count: 250 }, icon: '🧟‍♂️' },
		'hostile_zombies': { name: 'Hostile Zombies', description: 'Destroy 15 hard mode zombies!', threshold: { type: 'hard_zombie_kills', count: 15 }, icon: '💀' },
		'demolisher_zombies': { name: 'Demolisher Zombies', description: 'Destroy 50 hard mode zombies!', threshold: { type: 'hard_zombie_kills', count: 50 }, icon: '☠️' },
		'unstoppable_zombies': { name: 'Unstoppable Zombies', description: 'Destroy 250 hard mode zombies!', threshold: { type: 'hard_zombie_kills', count: 250 }, icon: '☣️' },

        'daily_seven': { name: 'Daily Seven', description: 'Achieve a 7-day daily streak.', threshold: { type: 'daily_streak', count: 7 }, icon: '📅' },
        'daily_thirty': { name: 'Daily Thirty', description: 'Achieve a 30-day daily streak.', threshold: { type: 'daily_streak', count: 30 }, icon: '🥳' },
        'daily_ninety': { name: 'Daily Ninety', description: 'Achieve a 90-day daily streak.', threshold: { type: 'daily_streak', count: 90 }, icon: '💪' },
        'year_master': { name: 'Year Master', description: 'Achieve a 1-year daily streak.', threshold: { type: 'daily_streak', count: 365 }, icon: '✔️' },
        'leap_frog': { name: 'Leap Frog', description: 'Achieve a 4-year daily streak.', threshold: { type: 'daily_streak', count: 1461 }, icon: '🥇' },
        'senior_citizen_spanish_life_consumption': { name: 'Senior Citizen Spanish Life Consumption', description: 'Achieve a 65-year daily streak.', threshold: { type: 'daily_streak', count: 23741 }, icon: '🏆' },
};