import { ethers } from 'ethers';
import Web3 from 'web3';

function calcPermitDuration() {
  // returns current timestamp in seconds + 2 hours
  return BigInt(Math.floor(Date.now() / 1000) + 3600 * 2);
}

export const getPermitSignature = async (
  web3: Web3,
  ethersProvider: ethers.BrowserProvider,
  tokenContract: any,
  walletAddress: string,
  amt: bigint,
  spender: string,
) => {
  const tokenName = await tokenContract.methods.name().call();
  let permitVersion = '1'; // todo - get from contract
  const tokenAddress = tokenContract._address;
  const permitNonce = await tokenContract.methods.nonces(walletAddress).call();

  const domain = {
    name: tokenName,
    version: permitVersion,
    chainId: await web3.eth.getChainId(),
    verifyingContract: tokenAddress,
  };
  const values = {
    owner: walletAddress,
    spender: spender,
    value: amt,
    nonce: permitNonce,
    deadline: calcPermitDuration(),
  };

  const signer = await ethersProvider.getSigner();

  const signature = await signer.signTypedData(
    domain,
    {
      Permit: [
        {
          name: 'owner',
          type: 'address',
        },
        {
          name: 'spender',
          type: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
        },
        {
          name: 'nonce',
          type: 'uint256',
        },
        {
          name: 'deadline',
          type: 'uint256',
        },
      ],
    },
    values,
  );

  return { signature, deadline: values.deadline };
};
