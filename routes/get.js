module.exports = async (req, res) => {
  const message = 'You have successfully authenticated with the cloud endpoint'
  return res.status(200).send({ message })
}
