class DevJobsAvatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
    }

    createUrl(service, username){
        return `https://unavatar.io/${service}/${username}`
    }
    
    render() {
        const service= this.getAttribute("service") ?? "github";
        const username= this.getAttribute("username") ?? "patrycast";
        const size= this.getAttribute("size") ?? "60";

        const url= this.createUrl(service, username);

        
        this.shadowRoot.innerHTML=`
        <style>
        img {
          width:${size}px;
          height: ${size}px;
          border-radius: 9999px;
        }
      </style>

        <img src="https://avatars.githubusercontent.com/u/106486921?v=4" alt="avatar de patrycast">
        `
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define("devjobs-avatar", DevJobsAvatar);