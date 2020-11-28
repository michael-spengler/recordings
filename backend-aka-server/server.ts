import { opine, serveStatic } from "https://deno.land/x/opine@0.25.0/mod.ts";

let counter = 0

const app = opine();

app.use(serveStatic(`${Deno.cwd()}/frontend-aka-client`))

const pathToHTMLFile = `${Deno.cwd()}/frontend-aka-client/our-first-web-page.html`

app.get('/', function(request, response) {

    counter = counter + 1

    console.log(`The web page has been called ${counter} times.`)
    
    response.sendFile(pathToHTMLFile)
})


app.listen(3000);