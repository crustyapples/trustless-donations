import { useContract, useContractRead } from "@thirdweb-dev/react";

interface TokenBalanceProps {
    account: string | undefined;
    contractAddress: string;
    symbol: string;
}

const TokenBalance: React.FC<TokenBalanceProps> = ({ account, contractAddress,symbol }) => {

  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "balanceOf", [account])

  return (
    <div className="flex items-center rounded-lg bg-[#FF6584] text-white p-2 m-1 hover:bg-[#a14255] cursor-pointer">
        {isLoading ? null : <p><strong>{symbol} Balance:</strong> {data.toString()}</p>}
    </div>
  )
}

export default TokenBalance;