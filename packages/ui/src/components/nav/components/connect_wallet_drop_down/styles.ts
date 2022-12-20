import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    background: theme.palette.custom.wallet.background,
    width: '310px',
    height: '310px',
    top: theme.spacing(8.7),
    right: '120px',
    opacity: '20%',
    borderRadius: theme.spacing(1),
  },
  walletDetails: {
    height: '124px',
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.custom.wallet.surfaceTwo,
    marginTop: theme.spacing(1),
  },
  walletInfo: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  changeWalletButton: {
    height: '46px',
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.custom.wallet.surfaceThree,
    marginTop: theme.spacing(2.6),
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.custom.wallet.surfaceFour,
    },
  },
  changeWalletButtonLabel: {
    padding: theme.spacing(1.5, 3),
    fontSize: theme.spacing(2),
    fontWeight: 590,
    lineHeight: '20px',
  },
  walletAvatar: {
    padding: theme.spacing(2, 0, 0, 3),
    display: 'inline-block',
  },
  walletLabel: {
    padding: theme.spacing(2.5, 0, 0, 1),
    fontSize: '14px',
    fontWeight: 590,
    lineHeight: '17px',
    color: theme.palette.custom.wallet.textPrimary,
  },
  walletAddress: {
    color: theme.palette.custom.fonts.fontThree,
  },
  divider: {
    margin: theme.spacing(1, 4.1, 1, 2),
    color: theme.palette.custom.wallet.divider,
  },
  bottomDivider: {
    margin: theme.spacing(2.5, 0, 1.8, 0),
    color: theme.palette.custom.wallet.divider,
  },
  copyIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
    fill: 'none',
    width: theme.spacing(2),
    padding: theme.spacing(0.7, 0.5),
    display: 'inline-flex',
    overflow: 'visible',
  },
  avatar: {
    height: '45px',
    width: '45px',
  },
  accountDetailsButton: {
    width: '232px',
    height: '28px',
    border: '1px solid',
    borderColor: theme.palette.custom.wallet.textPrimary,
    borderRadius: '1000px',
    marginLeft: theme.spacing(3),
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.custom.wallet.surfaceFour,
    },
  },
  accountDetailsLabel: {
    color: theme.palette.custom.wallet.textPrimary,
    textAlign: 'center',
  },
  accountDetails: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 400,
  },
  dot: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: theme.palette.custom.wallet.textPrimary,
    borderRadius: 50,
    display: 'inline-flex',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    verticalAlign: 'middle',
  },
  signOutButton: {
    border: '1px solid',
    borderRadius: theme.spacing(3),
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.custom.wallet.surfaceThree,
    },
    '& svg': {
      fill: 'none',
      color: theme.palette.custom.wallet.textSecondary,
    },
    textAlign: 'center',
    width: theme.spacing(14),
  },
  signOutIcon: {
    display: 'flex',
    verticalAlign: 'middle',
    width: theme.spacing(2),
    stroke: theme.palette.custom.wallet.textSecondary,
    strokeWidth: '1.6',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  signOutLabel: {
    display: 'inline-flex',
    verticalAlign: 'middle',
  },
  signOut: {
    display: 'flex',
    justifyContent: 'center',
  },
  signOutText: {
    display: 'flex',
    verticalAlign: 'middle',
    paddingTop: theme.spacing(0.8),
    fontWeight: 590,
    color: theme.palette.custom.wallet.textSecondary,
  },
}));

export const useStyles = () => styles();
