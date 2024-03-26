fetch('https://thronesapi.com/api/v2/Characters')
  .then((res) => res.json())
  .catch((error) => console.log(error))
  .then((res) => console.log(res))
  .catch((error) => console.log(error))

const funcionAsync = async () => {
  const response = await fetch('https://thronesapi.com/api/v2/Characters')
  const res = await response.json()
  console.log(res)
}
funcionAsync()
