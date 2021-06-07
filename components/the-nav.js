const TheNav = {
    data(){
        return{
            navul: [
                {
                    id:1,
                    htmlid: 'nav-1',
                    ahref:'/',
                }
            ]
        }
    },
    template: `
        <nav class="navbar">
            <a href="./" class="nav-logo navbar-brand">
                <img class="got-logo" alt="Game of Thrones" src="./assets/got-logo-200x88.png"/>
            </a>
        
            <ul class="nav justify-content-end">
                <li v-for="nav in navul" class="nav-item" :id="nav.htmlid">
                    <a class="nav-link" href="./">Characters</a>
                </li>
                <li class="nav-item" id="nav-2">
                    <a class="nav-link" :href="nav.ahref">Translate</a>
                </li>
            </ul>
        </nav>  
    `,
}