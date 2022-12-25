export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  const image_url = "https://github.com/erenyusufduran/nft-collection/tree/master/client/public/cryptodevs/";

  if (tokenId >= 20) {
    res.status(404).json({ error: "NOT FOUND" });
  }

  res.status(200).json({
    name: "Crypto Dev #",
    tokenId,
    description: "Crypto Dev is a collection of developers in crypto.",
    image: image_url + tokenId + ".svg",
  });
}
