
     export   const displaystime=()=> {
            const time = new Date();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let secondes = time.getSeconds(); // ✅ correction ici

            // Ajout d’un zéro devant si < 10
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            secondes = secondes < 10 ? "0" + secondes : secondes;

            const clock = hours + ":" + minutes + ":" + secondes;
            console.log(clock);
        }
       setInterval(displaystime,1000);
   