export default function Header() {
    return (
        <header>
            <div className="header__container">
                <div className="title">Awesome Prototypes in Shop</div>
                <div className="subtitle">
                    First mini project after studying React <br />
                    by Park youngjun<br />
                    git-address : <a href="https://github.com/qdw0719" style={{fontSize: "20px", color: "green", textDecoration: "none"}}>https://github.com/qdw0719</a>
                </div>
                <div className="btn__area">
                    <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
                        <button>Try ProtoPie Yourself</button>
                    </a>
                </div>
            </div>
        </header>
    );
}