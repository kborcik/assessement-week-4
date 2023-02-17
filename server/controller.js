let secrets = ['These are your secrets']


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Don't just spend time. Invest it.",
            "Don't just think, act!",
            "Don't let friends impose on you, work calmly and silently.",
            "Don't let the past and useless detail choke your existence.",
            "Don't let your limitations overshadow your talents."]

            let randomIndex = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[randomIndex]

            res.status(200).send(randomFortune)
    },
    writeSecret: (req,res) => {
        secrets.push(req.params.secret)
        res.status(200).send(secrets)
    },
    deleteName: (req,res) => {
        let { index } = req.params
        secrets.splice(+index,1)
        res.status(200).send(secrets)
    }

}