const linksSocialMedia = {
  github: { pre: '', profile: 'kindlyare' },
  steamcommunity: { pre: 'profiles/', profile: '76561198073671494' },
  linkedin: { pre: 'in/', profile: 'otávio-sedano-da-silva-b0090a20b' }
}

function changeSocialMediaLinks() {
  for (const social in linksSocialMedia) {
    const socialLink = linksSocialMedia[social]

    if (social === 'github') {
      continue // pular - ignora
    }

    socialLinks.innerHTML += `
      <a href="https://www.${social}.com/${
      //social =
      socialLink.pre + socialLink.profile
    }" target="_blank">
        <img src="images/${social}.svg" alt="${social}" />
      </a>`
  }
}

//  i = i + 1      os dois fazem a mesma coisa -- RECOMENDO: i++
//  i++

// ser humano  123456789
// PC -------- 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github.profile}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userLink.href = data.html_url
      userNameGitHub.textContent = data.login //fiz sozinho.
    })
}

getGitHubProfileInfos()
