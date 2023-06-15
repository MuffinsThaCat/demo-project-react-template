const ethers = require("ethers");
const bs58 = require("bs58");
const SiweMessage = require("siwe");

async function generateAuthSig(signer, chainId = 1, uri = "https://localhost/login", version = "1") {
  const siweMessage = new SiweMessage({
    domain: "localhost",
    address: await signer.getAddress(),
    statement: "This is a key for Yacht",
    uri,
    version,
    chainId,
  });
  const messageToSign = siweMessage.prepareMessage();
  const sig = await signer.signMessage(messageToSign);
  return {
    sig,
    derivedVia: "web3.eth.personal.sign",
    signedMessage: messageToSign,
    address: await signer.getAddress(),
  };
}

function getBytesFromMultihash(multihash) {
  const decoded = bs58.decode(multihash);
  return `0x${Buffer.from(decoded).toString("hex")}`;
}

module.exports = {
  generateAuthSig,
  getBytesFromMultihash,
};
