const style = document.createElement('style');
var toggle = false;

$('#NavIcon').click(function() {
    if(toggle == false) {
    style.innerHTML = `
    @media only screen and (max-width: 1024px) {
        body {
            overflow: hidden;
        }
    
        nav {
            height: 1000vw;
            background-color: #822D68;
            z-index: 1;
            display: flex;
            justify-content: center;
        }
    
        .nav-link {
            display: grid !important;
            grid-template-rows: 12.5vh 12.5vh 12.5vh 12.5vh;
            margin: 0 auto;
            top: auto;
            right: auto;
            margin-top: 15vh;
        }
    
        .nav-text {
            display: none;
        }
    
        .nav-link a {
            margin: auto;
        }
    
        header {
            display: none;
        }
    }
    `;
    
    document.head.appendChild(style);
    toggle = true;
    } else {
        style.innerHTML = '';
        toggle = false;
    }
});