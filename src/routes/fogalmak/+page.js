export async function load() {
    const rpDefinitions = [
		{
			label: 'RP',
			value: 'Szerepjáték',
			meta: {
				example: '',
				english: 'Role Play'
			}
		},
		{
			label: 'RP-s',
			value: 'A szabályokat betartó játékosra használt jelző, akivel élmény játszani.',
			meta: {
				example: '',
				english: 'Role-playing player'
			}
		},
		{
			label: 'NONRP',
			value: 'Szabálytalanul játszott szerepjáték',
			meta: {
				example: '',
				english: 'Non-role-playing'
			}
		},
		{
			label: 'IRL',
			value: 'A való életben',
			meta: {
				example: '',
				english: 'In Real Life'
			}
		},
		{
			label: 'IG',
			value: 'Játékban',
			meta: {
				example: '',
				english: 'In Game'
			}
		},
		{
			label: 'IC',
			value: 'Karakteren belül',
			meta: {
				example: '',
				english: 'In Character'
			}
		},
		{
			label: 'OOC',
			value: 'Karakteren kívül',
			meta: {
				example: '',
				english: 'Out Of Character'
			}
		},
		{
			label: 'MG',
			value: 'OOC adatok felhasználása IC',
			meta: {
				example:
					'Egy játékos OOC mond neked egy információt → (( Éppen megyünk kirabolni a bankot. )), te pedig rendőr vagy és szólsz a társaidnak IC, hogy "Egy banda éppen bankot rabolni készül", aztán már ott várjátok a bandát a banknál, hogy le tudjátok őket kapcsolni.',
				english: 'Meta Gaming'
			}
		},
		{
			label: 'PG',
			value: 'Hősködés',
			meta: {
				example:
					'Valaki rád tartja a fegyverét, nálad azonban nincs semmi, de te megpróbálsz elmenekülni. Valószínűleg nem viselkednél így a való életben.',
				english: 'Power Gaming'
			}
		},
		{
			label: 'RK',
			value: 'Megölnek és te visszamész bosszút állni miután meghaltál',
			meta: {
				example:
					'Egy bandaháború zajlik éppen, te rendőr vagy és megölnek. Kivárod a kórházban a felépülési időt, majd visszamész a bandaháborúhoz. VAGY Megölt valaki, de te ezt nem bírod megemészteni, ezért megkeresed és te is megölöd bosszúból.',
				english: 'Revenge Kill'
			}
		},
		{
			label: 'DM',
			value: 'Indíték nélkül gyilkolni',
			meta: {
				example:
					'Valaki fegyverre tesz szert és elkezd ok nélkül mészárolni a benzinkúton minden arra járót.',
				english: 'Death Match'
			}
		},
		{
			label: 'DB',
			value: 'Járművel való gyilkolás',
			meta: {
				example: 'Valaki az út szélén áll, te pedig áthajtasz rajta az autóddal és ezzel megölöd.',
				english: 'Drive By'
			}
		},
		{
			label: 'TK',
			value: 'Csapattárs meggyilkolása',
			meta: {
				example: 'Rendőri akció esetén a társad véletlen beleáll a lövésedbe és meghal.',
				english: 'Team Kill'
			}
		},
		{
			label: 'SK',
			value: 'A játékba épp csak belépett vagy házba belépő, házból kilépő játékos megölése',
			meta: {
				example: '',
				english: 'Spawn Kill'
			}
		},
		{
			label: 'ForceRP',
			value: 'Saját rp rá erőltetése a másik félre',
			meta: {
				example: '',
				english: 'Force Role Play'
			}
		}
	];
    return {rpDefinitions};
};