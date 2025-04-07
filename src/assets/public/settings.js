const settingsBtn = document.getElementById('settings');

let isSettingsOpen = false;

settingsBtn.addEventListener('click', function(){
    if (!isSettingsOpen){
        isSettingsOpen = true;
    }
})