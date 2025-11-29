
        const chrismax=()=> {
            const days = new Date();
            const Years = days.getFullYear();
            const chrismas = new Date(Years, 11, 25)
            if (days > chrismas) {
                chrismas = new Date(Years + 1, 11, 25)
            }
            const diffMs = chrismas - days;
            const diffInDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); 
            return diffInDays;
        }
        console.log(`il reste ${chrismax()} jours avant Noel`);
    