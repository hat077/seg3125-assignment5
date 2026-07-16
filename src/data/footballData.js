export const footballData = {
    translations: {
        en: {
            title: "League Elite Performance Dashboard",
            subtitle: "Analyze top player statistics across Europe's top 5 leagues.",
            globalOverview: "League Stats Leaderboard",
            teamAnalysis: "Player Metrics Analytics",
            selectLeague: "Select Domestic League",
            metricGoals: "Goals Scored",
            metricAssists: "Assists Provided",
            player: "Player",
            club: "Club",
            position: "Pos",
            rating: "Rating",
            matches: "Matches",
            goalsVsAssists: "Goals vs. Assists Distribution",
            topScorersTitle: "Top Scorer Distribution (Total Goals)"
        },
        fr: {
            title: "Tableau de Bord des Ligues Européennes",
            subtitle: "Analysez les statistiques des meilleurs joueurs des 5 grands championnats.",
            globalOverview: "Classement Général des Joueurs",
            teamAnalysis: "Analyse des Métriques Joueurs",
            selectLeague: "Sélectionner le Championnat",
            metricGoals: "Buts Marqués",
            metricAssists: "Passes Décisives",
            player: "Joueur",
            club: "Club",
            position: "Poste",
            rating: "Note",
            matches: "Matchs",
            goalsVsAssists: "Distribution Buts vs. Passes Décisives",
            topScorersTitle: "Classement des Meilleurs Buteurs (Total Buts)"
        }
    },

    leagues: {
        premierleague: {
            name_en: "English Premier League",
            name_fr: "Premier League Anglaise",
            players: [
                { name: "Erling Haaland", imgKey: "erling-haaland", club: "Manchester City", pos: "ST", goals: 27, assists: 8, matches: 35, rating: 7.68 },
                { name: "Igor Thiago", imgKey: "igor-thiago", club: "Brentford", pos: "ST", goals: 22, assists: 1, matches: 38, rating: 7.14 },
                { name: "Antoine Semenyo", imgKey: "antoine-semenyo", club: "Manchester City", pos: "RW", goals: 17, assists: 4, matches: 37, rating: 7.34 },
                { name: "Ollie Watkins", imgKey: "ollie-watkins", club: "Aston Villa", pos: "ST", goals: 16, assists: 3, matches: 37, rating: 6.97 },
                { name: "João Pedro", imgKey: "joao-pedro", club: "Chelsea", pos: "ST", goals: 15, assists: 5, matches: 35, rating: 7.18 },
                { name: "Morgan Gibbs-White", imgKey: "morgan-gibbs-white", club: "Nottingham Forest", pos: "AM", goals: 15, assists: 4, matches: 37, rating: 7.15 },
                { name: "Viktor Gyökeres", imgKey: "viktor-gyokeres", club: "Arsenal", pos: "ST", goals: 14, assists: 1, matches: 36, rating: 6.82 },
                { name: "Dominic Calvert-Lewin", imgKey: "dominic-calvert-lewin", club: "Leeds United", pos: "ST", goals: 14, assists: 1, matches: 35, rating: 6.85 },
                { name: "Danny Welbeck", imgKey: "danny-welbeck", club: "Brighton & Hove Albion", pos: "ST", goals: 13, assists: 1, matches: 37, rating: 6.79 },
                { name: "Junior Kroupi", imgKey: "junior-kroupi", club: "AFC Bournemouth", pos: "AM", goals: 13, assists: 0, matches: 33, rating: 6.93 },
                { name: "Jean-Philippe Mateta", imgKey: "jean-philippe-mateta", club: "Crystal Palace", pos: "ST", goals: 12, assists: 0, matches: 32, rating: 6.68 },
                { name: "Benjamin Sesko", imgKey: "benjamin-sesko", club: "Manchester United", pos: "ST", goals: 11, assists: 1, matches: 30, rating: 6.80 },
                { name: "Bryan Mbeumo", imgKey: "bryan-mbeumo", club: "Manchester United", pos: "AM", goals: 11, assists: 3, matches: 33, rating: 7.19 },
                { name: "Hugo Ekitiké", imgKey: "hugo-ekitike", club: "Liverpool", pos: "ST", goals: 11, assists: 4, matches: 28, rating: 7.08 },
                { name: "Richarlison", imgKey: "richarlison", club: "Tottenham Hotspur", pos: "ST", goals: 11, assists: 4, matches: 32, rating: 6.87 }
            ]
        },
        laliga: {
            name_en: "Spanish LaLiga",
            name_fr: "LaLiga Espagnole",
            players: [
                { name: "Kylian Mbappé", imgKey: "kylian-mbappe", club: "Real Madrid", pos: "ST", goals: 25, assists: 5, matches: 31, rating: 8.02 },
                { name: "Vedat Muriqi", imgKey: "vedat-muriqi", club: "Mallorca", pos: "ST", goals: 23, assists: 1, matches: 37, rating: 7.20 },
                { name: "Ante Budimir", imgKey: "ante-budimir", club: "Osasuna", pos: "ST", goals: 17, assists: 0, matches: 37, rating: 6.88 },
                { name: "Ferran Torres", imgKey: "ferran-torres", club: "Barcelona", pos: "ST", goals: 16, assists: 2, matches: 33, rating: 7.10 },
                { name: "Lamine Yamal", imgKey: "lamine-yamal", club: "Barcelona", pos: "RW", goals: 16, assists: 11, matches: 28, rating: 8.33 },
                { name: "Vinícius Júnior", imgKey: "vinicius-junior", club: "Real Madrid", pos: "LW", goals: 16, assist: 5, matches: 36, rating: 7.65 },
                { name: "Mikel Oyarzabal", imgKey: "mikel-oyarzabal", club: "Real Sociedad", pos: "ST", goals: 15, assists: 4, matches: 34, rating: 7.29 },
                { name: "Robert Lewandowski", imgKey: "robert-lewandowski", club: "Barcelona", pos: "ST", goals: 14, assists: 2, matches: 31, rating: 6.95 },
                { name: "Toni Martínez", imgKey: "toni-martinez", club: "Deportivo Alaves", pos: "ST", goals: 14, assists: 3, matches: 37, rating: 7.03 },
                { name: "Borja Iglesias", imgKey: "borja-iglesias", club: "Celta Vigo", pos: "ST", goals: 14, assists: 2, matches: 35, rating: 6.79 },
                { name: "Alexander Sørloth", imgKey: "alexander-sorloth", club: "Atletico Madrid", pos: "ST", goals: 13, assists: 0, matches: 35, rating: 6.79 },
                { name: "Georges Mikautadze", imgKey: "georges-mikautadze", club: "Villarreal", pos: "ST", goals: 13, assists: 6, matches: 32, rating: 7.12 },
                { name: "Raphinha", imgKey: "raphinha", club: "Barcelona", pos: "LW", goals: 13, assists: 3, matches: 22, rating: 7.77 },
                { name: "Carlos Espí", imgKey: "carlos-espi", club: "Levante", pos: "ST", goals: 11, assists: 0, matches: 25, rating: 7.02 },
                { name: "Juan Hernández", imgKey: "juan-hernandez", club: "Real Betis", pos: "ST", goals: 11, assists: 3, matches: 32, rating: 7.12 }
            ]
        },
        bundesliga: {
            name_en: "German Bundesliga",
            name_fr: "Bundesliga Allemande",
            players: [
                { name: "Harry Kane", imgKey: "harry-kane", club: "Bayern München", pos: "ST", goals: 36, assists: 5, matches: 31, rating: 8.14 },
                { name: "Deniz Undav", imgKey: "deniz-undav", club: "VfB Stuttgart", pos: "ST", goals: 19, assists: 6, matches: 29, rating: 7.46 },
                { name: "Serhou Guirassy", imgKey: "serhou-guirassy", club: "Borussia Dortmund", pos: "ST", goals: 17, assists: 1, matches: 33, rating: 7.23 },
                { name: "Patrik Schick", imgKey: "patrik-schick", club: "Bayer Leverkusen", pos: "ST", goals: 16, assists: 3, matches: 28, rating: 7.25 },
                { name: "Luis Díaz", imgKey: "luis-diaz", club: "Bayern München", pos: "LW", goals: 15, assists: 14, matches: 32, rating: 7.75 },
                { name: "Michael Olise", imgKey: "michael-olise", club: "Bayern München", pos: "RW", goals: 15, assists: 19, matches: 32, rating: 8.09 },
                { name: "Andrej Kramaric", imgKey: "andrej-kramaric", club: "Hoffenheim", pos: "AM", goals: 14, assists: 6, matches: 34, rating: 7.20 },
                { name: "Christoph Baumgartner", imgKey: "christoph-baumgartner", club: "RB Leipzig", pos: "CM", goals: 13, assists: 8, matches: 33, rating: 7.36 },
                { name: "Haris Tabakovic", imgKey: "haris-tabakovic", club: "Hoffenheim", pos: "ST", goals: 13, assists: 2, matches: 32, rating: 6.77 },
                { name: "Saïd El Mala", imgKey: "said-el-mala", club: "FC Köln", pos: "LW", goals: 13, assists: 4, matches: 34, rating: 6.93 },
                { name: "Jonathan Burkardt", imgKey: "jonathan-burkardt", club: "Eintracht Frankfurt", pos: "ST", goals: 13, assists: 1, matches: 22, rating: 7.03 },
                { name: "Yan Diomande", imgKey: "yan-diomande", club: "RB Leipzig", pos: "RW", goals: 12, assists: 8, matches: 33, rating: 7.61 },
                { name: "Ermedin Demirovic", imgKey: "ermedin-demirovic", club: "VfB Stuttgart", pos: "ST", goals: 12, assists: 3, matches: 25, rating: 7.11 },
                { name: "Nadiem Amiri", imgKey: "nadiem-amiri", club: "Mainz 05", pos: "CM", goals: 12, assists: 2, matches: 26, rating: 7.61 },
                { name: "Igor Matanovic", imgKey: "igor-matanovic", club: "Freiburg", pos: "ST", goals: 11, assists: 2, matches: 31, rating: 6.81 }
            ]
        },
        seriea: {
            name_en: "Italian Serie A",
            name_fr: "Serie A Italienne",
            players: [
                { name: "Lautaro Martínez", imgKey: "lautaro-martinez", club: "Inter Milan", pos: "ST", goals: 17, assists: 6, matches: 30, rating: 7.47 },
                { name: "Anastasios Douvikas", imgKey: "anastasios-douvikas", club: "Como", pos: "ST", goals: 14, assists: 1, matches: 38, rating: 6.82 },
                { name: "Donyell Malen", imgKey: "donyell-malen", club: "AS Roma", pos: "ST", goals: 14, assists: 2, matches: 18, rating: 7.30 },
                { name: "Marcus Thuram", imgKey: "marcus-thuram", club: "Inter Milan", pos: "ST", goals: 13, assists: 6, matches: 29, rating: 7.28 },
                { name: "Nico Paz", imgKey: "nico-paz", club: "Como", pos: "AM", goals: 12, assists: 6, matches: 35, rating: 7.67 },
                { name: "Rasmus Højlund", imgKey: "rasmus-hojlund", club: "Napoli", pos: "ST", goals: 12, assists: 5, matches: 33, rating: 6.83 },
                { name: "Giovanni Simeone", imgKey: "giovanni-simeone", club: "Torino", pos: "ST", goals: 11, assists: 0, matches: 32, rating: 6.81 },
                { name: "Nikola Krstovic", imgKey: "nikola-krstovic", club: "Atalanta", pos: "ST", goals: 10, assists: 5, matches: 33, rating: 7.02 },
                { name: "Scott McTominay", imgKey: "scott-mctominay", club: "Napoli", pos: "DM", goals: 10, assists: 3, matches: 33, rating: 7.30 },
                { name: "Kenan Yildiz", imgKey: "kenan-yildiz", club: "Juventus", pos: "AM", goals: 10, assists: 6, matches: 36, rating: 7.50 },
                { name: "Gianluca Scamacca", imgKey: "gianluca-scamacca", club: "Atalanta", pos: "ST", goals: 10, assists: 1, matches: 24, rating: 6.93 },
                { name: "Federico Bonazzoli", imgKey: "federico-bonazzoli", club: "Cremonese", pos: "ST", goals: 10, assists: 1, matches: 35, rating: 6.84 },
                { name: "Keinan Davis", imgKey: "keinan-davis", club: "Udinese", pos: "ST", goals: 10, assists: 4, matches: 30, rating: 6.96 },
                { name: "Riccardo Orsolini", imgKey: "riccardo-orsolini", club: "Bologna", pos: "RW", goals: 10, assists: 1, matches: 35, rating: 7.02 },
                { name: "Andrea Pinamonti", imgKey: "andrea-pinamonti", club: "Sassuolo", pos: "ST", goals: 9, assists: 3, matches: 36, rating: 6.55 }
            ]
        },
        ligue1: {
            name_en: "French Ligue 1",
            name_fr: "Ligue 1 Française",
            players: [
                { name: "Estéban Lepaul", imgKey: "esteban-lepaul", club: "Rennes", pos: "ST", goals: 21, assists: 5, matches: 34, rating: 7.25 },
                { name: "Joaquín Panichelli", imgKey: "joaquin-panichelli", club: "Strasbourg", pos: "ST", goals: 16, assists: 1, matches: 27, rating: 7.25 },
                { name: "Mason Greenwood", imgKey: "mason-greenwood", club: "Marseille", pos: "RW", goals: 16, assists: 7, matches: 32, rating: 7.61 },
                { name: "Folarin Balogun", imgKey: "folari-balogun", club: "Monaco", pos: "ST", goals: 13, assists: 4, matches: 30, rating: 7.03 },
                { name: "Odsonne Édouard", imgKey: "odsonne-edouard", club: "Lens", pos: "ST", goals: 12, assists: 3, matches: 29, rating: 6.93 },
                { name: "Wesley Saïd", imgKey: "wesley-said", club: "Lens", pos: "AM", goals: 12, assists: 2, matches: 29, rating: 7.24 },
                { name: "Lassine Sinayoko", imgKey: "lassine-sinayoko", club: "Auxerre", pos: "ST", goals: 12, assists: 4, matches: 32, rating: 7.17 },
                { name: "Bradley Barcola", imgKey: "bradley-barcola", club: "Paris Saint-Germain", pos: "LW", goals: 11, assists: 1, matches: 29, rating: 7.36 },
                { name: "Pavel Sulc", imgKey: "pavel-sulc", club: "Lyon", pos: "AM", goals: 11, assists: 3, matches: 27, rating: 7.05 },
                { name: "Corentin Tolisso", imgKey: "corentin-tolisso", club: "Lyon", pos: "AM", goals: 11, assists: 4, matches: 30, rating: 7.29 },
                { name: "Florian Thauvin", imgKey: "florian-thauvin", club: "Lens", pos: "AM", goals: 11, assists: 6, matches: 33, rating: 7.42 },
                { name: "Ansu Fati", imgKey: "ansu-fati", club: "Monaco", pos: "AM", goals: 11, assists: 0, matches: 25, rating: 6.96 },
                { name: "Martial Godo", imgKey: "martial-godo", club: "Strasbourg", pos: "LW", goals: 10, assists: 1, matches: 28, rating: 7.19 },
                { name: "Pierre-Emerick Aubameyang", imgKey: "pierre-emerick-aubameyang", club: "Marseille", pos: "ST", goals: 10, assists: 5, matches: 30, rating: 6.99 },
                { name: "Bamba Dieng", imgKey: "bamba-dieng", club: "Lorient", pos: "ST", goals: 10, assists: 1, matches: 22, rating: 6.84 }
            ]
        }
    }
};