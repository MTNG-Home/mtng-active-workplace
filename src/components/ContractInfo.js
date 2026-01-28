import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

import useContractLoader from '../hooks/ContractLoader';

const useNFTDetails = (contract) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    try {
      const totalSupplyPromise = contract.totalSupply();
      const namePromise = contract.name();
      const symbolPromise = contract.symbol();

      Promise.all([totalSupplyPromise, namePromise, symbolPromise])
        .then((results) => {
          const [totalSupply, name, symbol] = results;

          setData({
            totalSupply,
            name,
            symbol,
          });
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, [contract]);

  return {
    loading,
    error,
    data,
  };
};

export default function ContractInfo() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contracts = useContractLoader(provider);
  const contract = contracts ? contracts['NFTMinter'] : null;

  const { error, loading, data } = useNFTDetails(contract);

  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div>
        <p>Failed to retrieve information, please try again.</p>
      </div>
    );
  }

  return (
    <div>
      <p>total number of NFTs: {data.totalSupply}</p>
      <p>contract name: {data.name}</p>
      <p>contract symbol: {data.symbol}</p>
      <p>contract address: {contract.address}</p>
    </div>
  );
}
