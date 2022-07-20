const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers.map((follower) => {
    const { avatar_url, login, html_url } = follower;
    return `<article class="card">
<img src="${avatar_url}" alt="${login}"/>
<h4>${login}</h4>
<a href="${html_url}" target="_blank" class="btn">view profile</a>
</article>`;
  });

  container.innerHTML = newFollowers.join("");
};

export default display;
