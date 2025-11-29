
        const arr = ["chaine", "chaine la longue du tableau", "chaine moyenne"];
        const chaine = arr.reduce((chainelongue, chaineActuelle) => {
            return chaineActuelle.length > chainelongue .length? chaineActuelle : chainelongue;
        });
        console.log(chaine)
    