
export const fetchLastCommit = async (repo, user = 'carlomazzaferro', branch = 'master') => {
  const url = user + '/' + repo + '/' + 'branches/' + branch
  console.log(url)
  const response = await fetch('https://api.github.com/repos/' + url)
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message)
  const dt = body.commit.commit.author.date
  return formatDate(dt)
}

const formatDate = datestring => {
  return datestring.replace('T', ' at ').replace('Z', '')
}
