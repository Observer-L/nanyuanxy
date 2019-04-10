export default function blurId(str, start = 5, end = 5) {
  const length = str.length - start - end
  let stars = ''
  for (let i = 0; i < length; i++) stars += '*'
  return str.substr(0, start) + stars + str.substr(str.length - end)
}
