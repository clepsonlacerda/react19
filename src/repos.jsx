import { Suspense, use } from "react";

export function Repos() {
  return (
    <div>
      <br />
      <br />

      <Suspense fallback={<h1>carregando...</h1>} >
        <ListRepos />
      </Suspense>
    </div>
  );
}

async function fetchRepos() {
  await new Promise(resolve => setTimeout(resolve, 2500))

  const res =
    await fetch("https://api.github.com/users/clepsonlacerda/repos")

  return res.json();
}

function ListRepos() {
  const repos = use(fetchRepos());

  return (
    <ul>
      {repos.map((repo) => (
        <l1 key={repo.id}>
          <h3>
            {repo.name}
          </h3>
        </l1>
      ))}
    </ul>
  )
}