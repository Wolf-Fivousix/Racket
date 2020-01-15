export function removeSelected() {
    // Remove "selected" style from other components.
    let servers = document.getElementsByClassName("serverIndexItemButton");
    
    for (let i = 0; i < servers.length; ++i) {
        // "/ selected\w{6}/" will match seletecServer and selectedSystem
        if(servers[i].className.search(/ selected\w{6}/) >= 0) {
            servers[i].className = servers[i].className.replace(/ selected\w{6}/, "");
        }
    }
}