import { Link } from "@inertiajs/react"
import g from "/resources/images/HALALKU(V2).png"
import { useEffect, useState } from "react"
import { faShoppingCart, faBell, faUser, faUtensils, faStore, faBuilding, faBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ user }) => {

  const [walletAddress, setWalletAddress] = useState("")
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts"
          });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setConnected(true);
          }
        } catch (error) {
          console.error('Error checking connection:', error);
        }
      }
    };

    checkConnection(); // Check connection status on component mount

    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setConnected(true);
      } else {
        setWalletAddress("");
        setConnected(false);
      }
    });

    return () => {
      window.ethereum.removeAllListeners('accountsChanged');
    };
  }, []);

  async function requestAccount() {

    if (window.ethereum) {

      console.log('ada');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setWalletAddress(accounts[0]);
        sessionStorage.setItem('walletAddress', walletAddress);
        sessionStorage.setItem('connected', 'true');
        setConnected(true);
      } catch (error) {
        console.log('error')
      }

    } else {
      console.log('ga ada')
    }

  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      if (!connected) {
        await requestAccount();
      } else {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      }
    }
  }


  return (
    <div className="navbar bg-white sticky top-0 z-20">

      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white" href="/">
          <img src={g} />
        </a>
      </div>
      <div className="flex">
        <a className="btn btn-ghost normal-case text-xl bg-primary text-white" onClick={connectWallet}> {connected ? "Connected" : "Connect Wallet"}</a>
      </div>
      <div className="flex-none">

       <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://img1.pngdownload.id/20180714/ggq/kisspng-user-profile-computer-icons-login-clip-art-profile-picture-icon-5b49de2f1ef441.4301202215315676631268.jpg" />
              </div>
            </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {!user ? (
              <>
                <li><Link href={route("login")} as="button">Login</Link></li>
                <li><Link href={route("register")} as="button">Register</Link></li>
              </>
            ) : user.role === "Admin" ? (
              <>
                <li>
                  <Link href={route("admin")} className="justify-between">
                    Dashboard Admin
                  </Link>
                </li>
                {/* <li><Link href={route("profile.edit")} as="button" >Profile</Link></li> */}
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            ) : (
              <>
                {/* <li><Link href={route("profile.edit")} as="button" >Profile</Link></li> */}
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar