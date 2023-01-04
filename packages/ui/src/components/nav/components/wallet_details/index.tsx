import { useConnectWalletList } from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import classnames from 'classnames';
import React from 'react';
import Avatar from '@/components/avatar';
import WalletDropDown from '@/components/nav/components/wallet_drop_down';
import { readUserAddress, readIsUserLoggedIn } from '@/recoil/wallet';
import { useRecoilValue } from 'recoil';

const WalletDetails: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const { showWallet, handleShowWallet } = useConnectWalletList();
  const loggedIn = useRecoilValue(readIsUserLoggedIn);
  const userAddress = useRecoilValue(readUserAddress);

  return (
    <div>
      <div
        onClick={handleShowWallet}
        role="button"
        className={classnames(props.className)}
        tabIndex={0}
        aria-label="wallet-details-button"
      >
        {loggedIn ? <Avatar address={userAddress ?? ''} className={classes.avatar} /> : null}
      </div>
      <WalletDropDown
        className={classnames(classes.networkList, {
          open: showWallet,
        })}
      />
    </div>
  );
};

export default WalletDetails;