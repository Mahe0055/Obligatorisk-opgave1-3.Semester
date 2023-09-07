
function getData() {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer sl.BllToSGCFvPMwzgek-AimUVSUCEoYM8q4KdO0m6kFdMJAGJQoWGLm45rKalfEglzlh_RQybYNBkG3N3o6TGY0gIUKVSuIWvSFX8DUzo4oEVmt9YyfnyuwpUVuVg-e7A5X9TMCkkpnlSUhTTu5gi7");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "path": "",
        "recursive": false,
        "include_media_info": false,
        "include_deleted": false,
        "include_has_explicit_shared_members": false,
        "include_mounted_folders": true,
        "include_non_downloadable_files": true
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.dropboxapi.com/2/files/list_folder", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderListofFolders(data.entries)
        })

}


function renderListofFolders(entries) {
    for(let i = 0; i < entries.length; i++) {
        const html = `
    <ul> 
        <li>${entries[i].path_display}</li>
    </ul>
       `
        document.querySelector("body").insertAdjacentHTML("beforeend", html);
    }
}
document.querySelector("button").addEventListener('click', getData);

