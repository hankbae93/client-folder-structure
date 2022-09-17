import React from "react";
import useWalletCard from "./useWalletCard";

const WalletCard = () => {
	const { money } = useWalletCard();
	return <div>{money}</div>;
};

export default WalletCard;
