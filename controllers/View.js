let config = require("../config");

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
const A = () => {
    const view = async(req, res) => {




        // console.log(req);
        let pathn = req.originalUrl;
        let pp = pathn.replace('/', "");
        if (pathn == "/") {
            pp = ""


            res.render('home', {
                title: "Ninebot.io",
                description: "Automatic Binance Trading Bot",

            })
            return;
        }
        pathn = pathn.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '');
        console.log(pathn);
        path = pathn.replace(".html", "");
        path = pathn.replace("auth/", "");
        let pa = path;
        path += ".ejs";


        res.render( path, {
            title: capitalize(pp) + " - Ninebot.io",
            description: capitalize(pp) + " - Ninebot.io",
            SERVER: config.apiserver

        })
    }

    // const news = async(req, res) => {



    //     let path = "post.ejs";
    //     let pp = "Title Post"


    //     res.render('news/' + path, {
    //         title: capitalize(pp) + " - Ninebot.io",
    //         description: capitalize(pp) + " - Ninebot.io",
    //         page: req.params['u']

    //     })
    // }




    // const reg = async(req, res) => {
    //     res.cookie('upline', req.params['u']);
    //     res.redirect('../app/app-register');
    // }






    return { view };
}

module.exports = A;