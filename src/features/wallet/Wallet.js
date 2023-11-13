import './wallet.css';

const Wallet = () => {
    return (
        <section className="wallet fixed-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h1>Your wallet: <span>&euro; 5.45</span></h1>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Wallet;